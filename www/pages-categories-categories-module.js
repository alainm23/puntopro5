(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-categories-categories-module"],{

/***/ "./src/app/pages/categories/categories.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/categories/categories.module.ts ***!
  \*******************************************************/
/*! exports provided: CategoriesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPageModule", function() { return CategoriesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _categories_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categories.page */ "./src/app/pages/categories/categories.page.ts");







var routes = [
    {
        path: '',
        component: _categories_page__WEBPACK_IMPORTED_MODULE_6__["CategoriesPage"]
    }
];
var CategoriesPageModule = /** @class */ (function () {
    function CategoriesPageModule() {
    }
    CategoriesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_categories_page__WEBPACK_IMPORTED_MODULE_6__["CategoriesPage"]]
        })
    ], CategoriesPageModule);
    return CategoriesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/categories/categories.page.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/categories/categories.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"ios-arrow-back\" color=\"dark\"></ion-back-button>\n    </ion-buttons>\n    \n    <ion-title>categories</ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"chagedView ()\">\n        Lista\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!--ion-grid *ngIf=\"view_type === 'card'\">\n    <ion-row>\n      <ion-col *ngFor=\"let item of items\">\n        <ion-card (click)=\"selectEs (item)\">\n          <img src=\"https://picsum.photos/300/300\">\n          <ion-item text-center no-lines>\n            <ion-label>\n              {{ item?.data.name }}\n            </ion-label>\n          </ion-item>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid *ngIf=\"view_type === 'list'\">\n    <ion-row>\n      <ion-col>\n        <ion-list>\n          <div *ngFor=\"let item of items\">\n            <ion-item (click)=\"visibleSubC (item)\">\n              <ion-icon class=\"icon-margin\" slot=\"start\" name=\"arrow-dropright\"></ion-icon>\n              {{ item?.data.name }}\n            </ion-item>\n\n            <ion-list class=\"sub-categories\" *ngIf=\"item.show_subcategories\">\n              <ion-item *ngFor=\"let sub of item?.SubCategories\" (click)=\"goProList (sub?.dataGeneral)\">\n                <ion-icon class=\"icon-margin\" slot=\"start\" name=\"arrow-dropright\"></ion-icon>\n                {{ sub?.dataGeneral.name }}\n              </ion-item>\n            </ion-list>\n          </div>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid-->\n\n  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/categories/categories.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/categories/categories.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sub-categories {\n  margin-left: 1rem; }\n\n.icon-margin {\n  margin-right: 1rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsYWluL1B1bnRvUHJvL1B1bnRvUHJvLUlvbmljNC9zcmMvYXBwL3BhZ2VzL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3ViLWNhdGVnb3JpZXMge1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG4uaWNvbi1tYXJnaW4ge1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/categories/categories.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/categories/categories.page.ts ***!
  \*****************************************************/
/*! exports provided: CategoriesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPage", function() { return CategoriesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");


// Services

// Ionic

var CategoriesPage = /** @class */ (function () {
    function CategoriesPage(database, alertController, navCtrl) {
        this.database = database;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.view_type = "list";
    }
    CategoriesPage.prototype.ngOnInit = function () {
        var _this = this;
        this.database.getCategories().subscribe(function (response) {
            _this.items = response;
            console.log(response);
        });
    };
    CategoriesPage.prototype.chagedView = function () {
        if (this.view_type === 'list') {
            this.view_type = 'card';
        }
        else {
            this.view_type = 'list';
        }
    };
    CategoriesPage.prototype.visibleSubC = function (item) {
        item.show_subcategories = !item.show_subcategories;
    };
    CategoriesPage.prototype.selectEs = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var items, _i, _a, e, i, alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log(item);
                        items = [];
                        for (_i = 0, _a = item.SubCategories; _i < _a.length; _i++) {
                            e = _a[_i];
                            console.log(e);
                            i = {
                                name: e.dataGeneral.name,
                                type: 'radio',
                                label: e.dataGeneral.name,
                                value: e.dataGeneral,
                                checked: false
                            };
                            items.push(i);
                        }
                        console.log(items);
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Prompt!',
                                inputs: items,
                                buttons: [
                                    {
                                        text: 'Cancel',
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function () {
                                            console.log('Confirm Cancel');
                                        }
                                    }, {
                                        text: 'Ok',
                                        handler: function (data) {
                                            _this.goProList(data);
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alert = _b.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CategoriesPage.prototype.goProList = function (item) {
        console.log(item);
        this.navCtrl.navigateForward('pros-list-category/' + item.id + '/' + item.name);
    };
    CategoriesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__(/*! ./categories.page.html */ "./src/app/pages/categories/categories.page.html"),
            styles: [__webpack_require__(/*! ./categories.page.scss */ "./src/app/pages/categories/categories.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], CategoriesPage);
    return CategoriesPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-categories-categories-module.js.map