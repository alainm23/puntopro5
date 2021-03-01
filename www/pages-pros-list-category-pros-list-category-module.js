(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pros-list-category-pros-list-category-module"],{

/***/ "./src/app/pages/pros-list-category/pros-list-category.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/pros-list-category/pros-list-category.module.ts ***!
  \***********************************************************************/
/*! exports provided: ProsListCategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProsListCategoryPageModule", function() { return ProsListCategoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pros_list_category_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pros-list-category.page */ "./src/app/pages/pros-list-category/pros-list-category.page.ts");







var routes = [
    {
        path: '',
        component: _pros_list_category_page__WEBPACK_IMPORTED_MODULE_6__["ProsListCategoryPage"]
    }
];
var ProsListCategoryPageModule = /** @class */ (function () {
    function ProsListCategoryPageModule() {
    }
    ProsListCategoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_pros_list_category_page__WEBPACK_IMPORTED_MODULE_6__["ProsListCategoryPage"]]
        })
    ], ProsListCategoryPageModule);
    return ProsListCategoryPageModule;
}());



/***/ }),

/***/ "./src/app/pages/pros-list-category/pros-list-category.page.html":
/*!***********************************************************************!*\
  !*** ./src/app/pages/pros-list-category/pros-list-category.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons mode=\"md\" slot=\"start\">\n      <ion-back-button mode=\"md\" text=\"\" icon=\"ios-arrow-back\" color=\"dark\"></ion-back-button>\n    </ion-buttons>\n    \n    <ion-title>{{ subcategory_name }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid *ngIf=\"is_loading === true\" style=\"height: 100%; margin-bottom: 1rem\">\n    <ion-row justify-content-center align-items-center style=\"height: 100%\">\n      <ion-spinner name=\"bubbles\"></ion-spinner>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid *ngIf=\"is_loading === false\" style=\"height: 100%;\">\n    <ion-list *ngIf=\"pros_list.length > 0 === true\">\n      <div *ngFor=\"let item of pros_list\">\n        <ion-item>\n          <ion-avatar slot=\"start\" class=\"avatar\" (click)=\"goProfile (item?.dataGeneral)\">\n            <img [src]=\"item?.dataGeneral.avatar\"/>\n          </ion-avatar>\n          <ion-label (click)=\"goProfile (item?.dataGeneral)\">\n            <h2>{{ item?.dataGeneral.fullname }}</h2>\n            <h3>I'm a big deal</h3>\n            <!--p>Listen, I've had a pretty messed up day...</p-->\n          </ion-label>\n        </ion-item>\n      </div>\n    </ion-list>\n  \n    <ion-grid *ngIf=\"pros_list.length > 0 === false\" style=\"height: 100%; margin-bottom: 1rem\">\n      <ion-row justify-content-center align-items-center style=\"height: 100%\">\n        <ion-item text-center lines=\"none\">\n          <ion-label text-wrap>\n            <ion-text>\n              <h3>No hay resultados</h3>\n            </ion-text>\n            <p>Ningun resultado con \"{{ subcategory_name }}\". intenta algo distinto</p>\n          </ion-label>\n        </ion-item>\n      </ion-row>\n    </ion-grid>\n  </ion-grid>\n</ion-content>\n\n<ion-footer>\n  <ion-button expand=\"block\" color=\"dark\" fill=\"outline\" (click)=\"requestPros ()\">\n    Hacer un cotizacion\n  </ion-button>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/pros-list-category/pros-list-category.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/pros-list-category/pros-list-category.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb3MtbGlzdC1jYXRlZ29yeS9wcm9zLWxpc3QtY2F0ZWdvcnkucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/pros-list-category/pros-list-category.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/pros-list-category/pros-list-category.page.ts ***!
  \*********************************************************************/
/*! exports provided: ProsListCategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProsListCategoryPage", function() { return ProsListCategoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _animations_enter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../animations/enter */ "./src/app/animations/enter.ts");
/* harmony import */ var _animations_leave__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../animations/leave */ "./src/app/animations/leave.ts");
/* harmony import */ var _modals_request_pro_request_pro_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../modals/request-pro/request-pro.page */ "./src/app/modals/request-pro/request-pro.page.ts");
/* harmony import */ var _modals_profile_profile_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../modals/profile/profile.page */ "./src/app/modals/profile/profile.page.ts");
/* harmony import */ var _modals_chat_chat_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../modals/chat/chat.page */ "./src/app/modals/chat/chat.page.ts");


// Services


// Param

// Ionic

// Geolocation

// Animations


// Modal Page



var ProsListCategoryPage = /** @class */ (function () {
    function ProsListCategoryPage(route, database, navCtrl, modalCtrl, geolocation, storage) {
        this.route = route;
        this.database = database;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.geolocation = geolocation;
        this.storage = storage;
        this.is_loading = true;
    }
    ProsListCategoryPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.subcategory_id = this.route.snapshot.paramMap.get('subcategory_id');
                        this.subcategory_name = this.route.snapshot.paramMap.get('subcategory_name');
                        return [4 /*yield*/, this.database.getProsBySubCategory(this.subcategory_id).subscribe(function (response) {
                                _this.pros_list = response;
                                _this.is_loading = false;
                                console.log(response);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProsListCategoryPage.prototype.goProfile = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var parms, modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        parms = {
                            profile_id: item.id,
                            to_confirm: false
                        };
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _modals_profile_profile_page__WEBPACK_IMPORTED_MODULE_10__["ProfilePage"],
                                componentProps: parms,
                                mode: 'ios',
                                enterAnimation: _animations_enter__WEBPACK_IMPORTED_MODULE_7__["myEnterAnimation"],
                                leaveAnimation: _animations_leave__WEBPACK_IMPORTED_MODULE_8__["myLeaveAnimation"]
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (response) {
                            if (response.role == 'response') {
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProsListCategoryPage.prototype.requestPros = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.geolocation.getCurrentPosition().then(function (resp) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var parms, modal;
                    var _this = this;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                parms = {
                                    address: '',
                                    latitude: resp.coords.latitude,
                                    longitude: resp.coords.longitude,
                                    subcategory_id: this.subcategory_id,
                                    is_edit: false
                                };
                                console.log(parms);
                                return [4 /*yield*/, this.modalCtrl.create({
                                        component: _modals_request_pro_request_pro_page__WEBPACK_IMPORTED_MODULE_9__["RequestProPage"],
                                        componentProps: parms,
                                        mode: 'ios',
                                        enterAnimation: _animations_enter__WEBPACK_IMPORTED_MODULE_7__["myEnterAnimation"],
                                        leaveAnimation: _animations_leave__WEBPACK_IMPORTED_MODULE_8__["myLeaveAnimation"]
                                    })];
                            case 1:
                                modal = _a.sent();
                                modal.onDidDismiss().then(function (response) {
                                    if (response.role === 'response') {
                                        _this.navCtrl.navigateForward('request-view/' + response.data);
                                    }
                                });
                                return [4 /*yield*/, modal.present()];
                            case 2:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); }).catch(function (error) {
                    console.log('Error getting location' + error);
                });
                return [2 /*return*/];
            });
        });
    };
    ProsListCategoryPage.prototype.connectPro = function (profile) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.storage.getValue('user_uid').then(function (user_id) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var parms, modal;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                parms = {
                                    type: 'user',
                                    sender: user_id,
                                    receiver: profile.id,
                                    _chat_id: ''
                                };
                                return [4 /*yield*/, this.modalCtrl.create({
                                        component: _modals_chat_chat_page__WEBPACK_IMPORTED_MODULE_11__["ChatPage"],
                                        componentProps: parms,
                                        mode: 'ios',
                                        enterAnimation: _animations_enter__WEBPACK_IMPORTED_MODULE_7__["myEnterAnimation"],
                                        leaveAnimation: _animations_leave__WEBPACK_IMPORTED_MODULE_8__["myLeaveAnimation"]
                                    })];
                            case 1:
                                modal = _a.sent();
                                return [4 /*yield*/, modal.present()];
                            case 2: return [2 /*return*/, _a.sent()];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    ProsListCategoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pros-list-category',
            template: __webpack_require__(/*! ./pros-list-category.page.html */ "./src/app/pages/pros-list-category/pros-list-category.page.html"),
            styles: [__webpack_require__(/*! ./pros-list-category.page.scss */ "./src/app/pages/pros-list-category/pros-list-category.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"],
            _services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]])
    ], ProsListCategoryPage);
    return ProsListCategoryPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-pros-list-category-pros-list-category-module.js.map