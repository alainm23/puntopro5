import { Component, OnInit } from '@angular/core';

// Ionic
import { ActionSheetController, LoadingController, AlertController, NavController, Platform } from '@ionic/angular';

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

@Component({
  selector: 'app-soypro-data-required',
  templateUrl: './soypro-data-required.page.html',
  styleUrls: ['./soypro-data-required.page.scss'],
})
export class SoyproDataRequiredPage implements OnInit {
  form: FormGroup;
  doc_number_minlength: number = 8;
  doc_number_maxlength: number = 8;
  avatar: string;
  need_photo: boolean = false;

  doc_type: string = "number";
  constructor(private camera: Camera,
              private actionSheetController: ActionSheetController,
              private utils: UtilsService,
              private alertController: AlertController,
              private loadingController: LoadingController,
              private storage: StorageService,
              private database: DatabaseService,
              private navCtrl: NavController,
              private platform: Platform) { }

  async ngOnInit() {
    this.form = new FormGroup ({
      avatar: new FormControl (''),
      ruc: new FormControl ('', [Validators.required, CustomValidators.number, Validators.minLength (11)]),
      doc_type: new FormControl ('DNI', [Validators.required]),
      doc_number: new FormControl ('', [Validators.required, CustomValidators.number, Validators.minLength (8)]),
      birth_date: new FormControl ('', Validators.required),
      address: new FormControl ('', Validators.required),
      gender: new FormControl ('', Validators.required),
      profile_description: new FormControl ('', [Validators.required, Validators.maxLength (300)])
    });

    const loading = await this.loadingController.create({
      message: 'Procesando Informacion ...'
    });

    await loading.present ();

    this.storage.getValue ('user_uid').then (id => {
      const unsuscribe = this.database.getUser (id).subscribe ((user: any) => {
        unsuscribe.unsubscribe ();
        this.avatar = user.avatar;

        this.checkFace (user.avatar, 'url', loading);
      }, error => {
        loading.dismiss ();
        console.log ('Get user data error', error);
      });
    }, error => {
      loading.dismiss ();
      console.log ('Get user_uid error', error);
    });
  }

  docTypeChange (value: any) {
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
  }

  async onSubmit () {
    const loading = await this.loadingController.create({
      message: 'Procesando Informacion ...'
    });

    await loading.present ();

    const value = this.form.value;

    this.storage.getObject ('phone_number_valid').then (async response => {
      const phone_number = JSON.parse (response);
      const user_data: any = JSON.parse (await this.storage.getObject ('user_data'));

      const soypro_data: any = {
        id: user_data.id,
        avatar: '',
        fullname: user_data.first_name + ' ' + user_data.last_name,
        profile_description: value.profile_description,
        phone_number: phone_number.phoneNumber,
        address: value.address,
        birth_date: value.birth_date,
        gender: value.gender,
        level_studies: '',
        latitude: 0,
        longitude: 0,
        doc_type: value.doc_type,
        doc_number: value.doc_number,
        ruc: value.ruc,
        join_date: new Date ().toISOString (),
        current_plan: '',
        plan_detail: '',
        plan_join_date: '',
        plan_until: '',
        is_verified: false,
        is_available: false,
        verified_date: '',
        services_number: 0
      };
      
      this.storage.setObject ("soypro_data", soypro_data);
      this.storage.setValue ("soypro_avatar", value.avatar);

      this.navCtrl.navigateForward ('soypro-select-category');
      loading.dismiss ();
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
     this.checkFace (imageData, 'image', loading);
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
}
