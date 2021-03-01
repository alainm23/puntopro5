(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-soypro-update-data-soypro-update-data-module"],{

/***/ "./src/app/pages/soypro-update-data/soypro-update-data.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/soypro-update-data/soypro-update-data.module.ts ***!
  \***********************************************************************/
/*! exports provided: SoyproUpdateDataPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoyproUpdateDataPageModule", function() { return SoyproUpdateDataPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _soypro_update_data_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./soypro-update-data.page */ "./src/app/pages/soypro-update-data/soypro-update-data.page.ts");







var routes = [
    {
        path: '',
        component: _soypro_update_data_page__WEBPACK_IMPORTED_MODULE_6__["SoyproUpdateDataPage"]
    }
];
var SoyproUpdateDataPageModule = /** @class */ (function () {
    function SoyproUpdateDataPageModule() {
    }
    SoyproUpdateDataPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_soypro_update_data_page__WEBPACK_IMPORTED_MODULE_6__["SoyproUpdateDataPage"]]
        })
    ], SoyproUpdateDataPageModule);
    return SoyproUpdateDataPageModule;
}());



/***/ }),

/***/ "./src/app/pages/soypro-update-data/soypro-update-data.page.html":
/*!***********************************************************************!*\
  !*** ./src/app/pages/soypro-update-data/soypro-update-data.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"ios-arrow-back\" color=\"dark\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title>\n      <img class=\"wordmark-size\" src=\"/assets/img/PuntoPro-wordmark.png\">\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\">\n        <div text-center>\n          <img class=\"avatar avatar-card\" [src]=\"auth.user_data?.avatar\"/>\n        </div>\n\n        <ion-item text-center lines=\"none\">\n          <ion-label>\n            <h2><b>{{ auth.user_data?.first_name }} {{ auth.user_data?.last_name }}</b></h2>\n          </ion-label>\n        </ion-item>\n      </ion-col>\n\n      <ion-col size=\"12\">\n        <ion-card mode=\"ios\" class=\"card\" (click)=\"goUpdatePersonalDate ()\">\n          <ion-item lines=\"none\" text-center>\n            <ion-label text-wrap>\n              DATOS PERSONALES\n            </ion-label>\n          </ion-item>\n        </ion-card>\n      </ion-col>\n\n      <ion-col size=\"12\">\n        <ion-card mode=\"ios\" class=\"card\" (click)=\"goUpdateProDate ()\">\n          <ion-item lines=\"none\" text-center>\n            <ion-label text-wrap>\n              DATOS PROFESIONALES\n            </ion-label>\n          </ion-item>\n        </ion-card>\n      </ion-col>\n\n      <ion-col size=\"12\">\n        <ion-card mode=\"ios\" class=\"card\" (click)=\"goProfiles ()\">\n          <ion-item lines=\"none\" text-center>\n            <ion-label text-wrap>\n              MIS PERFILES PRO\n            </ion-label>\n          </ion-item>\n        </ion-card>\n      </ion-col>\n\n      <ion-col size=\"12\">\n        <ion-item lines=\"none\" text-center>\n          <ion-label class=\"msg-color\" text-wrap>\n            ¡ES TIEMPO DE HACERTE CONOCIDO!\n          </ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"position-bottom\">\n      <ion-col size=\"12\">\n        <ion-card mode=\"ios\">\n          <ion-item lines=\"none\" text-center text-wrap>\n            <ion-label class=\"promocion-label font-bold\">\n              Promociona tu perfil\n            </ion-label>\n          </ion-item>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/soypro-update-data/soypro-update-data.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/soypro-update-data/soypro-update-data.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: none;\n  background-image: url(\"/assets/img/update-data.png\");\n  background-position: center bottom;\n  background-repeat: no-repeat;\n  background-size: contain; }\n\n.card {\n  margin: 1rem 1rem 0px 1rem; }\n\n.position-bottom {\n  position: fixed;\n  bottom: 0;\n  margin: 0 auto;\n  width: 100%; }\n\n.msg-color {\n  color: #98C3D2; }\n\n.promocion-label {\n  padding: 2rem;\n  color: #74B0C7; }\n\n.font-bold {\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsYWluL1B1bnRvUHJvL1B1bnRvUHJvLUlvbmljNC9zcmMvYXBwL3BhZ2VzL3NveXByby11cGRhdGUtZGF0YS9zb3lwcm8tdXBkYXRlLWRhdGEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWE7RUFDYixvREFBb0Q7RUFDcEQsa0NBQWtDO0VBQ2xDLDRCQUE0QjtFQUM1Qix3QkFBd0IsRUFBQTs7QUFHNUI7RUFDSSwwQkFBMEIsRUFBQTs7QUFHOUI7RUFDSSxlQUFlO0VBQ2YsU0FBUztFQUNULGNBQWM7RUFDZCxXQUFXLEVBQUE7O0FBR2Y7RUFDSSxjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksYUFBYTtFQUNiLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NveXByby11cGRhdGUtZGF0YS9zb3lwcm8tdXBkYXRlLWRhdGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1nL3VwZGF0ZS1kYXRhLnBuZycpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBib3R0b207XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG59XG5cbi5jYXJkIHtcbiAgICBtYXJnaW46IDFyZW0gMXJlbSAwcHggMXJlbTtcbn1cblxuLnBvc2l0aW9uLWJvdHRvbSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLm1zZy1jb2xvciB7XG4gICAgY29sb3I6ICM5OEMzRDI7XG59XG5cbi5wcm9tb2Npb24tbGFiZWwge1xuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgY29sb3I6ICM3NEIwQzc7XG59XG5cbi5mb250LWJvbGQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/soypro-update-data/soypro-update-data.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/soypro-update-data/soypro-update-data.page.ts ***!
  \*********************************************************************/
/*! exports provided: SoyproUpdateDataPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoyproUpdateDataPage", function() { return SoyproUpdateDataPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");


// Ionic

// Services

var SoyproUpdateDataPage = /** @class */ (function () {
    function SoyproUpdateDataPage(navCtrl, auth) {
        this.navCtrl = navCtrl;
        this.auth = auth;
    }
    SoyproUpdateDataPage.prototype.ngOnInit = function () {
    };
    SoyproUpdateDataPage.prototype.goUpdatePersonalDate = function () {
        this.navCtrl.navigateForward('soypro-update-personal-data');
    };
    SoyproUpdateDataPage.prototype.goUpdateProDate = function () {
        this.navCtrl.navigateForward('soypro-update-pro-data');
    };
    SoyproUpdateDataPage.prototype.goProfiles = function () {
        this.navCtrl.navigateForward('soypro-profiles');
    };
    SoyproUpdateDataPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-soypro-update-data',
            template: __webpack_require__(/*! ./soypro-update-data.page.html */ "./src/app/pages/soypro-update-data/soypro-update-data.page.html"),
            styles: [__webpack_require__(/*! ./soypro-update-data.page.scss */ "./src/app/pages/soypro-update-data/soypro-update-data.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], SoyproUpdateDataPage);
    return SoyproUpdateDataPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-soypro-update-data-soypro-update-data-module.js.map