import { Component, OnInit, Input } from '@angular/core';

// Social Sharing
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

// Ionic
import { ModalController, AlertController, ToastController, LoadingController } from '@ionic/angular';

// Import services
import { DatabaseService } from '../../services/database.service';
import { StorageService } from '../../services/storage.service';

// Call Number
import { CallNumber } from '@ionic-native/call-number/ngx';

// Animations
// import { myEnterAnimation } from '../../animations/enter';
// import { myLeaveAnimation } from '../../animations/leave'; 

// Modal Page
import { RequestProPage } from '../../modals/request-pro/request-pro.page';
import { ChatPage } from '../../modals/chat/chat.page';
import { GalleriesViewPage } from '../../modals/galleries-view/galleries-view.page';
// Moment
import * as moment from 'moment';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  @Input () id: string;
  @Input () profile_id: string;
  @Input () to_confirm: boolean;
  
  profile_data: any;
  profile_services: any [];
  comments: any [];
  is_loading: boolean = true;
  is_found: boolean;
  is_requested: boolean = false;

  unsubscribe_01: any;
  unsubscribe_02: any;
  unsubscribe_03: any;
  unsubscribe_04: any;

  star_icon: string = "heart-empty";

  user_uid: string;

  profile: any;
  pro_data

  // Test
  photo_1 = "https://placebeard.it/700x500";
  photo_2 = "https://placebeard.it/500x360";
  photo_3 = "https://placebeard.it/420x640";
  photo_4 = "https://placebeard.it/500x700";
  photo_5 = "https://placebeard.it/700x1240";
  constructor(private modalCtrl: ModalController,
              private database: DatabaseService,
              private callNumber: CallNumber,
              public toastController: ToastController,
              private loadingController: LoadingController,
              private socialSharing: SocialSharing,
              private alertController: AlertController,
              private storage: StorageService) { }

  async ngOnInit() {
    console.log ("ID", this.id);
    this.storage.getValue ('user_uid').then (user_uid => {
      this.user_uid = user_uid;

      this.unsubscribe_01 = this.database.getProById (this.id).subscribe (async (response_01: any) => {
        console.log (response_01)
        this.pro_data = response_01;
        
        if (this.to_confirm) {
          console.log ("User", user_uid);
          console.log ("Profile", this.profile_id);
          // Traer la informacion defrente con el id que nos id del perfil
          this.database.getProProfileById (this.id, this.profile_id).subscribe (data => {
            console.log ('data', data);
            this.profile = data;
          });
        } else {
          this.unsubscribe_02 = await this.database.get_profiles_by_pro (this.id).subscribe (async (response_02: any []) => {
            console.log (response_02);
              
            if (response_02.length > 1) {
              let inputs: any [] = [];
    
              response_02.forEach ((item: any) => {
                let input = {
                  name: item.name,
                  type: 'radio',
                  label: item.name,
                  value: item
                }
    
                inputs.push (input);
              });
              const alert = await this.alertController.create({
                header: 'Seleccione un perfil profesional',
                message: 'Este usuario tiene mas de dos perfiles profesional, por favor seleccione cual desea ver',
                mode: 'ios',
                backdropDismiss: false,
                inputs: inputs,
                buttons: [
                  {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                      console.log('Confirm Cancel');
                    }
                  }, {
                    text: 'Ok',
                    handler: (data) => {
                      console.log('Confirm Ok', data);
                      this.profile = data;
                    }
                  }
                ]
              });
  
              await alert.present();
            } else {
              this.profile = response_02 [0];
            }
          });
        }
      
        this.unsubscribe_03 = await this.database.isFavorite (this.user_uid, this.id).subscribe ((response_03: any) => {
          if (response_03 === null  || response_03 === undefined) {
            this.star_icon = 'heart-empty';
          } else {
            this.star_icon = 'heart';
          }
  
          this.is_loading = false;
        });

        this.is_loading = false;
      });
    });
  }

  changeFavorite () {
    if (this.star_icon === 'heart-empty') {
      this.database.add_Favorite (this.user_uid, this.id)
        .then (() => {
          this.star_icon = 'heart';
          this.presentToast ('Agregado como favorito');
        })
        .catch (error => {
          console.log (error);
        });
    } else {
      this.database.delete_Favorite (this.user_uid, this.id)
        .then (() => {
          this.star_icon = 'heart-empty';
          this.presentToast ('Eliminado de favoritos');
        })
        .catch (error => {
          console.log (error);
        });
    }
  }

  async presentToast (message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'top',
      mode: 'ios'
    });

    toast.present();
  }

  shareProfile () {
    const url = 'https://puntopro.pe/?type=profile?id=' + this.id;
    const mensaje = "Conectate con " + this.pro_data.fullname + " en PuntoPro " + url;
    this.socialSharing.share (mensaje);
  }

  async confirm () {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            //this.unsubscribe_all ();
            this.modalCtrl.dismiss (null, 'response');
          }
        }
      ]
    });

    await alert.present();
  }

  closeModal () {
    this.unsubscribe_all ();
    this.modalCtrl.dismiss (null, 'close');
  }

  unsubscribe_all () {
    if (this.unsubscribe_01 !== undefined || this.unsubscribe_01 !== null) {
      this.unsubscribe_01.unsubscribe ();
    }

    if (this.unsubscribe_02 !== undefined || this.unsubscribe_02 !== null) {
      this.unsubscribe_02.unsubscribe ();
    }

    if (this.unsubscribe_03 !== undefined || this.unsubscribe_03 !== null) {
      this.unsubscribe_03.unsubscribe ();
    }

    if (this.unsubscribe_04 !== undefined || this.unsubscribe_04 !== null) {
      this.unsubscribe_04.unsubscribe ();
    }
  }

  getRelativeDateTime (date: string) {
    return moment(date, "").fromNow();
  }

  /*
  

  getFormatDateTime (date: string) {
    return moment(date).format('LL');
  }

  callPhoneNumber (phone_number: string) {
    this.callNumber.callNumber(phone_number, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

  

  async seeDetail (item: any) {
    const alert = await this.alertController.create({
      header: item.service_name,
      subHeader: 'Cobra entre ' + item.max_price + ' y ' + item.min_price + ' soles por ' + item.type_job + '.',
      message: item.description,
      buttons: ['OK']
    });

    await alert.present();
  }
  
  

  async connectPro () {
    this.storage.getValue ('user_uid').then (async (user_id: string) => {
      const parms: any = {
        type: 'user',
        sender: user_id,
        receiver: this.profile_id,
        _chat_id: ''
      };
            
      const modal = await this.modalCtrl.create({
        component: ChatPage,
        componentProps: parms,
        mode: 'ios',
        enterAnimation: myEnterAnimation,
        leaveAnimation: myLeaveAnimation
      });

      return await modal.present();
    });
  }

  

  getAverage (item: any) {
    let p = Math.round((item.attention_rating + item.price_rating + item.quality_rating) / 3);
    
    let data = [];

    for(var i = 0; i < p; i++) {
      data.push (0);
    }

    return data;
  }

  async viewAvatar (avatar: string) {
    let img: any [] = [];
    img.push (avatar);

    const parms: any = {
      image_list: img,
      type: 'view',
      is_async: false,
    };

    const modal = await this.modalCtrl.create({
      component: GalleriesViewPage,
      componentProps: parms,
      mode: 'ios',
      enterAnimation: myEnterAnimation,
      leaveAnimation: myLeaveAnimation
    });

    modal.onDidDismiss ().then ((response: any) => {
      if (response.role == 'response') {
        
      }
    });

    return await modal.present();
  }
  */
}
