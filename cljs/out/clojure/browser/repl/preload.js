// Compiled by ClojureScript 1.10.238 {}
goog.provide('clojure.browser.repl.preload');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
if(typeof clojure.browser.repl.preload.conn !== 'undefined'){
} else {
clojure.browser.repl.preload.conn = clojure.browser.repl.connect.call(null,["http://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.browser.repl.HOST),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.browser.repl.PORT),"/repl"].join(''));
}

//# sourceMappingURL=preload.js.map
