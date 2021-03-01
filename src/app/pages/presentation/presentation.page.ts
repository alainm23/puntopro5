import { Component, OnInit, ViewChild } from '@angular/core';

//Ionic
import { IonSlides, NavController, AlertController, LoadingController } from '@ionic/angular';

// Geolocation
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';

// Services
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.page.html',
  styleUrls: ['./presentation.page.scss'],
})
export class PresentationPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  
  slideOpts = {
    effect: 'flip',
    zoom: false
  };
  
  hasPermission: boolean = false; 
  slide_03_button_text: string = "Permitir";
  constructor(private geolocation: Geolocation,
              private loadingController: LoadingController,    
              private navCtrl: NavController,
              private locationAccuracy: LocationAccuracy,
              public alertController: AlertController,
              private storage: StorageService,
              private androidPermissions: AndroidPermissions) { }

  ngOnInit() { 
  }

  goNextSlide () {
    this.slides.slideNext ();
  }

  ionSlideDidChange () {
    this.slides.getActiveIndex ().then (index => {
      if (index >= 2 && this.hasPermission === false) {
        this.slides.lockSwipeToNext (true);
      } else {
        this.slides.lockSwipeToNext (false);
      }
    });
  }

  goPrevSlide () {
    this.slides.slidePrev (); 
  }

  async checkGPSPermission () {
    if (this.hasPermission === true) {
      this.goNextSlide ();
    } else {
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
  }

  askToTurnOnGPS () {
    this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY)
      .then(() => {
        //alert ("Todo ok, get Location Coordinates");

        // When GPS Turned ON call method to get Accurate location coordinates
        this.getLocationCoordinates ();
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
    this.slide_03_button_text = "Adelante";
    this.hasPermission = true;
    this.slides.lockSwipeToNext (false);
    this.slides.slideNext ();
    /*
    const loading = await this.loadingController.create({
      message: 'Procesando Informacion ...'
    });

    await loading.present ();

    this.geolocation.getCurrentPosition().then((resp) => {
      loading.dismiss ();

      
    }).catch((error) => {
      //this.checkGPSPermission ();
      console.log ('Error getting location' + error);
    });
    */
  }

  goLogin () {
    this.storage.setValue ('visible_tutorial', true);
    this.navCtrl.navigateForward ('login');
  }

  async presentAlertConfirm () {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Okay',
          handler: () => {
            this.checkGPSPermission ();
          }
        }
      ]
    });

    await alert.present();
  }

  omitir () {
    this.slide_03_button_text = "Adelante";
    this.hasPermission = true;
    this.slides.lockSwipeToNext (false);
    this.slides.slideNext ();
  }
}
