import { Component, OnInit } from '@angular/core';

// Ionic
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-choose-quote-emergency',
  templateUrl: './choose-quote-emergency.page.html',
  styleUrls: ['./choose-quote-emergency.page.scss'],
})
export class ChooseQuoteEmergencyPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  closeModal () {
    this.modalController.dismiss (null, 'none');
  }

  chose (val: boolean) {
    this.modalController.dismiss (val, 'response');
  }
}
