(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{fHLF:function(n,e,l){"use strict";l.r(e);var t=l("CcnG"),o=l("mrSG"),r=l("ZJFI"),u=l("ZZ/e"),a=function(){function n(n,e,l){this.database=n,this.alertController=e,this.navCtrl=l,this.view_type="list"}return n.prototype.ngOnInit=function(){var n=this;this.database.getCategories().subscribe(function(e){n.items=e,console.log(e)})},n.prototype.chagedView=function(){this.view_type="list"===this.view_type?"card":"list"},n.prototype.visibleSubC=function(n){n.show_subcategories=!n.show_subcategories},n.prototype.selectEs=function(n){return o.__awaiter(this,void 0,void 0,function(){var e,l,t,r,u=this;return o.__generator(this,function(o){switch(o.label){case 0:for(console.log(n),e=[],l=0,t=n.SubCategories;l<t.length;l++)r=t[l],console.log(r),e.push({name:r.dataGeneral.name,type:"radio",label:r.dataGeneral.name,value:r.dataGeneral,checked:!1});return console.log(e),[4,this.alertController.create({header:"Prompt!",inputs:e,buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:function(){console.log("Confirm Cancel")}},{text:"Ok",handler:function(n){u.goProList(n)}}]})];case 1:return[4,o.sent().present()];case 2:return o.sent(),[2]}})})},n.prototype.goProList=function(n){console.log(n),this.navCtrl.navigateForward("pros-list-category/"+n.id+"/"+n.name)},n}(),c=function(){return function(){}}(),i=l("pMnS"),s=l("oBZk"),d=t["\u0275crt"]({encapsulation:0,styles:[[".sub-categories[_ngcontent-%COMP%]{margin-left:1rem}.icon-margin[_ngcontent-%COMP%]{margin-right:1rem}"]],data:{}});function f(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,16,"ion-header",[],null,null,null,s.jb,s.r)),t["\u0275did"](1,49152,null,0,u.D,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](2,0,null,0,14,"ion-toolbar",[["mode","ios"]],null,null,null,s.Jb,s.R)),t["\u0275did"](3,49152,null,0,u.Db,[t.ChangeDetectorRef,t.ElementRef],{mode:[0,"mode"]},null),(n()(),t["\u0275eld"](4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,s.X,s.f)),t["\u0275did"](5,49152,null,0,u.n,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](6,0,null,0,2,"ion-back-button",[["color","dark"],["icon","ios-arrow-back"],["text",""]],null,[[null,"click"]],function(n,e,l){var o=!0;return"click"===e&&(o=!1!==t["\u0275nov"](n,8).onClick(l)&&o),o},s.U,s.c)),t["\u0275did"](7,49152,null,0,u.i,[t.ChangeDetectorRef,t.ElementRef],{color:[0,"color"],icon:[1,"icon"],text:[2,"text"]},null),t["\u0275did"](8,16384,null,0,u.j,[[2,u.jb],u.Kb],null,null),(n()(),t["\u0275eld"](9,0,null,0,2,"ion-title",[],null,null,null,s.Ib,s.Q)),t["\u0275did"](10,49152,null,0,u.Bb,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275ted"](-1,0,["categories"])),(n()(),t["\u0275eld"](12,0,null,0,4,"ion-buttons",[["slot","end"]],null,null,null,s.X,s.f)),t["\u0275did"](13,49152,null,0,u.n,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](14,0,null,0,2,"ion-button",[],null,[[null,"click"]],function(n,e,l){var t=!0;return"click"===e&&(t=!1!==n.component.chagedView()&&t),t},s.W,s.e)),t["\u0275did"](15,49152,null,0,u.m,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275ted"](-1,0,[" Lista "])),(n()(),t["\u0275eld"](17,0,null,null,1,"ion-content",[],null,null,null,s.fb,s.n)),t["\u0275did"](18,49152,null,0,u.w,[t.ChangeDetectorRef,t.ElementRef],null,null)],function(n,e){n(e,3,0,"ios"),n(e,7,0,"dark","ios-arrow-back","")},null)}function m(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-categories",[],null,null,null,f,d)),t["\u0275did"](1,114688,null,0,a,[r.a,u.b,u.Kb],null,null)],function(n,e){n(e,1,0)},null)}var p=t["\u0275ccf"]("app-categories",a,m,{},{},[]),g=l("Ip0R"),b=l("gIcY"),h=l("ZYCi");l.d(e,"CategoriesPageModuleNgFactory",function(){return C});var C=t["\u0275cmf"](c,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,p]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,g.m,g.l,[t.LOCALE_ID,[2,g.w]]),t["\u0275mpd"](4608,b["\u0275angular_packages_forms_forms_j"],b["\u0275angular_packages_forms_forms_j"],[]),t["\u0275mpd"](4608,u.c,u.c,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,u.Jb,u.Jb,[u.c,t.ComponentFactoryResolver,t.Injector,g.d]),t["\u0275mpd"](4608,u.Nb,u.Nb,[u.c,t.ComponentFactoryResolver,t.Injector,g.d]),t["\u0275mpd"](1073742336,g.c,g.c,[]),t["\u0275mpd"](1073742336,b["\u0275angular_packages_forms_forms_bc"],b["\u0275angular_packages_forms_forms_bc"],[]),t["\u0275mpd"](1073742336,b.FormsModule,b.FormsModule,[]),t["\u0275mpd"](1073742336,u.Fb,u.Fb,[]),t["\u0275mpd"](1073742336,h.n,h.n,[[2,h.t],[2,h.m]]),t["\u0275mpd"](1073742336,c,c,[]),t["\u0275mpd"](1024,h.k,function(){return[[{path:"",component:a}]]},[])])})}}]);