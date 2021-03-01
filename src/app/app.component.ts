import { Component } from '@angular/core';
 
// Ionic
import { Platform, AlertController, NavController, LoadingController, ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

// Services
import { AuthService } from './services/auth.service';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { DatabaseService }from './services/database.service';
import { StorageService } from './services/storage.service';

//Deeplinks
import { Deeplinks } from '@ionic-native/deeplinks/ngx';

// Pages
import { ProfilePage } from './modals/profile/profile.page';

// Moment
import * as moment from 'moment';  

// Events
// import { Events } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
}) 
export class AppComponent {
  user_data: any;
  authState: any;
  e_items: any [];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private oneSignal: OneSignal,
    private alertController: AlertController,
    public auth: AuthService,
    private deeplinks: Deeplinks,
    private navCtrl: NavController,
    private loadingController: LoadingController,
    private database: DatabaseService,
    private storage: StorageService,
    private modalCtrl: ModalController,
    // private events: Events
  ) {
    this.initializeApp();
  }

  initializeApp() {  
    this.platform.ready().then(() => {
      this.deeplinks.route({ '/': {}, '/web': { 'web': true }}).subscribe (async (match: any) => {
        const type: string = match.$args.type;
        const id: string = match.$args.id;

        const loading = await this.loadingController.create({
          message: 'Procesando Informacion ...'
        });

        if (type === 'profile') {
          this.goProfile (id, loading);
        } else {
          this.navCtrl.navigateForward ('request-pro-view/' + id)
            .then (() => {
              loading.dismiss ();
            })
            .catch ((error) => {
              loading.dismiss ();
              console.log ('error');
            });
        }
      }, nomatch => {
        console.error('Got a deeplink that didn\'t match', nomatch);
      });
      
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.initNotifications ();

      if (this.platform.is('android')) {
        this.statusBar.overlaysWebView(false);
        this.statusBar.backgroundColorByHexString('#000000');
      }

      moment.locale('es');
      /*
      this.auth.authState ().subscribe (user => {
        if (user) {
          this.database.getUser (user.uid).subscribe (response => {
            this.user_data = response;
          });

          this.database.getAllEmergencyRequest (user.uid).subscribe ((response: any []) => {
            console.log (response);
            this.e_items = response;
          });
        }
      })
      */
    });
  }

  async goProfile (id: any, loading: any) {
    const modal = await this.modalCtrl.create({
      component: ProfilePage,
      componentProps: { 'profile_id': id },
      mode: 'ios',
      // enterAnimation: myEnterAnimation,
      // leaveAnimation: myLeaveAnimation
    });

    /*
    modal.onDidDismiss ().then ((response: any) => {
      if (response.role == 'location') {
        
      }
    });
    */ 

    await loading.dismiss ();
    return await modal.present();
  }

  initNotifications () {
    if (this.platform.is ('cordova')) {
      this.oneSignal.startInit('29f387b1-d474-45c7-abd8-dd1ed009f0b5', '75992481757');
      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);

      this.oneSignal.handleNotificationReceived ().subscribe((response: any) => {
        // do something when notification is received
        console.log ('handleNotificationReceived', response);
      });

      this.oneSignal.handleNotificationOpened ().subscribe((response: any) => {
        // do something when a notification is opened
        console.log ('handleNotificationOpened', response);
      });

      this.oneSignal.endInit();
      
      this.auth.authState ().subscribe (user => {
        this.oneSignal.getIds ().then (oS => {
          this.storage.setValue ("token_id", oS.userId)

          if (user) {
            this.database.updateToken (user.uid, oS.userId);
          }
        });
      });

      this.oneSignal.getTags ().then (data => {
        console.log (data);
      });

      this.oneSignal.sendTag ("Usuarios", "true");
    }
  } 

  async signOut () {
    const alert = await this.alertController.create({
      header: 'Cerrar sesión',
      message: 'Esta seguro que desea cerrar la sesión en este dispositivo',
      buttons: [
        {
          text: 'No',
          role: 'cancel'
        }, {
          text: 'Si',
          handler: () => {
            this.auth.signOut ()
              .then (() => {
                this.navCtrl.navigateRoot ('login');
                this.storage.setObject ("user_data", null);
                this.storage.setValue ("user_uid", null);
                this.storage.setValue ("phoneNumber_valid", null);
              }, error => {
                console.log ("Sign Out error", error);
              });
          }
        }
      ]
    });

    await alert.present();
  }

  goSoyProPresentation () {
    this.navCtrl.navigateForward ('soypro-presentation');
  }

  goFavorites () {
    this.navCtrl.navigateForward ('pro-favorites');
  }

  goRequestHistory () {
    this.navCtrl.navigateForward ('request-history');
  }

  goMessagesPage () {
    this.navCtrl.navigateForward ('messages/user');
  }

  goProfileEdit () {
    this.navCtrl.navigateForward ('soypro-update-personal-data');
  }

  goEmergencyRequest () {
    this.navCtrl.navigateForward ('emergency-request-list');
  }

  goHome () {
    this.navCtrl.navigateRoot ('home');
  }

  goLogin () {
    this.navCtrl.navigateRoot ('login');
  }

  showTutorial () {
    // this.events.publish ('showTutorial', true);
  }
}