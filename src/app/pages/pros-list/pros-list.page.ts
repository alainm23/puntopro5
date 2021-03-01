import { Component, OnInit } from '@angular/core';

// Param
import { ActivatedRoute } from '@angular/router';

// Ionic
import { ModalController, NavController } from '@ionic/angular'; 

// Import services
import { DatabaseService } from '../../services/database.service';
import { StorageService } from '../../services/storage.service';
 
// Animations
// import { myEnterAnimation } from '../../animations/enter';
// import { myLeaveAnimation } from '../../animations/leave'; 

// Modal Page
import { RequestProPage } from '../../modals/request-pro/request-pro.page';
import { ProfilePage } from '../../modals/profile/profile.page';
import { ChatPage } from '../../modals/chat/chat.page';
@Component({
  selector: 'app-pros-list',
  templateUrl: './pros-list.page.html',
  styleUrls: ['./pros-list.page.scss'],
})
export class ProsListPage implements OnInit {
  is_loading: boolean = true;
  pros_list: any;

  search_request: any = {
    subcategory_id: null,
    subcategory_name: null,
    address_name: null,
    latitude: null,
    longitude: null
  };
  
  constructor(private route: ActivatedRoute,
              private database: DatabaseService,
              private navCtrl: NavController,
              private modalCtrl: ModalController,
              private storage: StorageService) { }

  ngOnInit() {
    this.search_request.subcategory_id = this.route.snapshot.paramMap.get ('subcategory_id');
    this.search_request.subcategory_name = this.route.snapshot.paramMap.get ('subcategory_name');
    this.search_request.address_name = this.route.snapshot.paramMap.get ('address_name');
    this.search_request.latitude = this.route.snapshot.paramMap.get ('latitude');
    this.search_request.longitude = this.route.snapshot.paramMap.get ('longitude');

    this.storage.getObject ('user_data').then (async ud_response => {
      const user_data: any = JSON.parse (ud_response);

      await this.database.getProsBySubCategory (this.search_request.subcategory_id).subscribe (response => {
        this.is_loading = false;
        this.pros_list = response;
      });
    });
  }

  async goProfile (item: any) {
    const parms: any = {
      profile_id: item.id,
      to_confirm: false
    };

    const modal = await this.modalCtrl.create({
      component: ProfilePage,
      componentProps: parms,
      mode: 'ios',
      // enterAnimation: myEnterAnimation,
      // leaveAnimation: myLeaveAnimation
    });

    modal.onDidDismiss ().then ((response: any) => {
      if (response.role == 'response') {
        
      }
    });

    return await modal.present();
  }

  async requestPros () {
    const parms: any = { 
      address: this.search_request.address_name,
      latitude: this.search_request.latitude,
      longitude: this.search_request.longitude,
      subcategory_id: this.search_request.subcategory_id,
      is_edit: false
    };

    console.log (parms);

    const modal = await this.modalCtrl.create({
      component: RequestProPage,
      componentProps: parms,
      mode: 'ios',
      // enterAnimation: myEnterAnimation,
      // leaveAnimation: myLeaveAnimation
    });

    modal.onDidDismiss ().then ((response: any) => {
      if (response.role === 'response') {
        this.navCtrl.navigateForward ('request-view/' + response.data)
      }
    });

    return await modal.present();
  }

  async connectPro (profile: any) {
    this.storage.getValue ('user_uid').then (async (user_id: string) => {
      const parms: any = {
        type: 'user',
        sender: user_id,
        receiver: profile.id,
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
}
