(this["webpackJsonpbarbell-loader"]=this["webpackJsonpbarbell-loader"]||[]).push([[0],{28:function(e,t,a){},32:function(e,t,a){e.exports=a.p+"static/media/fire.fe489d1d.png"},36:function(e,t,a){e.exports=a.p+"static/media/cog.f959e642.png"},40:function(e,t,a){e.exports=a(65)},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(12),c=a.n(r),i=a(11),u=a(18),o=a(17),s=a(30),m=a(31),d=a(39),v=a(37),p=a(5),f=a(15),b=(a(45),a(46),function(){return l.a.createElement("div",{className:"barbell-icon"},l.a.createElement("div",{className:"barbell"},l.a.createElement("div",{className:"barbell__shaft"}),l.a.createElement("div",{className:"plate-group--1"},l.a.createElement("div",{className:"plate-group__plate--small"}),l.a.createElement("div",{className:"plate-group__plate--med"}),l.a.createElement("div",{className:"plate-group__plate--large"})),l.a.createElement("div",{className:"plate-group--2"},l.a.createElement("div",{className:"plate-group__plate--small"}),l.a.createElement("div",{className:"plate-group__plate--med"}),l.a.createElement("div",{className:"plate-group__plate--large"}))))}),g=(a(47),function(){return l.a.createElement("div",{className:"plate-icon"},l.a.createElement("div",{className:"plate__outline"}),l.a.createElement("div",{className:"plate__circle"}))}),h=(a(48),function(){return l.a.createElement("div",{className:"info-icon"},l.a.createElement("div",null,"i"))}),E=a(32),y=a.n(E),w=(a(49),function(){return l.a.createElement("img",{className:"fire-icon",src:y.a,alt:"fire"})}),N=function(){return l.a.createElement("nav",{className:"bg-red navbar fixed-bottom d-flex justify-content-between"},l.a.createElement(i.c,{className:"nav-item",activeClassName:"active-class",to:"/home"},l.a.createElement(b,null)),l.a.createElement(i.c,{className:"nav-item",activeClassName:"active-class",to:"/warmup"},l.a.createElement(w,null)),l.a.createElement(i.c,{className:"nav-item",activeClassName:"active-class",to:"/inventory"},l.a.createElement(g,null)),l.a.createElement(i.c,{className:"nav-item",activeClassName:"active-class",to:"/about"},l.a.createElement(h,null)))},k=a(68),q=a(34),_=function(e){var t=e.value,a=e.quantity,n=e.bgColor,r=e.onClick;return l.a.createElement("div",{className:"plate-group text-center"},l.a.createElement("button",{onClick:function(){return r(t)},className:"plate-group__plate"+(a?" bg-"+n:"")},l.a.createElement("span",{className:"center-vertically"},t)),l.a.createElement("div",{className:"plate-group__quantity",style:{opacity:a>0?"100%":"0"}},l.a.createElement("span",{className:"center-vertically unselectable"},a)))},x=(a(27),a(55),function(e){var t=e.unit,a=e.barbell,n=e.availPlates,r=e.onUnitClick,c=e.onPlateGroupClick,i=e.onClear;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement(k.a,{className:"d-flex justify-content-between"},l.a.createElement("h1",null,"Unit"),l.a.createElement("button",{className:"btn-unit",variant:"danger",onClick:function(e){return r(e)}},t)),l.a.createElement(k.a,{className:"d-flex justify-content-between"},l.a.createElement("h1",null,"Barbell"),l.a.createElement("h1",null,a[t])),l.a.createElement(k.a,{className:"d-flex justify-content-center"},l.a.createElement("h1",null,"Available plates"))),l.a.createElement(k.a,{style:{minWidth:"300px"}},n[t].map((function(e,t){var a=e.value,n=e.color,r=e.quantity,i={onClick:c,value:a,quantity:r,bgColor:n};return l.a.createElement(q.a,{key:t,xs:4},l.a.createElement(_,i))})),l.a.createElement(q.a,{xs:4},l.a.createElement("div",{className:"btn-clear-container text-center"},l.a.createElement("button",{className:"btn-clear",onClick:function(){return i()}},l.a.createElement("span",{className:"center-vertically"},"clear"))))))}),S=function(){return l.a.createElement("h1",null,"Not Found")},C=(a(56),function(e){var t=e.unit,a=e.barbellWeight,n=e.calcdPlates,r=e.calcdLoad;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"load"},l.a.createElement("div",{className:"load__barbell--shaft"},l.a.createElement("div",null,a)),l.a.createElement("div",{className:"load__barbell--sleeve-threshold"}),l.a.createElement("div",{className:"load__plate-group"},l.a.createElement("div",{style:{opacity:"0px"},className:"plate-container"}),n.map((function(e,t){return l.a.createElement("div",{key:t,className:"plate-container",style:{left:"".concat(32*t+32,"px")}},l.a.createElement("div",{className:"plate-container__plate center-vertically bg-".concat(e.color),style:{height:"".concat((a=7*e.value,n=45,r=315,a>=r?r:a<=n?n:a),"px")}}),l.a.createElement("div",{className:"plate-container__plate--text center-vertically"},e.value));var a,n,r})))),l.a.createElement("div",{className:"load-value badge badge-success",style:{opacity:r>-1?"100%":"0"}},"".concat(r," ").concat(t)))}),P=a(70),L=a(69),j=a(35),T=a(71),W=(a(28),function(e){return l.a.createElement(P.a,{onSubmit:function(t){return e.onSubmit(t)}},l.a.createElement(L.a,null,l.a.createElement(j.a,{className:"weight-input__form",type:"number",name:"loadInput",placeholder:e.placeholder,"aria-label":"weight",min:"0",step:"0.5",onFocus:function(e){e.currentTarget.select()}}),l.a.createElement(L.a.Append,null,l.a.createElement(L.a.Text,{className:"weight-input__text"},e.unit))),l.a.createElement(T.a,{className:"mx-auto d-block",variant:"dark",type:"submit"},e.btnText))}),O=function(e){var t=e.unit,a=e.barbellWeight,n=e.calcdPlates,r=e.calcdLoad,c={unit:t,onSubmit:e.onSubmit},i={unit:t,barbellWeight:a,calcdPlates:n,calcdLoad:r};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"d-flex justify-content-center row"},l.a.createElement("h1",null,"Barbell Loader")),l.a.createElement(W,Object.assign({},c,{placeholder:"Enter Weight",btnText:"Load"})),l.a.createElement(C,i))},R=function(e){return l.a.createElement(P.a,{className:"warmUpSetsForm",onSubmit:function(t){return e.onSubmit(t)}},l.a.createElement(L.a,null,l.a.createElement(j.a,{className:"weight-input__form",type:"number",name:"loadInput",placeholder:"weight","aria-label":"weight",min:"0",step:"0.5",onFocus:function(e){e.currentTarget.select()}}),l.a.createElement(L.a.Append,null,l.a.createElement(L.a.Text,{className:"weight-input__text"},e.unit," \xd7 ")),l.a.createElement(j.a,{className:"weight-input__form",type:"number",name:"numRepsInput",placeholder:"reps","aria-label":"weight",min:"0",step:"1",defaultValue:"5",onFocus:function(e){e.currentTarget.select()}}),l.a.createElement(L.a.Append,null,l.a.createElement(L.a.Text,{className:"weight-input__text"}))),l.a.createElement(T.a,{className:"mx-auto d-block",variant:"dark",type:"submit"},e.btnText))},U=(a(58),function(e){var t=e.unit,a=e.percentage,n=e.weight,r=e.numReps,c=e.isWorkingSet,u=e.btnText,o=c?" working-weight":"";return l.a.createElement("div",{className:"set-container d-flex justify-content-between"+o},l.a.createElement("div",{className:"percent-container"},l.a.createElement("span",{className:"percentage badge badge-warning"},Math.round(100*a),"%")),l.a.createElement("span",{className:"set"},"".concat(n," ").concat(t," \xd7 ").concat(r)),l.a.createElement(i.b,{to:"/home"},l.a.createElement(T.a,{className:"btn btn-dark",onClick:function(){return e.onClick(n)}},u)))}),F=(a(59),a(36),function(e){var t=e.workingWeight,a=e.workingNumReps,n=e.warmUpSets,r=e.unit,c=e.onSubmit,i={unit:r,onClick:e.onLoad},u={percentage:1,weight:t,numReps:a,isWorkingSet:!0,btnText:"Start"};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"text-center"},l.a.createElement("a",{href:"https://www.t-nation.com/training/most-intelligent-way-to-warm-up",target:"#blank"},l.a.createElement("h1",null,"Warm Up Sets Calculator"))),l.a.createElement(R,{style:{display:"inline"},unit:r,onSubmit:c,btnText:"Calculate"}),l.a.createElement("div",{className:"setList-container"},l.a.createElement("div",{className:"setList mx-auto"},n.map((function(e,t){var a={percentage:e.percentage,weight:e.weight,numReps:e.numReps};return l.a.createElement(U,Object.assign({key:t,btnText:"Load"},i,a))})),-1!==t&&l.a.createElement(U,Object.assign({},i,u)))),l.a.createElement("div",{className:"popup",id:"popup"}))}),A=function(){return l.a.createElement("div",{className:"center-vertically",style:{textAlign:"justify"}},"Barbell Loader was inspired by"," ",l.a.createElement("a",{target:"#blank",href:"https://www.happyliftingco.com/pages/rackmath"},"RackMath")," and built from scratch by Victor Espaillat with the help of React.js and Bootstrap.")},M=a(38),B=function(e,t){return e.reduce((function(e,a){return a.quantity>0?[].concat(Object(M.a)(e),[{value:a.value,color:a.color,quantity:Math.floor(a.quantity*t)}]):e}),[])},I=function(e){var t,a=[],n=Object(u.a)(e);try{for(n.s();!(t=n.n()).done;)for(var l=t.value,r=Math.floor(l.quantity);r>0;)a.push({value:l.value,color:l.color}),r--}catch(c){n.e(c)}finally{n.f()}return a},G=(a(60),a(61),a(62),a(63),function(e,t){var a=e%t;return a>=t/2?e-a+t:e-a}),D=function(e,t){var a=Math.round(t*(2-4*(e-.5)));return a>0?a:1},J=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={unit:"lbs",barbell:{lbs:45,kg:20},availPlates:{lbs:[{value:100,quantity:0},{value:65,quantity:0},{value:55,quantity:0},{value:50,quantity:0},{value:45,quantity:8},{value:35,quantity:0},{value:30,quantity:0},{value:25,quantity:8},{value:20,quantity:0},{value:15,quantity:0},{value:12.5,quantity:0},{value:10,quantity:8},{value:7.5,quantity:0},{value:5,quantity:8},{value:2.5,quantity:8},{value:1.25,quantity:0},{value:1,quantity:0},{value:.75,quantity:0},{value:.5,quantity:0},{value:.25,quantity:0}],kg:[{value:50,quantity:0},{value:45,quantity:0},{value:35,quantity:0},{value:30,quantity:0},{value:25,quantity:0},{value:20,quantity:8},{value:15,quantity:0},{value:12.5,quantity:0},{value:10,quantity:8},{value:7.5,quantity:0},{value:5,quantity:8},{value:3,quantity:0},{value:2.5,quantity:8},{value:2,quantity:0},{value:1.5,quantity:0},{value:1.25,quantity:8},{value:1,quantity:0},{value:.75,quantity:0},{value:.5,quantity:0},{value:.25,quantity:0}]},calcdPlates:[],calcdLoad:-1,percentages:[.5,.6,.7,.8,.9,1.1],workingWeight:-1,workingNumReps:-1,warmUpSets:[]},e.handleUnitClick=function(t){var a=e.state.unit;a="lbs"===a?"kg":"lbs",e.setState({unit:a,calcdPlates:[],calcdLoad:-1,workingWeight:-1,warmUpSets:[]}),t.currentTarget.classList.add("animate-wiggle"),t.currentTarget.classList.remove("animate-wiggle")},e.handlePlateGroupClick=function(t){var a=e.state.unit,n=Object(o.a)({},e.state.availPlates),l=n[a].findIndex((function(e){return e.value===t}));n[a][l].quantity=(n[a][l].quantity+2)%10,e.setState({availPlates:n})},e.handleLoadSubmit=function(t){t.preventDefault(),t.currentTarget.firstElementChild.firstElementChild.blur(),console.log(t.currentTarget.firstElementChild.firstElementChild),e.handleLoad(t.currentTarget.loadInput.value)},e.handleLoad=function(t){var a=e.state,n=a.unit,l=a.availPlates,r=e.state.barbell[n],c=B(l[n],.5),i=I(c),u=e.validateLoad(t,r,i),o=u.valid,s=u.errMsg;if(o){var m=e.calculatePlates(t,r,i),d=m.success,v=m.warn,p=m.calcdPlates,b=m.roundedOffAmount;if("justbar"===v?f.b.success("Just the bar!"):"roundoff"===v?f.b.warn("".concat(b," ").concat(n," has been rounded off.")):"room"===v&&f.b.error("Not enough room on the bar!"),d){var g=2*p.reduce((function(e,t){return e+t.value}),0)+r;e.setState({calcdPlates:p,calcdLoad:g})}else e.setState({calcdPlates:[],calcdLoad:-1})}else e.setState({calcdPlates:[],calcdLoad:-1}),f.b.error(s)},e.validateLoad=function(e,t,a){return e<t?{valid:!1,errMsg:"That's not even the bar!"}:e>t+2*a.reduce((function(e,t){return e+t.value}),0)?{valid:!1,errMsg:"Your inventory doesn't work with that weight"}:{valid:!0}},e.calculatePlates=function(e,t,a){var n=e-t,l=[];if(0===n)return{success:!0,warn:"justbar",calcdPlates:l};n/=2;var r,c=Object(u.a)(a);try{for(c.s();!(r=c.n()).done;){var i=r.value;if(n>=i.value){if(l.push(i),l.length>8)return{success:!1,warn:"room"};n-=i.value}}}catch(o){c.e(o)}finally{c.f()}return 0!==n?{success:!0,warn:"roundoff",roundedOffAmount:2*n,calcdPlates:l}:{success:!0,calcdPlates:l}},e.handleWorkSetSubmit=function(t){t.preventDefault(),t.currentTarget.firstElementChild.querySelectorAll("input").forEach((function(e){e.blur()}));var a=t.currentTarget.loadInput.value,n=t.currentTarget.numRepsInput.value;if(a&&n){var l=[];e.state.percentages.forEach((function(e){l.push({percentage:e,weight:G(a*e,5),numReps:D(e,n)})})),e.setState({workingWeight:a,workingNumReps:n,warmUpSets:l})}else e.setState({workingWeight:-1,workingNumReps:-1,warmUpSets:[]})},e.handlePlateGroupsClear=function(){var t=e.state.unit,a=Object(o.a)({},e.state.availPlates);a[t]=a[t].map((function(e){return{value:e.value,quantity:0,color:e.color}})),e.setState({availPlates:a})},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this,t={};["lbs","kg"].forEach((function(a){t[a]=e.state.availPlates[a].map((function(e,t){return Object(o.a)(Object(o.a)({},e),{},{color:(a=t,a%6===0?"black":a%5===0?"yellow":a%4===0?"red":a%3===0?"purple":a%2===0?"green":"cyan")});var a}))})),this.setState({availPlates:t})}},{key:"render",value:function(){var e=this.state,t=e.unit,a=e.barbell,n=e.calcdPlates,r=e.calcdLoad,c=e.availPlates,i=e.workingWeight,u=e.workingNumReps,o=e.warmUpSets,s={unit:t,barbellWeight:a[t],calcdPlates:n,calcdLoad:r,onSubmit:this.handleLoadSubmit},m={unit:t,barbell:a,availPlates:c,onPlateGroupClick:this.handlePlateGroupClick,onUnitClick:this.handleUnitClick,onClear:this.handlePlateGroupsClear},d={unit:t,workingWeight:i,workingNumReps:u,warmUpSets:o,onSubmit:this.handleWorkSetSubmit,onLoad:this.handleLoad};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container",style:{paddingBottom:"70px"}},l.a.createElement(f.a,{limit:1,autoClose:2e3,hideProgressBar:!0,pauseOnFocusLoss:!1,draggable:!1,pauseOnHover:!1}),l.a.createElement(p.d,null,l.a.createElement(p.b,{path:"/home",render:function(){return l.a.createElement(O,s)}}),l.a.createElement(p.b,{path:"/inventory",render:function(){return l.a.createElement(x,m)}}),l.a.createElement(p.b,{path:"/warmup",render:function(){return l.a.createElement(F,d)}}),l.a.createElement(p.b,{path:"/about",component:A}),l.a.createElement(p.b,{path:"/not-found",component:S}),l.a.createElement(p.a,{from:"/",exact:!0,to:"/home"}),l.a.createElement(p.a,{to:"/not-found"}))),l.a.createElement(N,null))}}]),a}(n.Component);a(64),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(i.a,null,l.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.3ed5d05a.chunk.js.map