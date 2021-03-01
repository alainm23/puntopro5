(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-select-plan-select-plan-module"],{

/***/ "./src/app/pages/select-plan/select-plan.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/select-plan/select-plan.module.ts ***!
  \*********************************************************/
/*! exports provided: SelectPlanPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectPlanPageModule", function() { return SelectPlanPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _select_plan_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select-plan.page */ "./src/app/pages/select-plan/select-plan.page.ts");







var routes = [
    {
        path: '',
        component: _select_plan_page__WEBPACK_IMPORTED_MODULE_6__["SelectPlanPage"]
    }
];
var SelectPlanPageModule = /** @class */ (function () {
    function SelectPlanPageModule() {
    }
    SelectPlanPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_select_plan_page__WEBPACK_IMPORTED_MODULE_6__["SelectPlanPage"]]
        })
    ], SelectPlanPageModule);
    return SelectPlanPageModule;
}());



/***/ }),

/***/ "./src/app/pages/select-plan/select-plan.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/select-plan/select-plan.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <h2 margin padding text-center class=\"text-white\">\n    Elige un plan\n  </h2>\n\n  <ion-segment class=\"segment-css\" (ionChange)=\"segmentChanged($event.detail.value)\" mode=\"ios\" color=\"light\" [(ngModel)]=\"segment_value\">\n    <ion-segment-button value=\"free\" mode=\"ios\">\n      <ion-label>Gratis</ion-label>\n    </ion-segment-button>\n    \n    <ion-segment-button value=\"standar\" mode=\"ios\">\n      <ion-label>Estándar</ion-label>\n    </ion-segment-button>\n\n    <ion-segment-button value=\"premium\" mode=\"ios\">\n      <ion-label>Premium</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <ion-slides margin-top class=\"hexpand\" [options]=\"slideOpts\" (ionSlideDidChange)=\"ionSlideDidChange ()\">\n    <ion-slide>\n      <ion-button class=\"price-button\" color=\"white\" margin>\n        <span class=\"text-orange\">Gratis</span>\n      </ion-button>\n\n      <ul text-start class=\"text-white margin-left-24\">\n        <li>Nombre, contacto, y Foto principal</li>\n        <li>Configuracion de servicios</li>\n        <li>Presentacion</li>\n        <li>Galeria de trabajos realizados</li>\n        <li>Recibir solicitudes de trabajo</li>\n        <li>Historia de trabajos</li>\n        <li>Capacitaciones y talleres</li>\n        <li>Poder aportar a la comunidad</li>\n        <li>Prioridad en ls solicitudes</li>\n      </ul>\n    </ion-slide>\n\n    <ion-slide>\n      <ion-button class=\"price-button\" color=\"white\" margin>\n        <span class=\"text-orange\">Solo S/. 9.99</span>\n      </ion-button>\n\n      <ul text-start class=\"text-white margin-left-24\">\n        <li>Nombre, contacto, y Foto principal</li>\n        <li>Configuracion de servicios</li>\n        <li>Presentacion</li>\n        <li>Galeria de trabajos realizados</li>\n        <li>Recibir solicitudes de trabajo</li>\n        <li>Historia de trabajos</li>\n        <li>Capacitaciones y talleres</li>\n        <li>Poder aportar a la comunidad</li>\n        <li>Prioridad en ls solicitudes</li>\n      </ul>\n\n      <ion-button size=\"small\" color=\"white\" margin>\n        <span class=\"text-violet\">Ingrese aqui tu codigo de descuento</span>\n      </ion-button>\n    </ion-slide>\n    \n    <ion-slide>\n      <ion-button class=\"price-button\" color=\"white\" margin>\n        <span class=\"text-orange\">Solo S/. 29.99</span>\n      </ion-button>\n\n      <ul text-start class=\"text-white margin-left-24\">\n        <li>Nombre, contacto, y Foto principal</li>\n        <li>Configuracion de servicios</li>\n        <li>Presentacion</li>\n        <li>Galeria de trabajos realizados</li>\n        <li>Recibir solicitudes de trabajo</li>\n        <li>Historia de trabajos</li>\n        <li>Capacitaciones y talleres</li>\n        <li>Poder aportar a la comunidad</li>\n        <li>Prioridad en ls solicitudes</li>\n      </ul>\n\n      <ion-button size=\"small\" color=\"white\" margin>\n        <span class=\"text-violet\">Ingrese aqui tu codigo de descuento</span>\n      </ion-button>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n\n<ion-footer>\n  <ion-row style=\"background-color: #00B853;\">\n    <ion-col>\n      <ion-button expand=\"block\" fill=\"clear\" color=\"light\" (click)=\"navigateBack ()\">\n        <ion-icon slot=\"start\" name=\"arrow-back\"></ion-icon>\n        \n      </ion-button>\n    </ion-col>\n\n    <ion-col>\n      <ion-button expand=\"block\" fill=\"clear\" color=\"light\" (click)=\"selectPlan ()\">\n        {{ button_text }}\n        <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/pages/select-plan/select-plan.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/select-plan/select-plan.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #039D4F; }\n\nion-slide {\n  display: block !important; }\n\n.price-button {\n  width: 164px;\n  height: 32px;\n  font-size: 18px;\n  --border-radius: 6px; }\n\n.hexpand {\n  height: 100%; }\n\n.margin-left-24 {\n  margin-left: 24px; }\n\n.segment-css {\n  padding-left: 1rem;\n  padding-right: 1rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsYWluL1B1bnRvUHJvL1B1bnRvUHJvLUlvbmljNC9zcmMvYXBwL3BhZ2VzL3NlbGVjdC1wbGFuL3NlbGVjdC1wbGFuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFhLEVBQUE7O0FBR2Y7RUFDRSx5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixvQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZWxlY3QtcGxhbi9zZWxlY3QtcGxhbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDM5RDRGO1xufVxuXG5pb24tc2xpZGUge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuXG4ucHJpY2UtYnV0dG9uIHtcbiAgd2lkdGg6IDE2NHB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgLS1ib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5oZXhwYW5kIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubWFyZ2luLWxlZnQtMjQge1xuICBtYXJnaW4tbGVmdDogMjRweDtcbn1cblxuLnNlZ21lbnQtY3NzIHtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/select-plan/select-plan.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/select-plan/select-plan.page.ts ***!
  \*******************************************************/
/*! exports provided: SelectPlanPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectPlanPage", function() { return SelectPlanPage; });
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





var SelectPlanPage = /** @class */ (function () {
    function SelectPlanPage(loadingController, storage, af_storage, database, oneSignal, platform, navCtrl) {
        this.loadingController = loadingController;
        this.storage = storage;
        this.af_storage = af_storage;
        this.database = database;
        this.oneSignal = oneSignal;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.slideOpts = {
            effect: 'flip',
            zoom: false
        };
        this.segment_value = "free";
        this.button_text = "Adelante";
    }
    SelectPlanPage.prototype.ngOnInit = function () {
    };
    SelectPlanPage.prototype.segmentChanged = function (val) {
        if (val === 'free') {
            this.slides.slideTo(0);
        }
        else if (val === 'standar') {
            this.slides.slideTo(1);
        }
        else {
            this.slides.slideTo(2);
        }
    };
    SelectPlanPage.prototype.ionSlideDidChange = function () {
        var _this = this;
        this.slides.getActiveIndex().then(function (val) {
            if (val === 0) {
                _this.segment_value = 'free';
                _this.button_text = "Adelante";
            }
            else if (val === 1) {
                _this.segment_value = 'standar';
                _this.button_text = "Escoger metodo de pago";
            }
            else {
                _this.segment_value = 'premium';
                _this.button_text = "Escoger metodo de pago";
            }
        });
    };
    SelectPlanPage.prototype.navigateBack = function () {
        this.navCtrl.navigateBack('service-first-image');
    };
    SelectPlanPage.prototype.createSoyProAccount = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, soypro_data, _a, _b, phone_number_valid, _c, _d, soypro_service_config, _e, _f, soypro_avatar, soypro_service_image, user_uid, filePath, storageRef, uploadTask;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_g) {
                switch (_g.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Procesando Informacion ...'
                        })];
                    case 1:
                        loading = _g.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _g.sent();
                        _b = (_a = JSON).parse;
                        return [4 /*yield*/, this.storage.getObject('soypro_data')];
                    case 3:
                        soypro_data = _b.apply(_a, [_g.sent()]);
                        _d = (_c = JSON).parse;
                        return [4 /*yield*/, this.storage.getObject('phone_number_valid')];
                    case 4:
                        phone_number_valid = _d.apply(_c, [_g.sent()]);
                        _f = (_e = JSON).parse;
                        return [4 /*yield*/, this.storage.getObject('soypro_service_config')];
                    case 5:
                        soypro_service_config = _f.apply(_e, [_g.sent()]);
                        return [4 /*yield*/, this.storage.getValue('soypro_avatar')];
                    case 6:
                        soypro_avatar = _g.sent();
                        return [4 /*yield*/, this.storage.getValue('soypro_service_image')];
                    case 7:
                        soypro_service_image = _g.sent();
                        return [4 /*yield*/, this.storage.getValue('user_uid')];
                    case 8:
                        user_uid = _g.sent();
                        console.log('soypro_data', soypro_data);
                        console.log('phone_number_valid', phone_number_valid);
                        console.log('soypro_service_config', soypro_service_config);
                        console.log('soypro_avatar', soypro_avatar);
                        console.log('soypro_service_image', soypro_service_image);
                        console.log('user_uid', user_uid);
                        filePath = user_uid + '/avatar.jpg';
                        storageRef = this.af_storage.ref(filePath);
                        uploadTask = storageRef.putString(soypro_avatar, 'data_url');
                        uploadTask.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                            storageRef.getDownloadURL().subscribe(function (avatar_url) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var _this = this;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.database.addProfessionals(user_uid, soypro_data, soypro_service_config, phone_number_valid, avatar_url)
                                                .then(function () {
                                                if (_this.platform.is('cordova')) {
                                                    _this.oneSignal.sendTag(soypro_service_config.subcategory_id, "true");
                                                    _this.oneSignal.sendTag(soypro_service_config.service.id, "true");
                                                }
                                                if (soypro_service_image != null && soypro_service_image && undefined && soypro_service_image != '') {
                                                    _this.upload_image_service(user_uid, soypro_service_config.service.id, soypro_service_image, loading);
                                                }
                                                else {
                                                    loading.dismiss();
                                                    _this.navCtrl.navigateRoot('soypro-completed');
                                                }
                                            }, function (error) {
                                                loading.dismiss();
                                                console.log("addProfessionals", error);
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
    SelectPlanPage.prototype.upload_image_service = function (user_uid, service_id, image, loading) {
        var _this = this;
        var image_id = this.database.createId();
        var filePath = user_uid + '/' + service_id + '/' + image_id + '.jpg';
        var storageRef = this.af_storage.ref(filePath);
        var uploadTask = storageRef.putString(image, 'data_url');
        uploadTask.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.database.addImageService(user_uid, service_id, image, image_id, filePath)
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
    SelectPlanPage.prototype.selectPlan = function () {
        var _this = this;
        this.slides.getActiveIndex().then(function (val) {
            if (val === 0) {
                _this.createSoyProAccount();
            }
            else {
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
    ], SelectPlanPage.prototype, "slides", void 0);
    SelectPlanPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-select-plan',
            template: __webpack_require__(/*! ./select-plan.page.html */ "./src/app/pages/select-plan/select-plan.page.html"),
            styles: [__webpack_require__(/*! ./select-plan.page.scss */ "./src/app/pages/select-plan/select-plan.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"],
            _services_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"],
            _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_6__["OneSignal"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], SelectPlanPage);
    return SelectPlanPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-select-plan-select-plan-module.js.map