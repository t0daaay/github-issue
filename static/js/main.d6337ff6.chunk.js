(this["webpackJsonpgithub-issue"]=this["webpackJsonpgithub-issue"]||[]).push([[0],{104:function(e,t,n){},106:function(e,t,n){},107:function(e,t,n){"use strict";n.r(t);var c=n(3),a=n(0),s=n.n(a),r=n(23),i=n.n(r),u=(n(69),n(13)),o=n(31),b=n(20),j=n(22),l=(n(70),n(28)),p=n(5),d=n(11),h="/github-issue/",f=n(8),O=n.n(f),g=n(26),m=n(2),x=(n(72),Object(d.b)({key:"loadingState",default:!1})),v=Object(d.b)({key:"pageNumberState",default:1}),N=function(e){var t=Object(d.d)(v);return Object(c.jsx)(l.b,{to:"issues/".concat(e.number),onClick:function(){return n=e.pageNumber,void t(n);var n},children:Object(c.jsxs)("article",{className:"issue-card issue-card-".concat(e.index),children:[Object(c.jsx)("h4",{children:e.title}),Object(c.jsx)("p",{children:e.number})]})})},k=n(125),w=n(123),S=n(12),y=Object(S.a)(),P=(n(77),function(e){return Object(c.jsxs)("div",{className:"pagination-container",children:[Object(c.jsx)(w.a,{onClick:function(){return y.push("".concat(h,"issues?page=1")),void e.getGithubApiSetPage(1)},children:"\u6700\u521d"}),Object(c.jsx)(k.a,{count:Number(e.allPagesNumber),page:e.pageNumber,color:"primary",onChange:function(t,n){return function(t,n){y.push("".concat(h,"issues?page=").concat(n)),e.getGithubApiSetPage(n)}(0,n)}}),Object(c.jsx)(w.a,{onClick:function(){return y.push("".concat(h,"issues?page=").concat(e.allPagesNumber)),void e.getGithubApiSetPage(e.allPagesNumber)},children:"\u6700\u5f8c"})]})}),C=n(58),A=n.n(C).a.create({baseURL:"https://api.github.com"}),F=function(e){return A.get(e)},L=(n(95),n(96)),E=Object(p.g)((function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)(0),i=Object(m.a)(r,2),u=i[0],o=i[1],b=Object(a.useState)(0),j=Object(m.a)(b,2),l=j[0],p=j[1],h=Object(d.d)(x);Object(a.useEffect)((function(){var e=window.location.search.replace("?page=","");h(!0),w("/repos/facebook/react/issues?page=".concat(e,"&per_page=10"))}),[]),Object(a.useEffect)((function(){var e=!1;y.listen((function(t){e||v(t.search,n)}));return function(){e=!0}}),[n]);var f=function(e,t){p(t),s(e),v(window.location.search,e)},v=function(e){var t=Number(e.replace("?page=",""));o(t)},k=function(){var e=Object(g.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h(!0),w("/repos/facebook/react/issues?page=".concat(t,"&per_page=10"));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(g.a)(O.a.mark((function e(t){var n,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F(t);case 3:n=e.sent,(c=L(n.headers.link)).last?f(n.data,c.last.page):f(n.data,window.location.search.replace("?page=","")),h(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0),alert("\u30c7\u30fc\u30bf\u304c\u53d6\u5f97\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f\u3002");case 13:return e.prev=13,h(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,9,13,16]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:"list-page",children:[Object(c.jsx)(P,{allPagesNumber:l,pageNumber:u,getGithubApiSetPage:k}),Object(c.jsx)("div",{className:"issue-cards",children:Object(c.jsx)("div",{className:"issue-card-container",children:n.map((function(e,t){return Object(c.jsx)("div",{className:"issue-card-wrapper",children:Object(c.jsx)(N,{number:e.number,title:e.title,index:t,pageNumber:u})},e.number)}))})})]})})),G=(n(104),n(105)),_=Object(p.g)((function(){var e=Object(a.useState)({}),t=Object(m.a)(e,2),n=t[0],s=t[1],r=Object(d.d)(x),i=Object(d.c)(v);Object(a.useEffect)((function(){function e(){return(e=Object(g.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F("/repos/facebook/react/issues/".concat(window.location.pathname.split("/").slice(-1)[0]));case 3:t=e.sent,o(t.data),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0),alert("\u30c7\u30fc\u30bf\u304c\u53d6\u5f97\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f\u3002");case 11:return e.prev=11,r(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,7,11,14]])})))).apply(this,arguments)}r(!0),function(){e.apply(this,arguments)}()}),[]);var u,o=function(e){s(e)};return Object(c.jsxs)("div",{className:"issue-detail",children:[Object(c.jsx)(l.b,{to:"/issues?page=".concat(i),children:"issue\u4e00\u89a7\u306b\u623b\u308b"}),Object(c.jsxs)("article",{className:"issue-info",children:[Object(c.jsx)("p",{children:n.number}),Object(c.jsx)("h1",{children:n.title}),Object(c.jsx)("section",{dangerouslySetInnerHTML:{__html:(u=n.body,u?G(u):"")}})]})]})})),I=(n(106),function(){var e=Object(d.c)(x);return Object(c.jsx)(a.Fragment,{children:function(){if(e)return Object(c.jsx)("div",{className:"mask",children:Object(c.jsx)("i",{className:"loader",children:"Loading..."})})}()})}),T=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(l.a,{basename:h,children:Object(c.jsxs)(d.a,{children:[Object(c.jsxs)(p.d,{children:[Object(c.jsx)(p.b,{exact:!0,path:"/issues/:number",component:_}),Object(c.jsx)(p.b,{exact:!0,path:"/issues",component:E}),Object(c.jsx)(p.a,{to:"/issues?page=1"})]}),Object(c.jsx)(I,{})]})})})}}]),n}(a.Component),B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,127)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(T,{})}),document.getElementById("root")),B()},69:function(e,t,n){},70:function(e,t,n){},72:function(e,t,n){},77:function(e,t,n){},95:function(e,t,n){}},[[107,1,2]]]);
//# sourceMappingURL=main.d6337ff6.chunk.js.map