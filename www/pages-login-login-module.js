(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding>\n  <div text-right>\n    <ion-icon class=\"help-icon\" slot=\"icon-only\" name=\"help\"></ion-icon>\n  </div>\n  <form [formGroup]=\"form\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size-xs=\"12\" size-sm=\"8\" offset-sm=\"2\"  size-md=\"6\" offset-md=\"3\" size-lg=\"4\" offset-lg=\"4\" size-xl=\"4\" offset-xl=\"4\">\n          <div padding text-center class=\"transparent\" [ngStyle]=\"{ 'margin-top': css_margin_top }\">\n            <img class=\"logo-size\" src=\"assets/img/image-login.png\">\n            <p class=\"sub-title-color\"><i>Los mejores profesionales para ti</i></p>\n          </div>\n\n          <ion-item lines=\"none\" class=\"entry margin-bottom\">\n            <ion-icon slot=\"start\" name=\"mail\"></ion-icon>\n            <ion-input formControlName=\"email\" type=\"email\" placeholder=\"Correo electronico\" required=true></ion-input>\n          </ion-item>    \n          <ion-item lines=\"none\" class=\"entry\">\n            <ion-icon slot=\"start\" name=\"lock\"></ion-icon>\n            <ion-input formControlName=\"password\" type=\"password\" placeholder=\"*********\" required=true></ion-input>\n          </ion-item>\n\n          <div text-center>\n            <p class=\"text-white margin-right-1\">\n              <small>\n              ¿Olvidaste tu contraseña?\n              <b (click)=\"resetPassword ()\">Recueralo aqui ></b>\n              </small>\n            </p>\n          </div>\n\n          <ion-row mode=\"md\">\n            <ion-col size=\"8\">\n              <ion-button mode=\"md\" color=\"violet\" expand=\"block\" [disabled]=\"!form.valid\" (click)=\"onSubmit ()\">\n                CONECTAR \n              </ion-button>\n            </ion-col>\n\n            <ion-col size=\"2\">\n              <ion-button class=\"icon-size\" mode=\"md\" color=\"violet\" expand=\"block\" (click)=\"facebook ()\">\n                <ion-icon mode=\"md\" slot=\"icon-only\" name=\"logo-facebook\"></ion-icon>\n              </ion-button>\n            </ion-col>\n\n            <ion-col size=\"2\">\n              <ion-button class=\"icon-size\" mode=\"md\" color=\"violet\" expand=\"block\" (click)=\"google ()\">\n                <ion-icon mode=\"md\" slot=\"icon-only\" name=\"logo-google\"></ion-icon>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n\n          <div text-center>\n            <p class=\"text-white margin-right-1\" (click)=\"signUp ()\">\n              <small>\n              ¿No tienes una cuenta? <b>Registrate ahora</b>\n              </small>\n            </p>\n          </div>\n\n          <div text-center>\n            <p class=\"text-white\">\n              <small>¿Por que tengo que registrarme?</small>\n            </p>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n    \n  <!--div padding text-center style=\"background-color: transparent;\">\n    <img class=\"logo-size\" src=\"assets/img/PuntoPro.png\">\n  </div>\n\n  \n\n  <div text-right>\n    <p class=\"text-white margin-right-1\" (click)=\"resetPassword ()\">Olvidaste tu contraseña?</p>\n  </div>\n\n  <div text-center>\n    <ion-button color=\"light\" fill=\"outline\" shape=\"round\" [disabled]=\"!form.valid\" (click)=\"onSubmit ()\">\n      Conectar\n    </ion-button>\n  </div>\n\n  <div text-center>\n    <p class=\"text-white\">O continua con:</p>\n  </div>\n\n  <div text-center>\n    <ion-icon class=\"social-icon\" color=\"light\" name=\"logo-facebook\" (click)=\"facebook ()\"></ion-icon>\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n    <ion-icon class=\"social-icon\" color=\"light\" name=\"logo-google\" (click)=\"google ()\"></ion-icon>\n  </div>\n\n  <div text-center>\n    <p class=\"text-white\">¿Nuevo usuario? <b (click)=\"signUp ()\">Registrate</b></p> \n  </div>\n\n  <div text-center>\n    <p class=\"text-white\" outline clear (click)=\"anonymousLogin ()\">Ingresa como <b>Anonimo</b></p>\n  </div-->\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo-size {\n  width: 7rem; }\n\nion-content {\n  --background: none;\n  background-image: url(\"/assets/img/background-login.jpg\");\n  background-position: center top;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n.margin-right-1 {\n  margin-right: 1rem; }\n\n.social-icon {\n  font-size: 3rem; }\n\n.entry {\n  --border-radius: 4px;\n  --background: #393B47;\n  --color: #fff;\n  margin-left: 0.4rem;\n  margin-right: 0.4rem; }\n\n.entry ion-icon {\n  color: #fff; }\n\n.margin-bottom {\n  margin-bottom: 0.5rem; }\n\n.sub-title-color {\n  margin-top: 0px;\n  color: #ffffffab; }\n\n.help-icon {\n  color: #ffffff8a;\n  border: 1px solid #ffffff8a;\n  border-radius: 50%;\n  font-size: 20px; }\n\n.transparent {\n  background-color: transparentM; }\n\n.icon-size {\n  font-size: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsYWluL1B1bnRvUHJvL1B1bnRvUHJvLUlvbmljNC9zcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGtCQUFhO0VBQ2IseURBQXlEO0VBQ3pELCtCQUErQjtFQUMvQiw0QkFBNEI7RUFDNUIsc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNFLG9CQUFnQjtFQUNoQixxQkFBYTtFQUNiLGFBQVE7RUFDUixtQkFBbUI7RUFDbkIsb0JBQW9CLEVBQUE7O0FBR3RCO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0UsZUFBZTtFQUNmLGdCQUFlLEVBQUE7O0FBR2pCO0VBQ0UsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQUdqQjtFQUNFLDhCQUNGLEVBQUE7O0FBRUE7RUFDRSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nby1zaXplIHtcbiAgd2lkdGg6IDdyZW07XG59XG5cbmlvbi1jb250ZW50e1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWcvYmFja2dyb3VuZC1sb2dpbi5qcGcnKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLm1hcmdpbi1yaWdodC0xIHtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuXG4uc29jaWFsLWljb24ge1xuICBmb250LXNpemU6IDNyZW07XG59XG5cbi5lbnRyeSB7XG4gIC0tYm9yZGVyLXJhZGl1czogNHB4O1xuICAtLWJhY2tncm91bmQ6ICMzOTNCNDc7XG4gIC0tY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1sZWZ0OiAwLjRyZW07XG4gIG1hcmdpbi1yaWdodDogMC40cmVtO1xufVxuXG4uZW50cnkgaW9uLWljb24ge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm1hcmdpbi1ib3R0b20ge1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG5cbi5zdWItdGl0bGUtY29sb3Ige1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGNvbG9yOiNmZmZmZmZhYjtcbn1cblxuLmhlbHAtaWNvbiB7XG4gIGNvbG9yOiAjZmZmZmZmOGE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY4YTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi50cmFuc3BhcmVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50TVxufVxuXG4uaWNvbi1zaXplIHtcbiAgZm9udC1zaXplOiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");


// Ionic

// Services 

// Forms

var LoginPage = /** @class */ (function () {
    function LoginPage(loadingController, alertController, toastController, navCtrl, auth, platform, menu) {
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.toastController = toastController;
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.platform = platform;
        this.menu = menu;
        this.css_margin_top = "50%";
    }
    LoginPage.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        });
        this.menu.enable(false);
        if (this.platform.height() <= 568) {
            this.css_margin_top = "0%";
        }
        else {
            this.css_margin_top = "50%";
        }
    };
    LoginPage.prototype.onSubmit = function () {
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
                        this.auth.signInWithEmailAndPassword(value.email, value.password).then(function (response) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var toast;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, loading.dismiss()];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, this.toastController.create({
                                                message: 'Bienvenido a PuntoPro',
                                                duration: 2000,
                                                position: 'top'
                                            })];
                                    case 2:
                                        toast = _a.sent();
                                        toast.present();
                                        this.navCtrl.navigateRoot('home');
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
                                        console.log(error);
                                        message = "";
                                        if (error.code == 'auth/network-request-failed') {
                                            message = 'No tienes acceso a internet, no se puede proceder.';
                                        }
                                        else if (error.code == 'auth/user-not-found') {
                                            message = 'No encontramos a nigun usuario con ese correo';
                                        }
                                        else if (error.code == 'auth/wrong-password') {
                                            message = 'Ingrese una contraseña valida';
                                        }
                                        else if (error.code == 'auth/too-many-requests') {
                                            message = 'Hemos bloqueado todas las solicitudes de este dispositivo debido a una actividad inusual. Inténtalo más tarde.';
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
    LoginPage.prototype.google = function () {
        this.auth.googleLogin();
    };
    LoginPage.prototype.facebook = function () {
        this.auth.facebookLogin();
    };
    LoginPage.prototype.signUp = function () {
        this.navCtrl.navigateForward('sign-up');
    };
    LoginPage.prototype.resetPassword = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: '¿Olvidaste tu contraseña?',
                            message: 'Ingresa tu correo electronico y te enviaremos un correo indicandote los pasos para poder recuperarla.',
                            inputs: [
                                {
                                    name: 'email',
                                    placeholder: 'Correo electronico',
                                    type: 'email'
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    role: 'cancel'
                                }, {
                                    text: 'Enviar',
                                    handler: function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
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
                                                    this.auth.sendPasswordResetEmail(data.email)
                                                        .then(function (response) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                        var alert;
                                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                            switch (_a.label) {
                                                                case 0: return [4 /*yield*/, loading.dismiss()];
                                                                case 1:
                                                                    _a.sent();
                                                                    return [4 /*yield*/, this.alertController.create({
                                                                            header: 'Usuario encontrado',
                                                                            message: 'Acabamos de enviar un email a <strong>' + data.email + '</strong>, incluyendo los pasos para resetear la contraseña',
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
        });
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/pages/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map