(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-soypro-profiles-soypro-profiles-module"],{

/***/ "./src/app/pages/soypro-profiles/soypro-profiles.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/soypro-profiles/soypro-profiles.module.ts ***!
  \*****************************************************************/
/*! exports provided: SoyproProfilesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoyproProfilesPageModule", function() { return SoyproProfilesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _soypro_profiles_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./soypro-profiles.page */ "./src/app/pages/soypro-profiles/soypro-profiles.page.ts");







var routes = [
    {
        path: '',
        component: _soypro_profiles_page__WEBPACK_IMPORTED_MODULE_6__["SoyproProfilesPage"]
    }
];
var SoyproProfilesPageModule = /** @class */ (function () {
    function SoyproProfilesPageModule() {
    }
    SoyproProfilesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_soypro_profiles_page__WEBPACK_IMPORTED_MODULE_6__["SoyproProfilesPage"]]
        })
    ], SoyproProfilesPageModule);
    return SoyproProfilesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/soypro-profiles/soypro-profiles.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/soypro-profiles/soypro-profiles.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"ios-arrow-back\" color=\"dark\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title>\n      <img class=\"wordmark-size\" src=\"/assets/img/PuntoPro-wordmark.png\">\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\">\n        <div text-center>\n          <img class=\"avatar avatar-card\" [src]=\"auth.user_data?.avatar\"/>\n        </div>\n\n        <ion-item text-center lines=\"none\">\n          <ion-label>\n            <h2><b>{{ auth.user_data?.first_name }} {{ auth.user_data?.last_name }}</b></h2>\n          </ion-label>\n        </ion-item>\n\n        <ion-item text-center lines=\"none\">\n          <ion-label>\n            <h3>CONFIGURANDO MIS SERVICIOS</h3>\n          </ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/soypro-profiles/soypro-profiles.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/soypro-profiles/soypro-profiles.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NveXByby1wcm9maWxlcy9zb3lwcm8tcHJvZmlsZXMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/soypro-profiles/soypro-profiles.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/soypro-profiles/soypro-profiles.page.ts ***!
  \***************************************************************/
/*! exports provided: SoyproProfilesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoyproProfilesPage", function() { return SoyproProfilesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");


// Services

var SoyproProfilesPage = /** @class */ (function () {
    function SoyproProfilesPage(auth) {
        this.auth = auth;
    }
    SoyproProfilesPage.prototype.ngOnInit = function () {
    };
    SoyproProfilesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-soypro-profiles',
            template: __webpack_require__(/*! ./soypro-profiles.page.html */ "./src/app/pages/soypro-profiles/soypro-profiles.page.html"),
            styles: [__webpack_require__(/*! ./soypro-profiles.page.scss */ "./src/app/pages/soypro-profiles/soypro-profiles.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], SoyproProfilesPage);
    return SoyproProfilesPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-soypro-profiles-soypro-profiles-module.js.map