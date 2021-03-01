(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-soypro-data-required-soypro-data-required-module"],{

/***/ "./src/app/pages/soypro-data-required/soypro-data-required.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/soypro-data-required/soypro-data-required.module.ts ***!
  \***************************************************************************/
/*! exports provided: SoyproDataRequiredPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoyproDataRequiredPageModule", function() { return SoyproDataRequiredPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _soypro_data_required_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./soypro-data-required.page */ "./src/app/pages/soypro-data-required/soypro-data-required.page.ts");







var routes = [
    {
        path: '',
        component: _soypro_data_required_page__WEBPACK_IMPORTED_MODULE_6__["SoyproDataRequiredPage"]
    }
];
var SoyproDataRequiredPageModule = /** @class */ (function () {
    function SoyproDataRequiredPageModule() {
    }
    SoyproDataRequiredPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_soypro_data_required_page__WEBPACK_IMPORTED_MODULE_6__["SoyproDataRequiredPage"]]
        })
    ], SoyproDataRequiredPageModule);
    return SoyproDataRequiredPageModule;
}());



/***/ }),

/***/ "./src/app/pages/soypro-data-required/soypro-data-required.page.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/soypro-data-required/soypro-data-required.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar mode=\"ios\" no-border>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"ios-arrow-back\" color=\"dark\"></ion-back-button>\n    </ion-buttons>\n    \n    <ion-title>\n      <img class=\"wordmark-size\" src=\"/assets/img/PuntoPro-wordmark.png\">\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>  \n  <div margin text-center class=\"avatar-container\">\n    <ion-button size=\"small\" color=\"dark\" class=\"overlay-button\" (click)=\"selectImageSource ()\">\n      <ion-icon slot=\"icon-only\" name=\"md-camera\"></ion-icon>\n    </ion-button>\n    <img id=imageid (click)=\"selectImageSource ()\" class=\"image-avatar\" [src]=\"avatar\">\n  </div>\n\n  <ion-card *ngIf=\"need_photo\" color=\"red\">\n    <ion-item text-center>\n      <ion-label color=\"danger\">Si eres humano, pon una foto</ion-label>\n    </ion-item>\n  </ion-card>\n\n  <form [formGroup]=\"form\">\n  <ion-card class=\"border-6 card-white\">\n    <ion-card-header class=\"padding-bottom-0\">\n      <ion-card-subtitle>Datos personales</ion-card-subtitle>\n    </ion-card-header>\n\n    <ion-list>\n      <ion-item>\n        <ion-label position=\"stacked\">RUC</ion-label>\n        <ion-input type=\"tel\" placeholder=\"15878545896\" clearInput=true formControlName=\"ruc\" maxlength=\"11\"></ion-input>\n      </ion-item>\n\n      <div *ngIf=\"form.controls.ruc.errors?.required && form.controls.ruc.dirty\">\n        <small class=\"text-danger margin-left-1\">* Este campo es necesario</small>\n      </div>\n\n      <div *ngIf=\"form.controls.ruc.errors?.number && form.controls.ruc.dirty\">\n        <small class=\"text-danger margin-left-1\">* Numero de RUC invalido, use solo numeros</small>\n      </div>\n\n      <div *ngIf=\"form.controls.ruc.errors?.minlength && form.controls.ruc.dirty\">\n        <small class=\"text-danger margin-left-1\">* Numero de RUC invalido, minimo 11 digitos</small>\n      </div>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Tipo de documento</ion-label>\n        <ion-select placeholder=\"Seleccione uno\"interface=\"popover\" formControlName=\"doc_type\" (ngModelChange)=\"docTypeChange ($event)\">\n          <ion-select-option value=\"DNI\">DNI</ion-select-option>\n          <ion-select-option value=\"CE\">CE</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <div *ngIf=\"form.controls.doc_type.errors?.required && form.controls.doc_type.dirty\">\n        <small class=\"text-danger margin-left-1\">* Este campo es necesario</small>\n      </div>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Numero de documento</ion-label>\n        <ion-input [type]=\"doc_type\" [minlength]=\"doc_number_minlength\" [maxlength]=\"doc_number_maxlength\" placeholder=\"74233889\" clearInput=true formControlName=\"doc_number\"></ion-input>\n      </ion-item>\n\n      <div *ngIf=\"form.controls.doc_number.errors?.required && form.controls.doc_number.dirty\">\n        <small class=\"text-danger margin-left-1\">* Este campo es necesario</small>\n      </div> \n\n      <div *ngIf=\"form.controls.doc_number.errors?.minlength && form.controls.doc_number.dirty\">\n        <small class=\"text-danger margin-left-1\">* Numero de documento invalido, minimo {{ doc_number_minlength }} digitos</small>\n      </div>\n\n      <div *ngIf=\"form.controls.doc_number.errors?.number && form.controls.doc_number.dirty\">\n        <small class=\"text-danger margin-left-1\">* Numero de documento invalido, use solo numeros</small>\n      </div>\n    </ion-list>\n  </ion-card>\n\n  <ion-card class=\"border-6 card-white\">\n    <ion-card-header class=\"padding-bottom-0\">\n      <ion-card-subtitle>Datos profesionales</ion-card-subtitle>\n    </ion-card-header>\n\n    <ion-list>\n      <ion-item>\n        <ion-label position=\"stacked\">Direccion</ion-label>\n        <ion-input type=\"text\" placeholder=\"Avenida los Incas, Cusco\" clearInput=true formControlName=\"address\"></ion-input>\n      </ion-item> \n\n      <div *ngIf=\"form.controls.address.errors?.required && form.controls.address.dirty\">\n        <small class=\"text-danger margin-left-1\">* Este campo es necesario</small>\n      </div>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Fecha de nacimiento</ion-label>\n        <ion-datetime placeholder=\"Seleccione una fecha\" displayFormat=\"DD MMMM YYYY\" picker-format=\"DD MMMM YYYY\"\n          cancelText=\"Cancelar\" doneText=\"Seleccionar\"\n          monthNames=\"enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre\"\n          formControlName=\"birth_date\"></ion-datetime>\n      </ion-item>\n\n      <div *ngIf=\"form.controls.birth_date.errors?.required && form.controls.birth_date.dirty\">\n        <small class=\"text-danger margin-left-1\">* Este campo es necesario</small>\n      </div>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Genero</ion-label>\n        <ion-select placeholder=\"Seleccione uno\" interface=\"popover\" formControlName=\"gender\">\n          <ion-select-option value=\"male\">Masculino</ion-select-option>\n          <ion-select-option value=\"female\">Femenino</ion-select-option>\n          <ion-select-option value=\"na\">Prefiero no decirlo</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <div *ngIf=\"form.controls.gender.errors?.required && form.controls.gender.dirty\">\n        <small class=\"text-danger margin-left-1\">* Este campo es necesario</small>\n      </div>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Descripcion <small> ({{ 300 - form.controls.profile_description.value.length }})</small></ion-label>\n        <ion-textarea maxlength=\"300\" rows=\"4\" placeholder=\"Soy un profesional ...\" formControlName=\"profile_description\"></ion-textarea>\n      </ion-item>\n\n      <div *ngIf=\"form.controls.profile_description.errors?.required && form.controls.profile_description.dirty\">\n        <small class=\"text-danger margin-left-1\">* Este campo es necesario</small>\n      </div>\n    </ion-list>\n  </ion-card>\n\n  <div text-center margin>\n    <ion-button color=\"dark\" fill=\"outline\" shape=\"round\" (click)=\"onSubmit ()\" [disabled]=\"!form.valid\">\n      Seguir\n    </ion-button>\n  </div>\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/soypro-data-required/soypro-data-required.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/soypro-data-required/soypro-data-required.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-white {\n  --background: #fff; }\n\n.image-avatar {\n  height: 96px;\n  width: 96px;\n  border: 2px solid #ffffffb3;\n  border-radius: 50%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); }\n\n.avatar-container {\n  position: relative; }\n\n.padding-bottom-0 {\n  padding-bottom: 0px; }\n\n.overlay-button {\n  position: absolute;\n  margin-left: 62px;\n  margin-top: 75px;\n  font-size: 12px;\n  --border-radius: 12px; }\n\n.no-padding-left {\n  padding-left: 0px; }\n\n.margin-left-1rem {\n  margin-left: 1rem; }\n\n.padding-left-1rem {\n  padding-left: 1rem; }\n\n.border-bottom {\n  border-bottom: 1px solid #D1D1D1; }\n\n.margin-left-12 {\n  margin-left: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsYWluL1B1bnRvUHJvL1B1bnRvUHJvLUlvbmljNC9zcmMvYXBwL3BhZ2VzL3NveXByby1kYXRhLXJlcXVpcmVkL3NveXByby1kYXRhLXJlcXVpcmVkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFhLEVBQUE7O0FBR2Y7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsMENBQXVDLEVBQUE7O0FBR3pDO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHFCQUFnQixFQUFBOztBQUdsQjtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGdDQUFnQyxFQUFBOztBQUdsQztFQUNFLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc295cHJvLWRhdGEtcmVxdWlyZWQvc295cHJvLWRhdGEtcmVxdWlyZWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtd2hpdGUge1xuICAtLWJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5pbWFnZS1hdmF0YXIge1xuICBoZWlnaHQ6IDk2cHg7XG4gIHdpZHRoOiA5NnB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmYjM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpO1xufVxuXG4uYXZhdGFyLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnBhZGRpbmctYm90dG9tLTAge1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG4ub3ZlcmxheS1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiA2MnB4O1xuICBtYXJnaW4tdG9wOiA3NXB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcbn1cblxuLm5vLXBhZGRpbmctbGVmdCB7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xufVxuXG4ubWFyZ2luLWxlZnQtMXJlbSB7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG4ucGFkZGluZy1sZWZ0LTFyZW0ge1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG59XG5cbi5ib3JkZXItYm90dG9tIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEMUQxRDE7XG59XG5cbi5tYXJnaW4tbGVmdC0xMiB7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/soypro-data-required/soypro-data-required.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/soypro-data-required/soypro-data-required.page.ts ***!
  \*************************************************************************/
/*! exports provided: SoyproDataRequiredPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoyproDataRequiredPage", function() { return SoyproDataRequiredPage; });
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




var SoyproDataRequiredPage = /** @class */ (function () {
    function SoyproDataRequiredPage(camera, actionSheetController, utils, alertController, loadingController, storage, database, navCtrl, platform) {
        this.camera = camera;
        this.actionSheetController = actionSheetController;
        this.utils = utils;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.storage = storage;
        this.database = database;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.doc_number_minlength = 8;
        this.doc_number_maxlength = 8;
        this.need_photo = false;
        this.doc_type = "number";
    }
    SoyproDataRequiredPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                            avatar: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
                            ruc: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, ng2_validation__WEBPACK_IMPORTED_MODULE_4__["CustomValidators"].number, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(11)]),
                            doc_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('DNI', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
                            doc_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, ng2_validation__WEBPACK_IMPORTED_MODULE_4__["CustomValidators"].number, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8)]),
                            birth_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                            profile_description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(300)])
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
    SoyproDataRequiredPage.prototype.docTypeChange = function (value) {
        if (value === 'DNI') {
            this.form.controls['doc_number'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, ng2_validation__WEBPACK_IMPORTED_MODULE_4__["CustomValidators"].number, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(8)]);
            this.doc_type = "number";
            this.doc_number_minlength = 8;
            this.doc_number_maxlength = 8;
        }
        else {
            this.form.controls['doc_number'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(12)]);
            this.doc_type = "text";
            this.doc_number_minlength = 8;
            this.doc_number_maxlength = 12;
        }
    };
    SoyproDataRequiredPage.prototype.onSubmit = function () {
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
                        this.storage.getObject('phone_number_valid').then(function (response) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var phone_number, user_data, _a, _b, soypro_data;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                                switch (_c.label) {
                                    case 0:
                                        phone_number = JSON.parse(response);
                                        _b = (_a = JSON).parse;
                                        return [4 /*yield*/, this.storage.getObject('user_data')];
                                    case 1:
                                        user_data = _b.apply(_a, [_c.sent()]);
                                        soypro_data = {
                                            id: user_data.id,
                                            avatar: '',
                                            fullname: user_data.first_name + ' ' + user_data.last_name,
                                            profile_description: value.profile_description,
                                            phone_number: phone_number.phoneNumber,
                                            address: value.address,
                                            birth_date: value.birth_date,
                                            gender: value.gender,
                                            level_studies: '',
                                            latitude: 0,
                                            longitude: 0,
                                            doc_type: value.doc_type,
                                            doc_number: value.doc_number,
                                            ruc: value.ruc,
                                            join_date: new Date().toISOString(),
                                            current_plan: '',
                                            plan_detail: '',
                                            plan_join_date: '',
                                            plan_until: '',
                                            is_verified: false,
                                            is_available: false,
                                            verified_date: '',
                                            services_number: 0
                                        };
                                        this.storage.setObject("soypro_data", soypro_data);
                                        this.storage.setValue("soypro_avatar", value.avatar);
                                        this.navCtrl.navigateForward('soypro-select-category');
                                        loading.dismiss();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    SoyproDataRequiredPage.prototype.selectImageSource = function () {
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
    SoyproDataRequiredPage.prototype.takePicture = function (sourceType) {
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
    SoyproDataRequiredPage.prototype.checkFace = function (imageData, type, loading) {
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
    SoyproDataRequiredPage.prototype.getBase64ImageFromURL = function (url) {
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
    SoyproDataRequiredPage.prototype.getBase64Image = function (img) {
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
    SoyproDataRequiredPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-soypro-data-required',
            template: __webpack_require__(/*! ./soypro-data-required.page.html */ "./src/app/pages/soypro-data-required/soypro-data-required.page.html"),
            styles: [__webpack_require__(/*! ./soypro-data-required.page.scss */ "./src/app/pages/soypro-data-required/soypro-data-required.page.scss")]
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
    ], SoyproDataRequiredPage);
    return SoyproDataRequiredPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-soypro-data-required-soypro-data-required-module.js.map