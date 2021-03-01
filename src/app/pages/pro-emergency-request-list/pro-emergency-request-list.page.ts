import { Component, OnInit } from '@angular/core';

// Ionic
import { NavController } from '@ionic/angular';

// Services
import { DatabaseService } from '../../services/database.service';
import { StorageService } from '../../services/storage.service';

// Moment
import * as moment from 'moment';  
@Component({
  selector: 'app-pro-emergency-request-list',
  templateUrl: './pro-emergency-request-list.page.html',
  styleUrls: ['./pro-emergency-request-list.page.scss'],
})
export class ProEmergencyRequestListPage implements OnInit {
  is_loading: boolean = true;
  requests: any [];
  constructor(private database: DatabaseService,
              private navCtrl: NavController,
              private storage: StorageService) { }

  ngOnInit() {
    this.storage.getValue ('user_uid').then ((user_id) => {
      this.database.getEmergencyRequestsToConfirmByUser (user_id).subscribe ((response: any []) => {
        console.log (response);
        this.requests = response;
        this.is_loading = false;
      });
    });
  }

  getRelativeDateTime (date: string) {
    return moment (date, "").fromNow ();
  }

  viewRequest (item: any) {
    this.navCtrl.navigateForward ('emergency-request-view/' + item.id);
  }
}
