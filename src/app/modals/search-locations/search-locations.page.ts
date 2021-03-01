import { Component, OnInit, Input } from '@angular/core';

// Ionic
import { ModalController } from '@ionic/angular';

// Import services
import { DatabaseService } from '../../services/database.service';
import { StorageService } from '../../services/storage.service';

// Google Maps
declare var google: any;
@Component({
  selector: 'app-search-locations',
  templateUrl: './search-locations.page.html',
  styleUrls: ['./search-locations.page.scss'],
})
export class SearchLocationsPage implements OnInit {
  is_loading: boolean = true;

  locations: any [];
  //show_locations: boolean = true;

  //googlemaps_locations: any [];
  //autocomplete_service = new google.maps.places.AutocompleteService ();

  @Input() latitude: number;
  @Input() longitude: number;

  unsubscribe: any;
  constructor(private modalController: ModalController,
              private database: DatabaseService,
              private storage: StorageService) { }

  async ngOnInit() {
    //this.googlemaps_locations = [];

    this.storage.getValue ('user_uid').then ((id) => {
      this.unsubscribe = this.database.getLocations (id).subscribe (response => {
        this.locations = response;
        this.is_loading = false;
      });
    });
  }

  closeModal () {
    this.unsubscribe.unsubscribe ();
    this.modalController.dismiss (null, 'close');
  }

  async goLocation (item: any, type: string) {
    let response: any = {
      address: '',
      latitude: 0,
      longitude: 0
    }

    if (type === 'user') {
      response.address = item.name;
      response.latitude = item.latitude;
      response.longitude = item.longitude;

      this.modalController.dismiss (response, 'location');
    } else {
      //this.is_loading = true;
      //this.getGeoCode (item, response);
    }
  }

  getGeoCode (item: any, response: any) {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': item.description }, (results, status) => {
      if (status == google.maps.DirectionsStatus.OK) {
        this.is_loading = false;

        response.address = item.description;
        response.latitude = results[0].geometry.location.lat();
        response.longitude = results[0].geometry.location.lng();

        this.modalController.dismiss (response, 'location');
      } else {
        this.is_loading = false;
        this.closeModal ();
        console.log ("Error capturando la posicin");
      }
    });
  }

  updateSearch (ev) {
    /*
    this.is_loading = true;
    const value = ev.target.value;

    if (value === '') {
      this.is_loading = false;
      this.show_locations = true;
      this.googlemaps_locations = [];
      return;
    } else {
      this.show_locations = false;

      let request: any = {
        input: value,
        location: new google.maps.LatLng (this.latitude, this.longitude),
        radius: 10 * 1000
      };

      this.autocomplete_service.getPlacePredictions (request, (predictions, status) => {
        if (status == google.maps.DirectionsStatus.OK) {
          this.googlemaps_locations = predictions;
          this.is_loading = false;
        }
      });
    }
    */
  }
}
