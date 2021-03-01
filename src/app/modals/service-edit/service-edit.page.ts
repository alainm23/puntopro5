import { Component, OnInit, Input } from '@angular/core';

// Ionic
import { ModalController, LoadingController } from '@ionic/angular';

// Services
import { DatabaseService } from '../../services/database.service';
import { StorageService } from '../../services/storage.service';

// Forms
import { FormGroup , FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-service-edit',
  templateUrl: './service-edit.page.html',
  styleUrls: ['./service-edit.page.scss'],
})
export class ServiceEditPage implements OnInit {
  @Input() id: string;
  @Input() max_price: string;
  @Input() min_price: string;
  @Input() type_job: string;
  @Input() description: string;
  @Input() service_id: string;
  @Input() service_name: string;
  @Input() subcategory_id: string;

  form: FormGroup;
  constructor(private loadingController: LoadingController,
              private modalController: ModalController,
              private database: DatabaseService,
              private storage: StorageService) { }

  ngOnInit() {
    this.form = new FormGroup ({
      max_price: new FormControl (this.max_price, Validators.required),
      min_price: new FormControl (this.min_price, [Validators.required]),
      type_job: new FormControl (this.type_job, [Validators.required]),
      description: new FormControl (this.description, [Validators.required]),
      service_id: new FormControl (this.service_id, [Validators.required]),
      service_name: new FormControl (this.service_name, [Validators.required]),
      subcategory_id: new FormControl (this.subcategory_id, [Validators.required])
    });
  }

  async onSubmit () {
    const loading = await this.loadingController.create({
      message: 'Procesando Informacion ...'
    });

    await loading.present ();

    this.storage.getValue ('user_uid').then ((id) => {
      console.log (id);
      console.log (this.form.value);

      this.database.updateService (id, this.form.value)
      .then (() => {
        loading.dismiss ();
        this.closeModal ();
      }).catch (error => {
        console.log ('updateService error', error);
        loading.dismiss ();
        this.closeModal ();
      });
    })
  }

  closeModal () {
    this.modalController.dismiss (null, 'close');
  }

  typeJobChange (item: any) {

  }
}
