import { Component, OnInit, ViewChild } from '@angular/core';

// Ionic
import { IonSlides, NavController, LoadingController, Platform } from '@ionic/angular';

// Services
import { StorageService } from '../../services/storage.service';
import { DatabaseService } from '../../services/database.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { OneSignal } from '@ionic-native/onesignal/ngx';

import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-soypro-select-plan',
  templateUrl: './soypro-select-plan.page.html',
  styleUrls: ['./soypro-select-plan.page.scss'],
})
export class SoyproSelectPlanPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  slideOpts = {
    initialSlide: 1,
    effect: 'flip',
    zoom: false
  };
  segment_value: string = "1";
  constructor(private loadingController: LoadingController,
              private storage: StorageService,
              private af_storage: AngularFireStorage,
              private database: DatabaseService,
              private oneSignal: OneSignal,
              private platform: Platform,
              private navCtrl: NavController) { }

  ngOnInit() {
  }

  segmentChanged (val: any) {
    if (val === '0') {
      this.slides.slideTo (0);
    } else if (val === '1') {
      this.slides.slideTo (1);
    } else {
      this.slides.slideTo (2);
    }
  }

  ionSlideDidChange () {
    this.slides.getActiveIndex ().then (val => {
      if (val === 0) {
        this.segment_value = '0';
      } else if (val === 1) {
        this.segment_value = '1';
      } else {
        this.segment_value = '2';
      }
    })
  }

  goback () {
    this.navCtrl.navigateBack ('soypro-cfg-service');
  }

  submit () {
    this.slides.getActiveIndex ().then (val => {
      if (val === 0) {
        this.createSoyProAccount ();
      } else {

      }
    });
  }

  async createSoyProAccount () {
    const loading = await this.loadingController.create({
      message: 'Procesando Informacion ...'
    });

    await loading.present ();

    let pro_user_data: any = JSON.parse (await this.storage.getObject('pro_user_data'));
    let phone_number_valid: any = JSON.parse (await this.storage.getObject ('phone_number_valid'));
    let pro_data: any = JSON.parse (await this.storage.getObject('pro_data'));
    let soypro_service_config: any = JSON.parse (await this.storage.getObject('soypro_service_config'));

    let pro_user_avatar: any = await this.storage.getObject('pro_user_avatar');    
    let service_image: any = await this.storage.getObject('service_image');

    let user_uid = await this.storage.getValue ('user_uid');  

    console.log ('pro_user_data', pro_user_data);
    console.log ('phone_number_valid', phone_number_valid);
    console.log ('pro_data', pro_data);
    console.log ('soypro_service_config', soypro_service_config);
    
    const filePath = user_uid + '/avatar.jpg';
    const storageRef = this.af_storage.ref (filePath);
    const uploadTask = storageRef.putString (pro_user_avatar, 'data_url');
      
    uploadTask.snapshotChanges ().pipe (
      finalize(() => {
        storageRef.getDownloadURL ().subscribe (async (avatar_url: any) => {
          await this.database.addProfessionals (user_uid, pro_user_data, pro_data, soypro_service_config, phone_number_valid, avatar_url)
            .then(() => {
              if (this.platform.is ('cordova')) {
                this.oneSignal.sendTag (soypro_service_config.subcategory_id, "true");
                this.oneSignal.sendTag (soypro_service_config.service.id, "true");
              }
              
              if (service_image != null && service_image && undefined && service_image != '') {
                this.upload_image_service (
                  user_uid,
                  soypro_service_config.subcategory_id, 
                  service_image,
                  loading);
              } else {
                loading.dismiss ();
                this.navCtrl.navigateRoot ('soypro-completed');
              }
            })
            .catch ((error) => {
              console.log ('Error', error);
              loading.dismiss ();
            });
        });
      })
    ).subscribe ();
  }

  upload_image_service (user_uid: string, subcategory_id: string, image: string, loading: any) {
    const image_id = this.database.createId ();

    const filePath = user_uid + '/'+ subcategory_id + '/' + image_id + '.jpg';
    const storageRef = this.af_storage.ref (filePath);
    const uploadTask = storageRef.putString (image, 'data_url');

    uploadTask.snapshotChanges ().pipe (
      finalize(async () => {
        await this.database.addImageGalleryProfile (user_uid, subcategory_id, image, image_id, filePath)
          .then (() => {
            loading.dismiss ();
            this.navCtrl.navigateRoot ('soypro-completed');
          }, error => {
            loading.dismiss ();
            console.log ("Error upload_image_service, ", error);
          });
      })
    ).subscribe ();
  }
}
