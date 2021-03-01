(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-soypro-update-pro-data-soypro-update-pro-data-module"],{

/***/ "./src/app/pages/soypro-update-pro-data/soypro-update-pro-data.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/soypro-update-pro-data/soypro-update-pro-data.module.ts ***!
  \*******************************************************************************/
/*! exports provided: SoyproUpdateProDataPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoyproUpdateProDataPageModule", function() { return SoyproUpdateProDataPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _soypro_update_pro_data_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./soypro-update-pro-data.page */ "./src/app/pages/soypro-update-pro-data/soypro-update-pro-data.page.ts");







var routes = [
    {
        path: '',
        component: _soypro_update_pro_data_page__WEBPACK_IMPORTED_MODULE_6__["SoyproUpdateProDataPage"]
    }
];
var SoyproUpdateProDataPageModule = /** @class */ (function () {
    function SoyproUpdateProDataPageModule() {
    }
    SoyproUpdateProDataPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_soypro_update_pro_data_page__WEBPACK_IMPORTED_MODULE_6__["SoyproUpdateProDataPage"]]
        })
    ], SoyproUpdateProDataPageModule);
    return SoyproUpdateProDataPageModule;
}());



/***/ }),

/***/ "./src/app/pages/soypro-update-pro-data/soypro-update-pro-data.page.html":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/soypro-update-pro-data/soypro-update-pro-data.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"ios-arrow-back\" color=\"dark\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title>\n      <img class=\"wordmark-size\" src=\"/assets/img/PuntoPro-wordmark.png\">\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-grid>\n  <ion-row>\n    <ion-col size=\"12\">\n      <div text-center>\n        <img class=\"avatar avatar-card\" [src]=\"auth.user_data?.avatar\"/>\n      </div>\n\n      <ion-item text-center lines=\"none\">\n        <ion-label>\n          <h2><b>{{ auth.user_data?.first_name }} {{ auth.user_data?.last_name }}</b></h2>\n        </ion-label>\n      </ion-item>\n    </ion-col>\n\n    <ion-col size=\"12\">\n      <form [formGroup]=\"form\">\n        <ion-card class=\"card\">\n          <ion-card-header mode=\"md\" text-center>\n            <ion-card-title class=\"text-gray\" text-center>Datos profesionales</ion-card-title>\n          </ion-card-header>\n\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-item>\n                <ion-input formControlName=\"razon_social\" placeholder=\"Razón social\"></ion-input>\n              </ion-item>\n            </ion-col>\n\n            <ion-col size=\"12\">\n              <ion-item>\n                <ion-input formControlName=\"ruc\" placeholder=\"Numero RUC/RUS\"></ion-input>\n              </ion-item>\n            </ion-col>\n\n            <ion-col size=\"12\">\n              <ion-item>\n                <ion-input formControlName=\"address\" placeholder=\"Dirección\"></ion-input>\n              </ion-item>\n            </ion-col>\n\n            <ion-col size=\"12\">\n              <ion-item>\n                <ion-input formControlName=\"business_mail\" placeholder=\"Correo electrónico empresarial\"></ion-input>\n              </ion-item>\n            </ion-col>\n\n            <ion-col size=\"12\">\n              <ion-item>\n                <ion-select class=\"select-item\" interface=\"popover\" placeholder=\"Grado de instrucción\" formControlName=\"institutional_grade\">\n                  <ion-select-option value=\"01\">Educacion primaria</ion-select-option>\n                  <ion-select-option value=\"02\">Educacion segundaria</ion-select-option>\n                  <ion-select-option value=\"03\">Educacion superior</ion-select-option>\n                  <ion-select-option value=\"04\">Educacion tecnica</ion-select-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n\n            <ion-col size=\"12\">\n              <ion-item>\n                <ion-input formControlName=\"degree\" placeholder=\"Titulo\"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n      </form>\n    </ion-col>\n\n    <ion-col size=\"12\">\n      <ion-card class=\"card\">\n        <ion-card-header mode=\"md\" text-center>\n          <ion-card-title class=\"text-gray\" text-center>Horarios de atención</ion-card-title>\n        </ion-card-header>\n\n        <ion-row *ngFor=\"let item of work_schedules\">\n          <ion-col size=\"4\">\n            <ion-item>\n              <ion-select class=\"select-item\" interface=\"popover\" placeholder=\"Lunes - Viernes\" [(ngModel)]=\"item.days\">\n                <ion-select-option value=\"01\">Lunes - Viernes</ion-select-option>\n                <ion-select-option value=\"02\">Sabado - Domingo</ion-select-option>\n                <ion-select-option value=\"03\">Lunes</ion-select-option>\n                <ion-select-option value=\"04\">Martes</ion-select-option>\n                <ion-select-option value=\"05\">Miercoles</ion-select-option>\n                <ion-select-option value=\"06\">Jueves</ion-select-option>\n                <ion-select-option value=\"07\">Viernes</ion-select-option>\n                <ion-select-option value=\"08\">Sabado</ion-select-option>\n                <ion-select-option value=\"09\">Domingo</ion-select-option>\n                <ion-select-option value=\"10\">Feriados</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n\n          <ion-col size=\"3\">\n            <ion-item>\n              <ion-input [(ngModel)]=\"item.open\" placeholder=\"08:00\"></ion-input>\n            </ion-item>\n          </ion-col>\n\n          <ion-col size=\"3\">\n            <ion-item>\n              <ion-input [(ngModel)]=\"item.close\" placeholder=\"17:00\"></ion-input>\n            </ion-item>\n          </ion-col>\n\n          <ion-col size=\"2\" align-self-center>\n            <ion-button size=\"small\" fill=\"clear\" color=\"dark\" (click)=\"removeHour (item)\">\n              <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-item lines=\"none\" (click)=\"addHours ()\">\n              <ion-icon class=\"text-gray\" name=\"add\"></ion-icon>\n              <span class=\"text-gray\">Agregar regla</span>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </ion-col>\n\n    <ion-col size=\"12\">\n      <ion-card class=\"card\">\n        <ion-card-header mode=\"md\" text-center>\n          <ion-card-title class=\"text-gray\" text-center>Zona de atención</ion-card-title>\n        </ion-card-header>\n\n        <ion-list>\n          <ion-item *ngFor=\"let item of work_areas\">\n            <ion-label text-wrap>\n              <ion-text>\n                <h3><b>{{ item.zona }}</b></h3>\n              </ion-text>\n              <p>{{ item.des }}</p>\n            </ion-label>\n\n            <ion-button slot=\"end\" fill=\"clear\" size=\"small\" color=\"dark\" (click)=\"removeZone (item)\">\n              <ion-icon slot=\"icon-only\"name=\"close\"></ion-icon>\n            </ion-button>\n          </ion-item>\n        </ion-list>\n        \n        <ion-item lines=\"none\" (click)=\"addZone ()\">\n          <ion-icon class=\"text-gray\" name=\"add\"></ion-icon>\n          <span class=\"text-gray\">Agregar zona</span>\n        </ion-item>\n      </ion-card>\n    </ion-col>\n\n    <ion-col size=\"12\">\n      <ion-card class=\"card\">\n        <ion-card-header mode=\"md\" text-center>\n          <ion-card-title class=\"text-gray\" text-center>Métodos de pago</ion-card-title>\n        </ion-card-header>\n\n        <ion-row *ngFor=\"let item of payment_methods\">\n          <ion-col size=\"10\">\n            <ion-item lines=\"none\">\n              <ion-select class=\"select-item\" interface=\"popover\" placeholder=\"Metodo de pago\" [(ngModel)]=\"item.tipo\">\n                <ion-select-option value=\"01\">Tarjeta de credito / debito</ion-select-option>\n                <ion-select-option value=\"02\">Efectivo</ion-select-option>\n                <ion-select-option value=\"03\">Cheque</ion-select-option>\n                <ion-select-option value=\"04\">Trasnferencia</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n\n          <ion-col size=\"2\">\n            <ion-button fill=\"clear\" size=\"small\" color=\"dark\" (click)=\"removePago (item)\">\n              <ion-icon slot=\"icon-only\"name=\"close\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n\n        <ion-item lines=\"none\" (click)=\"addMPago ()\">\n          <ion-icon class=\"text-gray\" name=\"add\"></ion-icon>\n          <span class=\"text-gray\">Agregar nuevo</span>\n        </ion-item>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n</ion-content>\n\n<ion-footer no-border>\n<ion-toolbar no-border>\n  <ion-row>\n    <ion-col size=\"2\">\n      <ion-button expand=\"block\" color=\"green\" (click)=\"goback ()\" mode=\"md\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-col>\n\n    <ion-col size=\"10\">\n      <ion-button expand=\"block\" color=\"green\" mode=\"md\" [disabled]=\"!form.valid\" (click)=\"submit ()\">\n        Guardar\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/pages/soypro-update-pro-data/soypro-update-pro-data.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/soypro-update-pro-data/soypro-update-pro-data.page.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".select-item {\n  padding-left: 0px;\n  max-width: 100%;\n  width: 100%; }\n\n.card {\n  margin: 6px; }\n\n.add-galery-image {\n  width: 6rem;\n  margin: 0 auto; }\n\n.service-image {\n  width: 128px;\n  margin: 0 auto;\n  border-radius: 6px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsYWluL1B1bnRvUHJvL1B1bnRvUHJvLUlvbmljNC9zcmMvYXBwL3BhZ2VzL3NveXByby11cGRhdGUtcHJvLWRhdGEvc295cHJvLXVwZGF0ZS1wcm8tZGF0YS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFdBQVcsRUFBQTs7QUFHZjtFQUNJLFdBQVcsRUFBQTs7QUFHZjtFQUNJLFdBQVc7RUFDWCxjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NveXByby11cGRhdGUtcHJvLWRhdGEvc295cHJvLXVwZGF0ZS1wcm8tZGF0YS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0LWl0ZW0ge1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmNhcmQge1xuICAgIG1hcmdpbjogNnB4O1xufVxuXG4uYWRkLWdhbGVyeS1pbWFnZSB7XG4gICAgd2lkdGg6IDZyZW07XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5zZXJ2aWNlLWltYWdlIHtcbiAgICB3aWR0aDogMTI4cHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/soypro-update-pro-data/soypro-update-pro-data.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/soypro-update-pro-data/soypro-update-pro-data.page.ts ***!
  \*****************************************************************************/
/*! exports provided: SoyproUpdateProDataPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoyproUpdateProDataPage", function() { return SoyproUpdateProDataPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");


// Ionic




// Forms 

// Camera

var SoyproUpdateProDataPage = /** @class */ (function () {
    function SoyproUpdateProDataPage(storage, auth, alertController, database, toastController, actionSheetController, camera, loadingController, navCtrl) {
        this.storage = storage;
        this.auth = auth;
        this.alertController = alertController;
        this.database = database;
        this.toastController = toastController;
        this.actionSheetController = actionSheetController;
        this.camera = camera;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
    }
    SoyproUpdateProDataPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
                            razon_social: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
                            ruc: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
                            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
                            business_mail: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
                            institutional_grade: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
                            degree: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
                        });
                        return [4 /*yield*/, this.loadingController.create({
                                message: 'Procesando Informacion ...'
                            })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.storage.getValue('user_uid').then(function (id) {
                            _this.user_uid = id;
                            _this.database.getProById(id).subscribe(function (data) {
                                _this.form.patchValue(data);
                                _this.work_schedules = data.work_schedules;
                                _this.work_areas = data.work_areas;
                                _this.payment_methods = data.payment_methods;
                                loading.dismiss();
                            }, function (error) {
                                loading.dismiss();
                                console.log('getProById', error);
                            });
                        }, function (error) {
                            loading.dismiss();
                            console.log('Get user_uid error', error);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    SoyproUpdateProDataPage.prototype.goback = function () {
        this.navCtrl.navigateBack('soypro-update-data');
    };
    SoyproUpdateProDataPage.prototype.addHours = function () {
        this.work_schedules.push({
            id: Math.random(),
            days: '',
            open: '',
            close: ''
        });
    };
    SoyproUpdateProDataPage.prototype.removeHour = function (item) {
        for (var i = 0; i < this.work_schedules.length; i++) {
            if (this.work_schedules[i].id === item.id) {
                this.work_schedules.splice(i, 1);
            }
        }
    };
    SoyproUpdateProDataPage.prototype.removeZone = function (item) {
        for (var i = 0; i < this.work_areas.length; i++) {
            if (this.work_areas[i].id === item.id) {
                this.work_areas.splice(i, 1);
            }
        }
    };
    SoyproUpdateProDataPage.prototype.removePago = function (item) {
        for (var i = 0; i < this.payment_methods.length; i++) {
            if (this.payment_methods[i].id === item.id) {
                this.payment_methods.splice(i, 1);
            }
        }
    };
    SoyproUpdateProDataPage.prototype.addZone = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Agrege una zona',
                            inputs: [
                                {
                                    name: 'zona',
                                    type: 'text',
                                    placeholder: 'Zona'
                                },
                                {
                                    name: 'des',
                                    type: 'text',
                                    placeholder: 'Detalle'
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                    }
                                }, {
                                    text: 'Agregar',
                                    handler: function (data) {
                                        if (data.zona) {
                                            _this.work_areas.push({
                                                id: Math.random(),
                                                zona: data.zona,
                                                des: data.des
                                            });
                                        }
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
    SoyproUpdateProDataPage.prototype.addMPago = function () {
        this.payment_methods.push({
            id: Math.random(),
            tipo: "02"
        });
    };
    SoyproUpdateProDataPage.prototype.submit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, value;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Procesando Informacion ...'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        value = this.form.value;
                        value.work_schedules = this.work_schedules;
                        value.work_areas = this.work_areas;
                        value.payment_methods = this.payment_methods;
                        console.log(value);
                        this.database.updatePro(this.user_uid, value)
                            .then(function () {
                            _this.presentToast('La información se actualizó correctamente.');
                            loading.dismiss();
                            _this.goback();
                        }).catch(function (error) {
                            console.log('Error', error);
                            loading.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    SoyproUpdateProDataPage.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: message,
                            duration: 2000,
                            position: 'top'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    SoyproUpdateProDataPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-soypro-update-pro-data',
            template: __webpack_require__(/*! ./soypro-update-pro-data.page.html */ "./src/app/pages/soypro-update-pro-data/soypro-update-pro-data.page.html"),
            styles: [__webpack_require__(/*! ./soypro-update-pro-data.page.scss */ "./src/app/pages/soypro-update-pro-data/soypro-update-pro-data.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _services_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], SoyproUpdateProDataPage);
    return SoyproUpdateProDataPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-soypro-update-pro-data-soypro-update-pro-data-module.js.map