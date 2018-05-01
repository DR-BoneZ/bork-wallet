// Compiled by ClojureScript 1.10.238 {}
goog.provide('lib.core');
goog.require('cljs.core');
lib.core.ba_shift_left = (function lib$core$ba_shift_left(ba,n){
var nmod = cljs.core.mod.call(null,n,(8));
return cljs.core.map.call(null,((function (nmod){
return (function (x){
return (x & (255));
});})(nmod))
,cljs.core.concat.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,(new cljs.core.List(null,(function (){var x = (cljs.core.first.call(null,ba) >> ((8) - nmod));
if((x > (0))){
return x;
} else {
return null;
}
})(),null,(1),null))),cljs.core.map_indexed.call(null,((function (nmod){
return (function (i,elem){
return ((elem << nmod) + (cljs.core.get.call(null,cljs.core.vec.call(null,ba),(i + (1))) >> ((8) - nmod)));
});})(nmod))
,ba),cljs.core.repeat.call(null,((n / (8)) | (0)),(0))));
});

//# sourceMappingURL=core.js.map
