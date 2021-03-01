import { Component, OnInit, Input } from '@angular/core';

// Forms
import { FormGroup , FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

// Ionic
import { ModalController, AlertController, ActionSheetController, LoadingController } from '@ionic/angular';

// Camera
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';

// Services
import { DatabaseService } from '../../services/database.service';
import { StorageService } from '../../services/storage.service';
import { AngularFireStorage } from '@angular/fire/storage';

import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-request-pro',
  templateUrl: './request-pro.page.html',
  styleUrls: ['./request-pro.page.scss'],
})
export class RequestProPage implements OnInit {
  @Input () address: string;
  @Input () latitude: number;
  @Input () longitude: number;
  @Input () subcategory_id: string;

  @Input () request_id: string;
  @Input () is_edit: boolean;

  form: FormGroup;
  images: string [];
  images_edit: any [];
  services: any [];
  is_loading: boolean = true;
  constructor(private modalController: ModalController,
              private alertController: AlertController,
              private actionSheetController: ActionSheetController,
              private camera: Camera,
              private af_storage: AngularFireStorage,
              private loadingController: LoadingController,
              private database: DatabaseService,
              private storage: StorageService) { }

  ngOnInit() {
    this.images = [];
    this.images_edit = [];

    this.form = new FormGroup ({
      title: new FormControl ('', Validators.required),
      detail: new FormControl ('', Validators.required),
      address: new FormControl (this.address, Validators.required),
      service: new FormControl (null, Validators.required),
    });

    if (this.is_edit) {
      this.database.getRequestById (this.request_id).subscribe ((response: any) => {
        console.log (response);

        this.form.controls ['title'].setValue (response.title);
        this.form.controls ['detail'].setValue (response.detail);
        this.form.controls ['address'].setValue (response.address);

        this.form.controls ['service'].setValidators (null);

        if (response.images.length > 0) {
          response.images.forEach((item: string) => {
            let filename = 'requests/' + response.id + '/' + item + '.jpg';
            let ref = this.af_storage.ref (filename);

            let request: any = {
              getDownloadURL: ref.getDownloadURL (),
              id: item
            }

            this.images_edit.push (request);
          });   
        }

        this.is_loading = false;
      });
    } else {
      this.database.getServicesSubCategory (this.subcategory_id).subscribe (response => {
        this.services = response;
        this.is_loading = false;

        console.log ('getServicesSubCategory', response);
      });
    }
  }

  closeModal () {    
    this.modalController.dismiss (null, 'close');
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
      quality: 80,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    }

    this.camera.getPicture(options).then((imageData) => {
      const image = 'data:image/jpeg;base64,' + imageData;
      this.images.push (image);
    }, (err) => {
      console.log ('Camera error', err);
    });
  }

  deleteImage (item) {
    this.images.splice(this.images.indexOf(item), 1);
  }

  async deleteImageSource (item: any) {
    console.log (item);

    const actionSheet = await this.actionSheetController.create({
      header: 'Eliminar imagen',
      buttons: [{
        text: 'Si',
        handler: () => {
          let filePath = 'requests/' + this.request_id + '/' + item.id + '.jpg';
          let storageRef = this.af_storage.ref (filePath).delete ();
          this.images_edit.splice(this.images_edit.indexOf(item), 1);
        }
      }, {
        text: 'No',
        handler: () => {
          
        }
      }]
    });

    await actionSheet.present();
  }

  generate_images_update (list: any []) {
    let returned = [];

    list.forEach ((item: any) => {
      returned.push (item.id);
    });

    return returned;
  }

  async onSubmit () {
    if (this.is_edit === true) {
      const loading = await this.loadingController.create({
        message: 'Procesando Informacion ...'
      });

      await loading.present ();

      const value = this.form.value;

      const request: any = {
        title: value.title,
        detail: value.detail,
        address: value.address,
        images: this.generate_images_update (this.images_edit),
      };

      loading.dismiss ();

      this.database.updateRequest (this.request_id, request)
        .then (() => {
          loading.dismiss ();
          this.modalController.dismiss (null, 'edit-ok');
        })
        .catch (error => {
          console.log ('updateRequest', error);
        })

    } else {
      const loading = await this.loadingController.create({
        message: 'Procesando Informacion ...'
      });

      await loading.present ();

      this.storage.getObject ('user_data').then (async response => {
        const user_data: any = JSON.parse (response);
        const value = this.form.value;
        const request: any =  {
          id: '',
          client_id: user_data.id,
          client_name: user_data.first_name + ' ' + user_data.last_name,
          pro_id: '',
          pro_name: '',
          pro_avatar: '',
          service_id: value.service.id,
          service_name: value.service.name,
          title: value.title,
          detail: value.detail,
          latitude: this.latitude,
          longitude: this.longitude,
          address: value.address,
          created_date: new Date ().toISOString (),
          in_progress_date: '',
          finished_date: '',
          images: this.generate_images_id (this.images),
          state: 'created',
          quote_max_price: '',
          quote_min_price: '',
          quote_message: ''
        };

        console.log (request);

        /*
        await this.database.addRequest (user_data.id, request)
          .then ((response) => {
            this.upload_images (this.images, request.images, response);
            loading.dismiss ();
            this.modalController.dismiss (response, 'response');
          })
          .catch (async (error) => {
            console.log ('addRequest error', error);
            loading.dismiss ();
            const alert = await this.alertController.create({
              header: '¡Error!',
              message: error,
              buttons: ['OK']
            });

            await alert.present();
          });
        */
      });
    }
  }

  generate_images_id (images: string []) {
    let ids: string [] = [];

    images.forEach((item) => {
      let id: string = this.database.createId ();
      ids.push (id); 
    });

    console.log (images);

    return ids;
  }

  upload_images (images: string [], ids: string [], request_id: string) {
    let counter: number = 0;
    
    images.forEach ((item) => {
      let filePath = 'requests/' + request_id + '/' + ids [counter] + '.jpg';
      let storageRef = this.af_storage.ref (filePath);
      let uploadTask = storageRef.putString (item, 'data_url');

      counter = counter + 1;

      uploadTask.snapshotChanges ().pipe (
        finalize(() => {
          storageRef.getDownloadURL ().subscribe (async resonse => {

          });
        })
      ).subscribe ();
    });
  }
}
