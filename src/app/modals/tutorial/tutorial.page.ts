import { Component, OnInit } from '@angular/core';

// Ionic
import { ModalController, NavController } from '@ionic/angular';

// Services
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss'],
})
export class TutorialPage implements OnInit {
  visible: number = 0;
  constructor(private modalCtrl: ModalController,
              private storage: StorageService,
              private navCtrl: NavController) { }

  ngOnInit() {
  }

  back () {
    this.visible = this.visible - 1;

    if (this.visible <= 0) {
      this.visible = 0;
    }
  }

  forward () {  
    this.visible = this.visible + 1;

    if (this.visible > 4) {
      this.omitir ();
    }
  }

  omitir () {
    this.storage.setValue ('visible_tutorial', false);
    this.navCtrl.navigateRoot ('home');
  }
}
