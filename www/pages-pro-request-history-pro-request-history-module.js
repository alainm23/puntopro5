(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pro-request-history-pro-request-history-module"],{

/***/ "./src/app/pages/pro-request-history/pro-request-history.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/pro-request-history/pro-request-history.module.ts ***!
  \*************************************************************************/
/*! exports provided: ProRequestHistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProRequestHistoryPageModule", function() { return ProRequestHistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pro_request_history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pro-request-history.page */ "./src/app/pages/pro-request-history/pro-request-history.page.ts");







var routes = [
    {
        path: '',
        component: _pro_request_history_page__WEBPACK_IMPORTED_MODULE_6__["ProRequestHistoryPage"]
    }
];
var ProRequestHistoryPageModule = /** @class */ (function () {
    function ProRequestHistoryPageModule() {
    }
    ProRequestHistoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_pro_request_history_page__WEBPACK_IMPORTED_MODULE_6__["ProRequestHistoryPage"]]
        })
    ], ProRequestHistoryPageModule);
    return ProRequestHistoryPageModule;
}());



/***/ }),

/***/ "./src/app/pages/pro-request-history/pro-request-history.page.html":
/*!*************************************************************************!*\
  !*** ./src/app/pages/pro-request-history/pro-request-history.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"ios-arrow-back\" color=\"dark\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title>Historial de trabajos</ion-title>\n  </ion-toolbar>\n\n  <ion-toolbar mode=\"ios\">\n    <ion-segment color=\"dark\" (ionChange)=\"segmentChanged($event.detail.value)\" [(ngModel)]=\"segment_value\">\n      <ion-segment-button value=\"sent\">\n        <ion-label>Postulados</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"in_progress\">\n        <ion-label>En progreso</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"finalized\">\n        <ion-label>Finalizados</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid *ngIf=\"is_loading === true\" style=\"height: 100%; margin-bottom: 1rem\">\n    <ion-row justify-content-center align-items-center style=\"height: 100%\">\n      <ion-spinner name=\"bubbles\"></ion-spinner>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid *ngIf=\"is_loading === false\">\n    <ion-row>\n      <ion-col>\n        <ion-list>\n          <ion-card mode=\"md\" *ngFor=\"let item of list\" (click)=\"viewRequest (item?.dataGeneral)\">\n            <ion-card-header class=\"request-card-header\">\n              <ion-card-title>{{ item?.dataGeneral.title }}</ion-card-title>\n              <ion-item lines=\"none\" no-padding no-margin>\n                {{ getRelativeDateTime (item?.dataGeneral.created_date) }}\n                <ion-badge class=\"request-badge-margin\" color=\"orange\">{{ item?.dataGeneral.service_name }}</ion-badge>\n              </ion-item>\n            </ion-card-header>\n            <hr class=\"card-separator\">\n            <ion-card-content>\n              {{ item?.dataGeneral.detail }}\n            </ion-card-content>\n            <hr class=\"card-separator\">\n            <ion-item lines=\"none\">\n              Postulantes\n              <ion-badge class=\"request-badge-margin\" *ngIf=\"item.postulants > 0\" color=\"danger\">\n                {{ item.postulants }}\n              </ion-badge>\n\n              <ion-badge class=\"request-badge-margin\" *ngIf=\"!item.postulants > 0\" color=\"danger\">\n                0\n              </ion-badge>\n              <ion-button fill=\"outline\" slot=\"end\" color=\"dark\">Ver</ion-button>\n            </ion-item>\n          </ion-card>\n        </ion-list>\n      </ion-col>\n    </ion-row>  \n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/pro-request-history/pro-request-history.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/pro-request-history/pro-request-history.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-separator {\n  background-color: #00000047; }\n\n.request-card-header {\n  padding-bottom: 0px !important; }\n\n.request-badge-margin {\n  margin-left: 0.5rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsYWluL1B1bnRvUHJvL1B1bnRvUHJvLUlvbmljNC9zcmMvYXBwL3BhZ2VzL3Byby1yZXF1ZXN0LWhpc3RvcnkvcHJvLXJlcXVlc3QtaGlzdG9yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBMkIsRUFBQTs7QUFHN0I7RUFDRSw4QkFBOEIsRUFBQTs7QUFHaEM7RUFDRSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byby1yZXF1ZXN0LWhpc3RvcnkvcHJvLXJlcXVlc3QtaGlzdG9yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1zZXBhcmF0b3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwNDc7XG59XG5cbi5yZXF1ZXN0LWNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuXG4ucmVxdWVzdC1iYWRnZS1tYXJnaW4ge1xuICBtYXJnaW4tbGVmdDogMC41cmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/pro-request-history/pro-request-history.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/pro-request-history/pro-request-history.page.ts ***!
  \***********************************************************************/
/*! exports provided: ProRequestHistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProRequestHistoryPage", function() { return ProRequestHistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _animations_enter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../animations/enter */ "./src/app/animations/enter.ts");
/* harmony import */ var _animations_leave__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../animations/leave */ "./src/app/animations/leave.ts");
/* harmony import */ var _modals_chat_chat_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modals/chat/chat.page */ "./src/app/modals/chat/chat.page.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);


// Ionic

// Services


// Animations


// Modal Page

// Moment

var ProRequestHistoryPage = /** @class */ (function () {
    function ProRequestHistoryPage(database, navCtrl, modalCtrl, storage) {
        this.database = database;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.is_loading = true;
        this.segment_value = "sent";
    }
    ProRequestHistoryPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.getValue('user_uid').then(function (user_id) {
            _this.database.getProRequestHistory(user_id).subscribe(function (response) {
                console.log(response);
                _this.list = response;
                _this.list_backup = response;
                _this.segmentChanged(_this.segment_value);
                _this.is_loading = false;
            });
        });
    };
    ProRequestHistoryPage.prototype.segmentChanged = function (value) {
        this.list = this.list_backup;
        console.log(this.list);
        if (value === 'sent') {
            this.list = this.list.filter(function (item) {
                return item.data.state === 'sent';
            });
        }
        else if (value === 'in_progress') {
            this.list = this.list.filter(function (item) {
                return item.data.state === 'in_progress';
            });
        }
        else {
            this.list = this.list.filter(function (item) {
                return item.data.state === 'finalized';
            });
        }
    };
    ProRequestHistoryPage.prototype.getRelativeDateTime = function (date) {
        return moment__WEBPACK_IMPORTED_MODULE_8__(date, "").fromNow();
    };
    ProRequestHistoryPage.prototype.viewRequest = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var parms, modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(item);
                        if (!(item.state === 'created')) return [3 /*break*/, 1];
                        return [3 /*break*/, 4];
                    case 1:
                        if (!(item.state === 'in_progress')) return [3 /*break*/, 4];
                        parms = {
                            type: 'pro',
                            sender: item.pro_id,
                            receiver: item.client_id,
                            _chat_id: ''
                        };
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _modals_chat_chat_page__WEBPACK_IMPORTED_MODULE_7__["ChatPage"],
                                componentProps: parms,
                                mode: 'ios',
                                enterAnimation: _animations_enter__WEBPACK_IMPORTED_MODULE_5__["myEnterAnimation"],
                                leaveAnimation: _animations_leave__WEBPACK_IMPORTED_MODULE_6__["myLeaveAnimation"]
                            })];
                    case 2:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProRequestHistoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pro-request-history',
            template: __webpack_require__(/*! ./pro-request-history.page.html */ "./src/app/pages/pro-request-history/pro-request-history.page.html"),
            styles: [__webpack_require__(/*! ./pro-request-history.page.scss */ "./src/app/pages/pro-request-history/pro-request-history.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]])
    ], ProRequestHistoryPage);
    return ProRequestHistoryPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-pro-request-history-pro-request-history-module.js.map