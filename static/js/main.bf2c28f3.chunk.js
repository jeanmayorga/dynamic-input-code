(this["webpackJsonpdynamic-input-code"]=this["webpackJsonpdynamic-input-code"]||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(3),u=n.n(c),i=n(1);function o(){var e=Object(r.useState)(),t=Object(i.a)(e,2),n=t[0],c=t[1],u=Object(r.useState)([]),o=Object(i.a)(u,2),l=o[0],s=o[1],v=[1,2,3,4,5],m=Object(r.useRef)(v.map((function(){return Object(r.createRef)()})));return a.a.createElement("div",{className:"app"},a.a.createElement("div",{className:"container"},a.a.createElement("h1",null,"Dynamic input code!"),a.a.createElement("p",{className:"white"},"Paste/Write your code"),n&&a.a.createElement("p",{className:"white"},"Your code is: ",n),a.a.createElement("div",{className:"input-numbers"},a.a.createElement("div",{className:"input"},v.map((function(e,t){return a.a.createElement("input",{type:"text",placeholder:" ",maxLength:1,onChange:function(e){return function(e){var t=e.event.target.value,n=e.currentIndex,r=l;l[n]=t,s(r)}({event:e,currentIndex:t})},onPaste:function(e){return function(e){var t=e.event.clipboardData.getData("Text").split("");m.current.forEach((function(e,n){e.current.value=t[n],e.current.blur()}));var n=t.slice(0,v.length);s(n)}({event:e})},onKeyUp:function(e){return function(e){var t,n,r=e.event,a=e.currentIndex,c=r.currentTarget.value,u=null===(t=m.current[a+1])||void 0===t?void 0:t.current,i=null===(n=m.current[a-1])||void 0===n?void 0:n.current;if(8!==r.keyCode)c&&u&&u.focus();else{if(!i)return;i.focus()}}({event:e,currentIndex:t})},onFocus:function(e){return{event:e}.event.target.select()},ref:m.current[t],key:t})}))),a.a.createElement("button",{className:"priv-btn",onClick:function(){var e=l.join("");c(e)}},"Continuar"))))}n(9);u.a.render(a.a.createElement(o,null),document.getElementById("root"))},4:function(e,t,n){e.exports=n(10)},9:function(e,t,n){}},[[4,1,2]]]);
//# sourceMappingURL=main.bf2c28f3.chunk.js.map