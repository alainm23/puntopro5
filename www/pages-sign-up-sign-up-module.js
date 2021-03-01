(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sign-up-sign-up-module"],{

/***/ "./src/app/pages/sign-up/sign-up.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/sign-up/sign-up.module.ts ***!
  \*************************************************/
/*! exports provided: SignUpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPageModule", function() { return SignUpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sign_up_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-up.page */ "./src/app/pages/sign-up/sign-up.page.ts");







var routes = [
    {
        path: '',
        component: _sign_up_page__WEBPACK_IMPORTED_MODULE_6__["SignUpPage"]
    }
];
var SignUpPageModule = /** @class */ (function () {
    function SignUpPageModule() {
    }
    SignUpPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_sign_up_page__WEBPACK_IMPORTED_MODULE_6__["SignUpPage"]]
        })
    ], SignUpPageModule);
    return SignUpPageModule;
}());



/***/ }),

/***/ "./src/app/pages/sign-up/sign-up.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/sign-up/sign-up.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar mode=\"ios\" no-border>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"ios-arrow-back\" color=\"dark\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding-left padding-right>\n  <div padding text-center>\n    <img class=\"logo-size\" src=\"assets/img/image-login.png\">\n  </div>\n\n  <div text-center>\n    <p class=\"text-white\"><i>Formulario de registro</i></p>\n  </div>\n\n  <form [formGroup]=\"form\">\n    <ion-item margin-top lines=\"none\" class=\"entry\">\n      <ion-icon slot=\"start\" name=\"person\"></ion-icon>\n      <ion-input formControlName=\"first_name\" type=\"text\" placeholder=\"Nombre completo\" clearInput=true></ion-input>\n    </ion-item> \n\n    <div *ngIf=\"form.controls.first_name.errors?.required && form.controls.first_name.dirty\">\n      <small class=\"text-white margin-left-1\">* Este campo es necesario</small>\n    </div>\n\n    <ion-item margin-top lines=\"none\" class=\"entry\">\n      <ion-icon slot=\"start\" name=\"person\"></ion-icon>\n      <ion-input formControlName=\"last_name\" type=\"text\" placeholder=\"Apellidos\" clearInput=true></ion-input>\n    </ion-item> \n\n    <div *ngIf=\"form.controls.last_name.errors?.required && form.controls.last_name.dirty\">\n      <small class=\"text-white margin-left-1\">* Este campo es necesario</small>\n    </div>\n\n    <ion-item margin-top lines=\"none\" class=\"entry\">\n      <ion-icon slot=\"start\" name=\"mail\"></ion-icon>\n      <ion-input formControlName=\"email\" type=\"text\" placeholder=\"Correo electrónico\" clearInput=true></ion-input>\n    </ion-item> \n\n    <div *ngIf=\"form.controls.email.errors?.required && form.controls.email.dirty\">\n      <small class=\"text-white margin-left-1\">* Este campo es necesario</small>\n    </div>\n\n    <ion-item margin-top lines=\"none\" class=\"entry\">\n      <ion-icon slot=\"start\" name=\"mail\"></ion-icon>\n      <ion-input formControlName=\"confirmar_email\" type=\"text\" placeholder=\"Correo electrónico\" clearInput=true></ion-input>\n    </ion-item>\n    \n    <div *ngIf=\"form.controls.confirmar_email.errors?.required && form.controls.confirmar_email.dirty\">\n      <small class=\"text-white margin-left-1\">* Este campo es necesario</small>\n    </div>\n\n    <div *ngIf=\"form.controls.confirmar_email.errors?.equalTo && form.controls.confirmar_email.dirty\">\n      <small class=\"text-white margin-left-1\">* Los correos electronicos no coinciden</small>\n    </div>\n\n    <ion-item margin-top lines=\"none\" class=\"entry\">\n      <ion-icon slot=\"start\" name=\"lock\"></ion-icon>\n      <ion-input formControlName=\"password\" type=\"password\" placeholder=\"********\" clearInput=true></ion-input>\n    </ion-item>\n\n    <div *ngIf=\"form.controls.password.errors?.required && form.controls.password.dirty\">\n      <small class=\"text-white margin-left-1\">* Este campo es necesario</small>\n    </div>\n\n    <ion-item margin-top lines=\"none\" class=\"entry\">\n      <ion-icon slot=\"start\" name=\"lock\"></ion-icon>\n      <ion-input formControlName=\"confirmar_password\" type=\"password\" placeholder=\"********\" clearInput=true></ion-input>\n    </ion-item>\n\n    <div *ngIf=\"form.controls.confirmar_password.errors?.required && form.controls.confirmar_password.dirty\">\n      <small class=\"text-white margin-left-1\">* Este campo es necesario</small>\n    </div>\n\n    <div *ngIf=\"form.controls.confirmar_password.errors?.equalTo && form.controls.confirmar_password.dirty\">\n      <small class=\"text-white margin-left-1\">* Las contraseñas no coinciden</small>\n    </div>\n\n    <ion-row class=\"action-css\">\n      <ion-col size=\"8\">\n        <ion-button color=\"violet\" expand=\"block\" [disabled]=\"!form.valid\" (click)=\"onSubmit ()\">\n          CONECTAR\n        </ion-button>\n      </ion-col>\n\n      <ion-col size=\"2\">\n        <ion-button color=\"violet\" expand=\"block\" (click)=\"facebook ()\">\n          <ion-icon slot=\"icon-only\" name=\"logo-facebook\"></ion-icon>\n        </ion-button>\n      </ion-col>\n\n      <ion-col size=\"2\">\n        <ion-button color=\"violet\" expand=\"block\" (click)=\"google ()\">\n          <ion-icon slot=\"icon-only\" name=\"logo-google\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/sign-up/sign-up.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/sign-up/sign-up.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo-size {\n  width: 7rem; }\n\nion-content {\n  --background: none;\n  background-image: url(\"/assets/img/background-login.jpg\");\n  background-position: center top;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n.entry ion-icon {\n  color: #fff; }\n\n.entry {\n  --border-radius: 4px;\n  --background: #00000057;\n  --color: #fff;\n  margin-left: 1rem;\n  margin-right: 1rem; }\n\n.action-css {\n  padding: 0.6rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsYWluL1B1bnRvUHJvL1B1bnRvUHJvLUlvbmljNC9zcmMvYXBwL3BhZ2VzL3NpZ24tdXAvc2lnbi11cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSxrQkFBYTtFQUNiLHlEQUF5RDtFQUN6RCwrQkFBK0I7RUFDL0IsNEJBQTRCO0VBQzVCLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLG9CQUFnQjtFQUNoQix1QkFBYTtFQUNiLGFBQVE7RUFDUixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2lnbi11cC9zaWduLXVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvLXNpemUge1xuICB3aWR0aDogN3JlbTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWcvYmFja2dyb3VuZC1sb2dpbi5qcGcnKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmVudHJ5IGlvbi1pY29uIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5lbnRyeSB7XG4gIC0tYm9yZGVyLXJhZGl1czogNHB4O1xuICAtLWJhY2tncm91bmQ6ICMwMDAwMDA1NztcbiAgLS1jb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cblxuLmFjdGlvbi1jc3Mge1xuICBwYWRkaW5nOiAwLjZyZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/sign-up/sign-up.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/sign-up/sign-up.page.ts ***!
  \***********************************************/
/*! exports provided: SignUpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPage", function() { return SignUpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_6__);


// Ionic

// Services


// Forms


var SignUpPage = /** @class */ (function () {
    function SignUpPage(loadingController, alertController, toastController, database, auth, navCtrl) {
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.toastController = toastController;
        this.database = database;
        this.auth = auth;
        this.navCtrl = navCtrl;
    }
    SignUpPage.prototype.ngOnInit = function () {
        var email = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]);
        var confirm_email = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email, ng2_validation__WEBPACK_IMPORTED_MODULE_6__["CustomValidators"].equalTo(email)]);
        var password = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required);
        var confirm_password = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, ng2_validation__WEBPACK_IMPORTED_MODULE_6__["CustomValidators"].equalTo(password)]);
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            email: email,
            confirmar_email: confirm_email,
            password: password,
            confirmar_password: confirm_password
        });
    };
    SignUpPage.prototype.onSubmit = function () {
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
                        this.auth.createUserWithEmailAndPassword(value.email, value.password)
                            .then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var new_user;
                            var _this = this;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        new_user = {
                                            id: res.user.uid,
                                            email: res.user.email,
                                            join_date: new Date().toISOString(),
                                            first_name: value.first_name,
                                            last_name: value.last_name,
                                            phone_number: '',
                                            avatar: '',
                                            is_pro: false,
                                            actual_state: 'activo',
                                            detail_state: ''
                                        };
                                        return [4 /*yield*/, this.database.addUser(new_user).then(function (response) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                var toast;
                                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0:
                                                            loading.dismiss();
                                                            return [4 /*yield*/, this.toastController.create({
                                                                    message: 'Bienvenido a PuntoPro',
                                                                    duration: 2000,
                                                                    position: 'top'
                                                                })];
                                                        case 1:
                                                            toast = _a.sent();
                                                            toast.present();
                                                            this.navCtrl.navigateRoot('home');
                                                            return [2 /*return*/];
                                                    }
                                                });
                                            }); }, function (error) {
                                                loading.dismiss();
                                                console.log('Add user error, ', error);
                                            })];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); }, function (error) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var message, alert;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        loading.dismiss();
                                        if (error.code == "auth/email-already-in-use") {
                                            message = "Esta dirección de correo electrónico ya está siendo utilizada por otra persona.";
                                        }
                                        else if (error.code == "auth/network-request-failed") {
                                            message = "No tienes acceso a internet, no se puede proceder.";
                                        }
                                        else {
                                            message = error.message;
                                        }
                                        return [4 /*yield*/, this.alertController.create({
                                                header: 'Opppps!',
                                                message: message,
                                                buttons: ['OK']
                                            })];
                                    case 1:
                                        alert = _a.sent();
                                        return [4 /*yield*/, alert.present()];
                                    case 2:
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
    SignUpPage.prototype.google = function () {
        this.auth.googleLogin();
    };
    SignUpPage.prototype.facebook = function () {
        this.auth.facebookLogin();
    };
    SignUpPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.page.html */ "./src/app/pages/sign-up/sign-up.page.html"),
            styles: [__webpack_require__(/*! ./sign-up.page.scss */ "./src/app/pages/sign-up/sign-up.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], SignUpPage);
    return SignUpPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-sign-up-sign-up-module.js.map