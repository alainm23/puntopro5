(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-soypro-request-list-soypro-request-list-module"],{

/***/ "./src/app/pages/soypro-request-list/soypro-request-list.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/soypro-request-list/soypro-request-list.module.ts ***!
  \*************************************************************************/
/*! exports provided: SoyproRequestListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoyproRequestListPageModule", function() { return SoyproRequestListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _soypro_request_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./soypro-request-list.page */ "./src/app/pages/soypro-request-list/soypro-request-list.page.ts");







var routes = [
    {
        path: '',
        component: _soypro_request_list_page__WEBPACK_IMPORTED_MODULE_6__["SoyproRequestListPage"]
    }
];
var SoyproRequestListPageModule = /** @class */ (function () {
    function SoyproRequestListPageModule() {
    }
    SoyproRequestListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_soypro_request_list_page__WEBPACK_IMPORTED_MODULE_6__["SoyproRequestListPage"]]
        })
    ], SoyproRequestListPageModule);
    return SoyproRequestListPageModule;
}());



/***/ }),

/***/ "./src/app/pages/soypro-request-list/soypro-request-list.page.html":
/*!*************************************************************************!*\
  !*** ./src/app/pages/soypro-request-list/soypro-request-list.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"ios-arrow-back\" color=\"dark\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title>\n      <img class=\"wordmark-size\" src=\"/assets/img/PuntoPro-wordmark.png\">\n    </ion-title>\n  </ion-toolbar>\n\n  <ion-toolbar mode=\"ios\">\n    <ion-title>\n      Mis solicitudes\n   </ion-title>\n  </ion-toolbar>\n\n  <ion-toolbar>\n    <ion-segment color=\"orange\" [(ngModel)]=\"segment_value\">\n      <ion-segment-button value=\"0\">\n        <ion-label>Emergencia</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"1\">\n        <ion-label>Cotizacion</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding-horizontal\">\n  <div [ngSwitch]=\"segment_value\">\n    <div *ngSwitchCase=\"0\">\n      <ion-list *ngFor=\"let x of emergency_items\">\n        <ion-list>\n          <ion-item *ngFor=\"let item of x.dataGeneral\" (click)=\"viewRequest (item?.dataGeneral)\">\n            <ion-thumbnail slot=\"start\">\n              <img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==\">\n            </ion-thumbnail>\n            <ion-label>\n              <h2>{{ item.dataGeneral.service_name }}</h2>\n              <small>{{ item.dataGeneral.date_added }}</small>\n              <p text-wrap>{{ item.dataGeneral.note.substring (0, 25) }}...</p>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-list>\n    </div>\n\n    <div *ngSwitchCase=\"1\">\n      <ion-list *ngFor=\"let x of quotation_items\">\n        <ion-list>\n          <ion-item *ngFor=\"let item of x.dataGeneral\" (click)=\"viewRequest (item?.dataGeneral)\">\n            <ion-thumbnail slot=\"start\">\n              <img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==\">\n            </ion-thumbnail>\n            <ion-label>\n              <h2>{{ item.dataGeneral.service_name }}</h2>\n              <small>{{ item.dataGeneral.date_added }}</small>\n              <p text-wrap>{{ item.dataGeneral.note.substring (0, 25) }}...</p>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-list>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/soypro-request-list/soypro-request-list.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/soypro-request-list/soypro-request-list.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-segment {\n  padding-left: 2rem;\n  padding-right: 2rem; }\n\nion-segment-button {\n  font-size: 12px;\n  text-transform: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsYWluL1B1bnRvUHJvL1B1bnRvUHJvLUlvbmljNC9zcmMvYXBwL3BhZ2VzL3NveXByby1yZXF1ZXN0LWxpc3Qvc295cHJvLXJlcXVlc3QtbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksZUFBZTtFQUNmLG9CQUFvQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc295cHJvLXJlcXVlc3QtbGlzdC9zb3lwcm8tcmVxdWVzdC1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zZWdtZW50IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XG4gICAgcGFkZGluZy1yaWdodDogMnJlbTtcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/soypro-request-list/soypro-request-list.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/soypro-request-list/soypro-request-list.page.ts ***!
  \***********************************************************************/
/*! exports provided: SoyproRequestListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoyproRequestListPage", function() { return SoyproRequestListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");


// Ionic

// Services


var SoyproRequestListPage = /** @class */ (function () {
    function SoyproRequestListPage(database, navCtrl, storage) {
        this.database = database;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.segment_value = "0";
    }
    SoyproRequestListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.getValue('user_uid').then(function (user_id) {
            _this.database.getEmergencyRequestsToConfirmByUser(user_id).subscribe(function (response) {
                console.log('getEmergencyRequestsToConfirmByUser', response);
                _this.emergency_items = response;
            });
            _this.database.getQuoteRequestsToConfirmByUser(user_id).subscribe(function (response) {
                console.log('getQuoteRequestsToConfirmByUser', response);
                _this.quotation_items = response;
            });
        });
    };
    SoyproRequestListPage.prototype.viewRequest = function (item) {
        this.navCtrl.navigateForward('request-pro-view/' + item.id);
    };
    SoyproRequestListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-soypro-request-list',
            template: __webpack_require__(/*! ./soypro-request-list.page.html */ "./src/app/pages/soypro-request-list/soypro-request-list.page.html"),
            styles: [__webpack_require__(/*! ./soypro-request-list.page.scss */ "./src/app/pages/soypro-request-list/soypro-request-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]])
    ], SoyproRequestListPage);
    return SoyproRequestListPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-soypro-request-list-soypro-request-list-module.js.map