(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pro-favorites-pro-favorites-module"],{

/***/ "./src/app/pages/pro-favorites/pro-favorites.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/pro-favorites/pro-favorites.module.ts ***!
  \*************************************************************/
/*! exports provided: ProFavoritesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProFavoritesPageModule", function() { return ProFavoritesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pro_favorites_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pro-favorites.page */ "./src/app/pages/pro-favorites/pro-favorites.page.ts");







var routes = [
    {
        path: '',
        component: _pro_favorites_page__WEBPACK_IMPORTED_MODULE_6__["ProFavoritesPage"]
    }
];
var ProFavoritesPageModule = /** @class */ (function () {
    function ProFavoritesPageModule() {
    }
    ProFavoritesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_pro_favorites_page__WEBPACK_IMPORTED_MODULE_6__["ProFavoritesPage"]]
        })
    ], ProFavoritesPageModule);
    return ProFavoritesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/pro-favorites/pro-favorites.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/pro-favorites/pro-favorites.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"secondary\"></ion-menu-button>\n    </ion-buttons>\n\n    <ion-title>\n      <img class=\"wordmark-size\" src=\"/assets/img/PuntoPro-wordmark.png\">\n    </ion-title>\n    \n    <ion-buttons slot=\"end\">\n      <ion-button class=\"no-transform\" color=\"violet\">\n        Panel Pro >\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid *ngIf=\"is_loading === true\" style=\"height: 100%; margin-bottom: 1rem\">\n    <ion-row justify-content-center align-items-center style=\"height: 100%\">\n      <ion-spinner name=\"bubbles\"></ion-spinner>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid *ngIf=\"is_loading === false\">\n    <ion-row>\n      <ion-col>\n        <ion-item text-center lines=\"none\">\n          <ion-label>\n            <h1><b>Mis favoritos</b></h1>\n          </ion-label>\n        </ion-item>\n        <ion-list *ngIf=\"list.length > 0 === true\">\n          <div *ngFor=\"let item of list\">\n            <ion-item>\n              <ion-avatar slot=\"start\" class=\"avatar\" (click)=\"goProfile (item?.dataGeneral)\">\n                <img [src]=\"item?.dataGeneral.avatar\"/>\n              </ion-avatar>\n              <ion-label (click)=\"goProfile (item?.dataGeneral)\">\n                <h2><b>{{ item?.dataGeneral.fullname }}</b></h2>\n                <h3>Diseñador web</h3>\n                <p>12.11. 2018 09:23</p>\n              </ion-label>\n\n              <ion-button slot=\"end\" fill=\"clear\" color=\"dark\">\n                <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n              </ion-button>\n            </ion-item>\n          </div>\n        </ion-list>\n    \n        <ion-grid *ngIf=\"list.length > 0 === false\">\n          <ion-row center>\n            <ion-col>\n              <h1>Ningun Favorito</h1>\n              <h4>...</h4>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/pro-favorites/pro-favorites.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/pro-favorites/pro-favorites.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byby1mYXZvcml0ZXMvcHJvLWZhdm9yaXRlcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/pro-favorites/pro-favorites.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/pro-favorites/pro-favorites.page.ts ***!
  \***********************************************************/
/*! exports provided: ProFavoritesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProFavoritesPage", function() { return ProFavoritesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _animations_enter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../animations/enter */ "./src/app/animations/enter.ts");
/* harmony import */ var _animations_leave__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../animations/leave */ "./src/app/animations/leave.ts");
/* harmony import */ var _modals_profile_profile_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modals/profile/profile.page */ "./src/app/modals/profile/profile.page.ts");


// Services


// Ionic

// Animations



var ProFavoritesPage = /** @class */ (function () {
    function ProFavoritesPage(database, storage, modalCtrl) {
        this.database = database;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.is_loading = true;
    }
    ProFavoritesPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.getValue('user_uid').then(function (user_uid) {
            _this.database.getFavoritesByUser(user_uid).subscribe(function (response) {
                console.log(response);
                _this.list = response;
                _this.is_loading = false;
            });
        });
    };
    ProFavoritesPage.prototype.goProfile = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var parms, modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        parms = {
                            profile_id: item.id,
                            address: '',
                            latitude: '',
                            longitude: '',
                            subcategory_id: '',
                        };
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _modals_profile_profile_page__WEBPACK_IMPORTED_MODULE_7__["ProfilePage"],
                                componentProps: parms,
                                mode: 'ios',
                                enterAnimation: _animations_enter__WEBPACK_IMPORTED_MODULE_5__["myEnterAnimation"],
                                leaveAnimation: _animations_leave__WEBPACK_IMPORTED_MODULE_6__["myLeaveAnimation"]
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (response) {
                            if (response.role == 'location') {
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProFavoritesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pro-favorites',
            template: __webpack_require__(/*! ./pro-favorites.page.html */ "./src/app/pages/pro-favorites/pro-favorites.page.html"),
            styles: [__webpack_require__(/*! ./pro-favorites.page.scss */ "./src/app/pages/pro-favorites/pro-favorites.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"],
            _services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
    ], ProFavoritesPage);
    return ProFavoritesPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-pro-favorites-pro-favorites-module.js.map