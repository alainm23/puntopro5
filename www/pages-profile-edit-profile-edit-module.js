(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-edit-profile-edit-module"],{

/***/ "./src/app/pages/profile-edit/profile-edit.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/profile-edit/profile-edit.module.ts ***!
  \***********************************************************/
/*! exports provided: ProfileEditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEditPageModule", function() { return ProfileEditPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-edit.page */ "./src/app/pages/profile-edit/profile-edit.page.ts");







var routes = [
    {
        path: '',
        component: _profile_edit_page__WEBPACK_IMPORTED_MODULE_6__["ProfileEditPage"]
    }
];
var ProfileEditPageModule = /** @class */ (function () {
    function ProfileEditPageModule() {
    }
    ProfileEditPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_profile_edit_page__WEBPACK_IMPORTED_MODULE_6__["ProfileEditPage"]]
        })
    ], ProfileEditPageModule);
    return ProfileEditPageModule;
}());



/***/ }),

/***/ "./src/app/pages/profile-edit/profile-edit.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/profile-edit/profile-edit.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"ios\">\n    <ion-title>Perfil profesional</ion-title>\n    \n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"ios-arrow-back\" color=\"dark\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n  <ion-toolbar mode=\"ios\">\n    <ion-segment mode=\"ios\" (ionChange)=\"segmentChanged($event.detail.value)\" color=\"dark\" [(ngModel)]=\"segment_value\">\n      <ion-segment-button mode=\"ios\" value=\"user\">\n        <ion-label>Perfil</ion-label>\n      </ion-segment-button>\n\n      <ion-segment-button mode=\"ios\" value=\"pro\">\n        <ion-label>Pro</ion-label>\n      </ion-segment-button>\n\n      <ion-segment-button mode=\"ios\" value=\"images\">\n        <ion-label>Galeria</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid *ngIf=\"segment_value === 'user'\">\n    <ion-row>\n      <ion-col>\n        <div margin text-center class=\"avatar-container\">\n          <ion-button size=\"small\" color=\"dark\" class=\"overlay-button\" (click)=\"selectImageSource ('profile')\">\n            <ion-icon slot=\"icon-only\" name=\"md-camera\"></ion-icon>\n          </ion-button>\n          <img (click)=\"selectImageSource ('profile')\" class=\"image-avatar\" [src]=\"avatar\">\n        </div>\n\n        <form [formGroup]=\"user_form\">\n          <ion-card class=\"border-6 card-white\">\n            <ion-card-header class=\"padding-bottom-0\">\n              <ion-card-subtitle>Datos personales</ion-card-subtitle>\n            </ion-card-header>\n\n            <ion-list>\n              <ion-item>\n                <ion-label position=\"stacked\">Nombres</ion-label>\n                <ion-input type=\"text\" placeholder=\"Willian\" clearInput=true formControlName=\"first_name\"></ion-input>\n              </ion-item>\n\n              <div *ngIf=\"user_form.controls.first_name.errors?.required && user_form.controls.first_name.dirty\">\n                <small class=\"text-danger margin-left-1\">* Este campo es necesario</small>\n              </div>\n\n              <ion-item>\n                <ion-label position=\"stacked\">Apellidos</ion-label>\n                <ion-input type=\"text\" placeholder=\"Becerra Saire\" clearInput=true formControlName=\"last_name\"></ion-input>\n              </ion-item>\n\n              <ion-item (click)=\"confirmCangeEmail ()\">\n                <ion-label class=\"opacity-1\" position=\"stacked\">Correo electronico</ion-label>\n                <ion-input type=\"email\" [disabled]=\"true\" clearInput=true formControlName=\"email\"></ion-input>\n              </ion-item>\n\n              <ion-item (click)=\"confirmCangePassword ()\">\n                <ion-label class=\"opacity-1\" position=\"stacked\">Contraseña</ion-label>\n                <ion-input type=\"password\" [disabled]=\"true\" clearInput=true placeholder=\"******\"></ion-input>\n              </ion-item>\n            </ion-list>\n          </ion-card>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div *ngIf=\"segment_value === 'pro'\">\n    <ion-grid *ngIf=\"user_data.is_pro === true\">\n      <ion-row>\n        <ion-col>\n          <form [formGroup]=\"pro_form\">\n            <ion-card class=\"border-6 card-white\">\n              <ion-card-header class=\"padding-bottom-0\">\n                <ion-card-subtitle>Datos profesionales</ion-card-subtitle>\n              </ion-card-header>\n\n              <ion-list>\n                <ion-item>\n                  <ion-label position=\"stacked\">RUC</ion-label>\n                  <ion-input type=\"tel\" placeholder=\"15878545896\" clearInput=true formControlName=\"ruc\" maxlength=\"11\"></ion-input>\n                </ion-item>\n\n                <div *ngIf=\"pro_form.controls.ruc.errors?.required && pro_form.controls.ruc.dirty\">\n                  <small class=\"text-danger margin-left-1\">* Este campo es necesario</small>\n                </div>\n\n                <div *ngIf=\"pro_form.controls.ruc.errors?.number && pro_form.controls.ruc.dirty\">\n                  <small class=\"text-danger margin-left-1\">* Numero de RUC invalido, use solo numeros</small>\n                </div>\n\n                <div *ngIf=\"pro_form.controls.ruc.errors?.minlength && pro_form.controls.ruc.dirty\">\n                  <small class=\"text-danger margin-left-1\">* Numero de RUC invalido, minimo 11 digitos</small>\n                </div>\n\n                <ion-item>\n                  <ion-label position=\"stacked\">Tipo de documento</ion-label>\n                  <ion-select placeholder=\"Seleccione uno\"interface=\"popover\" formControlName=\"doc_type\" (ngModelChange)=\"docTypeChange ($event)\">\n                    <ion-select-option value=\"DNI\">DNI</ion-select-option>\n                    <ion-select-option value=\"CE\">CE</ion-select-option>\n                  </ion-select>\n                </ion-item>\n\n                <div *ngIf=\"pro_form.controls.doc_type.errors?.required && pro_form.controls.doc_type.dirty\">\n                  <small class=\"text-danger margin-left-1\">* Este campo es necesario</small>\n                </div>\n\n                <ion-item>\n                  <ion-label position=\"stacked\">Numero de documento</ion-label>\n                  <ion-input [type]=\"doc_type\" [minlength]=\"doc_number_minlength\" [maxlength]=\"doc_number_maxlength\" placeholder=\"74233889\" clearInput=true formControlName=\"doc_number\"></ion-input>\n                </ion-item>\n\n                <div *ngIf=\"pro_form.controls.doc_number.errors?.required && pro_form.controls.doc_number.dirty\">\n                  <small class=\"text-danger margin-left-1\">* Este campo es necesario</small>\n                </div> \n\n                <div *ngIf=\"pro_form.controls.doc_number.errors?.minlength && pro_form.controls.doc_number.dirty\">\n                  <small class=\"text-danger margin-left-1\">* Numero de documento invalido, minimo {{ doc_number_minlength }} digitos</small>\n                </div>\n\n                <div *ngIf=\"pro_form.controls.doc_number.errors?.number && pro_form.controls.doc_number.dirty\">\n                  <small class=\"text-danger margin-left-1\">* Numero de documento invalido, use solo numeros</small>\n                </div>\n\n                <ion-item>\n                  <ion-label position=\"stacked\">Direccion</ion-label>\n                  <ion-input type=\"text\" placeholder=\"Avenida los Incas, Cusco\" clearInput=true formControlName=\"address\"></ion-input>\n                </ion-item> \n\n                <div *ngIf=\"pro_form.controls.address.errors?.required && pro_form.controls.address.dirty\">\n                  <small class=\"text-danger margin-left-1\">* Este campo es necesario</small>\n                </div>\n\n                <ion-item>\n                  <ion-label position=\"stacked\">Fecha de nacimiento</ion-label>\n                  <ion-datetime placeholder=\"Seleccione una fecha\" displayFormat=\"DD MMMM YYYY\" picker-format=\"DD MMMM YYYY\"\n                    cancelText=\"Cancelar\" doneText=\"Seleccionar\"\n                    monthNames=\"enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre\"\n                    formControlName=\"birth_date\"></ion-datetime>\n                </ion-item>\n\n                <div *ngIf=\"pro_form.controls.birth_date.errors?.required && pro_form.controls.birth_date.dirty\">\n                  <small class=\"text-danger margin-left-1\">* Este campo es necesario</small>\n                </div>\n\n                <ion-item>\n                  <ion-label position=\"stacked\">Genero</ion-label>\n                  <ion-select placeholder=\"Seleccione uno\" interface=\"popover\" formControlName=\"gender\">\n                    <ion-select-option value=\"male\">Masculino</ion-select-option>\n                    <ion-select-option value=\"female\">Femenino</ion-select-option>\n                    <ion-select-option value=\"na\">Prefiero no decirlo</ion-select-option>\n                  </ion-select>\n                </ion-item>\n\n                <div *ngIf=\"pro_form.controls.gender.errors?.required && pro_form.controls.gender.dirty\">\n                  <small class=\"text-danger margin-left-1\">* Este campo es necesario</small>\n                </div>\n\n                <ion-item>\n                  <ion-label position=\"stacked\">Descripcion <small> ({{ 300 - pro_form.controls.profile_description.value.length }})</small></ion-label>\n                  <ion-textarea maxlength=\"300\" rows=\"4\" placeholder=\"Soy un profesional ...\" formControlName=\"profile_description\"></ion-textarea>\n                </ion-item>\n\n                <div *ngIf=\"pro_form.controls.profile_description.errors?.required && pro_form.controls.profile_description.dirty\">\n                  <small class=\"text-danger margin-left-1\">* Este campo es necesario</small>\n                </div>\n              </ion-list>\n            </ion-card>\n          </form>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-grid *ngIf=\"user_data.is_pro === false\">\n      <ion-row>\n        <ion-col>\n          <ion-item lines=\"none\" text-center color=\"green\">\n            <ion-label>\n              <h1>No eres Pro</h1>\n              <p>asccccccccccc</p>\n            </ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <div *ngIf=\"segment_value === 'images'\">\n    <ion-grid *ngIf=\"user_data.is_pro === true\">\n      <ion-row>\n        <ion-col>\n          <ion-card class=\"border-6 card-white\">\n            <ion-list>\n              <div *ngFor=\"let item of services_data\">\n                <ion-item lines=\"none\">\n                  <b>{{ item.data.service_name }}</b>\n                  <ion-button fill=\"clear\" slot=\"end\" color=\"dark\" (click)=\"selectImageSource ('gallery', item.data)\">\n                    <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n                  </ion-button>\n                </ion-item>\n\n                <ion-grid>\n                  <ion-row>\n                    <ion-col size-xs=\"6\" size-sm=\"4\" size-md=\"3\" size-lg=\"3\" size-xl=\"3\" *ngFor=\"let image of item.dataGeneral\">\n                      <img [src]=\"image.image_async | async\" (click)=\"viewImage (item.data, item.dataGeneral, image)\">\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </div>\n            </ion-list>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid *ngIf=\"user_data.is_pro === false\">\n      <ion-row>\n        <ion-col>\n          <ion-item lines=\"none\" text-center color=\"green\">\n            <ion-label>\n              <h1>No eres Pro</h1>\n              <p>asccccccccccc</p>\n            </ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n\n<ion-footer *ngIf=\"segment_value === 'user' || segment_value === 'pro'\">\n  <ion-toolbar mode=\"ios\" color=\"dark\">\n    <ion-row>\n      <ion-col>\n        <ion-button expand=\"block\" fill=\"clear\" (click)=\"previewPro ()\" color=\"light\">\n          Vista previa\n        </ion-button>\n      </ion-col>\n\n      <ion-col expand=\"block\">\n        <ion-button expand=\"block\" (click)=\"onSubmit ()\" [disabled]=\"!main_form.dirty || !main_form.valid\" fill=\"clear\" color=\"light\">\n          Actualizar perfil\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/pages/profile-edit/profile-edit.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/profile-edit/profile-edit.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #26997C; }\n\n.card-white {\n  --background: #fff; }\n\n.image-avatar {\n  height: 96px;\n  width: 96px;\n  border: 2px solid #ffffffb3;\n  border-radius: 50%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); }\n\n.avatar-container {\n  position: relative; }\n\n.padding-bottom-0 {\n  padding-bottom: 0px; }\n\n.overlay-button {\n  position: absolute;\n  margin-left: 62px;\n  margin-top: 75px;\n  font-size: 12px;\n  --border-radius: 12px; }\n\n.opacity-1 {\n  opacity: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsYWluL1B1bnRvUHJvL1B1bnRvUHJvLUlvbmljNC9zcmMvYXBwL3BhZ2VzL3Byb2ZpbGUtZWRpdC9wcm9maWxlLWVkaXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQWEsRUFBQTs7QUFHZjtFQUNFLGtCQUFhLEVBQUE7O0FBR2Y7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsMENBQXVDLEVBQUE7O0FBR3pDO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHFCQUFnQixFQUFBOztBQUdsQjtFQUNFLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUtZWRpdC9wcm9maWxlLWVkaXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gIC0tYmFja2dyb3VuZDogIzI2OTk3Qztcbn1cblxuLmNhcmQtd2hpdGUge1xuICAtLWJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5pbWFnZS1hdmF0YXIge1xuICBoZWlnaHQ6IDk2cHg7XG4gIHdpZHRoOiA5NnB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmYjM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpO1xufVxuXG4uYXZhdGFyLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnBhZGRpbmctYm90dG9tLTAge1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG4ub3ZlcmxheS1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiA2MnB4O1xuICBtYXJnaW4tdG9wOiA3NXB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcbn1cblxuLm9wYWNpdHktMSB7XG4gIG9wYWNpdHk6IDE7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/profile-edit/profile-edit.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/profile-edit/profile-edit.page.ts ***!
  \*********************************************************/
/*! exports provided: ProfileEditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEditPage", function() { return ProfileEditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _animations_enter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../animations/enter */ "./src/app/animations/enter.ts");
/* harmony import */ var _animations_leave__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../animations/leave */ "./src/app/animations/leave.ts");
/* harmony import */ var _modals_profile_profile_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../modals/profile/profile.page */ "./src/app/modals/profile/profile.page.ts");
/* harmony import */ var _modals_galleries_view_galleries_view_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../modals/galleries-view/galleries-view.page */ "./src/app/modals/galleries-view/galleries-view.page.ts");


// Ionic

// Forms


// Services






// Camera

// Animations 


// Modals Pages


var ProfileEditPage = /** @class */ (function () {
    function ProfileEditPage(camera, actionSheetController, utils, auth, af_storage, alertController, loadingController, storage, database, navCtrl, modalCtrl, platform) {
        this.camera = camera;
        this.actionSheetController = actionSheetController;
        this.utils = utils;
        this.auth = auth;
        this.af_storage = af_storage;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.storage = storage;
        this.database = database;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.id_slide_01_loading = false;
        this.is_slide_02_loading = false;
        this.is_slide_03_loading = false;
        this.avatar_change = false;
        this.segment_value = 'user';
        this.doc_type = "number";
        this.doc_number_minlength = 8;
        this.doc_number_maxlength = 8;
    }
    ProfileEditPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.services_images = new Array();
                        this.services_data = new Array();
                        this.user_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
                            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
                            avatar: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
                        });
                        this.pro_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                            ruc: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, ng2_validation__WEBPACK_IMPORTED_MODULE_4__["CustomValidators"].number, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(11)]),
                            doc_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
                            doc_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, ng2_validation__WEBPACK_IMPORTED_MODULE_4__["CustomValidators"].number, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8)]),
                            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
                            birth_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
                            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
                            profile_description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(300)])
                        });
                        this.main_form = this.user_form;
                        return [4 /*yield*/, this.loadingController.create({
                                message: 'Procesando Informacion ...'
                            })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.storage.getValue('user_uid').then(function (id) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var _this = this;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        this.user_id = id;
                                        return [4 /*yield*/, this.database.getUserById(id).subscribe(function (user) {
                                                _this.avatar = user.avatar;
                                                _this.user_data = user;
                                                _this.user_form.patchValue(user);
                                                loading.dismiss();
                                                _this.id_slide_01_loading = true;
                                            }, function (error) {
                                                loading.dismiss();
                                                console.log('Get user data error', error);
                                            })];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); }, function (error) {
                            loading.dismiss();
                            console.log('Get user_uid error', error);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfileEditPage.prototype.confirmCangeEmail = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Albums',
                            buttons: [{
                                    text: 'Cambiar',
                                    role: 'destructive',
                                    handler: function () {
                                        _this.changeEmailAlert();
                                    }
                                }, {
                                    text: 'Cancelar',
                                    handler: function () {
                                        console.log('Share clicked');
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
    ProfileEditPage.prototype.confirmCangePassword = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Albums',
                            buttons: [{
                                    text: 'Cambiar',
                                    role: 'destructive',
                                    handler: function () {
                                        _this.resetPassword(_this.user_data.email);
                                    }
                                }, {
                                    text: 'Cancelar',
                                    handler: function () {
                                        console.log('Share clicked');
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
    ProfileEditPage.prototype.changeEmailAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var value, alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        value = this.user_form.value;
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Cambio de correo',
                                message: 'Ingrese la contraseña de <b>' + value.email + '</b> para proseguir',
                                inputs: [
                                    {
                                        name: 'password',
                                        type: 'password',
                                        placeholder: '******'
                                    }
                                ],
                                buttons: [
                                    {
                                        text: 'Olvide la contraseña',
                                        cssClass: 'danger',
                                        handler: function () {
                                            _this.resetPassword(value.email);
                                        }
                                    },
                                    {
                                        text: 'Ok',
                                        handler: function (response) {
                                            console.log('Confirm Ok', response);
                                            _this.updateEmail(value.email, response.password);
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
    ProfileEditPage.prototype.updateEmail = function (email, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
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
                        this.auth.signInWithEmailAndPassword(email, password)
                            .then(function (credential) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var alert;
                            var _this = this;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        console.log(credential);
                                        // Aqui esta el error coño
                                        loading.dismiss();
                                        return [4 /*yield*/, this.alertController.create({
                                                header: 'Cambiar correo',
                                                message: 'Ingrese su nueva direccion electronica',
                                                inputs: [
                                                    {
                                                        name: 'new_email',
                                                        type: 'email',
                                                        placeholder: 'nuevo@correo.com'
                                                    }
                                                ],
                                                buttons: [
                                                    {
                                                        text: 'Cancelar',
                                                        role: 'cancel'
                                                    },
                                                    {
                                                        text: 'Cambiar',
                                                        handler: function (response) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                            var loading;
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
                                                                        credential.user.updateEmail(response.new_email)
                                                                            .then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                                            var alert;
                                                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                                switch (_a.label) {
                                                                                    case 0: return [4 /*yield*/, loading.dismiss()];
                                                                                    case 1:
                                                                                        _a.sent();
                                                                                        console.log("El usuario fue actualizado");
                                                                                        this.database.updateEmailUser(this.user_id, response.new_email);
                                                                                        return [4 /*yield*/, this.alertController.create({
                                                                                                header: 'Todo correcto',
                                                                                                message: 'Correo electronico actualizado',
                                                                                                buttons: ['OK']
                                                                                            })];
                                                                                    case 2:
                                                                                        alert = _a.sent();
                                                                                        return [4 /*yield*/, alert.present()];
                                                                                    case 3:
                                                                                        _a.sent();
                                                                                        return [2 /*return*/];
                                                                                }
                                                                            });
                                                                        }); })
                                                                            .catch(function (error) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                                            var message, alert;
                                                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                                switch (_a.label) {
                                                                                    case 0: return [4 /*yield*/, loading.dismiss()];
                                                                                    case 1:
                                                                                        _a.sent();
                                                                                        message = "";
                                                                                        if (error.code == 'auth/network-request-failed') {
                                                                                            message = 'No tienes acceso a internet, no se puede proceder.';
                                                                                        }
                                                                                        else if (error.code == 'auth/user-not-found') {
                                                                                            message = 'No encontramos a nigun usuario con ese correo';
                                                                                        }
                                                                                        else {
                                                                                            message = error.message;
                                                                                        }
                                                                                        return [4 /*yield*/, this.alertController.create({
                                                                                                header: 'Opppps!',
                                                                                                message: message,
                                                                                                buttons: ['OK']
                                                                                            })];
                                                                                    case 2:
                                                                                        alert = _a.sent();
                                                                                        return [4 /*yield*/, alert.present()];
                                                                                    case 3:
                                                                                        _a.sent();
                                                                                        return [2 /*return*/];
                                                                                }
                                                                            });
                                                                        }); });
                                                                        return [2 /*return*/];
                                                                }
                                                            });
                                                        }); }
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
                        }); })
                            .catch(function (error) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var message, alert_1, alert_2;
                            var _this = this;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        loading.dismiss();
                                        message = "";
                                        if (error.code == 'auth/network-request-failed') {
                                            message = 'No tienes acceso a internet, no se puede proceder.';
                                        }
                                        else if (error.code == 'auth/user-not-found') {
                                            message = 'No encontramos a nigun usuario con ese correo';
                                        }
                                        else if (error.code == 'auth/wrong-password') {
                                            message = 'La contraseña no es válida o no tiene una contraseña.';
                                        }
                                        else if (error.code == 'auth/too-many-requests') {
                                            message = 'Hemos bloqueado todas las solicitudes de este dispositivo debido a una actividad inusual. Inténtalo más tarde.';
                                        }
                                        else {
                                            message = error.message;
                                        }
                                        if (!(error.code === 'auth/wrong-password')) return [3 /*break*/, 3];
                                        return [4 /*yield*/, this.alertController.create({
                                                header: 'Opppps!',
                                                message: message,
                                                buttons: [
                                                    {
                                                        text: 'Cancel',
                                                        role: 'cancel',
                                                        cssClass: 'secondary',
                                                        handler: function () {
                                                            console.log('Confirm Cancel');
                                                        }
                                                    }, {
                                                        text: 'Restablecer contraseña',
                                                        handler: function () {
                                                            _this.resetPassword(email);
                                                        }
                                                    }
                                                ]
                                            })];
                                    case 1:
                                        alert_1 = _a.sent();
                                        return [4 /*yield*/, alert_1.present()];
                                    case 2:
                                        _a.sent();
                                        return [3 /*break*/, 6];
                                    case 3: return [4 /*yield*/, this.alertController.create({
                                            header: 'Opppps!',
                                            message: message,
                                            buttons: ['OK']
                                        })];
                                    case 4:
                                        alert_2 = _a.sent();
                                        return [4 /*yield*/, alert_2.present()];
                                    case 5:
                                        _a.sent();
                                        _a.label = 6;
                                    case 6: return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfileEditPage.prototype.resetPassword = function (email) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
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
                        this.auth.sendPasswordResetEmail(email)
                            .then(function (response) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var alert;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, loading.dismiss()];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, this.alertController.create({
                                                header: 'Usuario encontrado',
                                                message: 'Acabamos de enviar un email a <strong>' + email + '</strong>, incluyendo los pasos para resetear la contraseña',
                                                buttons: ['OK']
                                            })];
                                    case 2:
                                        alert = _a.sent();
                                        return [4 /*yield*/, alert.present()];
                                    case 3:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); }, function (error) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var message, alert;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, loading.dismiss()];
                                    case 1:
                                        _a.sent();
                                        message = "";
                                        if (error.code == 'auth/network-request-failed') {
                                            message = 'No tienes acceso a internet, no se puede proceder.';
                                        }
                                        else if (error.code == 'auth/user-not-found') {
                                            message = 'No encontramos a nigun usuario con ese correo';
                                        }
                                        else {
                                            message = error.message;
                                        }
                                        return [4 /*yield*/, this.alertController.create({
                                                header: 'Opppps!',
                                                message: message,
                                                buttons: ['OK']
                                            })];
                                    case 2:
                                        alert = _a.sent();
                                        return [4 /*yield*/, alert.present()];
                                    case 3:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfileEditPage.prototype.selectImageSource = function (type, item) {
        if (item === void 0) { item = null; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Seleccione una fuente',
                            buttons: [{
                                    text: 'Tomar una foto',
                                    icon: 'camera',
                                    handler: function () {
                                        _this.takePicture(_this.camera.PictureSourceType.CAMERA, type, item);
                                    }
                                }, {
                                    text: 'Seleccionar una foto',
                                    icon: 'images',
                                    handler: function () {
                                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY, type, item);
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
    ProfileEditPage.prototype.takePicture = function (sourceType, type, item) {
        if (item === void 0) { item = null; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _cameraOptions, options, loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (type === 'profile') {
                            _cameraOptions = {
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
                        }
                        else {
                            _cameraOptions = {
                                quality: 95,
                                sourceType: sourceType,
                                saveToPhotoAlbum: false,
                                correctOrientation: true,
                                destinationType: this.camera.DestinationType.DATA_URL,
                                encodingType: this.camera.EncodingType.JPEG,
                                mediaType: this.camera.MediaType.PICTURE,
                            };
                        }
                        options = _cameraOptions;
                        return [4 /*yield*/, this.loadingController.create({
                                message: 'Procesando Informacion ...'
                            })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.camera.getPicture(options).then(function (imageData) {
                            if (type === 'profile') {
                                if (_this.user_data.is_pro) {
                                    _this.checkFace(imageData, loading);
                                }
                                else {
                                    _this.avatar = 'data:image/jpeg;base64,' + imageData;
                                    _this.avatar_change = true;
                                    loading.dismiss();
                                }
                            }
                            else {
                                console.log('Item', item);
                                var image = 'data:image/jpeg;base64,' + imageData;
                                _this.upload_image_service(_this.user_id, item.id, image, loading);
                            }
                        }, function (err) {
                            loading.dismiss();
                            console.log('Camera error', err);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfileEditPage.prototype.checkFace = function (imageData, loading) {
        var _this = this;
        this.utils.getFaceDetection(imageData).subscribe(function (response) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var result, alert_3;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loading.dismiss();
                        result = response.responses[0];
                        console.log('Face to: ', Object.keys(result).length);
                        if (!(Object.keys(result).length === 0)) return [3 /*break*/, 3];
                        this.user_form.controls['avatar'].setValue(null);
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
                                            _this.selectImageSource('profile');
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alert_3 = _a.sent();
                        return [4 /*yield*/, alert_3.present()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        this.avatar = 'data:image/jpeg;base64,' + imageData;
                        this.avatar_change = true;
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); }, function (error) {
            loading.dismiss();
            console.log('GVC error', error);
        });
    };
    ProfileEditPage.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, value, request, value;
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
                        if (this.segment_value === 'user') {
                            value = this.user_form.value;
                            request = {
                                first_name: value.first_name,
                                last_name: value.last_name,
                                avatar: '',
                            };
                            if (this.avatar_change) {
                                this.upload_avatar(this.user_id, this.avatar, request, loading);
                            }
                            else {
                                request.avatar = value.avatar;
                                this.database.updateUser(this.user_id, request)
                                    .then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                        loading.dismiss();
                                        return [2 /*return*/];
                                    });
                                }); })
                                    .catch(function () {
                                    loading.dismiss();
                                });
                            }
                        }
                        else {
                            value = this.pro_form.value;
                            this.database.updatePro(this.user_id, value)
                                .then(function () {
                                loading.dismiss();
                            })
                                .catch(function () {
                                loading.dismiss();
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfileEditPage.prototype.segmentChanged = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading_1, loading_2;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(event === 'user')) return [3 /*break*/, 1];
                        this.main_form = this.user_form;
                        return [3 /*break*/, 8];
                    case 1:
                        if (!(event === 'pro')) return [3 /*break*/, 5];
                        this.main_form = this.pro_form;
                        if (!(this.user_data.is_pro === true)) return [3 /*break*/, 4];
                        if (!(this.is_slide_02_loading === false)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.loadingController.create({
                                message: 'Procesando Informacion ...'
                            })];
                    case 2:
                        loading_1 = _a.sent();
                        return [4 /*yield*/, loading_1.present()];
                    case 3:
                        _a.sent();
                        this.database.getProById(this.user_id).subscribe(function (pro) {
                            loading_1.dismiss();
                            _this.pro_form.patchValue(pro);
                            _this.docTypeChange(pro.doc_type);
                            _this.is_slide_02_loading = true;
                        }, function (error) {
                            loading_1.dismiss();
                            console.log('Get getProById data error', error);
                        });
                        _a.label = 4;
                    case 4: return [3 /*break*/, 8];
                    case 5:
                        if (!(this.user_data.is_pro === true)) return [3 /*break*/, 8];
                        if (!(this.is_slide_03_loading === false)) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.loadingController.create({
                                message: 'Procesando Informacion ...'
                            })];
                    case 6:
                        loading_2 = _a.sent();
                        return [4 /*yield*/, loading_2.present()];
                    case 7:
                        _a.sent();
                        this.database.getProServicesGalleries(this.user_id).subscribe(function (response) {
                            loading_2.dismiss();
                            _this.services_data = response;
                            console.log('response', response);
                            _this.is_slide_03_loading = true;
                        });
                        _a.label = 8;
                    case 8:
                        console.log(this.main_form);
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfileEditPage.prototype.upload_avatar = function (user_uid, avatar, request, loading) {
        var _this = this;
        // Upload avatar to Storage
        var filePath = user_uid + '/avatar.jpg';
        var storageRef = this.af_storage.ref(filePath);
        var uploadTask = storageRef.putString(avatar, 'data_url');
        uploadTask.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () {
            storageRef.getDownloadURL().subscribe(function (DownloadURL) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var _this = this;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    request.avatar = DownloadURL;
                    this.database.updateUser(this.user_id, request)
                        .then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            loading.dismiss();
                            return [2 /*return*/];
                        });
                    }); })
                        .catch(function () {
                        loading.dismiss();
                    });
                    return [2 /*return*/];
                });
            }); });
        })).subscribe();
    };
    ProfileEditPage.prototype.upload_image_service = function (user_uid, service_id, image, loading) {
        var _this = this;
        var image_id = this.database.createId();
        var filePath = user_uid + '/' + service_id + '/' + image_id + '.jpg';
        var storageRef = this.af_storage.ref(filePath);
        var uploadTask = storageRef.putString(image, 'data_url');
        uploadTask.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.database.addImageGalleryProfile(user_uid, service_id, image, image_id, filePath)
                            .then(function () {
                            loading.dismiss();
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
    ProfileEditPage.prototype.previewPro = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var parms, modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        parms = {
                            profile_id: this.user_id,
                            to_confirm: false
                        };
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _modals_profile_profile_page__WEBPACK_IMPORTED_MODULE_14__["ProfilePage"],
                                componentProps: parms,
                                mode: 'ios',
                                enterAnimation: _animations_enter__WEBPACK_IMPORTED_MODULE_12__["myEnterAnimation"],
                                leaveAnimation: _animations_leave__WEBPACK_IMPORTED_MODULE_13__["myLeaveAnimation"]
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (response) {
                            if (response.role == 'response') {
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProfileEditPage.prototype.docTypeChange = function (value) {
        if (value === 'DNI') {
            this.pro_form.controls['doc_number'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, ng2_validation__WEBPACK_IMPORTED_MODULE_4__["CustomValidators"].number, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(8)]);
            this.doc_type = "number";
            this.doc_number_minlength = 8;
            this.doc_number_maxlength = 8;
        }
        else {
            this.pro_form.controls['doc_number'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(12)]);
            this.doc_type = "text";
            this.doc_number_minlength = 8;
            this.doc_number_maxlength = 12;
        }
    };
    ProfileEditPage.prototype.viewImage = function (service, image_list, image) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var parms, modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        parms = {
                            image_list: image_list,
                            image: image,
                            service: service,
                            type: 'edit',
                            is_async: true,
                        };
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _modals_galleries_view_galleries_view_page__WEBPACK_IMPORTED_MODULE_15__["GalleriesViewPage"],
                                componentProps: parms,
                                mode: 'ios',
                                enterAnimation: _animations_enter__WEBPACK_IMPORTED_MODULE_12__["myEnterAnimation"],
                                leaveAnimation: _animations_leave__WEBPACK_IMPORTED_MODULE_13__["myLeaveAnimation"]
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (response) {
                            if (response.role == 'response') {
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProfileEditPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile-edit',
            template: __webpack_require__(/*! ./profile-edit.page.html */ "./src/app/pages/profile-edit/profile-edit.page.html"),
            styles: [__webpack_require__(/*! ./profile-edit.page.scss */ "./src/app/pages/profile-edit/profile-edit.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_11__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _services_utils_service__WEBPACK_IMPORTED_MODULE_8__["UtilsService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__["AngularFireStorage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"],
            _services_database_service__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
    ], ProfileEditPage);
    return ProfileEditPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-profile-edit-profile-edit-module.js.map