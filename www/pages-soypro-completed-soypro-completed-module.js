(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-soypro-completed-soypro-completed-module"],{

/***/ "./src/app/pages/soypro-completed/soypro-completed.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/soypro-completed/soypro-completed.module.ts ***!
  \*******************************************************************/
/*! exports provided: SoyproCompletedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoyproCompletedPageModule", function() { return SoyproCompletedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _soypro_completed_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./soypro-completed.page */ "./src/app/pages/soypro-completed/soypro-completed.page.ts");







var routes = [
    {
        path: '',
        component: _soypro_completed_page__WEBPACK_IMPORTED_MODULE_6__["SoyproCompletedPage"]
    }
];
var SoyproCompletedPageModule = /** @class */ (function () {
    function SoyproCompletedPageModule() {
    }
    SoyproCompletedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_soypro_completed_page__WEBPACK_IMPORTED_MODULE_6__["SoyproCompletedPage"]]
        })
    ], SoyproCompletedPageModule);
    return SoyproCompletedPageModule;
}());



/***/ }),

/***/ "./src/app/pages/soypro-completed/soypro-completed.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/soypro-completed/soypro-completed.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content classs=\"image-background\">\n  <ion-grid style=\"height: 100%\"  no-padding no-margin>\n    <ion-row style=\"height: 100%\" no-padding no-margin>\n      <ion-col style=\"height: 100%\" no-padding no-margin>\n        <div text-center padding-top class=\"center\">\n          <img class=\"img-size\" padding src=\"/assets/img/SoyPro.svg\">\n        </div>\n        \n        <ion-item text-center lines=\"none\" class=\"valign-center\">\n          <ion-label>\n            <h1>¡Felicitaciones!</h1>\n            <h2 class=\"font-bold\">YA ERES PRO</h2>\n          </ion-label>\n        </ion-item>\n        <!-->h2 class=\"text-violet\">Felicitaciones, ya eres Pro</h2>\n    \n        <img class=\"img-size\" padding-top src=\"/assets/img/slide_02.svg\">\n\n        <ion-button color=\"violet\" margin-top (click)=\"goSoyProPage ()\">\n          Adelante a trabajar\n          <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\n        </ion-button-->\n        <div text-center class=\"position-bottom\">\n          <ion-card (click)=\"goSoyProPage ()\" no-padding no-margin>\n            <ion-item lines=\"none\" text-center>\n              <ion-label>\n                ¡A trabajar!\n              </ion-label>\n            </ion-item>\n          </ion-card>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/soypro-completed/soypro-completed.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/soypro-completed/soypro-completed.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: none;\n  background-image: url(\"/assets/img/soypro-completed.png\");\n  background-position: center bottom;\n  background-repeat: no-repeat;\n  background-size: contain; }\n\n.position-bottom {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  padding: 3rem; }\n\n.position-top {\n  position: fixed;\n  top: 0;\n  width: 100%; }\n\n.padding-left-right {\n  padding-left: 1rem;\n  padding-right: 1rem;\n  margin-bottom: 0px; }\n\n.center {\n  margin: 0 auto; }\n\n.panel-pro-card {\n  width: 100%; }\n\n.font-bold {\n  font-weight: bold; }\n\n.valign-center {\n  position: fixed;\n  top: 30%;\n  margin: 0 atu;\n  margin: 0 auto;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsYWluL1B1bnRvUHJvL1B1bnRvUHJvLUlvbmljNC9zcmMvYXBwL3BhZ2VzL3NveXByby1jb21wbGV0ZWQvc295cHJvLWNvbXBsZXRlZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBYTtFQUNiLHlEQUF5RDtFQUN6RCxrQ0FBa0M7RUFDbEMsNEJBQTRCO0VBQzVCLHdCQUF3QixFQUFBOztBQUc1QjtFQUNJLGVBQWU7RUFDZixTQUFTO0VBQ1QsV0FBVztFQUNYLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksY0FBYyxFQUFBOztBQUdsQjtFQUNJLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGVBQWU7RUFDZixRQUFRO0VBQ1IsYUFBYTtFQUNiLGNBQWM7RUFDZCxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zb3lwcm8tY29tcGxldGVkL3NveXByby1jb21wbGV0ZWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1nL3NveXByby1jb21wbGV0ZWQucG5nJyk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGJvdHRvbTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cblxuLnBvc2l0aW9uLWJvdHRvbSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAzcmVtO1xufVxuXG4ucG9zaXRpb24tdG9wIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ucGFkZGluZy1sZWZ0LXJpZ2h0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5jZW50ZXIge1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ucGFuZWwtcHJvLWNhcmQge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uZm9udC1ib2xkIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnZhbGlnbi1jZW50ZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDMwJTtcbiAgICBtYXJnaW46IDAgYXR1O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/soypro-completed/soypro-completed.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/soypro-completed/soypro-completed.page.ts ***!
  \*****************************************************************/
/*! exports provided: SoyproCompletedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoyproCompletedPage", function() { return SoyproCompletedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");


// Ionic

var SoyproCompletedPage = /** @class */ (function () {
    function SoyproCompletedPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SoyproCompletedPage.prototype.ngOnInit = function () {
    };
    SoyproCompletedPage.prototype.goSoyProPage = function () {
        this.navCtrl.navigateRoot("soypro-panel");
    };
    SoyproCompletedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-soypro-completed',
            template: __webpack_require__(/*! ./soypro-completed.page.html */ "./src/app/pages/soypro-completed/soypro-completed.page.html"),
            styles: [__webpack_require__(/*! ./soypro-completed.page.scss */ "./src/app/pages/soypro-completed/soypro-completed.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], SoyproCompletedPage);
    return SoyproCompletedPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-soypro-completed-soypro-completed-module.js.map