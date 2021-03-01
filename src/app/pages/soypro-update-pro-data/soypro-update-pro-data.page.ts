import { Component, OnInit } from '@angular/core';

// Ionic
import { ToastController, ActionSheetController, LoadingController, AlertController, NavController, Platform } from '@ionic/angular';

// Services
import { UtilsService } from '../../services/utils.service';
import { StorageService } from '../../services/storage.service';
import { DatabaseService } from '../../services/database.service';
import { AuthService } from '../../services/auth.service';
// Forms 
import { FormGroup , FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

// Camera
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-soypro-update-pro-data',
  templateUrl: './soypro-update-pro-data.page.html',
  styleUrls: ['./soypro-update-pro-data.page.scss'],
})
export class SoyproUpdateProDataPage implements OnInit {
  form: FormGroup;

  user_uid: string;

  work_schedules: any [];
  work_areas: any [];
  payment_methods: any [];
  constructor(private storage: StorageService,
              public auth: AuthService,
              public alertController: AlertController,
              private database: DatabaseService,
              public toastController: ToastController,
              private actionSheetController: ActionSheetController,
              private camera: Camera,
              private loadingController: LoadingController,
              private navCtrl: NavController) { }

  async ngOnInit() {
    this.form = new FormGroup ({
      razon_social: new FormControl ('', [Validators.required]),
      ruc: new FormControl ('', [Validators.required]),
      address: new FormControl ('', [Validators.required]),
      business_mail: new FormControl (''),
      institutional_grade: new FormControl (''),
      degree: new FormControl (''),
    });

    const loading = await this.loadingController.create({
      message: 'Procesando Informacion ...'
    });

    await loading.present ();

    this.storage.getValue ('user_uid').then (id => {
      this.user_uid = id;

      this.database.getProById (id).subscribe ((data: any) => {
        this.form.patchValue (data);

        this.work_schedules = data.work_schedules;
        this.work_areas = data.work_areas;
        this.payment_methods = data.payment_methods;

        loading.dismiss ();
      }, error => {
        loading.dismiss ();
        console.log ('getProById', error);
      });
    }, error => {
      loading.dismiss ();
      console.log ('Get user_uid error', error);
    });
  }

  goback () {
    this.navCtrl.navigateBack ('soypro-update-data');
  }

  addHours () {
    this.work_schedules.push ({
      id:  Math.random(),
      days: '',
      open: '',
      close: ''
    });
  }

  removeHour (item: any) {
    for( var i = 0; i < this.work_schedules.length; i++){ 
      if ( this.work_schedules[i].id === item.id) {
        this.work_schedules.splice(i, 1); 
      }
    }
  }

  removeZone (item: any) {
    for( var i = 0; i < this.work_areas.length; i++){ 
      if ( this.work_areas[i].id === item.id) {
        this.work_areas.splice(i, 1); 
      }
    }
  }

  removePago (item: any) {
    for( var i = 0; i < this.payment_methods.length; i++){ 
      if ( this.payment_methods[i].id === item.id) {
        this.payment_methods.splice(i, 1); 
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
              this.work_areas.push ({
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
    this.payment_methods.push ({
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

    value.work_schedules = this.work_schedules;
    value.work_areas = this.work_areas;
    value.payment_methods = this.payment_methods;

    console.log (value);

    this.database.updatePro (this.user_uid, value)
      .then (() => {
        this.presentToast ('La información se actualizó correctamente.')
        loading.dismiss ();
        this.goback ();
      }).catch (error => {
        console.log ('Error', error);
        loading.dismiss ();
      });
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
