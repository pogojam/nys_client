(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{0:function(e,t,n){n("GcxT"),e.exports=n("nOHt")},"1TCz":function(e,t,n){"use strict";n.r(t),n.d(t,"client",(function(){return ze})),n.d(t,"default",(function(){return Be}));var r=n("q1tI"),i=n.n(r),o=(n("8oxP"),n("dMq0")),a=n("lqOT"),u=n("mrSG"),s=n("RRgQ");function c(e){return{kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GeneratedClientQuery"},selectionSet:l(e)}]}}function l(e){if("number"===typeof e||"boolean"===typeof e||"string"===typeof e||"undefined"===typeof e||null===e)return null;if(Array.isArray(e))return l(e[0]);var t=[];return Object.keys(e).forEach((function(n){var r={kind:"Field",name:{kind:"Name",value:n},selectionSet:l(e[n])||void 0};t.push(r)})),{kind:"SelectionSet",selections:t}}var f,d={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:null,variableDefinitions:null,directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:null,name:{kind:"Name",value:"__typename"},arguments:[],directives:[],selectionSet:null}]}}]},p=function(){function e(){}return e.prototype.transformDocument=function(e){return e},e.prototype.transformForLink=function(e){return e},e.prototype.readQuery=function(e,t){return void 0===t&&(t=!1),this.read({query:e.query,variables:e.variables,optimistic:t})},e.prototype.readFragment=function(e,t){return void 0===t&&(t=!1),this.read({query:Object(s.k)(e.fragment,e.fragmentName),variables:e.variables,rootId:e.id,optimistic:t})},e.prototype.writeQuery=function(e){this.write({dataId:"ROOT_QUERY",result:e.data,query:e.query,variables:e.variables})},e.prototype.writeFragment=function(e){this.write({dataId:e.id,result:e.data,variables:e.variables,query:Object(s.k)(e.fragment,e.fragmentName)})},e.prototype.writeData=function(e){var t,n,r=e.id,i=e.data;if("undefined"!==typeof r){var o=null;try{o=this.read({rootId:r,optimistic:!1,query:d})}catch(s){}var a=o&&o.__typename||"__ClientData",u=Object.assign({__typename:a},i);this.writeFragment({id:r,fragment:(t=u,n=a,{kind:"Document",definitions:[{kind:"FragmentDefinition",typeCondition:{kind:"NamedType",name:{kind:"Name",value:n||"__FakeType"}},name:{kind:"Name",value:"GeneratedClientQuery"},selectionSet:l(t)}]}),data:u})}else this.writeQuery({query:c(i),data:i})},e}();f||(f={});var h=n("qx2n"),y=null,v={},m=1,b=Array,g=b["@wry/context:Slot"]||function(){var e=function(){function e(){this.id=["slot",m++,Date.now(),Math.random().toString(36).slice(2)].join(":")}return e.prototype.hasValue=function(){for(var e=y;e;e=e.parent)if(this.id in e.slots){var t=e.slots[this.id];if(t===v)break;return e!==y&&(y.slots[this.id]=t),!0}return y&&(y.slots[this.id]=v),!1},e.prototype.getValue=function(){if(this.hasValue())return y.slots[this.id]},e.prototype.withValue=function(e,t,n,r){var i,o=((i={__proto__:null})[this.id]=e,i),a=y;y={parent:a,slots:o};try{return t.apply(r,n)}finally{y=a}},e.bind=function(e){var t=y;return function(){var n=y;try{return y=t,e.apply(this,arguments)}finally{y=n}}},e.noContext=function(e,t,n){if(!y)return e.apply(n,t);var r=y;try{return y=null,e.apply(n,t)}finally{y=r}},e}();try{Object.defineProperty(b,"@wry/context:Slot",{value:b["@wry/context:Slot"]=e,enumerable:!1,writable:!1,configurable:!1})}finally{return e}}();g.bind,g.noContext;function O(){}var w=function(){function e(e,t){void 0===e&&(e=1/0),void 0===t&&(t=O),this.max=e,this.dispose=t,this.map=new Map,this.newest=null,this.oldest=null}return e.prototype.has=function(e){return this.map.has(e)},e.prototype.get=function(e){var t=this.getEntry(e);return t&&t.value},e.prototype.getEntry=function(e){var t=this.map.get(e);if(t&&t!==this.newest){var n=t.older,r=t.newer;r&&(r.older=n),n&&(n.newer=r),t.older=this.newest,t.older.newer=t,t.newer=null,this.newest=t,t===this.oldest&&(this.oldest=r)}return t},e.prototype.set=function(e,t){var n=this.getEntry(e);return n?n.value=t:(n={key:e,value:t,newer:null,older:this.newest},this.newest&&(this.newest.newer=n),this.newest=n,this.oldest=this.oldest||n,this.map.set(e,n),n.value)},e.prototype.clean=function(){for(;this.oldest&&this.map.size>this.max;)this.delete(this.oldest.key)},e.prototype.delete=function(e){var t=this.map.get(e);return!!t&&(t===this.newest&&(this.newest=t.older),t===this.oldest&&(this.oldest=t.newer),t.newer&&(t.newer.older=t.older),t.older&&(t.older.newer=t.newer),this.map.delete(e),this.dispose(t.value,e),!0)},e}(),j=new g,S=[],x=[],E=100;function R(e,t){if(!e)throw new Error(t||"assertion failure")}function T(e){switch(e.length){case 0:throw new Error("unknown value");case 1:return e[0];case 2:throw e[1]}}var V=function(){function e(t,n){this.fn=t,this.args=n,this.parents=new Set,this.childValues=new Map,this.dirtyChildren=null,this.dirty=!0,this.recomputing=!1,this.value=[],++e.count}return e.prototype.recompute=function(){if(R(!this.recomputing,"already recomputing"),function(e){var t=j.getValue();if(t)return e.parents.add(t),t.childValues.has(e)||t.childValues.set(e,[]),q(e)?I(t,e):F(t,e),t}(this)||!N(this))return q(this)?function(e){var t=A(e);j.withValue(e,k,[e]),function(e){if("function"===typeof e.subscribe)try{Q(e),e.unsubscribe=e.subscribe.apply(null,e.args)}catch(t){return e.setDirty(),!1}return!0}(e)&&function(e){if(e.dirty=!1,q(e))return;D(e)}(e);return t.forEach(N),T(e.value)}(this):T(this.value)},e.prototype.setDirty=function(){this.dirty||(this.dirty=!0,this.value.length=0,C(this),Q(this))},e.prototype.dispose=function(){var e=this;A(this).forEach(N),Q(this),this.parents.forEach((function(t){t.setDirty(),M(t,e)}))},e.count=0,e}();function k(e){e.recomputing=!0,e.value.length=0;try{e.value[0]=e.fn.apply(null,e.args)}catch(t){e.value[1]=t}e.recomputing=!1}function q(e){return e.dirty||!(!e.dirtyChildren||!e.dirtyChildren.size)}function C(e){e.parents.forEach((function(t){return I(t,e)}))}function D(e){e.parents.forEach((function(t){return F(t,e)}))}function I(e,t){if(R(e.childValues.has(t)),R(q(t)),e.dirtyChildren){if(e.dirtyChildren.has(t))return}else e.dirtyChildren=x.pop()||new Set;e.dirtyChildren.add(t),C(e)}function F(e,t){R(e.childValues.has(t)),R(!q(t));var n=e.childValues.get(t);0===n.length?e.childValues.set(t,t.value.slice(0)):function(e,t){var n=e.length;return n>0&&n===t.length&&e[n-1]===t[n-1]}(n,t.value)||e.setDirty(),_(e,t),q(e)||D(e)}function _(e,t){var n=e.dirtyChildren;n&&(n.delete(t),0===n.size&&(x.length<E&&x.push(n),e.dirtyChildren=null))}function N(e){return 0===e.parents.size&&"function"===typeof e.reportOrphan&&!0===e.reportOrphan()}function A(e){var t=S;return e.childValues.size>0&&(t=[],e.childValues.forEach((function(n,r){M(e,r),t.push(r)}))),R(null===e.dirtyChildren),t}function M(e,t){t.parents.delete(e),e.childValues.delete(t),_(e,t)}function Q(e){var t=e.unsubscribe;"function"===typeof t&&(e.unsubscribe=void 0,t())}var P=function(){function e(e){this.weakness=e}return e.prototype.lookup=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this.lookupArray(e)},e.prototype.lookupArray=function(e){var t=this;return e.forEach((function(e){return t=t.getChildTrie(e)})),t.data||(t.data=Object.create(null))},e.prototype.getChildTrie=function(t){var n=this.weakness&&function(e){switch(typeof e){case"object":if(null===e)break;case"function":return!0}return!1}(t)?this.weak||(this.weak=new WeakMap):this.strong||(this.strong=new Map),r=n.get(t);return r||n.set(t,r=new e(this.weakness)),r},e}();var K=new P("function"===typeof WeakMap);function z(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return K.lookupArray(e)}var B=new Set;function W(e,t){void 0===t&&(t=Object.create(null));var n=new w(t.max||Math.pow(2,16),(function(e){return e.dispose()})),r=!!t.disposable,i=t.makeCacheKey||z;function o(){if(!r||j.hasValue()){var o=i.apply(null,arguments);if(void 0===o)return e.apply(null,arguments);var a=Array.prototype.slice.call(arguments),u=n.get(o);u?u.args=a:(u=new V(e,a),n.set(o,u),u.subscribe=t.subscribe,r&&(u.reportOrphan=function(){return n.delete(o)}));var s=u.recompute();return n.set(o,u),B.add(n),j.hasValue()||(B.forEach((function(e){return e.clean()})),B.clear()),r?void 0:s}}return o.dirty=function(){var e=i.apply(null,arguments),t=void 0!==e&&n.get(e);t&&t.setDirty()},o}var J=n("qVdT"),U=!1;function G(){var e=!U;return Object(s.y)()||(U=!0),e}var H=function(){function e(){}return e.prototype.ensureReady=function(){return Promise.resolve()},e.prototype.canBypassInit=function(){return!0},e.prototype.match=function(e,t,n){var r=n.store.get(e.id),i="ROOT_QUERY"===e.id;if(!r)return i;var o=r.__typename,a=void 0===o?i&&"Query":o;return a&&a===t||(G(),"heuristic")},e}(),L=(function(){function e(e){e&&e.introspectionQueryResultData?(this.possibleTypesMap=this.parseIntrospectionResult(e.introspectionQueryResultData),this.isReady=!0):this.isReady=!1,this.match=this.match.bind(this)}e.prototype.match=function(e,t,n){Object(J.b)(this.isReady,2);var r=n.store.get(e.id),i="ROOT_QUERY"===e.id;if(!r)return i;var o=r.__typename,a=void 0===o?i&&"Query":o;if(Object(J.b)(a,3),a===t)return!0;var u=this.possibleTypesMap[t];return!!(a&&u&&u.indexOf(a)>-1)},e.prototype.parseIntrospectionResult=function(e){var t={};return e.__schema.types.forEach((function(e){"UNION"!==e.kind&&"INTERFACE"!==e.kind||(t[e.name]=e.possibleTypes.map((function(e){return e.name})))})),t}}(),Object.prototype.hasOwnProperty),Y=function(){function e(e){var t=this;void 0===e&&(e=Object.create(null)),this.data=e,this.depend=W((function(e){return t.data[e]}),{disposable:!0,makeCacheKey:function(e){return e}})}return e.prototype.toObject=function(){return this.data},e.prototype.get=function(e){return this.depend(e),this.data[e]},e.prototype.set=function(e,t){t!==this.data[e]&&(this.data[e]=t,this.depend.dirty(e))},e.prototype.delete=function(e){L.call(this.data,e)&&(delete this.data[e],this.depend.dirty(e))},e.prototype.clear=function(){this.replace(null)},e.prototype.replace=function(e){var t=this;e?(Object.keys(e).forEach((function(n){t.set(n,e[n])})),Object.keys(this.data).forEach((function(n){L.call(e,n)||t.delete(n)}))):Object.keys(this.data).forEach((function(e){t.delete(e)}))},e}();function $(e){return new Y(e)}var X=function(){function e(e){var t=this,n=void 0===e?{}:e,r=n.cacheKeyRoot,i=void 0===r?new P(s.e):r,o=n.freezeResults,a=void 0!==o&&o,u=this.executeStoreQuery,c=this.executeSelectionSet,l=this.executeSubSelectedArray;this.freezeResults=a,this.executeStoreQuery=W((function(e){return u.call(t,e)}),{makeCacheKey:function(e){var t=e.query,n=e.rootValue,r=e.contextValue,o=e.variableValues,a=e.fragmentMatcher;if(r.store instanceof Y)return i.lookup(r.store,t,a,JSON.stringify(o),n.id)}}),this.executeSelectionSet=W((function(e){return c.call(t,e)}),{makeCacheKey:function(e){var t=e.selectionSet,n=e.rootValue,r=e.execContext;if(r.contextValue.store instanceof Y)return i.lookup(r.contextValue.store,t,r.fragmentMatcher,JSON.stringify(r.variableValues),n.id)}}),this.executeSubSelectedArray=W((function(e){return l.call(t,e)}),{makeCacheKey:function(e){var t=e.field,n=e.array,r=e.execContext;if(r.contextValue.store instanceof Y)return i.lookup(r.contextValue.store,t,n,JSON.stringify(r.variableValues))}})}return e.prototype.readQueryFromStore=function(e){return this.diffQueryAgainstStore(Object(u.a)(Object(u.a)({},e),{returnPartialData:!1})).result},e.prototype.diffQueryAgainstStore=function(e){var t=e.store,n=e.query,r=e.variables,i=e.previousResult,o=e.returnPartialData,a=void 0===o||o,u=e.rootId,c=void 0===u?"ROOT_QUERY":u,l=e.fragmentMatcherFunction,f=e.config,d=Object(s.o)(n);r=Object(s.c)({},Object(s.h)(d),r);var p={store:t,dataIdFromObject:f&&f.dataIdFromObject,cacheRedirects:f&&f.cacheRedirects||{}},y=this.executeStoreQuery({query:n,rootValue:{type:"id",id:c,generated:!0,typename:"Query"},contextValue:p,variableValues:r,fragmentMatcher:l}),v=y.missing&&y.missing.length>0;return v&&!a&&y.missing.forEach((function(e){if(!e.tolerable)throw new J.a(8)})),i&&Object(h.a)(i,y.result)&&(y.result=i),{result:y.result,complete:!v}},e.prototype.executeStoreQuery=function(e){var t=e.query,n=e.rootValue,r=e.contextValue,i=e.variableValues,o=e.fragmentMatcher,a=void 0===o?ee:o,u=Object(s.l)(t),c=Object(s.j)(t),l={query:t,fragmentMap:Object(s.g)(c),contextValue:r,variableValues:i,fragmentMatcher:a};return this.executeSelectionSet({selectionSet:u.selectionSet,rootValue:n,execContext:l})},e.prototype.executeSelectionSet=function(e){var t=this,n=e.selectionSet,r=e.rootValue,i=e.execContext,o=i.fragmentMap,a=i.contextValue,c=i.variableValues,l={result:null},f=[],d=a.store.get(r.id),p=d&&d.__typename||"ROOT_QUERY"===r.id&&"Query"||void 0;function h(e){var t;return e.missing&&(l.missing=l.missing||[],(t=l.missing).push.apply(t,e.missing)),e.result}return n.selections.forEach((function(e){var n;if(Object(s.F)(e,c))if(Object(s.t)(e)){var l=h(t.executeField(d,p,e,i));"undefined"!==typeof l&&f.push(((n={})[Object(s.E)(e)]=l,n))}else{var y=void 0;if(Object(s.v)(e))y=e;else if(!(y=o[e.name.value]))throw new J.a(9);var v=y.typeCondition&&y.typeCondition.name.value,m=!v||i.fragmentMatcher(r,v,a);if(m){var b=t.executeSelectionSet({selectionSet:y.selectionSet,rootValue:r,execContext:i});"heuristic"===m&&b.missing&&(b=Object(u.a)(Object(u.a)({},b),{missing:b.missing.map((function(e){return Object(u.a)(Object(u.a)({},e),{tolerable:!0})}))})),f.push(h(b))}}})),l.result=Object(s.B)(f),this.freezeResults,l},e.prototype.executeField=function(e,t,n,r){var i=r.variableValues,o=r.contextValue,a=function(e,t,n,r,i,o){o.resultKey;var a=o.directives,u=n;(r||a)&&(u=Object(s.p)(u,r,a));var c=void 0;if(e&&"undefined"===typeof(c=e[u])&&i.cacheRedirects&&"string"===typeof t){var l=i.cacheRedirects[t];if(l){var f=l[n];f&&(c=f(e,r,{getCacheKey:function(e){var t=i.dataIdFromObject(e);return t&&Object(s.H)({id:t,typename:e.__typename})}}))}}if("undefined"===typeof c)return{result:c,missing:[{object:e,fieldName:u,tolerable:!1}]};Object(s.w)(c)&&(c=c.json);return{result:c}}(e,t,n.name.value,Object(s.b)(n,i),o,{resultKey:Object(s.E)(n),directives:Object(s.i)(n,i)});return Array.isArray(a.result)?this.combineExecResults(a,this.executeSubSelectedArray({field:n,array:a.result,execContext:r})):n.selectionSet?null==a.result?a:this.combineExecResults(a,this.executeSelectionSet({selectionSet:n.selectionSet,rootValue:a.result,execContext:r})):(Z(n,a.result),this.freezeResults,a)},e.prototype.combineExecResults=function(){for(var e,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return t.forEach((function(t){t.missing&&(e=e||[]).push.apply(e,t.missing)})),{result:t.pop().result,missing:e}},e.prototype.executeSubSelectedArray=function(e){var t,n=this,r=e.field,i=e.array,o=e.execContext;function a(e){return e.missing&&(t=t||[]).push.apply(t,e.missing),e.result}return i=i.map((function(e){return null===e?null:Array.isArray(e)?a(n.executeSubSelectedArray({field:r,array:e,execContext:o})):r.selectionSet?a(n.executeSelectionSet({selectionSet:r.selectionSet,rootValue:e,execContext:o})):(Z(r,e),e)})),this.freezeResults,{result:i,missing:t}},e}();function Z(e,t){if(!e.selectionSet&&Object(s.u)(t))throw new J.a(10)}function ee(){return!0}var te=function(){function e(e){void 0===e&&(e=Object.create(null)),this.data=e}return e.prototype.toObject=function(){return this.data},e.prototype.get=function(e){return this.data[e]},e.prototype.set=function(e,t){this.data[e]=t},e.prototype.delete=function(e){this.data[e]=void 0},e.prototype.clear=function(){this.data=Object.create(null)},e.prototype.replace=function(e){this.data=e||Object.create(null)},e}();var ne=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="WriteError",t}return Object(u.c)(t,e),t}(Error);var re=function(){function e(){}return e.prototype.writeQueryToStore=function(e){var t=e.query,n=e.result,r=e.store,i=void 0===r?$():r,o=e.variables,a=e.dataIdFromObject,u=e.fragmentMatcherFunction;return this.writeResultToStore({dataId:"ROOT_QUERY",result:n,document:t,store:i,variables:o,dataIdFromObject:a,fragmentMatcherFunction:u})},e.prototype.writeResultToStore=function(e){var t=e.dataId,n=e.result,r=e.document,i=e.store,o=void 0===i?$():i,a=e.variables,u=e.dataIdFromObject,c=e.fragmentMatcherFunction,l=Object(s.m)(r);try{return this.writeSelectionSetToStore({result:n,dataId:t,selectionSet:l.selectionSet,context:{store:o,processedData:{},variables:Object(s.c)({},Object(s.h)(l),a),dataIdFromObject:u,fragmentMap:Object(s.g)(Object(s.j)(r)),fragmentMatcherFunction:c}})}catch(f){throw function(e,t){var n=new ne("Error writing result to store for query:\n "+JSON.stringify(t));return n.message+="\n"+e.message,n.stack=e.stack,n}(f,r)}},e.prototype.writeSelectionSetToStore=function(e){var t=this,n=e.result,r=e.dataId,i=e.selectionSet,o=e.context,a=o.variables,u=o.store,c=o.fragmentMap;return i.selections.forEach((function(e){var i;if(Object(s.F)(e,a))if(Object(s.t)(e)){var u=Object(s.E)(e),l=n[u];if("undefined"!==typeof l)t.writeFieldToStore({dataId:r,value:l,field:e,context:o});else{var f=!1,d=!1;e.directives&&e.directives.length&&(f=e.directives.some((function(e){return e.name&&"defer"===e.name.value})),d=e.directives.some((function(e){return e.name&&"client"===e.name.value}))),!f&&!d&&o.fragmentMatcherFunction}}else{var p=void 0;Object(s.v)(e)?p=e:(p=(c||{})[e.name.value],Object(J.b)(p,4));var h=!0;if(o.fragmentMatcherFunction&&p.typeCondition){var y=r||"self",v=Object(s.H)({id:y,typename:void 0}),m={store:new te((i={},i[y]=n,i)),cacheRedirects:{}},b=o.fragmentMatcherFunction(v,p.typeCondition.name.value,m);Object(s.x)(),h=!!b}h&&t.writeSelectionSetToStore({result:n,selectionSet:p.selectionSet,dataId:r,context:o})}})),u},e.prototype.writeFieldToStore=function(e){var t,n,r,i=e.field,o=e.value,a=e.dataId,c=e.context,l=c.variables,f=c.dataIdFromObject,d=c.store,p=Object(s.G)(i,l);if(i.selectionSet&&null!==o)if(Array.isArray(o)){var y=a+"."+p;n=this.processArrayValue(o,y,i.selectionSet,c)}else{var v=a+"."+p,m=!0;if(ie(v)||(v="$"+v),f){var b=f(o);Object(J.b)(!b||!ie(b),5),(b||"number"===typeof b&&0===b)&&(v=b,m=!1)}oe(v,i,c.processedData)||this.writeSelectionSetToStore({dataId:v,result:o,selectionSet:i.selectionSet,context:c});var g=o.__typename;n=Object(s.H)({id:v,typename:g},m);var O=(r=d.get(a))&&r[p];if(O!==n&&Object(s.u)(O)){var w=void 0!==O.typename,j=void 0!==g,S=w&&j&&O.typename!==g;Object(J.b)(!m||O.generated||S,6),Object(J.b)(!w||j,7),O.generated&&(S?m||d.delete(O.id):function e(t,n,r){if(t===n)return!1;var i=r.get(t),o=r.get(n),a=!1;Object.keys(i).forEach((function(t){var n=i[t],u=o[t];Object(s.u)(n)&&ie(n.id)&&Object(s.u)(u)&&!Object(h.a)(n,u)&&e(n.id,u.id,r)&&(a=!0)})),r.delete(t);var c=Object(u.a)(Object(u.a)({},i),o);if(Object(h.a)(c,o))return a;return r.set(n,c),!0}(O.id,n.id,d))}}else n=null!=o&&"object"===typeof o?{type:"json",json:o}:o;(r=d.get(a))&&Object(h.a)(n,r[p])||d.set(a,Object(u.a)(Object(u.a)({},r),((t={})[p]=n,t)))},e.prototype.processArrayValue=function(e,t,n,r){var i=this;return e.map((function(e,o){if(null===e)return null;var a=t+"."+o;if(Array.isArray(e))return i.processArrayValue(e,a,n,r);var u=!0;if(r.dataIdFromObject){var c=r.dataIdFromObject(e);c&&(a=c,u=!1)}return oe(a,n,r.processedData)||i.writeSelectionSetToStore({dataId:a,result:e,selectionSet:n,context:r}),Object(s.H)({id:a,typename:e.__typename},u)}))},e}();function ie(e){return"$"===e[0]}function oe(e,t,n){if(!n)return!1;if(n[e]){if(n[e].indexOf(t)>=0)return!0;n[e].push(t)}else n[e]=[t];return!1}var ae={fragmentMatcher:new H,dataIdFromObject:function(e){if(e.__typename){if(void 0!==e.id)return e.__typename+":"+e.id;if(void 0!==e._id)return e.__typename+":"+e._id}return null},addTypename:!0,resultCaching:!0,freezeResults:!1};var ue=Object.prototype.hasOwnProperty,se=function(e){function t(t,n,r){var i=e.call(this,Object.create(null))||this;return i.optimisticId=t,i.parent=n,i.transaction=r,i}return Object(u.c)(t,e),t.prototype.toObject=function(){return Object(u.a)(Object(u.a)({},this.parent.toObject()),this.data)},t.prototype.get=function(e){return ue.call(this.data,e)?this.data[e]:this.parent.get(e)},t}(te),ce=function(e){function t(t){void 0===t&&(t={});var n=e.call(this)||this;n.watches=new Set,n.typenameDocumentCache=new Map,n.cacheKeyRoot=new P(s.e),n.silenceBroadcast=!1,n.config=Object(u.a)(Object(u.a)({},ae),t),n.config.customResolvers&&(n.config.cacheRedirects=n.config.customResolvers),n.config.cacheResolvers&&(n.config.cacheRedirects=n.config.cacheResolvers),n.addTypename=!!n.config.addTypename,n.data=n.config.resultCaching?new Y:new te,n.optimisticData=n.data,n.storeWriter=new re,n.storeReader=new X({cacheKeyRoot:n.cacheKeyRoot,freezeResults:t.freezeResults});var r=n,i=r.maybeBroadcastWatch;return n.maybeBroadcastWatch=W((function(e){return i.call(n,e)}),{makeCacheKey:function(e){if(!e.optimistic&&!e.previousResult)return r.data instanceof Y?r.cacheKeyRoot.lookup(e.query,JSON.stringify(e.variables)):void 0}}),n}return Object(u.c)(t,e),t.prototype.restore=function(e){return e&&this.data.replace(e),this},t.prototype.extract=function(e){return void 0===e&&(e=!1),(e?this.optimisticData:this.data).toObject()},t.prototype.read=function(e){if("string"===typeof e.rootId&&"undefined"===typeof this.data.get(e.rootId))return null;var t=this.config.fragmentMatcher,n=t&&t.match;return this.storeReader.readQueryFromStore({store:e.optimistic?this.optimisticData:this.data,query:this.transformDocument(e.query),variables:e.variables,rootId:e.rootId,fragmentMatcherFunction:n,previousResult:e.previousResult,config:this.config})||null},t.prototype.write=function(e){var t=this.config.fragmentMatcher,n=t&&t.match;this.storeWriter.writeResultToStore({dataId:e.dataId,result:e.result,variables:e.variables,document:this.transformDocument(e.query),store:this.data,dataIdFromObject:this.config.dataIdFromObject,fragmentMatcherFunction:n}),this.broadcastWatches()},t.prototype.diff=function(e){var t=this.config.fragmentMatcher,n=t&&t.match;return this.storeReader.diffQueryAgainstStore({store:e.optimistic?this.optimisticData:this.data,query:this.transformDocument(e.query),variables:e.variables,returnPartialData:e.returnPartialData,previousResult:e.previousResult,fragmentMatcherFunction:n,config:this.config})},t.prototype.watch=function(e){var t=this;return this.watches.add(e),function(){t.watches.delete(e)}},t.prototype.evict=function(e){throw new J.a(1)},t.prototype.reset=function(){return this.data.clear(),this.broadcastWatches(),Promise.resolve()},t.prototype.removeOptimistic=function(e){for(var t=[],n=0,r=this.optimisticData;r instanceof se;)r.optimisticId===e?++n:t.push(r),r=r.parent;if(n>0){for(this.optimisticData=r;t.length>0;){var i=t.pop();this.performTransaction(i.transaction,i.optimisticId)}this.broadcastWatches()}},t.prototype.performTransaction=function(e,t){var n=this.data,r=this.silenceBroadcast;this.silenceBroadcast=!0,"string"===typeof t&&(this.data=this.optimisticData=new se(t,this.optimisticData,e));try{e(this)}finally{this.silenceBroadcast=r,this.data=n}this.broadcastWatches()},t.prototype.recordOptimisticTransaction=function(e,t){return this.performTransaction(e,t)},t.prototype.transformDocument=function(e){if(this.addTypename){var t=this.typenameDocumentCache.get(e);return t||(t=Object(s.a)(e),this.typenameDocumentCache.set(e,t),this.typenameDocumentCache.set(t,t)),t}return e},t.prototype.broadcastWatches=function(){var e=this;this.silenceBroadcast||this.watches.forEach((function(t){return e.maybeBroadcastWatch(t)}))},t.prototype.maybeBroadcastWatch=function(e){e.callback(this.diff({query:e.query,variables:e.variables,previousResult:e.previousResult&&e.previousResult(),optimistic:e.optimistic}))},t}(p),le=n("ABJ/"),fe=n.n(le).a;!function(e){function t(t,n){var r=e.call(this,t)||this;return r.link=n,r}Object(u.c)(t,e)}(Error);function de(e){return e.request.length<=1}function pe(e){return new fe((function(t){t.error(e)}))}function he(e,t){var n=Object(u.a)({},e);return Object.defineProperty(t,"setContext",{enumerable:!1,value:function(e){n="function"===typeof e?Object(u.a)({},n,e(n)):Object(u.a)({},n,e)}}),Object.defineProperty(t,"getContext",{enumerable:!1,value:function(){return Object(u.a)({},n)}}),Object.defineProperty(t,"toKey",{enumerable:!1,value:function(){return function(e){var t=e.query,n=e.variables,r=e.operationName;return JSON.stringify([r,t,n])}(t)}}),t}function ye(e,t){return t?t(e):fe.of()}function ve(e){return"function"===typeof e?new Oe(e):e}function me(){return new Oe((function(){return fe.of()}))}function be(e){return 0===e.length?me():e.map(ve).reduce((function(e,t){return e.concat(t)}))}function ge(e,t,n){var r=ve(t),i=ve(n||new Oe(ye));return de(r)&&de(i)?new Oe((function(t){return e(t)?r.request(t)||fe.of():i.request(t)||fe.of()})):new Oe((function(t,n){return e(t)?r.request(t,n)||fe.of():i.request(t,n)||fe.of()}))}var Oe=function(){function e(e){e&&(this.request=e)}return e.prototype.split=function(t,n,r){return this.concat(ge(t,n,r||new e(ye)))},e.prototype.concat=function(e){return function(e,t){var n=ve(e);if(de(n))return n;var r=ve(t);return de(r)?new Oe((function(e){return n.request(e,(function(e){return r.request(e)||fe.of()}))||fe.of()})):new Oe((function(e,t){return n.request(e,(function(e){return r.request(e,t)||fe.of()}))||fe.of()}))}(this,e)},e.prototype.request=function(e,t){throw new J.a(1)},e.empty=me,e.from=be,e.split=ge,e.execute=we,e}();function we(e,t){return e.request(he(t.context,function(e){var t={variables:e.variables||{},extensions:e.extensions||{},operationName:e.operationName,query:e.query};return t.operationName||(t.operationName="string"!==typeof t.query?Object(s.n)(t.query):""),t}(function(e){for(var t=["query","operationName","variables","extensions","context"],n=0,r=Object.keys(e);n<r.length;n++){var i=r[n];if(t.indexOf(i)<0)throw new J.a(2)}return e}(t))))||fe.of()}var je=n("L2ys"),Se=n("BLR7");function xe(e){return Object(je.b)(e,{leave:Ee})}var Ee={Name:function(e){return e.value},Variable:function(e){return"$"+e.name},Document:function(e){return Te(e.definitions,"\n\n")+"\n"},OperationDefinition:function(e){var t=e.operation,n=e.name,r=ke("(",Te(e.variableDefinitions,", "),")"),i=Te(e.directives," "),o=e.selectionSet;return n||i||r||"query"!==t?Te([t,Te([n,r]),i,o]," "):o},VariableDefinition:function(e){var t=e.variable,n=e.type,r=e.defaultValue,i=e.directives;return t+": "+n+ke(" = ",r)+ke(" ",Te(i," "))},SelectionSet:function(e){return Ve(e.selections)},Field:function(e){var t=e.alias,n=e.name,r=e.arguments,i=e.directives,o=e.selectionSet;return Te([ke("",t,": ")+n+ke("(",Te(r,", "),")"),Te(i," "),o]," ")},Argument:function(e){return e.name+": "+e.value},FragmentSpread:function(e){return"..."+e.name+ke(" ",Te(e.directives," "))},InlineFragment:function(e){var t=e.typeCondition,n=e.directives,r=e.selectionSet;return Te(["...",ke("on ",t),Te(n," "),r]," ")},FragmentDefinition:function(e){var t=e.name,n=e.typeCondition,r=e.variableDefinitions,i=e.directives,o=e.selectionSet;return"fragment ".concat(t).concat(ke("(",Te(r,", "),")")," ")+"on ".concat(n," ").concat(ke("",Te(i," ")," "))+o},IntValue:function(e){return e.value},FloatValue:function(e){return e.value},StringValue:function(e,t){var n=e.value;return e.block?Object(Se.b)(n,"description"===t?"":"  "):JSON.stringify(n)},BooleanValue:function(e){return e.value?"true":"false"},NullValue:function(){return"null"},EnumValue:function(e){return e.value},ListValue:function(e){return"["+Te(e.values,", ")+"]"},ObjectValue:function(e){return"{"+Te(e.fields,", ")+"}"},ObjectField:function(e){return e.name+": "+e.value},Directive:function(e){return"@"+e.name+ke("(",Te(e.arguments,", "),")")},NamedType:function(e){return e.name},ListType:function(e){return"["+e.type+"]"},NonNullType:function(e){return e.type+"!"},SchemaDefinition:Re((function(e){var t=e.directives,n=e.operationTypes;return Te(["schema",Te(t," "),Ve(n)]," ")})),OperationTypeDefinition:function(e){return e.operation+": "+e.type},ScalarTypeDefinition:Re((function(e){return Te(["scalar",e.name,Te(e.directives," ")]," ")})),ObjectTypeDefinition:Re((function(e){var t=e.name,n=e.interfaces,r=e.directives,i=e.fields;return Te(["type",t,ke("implements ",Te(n," & ")),Te(r," "),Ve(i)]," ")})),FieldDefinition:Re((function(e){var t=e.name,n=e.arguments,r=e.type,i=e.directives;return t+(De(n)?ke("(\n",qe(Te(n,"\n")),"\n)"):ke("(",Te(n,", "),")"))+": "+r+ke(" ",Te(i," "))})),InputValueDefinition:Re((function(e){var t=e.name,n=e.type,r=e.defaultValue,i=e.directives;return Te([t+": "+n,ke("= ",r),Te(i," ")]," ")})),InterfaceTypeDefinition:Re((function(e){var t=e.name,n=e.interfaces,r=e.directives,i=e.fields;return Te(["interface",t,ke("implements ",Te(n," & ")),Te(r," "),Ve(i)]," ")})),UnionTypeDefinition:Re((function(e){var t=e.name,n=e.directives,r=e.types;return Te(["union",t,Te(n," "),r&&0!==r.length?"= "+Te(r," | "):""]," ")})),EnumTypeDefinition:Re((function(e){var t=e.name,n=e.directives,r=e.values;return Te(["enum",t,Te(n," "),Ve(r)]," ")})),EnumValueDefinition:Re((function(e){return Te([e.name,Te(e.directives," ")]," ")})),InputObjectTypeDefinition:Re((function(e){var t=e.name,n=e.directives,r=e.fields;return Te(["input",t,Te(n," "),Ve(r)]," ")})),DirectiveDefinition:Re((function(e){var t=e.name,n=e.arguments,r=e.repeatable,i=e.locations;return"directive @"+t+(De(n)?ke("(\n",qe(Te(n,"\n")),"\n)"):ke("(",Te(n,", "),")"))+(r?" repeatable":"")+" on "+Te(i," | ")})),SchemaExtension:function(e){var t=e.directives,n=e.operationTypes;return Te(["extend schema",Te(t," "),Ve(n)]," ")},ScalarTypeExtension:function(e){return Te(["extend scalar",e.name,Te(e.directives," ")]," ")},ObjectTypeExtension:function(e){var t=e.name,n=e.interfaces,r=e.directives,i=e.fields;return Te(["extend type",t,ke("implements ",Te(n," & ")),Te(r," "),Ve(i)]," ")},InterfaceTypeExtension:function(e){var t=e.name,n=e.interfaces,r=e.directives,i=e.fields;return Te(["extend interface",t,ke("implements ",Te(n," & ")),Te(r," "),Ve(i)]," ")},UnionTypeExtension:function(e){var t=e.name,n=e.directives,r=e.types;return Te(["extend union",t,Te(n," "),r&&0!==r.length?"= "+Te(r," | "):""]," ")},EnumTypeExtension:function(e){var t=e.name,n=e.directives,r=e.values;return Te(["extend enum",t,Te(n," "),Ve(r)]," ")},InputObjectTypeExtension:function(e){var t=e.name,n=e.directives,r=e.fields;return Te(["extend input",t,Te(n," "),Ve(r)]," ")}};function Re(e){return function(t){return Te([t.description,e(t)],"\n")}}function Te(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return null!==(t=null===e||void 0===e?void 0:e.filter((function(e){return e})).join(n))&&void 0!==t?t:""}function Ve(e){return e&&0!==e.length?"{\n"+qe(Te(e,"\n"))+"\n}":""}function ke(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return t?e+t+n:""}function qe(e){return e&&"  "+e.replace(/\n/g,"\n  ")}function Ce(e){return-1!==e.indexOf("\n")}function De(e){return e&&e.some(Ce)}var Ie={http:{includeQuery:!0,includeExtensions:!1},headers:{accept:"*/*","content-type":"application/json"},options:{method:"POST"}},Fe=function(e,t,n){var r=new Error(n);throw r.name="ServerError",r.response=e,r.statusCode=e.status,r.result=t,r},_e=function(e,t){var n;try{n=JSON.stringify(e)}catch(i){var r=new J.a(2);throw r.parseError=i,r}return n},Ne=function(e){void 0===e&&(e={});var t=e.uri,n=void 0===t?"/graphql":t,r=e.fetch,i=e.includeExtensions,o=e.useGETForQueries,a=Object(u.e)(e,["uri","fetch","includeExtensions","useGETForQueries"]);!function(e){if(!e&&"undefined"===typeof fetch){throw"undefined"===typeof window&&"node-fetch",new J.a(1)}}(r),r||(r=fetch);var s={http:{includeExtensions:i},options:a.fetchOptions,credentials:a.credentials,headers:a.headers};return new Oe((function(e){var t=function(e,t){var n=e.getContext().uri;return n||("function"===typeof t?t(e):t||"/graphql")}(e,n),i=e.getContext(),a={};if(i.clientAwareness){var c=i.clientAwareness,l=c.name,f=c.version;l&&(a["apollographql-client-name"]=l),f&&(a["apollographql-client-version"]=f)}var d,p=Object(u.a)({},a,i.headers),h={http:i.http,options:i.fetchOptions,credentials:i.credentials,headers:p},y=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i=Object(u.a)({},t.options,{headers:t.headers,credentials:t.credentials}),o=t.http;n.forEach((function(e){i=Object(u.a)({},i,e.options,{headers:Object(u.a)({},i.headers,e.headers)}),e.credentials&&(i.credentials=e.credentials),o=Object(u.a)({},o,e.http)}));var a=e.operationName,s=e.extensions,c=e.variables,l=e.query,f={operationName:a,variables:c};return o.includeExtensions&&(f.extensions=s),o.includeQuery&&(f.query=xe(l)),{options:i,body:f}}(e,Ie,s,h),v=y.options,m=y.body;if(!v.signal){var b=function(){if("undefined"===typeof AbortController)return{controller:!1,signal:!1};var e=new AbortController;return{controller:e,signal:e.signal}}(),g=b.controller,O=b.signal;(d=g)&&(v.signal=O)}if(o&&!e.query.definitions.some((function(e){return"OperationDefinition"===e.kind&&"mutation"===e.operation}))&&(v.method="GET"),"GET"===v.method){var w=function(e,t){var n=[],r=function(e,t){n.push(e+"="+encodeURIComponent(t))};"query"in t&&r("query",t.query);t.operationName&&r("operationName",t.operationName);if(t.variables){var i=void 0;try{i=_e(t.variables,"Variables map")}catch(S){return{parseError:S}}r("variables",i)}if(t.extensions){var o=void 0;try{o=_e(t.extensions,"Extensions map")}catch(S){return{parseError:S}}r("extensions",o)}var a="",u=e,s=e.indexOf("#");-1!==s&&(a=e.substr(s),u=e.substr(0,s));var c=-1===u.indexOf("?")?"?":"&";return{newURI:u+c+n.join("&")+a}}(t,m),j=w.newURI,S=w.parseError;if(S)return pe(S);t=j}else try{v.body=_e(m,"Payload")}catch(S){return pe(S)}return new fe((function(n){var i;return r(t,v).then((function(t){return e.setContext({response:t}),t})).then((i=e,function(e){return e.text().then((function(t){try{return JSON.parse(t)}catch(r){var n=r;return n.name="ServerParseError",n.response=e,n.statusCode=e.status,n.bodyText=t,Promise.reject(n)}})).then((function(t){return e.status>=300&&Fe(e,t,"Response not successful: Received status code "+e.status),Array.isArray(t)||t.hasOwnProperty("data")||t.hasOwnProperty("errors")||Fe(e,t,"Server response was missing for query '"+(Array.isArray(i)?i.map((function(e){return e.operationName})):i.operationName)+"'."),t}))})).then((function(e){return n.next(e),n.complete(),e})).catch((function(e){"AbortError"!==e.name&&(e.result&&e.result.errors&&e.result.data&&n.next(e.result),n.error(e))})),function(){d&&d.abort()}}))}))};var Ae=function(e){function t(t){return e.call(this,Ne(t).request)||this}return Object(u.c)(t,e),t}(Oe),Me=n("LpSC"),Qe=n.n(Me),Pe=i.a.createElement,Ke=new Ae({uri:"http://localhost:4000/api",credentials:"include"}),ze=new o.c({link:Ke,cache:new ce,fetch:Qe.a});function Be(e){var t=e.Component,n=e.pageProps;return Pe(a.a,{client:ze},Pe(t,n))}},"8oxP":function(e,t,n){},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},K64n:function(e,t,n){"use strict";t.Headers=self.Headers,t.Request=self.Request,t.Response=self.Response,t.fetch=self.fetch},LpSC:function(e,t,n){n("K64n"),e.exports=self.fetch.bind(self)}},[[0,0,1,2,4]]]);