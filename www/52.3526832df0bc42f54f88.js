(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{z6fL:function(l,n,e){"use strict";e.r(n);var u=e("CcnG"),t=e("mrSG"),i=e("ZZ/e"),o=e("n90K"),r=e("ZJFI"),a=function(){function l(l,n,e,u,t,i){this.navCtrl=l,this.platform=n,this.loadingController=e,this.storage=u,this.database=t,this.alertController=i,this.slideOpts={effect:"flip",zoom:!1},this.b_1=!1,this.b_2=!1,this.b_3=!1,this.b_4=!1,this.b_5=!1,this.b_6=!1}return l.prototype.ngOnInit=function(){this.showBenefit(1),this.storage.setObject("phoneNumber_valid",null),this.platform.is("cordova")&&window.AccountKitPlugin.logout()},l.prototype.goHome=function(){this.navCtrl.navigateBack("home")},l.prototype.goPrevSlide=function(){this.slides.slidePrev()},l.prototype.goNextSlide=function(){this.slides.slideNext()},l.prototype.ionSlideDidChange=function(){},l.prototype.showBenefit=function(l){1===l?(this.b_1=!this.b_1,this.b_2=!1,this.b_3=!1,this.b_4=!1,this.b_5=!1,this.b_6=!1):2===l?(this.b_2=!this.b_2,this.b_1=!1,this.b_3=!1,this.b_4=!1,this.b_5=!1,this.b_6=!1):3===l?(this.b_3=!this.b_3,this.b_1=!1,this.b_2=!1,this.b_4=!1,this.b_5=!1,this.b_6=!1):4===l?(this.b_4=!this.b_4,this.b_1=!1,this.b_2=!1,this.b_3=!1,this.b_5=!1,this.b_6=!1):5===l?(this.b_5=!this.b_5,this.b_1=!1,this.b_2=!1,this.b_3=!1,this.b_4=!1,this.b_6=!1):6===l&&(this.b_6=!this.b_6,this.b_1=!1,this.b_2=!1,this.b_3=!1,this.b_4=!1,this.b_5=!1)},l.prototype.checkDisplaySize=function(){return this.platform.height()>640},l.prototype.checkPhoneNumberIsValid=function(){return t.__awaiter(this,void 0,void 0,function(){var l=this;return t.__generator(this,function(n){return this.storage.getObject("phoneNumber_valid").then(function(n){return t.__awaiter(l,void 0,void 0,function(){var l,e=this;return t.__generator(this,function(u){switch(u.label){case 0:return null!=(l=JSON.parse(n))?[3,1]:(this.openAccountKit(),[3,4]);case 1:return[4,this.alertController.create({header:"Numero de telefono ya validado",message:"El numero de telefono <b>"+l.phoneNumber+"</b> ya se encuentra validado, desea usar este mismo numero de telefono o cambiarlo.",buttons:[{text:"Cambiar numero",cssClass:"secondary",handler:function(l){e.openAccountKit()}},{text:"Usar el mismo numero",handler:function(){e.navCtrl.navigateForward("soypro-data-required")}}]})];case 2:return[4,u.sent().present()];case 3:u.sent(),u.label=4;case 4:return[2]}})})}),[2]})})},l.prototype.openAccountKit=function(){return t.__awaiter(this,void 0,void 0,function(){var l;return t.__generator(this,function(n){switch(n.label){case 0:return[4,this.loadingController.create({message:"Procesando Informacion ..."})];case 1:return[4,(l=n.sent()).present()];case 2:return n.sent(),this.storage.setObject("phone_number_valid",{phoneNumber:"+51994701995",valid:!0}),this.navCtrl.navigateForward("soypro-data-required"),l.dismiss(),[2]}})})},l}(),d=function(){return function(){}}(),c=e("pMnS"),s=e("oBZk"),m=e("Ip0R"),f=u["\u0275crt"]({encapsulation:0,styles:[[".logo-size[_ngcontent-%COMP%]{width:30%}.hexpand[_ngcontent-%COMP%]{height:100%}.position-bottom[_ngcontent-%COMP%]{position:fixed;left:0;bottom:0;right:0}ion-slide[_ngcontent-%COMP%]{display:block!important}.width-80[_ngcontent-%COMP%]{width:80%}.width-70[_ngcontent-%COMP%]{width:12rem}.div-selected[_ngcontent-%COMP%]{background-color:#f48100}.image-bottom[_ngcontent-%COMP%]{position:fixed;left:0;bottom:2.9rem;right:0}"]],data:{}});function p(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"p",[["class","div-selected"],["padding",""]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo. "]))],null,null)}function h(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"p",[["class","div-selected"],["padding",""]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo. "]))],null,null)}function b(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"p",[["class","div-selected"],["padding",""]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo. "]))],null,null)}function g(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"p",[["class","div-selected"],["padding",""]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo. "]))],null,null)}function _(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"p",[["class","div-selected"],["padding",""]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo. "]))],null,null)}function v(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"p",[["class","div-selected"],["padding",""]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo. "]))],null,null)}function R(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,0,"img",[["class","width-70 image-bottom"],["src","assets/img/slide_soypro_03.png"]],null,null,null,null,null))],null,null)}function C(l){return u["\u0275vid"](0,[u["\u0275qud"](402653184,1,{slides:0}),(l()(),u["\u0275eld"](1,0,null,null,166,"ion-content",[],null,null,null,s.db,s.m)),u["\u0275did"](2,49152,null,0,i.u,[u.ChangeDetectorRef,u.ElementRef],null,null),(l()(),u["\u0275eld"](3,0,null,0,164,"ion-slides",[["class","hexpand"]],null,[[null,"ionSlideDidChange"]],function(l,n,e){var u=!0;return"ionSlideDidChange"===n&&(u=!1!==l.component.ionSlideDidChange()&&u),u},s.Bb,s.K)),u["\u0275did"](4,49152,[[1,4]],0,i.qb,[u.ChangeDetectorRef,u.ElementRef],{options:[0,"options"]},null),(l()(),u["\u0275eld"](5,0,null,0,26,"ion-slide",[],null,null,null,s.Ab,s.J)),u["\u0275did"](6,49152,null,0,i.pb,[u.ChangeDetectorRef,u.ElementRef],null,null),(l()(),u["\u0275eld"](7,0,null,0,1,"div",[["padding",""]],null,null,null,null,null)),(l()(),u["\u0275eld"](8,0,null,null,0,"img",[["class","logo-size"],["src","assets/img/PuntoPro.png"]],null,null,null,null,null)),(l()(),u["\u0275eld"](9,0,null,0,1,"div",[],null,null,null,null,null)),(l()(),u["\u0275eld"](10,0,null,null,0,"img",[["class","width-80"],["src","assets/img/slide_soypro_01_01.svg"]],null,null,null,null,null)),(l()(),u["\u0275eld"](11,0,null,0,1,"div",[],null,null,null,null,null)),(l()(),u["\u0275eld"](12,0,null,null,0,"img",[["class","width-80"],["src","assets/img/slide_soypro_01_02.png"]],null,null,null,null,null)),(l()(),u["\u0275eld"](13,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u["\u0275eld"](14,0,null,0,1,"h2",[["class","text-green"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Te damos la bienvenida"])),(l()(),u["\u0275eld"](16,0,null,0,15,"ion-row",[["class","position-bottom"],["style","background-color: #4B99FF;"]],null,null,null,s.ub,s.D)),u["\u0275did"](17,49152,null,0,i.ib,[u.ChangeDetectorRef,u.ElementRef],null,null),(l()(),u["\u0275eld"](18,0,null,0,6,"ion-col",[["size","6"]],null,null,null,s.cb,s.l)),u["\u0275did"](19,49152,null,0,i.t,[u.ChangeDetectorRef,u.ElementRef],{size:[0,"size"]},null),(l()(),u["\u0275eld"](20,0,null,0,4,"ion-button",[["color","light"],["fill","clear"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.goHome()&&u),u},s.V,s.e)),u["\u0275did"](21,49152,null,0,i.k,[u.ChangeDetectorRef,u.ElementRef],{color:[0,"color"],fill:[1,"fill"]},null),(l()(),u["\u0275eld"](22,0,null,0,1,"ion-icon",[["name","arrow-back"],["slot","start"]],null,null,null,s.ib,s.r)),u["\u0275did"](23,49152,null,0,i.C,[u.ChangeDetectorRef,u.ElementRef],{name:[0,"name"]},null),(l()(),u["\u0275ted"](-1,0,[" Atras "])),(l()(),u["\u0275eld"](25,0,null,0,6,"ion-col",[["size","6"]],null,null,null,s.cb,s.l)),u["\u0275did"](26,49152,null,0,i.t,[u.ChangeDetectorRef,u.ElementRef],{size:[0,"size"]},null),(l()(),u["\u0275eld"](27,0,null,0,4,"ion-button",[["color","light"],["fill","clear"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.goNextSlide()&&u),u},s.V,s.e)),u["\u0275did"](28,49152,null,0,i.k,[u.ChangeDetectorRef,u.ElementRef],{color:[0,"color"],fill:[1,"fill"]},null),(l()(),u["\u0275ted"](-1,0,[" Adelante "])),(l()(),u["\u0275eld"](30,0,null,0,1,"ion-icon",[["name","arrow-forward"],["slot","end"]],null,null,null,s.ib,s.r)),u["\u0275did"](31,49152,null,0,i.C,[u.ChangeDetectorRef,u.ElementRef],{name:[0,"name"]},null),(l()(),u["\u0275eld"](32,0,null,0,59,"ion-slide",[["style","background-color: #F49500;"]],null,null,null,s.Ab,s.J)),u["\u0275did"](33,49152,null,0,i.pb,[u.ChangeDetectorRef,u.ElementRef],null,null),(l()(),u["\u0275eld"](34,0,null,0,57,"div",[],null,null,null,null,null)),(l()(),u["\u0275eld"](35,0,null,null,1,"h2",[["class","text-white"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\xbfPorqu\xe9 PuntoPro?"])),(l()(),u["\u0275eld"](37,0,null,null,2,"p",[["class","text-white"]],null,null,null,null,null)),(l()(),u["\u0275eld"](38,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Beneficios para ti"])),(l()(),u["\u0275eld"](40,0,null,null,5,"div",[["class","text-white"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.showBenefit(1)&&u),u},null,null)),(l()(),u["\u0275eld"](41,0,null,null,2,"h4",[],null,null,null,null,null)),(l()(),u["\u0275eld"](42,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Mas trabajo"])),(l()(),u["\u0275and"](16777216,null,null,1,null,p)),u["\u0275did"](45,16384,null,0,m.j,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275eld"](46,0,null,null,5,"div",[["class","text-white"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.showBenefit(2)&&u),u},null,null)),(l()(),u["\u0275eld"](47,0,null,null,2,"h4",[],null,null,null,null,null)),(l()(),u["\u0275eld"](48,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Menos conpetencia"])),(l()(),u["\u0275and"](16777216,null,null,1,null,h)),u["\u0275did"](51,16384,null,0,m.j,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275eld"](52,0,null,null,5,"div",[["class","text-white"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.showBenefit(3)&&u),u},null,null)),(l()(),u["\u0275eld"](53,0,null,null,2,"h4",[],null,null,null,null,null)),(l()(),u["\u0275eld"](54,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Tarjeta de credito"])),(l()(),u["\u0275and"](16777216,null,null,1,null,b)),u["\u0275did"](57,16384,null,0,m.j,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275eld"](58,0,null,null,5,"div",[["class","text-white"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.showBenefit(4)&&u),u},null,null)),(l()(),u["\u0275eld"](59,0,null,null,2,"h4",[],null,null,null,null,null)),(l()(),u["\u0275eld"](60,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Menos conpetencia"])),(l()(),u["\u0275and"](16777216,null,null,1,null,g)),u["\u0275did"](63,16384,null,0,m.j,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275eld"](64,0,null,null,5,"div",[["class","text-white"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.showBenefit(5)&&u),u},null,null)),(l()(),u["\u0275eld"](65,0,null,null,2,"h4",[],null,null,null,null,null)),(l()(),u["\u0275eld"](66,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Mas trabajo"])),(l()(),u["\u0275and"](16777216,null,null,1,null,_)),u["\u0275did"](69,16384,null,0,m.j,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275eld"](70,0,null,null,5,"div",[["class","text-white"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.showBenefit(6)&&u),u},null,null)),(l()(),u["\u0275eld"](71,0,null,null,2,"h4",[],null,null,null,null,null)),(l()(),u["\u0275eld"](72,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Tarjeta de credito"])),(l()(),u["\u0275and"](16777216,null,null,1,null,v)),u["\u0275did"](75,16384,null,0,m.j,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275eld"](76,0,null,null,15,"ion-row",[["class","position-bottom"],["style","background-color: #FFAB08;"]],null,null,null,s.ub,s.D)),u["\u0275did"](77,49152,null,0,i.ib,[u.ChangeDetectorRef,u.ElementRef],null,null),(l()(),u["\u0275eld"](78,0,null,0,6,"ion-col",[["size","6"]],null,null,null,s.cb,s.l)),u["\u0275did"](79,49152,null,0,i.t,[u.ChangeDetectorRef,u.ElementRef],{size:[0,"size"]},null),(l()(),u["\u0275eld"](80,0,null,0,4,"ion-button",[["color","light"],["fill","clear"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.goPrevSlide()&&u),u},s.V,s.e)),u["\u0275did"](81,49152,null,0,i.k,[u.ChangeDetectorRef,u.ElementRef],{color:[0,"color"],fill:[1,"fill"]},null),(l()(),u["\u0275eld"](82,0,null,0,1,"ion-icon",[["name","arrow-back"],["slot","start"]],null,null,null,s.ib,s.r)),u["\u0275did"](83,49152,null,0,i.C,[u.ChangeDetectorRef,u.ElementRef],{name:[0,"name"]},null),(l()(),u["\u0275ted"](-1,0,[" Atras "])),(l()(),u["\u0275eld"](85,0,null,0,6,"ion-col",[["size","6"]],null,null,null,s.cb,s.l)),u["\u0275did"](86,49152,null,0,i.t,[u.ChangeDetectorRef,u.ElementRef],{size:[0,"size"]},null),(l()(),u["\u0275eld"](87,0,null,0,4,"ion-button",[["color","light"],["fill","clear"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.goNextSlide()&&u),u},s.V,s.e)),u["\u0275did"](88,49152,null,0,i.k,[u.ChangeDetectorRef,u.ElementRef],{color:[0,"color"],fill:[1,"fill"]},null),(l()(),u["\u0275ted"](-1,0,[" Adelante "])),(l()(),u["\u0275eld"](90,0,null,0,1,"ion-icon",[["name","arrow-forward"],["slot","end"]],null,null,null,s.ib,s.r)),u["\u0275did"](91,49152,null,0,i.C,[u.ChangeDetectorRef,u.ElementRef],{name:[0,"name"]},null),(l()(),u["\u0275eld"](92,0,null,0,51,"ion-slide",[["style","background-color: #2E84FD;"]],null,null,null,s.Ab,s.J)),u["\u0275did"](93,49152,null,0,i.pb,[u.ChangeDetectorRef,u.ElementRef],null,null),(l()(),u["\u0275eld"](94,0,null,0,49,"div",[["class","text-white"]],null,null,null,null,null)),(l()(),u["\u0275eld"](95,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Requisitos"])),(l()(),u["\u0275eld"](97,0,null,null,7,"p",[["padding",""],["text-wrap",""]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" Por motivos de "])),(l()(),u["\u0275eld"](99,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["seguridad"])),(l()(),u["\u0275ted"](-1,null,[" y para asegurar un "])),(l()(),u["\u0275eld"](102,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["servicio de calidad."])),(l()(),u["\u0275ted"](-1,null,[" PuntoPro acepta unicamnente profesionales que cuenten con lo siguiente. "])),(l()(),u["\u0275eld"](105,0,null,null,2,"h4",[["no-margin",""]],null,null,null,null,null)),(l()(),u["\u0275eld"](106,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["DNI o Carnet de extranjeria"])),(l()(),u["\u0275eld"](108,0,null,null,1,"p",[["no-margin",""],["text-wrap",""]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["(Verificamos personas reales)"])),(l()(),u["\u0275eld"](110,0,null,null,2,"h4",[["margin-top",""],["no-margin",""]],null,null,null,null,null)),(l()(),u["\u0275eld"](111,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["RUC"])),(l()(),u["\u0275eld"](113,0,null,null,1,"p",[["no-margin",""],["text-wrap",""]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["(Unicamente negocios formales)"])),(l()(),u["\u0275eld"](115,0,null,null,2,"h4",[["margin-top",""],["no-margin",""]],null,null,null,null,null)),(l()(),u["\u0275eld"](116,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Validacion de numero telefonico"])),(l()(),u["\u0275eld"](118,0,null,null,1,"p",[["no-margin",""],["text-wrap",""]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["(A travez de la aplicacion)"])),(l()(),u["\u0275eld"](120,0,null,null,2,"h4",[["margin-top",""],["no-margin",""]],null,null,null,null,null)),(l()(),u["\u0275eld"](121,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Antecedentes policiales"])),(l()(),u["\u0275eld"](123,0,null,null,1,"p",[["no-margin",""],["text-wrap",""]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" (Si quieres recibir nuestro check y aparecer entre los recomendados) "])),(l()(),u["\u0275eld"](125,0,null,null,2,"div",[["text-center",""]],null,null,null,null,null)),(l()(),u["\u0275and"](16777216,null,null,1,null,R)),u["\u0275did"](127,16384,null,0,m.j,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275eld"](128,0,null,null,15,"ion-row",[["class","position-bottom"],["style","background-color: #4B99FF;"]],null,null,null,s.ub,s.D)),u["\u0275did"](129,49152,null,0,i.ib,[u.ChangeDetectorRef,u.ElementRef],null,null),(l()(),u["\u0275eld"](130,0,null,0,6,"ion-col",[["size","6"]],null,null,null,s.cb,s.l)),u["\u0275did"](131,49152,null,0,i.t,[u.ChangeDetectorRef,u.ElementRef],{size:[0,"size"]},null),(l()(),u["\u0275eld"](132,0,null,0,4,"ion-button",[["color","light"],["fill","clear"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.goPrevSlide()&&u),u},s.V,s.e)),u["\u0275did"](133,49152,null,0,i.k,[u.ChangeDetectorRef,u.ElementRef],{color:[0,"color"],fill:[1,"fill"]},null),(l()(),u["\u0275eld"](134,0,null,0,1,"ion-icon",[["name","arrow-back"],["slot","start"]],null,null,null,s.ib,s.r)),u["\u0275did"](135,49152,null,0,i.C,[u.ChangeDetectorRef,u.ElementRef],{name:[0,"name"]},null),(l()(),u["\u0275ted"](-1,0,[" Atras "])),(l()(),u["\u0275eld"](137,0,null,0,6,"ion-col",[["size","6"]],null,null,null,s.cb,s.l)),u["\u0275did"](138,49152,null,0,i.t,[u.ChangeDetectorRef,u.ElementRef],{size:[0,"size"]},null),(l()(),u["\u0275eld"](139,0,null,0,4,"ion-button",[["color","light"],["fill","clear"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.goNextSlide()&&u),u},s.V,s.e)),u["\u0275did"](140,49152,null,0,i.k,[u.ChangeDetectorRef,u.ElementRef],{color:[0,"color"],fill:[1,"fill"]},null),(l()(),u["\u0275ted"](-1,0,[" Adelante "])),(l()(),u["\u0275eld"](142,0,null,0,1,"ion-icon",[["name","arrow-forward"],["slot","end"]],null,null,null,s.ib,s.r)),u["\u0275did"](143,49152,null,0,i.C,[u.ChangeDetectorRef,u.ElementRef],{name:[0,"name"]},null),(l()(),u["\u0275eld"](144,0,null,0,23,"ion-slide",[["style","background-color: #039D4F;"]],null,null,null,s.Ab,s.J)),u["\u0275did"](145,49152,null,0,i.pb,[u.ChangeDetectorRef,u.ElementRef],null,null),(l()(),u["\u0275eld"](146,0,null,0,21,"div",[["class","text-white"]],null,null,null,null,null)),(l()(),u["\u0275eld"](147,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["GPS y Geolocalizacion"])),(l()(),u["\u0275eld"](149,0,null,null,1,"p",[["padding",""],["text-wrap",""]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" Esta aplicacion usa la ubicacion del GPS para repotenciar tu perfil profesional y conseguirte mayor oportunidades de trabajo. Siguiendo das tu concentimiento... "])),(l()(),u["\u0275eld"](151,0,null,null,0,"img",[["src","assets/img/slide_03.svg"]],null,null,null,null,null)),(l()(),u["\u0275eld"](152,0,null,null,15,"ion-row",[["class","position-bottom"],["style","background-color: #14AA4F;"]],null,null,null,s.ub,s.D)),u["\u0275did"](153,49152,null,0,i.ib,[u.ChangeDetectorRef,u.ElementRef],null,null),(l()(),u["\u0275eld"](154,0,null,0,6,"ion-col",[["size","6"]],null,null,null,s.cb,s.l)),u["\u0275did"](155,49152,null,0,i.t,[u.ChangeDetectorRef,u.ElementRef],{size:[0,"size"]},null),(l()(),u["\u0275eld"](156,0,null,0,4,"ion-button",[["color","light"],["fill","clear"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.goPrevSlide()&&u),u},s.V,s.e)),u["\u0275did"](157,49152,null,0,i.k,[u.ChangeDetectorRef,u.ElementRef],{color:[0,"color"],fill:[1,"fill"]},null),(l()(),u["\u0275eld"](158,0,null,0,1,"ion-icon",[["name","arrow-back"],["slot","start"]],null,null,null,s.ib,s.r)),u["\u0275did"](159,49152,null,0,i.C,[u.ChangeDetectorRef,u.ElementRef],{name:[0,"name"]},null),(l()(),u["\u0275ted"](-1,0,[" Atras "])),(l()(),u["\u0275eld"](161,0,null,0,6,"ion-col",[["size","6"]],null,null,null,s.cb,s.l)),u["\u0275did"](162,49152,null,0,i.t,[u.ChangeDetectorRef,u.ElementRef],{size:[0,"size"]},null),(l()(),u["\u0275eld"](163,0,null,0,4,"ion-button",[["color","light"],["fill","clear"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.checkPhoneNumberIsValid()&&u),u},s.V,s.e)),u["\u0275did"](164,49152,null,0,i.k,[u.ChangeDetectorRef,u.ElementRef],{color:[0,"color"],fill:[1,"fill"]},null),(l()(),u["\u0275ted"](-1,0,[" Comenzar "])),(l()(),u["\u0275eld"](166,0,null,0,1,"ion-icon",[["name","arrow-forward"],["slot","end"]],null,null,null,s.ib,s.r)),u["\u0275did"](167,49152,null,0,i.C,[u.ChangeDetectorRef,u.ElementRef],{name:[0,"name"]},null)],function(l,n){var e=n.component;l(n,4,0,e.slideOpts),l(n,19,0,"6"),l(n,21,0,"light","clear"),l(n,23,0,"arrow-back"),l(n,26,0,"6"),l(n,28,0,"light","clear"),l(n,31,0,"arrow-forward"),l(n,45,0,e.b_1),l(n,51,0,e.b_2),l(n,57,0,e.b_3),l(n,63,0,e.b_4),l(n,69,0,e.b_5),l(n,75,0,e.b_6),l(n,79,0,"6"),l(n,81,0,"light","clear"),l(n,83,0,"arrow-back"),l(n,86,0,"6"),l(n,88,0,"light","clear"),l(n,91,0,"arrow-forward"),l(n,127,0,e.checkDisplaySize()),l(n,131,0,"6"),l(n,133,0,"light","clear"),l(n,135,0,"arrow-back"),l(n,138,0,"6"),l(n,140,0,"light","clear"),l(n,143,0,"arrow-forward"),l(n,155,0,"6"),l(n,157,0,"light","clear"),l(n,159,0,"arrow-back"),l(n,162,0,"6"),l(n,164,0,"light","clear"),l(n,167,0,"arrow-forward")},null)}function w(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"app-soypro-presentation",[],null,null,null,C,f)),u["\u0275did"](1,114688,null,0,a,[i.Ib,i.Jb,i.Fb,o.a,r.a,i.b],null,null)],function(l,n){l(n,1,0)},null)}var k=u["\u0275ccf"]("app-soypro-presentation",a,w,{},{},[]),D=e("gIcY"),x=e("ZYCi");e.d(n,"SoyproPresentationPageModuleNgFactory",function(){return y});var y=u["\u0275cmf"](d,[],function(l){return u["\u0275mod"]([u["\u0275mpd"](512,u.ComponentFactoryResolver,u["\u0275CodegenComponentFactoryResolver"],[[8,[c.a,k]],[3,u.ComponentFactoryResolver],u.NgModuleRef]),u["\u0275mpd"](4608,m.l,m.k,[u.LOCALE_ID,[2,m.t]]),u["\u0275mpd"](4608,D["\u0275angular_packages_forms_forms_j"],D["\u0275angular_packages_forms_forms_j"],[]),u["\u0275mpd"](4608,i.c,i.c,[u.NgZone,u.ApplicationRef]),u["\u0275mpd"](4608,i.Hb,i.Hb,[i.c,u.ComponentFactoryResolver,u.Injector,m.d]),u["\u0275mpd"](4608,i.Kb,i.Kb,[i.c,u.ComponentFactoryResolver,u.Injector,m.d]),u["\u0275mpd"](1073742336,m.c,m.c,[]),u["\u0275mpd"](1073742336,D["\u0275angular_packages_forms_forms_bc"],D["\u0275angular_packages_forms_forms_bc"],[]),u["\u0275mpd"](1073742336,D.FormsModule,D.FormsModule,[]),u["\u0275mpd"](1073742336,i.Db,i.Db,[]),u["\u0275mpd"](1073742336,x.n,x.n,[[2,x.t],[2,x.m]]),u["\u0275mpd"](1073742336,d,d,[]),u["\u0275mpd"](1024,x.k,function(){return[[{path:"",component:a}]]},[])])})}}]);