(this["webpackJsonpbarbell-loader"]=this["webpackJsonpbarbell-loader"]||[]).push([[0],{34:function(e,a,t){},38:function(e,a,t){e.exports=t.p+"static/media/fire.fe489d1d.png"},45:function(e,a,t){e.exports=t(81)},52:function(e,a,t){},53:function(e,a,t){},54:function(e,a,t){},55:function(e,a,t){},56:function(e,a,t){},61:function(e,a,t){},71:function(e,a,t){},72:function(e,a,t){},73:function(e,a,t){},74:function(e,a,t){},75:function(e,a,t){},77:function(e,a,t){},78:function(e,a,t){},79:function(e,a,t){},80:function(e,a,t){},81:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(13),c=t.n(r),u=t(12),o=t(29),i=t(10),s=t(36),m=t(37),d=t(44),v=t(42),p=t(5),f=t(16),b=t(15),g=t.n(b),h=(t(52),t(53),function(){return l.a.createElement("div",{className:"barbell-icon"},l.a.createElement("div",{className:"barbell"},l.a.createElement("div",{className:"barbell__shaft"}),l.a.createElement("div",{className:"plate-group--1"},l.a.createElement("div",{className:"plate-group__plate--small"}),l.a.createElement("div",{className:"plate-group__plate--med"}),l.a.createElement("div",{className:"plate-group__plate--large"})),l.a.createElement("div",{className:"plate-group--2"},l.a.createElement("div",{className:"plate-group__plate--small"}),l.a.createElement("div",{className:"plate-group__plate--med"}),l.a.createElement("div",{className:"plate-group__plate--large"}))))}),E=(t(54),function(){return l.a.createElement("div",{className:"plate-icon"},l.a.createElement("div",{className:"plate__outline"}),l.a.createElement("div",{className:"plate__circle"}))}),y=(t(55),function(){return l.a.createElement("div",{className:"info-icon"},l.a.createElement("div",null,"i"))}),w=t(38),k=t.n(w),N=(t(56),function(){return l.a.createElement("img",{className:"fire-icon",src:k.a,alt:"fire"})}),q=function(){var e=[{url:{pathname:"/home",from:"navBar"},component:l.a.createElement(h,null)},{url:"/warmup",component:l.a.createElement(N,null)},{url:"/inventory",component:l.a.createElement(E,null)},{url:"/about",component:l.a.createElement(y,null)}],a={className:"nav-item",activeClassName:"active-class",replace:!0};return l.a.createElement("nav",{className:"bg-red navbar fixed-bottom d-flex justify-content-between"},e.map((function(e,t){var n=e.url,r=e.component;return l.a.createElement(u.c,Object.assign({key:t},a,{to:n}),r)})))},P=t(84),L=t(40),C=function(e){var a=e.value,t=e.quantity,n=e.bgColor,r=e.onClick;return l.a.createElement("div",{className:"plate-group text-center"},l.a.createElement("button",{onClick:function(){return r(a)},className:"plate-group__plate"+(t?" bg-"+n:"")},l.a.createElement("span",{className:"center-vertically"},a)),t>0&&l.a.createElement("div",{className:"plate-group__quantity"},l.a.createElement("span",{className:"center-vertically unselectable"},t)))},S=function(e){var a=e.children,t=e.my,n=e.mx,r=l.a.Children.count(a)>1?"between":"center",c="my-"+(t||"1"),u="mx-"+(n||"3");return l.a.createElement(P.a,{className:"".concat(c," ").concat(u," d-flex justify-content-").concat(r)},l.a.Children.map(a,(function(e){return l.a.createElement(l.a.Fragment,null,e)})))},x=(t(61),function(e){var a=e.unit,t=e.barbell,n=e.availPlates,r=e.onUnitClick,c=e.onPlateGroupClick,u=e.onClear;return l.a.createElement(l.a.Fragment,null,l.a.createElement(S,null,l.a.createElement("h1",null,"Unit"),l.a.createElement("button",{className:"btn-unit",onClick:function(e){return r(e)}},a)),l.a.createElement(S,null,l.a.createElement("h1",null,"Barbell"),l.a.createElement("h1",null,t[a])),l.a.createElement(S,null,l.a.createElement("h1",null,"Available plates")),l.a.createElement(P.a,{style:{minWidth:"300px"}},n[a].map((function(e,a){var t=e.value,n=e.color,r=e.quantity,u={onClick:c,value:t,quantity:r,bgColor:n};return l.a.createElement(L.a,{key:a,xs:4},l.a.createElement(C,u))})),l.a.createElement(L.a,{xs:4},l.a.createElement("div",{className:"btn-clear-container text-center"},l.a.createElement("button",{className:"btn-clear",onClick:function(){return u()}},l.a.createElement("span",{className:"center-vertically"},"clear"))))))}),O=function(){return l.a.createElement("h1",null,"Not Found")},_=t(86),j=t(85),W=t(41),T=t(87),U=(t(33),t(34),function(e){return l.a.createElement(_.a,{onSubmit:function(a){return e.onSubmit(a)}},l.a.createElement(j.a,null,l.a.createElement(W.a,{className:"text-right",type:"number",inputMode:"numeric",pattern:"[0-9]*",name:"loadInput",placeholder:e.placeholder,"aria-label":"weight",min:"0",step:"0.5",onFocus:function(e){e.currentTarget.select()}}),l.a.createElement(j.a.Append,null,l.a.createElement(j.a.Text,{className:"weight-input__text"},e.unit))),l.a.createElement("div",null,l.a.createElement(T.a,{className:"mx-auto d-block",variant:"dark",type:"submit"},e.btnText)))}),R=t(14),B=t.n(R),M=(t(71),function(e){var a=e.barbellWeight,t=e.calcdPlates;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"load"},l.a.createElement("div",{className:"load__barbell--shaft"},l.a.createElement("div",null,a)),l.a.createElement("div",{className:"load__barbell--sleeve-threshold"}),l.a.createElement("div",{className:"load__plate-group"},l.a.createElement("div",{style:{opacity:"0px"},className:"plate-container"}),t.map((function(e,a){return l.a.createElement("div",{key:B.a.generate(),className:"plate-container animate-slide-in-and-bounce",style:{left:"".concat(32*a+32,"px"),animationDelay:"".concat(.1*a,"s")}},l.a.createElement("div",{className:"plate-container__plate center-vertically bg-".concat(e.color),style:{height:"".concat((t=7*e.value,n=45,r=315,t>=r?r:t<=n?n:t),"px")}}),l.a.createElement("div",{className:"plate-container__plate--text center-vertically"},e.value));var t,n,r})))))}),F=(t(72),function(e){var a=e.prevCalcdLoad,t=e.calcdLoad,n=e.unit;return l.a.createElement("div",{className:"load-value center-vertically"},a>-1&&l.a.createElement("div",{key:B.a.generate(),className:"load-value__prev badge badge-success animate-leave"},"".concat(a," ").concat(n)),t>-1&&l.a.createElement("div",{key:B.a.generate(),className:"load-value__cur badge badge-success animate-enter"},"".concat(t," ").concat(n)))}),I=function(e){var a=e.unit,t=e.barbellWeight,r=e.calcdPlates,c=e.calcdLoad,u=e.prevCalcdLoad,o=e.onSubmit,i=e.resetPrevLoad,s={unit:a,onSubmit:o},m={barbellWeight:t,calcdPlates:r},d={unit:a,calcdLoad:c,prevCalcdLoad:u},v=Object(p.g)().from;return Object(n.useEffect)((function(){"navBar"===v&&i()}),[v,i]),"navBar"===v?l.a.createElement(p.a,{to:"/home"}):l.a.createElement(l.a.Fragment,null,l.a.createElement(S,null,l.a.createElement("h1",null,"Barbell Loader")),l.a.createElement(U,Object.assign({},s,{placeholder:"Enter Weight",btnText:"Load"})),l.a.createElement(M,m),l.a.createElement(F,d))},D=t(43),G=function(){return l.a.createElement("svg",{width:"25.25",height:"25.25",viewBox:"0 0 16 16",className:"bi bi-gear-fill",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{fillRule:"evenodd",d:"M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 0 0-5.86 2.929 2.929 0 0 0 0 5.858z"}))},A=function(e){var a=e.unit,t=e.onSubmit,n=e.btnText,r=e.onSettings,c=e.workWeight,u={required:!0,type:"number",inputMode:"numeric",pattern:"[0-9]*",min:"0",onFocus:function(e){e.currentTarget.select()}},o="kg"===a?2840:7e3;return l.a.createElement(_.a,{onSubmit:function(e){return t(e)}},l.a.createElement(j.a,null,l.a.createElement(W.a,Object.assign({name:"loadInput",placeholder:c>0?c:"weight",step:"0.5",max:o},u)),l.a.createElement(j.a.Append,null,l.a.createElement(j.a.Text,null,a," \xd7 ")),l.a.createElement(W.a,Object.assign({name:"numRepsInput",placeholder:"reps",max:"999",step:"1",defaultValue:"5"},u))),l.a.createElement("div",{className:"button-group"},l.a.createElement(T.a,{className:"calc-btn",type:"submit",variant:"dark"},n),l.a.createElement(T.a,{className:"settings-btn",variant:"dark",onClick:function(){return r()}},l.a.createElement(G,null))))},J=(t(73),function(e){var a=e.unit,t=e.percentage,n=e.weight,r=e.numReps,c=e.isWorkingSet,o=e.btnText,i=e.animationDelay,s=c?" working-weight":"";return l.a.createElement("div",{style:{animationDelay:i},className:"set-container d-flex justify-content-between animate-slide-in"+s},l.a.createElement("span",{className:"percentage"},Math.round(100*t),"%"),l.a.createElement("span",{className:"set"},"".concat(n," ").concat(a," \xd7 ").concat(r)),l.a.createElement(u.b,{to:"/home"},l.a.createElement(T.a,{variant:"dark",onClick:function(){return e.onClick(n)}},o)))}),z=(t(74),function(e){var a=e.show,t=e.onClose,n=e.children,r=e.header;return l.a.createElement("div",{className:"popup"+(a?"":" hide")},l.a.createElement("div",{className:"popup__content"},l.a.createElement(S,{mx:3,my:2},l.a.createElement("h1",null,r),l.a.createElement(T.a,{className:"close-btn",variant:"danger",onClick:function(){return t()}},l.a.createElement("div",null,"\xd7"))),l.a.createElement("div",null,n)))}),V=(t(75),function(e){var a=e.workWeight,t=e.workNumReps,r=e.warmUpSets,c=e.percentages,u=e.unit,o=e.onSubmit,i={unit:u,onClick:e.onLoad,animationDelay:"".concat(.05*r.length,"s")},s={percentage:1,weight:a,numReps:t,isWorkingSet:!0,btnText:"Start"},m=Object(n.useState)(!1),d=Object(D.a)(m,2),v=d[0],p=d[1],f=function(){p(!v)},b={unit:u,onSubmit:o,onSettings:f,workWeight:a,btnText:"Calculate"};return l.a.createElement(l.a.Fragment,null,l.a.createElement(S,null,l.a.createElement("a",{href:"https://www.t-nation.com/training/most-intelligent-way-to-warm-up",target:"#blank"},l.a.createElement("h1",null,"Warm Up Sets Calculator"))),l.a.createElement(A,b),!v&&l.a.createElement("div",{className:"setList-container"},l.a.createElement("div",{className:"setList mx-auto"},r.map((function(e,a){var t={percentage:e.percentage,weight:e.weight,numReps:e.numReps,animationDelay:"".concat(.05*a,"s")};return l.a.createElement(J,Object.assign({key:B.a.generate(),btnText:"Load"},i,t))})),-1!==a&&l.a.createElement(J,Object.assign({key:B.a.generate()},i,s)))),l.a.createElement(z,{show:v,header:"Sets Toggler",onClose:f},c.map((function(a,t){var n=a.value,r=a.on;return l.a.createElement("button",{key:t,onClick:function(){return e.togglePercentage(t)},className:"mx-auto d-block mb-3 font-weight-bold btn btn-".concat(r?"warning":"secondary text-dark"),style:{animationDelay:"".concat(.1*t,"s")}},"".concat(Math.round(100*n),"%"))}))))}),H=function(){return l.a.createElement("div",{className:"center-vertically",style:{textAlign:"justify"}},"Barbell Loader was inspired by"," ",l.a.createElement("a",{target:"#blank",href:"https://www.happyliftingco.com/pages/rackmath"},"RackMath")," and built from scratch by Victor Espaillat with the help of React.js and Bootstrap.")},$=t(28),K=function(e,a,t){var n,l=t.map((function(e){return Object(i.a)({},e)})),r=[],c=Y(l),u=Object($.a)(c);try{for(u.s();!(n=u.n()).done;)for(var o=n.value.map((function(e){return Object(i.a)({},e)}));o.length>0;){var s=Q(e,a,o),m=s.success,d=s.calcdLoad,v=s.calcdPlates,p=s.roundOff;m&&r.push({calcdLoad:d,calcdPlates:v,roundOff:p}),o[0].quantity--,o[0].quantity<=0&&o.shift()}}catch(f){u.e(f)}finally{u.f()}return r},Q=function(e,a,t){var n,l=t.map((function(e){return Object(i.a)({},e)})),r=a,c=[],u=t.reduce((function(e,a){return e.value<a.value?e:a})).value,o=Object($.a)(l);try{for(o.s();!(n=o.n()).done;)for(var s=n.value,m=s.value,d=s.color,v=s.quantity,p=0;p<v;++p){var f=2*m,b=Math.abs(e-(r+f));if(r+f<e||b<u){if(r+=f,c.push({value:m,color:d}),c.length>8)return{success:!1};s.quantity--}}}catch(h){o.e(h)}finally{o.f()}var g=Math.abs(e-r);return g>2*t.reduce((function(e,a){return e.value>a.value?e:a})).value?{success:!1}:{success:!0,calcdLoad:r,calcdPlates:c,roundOff:g}},X=function(e){var a=e.reduce((function(e,a){return e.roundOff<a.roundOff?e:a})).roundOff,t=e.map((function(e){return Object(i.a)({},e)})).filter((function(e){return e.roundOff===a})),n=t.reduce((function(e,a){return e.calcdPlates.length<a.calcdPlates.length?e:a})).calcdPlates.length;return t.map((function(e){return Object(i.a)({},e)})).filter((function(e){return e.calcdPlates.length===n})).reduce((function(e,a){var t=e.calcdPlates.reduce((function(e,a){return e.value>a.value?e:a})).value,n=a.calcdPlates.reduce((function(e,a){return e.value>a.value?e:a})).value;return t===n?e.calcdPlates.reduce((function(e,a){return a.value===t?e+1:e}),0)>a.calcdPlates.reduce((function(e,a){return a.value===t?e+1:e}),0)?e:a:t>n?e:a}))},Y=function(e){for(var a=[],t=(1<<e.length)-1;t>=0;--t){for(var n=[],l=0;l<e.length;++l)(t&1<<l)>0&&n.push(Object(i.a)({},e[l]));n.length>0&&a.push(n)}return a},Z=(t(76),t(77),t(78),t(79),function(e){Object(d.a)(t,e);var a=Object(v.a)(t);function t(e){var n;Object(s.a)(this,t),(n=a.call(this,e)).state={barbell:{lbs:45,kg:20},calcdPlates:[],calcdLoad:-1,prevCalcdLoad:-1,workWeight:-1,workNumReps:-1,warmUpSets:[],prevWarmUpSets:[]},n.handleUnitClick=function(e){var a=n.state.unit;a="lbs"===a?"kg":"lbs",n.setState({unit:a,calcdPlates:[],calcdLoad:-1,prevCalcdLoad:-1,workWeight:-1,warmUpSets:[]}),e.currentTarget.classList.add("animate-wiggle"),e.currentTarget.classList.remove("animate-wiggle"),g.a.set("unit",a)},n.handlePlateGroupClick=function(e){var a=n.state.unit,t=Object(i.a)({},n.state.availPlates),l=t[a].findIndex((function(a){return a.value===e})),r=t[a][l].quantity;t[a][l].quantity=0===r?16:r-2,n.setState({availPlates:t,calcdPlates:[],calcdLoad:-1,prevCalcdLoad:-1}),g.a.set("availPlates",t)},n.handleLoadSubmit=function(e){e.preventDefault(),e.currentTarget.firstElementChild.firstElementChild.blur(),n.handleLoad(e.currentTarget.loadInput.value)},n.handleLoad=function(e){var a,t,l,r,c=n.state.unit,u=n.state.barbell[c],i=(a=Object(o.a)(n.state.availPlates[c]),t=.5,a.filter((function(e){return e.quantity>0})).map((function(e){return{value:e.value,color:e.color,quantity:e.quantity*t}}))),s=n.state.calcdLoad,m=u+2*i.reduce((function(e,a){return e+a.value*a.quantity}),0);if(r=m,(l=e)>=u&&l<=r){var d=function(e,a,t){var n=Math.abs(e-a),l=t.reduce((function(e,a){return e.value<a.value?e:a})).value;if(0===n)return{success:!0,warn:"justbar",calcdLoad:a,calcdPlates:[]};if(n<=l)return{success:!0,warn:"roundoff",calcdLoad:a,calcdPlates:[],roundOff:{amount:n,up:!1}};var r=K(e,a,t);if(0===r.length)return{success:!1,warn:"notEnoughRoom"};var c,u,o=X(r),i=o.calcdLoad,s=o.calcdPlates,m=o.roundOff;return m&&(c="roundoff",u={amount:m,up:i>e}),{success:!0,calcdLoad:i,calcdPlates:s,roundOff:u,warn:c}}(e,u,i),v=d.success,p=d.warn,b=d.calcdLoad,g=d.calcdPlates,h=d.roundOff;"justbar"===p?f.b.success("Just the bar!"):"roundoff"===p?f.b.warn("Inventory limitation\u2014Load rounded ".concat(h.up?"up":"down"," by ").concat(h.amount," ").concat(c,".")):"notEnoughRoom"===p&&f.b.error("Too many plates to fit on barbell!"),v?n.setState({calcdPlates:g,calcdLoad:b,prevCalcdLoad:s}):n.setState({calcdPlates:[],calcdLoad:-1,prevCalcdLoad:s})}else n.setState({calcdPlates:[],calcdLoad:-1,prevCalcdLoad:s}),e<u?f.b.error("That's not even the bar!"):e>m&&f.b.error("Exceeded maximum allowed by inventory!")},n.handleWorkSetSubmit=function(e){e.preventDefault(),e.currentTarget.firstElementChild.querySelectorAll("input").forEach((function(e){e.blur()}));var a=e.currentTarget,t=a.loadInput,l=a.numRepsInput;n.updateWarmUpSets(t.value,l.value)},n.updateWarmUpSets=function(e,a){if(e&&a){var t=n.state.warmUpSets,l=[],r=n.state,c=r.percentages,u=r.unit,o=r.barbell,i=r.availPlates,s=o[u],m=i[u].filter((function(e){return e.quantity>0})).map((function(e){return e.value})).reduce((function(e,a){return e<a?e:a}));c.forEach((function(t){var n=t.value;if(t.on){var r=function(e,a,t){return Math.round(function(e,a,t){var n=(e-a)%t,l=e-n;return n>=t/2?l+t:l}(e,a,t))}(e*n,s,2*m),c=function(e,a){var t=Math.round(a*(2-4*(e-.5)));return t>0?t:1}(n,a);l.push({percentage:n,weight:r,numReps:c})}})),n.setState({workWeight:e,workNumReps:a,warmUpSets:l,prevWarmUpSets:t})}else n.setState({workWeight:-1,workNumReps:-1,warmUpSets:[],prevWarmUpSets:[]})},n.handlePlateGroupsClear=function(){var e=n.state.unit,a=Object(i.a)({},n.state.availPlates);a[e]=a[e].map((function(e){return{value:e.value,color:e.color,quantity:0}})),n.setState({availPlates:a}),g.a.set("availPlates",a)},n.resetPrevLoad=function(){n.setState({prevCalcdLoad:-1})},n.handleTogglePercentage=function(e){var a=Object(o.a)(n.state.percentages);a[e].on=!a[e].on,n.setState({percentages:a}),g.a.set("percentages",a);var t=n.state,l=t.workWeight,r=t.workNumReps;l>0&&r>0&&n.updateWarmUpSets(l,r)};var l={lbs:[{value:100,quantity:0},{value:65,quantity:0},{value:55,quantity:0},{value:50,quantity:0},{value:45,quantity:16},{value:35,quantity:0},{value:30,quantity:0},{value:25,quantity:16},{value:20,quantity:0},{value:15,quantity:0},{value:12.5,quantity:0},{value:10,quantity:16},{value:7.5,quantity:0},{value:5,quantity:16},{value:2.5,quantity:16},{value:1.25,quantity:0},{value:1,quantity:0},{value:.75,quantity:0},{value:.5,quantity:0},{value:.25,quantity:0}],kg:[{value:50,quantity:0},{value:45,quantity:0},{value:35,quantity:0},{value:30,quantity:0},{value:25,quantity:0},{value:20,quantity:16},{value:15,quantity:0},{value:12.5,quantity:0},{value:10,quantity:16},{value:7.5,quantity:0},{value:5,quantity:16},{value:3,quantity:0},{value:2.5,quantity:16},{value:2,quantity:0},{value:1.5,quantity:0},{value:1.25,quantity:16},{value:1,quantity:0},{value:.75,quantity:0},{value:.5,quantity:0},{value:.25,quantity:0}]};["lbs","kg"].forEach((function(e){l[e]=l[e].map((function(e,a){var t,n=(t=a)%6===0?"black":t%5===0?"yellow":t%4===0?"red":t%3===0?"purple":t%2===0?"green":"cyan";return Object(i.a)(Object(i.a)({},e),{},{color:n})}))}));return n.state.unit=g.a.get("unit")||"lbs",n.state.percentages=g.a.get("percentages")||[{value:.5,on:!0},{value:.6,on:!0},{value:.7,on:!0},{value:.8,on:!0},{value:.9,on:!0},{value:1.1,on:!0}],n.state.availPlates=g.a.get("availPlates")||l,n}return Object(m.a)(t,[{key:"render",value:function(){var e=this.state,a=e.unit,t=e.barbell,n=e.availPlates,r=e.calcdPlates,c=e.calcdLoad,u=e.prevCalcdLoad,o=e.workWeight,i=e.workNumReps,s=e.warmUpSets,m=e.percentages,d={unit:a,barbellWeight:t[a],calcdPlates:r,calcdLoad:c,prevCalcdLoad:u,onSubmit:this.handleLoadSubmit,resetPrevLoad:this.resetPrevLoad},v={unit:a,barbell:t,availPlates:n,onPlateGroupClick:this.handlePlateGroupClick,onUnitClick:this.handleUnitClick,onClear:this.handlePlateGroupsClear},b={unit:a,workWeight:o,workNumReps:i,warmUpSets:s,onSubmit:this.handleWorkSetSubmit,onLoad:this.handleLoad,percentages:m,togglePercentage:this.handleTogglePercentage},g={autoClose:2e3,hideProgressBar:!0,pauseOnFocusLoss:!1,draggable:!1,pauseOnHover:!1,newestOnTop:!0};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container",style:{paddingBottom:"70px"}},l.a.createElement(f.a,g),l.a.createElement(p.d,null,l.a.createElement(p.b,{path:"/home",render:function(){return l.a.createElement(I,d)}}),l.a.createElement(p.b,{path:"/inventory",render:function(){return l.a.createElement(x,v)}}),l.a.createElement(p.b,{path:"/warmup",render:function(){return l.a.createElement(V,b)}}),l.a.createElement(p.b,{path:"/about",component:H}),l.a.createElement(p.b,{path:"/not-found",component:O}),l.a.createElement(p.a,{from:"/",exact:!0,to:"/home"}),l.a.createElement(p.a,{to:"/not-found"}))),l.a.createElement(q,null))}}]),t}(n.Component));t(80),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(u.a,null,l.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.a4f5ecd6.chunk.js.map