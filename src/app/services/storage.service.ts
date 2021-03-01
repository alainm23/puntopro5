import { Injectable } from '@angular/core';

// Storage
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { }

  setObject (key: string, data: any) {
    return this.storage.set (key, JSON.stringify(data));
  }

  getObject (key: string) {
    return this.storage.get (key);
  }

  setValue (key: string, value: any) {
    return this.storage.set (key, value);
  }

  getValue (key: string) {
    return this.storage.get (key);
  }
}
