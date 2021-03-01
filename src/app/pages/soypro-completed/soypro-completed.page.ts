import { Component, OnInit } from '@angular/core';

// Ionic
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-soypro-completed',
  templateUrl: './soypro-completed.page.html',
  styleUrls: ['./soypro-completed.page.scss'],
})
export class SoyproCompletedPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goSoyProPage () {
    this.navCtrl.navigateRoot ("soypro-panel");
  }
}
