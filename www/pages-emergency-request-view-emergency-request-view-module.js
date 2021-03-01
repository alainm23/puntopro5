(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-emergency-request-view-emergency-request-view-module"],{

/***/ "./src/app/pages/emergency-request-view/emergency-request-view.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/emergency-request-view/emergency-request-view.module.ts ***!
  \*******************************************************************************/
/*! exports provided: EmergencyRequestViewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmergencyRequestViewPageModule", function() { return EmergencyRequestViewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _emergency_request_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./emergency-request-view.page */ "./src/app/pages/emergency-request-view/emergency-request-view.page.ts");







var routes = [
    {
        path: '',
        component: _emergency_request_view_page__WEBPACK_IMPORTED_MODULE_6__["EmergencyRequestViewPage"]
    }
];
var EmergencyRequestViewPageModule = /** @class */ (function () {
    function EmergencyRequestViewPageModule() {
    }
    EmergencyRequestViewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_emergency_request_view_page__WEBPACK_IMPORTED_MODULE_6__["EmergencyRequestViewPage"]]
        })
    ], EmergencyRequestViewPageModule);
    return EmergencyRequestViewPageModule;
}());



/***/ }),

/***/ "./src/app/pages/emergency-request-view/emergency-request-view.page.html":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/emergency-request-view/emergency-request-view.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"ios-arrow-back\" color=\"dark\"></ion-back-button>\n    </ion-buttons>\n      \n    <ion-title>{{ request?.subcategory_name }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n\n  </ion-card>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-button expand=\"block\" color=\"orange\" (click)=\"postular ()\">\n      Postular\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/pages/emergency-request-view/emergency-request-view.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/emergency-request-view/emergency-request-view.page.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VtZXJnZW5jeS1yZXF1ZXN0LXZpZXcvZW1lcmdlbmN5LXJlcXVlc3Qtdmlldy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/emergency-request-view/emergency-request-view.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/emergency-request-view/emergency-request-view.page.ts ***!
  \*****************************************************************************/
/*! exports provided: EmergencyRequestViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmergencyRequestViewPage", function() { return EmergencyRequestViewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");


// Param

// Ionic

// Services


// Geolocation

var EmergencyRequestViewPage = /** @class */ (function () {
    function EmergencyRequestViewPage(route, database, loadingController, alertController, geolocation, storage) {
        this.route = route;
        this.database = database;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.geolocation = geolocation;
        this.storage = storage;
    }
    EmergencyRequestViewPage.prototype.ngOnInit = function () {
        var _this = this;
        this.request_id = this.route.snapshot.paramMap.get('request_id');
        this.database.getEmergencyRequestById(this.request_id).subscribe(function (response) {
            console.log(response);
            _this.request = response;
        });
    };
    EmergencyRequestViewPage.prototype.postular = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Procesando Informacion'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.geolocation.getCurrentPosition().then(function (resp) {
                            _this.storage.getObject('user_data').then(function (r) {
                                var user_data = JSON.parse(r);
                                var request = {
                                    id: user_data.id,
                                    pro_name: user_data.first_name + ' ' + user_data.last_name,
                                    pro_avatar: user_data.avatar,
                                    pro_id: user_data.id,
                                    latitude: resp.coords.latitude,
                                    longitude: resp.coords.longitude
                                };
                                _this.database.addEmergencyRequestsPostulant(_this.request_id, request)
                                    .then(function () {
                                    loading.dismiss();
                                    console.log('Ok');
                                }, function (error) {
                                    loading.dismiss();
                                    console.log('Error getting location' + error);
                                });
                            });
                        }).catch(function (error) {
                            loading.dismiss();
                            console.log('Error getting location' + error);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    EmergencyRequestViewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-emergency-request-view',
            template: __webpack_require__(/*! ./emergency-request-view.page.html */ "./src/app/pages/emergency-request-view/emergency-request-view.page.html"),
            styles: [__webpack_require__(/*! ./emergency-request-view.page.scss */ "./src/app/pages/emergency-request-view/emergency-request-view.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"],
            _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]])
    ], EmergencyRequestViewPage);
    return EmergencyRequestViewPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-emergency-request-view-emergency-request-view-module.js.map