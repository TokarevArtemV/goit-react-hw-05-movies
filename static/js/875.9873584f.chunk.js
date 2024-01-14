"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[875],{3606:function(e,n,t){t.d(n,{x:function(){return a}});var i,r=t(168),a=t(7924).ZP.p(i||(i=(0,r.Z)(["\n  font-weight: 700;\n  text-align: center;\n  margin-top: 20px;\n  margin-bottom: 10px;\n"])))},5875:function(e,n,t){t.r(n),t.d(n,{default:function(){return Q}});var i,r,a,c,u,o=t(9439),h=t(2791),s=t(7689),l=t(1087),p=t(7700),d=t(3606),f=t(9258),z=t(1236),I=t(168),y=t(7924),Z=y.zo.div(i||(i=(0,I.Z)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  display: flex;\n  align-items: center;\n  margin-bottom: 24px;\n  min-height: ",";\n  padding-right: ",";\n  padding-left: ",";\n  padding-top: ",";\n  padding-bottom: ",";\n  color: #fff;\n  background-color: aliceblue;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"])),(function(e){return e.theme.spacing(10)}),(function(e){return e.theme.spacing(6)}),(function(e){return e.theme.spacing(6)}),(function(e){return e.theme.spacing(3)}),(function(e){return e.theme.spacing(3)})),Y=y.zo.form(r||(r=(0,I.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  overflow: hidden;\n"]))),J=y.zo.button(a||(a=(0,I.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n\n  &:hover {\n    opacity: 1;\n  }\n"]))),x=(y.zo.svg(c||(c=(0,I.Z)(["\n  width: 24px;\n  height: 24px;\n  color: #0c154d;\n"]))),y.zo.input(u||(u=(0,I.Z)(["\n  display: inline-block;\n  margin-right: 8px;\n  width: 100%;\n  height: 24px;\n  font: inherit;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  &::placeholder {\n    font: inherit;\n  }\n"])))),g=t(184),N=function(e){var n,t=e.handleSubmit,i=(0,h.useRef)(),r=(0,l.lr)(),a=null!==(n=(0,o.Z)(r,1)[0].get("query"))&&void 0!==n?n:"";(0,h.useEffect)((function(){i.current.focus()}),[]);return(0,g.jsx)(Z,{children:(0,g.jsxs)(Y,{className:"SearchForm",onSubmit:function(e){e.preventDefault();var n=e.target.elements.query.value;t(n)},children:[(0,g.jsx)(x,{type:"text",autoComplete:"off",autoFocus:!0,ref:i,name:"query",defaultValue:a,placeholder:"Search movies"}),(0,g.jsx)(J,{type:"submit",className:"SearchForm-button",children:(0,g.jsx)(z.Yfv,{style:{width:"24px",height:"24px",color:" #0c154d"}})})]})})},M=(0,h.lazy)((function(){return t.e(363).then(t.bind(t,363))})),Q=function(){var e,n=(0,h.useState)(null),t=(0,o.Z)(n,2),i=t[0],r=t[1],a=(0,h.useState)(null),c=(0,o.Z)(a,2),u=c[0],z=c[1],I=(0,h.useState)(null),y=(0,o.Z)(I,2),Z=y[0],Y=y[1],J=(0,h.useState)(!1),x=(0,o.Z)(J,2),Q=x[0],j=x[1],m=(0,s.TH)(),b=(0,l.lr)(),W=(0,o.Z)(b,2),G=W[0],B=W[1],O=null!==(e=G.get("query"))&&void 0!==e?e:"";(0,h.useEffect)((function(){null===Z&&(j(!0),(0,p.SD)().then((function(e){return Y(e)})).catch((function(e){return z(e.message)})).finally(j(!1)))}),[Z]),(0,h.useEffect)((function(){if(j(!0),""===O)return r(null),void j(!1);(0,p.Wf)(O).then((function(e){return r(e.results)})).catch((function(e){return z(e.message)})).finally(j(!1))}),[O]);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(N,{handleSubmit:function(e){if(e){B(""!==e?{query:e}:{})}}}),0===(null===i||void 0===i?void 0:i.length)&&(0,g.jsx)("p",{children:"We don`t have any movies \ud83d\ude14"}),(null===i||void 0===i?void 0:i.length)>0&&(0,g.jsx)(M,{movies:i,configDetails:Z,location:m}),Q&&(0,g.jsx)(f.a,{}),u&&(0,g.jsxs)(d.x,{textAlign:"center",children:["Sorry. ",u," \ud83d\ude2d"]})]})}},7700:function(e,n,t){t.d(n,{Gy:function(){return z},SD:function(){return u},Wf:function(){return d},XT:function(){return h},YJ:function(){return l},fI:function(){return y}});var i=t(5861),r=t(4687),a=t.n(r),c=t(5294);function u(){return o.apply(this,arguments)}function o(){return(o=(0,i.Z)(a().mark((function e(){var n,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZGMzNzVhNzc2Njk3ZGUzNzBhMGQ0ODQ0NjYzZTYxOCIsInN1YiI6IjY1OWFlMDcxMGQxMWYyMDE0OTdhYjRiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cQBPpQLpWUXY49hBqlpbgaoZ06gqYH4dMzeaVJ2ByzU",c.Z.defaults.baseURL="https://api.themoviedb.org/3/configuration",c.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZGMzNzVhNzc2Njk3ZGUzNzBhMGQ0ODQ0NjYzZTYxOCIsInN1YiI6IjY1OWFlMDcxMGQxMWYyMDE0OTdhYjRiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cQBPpQLpWUXY49hBqlpbgaoZ06gqYH4dMzeaVJ2ByzU",e.next=5,c.Z.get();case 5:return n=e.sent,t=n.data,e.abrupt("return",t);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){return s.apply(this,arguments)}function s(){return(s=(0,i.Z)(a().mark((function e(){var n,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZGMzNzVhNzc2Njk3ZGUzNzBhMGQ0ODQ0NjYzZTYxOCIsInN1YiI6IjY1OWFlMDcxMGQxMWYyMDE0OTdhYjRiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cQBPpQLpWUXY49hBqlpbgaoZ06gqYH4dMzeaVJ2ByzU",c.Z.defaults.baseURL="https://api.themoviedb.org/3/trending/movie/day?",c.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZGMzNzVhNzc2Njk3ZGUzNzBhMGQ0ODQ0NjYzZTYxOCIsInN1YiI6IjY1OWFlMDcxMGQxMWYyMDE0OTdhYjRiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cQBPpQLpWUXY49hBqlpbgaoZ06gqYH4dMzeaVJ2ByzU",c.Z.defaults.params={language:"en-US"},e.next=6,c.Z.get();case 6:return n=e.sent,t=n.data,e.abrupt("return",t);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return p.apply(this,arguments)}function p(){return(p=(0,i.Z)(a().mark((function e(n){var t,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZGMzNzVhNzc2Njk3ZGUzNzBhMGQ0ODQ0NjYzZTYxOCIsInN1YiI6IjY1OWFlMDcxMGQxMWYyMDE0OTdhYjRiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cQBPpQLpWUXY49hBqlpbgaoZ06gqYH4dMzeaVJ2ByzU",c.Z.defaults.baseURL="https://api.themoviedb.org/3/movie/".concat(n,"?language=en-US"),c.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZGMzNzVhNzc2Njk3ZGUzNzBhMGQ0ODQ0NjYzZTYxOCIsInN1YiI6IjY1OWFlMDcxMGQxMWYyMDE0OTdhYjRiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cQBPpQLpWUXY49hBqlpbgaoZ06gqYH4dMzeaVJ2ByzU",c.Z.defaults.params={language:"en-US"},e.next=6,c.Z.get();case 6:return t=e.sent,i=t.data,e.abrupt("return",i);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return f.apply(this,arguments)}function f(){return(f=(0,i.Z)(a().mark((function e(n){var t,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZGMzNzVhNzc2Njk3ZGUzNzBhMGQ0ODQ0NjYzZTYxOCIsInN1YiI6IjY1OWFlMDcxMGQxMWYyMDE0OTdhYjRiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cQBPpQLpWUXY49hBqlpbgaoZ06gqYH4dMzeaVJ2ByzU",c.Z.defaults.baseURL="https://api.themoviedb.org/3/search/movie?query=".concat(n,"&include_adult=false&language=en-US&page=1"),c.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZGMzNzVhNzc2Njk3ZGUzNzBhMGQ0ODQ0NjYzZTYxOCIsInN1YiI6IjY1OWFlMDcxMGQxMWYyMDE0OTdhYjRiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cQBPpQLpWUXY49hBqlpbgaoZ06gqYH4dMzeaVJ2ByzU",c.Z.defaults.params={language:"en-US"},e.next=6,c.Z.get();case 6:return t=e.sent,i=t.data,e.abrupt("return",i);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(e){return I.apply(this,arguments)}function I(){return(I=(0,i.Z)(a().mark((function e(n){var t,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZGMzNzVhNzc2Njk3ZGUzNzBhMGQ0ODQ0NjYzZTYxOCIsInN1YiI6IjY1OWFlMDcxMGQxMWYyMDE0OTdhYjRiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cQBPpQLpWUXY49hBqlpbgaoZ06gqYH4dMzeaVJ2ByzU",c.Z.defaults.baseURL="https://api.themoviedb.org/3/movie/".concat(n,"/credits?language=en-US"),c.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZGMzNzVhNzc2Njk3ZGUzNzBhMGQ0ODQ0NjYzZTYxOCIsInN1YiI6IjY1OWFlMDcxMGQxMWYyMDE0OTdhYjRiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cQBPpQLpWUXY49hBqlpbgaoZ06gqYH4dMzeaVJ2ByzU",c.Z.defaults.params={language:"en-US"},e.next=6,c.Z.get();case 6:return t=e.sent,i=t.data,e.abrupt("return",i);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){return Z.apply(this,arguments)}function Z(){return(Z=(0,i.Z)(a().mark((function e(n){var t,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZGMzNzVhNzc2Njk3ZGUzNzBhMGQ0ODQ0NjYzZTYxOCIsInN1YiI6IjY1OWFlMDcxMGQxMWYyMDE0OTdhYjRiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cQBPpQLpWUXY49hBqlpbgaoZ06gqYH4dMzeaVJ2ByzU",c.Z.defaults.baseURL="https://api.themoviedb.org/3/movie/".concat(n,"/reviews?language=en-US"),c.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZGMzNzVhNzc2Njk3ZGUzNzBhMGQ0ODQ0NjYzZTYxOCIsInN1YiI6IjY1OWFlMDcxMGQxMWYyMDE0OTdhYjRiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cQBPpQLpWUXY49hBqlpbgaoZ06gqYH4dMzeaVJ2ByzU",c.Z.defaults.params={language:"en-US"},e.next=6,c.Z.get();case 6:return t=e.sent,i=t.data,e.abrupt("return",i);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=875.9873584f.chunk.js.map