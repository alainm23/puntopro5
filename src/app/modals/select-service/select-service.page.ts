import { Component, OnInit, Input } from '@angular/core';

// Ionic
import { ModalController, LoadingController, AlertController } from '@ionic/angular';

// Services
import { DatabaseService } from '../../services/database.service';

// Forms
import { FormGroup , FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-select-service',
  templateUrl: './select-service.page.html',
  styleUrls: ['./select-service.page.scss'],
})
export class SelectServicePage implements OnInit {
  services: any; 
  @Input() id: any;
  form: FormGroup;
  constructor(private modalController: ModalController,
              private loadingController: LoadingController,
              private database: DatabaseService,
              private alertController: AlertController) { }

  async ngOnInit() {
    console.log (this.id);

    this.form = new FormGroup ({
      max_price: new FormControl ('', Validators.required),
      min_price: new FormControl ('', [Validators.required]),
      type_job: new FormControl ('', [Validators.required]),
      description: new FormControl ('', [Validators.required]),
      service: new FormControl ('', [Validators.required]),
      subcategory_id: new FormControl (this.id, [Validators.required])
    });

    const loading = await this.loadingController.create({
      message: 'Procesando Informacion ...'
    });

    await loading.present ();

    this.database.getServicesSubCategory (this.id.id).subscribe ((response: any []) => {
      loading.dismiss ();
      this.services = response;
      console.log (response);
    }, error => {
      loading.dismiss ();
      console.log ('getServices error', error);
    });
  }

  closeModal () {
    this.modalController.dismiss (null, 'close');
  }

  onSubmit () {
    this.modalController.dismiss (this.form.value);
  }

  typeJobChange (val: string) {

  }
}
