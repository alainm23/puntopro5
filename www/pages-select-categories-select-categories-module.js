(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-select-categories-select-categories-module"],{

/***/ "./src/app/pages/select-categories/select-categories.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/select-categories/select-categories.module.ts ***!
  \*********************************************************************/
/*! exports provided: SelectCategoriesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectCategoriesPageModule", function() { return SelectCategoriesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _select_categories_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select-categories.page */ "./src/app/pages/select-categories/select-categories.page.ts");







var routes = [
    {
        path: '',
        component: _select_categories_page__WEBPACK_IMPORTED_MODULE_6__["SelectCategoriesPage"]
    }
];
var SelectCategoriesPageModule = /** @class */ (function () {
    function SelectCategoriesPageModule() {
    }
    SelectCategoriesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_select_categories_page__WEBPACK_IMPORTED_MODULE_6__["SelectCategoriesPage"]]
        })
    ], SelectCategoriesPageModule);
    return SelectCategoriesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/select-categories/select-categories.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/select-categories/select-categories.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar mode=\"ios\" no-border>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"ios-arrow-back\" color=\"dark\"></ion-back-button>\n    </ion-buttons>\n    \n    <ion-title>\n      <img class=\"wordmark-size\" src=\"/assets/img/PuntoPro-wordmark.png\">\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item text-center lines=\"none\">\n    <ion-label>\n      <h2 text-wrap>CONFIGURANDO MIS SERVICIOS</h2>\n      <p text-wrap>Seleccione una <b>categoría</b> y <b>sub categoría</b> para empezar a trabajar</p>\n    </ion-label>\n  </ion-item>\n    \n  <ion-list>\n    <div *ngFor=\"let item of categories\" (click)=\"showSubCategories (item)\">\n      <ion-item>\n        <ion-icon class=\"transition margin-right-6px\" [ngStyle]=\"{'transform': item?.show_subcategories ? 'rotate(90deg)' : 'none' }\"name=\"arrow-dropright\"></ion-icon>\n        {{ item?.data.name }}\n      </ion-item>\n\n      <ion-list class=\"margin-left-24\" *ngIf=\"item?.show_subcategories\" [@animation-top]>\n        <ion-item *ngFor=\"let item of item?.SubCategories\" (click)=\"selectService (item?.dataGeneral)\">\n          <ion-icon class=\"margin-right-6px font-size-12\" name=\"radio-button-off\"></ion-icon>\n          {{ item?.dataGeneral.name }}\n        </ion-item>\n      </ion-list>\n    </div>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/select-categories/select-categories.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/select-categories/select-categories.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".margin-left-12 {\n  margin-left: 12px; }\n\n.card-white {\n  --background: #fff; }\n\n.transition {\n  transition: all 240ms ease-in-out; }\n\n.margin-right-6px {\n  margin-right: 6px; }\n\n.font-size-12 {\n  font-size: 12px; }\n\n.margin-left-24 {\n  margin-left: 24px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsYWluL1B1bnRvUHJvL1B1bnRvUHJvLUlvbmljNC9zcmMvYXBwL3BhZ2VzL3NlbGVjdC1jYXRlZ29yaWVzL3NlbGVjdC1jYXRlZ29yaWVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGtCQUFhLEVBQUE7O0FBR2Y7RUFDRSxpQ0FBaUMsRUFBQTs7QUFHbkM7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZWxlY3QtY2F0ZWdvcmllcy9zZWxlY3QtY2F0ZWdvcmllcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFyZ2luLWxlZnQtMTIge1xuICBtYXJnaW4tbGVmdDogMTJweDtcbn1cblxuLmNhcmQtd2hpdGUge1xuICAtLWJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi50cmFuc2l0aW9uIHtcbiAgdHJhbnNpdGlvbjogYWxsIDI0MG1zIGVhc2UtaW4tb3V0O1xufVxuXG4ubWFyZ2luLXJpZ2h0LTZweCB7XG4gIG1hcmdpbi1yaWdodDogNnB4O1xufVxuXG4uZm9udC1zaXplLTEyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ubWFyZ2luLWxlZnQtMjQge1xuICBtYXJnaW4tbGVmdDogMjRweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/select-categories/select-categories.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/select-categories/select-categories.page.ts ***!
  \*******************************************************************/
/*! exports provided: SelectCategoriesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectCategoriesPage", function() { return SelectCategoriesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _modals_select_service_select_service_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../modals/select-service/select-service.page */ "./src/app/modals/select-service/select-service.page.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");


// Param

// Ionic

// Services


// Modals

// Animations

var SelectCategoriesPage = /** @class */ (function () {
    function SelectCategoriesPage(database, route, navCtrl, modalController, loadingController, storage) {
        this.database = database;
        this.route = route;
        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.storage = storage;
        this.type = "";
    }
    SelectCategoriesPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.type = this.route.snapshot.paramMap.get('type');
                        return [4 /*yield*/, this.loadingController.create({
                                message: 'Procesando Informacion ...'
                            })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.database.getCategories().subscribe(function (response) {
                            console.log(response);
                            loading.dismiss();
                            _this.categories = response;
                        }, function (error) {
                            loading.dismiss();
                            console.log('Get categories error, ', error);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    SelectCategoriesPage.prototype.showSubCategories = function (category) {
        category.show_subcategories = !category.show_subcategories;
    };
    SelectCategoriesPage.prototype.selectService = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _modals_select_service_select_service_page__WEBPACK_IMPORTED_MODULE_6__["SelectServicePage"],
                            componentProps: { id: item }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (response) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var loading_1;
                            var _this = this;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(response.data !== null)) return [3 /*break*/, 4];
                                        if (!(this.type === 'first')) return [3 /*break*/, 1];
                                        console.log('Service Cfg', response.data);
                                        this.storage.setObject("soypro_service_config", response.data);
                                        this.navCtrl.navigateForward('service-first-image');
                                        return [3 /*break*/, 4];
                                    case 1: return [4 /*yield*/, this.loadingController.create({
                                            message: 'Procesando Informacion ...'
                                        })];
                                    case 2:
                                        loading_1 = _a.sent();
                                        return [4 /*yield*/, loading_1.present()];
                                    case 3:
                                        _a.sent();
                                        this.storage.getValue('user_uid').then(function (id) {
                                            _this.database.addProService(id, response.data)
                                                .then(function () {
                                                loading_1.dismiss();
                                                _this.navCtrl.navigateBack('pro-services');
                                                console.log('Estos datos para agregar', response.data);
                                            })
                                                .catch(function (error) {
                                                console.log('Error', error);
                                            });
                                        });
                                        _a.label = 4;
                                    case 4: return [2 /*return*/];
                                }
                            });
                        }); });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SelectCategoriesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-select-categories',
            template: __webpack_require__(/*! ./select-categories.page.html */ "./src/app/pages/select-categories/select-categories.page.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('animation-top', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ transform: 'translateY(-12%)', opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('154ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ transform: 'translateY(0)', opacity: 1 }))]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ transform: 'translateY(0)', opacity: 1 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('154ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ transform: 'translateY(-12%)', opacity: 0 }))])
                ])
            ],
            styles: [__webpack_require__(/*! ./select-categories.page.scss */ "./src/app/pages/select-categories/select-categories.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]])
    ], SelectCategoriesPage);
    return SelectCategoriesPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-select-categories-select-categories-module.js.map