(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-messages-messages-module"],{

/***/ "./src/app/pages/messages/messages.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/messages/messages.module.ts ***!
  \***************************************************/
/*! exports provided: MessagesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesPageModule", function() { return MessagesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _messages_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./messages.page */ "./src/app/pages/messages/messages.page.ts");







var routes = [
    {
        path: '',
        component: _messages_page__WEBPACK_IMPORTED_MODULE_6__["MessagesPage"]
    }
];
var MessagesPageModule = /** @class */ (function () {
    function MessagesPageModule() {
    }
    MessagesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_messages_page__WEBPACK_IMPORTED_MODULE_6__["MessagesPage"]]
        })
    ], MessagesPageModule);
    return MessagesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/messages/messages.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/messages/messages.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"ios-arrow-back\" color=\"dark\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title>\n      <img class=\"wordmark-size\" src=\"/assets/img/PuntoPro-wordmark.png\">\n    </ion-title>\n  </ion-toolbar>\n  \n  <ion-toolbar mode=\"ios\">\n    <ion-title>\n      Inbox\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid *ngIf=\"is_loading === true\" style=\"height: 100%; margin-bottom: 1rem\">\n    <ion-row justify-content-center align-items-center style=\"height: 100%\">\n      <ion-spinner name=\"bubbles\"></ion-spinner>\n    </ion-row>\n  </ion-grid> \n\n  <ion-grid *ngIf=\"is_loading === false\">\n    <ion-list *ngIf=\"list.length > 0 === true\">\n      <div *ngFor=\"let item of list\">\n        <ion-item (click)=\"goChat (item?.data)\">\n          <ion-avatar class=\"avatar\" slot=\"start\">\n            <img [src]=\"item?.dataGeneral.avatar\"/>\n          </ion-avatar>\n          <ion-label>\n            <h2>{{ item?.dataGeneral.fullname }}</h2>\n            <!--h3>I'm a big deal</h3-->\n            <!--p>Listen, I've had a pretty messed up day...</p-->\n          </ion-label>\n\n          <ion-button fill=\"clear\" slot=\"end\" color=\"dark\">\n            <ion-icon slot=\"icon-only\" name=\"ios-arrow-forward\"></ion-icon>\n          </ion-button>\n        </ion-item>\n      </div>\n    </ion-list>\n\n    <ion-grid *ngIf=\"list.length > 0 === false\">\n      <ion-row>\n        <ion-col>\n          <ion-item lines=\"none\" text-center>\n            <ion-label>\n              <h1>Ningun chat</h1>\n              <h4>...</h4>\n            </ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/messages/messages.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/messages/messages.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lc3NhZ2VzL21lc3NhZ2VzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/messages/messages.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/messages/messages.page.ts ***!
  \*************************************************/
/*! exports provided: MessagesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesPage", function() { return MessagesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _animations_enter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../animations/enter */ "./src/app/animations/enter.ts");
/* harmony import */ var _animations_leave__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../animations/leave */ "./src/app/animations/leave.ts");
/* harmony import */ var _modals_chat_chat_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../modals/chat/chat.page */ "./src/app/modals/chat/chat.page.ts");


// Param

// Ionic 

// Services


// Animations


// Modal Page

var MessagesPage = /** @class */ (function () {
    function MessagesPage(database, storage, modalCtrl, route) {
        this.database = database;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.route = route;
        this.is_loading = true;
    }
    MessagesPage.prototype.ngOnInit = function () {
        var _this = this;
        this.user_type = this.route.snapshot.paramMap.get('user_type');
        this.storage.getValue('user_uid').then(function (user_id) {
            if (_this.user_type === 'pro') {
                _this.database.getProChatList(user_id).subscribe(function (response) {
                    _this.list = response;
                    _this.is_loading = false;
                    console.log(response);
                });
            }
            else {
                _this.database.getUserChatList(user_id).subscribe(function (response) {
                    _this.list = response;
                    _this.is_loading = false;
                    console.log(response);
                });
            }
        });
    };
    MessagesPage.prototype.goChat = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var parms, modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.user_type === 'pro') {
                            parms = {
                                type: this.user_type,
                                sender: data.pro_id,
                                receiver: data.user_id,
                                _chat_id: data.chat_id
                            };
                        }
                        else {
                            parms = {
                                type: this.user_type,
                                sender: data.user_id,
                                receiver: data.pro_id,
                                _chat_id: data.chat_id
                            };
                        }
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _modals_chat_chat_page__WEBPACK_IMPORTED_MODULE_8__["ChatPage"],
                                componentProps: parms,
                                mode: 'ios',
                                enterAnimation: _animations_enter__WEBPACK_IMPORTED_MODULE_6__["myEnterAnimation"],
                                leaveAnimation: _animations_leave__WEBPACK_IMPORTED_MODULE_7__["myLeaveAnimation"]
                            })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MessagesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.page.html */ "./src/app/pages/messages/messages.page.html"),
            styles: [__webpack_require__(/*! ./messages.page.scss */ "./src/app/pages/messages/messages.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_database_service__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"],
            _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], MessagesPage);
    return MessagesPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-messages-messages-module.js.map