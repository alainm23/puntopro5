import { Component, OnInit } from '@angular/core';

// Ionic
import { NavController } from '@ionic/angular';

// Services
import { StorageService } from '../../services/storage.service';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-soypro',
  templateUrl: './soypro.page.html',
  styleUrls: ['./soypro.page.scss'],
})
export class SoyproPage implements OnInit {
  user_data: any;
  constructor(private storage: StorageService,
              private database: DatabaseService,
              private navCtrl: NavController) { }

  ngOnInit() {
    this.storage.getObject ('user_data').then (response => {
      this.user_data =JSON.parse (response);
    });
  }

  goMessage () {
    this.navCtrl.navigateForward ('messages/pro');
  }

  goHome () {
    this.navCtrl.navigateRoot ('home');
  }

  goRequestList () {
    this.navCtrl.navigateForward ('request-list');
  }

  goProRequestHistory () {
    this.navCtrl.navigateForward ('pro-request-history');
  }
  goProServices () {
    this.navCtrl.navigateForward ('pro-services');
  }

  goProfileEdit () {
    this.navCtrl.navigateForward ('profile-edit');
  }

  goEmergencyRequestList () {
    this.navCtrl.navigateForward ('pro-emergency-request-list');
  }
}
