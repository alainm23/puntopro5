(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{fHLF:function(l,n,e){"use strict";e.r(n);var t=e("CcnG"),u=e("mrSG"),o=e("ZJFI"),i=e("ZZ/e"),r=function(){function l(l,n,e){this.database=l,this.alertController=n,this.navCtrl=e,this.view_type="list"}return l.prototype.ngOnInit=function(){var l=this;this.database.getCategories().subscribe(function(n){l.items=n,console.log(n)})},l.prototype.chagedView=function(){this.view_type="list"===this.view_type?"card":"list"},l.prototype.visibleSubC=function(l){l.show_subcategories=!l.show_subcategories},l.prototype.selectEs=function(l){return u.__awaiter(this,void 0,void 0,function(){var n,e,t,o,i=this;return u.__generator(this,function(u){switch(u.label){case 0:for(console.log(l),n=[],e=0,t=l.SubCategories;e<t.length;e++)o=t[e],console.log(o),n.push({name:o.dataGeneral.name,type:"radio",label:o.dataGeneral.name,value:o.dataGeneral,checked:!1});return console.log(n),[4,this.alertController.create({header:"Prompt!",inputs:n,buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:function(){console.log("Confirm Cancel")}},{text:"Ok",handler:function(l){i.goProList(l)}}]})];case 1:return[4,u.sent().present()];case 2:return u.sent(),[2]}})})},l.prototype.goProList=function(l){console.log(l),this.navCtrl.navigateForward("pros-list-category/"+l.id+"/"+l.name)},l}(),c=function(){return function(){}}(),a=e("pMnS"),d=e("oBZk"),f=e("Ip0R"),s=t["\u0275crt"]({encapsulation:0,styles:[[".sub-categories[_ngcontent-%COMP%]{margin-left:1rem}.icon-margin[_ngcontent-%COMP%]{margin-right:1rem}"]],data:{}});function m(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,9,"ion-col",[],null,null,null,d.bb,d.l)),t["\u0275did"](1,49152,null,0,i.t,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275eld"](2,0,null,0,7,"ion-card",[],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.selectEs(l.context.$implicit)&&t),t},d.ab,d.g)),t["\u0275did"](3,49152,null,0,i.m,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275eld"](4,0,null,0,0,"img",[["src","https://picsum.photos/300/300"]],null,null,null,null,null)),(l()(),t["\u0275eld"](5,0,null,0,4,"ion-item",[["no-lines",""],["text-center",""]],null,null,null,d.kb,d.t)),t["\u0275did"](6,49152,null,0,i.H,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275eld"](7,0,null,0,2,"ion-label",[],null,null,null,d.lb,d.v)),t["\u0275did"](8,49152,null,0,i.N,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275ted"](9,0,[" "," "]))],null,function(l,n){l(n,9,0,null==n.context.$implicit?null:n.context.$implicit.data.name)})}function g(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,5,"ion-grid",[],null,null,null,d.fb,d.p)),t["\u0275did"](1,49152,null,0,i.A,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275eld"](2,0,null,0,3,"ion-row",[],null,null,null,d.tb,d.D)),t["\u0275did"](3,49152,null,0,i.ib,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275and"](16777216,null,0,1,null,m)),t["\u0275did"](5,278528,null,0,f.i,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,5,0,n.component.items)},null)}function p(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,4,"ion-item",[],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.goProList(null==l.context.$implicit?null:l.context.$implicit.dataGeneral)&&t),t},d.kb,d.t)),t["\u0275did"](1,49152,null,0,i.H,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275eld"](2,0,null,0,1,"ion-icon",[["class","icon-margin"],["name","arrow-dropright"],["slot","start"]],null,null,null,d.hb,d.r)),t["\u0275did"](3,49152,null,0,i.C,[t.ChangeDetectorRef,t.ElementRef],{name:[0,"name"]},null),(l()(),t["\u0275ted"](4,0,[" "," "]))],function(l,n){l(n,3,0,"arrow-dropright")},function(l,n){l(n,4,0,null==n.context.$implicit?null:n.context.$implicit.dataGeneral.name)})}function b(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,3,"ion-list",[["class","sub-categories"]],null,null,null,d.nb,d.w)),t["\u0275did"](1,49152,null,0,i.O,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275and"](16777216,null,0,1,null,p)),t["\u0275did"](3,278528,null,0,f.i,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,3,0,null==n.parent.context.$implicit?null:n.parent.context.$implicit.SubCategories)},null)}function R(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,7,"div",[],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,4,"ion-item",[],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.visibleSubC(l.context.$implicit)&&t),t},d.kb,d.t)),t["\u0275did"](2,49152,null,0,i.H,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275eld"](3,0,null,0,1,"ion-icon",[["class","icon-margin"],["name","arrow-dropright"],["slot","start"]],null,null,null,d.hb,d.r)),t["\u0275did"](4,49152,null,0,i.C,[t.ChangeDetectorRef,t.ElementRef],{name:[0,"name"]},null),(l()(),t["\u0275ted"](5,0,[" "," "])),(l()(),t["\u0275and"](16777216,null,null,1,null,b)),t["\u0275did"](7,16384,null,0,f.j,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,4,0,"arrow-dropright"),l(n,7,0,n.context.$implicit.show_subcategories)},function(l,n){l(n,5,0,null==n.context.$implicit?null:n.context.$implicit.data.name)})}function h(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,9,"ion-grid",[],null,null,null,d.fb,d.p)),t["\u0275did"](1,49152,null,0,i.A,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275eld"](2,0,null,0,7,"ion-row",[],null,null,null,d.tb,d.D)),t["\u0275did"](3,49152,null,0,i.ib,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275eld"](4,0,null,0,5,"ion-col",[],null,null,null,d.bb,d.l)),t["\u0275did"](5,49152,null,0,i.t,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275eld"](6,0,null,0,3,"ion-list",[],null,null,null,d.nb,d.w)),t["\u0275did"](7,49152,null,0,i.O,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275and"](16777216,null,0,1,null,R)),t["\u0275did"](9,278528,null,0,f.i,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,9,0,n.component.items)},null)}function C(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,16,"ion-header",[],null,null,null,d.gb,d.q)),t["\u0275did"](1,49152,null,0,i.B,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275eld"](2,0,null,0,14,"ion-toolbar",[["mode","ios"]],null,null,null,d.Fb,d.P)),t["\u0275did"](3,49152,null,0,i.Bb,[t.ChangeDetectorRef,t.ElementRef],{mode:[0,"mode"]},null),(l()(),t["\u0275eld"](4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,d.V,d.f)),t["\u0275did"](5,49152,null,0,i.l,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275eld"](6,0,null,0,2,"ion-back-button",[["color","dark"],["icon","ios-arrow-back"],["text",""]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](l,8).onClick(e)&&u),u},d.S,d.c)),t["\u0275did"](7,49152,null,0,i.g,[t.ChangeDetectorRef,t.ElementRef],{color:[0,"color"],icon:[1,"icon"],text:[2,"text"]},null),t["\u0275did"](8,16384,null,0,i.h,[[2,i.hb],i.Ib],null,null),(l()(),t["\u0275eld"](9,0,null,0,2,"ion-title",[],null,null,null,d.Eb,d.O)),t["\u0275did"](10,49152,null,0,i.zb,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275ted"](-1,0,["categories"])),(l()(),t["\u0275eld"](12,0,null,0,4,"ion-buttons",[["slot","end"]],null,null,null,d.V,d.f)),t["\u0275did"](13,49152,null,0,i.l,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275eld"](14,0,null,0,2,"ion-button",[],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.chagedView()&&t),t},d.U,d.e)),t["\u0275did"](15,49152,null,0,i.k,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275ted"](-1,0,[" Lista "])),(l()(),t["\u0275eld"](17,0,null,null,5,"ion-content",[],null,null,null,d.cb,d.m)),t["\u0275did"](18,49152,null,0,i.u,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275and"](16777216,null,0,1,null,g)),t["\u0275did"](20,16384,null,0,f.j,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,h)),t["\u0275did"](22,16384,null,0,f.j,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,3,0,"ios"),l(n,7,0,"dark","ios-arrow-back",""),l(n,20,0,"card"===e.view_type),l(n,22,0,"list"===e.view_type)},null)}function v(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-categories",[],null,null,null,C,s)),t["\u0275did"](1,114688,null,0,r,[o.a,i.b,i.Ib],null,null)],function(l,n){l(n,1,0)},null)}var w=t["\u0275ccf"]("app-categories",r,v,{},{},[]),k=e("gIcY"),D=e("ZYCi");e.d(n,"CategoriesPageModuleNgFactory",function(){return _});var _=t["\u0275cmf"](c,[],function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[a.a,w]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,f.l,f.k,[t.LOCALE_ID,[2,f.t]]),t["\u0275mpd"](4608,k["\u0275angular_packages_forms_forms_j"],k["\u0275angular_packages_forms_forms_j"],[]),t["\u0275mpd"](4608,i.c,i.c,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,i.Hb,i.Hb,[i.c,t.ComponentFactoryResolver,t.Injector,f.d]),t["\u0275mpd"](4608,i.Kb,i.Kb,[i.c,t.ComponentFactoryResolver,t.Injector,f.d]),t["\u0275mpd"](1073742336,f.c,f.c,[]),t["\u0275mpd"](1073742336,k["\u0275angular_packages_forms_forms_bc"],k["\u0275angular_packages_forms_forms_bc"],[]),t["\u0275mpd"](1073742336,k.FormsModule,k.FormsModule,[]),t["\u0275mpd"](1073742336,i.Db,i.Db,[]),t["\u0275mpd"](1073742336,D.n,D.n,[[2,D.t],[2,D.m]]),t["\u0275mpd"](1073742336,c,c,[]),t["\u0275mpd"](1024,D.k,function(){return[[{path:"",component:r}]]},[])])})}}]);