(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"/yGZ":function(n,l,e){"use strict";e.r(l);var o=e("CcnG"),t=e("mrSG"),r=e("ZZ/e"),u=e("lGQG"),i=e("gIcY"),a=function(){function n(n,l,e,o,t,r,u){this.loadingController=n,this.alertController=l,this.toastController=e,this.navCtrl=o,this.auth=t,this.platform=r,this.menu=u,this.css_margin_top="50%"}return n.prototype.ngOnInit=function(){this.form=new i.FormGroup({email:new i.FormControl("",i.Validators.required),password:new i.FormControl("",i.Validators.required)}),this.menu.enable(!1),this.css_margin_top=this.platform.height()<=568?"0%":"50%"},n.prototype.onSubmit=function(){return t.__awaiter(this,void 0,void 0,function(){var n,l,e=this;return t.__generator(this,function(o){switch(o.label){case 0:return[4,this.loadingController.create({message:"Procesando Informacion ..."})];case 1:return[4,(n=o.sent()).present()];case 2:return o.sent(),this.auth.signInWithEmailAndPassword((l=this.form.value).email,l.password).then(function(l){return t.__awaiter(e,void 0,void 0,function(){return t.__generator(this,function(l){switch(l.label){case 0:return[4,n.dismiss()];case 1:return l.sent(),[4,this.toastController.create({message:"Bienvenido a PuntoPro",duration:2e3,position:"top"})];case 2:return l.sent().present(),this.navCtrl.navigateRoot("home"),[2]}})})},function(l){return t.__awaiter(e,void 0,void 0,function(){return t.__generator(this,function(e){switch(e.label){case 0:return[4,n.dismiss()];case 1:return e.sent(),console.log(l),[4,this.alertController.create({header:"Opppps!",message:"auth/network-request-failed"==l.code?"No tienes acceso a internet, no se puede proceder.":"auth/user-not-found"==l.code?"No encontramos a nigun usuario con ese correo":"auth/wrong-password"==l.code?"Ingrese una contrase\xf1a valida":"auth/too-many-requests"==l.code?"Hemos bloqueado todas las solicitudes de este dispositivo debido a una actividad inusual. Int\xe9ntalo m\xe1s tarde.":l.message,buttons:["OK"]})];case 2:return[4,e.sent().present()];case 3:return e.sent(),[2]}})})}),[2]}})})},n.prototype.google=function(){this.auth.googleLogin()},n.prototype.facebook=function(){this.auth.facebookLogin()},n.prototype.signUp=function(){this.navCtrl.navigateForward("sign-up")},n.prototype.resetPassword=function(){return t.__awaiter(this,void 0,void 0,function(){var n=this;return t.__generator(this,function(l){switch(l.label){case 0:return[4,this.alertController.create({header:"\xbfOlvidaste tu contrase\xf1a?",message:"Ingresa tu correo electronico y te enviaremos un correo indicandote los pasos para poder recuperarla.",inputs:[{name:"email",placeholder:"Correo electronico",type:"email"}],buttons:[{text:"Cancelar",role:"cancel"},{text:"Enviar",handler:function(l){return t.__awaiter(n,void 0,void 0,function(){var n,e=this;return t.__generator(this,function(o){switch(o.label){case 0:return[4,this.loadingController.create({message:"Procesando Informacion ..."})];case 1:return[4,(n=o.sent()).present()];case 2:return o.sent(),this.auth.sendPasswordResetEmail(l.email).then(function(o){return t.__awaiter(e,void 0,void 0,function(){return t.__generator(this,function(e){switch(e.label){case 0:return[4,n.dismiss()];case 1:return e.sent(),[4,this.alertController.create({header:"Usuario encontrado",message:"Acabamos de enviar un email a <strong>"+l.email+"</strong>, incluyendo los pasos para resetear la contrase\xf1a",buttons:["OK"]})];case 2:return[4,e.sent().present()];case 3:return e.sent(),[2]}})})},function(l){return t.__awaiter(e,void 0,void 0,function(){return t.__generator(this,function(e){switch(e.label){case 0:return[4,n.dismiss()];case 1:return e.sent(),[4,this.alertController.create({header:"Opppps!",message:"auth/network-request-failed"==l.code?"No tienes acceso a internet, no se puede proceder.":"auth/user-not-found"==l.code?"No encontramos a nigun usuario con ese correo":l.message,buttons:["OK"]})];case 2:return[4,e.sent().present()];case 3:return e.sent(),[2]}})})}),[2]}})})}}]})];case 1:return[4,l.sent().present()];case 2:return l.sent(),[2]}})})},n}(),s=function(){return function(){}}(),d=e("pMnS"),c=e("oBZk"),g=e("Ip0R"),m=o["\u0275crt"]({encapsulation:0,styles:[[".logo-size[_ngcontent-%COMP%]{width:7rem}ion-content[_ngcontent-%COMP%]{--background:none;background-image:url(/assets/img/background-login.jpg);background-position:center top;background-repeat:no-repeat;background-size:cover}.margin-right-1[_ngcontent-%COMP%]{margin-right:1rem}.social-icon[_ngcontent-%COMP%]{font-size:3rem}.entry[_ngcontent-%COMP%]{--border-radius:4px;--background:#393B47;--color:#fff;margin-left:.4rem;margin-right:.4rem}.entry[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#fff}.margin-bottom[_ngcontent-%COMP%]{margin-bottom:.5rem}.sub-title-color[_ngcontent-%COMP%]{margin-top:0;color:#ffffffab}.help-icon[_ngcontent-%COMP%]{color:#ffffff8a;border:1px solid #ffffff8a;border-radius:50%;font-size:20px}.transparent[_ngcontent-%COMP%]{background-color:transparentM}"]],data:{}});function p(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,83,"ion-content",[["padding",""]],null,null,null,c.db,c.m)),o["\u0275did"](1,49152,null,0,r.u,[o.ChangeDetectorRef,o.ElementRef],null,null),(n()(),o["\u0275eld"](2,0,null,0,2,"div",[["text-right",""]],null,null,null,null,null)),(n()(),o["\u0275eld"](3,0,null,null,1,"ion-icon",[["class","help-icon"],["name","help"],["slot","icon-only"]],null,null,null,c.ib,c.r)),o["\u0275did"](4,49152,null,0,r.C,[o.ChangeDetectorRef,o.ElementRef],{name:[0,"name"]},null),(n()(),o["\u0275eld"](5,0,null,0,78,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,l,e){var t=!0;return"submit"===l&&(t=!1!==o["\u0275nov"](n,7).onSubmit(e)&&t),"reset"===l&&(t=!1!==o["\u0275nov"](n,7).onReset()&&t),t},null,null)),o["\u0275did"](6,16384,null,0,i["\u0275angular_packages_forms_forms_bh"],[],null,null),o["\u0275did"](7,540672,null,0,i.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},null),o["\u0275prd"](2048,null,i.ControlContainer,null,[i.FormGroupDirective]),o["\u0275did"](9,16384,null,0,i.NgControlStatusGroup,[[4,i.ControlContainer]],null,null),(n()(),o["\u0275eld"](10,0,null,null,73,"ion-grid",[],null,null,null,c.gb,c.p)),o["\u0275did"](11,49152,null,0,r.A,[o.ChangeDetectorRef,o.ElementRef],null,null),(n()(),o["\u0275eld"](12,0,null,0,71,"ion-row",[],null,null,null,c.ub,c.D)),o["\u0275did"](13,49152,null,0,r.ib,[o.ChangeDetectorRef,o.ElementRef],null,null),(n()(),o["\u0275eld"](14,0,null,0,69,"ion-col",[["offset-lg","4"],["offset-md","3"],["offset-sm","2"],["offset-xl","4"],["size-lg","4"],["size-md","6"],["size-sm","8"],["size-xl","4"],["size-xs","12"]],null,null,null,c.cb,c.l)),o["\u0275did"](15,49152,null,0,r.t,[o.ChangeDetectorRef,o.ElementRef],null,null),(n()(),o["\u0275eld"](16,0,null,0,6,"div",[["class","transparent"],["padding",""],["text-center",""]],null,null,null,null,null)),o["\u0275did"](17,278528,null,0,g.m,[o.KeyValueDiffers,o.ElementRef,o.Renderer2],{ngStyle:[0,"ngStyle"]},null),o["\u0275pod"](18,{"margin-top":0}),(n()(),o["\u0275eld"](19,0,null,null,0,"img",[["class","logo-size"],["src","assets/img/image-login.png"]],null,null,null,null,null)),(n()(),o["\u0275eld"](20,0,null,null,2,"p",[["class","sub-title-color"]],null,null,null,null,null)),(n()(),o["\u0275eld"](21,0,null,null,1,"i",[],null,null,null,null,null)),(n()(),o["\u0275ted"](-1,null,["Los mejores profesionales para ti"])),(n()(),o["\u0275eld"](23,0,null,0,12,"ion-item",[["class","entry margin-bottom"],["lines","none"]],null,null,null,c.lb,c.t)),o["\u0275did"](24,49152,null,0,r.H,[o.ChangeDetectorRef,o.ElementRef],{lines:[0,"lines"]},null),(n()(),o["\u0275eld"](25,0,null,0,1,"ion-icon",[["name","mail"],["slot","start"]],null,null,null,c.ib,c.r)),o["\u0275did"](26,49152,null,0,r.C,[o.ChangeDetectorRef,o.ElementRef],{name:[0,"name"]},null),(n()(),o["\u0275eld"](27,0,null,0,8,"ion-input",[["formControlName","email"],["placeholder","Correo electronico"],["required","true"],["type","email"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(n,l,e){var t=!0;return"ionBlur"===l&&(t=!1!==o["\u0275nov"](n,30)._handleBlurEvent()&&t),"ionChange"===l&&(t=!1!==o["\u0275nov"](n,30)._handleInputEvent(e.target.value)&&t),t},c.jb,c.s)),o["\u0275did"](28,16384,null,0,i.RequiredValidator,[],{required:[0,"required"]},null),o["\u0275prd"](1024,null,i.NG_VALIDATORS,function(n){return[n]},[i.RequiredValidator]),o["\u0275did"](30,16384,null,0,r.Nb,[o.ElementRef],null,null),o["\u0275prd"](1024,null,i.NG_VALUE_ACCESSOR,function(n){return[n]},[r.Nb]),o["\u0275did"](32,671744,null,0,i.FormControlName,[[3,i.ControlContainer],[6,i.NG_VALIDATORS],[8,null],[6,i.NG_VALUE_ACCESSOR],[2,i["\u0275angular_packages_forms_forms_k"]]],{name:[0,"name"]},null),o["\u0275prd"](2048,null,i.NgControl,null,[i.FormControlName]),o["\u0275did"](34,16384,null,0,i.NgControlStatus,[[4,i.NgControl]],null,null),o["\u0275did"](35,49152,null,0,r.G,[o.ChangeDetectorRef,o.ElementRef],{placeholder:[0,"placeholder"],required:[1,"required"],type:[2,"type"]},null),(n()(),o["\u0275eld"](36,0,null,0,12,"ion-item",[["class","entry"],["lines","none"]],null,null,null,c.lb,c.t)),o["\u0275did"](37,49152,null,0,r.H,[o.ChangeDetectorRef,o.ElementRef],{lines:[0,"lines"]},null),(n()(),o["\u0275eld"](38,0,null,0,1,"ion-icon",[["name","lock"],["slot","start"]],null,null,null,c.ib,c.r)),o["\u0275did"](39,49152,null,0,r.C,[o.ChangeDetectorRef,o.ElementRef],{name:[0,"name"]},null),(n()(),o["\u0275eld"](40,0,null,0,8,"ion-input",[["formControlName","password"],["placeholder","*********"],["required","true"],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(n,l,e){var t=!0;return"ionBlur"===l&&(t=!1!==o["\u0275nov"](n,43)._handleBlurEvent()&&t),"ionChange"===l&&(t=!1!==o["\u0275nov"](n,43)._handleInputEvent(e.target.value)&&t),t},c.jb,c.s)),o["\u0275did"](41,16384,null,0,i.RequiredValidator,[],{required:[0,"required"]},null),o["\u0275prd"](1024,null,i.NG_VALIDATORS,function(n){return[n]},[i.RequiredValidator]),o["\u0275did"](43,16384,null,0,r.Nb,[o.ElementRef],null,null),o["\u0275prd"](1024,null,i.NG_VALUE_ACCESSOR,function(n){return[n]},[r.Nb]),o["\u0275did"](45,671744,null,0,i.FormControlName,[[3,i.ControlContainer],[6,i.NG_VALIDATORS],[8,null],[6,i.NG_VALUE_ACCESSOR],[2,i["\u0275angular_packages_forms_forms_k"]]],{name:[0,"name"]},null),o["\u0275prd"](2048,null,i.NgControl,null,[i.FormControlName]),o["\u0275did"](47,16384,null,0,i.NgControlStatus,[[4,i.NgControl]],null,null),o["\u0275did"](48,49152,null,0,r.G,[o.ChangeDetectorRef,o.ElementRef],{placeholder:[0,"placeholder"],required:[1,"required"],type:[2,"type"]},null),(n()(),o["\u0275eld"](49,0,null,0,5,"div",[["text-center",""]],null,null,null,null,null)),(n()(),o["\u0275eld"](50,0,null,null,4,"p",[["class","text-white margin-right-1"]],null,null,null,null,null)),(n()(),o["\u0275eld"](51,0,null,null,3,"small",[],null,null,null,null,null)),(n()(),o["\u0275ted"](-1,null,[" \xbfOlvidaste tu contrase\xf1a? "])),(n()(),o["\u0275eld"](53,0,null,null,1,"b",[],null,[[null,"click"]],function(n,l,e){var o=!0;return"click"===l&&(o=!1!==n.component.resetPassword()&&o),o},null,null)),(n()(),o["\u0275ted"](-1,null,["Recueralo aqui >"])),(n()(),o["\u0275eld"](55,0,null,0,18,"ion-row",[],null,null,null,c.ub,c.D)),o["\u0275did"](56,49152,null,0,r.ib,[o.ChangeDetectorRef,o.ElementRef],null,null),(n()(),o["\u0275eld"](57,0,null,0,4,"ion-col",[["size","8"]],null,null,null,c.cb,c.l)),o["\u0275did"](58,49152,null,0,r.t,[o.ChangeDetectorRef,o.ElementRef],{size:[0,"size"]},null),(n()(),o["\u0275eld"](59,0,null,0,2,"ion-button",[["color","violet"],["expand","block"]],null,[[null,"click"]],function(n,l,e){var o=!0;return"click"===l&&(o=!1!==n.component.onSubmit()&&o),o},c.V,c.e)),o["\u0275did"](60,49152,null,0,r.k,[o.ChangeDetectorRef,o.ElementRef],{color:[0,"color"],disabled:[1,"disabled"],expand:[2,"expand"]},null),(n()(),o["\u0275ted"](-1,0,[" CONECTAR "])),(n()(),o["\u0275eld"](62,0,null,0,5,"ion-col",[["size","2"]],null,null,null,c.cb,c.l)),o["\u0275did"](63,49152,null,0,r.t,[o.ChangeDetectorRef,o.ElementRef],{size:[0,"size"]},null),(n()(),o["\u0275eld"](64,0,null,0,3,"ion-button",[["color","violet"],["expand","block"]],null,[[null,"click"]],function(n,l,e){var o=!0;return"click"===l&&(o=!1!==n.component.facebook()&&o),o},c.V,c.e)),o["\u0275did"](65,49152,null,0,r.k,[o.ChangeDetectorRef,o.ElementRef],{color:[0,"color"],expand:[1,"expand"]},null),(n()(),o["\u0275eld"](66,0,null,0,1,"ion-icon",[["name","logo-facebook"],["slot","icon-only"]],null,null,null,c.ib,c.r)),o["\u0275did"](67,49152,null,0,r.C,[o.ChangeDetectorRef,o.ElementRef],{name:[0,"name"]},null),(n()(),o["\u0275eld"](68,0,null,0,5,"ion-col",[["size","2"]],null,null,null,c.cb,c.l)),o["\u0275did"](69,49152,null,0,r.t,[o.ChangeDetectorRef,o.ElementRef],{size:[0,"size"]},null),(n()(),o["\u0275eld"](70,0,null,0,3,"ion-button",[["color","violet"],["expand","block"]],null,[[null,"click"]],function(n,l,e){var o=!0;return"click"===l&&(o=!1!==n.component.google()&&o),o},c.V,c.e)),o["\u0275did"](71,49152,null,0,r.k,[o.ChangeDetectorRef,o.ElementRef],{color:[0,"color"],expand:[1,"expand"]},null),(n()(),o["\u0275eld"](72,0,null,0,1,"ion-icon",[["name","logo-google"],["slot","icon-only"]],null,null,null,c.ib,c.r)),o["\u0275did"](73,49152,null,0,r.C,[o.ChangeDetectorRef,o.ElementRef],{name:[0,"name"]},null),(n()(),o["\u0275eld"](74,0,null,0,5,"div",[["text-center",""]],null,null,null,null,null)),(n()(),o["\u0275eld"](75,0,null,null,4,"p",[["class","text-white margin-right-1"]],null,[[null,"click"]],function(n,l,e){var o=!0;return"click"===l&&(o=!1!==n.component.signUp()&&o),o},null,null)),(n()(),o["\u0275eld"](76,0,null,null,3,"small",[],null,null,null,null,null)),(n()(),o["\u0275ted"](-1,null,[" \xbfNo tienes una cuenta? "])),(n()(),o["\u0275eld"](78,0,null,null,1,"b",[],null,null,null,null,null)),(n()(),o["\u0275ted"](-1,null,["Registrate ahora"])),(n()(),o["\u0275eld"](80,0,null,0,3,"div",[["text-center",""]],null,null,null,null,null)),(n()(),o["\u0275eld"](81,0,null,null,2,"p",[["class","text-white"]],null,null,null,null,null)),(n()(),o["\u0275eld"](82,0,null,null,1,"small",[],null,null,null,null,null)),(n()(),o["\u0275ted"](-1,null,["\xbfPor que tengo que registrarme?"]))],function(n,l){var e=l.component;n(l,4,0,"help"),n(l,7,0,e.form);var o=n(l,18,0,e.css_margin_top);n(l,17,0,o),n(l,24,0,"none"),n(l,26,0,"mail"),n(l,28,0,"true"),n(l,32,0,"email"),n(l,35,0,"Correo electronico","true","email"),n(l,37,0,"none"),n(l,39,0,"lock"),n(l,41,0,"true"),n(l,45,0,"password"),n(l,48,0,"*********","true","password"),n(l,58,0,"8"),n(l,60,0,"violet",!e.form.valid,"block"),n(l,63,0,"2"),n(l,65,0,"violet","block"),n(l,67,0,"logo-facebook"),n(l,69,0,"2"),n(l,71,0,"violet","block"),n(l,73,0,"logo-google")},function(n,l){n(l,5,0,o["\u0275nov"](l,9).ngClassUntouched,o["\u0275nov"](l,9).ngClassTouched,o["\u0275nov"](l,9).ngClassPristine,o["\u0275nov"](l,9).ngClassDirty,o["\u0275nov"](l,9).ngClassValid,o["\u0275nov"](l,9).ngClassInvalid,o["\u0275nov"](l,9).ngClassPending),n(l,27,0,o["\u0275nov"](l,28).required?"":null,o["\u0275nov"](l,34).ngClassUntouched,o["\u0275nov"](l,34).ngClassTouched,o["\u0275nov"](l,34).ngClassPristine,o["\u0275nov"](l,34).ngClassDirty,o["\u0275nov"](l,34).ngClassValid,o["\u0275nov"](l,34).ngClassInvalid,o["\u0275nov"](l,34).ngClassPending),n(l,40,0,o["\u0275nov"](l,41).required?"":null,o["\u0275nov"](l,47).ngClassUntouched,o["\u0275nov"](l,47).ngClassTouched,o["\u0275nov"](l,47).ngClassPristine,o["\u0275nov"](l,47).ngClassDirty,o["\u0275nov"](l,47).ngClassValid,o["\u0275nov"](l,47).ngClassInvalid,o["\u0275nov"](l,47).ngClassPending)})}function f(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,1,"app-login",[],null,null,null,p,m)),o["\u0275did"](1,114688,null,0,a,[r.Fb,r.b,r.Ob,r.Ib,u.a,r.Jb,r.Gb],null,null)],function(n,l){n(l,1,0)},null)}var h=o["\u0275ccf"]("app-login",a,f,{},{},[]),C=e("ZYCi");e.d(l,"LoginPageModuleNgFactory",function(){return v});var v=o["\u0275cmf"](s,[],function(n){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[d.a,h]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,g.l,g.k,[o.LOCALE_ID,[2,g.t]]),o["\u0275mpd"](4608,i["\u0275angular_packages_forms_forms_j"],i["\u0275angular_packages_forms_forms_j"],[]),o["\u0275mpd"](4608,i.FormBuilder,i.FormBuilder,[]),o["\u0275mpd"](4608,r.c,r.c,[o.NgZone,o.ApplicationRef]),o["\u0275mpd"](4608,r.Hb,r.Hb,[r.c,o.ComponentFactoryResolver,o.Injector,g.d]),o["\u0275mpd"](4608,r.Kb,r.Kb,[r.c,o.ComponentFactoryResolver,o.Injector,g.d]),o["\u0275mpd"](1073742336,g.c,g.c,[]),o["\u0275mpd"](1073742336,i["\u0275angular_packages_forms_forms_bc"],i["\u0275angular_packages_forms_forms_bc"],[]),o["\u0275mpd"](1073742336,i.FormsModule,i.FormsModule,[]),o["\u0275mpd"](1073742336,i.ReactiveFormsModule,i.ReactiveFormsModule,[]),o["\u0275mpd"](1073742336,r.Db,r.Db,[]),o["\u0275mpd"](1073742336,C.n,C.n,[[2,C.t],[2,C.m]]),o["\u0275mpd"](1073742336,s,s,[]),o["\u0275mpd"](1024,C.k,function(){return[[{path:"",component:a}]]},[])])})}}]);