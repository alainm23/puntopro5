(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-soypro-select-plan-soypro-select-plan-module"],{

/***/ "./src/app/pages/soypro-select-plan/soypro-select-plan.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/soypro-select-plan/soypro-select-plan.module.ts ***!
  \***********************************************************************/
/*! exports provided: SoyproSelectPlanPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoyproSelectPlanPageModule", function() { return SoyproSelectPlanPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _soypro_select_plan_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./soypro-select-plan.page */ "./src/app/pages/soypro-select-plan/soypro-select-plan.page.ts");







var routes = [
    {
        path: '',
        component: _soypro_select_plan_page__WEBPACK_IMPORTED_MODULE_6__["SoyproSelectPlanPage"]
    }
];
var SoyproSelectPlanPageModule = /** @class */ (function () {
    function SoyproSelectPlanPageModule() {
    }
    SoyproSelectPlanPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_soypro_select_plan_page__WEBPACK_IMPORTED_MODULE_6__["SoyproSelectPlanPage"]]
        })
    ], SoyproSelectPlanPageModule);
    return SoyproSelectPlanPageModule;
}());



/***/ }),

/***/ "./src/app/pages/soypro-select-plan/soypro-select-plan.page.html":
/*!***********************************************************************!*\
  !*** ./src/app/pages/soypro-select-plan/soypro-select-plan.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar mode=\"ios\" no-border>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"ios-arrow-back\" color=\"dark\"></ion-back-button>\n    </ion-buttons>\n    \n    <ion-title>\n      <img class=\"wordmark-size\" src=\"/assets/img/PuntoPro-wordmark.png\">\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-item lines=\"none\" text-center>\n          <ion-label>\n            <h2>ELIGE TU PLAN</h2>\n          </ion-label>\n        </ion-item>\n\n        <ion-segment color=\"orange\" (ionChange)=\"segmentChanged($event.detail.value)\" [(ngModel)]=\"segment_value\">\n          <ion-segment-button class=\"no-text-transform\" value=\"0\">\n            <ion-label>Gratuito</ion-label>\n          </ion-segment-button>\n          <ion-segment-button class=\"no-text-transform\" value=\"1\">\n            <ion-label>Estandar</ion-label>\n          </ion-segment-button>\n          <ion-segment-button class=\"no-text-transform\" value=\"2\">\n            <ion-label>Premium</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n\n        <ion-slides margin-top class=\"hexpand\" [options]=\"slideOpts\" (ionSlideDidChange)=\"ionSlideDidChange ()\">\n          <ion-slide>\n            <ion-item text-center lines=\"none\">\n              <ion-label>\n                <h1 class=\"text-grey\">Gratis</h1>\n                <p>Servicio ilimitado</p>\n              </ion-label>\n            </ion-item>\n\n            <ul text-start class=\"text-grey margin-left-24\">\n              <li>Nombre, contacto, y Foto principal</li>\n              <li>Configuracion de servicios</li>\n              <li>Presentacion</li>\n            </ul>\n          </ion-slide>\n      \n          <ion-slide>\n            <ion-item text-center lines=\"none\">\n              <ion-label>\n                <h1 class=\"text-grey\">Solo S/. 14.90 <small>por mes</small></h1>\n                <p>(Paga por todo el año y recibe 1 mes gratis)</p>\n              </ion-label>\n            </ion-item>\n                  \n            <ul text-start class=\"text-grey margin-left-24\">\n              <li>Nombre, contacto, y Foto principal</li>\n              <li>Configuracion de servicios</li>\n              <li>Presentacion</li>\n              <li>Galeria de trabajos realizados</li>\n              <li>Recibir solicitudes de trabajo</li>\n              <li>Historia de trabajos</li>\n              <li>Capacitaciones y talleres</li>\n              <li>Poder aportar a la comunidad</li>\n              <li>Prioridad en ls solicitudes</li>\n            </ul>\n          </ion-slide>\n          \n          <ion-slide>\n            <ion-item text-center lines=\"none\">\n              <ion-label>\n                <h1 class=\"text-grey\">Solo S/. 27.00 <small>por mes</small></h1>\n                <p>(Paga por todo el año y recibe 1 mes gratis)</p>\n              </ion-label>\n            </ion-item>\n                  \n            <ul text-start class=\"text-grey margin-left-24\">\n              <li>Nombre, contacto, y Foto principal</li>\n              <li>Configuracion de servicios</li>\n              <li>Presentacion</li>\n              <li>Galeria de trabajos realizados</li>\n              <li>Recibir solicitudes de trabajo</li>\n              <li>Historia de trabajos</li>\n              <li>Capacitaciones y talleres</li>\n              <li>Poder aportar a la comunidad</li>\n              <li>Prioridad en ls solicitudes</li>\n            </ul>\n          </ion-slide>\n        </ion-slides>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-footer no-border>\n  <ion-toolbar no-border>\n    <ion-row>\n      <ion-col size=\"2\">\n        <ion-button expand=\"block\" color=\"green\" (click)=\"goback ()\" mode=\"md\">\n          <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n        </ion-button>\n      </ion-col>\n\n      <ion-col size=\"10\">\n        <ion-button expand=\"block\" color=\"green\" (click)=\"submit ()\" mode=\"md\">\n          Elegir plan\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/pages/soypro-select-plan/soypro-select-plan.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/soypro-select-plan/soypro-select-plan.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".no-text-transform {\n  text-transform: none; }\n\n.hexpand {\n  height: 100%; }\n\nion-slide {\n  display: block !important; }\n\n.text-grey {\n  color: #838383; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsYWluL1B1bnRvUHJvL1B1bnRvUHJvLUlvbmljNC9zcmMvYXBwL3BhZ2VzL3NveXByby1zZWxlY3QtcGxhbi9zb3lwcm8tc2VsZWN0LXBsYW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQW9CLEVBQUE7O0FBR3hCO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLHlCQUF5QixFQUFBOztBQUc3QjtFQUNHLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NveXByby1zZWxlY3QtcGxhbi9zb3lwcm8tc2VsZWN0LXBsYW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vLXRleHQtdHJhbnNmb3JtIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLmhleHBhbmQge1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuaW9uLXNsaWRlIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1ncmV5IHtcbiAgIGNvbG9yOiAjODM4MzgzOyBcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/soypro-select-plan/soypro-select-plan.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/soypro-select-plan/soypro-select-plan.page.ts ***!
  \*********************************************************************/
/*! exports provided: SoyproSelectPlanPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoyproSelectPlanPage", function() { return SoyproSelectPlanPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ "./node_modules/@ionic-native/onesignal/ngx/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");


// Ionic

// Services





var SoyproSelectPlanPage = /** @class */ (function () {
    function SoyproSelectPlanPage(loadingController, storage, af_storage, database, oneSignal, platform, navCtrl) {
        this.loadingController = loadingController;
        this.storage = storage;
        this.af_storage = af_storage;
        this.database = database;
        this.oneSignal = oneSignal;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.slideOpts = {
            initialSlide: 1,
            effect: 'flip',
            zoom: false
        };
        this.segment_value = "1";
    }
    SoyproSelectPlanPage.prototype.ngOnInit = function () {
    };
    SoyproSelectPlanPage.prototype.segmentChanged = function (val) {
        if (val === '0') {
            this.slides.slideTo(0);
        }
        else if (val === '1') {
            this.slides.slideTo(1);
        }
        else {
            this.slides.slideTo(2);
        }
    };
    SoyproSelectPlanPage.prototype.ionSlideDidChange = function () {
        var _this = this;
        this.slides.getActiveIndex().then(function (val) {
            if (val === 0) {
                _this.segment_value = '0';
            }
            else if (val === 1) {
                _this.segment_value = '1';
            }
            else {
                _this.segment_value = '2';
            }
        });
    };
    SoyproSelectPlanPage.prototype.goback = function () {
        this.navCtrl.navigateBack('soypro-cfg-service');
    };
    SoyproSelectPlanPage.prototype.submit = function () {
        var _this = this;
        this.slides.getActiveIndex().then(function (val) {
            if (val === 0) {
                _this.createSoyProAccount();
            }
            else {
            }
        });
    };
    SoyproSelectPlanPage.prototype.createSoyProAccount = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, pro_user_data, _a, _b, phone_number_valid, _c, _d, pro_data, _e, _f, soypro_service_config, _g, _h, pro_user_avatar, service_image, user_uid, filePath, storageRef, uploadTask;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_j) {
                switch (_j.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Procesando Informacion ...'
                        })];
                    case 1:
                        loading = _j.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _j.sent();
                        _b = (_a = JSON).parse;
                        return [4 /*yield*/, this.storage.getObject('pro_user_data')];
                    case 3:
                        pro_user_data = _b.apply(_a, [_j.sent()]);
                        _d = (_c = JSON).parse;
                        return [4 /*yield*/, this.storage.getObject('phone_number_valid')];
                    case 4:
                        phone_number_valid = _d.apply(_c, [_j.sent()]);
                        _f = (_e = JSON).parse;
                        return [4 /*yield*/, this.storage.getObject('pro_data')];
                    case 5:
                        pro_data = _f.apply(_e, [_j.sent()]);
                        _h = (_g = JSON).parse;
                        return [4 /*yield*/, this.storage.getObject('soypro_service_config')];
                    case 6:
                        soypro_service_config = _h.apply(_g, [_j.sent()]);
                        return [4 /*yield*/, this.storage.getObject('pro_user_avatar')];
                    case 7:
                        pro_user_avatar = _j.sent();
                        return [4 /*yield*/, this.storage.getObject('service_image')];
                    case 8:
                        service_image = _j.sent();
                        return [4 /*yield*/, this.storage.getValue('user_uid')];
                    case 9:
                        user_uid = _j.sent();
                        console.log('pro_user_data', pro_user_data);
                        console.log('phone_number_valid', phone_number_valid);
                        console.log('pro_data', pro_data);
                        console.log('soypro_service_config', soypro_service_config);
                        filePath = user_uid + '/avatar.jpg';
                        storageRef = this.af_storage.ref(filePath);
                        uploadTask = storageRef.putString(pro_user_avatar, 'data_url');
                        uploadTask.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                            storageRef.getDownloadURL().subscribe(function (avatar_url) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var _this = this;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.database.addProfessionals(user_uid, pro_user_data, pro_data, soypro_service_config, phone_number_valid, avatar_url)
                                                .then(function () {
                                                if (_this.platform.is('cordova')) {
                                                    _this.oneSignal.sendTag(soypro_service_config.subcategory_id, "true");
                                                    _this.oneSignal.sendTag(soypro_service_config.service.id, "true");
                                                }
                                                if (service_image != null && service_image && undefined && service_image != '') {
                                                    _this.upload_image_service(user_uid, soypro_service_config.subcategory_id, service_image, loading);
                                                }
                                                else {
                                                    loading.dismiss();
                                                    _this.navCtrl.navigateRoot('soypro-completed');
                                                }
                                            })
                                                .catch(function (error) {
                                                console.log('Error', error);
                                                loading.dismiss();
                                            })];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                        })).subscribe();
                        return [2 /*return*/];
                }
            });
        });
    };
    SoyproSelectPlanPage.prototype.upload_image_service = function (user_uid, subcategory_id, image, loading) {
        var _this = this;
        var image_id = this.database.createId();
        var filePath = user_uid + '/' + subcategory_id + '/' + image_id + '.jpg';
        var storageRef = this.af_storage.ref(filePath);
        var uploadTask = storageRef.putString(image, 'data_url');
        uploadTask.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.database.addImageGalleryProfile(user_uid, subcategory_id, image, image_id, filePath)
                            .then(function () {
                            loading.dismiss();
                            _this.navCtrl.navigateRoot('soypro-completed');
                        }, function (error) {
                            loading.dismiss();
                            console.log("Error upload_image_service, ", error);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); })).subscribe();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
    ], SoyproSelectPlanPage.prototype, "slides", void 0);
    SoyproSelectPlanPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-soypro-select-plan',
            template: __webpack_require__(/*! ./soypro-select-plan.page.html */ "./src/app/pages/soypro-select-plan/soypro-select-plan.page.html"),
            styles: [__webpack_require__(/*! ./soypro-select-plan.page.scss */ "./src/app/pages/soypro-select-plan/soypro-select-plan.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"],
            _services_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"],
            _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_6__["OneSignal"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], SoyproSelectPlanPage);
    return SoyproSelectPlanPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-soypro-select-plan-soypro-select-plan-module.js.map