(this.webpackJsonpclockface=this.webpackJsonpclockface||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(12)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(3),o=n.n(i),r=(n(10),n(4)),s=n(1),l=(n(11),function(e){var t=e.id,n=e.videoLink,i=e.onVideoEnd,o=e.showRef,r=Object(c.useRef)(null);return Object(c.useEffect)((function(){o(r,t)}),[]),a.a.createElement("div",{className:"video-container"},a.a.createElement("video",{onEnded:i,className:"hidden",ref:r,key:n,controls:!0,preload:"auto"},a.a.createElement("source",{src:"/videos/".concat(n),type:"video/mp4"})))}),u={start:{label:"intro",link:"1.mp4",choices:["A1","B1"]},A1:{name:"A1",label:"This is A1",link:"1a.mp4",choices:["A2","AB2"]},B1:{name:"B1",label:"This is B1",link:"1b.mp4",choices:["B2","AB2"]},A2:{name:"A2",label:"This is A2",link:"2a.mp4"},AB2:{name:"AB2",label:"This is AB2",link:"2ab.mp4"},B2:{name:"B2",label:"This is B2",link:"2b.mp4"}},d=function(e){var t=e.buttonChecked,n=e.startClick,i=e.choiceClick,o=e.choices,r=e.addButtonRef,s=Object(c.useRef)(null),l=Object(c.useRef)(null),d=function(e,n){t||i(e)};return Object(c.useEffect)((function(){r(s,"A"),r(l,"B")}),[]),a.a.createElement("div",{className:"controlsContainer ".concat(o?"space":"center")},o?a.a.createElement("button",{ref:s,className:"left-button hidden",onClick:function(e){return d("left")}},u[o[0]].label):null,a.a.createElement("button",{className:"start-button",onClick:n},"Start"),o?a.a.createElement("button",{ref:l,className:"right-button hidden",onClick:function(e){return d("right")}},u[o[1]].label):null)};var f=function(){var e=Object(c.useRef)(!0),t=Object(c.useState)(!1),n=Object(s.a)(t,2),i=n[0],o=n[1],f=Object(c.useState)({}),m=Object(s.a)(f,2),b=m[0],h=m[1],v=Object(c.useState)({}),p=Object(s.a)(v,2),j=p[0],O=p[1],E=Object(c.useState)({p1:"1.mp4"}),k=Object(s.a)(E,2),B=k[0],A=k[1],w=Object(c.useState)(null),L=Object(s.a)(w,2),S=L[0],g=L[1],C=Object(c.useState)(null),T=Object(s.a)(C,2),y=T[0],N=T[1],R=Object(c.useState)(null),V=Object(s.a)(R,2),J=V[0],M=V[1],W=Object(c.useState)(null),x=Object(s.a)(W,2),I=x[0],$=x[1],q=Object(c.useState)(!1),z=Object(s.a)(q,2),D=z[0],F=z[1],G=Object(c.useState)(!1),H=Object(s.a)(G,2),K=H[0],P=H[1],Q=Object(c.useState)(!1),U=Object(s.a)(Q,2),X=U[0],Y=U[1],Z=["p1","p2","p3"],_=function(e){console.log("setting visibility"),Z.forEach((function(t){t===e?j[t].current.classList.remove("hidden"):j[t].current.classList.add("hidden")}))},ee=function(){console.log(J),_(J),j[J].current.play()},te=function(e,t){var n=j;n[t]=e,O(n)},ne=function(e){Object.keys(b).forEach((function(t){e?b[t].current.classList.remove("hidden"):b[t].current.classList.add("hidden")}))};Object(c.useEffect)((function(){!e.current&&S.choices&&function(){var e=S.choices,t=Z.filter((function(e){return e!==y})),n=Object(r.a)({},B);e.forEach((function(e,c){n[t[c]]=u[e].link})),A(n)}()}),[S]),Object(c.useEffect)((function(){if(!e.current){var t=j[y].current.duration-j[y].current.currentTime;setTimeout(ee,1e3*t-500)}}),[J]),Object(c.useEffect)((function(){if(e.current)e.current=!1;else if(S.choices){var t=j[y].current.duration;setTimeout((function(){ne(!0),o(!0),setTimeout((function(){o(!1)}),6e3)}),1e3*t-7e3),setTimeout((function(){var e=Math.random()<.5?"left":"right";ce(e)}),1e3*t-2e3)}else P(!0)}),[y]);var ce=function(e){if(!b.A.current.classList.contains("active")&&!b.B.current.classList.contains("active")){var t=Z.filter((function(e){return e!==y}));"left"===e?(M(t[0]),$(S.choices[0]),b.A.current.classList.add("active")):(M(t[1]),$(S.choices[1]),b.B.current.classList.add("active")),F(!0)}},ae=function(){K?Y(!0):(N(J),g(u[I]),F(!1),ne(!1),b.A.current.classList.remove("active"),b.B.current.classList.remove("active"))};return a.a.createElement("div",{className:"App"},i?a.a.createElement("div",{className:"countdown-line"}):null,a.a.createElement("div",{className:"videos-wrapper"},a.a.createElement(l,{id:"p1",videoLink:B.p1,onVideoEnd:ae,showRef:te}),a.a.createElement(l,{id:"p2",videoLink:B.p2,onVideoEnd:ae,showRef:te}),a.a.createElement(l,{id:"p3",videoLink:B.p3,onVideoEnd:ae,showRef:te})),a.a.createElement(d,{buttonChecked:D,startClick:function(e){j.p1.current.play(),e.currentTarget.style.display="none",N("p1"),g(u.start),_("p1")},choices:S?S.choices:null,choiceClick:ce,addButtonRef:function(e,t){var n=b;n[t]=e,h(n)}}),a.a.createElement("div",{className:"credits ".concat(X?"":"hidden")},a.a.createElement("p",null,"Credits")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.060a0866.chunk.js.map