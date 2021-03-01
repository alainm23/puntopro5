import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

// Google
import { GooglePlus } from '@ionic-native/google-plus/ngx';

// Facebook
import { Facebook } from '@ionic-native/facebook/ngx';

// Geolocation
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';

// Keyboard
import { Keyboard } from '@ionic-native/keyboard/ngx';
 
// OneSignal
import { OneSignal } from '@ionic-native/onesignal/ngx';

// Form
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Storage
import { IonicStorageModule } from '@ionic/storage';

// Camera
import { Camera } from '@ionic-native/camera/ngx';

// Call Number
import { CallNumber } from '@ionic-native/call-number/ngx';

//Deeplinks
import { Deeplinks } from '@ionic-native/deeplinks/ngx';

// Social Sharing
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

// Http
import { HttpClientModule } from '@angular/common/http';

// Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Modal Pages
import { SelectServicePageModule } from './modals/select-service/select-service.module';
import { SearchSubcategoriesPageModule } from './modals/search-subcategories/search-subcategories.module';
import { SearchLocationsPageModule } from './modals/search-locations/search-locations.module';
import { ProfilePageModule } from './modals/profile/profile.module';
import { RequestProPageModule } from './modals/request-pro/request-pro.module';
import { ChatPageModule } from './modals/chat/chat.module';
import { SendQuotePageModule } from './modals/send-quote/send-quote.module';
import { QualifyProPageModule } from './modals/qualify-pro/qualify-pro.module';
import { ServiceEditPageModule } from './modals/service-edit/service-edit.module';
import { GalleriesViewPageModule } from './modals/galleries-view/galleries-view.module';
import { TutorialPageModule } from './modals/tutorial/tutorial.module';
import { ChooseQuoteEmergencyPageModule } from './modals/choose-quote-emergency/choose-quote-emergency.module';

// Components
import { ChatPopoverComponent } from './components/chat-popover/chat-popover.component';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, ChatPopoverComponent],
  entryComponents: [ChatPopoverComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    FormsModule, 
    ReactiveFormsModule,
    IonicStorageModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,

    // Modals
    SelectServicePageModule,
    SearchSubcategoriesPageModule,
    SearchLocationsPageModule,
    ProfilePageModule,
    RequestProPageModule,
    ChatPageModule,
    SendQuotePageModule,
    QualifyProPageModule,
    ServiceEditPageModule,
    GalleriesViewPageModule,
    TutorialPageModule,
    ChooseQuoteEmergencyPageModule,
  ],
  providers: [
    StatusBar,
    Geolocation,
    AndroidPermissions,
    LocationAccuracy,
    GooglePlus,
    SocialSharing,
    CallNumber,
    Deeplinks,
    OneSignal,
    Camera,
    Facebook,
    Keyboard,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
