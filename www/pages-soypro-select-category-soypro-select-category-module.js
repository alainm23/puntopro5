(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-soypro-select-category-soypro-select-category-module"],{

/***/ "./src/app/pages/soypro-select-category/soypro-select-category.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/soypro-select-category/soypro-select-category.module.ts ***!
  \*******************************************************************************/
/*! exports provided: SoyproSelectCategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoyproSelectCategoryPageModule", function() { return SoyproSelectCategoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _soypro_select_category_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./soypro-select-category.page */ "./src/app/pages/soypro-select-category/soypro-select-category.page.ts");







var routes = [
    {
        path: '',
        component: _soypro_select_category_page__WEBPACK_IMPORTED_MODULE_6__["SoyproSelectCategoryPage"]
    }
];
var SoyproSelectCategoryPageModule = /** @class */ (function () {
    function SoyproSelectCategoryPageModule() {
    }
    SoyproSelectCategoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_soypro_select_category_page__WEBPACK_IMPORTED_MODULE_6__["SoyproSelectCategoryPage"]]
        })
    ], SoyproSelectCategoryPageModule);
    return SoyproSelectCategoryPageModule;
}());



/***/ }),

/***/ "./src/app/pages/soypro-select-category/soypro-select-category.page.html":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/soypro-select-category/soypro-select-category.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar mode=\"ios\" no-border>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"ios-arrow-back\" color=\"dark\"></ion-back-button>\n    </ion-buttons>\n    \n    <ion-title>\n      <img class=\"wordmark-size\" src=\"/assets/img/PuntoPro-wordmark.png\">\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item text-center lines=\"none\">\n    <ion-label>\n      <h2 text-wrap>CONFIGURANDO MIS SERVICIOS</h2>\n      <p text-wrap>Seleccione una <b>categoría</b> y <b>sub categoría</b> para empezar a trabajar</p>\n    </ion-label>\n  </ion-item>\n    \n  <ion-list>\n    <div *ngFor=\"let item of categories\" (click)=\"showSubCategories (item)\">\n      <ion-item>\n        <ion-icon class=\"transition margin-right-6px\" [ngStyle]=\"{'transform': item?.show_subcategories ? 'rotate(90deg)' : 'none' }\"name=\"arrow-dropright\"></ion-icon>\n        {{ item?.data.name }}\n      </ion-item>\n\n      <ion-list class=\"margin-left-24\" *ngIf=\"item?.show_subcategories\" [@animation-top]>\n        <ion-item *ngFor=\"let item of item?.SubCategories\" (click)=\"selectService (item?.dataGeneral)\">\n          <ion-icon class=\"margin-right-6px font-size-12\" name=\"radio-button-off\"></ion-icon>\n          {{ item?.dataGeneral.name }}\n        </ion-item>\n      </ion-list>\n    </div>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/soypro-select-category/soypro-select-category.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/soypro-select-category/soypro-select-category.page.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".margin-left-12 {\n  margin-left: 12px; }\n\n.card-white {\n  --background: #fff; }\n\n.transition {\n  transition: all 240ms ease-in-out; }\n\n.margin-right-6px {\n  margin-right: 6px; }\n\n.font-size-12 {\n  font-size: 12px; }\n\n.margin-left-24 {\n  margin-left: 24px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsYWluL1B1bnRvUHJvL1B1bnRvUHJvLUlvbmljNC9zcmMvYXBwL3BhZ2VzL3NveXByby1zZWxlY3QtY2F0ZWdvcnkvc295cHJvLXNlbGVjdC1jYXRlZ29yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxrQkFBYSxFQUFBOztBQUdqQjtFQUNJLGlDQUFpQyxFQUFBOztBQUdyQztFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NveXByby1zZWxlY3QtY2F0ZWdvcnkvc295cHJvLXNlbGVjdC1jYXRlZ29yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFyZ2luLWxlZnQtMTIge1xuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xufVxuXG4uY2FyZC13aGl0ZSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4udHJhbnNpdGlvbiB7XG4gICAgdHJhbnNpdGlvbjogYWxsIDI0MG1zIGVhc2UtaW4tb3V0O1xufVxuXG4ubWFyZ2luLXJpZ2h0LTZweCB7XG4gICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG59XG5cbi5mb250LXNpemUtMTIge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLm1hcmdpbi1sZWZ0LTI0IHtcbiAgICBtYXJnaW4tbGVmdDogMjRweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/soypro-select-category/soypro-select-category.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/soypro-select-category/soypro-select-category.page.ts ***!
  \*****************************************************************************/
/*! exports provided: SoyproSelectCategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoyproSelectCategoryPage", function() { return SoyproSelectCategoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");


// Param

// Ionic

// Services


// Animations

var SoyproSelectCategoryPage = /** @class */ (function () {
    function SoyproSelectCategoryPage(database, route, navCtrl, loadingController, storage) {
        this.database = database;
        this.route = route;
        this.navCtrl = navCtrl;
        this.loadingController = loadingController;
        this.storage = storage;
    }
    SoyproSelectCategoryPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
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
    SoyproSelectCategoryPage.prototype.showSubCategories = function (category) {
        category.show_subcategories = !category.show_subcategories;
    };
    SoyproSelectCategoryPage.prototype.selectService = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log(item);
                this.navCtrl.navigateForward('soypro-cfg-service/' + item.id + '/' + item.name);
                return [2 /*return*/];
            });
        });
    };
    SoyproSelectCategoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-soypro-select-category',
            template: __webpack_require__(/*! ./soypro-select-category.page.html */ "./src/app/pages/soypro-select-category/soypro-select-category.page.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('animation-top', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'translateY(-12%)', opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('154ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'translateY(0)', opacity: 1 }))]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'translateY(0)', opacity: 1 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('154ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'translateY(-12%)', opacity: 0 }))])
                ])
            ],
            styles: [__webpack_require__(/*! ./soypro-select-category.page.scss */ "./src/app/pages/soypro-select-category/soypro-select-category.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]])
    ], SoyproSelectCategoryPage);
    return SoyproSelectCategoryPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-soypro-select-category-soypro-select-category-module.js.map