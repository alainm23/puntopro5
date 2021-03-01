(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-presentation-presentation-module"],{

/***/ "./src/app/pages/presentation/presentation.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/presentation/presentation.module.ts ***!
  \***********************************************************/
/*! exports provided: PresentationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentationPageModule", function() { return PresentationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _presentation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./presentation.page */ "./src/app/pages/presentation/presentation.page.ts");







var routes = [
    {
        path: '',
        component: _presentation_page__WEBPACK_IMPORTED_MODULE_6__["PresentationPage"]
    }
];
var PresentationPageModule = /** @class */ (function () {
    function PresentationPageModule() {
    }
    PresentationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_presentation_page__WEBPACK_IMPORTED_MODULE_6__["PresentationPage"]]
        })
    ], PresentationPageModule);
    return PresentationPageModule;
}());



/***/ }),

/***/ "./src/app/pages/presentation/presentation.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/presentation/presentation.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <ion-slides class=\"hexpand\" [options]=\"slideOpts\" (ionSlideDidChange)=\"ionSlideDidChange ()\">\n    <ion-slide style=\"background-color: #f49500;\">\n      <div>\n        <h1 class=\"text-white\">Los mejores profesionales</h1>\n        <p padding class=\"text-white\" text-wrap>Consigue el profesional que necesitas con total facilidad, y todos estan en la palma de tus manos las 24 horas del dia.</p>\n        <img src=\"assets/img/slide_01.svg\">\n\n        <ion-row class=\"position-bottom\" style=\"background-color: #FFAE00;\">\n          <ion-col size=\"6\">\n            \n          </ion-col>\n\n          <ion-col size=\"6\">\n            <ion-button fill=\"clear\" color=\"light\" (click)=\"goNextSlide()\">\n              Adelante\n              <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </div>\n    </ion-slide>\n\n    <ion-slide style=\"background-color: #00BBD8;\">\n      <div>\n        <h1 class=\"text-white\">Hazte conocer</h1>\n        <p padding class=\"text-white\" text-wrap>Lorem ipsum dolor sit amet, consectetuer\n        adipiscing elit, sed diam nonuadipiscing elit, sed\n        diam nonummy nibh euismod</p>\n        <img src=\"assets/img/slide_02.svg\">\n\n        <ion-row class=\"position-bottom\" style=\"background-color: #00DDF2;\">\n          <ion-col size=\"6\">\n            <ion-button fill=\"clear\" color=\"light\" (click)=\"goPrevSlide ()\">\n              <ion-icon slot=\"start\" name=\"arrow-back\"></ion-icon>\n              Atras\n            </ion-button>\n          </ion-col>\n\n          <ion-col size=\"6\">\n            <ion-button fill=\"clear\" color=\"light\" (click)=\"goNextSlide ()\">\n              Adelante\n              <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </div>\n    </ion-slide>\n    \n    <ion-slide style=\"background-color: #039C4F;\">\n      <div>\n        <h1 class=\"text-white\">GPS y Geolocalizacion</h1>\n        <p padding class=\"text-white\" text-wrap>Lorem ipsum dolor sit amet, consectetuer\n        adipiscing elit, sed diam nonuadipiscing elit, sed\n        diam nonummy nibh euismod</p>\n        <img class=\"size-80\" src=\"assets/img/slide_03.svg\">\n        <p margin-bottom class=\"text-white\" (click)=\"omitir ()\">Omitir paso</p>\n\n        <ion-row class=\"position-bottom\" style=\"background-color: #00B853;\">\n          <ion-col size=\"6\">\n            <ion-button fill=\"clear\" color=\"light\" (click)=\"goPrevSlide ()\">\n              <ion-icon slot=\"start\" name=\"arrow-back\"></ion-icon>\n              Atras\n            </ion-button>\n          </ion-col>\n\n          <ion-col size=\"6\">\n            <ion-button fill=\"clear\" color=\"light\" (click)=\"checkGPSPermission ()\">\n              {{ slide_03_button_text }}\n              <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </div>\n    </ion-slide>\n\n    <ion-slide style=\"background-color: #5180FF;\">\n      <div>\n        <h1 class=\"text-white\">Ya estamos listos</h1>\n        <p padding class=\"text-white\" text-wrap>Lorem ipsum dolor sit amet, consectetuer\n        adipiscing elit, sed diam nonuadipiscing elit, sed\n        diam nonummy nibh euismod</p>\n        <img src=\"assets/img/slide_04.svg\">\n\n        <ion-row class=\"position-bottom\" style=\"background-color: #4B99FF;\">\n          <ion-col size=\"6\">\n            <ion-button fill=\"clear\" color=\"light\" (click)=\"goPrevSlide ()\">\n              <ion-icon slot=\"start\" name=\"arrow-back\"></ion-icon>\n              Atras\n            </ion-button>\n          </ion-col>\n\n          <ion-col size=\"6\">\n            <ion-button fill=\"clear\" color=\"light\" (click)=\"goLogin ()\">\n              Comenzar\n              <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </div>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/presentation/presentation.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/presentation/presentation.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hexpand {\n  height: 100%; }\n\n.position-bottom {\n  position: fixed;\n  left: 0;\n  bottom: 0px;\n  right: 0; }\n\n.size-80 {\n  width: 80%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsYWluL1B1bnRvUHJvL1B1bnRvUHJvLUlvbmljNC9zcmMvYXBwL3BhZ2VzL3ByZXNlbnRhdGlvbi9wcmVzZW50YXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0ksZUFBZTtFQUNmLE9BQU87RUFDUCxXQUFXO0VBQ1gsUUFBUSxFQUFBOztBQUdaO0VBQ0UsVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJlc2VudGF0aW9uL3ByZXNlbnRhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGV4cGFuZCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnBvc2l0aW9uLWJvdHRvbSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgcmlnaHQ6IDA7XG59XG5cbi5zaXplLTgwIHtcbiAgd2lkdGg6IDgwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/presentation/presentation.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/presentation/presentation.page.ts ***!
  \*********************************************************/
/*! exports provided: PresentationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentationPage", function() { return PresentationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/ngx/index.js");
/* harmony import */ var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/location-accuracy/ngx */ "./node_modules/@ionic-native/location-accuracy/ngx/index.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");


//Ionic

// Geolocation



// Services

var PresentationPage = /** @class */ (function () {
    function PresentationPage(geolocation, loadingController, navCtrl, locationAccuracy, alertController, storage, androidPermissions) {
        this.geolocation = geolocation;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.locationAccuracy = locationAccuracy;
        this.alertController = alertController;
        this.storage = storage;
        this.androidPermissions = androidPermissions;
        this.slideOpts = {
            effect: 'flip',
            zoom: false
        };
        this.hasPermission = false;
        this.slide_03_button_text = "Permitir";
    }
    PresentationPage.prototype.ngOnInit = function () {
    };
    PresentationPage.prototype.goNextSlide = function () {
        this.slides.slideNext();
    };
    PresentationPage.prototype.ionSlideDidChange = function () {
        var _this = this;
        this.slides.getActiveIndex().then(function (index) {
            if (index >= 2 && _this.hasPermission === false) {
                _this.slides.lockSwipeToNext(true);
            }
            else {
                _this.slides.lockSwipeToNext(false);
            }
        });
    };
    PresentationPage.prototype.goPrevSlide = function () {
        this.slides.slidePrev();
    };
    PresentationPage.prototype.checkGPSPermission = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (this.hasPermission === true) {
                    this.goNextSlide();
                }
                else {
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
                }
                return [2 /*return*/];
            });
        });
    };
    PresentationPage.prototype.askToTurnOnGPS = function () {
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
    PresentationPage.prototype.requestGPSPermission = function () {
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
    PresentationPage.prototype.getLocationCoordinates = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.slide_03_button_text = "Adelante";
                this.hasPermission = true;
                this.slides.lockSwipeToNext(false);
                this.slides.slideNext();
                return [2 /*return*/];
            });
        });
    };
    PresentationPage.prototype.goLogin = function () {
        this.storage.setValue('visible_tutorial', true);
        this.navCtrl.navigateForward('login');
    };
    PresentationPage.prototype.presentAlertConfirm = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirm!',
                            message: 'Message <strong>text</strong>!!!',
                            buttons: [
                                {
                                    text: 'Okay',
                                    handler: function () {
                                        _this.checkGPSPermission();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PresentationPage.prototype.omitir = function () {
        this.slide_03_button_text = "Adelante";
        this.hasPermission = true;
        this.slides.lockSwipeToNext(false);
        this.slides.slideNext();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
    ], PresentationPage.prototype, "slides", void 0);
    PresentationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-presentation',
            template: __webpack_require__(/*! ./presentation.page.html */ "./src/app/pages/presentation/presentation.page.html"),
            styles: [__webpack_require__(/*! ./presentation.page.scss */ "./src/app/pages/presentation/presentation.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_5__["LocationAccuracy"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"],
            _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_4__["AndroidPermissions"]])
    ], PresentationPage);
    return PresentationPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-presentation-presentation-module.js.map