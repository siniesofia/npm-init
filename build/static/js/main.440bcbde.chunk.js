(this["webpackJsonpkokoelmien-renderoiminen"]=this["webpackJsonpkokoelmien-renderoiminen"]||[]).push([[0],{41:function(t,n,e){},42:function(t,n,e){"use strict";e.r(n);var c=e(17),o=e.n(c),r=e(8),i=e(4),a=e(2),u=e(0),s=function(t){var n=t.note,e=t.toggleImportance,c=n.important?"make not important":"make important";return Object(u.jsxs)("li",{className:"note",children:[n.content,Object(u.jsx)("button",{onClick:e,children:c})]})},j=function(t){var n=t.message;return null===n?null:Object(u.jsx)("div",{className:"error",children:n})},l=e(3),f=e.n(l),b="https://tranquil-ocean-44090.herokuapp.com/api/notes",m=function(){return f.a.get(b).then((function(t){return t.data}))},d=function(t){return f.a.post(b,t).then((function(t){return t.data}))},p=function(t,n){return f.a.put("".concat(b,"/").concat(t),n).then((function(t){return t.data}))},O=function(){var t=Object(a.useState)([]),n=Object(i.a)(t,2),e=n[0],c=n[1],o=Object(a.useState)(""),l=Object(i.a)(o,2),f=l[0],b=l[1],O=Object(a.useState)(!1),h=Object(i.a)(O,2),v=h[0],x=h[1],g=Object(a.useState)(null),k=Object(i.a)(g,2),S=k[0],y=k[1];Object(a.useEffect)((function(){m().then((function(t){c(t)}))}),[]);var w=function(){return Object(u.jsxs)("div",{style:{color:"green",fontStyle:"italic",fontSize:16},children:[Object(u.jsx)("br",{}),Object(u.jsx)("em",{children:"Note app, Department of Computer Science, University of Helsinki 2021"})]})},N=v?e:e.filter((function(t){return t.important}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Notes"}),Object(u.jsx)(j,{message:S}),Object(u.jsx)("div",{children:Object(u.jsxs)("button",{onClick:function(){return x(!v)},children:["show ",v?"important":"all"]})}),Object(u.jsx)("ul",{children:N.map((function(t){return Object(u.jsx)(s,{note:t,toggleImportance:function(){return function(t){var n=e.find((function(n){return n.id===t})),o=Object(r.a)(Object(r.a)({},n),{},{important:!n.important});p(t,o).then((function(n){c(e.map((function(e){return e.id!==t?e:n})))})).catch((function(t){y("Note '".concat(n.content,"' was already removed from server")),setTimeout((function(){y(null)}),5e3)}))}(t.id)}},t.id)}))}),Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={content:f,date:(new Date).toISOString(),important:Math.random()>.5};d(n).then((function(t){c(e.concat(t)),b("")}))},children:[Object(u.jsx)("input",{value:f,onChange:function(t){console.log(t.target.value),b(t.target.value)}}),Object(u.jsx)("button",{type:"submit",children:"save"})]}),Object(u.jsx)(w,{})]})};e(41);o.a.render(Object(u.jsx)(O,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.440bcbde.chunk.js.map