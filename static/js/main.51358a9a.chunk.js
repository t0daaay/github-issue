(this["webpackJsonpgithub-issue"]=this["webpackJsonpgithub-issue"]||[]).push([[0],{66:function(e,t,c){},67:function(e,t,c){},69:function(e,t,c){},75:function(e,t,c){},93:function(e,t,c){},94:function(e,t,c){},95:function(e,t,c){},96:function(e,t,c){"use strict";c.r(t);var n=c(3),s=c(0),i=c.n(s),a=c(23),r=c.n(a),u=(c(66),c(11)),o=c(29),j=c(19),b=c(21),l=(c(67),c(38)),d=c(5),h=c(17),O=c(2),f=(c(69),function(e){return Object(n.jsx)(l.b,{to:"issues/".concat(e.number),children:Object(n.jsxs)("article",{className:"issue-card issue-card-"+e.index,children:[Object(n.jsx)("h4",{children:e.title}),Object(n.jsx)("p",{children:e.number})]})})}),p=c(114),x=c(112),m=c(10),g=Object(m.a)(),v=(c(75),function(e){return Object(n.jsxs)("div",{className:"pagination-container",children:[Object(n.jsx)(x.a,{onClick:function(){g.push("/issues?page=1")},children:"\u6700\u521d"}),Object(n.jsx)(p.a,{count:Math.floor(e.allIssues.length/10),page:e.pageNumber,color:"primary",onChange:function(e,t){return function(e,t){g.push("/issues?page=".concat(t))}(0,t)}}),Object(n.jsx)(x.a,{onClick:function(){g.push("/issues?page=".concat(Math.floor(e.allIssues.length/10)))},children:"\u6700\u5f8c"})]})}),N=Object(h.b)({key:"loadingState",default:!1}),k=c(55),w=c.n(k),C=function(e,t,c){c(!0),w.a.create({baseURL:"https://api.github.com"}).get(e).then((function(e){t(e.data),c(!1)})).catch((function(e){console.error(e),c(!1)}))},S=(c(93),Object(d.g)((function(){var e=Object(s.useState)([]),t=Object(O.a)(e,2),c=t[0],i=t[1],a=Object(s.useState)([]),r=Object(O.a)(a,2),u=r[0],o=r[1],j=Object(s.useState)(0),b=Object(O.a)(j,2),l=b[0],d=b[1],p=Object(h.d)(N);Object(s.useEffect)((function(){C("/repos/facebook/react/issues",x,p)}),[]),Object(s.useEffect)((function(){var e=!1;g.listen((function(t){e||m(t.search,c)}));return function(){e=!0}}),[c]);var x=function(e){i(e),m(window.location.search,e)},m=function(e,t){var c=Number(e.replace("?page=",""));!function(e,t){o([]);for(var c=[],n=10*(e-1);n<10*e;n++)t[n]&&c.push(t[n]);o(c)}(c,t),d(c)};return Object(n.jsxs)("div",{className:"list-page",children:[Object(n.jsx)(v,{allIssues:c,pageNumber:l}),Object(n.jsx)("div",{className:"issue-cards",children:Object(n.jsx)("div",{className:"issue-card-container",children:u.map((function(e,t){return Object(n.jsx)("div",{className:"issue-card-wrapper",children:Object(n.jsx)(f,{number:e.number,title:e.title,index:t})},e.number)}))})})]})}))),y=(c(94),Object(d.g)((function(){var e=Object(s.useState)({}),t=Object(O.a)(e,2),c=t[0],i=t[1],a=Object(h.d)(N);Object(s.useEffect)((function(){C("/repos/facebook/react/issues/".concat(window.location.pathname.split("/").slice(-1)[0]),r,a)}),[]);var r=function(e){i(e)};return Object(n.jsx)("div",{className:"issue-detail",children:Object(n.jsxs)("article",{className:"issue-info",children:[Object(n.jsx)("p",{children:c.number}),Object(n.jsx)("h1",{children:c.title}),Object(n.jsx)("section",{children:c.body})]})})}))),F=(c(95),function(){var e=Object(h.c)(N);return Object(n.jsx)(s.Fragment,{children:function(){if(e)return Object(n.jsx)("div",{className:"mask",children:Object(n.jsx)("i",{className:"loader",children:"Loading..."})})}()})}),I=function(e){Object(j.a)(c,e);var t=Object(b.a)(c);function c(){return Object(u.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(l.a,{basename:"/github-issue",children:Object(n.jsxs)(h.a,{children:[Object(n.jsxs)(d.d,{children:[Object(n.jsx)(d.b,{exact:!0,path:"/issues/:number",component:y}),Object(n.jsx)(d.b,{exact:!0,path:"/issues",component:S}),Object(n.jsx)(d.a,{to:"/issues?page=1"})]}),Object(n.jsx)(F,{})]})})})}}]),c}(s.Component),E=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,116)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),i(e),a(e)}))};r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(I,{})}),document.getElementById("root")),E()}},[[96,1,2]]]);
//# sourceMappingURL=main.51358a9a.chunk.js.map