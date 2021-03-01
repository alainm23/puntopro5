import { Component, OnInit } from '@angular/core';

// Param
import { ActivatedRoute } from '@angular/router';

// Ionic
import { LoadingController, NavController } from '@ionic/angular';  

// Services
import { DatabaseService } from '../../services/database.service';
import { StorageService } from '../../services/storage.service';

// Modals
import { SelectServicePage } from '../../modals/select-service/select-service.page';

// Animations
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-soypro-select-category',
  templateUrl: './soypro-select-category.page.html',
  styleUrls: ['./soypro-select-category.page.scss'],
  animations: [
    trigger('animation-top', [
      transition(':enter',
        [style({ transform: 'translateY(-12%)', opacity: 0 }),
        animate('154ms', style({ transform: 'translateY(0)', opacity: 1 }))]),
      transition(':leave',
        [style({ transform: 'translateY(0)', opacity: 1 }),
        animate('154ms', style({ transform: 'translateY(-12%)', opacity: 0 }))])
    ])
  ]
})
export class SoyproSelectCategoryPage implements OnInit {
  categories: any;''
  constructor(private database: DatabaseService,
              private route: ActivatedRoute,
              private navCtrl: NavController,
              private loadingController: LoadingController,
              private storage: StorageService) { }
  async ngOnInit() {
    const loading = await this.loadingController.create({
      message: 'Procesando Informacion ...'
    });

    await loading.present ();

    this.database.getCategories ().subscribe (response => {
      console.log (response);
      loading.dismiss ();
      this.categories = response;
    }, error => {
      loading.dismiss ();
      console.log ('Get categories error, ', error);
    });
  }

  showSubCategories (category: any) {
    category.show_subcategories = !category.show_subcategories;
  }

  async selectService (item: any) {
    console.log (item);
    this.navCtrl.navigateForward ('soypro-cfg-service/' + item.id + '/' + item.name);
    /*
    const modal = await this.modalController.create({
      component: SelectServicePage,
      componentProps: { id: item }
    });

    modal.onDidDismiss ().then (async (response: any) => {
      if (response.data !== null) {
        if (this.type === 'first') {
          console.log ('Service Cfg', response.data);
          this.storage.setObject ("soypro_service_config", response.data);
          this.navCtrl.navigateForward ('service-first-image');
        } else { 
          const loading = await this.loadingController.create({
            message: 'Procesando Informacion ...'
          });

          await loading.present (); 
          
          this.storage.getValue ('user_uid').then (id => {
            this.database.addProService (id, response.data)
              .then (() => {
                loading.dismiss ();
                this.navCtrl.navigateBack ('pro-services');
                console.log ('Estos datos para agregar', response.data);
              })
              .catch (error => {
                console.log ('Error', error);
              })
          });
        }
      }
    });

    return await modal.present();
    */
  }
}
