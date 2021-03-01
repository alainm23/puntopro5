import { Component, OnInit } from '@angular/core';

// Services
import { DatabaseService } from '../../services/database.service';

// Ionic
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  items: any [];
  view_type: string = "list";
  constructor(private database: DatabaseService,
              private alertController: AlertController,
              private navCtrl: NavController) { }

  ngOnInit() {
    this.database.getCategories ().subscribe ((response: any []) => {
      this.items = response;
      console.log (response);
    });
  }

  chagedView () {
    if (this.view_type === 'list') {
      this.view_type = 'card';
    } else {
      this.view_type = 'list';
    }
  }

  visibleSubC (item: any) {
    item.show_subcategories = !item.show_subcategories;
  }

  async selectEs (item: any) {
    console.log (item);
    let items: any = [];

    for (let e of item.SubCategories) {
      console.log (e);

      let i: any = {
        name: e.dataGeneral.name,
        type: 'radio',
        label: e.dataGeneral.name,
        value: e.dataGeneral,
        checked: false
      }

      items.push (i);
    }

    console.log (items);

    const alert = await this.alertController.create({
      header: 'Prompt!',
      inputs: items,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            this.goProList (data);
          }
        }
      ]
    });

    await alert.present();
  }

  goProList (item: any) {
    console.log (item);
    this.navCtrl.navigateForward ('pros-list-category/' + item.id + '/' + item.name);
  }
}
