(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{ieQe:function(l,n,e){"use strict";e.r(n);var u=e("CcnG"),t=e("ZZ/e"),o=e("ZJFI"),i=e("n90K"),r=function(){function l(l,n,e){this.database=l,this.navCtrl=n,this.storage=e}return l.prototype.ngOnInit=function(){var l=this;this.storage.getValue("user_uid").then(function(n){l.database.getAllEmergencyRequest(n).subscribe(function(n){console.log(n),l.items=n})})},l.prototype.goRequest=function(l){this.navCtrl.navigateForward("pros-list-search/"+l.id)},l}(),c=function(){return function(){}}(),a=e("pMnS"),d=e("oBZk"),m=e("Ip0R"),s=u["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function f(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,9,"ion-item",[],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.goRequest(null==l.context.$implicit?null:l.context.$implicit.dataGeneral)&&u),u},d.kb,d.t)),u["\u0275did"](1,49152,null,0,t.H,[u.ChangeDetectorRef,u.ElementRef],null,null),(l()(),u["\u0275eld"](2,0,null,0,7,"ion-label",[],null,null,null,d.lb,d.v)),u["\u0275did"](3,49152,null,0,t.N,[u.ChangeDetectorRef,u.ElementRef],null,null),(l()(),u["\u0275eld"](4,0,null,0,3,"ion-text",[],null,null,null,d.Cb,d.M)),u["\u0275did"](5,49152,null,0,t.wb,[u.ChangeDetectorRef,u.ElementRef],null,null),(l()(),u["\u0275eld"](6,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),u["\u0275ted"](7,null,["",""])),(l()(),u["\u0275eld"](8,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),u["\u0275ted"](9,null,["",""]))],null,function(l,n){l(n,7,0,null==n.context.$implicit?null:n.context.$implicit.dataGeneral.subcategory_name),l(n,9,0,null==n.context.$implicit?null:n.context.$implicit.dataGeneral.address_name)})}function p(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,11,"ion-header",[],null,null,null,d.gb,d.q)),u["\u0275did"](1,49152,null,0,t.B,[u.ChangeDetectorRef,u.ElementRef],null,null),(l()(),u["\u0275eld"](2,0,null,0,9,"ion-toolbar",[["mode","ios"]],null,null,null,d.Fb,d.P)),u["\u0275did"](3,49152,null,0,t.Bb,[u.ChangeDetectorRef,u.ElementRef],{mode:[0,"mode"]},null),(l()(),u["\u0275eld"](4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,d.V,d.f)),u["\u0275did"](5,49152,null,0,t.l,[u.ChangeDetectorRef,u.ElementRef],null,null),(l()(),u["\u0275eld"](6,0,null,0,2,"ion-back-button",[["color","dark"],["icon","ios-arrow-back"],["text",""]],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==u["\u0275nov"](l,8).onClick(e)&&t),t},d.S,d.c)),u["\u0275did"](7,49152,null,0,t.g,[u.ChangeDetectorRef,u.ElementRef],{color:[0,"color"],icon:[1,"icon"],text:[2,"text"]},null),u["\u0275did"](8,16384,null,0,t.h,[[2,t.hb],t.Ib],null,null),(l()(),u["\u0275eld"](9,0,null,0,2,"ion-title",[],null,null,null,d.Eb,d.O)),u["\u0275did"](10,49152,null,0,t.zb,[u.ChangeDetectorRef,u.ElementRef],null,null),(l()(),u["\u0275ted"](-1,0,["Solicitudes de emergencia"])),(l()(),u["\u0275eld"](12,0,null,null,11,"ion-content",[],null,null,null,d.cb,d.m)),u["\u0275did"](13,49152,null,0,t.u,[u.ChangeDetectorRef,u.ElementRef],null,null),(l()(),u["\u0275eld"](14,0,null,0,9,"ion-grid",[],null,null,null,d.fb,d.p)),u["\u0275did"](15,49152,null,0,t.A,[u.ChangeDetectorRef,u.ElementRef],null,null),(l()(),u["\u0275eld"](16,0,null,0,7,"ion-row",[],null,null,null,d.tb,d.D)),u["\u0275did"](17,49152,null,0,t.ib,[u.ChangeDetectorRef,u.ElementRef],null,null),(l()(),u["\u0275eld"](18,0,null,0,5,"ion-col",[],null,null,null,d.bb,d.l)),u["\u0275did"](19,49152,null,0,t.t,[u.ChangeDetectorRef,u.ElementRef],null,null),(l()(),u["\u0275eld"](20,0,null,0,3,"ion-list",[],null,null,null,d.nb,d.w)),u["\u0275did"](21,49152,null,0,t.O,[u.ChangeDetectorRef,u.ElementRef],null,null),(l()(),u["\u0275and"](16777216,null,0,1,null,f)),u["\u0275did"](23,278528,null,0,m.i,[u.ViewContainerRef,u.TemplateRef,u.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var e=n.component;l(n,3,0,"ios"),l(n,7,0,"dark","ios-arrow-back",""),l(n,23,0,e.items)},null)}function g(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"app-emergency-request-list",[],null,null,null,p,s)),u["\u0275did"](1,114688,null,0,r,[o.a,t.Ib,i.a],null,null)],function(l,n){l(n,1,0)},null)}var b=u["\u0275ccf"]("app-emergency-request-list",r,g,{},{},[]),R=e("gIcY"),h=e("ZYCi");e.d(n,"EmergencyRequestListPageModuleNgFactory",function(){return C});var C=u["\u0275cmf"](c,[],function(l){return u["\u0275mod"]([u["\u0275mpd"](512,u.ComponentFactoryResolver,u["\u0275CodegenComponentFactoryResolver"],[[8,[a.a,b]],[3,u.ComponentFactoryResolver],u.NgModuleRef]),u["\u0275mpd"](4608,m.l,m.k,[u.LOCALE_ID,[2,m.t]]),u["\u0275mpd"](4608,R["\u0275angular_packages_forms_forms_j"],R["\u0275angular_packages_forms_forms_j"],[]),u["\u0275mpd"](4608,t.c,t.c,[u.NgZone,u.ApplicationRef]),u["\u0275mpd"](4608,t.Hb,t.Hb,[t.c,u.ComponentFactoryResolver,u.Injector,m.d]),u["\u0275mpd"](4608,t.Kb,t.Kb,[t.c,u.ComponentFactoryResolver,u.Injector,m.d]),u["\u0275mpd"](1073742336,m.c,m.c,[]),u["\u0275mpd"](1073742336,R["\u0275angular_packages_forms_forms_bc"],R["\u0275angular_packages_forms_forms_bc"],[]),u["\u0275mpd"](1073742336,R.FormsModule,R.FormsModule,[]),u["\u0275mpd"](1073742336,t.Db,t.Db,[]),u["\u0275mpd"](1073742336,h.n,h.n,[[2,h.t],[2,h.m]]),u["\u0275mpd"](1073742336,c,c,[]),u["\u0275mpd"](1024,h.k,function(){return[[{path:"",component:r}]]},[])])})}}]);