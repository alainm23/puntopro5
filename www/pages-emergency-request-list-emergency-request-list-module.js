(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-emergency-request-list-emergency-request-list-module"],{

/***/ "./src/app/pages/emergency-request-list/emergency-request-list.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/emergency-request-list/emergency-request-list.module.ts ***!
  \*******************************************************************************/
/*! exports provided: EmergencyRequestListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmergencyRequestListPageModule", function() { return EmergencyRequestListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _emergency_request_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./emergency-request-list.page */ "./src/app/pages/emergency-request-list/emergency-request-list.page.ts");







var routes = [
    {
        path: '',
        component: _emergency_request_list_page__WEBPACK_IMPORTED_MODULE_6__["EmergencyRequestListPage"]
    }
];
var EmergencyRequestListPageModule = /** @class */ (function () {
    function EmergencyRequestListPageModule() {
    }
    EmergencyRequestListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_emergency_request_list_page__WEBPACK_IMPORTED_MODULE_6__["EmergencyRequestListPage"]]
        })
    ], EmergencyRequestListPageModule);
    return EmergencyRequestListPageModule;
}());



/***/ }),

/***/ "./src/app/pages/emergency-request-list/emergency-request-list.page.html":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/emergency-request-list/emergency-request-list.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar mode=\"ios\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button text=\"\" icon=\"ios-arrow-back\" color=\"dark\"></ion-back-button>\n      </ion-buttons>\n      \n      <ion-title>Solicitudes de emergencia</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-list>\n          <ion-item *ngFor=\"let item of items\" (click)=\"goRequest (item?.dataGeneral)\">\n            <ion-label>\n              <ion-text>\n                <h2>{{ item?.dataGeneral.subcategory_name }}</h2>\n              </ion-text>\n              <p>{{ item?.dataGeneral.address_name }}</p>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/emergency-request-list/emergency-request-list.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/emergency-request-list/emergency-request-list.page.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VtZXJnZW5jeS1yZXF1ZXN0LWxpc3QvZW1lcmdlbmN5LXJlcXVlc3QtbGlzdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/emergency-request-list/emergency-request-list.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/emergency-request-list/emergency-request-list.page.ts ***!
  \*****************************************************************************/
/*! exports provided: EmergencyRequestListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmergencyRequestListPage", function() { return EmergencyRequestListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");


// Ionic

// Services


var EmergencyRequestListPage = /** @class */ (function () {
    function EmergencyRequestListPage(database, navCtrl, storage) {
        this.database = database;
        this.navCtrl = navCtrl;
        this.storage = storage;
    }
    EmergencyRequestListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.getValue('user_uid').then(function (id) {
            _this.database.getAllEmergencyRequest(id).subscribe(function (response) {
                console.log(response);
                _this.items = response;
            });
        });
    };
    EmergencyRequestListPage.prototype.goRequest = function (item) {
        this.navCtrl.navigateForward('pros-list-search/' + item.id);
    };
    EmergencyRequestListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-emergency-request-list',
            template: __webpack_require__(/*! ./emergency-request-list.page.html */ "./src/app/pages/emergency-request-list/emergency-request-list.page.html"),
            styles: [__webpack_require__(/*! ./emergency-request-list.page.scss */ "./src/app/pages/emergency-request-list/emergency-request-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]])
    ], EmergencyRequestListPage);
    return EmergencyRequestListPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-emergency-request-list-emergency-request-list-module.js.map