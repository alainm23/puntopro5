import { Component, OnInit } from '@angular/core';

// Ionic
import { NavController, ModalController, AlertController, LoadingController } from '@ionic/angular';

// Services
import { DatabaseService } from '../../services/database.service';
import { StorageService } from '../../services/storage.service';

// Animations
// import { myEnterAnimation } from '../../animations/enter';
// import { myLeaveAnimation } from '../../animations/leave'; 

// Modal Page
import { ChatPage } from '../../modals/chat/chat.page';
import { QualifyProPage } from '../../modals/qualify-pro/qualify-pro.page';

// Moment
import * as moment from 'moment';  
@Component({
  selector: 'app-request-history',
  templateUrl: './request-history.page.html',
  styleUrls: ['./request-history.page.scss'],
})
export class RequestHistoryPage implements OnInit {
  items: any [];
  items_backup: any [];
  segment_value: string = "created";
  select_value: string = "0";

  constructor(private database: DatabaseService,
              private navCtrl: NavController,
              private modalCtrl: ModalController,
              public alertController: AlertController,
              private loadingController: LoadingController,
              private storage: StorageService) { }

  async ngOnInit() {
    const loading = await this.loadingController.create({
      message: 'Procesando Informacion ...'
    });

    await loading.present ();

    this.storage.getValue ('user_uid').then (user_uid => {
      this.database.getAllRequestByUser (user_uid).subscribe ((response: any) => {
        this.items = response;
        this.items_backup = response;
        
        this.segmentChanged (this.segment_value);

        console.log ('response', response);

        loading.dismiss ();
      });
    }, error => {
      console.log ('getAllRequestByUser error', error);
      loading.dismiss ();
    });
  }

  segmentChanged (value: string) {
    this.items = this.items_backup;
    
    if (value === "created") {
      this.items = this.items.filter ((item: any) => {
        return item.dataGeneral.state === 'created';
      });
    } else if (value === "in_progress") {
      this.items = this.items.filter ((item: any) => {
        return item.dataGeneral.state === 'in_progress';
      });
    } else {
      this.items = this.items.filter ((item: any) => {
        return item.dataGeneral.state === 'finalized';
      });
    }
  }

  viewRequest (item: any) {
    console.log (item);
    let value = item.state;

    if (value === "created") {
      this.navCtrl.navigateForward ('request-view/' + item.id); 
    } else if (value === "in_progress") {
      this.connectPro (item.pro_id);
    } else {
       
    }
  }

  async connectPro (pro_id: string) {
    this.storage.getValue ('user_uid').then (async (user_id: string) => {
      const parms: any = {
        type: 'user',
        sender: user_id,
        receiver: pro_id,
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
    });
  }

  getRelativeDateTime (date: string) {
    return moment (date, "").fromNow ();
  }

  async qualifyConfirm (item: any) {
    console.log (item);

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
          handler: () => {
            this.makeQualify (item);
          }
        }
      ]
    });

    await alert.present();
  }

  async makeQualify (item: any) {
    this.storage.getValue ('user_uid').then (async (user_id: string) => {
      const parms: any = {
        pro_id: item.pro_id,
        request_id: item.id,
        user_id: item.client_id
      };

      const modal = await this.modalCtrl.create({
        component: QualifyProPage,
        componentProps: parms,
        mode: 'ios',
        // enterAnimation: myEnterAnimation,
        // leaveAnimation: myLeaveAnimation
      });

      return await modal.present();
    });
  }
}
