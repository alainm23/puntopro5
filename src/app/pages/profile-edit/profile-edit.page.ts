import { Component, OnInit } from '@angular/core';

// Ionic
import { ActionSheetController, LoadingController, AlertController, ModalController, NavController, Platform } from '@ionic/angular';

// Forms
import { FormGroup , FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

// Services
import { DatabaseService } from '../../services/database.service';
import { StorageService } from '../../services/storage.service';
import { AuthService } from '../../services/auth.service';
import { UtilsService } from '../../services/utils.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

// Camera
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';

// Animations 
// import { myEnterAnimation } from '../../animations/enter';
// import { myLeaveAnimation } from '../../animations/leave'; 

// Modals Pages
import { ProfilePage } from '../../modals/profile/profile.page';
import { GalleriesViewPage } from '../../modals/galleries-view/galleries-view.page';
@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.page.html',
  styleUrls: ['./profile-edit.page.scss'],
})
export class ProfileEditPage implements OnInit {
  id_slide_01_loading: boolean = false;
  is_slide_02_loading: boolean = false;
  is_slide_03_loading: boolean = false;

  user_data: any;
  user_id: string;
  services_images: any [];
  services_data: any [];
  
  user_form: FormGroup;
  pro_form: FormGroup;
  main_form: FormGroup;

  avatar: string;
  avatar_change: boolean = false;
  segment_value: string = 'user';
  doc_type: string = "number";
  doc_number_minlength: number = 8;
  doc_number_maxlength: number = 8;
  constructor(private camera: Camera,
              private actionSheetController: ActionSheetController,
              private utils: UtilsService,
              private auth: AuthService,
              private af_storage: AngularFireStorage, 
              private alertController: AlertController,
              private loadingController: LoadingController,
              private storage: StorageService,
              private database: DatabaseService,
              private navCtrl: NavController,
              private modalCtrl: ModalController,
              private platform: Platform) { }

  async ngOnInit() {
    this.services_images = new Array ();
    this.services_data = new Array ();

    this.user_form = new FormGroup ({
      email: new FormControl ('', [Validators.required]),
      first_name: new FormControl ('', Validators.required),
      last_name: new FormControl (''),
      avatar: new FormControl ('', [Validators.required])
    });

    this.pro_form = new FormGroup ({
      ruc: new FormControl ('', [Validators.required, CustomValidators.number, Validators.minLength (11)]),
      doc_type: new FormControl ('', [Validators.required]),
      doc_number: new FormControl ('', [Validators.required, CustomValidators.number, Validators.minLength (8)]),
      address: new FormControl ('', [Validators.required]),
      birth_date: new FormControl ('', [Validators.required]),
      gender: new FormControl ('', [Validators.required]),
      profile_description: new FormControl ('', [Validators.required, Validators.maxLength (300)])
    });

    this.main_form = this.user_form;
    
    const loading = await this.loadingController.create({
      message: 'Procesando Informacion ...'
    });

    await loading.present ();

    this.storage.getValue ('user_uid').then (async (id: string) => {
      this.user_id = id;

      await this.database.getUserById (id).subscribe ((user: any) => {
        this.avatar = user.avatar;
        this.user_data = user;

        this.user_form.patchValue (user);

        loading.dismiss ();
        this.id_slide_01_loading = true;
      }, error => {
        loading.dismiss ();
        console.log ('Get user data error', error);
      });
    }, error => {
      loading.dismiss ();
      console.log ('Get user_uid error', error);
    });
  }

  async confirmCangeEmail () {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      buttons: [{
        text: 'Cambiar',
        role: 'destructive',
        handler: () => {
          this.changeEmailAlert ();
        }
      }, {
        text: 'Cancelar',
        handler: () => {
          console.log('Share clicked');
        }
      }]
    });

    await actionSheet.present();
  }

  async confirmCangePassword () {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      buttons: [{
        text: 'Cambiar',
        role: 'destructive',
        handler: () => {
          this.resetPassword (this.user_data.email);
        }
      }, {
        text: 'Cancelar',
        handler: () => {
          console.log('Share clicked');
        }
      }]
    });
    
    await actionSheet.present();
  }

  async changeEmailAlert () {
    const value = this.user_form.value;

    const alert = await this.alertController.create({
      header: 'Cambio de correo',
      message: 'Ingrese la contraseña de <b>' + value.email + '</b> para proseguir',
      inputs: [
        {
          name: 'password',
          type: 'password',
          placeholder: '******'
        }
      ],
      buttons: [
        {
          text: 'Olvide la contraseña',
          cssClass: 'danger',
          handler: () => {
            this.resetPassword (value.email);
          }
        }, 
        {
          text: 'Ok',
          handler: (response) => {
            console.log('Confirm Ok', response);
            this.updateEmail (value.email, response.password)
          }
        }
      ]
    });

    await alert.present();
  }

  async updateEmail (email: string, password: string) {
    const loading = await this.loadingController.create({
      message: 'Procesando Informacion ...'
    });

    await loading.present ();

    this.auth.signInWithEmailAndPassword (email, password)
      .then (async (credential: any) => {
        console.log (credential);
        // Aqui esta el error coño
        loading.dismiss ();
        
        const alert = await this.alertController.create({
          header: 'Cambiar correo',
          message: 'Ingrese su nueva direccion electronica',
          inputs: [
            {
              name: 'new_email',
              type: 'email',
              placeholder: 'nuevo@correo.com'
            }
          ],
          buttons: [
            {
              text: 'Cancelar',
               role: 'cancel'
            }, 
            {
              text: 'Cambiar',
              handler: async (response: any) => {
                const loading = await this.loadingController.create({
                  message: 'Procesando Informacion ...'
                });

                await loading.present ();

                credential.user.updateEmail (response.new_email)
                  .then (async () => {
                    await loading.dismiss ();
                    
                    console.log ("El usuario fue actualizado");
                    this.database.updateEmailUser (this.user_id, response.new_email);

                    let alert = await this.alertController.create({
                      header: 'Todo correcto',
                      message: 'Correo electronico actualizado',
                      buttons: ['OK']
                    });

                    await alert.present();
                  })
                  .catch (async (error: any) => {
                    await loading.dismiss ();

                    let message: string = "";

                    if (error.code == 'auth/network-request-failed') {
                      message = 'No tienes acceso a internet, no se puede proceder.'
                    } else if (error.code == 'auth/user-not-found') {
                      message = 'No encontramos a nigun usuario con ese correo';
                    } else {
                      message = error.message;
                    }

                    let alert = await this.alertController.create({
                      header: 'Opppps!',
                      message: message,
                      buttons: ['OK']
                    });

                    await alert.present();
                  });
              }
            }
          ]
        });

        await alert.present ();
       //console.log ('response', response);
      })
      .catch (async (error: any) => {
        loading.dismiss ();
        let message: string = "";

        if (error.code == 'auth/network-request-failed') {
          message = 'No tienes acceso a internet, no se puede proceder.'
        } else if (error.code == 'auth/user-not-found') {
          message = 'No encontramos a nigun usuario con ese correo';
        } else if (error.code == 'auth/wrong-password') {
          message = 'La contraseña no es válida o no tiene una contraseña.';
        } else if (error.code == 'auth/too-many-requests') {
          message = 'Hemos bloqueado todas las solicitudes de este dispositivo debido a una actividad inusual. Inténtalo más tarde.';
        } else {
          message = error.message;
        }

        if (error.code === 'auth/wrong-password') {
          let alert = await this.alertController.create({
            header: 'Opppps!',
            message: message,
            buttons: [
              {
                text: 'Cancel',
                role: 'cancel',
                cssClass: 'secondary',
                handler: () => {
                  console.log('Confirm Cancel');
                }
              }, {
                text: 'Restablecer contraseña',
                handler: () => {
                  this.resetPassword (email);
                }
              }
            ]
          });

          await alert.present();
        } else {
          let alert = await this.alertController.create({
            header: 'Opppps!',
            message: message,
            buttons: ['OK']
          });

          await alert.present ();
        }
      });
  }

  async resetPassword (email: string) {
    const loading = await this.loadingController.create({
      message: 'Procesando Informacion ...'
    });

    await loading.present ();

    this.auth.sendPasswordResetEmail (email)
      .then (async (response: any) => {
        await loading.dismiss ();

        let alert = await this.alertController.create({
          header: 'Usuario encontrado',
          message: 'Acabamos de enviar un email a <strong>' + email + '</strong>, incluyendo los pasos para resetear la contraseña',
          buttons: ['OK'] 
        });

        await alert.present ();   
      }, async (error: any) => {
        await loading.dismiss ();

        let message: string = "";

        if (error.code == 'auth/network-request-failed') {
          message = 'No tienes acceso a internet, no se puede proceder.'
        } else if (error.code == 'auth/user-not-found') {
          message = 'No encontramos a nigun usuario con ese correo';
        } else {
          message = error.message;
        }

        let alert = await this.alertController.create({
          header: 'Opppps!',
          message: message,
          buttons: ['OK']
        });

        await alert.present();
      });
  }

  async selectImageSource (type: string, item: any = null) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Seleccione una fuente',
      buttons: [{
        text: 'Tomar una foto',
        icon: 'camera',
        handler: () => {
          this.takePicture (this.camera.PictureSourceType.CAMERA, type, item);
        }
      }, {
        text: 'Seleccionar una foto',
        icon: 'images',
        handler: () => {
          this.takePicture (this.camera.PictureSourceType.PHOTOLIBRARY, type, item);
        }
      }]
    });

    await actionSheet.present();
  }

  async takePicture (sourceType: PictureSourceType, type: string, item: any = null) {
    let _cameraOptions: any;

    if (type === 'profile') {
      _cameraOptions = {
        quality: 95,
        sourceType: sourceType,
        saveToPhotoAlbum: false,
        correctOrientation: true,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        targetWidth: 512,
        targetHeight: 512,
        allowEdit : true,
      }
    } else {
      _cameraOptions = {
        quality: 95,
        sourceType: sourceType,
        saveToPhotoAlbum: false,
        correctOrientation: true,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
      }
    }

    let options: CameraOptions = _cameraOptions;

    const loading = await this.loadingController.create({
      message: 'Procesando Informacion ...'
    });

    await loading.present ();

    this.camera.getPicture(options).then((imageData) => {
      if (type === 'profile') {
        if (this.user_data.is_pro) {
          this.checkFace (imageData, loading);
        } else {
          this.avatar = 'data:image/jpeg;base64,' + imageData;
          this.avatar_change = true;
          loading.dismiss ();
        }
      } else {
        console.log ('Item', item);
        const image = 'data:image/jpeg;base64,' + imageData;
        this.upload_image_service (this.user_id, item.id, image, loading);
      }
    }, (err) => {
      loading.dismiss ();
      console.log ('Camera error', err);
    });
  }

  checkFace (imageData: string, loading: any) {
      this.utils.getFaceDetection (imageData).subscribe (async (response: any) => {
        loading.dismiss ();
        var result = response.responses [0];
        
        console.log ('Face to: ', Object.keys (result).length);

        if (Object.keys (result).length === 0) {
          this.user_form.controls ['avatar'].setValue (null);

          const alert = await this.alertController.create({
            header: 'Confirm!',
            message: 'Message <strong>text</strong>!!!',
            buttons: [
              {
                text: 'Cancel',
                cssClass: 'secondary',
                handler: (blah) => {
                  console.log('Confirm Cancel: blah');
                }
              }, {
                text: 'Volver a intentarlo',
                handler: () => {
                  this.selectImageSource ('profile');
                }
              }
            ]
          });

          await alert.present ();
        } else {
          this.avatar = 'data:image/jpeg;base64,' + imageData;
          this.avatar_change = true;
        }
      }, error => {
        loading.dismiss ();
        console.log ('GVC error', error);
      });
  }

  async onSubmit () {
    const loading = await this.loadingController.create({
      message: 'Procesando Informacion ...'
    });

    await loading.present ();

    if (this.segment_value === 'user') {
      const value = this.user_form.value;

      const request: any = {
        first_name: value.first_name,
        last_name: value.last_name,
        avatar: '',
      };

      if (this.avatar_change) {
        this.upload_avatar  (this.user_id, this.avatar, request, loading);
      } else {
        request.avatar = value.avatar;
        this.database.updateUser (this.user_id, request)
          .then (async () => {
            loading.dismiss ();
          })
          .catch (() => {
            loading.dismiss ();
          });
      }
    } else {
      const value = this.pro_form.value;

      this.database.updatePro (this.user_id, value)
        .then (() => {
          loading.dismiss ();
        }) 
        .catch (() => {
          loading.dismiss ();
        })     
    }
  }

  async segmentChanged (event: any) {
    if (event === 'user') {
      this.main_form = this.user_form;
    } else if (event === 'pro') {
      this.main_form = this.pro_form;

      if (this.user_data.is_pro === true) {
        if (this.is_slide_02_loading === false) {
          const loading = await this.loadingController.create({
            message: 'Procesando Informacion ...'
          });

          await loading.present ();

          this.database.getProById (this.user_id).subscribe ((pro: any) => {
            loading.dismiss ();
            this.pro_form.patchValue (pro);
            this.docTypeChange (pro.doc_type);

            this.is_slide_02_loading = true;    
          }, error => {
            loading.dismiss ();
            console.log ('Get getProById data error', error);
          });
        }
      }
    } else {
        if (this.user_data.is_pro === true) {
          if (this.is_slide_03_loading === false) {
            const loading = await this.loadingController.create({
              message: 'Procesando Informacion ...'
            });

            await loading.present ();

            this.database.getProServicesGalleries (this.user_id).subscribe ((response: any []) => {
              loading.dismiss ();
              this.services_data = response;
              console.log ('response', response);
              this.is_slide_03_loading = true;
            });
        }
      }
    }

    console.log (this.main_form);
  }

  upload_avatar (user_uid: string, avatar: string, request: any, loading: any) {
    // Upload avatar to Storage
    const filePath = user_uid + '/avatar.jpg';
    const storageRef = this.af_storage.ref (filePath);
    const uploadTask = storageRef.putString (avatar, 'data_url');

    uploadTask.snapshotChanges ().pipe (
      finalize(() => {
        storageRef.getDownloadURL ().subscribe (async DownloadURL => {
          request.avatar = DownloadURL;
          this.database.updateUser (this.user_id, request)
          .then (async () => {
            loading.dismiss ();
          })
          .catch (() => {
            loading.dismiss ();
          });          
        });
      })
    ).subscribe ();
  }

  upload_image_service (user_uid: string, service_id: string, image: string, loading: any) {
    const image_id = this.database.createId ();

    const filePath = user_uid + '/'+ service_id + '/' + image_id + '.jpg';
    const storageRef = this.af_storage.ref (filePath);
    const uploadTask = storageRef.putString (image, 'data_url');

    uploadTask.snapshotChanges ().pipe (
      finalize(async () => {
        await this.database.addImageGalleryProfile (user_uid, service_id, image, image_id, filePath)
          .then (() => {
            loading.dismiss ();
          }, error => {
            loading.dismiss ();
            console.log ("Error upload_image_service, ", error);
          });
      })
    ).subscribe ();
  }

  async previewPro () {
    const parms: any = {
      profile_id: this.user_id,
      to_confirm: false
    };

    const modal = await this.modalCtrl.create({
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

  docTypeChange (value: any) {
    if (value === 'DNI') {
      this.pro_form.controls ['doc_number'].setValidators ([Validators.required, CustomValidators.number, Validators.minLength (8), Validators.maxLength (8)]);
      this.doc_type = "number";
      this.doc_number_minlength = 8;
      this.doc_number_maxlength = 8;
    } else {
      this.pro_form.controls ['doc_number'].setValidators ([Validators.required, Validators.minLength (8), Validators.maxLength (12)]);
      this.doc_type = "text";
      this.doc_number_minlength = 8;
      this.doc_number_maxlength = 12;
    }
  }

  async viewImage (service: any, image_list: any, image: any) {
    const parms: any = {
      image_list: image_list,
      image: image,
      service: service,
      type: 'edit',
      is_async: true,
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
}