import { Component, OnInit, Input, ViewChild } from '@angular/core';

// Ionic
import { IonSlides, ModalController, IonContent, ActionSheetController, LoadingController } from '@ionic/angular';

// Services
import { AngularFireStorage } from '@angular/fire/storage';
import { DatabaseService } from '../../services/database.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-galleries-view',
  templateUrl: './galleries-view.page.html',
  styleUrls: ['./galleries-view.page.scss'],
})
export class GalleriesViewPage implements OnInit {
  @Input () image_list: any [];
  @Input () image: any;
  @Input () service: any;
  @Input () type: any;
  @Input () is_async: boolean;
  
  @ViewChild (IonSlides) slides: IonSlides; 
  sliderOpts = {
    effect: 'flip',
    zoom: {
      maxRatio: 5
    }
  };
  slide_index_current: Number = 0;
  constructor(private modalCtrl: ModalController,
              private loadingController: LoadingController,
              private actionSheetController: ActionSheetController,
              private storage: StorageService,
              private database: DatabaseService,
              private af_storage: AngularFireStorage) { }

  ngOnInit() {
    console.log (this.service);
  }

  ngAfterViewInit () {
    if (this.image !== null || this.image !== undefined) {
      let index = 0;
        this.image_list.forEach (item => {
          if (item.image === this.image.image) {
            this.slides.slideTo (index);
          }

          index++;
        });
    }
  }

  closeModal () {    
    this.modalCtrl.dismiss (null, 'close');
  }

  deleteImage () {
    let index = 0;
    this.image_list.forEach (item => {
      if (index === this.slide_index_current) {
        this.deleteImageAction (item);
      }

      index++;
    });
  }

  async deleteImageAction (item: any) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: async () => {
          const loading = await this.loadingController.create({
            message: 'Procesando Informacion ...'
          });

          await loading.present ();
          
          const unsubscribe = this.af_storage.ref (item.image).getDownloadURL ().subscribe (url => {
            console.log (url);
            this.af_storage.storage.refFromURL (url).delete ()
              .then (() => {
                this.deleteFromDatabase (item, loading);
              })
              .catch (error => {
                loading.dismiss ();
                console.log ('Error', error);
              })
            unsubscribe.unsubscribe ();
          }, error => {
            loading.dismiss ();
            console.log ('Error', error);
          });
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
        
    await actionSheet.present();
  }

  async deleteFromDatabase (item: any, loading: any) {
    this.storage.getValue ('user_uid').then (user_id => {
      this.database.removeProImageService (user_id, this.service, item)
        .then (() => {
          let index = this.image_list.indexOf (item);
          this.image_list.splice (index);
          this.slides.slideTo (0);
          loading.dismiss ();
          this.slides.update ();
        })
        .catch (error => {
          console.log ('Error', error);
          loading.dismiss ();
        })
    });
  }

  ionSlideDidChange () {
    this.slides.getActiveIndex ().then (index => {
      this.slide_index_current = index;

      console.log ('Current Index', this.slide_index_current);
    })
  }
}
