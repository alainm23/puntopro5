(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{oNpy:function(n,l,e){"use strict";e.r(l);var t=e("CcnG"),o=e("mrSG"),u=e("ZZ/e"),i=e("ZJFI"),r=e("n90K"),a=e("YOxB"),d=e("52n8"),c=e("+1rV"),s=e("/ZTf"),f=e("wd/R"),g=function(){function n(n,l,e,t,o){this.database=n,this.navCtrl=l,this.modalCtrl=e,this.alertController=t,this.storage=o,this.segment_value="created"}return n.prototype.ngOnInit=function(){var n=this;this.storage.getValue("user_uid").then(function(l){n.database.getAllRequestByUser(l).subscribe(function(l){n.list=l,n.list_backup=l,n.segmentChanged(n.segment_value),console.log(l)})})},n.prototype.segmentChanged=function(n){this.list=this.list_backup,this.list=this.list.filter("created"===n?function(n){return"created"===n.dataGeneral.state}:"in_progress"===n?function(n){return"in_progress"===n.dataGeneral.state}:function(n){return"finalized"===n.dataGeneral.state})},n.prototype.viewRequest=function(n){console.log(n);var l=n.state;"created"===l?this.navCtrl.navigateForward("request-view/"+n.id):"in_progress"===l&&this.connectPro(n.pro_id)},n.prototype.connectPro=function(n){return o.__awaiter(this,void 0,void 0,function(){var l=this;return o.__generator(this,function(e){return this.storage.getValue("user_uid").then(function(e){return o.__awaiter(l,void 0,void 0,function(){return o.__generator(this,function(l){switch(l.label){case 0:return[4,this.modalCtrl.create({component:c.a,componentProps:{type:"user",sender:e,receiver:n,_chat_id:""},mode:"ios",enterAnimation:a.a,leaveAnimation:d.a})];case 1:return[4,l.sent().present()];case 2:return[2,l.sent()]}})})}),[2]})})},n.prototype.getRelativeDateTime=function(n){return f(n,"").fromNow()},n.prototype.qualifyConfirm=function(n){return o.__awaiter(this,void 0,void 0,function(){var l=this;return o.__generator(this,function(e){switch(e.label){case 0:return console.log(n),[4,this.alertController.create({header:"Confirm!",message:"Message <strong>text</strong>!!!",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:function(n){console.log("Confirm Cancel: blah")}},{text:"Okay",handler:function(){l.makeQualify(n)}}]})];case 1:return[4,e.sent().present()];case 2:return e.sent(),[2]}})})},n.prototype.makeQualify=function(n){return o.__awaiter(this,void 0,void 0,function(){var l=this;return o.__generator(this,function(e){return this.storage.getValue("user_uid").then(function(e){return o.__awaiter(l,void 0,void 0,function(){return o.__generator(this,function(l){switch(l.label){case 0:return[4,this.modalCtrl.create({component:s.a,componentProps:{pro_id:n.pro_id,request_id:n.id,user_id:n.client_id},mode:"ios",enterAnimation:a.a,leaveAnimation:d.a})];case 1:return[4,l.sent().present()];case 2:return[2,l.sent()]}})})}),[2]})})},n}(),m=function(){return function(){}}(),p=e("pMnS"),h=e("oBZk"),b=e("Ip0R"),C=e("gIcY"),R=t["\u0275crt"]({encapsulation:0,styles:[[".card-separator[_ngcontent-%COMP%]{background-color:#00000047}.request-card-header[_ngcontent-%COMP%]{padding-bottom:0!important}.request-badge-margin[_ngcontent-%COMP%]{margin-left:.5rem}.request.title[_ngcontent-%COMP%]{font-size:1.3rem}"]],data:{}});function v(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"ion-badge",[["class","request-badge-margin"],["color","danger"]],null,null,null,h.U,h.d)),t["\u0275did"](1,49152,null,0,u.j,[t.ChangeDetectorRef,t.ElementRef],{color:[0,"color"]},null),(n()(),t["\u0275ted"](2,0,[" "," "]))],function(n,l){n(l,1,0,"danger")},function(n,l){n(l,2,0,l.parent.context.$implicit.postulants)})}function _(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"ion-badge",[["class","request-badge-margin"],["color","danger"]],null,null,null,h.U,h.d)),t["\u0275did"](1,49152,null,0,u.j,[t.ChangeDetectorRef,t.ElementRef],{color:[0,"color"]},null),(n()(),t["\u0275ted"](-1,0,[" 0 "]))],function(n,l){n(l,1,0,"danger")},null)}function k(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"ion-button",[["color","danger"],["expand","block"],["slot","end"]],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.qualifyConfirm(null==n.parent.context.$implicit?null:n.parent.context.$implicit.dataGeneral)&&t),t},h.V,h.e)),t["\u0275did"](1,49152,null,0,u.k,[t.ChangeDetectorRef,t.ElementRef],{color:[0,"color"],expand:[1,"expand"]},null),(n()(),t["\u0275ted"](-1,0,[" Finalizar "]))],function(n,l){n(l,1,0,"danger","block")},null)}function E(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"ion-button",[["color","dark"],["expand","block"],["fill","outline"],["slot","end"]],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.viewRequest(null==n.parent.context.$implicit?null:n.parent.context.$implicit.dataGeneral)&&t),t},h.V,h.e)),t["\u0275did"](1,49152,null,0,u.k,[t.ChangeDetectorRef,t.ElementRef],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"]},null),(n()(),t["\u0275ted"](-1,0,[" Ver "]))],function(n,l){n(l,1,0,"dark","block","outline")},null)}function D(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,24,"ion-card",[["mode","md"]],null,null,null,h.bb,h.g)),t["\u0275did"](1,49152,null,0,u.m,[t.ChangeDetectorRef,t.ElementRef],{mode:[0,"mode"]},null),(n()(),t["\u0275eld"](2,0,null,0,10,"ion-card-header",[["class","request-card-header"]],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.viewRequest(null==n.context.$implicit?null:n.context.$implicit.dataGeneral)&&t),t},h.Y,h.i)),t["\u0275did"](3,49152,null,0,u.o,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](4,0,null,0,2,"ion-card-title",[["class","request.title"]],null,null,null,h.ab,h.k)),t["\u0275did"](5,49152,null,0,u.q,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275ted"](6,0,["",""])),(n()(),t["\u0275eld"](7,0,null,0,5,"ion-item",[["lines","none"],["no-margin",""],["no-padding",""]],null,null,null,h.lb,h.t)),t["\u0275did"](8,49152,null,0,u.H,[t.ChangeDetectorRef,t.ElementRef],{lines:[0,"lines"]},null),(n()(),t["\u0275ted"](9,0,[" "," "])),(n()(),t["\u0275eld"](10,0,null,0,2,"ion-badge",[["class","request-badge-margin"],["color","orange"]],null,null,null,h.U,h.d)),t["\u0275did"](11,49152,null,0,u.j,[t.ChangeDetectorRef,t.ElementRef],{color:[0,"color"]},null),(n()(),t["\u0275ted"](12,0,["",""])),(n()(),t["\u0275eld"](13,0,null,0,0,"hr",[["class","card-separator"]],null,null,null,null,null)),(n()(),t["\u0275eld"](14,0,null,0,10,"ion-item",[["lines","none"]],null,null,null,h.lb,h.t)),t["\u0275did"](15,49152,null,0,u.H,[t.ChangeDetectorRef,t.ElementRef],{lines:[0,"lines"]},null),(n()(),t["\u0275ted"](-1,0,[" Postulantes "])),(n()(),t["\u0275and"](16777216,null,0,1,null,v)),t["\u0275did"](18,16384,null,0,b.j,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,_)),t["\u0275did"](20,16384,null,0,b.j,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,k)),t["\u0275did"](22,16384,null,0,b.j,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,E)),t["\u0275did"](24,16384,null,0,b.j,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,1,0,"md"),n(l,8,0,"none"),n(l,11,0,"orange"),n(l,15,0,"none"),n(l,18,0,l.context.$implicit.postulants>0),n(l,20,0,!l.context.$implicit.postulants>0),n(l,22,0,"in_progress"===(null==l.context.$implicit?null:l.context.$implicit.dataGeneral.state)),n(l,24,0,"in_progress"!==(null==l.context.$implicit?null:l.context.$implicit.dataGeneral.state))},function(n,l){var e=l.component;n(l,6,0,null==l.context.$implicit?null:l.context.$implicit.dataGeneral.title),n(l,9,0,e.getRelativeDateTime(null==l.context.$implicit?null:l.context.$implicit.dataGeneral.created_date)),n(l,12,0,null==l.context.$implicit?null:l.context.$implicit.dataGeneral.service_name)})}function w(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,35,"ion-header",[],null,null,null,h.hb,h.q)),t["\u0275did"](1,49152,null,0,u.B,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](2,0,null,0,9,"ion-toolbar",[["mode","ios"]],null,null,null,h.Hb,h.Q)),t["\u0275did"](3,49152,null,0,u.Bb,[t.ChangeDetectorRef,t.ElementRef],{mode:[0,"mode"]},null),(n()(),t["\u0275eld"](4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,h.W,h.f)),t["\u0275did"](5,49152,null,0,u.l,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](6,0,null,0,2,"ion-back-button",[["color","dark"],["icon","ios-arrow-back"],["text",""]],null,[[null,"click"]],function(n,l,e){var o=!0;return"click"===l&&(o=!1!==t["\u0275nov"](n,8).onClick(e)&&o),o},h.T,h.c)),t["\u0275did"](7,49152,null,0,u.g,[t.ChangeDetectorRef,t.ElementRef],{color:[0,"color"],icon:[1,"icon"],text:[2,"text"]},null),t["\u0275did"](8,16384,null,0,u.h,[[2,u.hb],u.Ib],null,null),(n()(),t["\u0275eld"](9,0,null,0,2,"ion-title",[],null,null,null,h.Gb,h.P)),t["\u0275did"](10,49152,null,0,u.zb,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275ted"](-1,0,["Historial de solicitudes"])),(n()(),t["\u0275eld"](12,0,null,0,23,"ion-toolbar",[["mode","ios"]],null,null,null,h.Hb,h.Q)),t["\u0275did"](13,49152,null,0,u.Bb,[t.ChangeDetectorRef,t.ElementRef],{mode:[0,"mode"]},null),(n()(),t["\u0275eld"](14,0,null,0,21,"ion-segment",[["color","dark"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionChange"],[null,"ngModelChange"],[null,"ionBlur"]],function(n,l,e){var o=!0,u=n.component;return"ionBlur"===l&&(o=!1!==t["\u0275nov"](n,15)._handleBlurEvent()&&o),"ionChange"===l&&(o=!1!==t["\u0275nov"](n,15)._handleChangeEvent(e.target.value)&&o),"ionChange"===l&&(o=!1!==u.segmentChanged(e.detail.value)&&o),"ngModelChange"===l&&(o=!1!==(u.segment_value=e)&&o),o},h.xb,h.F)),t["\u0275did"](15,16384,null,0,u.Mb,[t.ElementRef],null,null),t["\u0275prd"](1024,null,C.NG_VALUE_ACCESSOR,function(n){return[n]},[u.Mb]),t["\u0275did"](17,671744,null,0,C.NgModel,[[8,null],[8,null],[8,null],[6,C.NG_VALUE_ACCESSOR]],{model:[0,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,C.NgControl,null,[C.NgModel]),t["\u0275did"](19,16384,null,0,C.NgControlStatus,[[4,C.NgControl]],null,null),t["\u0275did"](20,49152,null,0,u.kb,[t.ChangeDetectorRef,t.ElementRef],{color:[0,"color"]},null),(n()(),t["\u0275eld"](21,0,null,0,4,"ion-segment-button",[["value","created"]],null,null,null,h.wb,h.G)),t["\u0275did"](22,49152,null,0,u.lb,[t.ChangeDetectorRef,t.ElementRef],{value:[0,"value"]},null),(n()(),t["\u0275eld"](23,0,null,0,2,"ion-label",[],null,null,null,h.mb,h.v)),t["\u0275did"](24,49152,null,0,u.N,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275ted"](-1,0,["Solicitados"])),(n()(),t["\u0275eld"](26,0,null,0,4,"ion-segment-button",[["value","in_progress"]],null,null,null,h.wb,h.G)),t["\u0275did"](27,49152,null,0,u.lb,[t.ChangeDetectorRef,t.ElementRef],{value:[0,"value"]},null),(n()(),t["\u0275eld"](28,0,null,0,2,"ion-label",[],null,null,null,h.mb,h.v)),t["\u0275did"](29,49152,null,0,u.N,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275ted"](-1,0,["En progreso"])),(n()(),t["\u0275eld"](31,0,null,0,4,"ion-segment-button",[["value","finalized"]],null,null,null,h.wb,h.G)),t["\u0275did"](32,49152,null,0,u.lb,[t.ChangeDetectorRef,t.ElementRef],{value:[0,"value"]},null),(n()(),t["\u0275eld"](33,0,null,0,2,"ion-label",[],null,null,null,h.mb,h.v)),t["\u0275did"](34,49152,null,0,u.N,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275ted"](-1,0,["Finalizados"])),(n()(),t["\u0275eld"](36,0,null,null,11,"ion-content",[],null,null,null,h.db,h.m)),t["\u0275did"](37,49152,null,0,u.u,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](38,0,null,0,9,"ion-grid",[],null,null,null,h.gb,h.p)),t["\u0275did"](39,49152,null,0,u.A,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](40,0,null,0,7,"ion-row",[],null,null,null,h.ub,h.D)),t["\u0275did"](41,49152,null,0,u.ib,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](42,0,null,0,5,"ion-col",[],null,null,null,h.cb,h.l)),t["\u0275did"](43,49152,null,0,u.t,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](44,0,null,0,3,"ion-list",[],null,null,null,h.ob,h.w)),t["\u0275did"](45,49152,null,0,u.O,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275and"](16777216,null,0,1,null,D)),t["\u0275did"](47,278528,null,0,b.i,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var e=l.component;n(l,3,0,"ios"),n(l,7,0,"dark","ios-arrow-back",""),n(l,13,0,"ios"),n(l,17,0,e.segment_value),n(l,20,0,"dark"),n(l,22,0,"created"),n(l,27,0,"in_progress"),n(l,32,0,"finalized"),n(l,47,0,e.list)},function(n,l){n(l,14,0,t["\u0275nov"](l,19).ngClassUntouched,t["\u0275nov"](l,19).ngClassTouched,t["\u0275nov"](l,19).ngClassPristine,t["\u0275nov"](l,19).ngClassDirty,t["\u0275nov"](l,19).ngClassValid,t["\u0275nov"](l,19).ngClassInvalid,t["\u0275nov"](l,19).ngClassPending)})}function x(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-request-history",[],null,null,null,w,R)),t["\u0275did"](1,114688,null,0,g,[i.a,u.Ib,u.Hb,u.b,r.a],null,null)],function(n,l){n(l,1,0)},null)}var y=t["\u0275ccf"]("app-request-history",g,x,{},{},[]),q=e("ZYCi");e.d(l,"RequestHistoryPageModuleNgFactory",function(){return G});var G=t["\u0275cmf"](m,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[p.a,y]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,b.l,b.k,[t.LOCALE_ID,[2,b.t]]),t["\u0275mpd"](4608,C["\u0275angular_packages_forms_forms_j"],C["\u0275angular_packages_forms_forms_j"],[]),t["\u0275mpd"](4608,u.c,u.c,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,u.Hb,u.Hb,[u.c,t.ComponentFactoryResolver,t.Injector,b.d]),t["\u0275mpd"](4608,u.Kb,u.Kb,[u.c,t.ComponentFactoryResolver,t.Injector,b.d]),t["\u0275mpd"](1073742336,b.c,b.c,[]),t["\u0275mpd"](1073742336,C["\u0275angular_packages_forms_forms_bc"],C["\u0275angular_packages_forms_forms_bc"],[]),t["\u0275mpd"](1073742336,C.FormsModule,C.FormsModule,[]),t["\u0275mpd"](1073742336,u.Db,u.Db,[]),t["\u0275mpd"](1073742336,q.n,q.n,[[2,q.t],[2,q.m]]),t["\u0275mpd"](1073742336,m,m,[]),t["\u0275mpd"](1024,q.k,function(){return[[{path:"",component:g}]]},[])])})}}]);