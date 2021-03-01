import { Component, OnInit, ViewChild } from '@angular/core';

// Ionic
import { IonSlides, NavController, Platform, LoadingController, AlertController } from '@ionic/angular';

// Services
import { StorageService } from '../../services/storage.service';
import { DatabaseService } from '../../services/database.service';

// Animations
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-soypro-presentation',
  templateUrl: './soypro-presentation.page.html',
  styleUrls: ['./soypro-presentation.page.scss'],
  animations: [
    trigger('animation-top', [
      transition(':enter',
        [style({ transform: 'translateY(-12%)', opacity: 0 }),
        animate('154ms', style({ transform: 'translateY(0)', 'opacity': 1 }))]),
      transition(':leave',
        [style({ transform: 'translateY(0)', 'opacity': 1 }),
        animate('154ms', style({ transform: 'translateY(-12%)', 'opacity': 0 }))])
    ])
  ]
})
export class SoyproPresentationPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides; 
  slideOpts = {
    effect: 'flip',
    zoom: false
  };
  
  index: number = 0;

  b_1: boolean = false;
  b_2: boolean = false;
  b_3: boolean = false;
  b_4: boolean = false;
  b_5: boolean = false;
  b_6: boolean = false;
  constructor(private navCtrl: NavController, 
              private platform: Platform,
              private loadingController: LoadingController,
              private storage: StorageService,
              private database: DatabaseService,
              private alertController: AlertController) { }

  ngOnInit() {
    this.show (1);
    this.storage.setObject ('phoneNumber_valid', null);

    if (this.platform.is ('cordova')) {
      (<any>window).AccountKitPlugin.logout();
    }
  }

  goHome () {
    this.navCtrl.navigateBack ('home');
  }

  goPrevSlide () {
    this.slides.slidePrev ();
  }

  goNextSlide () {
    this.slides.slideNext ();
  }

  goBack () {
    this.index--;
    this.slides.slideTo (this.index);

    if (this.index < 0) {
      this.navCtrl.navigateBack ("home");
    }
  }

  ionSlideDidChange () {
    this.slides.getActiveIndex ().then (index => {
      this.index = index;
    })
  }

  show (b: number) {
    if (b === 1) {
      this.b_1 = !this.b_1;

      this.b_2 = false;
      this.b_3 = false;
      this.b_4 = false;
      this.b_5 = false;
      this.b_6 = false;
    } else if (b === 2) {
      this.b_2 = !this.b_2;

      this.b_1 = false;
      this.b_3 = false;
      this.b_4 = false;
      this.b_5 = false;
      this.b_6 = false;
    } else if (b === 3) {
      this.b_3 = !this.b_3;

      this.b_1 = false;
      this.b_2 = false;
      this.b_4 = false;
      this.b_5 = false;
      this.b_6 = false;
    } else if (b === 4) {
      this.b_4 = !this.b_4;

      this.b_1 = false;
      this.b_2 = false;
      this.b_3 = false;
      this.b_5 = false;
      this.b_6 = false;
    } else if (b === 5) {
      this.b_5 = !this.b_5;

      this.b_1 = false;
      this.b_2 = false;
      this.b_3 = false;
      this.b_4 = false;
      this.b_6 = false;
    } else if (b === 6) {
      this.b_6 = !this.b_6;

      this.b_1 = false;
      this.b_2 = false;
      this.b_3 = false;
      this.b_4 = false;
      this.b_5 = false;
    }
  }

  checkDisplaySize () {
    return this.platform.height () > 640;
  }

  async checkPhoneNumberIsValid () {
    this.storage.getObject ('phoneNumber_valid').then (async (response: any) => {
      const val = JSON.parse (response);

      if (val === undefined || val === null) {
        this.openAccountKit ();
      } else {
        const alert = await this.alertController.create({
          header: 'Numero de telefono ya validado',
          message: 'El numero de telefono <b>' + val.phoneNumber + '</b> ya se encuentra validado, desea usar este mismo numero de telefono o cambiarlo.',
          buttons: [
            {
              text: 'Cambiar numero',
              cssClass: 'secondary',
              handler: (blah) => {
                this.openAccountKit ();
              }
            }, {
              text: 'Usar el mismo numero',
              handler: () => {
                this.navCtrl.navigateForward ('soypro-set-personal-data');
              }
            }
          ]
        });

        await alert.present();
      }
    });

    //this.navCtrl.navigateForward ('soypro-data-required');
  }

  async openAccountKit () {
    const loading = await this.loadingController.create({
      message: 'Procesando Informacion ...'
    });

    await loading.present ();
    
    const valid: any = {
      phoneNumber: '+51994701995',
      valid: true
    }

    this.storage.setObject ('phone_number_valid', valid);
    this.navCtrl.navigateForward ('soypro-set-personal-data');

    loading.dismiss ();
    /*
    (<any>window).AccountKitPlugin.loginWithPhoneNumber({
      useAccessToken: true,
      defaultCountryCode: 'PE',
      facebookNotificationsEnabled: false
      }, (data) => {
        (<any>window).AccountKitPlugin.getAccount(
          (accountData) => {
            (<any>window).AccountKitPlugin.logout();
            const unsuscribe = this.database.isPhoneNumberValid (accountData.phoneNumber).subscribe (async (response) => {
              unsuscribe.unsubscribe ();
              loading.dismiss ();

              if (response) {
                const alert = await this.alertController.create({
                  header: 'Oppssss!!',
                  message: 'El numero de celular <b>' + accountData.phoneNumber + '</b> ya se encuentra en nuestra base de datos como registrado, verifique que ingreso correctamente la información',
                  buttons: [
                    {
                      text: 'Cancelar',
                      role: 'cancel',
                      handler: (blah) => {
                        
                      }
                    }, {
                      text: 'Cambiar de numero',
                      handler: () => {
                        this.openAccountKit ();
                      }
                    }
                  ]
                });

                await alert.present();
              } else {
                const valid: any = {
                  phoneNumber: accountData.phoneNumber,
                  valid: true
                }

                this.storage.setObject ('phone_number_valid', valid);
                this.navCtrl.navigateForward ('soypro-data-required');
              }
            });
          }, (accountError) => {
            loading.dismiss ();
            console.log('getAccount error', accountError);
          }
        );
      }, (error) => {
        console.log('AccountKitPlugin error', error);
        
      });
      */
  }
}
