import { Component, OnInit } from '@angular/core';

// Ionic
import { NavController } from '@ionic/angular';

// Services
import { DatabaseService } from '../../services/database.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-emergency-request-list',
  templateUrl: './emergency-request-list.page.html',
  styleUrls: ['./emergency-request-list.page.scss'],
})
export class EmergencyRequestListPage implements OnInit {
  items: any [];
  constructor(private database: DatabaseService,
              private navCtrl: NavController,
              private storage:StorageService) { }

  ngOnInit() {
    this.storage.getValue ('user_uid').then ((id) => {
      this.database.getAllEmergencyRequest (id).subscribe ((response: any []) => {
        console.log (response);
        this.items = response;
      });
    });
  }

  goRequest (item: any) {
    this.navCtrl.navigateForward ('pros-list-search/' + item.id);
  }
}
