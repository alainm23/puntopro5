import { Component, OnInit, Input } from '@angular/core';

// Ionic
import { LoadingController, AlertController, NavController } from '@ionic/angular';

// Services
import { DatabaseService } from '../../services/database.service';
import { StorageService } from '../../services/storage.service';

// Forms
import { FormGroup , FormControl, Validators } from '@angular/forms';

// Param
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-soypro-cfg-service',
  templateUrl: './soypro-cfg-service.page.html',
  styleUrls: ['./soypro-cfg-service.page.scss'],
})
export class SoyproCfgServicePage implements OnInit {
  id: string;
  name: string;
  services: any; 
  form: FormGroup;
  constructor(private route: ActivatedRoute,
              private loadingController: LoadingController,
              private database: DatabaseService,
              private navCtrl: NavController,
              private storage: StorageService,
              private alertController: AlertController) { }

  async ngOnInit() {
    this.id = this.route.snapshot.paramMap.get ('id');
    this.name = this.route.snapshot.paramMap.get ('name');

    this.form = new FormGroup ({
      max_price: new FormControl ('', Validators.required),
      min_price: new FormControl ('', [Validators.required]),
      description: new FormControl ('', [Validators.required]),
      service: new FormControl ('', [Validators.required]),
      subcategory_id: new FormControl (this.id, [Validators.required]),
      subcategory_name: new FormControl (this.name, [Validators.required]),
    });

    const loading = await this.loadingController.create({
      message: 'Procesando Informacion ...'
    });

    await loading.present ();

    this.database.getServicesSubCategory (this.id).subscribe ((response: any []) => {
      loading.dismiss ();
      this.services = response;
      console.log (response);

      if (response.length > 0) {
        this.form.controls ['service'].setValue (response [0].dataGeneral);
      }
    }, error => {
      loading.dismiss ();
      console.log ('getServices error', error);
    });
  }

  goback () {
    this.navCtrl.navigateBack ('soypro-select-category');
  }

  submit () {
    this.storage.setObject ("soypro_service_config", this.form.value);
    this.navCtrl.navigateForward ('soypro-select-plan');
  }
}
