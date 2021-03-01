import { Component, OnInit } from '@angular/core';

// Services
import { DatabaseService } from '../../services/database.service';
import { StorageService } from '../../services/storage.service';  

// Param
import { ActivatedRoute } from '@angular/router';

// Ionic
import { ModalController, NavController } from '@ionic/angular'; 

// Geolocation
import { Geolocation } from '@ionic-native/geolocation/ngx';

// Animations
// import { myEnterAnimation } from '../../animations/enter';
// import { myLeaveAnimation } from '../../animations/leave'; 

// Modal Page
import { RequestProPage } from '../../modals/request-pro/request-pro.page';
import { ProfilePage } from '../../modals/profile/profile.page';
import { ChatPage } from '../../modals/chat/chat.page';
@Component({
  selector: 'app-pros-list-category',
  templateUrl: './pros-list-category.page.html',
  styleUrls: ['./pros-list-category.page.scss'],
})
export class ProsListCategoryPage implements OnInit {
  subcategory_id: string;
  subcategory_name: string;

  pros_list: any [];
  is_loading: boolean = true;
  constructor(private route: ActivatedRoute,
              private database: DatabaseService,
              private navCtrl: NavController,
              private modalCtrl: ModalController,
              private geolocation: Geolocation,
              private storage: StorageService) { }

  async ngOnInit() {
    this.subcategory_id = this.route.snapshot.paramMap.get ('subcategory_id');
    this.subcategory_name = this.route.snapshot.paramMap.get ('subcategory_name');

    await this.database.getProsBySubCategory (this.subcategory_id).subscribe ((response: any[]) => {
      this.pros_list = response;
      this.is_loading = false;

      console.log (response);
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
    this.geolocation.getCurrentPosition().then(async (resp) => {
      const parms: any = { 
        address: '',
        latitude: resp.coords.latitude,
        longitude: resp.coords.longitude,
        subcategory_id: this.subcategory_id,
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
  
      await modal.present();
    }).catch((error) => {
      console.log ('Error getting location' + error);
    });
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
