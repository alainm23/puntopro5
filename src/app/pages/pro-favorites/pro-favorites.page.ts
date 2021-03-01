import { Component, OnInit } from '@angular/core';

// Services
import { StorageService } from '../../services/storage.service';
import { DatabaseService } from '../../services/database.service';

// Ionic
import { ModalController } from '@ionic/angular';

// Animations
// import { myEnterAnimation } from '../../animations/enter';
// import { myLeaveAnimation } from '../../animations/leave'; 

// Modal Page
import { RequestProPage } from '../../modals/request-pro/request-pro.page';
import { ProfilePage } from '../../modals/profile/profile.page';
@Component({
  selector: 'app-pro-favorites',
  templateUrl: './pro-favorites.page.html',
  styleUrls: ['./pro-favorites.page.scss'],
})
export class ProFavoritesPage implements OnInit {
  list: any [];
  is_loading: boolean = true;
  constructor(private database: DatabaseService,
              private storage: StorageService,
              private modalCtrl: ModalController) { }

  ngOnInit() {
    this.storage.getValue ('user_uid').then (user_uid => {
      this.database.getFavoritesByUser (user_uid).subscribe (response => {
        console.log (response);
        this.list = response;

        this.is_loading = false;
      });
    });
  }

  async goProfile (item: any) {
    const parms: any = {
      profile_id: item.id,
      address: '',
      latitude: '',
      longitude: '',
      subcategory_id: '',
    };

    const modal = await this.modalCtrl.create({
      component: ProfilePage,
      componentProps: parms,
      mode: 'ios',
      // enterAnimation: myEnterAnimation,
      // leaveAnimation: myLeaveAnimation
    });

    modal.onDidDismiss ().then ((response: any) => {
      if (response.role == 'location') {
        
      }
    });

    return await modal.present();
  }
}
