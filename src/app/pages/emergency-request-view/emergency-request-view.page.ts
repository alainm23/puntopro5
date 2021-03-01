import { Component, OnInit } from '@angular/core';

// Param
import { ActivatedRoute } from '@angular/router';

// Ionic
import { AlertController, LoadingController } from '@ionic/angular';

// Services
import { DatabaseService } from '../../services/database.service';
import { StorageService } from '../../services/storage.service';

// Geolocation
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-emergency-request-view',
  templateUrl: './emergency-request-view.page.html',
  styleUrls: ['./emergency-request-view.page.scss'],
})
export class EmergencyRequestViewPage implements OnInit {
  request_id: string;
  request: any;
  constructor(private route: ActivatedRoute,
              private database: DatabaseService,
              private loadingController: LoadingController,
              public alertController: AlertController,
              private geolocation: Geolocation,
              private storage: StorageService) { }

  ngOnInit() {
    this.request_id = this.route.snapshot.paramMap.get ('request_id');

    this.database.getEmergencyRequestById (this.request_id).subscribe ((response: any) => {
      console.log (response);
      this.request = response;
    });
  }

  async postular () {
    const loading = await this.loadingController.create({
      message: 'Procesando Informacion'
    });

    await loading.present ();

    this.geolocation.getCurrentPosition().then((resp) => {
      this.storage.getObject ('user_data').then ((r: string) => {
        const user_data =JSON.parse (r);

        const request: any = {
          id: user_data.id,
          pro_name: user_data.first_name + ' ' + user_data.last_name,
          pro_avatar: user_data.avatar,
          pro_id: user_data.id,
          latitude: resp.coords.latitude,
          longitude: resp.coords.longitude
        }

        this.database.addEmergencyRequestsPostulant (this.request_id, request)
          .then (() => {
            loading.dismiss ();
            console.log ('Ok');
          }, error => {
            loading.dismiss ();
            console.log ('Error getting location' + error);
          })
      });
    }).catch((error) => {
      loading.dismiss ();
      console.log ('Error getting location' + error);
    });
       
  }
}
