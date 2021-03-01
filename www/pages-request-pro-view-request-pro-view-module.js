(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-request-pro-view-request-pro-view-module"],{

/***/ "./src/app/pages/request-pro-view/request-pro-view.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/request-pro-view/request-pro-view.module.ts ***!
  \*******************************************************************/
/*! exports provided: RequestProViewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestProViewPageModule", function() { return RequestProViewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _request_pro_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./request-pro-view.page */ "./src/app/pages/request-pro-view/request-pro-view.page.ts");







var routes = [
    {
        path: '',
        component: _request_pro_view_page__WEBPACK_IMPORTED_MODULE_6__["RequestProViewPage"]
    }
];
var RequestProViewPageModule = /** @class */ (function () {
    function RequestProViewPageModule() {
    }
    RequestProViewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_request_pro_view_page__WEBPACK_IMPORTED_MODULE_6__["RequestProViewPage"]]
        })
    ], RequestProViewPageModule);
    return RequestProViewPageModule;
}());



/***/ }),

/***/ "./src/app/pages/request-pro-view/request-pro-view.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/request-pro-view/request-pro-view.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"ios-arrow-back\" color=\"dark\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title>{{ request?.service_name }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid *ngIf=\"is_loading === true\" style=\"height: 100%; margin-bottom: 1rem\">\n    <ion-row justify-content-center align-items-center style=\"height: 100%\">\n      <ion-spinner name=\"bubbles\"></ion-spinner>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-list *ngIf=\"is_loading === false\">\n            <ion-label class=\"item-header\" position=\"stacked\">Cliente</ion-label>\n            <hr class=\"card-separator\">\n            <ion-item lines=\"none\">\n              {{ request?.client_name }}\n            </ion-item>\n\n            <hr class=\"card-separator\">\n            <ion-label class=\"item-header\" position=\"stacked\">Fecha de solicitud</ion-label>\n            <hr class=\"card-separator\">\n            <ion-item lines=\"none\">\n              {{ getFormatDate (request?.created_date) }}\n            </ion-item>\n\n            <hr class=\"card-separator\">\n            <ion-label class=\"item-header\" position=\"stacked\">Direccion</ion-label>\n            <hr class=\"card-separator\">\n            <ion-item lines=\"none\">\n              {{ request?.address_name }}\n            </ion-item>\n\n            <hr class=\"card-separator\">\n            <ion-label class=\"item-header\" position=\"stacked\">Detalles</ion-label>\n            <hr class=\"card-separator\">\n            <ion-item lines=\"none\">\n              <p class=\"detail\">{{ request?.note }}</p>\n            </ion-item>\n\n            <div *ngIf=\"images.length > 0\">\n              <hr class=\"card-separator\">\n              <ion-label class=\"item-header\" position=\"stacked\">Imagenes</ion-label>\n              <hr class=\"card-separator\">\n              <ion-grid>\n                <ion-row>\n                  <ion-col *ngFor=\"let img of images\">\n                    <img class=\"request-img\" [src]=\"img | async\">\n                  </ion-col>\n                </ion-row>  \n              </ion-grid>\n            </div>\n          </ion-list>   \n          <ion-list>\n            <hr class=\"card-separator\">\n            <ion-label class=\"item-header\" position=\"stacked\">Mapa</ion-label>\n            <hr class=\"card-separator\">\n\n            <ion-card no-padding no-margin class=\"map-class\">\n              <div #map id=\"map\"></div>\n            </ion-card>\n          </ion-list>     \n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-footer *ngIf=\"auth.user_data?.is_pro === true\">\n  <ion-toolbar>\n    <ion-button *ngIf=\"is_quote_sent === false\" expand=\"block\" color=\"orange\" (click)=\"postulate ()\">\n      <span *ngIf=\"request?.is_emergency === true\">Postular</span>\n      <span *ngIf=\"request?.is_emergency === false\">Enviar cotizacion</span>\n    </ion-button>\n    \n    <ion-item *ngIf=\"is_quote_sent === true\" lines=\"none\" text-center>\n      Ya postulaste...\n    </ion-item>\n  </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/pages/request-pro-view/request-pro-view.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/request-pro-view/request-pro-view.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #26997C; }\n\n.card-separator {\n  background-color: #00000047; }\n\n.item-header {\n  margin-left: 1rem;\n  font-weight: bold; }\n\n.request-img {\n  width: 50%;\n  height: auto; }\n\n.map-class {\n  height: 250px;\n  width: auto; }\n\n#map {\n  width: 100%;\n  height: 100%; }\n\na[href^=\"http://maps.google.com/maps\"] {\n  display: none !important; }\n\na[href^=\"https://maps.google.com/maps\"] {\n  display: none !important; }\n\n.gmnoprint a, .gmnoprint span, .gm-style-cc {\n  display: none; }\n\n.gmnoprint div {\n  background: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsYWluL1B1bnRvUHJvL1B1bnRvUHJvLUlvbmljNC9zcmMvYXBwL3BhZ2VzL3JlcXVlc3QtcHJvLXZpZXcvcmVxdWVzdC1wcm8tdmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBYSxFQUFBOztBQUdmO0VBQ0UsMkJBQTJCLEVBQUE7O0FBRzdCO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLFVBQVU7RUFDVixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxhQUFhO0VBQ2IsV0FBVyxFQUFBOztBQUdiO0VBQ0UsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUF1Qyx3QkFBdUIsRUFBQTs7QUFDOUQ7RUFBd0Msd0JBQXVCLEVBQUE7O0FBRS9EO0VBQ0UsYUFBWSxFQUFBOztBQUdkO0VBQ0UsMkJBQTBCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZXF1ZXN0LXByby12aWV3L3JlcXVlc3QtcHJvLXZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gIC0tYmFja2dyb3VuZDogIzI2OTk3Qztcbn1cblxuLmNhcmQtc2VwYXJhdG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDQ3O1xufVxuXG4uaXRlbS1oZWFkZXIge1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5yZXF1ZXN0LWltZyB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLm1hcC1jbGFzcyB7XG4gIGhlaWdodDogMjUwcHg7XG4gIHdpZHRoOiBhdXRvO1xufVxuXG4jbWFwe1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5hW2hyZWZePVwiaHR0cDovL21hcHMuZ29vZ2xlLmNvbS9tYXBzXCJde2Rpc3BsYXk6bm9uZSAhaW1wb3J0YW50fVxuYVtocmVmXj1cImh0dHBzOi8vbWFwcy5nb29nbGUuY29tL21hcHNcIl17ZGlzcGxheTpub25lICFpbXBvcnRhbnR9XG5cbi5nbW5vcHJpbnQgYSwgLmdtbm9wcmludCBzcGFuLCAuZ20tc3R5bGUtY2Mge1xuICBkaXNwbGF5Om5vbmU7XG59XG4gIFxuLmdtbm9wcmludCBkaXYge1xuICBiYWNrZ3JvdW5kOm5vbmUgIWltcG9ydGFudDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/request-pro-view/request-pro-view.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/request-pro-view/request-pro-view.page.ts ***!
  \*****************************************************************/
/*! exports provided: RequestProViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestProViewPage", function() { return RequestProViewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _animations_enter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../animations/enter */ "./src/app/animations/enter.ts");
/* harmony import */ var _animations_leave__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../animations/leave */ "./src/app/animations/leave.ts");
/* harmony import */ var _modals_send_quote_send_quote_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../modals/send-quote/send-quote.page */ "./src/app/modals/send-quote/send-quote.page.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/ngx/index.js");
/* harmony import */ var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/location-accuracy/ngx */ "./node_modules/@ionic-native/location-accuracy/ngx/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_14__);


// Param

// Ionic

// Services




// Animations


// Modals

// Geolocation



// Moment and Google

var RequestProViewPage = /** @class */ (function () {
    function RequestProViewPage(database, route, modalController, loadingController, alertController, platform, af_storage, auth, geolocation, locationAccuracy, androidPermissions, storage) {
        this.database = database;
        this.route = route;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.platform = platform;
        this.af_storage = af_storage;
        this.auth = auth;
        this.geolocation = geolocation;
        this.locationAccuracy = locationAccuracy;
        this.androidPermissions = androidPermissions;
        this.storage = storage;
        this.is_loading = true;
        this.is_quote_sent = false;
        this.images = [];
        this.post_data = {
            id: '',
            pro_fullname: '',
            pro_avatar: '',
            pro_id: '',
            latitude: 0,
            longitude: 0
        };
    }
    RequestProViewPage.prototype.ngOnInit = function () {
        var _this = this;
        this.request_id = this.route.snapshot.paramMap.get('id');
        this.storage.getValue('user_uid').then(function (user_id) {
            _this.database.getRequestById(_this.request_id).subscribe(function (response) {
                _this.request = response;
                console.log(response);
                /*
                if (response.images.length > 0) {
                  response.images.forEach((item: string) => {
                    let filename = 'requests/' + response.id + '/' + item + '.jpg';
                    let ref = this.af_storage.ref (filename);
        
                    this.images.push (ref.getDownloadURL ());
                  });
                }
                
                
                */
                _this.InitMap(response.latitude, response.longitude);
                _this.is_loading = false;
            });
            _this.database.isQuoteSent(user_id, _this.request_id).subscribe(function (response) {
                _this.is_quote_sent = !(response === undefined || response === null);
                console.log('isQuoteSent', _this.is_quote_sent);
            });
        });
    };
    RequestProViewPage.prototype.InitMap = function (latitude, longitude) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var location, options, marker;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                location = new google.maps.LatLng(latitude, longitude);
                options = {
                    center: location,
                    zoom: 15,
                    disableDefaultUI: true,
                    streetViewControl: false,
                    disableDoubleClickZoom: false,
                    clickableIcons: false,
                    scaleControl: true,
                    mapTypeId: 'roadmap',
                };
                this.map = new google.maps.Map(this.mapRef.nativeElement, options);
                marker = new google.maps.Marker({
                    position: location,
                    map: this.map,
                    title: 'Direccion',
                    animation: google.maps.Animation.DROP
                });
                return [2 /*return*/];
            });
        });
    };
    RequestProViewPage.prototype.getFormatDate = function (date) {
        return moment__WEBPACK_IMPORTED_MODULE_14__(date).format('LLL');
    };
    RequestProViewPage.prototype.postulate = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert_1, modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.request.is_emergency === true)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Confirm!',
                                message: 'Message <strong>text</strong>!!!',
                                buttons: [
                                    {
                                        text: 'No',
                                        handler: function () {
                                            console.log('Confirm Okay');
                                        }
                                    }, {
                                        text: 'Si',
                                        handler: function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                            var _a;
                                            var _this = this;
                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                                switch (_b.label) {
                                                    case 0:
                                                        _a = this;
                                                        return [4 /*yield*/, this.loadingController.create({
                                                                message: 'Procesando Informacion ...'
                                                            })];
                                                    case 1:
                                                        _a.loading = _b.sent();
                                                        return [4 /*yield*/, this.loading.present()];
                                                    case 2:
                                                        _b.sent();
                                                        this.storage.getValue('user_data').then(function (response_02) {
                                                            var pro_data = JSON.parse(response_02);
                                                            _this.post_data.id = pro_data.id;
                                                            _this.post_data.pro_fullname = pro_data.first_name + ' ' + pro_data.last_name;
                                                            _this.post_data.pro_avatar = pro_data.avatar;
                                                            _this.post_data.pro_id = pro_data.id;
                                                            if (_this.platform.is("cordova")) {
                                                                _this.checkGPSPermission();
                                                            }
                                                            else {
                                                                _this.getLocationCoordinates();
                                                            }
                                                        });
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); }
                                    }
                                ]
                            })];
                    case 1:
                        alert_1 = _a.sent();
                        return [4 /*yield*/, alert_1.present()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 3: return [4 /*yield*/, this.modalController.create({
                            component: _modals_send_quote_send_quote_page__WEBPACK_IMPORTED_MODULE_10__["SendQuotePage"],
                            mode: 'ios',
                            cssClass: 'puntopro-modal',
                            enterAnimation: _animations_enter__WEBPACK_IMPORTED_MODULE_8__["myEnterAnimation"],
                            leaveAnimation: _animations_leave__WEBPACK_IMPORTED_MODULE_9__["myLeaveAnimation"]
                        })];
                    case 4:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (response) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var _a;
                            var _this = this;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        if (!(response.role == 'response')) return [3 /*break*/, 3];
                                        _a = this;
                                        return [4 /*yield*/, this.loadingController.create({
                                                message: 'Procesando Informacion ...'
                                            })];
                                    case 1:
                                        _a.loading = _b.sent();
                                        return [4 /*yield*/, this.loading.present()];
                                    case 2:
                                        _b.sent();
                                        this.storage.getValue('user_data').then(function (response_02) {
                                            var pro_data = JSON.parse(response_02);
                                            _this.post_data.id = pro_data.id;
                                            _this.post_data.pro_fullname = pro_data.first_name + ' ' + pro_data.last_name;
                                            _this.post_data.pro_avatar = pro_data.avatar;
                                            _this.post_data.pro_id = pro_data.id;
                                            _this.post_data.max_price = response.data.max_price;
                                            _this.post_data.min_price = response.data.min_price;
                                            _this.post_data.message = response.data.message;
                                            if (_this.platform.is("cordova")) {
                                                _this.checkGPSPermission();
                                            }
                                            else {
                                                _this.getLocationCoordinates();
                                            }
                                        });
                                        _b.label = 3;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); });
                        return [4 /*yield*/, modal.present()];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    RequestProViewPage.prototype.checkGPSPermission = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
                    .then(function (result) {
                    if (result.hasPermission) {
                        //alert ("Tiene permiso, preguntamos para prender el GPS");
                        //If having permission show 'Turn On GPS' dialogue
                        _this.askToTurnOnGPS();
                    }
                    else {
                        //If not having permission ask for permission
                        //alert ("No tiene permiso, preguntamos para ternerlo");
                        _this.requestGPSPermission();
                    }
                }, function (err) {
                    alert(err);
                });
                return [2 /*return*/];
            });
        });
    };
    RequestProViewPage.prototype.askToTurnOnGPS = function () {
        var _this = this;
        this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY)
            .then(function () {
            //alert ("Todo ok, get Location Coordinates");
            // When GPS Turned ON call method to get Accurate location coordinates
            _this.getLocationCoordinates();
        }, function (error) {
            //alert ("No quiere prender este hdp");
            //this.presentAlertConfirm ();
            //this.presentAlertConfirm ();
            console.log('Error requesting location permissions ' + JSON.stringify(error));
        });
    };
    RequestProViewPage.prototype.requestGPSPermission = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.locationAccuracy.canRequest().then(function (canRequest) {
                    if (canRequest) {
                        console.log("4");
                    }
                    else {
                        //Show 'GPS Permission Request' dialogue
                        _this.androidPermissions.requestPermission(_this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
                            .then(function () {
                            // call method to turn on GPS
                            _this.askToTurnOnGPS();
                        }, function (error) {
                            //Show alert if user click on 'No Thanks'
                            console.log('requestPermission Error requesting location permissions ' + error);
                        });
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    RequestProViewPage.prototype.getLocationCoordinates = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.geolocation.getCurrentPosition().then(function (resp) {
                    _this.post_data.latitude = resp.coords.latitude;
                    _this.post_data.longitude = resp.coords.longitude;
                    console.log('this.post_data', _this.post_data);
                    _this.database.addPostulate(_this.post_data.pro_id, _this.request_id, _this.post_data)
                        .then(function (response) {
                        _this.loading.dismiss();
                    })
                        .catch(function (error) {
                        _this.loading.dismiss();
                        console.log('addPostulate', error);
                    });
                }).catch(function (error) {
                    _this.loading.dismiss();
                    //this.checkGPSPermission ();
                    console.log('Error getting location' + error);
                });
                return [2 /*return*/];
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], RequestProViewPage.prototype, "mapRef", void 0);
    RequestProViewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-request-pro-view',
            template: __webpack_require__(/*! ./request-pro-view.page.html */ "./src/app/pages/request-pro-view/request-pro-view.page.html"),
            styles: [__webpack_require__(/*! ./request-pro-view.page.scss */ "./src/app/pages/request-pro-view/request-pro-view.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__["Geolocation"],
            _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_13__["LocationAccuracy"],
            _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_12__["AndroidPermissions"],
            _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]])
    ], RequestProViewPage);
    return RequestProViewPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-request-pro-view-request-pro-view-module.js.map