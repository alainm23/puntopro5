(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"6LJd":function(n,e,l){"use strict";l.r(e);var t=l("CcnG"),o=l("mrSG"),r=l("ZZ/e"),u=l("n90K"),i=l("ZJFI"),c=l("YOxB"),a=l("52n8"),s=l("v+ND"),d=function(){function n(n,e,l,t,o,r,u){this.database=n,this.actionSheetController=e,this.loadingController=l,this.modalCtrl=t,this.alertController=o,this.navCtrl=r,this.storage=u,this.is_loading=!0,this.user_id=""}return n.prototype.ngOnInit=function(){var n=this;this.storage.getValue("user_uid").then(function(e){n.user_id=e,n.database.getServicesByPro(e).subscribe(function(e){console.log(e),n.list=e,n.is_loading=!1},function(e){n.is_loading=!1,console.log("getServicesByPro",e)})})},n.prototype.showOptions=function(n){return o.__awaiter(this,void 0,void 0,function(){var e=this;return o.__generator(this,function(l){switch(l.label){case 0:return[4,this.actionSheetController.create({header:"Albums",buttons:[{text:"Ver",handler:function(){e.seeDetail(n)}},{text:"Editar",handler:function(){e.editService(n)}},{text:"Eliminar",role:"destructive",handler:function(){e.deleteConfirm(n)}},{text:"Cancel",role:"cancel",handler:function(){console.log("Cancel clicked")}}]})];case 1:return[4,l.sent().present()];case 2:return l.sent(),[2]}})})},n.prototype.addService=function(){this.navCtrl.navigateForward("select-categories/add")},n.prototype.seeDetail=function(n){return o.__awaiter(this,void 0,void 0,function(){return o.__generator(this,function(e){switch(e.label){case 0:return[4,this.alertController.create({header:n.service_name,subHeader:"Cobra entre "+n.max_price+" y "+n.min_price+" soles por "+n.type_job+".",message:n.description,buttons:["OK"]})];case 1:return[4,e.sent().present()];case 2:return e.sent(),[2]}})})},n.prototype.deleteConfirm=function(n){return o.__awaiter(this,void 0,void 0,function(){var e=this;return o.__generator(this,function(l){switch(l.label){case 0:return[4,this.alertController.create({header:"Confirm!",message:"Message <strong>text</strong>!!!",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:function(n){console.log("Confirm Cancel: blah")}},{text:"Okay",handler:function(){return o.__awaiter(e,void 0,void 0,function(){var e;return o.__generator(this,function(l){switch(l.label){case 0:return[4,this.loadingController.create({message:"Procesando Informacion ..."})];case 1:return[4,(e=l.sent()).present()];case 2:return l.sent(),this.database.removeProService(this.user_id,n).then(function(){e.dismiss()}).catch(function(n){e.dismiss(),console.log("removeProService",n)}),[2]}})})}}]})];case 1:return[4,l.sent().present()];case 2:return l.sent(),[2]}})})},n.prototype.editService=function(n){return o.__awaiter(this,void 0,void 0,function(){return o.__generator(this,function(e){switch(e.label){case 0:return[4,this.modalCtrl.create({component:s.a,componentProps:n,mode:"ios",enterAnimation:c.a,leaveAnimation:a.a})];case 1:return[4,e.sent().present()];case 2:return[2,e.sent()]}})})},n}(),f=function(){return function(){}}(),m=l("pMnS"),h=l("oBZk"),p=l("Ip0R"),g=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function b(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,5,"ion-grid",[["style","height: 100%; margin-bottom: 1rem"]],null,null,null,h.ib,h.q)),t["\u0275did"](1,49152,null,0,r.C,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](2,0,null,0,3,"ion-row",[["align-items-center",""],["justify-content-center",""],["style","height: 100%"]],null,null,null,h.wb,h.E)),t["\u0275did"](3,49152,null,0,r.kb,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](4,0,null,0,1,"ion-spinner",[["name","bubbles"]],null,null,null,h.Eb,h.M)),t["\u0275did"](5,49152,null,0,r.tb,[t.ChangeDetectorRef,t.ElementRef],{name:[0,"name"]},null)],function(n,e){n(e,5,0,"bubbles")},null)}function v(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,9,"ion-card",[],null,[[null,"click"]],function(n,e,l){var t=!0;return"click"===e&&(t=!1!==n.component.showOptions(n.context.$implicit)&&t),t},h.cb,h.g)),t["\u0275did"](1,49152,null,0,r.o,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](2,0,null,0,4,"ion-card-header",[],null,null,null,h.Z,h.i)),t["\u0275did"](3,49152,null,0,r.q,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](4,0,null,0,2,"ion-card-title",[],null,null,null,h.bb,h.k)),t["\u0275did"](5,49152,null,0,r.s,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275ted"](6,0,[" "," "])),(n()(),t["\u0275eld"](7,0,null,0,2,"ion-card-content",[],null,null,null,h.Y,h.h)),t["\u0275did"](8,49152,null,0,r.p,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275ted"](9,0,[" "," "]))],null,function(n,e){n(e,6,0,e.context.$implicit.service_name),n(e,9,0,e.context.$implicit.description)})}function C(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,9,"ion-grid",[],null,null,null,h.ib,h.q)),t["\u0275did"](1,49152,null,0,r.C,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](2,0,null,0,7,"ion-row",[],null,null,null,h.wb,h.E)),t["\u0275did"](3,49152,null,0,r.kb,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](4,0,null,0,5,"ion-col",[],null,null,null,h.eb,h.m)),t["\u0275did"](5,49152,null,0,r.v,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](6,0,null,0,3,"ion-list",[],null,null,null,h.qb,h.x)),t["\u0275did"](7,49152,null,0,r.Q,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275and"](16777216,null,0,1,null,v)),t["\u0275did"](9,278528,null,0,p.j,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(n,e){n(e,9,0,e.component.list)},null)}function R(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,11,"ion-header",[],null,null,null,h.jb,h.r)),t["\u0275did"](1,49152,null,0,r.D,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](2,0,null,0,9,"ion-toolbar",[["mode","ios"]],null,null,null,h.Jb,h.R)),t["\u0275did"](3,49152,null,0,r.Db,[t.ChangeDetectorRef,t.ElementRef],{mode:[0,"mode"]},null),(n()(),t["\u0275eld"](4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,h.X,h.f)),t["\u0275did"](5,49152,null,0,r.n,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](6,0,null,0,2,"ion-back-button",[["color","dark"],["icon","ios-arrow-back"],["text",""]],null,[[null,"click"]],function(n,e,l){var o=!0;return"click"===e&&(o=!1!==t["\u0275nov"](n,8).onClick(l)&&o),o},h.U,h.c)),t["\u0275did"](7,49152,null,0,r.i,[t.ChangeDetectorRef,t.ElementRef],{color:[0,"color"],icon:[1,"icon"],text:[2,"text"]},null),t["\u0275did"](8,16384,null,0,r.j,[[2,r.jb],r.Kb],null,null),(n()(),t["\u0275eld"](9,0,null,0,2,"ion-title",[],null,null,null,h.Ib,h.Q)),t["\u0275did"](10,49152,null,0,r.Bb,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275ted"](-1,0,["Servicios"])),(n()(),t["\u0275eld"](12,0,null,null,5,"ion-content",[],null,null,null,h.fb,h.n)),t["\u0275did"](13,49152,null,0,r.w,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275and"](16777216,null,0,1,null,b)),t["\u0275did"](15,16384,null,0,p.k,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,C)),t["\u0275did"](17,16384,null,0,p.k,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](18,0,null,null,6,"ion-footer",[],null,null,null,h.hb,h.p)),t["\u0275did"](19,49152,null,0,r.B,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](20,0,null,0,4,"ion-toolbar",[["color","dark"]],null,null,null,h.Jb,h.R)),t["\u0275did"](21,49152,null,0,r.Db,[t.ChangeDetectorRef,t.ElementRef],{color:[0,"color"]},null),(n()(),t["\u0275eld"](22,0,null,0,2,"ion-button",[["color","light"],["expand","block"],["fill","outline"]],null,[[null,"click"]],function(n,e,l){var t=!0;return"click"===e&&(t=!1!==n.component.addService()&&t),t},h.W,h.e)),t["\u0275did"](23,49152,null,0,r.m,[t.ChangeDetectorRef,t.ElementRef],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"]},null),(n()(),t["\u0275ted"](-1,0,[" Agregar un nuevo servicio "]))],function(n,e){var l=e.component;n(e,3,0,"ios"),n(e,7,0,"dark","ios-arrow-back",""),n(e,15,0,!0===l.is_loading),n(e,17,0,!1===l.is_loading),n(e,21,0,"dark"),n(e,23,0,"light","block","outline")},null)}function _(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-pro-services",[],null,null,null,R,g)),t["\u0275did"](1,114688,null,0,d,[i.a,r.a,r.Hb,r.Jb,r.b,r.Kb,u.a],null,null)],function(n,e){n(e,1,0)},null)}var k=t["\u0275ccf"]("app-pro-services",d,_,{},{},[]),w=l("gIcY"),D=l("ZYCi");l.d(e,"ProServicesPageModuleNgFactory",function(){return E});var E=t["\u0275cmf"](f,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[m.a,k]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,p.m,p.l,[t.LOCALE_ID,[2,p.w]]),t["\u0275mpd"](4608,w["\u0275angular_packages_forms_forms_j"],w["\u0275angular_packages_forms_forms_j"],[]),t["\u0275mpd"](4608,r.c,r.c,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,r.Jb,r.Jb,[r.c,t.ComponentFactoryResolver,t.Injector,p.d]),t["\u0275mpd"](4608,r.Nb,r.Nb,[r.c,t.ComponentFactoryResolver,t.Injector,p.d]),t["\u0275mpd"](1073742336,p.c,p.c,[]),t["\u0275mpd"](1073742336,w["\u0275angular_packages_forms_forms_bc"],w["\u0275angular_packages_forms_forms_bc"],[]),t["\u0275mpd"](1073742336,w.FormsModule,w.FormsModule,[]),t["\u0275mpd"](1073742336,r.Fb,r.Fb,[]),t["\u0275mpd"](1073742336,D.n,D.n,[[2,D.t],[2,D.m]]),t["\u0275mpd"](1073742336,f,f,[]),t["\u0275mpd"](1024,D.k,function(){return[[{path:"",component:d}]]},[])])})}}]);