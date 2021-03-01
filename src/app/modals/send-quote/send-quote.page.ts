import { Component, OnInit } from '@angular/core';

// Ionic
import { ModalController } from '@ionic/angular';

// Forms
import { FormGroup , FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-send-quote',
  templateUrl: './send-quote.page.html',
  styleUrls: ['./send-quote.page.scss'],
})
export class SendQuotePage implements OnInit {
  form: FormGroup;
  constructor(private modalController: ModalController) { }

  ngOnInit() {
    this.form = new FormGroup ({
      max_price: new FormControl ('', Validators.required),
      min_price: new FormControl ('', [Validators.required]),
      message: new FormControl ('', [Validators.required])
    });
  }

  closeModal () {
    this.modalController.dismiss (null, 'close');
  }

  async onSubmit () {
    this.modalController.dismiss (this.form.value, 'response');
  }
}
