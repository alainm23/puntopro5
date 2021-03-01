import { Component, OnInit } from '@angular/core';

// Ionic
import { NavController } from '@ionic/angular';

// Services
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-soypro-update-data',
  templateUrl: './soypro-update-data.page.html',
  styleUrls: ['./soypro-update-data.page.scss'],
})
export class SoyproUpdateDataPage implements OnInit {

  constructor(private navCtrl: NavController,
              public auth: AuthService) { }

  ngOnInit() {
  }

  goUpdatePersonalDate () {
    this.navCtrl.navigateForward ('soypro-update-personal-data');
  }

  goUpdateProDate () {
    this.navCtrl.navigateForward ('soypro-update-pro-data');
  }

  goProfiles () {
    this.navCtrl.navigateForward ('soypro-profiles');
  }
} 
