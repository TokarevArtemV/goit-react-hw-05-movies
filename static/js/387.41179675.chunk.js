"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{4387:function(e,n,t){t.r(n),t.d(n,{default:function(){return l}});var a,r,i=t(9439),c=t(7700),u=t(2791),h=t(7689),s=t(168),o=t(7924),p=o.zo.ul(a||(a=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: ",";\n  padding: 20px;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"])),(function(e){return e.theme.spacing(3)})),I=o.zo.li(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: ",";\n  padding: 8px;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"])),(function(e){return e.theme.spacing(2)})),z=t(184),l=function(){var e=(0,h.UO)(null).movieId,n=(0,u.useState)(null),t=(0,i.Z)(n,2),a=t[0],r=t[1],s=(0,u.useState)(null),o=(0,i.Z)(s,2),l=o[0],d=o[1];return(0,u.useEffect)((function(){(0,c.fI)(e).then((function(e){return r(e.results)})).catch((function(e){return d(e.message)}))}),[e]),(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)(p,{children:[0===(null===a||void 0===a?void 0:a.length)&&(0,z.jsx)("p",{children:"We don`t have any reviews for this movie \ud83d\ude14"}),null===a||void 0===a?void 0:a.map((function(e,n){return(0,z.jsxs)(I,{children:[(0,z.jsx)("h3",{children:"Author: ".concat(e.author)}),(0,z.jsx)("p",{children:e.content})]},n)}))]}),l&&(0,z.jsxs)("p",{children:["Sorry. ",l," \ud83d\ude2d"]})]})}},7700:function(e,n,t){t.d(n,{Gy:function(){return d},SD:function(){return u},Wf:function(){return z},XT:function(){return s},YJ:function(){return p},fI:function(){return Y}});var a=t(5861),r=t(4687),i=t.n(r),c=t(5294);function u(){return h.apply(this,arguments)}function h(){return(h=(0,a.Z)(i().mark((function e(){var n,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZGMzNzVhNzc2Njk3ZGUzNzBhMGQ0ODQ0NjYzZTYxOCIsInN1YiI6IjY1OWFlMDcxMGQxMWYyMDE0OTdhYjRiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cQBPpQLpWUXY49hBqlpbgaoZ06gqYH4dMzeaVJ2ByzU",c.Z.defaults.baseURL="https://api.themoviedb.org/3/configuration",c.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZGMzNzVhNzc2Njk3ZGUzNzBhMGQ0ODQ0NjYzZTYxOCIsInN1YiI6IjY1OWFlMDcxMGQxMWYyMDE0OTdhYjRiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cQBPpQLpWUXY49hBqlpbgaoZ06gqYH4dMzeaVJ2ByzU",e.next=5,c.Z.get();case 5:return n=e.sent,t=n.data,e.abrupt("return",t);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function s(){return o.apply(this,arguments)}function o(){return(o=(0,a.Z)(i().mark((function e(){var n,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZGMzNzVhNzc2Njk3ZGUzNzBhMGQ0ODQ0NjYzZTYxOCIsInN1YiI6IjY1OWFlMDcxMGQxMWYyMDE0OTdhYjRiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cQBPpQLpWUXY49hBqlpbgaoZ06gqYH4dMzeaVJ2ByzU",c.Z.defaults.baseURL="https://api.themoviedb.org/3/trending/movie/day?",c.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZGMzNzVhNzc2Njk3ZGUzNzBhMGQ0ODQ0NjYzZTYxOCIsInN1YiI6IjY1OWFlMDcxMGQxMWYyMDE0OTdhYjRiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cQBPpQLpWUXY49hBqlpbgaoZ06gqYH4dMzeaVJ2ByzU",c.Z.defaults.params={language:"en-US"},e.next=6,c.Z.get();case 6:return n=e.sent,t=n.data,e.abrupt("return",t);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return I.apply(this,arguments)}function I(){return(I=(0,a.Z)(i().mark((function e(n){var t,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZGMzNzVhNzc2Njk3ZGUzNzBhMGQ0ODQ0NjYzZTYxOCIsInN1YiI6IjY1OWFlMDcxMGQxMWYyMDE0OTdhYjRiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cQBPpQLpWUXY49hBqlpbgaoZ06gqYH4dMzeaVJ2ByzU",c.Z.defaults.baseURL="https://api.themoviedb.org/3/movie/".concat(n,"?language=en-US"),c.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZGMzNzVhNzc2Njk3ZGUzNzBhMGQ0ODQ0NjYzZTYxOCIsInN1YiI6IjY1OWFlMDcxMGQxMWYyMDE0OTdhYjRiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cQBPpQLpWUXY49hBqlpbgaoZ06gqYH4dMzeaVJ2ByzU",c.Z.defaults.params={language:"en-US"},e.next=6,c.Z.get();case 6:return t=e.sent,a=t.data,e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(e){return l.apply(this,arguments)}function l(){return(l=(0,a.Z)(i().mark((function e(n){var t,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZGMzNzVhNzc2Njk3ZGUzNzBhMGQ0ODQ0NjYzZTYxOCIsInN1YiI6IjY1OWFlMDcxMGQxMWYyMDE0OTdhYjRiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cQBPpQLpWUXY49hBqlpbgaoZ06gqYH4dMzeaVJ2ByzU",c.Z.defaults.baseURL="https://api.themoviedb.org/3/search/movie?query=".concat(n,"&include_adult=false&language=en-US&page=1"),c.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZGMzNzVhNzc2Njk3ZGUzNzBhMGQ0ODQ0NjYzZTYxOCIsInN1YiI6IjY1OWFlMDcxMGQxMWYyMDE0OTdhYjRiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cQBPpQLpWUXY49hBqlpbgaoZ06gqYH4dMzeaVJ2ByzU",c.Z.defaults.params={language:"en-US"},e.next=6,c.Z.get();case 6:return t=e.sent,a=t.data,e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return J.apply(this,arguments)}function J(){return(J=(0,a.Z)(i().mark((function e(n){var t,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZGMzNzVhNzc2Njk3ZGUzNzBhMGQ0ODQ0NjYzZTYxOCIsInN1YiI6IjY1OWFlMDcxMGQxMWYyMDE0OTdhYjRiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cQBPpQLpWUXY49hBqlpbgaoZ06gqYH4dMzeaVJ2ByzU",c.Z.defaults.baseURL="https://api.themoviedb.org/3/movie/".concat(n,"/credits?language=en-US"),c.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZGMzNzVhNzc2Njk3ZGUzNzBhMGQ0ODQ0NjYzZTYxOCIsInN1YiI6IjY1OWFlMDcxMGQxMWYyMDE0OTdhYjRiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cQBPpQLpWUXY49hBqlpbgaoZ06gqYH4dMzeaVJ2ByzU",c.Z.defaults.params={language:"en-US"},e.next=6,c.Z.get();case 6:return t=e.sent,a=t.data,e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Y(e){return Z.apply(this,arguments)}function Z(){return(Z=(0,a.Z)(i().mark((function e(n){var t,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZGMzNzVhNzc2Njk3ZGUzNzBhMGQ0ODQ0NjYzZTYxOCIsInN1YiI6IjY1OWFlMDcxMGQxMWYyMDE0OTdhYjRiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cQBPpQLpWUXY49hBqlpbgaoZ06gqYH4dMzeaVJ2ByzU",c.Z.defaults.baseURL="https://api.themoviedb.org/3/movie/".concat(n,"/reviews?language=en-US"),c.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZGMzNzVhNzc2Njk3ZGUzNzBhMGQ0ODQ0NjYzZTYxOCIsInN1YiI6IjY1OWFlMDcxMGQxMWYyMDE0OTdhYjRiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cQBPpQLpWUXY49hBqlpbgaoZ06gqYH4dMzeaVJ2ByzU",c.Z.defaults.params={language:"en-US"},e.next=6,c.Z.get();case 6:return t=e.sent,a=t.data,e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=387.41179675.chunk.js.map