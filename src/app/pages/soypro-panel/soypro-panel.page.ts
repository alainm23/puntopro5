import { Component, OnInit } from '@angular/core';

// Services
import { DatabaseService } from '../../services/database.service';
import { StorageService } from '../../services/storage.service';

// Ionic
import { NavController, LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-soypro-panel',
  templateUrl: './soypro-panel.page.html',
  styleUrls: ['./soypro-panel.page.scss'],
})
export class SoyproPanelPage implements OnInit {
  pro_data: any;
  constructor(private navCtrl: NavController,
              private loadingController: LoadingController,
              private database: DatabaseService,
              private storage: StorageService) { }

  async ngOnInit() {
    const loading = await this.loadingController.create({
      message: 'Procesando Informacion ...'
    });

    await loading.present ();

    this.storage.getValue ('user_uid').then (id => {
      this.database.getProById (id).subscribe ((data: any) => {
        this.pro_data = data;
        loading.dismiss ();
      }, error => {
        loading.dismiss ();
        console.log ('Get user data error', error);
      });
    })
    .catch (error => {
      loading.dismiss ();
      console.log ('Get user_uid error', error);
    });
  }

  goUpdateData () {
    this.navCtrl.navigateForward ('soypro-update-data');
  }

  goUsuarioPage () {
    this.navCtrl.navigateRoot ('home');
  }

  goMessage () {
    this.navCtrl.navigateForward ('messages/pro');
  }

  goRequestList () {
    this.navCtrl.navigateForward ('soypro-request-list');
  }
}
