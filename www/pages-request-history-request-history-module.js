(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-request-history-request-history-module"],{

/***/ "./src/app/pages/request-history/request-history.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/request-history/request-history.module.ts ***!
  \*****************************************************************/
/*! exports provided: RequestHistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestHistoryPageModule", function() { return RequestHistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _request_history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./request-history.page */ "./src/app/pages/request-history/request-history.page.ts");







var routes = [
    {
        path: '',
        component: _request_history_page__WEBPACK_IMPORTED_MODULE_6__["RequestHistoryPage"]
    }
];
var RequestHistoryPageModule = /** @class */ (function () {
    function RequestHistoryPageModule() {
    }
    RequestHistoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_request_history_page__WEBPACK_IMPORTED_MODULE_6__["RequestHistoryPage"]]
        })
    ], RequestHistoryPageModule);
    return RequestHistoryPageModule;
}());



/***/ }),

/***/ "./src/app/pages/request-history/request-history.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/request-history/request-history.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar mode=\"ios\" no-border>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"ios-arrow-back\" color=\"dark\"></ion-back-button>\n    </ion-buttons>\n    \n    <ion-title>\n      <img class=\"wordmark-size\" src=\"/assets/img/PuntoPro-wordmark.png\">\n    </ion-title>\n  </ion-toolbar>\n\n  <ion-toolbar mode=\"ios\">\n    <ion-title>\n      Mis solicitudes\n    </ion-title>\n  </ion-toolbar>\n\n  <ion-toolbar>\n    <ion-row>\n      <ion-segment color=\"orange\" (ionChange)=\"segmentChanged($event.detail.value)\" [(ngModel)]=\"segment_value\">\n        <ion-segment-button value=\"created\">\n          <ion-label>Solicitados</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"in_progress\">\n          <ion-label>En progreso</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"finalized\">\n          <ion-label>Finalizados</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n    </ion-row>\n\n    <ion-row>\n      <ion-select interface=\"action-sheet\" [(ngModel)]=\"select_value\">\n        <ion-select-option value=\"0\">Mostrar - solicitudes de emergencia</ion-select-option>\n        <ion-select-option value=\"1\">Mostrar - solicitudes de cotización</ion-select-option>\n      </ion-select>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding-horizontal\">\n  <ion-list>\n    <ion-item *ngFor=\"let item of items\"  (click)=\"viewRequest (item?.dataGeneral)\">\n      <ion-thumbnail slot=\"start\">\n        <img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==\">\n      </ion-thumbnail>\n      <ion-label>\n        <h2>{{ item.dataGeneral.service_name }}</h2>\n        <small>{{ item.dataGeneral.date_added }}</small>\n        <p text-wrap>{{ item.dataGeneral.note.substring (0, 25) }}...</p>\n      </ion-label>\n      <ion-badge slot=\"end\" color=\"orange\">Active</ion-badge>\n    </ion-item>\n  </ion-list>\n</ion-content>\n<!--ion-header>\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"ios-arrow-back\" color=\"dark\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title>Historial de solicitudes</ion-title>\n  </ion-toolbar>\n\n  <!--ion-toolbar mode=\"ios\">\n    <ion-segment color=\"dark\" (ionChange)=\"segmentChanged($event.detail.value)\" [(ngModel)]=\"segment_value\">\n      <ion-segment-button value=\"created\">\n        <ion-label>Solicitados</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"in_progress\">\n        <ion-label>En progreso</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"finalized\">\n        <ion-label>Finalizados</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header-->\n\n<!--ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-list>\n          <ion-card mode=\"md\" *ngFor=\"let item of list\">\n            <ion-card-header class=\"request-card-header\" (click)=\"viewRequest (item?.dataGeneral)\">\n              <ion-card-title class=\"request.title\">{{ item?.dataGeneral.title }}</ion-card-title>\n              <ion-item lines=\"none\" no-padding no-margin>\n                {{ getRelativeDateTime (item?.dataGeneral.created_date) }}\n                <ion-badge class=\"request-badge-margin\" color=\"orange\">{{ item?.dataGeneral.service_name }}</ion-badge>\n              </ion-item>\n            </ion-card-header>\n            <hr class=\"card-separator\">\n            <ion-item lines=\"none\">\n              Postulantes\n              <ion-badge class=\"request-badge-margin\" *ngIf=\"item.postulants > 0\" color=\"danger\">\n                {{ item.postulants }}\n              </ion-badge>\n\n              <ion-badge class=\"request-badge-margin\" *ngIf=\"!item.postulants > 0\" color=\"danger\">\n                0\n              </ion-badge>\n\n              <ion-button expand=\"block\" *ngIf=\"item?.dataGeneral.state === 'in_progress'\" slot=\"end\" color=\"danger\" (click)=\"qualifyConfirm (item?.dataGeneral)\">\n                Finalizar\n              </ion-button>\n              <ion-button expand=\"block\" *ngIf=\"item?.dataGeneral.state !== 'in_progress'\" fill=\"outline\" slot=\"end\" color=\"dark\" (click)=\"viewRequest (item?.dataGeneral)\">\n                Ver\n              </ion-button>\n            </ion-item>\n          </ion-card>\n        </ion-list>\n      </ion-col>\n    </ion-row>  \n  </ion-grid>\n</ion-content-->\n"

/***/ }),

/***/ "./src/app/pages/request-history/request-history.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/request-history/request-history.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-separator {\n  background-color: #00000047; }\n\n.request-card-header {\n  padding-bottom: 0px !important; }\n\n.request-badge-margin {\n  margin-left: 0.5rem; }\n\n.request.title {\n  font-size: 1.3rem; }\n\nion-segment {\n  padding-left: 2rem;\n  padding-right: 2rem; }\n\nion-segment-button {\n  font-size: 12px;\n  text-transform: none; }\n\nion-select {\n  max-width: 100%;\n  width: 100%;\n  margin: 2rem;\n  margin-top: 1rem;\n  padding-right: 9px;\n  border: 1px solid #000000c2;\n  border-radius: 6px;\n  margin-bottom: 0px; }\n\nion-badge {\n  position: fixed;\n  bottom: 19px;\n  right: 19px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsYWluL1B1bnRvUHJvL1B1bnRvUHJvLUlvbmljNC9zcmMvYXBwL3BhZ2VzL3JlcXVlc3QtaGlzdG9yeS9yZXF1ZXN0LWhpc3RvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQTJCLEVBQUE7O0FBRzdCO0VBQ0UsOEJBQThCLEVBQUE7O0FBR2hDO0VBQ0UsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGVBQWU7RUFDZixvQkFBb0IsRUFBQTs7QUFHdEI7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZXF1ZXN0LWhpc3RvcnkvcmVxdWVzdC1oaXN0b3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLXNlcGFyYXRvciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA0Nztcbn1cblxuLnJlcXVlc3QtY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5yZXF1ZXN0LWJhZGdlLW1hcmdpbiB7XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG59XG5cbi5yZXF1ZXN0LnRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG59XG5cbmlvbi1zZWdtZW50IHtcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xufVxuXG5pb24tc2VnbWVudC1idXR0b24ge1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG5pb24tc2VsZWN0IHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAycmVtO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBwYWRkaW5nLXJpZ2h0OiA5cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDBjMjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbmlvbi1iYWRnZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAxOXB4O1xuICByaWdodDogMTlweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/request-history/request-history.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/request-history/request-history.page.ts ***!
  \***************************************************************/
/*! exports provided: RequestHistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestHistoryPage", function() { return RequestHistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _animations_enter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../animations/enter */ "./src/app/animations/enter.ts");
/* harmony import */ var _animations_leave__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../animations/leave */ "./src/app/animations/leave.ts");
/* harmony import */ var _modals_chat_chat_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modals/chat/chat.page */ "./src/app/modals/chat/chat.page.ts");
/* harmony import */ var _modals_qualify_pro_qualify_pro_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../modals/qualify-pro/qualify-pro.page */ "./src/app/modals/qualify-pro/qualify-pro.page.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);


// Ionic

// Services


// Animations


// Modal Page


// Moment

var RequestHistoryPage = /** @class */ (function () {
    function RequestHistoryPage(database, navCtrl, modalCtrl, alertController, storage) {
        this.database = database;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.alertController = alertController;
        this.storage = storage;
        this.segment_value = "created";
        this.select_value = "0";
    }
    RequestHistoryPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.getValue('user_uid').then(function (user_uid) {
            _this.database.getAllRequestByUser(user_uid).subscribe(function (response) {
                _this.items = response;
                _this.items_backup = response;
                _this.segmentChanged(_this.segment_value);
                console.log('response', response);
            });
        });
    };
    RequestHistoryPage.prototype.segmentChanged = function (value) {
        this.items = this.items_backup;
        if (value === "created") {
            this.items = this.items.filter(function (item) {
                return item.dataGeneral.state === 'created';
            });
        }
        else if (value === "in_progress") {
            this.items = this.items.filter(function (item) {
                return item.dataGeneral.state === 'in_progress';
            });
        }
        else {
            this.items = this.items.filter(function (item) {
                return item.dataGeneral.state === 'finalized';
            });
        }
    };
    RequestHistoryPage.prototype.viewRequest = function (item) {
        console.log(item);
        var value = item.state;
        if (value === "created") {
            this.navCtrl.navigateForward('request-view/' + item.id);
        }
        else if (value === "in_progress") {
            this.connectPro(item.pro_id);
        }
        else {
        }
    };
    RequestHistoryPage.prototype.connectPro = function (pro_id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.storage.getValue('user_uid').then(function (user_id) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var parms, modal;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                parms = {
                                    type: 'user',
                                    sender: user_id,
                                    receiver: pro_id,
                                    _chat_id: ''
                                };
                                return [4 /*yield*/, this.modalCtrl.create({
                                        component: _modals_chat_chat_page__WEBPACK_IMPORTED_MODULE_7__["ChatPage"],
                                        componentProps: parms,
                                        mode: 'ios',
                                        enterAnimation: _animations_enter__WEBPACK_IMPORTED_MODULE_5__["myEnterAnimation"],
                                        leaveAnimation: _animations_leave__WEBPACK_IMPORTED_MODULE_6__["myLeaveAnimation"]
                                    })];
                            case 1:
                                modal = _a.sent();
                                return [4 /*yield*/, modal.present()];
                            case 2: return [2 /*return*/, _a.sent()];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    RequestHistoryPage.prototype.getRelativeDateTime = function (date) {
        return moment__WEBPACK_IMPORTED_MODULE_9__(date, "").fromNow();
    };
    RequestHistoryPage.prototype.qualifyConfirm = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(item);
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Confirm!',
                                message: 'Message <strong>text</strong>!!!',
                                buttons: [
                                    {
                                        text: 'Cancel',
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function (blah) {
                                            console.log('Confirm Cancel: blah');
                                        }
                                    }, {
                                        text: 'Okay',
                                        handler: function () {
                                            _this.makeQualify(item);
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
    RequestHistoryPage.prototype.makeQualify = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.storage.getValue('user_uid').then(function (user_id) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var parms, modal;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                parms = {
                                    pro_id: item.pro_id,
                                    request_id: item.id,
                                    user_id: item.client_id
                                };
                                return [4 /*yield*/, this.modalCtrl.create({
                                        component: _modals_qualify_pro_qualify_pro_page__WEBPACK_IMPORTED_MODULE_8__["QualifyProPage"],
                                        componentProps: parms,
                                        mode: 'ios',
                                        enterAnimation: _animations_enter__WEBPACK_IMPORTED_MODULE_5__["myEnterAnimation"],
                                        leaveAnimation: _animations_leave__WEBPACK_IMPORTED_MODULE_6__["myLeaveAnimation"]
                                    })];
                            case 1:
                                modal = _a.sent();
                                return [4 /*yield*/, modal.present()];
                            case 2: return [2 /*return*/, _a.sent()];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    RequestHistoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-request-history',
            template: __webpack_require__(/*! ./request-history.page.html */ "./src/app/pages/request-history/request-history.page.html"),
            styles: [__webpack_require__(/*! ./request-history.page.scss */ "./src/app/pages/request-history/request-history.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]])
    ], RequestHistoryPage);
    return RequestHistoryPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-request-history-request-history-module.js.map