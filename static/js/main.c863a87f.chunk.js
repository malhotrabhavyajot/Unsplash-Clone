(this.webpackJsonpMasonary=this.webpackJsonpMasonary||[]).push([[0],{36:function(e,n,t){e.exports=t(76)},73:function(e,n,t){},75:function(e,n,t){},76:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(27),i=t.n(l),c=t(11),s=t(5),o=t(2),u=t(3),m=t(28),d=t.n(m);function p(){var e=Object(o.a)(['\n  font-family: "Segoe UI", "Roboto", "Oxygen","Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue";\n  margin-bottom: 1em;\n']);return p=function(){return e},e}function f(){var e=Object(o.a)(["\n  max-width: 50rem;\n  margin: 1rem auto;\n  text-align: center;\n"]);return f=function(){return e},e}var h=u.b.header(f()),v=u.b.h1(p()),b=function(){return r.a.createElement(h,null,r.a.createElement(d.a,{className:"lead"},r.a.createElement(v,null,"Unsplash Photo Feed"),r.a.createElement("p",null,"A website dedicated to sharing stock photography under the Unsplash license. The website generates more than 17 billion photo impressions per month on their growing library of over 2 million photos."),r.a.createElement("p",null,"Created For : Yellow Class")))};function E(){var e=Object(o.a)([""]);return E=function(){return e},e}var g=u.b.img(E()),y=function(e){var n=e.url,t=e.key;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{key:t,src:n,alt:""}))};function j(){var e=Object(o.a)(["\n\ntext-align: center;\n.lds-ellipsis {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n.lds-ellipsis div {\n  position: absolute;\n  top: 33px;\n  width: 13px;\n  height: 13px;\n  border-radius: 50%;\n  background: #222;\n  animation-timing-function: cubic-bezier(0, 1, 1, 0);\n}\n.lds-ellipsis div:nth-child(1) {\n  left: 8px;\n  animation: lds-ellipsis1 0.6s infinite;\n}\n.lds-ellipsis div:nth-child(2) {\n  left: 8px;\n  animation: lds-ellipsis2 0.6s infinite;\n}\n.lds-ellipsis div:nth-child(3) {\n  left: 32px;\n  animation: lds-ellipsis2 0.6s infinite;\n}\n.lds-ellipsis div:nth-child(4) {\n  left: 56px;\n  animation: lds-ellipsis3 0.6s infinite;\n}\n@keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(0);\n  }\n}\n@keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(24px, 0);\n  }\n}\n"]);return j=function(){return e},e}var w=u.b.div(j()),O=function(){return r.a.createElement(w,null,r.a.createElement("div",{class:"lds-ellipsis"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))},x=t(32),k=t.n(x),N=t(33),F=t(34),S=t.n(F),M=t(9),C=t.n(M),T=t(35),U=t(10),z=t.n(U);function H(){var e=Object(o.a)(["\n"]);return H=function(){return e},e}var P=Object(u.a)(H()),_=new z.a({accessKey:"Hrz02H4_PT7nMaw25FlMEUdFRjG07OBj8Y1zeK1PTfA"});function A(){var e=Object(a.useState)(""),n=Object(s.a)(e,2),t=n[0],l=n[1],i=Object(a.useState)([]),c=Object(s.a)(i,2),o=c[0],u=c[1],m=function(){var e=Object(T.a)(C.a.mark((function e(n){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),_.search.photos(t).then(U.toJson).then((function(e){u(e.results)}));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(P,null),r.a.createElement("form",{className:"form",onSubmit:m}," ",r.a.createElement("label",{className:"label",htmlFor:"query"}," ","\ud83d\udcf7"),r.a.createElement("input",{type:"text",name:"query",className:"input",placeholder:'Try "dog" or "apple"',value:t,onChange:function(e){return l(e.target.value)}}),r.a.createElement("button",{type:"submit",className:"button"},"Search")),r.a.createElement("div",{className:"card-list"},o.map((function(e){return r.a.createElement("div",{className:"card",key:e.id},r.a.createElement("img",{className:"card--image",alt:e.alt_description,src:e.urls.full,width:"50%",height:"50%"}))}))," "))}t(73);function B(){var e=Object(o.a)(["\n"]);return B=function(){return e},e}var I=Object(u.a)(B());var J=function(){var e=Object(a.useState)([]),n=Object(s.a)(e,2),t=n[0],l=n[1];Object(a.useEffect)((function(){i()}),[]);var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,n="https://api.unsplash.com",a="Hrz02H4_PT7nMaw25FlMEUdFRjG07OBj8Y1zeK1PTfA";k.a.get("".concat(n,"/photos/random?client_id=").concat(a,"&count=").concat(e)).then((function(e){l([].concat(Object(c.a)(t),Object(c.a)(e.data)))}))};return r.a.createElement("div",null,r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Search Images"),r.a.createElement(A,null),r.a.createElement(b,null),r.a.createElement(I,null))),r.a.createElement(N.a,{dataLength:t.length,next:i,hasMore:!0,loader:r.a.createElement(O,null)},r.a.createElement(S.a,{breakpointCols:{default:6,1250:5,1200:5,1100:5,1150:5,1e3:4,992:4,900:3,768:3,705:2,576:1,525:1,420:1},className:"masonry-grid",columnClassName:"masonry-grid_column"},t.map((function(e){return r.a.createElement(y,{url:e.urls.thumb,key:e.id})})))))};t(74),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(75);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.c863a87f.chunk.js.map