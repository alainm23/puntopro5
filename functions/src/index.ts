import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as moment from 'moment';
//import * as express from 'express';
//import * as bodyParser from "body-parser";

admin.initializeApp(functions.config().firebase);
const db = admin.firestore();

//const app = express ();
//const main = express ();

//main.use('/api/v1', app);
//main.use(bodyParser.json());

//export const webApi = functions.https.onRequest(main);

/* 
    API REST
*/

/*
app.get ('/get_all_pros', (request, response) => {
  response.send('Warming up friend.');
});

app.get('/pros_by_searchterm/:searchterm', async (request, response) => {
  try {
    const searchterm: string = request.params.searchterm;
    if (!searchterm) throw new Error ('Fight ID is required');

    const collection = await db.collection ('Professionals')
      .where ('fullname_keywords', 'array-contains', searchterm).get();
    const json_response: any [] = [];
    
    /*
    collection.forEach((doc: any) => {
      if (doc.data ().fullname.toLowerCase ().indexOf (searchterm.toLowerCase ()) >= 0) {
        json_response.push({
          id: doc.id,
          data: doc.data()
        });
      } 
    });

   collection.forEach((doc: any) => {
    json_response.push ({
      id: doc.id,
      data: doc.data()
    });
  });

    response.json(json_response);
  } catch(error){
    response.status(500).send(error);
  }
});
*/
exports.setUserAvatarForDefault = functions.firestore.document ('Users/{user_id}').onCreate ((snapshot: any, context: any) => {
  const data = snapshot.data ();
  
  if (data.avatar === '') {
    console.log ('setUserAvatarForDefault');
    console.log ('User ID', data.id);
    return snapshot.ref.update ({
      avatar: 'https://firebasestorage.googleapis.com/v0/b/puntopro-b952d.appspot.com/o/avatar_default.png?alt=media&token=a94d2969-c0d7-456d-99ea-2178f578377d'
    });
  } else {
    return 0;
  } 
});

exports.addProfessionals = functions.firestore.document ('Professionals/{pro_id}').onCreate ((snapshot: any, context: any) => {
  const data = snapshot.data ();
  const store = admin.firestore ();

  const batch = store.batch ();

  const step_1 = store.collection ('Users').doc (data.id);
  batch.update (step_1, {
    'avatar': data.avatar, 
    'phone_number': data.phone_number, 
    'is_pro': true
  });

  const step_2 = store.collection ('validatedPhoneNumbers').doc (data.phone_number);
  batch.set (step_2, { 
    'id': data.phone_number 
  });

  return batch.commit ();
});

exports.addProfessionalsServices = functions.firestore.document ('Professionals/{pro_id}/Services/{service_id}')
.onCreate ((snapshot: any, context: any) => { 
  const pro_id = context.params.pro_id;
  const service_id = context.params.service_id;
  const store = admin.firestore ();

  const batch = store.batch ();

  const step_1 = store.collection ('Services').doc (service_id).collection ('Users').doc (pro_id);
  batch.set (step_1, { 
    'id': pro_id 
  });

  return batch.commit ();
});

exports.addProfessionalsSubCategories = functions.firestore.document ('Professionals/{pro_id}/SubCategories/{subcategory_id}')
.onCreate ((snapshot: any, context: any) => { 
  const pro_id = context.params.pro_id;
  const subcategory_id = context.params.subcategory_id;
  const store = admin.firestore ();

  const batch = store.batch ();

  const step_1 = store.collection ('SubCategories').doc (subcategory_id).collection ('Users').doc (pro_id);
  batch.set (step_1, { 
    'id': pro_id 
  });

  return batch.commit ();
});

/*
    * Solicitudes 
    - Todas las funciones de aqui son para manipular las solicitudes que hacen los usuarios 
*/

exports.addRequest = functions.firestore.document ('Requests/{request_id}').onCreate ((snapshot: any, context: any) => { 
  const data = snapshot.data ();

  const store = admin.firestore ();
  const batch = store.batch ();

  if (data.is_emergency === true) {
    const step_1 = store.collection ('Emergency_Requests').doc (data.service_id).collection ('Requests').doc (data.id);
    batch.set (step_1, { 
      id: data.id 
    });
  } else {
    const step_1 = store.collection ('Quotation_Requests').doc (data.service_id).collection ('Requests').doc (data.id);
    batch.set (step_1, { 
      id: data.id 
    });
  }

  const step_2 = store.collection ('Users').doc (data.client_id).collection ('Requests_Created').doc (data.id);
  batch.set (step_2, { 
    id: data.id
  });

  const step_3 = store.collection ('Users').doc (data.client_id).collection ('Active_Requests').doc (data.service_id);
  batch.set (step_3, { 
    id: data.service_id
  });

  return batch.commit ();
});

exports.addRequestStatistics = functions.firestore.document ('Requests/{request_id}').onCreate ((snapshot: any, context: any) => {
  const data = snapshot.data ();
  const store = admin.firestore ();

  const city = 'Cusco';

  const ref = store.collection ('Request_Statistics_' + city).doc (moment().format('YYYY[_]MM'));

  return store.runTransaction((t: any) => {
    return t.get (ref).then ((doc: any) => {
      let update = doc.data ();
      console.log ('Update ', update);

      if (!doc.exists) {
        update [data.service_id] = 1;
        t.set(ref, update) 
      } else {
        const new_count = update [data.service_id] + 1;
        update [data.service_id] = new_count;

        t.update (ref, update);
      }
    });
  });            
});

/* 
  Seleccionar un profesional para hacer trajos
*/

exports.selectProToRequest = functions.firestore.document ('Requests/{request_id}').onUpdate (async (snapshot: any, context: any) => {
  const data_id = snapshot.id;
  const data_after = snapshot.data_after ();
  
  const batch = db.batch ();
  let step: any;

  step = db.collection ('Professionals').doc (data_after.pro_id).collection ('Requests_Submitted').doc (data_id);
  batch.update (step, {
    state: 'in_progress', 
  });

  const collection = await db.collection ('Requests').doc (data_id).collection ('Postulants').get ();

  collection.forEach((doc: any) => {
    step = db.collection ('Requests').doc (data_id).collection ('Postulants').doc (doc.id);
    batch.delete (step);

    step = db.collection ('Professionals').doc (doc.id).collection ('Requests_Submitted').doc (data_id);
    batch.delete (step);
  });

  return await batch.commit ();
});
