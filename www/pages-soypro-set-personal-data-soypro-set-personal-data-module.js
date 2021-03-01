(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-soypro-set-personal-data-soypro-set-personal-data-module"],{

/***/ "./src/app/pages/soypro-set-personal-data/soypro-set-personal-data.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/soypro-set-personal-data/soypro-set-personal-data.module.ts ***!
  \***********************************************************************************/
/*! exports provided: SoyproSetPersonalDataPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoyproSetPersonalDataPageModule", function() { return SoyproSetPersonalDataPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _soypro_set_personal_data_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./soypro-set-personal-data.page */ "./src/app/pages/soypro-set-personal-data/soypro-set-personal-data.page.ts");







var routes = [
    {
        path: '',
        component: _soypro_set_personal_data_page__WEBPACK_IMPORTED_MODULE_6__["SoyproSetPersonalDataPage"]
    }
];
var SoyproSetPersonalDataPageModule = /** @class */ (function () {
    function SoyproSetPersonalDataPageModule() {
    }
    SoyproSetPersonalDataPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_soypro_set_personal_data_page__WEBPACK_IMPORTED_MODULE_6__["SoyproSetPersonalDataPage"]]
        })
    ], SoyproSetPersonalDataPageModule);
    return SoyproSetPersonalDataPageModule;
}());



/***/ }),

/***/ "./src/app/pages/soypro-set-personal-data/soypro-set-personal-data.page.html":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/soypro-set-personal-data/soypro-set-personal-data.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n    <ion-toolbar mode=\"ios\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button text=\"\" icon=\"ios-arrow-back\" color=\"dark\"></ion-back-button>\n      </ion-buttons>\n  \n      <ion-title>\n        <img class=\"wordmark-size\" src=\"/assets/img/PuntoPro-wordmark.png\">\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n    <form [formGroup]=\"form\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\">          \n            <div margin text-center class=\"avatar-container\">\n              <ion-button size=\"small\" color=\"dark\" class=\"overlay-button\" (click)=\"selectImageSource ()\">\n                <ion-icon slot=\"icon-only\" name=\"md-camera\"></ion-icon>\n              </ion-button>\n              <img id=imageid (click)=\"selectImageSource ()\" class=\"image-avatar\" [src]=\"avatar\">\n            </div>\n\n            <ion-item text-center lines=\"none\">\n              <ion-label>\n                <h2><b>{{ form.value.first_name }} {{ form.value.last_name }}</b></h2>\n              </ion-label>\n            </ion-item>\n          </ion-col>\n    \n          <ion-col size=\"12\">\n            <ion-card class=\"card-margin\">\n              <ion-row>\n                <ion-col size=\"6\">\n                  <ion-item>\n                    <ion-input formControlName=\"first_name\" placeholder=\"Nombres\"></ion-input>\n                  </ion-item>\n                </ion-col>\n      \n                <ion-col size=\"6\">\n                  <ion-item>\n                    <ion-input formControlName=\"last_name\" placeholder=\"Apellidos\"></ion-input>\n                  </ion-item>\n                </ion-col>\n      \n                <ion-col size=\"6\">\n                  <ion-item>\n                    <ion-select class=\"select-item\" interface=\"popover\" placeholder=\"DNI/CE\" formControlName=\"doc_type\">\n                      <ion-select-option value=\"DNI\">DNI</ion-select-option>\n                      <ion-select-option value=\"CE\">CE</ion-select-option>\n                    </ion-select>\n                  </ion-item>\n                </ion-col>\n      \n                <ion-col size=\"6\">\n                  <ion-item>\n                    <ion-input formControlName=\"doc_number\" placeholder=\"N° de documento\"></ion-input>\n                  </ion-item>\n                </ion-col>\n                \n                <ion-col size=\"6\">\n                  <ion-item>\n                    <ion-datetime class=\"no-padding-left\" placeholder=\"Fecha de nacimiento\" displayFormat=\"DD MMM YYYY\" picker-format=\"DD MMMM YYYY\"\n                      cancelText=\"Cancelar\" doneText=\"Seleccionar\"\n                      monthNames=\"enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre\"\n                      formControlName=\"birth_date\">\n                    </ion-datetime>\n                  </ion-item>\n                </ion-col>\n      \n                <ion-col size=\"6\">\n                  <ion-item>\n                    <ion-select formControlName=\"gender\" class=\"select-item\" interface=\"popover\" placeholder=\"Genero\">\n                      <ion-select-option value=\"masculino\">Masculino</ion-select-option>\n                      <ion-select-option value=\"femenino\">Femenino</ion-select-option>\n                    </ion-select>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-card>\n          </ion-col>\n\n          <ion-col size=\"12\">\n            <div *ngIf=\"need_photo\">\n              <small class=\"text-danger margin-left-1rem\">* Si eres humano, pon una foto real</small>\n            </div>\n\n            <div *ngIf=\"form.controls.first_name.errors?.required && form.controls.first_name.dirty\">\n              <small class=\"text-danger margin-left-1rem\">* El campo 'Nombres' es necesario</small>\n            </div> \n\n            <div *ngIf=\"form.controls.doc_type.errors?.required && form.controls.doc_type.dirty\">\n              <small class=\"text-danger margin-left-1rem\">* El campo 'DNI/CE' es necesario</small>\n            </div> \n\n            <div *ngIf=\"form.controls.doc_number.errors?.required && form.controls.doc_number.dirty\">\n              <small class=\"text-danger margin-left-1rem\">* El campo 'N° de documento' es necesario</small>\n            </div> \n\n            <div *ngIf=\"form.controls.birth_date.errors?.required && form.controls.birth_date.dirty\">\n              <small class=\"text-danger margin-left-1rem\">* El campo 'Fecha de nacimiento' es necesario</small>\n            </div> \n\n            <div *ngIf=\"form.controls.gender.errors?.required && form.controls.gender.dirty\">\n              <small class=\"text-danger margin-left-1rem\">* El campo 'Genero' es necesario</small>\n            </div> \n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </form>\n  </ion-content>\n  \n  <ion-footer no-border>\n    <ion-toolbar no-border>\n      <ion-row>\n        <ion-col size=\"2\">\n          <ion-button expand=\"block\" color=\"green\" (click)=\"goback ()\" mode=\"md\">\n            <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n          </ion-button>\n        </ion-col>\n  \n        <ion-col size=\"10\">\n          <ion-button expand=\"block\" color=\"green\" mode=\"md\" [disabled]=\"!form.valid\" (click)=\"submit ()\">\n            Guardar\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-toolbar>\n  </ion-footer>\n  "

/***/ }),

/***/ "./src/app/pages/soypro-set-personal-data/soypro-set-personal-data.page.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/soypro-set-personal-data/soypro-set-personal-data.page.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-avatar {\n  height: 96px;\n  width: 96px;\n  border: 2px solid #ffffffb3;\n  border-radius: 50%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); }\n\n.avatar-container {\n  position: relative;\n  margin-bottom: 0px; }\n\n.padding-bottom-0 {\n  padding-bottom: 0px; }\n\n.overlay-button {\n  position: absolute;\n  margin-left: 62px;\n  margin-top: 75px;\n  font-size: 12px;\n  --border-radius: 12px; }\n\n.select-item {\n  padding-left: 0px;\n  max-width: 100%;\n  width: 100%; }\n\n.padding-right-12px {\n  padding-right: 12px; }\n\n.card-margin {\n  margin: 6px;\n  padding-bottom: 1rem; }\n\n.margin-left-1rem {\n  margin-left: 1rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsYWluL1B1bnRvUHJvL1B1bnRvUHJvLUlvbmljNC9zcmMvYXBwL3BhZ2VzL3NveXByby1zZXQtcGVyc29uYWwtZGF0YS9zb3lwcm8tc2V0LXBlcnNvbmFsLWRhdGEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLDBDQUF1QyxFQUFBOztBQUd6QztFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YscUJBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixXQUFXLEVBQUE7O0FBR2I7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxXQUFXO0VBQ1gsb0JBQW9CLEVBQUE7O0FBR3RCO0VBQ0UsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zb3lwcm8tc2V0LXBlcnNvbmFsLWRhdGEvc295cHJvLXNldC1wZXJzb25hbC1kYXRhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZS1hdmF0YXIge1xuICAgIGhlaWdodDogOTZweDtcbiAgICB3aWR0aDogOTZweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmYjM7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKTtcbiAgfVxuICBcbiAgLmF2YXRhci1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cblxuICAucGFkZGluZy1ib3R0b20tMCB7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgfVxuICBcbiAgLm92ZXJsYXktYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLWxlZnQ6IDYycHg7XG4gICAgbWFyZ2luLXRvcDogNzVweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xuICB9XG5cbiAgLnNlbGVjdC1pdGVtIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAucGFkZGluZy1yaWdodC0xMnB4IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xuICB9XG5cbiAgLmNhcmQtbWFyZ2luIHtcbiAgICBtYXJnaW46IDZweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgfVxuXG4gIC5tYXJnaW4tbGVmdC0xcmVtIHtcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/soypro-set-personal-data/soypro-set-personal-data.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/soypro-set-personal-data/soypro-set-personal-data.page.ts ***!
  \*********************************************************************************/
/*! exports provided: SoyproSetPersonalDataPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoyproSetPersonalDataPage", function() { return SoyproSetPersonalDataPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");


// Ionic

// Forms 


// Camera

// Services




var SoyproSetPersonalDataPage = /** @class */ (function () {
    function SoyproSetPersonalDataPage(camera, actionSheetController, utils, alertController, loadingController, storage, database, navCtrl, platform) {
        this.camera = camera;
        this.actionSheetController = actionSheetController;
        this.utils = utils;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.storage = storage;
        this.database = database;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.need_photo = false;
    }
    SoyproSetPersonalDataPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
                            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
                            avatar: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
                            doc_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('DNI', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
                            doc_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, ng2_validation__WEBPACK_IMPORTED_MODULE_4__["CustomValidators"].number, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8)]),
                            birth_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
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
                            var unsuscribe = _this.database.getUser(id).subscribe(function (user) {
                                unsuscribe.unsubscribe();
                                _this.form.patchValue(user);
                                _this.avatar = user.avatar;
                                _this.checkFace(user.avatar, 'url', loading);
                            }, function (error) {
                                loading.dismiss();
                                console.log('Get user data error', error);
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
    SoyproSetPersonalDataPage.prototype.selectImageSource = function () {
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
    SoyproSetPersonalDataPage.prototype.takePicture = function (sourceType) {
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
                            mediaType: this.camera.MediaType.PICTURE,
                            targetWidth: 512,
                            targetHeight: 512,
                            allowEdit: true,
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
                            _this.checkFace(imageData, 'image', loading);
                        }, function (err) {
                            loading.dismiss();
                            console.log('Camera error', err);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    SoyproSetPersonalDataPage.prototype.checkFace = function (imageData, type, loading) {
        var _this = this;
        if (type === 'image') {
            this.utils.getFaceDetection(imageData).subscribe(function (response) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var result, alert_1;
                var _this = this;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            loading.dismiss();
                            result = response.responses[0];
                            console.log('Face to: ', Object.keys(result).length);
                            if (!(Object.keys(result).length === 0)) return [3 /*break*/, 3];
                            this.need_photo = true;
                            this.form.controls['avatar'].setValue(null);
                            return [4 /*yield*/, this.alertController.create({
                                    header: 'Confirm!',
                                    message: 'Message <strong>text</strong>!!!',
                                    buttons: [
                                        {
                                            text: 'Cancel',
                                            cssClass: 'secondary',
                                            handler: function (blah) {
                                                console.log('Confirm Cancel: blah');
                                            }
                                        }, {
                                            text: 'Volver a intentarlo',
                                            handler: function () {
                                                _this.selectImageSource();
                                            }
                                        }
                                    ]
                                })];
                        case 1:
                            alert_1 = _a.sent();
                            return [4 /*yield*/, alert_1.present()];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            this.need_photo = false;
                            this.avatar = 'data:image/jpeg;base64,' + imageData;
                            this.form.controls['avatar'].setValue(this.avatar);
                            _a.label = 4;
                        case 4: return [2 /*return*/];
                    }
                });
            }); }, function (error) {
                loading.dismiss();
                console.log('GVC error', error);
            });
        }
        else {
            this.utils.getFaceDetectionFromURL(imageData).subscribe(function (response) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var result;
                var _this = this;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    loading.dismiss();
                    result = response.responses[0];
                    console.log('Face to: ', Object.keys(result).length);
                    if (Object.keys(result).length === 0) {
                        this.need_photo = true;
                        this.form.controls['avatar'].setValue(null);
                    }
                    else {
                        this.need_photo = false;
                        this.getBase64ImageFromURL(imageData).subscribe(function (base64data) {
                            console.log('base64data', base64data);
                            _this.form.controls['avatar'].setValue('data:image/jpg;base64,' + base64data);
                        });
                    }
                    return [2 /*return*/];
                });
            }); }, function (error) {
                loading.dismiss();
                console.log('GVC error', error);
            });
        }
    };
    SoyproSetPersonalDataPage.prototype.getBase64ImageFromURL = function (url) {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_9__["Observable"].create(function (observer) {
            // create an image object
            var img = new Image();
            img.crossOrigin = 'Anonymous';
            img.src = url;
            if (!img.complete) {
                // This will call another method that will create image from url
                img.onload = function () {
                    observer.next(_this.getBase64Image(img));
                    observer.complete();
                };
                img.onerror = function (err) {
                    observer.error(err);
                };
            }
            else {
                observer.next(_this.getBase64Image(img));
                observer.complete();
            }
        });
    };
    SoyproSetPersonalDataPage.prototype.getBase64Image = function (img) {
        // We create a HTML canvas object that will create a 2d image
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext("2d");
        // This will draw image    
        ctx.drawImage(img, 0, 0);
        // Convert the drawn image to Data URL
        var dataURL = canvas.toDataURL("image/png");
        return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    };
    SoyproSetPersonalDataPage.prototype.docTypeChange = function (value) {
        /*
        if (value === 'DNI') {
          this.form.controls ['doc_number'].setValidators ([Validators.required, CustomValidators.number, Validators.minLength (8), Validators.maxLength (8)]);
          this.doc_type = "number";
          this.doc_number_minlength = 8;
          this.doc_number_maxlength = 8;
        } else {
          this.form.controls ['doc_number'].setValidators ([Validators.required, Validators.minLength (8), Validators.maxLength (12)]);
          this.doc_type = "text";
          this.doc_number_minlength = 8;
          this.doc_number_maxlength = 12;
        }
        */
    };
    SoyproSetPersonalDataPage.prototype.goback = function () {
        this.navCtrl.navigateBack('soypro-presentation');
    };
    SoyproSetPersonalDataPage.prototype.submit = function () {
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
                        return [4 /*yield*/, this.storage.setObject("pro_user_data", value)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.storage.setValue("pro_user_avatar", value.avatar)];
                    case 4:
                        _a.sent();
                        this.navCtrl.navigateForward('soypro-set-pro-data');
                        loading.dismiss();
                        return [2 /*return*/];
                }
            });
        });
    };
    SoyproSetPersonalDataPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-soypro-set-personal-data',
            template: __webpack_require__(/*! ./soypro-set-personal-data.page.html */ "./src/app/pages/soypro-set-personal-data/soypro-set-personal-data.page.html"),
            styles: [__webpack_require__(/*! ./soypro-set-personal-data.page.scss */ "./src/app/pages/soypro-set-personal-data/soypro-set-personal-data.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _services_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _services_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"],
            _services_database_service__WEBPACK_IMPORTED_MODULE_8__["DatabaseService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
    ], SoyproSetPersonalDataPage);
    return SoyproSetPersonalDataPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-soypro-set-personal-data-soypro-set-personal-data-module.js.map