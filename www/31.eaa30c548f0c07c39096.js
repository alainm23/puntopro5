(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"22TP":function(l,n,e){"use strict";e.r(n);var u=e("CcnG"),t=e("mrSG"),o=e("ZZ/e"),i=e("n90K"),r=e("ZJFI"),a=e("YOxB"),d=e("52n8"),c=e("+1rV"),s=function(){function l(l,n,e,u){this.database=l,this.storage=n,this.modalCtrl=e,this.route=u,this.is_loading=!0}return l.prototype.ngOnInit=function(){var l=this;this.user_type=this.route.snapshot.paramMap.get("user_type"),this.storage.getValue("user_uid").then(function(n){"pro"===l.user_type?l.database.getProChatList(n).subscribe(function(n){l.list=n,l.is_loading=!1,console.log(n)}):l.database.getUserChatList(n).subscribe(function(n){l.list=n,l.is_loading=!1,console.log(n)})})},l.prototype.goChat=function(l){return t.__awaiter(this,void 0,void 0,function(){return t.__generator(this,function(n){switch(n.label){case 0:return[4,this.modalCtrl.create({component:c.a,componentProps:"pro"===this.user_type?{type:this.user_type,sender:l.pro_id,receiver:l.user_id,_chat_id:l.chat_id}:{type:this.user_type,sender:l.user_id,receiver:l.pro_id,_chat_id:l.chat_id},mode:"ios",enterAnimation:a.a,leaveAnimation:d.a})];case 1:return[4,n.sent().present()];case 2:return[2,n.sent()]}})})},l}(),f=function(){return function(){}}(),m=e("pMnS"),p=e("oBZk"),g=e("Ip0R"),h=e("ZYCi"),b=u["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function R(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,5,"ion-grid",[["style","height: 100%; margin-bottom: 1rem"]],null,null,null,p.fb,p.p)),u["\u0275did"](1,49152,null,0,o.A,[u.ChangeDetectorRef,u.ElementRef],null,null),(l()(),u["\u0275eld"](2,0,null,0,3,"ion-row",[["align-items-center",""],["justify-content-center",""],["style","height: 100%"]],null,null,null,p.tb,p.D)),u["\u0275did"](3,49152,null,0,o.ib,[u.ChangeDetectorRef,u.ElementRef],null,null),(l()(),u["\u0275eld"](4,0,null,0,1,"ion-spinner",[["name","bubbles"]],null,null,null,p.Bb,p.L)),u["\u0275did"](5,49152,null,0,o.rb,[u.ChangeDetectorRef,u.ElementRef],{name:[0,"name"]},null)],function(l,n){l(n,5,0,"bubbles")},null)}function _(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,11,"div",[],null,null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,10,"ion-item",[],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.goChat(null==l.context.$implicit?null:l.context.$implicit.data)&&u),u},p.kb,p.t)),u["\u0275did"](2,49152,null,0,o.H,[u.ChangeDetectorRef,u.ElementRef],null,null),(l()(),u["\u0275eld"](3,0,null,0,2,"ion-avatar",[["class","avatar"],["slot","start"]],null,null,null,p.R,p.b)),u["\u0275did"](4,49152,null,0,o.f,[u.ChangeDetectorRef,u.ElementRef],null,null),(l()(),u["\u0275eld"](5,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),u["\u0275eld"](6,0,null,0,5,"ion-label",[],null,null,null,p.lb,p.v)),u["\u0275did"](7,49152,null,0,o.N,[u.ChangeDetectorRef,u.ElementRef],null,null),(l()(),u["\u0275eld"](8,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),u["\u0275ted"](9,null,["",""])),(l()(),u["\u0275eld"](10,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["I'm a big deal"]))],null,function(l,n){l(n,5,0,null==n.context.$implicit?null:n.context.$implicit.dataGeneral.avatar),l(n,9,0,null==n.context.$implicit?null:n.context.$implicit.dataGeneral.first_name)})}function C(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,3,"ion-list",[],null,null,null,p.nb,p.w)),u["\u0275did"](1,49152,null,0,o.O,[u.ChangeDetectorRef,u.ElementRef],null,null),(l()(),u["\u0275and"](16777216,null,0,1,null,_)),u["\u0275did"](3,278528,null,0,g.i,[u.ViewContainerRef,u.TemplateRef,u.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,3,0,n.component.list)},null)}function v(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,9,"ion-grid",[],null,null,null,p.fb,p.p)),u["\u0275did"](1,49152,null,0,o.A,[u.ChangeDetectorRef,u.ElementRef],null,null),(l()(),u["\u0275eld"](2,0,null,0,7,"ion-row",[["center",""]],null,null,null,p.tb,p.D)),u["\u0275did"](3,49152,null,0,o.ib,[u.ChangeDetectorRef,u.ElementRef],null,null),(l()(),u["\u0275eld"](4,0,null,0,5,"ion-col",[],null,null,null,p.bb,p.l)),u["\u0275did"](5,49152,null,0,o.t,[u.ChangeDetectorRef,u.ElementRef],null,null),(l()(),u["\u0275eld"](6,0,null,0,1,"h1",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Ningun chat"])),(l()(),u["\u0275eld"](8,0,null,0,1,"h4",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["..."]))],null,null)}function D(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,5,"ion-grid",[],null,null,null,p.fb,p.p)),u["\u0275did"](1,49152,null,0,o.A,[u.ChangeDetectorRef,u.ElementRef],null,null),(l()(),u["\u0275and"](16777216,null,0,1,null,C)),u["\u0275did"](3,16384,null,0,g.j,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275and"](16777216,null,0,1,null,v)),u["\u0275did"](5,16384,null,0,g.j,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,3,0,e.list.length>0==1),l(n,5,0,e.list.length>0==0)},null)}function k(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,11,"ion-header",[],null,null,null,p.gb,p.q)),u["\u0275did"](1,49152,null,0,o.B,[u.ChangeDetectorRef,u.ElementRef],null,null),(l()(),u["\u0275eld"](2,0,null,0,9,"ion-toolbar",[["mode","ios"]],null,null,null,p.Fb,p.P)),u["\u0275did"](3,49152,null,0,o.Bb,[u.ChangeDetectorRef,u.ElementRef],{mode:[0,"mode"]},null),(l()(),u["\u0275eld"](4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,p.V,p.f)),u["\u0275did"](5,49152,null,0,o.l,[u.ChangeDetectorRef,u.ElementRef],null,null),(l()(),u["\u0275eld"](6,0,null,0,2,"ion-back-button",[["color","dark"],["icon","ios-arrow-back"],["text",""]],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==u["\u0275nov"](l,8).onClick(e)&&t),t},p.S,p.c)),u["\u0275did"](7,49152,null,0,o.g,[u.ChangeDetectorRef,u.ElementRef],{color:[0,"color"],icon:[1,"icon"],text:[2,"text"]},null),u["\u0275did"](8,16384,null,0,o.h,[[2,o.hb],o.Ib],null,null),(l()(),u["\u0275eld"](9,0,null,0,2,"ion-title",[],null,null,null,p.Eb,p.O)),u["\u0275did"](10,49152,null,0,o.zb,[u.ChangeDetectorRef,u.ElementRef],null,null),(l()(),u["\u0275ted"](-1,0,["Mensajes"])),(l()(),u["\u0275eld"](12,0,null,null,5,"ion-content",[],null,null,null,p.cb,p.m)),u["\u0275did"](13,49152,null,0,o.u,[u.ChangeDetectorRef,u.ElementRef],null,null),(l()(),u["\u0275and"](16777216,null,0,1,null,R)),u["\u0275did"](15,16384,null,0,g.j,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275and"](16777216,null,0,1,null,D)),u["\u0275did"](17,16384,null,0,g.j,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,3,0,"ios"),l(n,7,0,"dark","ios-arrow-back",""),l(n,15,0,!0===e.is_loading),l(n,17,0,!1===e.is_loading)},null)}function y(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"app-messages",[],null,null,null,k,b)),u["\u0275did"](1,114688,null,0,s,[r.a,i.a,o.Hb,h.a],null,null)],function(l,n){l(n,1,0)},null)}var E=u["\u0275ccf"]("app-messages",s,y,{},{},[]),w=e("gIcY");e.d(n,"MessagesPageModuleNgFactory",function(){return I});var I=u["\u0275cmf"](f,[],function(l){return u["\u0275mod"]([u["\u0275mpd"](512,u.ComponentFactoryResolver,u["\u0275CodegenComponentFactoryResolver"],[[8,[m.a,E]],[3,u.ComponentFactoryResolver],u.NgModuleRef]),u["\u0275mpd"](4608,g.l,g.k,[u.LOCALE_ID,[2,g.t]]),u["\u0275mpd"](4608,w["\u0275angular_packages_forms_forms_j"],w["\u0275angular_packages_forms_forms_j"],[]),u["\u0275mpd"](4608,o.c,o.c,[u.NgZone,u.ApplicationRef]),u["\u0275mpd"](4608,o.Hb,o.Hb,[o.c,u.ComponentFactoryResolver,u.Injector,g.d]),u["\u0275mpd"](4608,o.Kb,o.Kb,[o.c,u.ComponentFactoryResolver,u.Injector,g.d]),u["\u0275mpd"](1073742336,g.c,g.c,[]),u["\u0275mpd"](1073742336,w["\u0275angular_packages_forms_forms_bc"],w["\u0275angular_packages_forms_forms_bc"],[]),u["\u0275mpd"](1073742336,w.FormsModule,w.FormsModule,[]),u["\u0275mpd"](1073742336,o.Db,o.Db,[]),u["\u0275mpd"](1073742336,h.n,h.n,[[2,h.t],[2,h.m]]),u["\u0275mpd"](1073742336,f,f,[]),u["\u0275mpd"](1024,h.k,function(){return[[{path:"",component:s}]]},[])])})}}]);