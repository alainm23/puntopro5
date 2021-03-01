import { Component, OnInit } from '@angular/core';

// Ionic
import { ModalController } from '@ionic/angular';

// Import services
import { DatabaseService } from '../../services/database.service';
import { StorageService } from '../../services/storage.service';
@Component({
  selector: 'app-search-subcategories',
  templateUrl: './search-subcategories.page.html',
  styleUrls: ['./search-subcategories.page.scss'],
})
export class SearchSubcategoriesPage implements OnInit {
  is_loading: boolean = true;
  list_backup: any;
  list: any;

  unsubscribe: any;
  constructor(private modalController: ModalController,
              private database: DatabaseService,
              private storage: StorageService) { }

  ngOnInit() {
    this.unsubscribe = this.database.getAllSubCategories ().subscribe (response => {
      this.list = response;
      this.list_backup = response;
      this.is_loading = false;
    });
  }
  
  closeModal () {
    this.unsubscribe.unsubscribe ();
    this.modalController.dismiss (null, 'close');
  }

  updateSearch (ev) {
    this.list = this.list_backup;
    const value = ev.target.value;

    if (value == "") {
      this.list = this.list_backup;
    } else {
      this.list = this.list.filter (item => {
        return (item.keywords.toLowerCase().indexOf(value.toLowerCase()) > -1);
      });
    }
  }

  select (item: any) {
    this.modalController.dismiss (item, 'response');
  }
}
