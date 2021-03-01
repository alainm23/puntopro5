(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-soypro-cfg-service-soypro-cfg-service-module"],{

/***/ "./src/app/pages/soypro-cfg-service/soypro-cfg-service.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/soypro-cfg-service/soypro-cfg-service.module.ts ***!
  \***********************************************************************/
/*! exports provided: SoyproCfgServicePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoyproCfgServicePageModule", function() { return SoyproCfgServicePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _soypro_cfg_service_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./soypro-cfg-service.page */ "./src/app/pages/soypro-cfg-service/soypro-cfg-service.page.ts");







var routes = [
    {
        path: '',
        component: _soypro_cfg_service_page__WEBPACK_IMPORTED_MODULE_6__["SoyproCfgServicePage"]
    }
];
var SoyproCfgServicePageModule = /** @class */ (function () {
    function SoyproCfgServicePageModule() {
    }
    SoyproCfgServicePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_soypro_cfg_service_page__WEBPACK_IMPORTED_MODULE_6__["SoyproCfgServicePage"]]
        })
    ], SoyproCfgServicePageModule);
    return SoyproCfgServicePageModule;
}());



/***/ }),

/***/ "./src/app/pages/soypro-cfg-service/soypro-cfg-service.page.html":
/*!***********************************************************************!*\
  !*** ./src/app/pages/soypro-cfg-service/soypro-cfg-service.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar mode=\"ios\" no-border>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"ios-arrow-back\" color=\"dark\"></ion-back-button>\n    </ion-buttons>\n    \n    <ion-title>\n      <img class=\"wordmark-size\" src=\"/assets/img/PuntoPro-wordmark.png\">\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"form\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-item text-center lines=\"none\">\n            <ion-label>\n              <h2 text-wrap>CONFIGURANDO MIS SERVICIOS</h2>\n              <p text-wrap>Marca los servicios que brindas relacionados a</p>\n            </ion-label>\n          </ion-item>\n\n          <div text-center>\n            <ion-button size=\"small\" shape=\"round\" color=\"light\" (click)=\"goback ()\">\n              {{ name }}\n              <ion-icon slot=\"end\" name=\"close\"></ion-icon>\n            </ion-button>\n          </div>\n\n          <ion-list>\n            <ion-radio-group formControlName=\"service\">\n              <ion-item lines=\"none\" *ngFor=\"let item of services\">\n                <ion-label>{{ item.dataGeneral.name }}</ion-label>\n                <ion-radio color=\"dark\" slot=\"start\" [value]=\"item.dataGeneral\" checked></ion-radio>\n              </ion-item>   \n            </ion-radio-group> \n          </ion-list>\n\n          <ion-item>\n            <ion-label class=\"font-size-1rem\" position=\"stacked\">Descripcion <small> ({{ 300 - form.controls.description.value.length }})</small></ion-label>\n            <ion-textarea class=\"textarea-box\" maxlength=\"300\" rows=\"4\" placeholder=\"Cuenta libremente sobre los beneficios de su servicio…\" formControlName=\"description\"></ion-textarea>\n          </ion-item>\n\n          <ion-item>\n            <ion-label class=\"font-size-1rem\" position=\"stacked\">Precio</ion-label>\n            <ion-row>\n              <ion-col size=\"5\" class=\"no-padding-left\">\n                <ion-input type=\"number\" placeholder=\"Precio minimo S/.\" formControlName=\"min_price\"></ion-input>\n              </ion-col>\n\n              <ion-col size=\"2\" align-self-center>\n                <div text-center>\n                  —\n                </div>\n              </ion-col>\n\n              <ion-col size=\"5\">\n                <ion-input type=\"number\" placeholder=\"Precio maximo S/.\" formControlName=\"max_price\"></ion-input>\n              </ion-col>\n            </ion-row>\n          </ion-item>\n\n          <ion-item text-center lines=\"none\">\n            <ion-label>\n              <h6 class=\"nota-head\">Nota</h6>\n              <p text-wrap class=\"nota-body\">Este dato es para uso estadístico y no se va a mostrar al publico, le pedimos que sea honesto al poner el rango de precios ya que de este sale el promedio presentado en el tarifario.</p>\n            </ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n\n<ion-footer no-border>\n  <ion-toolbar no-border>\n    <ion-row>\n      <ion-col size=\"2\">\n        <ion-button expand=\"block\" color=\"green\" (click)=\"goback ()\">\n          <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n        </ion-button>\n      </ion-col>\n\n      <ion-col size=\"10\">\n        <ion-button expand=\"block\" color=\"green\" [disabled]=\"!form.valid\" (click)=\"submit ()\">\n          Adelante\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/pages/soypro-cfg-service/soypro-cfg-service.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/soypro-cfg-service/soypro-cfg-service.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textarea-box {\n  margin-top: 12px; }\n\n.textarea-box {\n  border: 1px solid #D1D1D1;\n  border-radius: 6px;\n  padding-left: 12px; }\n\n.font-size-1rem {\n  font-size: 1rem; }\n\n.no-padding-left {\n  padding-left: 0px; }\n\n.nota-head {\n  font-size: 12px;\n  font-weight: bold; }\n\n.nota-body {\n  font-size: 12px;\n  line-height: 14px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsYWluL1B1bnRvUHJvL1B1bnRvUHJvLUlvbmljNC9zcmMvYXBwL3BhZ2VzL3NveXByby1jZmctc2VydmljZS9zb3lwcm8tY2ZnLXNlcnZpY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0kseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksZUFBZTtFQUNmLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGVBQWU7RUFDZixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NveXByby1jZmctc2VydmljZS9zb3lwcm8tY2ZnLXNlcnZpY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHRhcmVhLWJveCB7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbn1cblxuLnRleHRhcmVhLWJveCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0QxRDFEMTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMnB4OyBcbn1cblxuLmZvbnQtc2l6ZS0xcmVtIHtcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbi5uby1wYWRkaW5nLWxlZnQge1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xufVxuLm5vdGEtaGVhZCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubm90YS1ib2R5IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/soypro-cfg-service/soypro-cfg-service.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/soypro-cfg-service/soypro-cfg-service.page.ts ***!
  \*********************************************************************/
/*! exports provided: SoyproCfgServicePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoyproCfgServicePage", function() { return SoyproCfgServicePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");


// Ionic

// Services


// Forms

// Param

var SoyproCfgServicePage = /** @class */ (function () {
    function SoyproCfgServicePage(route, loadingController, database, navCtrl, storage, alertController) {
        this.route = route;
        this.loadingController = loadingController;
        this.database = database;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.alertController = alertController;
    }
    SoyproCfgServicePage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.id = this.route.snapshot.paramMap.get('id');
                        this.name = this.route.snapshot.paramMap.get('name');
                        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
                            max_price: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
                            min_price: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
                            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
                            service: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
                            subcategory_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.id, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
                            subcategory_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
                        });
                        return [4 /*yield*/, this.loadingController.create({
                                message: 'Procesando Informacion ...'
                            })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.database.getServicesSubCategory(this.id).subscribe(function (response) {
                            loading.dismiss();
                            _this.services = response;
                            console.log(response);
                            if (response.length > 0) {
                                _this.form.controls['service'].setValue(response[0].dataGeneral);
                            }
                        }, function (error) {
                            loading.dismiss();
                            console.log('getServices error', error);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    SoyproCfgServicePage.prototype.goback = function () {
        this.navCtrl.navigateBack('soypro-select-category');
    };
    SoyproCfgServicePage.prototype.submit = function () {
        this.storage.setObject("soypro_service_config", this.form.value);
        this.navCtrl.navigateForward('soypro-select-plan');
    };
    SoyproCfgServicePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-soypro-cfg-service',
            template: __webpack_require__(/*! ./soypro-cfg-service.page.html */ "./src/app/pages/soypro-cfg-service/soypro-cfg-service.page.html"),
            styles: [__webpack_require__(/*! ./soypro-cfg-service.page.scss */ "./src/app/pages/soypro-cfg-service/soypro-cfg-service.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], SoyproCfgServicePage);
    return SoyproCfgServicePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-soypro-cfg-service-soypro-cfg-service-module.js.map