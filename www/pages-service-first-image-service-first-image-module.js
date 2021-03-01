(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-service-first-image-service-first-image-module"],{

/***/ "./src/app/pages/service-first-image/service-first-image.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/service-first-image/service-first-image.module.ts ***!
  \*************************************************************************/
/*! exports provided: ServiceFirstImagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceFirstImagePageModule", function() { return ServiceFirstImagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_first_image_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service-first-image.page */ "./src/app/pages/service-first-image/service-first-image.page.ts");







var routes = [
    {
        path: '',
        component: _service_first_image_page__WEBPACK_IMPORTED_MODULE_6__["ServiceFirstImagePage"]
    }
];
var ServiceFirstImagePageModule = /** @class */ (function () {
    function ServiceFirstImagePageModule() {
    }
    ServiceFirstImagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_service_first_image_page__WEBPACK_IMPORTED_MODULE_6__["ServiceFirstImagePage"]]
        })
    ], ServiceFirstImagePageModule);
    return ServiceFirstImagePageModule;
}());



/***/ }),

/***/ "./src/app/pages/service-first-image/service-first-image.page.html":
/*!*************************************************************************!*\
  !*** ./src/app/pages/service-first-image/service-first-image.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <h2 margin-top text-center class=\"text-white\">Vendemos por los ojos</h2>\n  \n  <div padding text-center class=\"text-white\">\n    <p text-wrap >\n      <b>{{ user_data?.first_name }}</b>, no te quedes atras, agrega una imagen a tu servicio y incrementa tu creadibilidad y tus ventas. Pudes subir una imagen desde tu celular, o toma un ahora\n    </p>      \n  </div>\n\n  <div *ngIf=\"image === ''\" text-center margin>\n    <img class=\"add-image\" src=\"/assets/img/add_image.png\">\n  </div>\n\n  <div *ngIf=\"image !== ''\" text-center margin>\n    <img class=\"image_preview\" [src]=\"image\">\n  </div>\n\n  <div *ngIf=\"image !== ''\" text-center margin>\n    <p class=\"text-danger\" (click)=\"clearImage ()\"><small>Eliminar imagen</small></p>\n  </div>\n\n  <div *ngIf=\"image === ''\" text-center margin>\n    <ion-button fill=\"clear\" color=\"light\" (click)=\"onSubmit ()\">\n      <ion-icon slot=\"start\" name=\"close-circle\"></ion-icon>\n      Omitir este paso\n    </ion-button>\n  </div>\n\n  <div *ngIf=\"image !== ''\" text-center margin>\n    <ion-button color=\"light\" fill=\"outline\" shape=\"round\" (click)=\"onSubmit ()\">\n      Seguir\n    </ion-button>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-row>\n    <ion-col size=\"6\" style=\"background-color: #0099ab;\">\n      <ion-button expand=\"block\" fill=\"clear\" color=\"light\" (click)=\"takePicture ()\">\n        Tomar foto\n      </ion-button>\n    </ion-col>\n\n    <ion-col size=\"6\" style=\"background-color: #00DDF2;\">\n      <ion-button expand=\"block\" fill=\"clear\" color=\"light\" (click)=\"selectPicture ()\">\n        Escoger de galeria\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/pages/service-first-image/service-first-image.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/service-first-image/service-first-image.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #00BBDA; }\n\n.add-image {\n  width: 128px; }\n\n.image_preview {\n  width: 160px;\n  border-radius: 6px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsYWluL1B1bnRvUHJvL1B1bnRvUHJvLUlvbmljNC9zcmMvYXBwL3BhZ2VzL3NlcnZpY2UtZmlyc3QtaW1hZ2Uvc2VydmljZS1maXJzdC1pbWFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBYSxFQUFBOztBQUdmO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2VydmljZS1maXJzdC1pbWFnZS9zZXJ2aWNlLWZpcnN0LWltYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuICAtLWJhY2tncm91bmQ6ICMwMEJCREE7XG59XG5cbi5hZGQtaW1hZ2Uge1xuICB3aWR0aDogMTI4cHg7XG59XG5cbi5pbWFnZV9wcmV2aWV3IHtcbiAgd2lkdGg6IDE2MHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/service-first-image/service-first-image.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/service-first-image/service-first-image.page.ts ***!
  \***********************************************************************/
/*! exports provided: ServiceFirstImagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceFirstImagePage", function() { return ServiceFirstImagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");


// Ionic

// Services

// Camera

var ServiceFirstImagePage = /** @class */ (function () {
    function ServiceFirstImagePage(storage, camera, navCtrl) {
        this.storage = storage;
        this.camera = camera;
        this.navCtrl = navCtrl;
        this.image = '';
    }
    ServiceFirstImagePage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.getObject('user_data').then(function (response) {
            _this.user_data = JSON.parse(response);
        });
    };
    ServiceFirstImagePage.prototype.selectPicture = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var options;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                options = {
                    sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
                    destinationType: this.camera.DestinationType.DATA_URL,
                    quality: 100,
                    encodingType: this.camera.EncodingType.JPEG,
                    mediaType: this.camera.MediaType.PICTURE
                };
                this.camera.getPicture(options).then(function (imageData) {
                    _this.image = 'data:image/jpeg;base64,' + imageData;
                }, function (err) {
                    // Handle error
                });
                return [2 /*return*/];
            });
        });
    };
    ServiceFirstImagePage.prototype.takePicture = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var options;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                options = {
                    destinationType: this.camera.DestinationType.DATA_URL,
                    encodingType: this.camera.EncodingType.JPEG,
                    quality: 100,
                    mediaType: this.camera.MediaType.PICTURE
                };
                this.camera.getPicture(options).then(function (imageData) {
                    _this.image = 'data:image/jpeg;base64,' + imageData;
                }, function (err) {
                    // Handle error
                });
                return [2 /*return*/];
            });
        });
    };
    ServiceFirstImagePage.prototype.clearImage = function () {
        this.image = '';
    };
    ServiceFirstImagePage.prototype.onSubmit = function () {
        if (this.image !== '') {
            this.storage.setValue('soypro_service_image', this.image);
        }
        this.navCtrl.navigateForward('select-plan');
    };
    ServiceFirstImagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-service-first-image',
            template: __webpack_require__(/*! ./service-first-image.page.html */ "./src/app/pages/service-first-image/service-first-image.page.html"),
            styles: [__webpack_require__(/*! ./service-first-image.page.scss */ "./src/app/pages/service-first-image/service-first-image.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], ServiceFirstImagePage);
    return ServiceFirstImagePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-service-first-image-service-first-image-module.js.map