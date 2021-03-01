import { Component, OnInit } from '@angular/core';

// Ionic
import { NavController, AlertController, LoadingController } from '@ionic/angular';

// Services
import { DatabaseService } from '../../services/database.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-soypro-request-list',
  templateUrl: './soypro-request-list.page.html',
  styleUrls: ['./soypro-request-list.page.scss'],
})
export class SoyproRequestListPage implements OnInit {
  emergency_items: any [];
  quotation_items:any [];

  segment_value: string = "0";

  subscribe_01: any;
  subscribe_02: any;
  constructor(private database: DatabaseService,
              private navCtrl: NavController,
              private loadingController: LoadingController,
              private storage: StorageService){ }

  async ngOnInit() {
    const loading = await this.loadingController.create({
      message: 'Procesando Informacion ...'
    });

    await loading.present ();

    this.storage.getValue ('user_uid').then (async (user_id: string) => {
      this.subscribe_01 = this.database.getEmergencyRequestsToConfirmByUser (user_id).subscribe ((response: any[]) => {
        console.log ('getEmergencyRequestsToConfirmByUser', response);
        this.emergency_items = response;
      });

      this.subscribe_02 = this.database.getQuoteRequestsToConfirmByUser (user_id).subscribe ((response: any []) => {
        console.log ('getQuoteRequestsToConfirmByUser', response);
        this.quotation_items = response;
      });

      loading.dismiss ();
    });
  }

  viewRequest (item: any) {
    this.navCtrl.navigateForward ('request-pro-view/' + item.id);
  }
}
