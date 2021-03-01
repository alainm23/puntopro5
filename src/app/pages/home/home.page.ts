import { Component, OnInit, ViewChild, ElementRef,  } from '@angular/core';

// Ionic
import { MenuController, ActionSheetController, IonSearchbar, IonSlides, LoadingController, AlertController, NavController, ToastController, ModalController, Platform } from '@ionic/angular';

// Events
// import { Events } from '@ionic/angular';

// Geolocation
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';

// Keyboard
import { Keyboard } from '@ionic-native/keyboard/ngx';

// Camera
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';

// Import services
import { DatabaseService } from '../../services/database.service';
import { AuthService } from '../../services/auth.service';
import { StorageService } from '../../services/storage.service';
import { UtilsService } from '../../services/utils.service';

// AlgoliaSearch’
import * as algoliasearch from 'algoliasearch/dist/algoliasearch.js';

// Modasl
import { SearchLocationsPage } from '../../modals/search-locations/search-locations.page';
import { SearchSubcategoriesPage } from '../../modals/search-subcategories/search-subcategories.page';
import { ProfilePage } from '../../modals/profile/profile.page';
import { TutorialPage } from '../../modals/tutorial/tutorial.page';
import { ChooseQuoteEmergencyPage } from '../../modals/choose-quote-emergency/choose-quote-emergency.page';

// Animations
// import { myEnterAnimation } from '../../animations/enter';
// import { myLeaveAnimation } from '../../animations/leave';

import { trigger, state, style, animate, transition } from '@angular/animations';

// Google Maps
declare var google: any;
@Component({ 
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  animations: [
    trigger('animation-bottom', [
      transition(':enter',
        [style({ transform: 'translateY(100%)', opacity: 0 }),
        animate('154ms', style({ transform: 'translateY(0)', 'opacity': 1 }))]),
      transition(':leave',
        [style({ transform: 'translateY(0)', 'opacity': 1 }),
        animate('154ms', style({ transform: 'translateY(100%)', 'opacity': 0 }))])
    ]),
    trigger('animation-top', [
      transition(':enter',
        [style({ transform: 'translateY(-100%)', opacity: 0 }),
        animate('154ms', style({ transform: 'translateY(0)', 'opacity': 1 }))]),
      transition(':leave',
        [style({ transform: 'translateY(0)', 'opacity': 1 }),
        animate('154ms', style({ transform: 'translateY(-100%)', 'opacity': 0 }))])
    ])
  ]
})
export class HomePage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  @ViewChild('map') mapRef: ElementRef;
  @ViewChild('searchbar', {read: IonSearchbar}) searchbar: IonSearchbar;

  slideOpts = {
    effect: 'flip',
    zoom: false
  };

  map: any;
  directionsService: any = new google.maps.DirectionsService ();
  
  latitude_current: number = 0;
  longitude_current: number = 0;

  is_loading: boolean = false;

  request_data: any = {
    name: '',
    subcategory_id: '',
    id: '',
    service_name: '',
    address_name: '',
    address_reference: '',
    latitude: 0,
    longitude: 0,
    note: '',
    is_emergency: false,
    images: []
  };

  service_selected: any;

  button_01_color: string;
  button_02_color: string;
  button_03_color: string;
  button_04_color: string;

  number_02_text: string = "2";
  number_03_text: string = "2";
  number_04_text: string = "3";

  active_index: number = 0;
  
  subcategories_list: any [];
  subcategories_list_backup: any [];
  profesionals: any [];
  profesionals_backup: any [];

  search_text: string = "";
  filter_profesional_list: boolean = false;
  search_text_pros_node: string = "";
  watch_suscribe: any;
  footer_visible: boolean = false;
  max_images: number = 1;
  has_services: boolean = false;
  services: any [];
  service_description: string;

  visible_test: boolean = true;

  client: any;
  algolia_index: any;

  service_items: any [] = [];
  user_items: any [] = [];
  constructor(public auth: AuthService,
              private loadingController: LoadingController,
              private alertController: AlertController,
              private toastController: ToastController,
              private actionSheetController: ActionSheetController,
              private navCtrl: NavController,
              private platform: Platform,
              private geolocation: Geolocation,
              private locationAccuracy: LocationAccuracy,
              private androidPermissions: AndroidPermissions,
              private database: DatabaseService,
              private menu: MenuController,
              public keyboard: Keyboard,
              private storage: StorageService,
              private camera: Camera,
              private modalController: ModalController,
              // private events: Events,
              private utils: UtilsService) { }
  async ngOnInit() {
    this.client = algoliasearch ('LJVDKQLRMK', '51364679efd1a152fed7c6767335b363', { protocol: 'https:' });
    this.algolia_index = this.client.initIndex('PuntoPro');

    console.log ('algolia_index', this.algolia_index);

    this.storage.getValue ('visible_tutorial').then (val => {
      if (val) {
        this.navCtrl.navigateRoot ('tutorial');
      }
    });

    this.slides.lockSwipes (true);
    this.initAutocomplete ();
    this.menu.enable (true);

    this.button_01_color = "count-selected";
    this.button_02_color = "count";
    this.button_03_color = "count";
    this.button_04_color = "count";

    const unsubscribe = this.auth.authState ().subscribe ((user) => {
      console.log ('user', user);

      if (user) {
        // this.is_loading = false;
        
        if (this.platform.is ("cordova")) {
          this.checkGPSPermission ();
        } else {
          this.getLocationCoordinates ();
        }
      } else {
        this.navCtrl.navigateRoot ('presentation');
      }

      unsubscribe.unsubscribe ();
    });

    this.platform.backButton.subscribe (() => {
      this.slides.lockSwipes (false);
      this.slides.slidePrev ();
      this.slides.lockSwipes (true);
    });

    // this.events.subscribe ('showTutorial', (val) => { 
    //   this.navCtrl.navigateRoot ('tutorial');
    // });
  }

  slidePrev () {
    this.slides.getActiveIndex ().then (index => {
      console.log ('index', index);
      if (index === 0) {
        return;
      } else if (index === 1) {
        this.slides.lockSwipes (false);
        this.slides.slidePrev ();
        this.slides.lockSwipes (true);

        this.button_01_color = "count-selected";
        this.button_02_color = "count";
        this.button_03_color = "count";
        this.button_04_color = "count";

        this.has_services = false;
        this.number_02_text = '2';
        this.number_03_text = '2';
        this.number_04_text = '3';
      } else if (index === 2) {
        if (this.has_services) {
          this.slides.lockSwipes (false);
          this.slides.slidePrev ();
          this.slides.lockSwipes (true);

          this.button_01_color = "count";
          this.button_02_color = "count-selected";
          this.button_03_color = "count";
          this.button_04_color = "count";
        } else {
          this.slides.lockSwipes (false);
          this.slides.slideTo (0);
          this.slides.lockSwipes (true);
          
          this.button_01_color = "count-selected";
          this.button_02_color = "count";
          this.button_03_color = "count";
          this.button_04_color = "count";
        }
      } else if (index === 3) {
        this.slides.lockSwipes (false);
        this.slides.slidePrev ();
        this.slides.lockSwipes (true);

        this.button_01_color = "count";
        this.button_02_color = "count";
        this.button_03_color = "count-selected";
        this.button_04_color = "count";
      }
    });
  }

  change () {
    this.visible_test = !this.visible_test;
  }

  algolia_search (text: string) {
    if (text.length > 2) {
      this.algolia_index.search({
        query: text,
        attributesToRetrieve: ['primary_text', 'secondary_text', 'id', 'type', "avatar"]
      }).then((data: any)=>{
        //console.log ('algolia_search', data);
        //this.items = data.hits;
        this.service_items = [];
        this.user_items = [];
  
        if (data.hits.length > 0) {
          data.hits.forEach((item: any) => {
            if (item.type === 0) {
              this.service_items.push (item);
            } else if (item.type === 1) {
              this.user_items.push (item);
            } 
          });
        }
      });
    }
  }

  async initAutocomplete () {
    let autocomplete = new google.maps.places.Autocomplete (await this.searchbar.getInputElement());

    autocomplete.addListener('place_changed', () => {
      let place = autocomplete.getPlace ()  
      console.log ('Place', place);

      this.request_data.address_name = place.name;
      
      let location = new google.maps.LatLng (place.geometry.location.lat(), place.geometry.location.lng());
      this.map.setZoom (17);
      this.map.panTo (location);
    });
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
      this.latitude_current = resp.coords.latitude;
      this.longitude_current = resp.coords.longitude;

      this.initWatchPosition ();
      this.InitMap (resp.coords.latitude, resp.coords.longitude);
    }).catch((error) => {
      // this.is_loading = false;
      //this.checkGPSPermission ();
      console.log ('Error getting location' + error);
    });
  }

  ionSlideDidChange () {
    this.slides.getActiveIndex ().then (index => {
      this.active_index = index;
    });
  }

  deleteImage (img: string) {
    this.request_data.images.splice(this.request_data.images.indexOf(img), 1);
  }
  
  async InitMap (latitude: number, longitude: number) {
      const location = new google.maps.LatLng (latitude, longitude);

      const map_options = {
        center: location,
        zoom: 15,
        disableDefaultUI: true,
        streetViewControl: false,
        disableDoubleClickZoom: false,
        clickableIcons: false,
        scaleControl: true,
        /*
        styles: [
          {
              "featureType": "landscape.man_made",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#acd8d3"
                  },
                  {
                      "saturation": "0"
                  },
                  {
                      "lightness": "58"
                  }
              ]
          },
          {
              "featureType": "landscape.natural.landcover",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#acd8d3"
                  },
                  {
                      "saturation": "0"
                  }
              ]
          },
          {
              "featureType": "landscape.natural.terrain",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#acd8d3"
                  },
                  {
                      "saturation": "0"
                  }
              ]
          },
          {
              "featureType": "poi.attraction",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#acd8d3"
                  },
                  {
                      "saturation": "0"
                  }
              ]
          },
          {
              "featureType": "poi.attraction",
              "elementType": "labels.text",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "poi.business",
              "elementType": "labels.text.fill",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "poi.business",
              "elementType": "labels.text.stroke",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "poi.government",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#316e7a"
                  },
                  {
                      "saturation": "0"
                  },
                  {
                      "lightness": "19"
                  }
              ]
          },
          {
              "featureType": "poi.medical",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#acd8d3"
                  },
                  {
                      "saturation": "0"
                  },
                  {
                      "lightness": "0"
                  },
                  {
                      "gamma": "1.00"
                  }
              ]
          },
          {
              "featureType": "poi.medical",
              "elementType": "labels.text",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "poi.medical",
              "elementType": "labels.icon",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "poi.park",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#26b7c0"
                  },
                  {
                      "saturation": "0"
                  }
              ]
          },
          {
              "featureType": "poi.school",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#acd8d3"
                  },
                  {
                      "saturation": "0"
                  }
              ]
          },
          {
              "featureType": "poi.school",
              "elementType": "labels.text.fill",
              "stylers": [
                  {
                      "color": "#316e7a"
                  },
                  {
                      "saturation": "0"
                  }
              ]
          },
          {
              "featureType": "poi.sports_complex",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#acd8d3"
                  },
                  {
                      "saturation": "0"
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#ffffff"
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "color": "#acd8d3"
                  },
                  {
                      "saturation": "0"
                  }
              ]
          },
          {
              "featureType": "transit.station",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "transit.station",
              "elementType": "labels.text",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          }
        ],*/
        mapTypeId: 'roadmap'
      };

      this.map = new google.maps.Map (this.mapRef.nativeElement, map_options);

      if (this.map === undefined || this.map === null) {
        this.presentErrorMapAlert ();
      } else {
        // this.is_loading = false;
      }

      google.maps.event.addListener(this.map, 'idle', () => {
        let location = this.map.getCenter ();
          
        this.request_data.latitude = location.lat ();
        this.request_data.longitude = location.lng ();

        const request = {
          origin: location,
          destination: location,
          travelMode: google.maps.TravelMode.WALKING
        };

        this.directionsService.route(request, (result: any, status: any) => {
          if (status == google.maps.DirectionsStatus.OK) {
            console.log ('Result', result);
            console.log ('Resumen:', result.routes [0].summary);
            console.log ('Exacto:', result.routes [0].legs [0].start_address);
            
            //this.address_request.name = this.getAddressFormat (result.routes [0].legs [0].start_address);
            //this.request_data.address_name = result.routes [0].summary;
          }
        });
      });
  }

  async presentErrorMapAlert () {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.checkGPSPermission ();
          }
        }
      ]
    });

    await alert.present();
  }
  
  goCategories () {
    this.navCtrl.navigateForward ('categories');
  }

  goRate () {
    this.navCtrl.navigateForward ('rate');
  }

  initWatchPosition () {
    this.watch_suscribe = this.geolocation.watchPosition ().subscribe ((response: any) => {
      this.latitude_current = response.coords.latitude;
      this.longitude_current = response.coords.longitude;
    }, error => {
      console.log ('Get current location error', error);
    });
  }

  async openSearchLocations () {
    const modal = await this.modalController.create({
      component: SearchLocationsPage,
      componentProps: { latitude: this.latitude_current, longitude: this.longitude_current },
      mode: 'ios',
      cssClass: 'puntopro-modal',
      // enterAnimation: myEnterAnimation,
      // leaveAnimation: myLeaveAnimation
    });

    modal.onDidDismiss ().then ((response: any) => {
      if (response.role == 'location') {
        let location = new google.maps.LatLng (response.data.latitude, response.data.longitude);

        this.map.setZoom (17);
        this.map.panTo (location);

        this.request_data.address_name = response.data.address;
        this.request_data = response.data.latitude;
        this.request_data = response.data.longitude;
      }
    });

    return await modal.present();
  }

  goCurrentPosition () {
    let location = new google.maps.LatLng (this.latitude_current, this.longitude_current);

    this.map.setZoom (17);
    this.map.panTo (location);
  }

  async saveLocation () {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Nombre del lugar'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: async (data: any) => {
            const loading = await this.loadingController.create({
              message: 'Procesando Informacion'
            });

            await loading.present ();

            const user_uid: string = await this.storage.getValue ('user_uid');
            
            const request: any = {
              id: '',
              name: data.name,
              latitude: this.request_data.latitude,
              longitude: this.request_data.longitude,
            };

            this.database.addLocation (user_uid, request)
              .then (() => {
                loading.dismiss ();
                this.presentToast ('El lugar fue agregado con exito', 'success');
              }, error => {
                loading.dismiss ();
                this.presentToast ('Error de agregar lugar', 'danger');
                console.log ('Add location error', error);
              });
          }
        }
      ]
    });

    await alert.present();
  }

  async presentToast (message: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      mode: 'ios',
      position: 'top',
      color: color
    });

    toast.present();
  }

  getAddressFormat (text: string) {
    const peru = new RegExp(', Perú');
    const peru_2 = new RegExp(', Peru');
    const cusco_1 = new RegExp(', Cusco 08001');
    const cusco_2 = new RegExp(', Cusco 08002');
    const cusco_3 = new RegExp(', Cusco 08003');
    const cusco_4 = new RegExp(', Cusco 08004');
    const cusco_5 = new RegExp(', Cusco 08006');
    const cusco_6 = new RegExp(', Cusco 08007');
    const cusco_7 = new RegExp(', Cusco 08200');

    text = text.replace (peru, '');
    text = text.replace (peru_2, '');
    text = text.replace (cusco_1, '');
    text = text.replace (cusco_2, '');
    text = text.replace (cusco_3, '');
    text = text.replace (cusco_4, '');
    text = text.replace (cusco_5, '');
    text = text.replace (cusco_6, '');
    text = text.replace (cusco_7, '');

    return text; 
  }
  
  async createNotification (data: any, loading: any) {
    console.log (data);

    const message: any = {
      'app_id': '29f387b1-d474-45c7-abd8-dd1ed009f0b5',
      'headings': {
        'en': data.service_name,
        'es': data.service_name
      },
      'contents': { 
        'en': 'Una solicitud de urgencia fue creada',
        'es': 'Una solicitud de urgencia fue creada'
      },
      'filters': [
        { "field": "tag", "key": data.service_id, "relation": "exists" }
      ],
      'data': {
        'id': data.id
      }
    };

    this.utils.createNotification (message).subscribe ((response: any) => {
      loading.dismiss ();
      this.reset ();
      this.navCtrl.navigateForward ('request-view/' + data.id);
    }, error => {
      loading.dismiss ();
      this.reset ();
      this.navCtrl.navigateForward ('request-view/' + data.id);
    });
  }

  goPanelPro () {
    this.navCtrl.navigateRoot ('soypro-panel');
  }

  goSoyProPresentation () {
    this.navCtrl.navigateForward ('soypro-presentation');
  } 

  filterSubCategories (ev: any) {
    // Reset items back to all of the items
    //this.subcategories_list = this.subcategories_list_backup;

    // set val to the value of the searchbar
    const val = ev.target.value;

    if (val && val.trim () != '') {
      this.algolia_search (val);
      /*
      this.subcategories_list = this.subcategories_list.filter (item => {
        return item.name.toLowerCase().includes(val.toLowerCase()) ||
        item.keywords.toLowerCase().includes(val.toLowerCase());
      }); 

      if (val.substring (0, 3).toLowerCase () !== this.search_text_pros_node) {
        this.filter_profesional_list = false;
      }

      this.search_text_pros_node = val.substring (0, 3).toLowerCase ();

      if (this.filter_profesional_list === false) {
        if (val.length >= 3) {
          this.database.getProfesionalByName (val).subscribe ((response: any []) => {
            this.profesionals = response;
            this.profesionals_backup = response;
    
            if (response.length > 0) {
              this.filter_profesional_list = true;
            } 
            console.log ('profesionals', this.profesionals);
          });
        }
      } else {
        this.profesionals = this.profesionals_backup;
        
        this.profesionals = this.profesionals.filter ((item: any) => {
          return item.name.toLowerCase().includes(val.toLowerCase());
        });
      }
      */
    }
  }

  crear () {
    this.database.create1000pros ();
  }

  async goProfile (item: any) {
    const parms: any = {
      id: item.id,
      to_confirm: false
    };

    const modal = await this.modalController.create({
      component: ProfilePage,
      componentProps: parms,
      mode: 'ios',
      // enterAnimation: myEnterAnimation,
      // leaveAnimation: myLeaveAnimation
    });

    modal.onDidDismiss ().then ((response: any) => {
      if (response.role == 'response') {
        
      }
    });

    return await modal.present();
  }

  reset () {
    this.slides.lockSwipes (false);
    this.slides.slideTo (0);
    this.slides.lockSwipes (true);

    this.button_01_color = "count-selected";
    this.button_02_color = "count";
    this.button_03_color = "count";
    this.button_04_color = "count";


    this.number_02_text = "2";
    this.number_03_text = "3";
    this.number_04_text = "4";

    this.request_data.id = '';
    this.request_data.name = '';
    this.search_text = '';
    this.has_services = false;

    this.footer_visible = false;
  }

  async choosePlazo (item: any) {
    this.request_data.name = item.primary_text;
    this.request_data.subcategory_id = item.id;

    const loading = await this.loadingController.create({
      message: 'Procesando Informacion ...'
    });

    await loading.present ();

    this.database.getServicesSubCategory (item.id).subscribe (async (response: any []) =>{
      console.log ('services:', response);

      if (response.length > 1) {
        this.has_services = true;

        this.slides.lockSwipes (false);
        this.slides.slideNext ();
        this.slides.lockSwipes (true);

        this.button_01_color = "count";
        this.button_02_color = "count-selected";
        this.button_03_color = "count";
        this.button_04_color = "count";

        this.number_02_text = "2";
        this.number_03_text = "3";
        this.number_04_text = "4";

        this.footer_visible = true;

        this.services = response;
      } else {
        this.request_data.id = response [0].id;
        this.request_data.service_name = response [0].name;

        this.slides.lockSwipes (false);
        this.slides.slideTo (2);
        this.slides.lockSwipes (true);

        this.button_01_color = "count";
        this.button_02_color = "count";
        this.button_03_color = "count-selected";
        this.button_04_color = "count";

        this.number_03_text = "2";
        this.number_04_text = "3";
      }

      await loading.dismiss ();
    });
  }

  async subCategorySelected (item: any) {
    const modal = await this.modalController.create({
      component: ChooseQuoteEmergencyPage,
      mode: 'ios',
      cssClass: 'puntopro-modal',
      // enterAnimation: myEnterAnimation,
      // leaveAnimation: myLeaveAnimation
    });

    modal.onDidDismiss ().then ((response: any) => {
      if (response.role == 'response') {
        this.request_data.is_emergency = response.data;
        this.choosePlazo (item);
      }
    });

    return await modal.present();
  }

  async completeData () {
    if (this.has_services) {
      this.button_01_color = "count";
      this.button_02_color = "count";
      this.button_03_color = "count";
      this.button_04_color = "count-selected";
    } else {
      this.button_01_color = "count";
      this.button_02_color = "count";
      this.button_03_color = "count";
      this.button_04_color = "count-selected";
    }
    
    this.slides.lockSwipes (false);
    this.slides.slideNext ();
    this.slides.lockSwipes (true);

    this.footer_visible = true;
  }

  async goRequest () {
    const loading = await this.loadingController.create({
      message: 'Procesando Informacion ...'
    });

    await loading.present ();

    const user_data = JSON.parse (await this.storage.getObject ('user_data'));

    const request: any = {
      id: '',
      client_name: user_data.first_name + ' ' + user_data.last_name,
      client_avatar: user_data.avatar,
      client_id: user_data.id,
      service_name: this.request_data.service_name,
      service_id: this.request_data.id,
      subcategory_id: this.request_data.subcategory_id,
      address_name: this.request_data.address_name,
      latitude: this.request_data.latitude,
      longitude: this.request_data.longitude,
      note: this.request_data.note,
      is_emergency: this.request_data.is_emergency,
      state: 'created',
      date_added: new Date ().toISOString ()
    };

    let unsuscribe = this.database.wasEmergencyRequestsCreated (request.client_id, request.service_id)
      .subscribe ((e) => {
        /*
        if (e === undefined || e === null) {
          this.database.addEmergencyRequests (request).then ((response: any) => {
            this.createNotification (response, loading);
          }, error => {
            loading.dismiss ();
            console.log ('addEmergencyRequests', error);
          });
        } else {
          console.log ('Ya hay una solicitud con el mismo tipo xdxd');
          loading.dismiss ();
        }
        */
        
        this.database.addRequests (request).then ((response: any) => {
          this.createNotification (response, loading);
        }, error => {
          loading.dismiss ();
          console.log ('addEmergencyRequests', error);
        });
        
        unsuscribe.unsubscribe ();
      });
    console.log ('request_data', request);
  }

  async selectImageSource () {
    const actionSheet = await this.actionSheetController.create({
      header: 'Agrega una imagen',
      buttons: [{
        text: 'Tomar una foto',
        icon: 'camera',
        handler: () => {
          this.takePicture (this.camera.PictureSourceType.CAMERA);
        }
      }, {
        text: 'Seleccionar una foto',
        icon: 'images',
        handler: () => {
          this.takePicture (this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      }]
    });

    await actionSheet.present();
  }

  async takePicture (sourceType: PictureSourceType) {
    const options: CameraOptions = {
      quality: 80,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    }

    this.camera.getPicture(options).then((imageData) => {
      this.request_data.images.push ('data:image/jpeg;base64,' + imageData);
    }, (err) => {
      console.log ('Camera error', err);
    });
  }

  back () {
    this.slides.lockSwipes (false);
    this.slides.slideTo (0);
    this.slides.lockSwipes (true);

    this.button_01_color = "count-selected";
    this.button_02_color = "count";
    this.button_03_color = "count";
  }

  serviceChanged () {
    console.log (this.service_selected);

    this.request_data.service_name = this.service_selected.name;
    this.request_data.id = this.service_selected.id;

    this.service_description = this.service_selected.description;
  }

  selectAddress () {
    this.slides.lockSwipes (false);
    this.slides.slideNext ();
    this.slides.lockSwipes (true);

    
    this.button_01_color = "count";
    this.button_02_color = "count";
    this.button_03_color = "count-selected";
    this.button_04_color = "count";

    this.footer_visible = false;
  }
}
