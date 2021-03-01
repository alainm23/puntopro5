import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

// Param
import { ActivatedRoute } from '@angular/router'; 

// Ionic
import { AlertController, ModalController, LoadingController, Platform } from '@ionic/angular';

// Services
import { DatabaseService } from '../../services/database.service';
import { StorageService } from '../../services/storage.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { AuthService } from '../../services/auth.service';

// Animations
// import { myEnterAnimation } from '../../animations/enter';
// import { myLeaveAnimation } from '../../animations/leave'; 

// Modals
import { SendQuotePage } from '../../modals/send-quote/send-quote.page'; 

// Geolocation
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';

// Moment and Google
import * as moment from 'moment'; 
declare var google: any; 
@Component({
  selector: 'app-request-pro-view',
  templateUrl: './request-pro-view.page.html',
  styleUrls: ['./request-pro-view.page.scss'],
})
export class RequestProViewPage implements OnInit {
  @ViewChild('map') mapRef: ElementRef;
  map: any;

  is_loading: boolean = true;
  is_quote_sent: boolean = false;
  request_id: string;
  request: any;
  images: any [] = [];

  post_data: any = {
    id: '',
    pro_fullname: '',
    pro_avatar: '',
    pro_id: '',
    latitude: 0,
    longitude: 0
  };

  loading: any;
  constructor(private database: DatabaseService,
              private route: ActivatedRoute,
              private modalController: ModalController,
              private loadingController: LoadingController,
              public alertController: AlertController,
              private platform: Platform,
              private af_storage: AngularFireStorage,
              public auth: AuthService,
              private geolocation: Geolocation,
              private locationAccuracy: LocationAccuracy,
              private androidPermissions: AndroidPermissions,  
              private storage: StorageService) { }

  ngOnInit() {
    this.request_id = this.route.snapshot.paramMap.get ('id');

    this.storage.getValue ('user_uid').then (user_id => {
      this.database.getRequestById (this.request_id).subscribe ((response: any) => {
        this.request = response;
        console.log (response);

        /*
        if (response.images.length > 0) {
          response.images.forEach((item: string) => {
            let filename = 'requests/' + response.id + '/' + item + '.jpg';
            let ref = this.af_storage.ref (filename);

            this.images.push (ref.getDownloadURL ());
          });   
        }
        
        
        */
        this.InitMap (response.latitude, response.longitude);
        this.is_loading = false;
      });

      this.database.isQuoteSent (user_id, this.request_id).subscribe (response => {
        this.is_quote_sent = !(response === undefined || response === null);
        console.log ('isQuoteSent', this.is_quote_sent);
      });
    });
  }

  async InitMap (latitude: number, longitude: number) {
    let location = new google.maps.LatLng (latitude, longitude);

    const options = {
      center: location,
      zoom: 15,
      disableDefaultUI: true,
      streetViewControl: false,
      disableDoubleClickZoom: false,
      clickableIcons: false,
      scaleControl: true,
      mapTypeId: 'roadmap',
    }

    this.map = new google.maps.Map (this.mapRef.nativeElement, options);

    let marker = new google.maps.Marker({
      position: location,
      map: this.map,
      title: 'Direccion',
      animation: google.maps.Animation.DROP
    });
  }

  getFormatDate (date: string) {
    return moment(date).format('LLL');
  }

  async postulate () {
    if (this.request.is_emergency === true) {
      const alert = await this.alertController.create({
        header: 'Confirm!',
        message: 'Message <strong>text</strong>!!!',
        buttons: [
          {
            text: 'No',
            handler: () => {
              console.log('Confirm Okay');
            }
          }, {
            text: 'Si',
            handler: async () => {
              this.loading = await this.loadingController.create({
                message: 'Procesando Informacion ...'
              });
      
              await this.loading.present ();

              this.storage.getValue ('user_data').then ((response_02: string) => {
                const pro_data = JSON.parse (response_02);
    
                this.post_data.id = pro_data.id;
                this.post_data.pro_fullname = pro_data.first_name + ' ' + pro_data.last_name;
                this.post_data.pro_avatar = pro_data.avatar;
                this.post_data.pro_id = pro_data.id;

                if (this.platform.is ("cordova")) {
                  this.checkGPSPermission ();
                } else {
                  this.getLocationCoordinates ();
                }
              });
            }
          }
        ]
      });
  
      await alert.present();
    } else {
      const modal = await this.modalController.create({
        component: SendQuotePage,
        mode: 'ios',
        cssClass: 'puntopro-modal',
        // enterAnimation: myEnterAnimation,
        // leaveAnimation: myLeaveAnimation
      });
  
      modal.onDidDismiss ().then (async (response: any) => {
        if (response.role == 'response') {
          this.loading = await this.loadingController.create({
            message: 'Procesando Informacion ...'
          });
  
          await this.loading.present ();

          this.storage.getValue ('user_data').then ((response_02: string) => {
            const pro_data = JSON.parse (response_02);
              
            this.post_data.id = pro_data.id;
            this.post_data.pro_fullname = pro_data.first_name + ' ' + pro_data.last_name;
            this.post_data.pro_avatar = pro_data.avatar;
            this.post_data.pro_id = pro_data.id;
            this.post_data.max_price = response.data.max_price;
            this.post_data.min_price = response.data.min_price;
            this.post_data.message = response.data.message;

            if (this.platform.is ("cordova")) {
              this.checkGPSPermission ();
            } else {
              this.getLocationCoordinates ();
            }
          });
        }
      });
  
      await modal.present();
    }
  }

  async checkGPSPermission () {
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
      .then ((result: any) => {
        if (result.hasPermission) {
          //alert ("Tiene permiso, preguntamos para prender el GPS");
          //If having permission show 'Turn On GPS' dialogue
          this.askToTurnOnGPS ();
        } else {
 
          //If not having permission ask for permission
          //alert ("No tiene permiso, preguntamos para ternerlo");
          this.requestGPSPermission ();
        }
      },
      err => {
        alert (err);
      }
    );
  }

  askToTurnOnGPS () {
    this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY)
      .then(() => {
        //alert ("Todo ok, get Location Coordinates");

        // When GPS Turned ON call method to get Accurate location coordinates
        this.getLocationCoordinates()
      }, error => {
        //alert ("No quiere prender este hdp");
        //this.presentAlertConfirm ();
        //this.presentAlertConfirm ();
        console.log ('Error requesting location permissions ' + JSON.stringify(error))
      });
  }

  async requestGPSPermission () {
    this.locationAccuracy.canRequest().then((canRequest: boolean) => {
      if (canRequest) {
        console.log("4");
      } else {
        //Show 'GPS Permission Request' dialogue
        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
          .then(() => {
            // call method to turn on GPS
            this.askToTurnOnGPS ();
          }, error => {
            //Show alert if user click on 'No Thanks'
            console.log ('requestPermission Error requesting location permissions ' + error)
          }
        );
      }
    });
  }

  async getLocationCoordinates () {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.post_data.latitude = resp.coords.latitude;
      this.post_data.longitude = resp.coords.longitude;

      console.log ('this.post_data', this.post_data);

      this.database.addPostulate (this.post_data.pro_id, this.request_id, this.post_data)
        .then ((response: any) => {
          this.loading.dismiss ();
        })
        .catch (error => {
          this.loading.dismiss ();
          console.log ('addPostulate', error)
        });
    }).catch((error) => {
      this.loading.dismiss ();
      //this.checkGPSPermission ();
      console.log ('Error getting location' + error);
    });
  }
}
