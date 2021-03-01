(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-request-view-request-view-module"],{

/***/ "./src/app/pages/request-view/request-view.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/request-view/request-view.module.ts ***!
  \***********************************************************/
/*! exports provided: RequestViewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestViewPageModule", function() { return RequestViewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _request_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./request-view.page */ "./src/app/pages/request-view/request-view.page.ts");







var routes = [
    {
        path: '',
        component: _request_view_page__WEBPACK_IMPORTED_MODULE_6__["RequestViewPage"]
    }
];
var RequestViewPageModule = /** @class */ (function () {
    function RequestViewPageModule() {
    }
    RequestViewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_request_view_page__WEBPACK_IMPORTED_MODULE_6__["RequestViewPage"]]
        })
    ], RequestViewPageModule);
    return RequestViewPageModule;
}());



/***/ }),

/***/ "./src/app/pages/request-view/request-view.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/request-view/request-view.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header  no-border>\n  <ion-toolbar mode=\"ios\"  no-border>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"ios-arrow-back\" color=\"dark\"></ion-back-button>\n    </ion-buttons>\n    \n    <ion-title>\n      <img class=\"wordmark-size\" src=\"/assets/img/PuntoPro-wordmark.png\">\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-item text-center lines=\"none\">\n            <ion-label>\n              <h2 class=\"font-bold\">Hola {{ request?.client_name }}</h2>\n              <p>Detalle de solicitud</p>\n            </ion-label>\n          </ion-item>\n\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-thumbnail>\n                <img src=\"https://www.nasa.gov/images/content/98619main_0204flare_xray_red_m.jpg\">\n              </ion-thumbnail>\n            </ion-col>\n\n            <ion-col size=\"6\">\n              <p class=\"font-bold p-header\">Profesional a cargo</p>\n              <p text-wrap class=\"p-detail\">{{ request?.client_name }}</p>\n              <p text-wrap class=\"font-bold p-header\">{{ request?.service_name }}</p>\n              <p *ngIf=\"request?.is_emergency === true\" class=\"p-detail\">Emergencia</p>\n              <p *ngIf=\"request?.is_emergency === false\" class=\"p-detail\">Cotizacion</p>\n\n              <p class=\"p-detail\" text-wrap>{{ request?.address_name }}</p>\n            </ion-col>\n\n            <ion-col size=\"12\">\n              <p class=\"p-detail detail\" text-wrap>{{ request?.note }}</p>\n            </ion-col>\n          </ion-row> \n        </ion-col>\n\n        <ion-col size=\"12\">\n          <ion-item text-center lines=\"none\">\n            <ion-label>\n              Postulantes\n            </ion-label>\n          </ion-item>\n\n          <ion-list>\n            <ion-item *ngFor=\"let item of postulants\" (click)=\"goProfile (item)\">\n              <ion-avatar slot=\"start\">\n                <img class=\"avatar-postulante\" [src]=\"item?.pro_avatar\"/>\n              </ion-avatar>\n              \n              <ion-label>\n                <h3>{{ item?.pro_fullname }}</h3>\n                <p>Diseñador web</p>\n              </ion-label>\n\n              <ion-button slot=\"end\" fill=\"clear\" color=\"dark\">\n                <ion-icon name=\"arrow-forward\" slot=\"icon-only\"></ion-icon>\n              </ion-button>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n  <!--ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-card text-wrap>\n          <ion-item>\n            <p>{{ request?.client_name }} necesita {{ request?.service_name }} en {{ request?.address_name }}</p>\n          </ion-item>\n        </ion-card>\n        \n        <ion-list>\n          <ion-list-header>\n            Postulantes\n          </ion-list-header>    \n          <div *ngFor=\"let item of postulants\">\n            <ion-item (click)=\"goProfile (item)\">\n              <ion-avatar slot=\"start\">\n                <img [src]=\"item?.pro_avatar\"/>\n              </ion-avatar>\n              <ion-label>\n                <h2 text-wrap>{{ item?.pro_fullname }}</h2>\n                <p>{{ item?.distance }} Km.</p>\n                <!--h3 text-wrap>\n                  Cobraria entre {{ item?.min_price }} y {{ item?.max_price }} soles <p (click)=\"showMessage (item)\" class=\"more\">ver mas ...</p></h3>\n                <p text-wrap>\n                  {{ item?.message }}\n                </p>\n              </ion-label>\n\n              <ion-button slot=\"end\" fill=\"outline\" color=\"dark\">Ver perfil</ion-button>\n            </ion-item>\n          </div>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid-->\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/request-view/request-view.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/request-view/request-view.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-separator {\n  background-color: #00000047; }\n\n.item-header {\n  margin-left: 1rem;\n  font-weight: bold; }\n\n.more {\n  color: blue; }\n\nion-thumbnail {\n  height: 100%;\n  width: 100%; }\n\n.p-header {\n  opacity: 0.7;\n  margin-top: 0px;\n  margin-bottom: 0px; }\n\n.p-detail {\n  opacity: 0.7;\n  margin-top: 0px; }\n\n.avatar-postulante {\n  border-radius: 50%;\n  transition: all 100ms ease-in;\n  border: 2.6px solid #fff;\n  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.35), inset 0 0 0 2px rgba(255, 255, 255, 0.1), inset 0 2px 0 0 rgba(255, 255, 255, 0.45), inset 0 -2px 0 0 rgba(255, 255, 255, 0.15), 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.24); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsYWluL1B1bnRvUHJvL1B1bnRvUHJvLUlvbmljNC9zcmMvYXBwL3BhZ2VzL3JlcXVlc3Qtdmlldy9yZXF1ZXN0LXZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQTJCLEVBQUE7O0FBRzdCO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBR2I7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLFlBQVk7RUFDWixlQUFlLEVBQUE7O0FBR2pCO0VBQ0Usa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3Qix3QkFBd0I7RUFDeEIsa1BBQTBOLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZXF1ZXN0LXZpZXcvcmVxdWVzdC12aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLXNlcGFyYXRvciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA0Nztcbn1cblxuLml0ZW0taGVhZGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubW9yZSB7XG4gIGNvbG9yOiBibHVlO1xufVxuXG5pb24tdGh1bWJuYWlsIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnAtaGVhZGVyIHtcbiAgb3BhY2l0eTogMC43O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLnAtZGV0YWlsIHtcbiAgb3BhY2l0eTogMC43O1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cbi5hdmF0YXItcG9zdHVsYW50ZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2UtaW47XG4gIGJvcmRlcjogMi42cHggc29saWQgI2ZmZjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4IHJnYmEoMCwwLDAsLjM1KSwgaW5zZXQgMCAwIDAgMnB4IHJnYmEoMjU1LDI1NSwyNTUsLjEpLCBpbnNldCAwIDJweCAwIDAgcmdiYSgyNTUsMjU1LDI1NSwuNDUpLCBpbnNldCAwIC0ycHggMCAwIHJnYmEoMjU1LDI1NSwyNTUsLjE1KSwgMCAxcHggM3B4IDAgcmdiYSgwLDAsMCwuMTIpLCAwIDFweCAycHggMCByZ2JhKDAsMCwwLC4yNCk7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/request-view/request-view.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/request-view/request-view.page.ts ***!
  \*********************************************************/
/*! exports provided: RequestViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestViewPage", function() { return RequestViewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var _animations_enter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../animations/enter */ "./src/app/animations/enter.ts");
/* harmony import */ var _animations_leave__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../animations/leave */ "./src/app/animations/leave.ts");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _modals_profile_profile_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../modals/profile/profile.page */ "./src/app/modals/profile/profile.page.ts");
/* harmony import */ var _modals_request_pro_request_pro_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../modals/request-pro/request-pro.page */ "./src/app/modals/request-pro/request-pro.page.ts");
/* harmony import */ var _modals_chat_chat_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../modals/chat/chat.page */ "./src/app/modals/chat/chat.page.ts");


// Param

// Ionic

// Services



// Animations


// Social Sharing

// Pages



var RequestViewPage = /** @class */ (function () {
    function RequestViewPage(route, utils, modalCtrl, socialSharing, loadingController, database, storage) {
        this.route = route;
        this.utils = utils;
        this.modalCtrl = modalCtrl;
        this.socialSharing = socialSharing;
        this.loadingController = loadingController;
        this.database = database;
        this.storage = storage;
    }
    RequestViewPage.prototype.ngOnInit = function () {
        var _this = this;
        this.request_id = this.route.snapshot.paramMap.get('id');
        this.storage.getValue('user_uid').then(function (user_id) {
            _this.database.getRequestById(_this.request_id).subscribe(function (data) {
                _this.request = data;
                console.log('data', data);
                _this.database.getPostulantsByRequest(_this.request_id, data.latitude, data.longitude).subscribe(function (response) {
                    _this.postulants = response.sort(function (a, b) {
                        if (_this.utils.getDistancia(data.latitude, data.longitude, a.latitude, a.longitude) >
                            _this.utils.getDistancia(data.latitude, data.longitude, b.latitude, b.longitude)) {
                            return 1;
                        }
                        if (_this.utils.getDistancia(data.latitude, data.longitude, a.latitude, a.longitude) <
                            _this.utils.getDistancia(data.latitude, data.longitude, b.latitude, b.longitude)) {
                            return -1;
                        }
                        return 0;
                    });
                    console.log(_this.postulants);
                });
            });
        });
    };
    RequestViewPage.prototype.showMessage = function (item) {
        //item.show_message = !item.show_message;
    };
    RequestViewPage.prototype.editRequest = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var parms, modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        parms = {
                            request_id: this.request_id,
                            is_edit: true
                        };
                        console.log(parms);
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _modals_request_pro_request_pro_page__WEBPACK_IMPORTED_MODULE_11__["RequestProPage"],
                                componentProps: parms,
                                mode: 'ios',
                                enterAnimation: _animations_enter__WEBPACK_IMPORTED_MODULE_7__["myEnterAnimation"],
                                leaveAnimation: _animations_leave__WEBPACK_IMPORTED_MODULE_8__["myLeaveAnimation"]
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (response) {
                            if (response.role === 'edit-ok') {
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RequestViewPage.prototype.goProfile = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var parms, modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        parms = {
                            id: item.id,
                            profile_id: this.request.subcategory_id,
                            to_confirm: true
                        };
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _modals_profile_profile_page__WEBPACK_IMPORTED_MODULE_10__["ProfilePage"],
                                componentProps: parms,
                                mode: 'ios',
                                enterAnimation: _animations_enter__WEBPACK_IMPORTED_MODULE_7__["myEnterAnimation"],
                                leaveAnimation: _animations_leave__WEBPACK_IMPORTED_MODULE_8__["myLeaveAnimation"]
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (response) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var loading_1;
                            var _this = this;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(response.role == 'response')) return [3 /*break*/, 3];
                                        return [4 /*yield*/, this.loadingController.create({
                                                message: 'Procesando Informacion ...'
                                            })];
                                    case 1:
                                        loading_1 = _a.sent();
                                        console.log('item', item);
                                        return [4 /*yield*/, loading_1.present()];
                                    case 2:
                                        _a.sent();
                                        this.database.selectProToRequest(item, this.request, this.postulants)
                                            .then(function (chat_id) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                            var parms, modal;
                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        parms = {
                                                            type: 'user',
                                                            sender: this.request.client_id,
                                                            receiver: item.id,
                                                            _chat_id: chat_id
                                                        };
                                                        return [4 /*yield*/, this.modalCtrl.create({
                                                                component: _modals_chat_chat_page__WEBPACK_IMPORTED_MODULE_12__["ChatPage"],
                                                                componentProps: parms,
                                                                mode: 'ios',
                                                                enterAnimation: _animations_enter__WEBPACK_IMPORTED_MODULE_7__["myEnterAnimation"],
                                                                leaveAnimation: _animations_leave__WEBPACK_IMPORTED_MODULE_8__["myLeaveAnimation"]
                                                            })];
                                                    case 1:
                                                        modal = _a.sent();
                                                        return [4 /*yield*/, modal.present()];
                                                    case 2:
                                                        _a.sent();
                                                        return [4 /*yield*/, loading_1.dismiss()];
                                                    case 3:
                                                        _a.sent();
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); })
                                            .catch(function (error) {
                                            loading_1.dismiss();
                                            console.log('selectProToRequest', error);
                                        });
                                        _a.label = 3;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RequestViewPage.prototype.shareRequest = function () {
        var url = 'https://puntopro.pe/?type=request?id=' + this.request_id;
        var mensaje = "Una solicitud fue creada por " + this.request.client_name + " en PuntoPro " + url;
        this.socialSharing.share(mensaje);
    };
    RequestViewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-request-view',
            template: __webpack_require__(/*! ./request-view.page.html */ "./src/app/pages/request-view/request-view.page.html"),
            styles: [__webpack_require__(/*! ./request-view.page.scss */ "./src/app/pages/request-view/request-view.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_9__["SocialSharing"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _services_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"],
            _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]])
    ], RequestViewPage);
    return RequestViewPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-request-view-request-view-module.js.map