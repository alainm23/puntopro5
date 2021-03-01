import { Component, OnInit } from '@angular/core';

// Ionic
import { ActionSheetController, NavController, AlertController, LoadingController, ModalController } from '@ionic/angular';

// Services
import { StorageService  } from '../../services/storage.service';
import { DatabaseService  } from '../../services/database.service';

// Animations
// import { myEnterAnimation } from '../../animations/enter';
// import { myLeaveAnimation } from '../../animations/leave';

// Pages
import { ServiceEditPage } from '../../modals/service-edit/service-edit.page'; 
@Component({
  selector: 'app-pro-services',
  templateUrl: './pro-services.page.html',
  styleUrls: ['./pro-services.page.scss'],
})
export class ProServicesPage implements OnInit {
  is_loading: boolean = true;
  list: any [];
  user_id: string = "";
  constructor(private database: DatabaseService,
              public actionSheetController: ActionSheetController,
              private loadingController: LoadingController,
              private modalCtrl: ModalController,
              private alertController: AlertController,
              private navCtrl: NavController,
              private storage: StorageService) { }

  ngOnInit() {
    this.storage.getValue ('user_uid').then (id => {
      this.user_id = id;

      this.database.getServicesByPro (id).subscribe ((response: any) => {
        console.log (response);
        this.list = response;
        this.is_loading = false;
      }, error => {
        this.is_loading = false;
        console.log ('getServicesByPro', error);
      });
    });
  }

  async showOptions (item: any) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      buttons: [{
        text: 'Ver',
        handler: () => {
          this.seeDetail (item)
        }
      }, {
        text: 'Editar',
        handler: () => {
          this.editService (item);
        }
      }, {
        text: 'Eliminar',
        role: 'destructive',
        handler: () => {
          this.deleteConfirm (item);
        }
      }, {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  addService () {
    this.navCtrl.navigateForward ('select-categories/add');
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

  async deleteConfirm (item: any) {
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
          handler: async () => {
            const loading = await this.loadingController.create({
              message: 'Procesando Informacion ...'
            });

            await loading.present ();

            this.database.removeProService (this.user_id, item)
              .then (() => {
                loading.dismiss ();
              }).catch (error => {
                loading.dismiss ();
                console.log ('removeProService', error);
              });
          }
        }
      ]
    });

    await alert.present();
  }

  async editService (item: any) {
    const modal = await this.modalCtrl.create({
      component: ServiceEditPage,
      componentProps: item,
      mode: 'ios',
      // enterAnimation: myEnterAnimation,
      // leaveAnimation: myLeaveAnimation
    });

    return await modal.present();
  }
}
