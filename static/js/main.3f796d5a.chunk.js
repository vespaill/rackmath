(this.webpackJsonprack_math=this.webpackJsonprack_math||[]).push([[0],{34:function(e,a,t){e.exports=t(52)},39:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){},52:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(11),u=t.n(r),c=t(12),i=t(20),o=t(32),s=t(26),v=t(27),m=t(33),y=t(31),d=t(5),f=t(15),b=t(57),h=(t(39),function(){return l.a.createElement("nav",{className:"bg-red fixed-bottom navbar navbar-dark"},l.a.createElement("div",{className:"navbar-nav navbar-expand"},l.a.createElement(c.b,{className:"nav-item nav-link pr-5",to:"/rackmath"},"calc"),l.a.createElement(c.b,{className:"nav-item nav-link",to:"/inventory"},"inv")))}),p=t(55),E=t(29),q=(t(24),t(45),function(e){var a=e.value,t=e.quantity,n=e.bgColor,r=e.onClick;return l.a.createElement("div",{className:"plate-group text-center"},l.a.createElement("a",{href:"#0",onClick:function(){return r(a)},className:"plate-group__plate"+(t?n:"")},l.a.createElement("span",{className:"center-vertically"},a)),l.a.createElement("div",{className:"plate-group__quantity",style:{opacity:t?"100%":"0"}},l.a.createElement("span",{className:"center-vertically"},t)))}),g=function(e){return" bg-"+((a=e)%6===0?"black":a%5===0?"yellow":a%4===0?"red":a%3===0?"purple":a%2===0?"green":"cyan");var a},k=function(e){var a=e.data,t=a.unit,n=a.barbell,r=a.availablePlates;return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{className:"d-flex justify-content-between"},l.a.createElement("h1",null,"Unit"),l.a.createElement("h1",null,t)),l.a.createElement(p.a,{className:"d-flex justify-content-between"},l.a.createElement("h1",null,"Barbell"),l.a.createElement("h1",null,n[t])),l.a.createElement(p.a,{className:"d-flex justify-content-center"},l.a.createElement("h1",null,"Available plates")),l.a.createElement(p.a,null,r[t].map((function(a,t){var n=a.value,r=a.quantity;return l.a.createElement(E.a,{key:t,xs:4},l.a.createElement(q,{onClick:e.onClick,value:n,quantity:r,bgColor:g(t)}))}))))},N=function(){return l.a.createElement("h1",null,"Not Found")},x=(t(46),function(e){var a=e.calculatedPlates.map((function(e,a){return l.a.createElement("div",{key:a,className:"plate-container"},l.a.createElement("div",{className:"plate-container__plate center-vertically",style:{height:"".concat((t=8*e,t>=315?315:t<=35?35:t),"px")}}),l.a.createElement("div",{className:"plate-container__plate--text center-vertically"},e));var t}));return l.a.createElement("div",{className:"load"},l.a.createElement("div",{className:"load__barbell--shaft"}),l.a.createElement("div",{className:"load__barbell--sleeve-threshold"}),l.a.createElement("div",{className:"load__plate-group "},l.a.createElement("div",{style:{opacity:"0px"},className:"plate-container"}),a))}),_=t(58),P=t(56),w=t(30),S=t(59),j=(t(47),function(e){return l.a.createElement(_.a,{onSubmit:function(a){return e.onSubmit(a)}},l.a.createElement(P.a,null,l.a.createElement(w.a,{className:"weight-input__form mb-3",type:"number",name:"load",placeholder:"Enter Weight","aria-label":"weight"}),l.a.createElement(P.a.Append,null,l.a.createElement(P.a.Text,{className:"weight-input__text"},e.unit))),l.a.createElement(S.a,{className:"mx-auto d-block",variant:"dark",type:"submit"},"Submit"))}),C=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(j,{unit:e.unit,onSubmit:e.onSubmit}),l.a.createElement(x,{calculatedPlates:e.calculatedPlates}))},L=(t(49),t(50),function(e){return Math.round(e/2.20462)}),O=function(e){Object(m.a)(t,e);var a=Object(y.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={inventory:{unit:"lbs",barbell:{lbs:45,kg:L(45)},availablePlates:{lbs:[{value:100,quantity:0},{value:65,quantity:0},{value:55,quantity:0},{value:50,quantity:0},{value:45,quantity:8},{value:35,quantity:0},{value:25,quantity:8},{value:20,quantity:0},{value:15,quantity:0},{value:12.5,quantity:0},{value:10,quantity:8},{value:7.5,quantity:0},{value:5,quantity:8},{value:2.5,quantity:8},{value:1.25,quantity:0},{value:1,quantity:0},{value:.75,quantity:0},{value:.5,quantity:0},{value:.25,quantity:0}],kg:[{value:50,quantity:0},{value:45,quantity:0},{value:35,quantity:0},{value:30,quantity:0},{value:25,quantity:0},{value:20,quantity:0},{value:15,quantity:0},{value:12.5,quantity:0},{value:10,quantity:0},{value:7.5,quantity:0},{value:5,quantity:0},{value:3,quantity:0},{value:2.5,quantity:0},{value:2,quantity:0},{value:1.5,quantity:0},{value:1.25,quantity:0},{value:1,quantity:0},{value:.75,quantity:0},{value:.5,quantity:0},{value:.25,quantity:0}]}},calculatedPlates:[]},e.handlePlateGroupClick=function(a){var t=e.state.inventory.unit,n=Object(o.a)({},e.state.inventory.availablePlates),l=n[t].findIndex((function(e){return e.value===a}));n[t][l].quantity=(n[t][l].quantity+2)%10,e.setState({availablePlates:n})},e.handleLoadSubmit=function(a){a.preventDefault();var t=a.currentTarget.load.value;console.log(t);var n=e.state.inventory,l=n.unit,r=n.availablePlates,u=e.state.inventory.barbell;u=u[l];var c=r[l].filter((function(e){return e.quantity>0})),i=e.arrayifyInventoryPlates(c),o=e.validateLoad(t,u,i),s=o.msg;if(o.valid){var v=e.calculatePlates(t,u,i),m=v.loadSuccess,y=v.tooExact,d=v.msg,b=v.array;m?(y&&f.b.error(d),e.setState({calculatedPlates:b})):f.b.error(d)}else f.b.error(s)},e.arrayifyInventoryPlates=function(e){var a,t=[],n=Object(i.a)(e);try{for(n.s();!(a=n.n()).done;)for(var l=a.value,r=l.quantity/2;r>0;--r)t.push(l.value)}catch(u){n.e(u)}finally{n.f()}return t},e.validateLoad=function(e,a,t){if(e<a)return{msg:"That's not even the bar!",valid:!1};var n=a+2*t.reduce((function(e,a){return e+a}));return console.log("validateLoad",t),console.log("validateLoad",n),e>n?{msg:"Your inventory doesn't work with that weight",valid:!1}:{msg:"Load is valid",valid:!0}},e.calculatePlates=function(e,a,t){var n=e-a;if(0===n)return{loadSuccess:!0,msg:"Just the bar",array:[]};n/=2;var l,r=[],u=Object(i.a)(t);try{for(u.s();!(l=u.n()).done;){var c=l.value;if(n>=c){if(r.push(c),r.length>8)return{msg:"Not enough room on the bar!"};n-=c}}}catch(s){u.e(s)}finally{u.f()}if(0!==n){var o=a+2*r.reduce((function(e,a){return e+a}),0);return{loadSuccess:!0,tooExact:!0,msg:"Load is too exact\u2014".concat(0===r.length?"Using just the bar":"Loaded ".concat(o," instead")),array:r}}return{loadSuccess:!0,array:r}},e}return Object(v.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement(b.a,{style:{paddingBottom:"70px"}},l.a.createElement(f.a,{limit:1,autoClose:2e3,hideProgressBar:!0,pauseOnFocusLoss:!1,draggable:!1,pauseOnHover:!1}),l.a.createElement(d.d,null,l.a.createElement(d.b,{path:"/rackmath",render:function(){return l.a.createElement(C,{unit:e.state.inventory.unit,calculatedPlates:e.state.calculatedPlates,onSubmit:e.handleLoadSubmit})}}),l.a.createElement(d.b,{path:"/inventory",render:function(){return l.a.createElement(k,{data:e.state.inventory,onClick:e.handlePlateGroupClick})}}),l.a.createElement(d.b,{path:"/not-found",component:N}),l.a.createElement(d.a,{from:"/",exact:!0,to:"/rackmath"}),l.a.createElement(d.a,{to:"/not-found"}))),l.a.createElement(h,null))}}]),t}(n.Component);t(51),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(l.a.createElement(c.a,null,l.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.3f796d5a.chunk.js.map