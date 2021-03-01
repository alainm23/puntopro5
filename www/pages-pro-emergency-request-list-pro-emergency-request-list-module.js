(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pro-emergency-request-list-pro-emergency-request-list-module"],{

/***/ "./src/app/pages/pro-emergency-request-list/pro-emergency-request-list.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/pro-emergency-request-list/pro-emergency-request-list.module.ts ***!
  \***************************************************************************************/
/*! exports provided: ProEmergencyRequestListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProEmergencyRequestListPageModule", function() { return ProEmergencyRequestListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pro_emergency_request_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pro-emergency-request-list.page */ "./src/app/pages/pro-emergency-request-list/pro-emergency-request-list.page.ts");







var routes = [
    {
        path: '',
        component: _pro_emergency_request_list_page__WEBPACK_IMPORTED_MODULE_6__["ProEmergencyRequestListPage"]
    }
];
var ProEmergencyRequestListPageModule = /** @class */ (function () {
    function ProEmergencyRequestListPageModule() {
    }
    ProEmergencyRequestListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_pro_emergency_request_list_page__WEBPACK_IMPORTED_MODULE_6__["ProEmergencyRequestListPage"]]
        })
    ], ProEmergencyRequestListPageModule);
    return ProEmergencyRequestListPageModule;
}());



/***/ }),

/***/ "./src/app/pages/pro-emergency-request-list/pro-emergency-request-list.page.html":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/pro-emergency-request-list/pro-emergency-request-list.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"ios-arrow-back\" color=\"dark\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title>Solicitudes de emergencia</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid *ngIf=\"is_loading === true\" style=\"height: 100%; margin-bottom: 1rem\">\n    <ion-row justify-content-center align-items-center style=\"height: 100%\">\n      <ion-spinner name=\"bubbles\"></ion-spinner>\n    </ion-row>\n  </ion-grid>\n\n  <div *ngIf=\"is_loading === false\">\n    <ion-list *ngFor=\"let item of requests\">\n      <ion-list>\n        <ion-card mode=\"md\" *ngFor=\"let item of item.dataGeneral\" (click)=\"viewRequest (item?.dataGeneral)\">\n          <ion-card-header class=\"request-card-header\">\n            <ion-card-title class=\"title-font-size\">{{ item?.dataGeneral.address_name }}</ion-card-title>\n            <ion-item lines=\"none\" no-padding no-margin>\n              {{ item?.dataGeneral.client_name }}\n            </ion-item>\n            <ion-badge class=\"request-badge-margin\" color=\"orange\">\n              {{ item?.dataGeneral.subcategory_name }}\n            </ion-badge>\n          </ion-card-header>\n          <hr class=\"card-separator\">\n          <ion-item lines=\"none\">\n            <ion-label>\n              {{ getRelativeDateTime (item?.dataGeneral.created_date) }}\n            </ion-label>\n            <ion-button fill=\"outline\" slot=\"end\" color=\"dark\">Ver</ion-button>\n          </ion-item>\n        </ion-card>\n      </ion-list>\n    </ion-list>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/pro-emergency-request-list/pro-emergency-request-list.page.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/pro-emergency-request-list/pro-emergency-request-list.page.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-separator {\n  background-color: #00000047; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsYWluL1B1bnRvUHJvL1B1bnRvUHJvLUlvbmljNC9zcmMvYXBwL3BhZ2VzL3Byby1lbWVyZ2VuY3ktcmVxdWVzdC1saXN0L3Byby1lbWVyZ2VuY3ktcmVxdWVzdC1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUEyQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvLWVtZXJnZW5jeS1yZXF1ZXN0LWxpc3QvcHJvLWVtZXJnZW5jeS1yZXF1ZXN0LWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtc2VwYXJhdG9yIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwNDc7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/pro-emergency-request-list/pro-emergency-request-list.page.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/pro-emergency-request-list/pro-emergency-request-list.page.ts ***!
  \*************************************************************************************/
/*! exports provided: ProEmergencyRequestListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProEmergencyRequestListPage", function() { return ProEmergencyRequestListPage; });
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

var ProEmergencyRequestListPage = /** @class */ (function () {
    function ProEmergencyRequestListPage(database, navCtrl, storage) {
        this.database = database;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.is_loading = true;
    }
    ProEmergencyRequestListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.getValue('user_uid').then(function (user_id) {
            _this.database.getEmergencyRequestsToConfirmByUser(user_id).subscribe(function (response) {
                console.log(response);
                _this.requests = response;
                _this.is_loading = false;
            });
        });
    };
    ProEmergencyRequestListPage.prototype.getRelativeDateTime = function (date) {
        return moment__WEBPACK_IMPORTED_MODULE_5__(date, "").fromNow();
    };
    ProEmergencyRequestListPage.prototype.viewRequest = function (item) {
        this.navCtrl.navigateForward('emergency-request-view/' + item.id);
    };
    ProEmergencyRequestListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pro-emergency-request-list',
            template: __webpack_require__(/*! ./pro-emergency-request-list.page.html */ "./src/app/pages/pro-emergency-request-list/pro-emergency-request-list.page.html"),
            styles: [__webpack_require__(/*! ./pro-emergency-request-list.page.scss */ "./src/app/pages/pro-emergency-request-list/pro-emergency-request-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]])
    ], ProEmergencyRequestListPage);
    return ProEmergencyRequestListPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-pro-emergency-request-list-pro-emergency-request-list-module.js.map