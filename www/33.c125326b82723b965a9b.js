(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"p+Cs":function(l,n,e){"use strict";e.r(n);var t=e("CcnG"),u=e("ZZ/e"),o=e("ZJFI"),i=e("n90K"),r=e("wd/R"),a=function(){function l(l,n,e){this.database=l,this.navCtrl=n,this.storage=e,this.is_loading=!0}return l.prototype.ngOnInit=function(){var l=this;this.storage.getValue("user_uid").then(function(n){l.database.getEmergencyRequestsToConfirmByUser(n).subscribe(function(n){console.log(n),l.requests=n,l.is_loading=!1})})},l.prototype.getRelativeDateTime=function(l){return r(l,"").fromNow()},l.prototype.viewRequest=function(l){this.navCtrl.navigateForward("emergency-request-view/"+l.id)},l}(),d=function(){return function(){}}(),c=e("pMnS"),f=e("oBZk"),s=e("Ip0R"),m=t["\u0275crt"]({encapsulation:0,styles:[[".card-separator[_ngcontent-%COMP%]{background-color:#00000047}"]],data:{}});function g(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,5,"ion-grid",[["style","height: 100%; margin-bottom: 1rem"]],null,null,null,f.fb,f.p)),t["\u0275did"](1,49152,null,0,u.A,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275eld"](2,0,null,0,3,"ion-row",[["align-items-center",""],["justify-content-center",""],["style","height: 100%"]],null,null,null,f.tb,f.D)),t["\u0275did"](3,49152,null,0,u.ib,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275eld"](4,0,null,0,1,"ion-spinner",[["name","bubbles"]],null,null,null,f.Bb,f.L)),t["\u0275did"](5,49152,null,0,u.rb,[t.ChangeDetectorRef,t.ElementRef],{name:[0,"name"]},null)],function(l,n){l(n,5,0,"bubbles")},null)}function p(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,21,"ion-card",[["mode","md"]],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.viewRequest(null==l.context.$implicit?null:l.context.$implicit.dataGeneral)&&t),t},f.ab,f.g)),t["\u0275did"](1,49152,null,0,u.m,[t.ChangeDetectorRef,t.ElementRef],{mode:[0,"mode"]},null),(l()(),t["\u0275eld"](2,0,null,0,10,"ion-card-header",[["class","request-card-header"]],null,null,null,f.X,f.i)),t["\u0275did"](3,49152,null,0,u.o,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275eld"](4,0,null,0,2,"ion-card-title",[["class","title-font-size"]],null,null,null,f.Z,f.k)),t["\u0275did"](5,49152,null,0,u.q,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275ted"](6,0,["",""])),(l()(),t["\u0275eld"](7,0,null,0,2,"ion-item",[["lines","none"],["no-margin",""],["no-padding",""]],null,null,null,f.kb,f.t)),t["\u0275did"](8,49152,null,0,u.H,[t.ChangeDetectorRef,t.ElementRef],{lines:[0,"lines"]},null),(l()(),t["\u0275ted"](9,0,[" "," "])),(l()(),t["\u0275eld"](10,0,null,0,2,"ion-badge",[["class","request-badge-margin"],["color","orange"]],null,null,null,f.T,f.d)),t["\u0275did"](11,49152,null,0,u.j,[t.ChangeDetectorRef,t.ElementRef],{color:[0,"color"]},null),(l()(),t["\u0275ted"](12,0,[" "," "])),(l()(),t["\u0275eld"](13,0,null,0,0,"hr",[["class","card-separator"]],null,null,null,null,null)),(l()(),t["\u0275eld"](14,0,null,0,7,"ion-item",[["lines","none"]],null,null,null,f.kb,f.t)),t["\u0275did"](15,49152,null,0,u.H,[t.ChangeDetectorRef,t.ElementRef],{lines:[0,"lines"]},null),(l()(),t["\u0275eld"](16,0,null,0,2,"ion-label",[],null,null,null,f.lb,f.v)),t["\u0275did"](17,49152,null,0,u.N,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275ted"](18,0,[" "," "])),(l()(),t["\u0275eld"](19,0,null,0,2,"ion-button",[["color","dark"],["fill","outline"],["slot","end"]],null,null,null,f.U,f.e)),t["\u0275did"](20,49152,null,0,u.k,[t.ChangeDetectorRef,t.ElementRef],{color:[0,"color"],fill:[1,"fill"]},null),(l()(),t["\u0275ted"](-1,0,["Ver"]))],function(l,n){l(n,1,0,"md"),l(n,8,0,"none"),l(n,11,0,"orange"),l(n,15,0,"none"),l(n,20,0,"dark","outline")},function(l,n){var e=n.component;l(n,6,0,null==n.context.$implicit?null:n.context.$implicit.dataGeneral.address_name),l(n,9,0,null==n.context.$implicit?null:n.context.$implicit.dataGeneral.client_name),l(n,12,0,null==n.context.$implicit?null:n.context.$implicit.dataGeneral.subcategory_name),l(n,18,0,e.getRelativeDateTime(null==n.context.$implicit?null:n.context.$implicit.dataGeneral.created_date))})}function R(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,5,"ion-list",[],null,null,null,f.nb,f.w)),t["\u0275did"](1,49152,null,0,u.O,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275eld"](2,0,null,0,3,"ion-list",[],null,null,null,f.nb,f.w)),t["\u0275did"](3,49152,null,0,u.O,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275and"](16777216,null,0,1,null,p)),t["\u0275did"](5,278528,null,0,s.i,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,5,0,n.context.$implicit.dataGeneral)},null)}function b(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,R)),t["\u0275did"](2,278528,null,0,s.i,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,2,0,n.component.requests)},null)}function h(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,11,"ion-header",[],null,null,null,f.gb,f.q)),t["\u0275did"](1,49152,null,0,u.B,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275eld"](2,0,null,0,9,"ion-toolbar",[["mode","ios"]],null,null,null,f.Fb,f.P)),t["\u0275did"](3,49152,null,0,u.Bb,[t.ChangeDetectorRef,t.ElementRef],{mode:[0,"mode"]},null),(l()(),t["\u0275eld"](4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,f.V,f.f)),t["\u0275did"](5,49152,null,0,u.l,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275eld"](6,0,null,0,2,"ion-back-button",[["color","dark"],["icon","ios-arrow-back"],["text",""]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](l,8).onClick(e)&&u),u},f.S,f.c)),t["\u0275did"](7,49152,null,0,u.g,[t.ChangeDetectorRef,t.ElementRef],{color:[0,"color"],icon:[1,"icon"],text:[2,"text"]},null),t["\u0275did"](8,16384,null,0,u.h,[[2,u.hb],u.Ib],null,null),(l()(),t["\u0275eld"](9,0,null,0,2,"ion-title",[],null,null,null,f.Eb,f.O)),t["\u0275did"](10,49152,null,0,u.zb,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275ted"](-1,0,["Solicitudes de emergencia"])),(l()(),t["\u0275eld"](12,0,null,null,5,"ion-content",[],null,null,null,f.cb,f.m)),t["\u0275did"](13,49152,null,0,u.u,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275and"](16777216,null,0,1,null,g)),t["\u0275did"](15,16384,null,0,s.j,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,b)),t["\u0275did"](17,16384,null,0,s.j,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,3,0,"ios"),l(n,7,0,"dark","ios-arrow-back",""),l(n,15,0,!0===e.is_loading),l(n,17,0,!1===e.is_loading)},null)}function C(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-pro-emergency-request-list",[],null,null,null,h,m)),t["\u0275did"](1,114688,null,0,a,[o.a,u.Ib,i.a],null,null)],function(l,n){l(n,1,0)},null)}var v=t["\u0275ccf"]("app-pro-emergency-request-list",a,C,{},{},[]),D=e("gIcY"),_=e("ZYCi");e.d(n,"ProEmergencyRequestListPageModuleNgFactory",function(){return k});var k=t["\u0275cmf"](d,[],function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[c.a,v]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,s.l,s.k,[t.LOCALE_ID,[2,s.t]]),t["\u0275mpd"](4608,D["\u0275angular_packages_forms_forms_j"],D["\u0275angular_packages_forms_forms_j"],[]),t["\u0275mpd"](4608,u.c,u.c,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,u.Hb,u.Hb,[u.c,t.ComponentFactoryResolver,t.Injector,s.d]),t["\u0275mpd"](4608,u.Kb,u.Kb,[u.c,t.ComponentFactoryResolver,t.Injector,s.d]),t["\u0275mpd"](1073742336,s.c,s.c,[]),t["\u0275mpd"](1073742336,D["\u0275angular_packages_forms_forms_bc"],D["\u0275angular_packages_forms_forms_bc"],[]),t["\u0275mpd"](1073742336,D.FormsModule,D.FormsModule,[]),t["\u0275mpd"](1073742336,u.Db,u.Db,[]),t["\u0275mpd"](1073742336,_.n,_.n,[[2,_.t],[2,_.m]]),t["\u0275mpd"](1073742336,d,d,[]),t["\u0275mpd"](1024,_.k,function(){return[[{path:"",component:a}]]},[])])})}}]);