(window.webpackJsonp=window.webpackJsonp||[]).push([[208],{zjUU:function(t,e,i){"use strict";i.r(e),i.d(e,"IonVirtualScroll",function(){return u});var n=i("B5Ai"),r=i("cBjU"),o="item",s="header",l="footer",a=2;function h(t,e){var i=function(t,e){switch(e){case o:return t.querySelector("template:not([name])");case s:return t.querySelector("template[name=header]");case l:return t.querySelector("template[name=footer]")}}(t,e);return i&&t.ownerDocument?t.ownerDocument.importNode(i.content,!0).children[0]:null}function c(t,e,i,n,r,h,c,u,p,d){for(var f=[],g=d+p,m=p;m<g;m++){var v,y=t[m];i&&null!=(v=i(y,m,t))&&f.push({i:u++,type:s,value:v,index:m,height:r,reads:a,visible:!1}),f.push({i:u++,type:o,value:y,index:m,height:e?e(y,m):c,reads:e?0:a,visible:!!e}),n&&null!=(v=n(y,m,t))&&f.push({i:u++,type:l,value:v,index:m,height:h,reads:2,visible:!1})}return f}var u=function(){function t(){this.range={offset:0,length:0},this.viewportHeight=0,this.cells=[],this.virtualDom=[],this.isEnabled=!1,this.viewportOffset=0,this.currentScrollTop=0,this.indexDirty=0,this.lastItemLen=0,this.totalHeight=0,this.approxItemHeight=45,this.approxHeaderHeight=30,this.approxFooterHeight=30}return t.prototype.itemsChanged=function(){this.calcCells(),this.updateVirtualScroll()},t.prototype.componentDidLoad=function(){return n.a(this,void 0,void 0,function(){var t,e;return n.c(this,function(i){switch(i.label){case 0:return(t=this.el.closest("ion-content"))?[4,t.componentOnReady()]:(console.error("virtual-scroll must be used inside ion-content"),[2]);case 1:return i.sent(),this.contentEl=t,e=this,[4,t.getScrollElement()];case 2:return e.scrollEl=i.sent(),this.calcCells(),this.updateState(),[2]}})})},t.prototype.componentDidUpdate=function(){this.updateState()},t.prototype.componentDidUnload=function(){this.scrollEl=void 0},t.prototype.onScroll=function(){this.updateVirtualScroll()},t.prototype.onResize=function(){this.updateVirtualScroll()},t.prototype.positionForItem=function(t){return Promise.resolve(function(t,e,i){var n=e.find(function(e){return e.type===o&&e.index===t});return n?i[n.i]:-1}(t,this.cells,this.getHeightIndex()))},t.prototype.checkRange=function(t,e){if(void 0===e&&(e=-1),this.items){var i=-1===e?this.items.length-t:e,n=function(t,e){return 0===e?0:e===(t[t.length-1].index||0)+1?t.length:t.findIndex(function(t){return t.index===e})}(this.cells,t),r=c(this.items,this.itemHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,n,t,i);this.cells=function(t,e,i){if(0===i&&e.length>=t.length)return e;for(var n=0;n<e.length;n++)t[n+i]=e[n];return t}(this.cells,r,n),this.lastItemLen=this.items.length,this.indexDirty=Math.max(t-1,0),this.scheduleUpdate()}},t.prototype.checkEnd=function(){this.items&&this.checkRange(this.lastItemLen)},t.prototype.updateVirtualScroll=function(){this.isEnabled&&this.scrollEl&&(this.timerUpdate&&(clearTimeout(this.timerUpdate),this.timerUpdate=void 0),this.queue.read(this.readVS.bind(this)),this.queue.write(this.writeVS.bind(this)))},t.prototype.readVS=function(){for(var t=this.contentEl,e=this.scrollEl,i=0,n=this.el;n&&n!==t;)i+=n.offsetTop,n=n.parentElement;this.viewportOffset=i,e&&(this.viewportHeight=e.offsetHeight,this.currentScrollTop=e.scrollTop)},t.prototype.writeVS=function(){var t=this.indexDirty,e=function(t,e,i){return{top:Math.max(t-100,0),bottom:t+e+100}}(this.currentScrollTop-this.viewportOffset,this.viewportHeight),i=this.getHeightIndex(),n=function(t,e,i){for(var n=e.top,r=e.bottom,o=0;o<t.length&&!(t[o]>n);o++);for(var s=Math.max(o-2-1,0);o<t.length&&!(t[o]>=r);o++);return{offset:s,length:Math.min(o+2,t.length)-s}}(i,e);(function(t,e,i){return t<=n.offset+n.length||e.offset!==n.offset||e.length!==n.length})(t,this.range)&&(this.range=n,function(t,e,i,n){for(var r=0,o=t;r<o.length;r++){var s=o[r];s.change=0,s.d=!0}for(var l=[],a=n.offset+n.length,h=function(n){var r=i[n],o=t.find(function(t){return t.d&&t.cell===r});if(o){var s=e[n];s!==o.top&&(o.top=s,o.change=1),o.d=!1}else l.push(r)},c=n.offset;c<a;c++)h(c);for(var u=t.filter(function(t){return t.d}),p=function(i){var n=u.find(function(t){return t.d&&t.cell.type===i.type}),r=i.i;n?(n.d=!1,n.change=2,n.cell=i,n.top=e[r]):t.push({d:!1,cell:i,visible:!0,change:2,top:e[r]})},d=0,f=l;d<f.length;d++)p(f[d]);t.filter(function(t){return t.d&&-9999!==t.top}).forEach(function(t){t.change=1,t.top=-9999})}(this.virtualDom,i,this.cells,n),this.nodeRender?function(t,e,i,n){for(var r,o=Array.from(t.children).filter(function(t){return"TEMPLATE"!==t.tagName}),s=o.length,l=0;l<i.length;l++){var a=i[l],c=a.cell;if(2===a.change){if(l<s)e(r=o[l],c,l);else{var u=h(t,c.type);(r=e(u,c,l)||u).classList.add("virtual-item"),t.appendChild(r)}r.$ionCell=c}else r=o[l];0!==a.change&&(r.style.transform="translate3d(0,"+a.top+"px,0)");var p=c.visible;a.visible!==p&&(p?r.classList.remove("virtual-loading"):r.classList.add("virtual-loading"),a.visible=p),c.reads>0&&(n(c,r),c.reads--)}}(this.el,this.nodeRender,this.virtualDom,this.updateCellHeight.bind(this)):this.domRender?this.domRender(this.virtualDom):this.renderItem&&this.el.forceUpdate())},t.prototype.updateCellHeight=function(t,e){var i=this,n=function(){if(e.$ionCell===t){var n=i.win.getComputedStyle(e),r=e.offsetHeight+parseFloat(n.getPropertyValue("margin-bottom"));i.setCellHeight(t,r)}};e&&e.componentOnReady?e.componentOnReady().then(n):n()},t.prototype.setCellHeight=function(t,e){var i=t.i;t===this.cells[i]&&(t.height===e&&!0===t.visible||(t.visible=!0,t.height=e,this.indexDirty=Math.min(this.indexDirty,i),this.scheduleUpdate()))},t.prototype.scheduleUpdate=function(){var t=this;clearTimeout(this.timerUpdate),this.timerUpdate=setTimeout(function(){return t.updateVirtualScroll()},100)},t.prototype.updateState=function(){var t=!(!this.scrollEl||!this.cells);t!==this.isEnabled&&(this.enableScrollEvents(t),t&&this.updateVirtualScroll())},t.prototype.calcCells=function(){this.items&&(this.lastItemLen=this.items.length,this.cells=c(this.items,this.itemHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,0,0,this.lastItemLen),this.indexDirty=0)},t.prototype.getHeightIndex=function(){return this.indexDirty!==1/0&&this.calcHeightIndex(this.indexDirty),this.heightIndex},t.prototype.calcHeightIndex=function(t){void 0===t&&(t=0),this.heightIndex=function(t,e){if(!t)return new Uint32Array(e);if(t.length===e)return t;if(e>t.length){var i=new Uint32Array(e);return i.set(t),i}return t.subarray(0,e)}(this.heightIndex,this.cells.length),this.totalHeight=function(t,e,i){for(var n=t[i],r=i;r<t.length;r++)t[r]=n,n+=e[r].height;return n}(this.heightIndex,this.cells,t),this.indexDirty=1/0},t.prototype.enableScrollEvents=function(t){this.scrollEl&&(this.isEnabled=t,this.enableListener(this,"scroll",t,this.scrollEl))},t.prototype.renderVirtualNode=function(t){var e=t.cell,i=e.value,n=e.index;switch(e.type){case o:return this.renderItem(i,n);case s:return this.renderHeader(i,n);case l:return this.renderFooter(i,n)}},t.prototype.hostData=function(){return{style:{height:this.totalHeight+"px"}}},t.prototype.render=function(){var t=this;if(this.renderItem)return Object(r.b)(p,{dom:this.virtualDom},this.virtualDom.map(function(e){return t.renderVirtualNode(e)}))},Object.defineProperty(t,"is",{get:function(){return"ion-virtual-scroll"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{approxFooterHeight:{type:Number,attr:"approx-footer-height"},approxHeaderHeight:{type:Number,attr:"approx-header-height"},approxItemHeight:{type:Number,attr:"approx-item-height"},checkEnd:{method:!0},checkRange:{method:!0},domRender:{type:"Any",attr:"dom-render"},el:{elementRef:!0},enableListener:{context:"enableListener"},footerFn:{type:"Any",attr:"footer-fn"},headerFn:{type:"Any",attr:"header-fn"},itemHeight:{type:"Any",attr:"item-height",watchCallbacks:["itemsChanged"]},items:{type:"Any",attr:"items",watchCallbacks:["itemsChanged"]},nodeRender:{type:"Any",attr:"node-render"},positionForItem:{method:!0},queue:{context:"queue"},renderFooter:{type:"Any",attr:"render-footer"},renderHeader:{type:"Any",attr:"render-header"},renderItem:{type:"Any",attr:"render-item"},totalHeight:{state:!0},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"scroll",method:"onScroll",disabled:!0},{name:"window:resize",method:"onResize",passive:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"ion-virtual-scroll{display:block;position:relative;width:100%;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.virtual-loading{opacity:0}.virtual-item{left:0;right:0;top:0;position:absolute;-webkit-transition-duration:0ms;transition-duration:0ms;will-change:transform}"},enumerable:!0,configurable:!0}),t}(),p=function(t,e,i){var n=t.dom;return i.map(e,function(t,e){var i=n[e],r=t.vattrs||{},o=r.class||"";return o+="virtual-item ",i.visible||(o+="virtual-loading"),Object.assign({},t,{vattrs:Object.assign({},r,{class:o,style:Object.assign({},r.style,{transform:"translate3d(0,"+i.top+"px,0)"})})})})}}}]);