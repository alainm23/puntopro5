(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-soypro-presentation-soypro-presentation-module"],{

/***/ "./src/app/pages/soypro-presentation/soypro-presentation.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/soypro-presentation/soypro-presentation.module.ts ***!
  \*************************************************************************/
/*! exports provided: SoyproPresentationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoyproPresentationPageModule", function() { return SoyproPresentationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _soypro_presentation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./soypro-presentation.page */ "./src/app/pages/soypro-presentation/soypro-presentation.page.ts");







var routes = [
    {
        path: '',
        component: _soypro_presentation_page__WEBPACK_IMPORTED_MODULE_6__["SoyproPresentationPage"]
    }
];
var SoyproPresentationPageModule = /** @class */ (function () {
    function SoyproPresentationPageModule() {
    }
    SoyproPresentationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_soypro_presentation_page__WEBPACK_IMPORTED_MODULE_6__["SoyproPresentationPage"]]
        })
    ], SoyproPresentationPageModule);
    return SoyproPresentationPageModule;
}());



/***/ }),

/***/ "./src/app/pages/soypro-presentation/soypro-presentation.page.html":
/*!*************************************************************************!*\
  !*** ./src/app/pages/soypro-presentation/soypro-presentation.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar mode=\"ios\" no-border>\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" (click)=\"goBack ()\">\n        <ion-icon slot=\"icon-only\" name=\"ios-arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-slides class=\"hexpand\" [options]=\"slideOpts\" (ionSlideDidChange)=\"ionSlideDidChange ()\">\n    <ion-slide>\n      <div>\n        <img class=\"logo-size\" src=\"assets/img/SoyPro.svg\">\n      </div>\n\n      <div padding>\n        <p class=\"text-gray\">La única plataforma que permite que los mejores profesionales se destaquen</p>\n      </div>\n\n      <div>\n        <img class=\"width-80\" src=\"assets/img/slide_soypro_01_02.png\">\n      </div>\n\n      <ion-item text-center lines=\"none\" margin-top>\n        <ion-label>\n          <h1 class=\"text-gray\">¡Bienvenido!</h1>\n        </ion-label>\n      </ion-item>\n\n      <div class=\"position-bottom\">\n        <ion-card class=\"position-bottom-card\" text-center (click)=\"goNextSlide ()\">\n          <ion-item lines=\"none\" text-center>\n            <ion-label>\n              Empecemos >\n            </ion-label>\n          </ion-item>\n        </ion-card>\n      </div>\n    </ion-slide>\n\n    <ion-slide>\n      <div>\n        <img class=\"logo-size\" src=\"assets/img/SoyPro.svg\">\n      </div>\n\n      <div padding>\n        <h6 no-margin><b>¿Porqué ser pro?</b></h6>\n      </div>\n\n      <div padding>\n        <ion-list>\n          <ion-item class=\"text-green\" size=\"small\" fill=\"clear\" expand=\"block\" (click)=\"show (1)\">\n            <ion-icon [ngStyle]=\"{'transform': b_1 ? 'rotate(-45deg)' : 'none' }\" name=\"remove\" class=\"margin-right-1rem transition\"></ion-icon>\n            Mas trabajo\n          </ion-item>\n\n          <ion-item class=\"text-green padding-12px\" lines=\"none\" *ngIf=\"b_1\" [@animation-top]>\n            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam asperiores, error iure, enim velit voluptatibus distinctio magni nam voluptatem veniam nobis consequatur quisquam nulla at illum consectetur, eaque dignissimos nemo?\n          </ion-item>\n\n          <ion-item class=\"text-green\" size=\"small\" fill=\"clear\" expand=\"block\" (click)=\"show (2)\">\n            <ion-icon [ngStyle]=\"{'transform': b_2 ? 'rotate(-45deg)' : 'none' }\" name=\"remove\" class=\"margin-right-1rem transition\"></ion-icon>\n            Mayor Competencia\n          </ion-item>\n  \n          <ion-item class=\"text-green padding-12px\" lines=\"none\" *ngIf=\"b_2\" [@animation-top]>\n            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam asperiores, error iure, enim velit voluptatibus distinctio magni nam voluptatem veniam nobis consequatur quisquam nulla at illum consectetur, eaque dignissimos nemo?\n          </ion-item>\n\n          <ion-item class=\"text-green\" size=\"small\" fill=\"clear\" expand=\"block\" (click)=\"show (3)\">\n            <ion-icon [ngStyle]=\"{'transform': b_3 ? 'rotate(-45deg)' : 'none' }\" name=\"remove\" class=\"margin-right-1rem transition\"></ion-icon>\n            Otra ventaja mas\n          </ion-item>\n  \n          <ion-item class=\"text-green padding-12px\" lines=\"none\" *ngIf=\"b_3\" [@animation-top]>\n            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam asperiores, error iure, enim velit voluptatibus distinctio magni nam voluptatem veniam nobis consequatur quisquam nulla at illum consectetur, eaque dignissimos nemo?\n          </ion-item>\n\n          <ion-item class=\"text-green\" size=\"small\" fill=\"clear\" expand=\"block\" (click)=\"show (4)\">\n            <ion-icon [ngStyle]=\"{'transform': b_4 ? 'rotate(-45deg)' : 'none' }\" name=\"remove\" class=\"margin-right-1rem transition\"></ion-icon>\n            Por eso tambien\n          </ion-item>\n  \n          <ion-item class=\"text-green padding-12px\" lines=\"none\" *ngIf=\"b_4\" [@animation-top]>\n            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam asperiores, error iure, enim velit voluptatibus distinctio magni nam voluptatem veniam nobis consequatur quisquam nulla at illum consectetur, eaque dignissimos nemo?\n          </ion-item>\n\n          <ion-item class=\"text-green\" size=\"small\" fill=\"clear\" expand=\"block\" (click)=\"show (5)\">\n            <ion-icon [ngStyle]=\"{'transform': b_5 ? 'rotate(-45deg)' : 'none' }\" name=\"remove\" class=\"margin-right-1rem transition\"></ion-icon>\n            Otra ventaja mas\n          </ion-item>\n  \n          <ion-item class=\"text-green padding-12px\" lines=\"none\" *ngIf=\"b_5\" [@animation-top]>\n            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam asperiores, error iure, enim velit voluptatibus distinctio magni nam voluptatem veniam nobis consequatur quisquam nulla at illum consectetur, eaque dignissimos nemo?\n          </ion-item>\n\n          <ion-item class=\"text-green\" size=\"small\" fill=\"clear\" expand=\"block\" (click)=\"show (6)\">\n            <ion-icon [ngStyle]=\"{'transform': b_6 ? 'rotate(-45deg)' : 'none' }\" name=\"remove\" class=\"margin-right-1rem transition\"></ion-icon>\n            Por eso tambien\n          </ion-item>\n  \n          <ion-item class=\"text-green padding-12px\" lines=\"none\" *ngIf=\"b_6\" [@animation-top]>\n            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam asperiores, error iure, enim velit voluptatibus distinctio magni nam voluptatem veniam nobis consequatur quisquam nulla at illum consectetur, eaque dignissimos nemo?\n          </ion-item>\n        </ion-list>\n      </div>\n\n      <div class=\"position-bottom\">\n        <ion-card class=\"position-bottom-card\" text-center (click)=\"goNextSlide ()\">\n          <ion-item lines=\"none\" text-center>\n            <ion-label>\n              ¡Quiero ser Pro! >\n            </ion-label>\n          </ion-item>\n        </ion-card>\n      </div>\n    </ion-slide>\n\n    <ion-slide>\n      <div>\n        <img class=\"logo-size\" src=\"assets/img/SoyPro.svg\">\n      </div>\n    \n      <div padding>\n        <h6 no-margin><b>Requisitos</b></h6>\n        <p text-wrap class=\"text-green font-size-14 no-margin-bottom\">\n          Por motivos de seguridad y para poder asegurar la calidad del servicio, PuntoPro acepta únicamente profesionales formales que cuenten con lo siguiente:\n        </p>\n      </div>\n\n      <div>\n        <ion-list>\n          <ion-item class=\"text-green\">\n            <ion-icon class=\"margin-right-1rem\" name=\"remove\"></ion-icon>\n            DNi o Carnet de extranjería\n          </ion-item>\n\n          <ion-item class=\"text-green\">\n            <ion-icon class=\"margin-right-1rem\" name=\"remove\"></ion-icon>\n            Ruc\n          </ion-item>\n\n          <ion-item class=\"text-green\">\n            <ion-icon class=\"margin-right-1rem\" name=\"remove\"></ion-icon>\n            validación de numero telefonico\n          </ion-item>\n        </ion-list>\n      </div>\n\n      <div padding>\n        <h6 no-margin><b>Opcional</b></h6>\n        <p text-wrap class=\"text-green font-size-14 no-margin-bottom\">\n          Puntopro promueve los mejores, los más honrados y honestos profesionales. Aquellos que nos entreguen la siguiente documentación serán reconocidos y promovidos.\n        </p>\n      </div>\n\n      <div>\n        <ion-list>\n          <ion-item class=\"text-green\">\n            <ion-icon class=\"margin-right-1rem\" name=\"remove\"></ion-icon>\n            Antecedentes policiales  \n          </ion-item>\n\n          <ion-item class=\"text-green\">\n            <ion-icon class=\"margin-right-1rem\" name=\"remove\"></ion-icon>\n            Por eso también\n          </ion-item>\n        </ion-list>\n      </div>\n\n      <div class=\"position-bottom\">\n        <ion-card class=\"position-bottom-card\" text-center (click)=\"goNextSlide ()\">\n          <ion-item lines=\"none\" text-center>\n            <ion-label>\n              ¡Entendido!\n            </ion-label>\n          </ion-item>\n        </ion-card>\n      </div>\n    </ion-slide>\n\n    <ion-slide>\n      <div>\n        <img class=\"logo-size\" src=\"assets/img/SoyPro.svg\">\n      </div>\n    \n      <div padding>\n        <h6 no-margin><b>Permisos</b></h6>\n        <p text-wrap class=\"text-green font-size-14 no-margin-bottom\">\n          Esta aplicación usa los servicios de ubicación del GPS para re potenciar tu perfil profesional y conseguirte mayores oportunidades de trabajo.\n        </p>\n      </div>\n\n      <div padding-top>\n        <img class=\"width-128px\" src=\"assets/img/slide_soypro_02.png\">\n      </div>\n\n      <ion-item text-center lines=\"none\">\n        <ion-label>\n          <h1 class=\"text-green\">¿Quieres que te encuentren?</h1>\n        </ion-label>\n      </ion-item>\n\n      <div class=\"position-bottom\">\n        <ion-card class=\"position-bottom-card\" text-center (click)=\"checkPhoneNumberIsValid ()\">\n          <ion-item lines=\"none\" text-center> \n            <ion-label>\n              Acepto\n            </ion-label>\n          </ion-item>\n        </ion-card>\n      </div>\n    </ion-slide>\n  </ion-slides>\n  <!--ion-slides class=\"hexpand\" [options]=\"slideOpts\" (ionSlideDidChange)=\"ionSlideDidChange ()\">\n    <ion-slide>\n      <div padding>\n        <img class=\"logo-size\" src=\"assets/img/PuntoPro.png\">\n      </div>\n\n      <div>\n        <img class=\"width-80\" src=\"assets/img/slide_soypro_01_01.svg\">\n      </div>\n\n      <div>\n        <img class=\"width-80\" src=\"assets/img/slide_soypro_01_02.png\">\n      </div>\n      <br>\n      <h2 class=\"text-green\">Te damos la bienvenida</h2>\n\n      <ion-row class=\"position-bottom\" style=\"background-color: #4B99FF;\">\n        <ion-col size=\"6\">\n          <ion-button fill=\"clear\" color=\"light\" (click)=\"goHome ()\">\n            <ion-icon slot=\"start\" name=\"arrow-back\"></ion-icon>\n            Atras\n          </ion-button>\n        </ion-col>\n         <ion-col size=\"6\">\n           <ion-button fill=\"clear\" color=\"light\" (click)=\"goNextSlide ()\">\n            Adelante\n            <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-slide>\n\n    <ion-slide style=\"background-color: #F49500;\">\n      <div>\n        <h2 class=\"text-white\">¿Porqué PuntoPro?</h2>\n        <p class=\"text-white\"><b>Beneficios para ti</b></p>\n\n        <div class=\"text-white\" (click)=\"showBenefit (1)\">\n          <h4><b>Mas trabajo</b></h4>\n          <p class=\"div-selected\" padding *ngIf=\"b_1\">\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.\n          </p>\n        </div>\n\n        <div class=\"text-white\" (click)=\"showBenefit (2)\">\n          <h4><b>Menos conpetencia</b></h4>\n          <p class=\"div-selected\" padding *ngIf=\"b_2\">\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.\n          </p>\n        </div>\n\n        <div class=\"text-white\" (click)=\"showBenefit (3)\">\n          <h4><b>Tarjeta de credito</b></h4>\n          <p class=\"div-selected\" padding *ngIf=\"b_3\">\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.\n          </p>\n        </div>\n\n        <div class=\"text-white\" (click)=\"showBenefit (4)\">      \n          <h4><b>Menos conpetencia</b></h4>\n          <p class=\"div-selected\" padding *ngIf=\"b_4\">\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.\n          </p>\n        </div>\n\n        <div class=\"text-white\" (click)=\"showBenefit (5)\">        \n          <h4><b>Mas trabajo</b></h4>\n          <p class=\"div-selected\" padding *ngIf=\"b_5\">\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.\n          </p>\n        </div>\n\n        <div class=\"text-white\" (click)=\"showBenefit (6)\">        \n          <h4><b>Tarjeta de credito</b></h4>\n          <p class=\"div-selected\" padding *ngIf=\"b_6\">\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.\n          </p>\n        </div>\n\n        <ion-row class=\"position-bottom\" style=\"background-color: #FFAB08;\">\n          <ion-col size=\"6\">\n            <ion-button fill=\"clear\" color=\"light\" (click)=\"goPrevSlide ()\">\n              <ion-icon slot=\"start\" name=\"arrow-back\"></ion-icon>\n              Atras\n            </ion-button>\n          </ion-col>\n\n          <ion-col size=\"6\">\n            <ion-button fill=\"clear\" color=\"light\" (click)=\"goNextSlide ()\">\n              Adelante\n              <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </div>\n    </ion-slide>\n    \n    <ion-slide style=\"background-color: #2E84FD;\">\n      <div class=\"text-white\">\n        <h2>Requisitos</h2>\n        <p padding text-wrap>\n          Por motivos de <b>seguridad</b> y para asegurar un <b>servicio de calidad.</b>\n          PuntoPro acepta unicamnente profesionales que cuenten con lo siguiente.\n        </p>\n\n        <h4 no-margin><b>DNI o Carnet de extranjeria</b></h4>\n        <p no-margin text-wrap>(Verificamos personas reales)</p>\n\n        <h4 no-margin margin-top><b>RUC</b></h4>\n        <p no-margin text-wrap>(Unicamente negocios formales)</p>\n\n        <h4 no-margin margin-top><b>Validacion de numero telefonico</b></h4>\n        <p no-margin text-wrap>(A travez de la aplicacion)</p>\n\n        <h4 no-margin margin-top><b>Antecedentes policiales</b></h4>\n        <p no-margin text-wrap>\n          (Si quieres recibir nuestro check y aparecer entre los recomendados)\n        </p>\n\n        <div text-center>\n          <img *ngIf=\"checkDisplaySize ()\" class=\"width-70 image-bottom\" src=\"assets/img/slide_soypro_03.png\">\n        </div>\n\n        <ion-row class=\"position-bottom\" style=\"background-color: #4B99FF;\">\n          <ion-col size=\"6\">\n            <ion-button fill=\"clear\" color=\"light\" (click)=\"goPrevSlide ()\">\n              <ion-icon slot=\"start\" name=\"arrow-back\"></ion-icon>\n              Atras\n            </ion-button>\n          </ion-col>\n\n          <ion-col size=\"6\">\n            <ion-button fill=\"clear\" color=\"light\" (click)=\"goNextSlide ()\">\n              Adelante\n              <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </div>\n    </ion-slide>\n\n    <ion-slide style=\"background-color: #039D4F;\">\n      <div class=\"text-white\">\n        <h2>GPS y Geolocalizacion</h2>\n        <p padding text-wrap>\n          Esta aplicacion usa la ubicacion del GPS para repotenciar\n          tu perfil profesional y conseguirte mayor oportunidades de trabajo. \n          Siguiendo das tu concentimiento...\n        </p>\n\n        <img src=\"assets/img/slide_03.svg\">\n\n        <ion-row class=\"position-bottom\" style=\"background-color: #14AA4F;\">\n          <ion-col size=\"6\">\n            <ion-button fill=\"clear\" color=\"light\" (click)=\"goPrevSlide ()\">\n              <ion-icon slot=\"start\" name=\"arrow-back\"></ion-icon>\n              Atras\n            </ion-button>\n          </ion-col>\n\n          <ion-col size=\"6\">\n            <ion-button fill=\"clear\" color=\"light\" (click)=\"checkPhoneNumberIsValid ()\">\n              Comenzar\n              <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </div>\n    </ion-slide>\n  </ion-slides-->\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/soypro-presentation/soypro-presentation.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/soypro-presentation/soypro-presentation.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo-size {\n  width: 30%; }\n\n.hexpand {\n  height: 100%; }\n\n.position-bottom {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  margin-bottom: 1rem; }\n\n.position-bottom-card {\n  width: 50%;\n  margin: 0 auto; }\n\nion-slide {\n  display: block !important; }\n\n.width-80 {\n  width: 80%; }\n\n.width-70 {\n  width: 12rem; }\n\n.div-selected {\n  background-color: #f48100; }\n\n.image-bottom {\n  position: fixed;\n  left: 0;\n  bottom: 2.9rem;\n  right: 0; }\n\n.text-gray {\n  color: #00000073; }\n\n.panel-pro-card {\n  width: 50%;\n  text-align: center;\n  margin: 0 auto;\n  margin-bottom: 1rem;\n  margin-top: 0rem; }\n\n.text-green {\n  color: #00A79C;\n  --border-color: #00A79C; }\n\n.font-size-14 {\n  font-size: 14px; }\n\n.margin-right-1rem {\n  margin-right: 1rem; }\n\n.transition {\n  transition: all 240ms ease-in-out; }\n\n.padding-12px {\n  padding: 12px; }\n\n.no-margin-bottom {\n  margin-bottom: 0px; }\n\n.width-128px {\n  width: 128px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsYWluL1B1bnRvUHJvL1B1bnRvUHJvLUlvbmljNC9zcmMvYXBwL3BhZ2VzL3NveXByby1wcmVzZW50YXRpb24vc295cHJvLXByZXNlbnRhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULFdBQVc7RUFDWCxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxVQUFVO0VBQ1YsY0FBYyxFQUFBOztBQUdoQjtFQUNFLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLGVBQWU7RUFDZixPQUFPO0VBQ1AsY0FBYztFQUNkLFFBQVEsRUFBQTs7QUFHVjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxjQUFjO0VBQ2QsdUJBQWUsRUFBQTs7QUFHakI7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsaUNBQWlDLEVBQUE7O0FBR25DO0VBQ0UsYUFBYSxFQUFBOztBQUdmO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc295cHJvLXByZXNlbnRhdGlvbi9zb3lwcm8tcHJlc2VudGF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvLXNpemUge1xuICB3aWR0aDogMzAlO1xufVxuXG4uaGV4cGFuZCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnBvc2l0aW9uLWJvdHRvbSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLnBvc2l0aW9uLWJvdHRvbS1jYXJkIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbmlvbi1zbGlkZSB7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbi53aWR0aC04MCB7XG4gIHdpZHRoOiA4MCU7XG59XG5cbi53aWR0aC03MCB7XG4gIHdpZHRoOiAxMnJlbTtcbn1cblxuLmRpdi1zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDgxMDA7XG59XG5cbi5pbWFnZS1ib3R0b20ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMi45cmVtO1xuICByaWdodDogMDtcbn1cblxuLnRleHQtZ3JheSB7XG4gIGNvbG9yOiAjMDAwMDAwNzM7XG59XG5cbi5wYW5lbC1wcm8tY2FyZCB7XG4gIHdpZHRoOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIG1hcmdpbi10b3A6IDByZW07XG59XG5cbi50ZXh0LWdyZWVuIHtcbiAgY29sb3I6ICMwMEE3OUM7XG4gIC0tYm9yZGVyLWNvbG9yOiAjMDBBNzlDO1xufVxuXG4uZm9udC1zaXplLTE0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubWFyZ2luLXJpZ2h0LTFyZW0ge1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG5cbi50cmFuc2l0aW9uIHtcbiAgdHJhbnNpdGlvbjogYWxsIDI0MG1zIGVhc2UtaW4tb3V0O1xufVxuXG4ucGFkZGluZy0xMnB4IHtcbiAgcGFkZGluZzogMTJweDtcbn1cblxuLm5vLW1hcmdpbi1ib3R0b20ge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi53aWR0aC0xMjhweCB7XG4gIHdpZHRoOiAxMjhweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/soypro-presentation/soypro-presentation.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/soypro-presentation/soypro-presentation.page.ts ***!
  \***********************************************************************/
/*! exports provided: SoyproPresentationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoyproPresentationPage", function() { return SoyproPresentationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");


// Ionic

// Services


// Animations

var SoyproPresentationPage = /** @class */ (function () {
    function SoyproPresentationPage(navCtrl, platform, loadingController, storage, database, alertController) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.loadingController = loadingController;
        this.storage = storage;
        this.database = database;
        this.alertController = alertController;
        this.slideOpts = {
            effect: 'flip',
            zoom: false
        };
        this.index = 0;
        this.b_1 = false;
        this.b_2 = false;
        this.b_3 = false;
        this.b_4 = false;
        this.b_5 = false;
        this.b_6 = false;
    }
    SoyproPresentationPage.prototype.ngOnInit = function () {
        this.show(1);
        this.storage.setObject('phoneNumber_valid', null);
        if (this.platform.is('cordova')) {
            window.AccountKitPlugin.logout();
        }
    };
    SoyproPresentationPage.prototype.goHome = function () {
        this.navCtrl.navigateBack('home');
    };
    SoyproPresentationPage.prototype.goPrevSlide = function () {
        this.slides.slidePrev();
    };
    SoyproPresentationPage.prototype.goNextSlide = function () {
        this.slides.slideNext();
    };
    SoyproPresentationPage.prototype.goBack = function () {
        this.index--;
        this.slides.slideTo(this.index);
        if (this.index < 0) {
            this.navCtrl.navigateBack("home");
        }
    };
    SoyproPresentationPage.prototype.ionSlideDidChange = function () {
        var _this = this;
        this.slides.getActiveIndex().then(function (index) {
            _this.index = index;
        });
    };
    SoyproPresentationPage.prototype.show = function (b) {
        if (b === 1) {
            this.b_1 = !this.b_1;
            this.b_2 = false;
            this.b_3 = false;
            this.b_4 = false;
            this.b_5 = false;
            this.b_6 = false;
        }
        else if (b === 2) {
            this.b_2 = !this.b_2;
            this.b_1 = false;
            this.b_3 = false;
            this.b_4 = false;
            this.b_5 = false;
            this.b_6 = false;
        }
        else if (b === 3) {
            this.b_3 = !this.b_3;
            this.b_1 = false;
            this.b_2 = false;
            this.b_4 = false;
            this.b_5 = false;
            this.b_6 = false;
        }
        else if (b === 4) {
            this.b_4 = !this.b_4;
            this.b_1 = false;
            this.b_2 = false;
            this.b_3 = false;
            this.b_5 = false;
            this.b_6 = false;
        }
        else if (b === 5) {
            this.b_5 = !this.b_5;
            this.b_1 = false;
            this.b_2 = false;
            this.b_3 = false;
            this.b_4 = false;
            this.b_6 = false;
        }
        else if (b === 6) {
            this.b_6 = !this.b_6;
            this.b_1 = false;
            this.b_2 = false;
            this.b_3 = false;
            this.b_4 = false;
            this.b_5 = false;
        }
    };
    SoyproPresentationPage.prototype.checkDisplaySize = function () {
        return this.platform.height() > 640;
    };
    SoyproPresentationPage.prototype.checkPhoneNumberIsValid = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.storage.getObject('phoneNumber_valid').then(function (response) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var val, alert_1;
                    var _this = this;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                val = JSON.parse(response);
                                if (!(val === undefined || val === null)) return [3 /*break*/, 1];
                                this.openAccountKit();
                                return [3 /*break*/, 4];
                            case 1: return [4 /*yield*/, this.alertController.create({
                                    header: 'Numero de telefono ya validado',
                                    message: 'El numero de telefono <b>' + val.phoneNumber + '</b> ya se encuentra validado, desea usar este mismo numero de telefono o cambiarlo.',
                                    buttons: [
                                        {
                                            text: 'Cambiar numero',
                                            cssClass: 'secondary',
                                            handler: function (blah) {
                                                _this.openAccountKit();
                                            }
                                        }, {
                                            text: 'Usar el mismo numero',
                                            handler: function () {
                                                _this.navCtrl.navigateForward('soypro-set-personal-data');
                                            }
                                        }
                                    ]
                                })];
                            case 2:
                                alert_1 = _a.sent();
                                return [4 /*yield*/, alert_1.present()];
                            case 3:
                                _a.sent();
                                _a.label = 4;
                            case 4: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    SoyproPresentationPage.prototype.openAccountKit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, valid;
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
                        valid = {
                            phoneNumber: '+51994701995',
                            valid: true
                        };
                        this.storage.setObject('phone_number_valid', valid);
                        this.navCtrl.navigateForward('soypro-set-personal-data');
                        loading.dismiss();
                        return [2 /*return*/];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
    ], SoyproPresentationPage.prototype, "slides", void 0);
    SoyproPresentationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-soypro-presentation',
            template: __webpack_require__(/*! ./soypro-presentation.page.html */ "./src/app/pages/soypro-presentation/soypro-presentation.page.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('animation-top', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translateY(-12%)', opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('154ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translateY(0)', 'opacity': 1 }))]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translateY(0)', 'opacity': 1 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('154ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translateY(-12%)', 'opacity': 0 }))])
                ])
            ],
            styles: [__webpack_require__(/*! ./soypro-presentation.page.scss */ "./src/app/pages/soypro-presentation/soypro-presentation.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
            _services_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], SoyproPresentationPage);
    return SoyproPresentationPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-soypro-presentation-soypro-presentation-module.js.map