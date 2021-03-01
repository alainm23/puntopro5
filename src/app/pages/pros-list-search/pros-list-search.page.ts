import { Component, OnInit } from '@angular/core';

// Services
import { DatabaseService } from '../../services/database.service';
import { StorageService } from '../../services/storage.service';  
import { UtilsService } from '../../services/utils.service';

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
  selector: 'app-pros-list-search',
  templateUrl: './pros-list-search.page.html',
  styleUrls: ['./pros-list-search.page.scss'],
})
export class ProsListSearchPage implements OnInit {
  is_loading: boolean = true;
  pros_list: any;
  user_data: any;
  request_id: any;
  request: any;

  constructor(private route: ActivatedRoute,
              private database: DatabaseService,
              private navCtrl: NavController,
              private modalCtrl: ModalController,
              private geolocation: Geolocation,
              private storage: StorageService,
              private utils: UtilsService) { }

  async ngOnInit() {
    this.request_id = this.route.snapshot.paramMap.get ('request_id');

    console.log (this.request_id);

    this.database.getEmergencyRequestById (this.request_id).subscribe ((response: any) => {
      console.log (response);
      this.request = response;
    });
  }
}
