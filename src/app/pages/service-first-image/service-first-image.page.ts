import { Component, OnInit } from '@angular/core';

// Ionic
import { ActionSheetController, NavController } from '@ionic/angular';

// Services
import { StorageService } from '../../services/storage.service';

// Camera
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-service-first-image',
  templateUrl: './service-first-image.page.html',
  styleUrls: ['./service-first-image.page.scss'],
})
export class ServiceFirstImagePage implements OnInit {
  user_data: any;
  image: string = '';
  constructor(private storage: StorageService,
              private camera: Camera,
              private navCtrl: NavController) { }

  ngOnInit() {
    this.storage.getObject ('user_data').then (response => {
      this.user_data =JSON.parse (response);
    });
  }

  async selectPicture () {
    const options: CameraOptions = {
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM, 
      destinationType: this.camera.DestinationType.DATA_URL,
      quality: 100,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }

  async takePicture () {
    const options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      quality: 100,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }

  clearImage () {
    this.image = '';
  }

  onSubmit () {
    if (this.image !== '') {
      this.storage.setValue ('soypro_service_image', this.image);
    }
    
    this.navCtrl.navigateForward ('select-plan');
  }
}
