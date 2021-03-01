(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-soypro-soypro-module"],{

/***/ "./src/app/pages/soypro/soypro.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/soypro/soypro.module.ts ***!
  \***********************************************/
/*! exports provided: SoyproPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoyproPageModule", function() { return SoyproPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _soypro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./soypro.page */ "./src/app/pages/soypro/soypro.page.ts");







var routes = [
    {
        path: '',
        component: _soypro_page__WEBPACK_IMPORTED_MODULE_6__["SoyproPage"]
    }
];
var SoyproPageModule = /** @class */ (function () {
    function SoyproPageModule() {
    }
    SoyproPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_soypro_page__WEBPACK_IMPORTED_MODULE_6__["SoyproPage"]]
        })
    ], SoyproPageModule);
    return SoyproPageModule;
}());



/***/ }),

/***/ "./src/app/pages/soypro/soypro.page.html":
/*!***********************************************!*\
  !*** ./src/app/pages/soypro/soypro.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" color=\"dark\" (click)=\"goHome ()\">\n        <ion-icon slot=\"icon-only\" name=\"ios-arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title>Panel</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-card>\n          <ion-item lines=\"none\" (click)=\"goMessage ()\">\n            <ion-icon slot=\"start\" name=\"chatboxes\"></ion-icon>\n            Mensajes\n            <!--ion-badge slot=\"end\" color=\"danger\">2</ion-badge-->\n            <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\n          </ion-item>\n        </ion-card>\n      </ion-col>\n\n      <ion-col size=\"12\">\n        <ion-card>\n          <ion-item lines=\"none\" (click)=\"goRequestList ()\">\n            <ion-icon slot=\"start\" name=\"people\"></ion-icon>\n            Solicitudes abiertas\n            <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\n          </ion-item>\n        </ion-card>\n      </ion-col>\n\n      <ion-col size=\"12\">\n        <ion-card>\n          <ion-item lines=\"none\" (click)=\"goProRequestHistory ()\">\n            <ion-icon slot=\"start\" name=\"time\"></ion-icon>\n            Historial de trabajos\n            <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\n          </ion-item>\n        </ion-card>\n      </ion-col>\n\n      <ion-col size=\"12\">\n        <ion-card>\n          <ion-item lines=\"none\" (click)=\"goProServices ()\">\n            <ion-icon slot=\"start\" name=\"hammer\"></ion-icon>\n            Administrar servicios\n            <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\n          </ion-item>\n        </ion-card>\n      </ion-col>\n\n      <ion-col size=\"12\">\n        <ion-card>\n          <ion-item lines=\"none\" (click)=\"goProfileEdit ()\">\n            <ion-icon slot=\"start\" name=\"create\"></ion-icon>\n            Editar perfil\n            <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\n          </ion-item>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/soypro/soypro.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/soypro/soypro.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item-pro {\n  border-radius: 6px;\n  border: 1px solid #272727; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsYWluL1B1bnRvUHJvL1B1bnRvUHJvLUlvbmljNC9zcmMvYXBwL3BhZ2VzL3NveXByby9zb3lwcm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc295cHJvL3NveXByby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbS1wcm8ge1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyNzI3Mjc7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/soypro/soypro.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/soypro/soypro.page.ts ***!
  \*********************************************/
/*! exports provided: SoyproPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoyproPage", function() { return SoyproPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/database.service */ "./src/app/services/database.service.ts");


// Ionic

// Services


var SoyproPage = /** @class */ (function () {
    function SoyproPage(storage, database, navCtrl) {
        this.storage = storage;
        this.database = database;
        this.navCtrl = navCtrl;
    }
    SoyproPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.getObject('user_data').then(function (response) {
            _this.user_data = JSON.parse(response);
        });
    };
    SoyproPage.prototype.goMessage = function () {
        this.navCtrl.navigateForward('messages/pro');
    };
    SoyproPage.prototype.goHome = function () {
        this.navCtrl.navigateRoot('home');
    };
    SoyproPage.prototype.goRequestList = function () {
        this.navCtrl.navigateForward('request-list');
    };
    SoyproPage.prototype.goProRequestHistory = function () {
        this.navCtrl.navigateForward('pro-request-history');
    };
    SoyproPage.prototype.goProServices = function () {
        this.navCtrl.navigateForward('pro-services');
    };
    SoyproPage.prototype.goProfileEdit = function () {
        this.navCtrl.navigateForward('profile-edit');
    };
    SoyproPage.prototype.goEmergencyRequestList = function () {
        this.navCtrl.navigateForward('pro-emergency-request-list');
    };
    SoyproPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-soypro',
            template: __webpack_require__(/*! ./soypro.page.html */ "./src/app/pages/soypro/soypro.page.html"),
            styles: [__webpack_require__(/*! ./soypro.page.scss */ "./src/app/pages/soypro/soypro.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
            _services_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], SoyproPage);
    return SoyproPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-soypro-soypro-module.js.map