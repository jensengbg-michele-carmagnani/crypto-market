(this["webpackJsonpdignisia-test"]=this["webpackJsonpdignisia-test"]||[]).push([[0],{102:function(e,t,n){e.exports={CryptoDetails:"CryptoDetails_CryptoDetails__1LcY6",CloseCircle:"CryptoDetails_CloseCircle__10MCK",OpenDetails:"CryptoDetails_OpenDetails__c-Tmt",openDetails:"CryptoDetails_openDetails__3jS7j",CloseDetails:"CryptoDetails_CloseDetails__100_g",closeDetails:"CryptoDetails_closeDetails__2gCQ1"}},124:function(e,t,n){e.exports={CryptoList:"CryptoList_CryptoList__VhOAX",InputContainer:"CryptoList_InputContainer__1286A"}},220:function(e,t,n){e.exports={Crypto:"CryptoItem_Crypto__3KR4H",link:"CryptoItem_link__gnmN-"}},221:function(e,t,n){},223:function(e,t,n){e.exports={Header:"MainNavigation_Header__laFu7",logo:"MainNavigation_logo__1TgMx"}},224:function(e,t,n){},272:function(e,t,n){},407:function(e,t,n){},414:function(e,t,n){"use strict";n.r(t);var c=n(41),r=n.n(c),a=n(43),s=n.n(a),i=n(78),o=n(13),l=n(0),j=n.n(l),u=n(27),p=n(202),d=n.n(p),b=n(151),h=n.n(b),O=function(e){var t=[];return e.forEach((function(e){var n=function(e){var t=h.a.utc().subtract(7,"days").unix();return console.log("hours",t),e.map((function(e,n){return{time:h()(t+3600*(n+1)).format("dd"),x:t+3600*(n+1),y:e}}))}(e.sparkline_in_7d.price),c=Object(u.a)(Object(u.a)({},e),{},{sparkline_in_7d:{price:n}});t.push(c)})),t},x=function(){var e=Object(i.a)(s.a.mark((function e(){var t,n,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=7d");case 3:return t=e.sent,n=t.data,c=O(n),e.abrupt("return",c);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),f=n(1),_=j.a.createContext({marketCurrencies:[]}),m=function(e){var t=Object(l.useState)(null),n=Object(o.a)(t,2),c=n[0],r=n[1];Object(l.useEffect)((function(){var e=function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var a={marketCurrencies:c};return Object(f.jsx)(_.Provider,{value:a,children:e.children})},C=n(114),y=n(44),v=n(120),g=Object(v.b)({name:"markets",initialState:{markets:[],detailsCurrency:{},showDetails:!1},reducers:{replaceMarket:function(e,t){e.markets=t.payload},setDetails:function(e,t){var n=t.payload,c=e.markets.find((function(e){return e.id===n}));e.detailsCurrency=c,e.showDetails=!e.showDetails},changeStatusShowDetails:function(e){e.showDetails=!e.showDetails}}}),k=g.reducer,D=g.actions,w=Object(v.a)({reducer:{markets:k}}),F=(n(272),n(26)),N=n(102),S=n.n(N),I=n(456),L=n(446),M=n(447),K=n(228),B=n(218),E=n(219),H=n(104),A=n(451),R=function(e){var t=e.barChartInfo,n=null===t||void 0===t?void 0:t.price;return console.log(n),Object(f.jsx)(j.a.Fragment,{children:Object(f.jsx)(L.a,{width:"80%",height:400,children:Object(f.jsxs)(M.a,{data:n,children:[Object(f.jsx)(K.a,{dataKey:"y",stroke:"#F3BA2F"}),Object(f.jsx)(B.a,{dataKey:"x"}),Object(f.jsx)(E.a,{dataKey:"y"}),Object(f.jsx)(H.a,{}),Object(f.jsx)(A.a,{})]})})})},J=function(e){var t,n,c=Object(y.b)(),r=Object(y.c)((function(e){return e.markets.showDetails})),a=Object(y.c)((function(e){return e.markets.detailsCurrency})),s=Object(y.c)((function(e){return e.markets.detailsCurrency.sparkline_in_7d}));console.log("sparkLIne",s);var i=a.price_change_percentage_24h<0?Object(f.jsxs)("p",{style:{color:"#FF3B30"},children:[null===(t=a.price_change_percentage_24h)||void 0===t?void 0:t.toFixed(2),"%"]}):Object(f.jsxs)("p",{style:{color:"#24C759"},children:[null===(n=a.price_change_percentage_24h)||void 0===n?void 0:n.toFixed(2),"%"]}),o=r?"".concat(S.a.CryptoDetails," ").concat(S.a.OpenDetails):"".concat(S.a.CryptoDetails," ");return Object(f.jsxs)("section",{className:o,children:[Object(f.jsxs)("div",{children:[Object(f.jsxs)("article",{children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("img",{src:a.image,alt:""}),Object(f.jsx)("h4",{children:a.id}),Object(f.jsxs)("p",{children:["(",a.symbol,")"]})]}),Object(f.jsxs)("p",{children:[a.current_price,"\u20ac"]})]}),Object(f.jsxs)("article",{children:[Object(f.jsx)("p",{children:"7d"}),i]}),Object(f.jsx)("span",{children:Object(f.jsx)(I.a,{className:S.a.CloseCircle,onClick:function(){c(D.changeStatusShowDetails())}})})]}),Object(f.jsx)(R,{barChartInfo:s})]})},P=(n(407),n(220)),T=n.n(P),Q=function(e){var t=e.priceChange,n=t<0?Object(f.jsxs)("span",{style:{color:"#FF3B30"},children:[t,"%"]}):Object(f.jsxs)("span",{style:{color:"#24C759"},children:[t,"%"]});return Object(f.jsxs)("section",{onClick:function(){return e.onShowDetails(e.id)},className:T.a.Crypto,children:[Object(f.jsxs)("article",{children:[Object(f.jsx)("img",{src:e.image,alt:e.id}),Object(f.jsxs)("section",{children:[Object(f.jsxs)("span",{children:[e.name," "]}),Object(f.jsxs)("span",{children:["(",e.symbol.toUpperCase(),")"]})]})]}),Object(f.jsxs)("article",{children:[Object(f.jsxs)("span",{children:[e.price," \u20ac"]}),Object(f.jsxs)("span",{children:[" ",n]})]})]})},U=n(459),V=n(455),W=n(124),X=n.n(W),Y=n(221),q=n.n(Y),z=function(){return Object(f.jsx)("div",{className:q.a.spinner})},G=function(){var e=Object(l.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(l.useRef)(),a=Object(y.b)(),s=Object(y.c)((function(e){return e.markets.markets})),i=function(e){a(D.setDetails(e))},u=s.filter((function(e){return e.name.includes(n)}));return Object(f.jsx)(j.a.Fragment,{children:Object(f.jsxs)("section",{className:X.a.CryptoList,children:[Object(f.jsx)(U.a,{className:X.a.InputContainer,children:Object(f.jsx)(V.a,{InputProps:{className:X.a.Input},color:"secondary",label:"Search",placeholder:"Search you currency",fullWidth:!0,inputRef:r,onChange:function(){var e;c(null===(e=r.current)||void 0===e?void 0:e.value)},focused:!0})}),u?u.map((function(e){return Object(f.jsx)(Q,{onShowDetails:i,id:e.id,symbol:e.symbol,image:e.image,name:e.name,price:e.current_price,priceChange:e.price_change_percentage_24h.toFixed(2)},e.id)})):Object(f.jsx)(z,{})]})})},Z=function(e){return Object(f.jsx)(G,{})},$=n(223),ee=n.n($),te=function(){return Object(f.jsx)("header",{className:ee.a.Header,children:Object(f.jsx)("nav",{children:Object(f.jsx)("h1",{children:"Crypto currencies"})})})},ne=n(224),ce=n.n(ne),re=function(e){return Object(f.jsxs)(l.Fragment,{children:[Object(f.jsx)(te,{}),Object(f.jsx)("main",{className:ce.a.main,children:e.children})]})};var ae=function(){var e=Object(y.b)();return Object(l.useEffect)((function(){var t=function(){var t=Object(i.a)(s.a.mark((function t(){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x();case 2:n=t.sent,e(D.replaceMarket(n));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[e]),Object(f.jsx)(re,{children:Object(f.jsxs)(F.c,{children:[Object(f.jsxs)(F.a,{path:"/",exact:!0,children:[Object(f.jsx)(Z,{}),Object(f.jsx)(J,{})]}),Object(f.jsx)(F.a,{path:"/details/:id"})]})})};r.a.render(Object(f.jsx)(y.a,{store:w,children:Object(f.jsx)(m,{children:Object(f.jsx)(C.a,{children:Object(f.jsx)(ae,{})})})}),document.getElementById("root"))}},[[414,1,2]]]);
//# sourceMappingURL=main.d9d77458.chunk.js.map