(this["webpackJsonpgithub-issue"]=this["webpackJsonpgithub-issue"]||[]).push([[0],{66:function(e,t,c){},67:function(e,t,c){},69:function(e,t,c){},75:function(e,t,c){},93:function(e,t,c){},94:function(e,t,c){},95:function(e,t,c){},96:function(e,t,c){"use strict";c.r(t);var n=c(3),s=c(0),i=c.n(s),a=c(23),r=c.n(a),u=(c(66),c(12)),o=c(30),j=c(19),b=c(21),l=(c(67),c(27)),d=c(5),O=c(10),h=c(2),f=(c(69),Object(O.b)({key:"loadingState",default:!1})),p=Object(O.b)({key:"pageNumberState",default:1}),x=function(e){var t=Object(O.d)(p);return Object(n.jsx)(l.b,{to:"issues/".concat(e.number),onClick:function(){return c=e.pageNumber,void t(c);var c},children:Object(n.jsxs)("article",{className:"issue-card issue-card-".concat(e.index),children:[Object(n.jsx)("h4",{children:e.title}),Object(n.jsx)("p",{children:e.number})]})})},m=c(114),g=c(112),v=c(11),N=Object(v.a)(),k=(c(75),function(e){return Object(n.jsxs)("div",{className:"pagination-container",children:[Object(n.jsx)(g.a,{onClick:function(){N.push("/issues?page=1")},children:"\u6700\u521d"}),Object(n.jsx)(m.a,{count:Math.floor(e.allIssues.length/10),page:e.pageNumber,color:"primary",onChange:function(e,t){return function(e,t){N.push("/issues?page=".concat(t))}(0,t)}}),Object(n.jsx)(g.a,{onClick:function(){N.push("/issues?page=".concat(Math.floor(e.allIssues.length/10)))},children:"\u6700\u5f8c"})]})}),C=c(55),S=c.n(C),w=function(e,t,c){c(!0),S.a.create({baseURL:"https://api.github.com"}).get(e).then((function(e){t(e.data),c(!1)})).catch((function(e){console.error(e),c(!1)}))},y=(c(93),Object(d.g)((function(){var e=Object(s.useState)([]),t=Object(h.a)(e,2),c=t[0],i=t[1],a=Object(s.useState)([]),r=Object(h.a)(a,2),u=r[0],o=r[1],j=Object(s.useState)(0),b=Object(h.a)(j,2),l=b[0],d=b[1],p=Object(O.d)(f);Object(s.useEffect)((function(){w("/repos/facebook/react/issues",m,p)}),[]),Object(s.useEffect)((function(){var e=!1;N.listen((function(t){e||g(t.search,c)}));return function(){e=!0}}),[c]);var m=function(e){i(e),g(window.location.search,e)},g=function(e,t){var c=Number(e.replace("?page=",""));!function(e,t){o([]);for(var c=[],n=10*(e-1);n<10*e;n++)t[n]&&c.push(t[n]);o(c)}(c,t),d(c)};return Object(n.jsxs)("div",{className:"list-page",children:[Object(n.jsx)(k,{allIssues:c,pageNumber:l}),Object(n.jsx)("div",{className:"issue-cards",children:Object(n.jsx)("div",{className:"issue-card-container",children:u.map((function(e,t){return Object(n.jsx)("div",{className:"issue-card-wrapper",children:Object(n.jsx)(x,{number:e.number,title:e.title,index:t,pageNumber:l})},e.number)}))})})]})}))),F=(c(94),Object(d.g)((function(){var e=Object(s.useState)({}),t=Object(h.a)(e,2),c=t[0],i=t[1],a=Object(O.d)(f),r=Object(O.c)(p);Object(s.useEffect)((function(){w("/repos/facebook/react/issues/".concat(window.location.pathname.split("/").slice(-1)[0]),u,a)}),[]);var u=function(e){i(e)};return Object(n.jsxs)("div",{className:"issue-detail",children:[Object(n.jsx)(l.b,{to:"/issues?page=".concat(r),children:"issue\u4e00\u89a7\u306b\u623b\u308b"}),Object(n.jsxs)("article",{className:"issue-info",children:[Object(n.jsx)("p",{children:c.number}),Object(n.jsx)("h1",{children:c.title}),Object(n.jsx)("section",{children:c.body})]})]})}))),I=(c(95),function(){var e=Object(O.c)(f);return Object(n.jsx)(s.Fragment,{children:function(){if(e)return Object(n.jsx)("div",{className:"mask",children:Object(n.jsx)("i",{className:"loader",children:"Loading..."})})}()})}),E=function(e){Object(j.a)(c,e);var t=Object(b.a)(c);function c(){return Object(u.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(l.a,{basename:"/github-issue",children:Object(n.jsxs)(O.a,{children:[Object(n.jsxs)(d.d,{children:[Object(n.jsx)(d.b,{exact:!0,path:"/issues/:number",component:F}),Object(n.jsx)(d.b,{exact:!0,path:"/issues",component:y}),Object(n.jsx)(d.a,{to:"/issues?page=1"})]}),Object(n.jsx)(I,{})]})})})}}]),c}(s.Component),L=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,116)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),i(e),a(e)}))};r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(E,{})}),document.getElementById("root")),L()}},[[96,1,2]]]);
//# sourceMappingURL=main.f841efaa.chunk.js.map