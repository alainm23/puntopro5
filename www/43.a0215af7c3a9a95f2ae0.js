(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{MPla:function(l,n,e){"use strict";e.r(n);var t=e("CcnG"),o=e("mrSG"),u=e("ZZ/e"),i=e("ZJFI"),a=e("n90K"),r=e("JHBR"),s=e("lGQG"),d=e("YOxB"),c=e("52n8"),m=e("5QPq"),f=e("gTw3"),p=e("4zgz"),g=e("s4HV"),h=e("wd/R"),_=function(){function l(l,n,e,t,o,u,i,a,r,s,d,c){this.database=l,this.route=n,this.modalController=e,this.loadingController=t,this.alertController=o,this.platform=u,this.af_storage=i,this.auth=a,this.geolocation=r,this.locationAccuracy=s,this.androidPermissions=d,this.storage=c,this.is_loading=!0,this.is_quote_sent=!1,this.images=[],this.post_data={id:"",pro_fullname:"",pro_avatar:"",pro_id:"",latitude:0,longitude:0}}return l.prototype.ngOnInit=function(){var l=this;this.request_id=this.route.snapshot.paramMap.get("id"),this.storage.getValue("user_uid").then(function(n){l.database.getRequestById(l.request_id).subscribe(function(n){l.request=n,console.log(n),l.InitMap(n.latitude,n.longitude),l.is_loading=!1}),l.database.isQuoteSent(n,l.request_id).subscribe(function(n){l.is_quote_sent=!(null==n),console.log("isQuoteSent",l.is_quote_sent)})})},l.prototype.InitMap=function(l,n){return o.__awaiter(this,void 0,void 0,function(){var e;return o.__generator(this,function(t){return e=new google.maps.LatLng(l,n),this.map=new google.maps.Map(this.mapRef.nativeElement,{center:e,zoom:15,disableDefaultUI:!0,streetViewControl:!1,disableDoubleClickZoom:!1,clickableIcons:!1,scaleControl:!0,mapTypeId:"roadmap"}),new google.maps.Marker({position:e,map:this.map,title:"Direccion",animation:google.maps.Animation.DROP}),[2]})})},l.prototype.getFormatDate=function(l){return h(l).format("LLL")},l.prototype.postulate=function(){return o.__awaiter(this,void 0,void 0,function(){var l,n=this;return o.__generator(this,function(e){switch(e.label){case 0:return!0!==this.request.is_emergency?[3,3]:[4,this.alertController.create({header:"Confirm!",message:"Message <strong>text</strong>!!!",buttons:[{text:"No",handler:function(){console.log("Confirm Okay")}},{text:"Si",handler:function(){return o.__awaiter(n,void 0,void 0,function(){var l,n=this;return o.__generator(this,function(e){switch(e.label){case 0:return l=this,[4,this.loadingController.create({message:"Procesando Informacion ..."})];case 1:return l.loading=e.sent(),[4,this.loading.present()];case 2:return e.sent(),this.storage.getValue("user_data").then(function(l){var e=JSON.parse(l);n.post_data.id=e.id,n.post_data.pro_fullname=e.first_name+" "+e.last_name,n.post_data.pro_avatar=e.avatar,n.post_data.pro_id=e.id,n.platform.is("cordova")?n.checkGPSPermission():n.getLocationCoordinates()}),[2]}})})}}]})];case 1:return[4,e.sent().present()];case 2:return e.sent(),[3,6];case 3:return[4,this.modalController.create({component:m.a,mode:"ios",cssClass:"puntopro-modal",enterAnimation:d.a,leaveAnimation:c.a})];case 4:return(l=e.sent()).onDidDismiss().then(function(l){return o.__awaiter(n,void 0,void 0,function(){var n,e=this;return o.__generator(this,function(t){switch(t.label){case 0:return"response"!=l.role?[3,3]:(n=this,[4,this.loadingController.create({message:"Procesando Informacion ..."})]);case 1:return n.loading=t.sent(),[4,this.loading.present()];case 2:t.sent(),this.storage.getValue("user_data").then(function(n){var t=JSON.parse(n);e.post_data.id=t.id,e.post_data.pro_fullname=t.first_name+" "+t.last_name,e.post_data.pro_avatar=t.avatar,e.post_data.pro_id=t.id,e.post_data.max_price=l.data.max_price,e.post_data.min_price=l.data.min_price,e.post_data.message=l.data.message,e.platform.is("cordova")?e.checkGPSPermission():e.getLocationCoordinates()}),t.label=3;case 3:return[2]}})})}),[4,l.present()];case 5:e.sent(),e.label=6;case 6:return[2]}})})},l.prototype.checkGPSPermission=function(){return o.__awaiter(this,void 0,void 0,function(){var l=this;return o.__generator(this,function(n){return this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(function(n){n.hasPermission?l.askToTurnOnGPS():l.requestGPSPermission()},function(l){alert(l)}),[2]})})},l.prototype.askToTurnOnGPS=function(){var l=this;this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(function(){l.getLocationCoordinates()},function(l){console.log("Error requesting location permissions "+JSON.stringify(l))})},l.prototype.requestGPSPermission=function(){return o.__awaiter(this,void 0,void 0,function(){var l=this;return o.__generator(this,function(n){return this.locationAccuracy.canRequest().then(function(n){n?console.log("4"):l.androidPermissions.requestPermission(l.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(function(){l.askToTurnOnGPS()},function(l){console.log("requestPermission Error requesting location permissions "+l)})}),[2]})})},l.prototype.getLocationCoordinates=function(){return o.__awaiter(this,void 0,void 0,function(){var l=this;return o.__generator(this,function(n){return this.geolocation.getCurrentPosition().then(function(n){l.post_data.latitude=n.coords.latitude,l.post_data.longitude=n.coords.longitude,console.log("this.post_data",l.post_data),l.database.addPostulate(l.post_data.pro_id,l.request_id,l.post_data).then(function(n){l.loading.dismiss()}).catch(function(n){l.loading.dismiss(),console.log("addPostulate",n)})}).catch(function(l){console.log("Error getting location"+l)}),[2]})})},l}(),R=function(){return function(){}}(),b=e("pMnS"),C=e("oBZk"),v=e("Ip0R"),P=e("ZYCi"),D=t["\u0275crt"]({encapsulation:0,styles:[['ion-content[_ngcontent-%COMP%]{--background:#26997C}.card-separator[_ngcontent-%COMP%]{background-color:#00000047}.item-header[_ngcontent-%COMP%]{margin-left:1rem;font-weight:700}.request-img[_ngcontent-%COMP%]{width:50%;height:auto}.map-class[_ngcontent-%COMP%]{height:250px;width:auto}#map[_ngcontent-%COMP%]{width:100%;height:100%}a[href^="http://maps.google.com/maps"][_ngcontent-%COMP%], a[href^="https://maps.google.com/maps"][_ngcontent-%COMP%]{display:none!important}.gm-style-cc[_ngcontent-%COMP%], .gmnoprint[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .gmnoprint[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:none}.gmnoprint[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{background:0 0!important}']],data:{}});function k(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,5,"ion-grid",[["style","height: 100%; margin-bottom: 1rem"]],null,null,null,C.gb,C.p)),t["\u0275did"](1,49152,null,0,u.A,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275eld"](2,0,null,0,3,"ion-row",[["align-items-center",""],["justify-content-center",""],["style","height: 100%"]],null,null,null,C.ub,C.D)),t["\u0275did"](3,49152,null,0,u.ib,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275eld"](4,0,null,0,1,"ion-spinner",[["name","bubbles"]],null,null,null,C.Cb,C.L)),t["\u0275did"](5,49152,null,0,u.rb,[t.ChangeDetectorRef,t.ElementRef],{name:[0,"name"]},null)],function(l,n){l(n,5,0,"bubbles")},null)}function E(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,3,"ion-col",[],null,null,null,C.cb,C.l)),t["\u0275did"](1,49152,null,0,u.t,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275eld"](2,0,null,0,1,"img",[["class","request-img"]],[[8,"src",4]],null,null,null,null)),t["\u0275pid"](131072,v.b,[t.ChangeDetectorRef])],null,function(l,n){l(n,2,0,t["\u0275unv"](n,2,0,t["\u0275nov"](n,3).transform(n.context.$implicit)))})}function w(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,11,"div",[],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,0,"hr",[["class","card-separator"]],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,2,"ion-label",[["class","item-header"],["position","stacked"]],null,null,null,C.mb,C.v)),t["\u0275did"](3,49152,null,0,u.N,[t.ChangeDetectorRef,t.ElementRef],{position:[0,"position"]},null),(l()(),t["\u0275ted"](-1,0,["Imagenes"])),(l()(),t["\u0275eld"](5,0,null,null,0,"hr",[["class","card-separator"]],null,null,null,null,null)),(l()(),t["\u0275eld"](6,0,null,null,5,"ion-grid",[],null,null,null,C.gb,C.p)),t["\u0275did"](7,49152,null,0,u.A,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275eld"](8,0,null,0,3,"ion-row",[],null,null,null,C.ub,C.D)),t["\u0275did"](9,49152,null,0,u.ib,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275and"](16777216,null,0,1,null,E)),t["\u0275did"](11,278528,null,0,v.i,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var e=n.component;l(n,3,0,"stacked"),l(n,11,0,e.images)},null)}function I(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,35,"ion-list",[],null,null,null,C.ob,C.w)),t["\u0275did"](1,49152,null,0,u.O,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275eld"](2,0,null,0,2,"ion-label",[["class","item-header"],["position","stacked"]],null,null,null,C.mb,C.v)),t["\u0275did"](3,49152,null,0,u.N,[t.ChangeDetectorRef,t.ElementRef],{position:[0,"position"]},null),(l()(),t["\u0275ted"](-1,0,["Cliente"])),(l()(),t["\u0275eld"](5,0,null,0,0,"hr",[["class","card-separator"]],null,null,null,null,null)),(l()(),t["\u0275eld"](6,0,null,0,2,"ion-item",[["lines","none"]],null,null,null,C.lb,C.t)),t["\u0275did"](7,49152,null,0,u.H,[t.ChangeDetectorRef,t.ElementRef],{lines:[0,"lines"]},null),(l()(),t["\u0275ted"](8,0,[" "," "])),(l()(),t["\u0275eld"](9,0,null,0,0,"hr",[["class","card-separator"]],null,null,null,null,null)),(l()(),t["\u0275eld"](10,0,null,0,2,"ion-label",[["class","item-header"],["position","stacked"]],null,null,null,C.mb,C.v)),t["\u0275did"](11,49152,null,0,u.N,[t.ChangeDetectorRef,t.ElementRef],{position:[0,"position"]},null),(l()(),t["\u0275ted"](-1,0,["Fecha de solicitud"])),(l()(),t["\u0275eld"](13,0,null,0,0,"hr",[["class","card-separator"]],null,null,null,null,null)),(l()(),t["\u0275eld"](14,0,null,0,2,"ion-item",[["lines","none"]],null,null,null,C.lb,C.t)),t["\u0275did"](15,49152,null,0,u.H,[t.ChangeDetectorRef,t.ElementRef],{lines:[0,"lines"]},null),(l()(),t["\u0275ted"](16,0,[" "," "])),(l()(),t["\u0275eld"](17,0,null,0,0,"hr",[["class","card-separator"]],null,null,null,null,null)),(l()(),t["\u0275eld"](18,0,null,0,2,"ion-label",[["class","item-header"],["position","stacked"]],null,null,null,C.mb,C.v)),t["\u0275did"](19,49152,null,0,u.N,[t.ChangeDetectorRef,t.ElementRef],{position:[0,"position"]},null),(l()(),t["\u0275ted"](-1,0,["Direccion"])),(l()(),t["\u0275eld"](21,0,null,0,0,"hr",[["class","card-separator"]],null,null,null,null,null)),(l()(),t["\u0275eld"](22,0,null,0,2,"ion-item",[["lines","none"]],null,null,null,C.lb,C.t)),t["\u0275did"](23,49152,null,0,u.H,[t.ChangeDetectorRef,t.ElementRef],{lines:[0,"lines"]},null),(l()(),t["\u0275ted"](24,0,[" "," "])),(l()(),t["\u0275eld"](25,0,null,0,0,"hr",[["class","card-separator"]],null,null,null,null,null)),(l()(),t["\u0275eld"](26,0,null,0,2,"ion-label",[["class","item-header"],["position","stacked"]],null,null,null,C.mb,C.v)),t["\u0275did"](27,49152,null,0,u.N,[t.ChangeDetectorRef,t.ElementRef],{position:[0,"position"]},null),(l()(),t["\u0275ted"](-1,0,["Detalles"])),(l()(),t["\u0275eld"](29,0,null,0,0,"hr",[["class","card-separator"]],null,null,null,null,null)),(l()(),t["\u0275eld"](30,0,null,0,3,"ion-item",[["lines","none"]],null,null,null,C.lb,C.t)),t["\u0275did"](31,49152,null,0,u.H,[t.ChangeDetectorRef,t.ElementRef],{lines:[0,"lines"]},null),(l()(),t["\u0275eld"](32,0,null,0,1,"p",[["class","detail"]],null,null,null,null,null)),(l()(),t["\u0275ted"](33,null,["",""])),(l()(),t["\u0275and"](16777216,null,0,1,null,w)),t["\u0275did"](35,16384,null,0,v.j,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,3,0,"stacked"),l(n,7,0,"none"),l(n,11,0,"stacked"),l(n,15,0,"none"),l(n,19,0,"stacked"),l(n,23,0,"none"),l(n,27,0,"stacked"),l(n,31,0,"none"),l(n,35,0,e.images.length>0)},function(l,n){var e=n.component;l(n,8,0,null==e.request?null:e.request.client_name),l(n,16,0,e.getFormatDate(null==e.request?null:e.request.created_date)),l(n,24,0,null==e.request?null:e.request.address_name),l(n,33,0,null==e.request?null:e.request.note)})}function q(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Postular"]))],null,null)}function O(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Enviar cotizacion"]))],null,null)}function y(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,5,"ion-button",[["color","orange"],["expand","block"]],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.postulate()&&t),t},C.V,C.e)),t["\u0275did"](1,49152,null,0,u.k,[t.ChangeDetectorRef,t.ElementRef],{color:[0,"color"],expand:[1,"expand"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,q)),t["\u0275did"](3,16384,null,0,v.j,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,O)),t["\u0275did"](5,16384,null,0,v.j,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,1,0,"orange","block"),l(n,3,0,!0===(null==e.request?null:e.request.is_emergency)),l(n,5,0,!1===(null==e.request?null:e.request.is_emergency))},null)}function M(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"ion-item",[["lines","none"],["text-center",""]],null,null,null,C.lb,C.t)),t["\u0275did"](1,49152,null,0,u.H,[t.ChangeDetectorRef,t.ElementRef],{lines:[0,"lines"]},null),(l()(),t["\u0275ted"](-1,0,[" Ya postulaste... "]))],function(l,n){l(n,1,0,"none")},null)}function S(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,7,"ion-footer",[],null,null,null,C.fb,C.o)),t["\u0275did"](1,49152,null,0,u.z,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275eld"](2,0,null,0,5,"ion-toolbar",[],null,null,null,C.Hb,C.Q)),t["\u0275did"](3,49152,null,0,u.Bb,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275and"](16777216,null,0,1,null,y)),t["\u0275did"](5,16384,null,0,v.j,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,M)),t["\u0275did"](7,16384,null,0,v.j,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,5,0,!1===e.is_quote_sent),l(n,7,0,!0===e.is_quote_sent)},null)}function T(l){return t["\u0275vid"](0,[t["\u0275qud"](402653184,1,{mapRef:0}),(l()(),t["\u0275eld"](1,0,null,null,11,"ion-header",[],null,null,null,C.hb,C.q)),t["\u0275did"](2,49152,null,0,u.B,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275eld"](3,0,null,0,9,"ion-toolbar",[["mode","ios"]],null,null,null,C.Hb,C.Q)),t["\u0275did"](4,49152,null,0,u.Bb,[t.ChangeDetectorRef,t.ElementRef],{mode:[0,"mode"]},null),(l()(),t["\u0275eld"](5,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,C.W,C.f)),t["\u0275did"](6,49152,null,0,u.l,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275eld"](7,0,null,0,2,"ion-back-button",[["color","dark"],["icon","ios-arrow-back"],["text",""]],null,[[null,"click"]],function(l,n,e){var o=!0;return"click"===n&&(o=!1!==t["\u0275nov"](l,9).onClick(e)&&o),o},C.T,C.c)),t["\u0275did"](8,49152,null,0,u.g,[t.ChangeDetectorRef,t.ElementRef],{color:[0,"color"],icon:[1,"icon"],text:[2,"text"]},null),t["\u0275did"](9,16384,null,0,u.h,[[2,u.hb],u.Ib],null,null),(l()(),t["\u0275eld"](10,0,null,0,2,"ion-title",[],null,null,null,C.Gb,C.P)),t["\u0275did"](11,49152,null,0,u.zb,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275ted"](12,0,["",""])),(l()(),t["\u0275eld"](13,0,null,null,23,"ion-content",[],null,null,null,C.db,C.m)),t["\u0275did"](14,49152,null,0,u.u,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275and"](16777216,null,0,1,null,k)),t["\u0275did"](16,16384,null,0,v.j,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](17,0,null,0,19,"ion-grid",[],null,null,null,C.gb,C.p)),t["\u0275did"](18,49152,null,0,u.A,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275eld"](19,0,null,0,17,"ion-row",[],null,null,null,C.ub,C.D)),t["\u0275did"](20,49152,null,0,u.ib,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275eld"](21,0,null,0,15,"ion-col",[],null,null,null,C.cb,C.l)),t["\u0275did"](22,49152,null,0,u.t,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275eld"](23,0,null,0,13,"ion-card",[],null,null,null,C.bb,C.g)),t["\u0275did"](24,49152,null,0,u.m,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275and"](16777216,null,0,1,null,I)),t["\u0275did"](26,16384,null,0,v.j,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](27,0,null,0,9,"ion-list",[],null,null,null,C.ob,C.w)),t["\u0275did"](28,49152,null,0,u.O,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275eld"](29,0,null,0,0,"hr",[["class","card-separator"]],null,null,null,null,null)),(l()(),t["\u0275eld"](30,0,null,0,2,"ion-label",[["class","item-header"],["position","stacked"]],null,null,null,C.mb,C.v)),t["\u0275did"](31,49152,null,0,u.N,[t.ChangeDetectorRef,t.ElementRef],{position:[0,"position"]},null),(l()(),t["\u0275ted"](-1,0,["Mapa"])),(l()(),t["\u0275eld"](33,0,null,0,0,"hr",[["class","card-separator"]],null,null,null,null,null)),(l()(),t["\u0275eld"](34,0,null,0,2,"ion-card",[["class","map-class"],["no-margin",""],["no-padding",""]],null,null,null,C.bb,C.g)),t["\u0275did"](35,49152,null,0,u.m,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275eld"](36,0,[[1,0],["map",1]],0,0,"div",[["id","map"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,S)),t["\u0275did"](38,16384,null,0,v.j,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,4,0,"ios"),l(n,8,0,"dark","ios-arrow-back",""),l(n,16,0,!0===e.is_loading),l(n,26,0,!1===e.is_loading),l(n,31,0,"stacked"),l(n,38,0,!0===(null==e.auth.user_data?null:e.auth.user_data.is_pro))},function(l,n){var e=n.component;l(n,12,0,null==e.request?null:e.request.service_name)})}function A(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-request-pro-view",[],null,null,null,T,D)),t["\u0275did"](1,114688,null,0,_,[i.a,P.a,u.Hb,u.Fb,u.b,u.Jb,r.a,s.a,f.a,g.a,p.a,a.a],null,null)],function(l,n){l(n,1,0)},null)}var N=t["\u0275ccf"]("app-request-pro-view",_,A,{},{},[]),V=e("gIcY");e.d(n,"RequestProViewPageModuleNgFactory",function(){return x});var x=t["\u0275cmf"](R,[],function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[b.a,N]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,v.l,v.k,[t.LOCALE_ID,[2,v.t]]),t["\u0275mpd"](4608,V["\u0275angular_packages_forms_forms_j"],V["\u0275angular_packages_forms_forms_j"],[]),t["\u0275mpd"](4608,u.c,u.c,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,u.Hb,u.Hb,[u.c,t.ComponentFactoryResolver,t.Injector,v.d]),t["\u0275mpd"](4608,u.Kb,u.Kb,[u.c,t.ComponentFactoryResolver,t.Injector,v.d]),t["\u0275mpd"](1073742336,v.c,v.c,[]),t["\u0275mpd"](1073742336,V["\u0275angular_packages_forms_forms_bc"],V["\u0275angular_packages_forms_forms_bc"],[]),t["\u0275mpd"](1073742336,V.FormsModule,V.FormsModule,[]),t["\u0275mpd"](1073742336,u.Db,u.Db,[]),t["\u0275mpd"](1073742336,P.n,P.n,[[2,P.t],[2,P.m]]),t["\u0275mpd"](1073742336,R,R,[]),t["\u0275mpd"](1024,P.k,function(){return[[{path:"",component:_}]]},[])])})}}]);