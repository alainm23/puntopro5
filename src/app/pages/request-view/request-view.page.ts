import { Component, OnInit } from '@angular/core';

// Param
import { ActivatedRoute } from '@angular/router';

// Ionic
import { ModalController, NavController, LoadingController } from '@ionic/angular'; 

// Services
import { DatabaseService } from '../../services/database.service';
import { StorageService } from '../../services/storage.service';
import { UtilsService } from '../../services/utils.service';

// Animations
// import { myEnterAnimation } from '../../animations/enter';
// import { myLeaveAnimation } from '../../animations/leave'; 

// Social Sharing
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

// Pages
import { ProfilePage } from '../../modals/profile/profile.page';
import { RequestProPage } from '../../modals/request-pro/request-pro.page';
import { ChatPage } from '../../modals/chat/chat.page';

@Component({
  selector: 'app-request-view',
  templateUrl: './request-view.page.html',
  styleUrls: ['./request-view.page.scss'],
})
export class RequestViewPage implements OnInit {
  request_id: string;
  request: any;
  postulants: any [];
  constructor(private route: ActivatedRoute,
              private utils: UtilsService,
              private modalCtrl: ModalController,
              private socialSharing: SocialSharing,
              private loadingController: LoadingController,
              private database: DatabaseService,
              private storage: StorageService) { }

  ngOnInit() {
    this.request_id = this.route.snapshot.paramMap.get ('id');

    this.storage.getValue ('user_uid').then (user_id => {
      this.database.getRequestById (this.request_id).subscribe ((data: any) => {
        this.request = data;
        console.log ('data', data);

        this.database.getPostulantsByRequest (this.request_id, data.latitude, data.longitude).subscribe ((response: any []) => {
          this.postulants = response.sort ((a: any, b: any) => {
            if (this.utils.getDistancia (data.latitude, data.longitude, a.latitude, a.longitude) > 
            this.utils.getDistancia (data.latitude, data.longitude, b.latitude, b.longitude)) {
              return 1;
            }

            if (this.utils.getDistancia (data.latitude, data.longitude, a.latitude, a.longitude) < 
            this.utils.getDistancia (data.latitude, data.longitude, b.latitude, b.longitude)) {
              return -1;
            }
  
            return 0;
          });

          console.log (this.postulants);
        });
      });
    });
  }

  showMessage (item: any) {
    //item.show_message = !item.show_message;
  }

  async editRequest () {
    const parms: any = { 
      request_id: this.request_id,
      is_edit: true
    };

    console.log (parms);

    const modal = await this.modalCtrl.create({
      component: RequestProPage,
      componentProps: parms,
      mode: 'ios',
      // enterAnimation: myEnterAnimation,
      // leaveAnimation: myLeaveAnimation
    });

    modal.onDidDismiss ().then ((response: any) => {
      if (response.role === 'edit-ok') {
      }
    });

    return await modal.present();
  }

  async goProfile (item: any) {
    const parms: any = {
      id: item.id,
      profile_id: this.request.subcategory_id,
      to_confirm: true
    };

    const modal = await this.modalCtrl.create({
      component: ProfilePage,
      componentProps: parms,
      mode: 'ios',
      // enterAnimation: myEnterAnimation,
      // leaveAnimation: myLeaveAnimation
    });

    modal.onDidDismiss ().then (async (response: any) => {
      if (response.role == 'response') {
        const loading = await this.loadingController.create({
          message: 'Procesando Informacion ...'
        });

        console.log ('item', item);

        await loading.present ();

        this.database.selectProToRequest (item, this.request, this.postulants)
          .then (async (chat_id) => {
            let parms = {
              type: 'user',
              sender: this.request.client_id,
              receiver: item.id,
              _chat_id: chat_id
            };

            const modal = await this.modalCtrl.create({
              component: ChatPage,
              componentProps: parms,
              mode: 'ios',
              // enterAnimation: myEnterAnimation,
              // leaveAnimation: myLeaveAnimation
            });
        
            await modal.present();
            await loading.dismiss ();
          })
          .catch (error => {
            loading.dismiss ();
            console.log ('selectProToRequest', error);
          });
      }
    });

    return await modal.present();
  }

  shareRequest () {
    const url = 'https://puntopro.pe/?type=request?id=' + this.request_id;
    const mensaje = "Una solicitud fue creada por " + this.request.client_name + " en PuntoPro " + url;
    this.socialSharing.share (mensaje);
  }
}
