import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { LoadingController, NavController } from '@ionic/angular';

import { Platform } from '@ionic/angular';

import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

// Services
import { DatabaseService } from '../services/database.service';
import { StorageService } from '../services/storage.service';

import * as firebase from 'firebase/app';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user_data: any;
  public is_logged: boolean;
  public _authState: any = null;
  constructor(private afAuth: AngularFireAuth,
              private platform: Platform,
              private navCtrl: NavController,
              private loadingController: LoadingController,
              private database: DatabaseService,
              private storage: StorageService,
              private googlePlus: GooglePlus,
              private fb: Facebook) {

    this.authState ().subscribe (auth => {
      this._authState  = auth;
      console.log ('authState: ', this._authState);

      if (auth) {
        this.storage.setValue ('user_uid', auth.uid);
        this.is_logged = true;

        this.database.getUser (auth.uid).subscribe ((response: any) => {
          this.user_data = response;
          this.storage.setObject ('user_data', response);
        });
      } else {
        this.storage.setValue ('user_uid', null);
        this.storage.setObject ('user_data', null);
        this.is_logged = false;
      }
    })
  }

  authState () {
    return this.afAuth.authState;
  }

  anonymousLogin () {
    return this.afAuth.auth.signInAnonymously ();
  }

  signInWithEmailAndPassword (email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword (email, password);
  }

  createUserWithEmailAndPassword (email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword (email, password);
  }

  sendPasswordResetEmail (email: string) {
    return this.afAuth.auth.sendPasswordResetEmail (email);
  }

  googleLogin () {
    if (this.platform.is('cordova')) {
      return this.nativeGoogleLogin ();
    } else {
      return this.webGoogleLogin ();
    }
  }

  async nativeGoogleLogin () {
    const loading = await this.loadingController.create({
      message: 'Procesando informacion...',
      spinner: 'dots'
    });

    await loading.present();

    this.googlePlus.login({
      'scope': 'puntoproapp@gmail.com',
      'webClientId': '75992481757-3c6q1trlgc58f40lrktd00lcu4es7se4.apps.googleusercontent.com',
      'offline': true
    }).then (async (res: any) => {
      const credential = await this.afAuth.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken));

      const unsuscribe = await this.database.getUser (credential.uid).subscribe (async (response: any) => {
        unsuscribe.unsubscribe ();

        if (response === undefined) {
          const new_user: any = {
            id: credential.uid,
            email: credential.email,
            join_date: new Date().toISOString (),
            first_name: credential.displayName,
            last_name: '',
            phone_number: '', 
            avatar: credential.photoURL,
            is_pro: false,
            actual_state: 'activo',
            detail_state: ''
          };

          await this.database.addUser (new_user).then (response => {
            loading.dismiss ();
            this.navCtrl.navigateRoot ('home');
          }, error => {
            loading.dismiss ();
            console.log ('Add user error, ', error);
          });
        } else {
          loading.dismiss ();
          this.navCtrl.navigateRoot ('home');
        }
      }, error => {
        loading.dismiss ();
        console.log ('Database error, ', error);
      });
    }).catch (err => {
      console.log ('googlePlus', err);
      loading.dismiss ();
    });
  }

  async webGoogleLogin () {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider)

    const unsuscribe = await this.database.getUser (credential.user.uid).subscribe (async (response: any) => {
      unsuscribe.unsubscribe ();

      if (response === undefined) {
        const new_user: any = {
          id: credential.user.uid,
          email: credential.user.email,
          join_date: new Date().toISOString (),
          first_name: credential.user.displayName,
          last_name: '',
          phone_number: '', 
          avatar: credential.user.photoURL,
          is_pro: false,
          actual_state: 'activo',
          detail_state: ''
        };

        await this.database.addUser (new_user).then (response => {
          this.navCtrl.navigateRoot ('home');
        }, error => {
          console.log (error);
        });
      } else {
        this.navCtrl.navigateRoot ('home');
      }
    });
  }

  signOut () {
    return this.afAuth.auth.signOut();
  }

  facebookLogin () {
    if (this.platform.is('cordova')) {
      return this.nativeFacebookLogin();
    } else {
      return this.webFacebookLogin();
    }
  }

  async nativeFacebookLogin () {
    const loading = await this.loadingController.create({
      message: 'Procesando informacion...',
      spinner: 'dots'
    });

    await loading.present();

    this.fb.login (['public_profile', 'email'])
      .then (async (res: FacebookLoginResponse) => {
        console.log('Logged into Facebook!', res);
        
        const credential = await this.afAuth.auth.signInWithCredential(firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken));

        const unsuscribe = await this.database.getUser (credential.uid).subscribe (async (response: any) => {
          unsuscribe.unsubscribe ();

          if (response === undefined) {
            const new_user: any = {
              id: credential.uid,
              email: credential.email,
              join_date: new Date().toISOString (),
              first_name: credential.displayName,
              last_name: '',
              phone_number: '', 
              avatar: credential.photoURL,
              is_pro: false,
              actual_state: 'activo',
              detail_state: ''
            };

            await this.database.addUser (new_user).then (response => {
              loading.dismiss ();
              this.navCtrl.navigateRoot ('home');
            }, error => {
              loading.dismiss ();
              console.log ('Add user error, ', error);
            });
          } else {
            loading.dismiss ();
            this.navCtrl.navigateRoot ('home');
          }
        }, error => {
          loading.dismiss ();
          console.log ('Database error, ', error);
        });
      })
      .catch (error => {
        console.log('Error logging into Facebook', error);
        loading.dismiss ();
      });
  }

  async webFacebookLogin () {
    const provider = new firebase.auth.FacebookAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);

    console.log ('credential', credential);

    const unsuscribe = await this.database.getUser (credential.user.uid)
    .subscribe (async (response: any) => {
      unsuscribe.unsubscribe ();

      if (response === undefined) {
        const new_user: any = {
          id: credential.user.uid,
          email: credential.user.email,
          join_date: new Date().toISOString (),
          first_name: credential.user.displayName,
          last_name: '',
          phone_number: '', 
          avatar: credential.user.photoURL,
          is_pro: false,
          actual_state: 'activo',
          detail_state: ''
        };

        await this.database.addUser (new_user).then (response => {
          this.navCtrl.navigateRoot ('home');
        }, error => {
          console.log (error);
        });
      } else {
        this.navCtrl.navigateRoot ('home');
      }
    });
  }
}
