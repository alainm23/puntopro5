import { Component, OnInit } from '@angular/core';

// Ionic
import { ActionSheetController, LoadingController, AlertController, NavController, Platform } from '@ionic/angular';

// Services
import { UtilsService } from '../../services/utils.service';
import { StorageService } from '../../services/storage.service';
import { DatabaseService } from '../../services/database.service';

// Forms 
import { FormGroup , FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

// Camera
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-soypro-set-pro-data',
  templateUrl: './soypro-set-pro-data.page.html',
  styleUrls: ['./soypro-set-pro-data.page.scss'],
})
export class SoyproSetProDataPage implements OnInit {
  user: any = {
    fullname: '',
    avatar: ''
  }

  image: string = '';

  form: FormGroup;

  hours: any [] = [];
  places: any [] = [];
  pagos: any [] = [];
  constructor(private storage: StorageService,
              public alertController: AlertController,
              private database: DatabaseService,
              private actionSheetController: ActionSheetController,
              private camera: Camera,
              private loadingController: LoadingController,
              private navCtrl: NavController) { }

  ngOnInit() {
    this.hours.push ({
      id:  Math.random(),
      days: '',
      open: '',
      close: ''
    });

    this.places.push ({
      id:  Math.random(),
      zona: 'Cusco metropolitana',
      des: 'Centro, Wanchaq, San Sebastián, Santiago, Ttio, San Blas',
    });

    this.pagos.push ({
      id:  Math.random(),
      tipo: "02"
    });

    this.form = new FormGroup ({
      razon_social: new FormControl ('', [Validators.required]),
      ruc: new FormControl ('', [Validators.required]),
      address: new FormControl ('', [Validators.required]),
      business_mail: new FormControl (''),
      institutional_grade: new FormControl (''),
      degree: new FormControl (''),
    });

    this.storage.getObject ('pro_user_data').then (async response => {
      this.user.fullname = JSON.parse (response).first_name + ' ' + JSON.parse (response).last_name,
      this.user.avatar = JSON.parse (response).avatar;
    });
  }

  goback () {
    this.navCtrl.navigateBack ('soypro-set-personal-data');
  }

  addHours () {
    this.hours.push ({
      id:  Math.random(),
      days: '',
      open: '',
      close: ''
    });
  }

  removeHour (item: any) {
    for( var i = 0; i < this.hours.length; i++){ 
      if ( this.hours[i].id === item.id) {
        this.hours.splice(i, 1); 
      }
    }
  }

  removeZone (item: any) {
    for( var i = 0; i < this.places.length; i++){ 
      if ( this.places[i].id === item.id) {
        this.places.splice(i, 1); 
      }
    }
  }

  removePago (item: any) {
    for( var i = 0; i < this.pagos.length; i++){ 
      if ( this.pagos[i].id === item.id) {
        this.pagos.splice(i, 1); 
      }
    }
  }

  async addZone () {
    const alert = await this.alertController.create({
      header: 'Agrege una zona',
      inputs: [
        {
          name: 'zona',
          type: 'text',
          placeholder: 'Zona'
        },
        {
          name: 'des',
          type: 'text',
          placeholder: 'Detalle'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Agregar',
          handler: (data) => {
            if (data.zona) {
              this.places.push ({
                id:  Math.random(),
                zona: data.zona,
                des: data.des
              });
            }
          }
        }
      ]
    });

    await alert.present();
  }

  addMPago () {
    this.pagos.push ({
      id:  Math.random(),
      tipo: "02"
    });
  }

  async submit () {
    const loading = await this.loadingController.create({
      message: 'Procesando Informacion ...'
    });

    await loading.present ();

    const value = this.form.value;

    value.work_schedules = this.hours;
    value.work_areas = this.places;
    value.payment_methods = this.pagos;

    console.log (value);

    await this.storage.setObject ("pro_data", value); 
    await this.storage.setObject ("service_image", this.image);

    this.navCtrl.navigateForward ('soypro-select-category');

    loading.dismiss ();
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
      mediaType: this.camera.MediaType.PICTURE
    }

    const loading = await this.loadingController.create({
      message: 'Procesando Informacion ...'
    });

    await loading.present ();

    this.camera.getPicture(options).then((imageData) => {
      this.image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      loading.dismiss ();
      console.log ('Camera error', err);
    });
  }

  clearImage () {
    this.image = "";
  }
}
