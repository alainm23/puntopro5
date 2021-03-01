import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { first, map } from 'rxjs/operators';
import { combineLatest, of } from "rxjs";
import { AngularFireStorage } from '@angular/fire/storage';
import * as firebase from 'firebase/app'; 
import 'firebase/firestore';

import { UtilsService } from './utils.service';  

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private afs: AngularFirestore, 
              private af_storage: AngularFireStorage,
              private utils: UtilsService) { }

  // User
  getUser (uid: string) {
    return this.afs.collection ('Users').doc (uid).valueChanges ();
  }

  getUserById (uid: string) {
    return this.afs.collection ('Users').doc (uid).valueChanges ();
  }

  async updateUser (id: string, request: any) {
    let batch = this.afs.firestore.batch ();
    
    let step_1 = this.afs.collection ('Users').doc (id).ref;
    batch.update (step_1, request);

    let step_2 = this.afs.collection ('Professionals').doc (id).ref;
    batch.update (step_2, {
      fullname: request.first_name + ' ' + request.last_name,
      avatar: request.avatar
    });

    return await batch.commit ();
  }

  async updateToken (uid: string, oS: string) {
    let batch = this.afs.firestore.batch ();
    
    let step_1 = this.afs.collection ('Users').doc (uid).ref;
    batch.update (step_1, { token: oS });

    let step_2 = this.afs.collection ('Professionals').doc (uid).ref;
    batch.update (step_2, { token: oS });

    return await batch.commit ();
  }
  updatePro (id: string, request: any) {
    return this.afs.collection ('Professionals').doc (id).update (request);
  }

  updateEmailUser (user_id: string, email: string) {
    return this.afs.collection ('Users').doc (user_id).update ({ email: email });
  }

  addUser (data: any) {
    return this.afs.collection ('Users').doc (data.id).set (data);
  }

  addLocation (user_uid: string, data: any) {
    const id = this.afs.createId ();
    data.id = id;

    return this.afs.collection ('Users').doc (user_uid).collection ('Locations').doc (id).set (data);
  }

  isFavorite (id: string, user_uid: string) {
    return this.afs.collection ('Users').doc (id).collection ('Favorites').doc (user_uid).valueChanges ();
  }

  add_Favorite (id: string, user_uid: string) {
    return this.afs.collection ('Users').doc (id).collection ('Favorites').doc (user_uid).set ({ id: user_uid });
  }

  isProRequested (user_uid: string, pro_uid: string) {
    return this.afs.collection ('Users').doc (user_uid).collection ('RequestedPros').doc (pro_uid).valueChanges ();
  }

  getAllProRequested (user_uid: string) {
    return this.afs.collection ('Users').doc (user_uid).collection ('RequestedPros').valueChanges ();
  }

  delete_Favorite (id: string, user_uid: string) {
    return this.afs.collection ('Users').doc (id).collection ('Favorites').doc (user_uid).delete ();
  }

  createId () {
    return this.afs.createId ();
  }

  getLocations (user_uid: string) {
    return this.afs.collection ('Users').doc (user_uid).collection ('Locations').valueChanges ();
  }
  
  getFavoritesByUser(user_uid: string) {
    const collection = this.afs.collection ('Users').doc (user_uid).collection ('Favorites');

    return collection.snapshotChanges ().pipe (map (refReferencias => {
      if (refReferencias.length > 0) {
        return refReferencias.map (refReferencia => {
          const data: any = refReferencia.payload.doc.data();

          return this.getProById (data.id).pipe (map (dataGeneral => Object.assign ({}, { data, dataGeneral })));
        });
      }
    })).mergeMap (observables => {
      if (observables) {
        return combineLatest(observables);
      } else {
        return of([]);
      }
    });
  }
  
  getAllRequestByUser (user_uid: string) { 
    const collection = this.afs.collection ('Users').doc (user_uid).collection ('Requests_Created');

    return collection.snapshotChanges ().pipe (map (refReferencias => {
      if (refReferencias.length > 0) {
        return refReferencias.map (refReferencia => {
          const data: any = refReferencia.payload.doc.data();

          let postulants: any;
          this.getPostulantsByRequestN (data.id).subscribe ((response: any []) => {
            postulants = response.length;
          });

          return this.getRequestById (data.id).pipe (map (dataGeneral => Object.assign ({}, { data, postulants, dataGeneral })));
        });
      }
    })).mergeMap (observables => {
      if (observables) {
        return combineLatest(observables);
      } else {
        return of([]);
      }
    });
  }

  // Request
  getRequestById (id: string) {
    return this.afs.collection ('Requests').doc (id).valueChanges ();
  }

  //PhoneNumber valid
  isPhoneNumberValid (val: string) {
    return this.afs.collection ('validatedPhoneNumbers').doc (val).valueChanges ();
  }

  // Categories
  getCategories () {
    const collection = this.afs.collection ("Categories");

    return collection.snapshotChanges ().pipe (map (refReferencias => {
      if (refReferencias.length > 0) {
        return refReferencias.map (refReferencia => {
          const data: any = refReferencia.payload.doc.data();
          let show_subcategories = false;

          return this.getSubCategories (data.id).pipe (map (SubCategories => Object.assign ({}, { data, SubCategories, show_subcategories })));
        });
      }
    })).mergeMap (observables => {
      if (observables) {
        return combineLatest(observables);
      } else {
        return of([]);
      }
    });
  }

  getSubCategories (id: string) {
    const collection = this.afs.collection ("Categories").doc (id).collection ("SubCategories");

    return collection.snapshotChanges ().pipe (map (refReferencias => {
      if (refReferencias.length > 0) {
        return refReferencias.map (refReferencia => {
          const data: any = refReferencia.payload.doc.data();
          
          return this.getSubCategoriesById (data.id).pipe (map (dataGeneral => Object.assign ({}, { data, dataGeneral })));
        });
      }
    })).mergeMap (observables => {
      if (observables) {
        return combineLatest(observables);
      } else {
        return of([]);
      }
    });
  }

  getSubCategoriesById (id: string) {
    return this.afs.collection ('SubCategories').doc (id).valueChanges ();
  }

  getAllSubCategories () {
    return this.afs.collection ('SubCategories').valueChanges ();
  }

  // Services
  getServicesSubCategory (id: string) {
    const collection = this.afs.collection ("SubCategories").doc (id).collection ("Services");

    return collection.snapshotChanges ().pipe (map (refReferencias => {
      if (refReferencias.length > 0) {
        return refReferencias.map (refReferencia => {
          const data: any = refReferencia.payload.doc.data();
          
          return this.getServiceById (data.id).pipe (map (dataGeneral => Object.assign ({}, { data, dataGeneral })));
        });
      }
    })).mergeMap (observables => {
      if (observables) {
        return combineLatest(observables);
      } else {
        return of([]);
      }
    });
  }

  getServiceById (id: string) {
    return this.afs.collection ('Services').doc (id).valueChanges ();
  }

  // Professionals
  async addProfessionals (user_id: string, user_data: any, pro_data: any, service_data: any, phone_number: any, avatar_url: string) {
    pro_data.id = user_id;
    pro_data.avatar = avatar_url;
    pro_data.phone_number = phone_number.phoneNumber;
    pro_data.fullname = user_data.first_name + ' ' + user_data.last_name;
    //service_data.id = service_data.service.id;

    let batch = this.afs.firestore.batch ();
    
    let step_1 = this.afs.collection ('Professionals').doc (user_id).ref;
    batch.set (step_1, pro_data);
    
    let step_2 = this.afs.collection ('Professionals').doc (user_id).collection ('Profiles').doc (service_data.subcategory_id).ref;
    batch.set (step_2, {
      name: service_data.subcategory_name,
      id: service_data.subcategory_id,
      max_price: service_data.max_price,
      min_price: service_data.min_price,
      description: service_data.description,
      date_added: new Date ().toISOString(),
      services: [{
        name: service_data.service.name, 
        id: service_data.service.id
      }]
    })
    
    let step_3 = this.afs.collection ('Professionals').doc (user_id).collection ('Services').doc (service_data.service.id).ref;
    batch.set (step_3, { 'id':  service_data.service.id });

    let step_4 = this.afs.collection ('Professionals').doc (user_id).collection ('SubCategories').doc (service_data.subcategory_id).ref;
    batch.set (step_4, { 'id':  service_data.subcategory_id });

    let step_5 = this.afs.collection ('Users').doc (user_id).ref;
    batch.update (step_5, user_data);

    return await batch.commit ();    
  }

  addImageGalleryProfile (user_uid: string, subcategory_id: string, image: string, image_id: string, filePath: string) {
    const data: any = {
      id: image_id,
      image: filePath,
      description: '',
      date_added: new Date ().toISOString ()
    };

    return this.afs.collection ('Professionals').doc (user_uid)
      .collection ('Galleries').doc (subcategory_id)
      .collection ('images').doc (image_id).set (data);
  }

  removeProImageService (user_id: string, service: any, image: any) {
    return this.afs.collection ('Professionals').doc (user_id)
      .collection ('Galleries').doc (service.id)
      .collection ('images').doc (image.id).delete ();
  }

  getProById (id: string) {
    return this.afs.collection ('Professionals').doc (id).valueChanges ();
  }

  getServicesByPro (id: string) {
    return this.afs.collection ('Professionals').doc (id).collection ('Services').valueChanges ();
  }
  // Search Pros
  getProsBySubCategory (id: string) {
    const collection = this.afs.collection ("SubCategories").doc (id).collection ("Users");

    return collection.snapshotChanges ().pipe (map (refReferencias => {
      if (refReferencias.length > 0) {
        return refReferencias.map (refReferencia => {
          const data: any = refReferencia.payload.doc.data();
          return this.getProById (data.id).pipe (map (dataGeneral => Object.assign ({}, { data, dataGeneral })));
        });
      }
    })).mergeMap (observables => {
      if (observables) {
        return combineLatest(observables);
      } else {
        return of([]);
      }
    });
  }

  async addProService (id: string, request: any) {
    let batch = this.afs.firestore.batch ();
    request.id = id;
  
    let step_3 = this.afs.collection ('Professionals').doc (id).collection ('Services').doc (request.service_id).ref;
    batch.set (step_3, request);
   
    let step_4 = this.afs.collection ('Professionals').doc (id).collection ('SubCategories').doc (request.subcategory_id).ref;
    batch.set (step_4, { 'id':  request.subcategory_id });

    let step_5 = this.afs.collection ('Services').doc (request.service_id).collection ('Users').doc (id).ref;
    batch.set (step_5, { 'id': id });

    let step_6 = this.afs.collection ('SubCategories').doc (request.subcategory_id).collection ('Users').doc (id).ref;
    batch.set (step_6, { 'id': id });

    return await batch.commit ();
  }

  updateService (id: string, request: any) {
    return this.afs.collection ('Professionals').doc (id).collection ('Services').doc (request.service_id).update (request);
  }

  async removeProService (id: string, request: any) {
    let batch = this.afs.firestore.batch ();
  
    let step_3 = this.afs.collection ('Professionals').doc (id).collection ('Services').doc (request.service_id).ref;
    batch.delete (step_3);
   
    let step_4 = this.afs.collection ('Professionals').doc (id).collection ('SubCategories').doc (request.subcategory_id).ref;
    batch.delete (step_4);

    let step_5 = this.afs.collection ('Services').doc (request.service_id).collection ('Users').doc (id).ref;
    batch.delete (step_5);

    let step_6 = this.afs.collection ('SubCategories').doc (request.subcategory_id).collection ('Users').doc (id).ref;
    batch.delete (step_6);

    return await batch.commit ();
  }

  getServiceGallery (user_id: string, service_id: string) {
    const collection = this.afs.collection ('Professionals').doc (user_id).collection ('Galleries').doc (service_id).collection ('images');
    
    return collection.snapshotChanges ().pipe (map (refReferencias => {
      if (refReferencias.length > 0) {
        return refReferencias.map (refReferencia => {
          const data: any = refReferencia.payload.doc.data();
          data.image_async = this.af_storage.ref (data.image).getDownloadURL ();  
          return data;
        });
      }
    }));
  }

  getProServicesGalleries (id: string) {
    const collection = this.afs.collection ('Professionals').doc (id).collection ('Services');

    return collection.snapshotChanges ().pipe (map (refReferencias => {
      if (refReferencias.length > 0) {
        return refReferencias.map (refReferencia => {
          const data: any = refReferencia.payload.doc.data();
          
          return this.getServiceGallery (id, data.id).pipe (map (dataGeneral => Object.assign ({}, { data, dataGeneral })));
        });
      }
    })).mergeMap (observables => {
      if (observables) {
        return combineLatest(observables);
      } else {
        return of([]);
      }
    });
  }
  // Chat
  async sendMessage (request: any, chat_id: string, user_id: string, profile_id: string, chat_exists: boolean) {
    request.timestamp = firebase.firestore.FieldValue.serverTimestamp ();
    
    if (chat_exists === false) {
      await this.addChatId (user_id, profile_id, chat_id);
    }

    return this.afs.collection ("Chats").doc (chat_id).collection ("Chats").doc (request.id).set (request);
  }

  getChatId (user_id: string, pro_id: string) {
    return this.afs.collection ('Users').doc (user_id).collection ('Chats').doc (pro_id).valueChanges ();
  }

  getChatIdByPro (pro_id: string, user_id: string) {
    return this.afs.collection ('Professionals').doc (pro_id).collection ('Chats').doc (user_id).valueChanges ();
  }
  
  getChats (chat_id: string) {
    return this.afs.collection ("Chats").doc (chat_id).collection ("Chats", ref => ref.orderBy ('timestamp')).valueChanges ();
  }

  getProChatList (user_id: string) {
    const collection = this.afs.collection ('Professionals').doc (user_id).collection ('Chats');

    return collection.snapshotChanges ().pipe (map (refReferencias => {
      if (refReferencias.length > 0) {
        return refReferencias.map (refReferencia => {
          const data: any = refReferencia.payload.doc.data();

          return this.getUser (data.user_id).pipe (map (dataGeneral => Object.assign ({}, { data, dataGeneral })));
        });
      }
    })).mergeMap (observables => {
      if (observables) {
        return combineLatest(observables);
      } else {
        return of([]);
      }
    });
  }

  getUserChatList (user_id: string) {
    const collection = this.afs.collection ('Users').doc (user_id).collection ('Chats');

    return collection.snapshotChanges ().pipe (map (refReferencias => {
      if (refReferencias.length > 0) {
        return refReferencias.map (refReferencia => {
          const data: any = refReferencia.payload.doc.data();

          return this.getProById (data.pro_id).pipe (map (dataGeneral => Object.assign ({}, { data, dataGeneral })));
        });
      }
    })).mergeMap (observables => {
      if (observables) {
        return combineLatest(observables);
      } else {
        return of([]);
      }
    });
  }

  async addChatId (user_id: string, pro_id: string, chat_id: string) {
    let batch = this.afs.firestore.batch ();
    const value: any = {
      chat_id: chat_id,
      user_id: user_id,
      pro_id: pro_id
    };

    let step_1 = this.afs.collection ('Users').doc (user_id).collection ('Chats').doc (pro_id).ref;
    batch.set (step_1, value);

    let step_2 = this.afs.collection ('Professionals').doc (pro_id).collection ('Chats').doc (user_id).ref;
    batch.set (step_2, value);

    return await batch.commit ();
  }

  async updateRequest (request_id: string, data: any) {
    return this.afs.collection ('Requests').doc (request_id).update (data);
  }

  getEmergencyRequestsToConfirmByService (service_id: string) {
    const collection = this.afs.collection ('Emergency_Requests').doc (service_id).collection ('Requests');

    return collection.snapshotChanges ().pipe (map (refReferencias => {
      console.log ('refReferencias', refReferencias);

      if (refReferencias.length > 0) {
        return refReferencias.map (refReferencia => {
          const data: any = refReferencia.payload.doc.data();

          return this.getRequestById (data.id).pipe (map (dataGeneral => Object.assign ({}, { data, dataGeneral })));
        });
      }
    })).mergeMap (observables => {
      if (observables) {
        return combineLatest(observables);
      } else {
        return of([]);
      }
    });
  }

  getQuoteRequestsToConfirmByService (service_id: string) {
    const collection = this.afs.collection ('Quotation_Requests').doc (service_id).collection ('Requests');

    return collection.snapshotChanges ().pipe (map (refReferencias => {
      console.log ('refReferencias', refReferencias);

      if (refReferencias.length > 0) {
        return refReferencias.map (refReferencia => {
          const data: any = refReferencia.payload.doc.data();

          return this.getRequestById (data.id).pipe (map (dataGeneral => Object.assign ({}, { data, dataGeneral })));
        });
      }
    })).mergeMap (observables => {
      if (observables) {
        return combineLatest(observables);
      } else {
        return of([]);
      }
    });
  }

  getEmergencyRequestsToConfirmByUser (user_id: string) {
    const collection = this.afs.collection ('Professionals').doc (user_id).collection ('Services');

    return collection.snapshotChanges ().pipe (map (refReferencias => {
      if (refReferencias.length > 0) {
        return refReferencias.map (refReferencia => {
          const data: any = refReferencia.payload.doc.data();

          console.log ('getRequestsToConfirmByUser', data);

          return this.getEmergencyRequestsToConfirmByService (data.id).pipe (map (dataGeneral => Object.assign ({}, { data, dataGeneral })));
        });
      }
    })).mergeMap (observables => {
      if (observables) {
        return combineLatest(observables);
      } else {
        return of([]);
      }
    });
  }

  getQuoteRequestsToConfirmByUser (user_id: string) {
    const collection = this.afs.collection ('Professionals').doc (user_id).collection ('Services');

    return collection.snapshotChanges ().pipe (map (refReferencias => {
      if (refReferencias.length > 0) {
        return refReferencias.map (refReferencia => {
          const data: any = refReferencia.payload.doc.data();

          console.log ('getRequestsToConfirmByUser', data);

          return this.getQuoteRequestsToConfirmByService (data.id).pipe (map (dataGeneral => Object.assign ({}, { data, dataGeneral })));
        });
      }
    })).mergeMap (observables => {
      if (observables) {
        return combineLatest(observables);
      } else {
        return of([]);
      }
    });
  }

  async addPostulate (pro_id: string, request_id: string, data: any) {
    let batch = this.afs.firestore.batch ();

    let step_1 = this.afs.collection ('Requests').doc (request_id).collection ('Postulants').doc (data.id).ref;
    batch.set (step_1, data);

    let step_2 = this.afs.collection ('Professionals').doc (pro_id).collection ('Requests_Submitted').doc (request_id).ref;
    batch.set (step_2, {
      id: request_id,
      state: 'sent'
    });

    return await batch.commit ();
  }

  getProProfileById (id: string, profile_id: string) {
    return this.afs.collection ('Professionals').doc (id).collection ("Profiles").doc (profile_id).valueChanges ();
  }

  isQuoteSent (pro_id: string, request_id: string) {
    return this.afs.collection ('Requests').doc (request_id).collection ('Postulants').doc (pro_id).valueChanges ();
  }

  getPostulantsByRequest (request_id: string, latitude: number, longitude: number) {
    return this.afs.collection ('Requests').doc (request_id).collection ('Postulants').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;

        const distance = this.utils.getDistancia (latitude, longitude, data.latitude, data.longitude).toFixed (1);

        return { id, distance, ...data };
      }))
    );
  }

  getPostulantsByRequestN (request_id: string) {
    return this.afs.collection ('Requests').doc (request_id).collection ('Postulants').valueChanges ();
  }

  async selectProToRequest (data: any, request: any, postulants: any []) {
    let batch = this.afs.firestore.batch ();

    
    let step_1 = this.afs.collection ('Requests').doc (request.id).ref;
    batch.update (step_1, {
      pro_avatar: data.pro_avatar,
      pro_name: data.pro_fullname,
      pro_id: data.pro_id,
      state: 'in_progress',
      in_progress_date: new Date ().toISOString ()
    });

    let chat_id = "";
    const unsubscribe = this.getChatId (request.client_id, data.pro_id).subscribe (async (chat_id: any) => {
      if (chat_id === null || chat_id === undefined) {
        chat_id = this.createId ();
        await this.addChatId (request.client_id, data.pro_id, chat_id);
      } else {
        chat_id = chat_id.chat_id;
      }

      let step_2 = this.afs.collection ('Chats').doc (chat_id).collection ('Requests').doc (request.id).ref;
      batch.set (step_2, request);

      const msg: any = {
        id: this.createId (),
        message: '',
        request: request,
        is_request: true,
        user_avatar: request.client_avatar,
        user_name: request.client_name,
        user_id: request.client_id,
        date: new Date ().toISOString (),
        timestamp: firebase.firestore.FieldValue.serverTimestamp (),
        image: ''
      };

      let step_3 = this.afs.collection ("Chats").doc (chat_id).collection ("Chats").doc (msg.id).ref;
      batch.set (step_3, msg);

      unsubscribe.unsubscribe ();
      await batch.commit ();

      return chat_id;
    });
  }

  getProRequestHistory (pro_id: string) {
    const collection = this.afs.collection ('Professionals').doc (pro_id).collection ('Requests_Submitted');

    return collection.snapshotChanges ().pipe (map (refReferencias => {
      if (refReferencias.length > 0) {
        return refReferencias.map (refReferencia => {
          const data: any = refReferencia.payload.doc.data();

          return this.getRequestById (data.id).pipe (map (dataGeneral => Object.assign ({}, { data, dataGeneral })));
        });
      }
    })).mergeMap (observables => {
      if (observables) {
        return combineLatest(observables);
      } else {
        return of([]);
      }
    });
  }

  async addRequests (request: any) {
    request.id = this.createId ();

    let batch = this.afs.firestore.batch ();

    let step_1 = this.afs.collection ('Requests').doc (request.id).ref;
    batch.set (step_1, request); 

    await batch.commit ();

    return request;
  }

  wasEmergencyRequestsCreated (user_id: string, service_id: string) {
    return this.afs.collection ('Users').doc (user_id).collection ('Active_Requests').doc(service_id).valueChanges ();
  }

  getEmergencyRequestById (id: string) {
    return this.afs.collection ('EmergencyRequests').doc (id).valueChanges ();
  }

  addEmergencyRequestsPostulant (id: string, request: any) {
    return this.afs.collection ('EmergencyRequests').doc (id).collection ('Postulants').doc (request.id).set (request);
  }

  getPostulantsByEmergencyRequest (id: string) {
    return this.afs.collection ('EmergencyRequests').doc (id).collection ('Postulants').valueChanges ();
  }

  getAllEmergencyRequest (id: string) {
    const collection = this.afs.collection ('Users').doc (id).collection ('EmergencyRequests');

    return collection.snapshotChanges ().pipe (map (refReferencias => {
      if (refReferencias.length > 0) {
        return refReferencias.map (refReferencia => {
          const data: any = refReferencia.payload.doc.data();

          return this.getEmergencyRequestById (data.id).pipe (map (dataGeneral => Object.assign ({}, { data, dataGeneral })));
        });
      }
    })).mergeMap (observables => {
      if (observables) {
        return combineLatest(observables);
      } else {
        return of([]);
      }
    });
  }
  //Qualify
  async addQualify (request: any) {
    request.timestamp = firebase.firestore.FieldValue.serverTimestamp ();
    let id = this.createId ();

    request.id = id;
    let batch = this.afs.firestore.batch ();

    let step_1 = this.afs.collection ('Ratings').doc (id).ref;
    batch.set (step_1, request);

    let step_2 = this.afs.collection ('Requests').doc (request.request_id).ref;
    batch.update (step_2, { 
      state: 'finalized' 
    });

    let step_3 = this.afs.collection ('Professionals').doc (request.pro_id).collection ('Requests_Submitted').doc (request.request_id).ref;
    batch.update (step_3, { 
      state: 'finalized' 
    });

    let step_4 = this.afs.collection ('Professionals').doc (request.pro_id).collection ("Ratings").doc (id).ref;
    batch.set (step_4, {
      id: id,
      state: request.state
    });

    let step_5 = this.afs.collection ('Users').doc (request.user_id).collection ("Ratings_Sent").doc (id).ref;
    batch.set (step_5, {
      id: id
    });

    let step_6 = this.afs.collection ('Ratings_To_Check').doc (id).ref;
    batch.set (step_6, {
      id: id
    });

    return await batch.commit ();
  }

  getRatingById (id: string) {
    return this.afs.collection ('Ratings').doc (id).valueChanges ();
  }

  getComments (pro_id: string) {
    const collection = this.afs.collection ('Professionals').doc (pro_id).collection ('Ratings')

    return collection.snapshotChanges ().pipe (map (refReferencias => {
      if (refReferencias.length > 0) {
        return refReferencias.map (refReferencia => {
          const data: any = refReferencia.payload.doc.data();

          return this.getRatingById (data.id).pipe (map (dataGeneral => Object.assign ({}, { data, dataGeneral })));
        });
      }
    })).mergeMap (observables => {
      if (observables) {
        return combineLatest(observables);
      } else {
        return of([]);
      }
    });
  }

  /*
    Home
  */

  getProfesionalByName (name: string) {
    const key = name.substring (0, 3).toLowerCase ();
    return this.afs.collection ('Professionals_Search').doc (key).collection ('Professionals').valueChanges ();
  }

  generateName (): string {
    const list: any [] = [
      {"first_name":"Care","last_name":"Lemin"},
      {"first_name":"Daisey","last_name":"Jepps"},
      {"first_name":"Veronika","last_name":"Hessentaler"},
      {"first_name":"Kristan","last_name":"Harmson"},
      {"first_name":"Abdel","last_name":"Drayton"},
      {"first_name":"Bell","last_name":"Zanioletti"},
      {"first_name":"Bryana","last_name":"Illingsworth"},
      {"first_name":"Briana","last_name":"Tredger"},
      {"first_name":"Vite","last_name":"Cottey"},
      {"first_name":"Devonne","last_name":"McGoogan"},
      {"first_name":"Sibbie","last_name":"Filkin"},
      {"first_name":"Giacopo","last_name":"Glennon"},
      {"first_name":"Karyn","last_name":"Creane"},
      {"first_name":"Yurik","last_name":"Dormand"},
      {"first_name":"Berny","last_name":"Quinion"},
      {"first_name":"Raven","last_name":"Schott"},
      {"first_name":"Arnuad","last_name":"Clausson"},
      {"first_name":"Ellette","last_name":"Deetch"},
      {"first_name":"Clayborne","last_name":"Will"},
      {"first_name":"Ilka","last_name":"Caitlin"},
      {"first_name":"Stacee","last_name":"Chalcraft"},
      {"first_name":"Conney","last_name":"Lambot"},
      {"first_name":"Crissie","last_name":"Bigadike"},
      {"first_name":"Ambrosius","last_name":"Belsey"},
      {"first_name":"Galvin","last_name":"Breakey"},
      {"first_name":"Fonsie","last_name":"Salatino"},
      {"first_name":"Lamont","last_name":"Broadbridge"},
      {"first_name":"Sonja","last_name":"Cornock"},
      {"first_name":"Sibeal","last_name":"Kennea"},
      {"first_name":"Gabe","last_name":"Toffetto"},
      {"first_name":"Selene","last_name":"Manville"},
      {"first_name":"Ransom","last_name":"Tynan"},
      {"first_name":"Terri","last_name":"Myrkus"},
      {"first_name":"Charlotta","last_name":"Dalston"},
      {"first_name":"Benedicta","last_name":"Cornilleau"},
      {"first_name":"Saidee","last_name":"Walklate"},
      {"first_name":"Konstantin","last_name":"Archard"},
      {"first_name":"Iris","last_name":"Acheson"},
      {"first_name":"Theressa","last_name":"Matteacci"},
      {"first_name":"Garald","last_name":"Daens"},
      {"first_name":"Abner","last_name":"Ruddick"},
      {"first_name":"Nevsa","last_name":"Kolak"},
      {"first_name":"Kass","last_name":"Neylan"},
      {"first_name":"Rolfe","last_name":"Soeiro"},
      {"first_name":"Clotilda","last_name":"Darlison"},
      {"first_name":"Leena","last_name":"Hargerie"},
      {"first_name":"Reynold","last_name":"Ferie"},
      {"first_name":"Rennie","last_name":"Faveryear"},
      {"first_name":"Evania","last_name":"Tremberth"},
      {"first_name":"Gareth","last_name":"Pitcher"},
      {"first_name":"Nicolai","last_name":"Reynoollds"},
      {"first_name":"Leslie","last_name":"Prisk"},
      {"first_name":"Nicky","last_name":"Toby"},
      {"first_name":"Avrit","last_name":"Cohani"},
      {"first_name":"Terrye","last_name":"Eayres"},
      {"first_name":"Bayard","last_name":"Culkin"},
      {"first_name":"Caril","last_name":"Dandison"},
      {"first_name":"Theo","last_name":"Trevallion"},
      {"first_name":"Charmaine","last_name":"Butterfield"},
      {"first_name":"Chickie","last_name":"Matthis"},
      {"first_name":"Jamil","last_name":"Pendrich"},
      {"first_name":"Jordanna","last_name":"Nassie"},
      {"first_name":"Sasha","last_name":"Jensen"},
      {"first_name":"Guillermo","last_name":"Stollenberg"},
      {"first_name":"Jourdan","last_name":"Borg-Bartolo"},
      {"first_name":"Lamar","last_name":"MacMickan"},
      {"first_name":"Chick","last_name":"Wedon"},
      {"first_name":"Henrie","last_name":"Streather"},
      {"first_name":"Carlina","last_name":"Brager"},
      {"first_name":"Kate","last_name":"Osbourne"},
      {"first_name":"Clotilda","last_name":"Rimell"},
      {"first_name":"Camey","last_name":"Demcak"},
      {"first_name":"Mimi","last_name":"Bodimeade"},
      {"first_name":"Parrnell","last_name":"Reddell"},
      {"first_name":"Kingsly","last_name":"Bonefant"},
      {"first_name":"Jaime","last_name":"Du Plantier"},
      {"first_name":"Corny","last_name":"Saward"},
      {"first_name":"Hyacinthe","last_name":"Sickert"},
      {"first_name":"Nikolia","last_name":"Greenstock"},
      {"first_name":"Rudy","last_name":"Rothwell"},
      {"first_name":"Prinz","last_name":"Licquorish"},
      {"first_name":"Val","last_name":"Everard"},
      {"first_name":"Odette","last_name":"Tree"},
      {"first_name":"Adolpho","last_name":"Caswall"},
      {"first_name":"Bob","last_name":"Cymper"},
      {"first_name":"Merwyn","last_name":"Creeghan"},
      {"first_name":"Tish","last_name":"Dionisetto"},
      {"first_name":"Karee","last_name":"McTiernan"},
      {"first_name":"Edgar","last_name":"Yakebowitch"},
      {"first_name":"Sauncho","last_name":"Gillicuddy"},
      {"first_name":"Wyatan","last_name":"Yewman"},
      {"first_name":"Heddi","last_name":"Brisley"},
      {"first_name":"Julie","last_name":"Moyer"},
      {"first_name":"Selia","last_name":"Tinson"},
      {"first_name":"Dell","last_name":"Vinall"},
      {"first_name":"Buddy","last_name":"Apted"},
      {"first_name":"Ellene","last_name":"Moakler"},
      {"first_name":"Patty","last_name":"Dagon"},
      {"first_name":"Gardiner","last_name":"Lillgard"},
      {"first_name":"Ema","last_name":"Ketteringham"},
      {"first_name":"Barris","last_name":"Ausello"},
      {"first_name":"Katharina","last_name":"Lening"},
      {"first_name":"Demeter","last_name":"Litel"},
      {"first_name":"Everard","last_name":"Castrillo"},
      {"first_name":"Chrissy","last_name":"Gerrett"},
      {"first_name":"Ferne","last_name":"Ovill"},
      {"first_name":"Alis","last_name":"Thomasson"},
      {"first_name":"Ichabod","last_name":"Morcombe"},
      {"first_name":"Ricki","last_name":"Ahern"},
      {"first_name":"Dinny","last_name":"McKenny"},
      {"first_name":"Michaelina","last_name":"Le Marchand"},
      {"first_name":"Lisabeth","last_name":"Matschuk"},
      {"first_name":"Gradeigh","last_name":"Juris"},
      {"first_name":"Lindie","last_name":"Frandsen"},
      {"first_name":"Bertram","last_name":"Justun"},
      {"first_name":"Chiquita","last_name":"Sorbey"},
      {"first_name":"Tad","last_name":"Elham"},
      {"first_name":"Leonard","last_name":"Ciciari"},
      {"first_name":"Loree","last_name":"Daunay"},
      {"first_name":"Rainer","last_name":"Farmiloe"},
      {"first_name":"Crichton","last_name":"Buxsy"},
      {"first_name":"Shelly","last_name":"Ghost"},
      {"first_name":"Kai","last_name":"Wadmore"},
      {"first_name":"Alena","last_name":"Mavin"},
      {"first_name":"Trenton","last_name":"Tejada"},
      {"first_name":"Randell","last_name":"Darville"},
      {"first_name":"Geri","last_name":"Mullany"},
      {"first_name":"Dylan","last_name":"Meah"},
      {"first_name":"Purcell","last_name":"Mourant"},
      {"first_name":"Sullivan","last_name":"Gori"},
      {"first_name":"Lexy","last_name":"Brennan"},
      {"first_name":"Anthea","last_name":"Blencoe"},
      {"first_name":"Jordan","last_name":"Beddows"},
      {"first_name":"Standford","last_name":"Jablonski"},
      {"first_name":"Sabra","last_name":"Owlner"},
      {"first_name":"Claudina","last_name":"Cantu"},
      {"first_name":"Joane","last_name":"Swinburne"},
      {"first_name":"Vanya","last_name":"Vlasenkov"},
      {"first_name":"Field","last_name":"Kield"},
      {"first_name":"Brandy","last_name":"Fabri"},
      {"first_name":"Griff","last_name":"Falkinder"},
      {"first_name":"Virgil","last_name":"Briat"},
      {"first_name":"Basil","last_name":"Saxelby"},
      {"first_name":"Norene","last_name":"Brangan"},
      {"first_name":"Ermentrude","last_name":"Tottman"},
      {"first_name":"Karisa","last_name":"Yerrall"},
      {"first_name":"Nadean","last_name":"Emerton"},
      {"first_name":"Levey","last_name":"Luter"},
      {"first_name":"Benito","last_name":"Duddell"},
      {"first_name":"Griz","last_name":"Manlow"},
      {"first_name":"Elwood","last_name":"Hymers"},
      {"first_name":"Melantha","last_name":"Kilbourn"},
      {"first_name":"Aaron","last_name":"Nesfield"},
      {"first_name":"Sherwin","last_name":"Middell"},
      {"first_name":"Krispin","last_name":"Netley"},
      {"first_name":"Heather","last_name":"Beisley"},
      {"first_name":"Michelle","last_name":"Shinfield"},
      {"first_name":"Alina","last_name":"Dericot"},
      {"first_name":"Bethanne","last_name":"Allabush"},
      {"first_name":"Adorne","last_name":"Caffrey"},
      {"first_name":"Myer","last_name":"Prydie"},
      {"first_name":"Marla","last_name":"Laidlow"},
      {"first_name":"Abraham","last_name":"Farr"},
      {"first_name":"Allie","last_name":"Hinemoor"},
      {"first_name":"Kent","last_name":"Hought"},
      {"first_name":"Christiana","last_name":"Simla"},
      {"first_name":"Brok","last_name":"Matyugin"},
      {"first_name":"Mickey","last_name":"Melmeth"},
      {"first_name":"Benoit","last_name":"Burkert"},
      {"first_name":"Hilarius","last_name":"McClifferty"},
      {"first_name":"Abbye","last_name":"Easen"},
      {"first_name":"Jaymie","last_name":"Huband"},
      {"first_name":"Swen","last_name":"Crat"},
      {"first_name":"Helga","last_name":"Slowan"},
      {"first_name":"Phebe","last_name":"Farnish"},
      {"first_name":"Byrle","last_name":"Nornasell"},
      {"first_name":"Tandy","last_name":"Crumpe"},
      {"first_name":"Leticia","last_name":"Jansson"},
      {"first_name":"Georgy","last_name":"Hasslocher"},
      {"first_name":"Winthrop","last_name":"Vigrass"},
      {"first_name":"Conrade","last_name":"Canham"},
      {"first_name":"Celestine","last_name":"Mitchell"},
      {"first_name":"Malchy","last_name":"Mackin"},
      {"first_name":"Glendon","last_name":"Wardel"},
      {"first_name":"Kalli","last_name":"Middlebrook"},
      {"first_name":"Webb","last_name":"Bedding"},
      {"first_name":"Boris","last_name":"O'Regan"},
      {"first_name":"Caty","last_name":"Yeld"},
      {"first_name":"Josee","last_name":"Fluck"},
      {"first_name":"Marlyn","last_name":"Cruden"},
      {"first_name":"Aggie","last_name":"Rapp"},
      {"first_name":"Fanya","last_name":"Rearie"},
      {"first_name":"Sherlock","last_name":"Rijkeseis"},
      {"first_name":"Aurlie","last_name":"Debell"},
      {"first_name":"York","last_name":"Ranken"},
      {"first_name":"Pat","last_name":"Poppleston"},
      {"first_name":"Delcina","last_name":"Hein"},
      {"first_name":"Portie","last_name":"Howsley"},
      {"first_name":"Kerr","last_name":"Manterfield"},
      {"first_name":"Lauri","last_name":"Duxfield"}
    ]

    return this.randomEl (list).first_name + ' ' + this.randomEl (list).last_name + this.randomEl (list).last_name;
  }

  randomEl (list: any []) {
    var i = Math.floor(Math.random() * list.length);
    return list[i];
  }

  create_keywords (name: string) {
    const arrName = [];
    let curName: any = [];

    name.split ('').forEach ((letter)=> {
      curName += letter;
      arrName.push (curName);
    });

    return arrName;
  }

  generate_keywords (names: string []) {
    const [first, middle, last, sfx] = names;
    const suffix = sfx.length > 0 ? ` ${sfx}.` : '';
    const k_middle = this.create_keywords (`${first} ${last}${suffix}`);
    const k_fullname = this.create_keywords (`${first} ${middle} ${last}${suffix}`);
    const k_lastname = this.create_keywords (`${last}, ${first} ${middle}${suffix}`);

    const middle_i = middle.length > 0 ?  `${middle [0]}.` : '';
    const middle_initial = this.create_keywords (`${first}${middle_i} ${last}${suffix}`);
    const k_i = this.create_keywords (`${last}, ${first}${middle_i}${suffix}`);
  }

  async create1000pros () {
    let batch = this.afs.firestore.batch ();

    for (let x = 0; x < 500; x++) {
      let step = this.afs.collection ('Professionals').doc (x.toString ()).ref;
      let fullname = this.generateName ();
      let data: any = {
        id: 'DWFvkWlGKDXMJYmV2sNGw2E2Q942',
        avatar: 'https://firebasestorage.googleapis.com/v0/b/puntopro-b952d.appspot.com/o/DWFvkWlGKDXMJYmV2sNGw2E2Q942%2Favatar.jpg?alt=media&token=1fbae8c8-9830-44a5-96f1-de8964b5b32e',
        fullname: fullname,
        fullname_keywords: fullname, //this.generate_keywords (fullname.split (' ')),
        profile_description: 'ascccccccccc',
        phone_number: '994701995',
        address: 'Cusco, Peru',
        birth_date: 201921515151,
        gender: 'Macho',
        level_studies: '',
        latitude: 0,
        longitude: 0,
        doc_type: 'DNI',
        doc_number: '74233791',
        ruc: '12312312312123',
        join_date: new Date ().toISOString (),
        current_plan: '',
        plan_detail: '',
        plan_join_date: '',
        plan_until: '',
        is_verified: false,
        is_available: false,
        verified_date: '',
        services_number: 0
      }

      batch.set (step, data);
    }

    return await batch.commit ();
  }

  getProsByName (searchterm: string) {
    return this.afs.collection ('Professionals', ref => ref.where ('fullname_keywords', 'array-contains', searchterm)).valueChanges ();
  }

  get_profiles_by_pro (id: string) {
    return this.afs.collection ('Professionals').doc (id).collection ('Profiles').valueChanges ();
  }
}
