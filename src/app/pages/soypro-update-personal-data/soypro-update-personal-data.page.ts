import { Component, OnInit } from '@angular/core';

// Ionic
import { ActionSheetController, ToastController, LoadingController, AlertController, NavController, Platform } from '@ionic/angular';

// Forms 
import { FormGroup , FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

// Camera
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';

// Services
import { UtilsService } from '../../services/utils.service';
import { StorageService } from '../../services/storage.service';
import { DatabaseService } from '../../services/database.service';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';

import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-soypro-update-personal-data',
  templateUrl: './soypro-update-personal-data.page.html',
  styleUrls: ['./soypro-update-personal-data.page.scss'],
})
export class SoyproUpdatePersonalDataPage implements OnInit {
  user_uid: string;
  user_data: any;
  
  avatar: string;
  avatar_old: string;

  form: FormGroup;
  need_photo: boolean = false;
  constructor(private camera: Camera,
              private actionSheetController: ActionSheetController,
              private utils: UtilsService,
              private alertController: AlertController,
              private loadingController: LoadingController,
              private storage: StorageService,
              private database: DatabaseService,
              private toastController: ToastController,
              private navCtrl: NavController,
              private af_storage: AngularFireStorage,
              private platform: Platform) { }

  async ngOnInit() {
    this.form = new FormGroup ({
      first_name: new FormControl ('', [Validators.required]),
      last_name: new FormControl (''),
      avatar: new FormControl ('', [Validators.required]),
      doc_type: new FormControl ('DNI', [Validators.required]),
      doc_number: new FormControl ('', [Validators.required, CustomValidators.number, Validators.minLength (8)]),
      birth_date: new FormControl ('', Validators.required),
      gender: new FormControl ('', Validators.required)
    });

    const loading = await this.loadingController.create({
      message: 'Procesando Informacion ...'
    });

    await loading.present ();

    this.storage.getValue ('user_uid').then (id => {
      this.user_uid = id;

      this.database.getUser (id).subscribe ((user: any) => {
        this.user_data = user;
        this.form.patchValue (user);
        this.avatar = user.avatar;
        this.avatar_old = user.avatar;

        loading.dismiss ();
      }, error => {
        loading.dismiss ();
        console.log ('Get user data error', error);
      });
    }, error => {
      loading.dismiss ();
      console.log ('Get user_uid error', error);
    });
  }

  async selectImageSource () {
    const actionSheet = await this.actionSheetController.create({
      header: 'Imagen de perfil',
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

    const loading = await this.loadingController.create({
      message: 'Procesando Informacion ...'
    });

    await loading.present ();

    this.camera.getPicture(options).then((imageData) => {
      if (this.user_data.is_pro === true) {
        this.checkFace (imageData, 'image', loading);
      } else {
        this.avatar = 'data:image/jpeg;base64,' + imageData;
      }
    }, (err) => {
      loading.dismiss ();
      console.log ('Camera error', err);
    });
  }

  checkFace (imageData: string, type: string, loading: any) {
    if (type === 'image') {
      this.utils.getFaceDetection (imageData).subscribe (async (response: any) => {
        loading.dismiss ();
        var result = response.responses [0];
        
        console.log ('Face to: ', Object.keys (result).length);

        if (Object.keys (result).length === 0) {
          this.need_photo = true;
          this.form.controls ['avatar'].setValue (null);

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
                  this.selectImageSource ();
                }
              }
            ]
          });

          await alert.present();
        } else {
          this.need_photo = false;
          this.avatar = 'data:image/jpeg;base64,' + imageData;
          this.form.controls ['avatar'].setValue (this.avatar);
        }
      }, error => {
        loading.dismiss ();
        console.log ('GVC error', error);
      });
    } else {
      this.utils.getFaceDetectionFromURL (imageData).subscribe (async (response: any) => {
        loading.dismiss ();
        var result = response.responses [0];
        
        console.log ('Face to: ', Object.keys (result).length);

        if (Object.keys (result).length === 0) {
          this.need_photo = true;
          this.form.controls ['avatar'].setValue (null);
        } else {
          this.need_photo = false;
          this.getBase64ImageFromURL(imageData).subscribe(base64data => {
            console.log ('base64data', base64data)
            this.form.controls ['avatar'].setValue ('data:image/jpg;base64,' + base64data);
          });
        }
      }, error => {
        loading.dismiss ();
        console.log ('GVC error', error);
      });
    }
  }

  getBase64ImageFromURL(url: string) {
    return Observable.create((observer: any) => {
      // create an image object
      let img = new Image();
      img.crossOrigin = 'Anonymous';
      img.src = url;
      if (!img.complete) {
        // This will call another method that will create image from url
        img.onload = () => {
          observer.next(this.getBase64Image(img));
          observer.complete();
        };
        img.onerror = (err) => {
           observer.error(err);
        };
      } else {
        observer.next(this.getBase64Image(img));
        observer.complete();
      }
    });
  }

  getBase64Image(img: HTMLImageElement) {
    // We create a HTML canvas object that will create a 2d image
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    // This will draw image    
    ctx.drawImage(img, 0, 0);
    // Convert the drawn image to Data URL
    var dataURL = canvas.toDataURL("image/png");
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  }

  docTypeChange (value: any) {
    /*
    if (value === 'DNI') {
      this.form.controls ['doc_number'].setValidators ([Validators.required, CustomValidators.number, Validators.minLength (8), Validators.maxLength (8)]);
      this.doc_type = "number";
      this.doc_number_minlength = 8;
      this.doc_number_maxlength = 8;
    } else {
      this.form.controls ['doc_number'].setValidators ([Validators.required, Validators.minLength (8), Validators.maxLength (12)]);
      this.doc_type = "text";
      this.doc_number_minlength = 8;
      this.doc_number_maxlength = 12;
    }
    */
  }

  async submit () {
    const loading = await this.loadingController.create({
      message: 'Procesando Informacion ...'
    });

    await loading.present ();

    const value = this.form.value;

    if (this.avatar_old === this.avatar) {
      this.database.updateUser (this.user_uid, value)
        .then (() => {
          this.presentToast ('La información se actualizó correctamente.');
          loading.dismiss ();
          this.goback ();
        }).catch (error => {
          console.log ('updateUser', error);
          loading.dismiss ();
        }); 
    } else {
      const filePath = this.user_uid + '/avatar.jpg';
      const storageRef = this.af_storage.ref (filePath);
      const uploadTask = storageRef.putString (value.avatar, 'data_url');

      uploadTask.snapshotChanges ().pipe (
        finalize(() => {
          storageRef.getDownloadURL ().subscribe (async (avatar_url: any) => {
            value.avatar = avatar_url;

            this.database.updateUser (this.user_uid, value)
              .then (() => {
                this.presentToast ('La información se actualizó correctamente.')
                loading.dismiss ();
                this.goback ();
              }).catch (error => {
                console.log ('updateUser', error);
                loading.dismiss ();
              });  
          });
        })
      ).subscribe ();
    }
  }

  goback () {
    this.navCtrl.navigateBack ('soypro-update-data');
  }

  async presentToast (message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'top'
    });

    toast.present();
  }
}
