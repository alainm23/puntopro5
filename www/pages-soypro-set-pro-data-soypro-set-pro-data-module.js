(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-soypro-set-pro-data-soypro-set-pro-data-module"],{

/***/ "./src/app/pages/soypro-set-pro-data/soypro-set-pro-data.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/soypro-set-pro-data/soypro-set-pro-data.module.ts ***!
  \*************************************************************************/
/*! exports provided: SoyproSetProDataPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoyproSetProDataPageModule", function() { return SoyproSetProDataPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _soypro_set_pro_data_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./soypro-set-pro-data.page */ "./src/app/pages/soypro-set-pro-data/soypro-set-pro-data.page.ts");







var routes = [
    {
        path: '',
        component: _soypro_set_pro_data_page__WEBPACK_IMPORTED_MODULE_6__["SoyproSetProDataPage"]
    }
];
var SoyproSetProDataPageModule = /** @class */ (function () {
    function SoyproSetProDataPageModule() {
    }
    SoyproSetProDataPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_soypro_set_pro_data_page__WEBPACK_IMPORTED_MODULE_6__["SoyproSetProDataPage"]]
        })
    ], SoyproSetProDataPageModule);
    return SoyproSetProDataPageModule;
}());



/***/ }),

/***/ "./src/app/pages/soypro-set-pro-data/soypro-set-pro-data.page.html":
/*!*************************************************************************!*\
  !*** ./src/app/pages/soypro-set-pro-data/soypro-set-pro-data.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"ios-arrow-back\" color=\"dark\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title>\n      <img class=\"wordmark-size\" src=\"/assets/img/PuntoPro-wordmark.png\">\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\">\n        <div text-center>\n          <img class=\"avatar avatar-card\" [src]=\"user.avatar\"/>\n        </div>\n  \n        <ion-item text-center lines=\"none\">\n          <ion-label>\n            <h2><b>{{ user.fullname }}</b></h2>\n          </ion-label>\n        </ion-item>\n      </ion-col>\n\n      <ion-col size=\"12\">\n        <form [formGroup]=\"form\">\n          <ion-card class=\"card\">\n            <ion-card-header mode=\"md\" text-center>\n              <ion-card-title class=\"text-gray\" text-center>Datos profesionales</ion-card-title>\n            </ion-card-header>\n\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-item>\n                  <ion-input formControlName=\"razon_social\" placeholder=\"Razón social\"></ion-input>\n                </ion-item>\n              </ion-col>\n\n              <ion-col size=\"12\">\n                <ion-item>\n                  <ion-input formControlName=\"ruc\" placeholder=\"Numero RUC/RUS\"></ion-input>\n                </ion-item>\n              </ion-col>\n\n              <ion-col size=\"12\">\n                <ion-item>\n                  <ion-input formControlName=\"address\" placeholder=\"Dirección\"></ion-input>\n                </ion-item>\n              </ion-col>\n\n              <ion-col size=\"12\">\n                <ion-item>\n                  <ion-input formControlName=\"business_mail\" placeholder=\"Correo electrónico empresarial\"></ion-input>\n                </ion-item>\n              </ion-col>\n\n              <ion-col size=\"12\">\n                <ion-item>\n                  <ion-select class=\"select-item\" interface=\"popover\" placeholder=\"Grado de instrucción\" formControlName=\"institutional_grade\">\n                    <ion-select-option value=\"DNI\">DNI</ion-select-option>\n                    <ion-select-option value=\"CE\">CE</ion-select-option>\n                  </ion-select>\n                </ion-item>\n              </ion-col>\n\n              <ion-col size=\"12\">\n                <ion-item>\n                  <ion-input formControlName=\"degree\" placeholder=\"Titulo\"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-card>\n        </form>\n      </ion-col>\n\n      <ion-col size=\"12\">\n        <ion-card class=\"card\">\n          <ion-card-header mode=\"md\" text-center>\n            <ion-card-title class=\"text-gray\" text-center>Horarios de atención</ion-card-title>\n          </ion-card-header>\n\n          <ion-row *ngFor=\"let item of hours\">\n            <ion-col size=\"4\">\n              <ion-item>\n                <ion-select class=\"select-item\" interface=\"popover\" placeholder=\"Lunes - Viernes\" [(ngModel)]=\"item.days\">\n                  <ion-select-option value=\"01\">Lunes - Viernes</ion-select-option>\n                  <ion-select-option value=\"02\">Sabado - Domingo</ion-select-option>\n                  <ion-select-option value=\"03\">Lunes</ion-select-option>\n                  <ion-select-option value=\"04\">Martes</ion-select-option>\n                  <ion-select-option value=\"05\">Miercoles</ion-select-option>\n                  <ion-select-option value=\"06\">Jueves</ion-select-option>\n                  <ion-select-option value=\"07\">Viernes</ion-select-option>\n                  <ion-select-option value=\"08\">Sabado</ion-select-option>\n                  <ion-select-option value=\"09\">Domingo</ion-select-option>\n                  <ion-select-option value=\"10\">Feriados</ion-select-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n\n            <ion-col size=\"3\">\n              <ion-item>\n                <ion-input [(ngModel)]=\"item.open\" placeholder=\"08:00\"></ion-input>\n              </ion-item>\n            </ion-col>\n\n            <ion-col size=\"3\">\n              <ion-item>\n                <ion-input [(ngModel)]=\"item.close\" placeholder=\"17:00\"></ion-input>\n              </ion-item>\n            </ion-col>\n\n            <ion-col size=\"2\" align-self-center>\n              <ion-button size=\"small\" fill=\"clear\" color=\"dark\" (click)=\"removeHour (item)\">\n                <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-item lines=\"none\" (click)=\"addHours ()\">\n                <ion-icon class=\"text-gray\" name=\"add\"></ion-icon>\n                <span class=\"text-gray\">Agregar regla</span>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n      </ion-col>\n\n      <ion-col size=\"12\">\n        <ion-card class=\"card\">\n          <ion-card-header mode=\"md\" text-center>\n            <ion-card-title class=\"text-gray\" text-center>Zona de atención</ion-card-title>\n          </ion-card-header>\n\n          <ion-list>\n            <ion-item *ngFor=\"let item of places\">\n              <ion-label text-wrap>\n                <ion-text>\n                  <h3><b>{{ item.zona }}</b></h3>\n                </ion-text>\n                <p>{{ item.des }}</p>\n              </ion-label>\n\n              <ion-button slot=\"end\" fill=\"clear\" size=\"small\" color=\"dark\" (click)=\"removeZone (item)\">\n                <ion-icon slot=\"icon-only\"name=\"close\"></ion-icon>\n              </ion-button>\n            </ion-item>\n          </ion-list>\n          \n          <ion-item lines=\"none\" (click)=\"addZone ()\">\n            <ion-icon class=\"text-gray\" name=\"add\"></ion-icon>\n            <span class=\"text-gray\">Agregar zona</span>\n          </ion-item>\n        </ion-card>\n      </ion-col>\n\n      <ion-col size=\"12\">\n        <ion-card class=\"card\">\n          <ion-card-header mode=\"md\" text-center>\n            <ion-card-title class=\"text-gray\" text-center>Métodos de pago</ion-card-title>\n          </ion-card-header>\n\n          <ion-row *ngFor=\"let item of pagos\">\n            <ion-col size=\"10\">\n              <ion-item lines=\"none\">\n                <ion-select class=\"select-item\" interface=\"popover\" placeholder=\"Metodo de pago\" [(ngModel)]=\"item.tipo\">\n                  <ion-select-option value=\"01\">Tarjeta de credito / debito</ion-select-option>\n                  <ion-select-option value=\"02\">Efectivo</ion-select-option>\n                  <ion-select-option value=\"03\">Cheque</ion-select-option>\n                  <ion-select-option value=\"04\">Trasnferencia</ion-select-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n\n            <ion-col size=\"2\">\n              <ion-button fill=\"clear\" size=\"small\" color=\"dark\" (click)=\"removePago (item)\">\n                <ion-icon slot=\"icon-only\"name=\"close\"></ion-icon>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n\n          <ion-item lines=\"none\" (click)=\"addMPago ()\">\n            <ion-icon class=\"text-gray\" name=\"add\"></ion-icon>\n            <span class=\"text-gray\">Agregar nuevo</span>\n          </ion-item>\n        </ion-card>\n      </ion-col>\n\n      <ion-col size=\"12\">\n        <ion-card class=\"card\">\n          <ion-card-header mode=\"md\" text-center>\n            <ion-card-title class=\"text-gray\" text-center>Galeria de imagenes</ion-card-title>\n          </ion-card-header>\n\n          <p text-wrap text-center>No te quedes atrás, agrega una imagen a tu servicio e incrementa tu credibilidad y tus ventas.</p>\n\n          <div *ngIf=\"image === ''\" text-center (click)=\"selectImageSource ()\">\n            <img class=\"add-galery-image\" src=\"assets/img/add_galery.png\">\n          </div>\n\n          <div *ngIf=\"image !== ''\">\n            <img class=\"service-image\" [src]=\"image\">\n          </div>\n\n          <div *ngIf=\"image !== ''\" text-center margin>\n            <p class=\"text-danger\" (click)=\"clearImage ()\"><small>Eliminar imagen</small></p>\n          </div>\n\n          <p text-wrap text-center>Selecciona una de tu celular o toma una ahora</p>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-footer no-border>\n  <ion-toolbar no-border>\n    <ion-row>\n      <ion-col size=\"2\">\n        <ion-button expand=\"block\" color=\"green\" (click)=\"goback ()\" mode=\"md\">\n          <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n        </ion-button>\n      </ion-col>\n\n      <ion-col size=\"10\">\n        <ion-button expand=\"block\" color=\"green\" mode=\"md\" [disabled]=\"!form.valid\" (click)=\"submit ()\">\n          Guardar\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/pages/soypro-set-pro-data/soypro-set-pro-data.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/soypro-set-pro-data/soypro-set-pro-data.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".select-item {\n  padding-left: 0px;\n  max-width: 100%;\n  width: 100%; }\n\n.card {\n  margin: 6px; }\n\n.add-galery-image {\n  width: 6rem;\n  margin: 0 auto; }\n\n.service-image {\n  width: 128px;\n  margin: 0 auto;\n  border-radius: 6px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsYWluL1B1bnRvUHJvL1B1bnRvUHJvLUlvbmljNC9zcmMvYXBwL3BhZ2VzL3NveXByby1zZXQtcHJvLWRhdGEvc295cHJvLXNldC1wcm8tZGF0YS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFdBQVcsRUFBQTs7QUFHZjtFQUNJLFdBQVcsRUFBQTs7QUFHZjtFQUNJLFdBQVc7RUFDWCxjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NveXByby1zZXQtcHJvLWRhdGEvc295cHJvLXNldC1wcm8tZGF0YS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0LWl0ZW0ge1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmNhcmQge1xuICAgIG1hcmdpbjogNnB4O1xufVxuXG4uYWRkLWdhbGVyeS1pbWFnZSB7XG4gICAgd2lkdGg6IDZyZW07XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5zZXJ2aWNlLWltYWdlIHtcbiAgICB3aWR0aDogMTI4cHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/soypro-set-pro-data/soypro-set-pro-data.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/soypro-set-pro-data/soypro-set-pro-data.page.ts ***!
  \***********************************************************************/
/*! exports provided: SoyproSetProDataPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoyproSetProDataPage", function() { return SoyproSetProDataPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");


// Ionic



// Forms 

// Camera

var SoyproSetProDataPage = /** @class */ (function () {
    function SoyproSetProDataPage(storage, alertController, database, actionSheetController, camera, loadingController, navCtrl) {
        this.storage = storage;
        this.alertController = alertController;
        this.database = database;
        this.actionSheetController = actionSheetController;
        this.camera = camera;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.user = {
            fullname: '',
            avatar: ''
        };
        this.image = '';
        this.hours = [];
        this.places = [];
        this.pagos = [];
    }
    SoyproSetProDataPage.prototype.ngOnInit = function () {
        var _this = this;
        this.hours.push({
            id: Math.random(),
            days: '',
            open: '',
            close: ''
        });
        this.places.push({
            id: Math.random(),
            zona: 'Cusco metropolitana',
            des: 'Centro, Wanchaq, San Sebastián, Santiago, Ttio, San Blas',
        });
        this.pagos.push({
            id: Math.random(),
            tipo: "02"
        });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            razon_social: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            ruc: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            business_mail: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            institutional_grade: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            degree: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
        });
        this.storage.getObject('pro_user_data').then(function (response) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.user.fullname = JSON.parse(response).first_name + ' ' + JSON.parse(response).last_name,
                    this.user.avatar = JSON.parse(response).avatar;
                return [2 /*return*/];
            });
        }); });
    };
    SoyproSetProDataPage.prototype.goback = function () {
        this.navCtrl.navigateBack('soypro-set-personal-data');
    };
    SoyproSetProDataPage.prototype.addHours = function () {
        this.hours.push({
            id: Math.random(),
            days: '',
            open: '',
            close: ''
        });
    };
    SoyproSetProDataPage.prototype.removeHour = function (item) {
        for (var i = 0; i < this.hours.length; i++) {
            if (this.hours[i].id === item.id) {
                this.hours.splice(i, 1);
            }
        }
    };
    SoyproSetProDataPage.prototype.removeZone = function (item) {
        for (var i = 0; i < this.places.length; i++) {
            if (this.places[i].id === item.id) {
                this.places.splice(i, 1);
            }
        }
    };
    SoyproSetProDataPage.prototype.removePago = function (item) {
        for (var i = 0; i < this.pagos.length; i++) {
            if (this.pagos[i].id === item.id) {
                this.pagos.splice(i, 1);
            }
        }
    };
    SoyproSetProDataPage.prototype.addZone = function () {
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
                                            _this.places.push({
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
    SoyproSetProDataPage.prototype.addMPago = function () {
        this.pagos.push({
            id: Math.random(),
            tipo: "02"
        });
    };
    SoyproSetProDataPage.prototype.submit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, value;
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
                        value.work_schedules = this.hours;
                        value.work_areas = this.places;
                        value.payment_methods = this.pagos;
                        console.log(value);
                        return [4 /*yield*/, this.storage.setObject("pro_data", value)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.storage.setObject("service_image", this.image)];
                    case 4:
                        _a.sent();
                        this.navCtrl.navigateForward('soypro-select-category');
                        loading.dismiss();
                        return [2 /*return*/];
                }
            });
        });
    };
    SoyproSetProDataPage.prototype.selectImageSource = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Imagen de perfil',
                            buttons: [{
                                    text: 'Tomar una foto',
                                    icon: 'camera',
                                    handler: function () {
                                        _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                                    }
                                }, {
                                    text: 'Seleccionar una foto',
                                    icon: 'images',
                                    handler: function () {
                                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                                    }
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SoyproSetProDataPage.prototype.takePicture = function (sourceType) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var options, loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            quality: 95,
                            sourceType: sourceType,
                            saveToPhotoAlbum: false,
                            correctOrientation: true,
                            destinationType: this.camera.DestinationType.DATA_URL,
                            encodingType: this.camera.EncodingType.JPEG,
                            mediaType: this.camera.MediaType.PICTURE
                        };
                        return [4 /*yield*/, this.loadingController.create({
                                message: 'Procesando Informacion ...'
                            })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.camera.getPicture(options).then(function (imageData) {
                            _this.image = 'data:image/jpeg;base64,' + imageData;
                        }, function (err) {
                            loading.dismiss();
                            console.log('Camera error', err);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    SoyproSetProDataPage.prototype.clearImage = function () {
        this.image = "";
    };
    SoyproSetProDataPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-soypro-set-pro-data',
            template: __webpack_require__(/*! ./soypro-set-pro-data.page.html */ "./src/app/pages/soypro-set-pro-data/soypro-set-pro-data.page.html"),
            styles: [__webpack_require__(/*! ./soypro-set-pro-data.page.scss */ "./src/app/pages/soypro-set-pro-data/soypro-set-pro-data.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _services_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], SoyproSetProDataPage);
    return SoyproSetProDataPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-soypro-set-pro-data-soypro-set-pro-data-module.js.map