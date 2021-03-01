import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

// Ionic
import { ModalController, IonContent, ActionSheetController, AlertController, PopoverController } from '@ionic/angular';

// Forms
import { FormGroup , FormControl, Validators } from '@angular/forms';

// Camera 
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';

// Call Number
import { CallNumber } from '@ionic-native/call-number/ngx';

// Services
import { DatabaseService } from '../../services/database.service';
import { StorageService } from '../../services/storage.service';

// Animations 
// import { myEnterAnimation } from '../../animations/enter';
// import { myLeaveAnimation } from '../../animations/leave'; 

// Modals
import { GalleriesViewPage } from '../../modals/galleries-view/galleries-view.page';
import { ChatPopoverComponent } from '../../components/chat-popover/chat-popover.component';
import { QualifyProPage } from '../../modals/qualify-pro/qualify-pro.page';

// Moment
import * as moment from 'moment';  
@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;
  @Input () type: string;
  @Input () sender: string;
  @Input () receiver: string;
  @Input () _chat_id: string;

  profile: any = {
    fullname: ''
  };
  form: FormGroup
  image: string = "";
  is_loading: boolean = true;
  chat_id: string;
  chats: any [];
  user_id: string;
  chat_exists: boolean = false;

  is_profile_loading: boolean = true;
  is_chats_loading: boolean = true;
  constructor(private database: DatabaseService,
              private camera: Camera,
              private callNumber: CallNumber,
              public alertController: AlertController,
              private actionSheetController: ActionSheetController,
              private storage: StorageService,
              // private events: Events,
              public popoverController: PopoverController,
              private modalCtrl: ModalController) { }

  ionViewDidEnter () {
    if (this.type === 'pro') {
      this.database.getChatIdByPro (this.sender, this.receiver).subscribe ((response: any) => {
        this.chat_id = response.chat_id;
        this.chat_exists = true;

        this.database.getUserById (this.receiver).subscribe ((response: any) => {
          this.profile = response;
          this.profile.fullname = response.first_name + ' ' + response.last_name;

          this.is_profile_loading = false;

          console.log (response);
        }, error => {
          console.log ("getProById error", error);
        });

        this.database.getChats (this.chat_id).subscribe ((chats: any) => {
          this.chats = chats;
          this.scrollToBottom ();

          this.is_chats_loading = false;
        });
      });
    } else {
      this.database.getProById (this.receiver).subscribe ((response: any) => {
        this.profile = response;
        console.log (response);
        this.is_profile_loading = false;
      }, error => {
        console.log ("getUserById error", error);
      });

      this.storage.getValue ('user_uid').then (id => {
        this.user_id = id;

        this.database.getChatId (id, this.receiver).subscribe ((chat_id: any) => {
          if (chat_id === null || chat_id === undefined) {
            this.chat_id = this.database.createId ();
            this.chat_exists = false;
          } else {
            this.chat_id = chat_id.chat_id;
            this.chat_exists = true;

            this.database.getChats (this.chat_id).subscribe ((chats: any) => {
              this.chats = chats;
               this.scrollToBottom ();

               this.is_chats_loading = false;
            });
          }
        })
      });
    }

    // this.events.subscribe ('on-chat-popover', (value: number)=> {
    //   if (value === 1) {
    //     if (this.type === 'user') {
    //       this.goQualifyProPage (this.sender, this._chat_id, this.receiver);
    //     }
    //   } 
    // });
  }

  ngOnInit () {
    this.form = new FormGroup ({
      message: new FormControl ('', Validators.required),
      image: new FormControl ('')
    });
  }

  closeModal () {    
    this.modalCtrl.dismiss (null, 'close');
  }

  callPhoneNumber (phone_number: string) {
    this.callNumber.callNumber(phone_number, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

  onSubmit (type: string = "text") {
    const value = this.form.value;
    let message: string = '';
    message = value.message.replace(/\s/g,' ');  

    this.storage.getObject ('user_data').then (response => {
      const user_data = JSON.parse (response);

      const request: any = {
        id: this.database.createId (),
        message: message,
        request: '',
        is_request: false,
        user_avatar: user_data.avatar,
        user_name: user_data.first_name,
        user_id: this.sender,
        date: new Date ().toISOString (),
        timestamp: '',
        image: value.image
      };

      if (type === 'text') {
        if (message !== '') {
          this.form.controls ['message'].setValue ('');
          this.database.sendMessage (request, this.chat_id, this.sender, this.receiver, this.chat_exists)
            .then (() => { 
              this.scrollToBottom ();
            })
            .catch ((error) => {
              console.log ('sendMessage error', error);
            });
        }
      } else {
        this.form.controls ['message'].setValue ('');
        this.form.controls ['image'].setValue ('');
        this.database.sendMessage (request, this.chat_id, this.sender, this.receiver, this.chat_exists)
          .then (() => { 
            this.scrollToBottom ();
          })
          .catch ((error) => {
            console.log ('sendMessage error', error);
          });
      }
    });
  }

  getRelativeDateTime (date: string) {
    return moment(date).format("LT");
  }

  scrollToBottom () {
    setTimeout(() => {
      if (this.content.scrollToBottom) {
        this.content.scrollToBottom();
      }
    }, 400)
  }

  async selectImageSource () {
    const actionSheet = await this.actionSheetController.create({
      header: 'Seleccione una fuente',
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
      targetWidth: 480,
      targetHeight: 720,
    }

    this.camera.getPicture(options).then((imageData) => {
      this.presentAlertConfirm ('data:image/jpeg;base64,' + imageData);
    }, (err) => {
      console.log ('Camera error', err);
    });
  }

  async presentAlertConfirm (image: string) {
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
            this.form.controls ['image'].setValue (image);
            this.onSubmit ('image');
          }
        }
      ]
    });

    await alert.present();
  }

  async viewImage (image: string) {
    let img: any [] = [];
    img.push (image);

    const parms: any = {
      image_list: img,
      type: 'view',
      is_async: false,
    };

    const modal = await this.modalCtrl.create({
      component: GalleriesViewPage,
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

  async presentPopover (ev: Event) {
    const popover = await this.popoverController.create({
      component: ChatPopoverComponent, 
      componentProps: {
        type: this.type
      },
      event: ev,
      translucent: true,
      mode: 'md'
    });

    popover.onDidDismiss ().then (async (response: any) => {
      console.log (response);
    });

    return await popover.present();
  }

  async goQualifyProPage (pro_id: string, request_id: string, user_id: string) {    
    const modal = await this.modalCtrl.create({
      component: QualifyProPage,
      componentProps: {
        pro_id: '',
        request_id: '',
        user_id: ''
      },
      mode: 'ios',
      // enterAnimation: myEnterAnimation,
      // leaveAnimation: myLeaveAnimation
    });

    return await modal.present();
  }
}
