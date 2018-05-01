// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__1427){
var map__1428 = p__1427;
var map__1428__$1 = ((((!((map__1428 == null)))?(((((map__1428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1428):map__1428);
var m = map__1428__$1;
var n = cljs.core.get.call(null,map__1428__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__1428__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__1430_1452 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1431_1453 = null;
var count__1432_1454 = (0);
var i__1433_1455 = (0);
while(true){
if((i__1433_1455 < count__1432_1454)){
var f_1456 = cljs.core._nth.call(null,chunk__1431_1453,i__1433_1455);
cljs.core.println.call(null,"  ",f_1456);


var G__1457 = seq__1430_1452;
var G__1458 = chunk__1431_1453;
var G__1459 = count__1432_1454;
var G__1460 = (i__1433_1455 + (1));
seq__1430_1452 = G__1457;
chunk__1431_1453 = G__1458;
count__1432_1454 = G__1459;
i__1433_1455 = G__1460;
continue;
} else {
var temp__5457__auto___1461 = cljs.core.seq.call(null,seq__1430_1452);
if(temp__5457__auto___1461){
var seq__1430_1462__$1 = temp__5457__auto___1461;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1430_1462__$1)){
var c__4319__auto___1463 = cljs.core.chunk_first.call(null,seq__1430_1462__$1);
var G__1464 = cljs.core.chunk_rest.call(null,seq__1430_1462__$1);
var G__1465 = c__4319__auto___1463;
var G__1466 = cljs.core.count.call(null,c__4319__auto___1463);
var G__1467 = (0);
seq__1430_1452 = G__1464;
chunk__1431_1453 = G__1465;
count__1432_1454 = G__1466;
i__1433_1455 = G__1467;
continue;
} else {
var f_1468 = cljs.core.first.call(null,seq__1430_1462__$1);
cljs.core.println.call(null,"  ",f_1468);


var G__1469 = cljs.core.next.call(null,seq__1430_1462__$1);
var G__1470 = null;
var G__1471 = (0);
var G__1472 = (0);
seq__1430_1452 = G__1469;
chunk__1431_1453 = G__1470;
count__1432_1454 = G__1471;
i__1433_1455 = G__1472;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_1473 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_1473);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_1473)))?cljs.core.second.call(null,arglists_1473):arglists_1473));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__1434_1474 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1435_1475 = null;
var count__1436_1476 = (0);
var i__1437_1477 = (0);
while(true){
if((i__1437_1477 < count__1436_1476)){
var vec__1438_1478 = cljs.core._nth.call(null,chunk__1435_1475,i__1437_1477);
var name_1479 = cljs.core.nth.call(null,vec__1438_1478,(0),null);
var map__1441_1480 = cljs.core.nth.call(null,vec__1438_1478,(1),null);
var map__1441_1481__$1 = ((((!((map__1441_1480 == null)))?(((((map__1441_1480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1441_1480.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1441_1480):map__1441_1480);
var doc_1482 = cljs.core.get.call(null,map__1441_1481__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1483 = cljs.core.get.call(null,map__1441_1481__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1479);

cljs.core.println.call(null," ",arglists_1483);

if(cljs.core.truth_(doc_1482)){
cljs.core.println.call(null," ",doc_1482);
} else {
}


var G__1484 = seq__1434_1474;
var G__1485 = chunk__1435_1475;
var G__1486 = count__1436_1476;
var G__1487 = (i__1437_1477 + (1));
seq__1434_1474 = G__1484;
chunk__1435_1475 = G__1485;
count__1436_1476 = G__1486;
i__1437_1477 = G__1487;
continue;
} else {
var temp__5457__auto___1488 = cljs.core.seq.call(null,seq__1434_1474);
if(temp__5457__auto___1488){
var seq__1434_1489__$1 = temp__5457__auto___1488;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1434_1489__$1)){
var c__4319__auto___1490 = cljs.core.chunk_first.call(null,seq__1434_1489__$1);
var G__1491 = cljs.core.chunk_rest.call(null,seq__1434_1489__$1);
var G__1492 = c__4319__auto___1490;
var G__1493 = cljs.core.count.call(null,c__4319__auto___1490);
var G__1494 = (0);
seq__1434_1474 = G__1491;
chunk__1435_1475 = G__1492;
count__1436_1476 = G__1493;
i__1437_1477 = G__1494;
continue;
} else {
var vec__1443_1495 = cljs.core.first.call(null,seq__1434_1489__$1);
var name_1496 = cljs.core.nth.call(null,vec__1443_1495,(0),null);
var map__1446_1497 = cljs.core.nth.call(null,vec__1443_1495,(1),null);
var map__1446_1498__$1 = ((((!((map__1446_1497 == null)))?(((((map__1446_1497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1446_1497.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1446_1497):map__1446_1497);
var doc_1499 = cljs.core.get.call(null,map__1446_1498__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1500 = cljs.core.get.call(null,map__1446_1498__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1496);

cljs.core.println.call(null," ",arglists_1500);

if(cljs.core.truth_(doc_1499)){
cljs.core.println.call(null," ",doc_1499);
} else {
}


var G__1501 = cljs.core.next.call(null,seq__1434_1489__$1);
var G__1502 = null;
var G__1503 = (0);
var G__1504 = (0);
seq__1434_1474 = G__1501;
chunk__1435_1475 = G__1502;
count__1436_1476 = G__1503;
i__1437_1477 = G__1504;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__1448 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__1449 = null;
var count__1450 = (0);
var i__1451 = (0);
while(true){
if((i__1451 < count__1450)){
var role = cljs.core._nth.call(null,chunk__1449,i__1451);
var temp__5457__auto___1505__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___1505__$1)){
var spec_1506 = temp__5457__auto___1505__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_1506));
} else {
}


var G__1507 = seq__1448;
var G__1508 = chunk__1449;
var G__1509 = count__1450;
var G__1510 = (i__1451 + (1));
seq__1448 = G__1507;
chunk__1449 = G__1508;
count__1450 = G__1509;
i__1451 = G__1510;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__1448);
if(temp__5457__auto____$1){
var seq__1448__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1448__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__1448__$1);
var G__1511 = cljs.core.chunk_rest.call(null,seq__1448__$1);
var G__1512 = c__4319__auto__;
var G__1513 = cljs.core.count.call(null,c__4319__auto__);
var G__1514 = (0);
seq__1448 = G__1511;
chunk__1449 = G__1512;
count__1450 = G__1513;
i__1451 = G__1514;
continue;
} else {
var role = cljs.core.first.call(null,seq__1448__$1);
var temp__5457__auto___1515__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___1515__$2)){
var spec_1516 = temp__5457__auto___1515__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_1516));
} else {
}


var G__1517 = cljs.core.next.call(null,seq__1448__$1);
var G__1518 = null;
var G__1519 = (0);
var G__1520 = (0);
seq__1448 = G__1517;
chunk__1449 = G__1518;
count__1450 = G__1519;
i__1451 = G__1520;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
