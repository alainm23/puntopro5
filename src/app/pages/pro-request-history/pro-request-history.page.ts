import { Component, OnInit } from '@angular/core';

// Ionic
import { NavController, ModalController } from '@ionic/angular';

// Services
import { DatabaseService } from '../../services/database.service';
import { StorageService } from '../../services/storage.service';

// Animations
// import { myEnterAnimation } from '../../animations/enter';
// import { myLeaveAnimation } from '../../animations/leave'; 

// Modal Page
import { ChatPage } from '../../modals/chat/chat.page';

// Moment
import * as moment from 'moment';  
@Component({
  selector: 'app-pro-request-history',
  templateUrl: './pro-request-history.page.html',
  styleUrls: ['./pro-request-history.page.scss'],
})
export class ProRequestHistoryPage implements OnInit {
  list: any [];
  list_backup: any [];
  is_loading: boolean = true;

  segment_value: string = "sent";

  constructor(private database: DatabaseService,
              private navCtrl: NavController,
              private modalCtrl: ModalController,
              private storage: StorageService) { }

  ngOnInit() {
    this.storage.getValue ('user_uid').then (user_id => {
      this.database.getProRequestHistory (user_id).subscribe ((response: any) => {
        console.log (response);
        this.list = response;
        this.list_backup = response;

        this.segmentChanged (this.segment_value);

        this.is_loading = false;
      });
    });
  }

  segmentChanged (value: any) {
    this.list = this.list_backup;

    console.log (this.list);

    if (value === 'sent') {
      this.list = this.list.filter ((item: any) => {
        return item.data.state === 'sent';
      });
    } else if (value === 'in_progress') {
      this.list = this.list.filter ((item: any) => {
        return item.data.state === 'in_progress';
      });
    } else {
      this.list = this.list.filter ((item: any) => {
        return item.data.state === 'finalized';
      });
    }
  }

  getRelativeDateTime (date: string) {
    return moment (date, "").fromNow ();
  }

  async viewRequest (item: any) {
    console.log (item);

    if (item.state === 'created') {

    } else if (item.state === 'in_progress') {
      const parms: any = {
        type: 'pro',
        sender: item.pro_id,
        receiver: item.client_id,
        _chat_id: ''
      };
      
      const modal = await this.modalCtrl.create({
        component: ChatPage,
        componentProps: parms,
        mode: 'ios',
        // enterAnimation: myEnterAnimation,
        // leaveAnimation: myLeaveAnimation
      });

      return await modal.present();
    } else {

    }
  }
}
