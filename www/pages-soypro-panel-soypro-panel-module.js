(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-soypro-panel-soypro-panel-module"],{

/***/ "./src/app/pages/soypro-panel/soypro-panel.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/soypro-panel/soypro-panel.module.ts ***!
  \***********************************************************/
/*! exports provided: SoyproPanelPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoyproPanelPageModule", function() { return SoyproPanelPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _soypro_panel_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./soypro-panel.page */ "./src/app/pages/soypro-panel/soypro-panel.page.ts");







var routes = [
    {
        path: '',
        component: _soypro_panel_page__WEBPACK_IMPORTED_MODULE_6__["SoyproPanelPage"]
    }
];
var SoyproPanelPageModule = /** @class */ (function () {
    function SoyproPanelPageModule() {
    }
    SoyproPanelPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_soypro_panel_page__WEBPACK_IMPORTED_MODULE_6__["SoyproPanelPage"]]
        })
    ], SoyproPanelPageModule);
    return SoyproPanelPageModule;
}());



/***/ }),

/***/ "./src/app/pages/soypro-panel/soypro-panel.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/soypro-panel/soypro-panel.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"secondary\"></ion-menu-button>\n    </ion-buttons>\n\n    <ion-title>\n      <img class=\"wordmark-size\" src=\"/assets/img/PuntoPro-wordmark.png\">\n    </ion-title>\n    \n    <ion-buttons slot=\"end\" (click)=\"goUsuarioPage ()\">\n      <ion-button class=\"no-transform\" color=\"violet\">\n        Usuario >\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-item text-center lines=\"none\">\n          <ion-label text-wrap>\n            <ion-text>\n              <h1 class=\"font-bold\">{{ pro_data?.fullname }}</h1>\n            </ion-text>\n            <p>¿En qué te podemos ayudar hoy?</p>\n          </ion-label>\n        </ion-item>\n      </ion-col>\n\n      <ion-col size=\"12\">\n        <ion-card mode=\"ios\" class=\"inbox-card\" (click)=\"goMessage ()\">\n          <ion-item lines=\"none\">\n            <ion-label text-wrap>\n              <ion-text>\n                <h2 class=\"font-bold\">Inbox</h2>\n              </ion-text>\n              <p>¿En qué te podemos ayudar hoy?</p>\n            </ion-label>\n            \n            <ion-button slot=\"end\" fill=\"clear\" color=\"dark\">\n              <ion-icon slot=\"icon-only\" name=\"notifications\"></ion-icon>\n            </ion-button>\n          </ion-item>\n        </ion-card>\n      </ion-col>\n\n      <ion-col size=\"5\"> \n        <ion-card mode=\"ios\" class=\"middle-card-left\">\n          <ion-item lines=\"none\">\n            Administrar Servicios\n          </ion-item>\n        </ion-card>\n      </ion-col>\n\n      <ion-col size=\"7\">\n        <ion-card mode=\"ios\" class=\"middle-card-right\" (click)=\"goRequestList ()\">\n          <ion-item lines=\"none\">\n            Solicitudes abiertas\n          </ion-item>\n        </ion-card>\n      </ion-col>\n\n      <ion-col size=\"12\">\n        <ion-card class=\"history-card\" mode=\"ios\">\n          <ion-item lines=\"none\">\n            <ion-label text-wrap>\n              <ion-text>\n                <h2 class=\"font-bold\">Historial de trabajos</h2>\n              </ion-text>\n              <p>Ver historial</p>\n              <p class=\"text-blue\" text-right>Ultimos 7 dias</p>\n            </ion-label>\n          </ion-item>\n        </ion-card>\n      </ion-col>\n\n      <ion-col size=\"12\">\n        <ion-row>\n          <ion-col size=\"3\">\n            <img class=\"avatar avatar-card\" [src]=\"pro_data?.avatar\"/>\n          </ion-col>\n\n          <ion-col size=\"9\">\n            <ion-card mode=\"ios\" class=\"profile-card\" (click)=\"goUpdateData ()\">\n              <ion-item lines=\"none\">\n                <ion-label>\n                  <h2 class=\"font-bold\">Ver / editar perfil pro</h2>\n                </ion-label>\n              </ion-item>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/soypro-panel/soypro-panel.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/soypro-panel/soypro-panel.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wordmark-size {\n  width: 96px;\n  margin-top: 6px; }\n\n.inbox-card {\n  margin-left: 1rem;\n  margin-right: 1rem;\n  margin-top: 1rem;\n  margin-bottom: 0px; }\n\n.history-card {\n  margin-left: 1rem;\n  margin-right: 1rem;\n  margin-top: 0px;\n  margin-bottom: 0px; }\n\n.middle-card-left {\n  padding: 1rem 1rem 1rem 0px;\n  margin: 0px 0px 0px 1rem; }\n\n.middle-card-right {\n  margin: 0px 1rem 0px 0px;\n  padding: 1rem 1rem 1rem 0px; }\n\n.font-bold {\n  font-weight: bold; }\n\n.text-blue {\n  color: #6300FF; }\n\n.position-absolute {\n  position: absolute;\n  width: 100%; }\n\n.profile-card {\n  margin: 0px 1rem 0px 0px;\n  padding: 1rem 1rem 1rem 0px; }\n\n.avatar-card {\n  margin-left: 1rem;\n  margin-top: 0.5rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsYWluL1B1bnRvUHJvL1B1bnRvUHJvLUlvbmljNC9zcmMvYXBwL3BhZ2VzL3NveXByby1wYW5lbC9zb3lwcm8tcGFuZWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSwyQkFBMkI7RUFDM0Isd0JBQXdCLEVBQUE7O0FBRzVCO0VBQ0ksd0JBQXdCO0VBQ3hCLDJCQUEyQixFQUFBOztBQUcvQjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVyxFQUFBOztBQUdmO0VBQ0ksd0JBQXdCO0VBQ3hCLDJCQUEyQixFQUFBOztBQUcvQjtFQUNJLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NveXByby1wYW5lbC9zb3lwcm8tcGFuZWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndvcmRtYXJrLXNpemUge1xuICAgIHdpZHRoOiA5NnB4O1xuICAgIG1hcmdpbi10b3A6IDZweDtcbn1cblxuLmluYm94LWNhcmQge1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLmhpc3RvcnktY2FyZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5taWRkbGUtY2FyZC1sZWZ0IHtcbiAgICBwYWRkaW5nOiAxcmVtIDFyZW0gMXJlbSAwcHg7XG4gICAgbWFyZ2luOiAwcHggMHB4IDBweCAxcmVtO1xufVxuXG4ubWlkZGxlLWNhcmQtcmlnaHQge1xuICAgIG1hcmdpbjogMHB4IDFyZW0gMHB4IDBweDtcbiAgICBwYWRkaW5nOiAxcmVtIDFyZW0gMXJlbSAwcHg7XG59XG5cbi5mb250LWJvbGQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udGV4dC1ibHVlIHtcbiAgICBjb2xvcjogIzYzMDBGRjtcbn1cblxuLnBvc2l0aW9uLWFic29sdXRlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5wcm9maWxlLWNhcmQge1xuICAgIG1hcmdpbjogMHB4IDFyZW0gMHB4IDBweDtcbiAgICBwYWRkaW5nOiAxcmVtIDFyZW0gMXJlbSAwcHg7XG59XG5cbi5hdmF0YXItY2FyZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/soypro-panel/soypro-panel.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/soypro-panel/soypro-panel.page.ts ***!
  \*********************************************************/
/*! exports provided: SoyproPanelPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoyproPanelPage", function() { return SoyproPanelPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");


// Services


// Ionic

var SoyproPanelPage = /** @class */ (function () {
    function SoyproPanelPage(navCtrl, loadingController, database, storage) {
        this.navCtrl = navCtrl;
        this.loadingController = loadingController;
        this.database = database;
        this.storage = storage;
    }
    SoyproPanelPage.prototype.ngOnInit = function () {
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
                        this.storage.getValue('user_uid').then(function (id) {
                            _this.database.getProById(id).subscribe(function (data) {
                                _this.pro_data = data;
                                loading.dismiss();
                            }, function (error) {
                                loading.dismiss();
                                console.log('Get user data error', error);
                            });
                        })
                            .catch(function (error) {
                            loading.dismiss();
                            console.log('Get user_uid error', error);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    SoyproPanelPage.prototype.goUpdateData = function () {
        this.navCtrl.navigateForward('soypro-update-data');
    };
    SoyproPanelPage.prototype.goUsuarioPage = function () {
        this.navCtrl.navigateRoot('home');
    };
    SoyproPanelPage.prototype.goMessage = function () {
        this.navCtrl.navigateForward('messages/pro');
    };
    SoyproPanelPage.prototype.goRequestList = function () {
        this.navCtrl.navigateForward('soypro-request-list');
    };
    SoyproPanelPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-soypro-panel',
            template: __webpack_require__(/*! ./soypro-panel.page.html */ "./src/app/pages/soypro-panel/soypro-panel.page.html"),
            styles: [__webpack_require__(/*! ./soypro-panel.page.scss */ "./src/app/pages/soypro-panel/soypro-panel.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"],
            _services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]])
    ], SoyproPanelPage);
    return SoyproPanelPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-soypro-panel-soypro-panel-module.js.map