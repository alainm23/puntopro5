import { Component, OnInit, Input } from '@angular/core';

// Ionic
import { ModalController, AlertController, LoadingController } from '@ionic/angular';

// Forms
import { FormGroup , FormControl, Validators } from '@angular/forms';

// Services
import { DatabaseService } from '../../services/database.service';
import { StorageService } from '../../services/storage.service';
@Component({
  selector: 'app-qualify-pro',
  templateUrl: './qualify-pro.page.html',
  styleUrls: ['./qualify-pro.page.scss'],
})
export class QualifyProPage implements OnInit {
  @Input () pro_id: string;
  @Input () request_id: string;
  @Input () user_id: string;

  attention_rating: number;
  quality_rating: number;
  price_rating: number;
  comment: string = "";
  colors: any = {
    GREY: "#E0E0E0",
    GREEN: "#76ff03",
    YELLOW: "#FFCA28",
    RED: "#DD2C00"
  };

  form: FormGroup;
  constructor(private modalCtrl: ModalController, 
              private database: DatabaseService,
              private storage: StorageService,
              private loadingController: LoadingController) { }

  ngOnInit() {
    this.form = new FormGroup ({
      comment: new FormControl ('', Validators.required),
    });
  }

  rate (tipo: number, index: number) {
    if (tipo == 0) {
      this.attention_rating = index;
    } else if (tipo == 1) {  
      this.quality_rating = index;
    } else {
      this.price_rating = index;
    }
  }

  closeModal () {
    this.modalCtrl.dismiss (null, 'close');
  }

  getColor (tipo: number, index: number) {
    let rating;

    if (tipo == 0) {
      rating = this.attention_rating;
    } else if (tipo == 1) {  
      rating = this.quality_rating;
    } else {
      rating = this.price_rating;
    }


    if (this.isAboveRating (index, rating)) {
      return this.colors.GREY;
    }

    switch (rating) {
      case 1:
      case 2:
        return this.colors.RED;
      case 3:
        return this.colors.YELLOW;
      case 4:
      case 5:
        return this.colors.GREEN;        
      default:
        return this.colors.GREY;
    }
  }

  isAboveRating(index: number, rating: number): boolean {
    return index > rating;
  }

  async onSubmit () {
    this.storage.getObject ('user_data').then (async (response: string) => {
      const user_data = JSON.parse (response);
    
      const loading = await this.loadingController.create({
        message: 'Procesando Informacion ...'
      });

      await loading.present ();

      const value = this.form.value;

      const request: any = {
        id: '',
        user_id: this.user_id,
        user_name: user_data.first_name + ' ' + user_data.last_name,
        request_id: this.request_id,
        pro_id: this.pro_id,
        comment: value.comment,
        attention_rating: this.attention_rating,
        quality_rating: this.quality_rating,
        price_rating: this.price_rating,
        state: 'to_review',
        date: new Date ().toISOString (),
        timestamp: '',
      }

      this.database.addQualify (request)
        .then (() => {
          loading.dismiss ();
          this.modalCtrl.dismiss (null, 'ok');
        }, error => {
          loading.dismiss ();
          console.log ('addQualify', error);
        });
    });
  }
}
