(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pros-list-search-pros-list-search-module"],{

/***/ "./src/app/pages/pros-list-search/pros-list-search.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/pros-list-search/pros-list-search.module.ts ***!
  \*******************************************************************/
/*! exports provided: ProsListSearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProsListSearchPageModule", function() { return ProsListSearchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pros_list_search_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pros-list-search.page */ "./src/app/pages/pros-list-search/pros-list-search.page.ts");







var routes = [
    {
        path: '',
        component: _pros_list_search_page__WEBPACK_IMPORTED_MODULE_6__["ProsListSearchPage"]
    }
];
var ProsListSearchPageModule = /** @class */ (function () {
    function ProsListSearchPageModule() {
    }
    ProsListSearchPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_pros_list_search_page__WEBPACK_IMPORTED_MODULE_6__["ProsListSearchPage"]]
        })
    ], ProsListSearchPageModule);
    return ProsListSearchPageModule;
}());



/***/ }),

/***/ "./src/app/pages/pros-list-search/pros-list-search.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/pros-list-search/pros-list-search.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons mode=\"md\" slot=\"start\">\n      <ion-back-button mode=\"md\" text=\"\" icon=\"ios-arrow-back\" color=\"dark\"></ion-back-button>\n    </ion-buttons>\n    \n    <ion-card-header no-padding class=\"header-padding\">\n      <ion-card-title class=\"title-font-size\">{{ request?.subcategory_name }}</ion-card-title>\n      <ion-card-subtitle>{{ request?.address_name }}</ion-card-subtitle>\n    </ion-card-header>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid *ngIf=\"is_loading === true\" style=\"height: 100%; margin-bottom: 1rem\">\n    <ion-row justify-content-center align-items-center style=\"height: 100%\">\n      <ion-item text-center lines=\"none\">\n        <ion-spinner class=\"margin-right-1rem\" name=\"bubbles\"></ion-spinner>\n        Loading ...\n      </ion-item>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-button expand=\"block\" color=\"danger\">\n      Cancelar\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/pages/pros-list-search/pros-list-search.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/pros-list-search/pros-list-search.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".margin-right-1rem {\n  margin-right: 1rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsYWluL1B1bnRvUHJvL1B1bnRvUHJvLUlvbmljNC9zcmMvYXBwL3BhZ2VzL3Byb3MtbGlzdC1zZWFyY2gvcHJvcy1saXN0LXNlYXJjaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb3MtbGlzdC1zZWFyY2gvcHJvcy1saXN0LXNlYXJjaC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFyZ2luLXJpZ2h0LTFyZW0ge1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/pros-list-search/pros-list-search.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/pros-list-search/pros-list-search.page.ts ***!
  \*****************************************************************/
/*! exports provided: ProsListSearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProsListSearchPage", function() { return ProsListSearchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");


// Services



// Param

// Ionic

// Geolocation

var ProsListSearchPage = /** @class */ (function () {
    function ProsListSearchPage(route, database, navCtrl, modalCtrl, geolocation, storage, utils) {
        this.route = route;
        this.database = database;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.geolocation = geolocation;
        this.storage = storage;
        this.utils = utils;
        this.is_loading = true;
    }
    ProsListSearchPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.request_id = this.route.snapshot.paramMap.get('request_id');
                console.log(this.request_id);
                this.database.getEmergencyRequestById(this.request_id).subscribe(function (response) {
                    console.log(response);
                    _this.request = response;
                });
                return [2 /*return*/];
            });
        });
    };
    ProsListSearchPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pros-list-search',
            template: __webpack_require__(/*! ./pros-list-search.page.html */ "./src/app/pages/pros-list-search/pros-list-search.page.html"),
            styles: [__webpack_require__(/*! ./pros-list-search.page.scss */ "./src/app/pages/pros-list-search/pros-list-search.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"],
            _services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
            _services_utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"]])
    ], ProsListSearchPage);
    return ProsListSearchPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-pros-list-search-pros-list-search-module.js.map