var s,w=document.getElementById("html").getBoundingClientRect();window.outerWidth<700?(console.log("small"),s=[0,100]):window.outerWidth>2100?(console.log("large"),s=[50,50]):(console.log("med"),s=[30,70]),Split(["#r1","#r2"],{sizes:s,gutterSize:20,minSize:0}),function(){var e=this,t=e.attachEvent&&!e[r],i=e.document,r="addEventListener",n="removeEventListener",s="getBoundingClientRect",o=.5,a=function(){for(var e,t=["","-webkit-","-moz-","-o-"],r=0;r<t.length;r++)if(e=i.createElement("div"),e.style.cssText="width:"+t[r]+"calc(9px)",e.style.length)return t[r]+"calc"}(),l=function(e){return"string"==typeof e||e instanceof String?i.querySelector(e):e},u=function(u,c){var g,h,d,p,f,S,z,y,v=[];c=void 0!==c?c:{},"undefined"==typeof c.gutterSize&&(c.gutterSize=10),"undefined"==typeof c.minSize&&(c.minSize=100),"undefined"==typeof c.snapOffset&&(c.snapOffset=30),"undefined"==typeof c.direction&&(c.direction="horizontal"),"undefined"==typeof c.elementStyle&&(c.elementStyle=function(e,i,r){var n={};return"string"==typeof i||i instanceof String?n[e]=i:n[e]=t?i+"%":a+"("+i+"% - "+r+"px)",n}),"undefined"==typeof c.gutterStyle&&(c.gutterStyle=function(e,t){var i={};return i[e]=t+"px",i}),"horizontal"==c.direction?(g="width",d="clientWidth",p="clientX",f="left",S="gutter gutter-horizontal",z="paddingLeft",y="paddingRight",c.cursor||(c.cursor="ew-resize")):"vertical"==c.direction&&(g="height",d="clientHeight",p="clientY",f="top",S="gutter gutter-vertical",z="paddingTop",y="paddingBottom",c.cursor||(c.cursor="ns-resize"));var m=function(t){var i=this,n=i.a,s=i.b;!i.dragging&&c.onDragStart&&c.onDragStart(),t.preventDefault(),i.dragging=!0,i.move=w.bind(i),i.stop=b.bind(i),e[r]("mouseup",i.stop),e[r]("touchend",i.stop),e[r]("touchcancel",i.stop),i.parent[r]("mousemove",i.move),i.parent[r]("touchmove",i.move),n[r]("selectstart",D),n[r]("dragstart",D),s[r]("selectstart",D),s[r]("dragstart",D),n.style.userSelect="none",n.style.webkitUserSelect="none",n.style.MozUserSelect="none",n.style.pointerEvents="none",s.style.userSelect="none",s.style.webkitUserSelect="none",s.style.MozUserSelect="none",s.style.pointerEvents="none",i.gutter.style.cursor=c.cursor,i.parent.style.cursor=c.cursor,G.call(i)},b=function(){var t=this,i=t.a,r=t.b;t.dragging&&c.onDragEnd&&c.onDragEnd(),t.dragging=!1,e[n]("mouseup",t.stop),e[n]("touchend",t.stop),e[n]("touchcancel",t.stop),t.parent[n]("mousemove",t.move),t.parent[n]("touchmove",t.move),delete t.stop,delete t.move,i[n]("selectstart",D),i[n]("dragstart",D),r[n]("selectstart",D),r[n]("dragstart",D),i.style.userSelect="",i.style.webkitUserSelect="",i.style.MozUserSelect="",i.style.pointerEvents="",r.style.userSelect="",r.style.webkitUserSelect="",r.style.MozUserSelect="",r.style.pointerEvents="",t.gutter.style.cursor="",t.parent.style.cursor=""},w=function(e){var t;this.dragging&&(t="touches"in e?e.touches[0][p]-this.start:e[p]-this.start,t<=this.aMin+c.snapOffset+this.aGutterSize?t=this.aMin+this.aGutterSize:t>=this.size-(this.bMin+c.snapOffset+this.bGutterSize)&&(t=this.size-(this.bMin+this.bGutterSize)),t-=o,M.call(this,t),c.onDrag&&c.onDrag())},G=function(){var t=e.getComputedStyle(this.parent),i=this.parent[d]-parseFloat(t[z])-parseFloat(t[y]);this.size=this.a[s]()[g]+this.b[s]()[g]+this.aGutterSize+this.bGutterSize,this.percentage=Math.min(this.size/i*100,100),this.start=this.a[s]()[f]},M=function(e){E(this.a,e/this.size*this.percentage,this.aGutterSize),E(this.b,this.percentage-e/this.size*this.percentage,this.bGutterSize)},E=function(e,t,i){for(var r=c.elementStyle(g,t,i),n=Object.keys(r),s=0;s<n.length;s++)e.style[n[s]]=r[n[s]]},x=function(e,t){for(var i=c.gutterStyle(g,t),r=Object.keys(i),n=0;n<r.length;n++)e.style[r[n]]=i[r[n]]},D=function(){return!1},U=l(u[0]).parentNode;if(!c.sizes){var k=100/u.length;for(c.sizes=[],h=0;h<u.length;h++)c.sizes.push(k)}if(!Array.isArray(c.minSize)){var C=[];for(h=0;h<u.length;h++)C.push(c.minSize);c.minSize=C}for(h=0;h<u.length;h++){var O,B,F=l(u[h]),L=1==h,R=h==u.length-1,W=c.sizes[h],j=c.gutterSize,A=window.getComputedStyle(U).flexDirection;if(h>0&&(O={a:l(u[h-1]),b:F,aMin:c.minSize[h-1],bMin:c.minSize[h],dragging:!1,parent:U,isFirst:L,isLast:R,direction:c.direction},O.aGutterSize=c.gutterSize,O.bGutterSize=c.gutterSize,L&&(O.aGutterSize=c.gutterSize/2),R&&(O.bGutterSize=c.gutterSize/2),"row-reverse"!==A&&"column-reverse"!==A||(B=O.a,O.a=O.b,O.b=B)),!t){if(h>0){var N=i.createElement("div");N.className=S,x(N,j),N[r]("mousedown",m.bind(O)),N[r]("touchstart",m.bind(O)),U.insertBefore(N,F),O.gutter=N}0!==h&&h!=u.length-1||(j=c.gutterSize/2)}if(E(F,W,j),h>0){var T=O.a[s]()[g],q=O.b[s]()[g];T<O.aMin&&(O.aMin=T),q<O.bMin&&(O.bMin=q)}h>0&&v.push(O)}return{setSizes:function(e){for(var t=0;t<e.length;t++)if(t>0){var i=v[t-1];E(i.a,e[t-1],i.aGutterSize),E(i.b,e[t],i.bGutterSize)}},getSizes:function(){for(var t=[],i=0;i<v.length;i++){var r=v[i],n=e.getComputedStyle(r.parent),o=r.parent[d]-parseFloat(n[z])-parseFloat(n[y]);t.push((r.a[s]()[g]+r.aGutterSize)/o*100),i===v.length-1&&t.push((r.b[s]()[g]+r.bGutterSize)/o*100)}return t},collapse:function(e){var t;e===v.length?(t=v[e-1],G.call(t),M.call(t,t.size-t.bGutterSize)):(t=v[e],G.call(t),M.call(t,t.aGutterSize))},destroy:function(){for(var e=0;e<v.length;e++)v[e].parent.removeChild(v[e].gutter),v[e].a.style[g]="",v[e].b.style[g]=""}}};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=u),exports.Split=u):e.Split=u}.call(window);