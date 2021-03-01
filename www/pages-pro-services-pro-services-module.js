(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pro-services-pro-services-module"],{

/***/ "./src/app/pages/pro-services/pro-services.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/pro-services/pro-services.module.ts ***!
  \***********************************************************/
/*! exports provided: ProServicesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProServicesPageModule", function() { return ProServicesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pro_services_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pro-services.page */ "./src/app/pages/pro-services/pro-services.page.ts");







var routes = [
    {
        path: '',
        component: _pro_services_page__WEBPACK_IMPORTED_MODULE_6__["ProServicesPage"]
    }
];
var ProServicesPageModule = /** @class */ (function () {
    function ProServicesPageModule() {
    }
    ProServicesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_pro_services_page__WEBPACK_IMPORTED_MODULE_6__["ProServicesPage"]]
        })
    ], ProServicesPageModule);
    return ProServicesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/pro-services/pro-services.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/pro-services/pro-services.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"ios-arrow-back\" color=\"dark\"></ion-back-button>\n    </ion-buttons>\n    \n    <ion-title>Servicios</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid *ngIf=\"is_loading === true\" style=\"height: 100%; margin-bottom: 1rem\">\n    <ion-row justify-content-center align-items-center style=\"height: 100%\">\n      <ion-spinner name=\"bubbles\"></ion-spinner>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid *ngIf=\"is_loading === false\">\n    <ion-row>\n      <ion-col>\n        <ion-list>\n          <ion-card *ngFor=\"let item of list\" (click)=\"showOptions (item)\">\n            <ion-card-header>\n              <ion-card-title>\n                {{ item.service_name }}\n              </ion-card-title>\n            </ion-card-header>\n\n            <ion-card-content>\n              {{ item.description }}\n            </ion-card-content>\n          </ion-card>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color=\"dark\">\n    <ion-button expand=\"block\" fill=\"outline\" color=\"light\" (click)=\"addService ()\">\n      Agregar un nuevo servicio\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/pages/pro-services/pro-services.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/pro-services/pro-services.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byby1zZXJ2aWNlcy9wcm8tc2VydmljZXMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/pro-services/pro-services.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/pro-services/pro-services.page.ts ***!
  \*********************************************************/
/*! exports provided: ProServicesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProServicesPage", function() { return ProServicesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _animations_enter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../animations/enter */ "./src/app/animations/enter.ts");
/* harmony import */ var _animations_leave__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../animations/leave */ "./src/app/animations/leave.ts");
/* harmony import */ var _modals_service_edit_service_edit_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modals/service-edit/service-edit.page */ "./src/app/modals/service-edit/service-edit.page.ts");


// Ionic

// Services


// Animations


// Pages

var ProServicesPage = /** @class */ (function () {
    function ProServicesPage(database, actionSheetController, loadingController, modalCtrl, alertController, navCtrl, storage) {
        this.database = database;
        this.actionSheetController = actionSheetController;
        this.loadingController = loadingController;
        this.modalCtrl = modalCtrl;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.is_loading = true;
        this.user_id = "";
    }
    ProServicesPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.getValue('user_uid').then(function (id) {
            _this.user_id = id;
            _this.database.getServicesByPro(id).subscribe(function (response) {
                console.log(response);
                _this.list = response;
                _this.is_loading = false;
            }, function (error) {
                _this.is_loading = false;
                console.log('getServicesByPro', error);
            });
        });
    };
    ProServicesPage.prototype.showOptions = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Albums',
                            buttons: [{
                                    text: 'Ver',
                                    handler: function () {
                                        _this.seeDetail(item);
                                    }
                                }, {
                                    text: 'Editar',
                                    handler: function () {
                                        _this.editService(item);
                                    }
                                }, {
                                    text: 'Eliminar',
                                    role: 'destructive',
                                    handler: function () {
                                        _this.deleteConfirm(item);
                                    }
                                }, {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProServicesPage.prototype.addService = function () {
        this.navCtrl.navigateForward('select-categories/add');
    };
    ProServicesPage.prototype.seeDetail = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: item.service_name,
                            subHeader: 'Cobra entre ' + item.max_price + ' y ' + item.min_price + ' soles por ' + item.type_job + '.',
                            message: item.description,
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProServicesPage.prototype.deleteConfirm = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirm!',
                            message: 'Message <strong>text</strong>!!!',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Okay',
                                    handler: function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                        var loading;
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
                                                    this.database.removeProService(this.user_id, item)
                                                        .then(function () {
                                                        loading.dismiss();
                                                    }).catch(function (error) {
                                                        loading.dismiss();
                                                        console.log('removeProService', error);
                                                    });
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProServicesPage.prototype.editService = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _modals_service_edit_service_edit_page__WEBPACK_IMPORTED_MODULE_7__["ServiceEditPage"],
                            componentProps: item,
                            mode: 'ios',
                            enterAnimation: _animations_enter__WEBPACK_IMPORTED_MODULE_5__["myEnterAnimation"],
                            leaveAnimation: _animations_leave__WEBPACK_IMPORTED_MODULE_6__["myLeaveAnimation"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProServicesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pro-services',
            template: __webpack_require__(/*! ./pro-services.page.html */ "./src/app/pages/pro-services/pro-services.page.html"),
            styles: [__webpack_require__(/*! ./pro-services.page.scss */ "./src/app/pages/pro-services/pro-services.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]])
    ], ProServicesPage);
    return ProServicesPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-pro-services-pro-services-module.js.map