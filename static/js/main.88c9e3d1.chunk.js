(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{44:function(t,n,e){t.exports=e(73)},71:function(t,n,e){},73:function(t,n,e){"use strict";e.r(n);var r,a=e(1),c=e.n(a),u=e(15),i=e.n(u),o=e(18),s=(e(36),e(19)),d=e(7),f=e(17),l=f.a.fromJS({data:[],fetching:!1}),p={users:(r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"USERS_SET_FETCHING_STATUS":return t.set("fetching",n.status);case"USERS_SET_DATA":return t.merge({fetching:!1,data:n.users});default:return t}},function(t,n){return void 0===(t=r(Object(f.b)(t),n)).toJS?t:t.toJS()})},b=Object(d.c)(Object(s.a)({},p)),m=e(41),g=Object(m.a)();Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var h=e(12),x=e.n(h),v=e(37),w=e.n(v),E={users:{getUsers:function(){return w.a.get("https://jsonplaceholder.typicode.com/users")}}},S=function(t){return new Promise(function(n){return setTimeout(n,t)})},j=e(14),O=function(t){return{type:"USERS_SET_DATA",users:t}},T=function(t){return{type:"USERS_SET_FETCHING_STATUS",status:t}},y=x.a.mark(U),_=x.a.mark(A),k=x.a.mark(R);function U(){var t;return x.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(j.c)(T(!0));case 2:return n.next=4,S(2e3);case 4:return n.next=6,Object(j.b)(E.users.getUsers);case 6:return t=n.sent,n.next=9,Object(j.c)(O(t.data));case 9:case"end":return n.stop()}},y)}function A(){return x.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(j.d)("USERS_FETCH",U);case 2:case"end":return t.stop()}},_)}function R(){return x.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(j.a)([A()]);case 2:case"end":return t.stop()}},k)}var I=e(75),C=e(6),F=e.n(C),J=e(40),H=e(11),q=e(8),G="#ff914d",N=function(t){return[0,4,8,16,32,64][t]};function B(){var t=Object(H.a)(["\n\tpadding: 25px 0;\n\topacity: .4;\n"]);return B=function(){return t},t}function D(){var t=Object(H.a)(["\n\twidth: 100%;\n\theight: 100%;\n\t\n\th1 {\n\t\tpadding: 0;\n\t\tmargin: 0 0 ","px 0;\n\t\tcolor: ",";\n\t}\n"]);return D=function(){return t},t}function L(){var t=Object(H.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tpadding: ","px;\n\twidth: 500px;\n\tmin-height: 400px;\n\tborder-radius: 4px;\n\tbackground: #fff;\n\tbox-shadow: 1px 1px 8px 0 rgba(0, 0, 0, 0.2);\n\t\n\t@media (max-width: ",") {\n\t\tbox-shadow: none;\n\t\tborder-radius: 0;\n\t}\n"]);return L=function(){return t},t}function W(){var t=Object(H.a)(["\n\tpadding: 100px 0;\n\tdisplay: flex;\n\tjustify-content: center;\n\t\n\t@media (max-width: ",") {\n\t\tpadding: 0;\n\t}\n"]);return W=function(){return t},t}function z(){var t=Object(H.a)(["\n\tbody {\n\t\tbackground: ",";\n\t\t\n\t\t@media (max-width: ",") {\n\t\t\tbackground: #fff;\n\t\t}\n\t}\n"]);return z=function(){return t},t}var M=Object(q.createGlobalStyle)(z(),G,"500px"),P=q.default.div(W(),"500px"),$=q.default.div(L(),N(3),"500px"),K=q.default.div(D(),N(3),G),Q=q.default.div(B());function V(){var t=Object(H.a)(["\n\tmargin-top: ","px;\n\tpadding: ","px;\n\tbackground: #f3f3f3;\n\tborder-radius: 4px;\n"]);return V=function(){return t},t}var X=q.default.div(V(),N(2),N(2)),Y=function(t){var n=t.name;return c.a.createElement(X,null,n||"\u041d\u0435 \u0438\u0437\u0432\u0435\u0441\u0442\u043d\u043e")},Z=function(t){var n=t.fetching,e=t.dispatch,r=t.data;return Object(a.useEffect)(function(){e({type:"USERS_FETCH"})},[]),c.a.createElement(P,null,c.a.createElement(M,null),c.a.createElement($,null,n?c.a.createElement(J.AtomSpinner,{size:150,color:"#ff914d"}):c.a.createElement(K,null,c.a.createElement("h1",null,"Contact Manager"),Object(I.a)(r)?c.a.createElement(Q,null,"List is empty :("):c.a.createElement(a.Fragment,null,r.map(function(t){return c.a.createElement(Y,Object.assign({key:t.id},t))})))))};Z.propsTypes={data:F.a.array.isRequired,fetching:F.a.bool.isRequired,dispatch:F.a.func.isRequired};var tt=Object(o.b)(function(t){return Object(s.a)({},t.users)})(Z),nt=(e(71),function(t){var n=Object(d.e)(b,t,Object(d.a)(g));return n.runSaga=g.run,n}(window.__INITIAL_STATE__||{}));nt.runSaga(R),i.a.render(c.a.createElement(o.a,{store:nt},c.a.createElement(tt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[44,2,1]]]);
//# sourceMappingURL=main.88c9e3d1.chunk.js.map