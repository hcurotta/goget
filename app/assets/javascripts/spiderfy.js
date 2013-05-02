(function(){/*
 OverlappingMarkerSpiderfier
https://github.com/jawj/OverlappingMarkerSpiderfier
Copyright (c) 2011 - 2012 George MacKerron
Released under the MIT licence: http://opensource.org/licenses/mit-license
Note: The Google Maps API v3 must be included *before* this code
*/
var h=!0,t=null,u=!1;
(function(){var y,z={}.hasOwnProperty,A=[].slice;if(((y=this.google)!=t?y.maps:void 0)!=t)this.OverlappingMarkerSpiderfier=function(){function q(b,d){var a,g,e,f,c=this;this.map=b;d==t&&(d={});for(a in d)z.call(d,a)&&(g=d[a],this[a]=g);this.e=new this.constructor.g(this.map);this.n();this.b={};f=["click","zoom_changed","maptypeid_changed"];g=0;for(e=f.length;g<e;g++)a=f[g],n.addListener(this.map,a,function(){return c.unspiderfy()})}var n,s,v,w,l,c,x;c=q.prototype;c.VERSION="0.3.2";s=google.maps;n=
s.event;l=s.MapTypeId;x=2*Math.PI;c.keepSpiderfied=u;c.markersWontHide=u;c.markersWontMove=u;c.nearbyDistance=20;c.circleSpiralSwitchover=9;c.circleFootSeparation=23;c.circleStartAngle=x/12;c.spiralFootSeparation=26;c.spiralLengthStart=11;c.spiralLengthFactor=4;c.spiderfiedZIndex=1E3;c.usualLegZIndex=10;c.highlightedLegZIndex=20;c.legWeight=1.5;c.legColors={usual:{},highlighted:{}};w=c.legColors.usual;v=c.legColors.highlighted;w[l.HYBRID]=w[l.SATELLITE]="#fff";v[l.HYBRID]=v[l.SATELLITE]="#f00";w[l.TERRAIN]=
w[l.ROADMAP]="#444";v[l.TERRAIN]=v[l.ROADMAP]="#f00";c.n=function(){this.a=[];this.j=[]};c.addMarker=function(b){var d,a=this;if(b._oms!=t)return this;b._oms=h;d=[n.addListener(b,"click",function(){return a.F(b)})];this.markersWontHide||d.push(n.addListener(b,"visible_changed",function(){return a.o(b,u)}));this.markersWontMove||d.push(n.addListener(b,"position_changed",function(){return a.o(b,h)}));this.j.push(d);this.a.push(b);return this};c.o=function(b,d){if(b._omsData!=t&&(d||!b.getVisible())&&
!(this.s!=t||this.t!=t))return this.unspiderfy(d?b:t)};c.getMarkers=function(){return this.a.slice(0)};c.removeMarker=function(b){var d,a,g,e,f;b._omsData!=t&&this.unspiderfy();d=this.m(this.a,b);if(0>d)return this;g=this.j.splice(d,1)[0];e=0;for(f=g.length;e<f;e++)a=g[e],n.removeListener(a);delete b._oms;this.a.splice(d,1);return this};c.clearMarkers=function(){var b,d,a,g,e,f,c,k;this.unspiderfy();k=this.a;b=g=0;for(f=k.length;g<f;b=++g){a=k[b];d=this.j[b];e=0;for(c=d.length;e<c;e++)b=d[e],n.removeListener(b);
delete a._oms}this.n();return this};c.addListener=function(b,d){var a,g;((g=(a=this.b)[b])!=t?g:a[b]=[]).push(d);return this};c.removeListener=function(b,d){var a;a=this.m(this.b[b],d);0>a||this.b[b].splice(a,1);return this};c.clearListeners=function(b){this.b[b]=[];return this};c.trigger=function(){var b,d,a,g,e,f;d=arguments[0];b=2<=arguments.length?A.call(arguments,1):[];d=(a=this.b[d])!=t?a:[];f=[];g=0;for(e=d.length;g<e;g++)a=d[g],f.push(a.apply(t,b));return f};c.u=function(b,d){var a,g,e,f,
c;e=this.circleFootSeparation*(2+b)/x;g=x/b;c=[];for(a=f=0;0<=b?f<b:f>b;a=0<=b?++f:--f)a=this.circleStartAngle+a*g,c.push(new s.Point(d.x+e*Math.cos(a),d.y+e*Math.sin(a)));return c};c.v=function(b,d){var a,g,e,f,c;e=this.spiralLengthStart;a=0;c=[];for(g=f=0;0<=b?f<b:f>b;g=0<=b?++f:--f)a+=this.spiralFootSeparation/e+5E-4*g,g=new s.Point(d.x+e*Math.cos(a),d.y+e*Math.sin(a)),e+=x*this.spiralLengthFactor/a,c.push(g);return c};c.F=function(b){var d,a,g,e,f,c,k,m,r;e=b._omsData!=t;(!e||!this.keepSpiderfied)&&
this.unspiderfy();if(e||this.map.getStreetView().getVisible()||"GoogleEarthAPI"===this.map.getMapTypeId())return this.trigger("click",b);e=[];f=[];d=this.nearbyDistance;c=d*d;g=this.c(b.position);r=this.a;k=0;for(m=r.length;k<m;k++)d=r[k],d.map!=t&&d.getVisible()&&(a=this.c(d.position),this.f(a,g)<c?e.push({A:d,p:a}):f.push(d));return 1===e.length?this.trigger("click",b):this.G(e,f)};c.markersNearMarker=function(b,d){var a,g,e,f,c,k,m,r,p,n;d==t&&(d=u);if(this.e.getProjection()==t)throw"Must wait for 'idle' event on map before calling markersNearMarker";
a=this.nearbyDistance;c=a*a;e=this.c(b.position);f=[];r=this.a;k=0;for(m=r.length;k<m;k++)if(a=r[k],!(a===b||a.map==t||!a.getVisible()))if(g=this.c((p=(n=a._omsData)!=t?n.l:void 0)!=t?p:a.position),this.f(g,e)<c&&(f.push(a),d))break;return f};c.markersNearAnyOtherMarker=function(){var b,d,a,g,e,f,c,k,m,n,p,l;if(this.e.getProjection()==t)throw"Must wait for 'idle' event on map before calling markersNearAnyOtherMarker";f=this.nearbyDistance;b=f*f;g=this.a;f=[];p=0;for(a=g.length;p<a;p++)d=g[p],f.push({q:this.c((c=
(m=d._omsData)!=t?m.l:void 0)!=t?c:d.position),d:u});p=this.a;d=c=0;for(m=p.length;c<m;d=++c)if(a=p[d],a.map!=t&&a.getVisible()&&(g=f[d],!g.d)){l=this.a;a=k=0;for(n=l.length;k<n;a=++k)if(e=l[a],a!==d&&(e.map!=t&&e.getVisible())&&(e=f[a],(!(a<d)||e.d)&&this.f(g.q,e.q)<b)){g.d=e.d=h;break}}p=this.a;a=[];b=c=0;for(m=p.length;c<m;b=++c)d=p[b],f[b].d&&a.push(d);return a};c.z=function(b){var d=this;return{h:function(){return b._omsData.i.setOptions({strokeColor:d.legColors.highlighted[d.map.mapTypeId],
zIndex:d.highlightedLegZIndex})},k:function(){return b._omsData.i.setOptions({strokeColor:d.legColors.usual[d.map.mapTypeId],zIndex:d.usualLegZIndex})}}};c.G=function(b,d){var a,c,e,f,l,k,m,r,p,q;this.s=h;q=b.length;a=this.C(function(){var a,d,c;c=[];a=0;for(d=b.length;a<d;a++)r=b[a],c.push(r.p);return c}());f=q>=this.circleSpiralSwitchover?this.v(q,a).reverse():this.u(q,a);a=function(){var a,d,q,r=this;q=[];a=0;for(d=f.length;a<d;a++)e=f[a],c=this.D(e),p=this.B(b,function(a){return r.f(a.p,e)}),
m=p.A,k=new s.Polyline({map:this.map,path:[m.position,c],strokeColor:this.legColors.usual[this.map.mapTypeId],strokeWeight:this.legWeight,zIndex:this.usualLegZIndex}),m._omsData={l:m.position,i:k},this.legColors.highlighted[this.map.mapTypeId]!==this.legColors.usual[this.map.mapTypeId]&&(l=this.z(m),m._omsData.w={h:n.addListener(m,"mouseover",l.h),k:n.addListener(m,"mouseout",l.k)}),m.setPosition(c),m.setZIndex(Math.round(this.spiderfiedZIndex+e.y)),q.push(m);return q}.call(this);delete this.s;this.r=
h;return this.trigger("spiderfy",a,d)};c.unspiderfy=function(b){var d,a,c,e,f,l,k;b==t&&(b=t);if(this.r==t)return this;this.t=h;e=[];c=[];k=this.a;f=0;for(l=k.length;f<l;f++)a=k[f],a._omsData!=t?(a._omsData.i.setMap(t),a!==b&&a.setPosition(a._omsData.l),a.setZIndex(t),d=a._omsData.w,d!=t&&(n.removeListener(d.h),n.removeListener(d.k)),delete a._omsData,e.push(a)):c.push(a);delete this.t;delete this.r;this.trigger("unspiderfy",e,c);return this};c.f=function(b,d){var a,c;a=b.x-d.x;c=b.y-d.y;return a*
a+c*c};c.C=function(b){var d,a,c,e,f;e=a=c=0;for(f=b.length;e<f;e++)d=b[e],a+=d.x,c+=d.y;b=b.length;return new s.Point(a/b,c/b)};c.c=function(b){return this.e.getProjection().fromLatLngToDivPixel(b)};c.D=function(b){return this.e.getProjection().fromDivPixelToLatLng(b)};c.B=function(b,d){var a,c,e,f,l,k;e=l=0;for(k=b.length;l<k;e=++l)if(f=b[e],f=d(f),"undefined"===typeof a||a===t||f<c)c=f,a=e;return b.splice(a,1)[0]};c.m=function(b,d){var a,c,e,f;if(b.indexOf!=t)return b.indexOf(d);a=e=0;for(f=b.length;e<
f;a=++e)if(c=b[a],c===d)return a;return-1};q.g=function(b){return this.setMap(b)};q.g.prototype=new s.OverlayView;q.g.prototype.draw=function(){};return q}()}).call(this);}).call(this);
/* Tue 16 Apr 2013 21:11:57 BST */