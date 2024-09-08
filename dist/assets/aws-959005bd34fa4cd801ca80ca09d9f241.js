"use strict"
define("aws/app",["exports","@ember/application","ember-resolver","ember-load-initializers","aws/config/environment"],(function(e,t,r,n,i){function o(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e
var r=e[Symbol.toPrimitive]
if(void 0!==r){var n=r.call(e,t||"default")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string")
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class a extends t.default{constructor(...e){super(...e),o(this,"modulePrefix",i.default.modulePrefix),o(this,"podModulePrefix",i.default.podModulePrefix),o(this,"Resolver",r.default)}}e.default=a,(0,n.default)(a,i.default.modulePrefix)})),define("aws/component-managers/glimmer",["exports","@glimmer/component/-private/ember-component-manager"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("aws/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("aws/data-adapter",["exports","@ember/array","@ember/debug/data-adapter","@ember/object/observers","@ember/service","@embroider/macros","@ember-data/request-utils/string","@ember-data/store"],(function(e,t,r,n,i,o,a,s){function u(e,t,r){(function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")})(e,t),t.set(e,r)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var l=Object.defineProperty;((e,t)=>{for(var r in t)l(e,r,{get:t[r],enumerable:!0})})({},{c:()=>v,f:()=>c,g:()=>f,i:()=>m,m:()=>p,n:()=>b,p:()=>g})
var d=new WeakMap
function c(e,t,r,n){return f(e.prototype,t,r,n)}function f(e,t,r,n){let i={configurable:!0,enumerable:!0,writable:!0,initializer:null}
n&&(i.initializer=n)
for(let o of r)i=o(e,t,i)||i
void 0===i.initializer?Object.defineProperty(e,t,i):function(e,t,r){let n=d.get(e)
n||(n=new Map,d.set(e,n)),n.set(t,r)}(e,t,i)}function p({prototype:e},t,r){return b(e,t,r)}function b(e,t,r){let n={...Object.getOwnPropertyDescriptor(e,t)}
for(let i of r)n=i(e,t,n)||n
void 0!==n.initializer&&(n.value=n.initializer?n.initializer.call(e):void 0,n.initializer=void 0),Object.defineProperty(e,t,n)}function m(e,t){let r=function(e,t){let r=e.prototype
for(;r;){let e=d.get(r)?.get(t)
if(e)return e
r=r.prototype}}(e.constructor,t)
r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(e):void 0})}function v(e,t){return t.reduce(((e,t)=>t(e)||e),e)}function g(e,t){for(let[r,n,i]of t)"field"===r?h(e,n,i):b(e,n,i)
return e}function h(e,t,r){let n={configurable:!0,enumerable:!0,writable:!0,initializer:()=>Object.getOwnPropertyDescriptor(e,t)?.value}
for(let i of r)n=i(e,t,n)||n
n.initializer&&(n.value=n.initializer.call(e),delete n.initializer),Object.defineProperty(e,t,n)}const y=new WeakMap
function w(){const e={},t=[],r=(0,s.recordIdentifierFor)(this),n=this.store.schema.fields(r),i={name:"Attributes",properties:["id"],expand:!0},o=i.properties,a=[i]
for(const s of n.values())switch(s.kind){case"attribute":o.push(s.name)
break
case"belongsTo":case"hasMany":{let r=e[s.kind]
void 0===r&&(r=e[s.kind]=[],a.push({name:s.kind,properties:r,expand:!0})),r.push(s.name),t.push(s.name)
break}}return a.push({name:"Flags",properties:["isLoaded","hasDirtyAttributes","isSaving","isDeleted","isError","isNew","isValid"],expand:!1}),{propertyInfo:{includeOtherProperties:!0,groups:a,expensiveProperties:t}}}var P=new WeakMap
class O extends r.default{constructor(...e){super(...e),u(this,P,void m(this,"store"))}getFilters(){return[{name:"isNew",desc:"New"},{name:"isModified",desc:"Modified"},{name:"isClean",desc:"Clean"}]}_nameToClass(e){return this.store.modelFor(e)}watchModelTypes(e,t){const{store:r}=this,n=function(e){let t=y.get(e)
return void 0===t&&(t=new Map,y.set(e,t)),t}(r),i=r.notifications.subscribe("resource",((i,a)=>{"added"===a&&this.watchTypeIfUnseen(r,n,i.type,e,t,o)})),o=[()=>{r.notifications.unsubscribe(i)}]
Object.keys(r.identifierCache._cache.resourcesByType).forEach((e=>{n.set(e,!1)})),n.forEach(((i,a)=>{this.watchTypeIfUnseen(r,n,a,e,t,o)}))
const a=()=>{o.forEach((e=>e())),n.forEach(((e,t)=>{n.set(t,!1)})),this.releaseMethods.removeObject(a)}
return this.releaseMethods.pushObject(a),a}watchTypeIfUnseen(e,t,r,n,i,o){if(!0!==t.get(r)){const a=e.modelFor(r)
a.prototype._debugInfo=w
const s=this.wrapModelType(a,r)
o.push(this.observeModelType(r,i)),n([s]),t.set(r,!0)}}columnNameToDesc(e){return(0,a.capitalize)((0,a.underscore)(e).replace(/_/g," ").trim())}columnsForType(e){const t=[{name:"id",desc:"Id"}]
let r=0
return e.attributes.forEach(((e,n)=>{if(r++>this.attributeLimit)return!1
const i=this.columnNameToDesc(n)
t.push({name:n,desc:i})})),t}getRecords(e,t){if(arguments.length<2){const r=e._debugContainerKey
if(r){const e=r.match(/model:(.*)/)
null!==e&&(t=e[1])}}return!(0,o.macroCondition)((0,o.getGlobalConfig)().WarpDrive.env.DEBUG)||(e=>{if(!e)throw new Error("Cannot find model name. Please upgrade to Ember.js >= 1.13 for Ember Inspector support")})(!!t),this.store.peekAll(t)}getRecordColumnValues(e){let t=0
const r={id:e.id}
return e.eachAttribute((n=>{if(t++>this.attributeLimit)return!1
r[n]=e[n]})),r}getRecordKeywords(e){const r=[e.id]
return e.eachAttribute((t=>{r.push(e[t])})),(0,t.A)(r)}getRecordFilterValues(e){return{isNew:e.isNew,isModified:e.hasDirtyAttributes&&!e.isNew,isClean:!e.hasDirtyAttributes}}getRecordColor(e){let t="black"
return e.isNew?t="green":e.hasDirtyAttributes&&(t="blue"),t}observeRecord(e,t){const r=[],i=["id","isNew","hasDirtyAttributes"]
e.eachAttribute((e=>i.push(e))),i.forEach((i=>{const o=()=>{t(this.wrapRecord(e))};(0,n.addObserver)(e,i,o),r.push((function(){(0,n.removeObserver)(e,i,o)}))}))
return function(){r.forEach((e=>e()))}}}f(O.prototype,"store",[(0,i.inject)("store")])
e.default=(0,o.macroCondition)((0,o.getGlobalConfig)().WarpDrive.includeDataAdapter)?O:null})),define("aws/helpers/app-version",["exports","@ember/component/helper","aws/config/environment","ember-cli-app-version/utils/regexp"],(function(e,t,r,n){function i(e,t={}){const i=r.default.APP.version
let o=t.versionOnly||t.hideSha,a=t.shaOnly||t.hideVersion,s=null
return o&&(t.showExtended&&(s=i.match(n.versionExtendedRegExp)),s||(s=i.match(n.versionRegExp))),a&&(s=i.match(n.shaRegExp)),s?s[0]:i}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=i,e.default=void 0
e.default=(0,t.helper)(i)})),define("aws/helpers/page-title",["exports","ember-page-title/helpers/page-title"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("aws/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","aws/config/environment"],(function(e,t,r){let n,i
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r.default.APP&&(n=r.default.APP.name,i=r.default.APP.version)
e.default={name:"App Version",initialize:(0,t.default)(n,i)}})),define("aws/initializers/ember-data",["exports","@ember-data/request-utils/deprecation-support"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={name:"ember-data",initialize(e){e.registerOptionsForType("serializer",{singleton:!1}),e.registerOptionsForType("adapter",{singleton:!1})}}})),define("aws/router",["exports","@ember/routing/router","aws/config/environment"],(function(e,t,r){function n(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e
var r=e[Symbol.toPrimitive]
if(void 0!==r){var n=r.call(e,t||"default")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string")
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class i extends t.default{constructor(...e){super(...e),n(this,"location",r.default.locationType),n(this,"rootURL",r.default.rootURL)}}e.default=i,i.map((function(){}))})),define("aws/services/page-title",["exports","ember-page-title/services/page-title"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("aws/services/store",["exports","@ember/debug","ember-data/store"],(function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.default}})})),define("aws/templates/application",["exports","@ember/template-factory"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=(0,t.createTemplateFactory)({id:"/P4U7i9K",block:'[[[1,[28,[35,0],["Aws"],null]],[1,"\\n\\n"],[46,[28,[37,2],null,null],null,null,null],[1,"\\n\\n"],[8,[39,3],null,null,null],[1,"\\n"]],[],false,["page-title","component","-outlet","welcome-page"]]',moduleName:"aws/templates/application.hbs",isStrictMode:!1})})),define("aws/transforms/boolean",["exports","@ember/debug","@ember-data/serializer/transform"],(function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.BooleanTransform}})})),define("aws/transforms/date",["exports","@ember/debug","@ember-data/serializer/transform"],(function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.DateTransform}})})),define("aws/transforms/number",["exports","@ember/debug","@ember-data/serializer/transform"],(function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.NumberTransform}})})),define("aws/transforms/string",["exports","@ember/debug","@ember-data/serializer/transform"],(function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.StringTransform}})})),define("aws/config/environment",[],(function(){try{var e="aws/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),r={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(r,"__esModule",{value:!0}),r}catch(n){throw new Error('Could not read config from meta tag with name "'+e+'".')}})),runningTests||require("aws/app").default.create({name:"aws",version:"0.0.0+020dc01a"})
