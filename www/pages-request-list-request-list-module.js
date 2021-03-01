(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-request-list-request-list-module"],{

/***/ "./src/app/pages/request-list/request-list.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/request-list/request-list.module.ts ***!
  \***********************************************************/
/*! exports provided: RequestListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestListPageModule", function() { return RequestListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _request_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./request-list.page */ "./src/app/pages/request-list/request-list.page.ts");







var routes = [
    {
        path: '',
        component: _request_list_page__WEBPACK_IMPORTED_MODULE_6__["RequestListPage"]
    }
];
var RequestListPageModule = /** @class */ (function () {
    function RequestListPageModule() {
    }
    RequestListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_request_list_page__WEBPACK_IMPORTED_MODULE_6__["RequestListPage"]]
        })
    ], RequestListPageModule);
    return RequestListPageModule;
}());



/***/ }),

/***/ "./src/app/pages/request-list/request-list.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/request-list/request-list.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"ios-arrow-back\" color=\"dark\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title>Solicitudes</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid *ngIf=\"is_loading === true\" style=\"height: 100%; margin-bottom: 1rem\">\n    <ion-row justify-content-center align-items-center style=\"height: 100%\">\n      <ion-spinner name=\"bubbles\"></ion-spinner>\n    </ion-row>\n  </ion-grid>\n\n  <div *ngIf=\"is_loading === false\">\n    <ion-list *ngFor=\"let item of requests\">\n      <!--ion-list-header class=\"list-header\">\n        <ion-label>{{ item?.data.service_name }}</ion-label>\n      </ion-list-header-->\n\n      <ion-list>\n        <ion-card mode=\"md\" *ngFor=\"let item of item.dataGeneral\" (click)=\"viewRequest (item?.dataGeneral)\">\n          <ion-card-header class=\"request-card-header\">\n            <ion-card-title class=\"title-font-size\">{{ item?.dataGeneral.title }}</ion-card-title>\n            <ion-item lines=\"none\" no-padding no-margin>\n              {{ item?.dataGeneral.client_name }}\n              <ion-badge class=\"request-badge-margin\" color=\"orange\">{{ item?.dataGeneral.service_name }}</ion-badge>\n            </ion-item>\n          </ion-card-header>\n          <!--hr class=\"card-separator\"-->\n          <ion-item lines=\"none\">\n            <ion-icon slot=\"start\" name=\"calendar\"></ion-icon>\n            {{ getRelativeDateTime (item?.dataGeneral.created_date) }}\n            <ion-button fill=\"outline\" slot=\"end\" color=\"dark\">Ver</ion-button>\n          </ion-item>\n        </ion-card>\n      </ion-list>\n    </ion-list>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/request-list/request-list.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/request-list/request-list.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-separator {\n  background-color: #00000047; }\n\n.request-card-header {\n  padding-bottom: 0px !important; }\n\n.request-badge-margin {\n  margin-left: 1rem; }\n\n.list-header {\n  font-weight: bold;\n  font-size: 1.5rem; }\n\n.title-font-size {\n  font-size: 1.5rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsYWluL1B1bnRvUHJvL1B1bnRvUHJvLUlvbmljNC9zcmMvYXBwL3BhZ2VzL3JlcXVlc3QtbGlzdC9yZXF1ZXN0LWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQTJCLEVBQUE7O0FBRzdCO0VBQ0UsOEJBQThCLEVBQUE7O0FBR2hDO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVxdWVzdC1saXN0L3JlcXVlc3QtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1zZXBhcmF0b3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwNDc7XG59XG5cbi5yZXF1ZXN0LWNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuXG4ucmVxdWVzdC1iYWRnZS1tYXJnaW4ge1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLmxpc3QtaGVhZGVyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4udGl0bGUtZm9udC1zaXplIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/request-list/request-list.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/request-list/request-list.page.ts ***!
  \*********************************************************/
/*! exports provided: RequestListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestListPage", function() { return RequestListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);


// Ionic

// Services


// Moment

var RequestListPage = /** @class */ (function () {
    function RequestListPage(database, navCtrl, storage) {
        this.database = database;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.is_loading = true;
    }
    RequestListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.getValue('user_uid').then(function (user_id) {
            _this.database.getRequestsToConfirmByUser(user_id).subscribe(function (response) {
                _this.requests = response;
                _this.is_loading = false;
                console.log(response);
            });
        });
    };
    RequestListPage.prototype.getRelativeDateTime = function (date) {
        return moment__WEBPACK_IMPORTED_MODULE_5__(date, "").fromNow();
    };
    RequestListPage.prototype.viewRequest = function (item) {
        this.navCtrl.navigateForward('request-pro-view/' + item.id);
    };
    RequestListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-request-list',
            template: __webpack_require__(/*! ./request-list.page.html */ "./src/app/pages/request-list/request-list.page.html"),
            styles: [__webpack_require__(/*! ./request-list.page.scss */ "./src/app/pages/request-list/request-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]])
    ], RequestListPage);
    return RequestListPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-request-list-request-list-module.js.map