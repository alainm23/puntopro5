(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{FXES:function(l,n,e){"use strict";e.r(n);var t=e("CcnG"),u=e("ZZ/e"),o=e("ZJFI"),i=e("n90K"),r=e("wd/R"),a=function(){function l(l,n,e){this.database=l,this.navCtrl=n,this.storage=e,this.is_loading=!0}return l.prototype.ngOnInit=function(){var l=this;this.storage.getValue("user_uid").then(function(n){l.database.getRequestsToConfirmByUser(n).subscribe(function(n){l.requests=n,l.is_loading=!1,console.log(n)})})},l.prototype.getRelativeDateTime=function(l){return r(l,"").fromNow()},l.prototype.viewRequest=function(l){this.navCtrl.navigateForward("request-pro-view/"+l.id)},l}(),d=function(){return function(){}}(),c=e("pMnS"),f=e("oBZk"),m=e("Ip0R"),s=t["\u0275crt"]({encapsulation:0,styles:[[".card-separator[_ngcontent-%COMP%]{background-color:#00000047}.request-card-header[_ngcontent-%COMP%]{padding-bottom:0!important}.request-badge-margin[_ngcontent-%COMP%]{margin-left:1rem}.list-header[_ngcontent-%COMP%]{font-weight:700;font-size:1.5rem}.title-font-size[_ngcontent-%COMP%]{font-size:1.5rem}"]],data:{}});function g(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,5,"ion-grid",[["style","height: 100%; margin-bottom: 1rem"]],null,null,null,f.gb,f.p)),t["\u0275did"](1,49152,null,0,u.A,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275eld"](2,0,null,0,3,"ion-row",[["align-items-center",""],["justify-content-center",""],["style","height: 100%"]],null,null,null,f.ub,f.D)),t["\u0275did"](3,49152,null,0,u.ib,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275eld"](4,0,null,0,1,"ion-spinner",[["name","bubbles"]],null,null,null,f.Cb,f.L)),t["\u0275did"](5,49152,null,0,u.rb,[t.ChangeDetectorRef,t.ElementRef],{name:[0,"name"]},null)],function(l,n){l(n,5,0,"bubbles")},null)}function p(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,20,"ion-card",[["mode","md"]],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.viewRequest(null==l.context.$implicit?null:l.context.$implicit.dataGeneral)&&t),t},f.bb,f.g)),t["\u0275did"](1,49152,null,0,u.m,[t.ChangeDetectorRef,t.ElementRef],{mode:[0,"mode"]},null),(l()(),t["\u0275eld"](2,0,null,0,10,"ion-card-header",[["class","request-card-header"]],null,null,null,f.Y,f.i)),t["\u0275did"](3,49152,null,0,u.o,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275eld"](4,0,null,0,2,"ion-card-title",[["class","title-font-size"]],null,null,null,f.ab,f.k)),t["\u0275did"](5,49152,null,0,u.q,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275ted"](6,0,["",""])),(l()(),t["\u0275eld"](7,0,null,0,5,"ion-item",[["lines","none"],["no-margin",""],["no-padding",""]],null,null,null,f.lb,f.t)),t["\u0275did"](8,49152,null,0,u.H,[t.ChangeDetectorRef,t.ElementRef],{lines:[0,"lines"]},null),(l()(),t["\u0275ted"](9,0,[" "," "])),(l()(),t["\u0275eld"](10,0,null,0,2,"ion-badge",[["class","request-badge-margin"],["color","orange"]],null,null,null,f.U,f.d)),t["\u0275did"](11,49152,null,0,u.j,[t.ChangeDetectorRef,t.ElementRef],{color:[0,"color"]},null),(l()(),t["\u0275ted"](12,0,["",""])),(l()(),t["\u0275eld"](13,0,null,0,7,"ion-item",[["lines","none"]],null,null,null,f.lb,f.t)),t["\u0275did"](14,49152,null,0,u.H,[t.ChangeDetectorRef,t.ElementRef],{lines:[0,"lines"]},null),(l()(),t["\u0275eld"](15,0,null,0,1,"ion-icon",[["name","calendar"],["slot","start"]],null,null,null,f.ib,f.r)),t["\u0275did"](16,49152,null,0,u.C,[t.ChangeDetectorRef,t.ElementRef],{name:[0,"name"]},null),(l()(),t["\u0275ted"](17,0,[" "," "])),(l()(),t["\u0275eld"](18,0,null,0,2,"ion-button",[["color","dark"],["fill","outline"],["slot","end"]],null,null,null,f.V,f.e)),t["\u0275did"](19,49152,null,0,u.k,[t.ChangeDetectorRef,t.ElementRef],{color:[0,"color"],fill:[1,"fill"]},null),(l()(),t["\u0275ted"](-1,0,["Ver"]))],function(l,n){l(n,1,0,"md"),l(n,8,0,"none"),l(n,11,0,"orange"),l(n,14,0,"none"),l(n,16,0,"calendar"),l(n,19,0,"dark","outline")},function(l,n){var e=n.component;l(n,6,0,null==n.context.$implicit?null:n.context.$implicit.dataGeneral.title),l(n,9,0,null==n.context.$implicit?null:n.context.$implicit.dataGeneral.client_name),l(n,12,0,null==n.context.$implicit?null:n.context.$implicit.dataGeneral.service_name),l(n,17,0,e.getRelativeDateTime(null==n.context.$implicit?null:n.context.$implicit.dataGeneral.created_date))})}function R(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,5,"ion-list",[],null,null,null,f.ob,f.w)),t["\u0275did"](1,49152,null,0,u.O,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275eld"](2,0,null,0,3,"ion-list",[],null,null,null,f.ob,f.w)),t["\u0275did"](3,49152,null,0,u.O,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275and"](16777216,null,0,1,null,p)),t["\u0275did"](5,278528,null,0,m.i,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,5,0,n.context.$implicit.dataGeneral)},null)}function b(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,R)),t["\u0275did"](2,278528,null,0,m.i,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,2,0,n.component.requests)},null)}function C(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,11,"ion-header",[],null,null,null,f.hb,f.q)),t["\u0275did"](1,49152,null,0,u.B,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275eld"](2,0,null,0,9,"ion-toolbar",[["mode","ios"]],null,null,null,f.Hb,f.Q)),t["\u0275did"](3,49152,null,0,u.Bb,[t.ChangeDetectorRef,t.ElementRef],{mode:[0,"mode"]},null),(l()(),t["\u0275eld"](4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,f.W,f.f)),t["\u0275did"](5,49152,null,0,u.l,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275eld"](6,0,null,0,2,"ion-back-button",[["color","dark"],["icon","ios-arrow-back"],["text",""]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](l,8).onClick(e)&&u),u},f.T,f.c)),t["\u0275did"](7,49152,null,0,u.g,[t.ChangeDetectorRef,t.ElementRef],{color:[0,"color"],icon:[1,"icon"],text:[2,"text"]},null),t["\u0275did"](8,16384,null,0,u.h,[[2,u.hb],u.Ib],null,null),(l()(),t["\u0275eld"](9,0,null,0,2,"ion-title",[],null,null,null,f.Gb,f.P)),t["\u0275did"](10,49152,null,0,u.zb,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275ted"](-1,0,["Solicitudes"])),(l()(),t["\u0275eld"](12,0,null,null,5,"ion-content",[],null,null,null,f.db,f.m)),t["\u0275did"](13,49152,null,0,u.u,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275and"](16777216,null,0,1,null,g)),t["\u0275did"](15,16384,null,0,m.j,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,b)),t["\u0275did"](17,16384,null,0,m.j,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,3,0,"ios"),l(n,7,0,"dark","ios-arrow-back",""),l(n,15,0,!0===e.is_loading),l(n,17,0,!1===e.is_loading)},null)}function h(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-request-list",[],null,null,null,C,s)),t["\u0275did"](1,114688,null,0,a,[o.a,u.Ib,i.a],null,null)],function(l,n){l(n,1,0)},null)}var v=t["\u0275ccf"]("app-request-list",a,h,{},{},[]),_=e("gIcY"),D=e("ZYCi");e.d(n,"RequestListPageModuleNgFactory",function(){return k});var k=t["\u0275cmf"](d,[],function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[c.a,v]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,m.l,m.k,[t.LOCALE_ID,[2,m.t]]),t["\u0275mpd"](4608,_["\u0275angular_packages_forms_forms_j"],_["\u0275angular_packages_forms_forms_j"],[]),t["\u0275mpd"](4608,u.c,u.c,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,u.Hb,u.Hb,[u.c,t.ComponentFactoryResolver,t.Injector,m.d]),t["\u0275mpd"](4608,u.Kb,u.Kb,[u.c,t.ComponentFactoryResolver,t.Injector,m.d]),t["\u0275mpd"](1073742336,m.c,m.c,[]),t["\u0275mpd"](1073742336,_["\u0275angular_packages_forms_forms_bc"],_["\u0275angular_packages_forms_forms_bc"],[]),t["\u0275mpd"](1073742336,_.FormsModule,_.FormsModule,[]),t["\u0275mpd"](1073742336,u.Db,u.Db,[]),t["\u0275mpd"](1073742336,D.n,D.n,[[2,D.t],[2,D.m]]),t["\u0275mpd"](1073742336,d,d,[]),t["\u0275mpd"](1024,D.k,function(){return[[{path:"",component:a}]]},[])])})}}]);