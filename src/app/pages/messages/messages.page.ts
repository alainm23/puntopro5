import { Component, OnInit } from '@angular/core';

// Param
import { ActivatedRoute } from '@angular/router';

// Ionic 
import { ModalController } from '@ionic/angular'; 

// Services
import { StorageService  } from '../../services/storage.service';
import { DatabaseService  } from '../../services/database.service';

// Animations
// import { myEnterAnimation } from '../../animations/enter';
// import { myLeaveAnimation } from '../../animations/leave'; 

// Modal Page
import { ChatPage } from '../../modals/chat/chat.page';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
  user_type: string;
  list: any[];
  is_loading: boolean = true;
  constructor(private database: DatabaseService,
              private storage: StorageService,
              private modalCtrl: ModalController,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.user_type = this.route.snapshot.paramMap.get ('user_type');
 
    this.storage.getValue ('user_uid').then (user_id => {
      if (this.user_type === 'pro') {

        this.database.getProChatList (user_id).subscribe (response => {
          this.list = response;
          this.is_loading = false;
          console.log (response);
        });
      } else {
        this.database.getUserChatList (user_id).subscribe (response => {
          this.list = response;
          this.is_loading = false;
          console.log (response);
        });
      }
    });
  }

  async goChat (data: any) {
    let parms: any;
    if (this.user_type === 'pro') {
      parms = {
        type: this.user_type,
        sender: data.pro_id,
        receiver: data.user_id,
        _chat_id: data.chat_id
      };
    } else {
      parms = {
        type: this.user_type,
        sender: data.user_id,
        receiver: data.pro_id,
        _chat_id: data.chat_id
      };
    }
    
    const modal = await this.modalCtrl.create({
      component: ChatPage,
      componentProps: parms,
      mode: 'ios',
      // enterAnimation: myEnterAnimation,
      // leaveAnimation: myLeaveAnimation
    });

    return await modal.present();
  }
}
