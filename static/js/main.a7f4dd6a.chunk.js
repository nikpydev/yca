(this["webpackJsonpyellow-class-react-assignment"]=this["webpackJsonpyellow-class-react-assignment"]||[]).push([[0],{19:function(e,t,n){e.exports=n(44)},24:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(17),o=n.n(r),s=(n(24),n(7)),i=n(4),u=n.n(i),l=n(6),m=n(2),d=n(18),f=n.n(d),b=(n(43),function(e){var t=e.imagesArray,n=e.idReceived,r=e.setModalVisible,o=Object(a.useState)(n),s=Object(m.a)(o,2),i=s[0],u=s[1];return c.a.createElement("div",null,c.a.createElement("div",{id:"myModal",className:"modal"},c.a.createElement("div",{className:"modal-content"},c.a.createElement("span",{className:"close",onClick:function(){r(!1)}},"\xd7"),t.map((function(e,t){if(t===i)return console.log("".concat(t," === ").concat(i)),c.a.createElement("div",{key:t},c.a.createElement("img",{style:{width:"50%"},src:e.download_url,alt:e.author,className:"imageStyle"}))})),c.a.createElement("button",{onClick:function(){i>0&&u((function(e){return e-1}))}},"Previous"),c.a.createElement("button",{onClick:function(){u((function(e){return e+1}))}},"Next"))))}),v=function(){var e=Object(a.useState)(!1),t=Object(m.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)([]),i=Object(m.a)(o,2),d=i[0],v=i[1],p=Object(a.useState)(null),g=Object(m.a)(p,2),h=g[0],O=g[1],j=Object(a.useState)(!0),w=Object(m.a)(j,2),y=w[0],E=w[1],k=Object(a.useState)(1),N=Object(m.a)(k,2),S=N[0],C=N[1],x=Object(a.useRef)(1),R=Object(a.useRef)(0),M=Object(a.useRef)(new IntersectionObserver((function(e){var t=e[0].boundingClientRect.y;R.current>t&&setTimeout((function(){return A()}),1e3),R.current=t}),{threshold:1})),A=function(){x.current++,I(x.current)},B=Object(a.useCallback)(function(){var e=Object(l.a)(u.a.mark((function e(t){var n,a,c,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("pageNumber: ",t),n="https://picsum.photos/v2/list?page=".concat(t,"&limit=15"),r(!0),e.prev=3,e.next=6,f.a.get(n);case 6:return a=e.sent,c=a.status,o=a.data,r(!1),e.abrupt("return",{status:c,data:o});case 12:return e.prev=12,e.t0=e.catch(3),r(!1),e.abrupt("return",e.t0);case 16:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}(),[]),I=Object(a.useCallback)(function(){var e=Object(l.a)(u.a.mark((function e(t){var n,a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B(t);case 2:n=e.sent,a=n.status,c=n.data,200===a&&v((function(e){return[].concat(Object(s.a)(e),Object(s.a)(c))}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[B]);return Object(a.useEffect)((function(){I(x.current);var e=h,t=M.current;return e&&t.observe(e),function(){e&&t.unobserve(e)}}),[I,h]),c.a.createElement("div",{className:"appStyle",style:{textAlign:"center"}},d&&c.a.createElement("ul",{style:{listStyle:"none"},className:"imageGrid"},d.map((function(e,t){return c.a.createElement("li",{key:t,className:"imageContainer",onClick:function(){E(!0),C(t)}},c.a.createElement("img",{style:{width:"95vw"},src:e.download_url,alt:e.author,className:"imageStyle"}))}))),n&&c.a.createElement("li",null,"Loading ..."),c.a.createElement("div",{ref:O,className:"buttonContainer"},c.a.createElement("h1",null,"Loading more content")),y?c.a.createElement(b,{imagesArray:d,idReceived:S,setModalVisible:E}):void 0)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.a7f4dd6a.chunk.js.map