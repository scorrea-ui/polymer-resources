define(["exports","meta"],function(_exports,meta){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.__asyncDelegator=__asyncDelegator$1;_exports.__asyncDelegator$1=__asyncDelegator$2;_exports.__asyncDelegator$2=__asyncDelegator$4;_exports.__asyncDelegator$3=__asyncDelegator$3;_exports.__asyncDelegator$4=__asyncDelegator$5;_exports.__asyncDelegator$5=__asyncDelegator;_exports.__asyncGenerator=__asyncGenerator$1;_exports.__asyncGenerator$1=__asyncGenerator$2;_exports.__asyncGenerator$2=__asyncGenerator$4;_exports.__asyncGenerator$3=__asyncGenerator$3;_exports.__asyncGenerator$4=__asyncGenerator$5;_exports.__asyncGenerator$5=__asyncGenerator;_exports.__asyncValues=__asyncValues$1;_exports.__asyncValues$1=__asyncValues$2;_exports.__asyncValues$2=__asyncValues$4;_exports.__asyncValues$3=__asyncValues$3;_exports.__asyncValues$4=__asyncValues$5;_exports.__asyncValues$5=__asyncValues;_exports.__await=__await$1;_exports.__await$1=__await$2;_exports.__await$2=__await$4;_exports.__await$3=__await$3;_exports.__await$4=__await$5;_exports.__await$5=__await;_exports.__awaiter=__awaiter$1;_exports.__awaiter$1=__awaiter$2;_exports.__awaiter$2=__awaiter$4;_exports.__awaiter$3=__awaiter$3;_exports.__awaiter$4=__awaiter$5;_exports.__awaiter$5=__awaiter;_exports.__classPrivateFieldGet=__classPrivateFieldGet$1;_exports.__classPrivateFieldGet$1=__classPrivateFieldGet$2;_exports.__classPrivateFieldGet$2=__classPrivateFieldGet$4;_exports.__classPrivateFieldGet$3=__classPrivateFieldGet$3;_exports.__classPrivateFieldGet$4=__classPrivateFieldGet$5;_exports.__classPrivateFieldGet$5=__classPrivateFieldGet;_exports.__classPrivateFieldSet=__classPrivateFieldSet$1;_exports.__classPrivateFieldSet$1=__classPrivateFieldSet$2;_exports.__classPrivateFieldSet$2=__classPrivateFieldSet$4;_exports.__classPrivateFieldSet$3=__classPrivateFieldSet$3;_exports.__classPrivateFieldSet$4=__classPrivateFieldSet$5;_exports.__classPrivateFieldSet$5=__classPrivateFieldSet;_exports.__createBinding$2=__createBinding$4;_exports.__createBinding$5=__createBinding;_exports.__decorate=__decorate$1;_exports.__decorate$1=__decorate$2;_exports.__decorate$2=__decorate$4;_exports.__decorate$3=__decorate$3;_exports.__decorate$4=__decorate$5;_exports.__decorate$5=__decorate;_exports.__exportStar=__exportStar$1;_exports.__exportStar$1=__exportStar$2;_exports.__exportStar$2=__exportStar$4;_exports.__exportStar$3=__exportStar$3;_exports.__exportStar$4=__exportStar$5;_exports.__exportStar$5=__exportStar;_exports.__extends=__extends$1;_exports.__extends$1=__extends$2;_exports.__extends$2=__extends$4;_exports.__extends$3=__extends$3;_exports.__extends$4=__extends$5;_exports.__extends$5=__extends;_exports.__generator=__generator$1;_exports.__generator$1=__generator$2;_exports.__generator$2=__generator$4;_exports.__generator$3=__generator$3;_exports.__generator$4=__generator$5;_exports.__generator$5=__generator;_exports.__importDefault=__importDefault$1;_exports.__importDefault$1=__importDefault$2;_exports.__importDefault$2=__importDefault$4;_exports.__importDefault$3=__importDefault$3;_exports.__importDefault$4=__importDefault$5;_exports.__importDefault$5=__importDefault;_exports.__importStar=__importStar$1;_exports.__importStar$1=__importStar$2;_exports.__importStar$2=__importStar$4;_exports.__importStar$3=__importStar$3;_exports.__importStar$4=__importStar$5;_exports.__importStar$5=__importStar;_exports.__makeTemplateObject=__makeTemplateObject$1;_exports.__makeTemplateObject$1=__makeTemplateObject$2;_exports.__makeTemplateObject$2=__makeTemplateObject$4;_exports.__makeTemplateObject$3=__makeTemplateObject$3;_exports.__makeTemplateObject$4=__makeTemplateObject$5;_exports.__makeTemplateObject$5=__makeTemplateObject;_exports.__metadata=__metadata$1;_exports.__metadata$1=__metadata$2;_exports.__metadata$2=__metadata$4;_exports.__metadata$3=__metadata$3;_exports.__metadata$4=__metadata$5;_exports.__metadata$5=__metadata;_exports.__param=__param$1;_exports.__param$1=__param$2;_exports.__param$2=__param$4;_exports.__param$3=__param$3;_exports.__param$4=__param$5;_exports.__param$5=__param;_exports.__read=__read$1;_exports.__read$1=__read$2;_exports.__read$2=__read$4;_exports.__read$3=__read$3;_exports.__read$4=__read$5;_exports.__read$5=__read;_exports.__rest=__rest$1;_exports.__rest$1=__rest$2;_exports.__rest$2=__rest$4;_exports.__rest$3=__rest$3;_exports.__rest$4=__rest$5;_exports.__rest$5=__rest;_exports.__spread=__spread$1;_exports.__spread$1=__spread$2;_exports.__spread$2=__spread$4;_exports.__spread$3=__spread$3;_exports.__spread$4=__spread$5;_exports.__spread$5=__spread;_exports.__spreadArray=__spreadArray;_exports.__spreadArray$1=__spreadArray$1;_exports.__spreadArray$2=__spreadArray$2;_exports.__spreadArray$3=__spreadArray$3;_exports.__spreadArrays=__spreadArrays$1;_exports.__spreadArrays$1=__spreadArrays$2;_exports.__spreadArrays$2=__spreadArrays$4;_exports.__spreadArrays$3=__spreadArrays$3;_exports.__spreadArrays$4=__spreadArrays$5;_exports.__spreadArrays$5=__spreadArrays;_exports.__values=__values$1;_exports.__values$1=__values$2;_exports.__values$2=__values$4;_exports.__values$3=__values$3;_exports.__values$4=__values$5;_exports.__values$5=__values;_exports.addHasRemoveClass$1=_exports.addHasRemoveClass=addHasRemoveClass;_exports.camelToDashCase=camelToDashCase;_exports.closest=closest;_exports.cssFromModule=cssFromModule;_exports.cssFromModuleImports=cssFromModuleImports;_exports.cssFromModules=cssFromModules;_exports.cssFromTemplate=cssFromTemplate;_exports.dashToCamelCase=dashToCamelCase;_exports.dumpRegistrations=dumpRegistrations;_exports.estimateScrollWidth=estimateScrollWidth;_exports.eventOptions$1=_exports.eventOptions=eventOptions;_exports.findAssignedElement=findAssignedElement;_exports.get=get;_exports.getNormalizedEventCoords=getNormalizedEventCoords;_exports.hideElementsGlobally=hideElementsGlobally;_exports.incrementInstanceCount=incrementInstanceCount;_exports.insertNodeIntoTemplate=insertNodeIntoTemplate;_exports.internalProperty$1=_exports.internalProperty=internalProperty;_exports.isAncestor=isAncestor;_exports.isDescendant=isDescendant;_exports.isPath=isPath;_exports.matches=matches;_exports.matches$1=matches$1;_exports.modelForElement=modelForElement;_exports.normalize=normalize;_exports.pathFromUrl=pathFromUrl;_exports.property$1=_exports.property=property;_exports.query$1=_exports.query=query;_exports.queryAll$1=_exports.queryAll=queryAll;_exports.queryAssignedNodes$1=_exports.queryAssignedNodes=queryAssignedNodes;_exports.queryAsync$1=_exports.queryAsync=queryAsync;_exports.register=register;_exports.removeNodesFromTemplate=removeNodesFromTemplate;_exports.resolveCss=resolveCss;_exports.resolveUrl=resolveUrl;_exports.root=root;_exports.set=set;_exports.showHideChildren=showHideChildren;_exports.split=split;_exports.stylesFromModule=stylesFromModule;_exports.stylesFromModuleImports=stylesFromModuleImports;_exports.stylesFromModules=stylesFromModules;_exports.stylesFromTemplate=stylesFromTemplate;_exports.supportsCssVariables=supportsCssVariables;_exports.templateFactory$1=_exports.templateFactory=templateFactory;_exports.templatize=templatize;_exports.translate=translate;_exports.AttributePart$1=_exports.AttributePart=_exports.AttributeCommitter$1=_exports.AttributeCommitter=_exports.$wrap=_exports.$utils=_exports.$util=_exports.$updatingElement=_exports.$tslibEs6$5=_exports.$tslibEs6$4=_exports.$tslibEs6$3=_exports.$tslibEs6$2=_exports.$tslibEs6$1=_exports.$tslibEs6=_exports.$templatize=_exports.$templateStamp=_exports.$templateResult=_exports.$templateInstance=_exports.$templateFactory=_exports.$template=_exports.$telemetry=_exports.$styleMap=_exports.$styleGather=_exports.$shadyRender=_exports.$settings=_exports.$rippleHandlers=_exports.$resolveUrl=_exports.$render=_exports.$propertyEffects=_exports.$propertyAccessors=_exports.$propertiesMixin=_exports.$propertiesChanged=_exports.$ponyfill=_exports.$polymerElement=_exports.$path=_exports.$parts=_exports.$part=_exports.$observer=_exports.$mwcTopAppBarCss=_exports.$mwcTopAppBarBaseBase=_exports.$mwcTopAppBarBase=_exports.$mwcTopAppBar=_exports.$mwcRippleCss=_exports.$mwcRippleBase=_exports.$mwcRipple=_exports.$mwcIconButtonCss=_exports.$mwcIconButtonBase=_exports.$mwcIconButton=_exports.$mwcDrawerCss=_exports.$mwcDrawerBase=_exports.$mwcDrawer=_exports.$mutableData=_exports.$modifyTemplate=_exports.$mixin=_exports.$litHtml=_exports.$litElement=_exports.$htmlTag=_exports.$hideTemplateControls=_exports.MDCTopAppBarFoundation=_exports.$foundationDefault$7=_exports.MDCFoundation$2=_exports.$foundationDefault$6=_exports.MDCTopAppBarBaseFoundation=_exports.$foundationDefault$5=_exports.MDCRippleFoundation=_exports.$foundationDefault$4=_exports.MDCFoundation$1=_exports.$foundationDefault$3=_exports.MDCFoundation=_exports.$foundationDefault$2=_exports.MDCModalDrawerFoundation=_exports.$foundationDefault$1=_exports.MDCDismissibleDrawerFoundation=_exports.$foundationDefault=_exports.$foundation$7=_exports.$foundation$6=_exports.$foundation$5=_exports.$foundation$4=_exports.$foundation$3=_exports.$foundation$2=_exports.$foundation$1=_exports.$foundation=_exports.$flush=_exports.$elementMixin=_exports.$domRepeat=_exports.$domModule=_exports.$dom=_exports.$directive=_exports.$defaultTemplateProcessor=_exports.$decorators=_exports.$debounce=_exports.$cssTag=_exports.$constants$2=_exports.$constants$1=_exports.$constants=_exports.$classMap=_exports.$caseMap=_exports.$blogPosts=_exports.$baseElement=_exports.$async=void 0;_exports.instanceCount=_exports.idlePeriod=_exports.htmlLiteral=_exports.html$4=_exports.html$3=_exports.html$2=_exports.html$1=_exports.html=_exports.getSanitizeDOMValue=_exports.flushDebouncers=_exports.flush=_exports.fastDomIf=_exports.enqueueDebouncer$1=_exports.enqueueDebouncer=_exports.doesElementContainFocus=_exports.directive$1=_exports.directive=_exports.defaultTemplateProcessor$1=_exports.defaultTemplateProcessor=_exports.defaultConverter$1=_exports.defaultConverter=_exports.deepActiveElementPath=_exports.dedupingMixin=_exports.customElement$1=_exports.customElement=_exports.cssClasses$2=_exports.cssClasses$1=_exports.cssClasses=_exports.css$1=_exports.css=_exports.createMarker$1=_exports.createMarker=_exports.classMap=_exports.cancelSyntheticClickEvents=_exports.builtCSS=_exports.boundAttributeSuffix=_exports.animationFrame=_exports.allowTemplateFromDomModule=_exports.__createBinding$4=_exports.__createBinding$3=_exports.__createBinding$1=_exports.__createBinding=_exports.__assign$5=_exports.__assign$4=_exports.__assign$3=_exports.__assign$2=_exports.__assign$1=_exports.__assign=_exports.UpdatingElement$1=_exports.UpdatingElement=_exports.TopAppBarBaseBase=_exports.TopAppBarBase=_exports.TopAppBar=_exports.TemplateStamp=_exports.TemplateResult$3=_exports.TemplateResult$2=_exports.TemplateResult$1=_exports.TemplateResult=_exports.TemplateInstanceBase=_exports.TemplateInstance$1=_exports.TemplateInstance=_exports.Template$1=_exports.Template=_exports.SVGTemplateResult$2=_exports.SVGTemplateResult$1=_exports.SVGTemplateResult=_exports.RippleHandlers=_exports.RippleBase=_exports.Ripple=_exports.PropertyPart$1=_exports.PropertyPart=_exports.PropertyEffects=_exports.PropertyCommitter$1=_exports.PropertyCommitter=_exports.PropertyAccessors=_exports.PropertiesMixin=_exports.PropertiesChanged=_exports.PolymerElement=_exports.OptionalMutableData=_exports.NodePart$1=_exports.NodePart=_exports.MutableData=_exports.LitElement=_exports.IconButtonBase=_exports.IconButton=_exports.EventPart$1=_exports.EventPart=_exports.ElementMixin=_exports.DrawerBase=_exports.Drawer=_exports.DomRepeat=_exports.DomModule=_exports.DefaultTemplateProcessor$1=_exports.DefaultTemplateProcessor=_exports.Debouncer=_exports.CSSResult$1=_exports.CSSResult=_exports.BooleanAttributePart$1=_exports.BooleanAttributePart=_exports.BaseElement=void 0;_exports.wrap=_exports.version$1=_exports.version=_exports.useShadow=_exports.useNativeCustomElements=_exports.useNativeCSSProperties=_exports.useAdoptedStyleSheetsWithBuiltCSS=_exports.updateStyles=_exports.unsafeCSS$1=_exports.unsafeCSS=_exports.timeOut=_exports.templateCaches$1=_exports.templateCaches=_exports.syncInitialRender=_exports.svg$2=_exports.svg$1=_exports.svg=_exports.suppressTemplateNotifications=_exports.supportsPassiveEventListener=_exports.supportsAdoptingStyleSheets$2=_exports.supportsAdoptingStyleSheets$1=_exports.supportsAdoptingStyleSheets=_exports.styleMap=_exports.style$3=_exports.style$2=_exports.style$1=_exports.style=_exports.strings$2=_exports.strings$1=_exports.strings=_exports.strictTemplatePolicy=_exports.shadyTemplateFactory=_exports.setUseAdoptedStyleSheetsWithBuiltCSS=_exports.setSyncInitialRender=_exports.setSuppressTemplateNotifications=_exports.setStrictTemplatePolicy=_exports.setSanitizeDOMValue=_exports.setRootPath=_exports.setRemoveNestedTemplates=_exports.setPassiveTouchGestures=_exports.setOrderedComputed=_exports.setLegacyWarnings=_exports.setLegacyUndefined=_exports.setLegacyOptimizations=_exports.setLegacyNoObservedAttributes=_exports.setFastDomIf=_exports.setCancelSyntheticClickEvents=_exports.setAllowTemplateFromDomModule=_exports.sanitizeDOMValue=_exports.rootPath=_exports.reparentNodes$1=_exports.reparentNodes=_exports.render$1=_exports.render$2=_exports.render=_exports.removeNodes$1=_exports.removeNodes=_exports.removeNestedTemplates=_exports.registrations=_exports.posts=_exports.passiveTouchGestures=_exports.passiveEventOptionsIfSupported=_exports.parts$1=_exports.parts=_exports.orderedComputed=_exports.observer=_exports.numbers$1=_exports.numbers=_exports.nothing$1=_exports.nothing=_exports.notEqual$1=_exports.notEqual=_exports.nodeMarker=_exports.noChange$1=_exports.noChange=_exports.microTask=_exports.markerRegex=_exports.marker=_exports.legacyWarnings=_exports.legacyUndefined=_exports.legacyOptimizations=_exports.legacyNoObservedAttributes=_exports.lastAttributeNameRegex=_exports.isTemplatePartActive$1=_exports.isTemplatePartActive=_exports.isPrimitive$1=_exports.isPrimitive=_exports.isNodeElement=_exports.isIterable$1=_exports.isIterable=_exports.isDirective$1=_exports.isDirective=_exports.isDeep=_exports.isCEPolyfill=void 0;meta=babelHelpers.interopRequireWildcard(meta);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){keys.push.apply(keys,Object.getOwnPropertySymbols(object))}if(enumerableOnly)keys=keys.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});return keys}function _objectSpread(target){for(var i=1,source;i<arguments.length;i++){source=null!=arguments[i]?arguments[i]:{};if(i%2){ownKeys(source,!0).forEach(function(key){babelHelpers.defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var cssClasses={ANIMATE:"mdc-drawer--animate",CLOSING:"mdc-drawer--closing",DISMISSIBLE:"mdc-drawer--dismissible",MODAL:"mdc-drawer--modal",OPEN:"mdc-drawer--open",OPENING:"mdc-drawer--opening",ROOT:"mdc-drawer"};_exports.cssClasses=cssClasses;var strings={APP_CONTENT_SELECTOR:".mdc-drawer-app-content",CLOSE_EVENT:"MDCDrawer:closed",OPEN_EVENT:"MDCDrawer:opened",SCRIM_SELECTOR:".mdc-drawer-scrim"};_exports.strings=strings;var constants={cssClasses:cssClasses,strings:strings};/*! *****************************************************************************
   Copyright (c) Microsoft Corporation.
   
   Permission to use, copy, modify, and/or distribute this software for any
   purpose with or without fee is hereby granted.
   
   THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
   REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
   AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
   INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
   LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
   OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
   PERFORMANCE OF THIS SOFTWARE.
   ***************************************************************************** */ /* global Reflect, Promise */_exports.$constants=constants;var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p]};return extendStatics(d,b)};function __extends(d,b){extendStatics(d,b);function __(){this.constructor=d}d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)}var __assign=function(){_exports.__assign$5=__assign=Object.assign||function __assign(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p))t[p]=s[p]}return t};return __assign.apply(this,arguments)};_exports.__assign$5=__assign;function __rest(s,e){var t={};for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p)&&0>e.indexOf(p))t[p]=s[p];if(null!=s&&"function"===typeof Object.getOwnPropertySymbols)for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(0>e.indexOf(p[i])&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]]}return t}function __decorate(decorators,target,key,desc){var c=arguments.length,r=3>c?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;0<=i;i--)if(d=decorators[i])r=(3>c?d(r):3<c?d(target,key,r):d(target,key))||r;return 3<c&&r&&Object.defineProperty(target,key,r),r}function __param(paramIndex,decorator){return function(target,key){decorator(target,key,paramIndex)}}function __metadata(metadataKey,metadataValue){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(metadataKey,metadataValue)}function __awaiter(thisArg,_arguments,P,generator){function adopt(value){return value instanceof P?value:new P(function(resolve){resolve(value)})}return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value))}catch(e){reject(e)}}function rejected(value){try{step(generator["throw"](value))}catch(e){reject(e)}}function step(result){result.done?resolve(result.value):adopt(result.value).then(fulfilled,rejected)}step((generator=generator.apply(thisArg,_arguments||[])).next())})}function __generator(thisArg,body){var _={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]},f,y,t,g;return g={next:verb(0),throw:verb(1),return:verb(2)},"function"===typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return step([n,v])}}function step(op){if(f)throw new TypeError("Generator is already executing.");while(_)try{if(f=1,y&&(t=2&op[0]?y["return"]:op[0]?y["throw"]||((t=y["return"])&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;if(y=0,t)op=[2&op[0],t.value];switch(op[0]){case 0:case 1:t=op;break;case 4:_.label++;return{value:op[1],done:!1};case 5:_.label++;y=op[1];op=[0];continue;case 7:op=_.ops.pop();_.trys.pop();continue;default:if(!(t=_.trys,t=0<t.length&&t[t.length-1])&&(6===op[0]||2===op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1];t=op;break}if(t&&_.label<t[2]){_.label=t[2];_.ops.push(op);break}if(t[2])_.ops.pop();_.trys.pop();continue;}op=body.call(thisArg,_)}catch(e){op=[6,e];y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}}function __createBinding(o,m,k,k2){if(k2===void 0)k2=k;o[k2]=m[k]}function __exportStar(m,exports){for(var p in m)if("default"!==p&&!exports.hasOwnProperty(p))exports[p]=m[p]}function __values(o){var s="function"===typeof Symbol&&Symbol.iterator,m=s&&o[s],i=0;if(m)return m.call(o);if(o&&"number"===typeof o.length)return{next:function(){if(o&&i>=o.length)o=void 0;return{value:o&&o[i++],done:!o}}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.")}function __read(o,n){var m="function"===typeof Symbol&&o[Symbol.iterator];if(!m)return o;var i=m.call(o),r,ar=[],e;try{while((void 0===n||0<n--)&&!(r=i.next()).done)ar.push(r.value)}catch(error){e={error:error}}finally{try{if(r&&!r.done&&(m=i["return"]))m.call(i)}finally{if(e)throw e.error}}return ar}function __spread(){for(var ar=[],i=0;i<arguments.length;i++)ar=ar.concat(__read(arguments[i]));return ar}function __spreadArrays(){for(var s=0,i=0,il=arguments.length;i<il;i++)s+=arguments[i].length;for(var r=Array(s),k=0,i=0;i<il;i++)for(var a=arguments[i],j=0,jl=a.length;j<jl;j++,k++)r[k]=a[j];return r};function __await(v){return this instanceof __await?(this.v=v,this):new __await(v)}function __asyncGenerator(thisArg,_arguments,generator){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var g=generator.apply(thisArg,_arguments||[]),i,q=[];return i={},verb("next"),verb("throw"),verb("return"),i[Symbol.asyncIterator]=function(){return this},i;function verb(n){if(g[n])i[n]=function(v){return new Promise(function(a,b){1<q.push([n,v,a,b])||resume(n,v)})}}function resume(n,v){try{step(g[n](v))}catch(e){settle(q[0][3],e)}}function step(r){r.value instanceof __await?Promise.resolve(r.value.v).then(fulfill,reject):settle(q[0][2],r)}function fulfill(value){resume("next",value)}function reject(value){resume("throw",value)}function settle(f,v){if(f(v),q.shift(),q.length)resume(q[0][0],q[0][1])}}function __asyncDelegator(o){var i,p;return i={},verb("next"),verb("throw",function(e){throw e}),verb("return"),i[Symbol.iterator]=function(){return this},i;function verb(n,f){i[n]=o[n]?function(v){return(p=!p)?{value:__await(o[n](v)),done:"return"===n}:f?f(v):v}:f}}function __asyncValues(o){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var m=o[Symbol.asyncIterator],i;return m?m.call(o):(o="function"===typeof __values?__values(o):o[Symbol.iterator](),i={},verb("next"),verb("throw"),verb("return"),i[Symbol.asyncIterator]=function(){return this},i);function verb(n){i[n]=o[n]&&function(v){return new Promise(function(resolve,reject){v=o[n](v),settle(resolve,reject,v.done,v.value)})}}function settle(resolve,reject,d,v){Promise.resolve(v).then(function(v){resolve({value:v,done:d})},reject)}}function __makeTemplateObject(cooked,raw){if(Object.defineProperty){Object.defineProperty(cooked,"raw",{value:raw})}else{cooked.raw=raw}return cooked};function __importStar(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)if(Object.hasOwnProperty.call(mod,k))result[k]=mod[k];result.default=mod;return result}function __importDefault(mod){return mod&&mod.__esModule?mod:{default:mod}}function __classPrivateFieldGet(receiver,privateMap){if(!privateMap.has(receiver)){throw new TypeError("attempted to get private field on non-instance")}return privateMap.get(receiver)}function __classPrivateFieldSet(receiver,privateMap,value){if(!privateMap.has(receiver)){throw new TypeError("attempted to set private field on non-instance")}privateMap.set(receiver,value);return value}var tslib_es6={__extends:__extends,get __assign(){return __assign},__rest:__rest,__decorate:__decorate,__param:__param,__metadata:__metadata,__awaiter:__awaiter,__generator:__generator,__createBinding:__createBinding,__exportStar:__exportStar,__values:__values,__read:__read,__spread:__spread,__spreadArrays:__spreadArrays,__await:__await,__asyncGenerator:__asyncGenerator,__asyncDelegator:__asyncDelegator,__asyncValues:__asyncValues,__makeTemplateObject:__makeTemplateObject,__importStar:__importStar,__importDefault:__importDefault,__classPrivateFieldGet:__classPrivateFieldGet,__classPrivateFieldSet:__classPrivateFieldSet};/**
    * @license
    * Copyright 2016 Google Inc.
    *
    * Permission is hereby granted, free of charge, to any person obtaining a copy
    * of this software and associated documentation files (the "Software"), to deal
    * in the Software without restriction, including without limitation the rights
    * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    * copies of the Software, and to permit persons to whom the Software is
    * furnished to do so, subject to the following conditions:
    *
    * The above copyright notice and this permission notice shall be included in
    * all copies or substantial portions of the Software.
    *
    * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    * THE SOFTWARE.
    */_exports.$tslibEs6$5=tslib_es6;var MDCFoundation=/** @class */function(){function MDCFoundation(adapter){if(void 0===adapter){adapter={}}this.adapter=adapter}Object.defineProperty(MDCFoundation,"cssClasses",{get:function(){// Classes extending MDCFoundation should implement this method to return an object which exports every
// CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
return{}},enumerable:!0,configurable:!0});Object.defineProperty(MDCFoundation,"strings",{get:function(){// Classes extending MDCFoundation should implement this method to return an object which exports all
// semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
return{}},enumerable:!0,configurable:!0});Object.defineProperty(MDCFoundation,"numbers",{get:function(){// Classes extending MDCFoundation should implement this method to return an object which exports all
// of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
return{}},enumerable:!0,configurable:!0});Object.defineProperty(MDCFoundation,"defaultAdapter",{get:function(){// Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
// way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
// validation.
return{}},enumerable:!0,configurable:!0});MDCFoundation.prototype.init=function(){// Subclasses should override this method to perform initialization routines (registering events, etc.)
};MDCFoundation.prototype.destroy=function(){// Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
};return MDCFoundation}();_exports.MDCFoundation=_exports.$foundationDefault$2=MDCFoundation;var foundation={MDCFoundation:MDCFoundation,default:MDCFoundation};_exports.$foundation$2=foundation;var MDCDismissibleDrawerFoundation=/** @class */function(_super){__extends(MDCDismissibleDrawerFoundation,_super);function MDCDismissibleDrawerFoundation(adapter){var _this=_super.call(this,__assign(__assign({},MDCDismissibleDrawerFoundation.defaultAdapter),adapter))||this;_this.animationFrame_=0;_this.animationTimer_=0;return _this}Object.defineProperty(MDCDismissibleDrawerFoundation,"strings",{get:function(){return strings},enumerable:!0,configurable:!0});Object.defineProperty(MDCDismissibleDrawerFoundation,"cssClasses",{get:function(){return cssClasses},enumerable:!0,configurable:!0});Object.defineProperty(MDCDismissibleDrawerFoundation,"defaultAdapter",{get:function(){// tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
return{addClass:function(){return void 0},removeClass:function(){return void 0},hasClass:function(){return!1},elementHasClass:function(){return!1},notifyClose:function(){return void 0},notifyOpen:function(){return void 0},saveFocus:function(){return void 0},restoreFocus:function(){return void 0},focusActiveNavigationItem:function(){return void 0},trapFocus:function(){return void 0},releaseFocus:function(){return void 0}};// tslint:enable:object-literal-sort-keys
},enumerable:!0,configurable:!0});MDCDismissibleDrawerFoundation.prototype.destroy=function(){if(this.animationFrame_){cancelAnimationFrame(this.animationFrame_)}if(this.animationTimer_){clearTimeout(this.animationTimer_)}};/**
      * Opens the drawer from the closed state.
      */MDCDismissibleDrawerFoundation.prototype.open=function(){var _this=this;if(this.isOpen()||this.isOpening()||this.isClosing()){return}this.adapter.addClass(cssClasses.OPEN);this.adapter.addClass(cssClasses.ANIMATE);// Wait a frame once display is no longer "none", to establish basis for animation
this.runNextAnimationFrame_(function(){_this.adapter.addClass(cssClasses.OPENING)});this.adapter.saveFocus()};/**
      * Closes the drawer from the open state.
      */MDCDismissibleDrawerFoundation.prototype.close=function(){if(!this.isOpen()||this.isOpening()||this.isClosing()){return}this.adapter.addClass(cssClasses.CLOSING)};/**
      * Returns true if the drawer is in the open position.
      * @return true if drawer is in open state.
      */MDCDismissibleDrawerFoundation.prototype.isOpen=function(){return this.adapter.hasClass(cssClasses.OPEN)};/**
      * Returns true if the drawer is animating open.
      * @return true if drawer is animating open.
      */MDCDismissibleDrawerFoundation.prototype.isOpening=function(){return this.adapter.hasClass(cssClasses.OPENING)||this.adapter.hasClass(cssClasses.ANIMATE)};/**
      * Returns true if the drawer is animating closed.
      * @return true if drawer is animating closed.
      */MDCDismissibleDrawerFoundation.prototype.isClosing=function(){return this.adapter.hasClass(cssClasses.CLOSING)};/**
      * Keydown handler to close drawer when key is escape.
      */MDCDismissibleDrawerFoundation.prototype.handleKeydown=function(evt){var keyCode=evt.keyCode,key=evt.key,isEscape="Escape"===key||27===keyCode;if(isEscape){this.close()}};/**
      * Handles the `transitionend` event when the drawer finishes opening/closing.
      */MDCDismissibleDrawerFoundation.prototype.handleTransitionEnd=function(evt){var OPENING=cssClasses.OPENING,CLOSING=cssClasses.CLOSING,OPEN=cssClasses.OPEN,ANIMATE=cssClasses.ANIMATE,ROOT=cssClasses.ROOT,isRootElement=this.isElement_(evt.target)&&this.adapter.elementHasClass(evt.target,ROOT);// In Edge, transitionend on ripple pseudo-elements yields a target without classList, so check for Element first.
if(!isRootElement){return}if(this.isClosing()){this.adapter.removeClass(OPEN);this.closed_();this.adapter.restoreFocus();this.adapter.notifyClose()}else{this.adapter.focusActiveNavigationItem();this.opened_();this.adapter.notifyOpen()}this.adapter.removeClass(ANIMATE);this.adapter.removeClass(OPENING);this.adapter.removeClass(CLOSING)};/**
      * Extension point for when drawer finishes open animation.
      */MDCDismissibleDrawerFoundation.prototype.opened_=function(){};// tslint:disable-line:no-empty
/**
   * Extension point for when drawer finishes close animation.
   */MDCDismissibleDrawerFoundation.prototype.closed_=function(){};// tslint:disable-line:no-empty
/**
   * Runs the given logic on the next animation frame, using setTimeout to factor in Firefox reflow behavior.
   */MDCDismissibleDrawerFoundation.prototype.runNextAnimationFrame_=function(callback){var _this=this;cancelAnimationFrame(this.animationFrame_);this.animationFrame_=requestAnimationFrame(function(){_this.animationFrame_=0;clearTimeout(_this.animationTimer_);_this.animationTimer_=setTimeout(callback,0)})};MDCDismissibleDrawerFoundation.prototype.isElement_=function(element){// In Edge, transitionend on ripple pseudo-elements yields a target without classList.
return!!element.classList};return MDCDismissibleDrawerFoundation}(MDCFoundation);_exports.MDCDismissibleDrawerFoundation=_exports.$foundationDefault=MDCDismissibleDrawerFoundation;var foundation$1={MDCDismissibleDrawerFoundation:MDCDismissibleDrawerFoundation,default:MDCDismissibleDrawerFoundation};_exports.$foundation=foundation$1;var MDCModalDrawerFoundation=/** @class */function(_super){__extends(MDCModalDrawerFoundation,_super);function MDCModalDrawerFoundation(){return null!==_super&&_super.apply(this,arguments)||this}/**
     * Handles click event on scrim.
     */MDCModalDrawerFoundation.prototype.handleScrimClick=function(){this.close()};/**
      * Called when drawer finishes open animation.
      */MDCModalDrawerFoundation.prototype.opened_=function(){this.adapter.trapFocus()};/**
      * Called when drawer finishes close animation.
      */MDCModalDrawerFoundation.prototype.closed_=function(){this.adapter.releaseFocus()};return MDCModalDrawerFoundation}(MDCDismissibleDrawerFoundation);_exports.MDCModalDrawerFoundation=_exports.$foundationDefault$1=MDCModalDrawerFoundation;var foundation$2={MDCModalDrawerFoundation:MDCModalDrawerFoundation,default:MDCModalDrawerFoundation};/**
    * @license
    * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    * This code may only be used under the BSD style license found at
    * http://polymer.github.io/LICENSE.txt
    * The complete set of authors may be found at
    * http://polymer.github.io/AUTHORS.txt
    * The complete set of contributors may be found at
    * http://polymer.github.io/CONTRIBUTORS.txt
    * Code distributed by Google as part of the polymer project is also
    * subject to an additional IP rights grant found at
    * http://polymer.github.io/PATENTS.txt
    */ /**
        * True if the custom elements polyfill is in use.
        */_exports.$foundation$1=foundation$2;const isCEPolyfill="undefined"!==typeof window&&null!=window.customElements&&window.customElements.polyfillWrapFlushCallback!==void 0;/**
                                                                                                                                                              * Reparents nodes, starting from `start` (inclusive) to `end` (exclusive),
                                                                                                                                                              * into another container (could be the same container), before `before`. If
                                                                                                                                                              * `before` is null, it appends the nodes to the container.
                                                                                                                                                              */_exports.isCEPolyfill=isCEPolyfill;const reparentNodes=(container,start,end=null,before=null)=>{while(start!==end){const n=start.nextSibling;container.insertBefore(start,before);start=n}};/**
    * Removes nodes, starting from `start` (inclusive) to `end` (exclusive), from
    * `container`.
    */_exports.reparentNodes$1=_exports.reparentNodes=reparentNodes;const removeNodes=(container,start,end=null)=>{while(start!==end){const n=start.nextSibling;container.removeChild(start);start=n}};_exports.removeNodes$1=_exports.removeNodes=removeNodes;var dom={isCEPolyfill:isCEPolyfill,reparentNodes:reparentNodes,removeNodes:removeNodes};/**
    * @license
    * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    * This code may only be used under the BSD style license found at
    * http://polymer.github.io/LICENSE.txt
    * The complete set of authors may be found at
    * http://polymer.github.io/AUTHORS.txt
    * The complete set of contributors may be found at
    * http://polymer.github.io/CONTRIBUTORS.txt
    * Code distributed by Google as part of the polymer project is also
    * subject to an additional IP rights grant found at
    * http://polymer.github.io/PATENTS.txt
    */ /**
        * An expression marker with embedded unique key to avoid collision with
        * possible text in templates.
        */_exports.$dom=dom;const marker=`{{lit-${(Math.random()+"").slice(2)}}}`;/**
                                                                    * An expression marker used text-positions, multi-binding attributes, and
                                                                    * attributes with markup-like text values.
                                                                    */_exports.marker=marker;const nodeMarker=`<!--${marker}-->`;_exports.nodeMarker=nodeMarker;const markerRegex=new RegExp(`${marker}|${nodeMarker}`);/**
                                                                   * Suffix appended to all bound attribute names.
                                                                   */_exports.markerRegex=markerRegex;const boundAttributeSuffix="$lit$";/**
                                              * An updatable Template that tracks the location of dynamic parts.
                                              */_exports.boundAttributeSuffix=boundAttributeSuffix;class Template{constructor(result,element){this.parts=[];this.element=element;const nodesToRemove=[],stack=[],walker=document.createTreeWalker(element.content,133/* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */,null,!1);// Keeps track of the last index associated with a part. We try to delete
// unnecessary nodes, but we never want to associate two different parts
// to the same index. They must have a constant node between.
let lastPartIndex=0,index=-1,partIndex=0;const{strings,values:{length}}=result;while(partIndex<length){const node=walker.nextNode();if(null===node){// We've exhausted the content inside a nested template element.
// Because we still have parts (the outer for-loop), we know:
// - There is a template in the stack
// - The walker will find a nextNode outside the template
walker.currentNode=stack.pop();continue}index++;if(1===node.nodeType/* Node.ELEMENT_NODE */){if(node.hasAttributes()){const attributes=node.attributes,{length}=attributes;// Per
// https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
// attributes are not guaranteed to be returned in document order.
// In particular, Edge/IE can return them out of order, so we cannot
// assume a correspondence between part index and attribute index.
let count=0;for(let i=0;i<length;i++){if(endsWith(attributes[i].name,boundAttributeSuffix)){count++}}while(0<count--){// Get the template literal section leading up to the first
// expression in this attribute
const stringForPart=strings[partIndex],name=lastAttributeNameRegex.exec(stringForPart)[2],attributeLookupName=name.toLowerCase()+boundAttributeSuffix,attributeValue=node.getAttribute(attributeLookupName);// Find the attribute name
node.removeAttribute(attributeLookupName);const statics=attributeValue.split(markerRegex);this.parts.push({type:"attribute",index,name,strings:statics});partIndex+=statics.length-1}}if("TEMPLATE"===node.tagName){stack.push(node);walker.currentNode=node.content}}else if(3===node.nodeType/* Node.TEXT_NODE */){const data=node.data;if(0<=data.indexOf(marker)){const parent=node.parentNode,strings=data.split(markerRegex),lastIndex=strings.length-1;// Generate a new text node for each literal section
// These nodes are also used as the markers for node parts
for(let i=0;i<lastIndex;i++){let insert,s=strings[i];if(""===s){insert=createMarker()}else{const match=lastAttributeNameRegex.exec(s);if(null!==match&&endsWith(match[2],boundAttributeSuffix)){s=s.slice(0,match.index)+match[1]+match[2].slice(0,-boundAttributeSuffix.length)+match[3]}insert=document.createTextNode(s)}parent.insertBefore(insert,node);this.parts.push({type:"node",index:++index})}// If there's no text, we must insert a comment to mark our place.
// Else, we can trust it will stick around after cloning.
if(""===strings[lastIndex]){parent.insertBefore(createMarker(),node);nodesToRemove.push(node)}else{node.data=strings[lastIndex]}// We have a part for each match found
partIndex+=lastIndex}}else if(8===node.nodeType/* Node.COMMENT_NODE */){if(node.data===marker){const parent=node.parentNode;// Add a new marker node to be the startNode of the Part if any of
// the following are true:
//  * We don't have a previousSibling
//  * The previousSibling is already the start of a previous part
if(null===node.previousSibling||index===lastPartIndex){index++;parent.insertBefore(createMarker(),node)}lastPartIndex=index;this.parts.push({type:"node",index});// If we don't have a nextSibling, keep this node so we have an end.
// Else, we can remove it to save future costs.
if(null===node.nextSibling){node.data=""}else{nodesToRemove.push(node);index--}partIndex++}else{let i=-1;while(-1!==(i=node.data.indexOf(marker,i+1))){// Comment node has a binding marker inside, make an inactive part
// The binding won't work, but subsequent bindings will
// TODO (justinfagnani): consider whether it's even worth it to
// make bindings in comments work
this.parts.push({type:"node",index:-1});partIndex++}}}}// Remove text binding nodes after the walk to not disturb the TreeWalker
for(const n of nodesToRemove){n.parentNode.removeChild(n)}}}_exports.Template$1=_exports.Template=Template;const endsWith=(str,suffix)=>{const index=str.length-suffix.length;return 0<=index&&str.slice(index)===suffix},isTemplatePartActive=part=>-1!==part.index;_exports.isTemplatePartActive$1=_exports.isTemplatePartActive=isTemplatePartActive;// Allows `document.createComment('')` to be renamed for a
// small manual size-savings.
const createMarker=()=>document.createComment("");/**
                                                               * This regex extracts the attribute name preceding an attribute-position
                                                               * expression. It does this by matching the syntax allowed for attributes
                                                               * against the string literal directly preceding the expression, assuming that
                                                               * the expression is in an attribute-value position.
                                                               *
                                                               * See attributes in the HTML spec:
                                                               * https://www.w3.org/TR/html5/syntax.html#elements-attributes
                                                               *
                                                               * " \x09\x0a\x0c\x0d" are HTML space characters:
                                                               * https://www.w3.org/TR/html5/infrastructure.html#space-characters
                                                               *
                                                               * "\0-\x1F\x7F-\x9F" are Unicode control characters, which includes every
                                                               * space character except " ".
                                                               *
                                                               * So an attribute is:
                                                               *  * The name: any character except a control character, space character, ('),
                                                               *    ("), ">", "=", or "/"
                                                               *  * Followed by zero or more space characters
                                                               *  * Followed by "="
                                                               *  * Followed by zero or more space characters
                                                               *  * Followed by:
                                                               *    * Any character except space, ('), ("), "<", ">", "=", (`), or
                                                               *    * (") then any non-("), or
                                                               *    * (') then any non-(')
                                                               */_exports.createMarker$1=_exports.createMarker=createMarker;const lastAttributeNameRegex=// eslint-disable-next-line no-control-regex
/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;_exports.lastAttributeNameRegex=lastAttributeNameRegex;var template={marker:marker,nodeMarker:nodeMarker,markerRegex:markerRegex,boundAttributeSuffix:boundAttributeSuffix,Template:Template,isTemplatePartActive:isTemplatePartActive,createMarker:createMarker,lastAttributeNameRegex:lastAttributeNameRegex};_exports.$template=template;const walkerNodeFilter=133/* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */;/**
                                                                            * Removes the list of nodes from a Template safely. In addition to removing
                                                                            * nodes from the Template, the Template part indices are updated to match
                                                                            * the mutated Template DOM.
                                                                            *
                                                                            * As the template is walked the removal state is tracked and
                                                                            * part indices are adjusted as needed.
                                                                            *
                                                                            * div
                                                                            *   div#1 (remove) <-- start removing (removing node is div#1)
                                                                            *     div
                                                                            *       div#2 (remove)  <-- continue removing (removing node is still div#1)
                                                                            *         div
                                                                            * div <-- stop removing since previous sibling is the removing node (div#1,
                                                                            * removed 4 nodes)
                                                                            */function removeNodesFromTemplate(template,nodesToRemove){const{element:{content},parts}=template,walker=document.createTreeWalker(content,walkerNodeFilter,null,!1);let partIndex=nextActiveIndexInTemplateParts(parts),part=parts[partIndex],nodeIndex=-1,removeCount=0;const nodesToRemoveInTemplate=[];let currentRemovingNode=null;while(walker.nextNode()){nodeIndex++;const node=walker.currentNode;// End removal if stepped past the removing node
if(node.previousSibling===currentRemovingNode){currentRemovingNode=null}// A node to remove was found in the template
if(nodesToRemove.has(node)){nodesToRemoveInTemplate.push(node);// Track node we're removing
if(null===currentRemovingNode){currentRemovingNode=node}}// When removing, increment count by which to adjust subsequent part indices
if(null!==currentRemovingNode){removeCount++}while(part!==void 0&&part.index===nodeIndex){// If part is in a removed node deactivate it by setting index to -1 or
// adjust the index as needed.
part.index=null!==currentRemovingNode?-1:part.index-removeCount;// go to the next active part.
partIndex=nextActiveIndexInTemplateParts(parts,partIndex);part=parts[partIndex]}}nodesToRemoveInTemplate.forEach(n=>n.parentNode.removeChild(n))}const countNodes=node=>{let count=11===node.nodeType/* Node.DOCUMENT_FRAGMENT_NODE */?0:1;const walker=document.createTreeWalker(node,walkerNodeFilter,null,!1);while(walker.nextNode()){count++}return count},nextActiveIndexInTemplateParts=(parts,startIndex=-1)=>{for(let i=startIndex+1;i<parts.length;i++){const part=parts[i];if(isTemplatePartActive(part)){return i}}return-1};/**
    * Inserts the given node into the Template, optionally before the given
    * refNode. In addition to inserting the node into the Template, the Template
    * part indices are updated to match the mutated Template DOM.
    */function insertNodeIntoTemplate(template,node,refNode=null){const{element:{content},parts}=template;// If there's no refNode, then put node at end of template.
// No part indices need to be shifted in this case.
if(null===refNode||refNode===void 0){content.appendChild(node);return}const walker=document.createTreeWalker(content,walkerNodeFilter,null,!1);let partIndex=nextActiveIndexInTemplateParts(parts),insertCount=0,walkerIndex=-1;while(walker.nextNode()){walkerIndex++;const walkerNode=walker.currentNode;if(walkerNode===refNode){insertCount=countNodes(node);refNode.parentNode.insertBefore(node,refNode)}while(-1!==partIndex&&parts[partIndex].index===walkerIndex){// If we've inserted the node, simply adjust all subsequent parts
if(0<insertCount){while(-1!==partIndex){parts[partIndex].index+=insertCount;partIndex=nextActiveIndexInTemplateParts(parts,partIndex)}return}partIndex=nextActiveIndexInTemplateParts(parts,partIndex)}}}var modifyTemplate={removeNodesFromTemplate:removeNodesFromTemplate,insertNodeIntoTemplate:insertNodeIntoTemplate};/**
    * @license
    * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    * This code may only be used under the BSD style license found at
    * http://polymer.github.io/LICENSE.txt
    * The complete set of authors may be found at
    * http://polymer.github.io/AUTHORS.txt
    * The complete set of contributors may be found at
    * http://polymer.github.io/CONTRIBUTORS.txt
    * Code distributed by Google as part of the polymer project is also
    * subject to an additional IP rights grant found at
    * http://polymer.github.io/PATENTS.txt
    */_exports.$modifyTemplate=modifyTemplate;const directives=new WeakMap,directive=f=>(...args)=>{const d=f(...args);directives.set(d,!0);return d};/**
                                   * Brands a function as a directive factory function so that lit-html will call
                                   * the function during template rendering, rather than passing as a value.
                                   *
                                   * A _directive_ is a function that takes a Part as an argument. It has the
                                   * signature: `(part: Part) => void`.
                                   *
                                   * A directive _factory_ is a function that takes arguments for data and
                                   * configuration and returns a directive. Users of directive usually refer to
                                   * the directive factory as the directive. For example, "The repeat directive".
                                   *
                                   * Usually a template author will invoke a directive factory in their template
                                   * with relevant arguments, which will then return a directive function.
                                   *
                                   * Here's an example of using the `repeat()` directive factory that takes an
                                   * array and a function to render an item:
                                   *
                                   * ```js
                                   * html`<ul><${repeat(items, (item) => html`<li>${item}</li>`)}</ul>`
                                   * ```
                                   *
                                   * When `repeat` is invoked, it returns a directive function that closes over
                                   * `items` and the template function. When the outer template is rendered, the
                                   * return directive function is called with the Part for the expression.
                                   * `repeat` then performs it's custom logic to render multiple items.
                                   *
                                   * @param f The directive factory function. Must be a function that returns a
                                   * function of the signature `(part: Part) => void`. The returned function will
                                   * be called with the part object.
                                   *
                                   * @example
                                   *
                                   * import {directive, html} from 'lit-html';
                                   *
                                   * const immutable = directive((v) => (part) => {
                                   *   if (part.value !== v) {
                                   *     part.setValue(v)
                                   *   }
                                   * });
                                   */_exports.directive$1=_exports.directive=directive;const isDirective=o=>{return"function"===typeof o&&directives.has(o)};_exports.isDirective$1=_exports.isDirective=isDirective;var directive$1={directive:directive,isDirective:isDirective};/**
    * @license
    * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
    * This code may only be used under the BSD style license found at
    * http://polymer.github.io/LICENSE.txt
    * The complete set of authors may be found at
    * http://polymer.github.io/AUTHORS.txt
    * The complete set of contributors may be found at
    * http://polymer.github.io/CONTRIBUTORS.txt
    * Code distributed by Google as part of the polymer project is also
    * subject to an additional IP rights grant found at
    * http://polymer.github.io/PATENTS.txt
    */ /**
        * A sentinel value that signals that a value was handled by a directive and
        * should not be written to the DOM.
        */_exports.$directive=directive$1;const noChange={};/**
                             * A sentinel value that signals a NodePart to fully clear its content.
                             */_exports.noChange$1=_exports.noChange=noChange;const nothing={};_exports.nothing$1=_exports.nothing=nothing;var part={noChange:noChange,nothing:nothing};_exports.$part=part;class TemplateInstance{constructor(template,processor,options){this.__parts=[];this.template=template;this.processor=processor;this.options=options}update(values){let i=0;for(const part of this.__parts){if(part!==void 0){part.setValue(values[i])}i++}for(const part of this.__parts){if(part!==void 0){part.commit()}}}_clone(){// There are a number of steps in the lifecycle of a template instance's
// DOM fragment:
//  1. Clone - create the instance fragment
//  2. Adopt - adopt into the main document
//  3. Process - find part markers and create parts
//  4. Upgrade - upgrade custom elements
//  5. Update - set node, attribute, property, etc., values
//  6. Connect - connect to the document. Optional and outside of this
//     method.
//
// We have a few constraints on the ordering of these steps:
//  * We need to upgrade before updating, so that property values will pass
//    through any property setters.
//  * We would like to process before upgrading so that we're sure that the
//    cloned fragment is inert and not disturbed by self-modifying DOM.
//  * We want custom elements to upgrade even in disconnected fragments.
//
// Given these constraints, with full custom elements support we would
// prefer the order: Clone, Process, Adopt, Upgrade, Update, Connect
//
// But Safari does not implement CustomElementRegistry#upgrade, so we
// can not implement that order and still have upgrade-before-update and
// upgrade disconnected fragments. So we instead sacrifice the
// process-before-upgrade constraint, since in Custom Elements v1 elements
// must not modify their light DOM in the constructor. We still have issues
// when co-existing with CEv0 elements like Polymer 1, and with polyfills
// that don't strictly adhere to the no-modification rule because shadow
// DOM, which may be created in the constructor, is emulated by being placed
// in the light DOM.
//
// The resulting order is on native is: Clone, Adopt, Upgrade, Process,
// Update, Connect. document.importNode() performs Clone, Adopt, and Upgrade
// in one step.
//
// The Custom Elements v1 polyfill supports upgrade(), so the order when
// polyfilled is the more ideal: Clone, Process, Adopt, Upgrade, Update,
// Connect.
const fragment=isCEPolyfill?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),stack=[],parts=this.template.parts,walker=document.createTreeWalker(fragment,133/* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */,null,!1);let partIndex=0,nodeIndex=0,part,node=walker.nextNode();// Loop through all the nodes and parts of a template
while(partIndex<parts.length){part=parts[partIndex];if(!isTemplatePartActive(part)){this.__parts.push(void 0);partIndex++;continue}// Progress the tree walker until we find our next part's node.
// Note that multiple parts may share the same node (attribute parts
// on a single element), so this loop may not run at all.
while(nodeIndex<part.index){nodeIndex++;if("TEMPLATE"===node.nodeName){stack.push(node);walker.currentNode=node.content}if(null===(node=walker.nextNode())){// We've exhausted the content inside a nested template element.
// Because we still have parts (the outer for-loop), we know:
// - There is a template in the stack
// - The walker will find a nextNode outside the template
walker.currentNode=stack.pop();node=walker.nextNode()}}// We've arrived at our part's node.
if("node"===part.type){const part=this.processor.handleTextExpression(this.options);part.insertAfterNode(node.previousSibling);this.__parts.push(part)}else{this.__parts.push(...this.processor.handleAttributeExpressions(node,part.name,part.strings,this.options))}partIndex++}if(isCEPolyfill){document.adoptNode(fragment);customElements.upgrade(fragment)}return fragment}}_exports.TemplateInstance$1=_exports.TemplateInstance=TemplateInstance;var templateInstance={TemplateInstance:TemplateInstance};_exports.$templateInstance=templateInstance;const policy=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:s=>s}),commentMarker=` ${marker} `;/**
                                      * The return type of `html`, which holds a Template and the values from
                                      * interpolated expressions.
                                      */class TemplateResult{constructor(strings,values,type,processor){this.strings=strings;this.values=values;this.type=type;this.processor=processor}/**
     * Returns a string of HTML used to create a `<template>` element.
     */getHTML(){const l=this.strings.length-1;let html="",isCommentBinding=!1;for(let i=0;i<l;i++){const s=this.strings[i],commentOpen=s.lastIndexOf("<!--");// For each binding we want to determine the kind of marker to insert
// into the template source before it's parsed by the browser's HTML
// parser. The marker type is based on whether the expression is in an
// attribute, text, or comment position.
//   * For node-position bindings we insert a comment with the marker
//     sentinel as its text content, like <!--{{lit-guid}}-->.
//   * For attribute bindings we insert just the marker sentinel for the
//     first binding, so that we support unquoted attribute bindings.
//     Subsequent bindings can use a comment marker because multi-binding
//     attributes must be quoted.
//   * For comment bindings we insert just the marker sentinel so we don't
//     close the comment.
//
// The following code scans the template source, but is *not* an HTML
// parser. We don't need to track the tree structure of the HTML, only
// whether a binding is inside a comment, and if not, if it appears to be
// the first binding in an attribute.
// We're in comment position if we have a comment open with no following
// comment close. Because <-- can appear in an attribute value there can
// be false positives.
isCommentBinding=(-1<commentOpen||isCommentBinding)&&-1===s.indexOf("-->",commentOpen+1);// Check to see if we have an attribute-like sequence preceding the
// expression. This can match "name=value" like structures in text,
// comments, and attribute values, so there can be false-positives.
const attributeMatch=lastAttributeNameRegex.exec(s);if(null===attributeMatch){// We're only in this branch if we don't have a attribute-like
// preceding sequence. For comments, this guards against unusual
// attribute values like <div foo="<!--${'bar'}">. Cases like
// <!-- foo=${'bar'}--> are handled correctly in the attribute branch
// below.
html+=s+(isCommentBinding?commentMarker:nodeMarker)}else{// For attributes we use just a marker sentinel, and also append a
// $lit$ suffix to the name to opt-out of attribute-specific parsing
// that IE and Edge do for style and certain SVG attributes.
html+=s.substr(0,attributeMatch.index)+attributeMatch[1]+attributeMatch[2]+boundAttributeSuffix+attributeMatch[3]+marker}}html+=this.strings[l];return html}getTemplateElement(){const template=document.createElement("template");let value=this.getHTML();if(policy!==void 0){// this is secure because `this.strings` is a TemplateStringsArray.
// TODO: validate this when
// https://github.com/tc39/proposal-array-is-template-object is
// implemented.
value=policy.createHTML(value)}template.innerHTML=value;return template}}/**
   * A TemplateResult for SVG fragments.
   *
   * This class wraps HTML in an `<svg>` tag in order to parse its contents in the
   * SVG namespace, then modifies the template to remove the `<svg>` tag so that
   * clones only container the original fragment.
   */_exports.TemplateResult$3=_exports.TemplateResult$2=_exports.TemplateResult$1=_exports.TemplateResult=TemplateResult;class SVGTemplateResult extends TemplateResult{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const template=super.getTemplateElement(),content=template.content,svgElement=content.firstChild;content.removeChild(svgElement);reparentNodes(content,svgElement.firstChild);return template}}_exports.SVGTemplateResult$2=_exports.SVGTemplateResult$1=_exports.SVGTemplateResult=SVGTemplateResult;var templateResult={TemplateResult:TemplateResult,SVGTemplateResult:SVGTemplateResult};_exports.$templateResult=templateResult;const isPrimitive=value=>{return null===value||!("object"===typeof value||"function"===typeof value)};_exports.isPrimitive$1=_exports.isPrimitive=isPrimitive;const isIterable=value=>{return Array.isArray(value)||// eslint-disable-next-line @typescript-eslint/no-explicit-any
!!(value&&value[Symbol.iterator])};/**
    * Writes attribute values to the DOM for a group of AttributeParts bound to a
    * single attribute. The value is only set once even if there are multiple parts
    * for an attribute.
    */_exports.isIterable$1=_exports.isIterable=isIterable;class AttributeCommitter{constructor(element,name,strings){this.dirty=!0;this.element=element;this.name=name;this.strings=strings;this.parts=[];for(let i=0;i<strings.length-1;i++){this.parts[i]=this._createPart()}}/**
     * Creates a single part. Override this to create a differnt type of part.
     */_createPart(){return new AttributePart(this)}_getValue(){const strings=this.strings,l=strings.length-1,parts=this.parts;// If we're assigning an attribute via syntax like:
//    attr="${foo}"  or  attr=${foo}
// but not
//    attr="${foo} ${bar}" or attr="${foo} baz"
// then we don't want to coerce the attribute value into one long
// string. Instead we want to just return the value itself directly,
// so that sanitizeDOMValue can get the actual value rather than
// String(value)
// The exception is if v is an array, in which case we do want to smash
// it together into a string without calling String() on the array.
//
// This also allows trusted values (when using TrustedTypes) being
// assigned to DOM sinks without being stringified in the process.
if(1===l&&""===strings[0]&&""===strings[1]){const v=parts[0].value;if("symbol"===typeof v){return v+""}if("string"===typeof v||!isIterable(v)){return v}}let text="";for(let i=0;i<l;i++){text+=strings[i];const part=parts[i];if(part!==void 0){const v=part.value;if(isPrimitive(v)||!isIterable(v)){text+="string"===typeof v?v:v+""}else{for(const t of v){text+="string"===typeof t?t:t+""}}}}text+=strings[l];return text}commit(){if(this.dirty){this.dirty=!1;this.element.setAttribute(this.name,this._getValue())}}}/**
   * A Part that controls all or part of an attribute value.
   */_exports.AttributeCommitter$1=_exports.AttributeCommitter=AttributeCommitter;class AttributePart{constructor(committer){this.value=void 0;this.committer=committer}setValue(value){if(value!==noChange&&(!isPrimitive(value)||value!==this.value)){this.value=value;// If the value is a not a directive, dirty the committer so that it'll
// call setAttribute. If the value is a directive, it'll dirty the
// committer if it calls setValue().
if(!isDirective(value)){this.committer.dirty=!0}}}commit(){while(isDirective(this.value)){const directive=this.value;this.value=noChange;directive(this)}if(this.value===noChange){return}this.committer.commit()}}/**
   * A Part that controls a location within a Node tree. Like a Range, NodePart
   * has start and end locations and can set and update the Nodes between those
   * locations.
   *
   * NodeParts support several value types: primitives, Nodes, TemplateResults,
   * as well as arrays and iterables of those types.
   */_exports.AttributePart$1=_exports.AttributePart=AttributePart;class NodePart{constructor(options){this.value=void 0;this.__pendingValue=void 0;this.options=options}/**
     * Appends this part into a container.
     *
     * This part must be empty, as its contents are not automatically moved.
     */appendInto(container){this.startNode=container.appendChild(createMarker());this.endNode=container.appendChild(createMarker())}/**
     * Inserts this part after the `ref` node (between `ref` and `ref`'s next
     * sibling). Both `ref` and its next sibling must be static, unchanging nodes
     * such as those that appear in a literal section of a template.
     *
     * This part must be empty, as its contents are not automatically moved.
     */insertAfterNode(ref){this.startNode=ref;this.endNode=ref.nextSibling}/**
     * Appends this part into a parent part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */appendIntoPart(part){part.__insert(this.startNode=createMarker());part.__insert(this.endNode=createMarker())}/**
     * Inserts this part after the `ref` part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */insertAfterPart(ref){ref.__insert(this.startNode=createMarker());this.endNode=ref.endNode;ref.endNode=this.startNode}setValue(value){this.__pendingValue=value}commit(){if(null===this.startNode.parentNode){return}while(isDirective(this.__pendingValue)){const directive=this.__pendingValue;this.__pendingValue=noChange;directive(this)}const value=this.__pendingValue;if(value===noChange){return}if(isPrimitive(value)){if(value!==this.value){this.__commitText(value)}}else if(value instanceof TemplateResult){this.__commitTemplateResult(value)}else if(value instanceof Node){this.__commitNode(value)}else if(isIterable(value)){this.__commitIterable(value)}else if(value===nothing){this.value=nothing;this.clear()}else{// Fallback, will render the string representation
this.__commitText(value)}}__insert(node){this.endNode.parentNode.insertBefore(node,this.endNode)}__commitNode(value){if(this.value===value){return}this.clear();this.__insert(value);this.value=value}__commitText(value){const node=this.startNode.nextSibling;value=null==value?"":value;// If `value` isn't already a string, we explicitly convert it here in case
// it can't be implicitly converted - i.e. it's a symbol.
const valueAsString="string"===typeof value?value:value+"";if(node===this.endNode.previousSibling&&3===node.nodeType/* Node.TEXT_NODE */){// If we only have a single text node between the markers, we can just
// set its value, rather than replacing it.
// TODO(justinfagnani): Can we just check if this.value is primitive?
node.data=valueAsString}else{this.__commitNode(document.createTextNode(valueAsString))}this.value=value}__commitTemplateResult(value){const template=this.options.templateFactory(value);if(this.value instanceof TemplateInstance&&this.value.template===template){this.value.update(value.values)}else{// Make sure we propagate the template processor from the TemplateResult
// so that we use its syntax extension, etc. The template factory comes
// from the render function options so that it can control template
// caching and preprocessing.
const instance=new TemplateInstance(template,value.processor,this.options),fragment=instance._clone();instance.update(value.values);this.__commitNode(fragment);this.value=instance}}__commitIterable(value){// For an Iterable, we create a new InstancePart per item, then set its
// value to the item. This is a little bit of overhead for every item in
// an Iterable, but it lets us recurse easily and efficiently update Arrays
// of TemplateResults that will be commonly returned from expressions like:
// array.map((i) => html`${i}`), by reusing existing TemplateInstances.
// If _value is an array, then the previous render was of an
// iterable and _value will contain the NodeParts from the previous
// render. If _value is not an array, clear this part and make a new
// array for NodeParts.
if(!Array.isArray(this.value)){this.value=[];this.clear()}// Lets us keep track of how many items we stamped so we can clear leftover
// items from a previous render
const itemParts=this.value;let partIndex=0,itemPart;for(const item of value){// Try to reuse an existing part
itemPart=itemParts[partIndex];// If no existing part, create a new one
if(itemPart===void 0){itemPart=new NodePart(this.options);itemParts.push(itemPart);if(0===partIndex){itemPart.appendIntoPart(this)}else{itemPart.insertAfterPart(itemParts[partIndex-1])}}itemPart.setValue(item);itemPart.commit();partIndex++}if(partIndex<itemParts.length){// Truncate the parts array so _value reflects the current state
itemParts.length=partIndex;this.clear(itemPart&&itemPart.endNode)}}clear(startNode=this.startNode){removeNodes(this.startNode.parentNode,startNode.nextSibling,this.endNode)}}/**
   * Implements a boolean attribute, roughly as defined in the HTML
   * specification.
   *
   * If the value is truthy, then the attribute is present with a value of
   * ''. If the value is falsey, the attribute is removed.
   */_exports.NodePart$1=_exports.NodePart=NodePart;class BooleanAttributePart{constructor(element,name,strings){this.value=void 0;this.__pendingValue=void 0;if(2!==strings.length||""!==strings[0]||""!==strings[1]){throw new Error("Boolean attributes can only contain a single expression")}this.element=element;this.name=name;this.strings=strings}setValue(value){this.__pendingValue=value}commit(){while(isDirective(this.__pendingValue)){const directive=this.__pendingValue;this.__pendingValue=noChange;directive(this)}if(this.__pendingValue===noChange){return}const value=!!this.__pendingValue;if(this.value!==value){if(value){this.element.setAttribute(this.name,"")}else{this.element.removeAttribute(this.name)}this.value=value}this.__pendingValue=noChange}}/**
   * Sets attribute values for PropertyParts, so that the value is only set once
   * even if there are multiple parts for a property.
   *
   * If an expression controls the whole property value, then the value is simply
   * assigned to the property under control. If there are string literals or
   * multiple expressions, then the strings are expressions are interpolated into
   * a string first.
   */_exports.BooleanAttributePart$1=_exports.BooleanAttributePart=BooleanAttributePart;class PropertyCommitter extends AttributeCommitter{constructor(element,name,strings){super(element,name,strings);this.single=2===strings.length&&""===strings[0]&&""===strings[1]}_createPart(){return new PropertyPart(this)}_getValue(){if(this.single){return this.parts[0].value}return super._getValue()}commit(){if(this.dirty){this.dirty=!1;// eslint-disable-next-line @typescript-eslint/no-explicit-any
this.element[this.name]=this._getValue()}}}_exports.PropertyCommitter$1=_exports.PropertyCommitter=PropertyCommitter;class PropertyPart extends AttributePart{}// Detect event listener options support. If the `capture` property is read
// from the options object, then options are supported. If not, then the third
// argument to add/removeEventListener is interpreted as the boolean capture
// value so we should only pass the `capture` property.
_exports.PropertyPart$1=_exports.PropertyPart=PropertyPart;let eventOptionsSupported=!1;// Wrap into an IIFE because MS Edge <= v41 does not support having try/catch
// blocks right into the body of a module
(()=>{try{const options={get capture(){eventOptionsSupported=!0;return!1}};// eslint-disable-next-line @typescript-eslint/no-explicit-any
window.addEventListener("test",options,options);// eslint-disable-next-line @typescript-eslint/no-explicit-any
window.removeEventListener("test",options,options)}catch(_e){// event options not supported
}})();class EventPart{constructor(element,eventName,eventContext){this.value=void 0;this.__pendingValue=void 0;this.element=element;this.eventName=eventName;this.eventContext=eventContext;this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(value){this.__pendingValue=value}commit(){while(isDirective(this.__pendingValue)){const directive=this.__pendingValue;this.__pendingValue=noChange;directive(this)}if(this.__pendingValue===noChange){return}const newListener=this.__pendingValue,oldListener=this.value,shouldRemoveListener=null==newListener||null!=oldListener&&(newListener.capture!==oldListener.capture||newListener.once!==oldListener.once||newListener.passive!==oldListener.passive),shouldAddListener=null!=newListener&&(null==oldListener||shouldRemoveListener);if(shouldRemoveListener){this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options)}if(shouldAddListener){this.__options=getOptions(newListener);this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)}this.value=newListener;this.__pendingValue=noChange}handleEvent(event){if("function"===typeof this.value){this.value.call(this.eventContext||this.element,event)}else{this.value.handleEvent(event)}}}// We copy options because of the inconsistent behavior of browsers when reading
// the third argument of add/removeEventListener. IE11 doesn't support options
// at all. Chrome 41 only reads `capture` if the argument is an object.
_exports.EventPart$1=_exports.EventPart=EventPart;const getOptions=o=>o&&(eventOptionsSupported?{capture:o.capture,passive:o.passive,once:o.once}:o.capture);var parts={isPrimitive:isPrimitive,isIterable:isIterable,AttributeCommitter:AttributeCommitter,AttributePart:AttributePart,NodePart:NodePart,BooleanAttributePart:BooleanAttributePart,PropertyCommitter:PropertyCommitter,PropertyPart:PropertyPart,EventPart:EventPart};_exports.$parts=parts;function templateFactory(result){let templateCache=templateCaches.get(result.type);if(templateCache===void 0){templateCache={stringsArray:new WeakMap,keyString:new Map};templateCaches.set(result.type,templateCache)}let template=templateCache.stringsArray.get(result.strings);if(template!==void 0){return template}// If the TemplateStringsArray is new, generate a key from the strings
// This key is shared between all templates with identical content
const key=result.strings.join(marker);// Check if we already have a Template for this key
template=templateCache.keyString.get(key);if(template===void 0){// If we have not seen this key before, create a new Template
template=new Template(result,result.getTemplateElement());// Cache the Template for this key
templateCache.keyString.set(key,template)}// Cache all future queries for this TemplateStringsArray
templateCache.stringsArray.set(result.strings,template);return template}const templateCaches=new Map;_exports.templateCaches$1=_exports.templateCaches=templateCaches;var templateFactory$1={templateFactory:templateFactory,templateCaches:templateCaches};_exports.$templateFactory=templateFactory$1;const parts$1=new WeakMap;/**
                                     * Renders a template result or other value to a container.
                                     *
                                     * To update a container with new values, reevaluate the template literal and
                                     * call `render` with the new result.
                                     *
                                     * @param result Any value renderable by NodePart - typically a TemplateResult
                                     *     created by evaluating a template tag like `html` or `svg`.
                                     * @param container A DOM parent to render to. The entire contents are either
                                     *     replaced, or efficiently updated if the same result type was previous
                                     *     rendered there.
                                     * @param options RenderOptions for the entire render tree rendered to this
                                     *     container. Render options must *not* change between renders to the same
                                     *     container, as those changes will not effect previously rendered DOM.
                                     */_exports.parts$1=_exports.parts=parts$1;const render=(result,container,options)=>{let part=parts$1.get(container);if(part===void 0){removeNodes(container,container.firstChild);parts$1.set(container,part=new NodePart(Object.assign({templateFactory},options)));part.appendInto(container)}part.setValue(result);part.commit()};_exports.render$2=_exports.render=render;var render$1={parts:parts$1,render:render};_exports.$render=render$1;class DefaultTemplateProcessor{/**
   * Create parts for an attribute-position binding, given the event, attribute
   * name, and string literals.
   *
   * @param element The element containing the binding
   * @param name  The attribute name
   * @param strings The string literals. There are always at least two strings,
   *   event for fully-controlled bindings with a single expression.
   */handleAttributeExpressions(element,name,strings,options){const prefix=name[0];if("."===prefix){const committer=new PropertyCommitter(element,name.slice(1),strings);return committer.parts}if("@"===prefix){return[new EventPart(element,name.slice(1),options.eventContext)]}if("?"===prefix){return[new BooleanAttributePart(element,name.slice(1),strings)]}const committer=new AttributeCommitter(element,name,strings);return committer.parts}/**
     * Create parts for a text-position binding.
     * @param templateFactory
     */handleTextExpression(options){return new NodePart(options)}}_exports.DefaultTemplateProcessor$1=_exports.DefaultTemplateProcessor=DefaultTemplateProcessor;const defaultTemplateProcessor=new DefaultTemplateProcessor;_exports.defaultTemplateProcessor$1=_exports.defaultTemplateProcessor=defaultTemplateProcessor;var defaultTemplateProcessor$1={DefaultTemplateProcessor:DefaultTemplateProcessor,defaultTemplateProcessor:defaultTemplateProcessor};// This line will be used in regexes to search for lit-html usage.
// TODO(justinfagnani): inject version number at build time
_exports.$defaultTemplateProcessor=defaultTemplateProcessor$1;if("undefined"!==typeof window){(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0")}/**
   * Interprets a template literal as an HTML template that can efficiently
   * render to and update a container.
   */const html=(strings,...values)=>new TemplateResult(strings,values,"html",defaultTemplateProcessor);/**
                                                                                                                    * Interprets a template literal as an SVG template that can efficiently
                                                                                                                    * render to and update a container.
                                                                                                                    */_exports.html$4=_exports.html$3=_exports.html$2=html;const svg=(strings,...values)=>new SVGTemplateResult(strings,values,"svg",defaultTemplateProcessor);_exports.svg$2=_exports.svg$1=_exports.svg=svg;var litHtml={html:html,svg:svg,DefaultTemplateProcessor:DefaultTemplateProcessor,defaultTemplateProcessor:defaultTemplateProcessor,directive:directive,isDirective:isDirective,removeNodes:removeNodes,reparentNodes:reparentNodes,noChange:noChange,nothing:nothing,AttributeCommitter:AttributeCommitter,AttributePart:AttributePart,BooleanAttributePart:BooleanAttributePart,EventPart:EventPart,isIterable:isIterable,isPrimitive:isPrimitive,NodePart:NodePart,PropertyCommitter:PropertyCommitter,PropertyPart:PropertyPart,parts:parts$1,render:render,templateCaches:templateCaches,templateFactory:templateFactory,TemplateInstance:TemplateInstance,SVGTemplateResult:SVGTemplateResult,TemplateResult:TemplateResult,createMarker:createMarker,isTemplatePartActive:isTemplatePartActive,Template:Template};_exports.$litHtml=litHtml;const getTemplateCacheKey=(type,scopeName)=>`${type}--${scopeName}`;let compatibleShadyCSSVersion=!0;if("undefined"===typeof window.ShadyCSS){compatibleShadyCSSVersion=!1}else if("undefined"===typeof window.ShadyCSS.prepareTemplateDom){console.warn(`Incompatible ShadyCSS version detected. `+`Please update to at least @webcomponents/webcomponentsjs@2.0.2 and `+`@webcomponents/shadycss@1.3.1.`);compatibleShadyCSSVersion=!1}/**
   * Template factory which scopes template DOM using ShadyCSS.
   * @param scopeName {string}
   */const shadyTemplateFactory=scopeName=>result=>{const cacheKey=getTemplateCacheKey(result.type,scopeName);let templateCache=templateCaches.get(cacheKey);if(templateCache===void 0){templateCache={stringsArray:new WeakMap,keyString:new Map};templateCaches.set(cacheKey,templateCache)}let template=templateCache.stringsArray.get(result.strings);if(template!==void 0){return template}const key=result.strings.join(marker);template=templateCache.keyString.get(key);if(template===void 0){const element=result.getTemplateElement();if(compatibleShadyCSSVersion){window.ShadyCSS.prepareTemplateDom(element,scopeName)}template=new Template(result,element);templateCache.keyString.set(key,template)}templateCache.stringsArray.set(result.strings,template);return template};_exports.shadyTemplateFactory=shadyTemplateFactory;const TEMPLATE_TYPES=["html","svg"],removeStylesFromLitTemplates=scopeName=>{TEMPLATE_TYPES.forEach(type=>{const templates=templateCaches.get(getTemplateCacheKey(type,scopeName));if(templates!==void 0){templates.keyString.forEach(template=>{const{element:{content}}=template,styles=new Set;// IE 11 doesn't support the iterable param Set constructor
Array.from(content.querySelectorAll("style")).forEach(s=>{styles.add(s)});removeNodesFromTemplate(template,styles)})}})},shadyRenderSet=new Set,prepareTemplateStyles=(scopeName,renderedDOM,template)=>{shadyRenderSet.add(scopeName);// If `renderedDOM` is stamped from a Template, then we need to edit that
// Template's underlying template element. Otherwise, we create one here
// to give to ShadyCSS, which still requires one while scoping.
const templateElement=!!template?template.element:document.createElement("template"),styles=renderedDOM.querySelectorAll("style"),{length}=styles;// Move styles out of rendered DOM and store.
// If there are no styles, skip unnecessary work
if(0===length){// Ensure prepareTemplateStyles is called to support adding
// styles via `prepareAdoptedCssText` since that requires that
// `prepareTemplateStyles` is called.
//
// ShadyCSS will only update styles containing @apply in the template
// given to `prepareTemplateStyles`. If no lit Template was given,
// ShadyCSS will not be able to update uses of @apply in any relevant
// template. However, this is not a problem because we only create the
// template for the purpose of supporting `prepareAdoptedCssText`,
// which doesn't support @apply at all.
window.ShadyCSS.prepareTemplateStyles(templateElement,scopeName);return}const condensedStyle=document.createElement("style");// Collect styles into a single style. This helps us make sure ShadyCSS
// manipulations will not prevent us from being able to fix up template
// part indices.
// NOTE: collecting styles is inefficient for browsers but ShadyCSS
// currently does this anyway. When it does not, this should be changed.
for(let i=0;i<length;i++){const style=styles[i];style.parentNode.removeChild(style);condensedStyle.textContent+=style.textContent}// Remove styles from nested templates in this scope.
removeStylesFromLitTemplates(scopeName);// And then put the condensed style into the "root" template passed in as
// `template`.
const content=templateElement.content;if(!!template){insertNodeIntoTemplate(template,condensedStyle,content.firstChild)}else{content.insertBefore(condensedStyle,content.firstChild)}// Note, it's important that ShadyCSS gets the template that `lit-html`
// will actually render so that it can update the style inside when
// needed (e.g. @apply native Shadow DOM case).
window.ShadyCSS.prepareTemplateStyles(templateElement,scopeName);const style=content.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==style){// When in native Shadow DOM, ensure the style created by ShadyCSS is
// included in initially rendered output (`renderedDOM`).
renderedDOM.insertBefore(style.cloneNode(!0),renderedDOM.firstChild)}else if(!!template){// When no style is left in the template, parts will be broken as a
// result. To fix this, we put back the style node ShadyCSS removed
// and then tell lit to remove that node from the template.
// There can be no style in the template in 2 cases (1) when Shady DOM
// is in use, ShadyCSS removes all styles, (2) when native Shadow DOM
// is in use ShadyCSS removes the style if it contains no content.
// NOTE, ShadyCSS creates its own style so we can safely add/remove
// `condensedStyle` here.
content.insertBefore(condensedStyle,content.firstChild);const removes=new Set([condensedStyle]);removeNodesFromTemplate(template,removes)}},render$2=(result,container,options)=>{if(!options||"object"!==typeof options||!options.scopeName){throw new Error("The `scopeName` option is required.")}const scopeName=options.scopeName,hasRendered=parts$1.has(container),needsScoping=compatibleShadyCSSVersion&&11===container.nodeType/* Node.DOCUMENT_FRAGMENT_NODE */&&!!container.host,firstScopeRender=needsScoping&&!shadyRenderSet.has(scopeName),renderContainer=firstScopeRender?document.createDocumentFragment():container;render(result,renderContainer,Object.assign({templateFactory:shadyTemplateFactory(scopeName)},options));// When performing first scope render,
// (1) We've rendered into a fragment so that there's a chance to
// `prepareTemplateStyles` before sub-elements hit the DOM
// (which might cause them to render based on a common pattern of
// rendering in a custom element's `connectedCallback`);
// (2) Scope the template with ShadyCSS one time only for this scope.
// (3) Render the fragment into the container and make sure the
// container knows its `part` is the one we just rendered. This ensures
// DOM will be re-used on subsequent renders.
if(firstScopeRender){const part=parts$1.get(renderContainer);parts$1.delete(renderContainer);// ShadyCSS might have style sheets (e.g. from `prepareAdoptedCssText`)
// that should apply to `renderContainer` even if the rendered value is
// not a TemplateInstance. However, it will only insert scoped styles
// into the document if `prepareTemplateStyles` has already been called
// for the given scope name.
const template=part.value instanceof TemplateInstance?part.value.template:void 0;prepareTemplateStyles(scopeName,renderContainer,template);removeNodes(container,container.firstChild);container.appendChild(renderContainer);parts$1.set(container,part)}// After elements have hit the DOM, update styling if this is the
// initial render to this container.
// This is needed whenever dynamic changes are made so it would be
// safest to do every render; however, this would regress performance
// so we leave it up to the user to call `ShadyCSS.styleElement`
// for dynamic changes.
if(!hasRendered&&needsScoping){window.ShadyCSS.styleElement(container.host)}};/**
                                         * Removes all style elements from Templates for the given scopeName.
                                         */_exports.render$1=render$2;var shadyRender={shadyTemplateFactory:shadyTemplateFactory,render:render$2,html:html,svg:svg,TemplateResult:TemplateResult};/**
    * @license
    * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    * This code may only be used under the BSD style license found at
    * http://polymer.github.io/LICENSE.txt
    * The complete set of authors may be found at
    * http://polymer.github.io/AUTHORS.txt
    * The complete set of contributors may be found at
    * http://polymer.github.io/CONTRIBUTORS.txt
    * Code distributed by Google as part of the polymer project is also
    * subject to an additional IP rights grant found at
    * http://polymer.github.io/PATENTS.txt
    */_exports.$shadyRender=shadyRender;var _a;/**
         * Use this module if you want to create your own base class extending
         * [[UpdatingElement]].
         * @packageDocumentation
         */ /*
             * When using Closure Compiler, JSCompiler_renameProperty(property, object) is
             * replaced at compile time by the munged name for object[property]. We cannot
             * alias this function, so we have to use a small shim that has the same
             * behavior when not compiling.
             */window.JSCompiler_renameProperty=(prop,_obj)=>prop;const defaultConverter={toAttribute(value,type){switch(type){case Boolean:return value?"":null;case Object:case Array:// if the value is `null` or `undefined` pass this through
// to allow removing/no change behavior.
return null==value?value:JSON.stringify(value);}return value},fromAttribute(value,type){switch(type){case Boolean:return null!==value;case Number:return null===value?null:+value;case Object:case Array:return JSON.parse(value);}return value}};/**
    * Change function that returns true if `value` is different from `oldValue`.
    * This method is used as the default for a property's `hasChanged` function.
    */_exports.defaultConverter$1=_exports.defaultConverter=defaultConverter;const notEqual=(value,old)=>{// This ensures (old==NaN, value==NaN) always returns false
return old!==value&&(old===old||value===value)};_exports.notEqual$1=_exports.notEqual=notEqual;const defaultPropertyDeclaration={attribute:!0,type:String,converter:defaultConverter,reflect:!1,hasChanged:notEqual},STATE_HAS_UPDATED=1,STATE_UPDATE_REQUESTED=1<<2,STATE_IS_REFLECTING_TO_ATTRIBUTE=1<<3,STATE_IS_REFLECTING_TO_PROPERTY=1<<4,finalized="finalized";/**
                                * Base element class which manages element properties and attributes. When
                                * properties change, the `update` method is asynchronously called. This method
                                * should be supplied by subclassers to render updates as desired.
                                * @noInheritDoc
                                */class UpdatingElement extends HTMLElement{constructor(){super();this.initialize()}/**
     * Returns a list of attributes corresponding to the registered properties.
     * @nocollapse
     */static get observedAttributes(){// note: piggy backing on this to ensure we're finalized.
this.finalize();const attributes=[];// Use forEach so this works even if for/of loops are compiled to for loops
// expecting arrays
this._classProperties.forEach((v,p)=>{const attr=this._attributeNameForProperty(p,v);if(attr!==void 0){this._attributeToPropertyMap.set(attr,p);attributes.push(attr)}});return attributes}/**
     * Ensures the private `_classProperties` property metadata is created.
     * In addition to `finalize` this is also called in `createProperty` to
     * ensure the `@property` decorator can add property metadata.
     */ /** @nocollapse */static _ensureClassProperties(){// ensure private storage for property declarations.
if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;// NOTE: Workaround IE11 not supporting Map constructor argument.
const superProperties=Object.getPrototypeOf(this)._classProperties;if(superProperties!==void 0){superProperties.forEach((v,k)=>this._classProperties.set(k,v))}}}/**
     * Creates a property accessor on the element prototype if one does not exist
     * and stores a PropertyDeclaration for the property with the given options.
     * The property setter calls the property's `hasChanged` property option
     * or uses a strict identity check to determine whether or not to request
     * an update.
     *
     * This method may be overridden to customize properties; however,
     * when doing so, it's important to call `super.createProperty` to ensure
     * the property is setup correctly. This method calls
     * `getPropertyDescriptor` internally to get a descriptor to install.
     * To customize what properties do when they are get or set, override
     * `getPropertyDescriptor`. To customize the options for a property,
     * implement `createProperty` like this:
     *
     * static createProperty(name, options) {
     *   options = Object.assign(options, {myOption: true});
     *   super.createProperty(name, options);
     * }
     *
     * @nocollapse
     */static createProperty(name,options=defaultPropertyDeclaration){// Note, since this can be called by the `@property` decorator which
// is called before `finalize`, we ensure storage exists for property
// metadata.
this._ensureClassProperties();this._classProperties.set(name,options);// Do not generate an accessor if the prototype already has one, since
// it would be lost otherwise and that would never be the user's intention;
// Instead, we expect users to call `requestUpdate` themselves from
// user-defined accessors. Note that if the super has an accessor we will
// still overwrite it
if(options.noAccessor||this.prototype.hasOwnProperty(name)){return}const key="symbol"===typeof name?Symbol():`__${name}`,descriptor=this.getPropertyDescriptor(name,key,options);if(descriptor!==void 0){Object.defineProperty(this.prototype,name,descriptor)}}/**
     * Returns a property descriptor to be defined on the given named property.
     * If no descriptor is returned, the property will not become an accessor.
     * For example,
     *
     *   class MyElement extends LitElement {
     *     static getPropertyDescriptor(name, key, options) {
     *       const defaultDescriptor =
     *           super.getPropertyDescriptor(name, key, options);
     *       const setter = defaultDescriptor.set;
     *       return {
     *         get: defaultDescriptor.get,
     *         set(value) {
     *           setter.call(this, value);
     *           // custom action.
     *         },
     *         configurable: true,
     *         enumerable: true
     *       }
     *     }
     *   }
     *
     * @nocollapse
     */static getPropertyDescriptor(name,key,options){return{// tslint:disable-next-line:no-any no symbol in index
get(){return this[key]},set(value){const oldValue=this[name];this[key]=value;this.requestUpdateInternal(name,oldValue,options)},configurable:!0,enumerable:!0}}/**
     * Returns the property options associated with the given property.
     * These options are defined with a PropertyDeclaration via the `properties`
     * object or the `@property` decorator and are registered in
     * `createProperty(...)`.
     *
     * Note, this method should be considered "final" and not overridden. To
     * customize the options for a given property, override `createProperty`.
     *
     * @nocollapse
     * @final
     */static getPropertyOptions(name){return this._classProperties&&this._classProperties.get(name)||defaultPropertyDeclaration}/**
     * Creates property accessors for registered properties and ensures
     * any superclasses are also finalized.
     * @nocollapse
     */static finalize(){// finalize any superclasses
const superCtor=Object.getPrototypeOf(this);if(!superCtor.hasOwnProperty(finalized)){superCtor.finalize()}this[finalized]=!0;this._ensureClassProperties();// initialize Map populated in observedAttributes
this._attributeToPropertyMap=new Map;// make any properties
// Note, only process "own" properties since this element will inherit
// any properties defined on the superClass, and finalization ensures
// the entire prototype chain is finalized.
if(this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const props=this.properties,propKeys=[...Object.getOwnPropertyNames(props),...("function"===typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(props):[])];// support symbols in properties (IE11 does not support this)
// This for/of is ok because propKeys is an array
for(const p of propKeys){// note, use of `any` is due to TypeSript lack of support for symbol in
// index types
// tslint:disable-next-line:no-any no symbol in index
this.createProperty(p,props[p])}}}/**
     * Returns the property name for the given attribute `name`.
     * @nocollapse
     */static _attributeNameForProperty(name,options){const attribute=options.attribute;return!1===attribute?void 0:"string"===typeof attribute?attribute:"string"===typeof name?name.toLowerCase():void 0}/**
     * Returns true if a property should request an update.
     * Called when a property value is set and uses the `hasChanged`
     * option for the property if present or a strict identity check.
     * @nocollapse
     */static _valueHasChanged(value,old,hasChanged=notEqual){return hasChanged(value,old)}/**
     * Returns the property value for the given attribute value.
     * Called via the `attributeChangedCallback` and uses the property's
     * `converter` or `converter.fromAttribute` property option.
     * @nocollapse
     */static _propertyValueFromAttribute(value,options){const type=options.type,converter=options.converter||defaultConverter,fromAttribute="function"===typeof converter?converter:converter.fromAttribute;return fromAttribute?fromAttribute(value,type):value}/**
     * Returns the attribute value for the given property value. If this
     * returns undefined, the property will *not* be reflected to an attribute.
     * If this returns null, the attribute will be removed, otherwise the
     * attribute will be set to the value.
     * This uses the property's `reflect` and `type.toAttribute` property options.
     * @nocollapse
     */static _propertyValueToAttribute(value,options){if(options.reflect===void 0){return}const type=options.type,converter=options.converter,toAttribute=converter&&converter.toAttribute||defaultConverter.toAttribute;return toAttribute(value,type)}/**
     * Performs element initialization. By default captures any pre-set values for
     * registered properties.
     */initialize(){this._updateState=0;this._updatePromise=new Promise(res=>this._enableUpdatingResolver=res);this._changedProperties=new Map;this._saveInstanceProperties();// ensures first update will be caught by an early access of
// `updateComplete`
this.requestUpdateInternal()}/**
     * Fixes any properties set on the instance before upgrade time.
     * Otherwise these would shadow the accessor and break these properties.
     * The properties are stored in a Map which is played back after the
     * constructor runs. Note, on very old versions of Safari (<=9) or Chrome
     * (<=41), properties created for native platform properties like (`id` or
     * `name`) may not have default values set in the element constructor. On
     * these browsers native properties appear on instances and therefore their
     * default value will overwrite any element default (e.g. if the element sets
     * this.id = 'id' in the constructor, the 'id' will become '' since this is
     * the native platform default).
     */_saveInstanceProperties(){// Use forEach so this works even if for/of loops are compiled to for loops
// expecting arrays
this.constructor._classProperties.forEach((_v,p)=>{if(this.hasOwnProperty(p)){const value=this[p];delete this[p];if(!this._instanceProperties){this._instanceProperties=new Map}this._instanceProperties.set(p,value)}})}/**
     * Applies previously saved instance properties.
     */_applyInstanceProperties(){// Use forEach so this works even if for/of loops are compiled to for loops
// expecting arrays
// tslint:disable-next-line:no-any
this._instanceProperties.forEach((v,p)=>this[p]=v);this._instanceProperties=void 0}connectedCallback(){// Ensure first connection completes an update. Updates cannot complete
// before connection.
this.enableUpdating()}enableUpdating(){if(this._enableUpdatingResolver!==void 0){this._enableUpdatingResolver();this._enableUpdatingResolver=void 0}}/**
     * Allows for `super.disconnectedCallback()` in extensions while
     * reserving the possibility of making non-breaking feature additions
     * when disconnecting at some point in the future.
     */disconnectedCallback(){}/**
                             * Synchronizes property values when attributes change.
                             */attributeChangedCallback(name,old,value){if(old!==value){this._attributeToProperty(name,value)}}_propertyToAttribute(name,value,options=defaultPropertyDeclaration){const ctor=this.constructor,attr=ctor._attributeNameForProperty(name,options);if(attr!==void 0){const attrValue=ctor._propertyValueToAttribute(value,options);// an undefined value does not change the attribute.
if(attrValue===void 0){return}// Track if the property is being reflected to avoid
// setting the property again via `attributeChangedCallback`. Note:
// 1. this takes advantage of the fact that the callback is synchronous.
// 2. will behave incorrectly if multiple attributes are in the reaction
// stack at time of calling. However, since we process attributes
// in `update` this should not be possible (or an extreme corner case
// that we'd like to discover).
// mark state reflecting
this._updateState=this._updateState|STATE_IS_REFLECTING_TO_ATTRIBUTE;if(null==attrValue){this.removeAttribute(attr)}else{this.setAttribute(attr,attrValue)}// mark state not reflecting
this._updateState=this._updateState&~STATE_IS_REFLECTING_TO_ATTRIBUTE}}_attributeToProperty(name,value){// Use tracking info to avoid deserializing attribute value if it was
// just set from a property setter.
if(this._updateState&STATE_IS_REFLECTING_TO_ATTRIBUTE){return}const ctor=this.constructor,propName=ctor._attributeToPropertyMap.get(name);// Note, hint this as an `AttributeMap` so closure clearly understands
// the type; it has issues with tracking types through statics
// tslint:disable-next-line:no-unnecessary-type-assertion
if(propName!==void 0){const options=ctor.getPropertyOptions(propName);// mark state reflecting
this._updateState=this._updateState|STATE_IS_REFLECTING_TO_PROPERTY;this[propName]=// tslint:disable-next-line:no-any
ctor._propertyValueFromAttribute(value,options);// mark state not reflecting
this._updateState=this._updateState&~STATE_IS_REFLECTING_TO_PROPERTY}}/**
     * This protected version of `requestUpdate` does not access or return the
     * `updateComplete` promise. This promise can be overridden and is therefore
     * not free to access.
     */requestUpdateInternal(name,oldValue,options){let shouldRequestUpdate=!0;// If we have a property key, perform property update steps.
if(name!==void 0){const ctor=this.constructor;options=options||ctor.getPropertyOptions(name);if(ctor._valueHasChanged(this[name],oldValue,options.hasChanged)){if(!this._changedProperties.has(name)){this._changedProperties.set(name,oldValue)}// Add to reflecting properties set.
// Note, it's important that every change has a chance to add the
// property to `_reflectingProperties`. This ensures setting
// attribute + property reflects correctly.
if(!0===options.reflect&&!(this._updateState&STATE_IS_REFLECTING_TO_PROPERTY)){if(this._reflectingProperties===void 0){this._reflectingProperties=new Map}this._reflectingProperties.set(name,options)}}else{// Abort the request if the property should not be considered changed.
shouldRequestUpdate=!1}}if(!this._hasRequestedUpdate&&shouldRequestUpdate){this._updatePromise=this._enqueueUpdate()}}/**
     * Requests an update which is processed asynchronously. This should
     * be called when an element should update based on some state not triggered
     * by setting a property. In this case, pass no arguments. It should also be
     * called when manually implementing a property setter. In this case, pass the
     * property `name` and `oldValue` to ensure that any configured property
     * options are honored. Returns the `updateComplete` Promise which is resolved
     * when the update completes.
     *
     * @param name {PropertyKey} (optional) name of requesting property
     * @param oldValue {any} (optional) old value of requesting property
     * @returns {Promise} A Promise that is resolved when the update completes.
     */requestUpdate(name,oldValue){this.requestUpdateInternal(name,oldValue);return this.updateComplete}/**
     * Sets up the element to asynchronously update.
     */_enqueueUpdate(){var _this4=this;return babelHelpers.asyncToGenerator(function*(){_this4._updateState=_this4._updateState|STATE_UPDATE_REQUESTED;try{// Ensure any previous update has resolved before updating.
// This `await` also ensures that property changes are batched.
yield _this4._updatePromise}catch(e){// Ignore any previous errors. We only care that the previous cycle is
// done. Any error should have been handled in the previous update.
}const result=_this4.performUpdate();// If `performUpdate` returns a Promise, we await it. This is done to
// enable coordinating updates with a scheduler. Note, the result is
// checked to avoid delaying an additional microtask unless we need to.
if(null!=result){yield result}return!_this4._hasRequestedUpdate})()}get _hasRequestedUpdate(){return this._updateState&STATE_UPDATE_REQUESTED}get hasUpdated(){return this._updateState&STATE_HAS_UPDATED}/**
     * Performs an element update. Note, if an exception is thrown during the
     * update, `firstUpdated` and `updated` will not be called.
     *
     * You can override this method to change the timing of updates. If this
     * method is overridden, `super.performUpdate()` must be called.
     *
     * For instance, to schedule updates to occur just before the next frame:
     *
     * ```
     * protected async performUpdate(): Promise<unknown> {
     *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
     *   super.performUpdate();
     * }
     * ```
     */performUpdate(){// Abort any update if one is not pending when this is called.
// This can happen if `performUpdate` is called early to "flush"
// the update.
if(!this._hasRequestedUpdate){return}// Mixin instance properties once, if they exist.
if(this._instanceProperties){this._applyInstanceProperties()}let shouldUpdate=!1;const changedProperties=this._changedProperties;try{shouldUpdate=this.shouldUpdate(changedProperties);if(shouldUpdate){this.update(changedProperties)}else{this._markUpdated()}}catch(e){// Prevent `firstUpdated` and `updated` from running when there's an
// update exception.
shouldUpdate=!1;// Ensure element can accept additional updates after an exception.
this._markUpdated();throw e}if(shouldUpdate){if(!(this._updateState&STATE_HAS_UPDATED)){this._updateState=this._updateState|STATE_HAS_UPDATED;this.firstUpdated(changedProperties)}this.updated(changedProperties)}}_markUpdated(){this._changedProperties=new Map;this._updateState=this._updateState&~STATE_UPDATE_REQUESTED}/**
     * Returns a Promise that resolves when the element has completed updating.
     * The Promise value is a boolean that is `true` if the element completed the
     * update without triggering another update. The Promise result is `false` if
     * a property was set inside `updated()`. If the Promise is rejected, an
     * exception was thrown during the update.
     *
     * To await additional asynchronous work, override the `_getUpdateComplete`
     * method. For example, it is sometimes useful to await a rendered element
     * before fulfilling this Promise. To do this, first await
     * `super._getUpdateComplete()`, then any subsequent state.
     *
     * @returns {Promise} The Promise returns a boolean that indicates if the
     * update resolved without triggering another update.
     */get updateComplete(){return this._getUpdateComplete()}/**
     * Override point for the `updateComplete` promise.
     *
     * It is not safe to override the `updateComplete` getter directly due to a
     * limitation in TypeScript which means it is not possible to call a
     * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
     * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
     * This method should be overridden instead. For example:
     *
     *   class MyElement extends LitElement {
     *     async _getUpdateComplete() {
     *       await super._getUpdateComplete();
     *       await this._myChild.updateComplete;
     *     }
     *   }
     */_getUpdateComplete(){return this._updatePromise}/**
     * Controls whether or not `update` should be called when the element requests
     * an update. By default, this method always returns `true`, but this can be
     * customized to control when to update.
     *
     * @param _changedProperties Map of changed properties with old values
     */shouldUpdate(_changedProperties){return!0}/**
     * Updates the element. This method reflects property values to attributes.
     * It can be overridden to render and keep updated element DOM.
     * Setting properties inside this method will *not* trigger
     * another update.
     *
     * @param _changedProperties Map of changed properties with old values
     */update(_changedProperties){if(this._reflectingProperties!==void 0&&0<this._reflectingProperties.size){// Use forEach so this works even if for/of loops are compiled to for
// loops expecting arrays
this._reflectingProperties.forEach((v,k)=>this._propertyToAttribute(k,this[k],v));this._reflectingProperties=void 0}this._markUpdated()}/**
     * Invoked whenever the element is updated. Implement to perform
     * post-updating tasks via DOM APIs, for example, focusing an element.
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * @param _changedProperties Map of changed properties with old values
     */updated(_changedProperties){}/**
                                  * Invoked when the element is first updated. Implement to perform one time
                                  * work on the element after update.
                                  *
                                  * Setting properties inside this method will trigger the element to update
                                  * again after this update cycle completes.
                                  *
                                  * @param _changedProperties Map of changed properties with old values
                                  */firstUpdated(_changedProperties){}}_exports.UpdatingElement$1=_exports.UpdatingElement=UpdatingElement;_a=finalized;/**
                 * Marks class as having finished creating properties.
                 */UpdatingElement[_a]=!0;var updatingElement={defaultConverter:defaultConverter,notEqual:notEqual,UpdatingElement:UpdatingElement};/**
    * @license
    * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    * This code may only be used under the BSD style license found at
    * http://polymer.github.io/LICENSE.txt
    * The complete set of authors may be found at
    * http://polymer.github.io/AUTHORS.txt
    * The complete set of contributors may be found at
    * http://polymer.github.io/CONTRIBUTORS.txt
    * Code distributed by Google as part of the polymer project is also
    * subject to an additional IP rights grant found at
    * http://polymer.github.io/PATENTS.txt
    */_exports.$updatingElement=updatingElement;const legacyCustomElement=(tagName,clazz)=>{window.customElements.define(tagName,clazz);// Cast as any because TS doesn't recognize the return type as being a
// subtype of the decorated class when clazz is typed as
// `Constructor<HTMLElement>` for some reason.
// `Constructor<HTMLElement>` is helpful to make sure the decorator is
// applied to elements however.
// tslint:disable-next-line:no-any
return clazz},standardCustomElement=(tagName,descriptor)=>{const{kind,elements}=descriptor;return{kind,elements,// This callback is called once the class is otherwise fully defined
finisher(clazz){window.customElements.define(tagName,clazz)}}},customElement=tagName=>classOrDescriptor=>"function"===typeof classOrDescriptor?legacyCustomElement(tagName,classOrDescriptor):standardCustomElement(tagName,classOrDescriptor);_exports.customElement$1=_exports.customElement=customElement;const standardProperty=(options,element)=>{// When decorating an accessor, pass it through and add property metadata.
// Note, the `hasOwnProperty` check in `createProperty` ensures we don't
// stomp over the user's accessor.
if("method"===element.kind&&element.descriptor&&!("value"in element.descriptor)){return Object.assign(Object.assign({},element),{finisher(clazz){clazz.createProperty(element.key,options)}})}else{// createProperty() takes care of defining the property, but we still
// must return some kind of descriptor, so return a descriptor for an
// unused prototype field. The finisher calls createProperty().
return{kind:"field",key:Symbol(),placement:"own",descriptor:{},// When @babel/plugin-proposal-decorators implements initializers,
// do this instead of the initializer below. See:
// https://github.com/babel/babel/issues/9260 extras: [
//   {
//     kind: 'initializer',
//     placement: 'own',
//     initializer: descriptor.initializer,
//   }
// ],
initializer(){if("function"===typeof element.initializer){this[element.key]=element.initializer.call(this)}},finisher(clazz){clazz.createProperty(element.key,options)}}}},legacyProperty=(options,proto,name)=>{proto.constructor.createProperty(name,options)};/**
    * A property decorator which creates a LitElement property which reflects a
    * corresponding attribute value. A [[`PropertyDeclaration`]] may optionally be
    * supplied to configure property features.
    *
    * This decorator should only be used for public fields. Private or protected
    * fields should use the [[`internalProperty`]] decorator.
    *
    * @example
    * ```ts
    * class MyElement {
    *   @property({ type: Boolean })
    *   clicked = false;
    * }
    * ```
    * @category Decorator
    * @ExportDecoratedItems
    */function property(options){// tslint:disable-next-line:no-any decorator
return(protoOrDescriptor,name)=>name!==void 0?legacyProperty(options,protoOrDescriptor,name):standardProperty(options,protoOrDescriptor)}/**
   * Declares a private or protected property that still triggers updates to the
   * element when it changes.
   *
   * Properties declared this way must not be used from HTML or HTML templating
   * systems, they're solely for properties internal to the element. These
   * properties may be renamed by optimization tools like closure compiler.
   * @category Decorator
   */function internalProperty(options){return property({attribute:!1,hasChanged:null===options||void 0===options?void 0:options.hasChanged})}/**
   * A property decorator that converts a class property into a getter that
   * executes a querySelector on the element's renderRoot.
   *
   * @param selector A DOMString containing one or more selectors to match.
   * @param cache An optional boolean which when true performs the DOM query only
   * once and caches the result.
   *
   * See: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
   *
   * @example
   *
   * ```ts
   * class MyElement {
   *   @query('#first')
   *   first;
   *
   *   render() {
   *     return html`
   *       <div id="first"></div>
   *       <div id="second"></div>
   *     `;
   *   }
   * }
   * ```
   * @category Decorator
   */function query(selector,cache){return(protoOrDescriptor,// tslint:disable-next-line:no-any decorator
name)=>{const descriptor={get(){return this.renderRoot.querySelector(selector)},enumerable:!0,configurable:!0};if(cache){const key="symbol"===typeof name?Symbol():`__${name}`;descriptor.get=function(){if(this[key]===void 0){this[key]=this.renderRoot.querySelector(selector)}return this[key]}}return name!==void 0?legacyQuery(descriptor,protoOrDescriptor,name):standardQuery(descriptor,protoOrDescriptor)}}// Note, in the future, we may extend this decorator to support the use case
// where the queried element may need to do work to become ready to interact
// with (e.g. load some implementation code). If so, we might elect to
// add a second argument defining a function that can be run to make the
// queried element loaded/updated/ready.
/**
 * A property decorator that converts a class property into a getter that
 * returns a promise that resolves to the result of a querySelector on the
 * element's renderRoot done after the element's `updateComplete` promise
 * resolves. When the queried property may change with element state, this
 * decorator can be used instead of requiring users to await the
 * `updateComplete` before accessing the property.
 *
 * @param selector A DOMString containing one or more selectors to match.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 *
 * @example
 * ```ts
 * class MyElement {
 *   @queryAsync('#first')
 *   first;
 *
 *   render() {
 *     return html`
 *       <div id="first"></div>
 *       <div id="second"></div>
 *     `;
 *   }
 * }
 *
 * // external usage
 * async doSomethingWithFirst() {
 *  (await aMyElement.first).doSomething();
 * }
 * ```
 * @category Decorator
 */function queryAsync(selector){return(protoOrDescriptor,// tslint:disable-next-line:no-any decorator
name)=>{const descriptor={get(){var _this5=this;return babelHelpers.asyncToGenerator(function*(){yield _this5.updateComplete;return _this5.renderRoot.querySelector(selector)})()},enumerable:!0,configurable:!0};return name!==void 0?legacyQuery(descriptor,protoOrDescriptor,name):standardQuery(descriptor,protoOrDescriptor)}}/**
   * A property decorator that converts a class property into a getter
   * that executes a querySelectorAll on the element's renderRoot.
   *
   * @param selector A DOMString containing one or more selectors to match.
   *
   * See:
   * https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
   *
   * @example
   * ```ts
   * class MyElement {
   *   @queryAll('div')
   *   divs;
   *
   *   render() {
   *     return html`
   *       <div id="first"></div>
   *       <div id="second"></div>
   *     `;
   *   }
   * }
   * ```
   * @category Decorator
   */function queryAll(selector){return(protoOrDescriptor,// tslint:disable-next-line:no-any decorator
name)=>{const descriptor={get(){return this.renderRoot.querySelectorAll(selector)},enumerable:!0,configurable:!0};return name!==void 0?legacyQuery(descriptor,protoOrDescriptor,name):standardQuery(descriptor,protoOrDescriptor)}}const legacyQuery=(descriptor,proto,name)=>{Object.defineProperty(proto,name,descriptor)},standardQuery=(descriptor,element)=>({kind:"method",placement:"prototype",key:element.key,descriptor}),standardEventOptions=(options,element)=>{return Object.assign(Object.assign({},element),{finisher(clazz){Object.assign(clazz.prototype[element.key],options)}})},legacyEventOptions=// tslint:disable-next-line:no-any legacy decorator
(options,proto,name)=>{Object.assign(proto[name],options)};/**
    * Adds event listener options to a method used as an event listener in a
    * lit-html template.
    *
    * @param options An object that specifies event listener options as accepted by
    * `EventTarget#addEventListener` and `EventTarget#removeEventListener`.
    *
    * Current browsers support the `capture`, `passive`, and `once` options. See:
    * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Parameters
    *
    * @example
    * ```ts
    * class MyElement {
    *   clicked = false;
    *
    *   render() {
    *     return html`
    *       <div @click=${this._onClick}`>
    *         <button></button>
    *       </div>
    *     `;
    *   }
    *
    *   @eventOptions({capture: true})
    *   _onClick(e) {
    *     this.clicked = true;
    *   }
    * }
    * ```
    * @category Decorator
    */function eventOptions(options){// Return value typed as any to prevent TypeScript from complaining that
// standard decorator function signature does not match TypeScript decorator
// signature
// TODO(kschaaf): unclear why it was only failing on this decorator and not
// the others
return(protoOrDescriptor,name)=>name!==void 0?legacyEventOptions(options,protoOrDescriptor,name):standardEventOptions(options,protoOrDescriptor)}// x-browser support for matches
// tslint:disable-next-line:no-any
const ElementProto=Element.prototype,legacyMatches=ElementProto.msMatchesSelector||ElementProto.webkitMatchesSelector;/**
                                                                                             * A property decorator that converts a class property into a getter that
                                                                                             * returns the `assignedNodes` of the given named `slot`. Note, the type of
                                                                                             * this property should be annotated as `NodeListOf<HTMLElement>`.
                                                                                             *
                                                                                             * @param slotName A string name of the slot.
                                                                                             * @param flatten A boolean which when true flattens the assigned nodes,
                                                                                             * meaning any assigned nodes that are slot elements are replaced with their
                                                                                             * assigned nodes.
                                                                                             * @param selector A string which filters the results to elements that match
                                                                                             * the given css selector.
                                                                                             *
                                                                                             * * @example
                                                                                             * ```ts
                                                                                             * class MyElement {
                                                                                             *   @queryAssignedNodes('list', true, '.item')
                                                                                             *   listItems;
                                                                                             *
                                                                                             *   render() {
                                                                                             *     return html`
                                                                                             *       <slot name="list"></slot>
                                                                                             *     `;
                                                                                             *   }
                                                                                             * }
                                                                                             * ```
                                                                                             * @category Decorator
                                                                                             */function queryAssignedNodes(slotName="",flatten=!1,selector=""){return(protoOrDescriptor,// tslint:disable-next-line:no-any decorator
name)=>{const descriptor={get(){const slotSelector=`slot${slotName?`[name=${slotName}]`:":not([name])"}`,slot=this.renderRoot.querySelector(slotSelector);let nodes=slot&&slot.assignedNodes({flatten});if(nodes&&selector){nodes=nodes.filter(node=>node.nodeType===Node.ELEMENT_NODE&&node.matches?node.matches(selector):legacyMatches.call(node,selector))}return nodes},enumerable:!0,configurable:!0};return name!==void 0?legacyQuery(descriptor,protoOrDescriptor,name):standardQuery(descriptor,protoOrDescriptor)}}var decorators={customElement:customElement,property:property,internalProperty:internalProperty,query:query,queryAsync:queryAsync,queryAll:queryAll,eventOptions:eventOptions,queryAssignedNodes:queryAssignedNodes};/**
   @license
   Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at
   http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
   http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
   found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
   part of the polymer project is also subject to an additional IP rights grant
   found at http://polymer.github.io/PATENTS.txt
   */ /**
       * Whether the current browser supports `adoptedStyleSheets`.
       */_exports.$decorators=decorators;const supportsAdoptingStyleSheets=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;_exports.supportsAdoptingStyleSheets$2=_exports.supportsAdoptingStyleSheets$1=supportsAdoptingStyleSheets;const constructionToken=Symbol();class CSSResult{constructor(cssText,safeToken){if(safeToken!==constructionToken){throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.")}this.cssText=cssText}// Note, this is a getter so that it's lazy. In practice, this means
// stylesheets are not created until the first element instance is made.
get styleSheet(){if(this._styleSheet===void 0){// Note, if `supportsAdoptingStyleSheets` is true then we assume
// CSSStyleSheet is constructable.
if(supportsAdoptingStyleSheets){this._styleSheet=new CSSStyleSheet;this._styleSheet.replaceSync(this.cssText)}else{this._styleSheet=null}}return this._styleSheet}toString(){return this.cssText}}/**
   * Wrap a value for interpolation in a [[`css`]] tagged template literal.
   *
   * This is unsafe because untrusted CSS text can be used to phone home
   * or exfiltrate data to an attacker controlled site. Take care to only use
   * this with trusted input.
   */_exports.CSSResult$1=_exports.CSSResult=CSSResult;const unsafeCSS=value=>{return new CSSResult(value+"",constructionToken)};_exports.unsafeCSS$1=_exports.unsafeCSS=unsafeCSS;const textFromCSSResult=value=>{if(value instanceof CSSResult){return value.cssText}else if("number"===typeof value){return value}else{throw new Error(`Value passed to 'css' function must be a 'css' function result: ${value}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`)}},css=(strings,...values)=>{const cssText=values.reduce((acc,v,idx)=>acc+textFromCSSResult(v)+strings[idx+1],strings[0]);return new CSSResult(cssText,constructionToken)};/**
    * Template tag which which can be used with LitElement's [[LitElement.styles |
    * `styles`]] property to set element styles. For security reasons, only literal
    * string values may be used. To incorporate non-literal values [[`unsafeCSS`]]
    * may be used inside a template string part.
    */_exports.css$1=_exports.css=css;var cssTag={supportsAdoptingStyleSheets:supportsAdoptingStyleSheets,CSSResult:CSSResult,unsafeCSS:unsafeCSS,css:css};// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for LitElement usage.
// TODO(justinfagnani): inject version number at build time
_exports.$cssTag=cssTag;(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");/**
                                                                                      * Sentinal value used to avoid calling lit-html's render function when
                                                                                      * subclasses do not implement `render`
                                                                                      */const renderNotImplemented={};/**
                                  * Base element class that manages element properties and attributes, and
                                  * renders a lit-html template.
                                  *
                                  * To define a component, subclass `LitElement` and implement a
                                  * `render` method to provide the component's template. Define properties
                                  * using the [[`properties`]] property or the [[`property`]] decorator.
                                  */class LitElement extends UpdatingElement{/**
   * Return the array of styles to apply to the element.
   * Override this method to integrate into a style management system.
   *
   * @nocollapse
   */static getStyles(){return this.styles}/** @nocollapse */static _getUniqueStyles(){// Only gather styles once per class
if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this))){return}// Take care not to call `this.getStyles()` multiple times since this
// generates new CSSResults each time.
// TODO(sorvell): Since we do not cache CSSResults by input, any
// shared styles will generate new stylesheet objects, which is wasteful.
// This should be addressed when a browser ships constructable
// stylesheets.
const userStyles=this.getStyles();if(Array.isArray(userStyles)){// De-duplicate styles preserving the _last_ instance in the set.
// This is a performance optimization to avoid duplicated styles that can
// occur especially when composing via subclassing.
// The last item is kept to try to preserve the cascade order with the
// assumption that it's most important that last added styles override
// previous styles.
const addStyles=(styles,set)=>styles.reduceRight((set,s)=>// Note: On IE set.add() does not return the set
Array.isArray(s)?addStyles(s,set):(set.add(s),set),set),set=addStyles(userStyles,new Set),styles=[];// Array.from does not work on Set in IE, otherwise return
// Array.from(addStyles(userStyles, new Set<CSSResult>())).reverse()
set.forEach(v=>styles.unshift(v));this._styles=styles}else{this._styles=userStyles===void 0?[]:[userStyles]}// Ensure that there are no invalid CSSStyleSheet instances here. They are
// invalid in two conditions.
// (1) the sheet is non-constructible (`sheet` of a HTMLStyleElement), but
//     this is impossible to check except via .replaceSync or use
// (2) the ShadyCSS polyfill is enabled (:. supportsAdoptingStyleSheets is
//     false)
this._styles=this._styles.map(s=>{if(s instanceof CSSStyleSheet&&!supportsAdoptingStyleSheets){// Flatten the cssText from the passed constructible stylesheet (or
// undetectable non-constructible stylesheet). The user might have
// expected to update their stylesheets over time, but the alternative
// is a crash.
const cssText=Array.prototype.slice.call(s.cssRules).reduce((css,rule)=>css+rule.cssText,"");return unsafeCSS(cssText)}return s})}/**
     * Performs element initialization. By default this calls
     * [[`createRenderRoot`]] to create the element [[`renderRoot`]] node and
     * captures any pre-set values for registered properties.
     */initialize(){super.initialize();this.constructor._getUniqueStyles();this.renderRoot=this.createRenderRoot();// Note, if renderRoot is not a shadowRoot, styles would/could apply to the
// element's getRootNode(). While this could be done, we're choosing not to
// support this now since it would require different logic around de-duping.
if(window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot){this.adoptStyles()}}/**
     * Returns the node into which the element should render and by default
     * creates and returns an open shadowRoot. Implement to customize where the
     * element's DOM is rendered. For example, to render into the element's
     * childNodes, return `this`.
     * @returns {Element|DocumentFragment} Returns a node into which to render.
     */createRenderRoot(){return this.attachShadow({mode:"open"})}/**
     * Applies styling to the element shadowRoot using the [[`styles`]]
     * property. Styling will apply using `shadowRoot.adoptedStyleSheets` where
     * available and will fallback otherwise. When Shadow DOM is polyfilled,
     * ShadyCSS scopes styles and adds them to the document. When Shadow DOM
     * is available but `adoptedStyleSheets` is not, styles are appended to the
     * end of the `shadowRoot` to [mimic spec
     * behavior](https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets).
     */adoptStyles(){const styles=this.constructor._styles;if(0===styles.length){return}// There are three separate cases here based on Shadow DOM support.
// (1) shadowRoot polyfilled: use ShadyCSS
// (2) shadowRoot.adoptedStyleSheets available: use it
// (3) shadowRoot.adoptedStyleSheets polyfilled: append styles after
// rendering
if(window.ShadyCSS!==void 0&&!window.ShadyCSS.nativeShadow){window.ShadyCSS.ScopingShim.prepareAdoptedCssText(styles.map(s=>s.cssText),this.localName)}else if(supportsAdoptingStyleSheets){this.renderRoot.adoptedStyleSheets=styles.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet)}else{// This must be done after rendering so the actual style insertion is done
// in `update`.
this._needsShimAdoptedStyleSheets=!0}}connectedCallback(){super.connectedCallback();// Note, first update/render handles styleElement so we only call this if
// connected after first update.
if(this.hasUpdated&&window.ShadyCSS!==void 0){window.ShadyCSS.styleElement(this)}}/**
     * Updates the element. This method reflects property values to attributes
     * and calls `render` to render DOM via lit-html. Setting properties inside
     * this method will *not* trigger another update.
     * @param _changedProperties Map of changed properties with old values
     */update(changedProperties){// Setting properties in `render` should not trigger an update. Since
// updates are allowed after super.update, it's important to call `render`
// before that.
const templateResult=this.render();super.update(changedProperties);// If render is not implemented by the component, don't call lit-html render
if(templateResult!==renderNotImplemented){this.constructor.render(templateResult,this.renderRoot,{scopeName:this.localName,eventContext:this})}// When native Shadow DOM is used but adoptedStyles are not supported,
// insert styling after rendering to ensure adoptedStyles have highest
// priority.
if(this._needsShimAdoptedStyleSheets){this._needsShimAdoptedStyleSheets=!1;this.constructor._styles.forEach(s=>{const style=document.createElement("style");style.textContent=s.cssText;this.renderRoot.appendChild(style)})}}/**
     * Invoked on each update to perform rendering tasks. This method may return
     * any value renderable by lit-html's `NodePart` - typically a
     * `TemplateResult`. Setting properties inside this method will *not* trigger
     * the element to update.
     */render(){return renderNotImplemented}}/**
   * Ensure this class is marked as `finalized` as an optimization ensuring
   * it will not needlessly try to `finalize`.
   *
   * Note this property name is a string to prevent breaking Closure JS Compiler
   * optimizations. See updating-element.ts for more information.
   */_exports.LitElement=LitElement;LitElement.finalized=!0;/**
                                 * Reference to the underlying library method used to render the element's
                                 * DOM. By default, points to the `render` method from lit-html's shady-render
                                 * module.
                                 *
                                 * **Most users will never need to touch this property.**
                                 *
                                 * This  property should not be confused with the `render` instance method,
                                 * which should be overridden to define a template for the element.
                                 *
                                 * Advanced users creating a new base class based on LitElement can override
                                 * this property to point to a custom render method with a signature that
                                 * matches [shady-render's `render`
                                 * method](https://lit-html.polymer-project.org/api/modules/shady_render.html#render).
                                 *
                                 * @nocollapse
                                 */LitElement.render=render$2;var litElement={LitElement:LitElement,defaultConverter:defaultConverter,notEqual:notEqual,UpdatingElement:UpdatingElement,customElement:customElement,property:property,internalProperty:internalProperty,query:query,queryAsync:queryAsync,queryAll:queryAll,eventOptions:eventOptions,queryAssignedNodes:queryAssignedNodes,html:html,svg:svg,TemplateResult:TemplateResult,SVGTemplateResult:SVGTemplateResult,supportsAdoptingStyleSheets:supportsAdoptingStyleSheets,CSSResult:CSSResult,unsafeCSS:unsafeCSS,css:css};/**
    * @license
    * Copyright 2018 Google Inc.
    *
    * Permission is hereby granted, free of charge, to any person obtaining a copy
    * of this software and associated documentation files (the "Software"), to deal
    * in the Software without restriction, including without limitation the rights
    * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    * copies of the Software, and to permit persons to whom the Software is
    * furnished to do so, subject to the following conditions:
    *
    * The above copyright notice and this permission notice shall be included in
    * all copies or substantial portions of the Software.
    *
    * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    * THE SOFTWARE.
    */ /**
        * @fileoverview A "ponyfill" is a polyfill that doesn't modify the global prototype chain.
        * This makes ponyfills safer than traditional polyfills, especially for libraries like MDC.
        */_exports.$litElement=litElement;function closest(element,selector){if(element.closest){return element.closest(selector)}var el=element;while(el){if(matches(el,selector)){return el}el=el.parentElement}return null}function matches(element,selector){var nativeMatches=element.matches||element.webkitMatchesSelector||element.msMatchesSelector;return nativeMatches.call(element,selector)}/**
   * Used to compute the estimated scroll width of elements. When an element is
   * hidden due to display: none; being applied to a parent element, the width is
   * returned as 0. However, the element will have a true width once no longer
   * inside a display: none context. This method computes an estimated width when
   * the element is hidden or returns the true width when the element is visble.
   * @param {Element} element the element whose width to estimate
   */function estimateScrollWidth(element){// Check the offsetParent. If the element inherits display: none from any
// parent, the offsetParent property will be null (see
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent).
// This check ensures we only clone the node when necessary.
var htmlEl=element;if(null!==htmlEl.offsetParent){return htmlEl.scrollWidth}var clone=htmlEl.cloneNode(!0);clone.style.setProperty("position","absolute");clone.style.setProperty("transform","translate(-9999px, -9999px)");document.documentElement.appendChild(clone);var scrollWidth=clone.scrollWidth;document.documentElement.removeChild(clone);return scrollWidth}var ponyfill={closest:closest,matches:matches,estimateScrollWidth:estimateScrollWidth};_exports.$ponyfill=ponyfill;const isNodeElement=node=>{return node.nodeType===Node.ELEMENT_NODE};_exports.isNodeElement=isNodeElement;function findAssignedElement(slot,selector){for(const node of slot.assignedNodes({flatten:!0})){if(isNodeElement(node)){const el=node;if(matches(el,selector)){return el}}}return null}function addHasRemoveClass(element){return{addClass:className=>{element.classList.add(className)},removeClass:className=>{element.classList.remove(className)},hasClass:className=>element.classList.contains(className)}}let supportsPassive=!1;const fn=()=>{},optionsBlock={get passive(){supportsPassive=!0;return!1}};document.addEventListener("x",fn,optionsBlock);document.removeEventListener("x",fn);/**
                                        * Do event listeners suport the `passive` option?
                                        */const supportsPassiveEventListener=supportsPassive;_exports.supportsPassiveEventListener=supportsPassiveEventListener;const deepActiveElementPath=(doc=window.document)=>{let activeElement=doc.activeElement;const path=[];if(!activeElement){return path}while(activeElement){path.push(activeElement);if(activeElement.shadowRoot){activeElement=activeElement.shadowRoot.activeElement}else{break}}return path};_exports.deepActiveElementPath=deepActiveElementPath;const doesElementContainFocus=element=>{const activePath=deepActiveElementPath();if(!activePath.length){return!1}const deepActiveElement=activePath[activePath.length-1],focusEv=new Event("check-if-focused",{bubbles:!0,composed:!0});let composedPath=[];const listener=ev=>{composedPath=ev.composedPath()};document.body.addEventListener("check-if-focused",listener);deepActiveElement.dispatchEvent(focusEv);document.body.removeEventListener("check-if-focused",listener);return-1!==composedPath.indexOf(element)};_exports.doesElementContainFocus=doesElementContainFocus;var utils={isNodeElement:isNodeElement,findAssignedElement:findAssignedElement,addHasRemoveClass:addHasRemoveClass,supportsPassiveEventListener:supportsPassiveEventListener,deepActiveElementPath:deepActiveElementPath,doesElementContainFocus:doesElementContainFocus};_exports.$utils=utils;class BaseElement extends LitElement{click(){if(this.mdcRoot){this.mdcRoot.focus();this.mdcRoot.click();return}super.click()}/**
     * Create and attach the MDC Foundation to the instance
     */createFoundation(){if(this.mdcFoundation!==void 0){this.mdcFoundation.destroy()}if(this.mdcFoundationClass){this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter());this.mdcFoundation.init()}}firstUpdated(){this.createFoundation()}}_exports.BaseElement=BaseElement;var baseElement={BaseElement:BaseElement,addHasRemoveClass:addHasRemoveClass};/**
   @license
   Copyright 2018 Google Inc. All Rights Reserved.
   
   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at
   
       http://www.apache.org/licenses/LICENSE-2.0
   
   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
   */ // tslint:disable:no-any
/**
 * Specifies an observer callback that is run when the decorated property
 * changes. The observer receives the current and old value as arguments.
 */_exports.$baseElement=baseElement;const observer=observer=>// eslint-disable-next-line @typescript-eslint/no-explicit-any
(proto,propName)=>{// if we haven't wrapped `updated` in this class, do so
if(!proto.constructor._observers){proto.constructor._observers=new Map;const userUpdated=proto.updated;proto.updated=function(changedProperties){userUpdated.call(this,changedProperties);changedProperties.forEach((v,k)=>{const observers=this.constructor._observers,observer=observers.get(k);if(observer!==void 0){// eslint-disable-next-line @typescript-eslint/no-explicit-any
observer.call(this,this[k],v)}})};// clone any existing observers (superclasses)
// eslint-disable-next-line no-prototype-builtins
}else if(!proto.constructor.hasOwnProperty("_observers")){const observers=proto.constructor._observers;proto.constructor._observers=new Map;observers.forEach(// eslint-disable-next-line @typescript-eslint/no-explicit-any
(v,k)=>proto.constructor._observers.set(k,v))}// set this method
proto.constructor._observers.set(propName,observer)};_exports.observer=observer;var observer$1={observer:observer};/*! *****************************************************************************
   Copyright (c) Microsoft Corporation.
   
   Permission to use, copy, modify, and/or distribute this software for any
   purpose with or without fee is hereby granted.
   
   THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
   REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
   AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
   INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
   LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
   OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
   PERFORMANCE OF THIS SOFTWARE.
   ***************************************************************************** */ /* global Reflect, Promise */_exports.$observer=observer$1;var extendStatics$1=function(d,b){extendStatics$1=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)if(Object.prototype.hasOwnProperty.call(b,p))d[p]=b[p]};return extendStatics$1(d,b)};function __extends$1(d,b){if("function"!==typeof b&&null!==b)throw new TypeError("Class extends value "+(b+"")+" is not a constructor or null");extendStatics$1(d,b);function __(){this.constructor=d}d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)}var __assign$1=function(){_exports.__assign=__assign$1=Object.assign||function __assign(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p))t[p]=s[p]}return t};return __assign$1.apply(this,arguments)};_exports.__assign=__assign$1;function __rest$1(s,e){var t={};for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p)&&0>e.indexOf(p))t[p]=s[p];if(null!=s&&"function"===typeof Object.getOwnPropertySymbols)for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(0>e.indexOf(p[i])&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]]}return t}function __decorate$1(decorators,target,key,desc){var c=arguments.length,r=3>c?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;0<=i;i--)if(d=decorators[i])r=(3>c?d(r):3<c?d(target,key,r):d(target,key))||r;return 3<c&&r&&Object.defineProperty(target,key,r),r}function __param$1(paramIndex,decorator){return function(target,key){decorator(target,key,paramIndex)}}function __metadata$1(metadataKey,metadataValue){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(metadataKey,metadataValue)}function __awaiter$1(thisArg,_arguments,P,generator){function adopt(value){return value instanceof P?value:new P(function(resolve){resolve(value)})}return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value))}catch(e){reject(e)}}function rejected(value){try{step(generator["throw"](value))}catch(e){reject(e)}}function step(result){result.done?resolve(result.value):adopt(result.value).then(fulfilled,rejected)}step((generator=generator.apply(thisArg,_arguments||[])).next())})}function __generator$1(thisArg,body){var _={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]},f,y,t,g;return g={next:verb(0),throw:verb(1),return:verb(2)},"function"===typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return step([n,v])}}function step(op){if(f)throw new TypeError("Generator is already executing.");while(_)try{if(f=1,y&&(t=2&op[0]?y["return"]:op[0]?y["throw"]||((t=y["return"])&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;if(y=0,t)op=[2&op[0],t.value];switch(op[0]){case 0:case 1:t=op;break;case 4:_.label++;return{value:op[1],done:!1};case 5:_.label++;y=op[1];op=[0];continue;case 7:op=_.ops.pop();_.trys.pop();continue;default:if(!(t=_.trys,t=0<t.length&&t[t.length-1])&&(6===op[0]||2===op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1];t=op;break}if(t&&_.label<t[2]){_.label=t[2];_.ops.push(op);break}if(t[2])_.ops.pop();_.trys.pop();continue;}op=body.call(thisArg,_)}catch(e){op=[6,e];y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}}var __createBinding$1=Object.create?function(o,m,k,k2){if(k2===void 0)k2=k;Object.defineProperty(o,k2,{enumerable:!0,get:function(){return m[k]}})}:function(o,m,k,k2){if(k2===void 0)k2=k;o[k2]=m[k]};_exports.__createBinding=__createBinding$1;function __exportStar$1(m,o){for(var p in m)if("default"!==p&&!Object.prototype.hasOwnProperty.call(o,p))__createBinding$1(o,m,p)}function __values$1(o){var s="function"===typeof Symbol&&Symbol.iterator,m=s&&o[s],i=0;if(m)return m.call(o);if(o&&"number"===typeof o.length)return{next:function(){if(o&&i>=o.length)o=void 0;return{value:o&&o[i++],done:!o}}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.")}function __read$1(o,n){var m="function"===typeof Symbol&&o[Symbol.iterator];if(!m)return o;var i=m.call(o),r,ar=[],e;try{while((void 0===n||0<n--)&&!(r=i.next()).done)ar.push(r.value)}catch(error){e={error:error}}finally{try{if(r&&!r.done&&(m=i["return"]))m.call(i)}finally{if(e)throw e.error}}return ar}/** @deprecated */function __spread$1(){for(var ar=[],i=0;i<arguments.length;i++)ar=ar.concat(__read$1(arguments[i]));return ar}/** @deprecated */function __spreadArrays$1(){for(var s=0,i=0,il=arguments.length;i<il;i++)s+=arguments[i].length;for(var r=Array(s),k=0,i=0;i<il;i++)for(var a=arguments[i],j=0,jl=a.length;j<jl;j++,k++)r[k]=a[j];return r}function __spreadArray(to,from){for(var i=0,il=from.length,j=to.length;i<il;i++,j++)to[j]=from[i];return to}function __await$1(v){return this instanceof __await$1?(this.v=v,this):new __await$1(v)}function __asyncGenerator$1(thisArg,_arguments,generator){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var g=generator.apply(thisArg,_arguments||[]),i,q=[];return i={},verb("next"),verb("throw"),verb("return"),i[Symbol.asyncIterator]=function(){return this},i;function verb(n){if(g[n])i[n]=function(v){return new Promise(function(a,b){1<q.push([n,v,a,b])||resume(n,v)})}}function resume(n,v){try{step(g[n](v))}catch(e){settle(q[0][3],e)}}function step(r){r.value instanceof __await$1?Promise.resolve(r.value.v).then(fulfill,reject):settle(q[0][2],r)}function fulfill(value){resume("next",value)}function reject(value){resume("throw",value)}function settle(f,v){if(f(v),q.shift(),q.length)resume(q[0][0],q[0][1])}}function __asyncDelegator$1(o){var i,p;return i={},verb("next"),verb("throw",function(e){throw e}),verb("return"),i[Symbol.iterator]=function(){return this},i;function verb(n,f){i[n]=o[n]?function(v){return(p=!p)?{value:__await$1(o[n](v)),done:"return"===n}:f?f(v):v}:f}}function __asyncValues$1(o){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var m=o[Symbol.asyncIterator],i;return m?m.call(o):(o="function"===typeof __values$1?__values$1(o):o[Symbol.iterator](),i={},verb("next"),verb("throw"),verb("return"),i[Symbol.asyncIterator]=function(){return this},i);function verb(n){i[n]=o[n]&&function(v){return new Promise(function(resolve,reject){v=o[n](v),settle(resolve,reject,v.done,v.value)})}}function settle(resolve,reject,d,v){Promise.resolve(v).then(function(v){resolve({value:v,done:d})},reject)}}function __makeTemplateObject$1(cooked,raw){if(Object.defineProperty){Object.defineProperty(cooked,"raw",{value:raw})}else{cooked.raw=raw}return cooked};var __setModuleDefault=Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:!0,value:v})}:function(o,v){o["default"]=v};function __importStar$1(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)if("default"!==k&&Object.prototype.hasOwnProperty.call(mod,k))__createBinding$1(result,mod,k);__setModuleDefault(result,mod);return result}function __importDefault$1(mod){return mod&&mod.__esModule?mod:{default:mod}}function __classPrivateFieldGet$1(receiver,privateMap){if(!privateMap.has(receiver)){throw new TypeError("attempted to get private field on non-instance")}return privateMap.get(receiver)}function __classPrivateFieldSet$1(receiver,privateMap,value){if(!privateMap.has(receiver)){throw new TypeError("attempted to set private field on non-instance")}privateMap.set(receiver,value);return value}var tslib_es6$1={__extends:__extends$1,get __assign(){return __assign$1},__rest:__rest$1,__decorate:__decorate$1,__param:__param$1,__metadata:__metadata$1,__awaiter:__awaiter$1,__generator:__generator$1,__createBinding:__createBinding$1,__exportStar:__exportStar$1,__values:__values$1,__read:__read$1,__spread:__spread$1,__spreadArrays:__spreadArrays$1,__spreadArray:__spreadArray,__await:__await$1,__asyncGenerator:__asyncGenerator$1,__asyncDelegator:__asyncDelegator$1,__asyncValues:__asyncValues$1,__makeTemplateObject:__makeTemplateObject$1,__importStar:__importStar$1,__importDefault:__importDefault$1,__classPrivateFieldGet:__classPrivateFieldGet$1,__classPrivateFieldSet:__classPrivateFieldSet$1};/**
    * @license
    * Copyright 2016 Google Inc. All rights reserved.
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    *     http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    */_exports.$tslibEs6=tslib_es6$1;(()=>{var _a,_b,_c;/* Symbols for private properties */const _blockingElements=Symbol(),_alreadyInertElements=Symbol(),_topElParents=Symbol(),_siblingsToRestore=Symbol(),_parentMO=Symbol(),_topChanged=Symbol(),_swapInertedSibling=Symbol(),_inertSiblings=Symbol(),_restoreInertedSiblings=Symbol(),_getParents=Symbol(),_getDistributedChildren=Symbol(),_isInertable=Symbol(),_handleMutations=Symbol();class BlockingElementsImpl{constructor(){/**
       * The blocking elements.
       */this[_a]=[];/**
                         * Used to keep track of the parents of the top element, from the element
                         * itself up to body. When top changes, the old top might have been removed
                         * from the document, so we need to memoize the inerted parents' siblings
                         * in order to restore their inerteness when top changes.
                         */this[_b]=[];/**
                      * Elements that are already inert before the first blocking element is
                      * pushed.
                      */this[_c]=new Set}destructor(){// Restore original inertness.
this[_restoreInertedSiblings](this[_topElParents]);// Note we don't want to make these properties nullable on the class,
// since then we'd need non-null casts in many places. Calling a method on
// a BlockingElements instance after calling destructor will result in an
// exception.
const nullable=this;nullable[_blockingElements]=null;nullable[_topElParents]=null;nullable[_alreadyInertElements]=null}get top(){const elems=this[_blockingElements];return elems[elems.length-1]||null}push(element){if(!element||element===this.top){return}// Remove it from the stack, we'll bring it to the top.
this.remove(element);this[_topChanged](element);this[_blockingElements].push(element)}remove(element){const i=this[_blockingElements].indexOf(element);if(-1===i){return!1}this[_blockingElements].splice(i,1);// Top changed only if the removed element was the top element.
if(i===this[_blockingElements].length){this[_topChanged](this.top)}return!0}pop(){const top=this.top;top&&this.remove(top);return top}has(element){return-1!==this[_blockingElements].indexOf(element)}/**
       * Sets `inert` to all document elements except the new top element, its
       * parents, and its distributed content.
       */[(_a=_blockingElements,_b=_topElParents,_c=_alreadyInertElements,_topChanged)](newTop){const toKeepInert=this[_alreadyInertElements],oldParents=this[_topElParents];// No new top, reset old top if any.
if(!newTop){this[_restoreInertedSiblings](oldParents);toKeepInert.clear();this[_topElParents]=[];return}const newParents=this[_getParents](newTop);// New top is not contained in the main document!
if(newParents[newParents.length-1].parentNode!==document.body){throw Error("Non-connected element cannot be a blocking element")}// Cast here because we know we'll call _inertSiblings on newParents
// below.
this[_topElParents]=newParents;const toSkip=this[_getDistributedChildren](newTop);// No previous top element.
if(!oldParents.length){this[_inertSiblings](newParents,toSkip,toKeepInert);return}let i=oldParents.length-1,j=newParents.length-1;// Find common parent. Index 0 is the element itself (so stop before it).
while(0<i&&0<j&&oldParents[i]===newParents[j]){i--;j--}// If up the parents tree there are 2 elements that are siblings, swap
// the inerted sibling.
if(oldParents[i]!==newParents[j]){this[_swapInertedSibling](oldParents[i],newParents[j])}// Restore old parents siblings inertness.
0<i&&this[_restoreInertedSiblings](oldParents.slice(0,i));// Make new parents siblings inert.
0<j&&this[_inertSiblings](newParents.slice(0,j),toSkip,null)}/**
       * Swaps inertness between two sibling elements.
       * Sets the property `inert` over the attribute since the inert spec
       * doesn't specify if it should be reflected.
       * https://html.spec.whatwg.org/multipage/interaction.html#inert
       */[_swapInertedSibling](oldInert,newInert){const siblingsToRestore=oldInert[_siblingsToRestore];// oldInert is not contained in siblings to restore, so we have to check
// if it's inertable and if already inert.
if(this[_isInertable](oldInert)&&!oldInert.inert){oldInert.inert=!0;siblingsToRestore.add(oldInert)}// If newInert was already between the siblings to restore, it means it is
// inertable and must be restored.
if(siblingsToRestore.has(newInert)){newInert.inert=!1;siblingsToRestore.delete(newInert)}newInert[_parentMO]=oldInert[_parentMO];newInert[_siblingsToRestore]=siblingsToRestore;oldInert[_parentMO]=void 0;oldInert[_siblingsToRestore]=void 0}/**
       * Restores original inertness to the siblings of the elements.
       * Sets the property `inert` over the attribute since the inert spec
       * doesn't specify if it should be reflected.
       * https://html.spec.whatwg.org/multipage/interaction.html#inert
       */[_restoreInertedSiblings](elements){for(const element of elements){const mo=element[_parentMO];mo.disconnect();element[_parentMO]=void 0;const siblings=element[_siblingsToRestore];for(const sibling of siblings){sibling.inert=!1}element[_siblingsToRestore]=void 0}}/**
       * Inerts the siblings of the elements except the elements to skip. Stores
       * the inerted siblings into the element's symbol `_siblingsToRestore`.
       * Pass `toKeepInert` to collect the already inert elements.
       * Sets the property `inert` over the attribute since the inert spec
       * doesn't specify if it should be reflected.
       * https://html.spec.whatwg.org/multipage/interaction.html#inert
       */[_inertSiblings](elements,toSkip,toKeepInert){for(const element of elements){// Assume element is not a Document, so it must have a parentNode.
const parent=element.parentNode,children=parent.children,inertedSiblings=new Set;for(let j=0;j<children.length;j++){const sibling=children[j];// Skip the input element, if not inertable or to be skipped.
if(sibling===element||!this[_isInertable](sibling)||toSkip&&toSkip.has(sibling)){continue}// Should be collected since already inerted.
if(toKeepInert&&sibling.inert){toKeepInert.add(sibling)}else{sibling.inert=!0;inertedSiblings.add(sibling)}}// Store the siblings that were inerted.
element[_siblingsToRestore]=inertedSiblings;// Observe only immediate children mutations on the parent.
const mo=new MutationObserver(this[_handleMutations].bind(this));element[_parentMO]=mo;let parentToObserve=parent;// If we're using the ShadyDOM polyfill, then our parent could be a
// shady root, which is an object that acts like a ShadowRoot, but isn't
// actually a node in the real DOM. Observe the real DOM parent instead.
const maybeShadyRoot=parentToObserve;if(maybeShadyRoot.__shady&&maybeShadyRoot.host){parentToObserve=maybeShadyRoot.host}mo.observe(parentToObserve,{childList:!0})}}/**
       * Handles newly added/removed nodes by toggling their inertness.
       * It also checks if the current top Blocking Element has been removed,
       * notifying and removing it.
       */[_handleMutations](mutations){const parents=this[_topElParents],toKeepInert=this[_alreadyInertElements];for(const mutation of mutations){// If the target is a shadowRoot, get its host as we skip shadowRoots when
// computing _topElParents.
const target=mutation.target.host||mutation.target,idx=target===document.body?parents.length:parents.indexOf(target),inertedChild=parents[idx-1],inertedSiblings=inertedChild[_siblingsToRestore];// To restore.
for(let i=0;i<mutation.removedNodes.length;i++){const sibling=mutation.removedNodes[i];if(sibling===inertedChild){console.info("Detected removal of the top Blocking Element.");this.pop();return}if(inertedSiblings.has(sibling)){sibling.inert=!1;inertedSiblings.delete(sibling)}}// To inert.
for(let i=0;i<mutation.addedNodes.length;i++){const sibling=mutation.addedNodes[i];if(!this[_isInertable](sibling)){continue}if(toKeepInert&&sibling.inert){toKeepInert.add(sibling)}else{sibling.inert=!0;inertedSiblings.add(sibling)}}}}/**
       * Returns if the element is inertable.
       */[_isInertable](element){return!1===/^(style|template|script)$/.test(element.localName)}/**
       * Returns the list of newParents of an element, starting from element
       * (included) up to `document.body` (excluded).
       */[_getParents](element){const parents=[];let current=element;// Stop to body.
while(current&&current!==document.body){// Skip shadow roots.
if(current.nodeType===Node.ELEMENT_NODE){parents.push(current)}// ShadowDom v1
if(current.assignedSlot){// Collect slots from deepest slot to top.
while(current=current.assignedSlot){parents.push(current)}// Continue the search on the top slot.
current=parents.pop();continue}current=current.parentNode||current.host}return parents}/**
       * Returns the distributed children of the element's shadow root.
       * Returns null if the element doesn't have a shadow root.
       */[_getDistributedChildren](element){const shadowRoot=element.shadowRoot;if(!shadowRoot){return null}const result=new Set;let i,j,nodes;const slots=shadowRoot.querySelectorAll("slot");if(slots.length&&slots[0].assignedNodes){for(i=0;i<slots.length;i++){nodes=slots[i].assignedNodes({flatten:!0});for(j=0;j<nodes.length;j++){if(nodes[j].nodeType===Node.ELEMENT_NODE){result.add(nodes[j])}}}// No need to search for <content>.
}return result}}document.$blockingElements=new BlockingElementsImpl})();var _createClass=function(){function defineProperties(target,props){for(var i=0,descriptor;i<props.length;i++){descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1;descriptor.configurable=!0;if("value"in descriptor)descriptor.writable=!0;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}/**
   * This work is licensed under the W3C Software and Document License
   * (http://www.w3.org/Consortium/Legal/2015/copyright-software-and-document).
   */(function(){// Return early if we're not running inside of the browser.
if("undefined"===typeof window){return}// Convenience function for converting NodeLists.
/** @type {typeof Array.prototype.slice} */var slice=Array.prototype.slice,matches=Element.prototype.matches||Element.prototype.msMatchesSelector,_focusableElementsString=["a[href]","area[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","details","summary","iframe","object","embed","[contenteditable]"].join(","),InertRoot=function(){/**
     * @param {!Element} rootElement The Element at the root of the inert subtree.
     * @param {!InertManager} inertManager The global singleton InertManager object.
     */function InertRoot(rootElement,inertManager){_classCallCheck(this,InertRoot);/** @type {!InertManager} */this._inertManager=inertManager;/** @type {!Element} */this._rootElement=rootElement;/**
                                        * @type {!Set<!InertNode>}
                                        * All managed focusable nodes in this InertRoot's subtree.
                                        */this._managedNodes=new Set;// Make the subtree hidden from assistive technology
if(this._rootElement.hasAttribute("aria-hidden")){/** @type {?string} */this._savedAriaHidden=this._rootElement.getAttribute("aria-hidden")}else{this._savedAriaHidden=null}this._rootElement.setAttribute("aria-hidden","true");// Make all focusable elements in the subtree unfocusable and add them to _managedNodes
this._makeSubtreeUnfocusable(this._rootElement);// Watch for:
// - any additions in the subtree: make them unfocusable too
// - any removals from the subtree: remove them from this inert root's managed nodes
// - attribute changes: if `tabindex` is added, or removed from an intrinsically focusable
//   element, make that node a managed node.
this._observer=new MutationObserver(this._onMutation.bind(this));this._observer.observe(this._rootElement,{attributes:!0,childList:!0,subtree:!0})}/**
       * Call this whenever this object is about to become obsolete.  This unwinds all of the state
       * stored in this object and updates the state of all of the managed nodes.
       */_createClass(InertRoot,[{key:"destructor",value:function destructor(){this._observer.disconnect();if(this._rootElement){if(null!==this._savedAriaHidden){this._rootElement.setAttribute("aria-hidden",this._savedAriaHidden)}else{this._rootElement.removeAttribute("aria-hidden")}}this._managedNodes.forEach(function(inertNode){this._unmanageNode(inertNode.node)},this);// Note we cast the nulls to the ANY type here because:
// 1) We want the class properties to be declared as non-null, or else we
//    need even more casts throughout this code. All bets are off if an
//    instance has been destroyed and a method is called.
// 2) We don't want to cast "this", because we want type-aware optimizations
//    to know which properties we're setting.
this._observer=/** @type {?} */null;this._rootElement=/** @type {?} */null;this._managedNodes=/** @type {?} */null;this._inertManager=/** @type {?} */null}/**
         * @return {!Set<!InertNode>} A copy of this InertRoot's managed nodes set.
         */},{key:"_makeSubtreeUnfocusable",/**
       * @param {!Node} startNode
       */value:function _makeSubtreeUnfocusable(startNode){var _this2=this;composedTreeWalk(startNode,function(node){return _this2._visitNode(node)});var activeElement=document.activeElement;if(!document.body.contains(startNode)){// startNode may be in shadow DOM, so find its nearest shadowRoot to get the activeElement.
var node=startNode,root=void 0;/** @type {!ShadowRoot|undefined} */while(node){if(node.nodeType===Node.DOCUMENT_FRAGMENT_NODE){root=/** @type {!ShadowRoot} */node;break}node=node.parentNode}if(root){activeElement=root.activeElement}}if(startNode.contains(activeElement)){activeElement.blur();// In IE11, if an element is already focused, and then set to tabindex=-1
// calling blur() will not actually move the focus.
// To work around this we call focus() on the body instead.
if(activeElement===document.activeElement){document.body.focus()}}}/**
         * @param {!Node} node
         */},{key:"_visitNode",value:function _visitNode(node){if(node.nodeType!==Node.ELEMENT_NODE){return}var element=/** @type {!Element} */node;// If a descendant inert root becomes un-inert, its descendants will still be inert because of
// this inert root, so all of its managed nodes need to be adopted by this InertRoot.
if(element!==this._rootElement&&element.hasAttribute("inert")){this._adoptInertRoot(element)}if(matches.call(element,_focusableElementsString)||element.hasAttribute("tabindex")){this._manageNode(element)}}/**
         * Register the given node with this InertRoot and with InertManager.
         * @param {!Node} node
         */},{key:"_manageNode",value:function _manageNode(node){var inertNode=this._inertManager.register(node,this);this._managedNodes.add(inertNode)}/**
         * Unregister the given node with this InertRoot and with InertManager.
         * @param {!Node} node
         */},{key:"_unmanageNode",value:function _unmanageNode(node){var inertNode=this._inertManager.deregister(node,this);if(inertNode){this._managedNodes["delete"](inertNode)}}/**
         * Unregister the entire subtree starting at `startNode`.
         * @param {!Node} startNode
         */},{key:"_unmanageSubtree",value:function _unmanageSubtree(startNode){var _this3=this;composedTreeWalk(startNode,function(node){return _this3._unmanageNode(node)})}/**
         * If a descendant node is found with an `inert` attribute, adopt its managed nodes.
         * @param {!Element} node
         */},{key:"_adoptInertRoot",value:function _adoptInertRoot(node){var inertSubroot=this._inertManager.getInertRoot(node);// During initialisation this inert root may not have been registered yet,
// so register it now if need be.
if(!inertSubroot){this._inertManager.setInert(node,!0);inertSubroot=this._inertManager.getInertRoot(node)}inertSubroot.managedNodes.forEach(function(savedInertNode){this._manageNode(savedInertNode.node)},this)}/**
         * Callback used when mutation observer detects subtree additions, removals, or attribute changes.
         * @param {!Array<!MutationRecord>} records
         * @param {!MutationObserver} self
         */},{key:"_onMutation",value:function _onMutation(records,self){records.forEach(function(record){var target=/** @type {!Element} */record.target;if("childList"===record.type){// Manage added nodes
slice.call(record.addedNodes).forEach(function(node){this._makeSubtreeUnfocusable(node)},this);// Un-manage removed nodes
slice.call(record.removedNodes).forEach(function(node){this._unmanageSubtree(node)},this)}else if("attributes"===record.type){if("tabindex"===record.attributeName){// Re-initialise inert node if tabindex changes
this._manageNode(target)}else if(target!==this._rootElement&&"inert"===record.attributeName&&target.hasAttribute("inert")){// If a new inert root is added, adopt its managed nodes and make sure it knows about the
// already managed nodes from this inert subroot.
this._adoptInertRoot(target);var inertSubroot=this._inertManager.getInertRoot(target);this._managedNodes.forEach(function(managedNode){if(target.contains(managedNode.node)){inertSubroot._manageNode(managedNode.node)}})}}},this)}},{key:"managedNodes",get:function get(){return new Set(this._managedNodes)}/** @return {boolean} */},{key:"hasSavedAriaHidden",get:function get(){return null!==this._savedAriaHidden}/** @param {?string} ariaHidden */},{key:"savedAriaHidden",set:function set(ariaHidden){this._savedAriaHidden=ariaHidden}/** @return {?string} */,get:function get(){return this._savedAriaHidden}}]);return InertRoot}(),InertNode=function(){/**
     * @param {!Node} node A focusable element to be made inert.
     * @param {!InertRoot} inertRoot The inert root element associated with this inert node.
     */function InertNode(node,inertRoot){_classCallCheck(this,InertNode);/** @type {!Node} */this._node=node;/** @type {boolean} */this._overrodeFocusMethod=!1;/**
                                          * @type {!Set<!InertRoot>} The set of descendant inert roots.
                                          *    If and only if this set becomes empty, this node is no longer inert.
                                          */this._inertRoots=new Set([inertRoot]);/** @type {?number} */this._savedTabIndex=null;/** @type {boolean} */this._destroyed=!1;// Save any prior tabindex info and make this node untabbable
this.ensureUntabbable()}/**
       * Call this whenever this object is about to become obsolete.
       * This makes the managed node focusable again and deletes all of the previously stored state.
       */_createClass(InertNode,[{key:"destructor",value:function destructor(){this._throwIfDestroyed();if(this._node&&this._node.nodeType===Node.ELEMENT_NODE){var element=/** @type {!Element} */this._node;if(null!==this._savedTabIndex){element.setAttribute("tabindex",this._savedTabIndex)}else{element.removeAttribute("tabindex")}// Use `delete` to restore native focus method.
if(this._overrodeFocusMethod){delete element.focus}}// See note in InertRoot.destructor for why we cast these nulls to ANY.
this._node=/** @type {?} */null;this._inertRoots=/** @type {?} */null;this._destroyed=!0}/**
         * @type {boolean} Whether this object is obsolete because the managed node is no longer inert.
         * If the object has been destroyed, any attempt to access it will cause an exception.
         */},{key:"_throwIfDestroyed",/**
       * Throw if user tries to access destroyed InertNode.
       */value:function _throwIfDestroyed(){if(this.destroyed){throw new Error("Trying to access destroyed InertNode")}}/** @return {boolean} */},{key:"ensureUntabbable",/** Save the existing tabindex value and make the node untabbable and unfocusable */value:function ensureUntabbable(){if(this.node.nodeType!==Node.ELEMENT_NODE){return}var element=/** @type {!Element} */this.node;if(matches.call(element,_focusableElementsString)){if(/** @type {!HTMLElement} */-1===element.tabIndex&&this.hasSavedTabIndex){return}if(element.hasAttribute("tabindex")){this._savedTabIndex=/** @type {!HTMLElement} */element.tabIndex}element.setAttribute("tabindex","-1");if(element.nodeType===Node.ELEMENT_NODE){element.focus=function(){};this._overrodeFocusMethod=!0}}else if(element.hasAttribute("tabindex")){this._savedTabIndex=/** @type {!HTMLElement} */element.tabIndex;element.removeAttribute("tabindex")}}/**
         * Add another inert root to this inert node's set of managing inert roots.
         * @param {!InertRoot} inertRoot
         */},{key:"addInertRoot",value:function addInertRoot(inertRoot){this._throwIfDestroyed();this._inertRoots.add(inertRoot)}/**
         * Remove the given inert root from this inert node's set of managing inert roots.
         * If the set of managing inert roots becomes empty, this node is no longer inert,
         * so the object should be destroyed.
         * @param {!InertRoot} inertRoot
         */},{key:"removeInertRoot",value:function removeInertRoot(inertRoot){this._throwIfDestroyed();this._inertRoots["delete"](inertRoot);if(0===this._inertRoots.size){this.destructor()}}},{key:"destroyed",get:function get(){return(/** @type {!InertNode} */this._destroyed)}},{key:"hasSavedTabIndex",get:function get(){return null!==this._savedTabIndex}/** @return {!Node} */},{key:"node",get:function get(){this._throwIfDestroyed();return this._node}/** @param {?number} tabIndex */},{key:"savedTabIndex",set:function set(tabIndex){this._throwIfDestroyed();this._savedTabIndex=tabIndex}/** @return {?number} */,get:function get(){this._throwIfDestroyed();return this._savedTabIndex}}]);return InertNode}(),InertManager=function(){/**
     * @param {!Document} document
     */function InertManager(document){_classCallCheck(this,InertManager);if(!document){throw new Error("Missing required argument; InertManager needs to wrap a document.")}/** @type {!Document} */this._document=document;/**
                                  * All managed nodes known to this InertManager. In a map to allow looking up by Node.
                                  * @type {!Map<!Node, !InertNode>}
                                  */this._managedNodes=new Map;/**
                                       * All inert roots known to this InertManager. In a map to allow looking up by Node.
                                       * @type {!Map<!Node, !InertRoot>}
                                       */this._inertRoots=new Map;/**
                                     * Observer for mutations on `document.body`.
                                     * @type {!MutationObserver}
                                     */this._observer=new MutationObserver(this._watchForInert.bind(this));// Add inert style.
addInertStyle(document.head||document.body||document.documentElement);// Wait for document to be loaded.
if("loading"===document.readyState){document.addEventListener("DOMContentLoaded",this._onDocumentLoaded.bind(this))}else{this._onDocumentLoaded()}}/**
       * Set whether the given element should be an inert root or not.
       * @param {!Element} root
       * @param {boolean} inert
       */_createClass(InertManager,[{key:"setInert",value:function setInert(root,inert){if(inert){if(this._inertRoots.has(root)){// element is already inert
return}var inertRoot=new InertRoot(root,this);root.setAttribute("inert","");this._inertRoots.set(root,inertRoot);// If not contained in the document, it must be in a shadowRoot.
// Ensure inert styles are added there.
if(!this._document.body.contains(root)){var parent=root.parentNode;while(parent){if(11===parent.nodeType){addInertStyle(parent)}parent=parent.parentNode}}}else{if(!this._inertRoots.has(root)){// element is already non-inert
return}var _inertRoot=this._inertRoots.get(root);_inertRoot.destructor();this._inertRoots["delete"](root);root.removeAttribute("inert")}}/**
         * Get the InertRoot object corresponding to the given inert root element, if any.
         * @param {!Node} element
         * @return {!InertRoot|undefined}
         */},{key:"getInertRoot",value:function getInertRoot(element){return this._inertRoots.get(element)}/**
         * Register the given InertRoot as managing the given node.
         * In the case where the node has a previously existing inert root, this inert root will
         * be added to its set of inert roots.
         * @param {!Node} node
         * @param {!InertRoot} inertRoot
         * @return {!InertNode} inertNode
         */},{key:"register",value:function register(node,inertRoot){var inertNode=this._managedNodes.get(node);if(inertNode!==void 0){// node was already in an inert subtree
inertNode.addInertRoot(inertRoot)}else{inertNode=new InertNode(node,inertRoot)}this._managedNodes.set(node,inertNode);return inertNode}/**
         * De-register the given InertRoot as managing the given inert node.
         * Removes the inert root from the InertNode's set of managing inert roots, and remove the inert
         * node from the InertManager's set of managed nodes if it is destroyed.
         * If the node is not currently managed, this is essentially a no-op.
         * @param {!Node} node
         * @param {!InertRoot} inertRoot
         * @return {?InertNode} The potentially destroyed InertNode associated with this node, if any.
         */},{key:"deregister",value:function deregister(node,inertRoot){var inertNode=this._managedNodes.get(node);if(!inertNode){return null}inertNode.removeInertRoot(inertRoot);if(inertNode.destroyed){this._managedNodes["delete"](node)}return inertNode}/**
         * Callback used when document has finished loading.
         */},{key:"_onDocumentLoaded",value:function _onDocumentLoaded(){// Find all inert roots in document and make them actually inert.
var inertElements=slice.call(this._document.querySelectorAll("[inert]"));inertElements.forEach(function(inertElement){this.setInert(inertElement,!0)},this);// Comment this out to use programmatic API only.
this._observer.observe(this._document.body||this._document.documentElement,{attributes:!0,subtree:!0,childList:!0})}/**
         * Callback used when mutation observer detects attribute changes.
         * @param {!Array<!MutationRecord>} records
         * @param {!MutationObserver} self
         */},{key:"_watchForInert",value:function _watchForInert(records,self){var _this=this;records.forEach(function(record){switch(record.type){case"childList":slice.call(record.addedNodes).forEach(function(node){if(node.nodeType!==Node.ELEMENT_NODE){return}var inertElements=slice.call(node.querySelectorAll("[inert]"));if(matches.call(node,"[inert]")){inertElements.unshift(node)}inertElements.forEach(function(inertElement){this.setInert(inertElement,!0)},_this)},_this);break;case"attributes":if("inert"!==record.attributeName){return}var target=/** @type {!Element} */record.target,inert=target.hasAttribute("inert");_this.setInert(target,inert);break;}},this)}}]);return InertManager}();/**
                                      * IE has a non-standard name for "matches".
                                      * @type {typeof Element.prototype.matches}
                                      */ /**
        * Recursively walk the composed tree from |node|.
        * @param {!Node} node
        * @param {(function (!Element))=} callback Callback to be called for each element traversed,
        *     before descending into child nodes.
        * @param {?ShadowRoot=} shadowRootAncestor The nearest ShadowRoot ancestor, if any.
        */function composedTreeWalk(node,callback,shadowRootAncestor){if(node.nodeType==Node.ELEMENT_NODE){var element=/** @type {!Element} */node;if(callback){callback(element)}// Descend into node:
// If it has a ShadowRoot, ignore all child elements - these will be picked
// up by the <content> or <shadow> elements. Descend straight into the
// ShadowRoot.
var shadowRoot=/** @type {!HTMLElement} */element.shadowRoot;if(shadowRoot){composedTreeWalk(shadowRoot,callback,shadowRoot);return}// If it is a <content> element, descend into distributed elements - these
// are elements from outside the shadow root which are rendered inside the
// shadow DOM.
if("content"==element.localName){for(var content=/** @type {!HTMLContentElement} */element,distributedNodes=content.getDistributedNodes?content.getDistributedNodes():[],i=0;i<distributedNodes.length;i++){composedTreeWalk(distributedNodes[i],callback,shadowRootAncestor)}return}// If it is a <slot> element, descend into assigned nodes - these
// are elements from outside the shadow root which are rendered inside the
// shadow DOM.
if("slot"==element.localName){for(var slot=/** @type {!HTMLSlotElement} */element,_distributedNodes=slot.assignedNodes?slot.assignedNodes({flatten:!0}):[],_i=0;_i<_distributedNodes.length;_i++){composedTreeWalk(_distributedNodes[_i],callback,shadowRootAncestor)}return}}// If it is neither the parent of a ShadowRoot, a <content> element, a <slot>
// element, nor a <shadow> element recurse normally.
var child=node.firstChild;while(null!=child){composedTreeWalk(child,callback,shadowRootAncestor);child=child.nextSibling}}/**
     * Adds a style element to the node containing the inert specific styles
     * @param {!Node} node
     */function addInertStyle(node){if(node.querySelector("style#inert-style, link#inert-style")){return}var style=document.createElement("style");style.setAttribute("id","inert-style");style.textContent="\n"+"[inert] {\n"+"  pointer-events: none;\n"+"  cursor: default;\n"+"}\n"+"\n"+"[inert], [inert] * {\n"+"  -webkit-user-select: none;\n"+"  -moz-user-select: none;\n"+"  -ms-user-select: none;\n"+"  user-select: none;\n"+"}\n";node.appendChild(style)}if(!Element.prototype.hasOwnProperty("inert")){/** @type {!InertManager} */var inertManager=new InertManager(document);Object.defineProperty(Element.prototype,"inert",{enumerable:!0,/** @this {!Element} */get:function get(){return this.hasAttribute("inert")},/** @this {!Element} */set:function set(inert){inertManager.setInert(this,inert)}})}})();class ClassList{constructor(element){this.classes=new Set;this.changed=!1;this.element=element;const classList=(element.getAttribute("class")||"").split(/\s+/);for(const cls of classList){this.classes.add(cls)}}add(cls){this.classes.add(cls);this.changed=!0}remove(cls){this.classes.delete(cls);this.changed=!0}commit(){if(this.changed){let classString="";this.classes.forEach(cls=>classString+=cls+" ");this.element.setAttribute("class",classString)}}}/**
   * Stores the ClassInfo object applied to a given AttributePart.
   * Used to unset existing values when a new ClassInfo object is applied.
   */const previousClassesCache=new WeakMap,classMap=directive(classInfo=>part=>{if(!(part instanceof AttributePart)||part instanceof PropertyPart||"class"!==part.committer.name||1<part.committer.parts.length){throw new Error("The `classMap` directive must be used in the `class` attribute "+"and must be the only part in the attribute.")}const{committer}=part,{element}=committer;let previousClasses=previousClassesCache.get(part);if(previousClasses===void 0){// Write static classes once
// Use setAttribute() because className isn't a string on SVG elements
element.setAttribute("class",committer.strings.join(" "));previousClassesCache.set(part,previousClasses=new Set)}const classList=element.classList||new ClassList(element);// Remove old classes that no longer apply
// We use forEach() instead of for-of so that re don't require down-level
// iteration.
previousClasses.forEach(name=>{if(!(name in classInfo)){classList.remove(name);previousClasses.delete(name)}});// Add or remove classes based on their classMap value
for(const name in classInfo){const value=classInfo[name];if(value!=previousClasses.has(name)){// We explicitly want a loose truthy check of `value` because it seems
// more convenient that '' and 0 are skipped.
if(value){classList.add(name);previousClasses.add(name)}else{classList.remove(name);previousClasses.delete(name)}}}if("function"===typeof classList.commit){classList.commit()}});/**
                                             * A directive that applies CSS classes. This must be used in the `class`
                                             * attribute and must be the only part used in the attribute. It takes each
                                             * property in the `classInfo` argument and adds the property name to the
                                             * element's `class` if the property value is truthy; if the property value is
                                             * falsey, the property name is removed from the element's `class`. For example
                                             * `{foo: bar}` applies the class `foo` if the value of `bar` is truthy.
                                             * @param classInfo {ClassInfo}
                                             */_exports.classMap=classMap;var classMap$1={classMap:classMap};_exports.$classMap=classMap$1;const blockingElements=document.$blockingElements;class DrawerBase extends BaseElement{constructor(){super(...arguments);this._previousFocus=null;this.open=!1;this.hasHeader=!1;this.type=""}get mdcFoundationClass(){return"modal"===this.type?MDCModalDrawerFoundation:MDCDismissibleDrawerFoundation}createAdapter(){return Object.assign(Object.assign({},addHasRemoveClass(this.mdcRoot)),{elementHasClass:(element,className)=>element.classList.contains(className),saveFocus:()=>{// Note, casting to avoid cumbersome runtime check.
this._previousFocus=this.getRootNode().activeElement},restoreFocus:()=>{const previousFocus=this._previousFocus&&this._previousFocus.focus;if(previousFocus){// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
this._previousFocus.focus()}},notifyClose:()=>{this.open=!1;this.dispatchEvent(new Event(strings.CLOSE_EVENT,{bubbles:!0,cancelable:!0}))},notifyOpen:()=>{this.open=!0;this.dispatchEvent(new Event(strings.OPEN_EVENT,{bubbles:!0,cancelable:!0}))},focusActiveNavigationItem:()=>{},trapFocus:()=>{blockingElements.push(this);this.appContent.inert=!0},releaseFocus:()=>{blockingElements.remove(this);this.appContent.inert=!1}})}_handleScrimClick(){if(this.mdcFoundation instanceof MDCModalDrawerFoundation){this.mdcFoundation.handleScrimClick()}}render(){const dismissible="dismissible"===this.type||"modal"===this.type,modal="modal"===this.type,header=this.hasHeader?html`
      <div class="mdc-drawer__header">
        <h3 class="mdc-drawer__title"><slot name="title"></slot></h3>
        <h6 class="mdc-drawer__subtitle"><slot name="subtitle"></slot></h6>
        <slot name="header"></slot>
      </div>
      `:"",classes={"mdc-drawer--dismissible":dismissible,"mdc-drawer--modal":modal};return html`
      <aside class="mdc-drawer ${classMap(classes)}">
        ${header}
        <div class="mdc-drawer__content"><slot></slot></div>
      </aside>
      ${modal?html`<div class="mdc-drawer-scrim"
                          @click="${this._handleScrimClick}"></div>`:""}
      <div class="mdc-drawer-app-content">
        <slot name="appContent"></slot>
      </div>
      `}// note, we avoid calling `super.firstUpdated()` to control when
// `createFoundation()` is called.
firstUpdated(){this.mdcRoot.addEventListener("keydown",e=>this.mdcFoundation.handleKeydown(e));this.mdcRoot.addEventListener("transitionend",e=>this.mdcFoundation.handleTransitionEnd(e))}updated(changedProperties){if(changedProperties.has("type")){this.createFoundation()}}}_exports.DrawerBase=DrawerBase;__decorate$1([query(".mdc-drawer")],DrawerBase.prototype,"mdcRoot",void 0);__decorate$1([query(".mdc-drawer-app-content")],DrawerBase.prototype,"appContent",void 0);__decorate$1([observer(function(value){if(""===this.type){return}if(value){this.mdcFoundation.open()}else{this.mdcFoundation.close()}}),property({type:Boolean,reflect:!0})],DrawerBase.prototype,"open",void 0);__decorate$1([property({type:Boolean})],DrawerBase.prototype,"hasHeader",void 0);__decorate$1([property({reflect:!0})],DrawerBase.prototype,"type",void 0);var mwcDrawerBase={DrawerBase:DrawerBase};_exports.$mwcDrawerBase=mwcDrawerBase;const style=css`.mdc-drawer{border-color:rgba(0, 0, 0, 0.12);background-color:#fff;background-color:var(--mdc-theme-surface, #fff);border-top-left-radius:0;border-top-right-radius:0;border-top-right-radius:var(--mdc-shape-large, 0);border-bottom-right-radius:0;border-bottom-right-radius:var(--mdc-shape-large, 0);border-bottom-left-radius:0;z-index:6;width:256px;display:flex;flex-direction:column;flex-shrink:0;box-sizing:border-box;height:100%;border-right-width:1px;border-right-style:solid;overflow:hidden;transition-property:transform;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.mdc-drawer .mdc-drawer__title{color:rgba(0, 0, 0, 0.87)}.mdc-drawer .mdc-list-group__subheader{color:rgba(0, 0, 0, 0.6)}.mdc-drawer .mdc-drawer__subtitle{color:rgba(0, 0, 0, 0.6)}.mdc-drawer .mdc-list-item__graphic{color:rgba(0, 0, 0, 0.6)}.mdc-drawer .mdc-list-item{color:rgba(0, 0, 0, 0.87)}.mdc-drawer .mdc-list-item--activated .mdc-list-item__graphic{color:#6200ee}.mdc-drawer .mdc-list-item--activated{color:rgba(98, 0, 238, 0.87)}[dir=rtl] .mdc-drawer,.mdc-drawer[dir=rtl]{border-top-left-radius:0;border-top-left-radius:var(--mdc-shape-large, 0);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:0;border-bottom-left-radius:var(--mdc-shape-large, 0)}.mdc-drawer .mdc-list-item{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content{margin-left:256px;margin-right:0}[dir=rtl] .mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content,.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content[dir=rtl]{margin-left:0;margin-right:256px}[dir=rtl] .mdc-drawer,.mdc-drawer[dir=rtl]{border-right-width:0;border-left-width:1px;border-right-style:none;border-left-style:solid}.mdc-drawer .mdc-list-item{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-subtitle2-font-size, 0.875rem);line-height:1.375rem;line-height:var(--mdc-typography-subtitle2-line-height, 1.375rem);font-weight:500;font-weight:var(--mdc-typography-subtitle2-font-weight, 500);letter-spacing:0.0071428571em;letter-spacing:var(--mdc-typography-subtitle2-letter-spacing, 0.0071428571em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle2-text-transform, inherit);height:calc(48px - 2 * 4px);margin:8px 8px;padding:0 8px}.mdc-drawer .mdc-list-item:nth-child(1){margin-top:2px}.mdc-drawer .mdc-list-item:nth-last-child(1){margin-bottom:0}.mdc-drawer .mdc-list-group__subheader{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin:0;padding:0 16px}.mdc-drawer .mdc-list-group__subheader::before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-drawer .mdc-list-divider{margin:3px 0 4px}.mdc-drawer .mdc-list-item__text,.mdc-drawer .mdc-list-item__graphic{pointer-events:none}.mdc-drawer--animate{transform:translateX(-100%)}[dir=rtl] .mdc-drawer--animate,.mdc-drawer--animate[dir=rtl]{transform:translateX(100%)}.mdc-drawer--opening{transform:translateX(0);transition-duration:250ms}[dir=rtl] .mdc-drawer--opening,.mdc-drawer--opening[dir=rtl]{transform:translateX(0)}.mdc-drawer--closing{transform:translateX(-100%);transition-duration:200ms}[dir=rtl] .mdc-drawer--closing,.mdc-drawer--closing[dir=rtl]{transform:translateX(100%)}.mdc-drawer__header{flex-shrink:0;box-sizing:border-box;min-height:64px;padding:0 16px 4px}.mdc-drawer__title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight, 500);letter-spacing:0.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing, 0.0125em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-drawer__title::before{display:inline-block;width:0;height:36px;content:"";vertical-align:0}.mdc-drawer__title::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-drawer__subtitle{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-bottom:0}.mdc-drawer__subtitle::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-drawer__content{height:100%;overflow-y:auto;-webkit-overflow-scrolling:touch}.mdc-drawer--dismissible{left:0;right:initial;display:none;position:absolute}[dir=rtl] .mdc-drawer--dismissible,.mdc-drawer--dismissible[dir=rtl]{left:initial;right:0}.mdc-drawer--dismissible.mdc-drawer--open{display:flex}.mdc-drawer-app-content{margin-left:0;margin-right:0;position:relative}[dir=rtl] .mdc-drawer-app-content,.mdc-drawer-app-content[dir=rtl]{margin-left:0;margin-right:0}.mdc-drawer--modal{box-shadow:0px 8px 10px -5px rgba(0, 0, 0, 0.2),0px 16px 24px 2px rgba(0, 0, 0, 0.14),0px 6px 30px 5px rgba(0,0,0,.12);left:0;right:initial;display:none;position:fixed}.mdc-drawer--modal+.mdc-drawer-scrim{background-color:rgba(0, 0, 0, 0.32)}[dir=rtl] .mdc-drawer--modal,.mdc-drawer--modal[dir=rtl]{left:initial;right:0}.mdc-drawer--modal.mdc-drawer--open{display:flex}.mdc-drawer-scrim{display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index:5;transition-property:opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.mdc-drawer--open+.mdc-drawer-scrim{display:block}.mdc-drawer--animate+.mdc-drawer-scrim{opacity:0}.mdc-drawer--opening+.mdc-drawer-scrim{transition-duration:250ms;opacity:1}.mdc-drawer--closing+.mdc-drawer-scrim{transition-duration:200ms;opacity:0}.mdc-drawer-app-content{overflow:auto;flex:1}:host{display:flex;height:100%}.mdc-drawer{width:256px;width:var(--mdc-drawer-width, 256px)}.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content{margin-left:256px;margin-left:var(--mdc-drawer-width, 256px);margin-right:0}[dir=rtl] .mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content,.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content[dir=rtl]{margin-left:0;margin-right:256px;margin-right:var(--mdc-drawer-width, 256px)}`;_exports.style=style;var mwcDrawerCss={style:style};_exports.$mwcDrawerCss=mwcDrawerCss;let Drawer=class Drawer extends DrawerBase{};_exports.Drawer=Drawer;Drawer.styles=style;_exports.Drawer=Drawer=__decorate$1([customElement("mwc-drawer")],Drawer);var mwcDrawer={get Drawer(){return Drawer}};/*! *****************************************************************************
   Copyright (c) Microsoft Corporation.
   
   Permission to use, copy, modify, and/or distribute this software for any
   purpose with or without fee is hereby granted.
   
   THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
   REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
   AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
   INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
   LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
   OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
   PERFORMANCE OF THIS SOFTWARE.
   ***************************************************************************** */ /* global Reflect, Promise */_exports.$mwcDrawer=mwcDrawer;var extendStatics$2=function(d,b){extendStatics$2=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)if(Object.prototype.hasOwnProperty.call(b,p))d[p]=b[p]};return extendStatics$2(d,b)};function __extends$2(d,b){if("function"!==typeof b&&null!==b)throw new TypeError("Class extends value "+(b+"")+" is not a constructor or null");extendStatics$2(d,b);function __(){this.constructor=d}d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)}var __assign$2=function(){_exports.__assign$1=__assign$2=Object.assign||function __assign(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p))t[p]=s[p]}return t};return __assign$2.apply(this,arguments)};_exports.__assign$1=__assign$2;function __rest$2(s,e){var t={};for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p)&&0>e.indexOf(p))t[p]=s[p];if(null!=s&&"function"===typeof Object.getOwnPropertySymbols)for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(0>e.indexOf(p[i])&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]]}return t}function __decorate$2(decorators,target,key,desc){var c=arguments.length,r=3>c?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;0<=i;i--)if(d=decorators[i])r=(3>c?d(r):3<c?d(target,key,r):d(target,key))||r;return 3<c&&r&&Object.defineProperty(target,key,r),r}function __param$2(paramIndex,decorator){return function(target,key){decorator(target,key,paramIndex)}}function __metadata$2(metadataKey,metadataValue){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(metadataKey,metadataValue)}function __awaiter$2(thisArg,_arguments,P,generator){function adopt(value){return value instanceof P?value:new P(function(resolve){resolve(value)})}return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value))}catch(e){reject(e)}}function rejected(value){try{step(generator["throw"](value))}catch(e){reject(e)}}function step(result){result.done?resolve(result.value):adopt(result.value).then(fulfilled,rejected)}step((generator=generator.apply(thisArg,_arguments||[])).next())})}function __generator$2(thisArg,body){var _={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]},f,y,t,g;return g={next:verb(0),throw:verb(1),return:verb(2)},"function"===typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return step([n,v])}}function step(op){if(f)throw new TypeError("Generator is already executing.");while(_)try{if(f=1,y&&(t=2&op[0]?y["return"]:op[0]?y["throw"]||((t=y["return"])&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;if(y=0,t)op=[2&op[0],t.value];switch(op[0]){case 0:case 1:t=op;break;case 4:_.label++;return{value:op[1],done:!1};case 5:_.label++;y=op[1];op=[0];continue;case 7:op=_.ops.pop();_.trys.pop();continue;default:if(!(t=_.trys,t=0<t.length&&t[t.length-1])&&(6===op[0]||2===op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1];t=op;break}if(t&&_.label<t[2]){_.label=t[2];_.ops.push(op);break}if(t[2])_.ops.pop();_.trys.pop();continue;}op=body.call(thisArg,_)}catch(e){op=[6,e];y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}}var __createBinding$2=Object.create?function(o,m,k,k2){if(k2===void 0)k2=k;Object.defineProperty(o,k2,{enumerable:!0,get:function(){return m[k]}})}:function(o,m,k,k2){if(k2===void 0)k2=k;o[k2]=m[k]};_exports.__createBinding$1=__createBinding$2;function __exportStar$2(m,o){for(var p in m)if("default"!==p&&!Object.prototype.hasOwnProperty.call(o,p))__createBinding$2(o,m,p)}function __values$2(o){var s="function"===typeof Symbol&&Symbol.iterator,m=s&&o[s],i=0;if(m)return m.call(o);if(o&&"number"===typeof o.length)return{next:function(){if(o&&i>=o.length)o=void 0;return{value:o&&o[i++],done:!o}}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.")}function __read$2(o,n){var m="function"===typeof Symbol&&o[Symbol.iterator];if(!m)return o;var i=m.call(o),r,ar=[],e;try{while((void 0===n||0<n--)&&!(r=i.next()).done)ar.push(r.value)}catch(error){e={error:error}}finally{try{if(r&&!r.done&&(m=i["return"]))m.call(i)}finally{if(e)throw e.error}}return ar}/** @deprecated */function __spread$2(){for(var ar=[],i=0;i<arguments.length;i++)ar=ar.concat(__read$2(arguments[i]));return ar}/** @deprecated */function __spreadArrays$2(){for(var s=0,i=0,il=arguments.length;i<il;i++)s+=arguments[i].length;for(var r=Array(s),k=0,i=0;i<il;i++)for(var a=arguments[i],j=0,jl=a.length;j<jl;j++,k++)r[k]=a[j];return r}function __spreadArray$1(to,from){for(var i=0,il=from.length,j=to.length;i<il;i++,j++)to[j]=from[i];return to}function __await$2(v){return this instanceof __await$2?(this.v=v,this):new __await$2(v)}function __asyncGenerator$2(thisArg,_arguments,generator){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var g=generator.apply(thisArg,_arguments||[]),i,q=[];return i={},verb("next"),verb("throw"),verb("return"),i[Symbol.asyncIterator]=function(){return this},i;function verb(n){if(g[n])i[n]=function(v){return new Promise(function(a,b){1<q.push([n,v,a,b])||resume(n,v)})}}function resume(n,v){try{step(g[n](v))}catch(e){settle(q[0][3],e)}}function step(r){r.value instanceof __await$2?Promise.resolve(r.value.v).then(fulfill,reject):settle(q[0][2],r)}function fulfill(value){resume("next",value)}function reject(value){resume("throw",value)}function settle(f,v){if(f(v),q.shift(),q.length)resume(q[0][0],q[0][1])}}function __asyncDelegator$2(o){var i,p;return i={},verb("next"),verb("throw",function(e){throw e}),verb("return"),i[Symbol.iterator]=function(){return this},i;function verb(n,f){i[n]=o[n]?function(v){return(p=!p)?{value:__await$2(o[n](v)),done:"return"===n}:f?f(v):v}:f}}function __asyncValues$2(o){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var m=o[Symbol.asyncIterator],i;return m?m.call(o):(o="function"===typeof __values$2?__values$2(o):o[Symbol.iterator](),i={},verb("next"),verb("throw"),verb("return"),i[Symbol.asyncIterator]=function(){return this},i);function verb(n){i[n]=o[n]&&function(v){return new Promise(function(resolve,reject){v=o[n](v),settle(resolve,reject,v.done,v.value)})}}function settle(resolve,reject,d,v){Promise.resolve(v).then(function(v){resolve({value:v,done:d})},reject)}}function __makeTemplateObject$2(cooked,raw){if(Object.defineProperty){Object.defineProperty(cooked,"raw",{value:raw})}else{cooked.raw=raw}return cooked};var __setModuleDefault$1=Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:!0,value:v})}:function(o,v){o["default"]=v};function __importStar$2(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)if("default"!==k&&Object.prototype.hasOwnProperty.call(mod,k))__createBinding$2(result,mod,k);__setModuleDefault$1(result,mod);return result}function __importDefault$2(mod){return mod&&mod.__esModule?mod:{default:mod}}function __classPrivateFieldGet$2(receiver,privateMap){if(!privateMap.has(receiver)){throw new TypeError("attempted to get private field on non-instance")}return privateMap.get(receiver)}function __classPrivateFieldSet$2(receiver,privateMap,value){if(!privateMap.has(receiver)){throw new TypeError("attempted to set private field on non-instance")}privateMap.set(receiver,value);return value}var tslib_es6$2={__extends:__extends$2,get __assign(){return __assign$2},__rest:__rest$2,__decorate:__decorate$2,__param:__param$2,__metadata:__metadata$2,__awaiter:__awaiter$2,__generator:__generator$2,__createBinding:__createBinding$2,__exportStar:__exportStar$2,__values:__values$2,__read:__read$2,__spread:__spread$2,__spreadArrays:__spreadArrays$2,__spreadArray:__spreadArray$1,__await:__await$2,__asyncGenerator:__asyncGenerator$2,__asyncDelegator:__asyncDelegator$2,__asyncValues:__asyncValues$2,__makeTemplateObject:__makeTemplateObject$2,__importStar:__importStar$2,__importDefault:__importDefault$2,__classPrivateFieldGet:__classPrivateFieldGet$2,__classPrivateFieldSet:__classPrivateFieldSet$2};/*! *****************************************************************************
   Copyright (c) Microsoft Corporation.
   
   Permission to use, copy, modify, and/or distribute this software for any
   purpose with or without fee is hereby granted.
   
   THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
   REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
   AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
   INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
   LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
   OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
   PERFORMANCE OF THIS SOFTWARE.
   ***************************************************************************** */ /* global Reflect, Promise */_exports.$tslibEs6$1=tslib_es6$2;var extendStatics$3=function(d,b){extendStatics$3=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)if(Object.prototype.hasOwnProperty.call(b,p))d[p]=b[p]};return extendStatics$3(d,b)};function __extends$3(d,b){if("function"!==typeof b&&null!==b)throw new TypeError("Class extends value "+(b+"")+" is not a constructor or null");extendStatics$3(d,b);function __(){this.constructor=d}d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)}var __assign$3=function(){_exports.__assign$3=__assign$3=Object.assign||function __assign(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p))t[p]=s[p]}return t};return __assign$3.apply(this,arguments)};_exports.__assign$3=__assign$3;function __rest$3(s,e){var t={};for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p)&&0>e.indexOf(p))t[p]=s[p];if(null!=s&&"function"===typeof Object.getOwnPropertySymbols)for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(0>e.indexOf(p[i])&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]]}return t}function __decorate$3(decorators,target,key,desc){var c=arguments.length,r=3>c?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;0<=i;i--)if(d=decorators[i])r=(3>c?d(r):3<c?d(target,key,r):d(target,key))||r;return 3<c&&r&&Object.defineProperty(target,key,r),r}function __param$3(paramIndex,decorator){return function(target,key){decorator(target,key,paramIndex)}}function __metadata$3(metadataKey,metadataValue){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(metadataKey,metadataValue)}function __awaiter$3(thisArg,_arguments,P,generator){function adopt(value){return value instanceof P?value:new P(function(resolve){resolve(value)})}return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value))}catch(e){reject(e)}}function rejected(value){try{step(generator["throw"](value))}catch(e){reject(e)}}function step(result){result.done?resolve(result.value):adopt(result.value).then(fulfilled,rejected)}step((generator=generator.apply(thisArg,_arguments||[])).next())})}function __generator$3(thisArg,body){var _={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]},f,y,t,g;return g={next:verb(0),throw:verb(1),return:verb(2)},"function"===typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return step([n,v])}}function step(op){if(f)throw new TypeError("Generator is already executing.");while(_)try{if(f=1,y&&(t=2&op[0]?y["return"]:op[0]?y["throw"]||((t=y["return"])&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;if(y=0,t)op=[2&op[0],t.value];switch(op[0]){case 0:case 1:t=op;break;case 4:_.label++;return{value:op[1],done:!1};case 5:_.label++;y=op[1];op=[0];continue;case 7:op=_.ops.pop();_.trys.pop();continue;default:if(!(t=_.trys,t=0<t.length&&t[t.length-1])&&(6===op[0]||2===op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1];t=op;break}if(t&&_.label<t[2]){_.label=t[2];_.ops.push(op);break}if(t[2])_.ops.pop();_.trys.pop();continue;}op=body.call(thisArg,_)}catch(e){op=[6,e];y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}}var __createBinding$3=Object.create?function(o,m,k,k2){if(k2===void 0)k2=k;Object.defineProperty(o,k2,{enumerable:!0,get:function(){return m[k]}})}:function(o,m,k,k2){if(k2===void 0)k2=k;o[k2]=m[k]};_exports.__createBinding$3=__createBinding$3;function __exportStar$3(m,o){for(var p in m)if("default"!==p&&!Object.prototype.hasOwnProperty.call(o,p))__createBinding$3(o,m,p)}function __values$3(o){var s="function"===typeof Symbol&&Symbol.iterator,m=s&&o[s],i=0;if(m)return m.call(o);if(o&&"number"===typeof o.length)return{next:function(){if(o&&i>=o.length)o=void 0;return{value:o&&o[i++],done:!o}}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.")}function __read$3(o,n){var m="function"===typeof Symbol&&o[Symbol.iterator];if(!m)return o;var i=m.call(o),r,ar=[],e;try{while((void 0===n||0<n--)&&!(r=i.next()).done)ar.push(r.value)}catch(error){e={error:error}}finally{try{if(r&&!r.done&&(m=i["return"]))m.call(i)}finally{if(e)throw e.error}}return ar}/** @deprecated */function __spread$3(){for(var ar=[],i=0;i<arguments.length;i++)ar=ar.concat(__read$3(arguments[i]));return ar}/** @deprecated */function __spreadArrays$3(){for(var s=0,i=0,il=arguments.length;i<il;i++)s+=arguments[i].length;for(var r=Array(s),k=0,i=0;i<il;i++)for(var a=arguments[i],j=0,jl=a.length;j<jl;j++,k++)r[k]=a[j];return r}function __spreadArray$2(to,from){for(var i=0,il=from.length,j=to.length;i<il;i++,j++)to[j]=from[i];return to}function __await$3(v){return this instanceof __await$3?(this.v=v,this):new __await$3(v)}function __asyncGenerator$3(thisArg,_arguments,generator){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var g=generator.apply(thisArg,_arguments||[]),i,q=[];return i={},verb("next"),verb("throw"),verb("return"),i[Symbol.asyncIterator]=function(){return this},i;function verb(n){if(g[n])i[n]=function(v){return new Promise(function(a,b){1<q.push([n,v,a,b])||resume(n,v)})}}function resume(n,v){try{step(g[n](v))}catch(e){settle(q[0][3],e)}}function step(r){r.value instanceof __await$3?Promise.resolve(r.value.v).then(fulfill,reject):settle(q[0][2],r)}function fulfill(value){resume("next",value)}function reject(value){resume("throw",value)}function settle(f,v){if(f(v),q.shift(),q.length)resume(q[0][0],q[0][1])}}function __asyncDelegator$3(o){var i,p;return i={},verb("next"),verb("throw",function(e){throw e}),verb("return"),i[Symbol.iterator]=function(){return this},i;function verb(n,f){i[n]=o[n]?function(v){return(p=!p)?{value:__await$3(o[n](v)),done:"return"===n}:f?f(v):v}:f}}function __asyncValues$3(o){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var m=o[Symbol.asyncIterator],i;return m?m.call(o):(o="function"===typeof __values$3?__values$3(o):o[Symbol.iterator](),i={},verb("next"),verb("throw"),verb("return"),i[Symbol.asyncIterator]=function(){return this},i);function verb(n){i[n]=o[n]&&function(v){return new Promise(function(resolve,reject){v=o[n](v),settle(resolve,reject,v.done,v.value)})}}function settle(resolve,reject,d,v){Promise.resolve(v).then(function(v){resolve({value:v,done:d})},reject)}}function __makeTemplateObject$3(cooked,raw){if(Object.defineProperty){Object.defineProperty(cooked,"raw",{value:raw})}else{cooked.raw=raw}return cooked};var __setModuleDefault$2=Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:!0,value:v})}:function(o,v){o["default"]=v};function __importStar$3(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)if("default"!==k&&Object.prototype.hasOwnProperty.call(mod,k))__createBinding$3(result,mod,k);__setModuleDefault$2(result,mod);return result}function __importDefault$3(mod){return mod&&mod.__esModule?mod:{default:mod}}function __classPrivateFieldGet$3(receiver,privateMap){if(!privateMap.has(receiver)){throw new TypeError("attempted to get private field on non-instance")}return privateMap.get(receiver)}function __classPrivateFieldSet$3(receiver,privateMap,value){if(!privateMap.has(receiver)){throw new TypeError("attempted to set private field on non-instance")}privateMap.set(receiver,value);return value}var tslib_es6$3={__extends:__extends$3,get __assign(){return __assign$3},__rest:__rest$3,__decorate:__decorate$3,__param:__param$3,__metadata:__metadata$3,__awaiter:__awaiter$3,__generator:__generator$3,__createBinding:__createBinding$3,__exportStar:__exportStar$3,__values:__values$3,__read:__read$3,__spread:__spread$3,__spreadArrays:__spreadArrays$3,__spreadArray:__spreadArray$2,__await:__await$3,__asyncGenerator:__asyncGenerator$3,__asyncDelegator:__asyncDelegator$3,__asyncValues:__asyncValues$3,__makeTemplateObject:__makeTemplateObject$3,__importStar:__importStar$3,__importDefault:__importDefault$3,__classPrivateFieldGet:__classPrivateFieldGet$3,__classPrivateFieldSet:__classPrivateFieldSet$3};/*! *****************************************************************************
   Copyright (c) Microsoft Corporation.
   
   Permission to use, copy, modify, and/or distribute this software for any
   purpose with or without fee is hereby granted.
   
   THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
   REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
   AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
   INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
   LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
   OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
   PERFORMANCE OF THIS SOFTWARE.
   ***************************************************************************** */ /* global Reflect, Promise */_exports.$tslibEs6$3=tslib_es6$3;var extendStatics$4=function(d,b){extendStatics$4=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p]};return extendStatics$4(d,b)};function __extends$4(d,b){extendStatics$4(d,b);function __(){this.constructor=d}d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)}var __assign$4=function(){_exports.__assign$2=__assign$4=Object.assign||function __assign(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p))t[p]=s[p]}return t};return __assign$4.apply(this,arguments)};_exports.__assign$2=__assign$4;function __rest$4(s,e){var t={};for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p)&&0>e.indexOf(p))t[p]=s[p];if(null!=s&&"function"===typeof Object.getOwnPropertySymbols)for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(0>e.indexOf(p[i])&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]]}return t}function __decorate$4(decorators,target,key,desc){var c=arguments.length,r=3>c?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;0<=i;i--)if(d=decorators[i])r=(3>c?d(r):3<c?d(target,key,r):d(target,key))||r;return 3<c&&r&&Object.defineProperty(target,key,r),r}function __param$4(paramIndex,decorator){return function(target,key){decorator(target,key,paramIndex)}}function __metadata$4(metadataKey,metadataValue){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(metadataKey,metadataValue)}function __awaiter$4(thisArg,_arguments,P,generator){function adopt(value){return value instanceof P?value:new P(function(resolve){resolve(value)})}return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value))}catch(e){reject(e)}}function rejected(value){try{step(generator["throw"](value))}catch(e){reject(e)}}function step(result){result.done?resolve(result.value):adopt(result.value).then(fulfilled,rejected)}step((generator=generator.apply(thisArg,_arguments||[])).next())})}function __generator$4(thisArg,body){var _={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]},f,y,t,g;return g={next:verb(0),throw:verb(1),return:verb(2)},"function"===typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return step([n,v])}}function step(op){if(f)throw new TypeError("Generator is already executing.");while(_)try{if(f=1,y&&(t=2&op[0]?y["return"]:op[0]?y["throw"]||((t=y["return"])&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;if(y=0,t)op=[2&op[0],t.value];switch(op[0]){case 0:case 1:t=op;break;case 4:_.label++;return{value:op[1],done:!1};case 5:_.label++;y=op[1];op=[0];continue;case 7:op=_.ops.pop();_.trys.pop();continue;default:if(!(t=_.trys,t=0<t.length&&t[t.length-1])&&(6===op[0]||2===op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1];t=op;break}if(t&&_.label<t[2]){_.label=t[2];_.ops.push(op);break}if(t[2])_.ops.pop();_.trys.pop();continue;}op=body.call(thisArg,_)}catch(e){op=[6,e];y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}}function __createBinding$4(o,m,k,k2){if(k2===void 0)k2=k;o[k2]=m[k]}function __exportStar$4(m,exports){for(var p in m)if("default"!==p&&!exports.hasOwnProperty(p))exports[p]=m[p]}function __values$4(o){var s="function"===typeof Symbol&&Symbol.iterator,m=s&&o[s],i=0;if(m)return m.call(o);if(o&&"number"===typeof o.length)return{next:function(){if(o&&i>=o.length)o=void 0;return{value:o&&o[i++],done:!o}}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.")}function __read$4(o,n){var m="function"===typeof Symbol&&o[Symbol.iterator];if(!m)return o;var i=m.call(o),r,ar=[],e;try{while((void 0===n||0<n--)&&!(r=i.next()).done)ar.push(r.value)}catch(error){e={error:error}}finally{try{if(r&&!r.done&&(m=i["return"]))m.call(i)}finally{if(e)throw e.error}}return ar}function __spread$4(){for(var ar=[],i=0;i<arguments.length;i++)ar=ar.concat(__read$4(arguments[i]));return ar}function __spreadArrays$4(){for(var s=0,i=0,il=arguments.length;i<il;i++)s+=arguments[i].length;for(var r=Array(s),k=0,i=0;i<il;i++)for(var a=arguments[i],j=0,jl=a.length;j<jl;j++,k++)r[k]=a[j];return r};function __await$4(v){return this instanceof __await$4?(this.v=v,this):new __await$4(v)}function __asyncGenerator$4(thisArg,_arguments,generator){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var g=generator.apply(thisArg,_arguments||[]),i,q=[];return i={},verb("next"),verb("throw"),verb("return"),i[Symbol.asyncIterator]=function(){return this},i;function verb(n){if(g[n])i[n]=function(v){return new Promise(function(a,b){1<q.push([n,v,a,b])||resume(n,v)})}}function resume(n,v){try{step(g[n](v))}catch(e){settle(q[0][3],e)}}function step(r){r.value instanceof __await$4?Promise.resolve(r.value.v).then(fulfill,reject):settle(q[0][2],r)}function fulfill(value){resume("next",value)}function reject(value){resume("throw",value)}function settle(f,v){if(f(v),q.shift(),q.length)resume(q[0][0],q[0][1])}}function __asyncDelegator$4(o){var i,p;return i={},verb("next"),verb("throw",function(e){throw e}),verb("return"),i[Symbol.iterator]=function(){return this},i;function verb(n,f){i[n]=o[n]?function(v){return(p=!p)?{value:__await$4(o[n](v)),done:"return"===n}:f?f(v):v}:f}}function __asyncValues$4(o){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var m=o[Symbol.asyncIterator],i;return m?m.call(o):(o="function"===typeof __values$4?__values$4(o):o[Symbol.iterator](),i={},verb("next"),verb("throw"),verb("return"),i[Symbol.asyncIterator]=function(){return this},i);function verb(n){i[n]=o[n]&&function(v){return new Promise(function(resolve,reject){v=o[n](v),settle(resolve,reject,v.done,v.value)})}}function settle(resolve,reject,d,v){Promise.resolve(v).then(function(v){resolve({value:v,done:d})},reject)}}function __makeTemplateObject$4(cooked,raw){if(Object.defineProperty){Object.defineProperty(cooked,"raw",{value:raw})}else{cooked.raw=raw}return cooked};function __importStar$4(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)if(Object.hasOwnProperty.call(mod,k))result[k]=mod[k];result.default=mod;return result}function __importDefault$4(mod){return mod&&mod.__esModule?mod:{default:mod}}function __classPrivateFieldGet$4(receiver,privateMap){if(!privateMap.has(receiver)){throw new TypeError("attempted to get private field on non-instance")}return privateMap.get(receiver)}function __classPrivateFieldSet$4(receiver,privateMap,value){if(!privateMap.has(receiver)){throw new TypeError("attempted to set private field on non-instance")}privateMap.set(receiver,value);return value}var tslib_es6$4={__extends:__extends$4,get __assign(){return __assign$4},__rest:__rest$4,__decorate:__decorate$4,__param:__param$4,__metadata:__metadata$4,__awaiter:__awaiter$4,__generator:__generator$4,__createBinding:__createBinding$4,__exportStar:__exportStar$4,__values:__values$4,__read:__read$4,__spread:__spread$4,__spreadArrays:__spreadArrays$4,__await:__await$4,__asyncGenerator:__asyncGenerator$4,__asyncDelegator:__asyncDelegator$4,__asyncValues:__asyncValues$4,__makeTemplateObject:__makeTemplateObject$4,__importStar:__importStar$4,__importDefault:__importDefault$4,__classPrivateFieldGet:__classPrivateFieldGet$4,__classPrivateFieldSet:__classPrivateFieldSet$4};/**
    * @license
    * Copyright 2016 Google Inc.
    *
    * Permission is hereby granted, free of charge, to any person obtaining a copy
    * of this software and associated documentation files (the "Software"), to deal
    * in the Software without restriction, including without limitation the rights
    * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    * copies of the Software, and to permit persons to whom the Software is
    * furnished to do so, subject to the following conditions:
    *
    * The above copyright notice and this permission notice shall be included in
    * all copies or substantial portions of the Software.
    *
    * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    * THE SOFTWARE.
    */_exports.$tslibEs6$2=tslib_es6$4;var MDCFoundation$1=/** @class */function(){function MDCFoundation(adapter){if(void 0===adapter){adapter={}}this.adapter=adapter}Object.defineProperty(MDCFoundation,"cssClasses",{get:function(){// Classes extending MDCFoundation should implement this method to return an object which exports every
// CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
return{}},enumerable:!0,configurable:!0});Object.defineProperty(MDCFoundation,"strings",{get:function(){// Classes extending MDCFoundation should implement this method to return an object which exports all
// semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
return{}},enumerable:!0,configurable:!0});Object.defineProperty(MDCFoundation,"numbers",{get:function(){// Classes extending MDCFoundation should implement this method to return an object which exports all
// of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
return{}},enumerable:!0,configurable:!0});Object.defineProperty(MDCFoundation,"defaultAdapter",{get:function(){// Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
// way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
// validation.
return{}},enumerable:!0,configurable:!0});MDCFoundation.prototype.init=function(){// Subclasses should override this method to perform initialization routines (registering events, etc.)
};MDCFoundation.prototype.destroy=function(){// Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
};return MDCFoundation}();_exports.MDCFoundation$1=_exports.$foundationDefault$3=MDCFoundation$1;var foundation$3={MDCFoundation:MDCFoundation$1,default:MDCFoundation$1};/**
    * @license
    * Copyright 2016 Google Inc.
    *
    * Permission is hereby granted, free of charge, to any person obtaining a copy
    * of this software and associated documentation files (the "Software"), to deal
    * in the Software without restriction, including without limitation the rights
    * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    * copies of the Software, and to permit persons to whom the Software is
    * furnished to do so, subject to the following conditions:
    *
    * The above copyright notice and this permission notice shall be included in
    * all copies or substantial portions of the Software.
    *
    * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    * THE SOFTWARE.
    */_exports.$foundation$3=foundation$3;var cssClasses$1={// Ripple is a special case where the "root" component is really a "mixin" of sorts,
// given that it's an 'upgrade' to an existing component. That being said it is the root
// CSS class that all other CSS classes derive from.
BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"};_exports.cssClasses$1=cssClasses$1;var strings$1={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"};_exports.strings$1=strings$1;var numbers={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};_exports.numbers=numbers;var constants$1={cssClasses:cssClasses$1,strings:strings$1,numbers:numbers};/**
    * Stores result from supportsCssVariables to avoid redundant processing to
    * detect CSS custom variable support.
    */_exports.$constants$1=constants$1;var supportsCssVariables_;function supportsCssVariables(windowObj,forceRefresh){if(void 0===forceRefresh){forceRefresh=!1}var CSS=windowObj.CSS,supportsCssVars=supportsCssVariables_;if("boolean"===typeof supportsCssVariables_&&!forceRefresh){return supportsCssVariables_}var supportsFunctionPresent=CSS&&"function"===typeof CSS.supports;if(!supportsFunctionPresent){return!1}var explicitlySupportsCssVars=CSS.supports("--css-vars","yes"),weAreFeatureDetectingSafari10plus=CSS.supports("(--css-vars: yes)")&&CSS.supports("color","#00000000");// See: https://bugs.webkit.org/show_bug.cgi?id=154669
// See: README section on Safari
supportsCssVars=explicitlySupportsCssVars||weAreFeatureDetectingSafari10plus;if(!forceRefresh){supportsCssVariables_=supportsCssVars}return supportsCssVars}function getNormalizedEventCoords(evt,pageOffset,clientRect){if(!evt){return{x:0,y:0}}var x=pageOffset.x,y=pageOffset.y,documentX=x+clientRect.left,documentY=y+clientRect.top,normalizedX,normalizedY;// Determine touch point relative to the ripple container.
if("touchstart"===evt.type){var touchEvent=evt;normalizedX=touchEvent.changedTouches[0].pageX-documentX;normalizedY=touchEvent.changedTouches[0].pageY-documentY}else{var mouseEvent=evt;normalizedX=mouseEvent.pageX-documentX;normalizedY=mouseEvent.pageY-documentY}return{x:normalizedX,y:normalizedY}}var util={supportsCssVariables:supportsCssVariables,getNormalizedEventCoords:getNormalizedEventCoords};_exports.$util=util;var ACTIVATION_EVENT_TYPES=["touchstart","pointerdown","mousedown","keydown"],POINTER_DEACTIVATION_EVENT_TYPES=["touchend","pointerup","mouseup","contextmenu"],activatedTargets=[],MDCRippleFoundation=/** @class */function(_super){__extends$4(MDCRippleFoundation,_super);function MDCRippleFoundation(adapter){var _this=_super.call(this,__assign$4(__assign$4({},MDCRippleFoundation.defaultAdapter),adapter))||this;_this.activationAnimationHasEnded_=!1;_this.activationTimer_=0;_this.fgDeactivationRemovalTimer_=0;_this.fgScale_="0";_this.frame_={width:0,height:0};_this.initialSize_=0;_this.layoutFrame_=0;_this.maxRadius_=0;_this.unboundedCoords_={left:0,top:0};_this.activationState_=_this.defaultActivationState_();_this.activationTimerCallback_=function(){_this.activationAnimationHasEnded_=!0;_this.runDeactivationUXLogicIfReady_()};_this.activateHandler_=function(e){return _this.activate_(e)};_this.deactivateHandler_=function(){return _this.deactivate_()};_this.focusHandler_=function(){return _this.handleFocus()};_this.blurHandler_=function(){return _this.handleBlur()};_this.resizeHandler_=function(){return _this.layout()};return _this}Object.defineProperty(MDCRippleFoundation,"cssClasses",{get:function(){return cssClasses$1},enumerable:!0,configurable:!0});Object.defineProperty(MDCRippleFoundation,"strings",{get:function(){return strings$1},enumerable:!0,configurable:!0});Object.defineProperty(MDCRippleFoundation,"numbers",{get:function(){return numbers},enumerable:!0,configurable:!0});Object.defineProperty(MDCRippleFoundation,"defaultAdapter",{get:function(){return{addClass:function(){return void 0},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){return void 0},deregisterInteractionHandler:function(){return void 0},deregisterResizeHandler:function(){return void 0},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){return void 0},registerInteractionHandler:function(){return void 0},registerResizeHandler:function(){return void 0},removeClass:function(){return void 0},updateCssVariable:function(){return void 0}}},enumerable:!0,configurable:!0});MDCRippleFoundation.prototype.init=function(){var _this=this,supportsPressRipple=this.supportsPressRipple_();this.registerRootHandlers_(supportsPressRipple);if(supportsPressRipple){var _a=MDCRippleFoundation.cssClasses,ROOT_1=_a.ROOT,UNBOUNDED_1=_a.UNBOUNDED;requestAnimationFrame(function(){_this.adapter.addClass(ROOT_1);if(_this.adapter.isUnbounded()){_this.adapter.addClass(UNBOUNDED_1);// Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple
_this.layoutInternal_()}})}};MDCRippleFoundation.prototype.destroy=function(){var _this=this;if(this.supportsPressRipple_()){if(this.activationTimer_){clearTimeout(this.activationTimer_);this.activationTimer_=0;this.adapter.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION)}if(this.fgDeactivationRemovalTimer_){clearTimeout(this.fgDeactivationRemovalTimer_);this.fgDeactivationRemovalTimer_=0;this.adapter.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION)}var _a=MDCRippleFoundation.cssClasses,ROOT_2=_a.ROOT,UNBOUNDED_2=_a.UNBOUNDED;requestAnimationFrame(function(){_this.adapter.removeClass(ROOT_2);_this.adapter.removeClass(UNBOUNDED_2);_this.removeCssVars_()})}this.deregisterRootHandlers_();this.deregisterDeactivationHandlers_()};/**
      * @param evt Optional event containing position information.
      */MDCRippleFoundation.prototype.activate=function(evt){this.activate_(evt)};MDCRippleFoundation.prototype.deactivate=function(){this.deactivate_()};MDCRippleFoundation.prototype.layout=function(){var _this=this;if(this.layoutFrame_){cancelAnimationFrame(this.layoutFrame_)}this.layoutFrame_=requestAnimationFrame(function(){_this.layoutInternal_();_this.layoutFrame_=0})};MDCRippleFoundation.prototype.setUnbounded=function(unbounded){var UNBOUNDED=MDCRippleFoundation.cssClasses.UNBOUNDED;if(unbounded){this.adapter.addClass(UNBOUNDED)}else{this.adapter.removeClass(UNBOUNDED)}};MDCRippleFoundation.prototype.handleFocus=function(){var _this=this;requestAnimationFrame(function(){return _this.adapter.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED)})};MDCRippleFoundation.prototype.handleBlur=function(){var _this=this;requestAnimationFrame(function(){return _this.adapter.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED)})};/**
      * We compute this property so that we are not querying information about the client
      * until the point in time where the foundation requests it. This prevents scenarios where
      * client-side feature-detection may happen too early, such as when components are rendered on the server
      * and then initialized at mount time on the client.
      */MDCRippleFoundation.prototype.supportsPressRipple_=function(){return this.adapter.browserSupportsCssVars()};MDCRippleFoundation.prototype.defaultActivationState_=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}};/**
      * supportsPressRipple Passed from init to save a redundant function call
      */MDCRippleFoundation.prototype.registerRootHandlers_=function(supportsPressRipple){var _this=this;if(supportsPressRipple){ACTIVATION_EVENT_TYPES.forEach(function(evtType){_this.adapter.registerInteractionHandler(evtType,_this.activateHandler_)});if(this.adapter.isUnbounded()){this.adapter.registerResizeHandler(this.resizeHandler_)}}this.adapter.registerInteractionHandler("focus",this.focusHandler_);this.adapter.registerInteractionHandler("blur",this.blurHandler_)};MDCRippleFoundation.prototype.registerDeactivationHandlers_=function(evt){var _this=this;if("keydown"===evt.type){this.adapter.registerInteractionHandler("keyup",this.deactivateHandler_)}else{POINTER_DEACTIVATION_EVENT_TYPES.forEach(function(evtType){_this.adapter.registerDocumentInteractionHandler(evtType,_this.deactivateHandler_)})}};MDCRippleFoundation.prototype.deregisterRootHandlers_=function(){var _this=this;ACTIVATION_EVENT_TYPES.forEach(function(evtType){_this.adapter.deregisterInteractionHandler(evtType,_this.activateHandler_)});this.adapter.deregisterInteractionHandler("focus",this.focusHandler_);this.adapter.deregisterInteractionHandler("blur",this.blurHandler_);if(this.adapter.isUnbounded()){this.adapter.deregisterResizeHandler(this.resizeHandler_)}};MDCRippleFoundation.prototype.deregisterDeactivationHandlers_=function(){var _this=this;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler_);POINTER_DEACTIVATION_EVENT_TYPES.forEach(function(evtType){_this.adapter.deregisterDocumentInteractionHandler(evtType,_this.deactivateHandler_)})};MDCRippleFoundation.prototype.removeCssVars_=function(){var _this=this,rippleStrings=MDCRippleFoundation.strings,keys=Object.keys(rippleStrings);keys.forEach(function(key){if(0===key.indexOf("VAR_")){_this.adapter.updateCssVariable(rippleStrings[key],null)}})};MDCRippleFoundation.prototype.activate_=function(evt){var _this=this;if(this.adapter.isSurfaceDisabled()){return}var activationState=this.activationState_;if(activationState.isActivated){return}// Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
var previousActivationEvent=this.previousActivationEvent_,isSameInteraction=previousActivationEvent&&evt!==void 0&&previousActivationEvent.type!==evt.type;if(isSameInteraction){return}activationState.isActivated=!0;activationState.isProgrammatic=evt===void 0;activationState.activationEvent=evt;activationState.wasActivatedByPointer=activationState.isProgrammatic?!1:evt!==void 0&&("mousedown"===evt.type||"touchstart"===evt.type||"pointerdown"===evt.type);var hasActivatedChild=evt!==void 0&&0<activatedTargets.length&&activatedTargets.some(function(target){return _this.adapter.containsEventTarget(target)});if(hasActivatedChild){// Immediately reset activation state, while preserving logic that prevents touch follow-on events
this.resetActivationState_();return}if(evt!==void 0){activatedTargets.push(evt.target);this.registerDeactivationHandlers_(evt)}activationState.wasElementMadeActive=this.checkElementMadeActive_(evt);if(activationState.wasElementMadeActive){this.animateActivation_()}requestAnimationFrame(function(){// Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
activatedTargets=[];if(!activationState.wasElementMadeActive&&evt!==void 0&&(" "===evt.key||32===evt.keyCode)){// If space was pressed, try again within an rAF call to detect :active, because different UAs report
// active states inconsistently when they're called within event handling code:
// - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
// - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
// We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
// variable is set within a rAF callback for a submit button interaction (#2241).
activationState.wasElementMadeActive=_this.checkElementMadeActive_(evt);if(activationState.wasElementMadeActive){_this.animateActivation_()}}if(!activationState.wasElementMadeActive){// Reset activation state immediately if element was not made active.
_this.activationState_=_this.defaultActivationState_()}})};MDCRippleFoundation.prototype.checkElementMadeActive_=function(evt){return evt!==void 0&&"keydown"===evt.type?this.adapter.isSurfaceActive():!0};MDCRippleFoundation.prototype.animateActivation_=function(){var _this=this,_a=MDCRippleFoundation.strings,VAR_FG_TRANSLATE_START=_a.VAR_FG_TRANSLATE_START,VAR_FG_TRANSLATE_END=_a.VAR_FG_TRANSLATE_END,_b=MDCRippleFoundation.cssClasses,FG_DEACTIVATION=_b.FG_DEACTIVATION,FG_ACTIVATION=_b.FG_ACTIVATION,DEACTIVATION_TIMEOUT_MS=MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal_();var translateStart="",translateEnd="";if(!this.adapter.isUnbounded()){var _c=this.getFgTranslationCoordinates_(),startPoint=_c.startPoint,endPoint=_c.endPoint;translateStart=startPoint.x+"px, "+startPoint.y+"px";translateEnd=endPoint.x+"px, "+endPoint.y+"px"}this.adapter.updateCssVariable(VAR_FG_TRANSLATE_START,translateStart);this.adapter.updateCssVariable(VAR_FG_TRANSLATE_END,translateEnd);// Cancel any ongoing activation/deactivation animations
clearTimeout(this.activationTimer_);clearTimeout(this.fgDeactivationRemovalTimer_);this.rmBoundedActivationClasses_();this.adapter.removeClass(FG_DEACTIVATION);// Force layout in order to re-trigger the animation.
this.adapter.computeBoundingRect();this.adapter.addClass(FG_ACTIVATION);this.activationTimer_=setTimeout(function(){return _this.activationTimerCallback_()},DEACTIVATION_TIMEOUT_MS)};MDCRippleFoundation.prototype.getFgTranslationCoordinates_=function(){var _a=this.activationState_,activationEvent=_a.activationEvent,wasActivatedByPointer=_a.wasActivatedByPointer,startPoint;if(wasActivatedByPointer){startPoint=getNormalizedEventCoords(activationEvent,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect())}else{startPoint={x:this.frame_.width/2,y:this.frame_.height/2}}// Center the element around the start point.
startPoint={x:startPoint.x-this.initialSize_/2,y:startPoint.y-this.initialSize_/2};var endPoint={x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2};return{startPoint:startPoint,endPoint:endPoint}};MDCRippleFoundation.prototype.runDeactivationUXLogicIfReady_=function(){var _this=this,FG_DEACTIVATION=MDCRippleFoundation.cssClasses.FG_DEACTIVATION,_a=this.activationState_,hasDeactivationUXRun=_a.hasDeactivationUXRun,isActivated=_a.isActivated,activationHasEnded=hasDeactivationUXRun||!isActivated;// This method is called both when a pointing device is released, and when the activation animation ends.
// The deactivation animation should only run after both of those occur.
if(activationHasEnded&&this.activationAnimationHasEnded_){this.rmBoundedActivationClasses_();this.adapter.addClass(FG_DEACTIVATION);this.fgDeactivationRemovalTimer_=setTimeout(function(){_this.adapter.removeClass(FG_DEACTIVATION)},numbers.FG_DEACTIVATION_MS)}};MDCRippleFoundation.prototype.rmBoundedActivationClasses_=function(){var FG_ACTIVATION=MDCRippleFoundation.cssClasses.FG_ACTIVATION;this.adapter.removeClass(FG_ACTIVATION);this.activationAnimationHasEnded_=!1;this.adapter.computeBoundingRect()};MDCRippleFoundation.prototype.resetActivationState_=function(){var _this=this;this.previousActivationEvent_=this.activationState_.activationEvent;this.activationState_=this.defaultActivationState_();// Touch devices may fire additional events for the same interaction within a short time.
// Store the previous event until it's safe to assume that subsequent events are for new interactions.
setTimeout(function(){return _this.previousActivationEvent_=void 0},MDCRippleFoundation.numbers.TAP_DELAY_MS)};MDCRippleFoundation.prototype.deactivate_=function(){var _this=this,activationState=this.activationState_;// This can happen in scenarios such as when you have a keyup event that blurs the element.
if(!activationState.isActivated){return}var state=__assign$4({},activationState);if(activationState.isProgrammatic){requestAnimationFrame(function(){return _this.animateDeactivation_(state)});this.resetActivationState_()}else{this.deregisterDeactivationHandlers_();requestAnimationFrame(function(){_this.activationState_.hasDeactivationUXRun=!0;_this.animateDeactivation_(state);_this.resetActivationState_()})}};MDCRippleFoundation.prototype.animateDeactivation_=function(_a){var wasActivatedByPointer=_a.wasActivatedByPointer,wasElementMadeActive=_a.wasElementMadeActive;if(wasActivatedByPointer||wasElementMadeActive){this.runDeactivationUXLogicIfReady_()}};MDCRippleFoundation.prototype.layoutInternal_=function(){var _this=this;this.frame_=this.adapter.computeBoundingRect();var maxDim=Math.max(this.frame_.height,this.frame_.width),getBoundedRadius=function(){var hypotenuse=Math.sqrt(Math.pow(_this.frame_.width,2)+Math.pow(_this.frame_.height,2));return hypotenuse+MDCRippleFoundation.numbers.PADDING};// Surface diameter is treated differently for unbounded vs. bounded ripples.
// Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
// to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
// square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
// (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
// `overflow: hidden`.
this.maxRadius_=this.adapter.isUnbounded()?maxDim:getBoundedRadius();// Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
var initialSize=Math.floor(maxDim*MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE);// Unbounded ripple size should always be even number to equally center align.
if(this.adapter.isUnbounded()&&0!==initialSize%2){this.initialSize_=initialSize-1}else{this.initialSize_=initialSize}this.fgScale_=""+this.maxRadius_/this.initialSize_;this.updateLayoutCssVars_()};MDCRippleFoundation.prototype.updateLayoutCssVars_=function(){var _a=MDCRippleFoundation.strings,VAR_FG_SIZE=_a.VAR_FG_SIZE,VAR_LEFT=_a.VAR_LEFT,VAR_TOP=_a.VAR_TOP,VAR_FG_SCALE=_a.VAR_FG_SCALE;this.adapter.updateCssVariable(VAR_FG_SIZE,this.initialSize_+"px");this.adapter.updateCssVariable(VAR_FG_SCALE,this.fgScale_);if(this.adapter.isUnbounded()){this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)};this.adapter.updateCssVariable(VAR_LEFT,this.unboundedCoords_.left+"px");this.adapter.updateCssVariable(VAR_TOP,this.unboundedCoords_.top+"px")}};return MDCRippleFoundation}(MDCFoundation$1);// Deactivation events registered on documentElement when a pointer-related down event occurs
_exports.MDCRippleFoundation=_exports.$foundationDefault$4=MDCRippleFoundation;var foundation$4={MDCRippleFoundation:MDCRippleFoundation,default:MDCRippleFoundation};_exports.$foundation$4=foundation$4;const previousStylePropertyCache=new WeakMap,styleMap=directive(styleInfo=>part=>{if(!(part instanceof AttributePart)||part instanceof PropertyPart||"style"!==part.committer.name||1<part.committer.parts.length){throw new Error("The `styleMap` directive must be used in the style attribute "+"and must be the only part in the attribute.")}const{committer}=part,{style}=committer.element;let previousStyleProperties=previousStylePropertyCache.get(part);if(previousStyleProperties===void 0){// Write static styles once
style.cssText=committer.strings.join(" ");previousStylePropertyCache.set(part,previousStyleProperties=new Set)}// Remove old properties that no longer exist in styleInfo
// We use forEach() instead of for-of so that re don't require down-level
// iteration.
previousStyleProperties.forEach(name=>{if(!(name in styleInfo)){previousStyleProperties.delete(name);if(-1===name.indexOf("-")){// eslint-disable-next-line @typescript-eslint/no-explicit-any
style[name]=null}else{style.removeProperty(name)}}});// Add or update properties
for(const name in styleInfo){previousStyleProperties.add(name);if(-1===name.indexOf("-")){// eslint-disable-next-line @typescript-eslint/no-explicit-any
style[name]=styleInfo[name]}else{style.setProperty(name,styleInfo[name])}}});/**
                                                   * A directive that applies CSS properties to an element.
                                                   *
                                                   * `styleMap` can only be used in the `style` attribute and must be the only
                                                   * expression in the attribute. It takes the property names in the `styleInfo`
                                                   * object and adds the property values as CSS properties. Property names with
                                                   * dashes (`-`) are assumed to be valid CSS property names and set on the
                                                   * element's style object using `setProperty()`. Names without dashes are
                                                   * assumed to be camelCased JavaScript property names and set on the element's
                                                   * style object using property assignment, allowing the style object to
                                                   * translate JavaScript-style names to CSS property names.
                                                   *
                                                   * For example `styleMap({backgroundColor: 'red', 'border-top': '5px', '--size':
                                                   * '0'})` sets the `background-color`, `border-top` and `--size` properties.
                                                   *
                                                   * @param styleInfo {StyleInfo}
                                                   */_exports.styleMap=styleMap;var styleMap$1={styleMap:styleMap};_exports.$styleMap=styleMap$1;class RippleBase extends BaseElement{constructor(){super(...arguments);this.primary=!1;this.accent=!1;this.unbounded=!1;this.disabled=!1;this.activated=!1;this.selected=!1;this.hovering=!1;this.bgFocused=!1;this.fgActivation=!1;this.fgDeactivation=!1;this.fgScale="";this.fgSize="";this.translateStart="";this.translateEnd="";this.leftPos="";this.topPos="";this.mdcFoundationClass=MDCRippleFoundation}get isActive(){return(this.parentElement||this).matches(":active")}createAdapter(){return{browserSupportsCssVars:()=>!0,isUnbounded:()=>this.unbounded,isSurfaceActive:()=>this.isActive,isSurfaceDisabled:()=>this.disabled,addClass:className=>{switch(className){case"mdc-ripple-upgraded--background-focused":this.bgFocused=!0;break;case"mdc-ripple-upgraded--foreground-activation":this.fgActivation=!0;break;case"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation=!0;break;default:break;}},removeClass:className=>{switch(className){case"mdc-ripple-upgraded--background-focused":this.bgFocused=!1;break;case"mdc-ripple-upgraded--foreground-activation":this.fgActivation=!1;break;case"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation=!1;break;default:break;}},containsEventTarget:()=>!0,registerInteractionHandler:()=>void 0,deregisterInteractionHandler:()=>void 0,registerDocumentInteractionHandler:()=>void 0,deregisterDocumentInteractionHandler:()=>void 0,registerResizeHandler:()=>void 0,deregisterResizeHandler:()=>void 0,updateCssVariable:(varName,value)=>{switch(varName){case"--mdc-ripple-fg-scale":this.fgScale=value;break;case"--mdc-ripple-fg-size":this.fgSize=value;break;case"--mdc-ripple-fg-translate-end":this.translateEnd=value;break;case"--mdc-ripple-fg-translate-start":this.translateStart=value;break;case"--mdc-ripple-left":this.leftPos=value;break;case"--mdc-ripple-top":this.topPos=value;break;default:break;}},computeBoundingRect:()=>(this.parentElement||this).getBoundingClientRect(),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset})}}startPress(ev){this.waitForFoundation(()=>{this.mdcFoundation.activate(ev)})}endPress(){this.waitForFoundation(()=>{this.mdcFoundation.deactivate()})}startFocus(){this.waitForFoundation(()=>{this.mdcFoundation.handleFocus()})}endFocus(){this.waitForFoundation(()=>{this.mdcFoundation.handleBlur()})}startHover(){this.hovering=!0}endHover(){this.hovering=!1}/**
     * Wait for the MDCFoundation to be created by `firstUpdated`
     */waitForFoundation(fn){if(this.mdcFoundation){fn()}else{this.updateComplete.then(fn)}}/** @soyTemplate */render(){const shouldActivateInPrimary=this.activated&&(this.primary||!this.accent),shouldSelectInPrimary=this.selected&&(this.primary||!this.accent),classes={"mdc-ripple-surface--accent":this.accent,"mdc-ripple-surface--primary--activated":shouldActivateInPrimary,"mdc-ripple-surface--accent--activated":this.accent&&this.activated,"mdc-ripple-surface--primary--selected":shouldSelectInPrimary,"mdc-ripple-surface--accent--selected":this.accent&&this.selected,"mdc-ripple-surface--disabled":this.disabled,"mdc-ripple-surface--hover":this.hovering,"mdc-ripple-surface--primary":this.primary,"mdc-ripple-surface--selected":this.selected,"mdc-ripple-upgraded--background-focused":this.bgFocused,"mdc-ripple-upgraded--foreground-activation":this.fgActivation,"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation,"mdc-ripple-upgraded--unbounded":this.unbounded};return html`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${classMap(classes)}"
          style="${styleMap({"--mdc-ripple-fg-scale":this.fgScale,"--mdc-ripple-fg-size":this.fgSize,"--mdc-ripple-fg-translate-end":this.translateEnd,"--mdc-ripple-fg-translate-start":this.translateStart,"--mdc-ripple-left":this.leftPos,"--mdc-ripple-top":this.topPos})}"></div>`}}_exports.RippleBase=RippleBase;__decorate$3([query(".mdc-ripple-surface")],RippleBase.prototype,"mdcRoot",void 0);__decorate$3([property({type:Boolean})],RippleBase.prototype,"primary",void 0);__decorate$3([property({type:Boolean})],RippleBase.prototype,"accent",void 0);__decorate$3([property({type:Boolean})],RippleBase.prototype,"unbounded",void 0);__decorate$3([property({type:Boolean})],RippleBase.prototype,"disabled",void 0);__decorate$3([property({type:Boolean})],RippleBase.prototype,"activated",void 0);__decorate$3([property({type:Boolean})],RippleBase.prototype,"selected",void 0);__decorate$3([internalProperty()],RippleBase.prototype,"hovering",void 0);__decorate$3([internalProperty()],RippleBase.prototype,"bgFocused",void 0);__decorate$3([internalProperty()],RippleBase.prototype,"fgActivation",void 0);__decorate$3([internalProperty()],RippleBase.prototype,"fgDeactivation",void 0);__decorate$3([internalProperty()],RippleBase.prototype,"fgScale",void 0);__decorate$3([internalProperty()],RippleBase.prototype,"fgSize",void 0);__decorate$3([internalProperty()],RippleBase.prototype,"translateStart",void 0);__decorate$3([internalProperty()],RippleBase.prototype,"translateEnd",void 0);__decorate$3([internalProperty()],RippleBase.prototype,"leftPos",void 0);__decorate$3([internalProperty()],RippleBase.prototype,"topPos",void 0);var mwcRippleBase={RippleBase:RippleBase};_exports.$mwcRippleBase=mwcRippleBase;const style$1=css`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}`;_exports.style$2=style$1;var mwcRippleCss={style:style$1};_exports.$mwcRippleCss=mwcRippleCss;let Ripple=class Ripple extends RippleBase{};_exports.Ripple=Ripple;Ripple.styles=style$1;_exports.Ripple=Ripple=__decorate$3([customElement("mwc-ripple")],Ripple);var mwcRipple={get Ripple(){return Ripple}};/**
   @license
   Copyright 2020 Google Inc. All Rights Reserved.
   
   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at
   
       http://www.apache.org/licenses/LICENSE-2.0
   
   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
   */ /**
       * Class that encapsulates the events handlers for `mwc-ripple`
       *
       *
       * Example:
       * ```
       * class XFoo extends LitElement {
       *   async getRipple() {
       *     this.renderRipple = true;
       *     await this.updateComplete;
       *     return this.renderRoot.querySelector('mwc-ripple');
       *   }
       *   rippleHandlers = new RippleHandlers(() => this.getRipple());
       *
       *   render() {
       *     return html`
       *       <div @mousedown=${this.rippleHandlers.startPress}></div>
       *       ${this.renderRipple ? html`<mwc-ripple></mwc-ripple>` : ''}
       *     `;
       *   }
       * }
       * ```
       */_exports.$mwcRipple=mwcRipple;class RippleHandlers{constructor(/** Function that returns a `mwc-ripple` */rippleFn){this.startPress=ev=>{rippleFn().then(r=>{r&&r.startPress(ev)})};this.endPress=()=>{rippleFn().then(r=>{r&&r.endPress()})};this.startFocus=()=>{rippleFn().then(r=>{r&&r.startFocus()})};this.endFocus=()=>{rippleFn().then(r=>{r&&r.endFocus()})};this.startHover=()=>{rippleFn().then(r=>{r&&r.startHover()})};this.endHover=()=>{rippleFn().then(r=>{r&&r.endHover()})}}}_exports.RippleHandlers=RippleHandlers;var rippleHandlers={RippleHandlers:RippleHandlers};_exports.$rippleHandlers=rippleHandlers;class IconButtonBase extends LitElement{constructor(){super(...arguments);this.disabled=!1;this.icon="";this.label="";this.shouldRenderRipple=!1;this.rippleHandlers=new RippleHandlers(()=>{this.shouldRenderRipple=!0;return this.ripple})}/** @soyTemplate */renderRipple(){return this.shouldRenderRipple?html`
            <mwc-ripple
                .disabled="${this.disabled}"
                unbounded>
            </mwc-ripple>`:""}focus(){const buttonElement=this.buttonElement;if(buttonElement){this.rippleHandlers.startFocus();buttonElement.focus()}}blur(){const buttonElement=this.buttonElement;if(buttonElement){this.rippleHandlers.endFocus();buttonElement.blur()}}/** @soyTemplate */render(){return html`<button
        class="mdc-icon-button"
        aria-label="${this.label||this.icon}"
        ?disabled="${this.disabled}"
        @focus="${this.handleRippleFocus}"
        @blur="${this.handleRippleBlur}"
        @mousedown="${this.handleRippleMouseDown}"
        @mouseenter="${this.handleRippleMouseEnter}"
        @mouseleave="${this.handleRippleMouseLeave}"
        @touchstart="${this.handleRippleTouchStart}"
        @touchend="${this.handleRippleDeactivate}"
        @touchcancel="${this.handleRippleDeactivate}">
      ${this.renderRipple()}
    <i class="material-icons">${this.icon}</i>
    <span class="default-slot-container">
        <slot></slot>
    </span>
  </button>`}handleRippleMouseDown(event){const onUp=()=>{window.removeEventListener("mouseup",onUp);this.handleRippleDeactivate()};window.addEventListener("mouseup",onUp);this.rippleHandlers.startPress(event)}handleRippleTouchStart(event){this.rippleHandlers.startPress(event)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}_exports.IconButtonBase=IconButtonBase;__decorate$2([property({type:Boolean,reflect:!0})],IconButtonBase.prototype,"disabled",void 0);__decorate$2([property({type:String})],IconButtonBase.prototype,"icon",void 0);__decorate$2([property({type:String})],IconButtonBase.prototype,"label",void 0);__decorate$2([query("button")],IconButtonBase.prototype,"buttonElement",void 0);__decorate$2([queryAsync("mwc-ripple")],IconButtonBase.prototype,"ripple",void 0);__decorate$2([internalProperty()],IconButtonBase.prototype,"shouldRenderRipple",void 0);__decorate$2([eventOptions({passive:!0})],IconButtonBase.prototype,"handleRippleMouseDown",null);__decorate$2([eventOptions({passive:!0})],IconButtonBase.prototype,"handleRippleTouchStart",null);var mwcIconButtonBase={IconButtonBase:IconButtonBase};_exports.$mwcIconButtonBase=mwcIconButtonBase;const style$2=css`.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;font-size:24px;text-decoration:none;cursor:pointer;user-select:none;width:48px;height:48px;padding:12px}.mdc-icon-button svg,.mdc-icon-button img{width:24px;height:24px}.mdc-icon-button:disabled{color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38))}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}:host{display:inline-block;outline:none;--mdc-ripple-color: currentcolor;-webkit-tap-highlight-color:transparent}:host([disabled]){pointer-events:none}:host,.mdc-icon-button{vertical-align:top}.mdc-icon-button{width:var(--mdc-icon-button-size, 48px);height:var(--mdc-icon-button-size, 48px);padding:calc( (var(--mdc-icon-button-size, 48px) - var(--mdc-icon-size, 24px)) / 2 )}.mdc-icon-button>i{position:absolute;top:0;padding-top:inherit}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block;width:var(--mdc-icon-size, 24px);height:var(--mdc-icon-size, 24px)}`;_exports.style$1=style$2;var mwcIconButtonCss={style:style$2};_exports.$mwcIconButtonCss=mwcIconButtonCss;let IconButton=class IconButton extends IconButtonBase{};_exports.IconButton=IconButton;IconButton.styles=style$2;_exports.IconButton=IconButton=__decorate$2([customElement("mwc-icon-button")],IconButton);var mwcIconButton={get IconButton(){return IconButton}};/*! *****************************************************************************
   Copyright (c) Microsoft Corporation.
   
   Permission to use, copy, modify, and/or distribute this software for any
   purpose with or without fee is hereby granted.
   
   THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
   REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
   AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
   INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
   LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
   OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
   PERFORMANCE OF THIS SOFTWARE.
   ***************************************************************************** */ /* global Reflect, Promise */_exports.$mwcIconButton=mwcIconButton;var extendStatics$5=function(d,b){extendStatics$5=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)if(Object.prototype.hasOwnProperty.call(b,p))d[p]=b[p]};return extendStatics$5(d,b)};function __extends$5(d,b){if("function"!==typeof b&&null!==b)throw new TypeError("Class extends value "+(b+"")+" is not a constructor or null");extendStatics$5(d,b);function __(){this.constructor=d}d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)}var __assign$5=function(){_exports.__assign$4=__assign$5=Object.assign||function __assign(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p))t[p]=s[p]}return t};return __assign$5.apply(this,arguments)};_exports.__assign$4=__assign$5;function __rest$5(s,e){var t={};for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p)&&0>e.indexOf(p))t[p]=s[p];if(null!=s&&"function"===typeof Object.getOwnPropertySymbols)for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(0>e.indexOf(p[i])&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]]}return t}function __decorate$5(decorators,target,key,desc){var c=arguments.length,r=3>c?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;0<=i;i--)if(d=decorators[i])r=(3>c?d(r):3<c?d(target,key,r):d(target,key))||r;return 3<c&&r&&Object.defineProperty(target,key,r),r}function __param$5(paramIndex,decorator){return function(target,key){decorator(target,key,paramIndex)}}function __metadata$5(metadataKey,metadataValue){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(metadataKey,metadataValue)}function __awaiter$5(thisArg,_arguments,P,generator){function adopt(value){return value instanceof P?value:new P(function(resolve){resolve(value)})}return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value))}catch(e){reject(e)}}function rejected(value){try{step(generator["throw"](value))}catch(e){reject(e)}}function step(result){result.done?resolve(result.value):adopt(result.value).then(fulfilled,rejected)}step((generator=generator.apply(thisArg,_arguments||[])).next())})}function __generator$5(thisArg,body){var _={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]},f,y,t,g;return g={next:verb(0),throw:verb(1),return:verb(2)},"function"===typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return step([n,v])}}function step(op){if(f)throw new TypeError("Generator is already executing.");while(_)try{if(f=1,y&&(t=2&op[0]?y["return"]:op[0]?y["throw"]||((t=y["return"])&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;if(y=0,t)op=[2&op[0],t.value];switch(op[0]){case 0:case 1:t=op;break;case 4:_.label++;return{value:op[1],done:!1};case 5:_.label++;y=op[1];op=[0];continue;case 7:op=_.ops.pop();_.trys.pop();continue;default:if(!(t=_.trys,t=0<t.length&&t[t.length-1])&&(6===op[0]||2===op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1];t=op;break}if(t&&_.label<t[2]){_.label=t[2];_.ops.push(op);break}if(t[2])_.ops.pop();_.trys.pop();continue;}op=body.call(thisArg,_)}catch(e){op=[6,e];y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}}var __createBinding$5=Object.create?function(o,m,k,k2){if(k2===void 0)k2=k;Object.defineProperty(o,k2,{enumerable:!0,get:function(){return m[k]}})}:function(o,m,k,k2){if(k2===void 0)k2=k;o[k2]=m[k]};_exports.__createBinding$4=__createBinding$5;function __exportStar$5(m,o){for(var p in m)if("default"!==p&&!Object.prototype.hasOwnProperty.call(o,p))__createBinding$5(o,m,p)}function __values$5(o){var s="function"===typeof Symbol&&Symbol.iterator,m=s&&o[s],i=0;if(m)return m.call(o);if(o&&"number"===typeof o.length)return{next:function(){if(o&&i>=o.length)o=void 0;return{value:o&&o[i++],done:!o}}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.")}function __read$5(o,n){var m="function"===typeof Symbol&&o[Symbol.iterator];if(!m)return o;var i=m.call(o),r,ar=[],e;try{while((void 0===n||0<n--)&&!(r=i.next()).done)ar.push(r.value)}catch(error){e={error:error}}finally{try{if(r&&!r.done&&(m=i["return"]))m.call(i)}finally{if(e)throw e.error}}return ar}/** @deprecated */function __spread$5(){for(var ar=[],i=0;i<arguments.length;i++)ar=ar.concat(__read$5(arguments[i]));return ar}/** @deprecated */function __spreadArrays$5(){for(var s=0,i=0,il=arguments.length;i<il;i++)s+=arguments[i].length;for(var r=Array(s),k=0,i=0;i<il;i++)for(var a=arguments[i],j=0,jl=a.length;j<jl;j++,k++)r[k]=a[j];return r}function __spreadArray$3(to,from){for(var i=0,il=from.length,j=to.length;i<il;i++,j++)to[j]=from[i];return to}function __await$5(v){return this instanceof __await$5?(this.v=v,this):new __await$5(v)}function __asyncGenerator$5(thisArg,_arguments,generator){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var g=generator.apply(thisArg,_arguments||[]),i,q=[];return i={},verb("next"),verb("throw"),verb("return"),i[Symbol.asyncIterator]=function(){return this},i;function verb(n){if(g[n])i[n]=function(v){return new Promise(function(a,b){1<q.push([n,v,a,b])||resume(n,v)})}}function resume(n,v){try{step(g[n](v))}catch(e){settle(q[0][3],e)}}function step(r){r.value instanceof __await$5?Promise.resolve(r.value.v).then(fulfill,reject):settle(q[0][2],r)}function fulfill(value){resume("next",value)}function reject(value){resume("throw",value)}function settle(f,v){if(f(v),q.shift(),q.length)resume(q[0][0],q[0][1])}}function __asyncDelegator$5(o){var i,p;return i={},verb("next"),verb("throw",function(e){throw e}),verb("return"),i[Symbol.iterator]=function(){return this},i;function verb(n,f){i[n]=o[n]?function(v){return(p=!p)?{value:__await$5(o[n](v)),done:"return"===n}:f?f(v):v}:f}}function __asyncValues$5(o){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var m=o[Symbol.asyncIterator],i;return m?m.call(o):(o="function"===typeof __values$5?__values$5(o):o[Symbol.iterator](),i={},verb("next"),verb("throw"),verb("return"),i[Symbol.asyncIterator]=function(){return this},i);function verb(n){i[n]=o[n]&&function(v){return new Promise(function(resolve,reject){v=o[n](v),settle(resolve,reject,v.done,v.value)})}}function settle(resolve,reject,d,v){Promise.resolve(v).then(function(v){resolve({value:v,done:d})},reject)}}function __makeTemplateObject$5(cooked,raw){if(Object.defineProperty){Object.defineProperty(cooked,"raw",{value:raw})}else{cooked.raw=raw}return cooked};var __setModuleDefault$3=Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:!0,value:v})}:function(o,v){o["default"]=v};function __importStar$5(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)if("default"!==k&&Object.prototype.hasOwnProperty.call(mod,k))__createBinding$5(result,mod,k);__setModuleDefault$3(result,mod);return result}function __importDefault$5(mod){return mod&&mod.__esModule?mod:{default:mod}}function __classPrivateFieldGet$5(receiver,privateMap){if(!privateMap.has(receiver)){throw new TypeError("attempted to get private field on non-instance")}return privateMap.get(receiver)}function __classPrivateFieldSet$5(receiver,privateMap,value){if(!privateMap.has(receiver)){throw new TypeError("attempted to set private field on non-instance")}privateMap.set(receiver,value);return value}var tslib_es6$5={__extends:__extends$5,get __assign(){return __assign$5},__rest:__rest$5,__decorate:__decorate$5,__param:__param$5,__metadata:__metadata$5,__awaiter:__awaiter$5,__generator:__generator$5,__createBinding:__createBinding$5,__exportStar:__exportStar$5,__values:__values$5,__read:__read$5,__spread:__spread$5,__spreadArrays:__spreadArrays$5,__spreadArray:__spreadArray$3,__await:__await$5,__asyncGenerator:__asyncGenerator$5,__asyncDelegator:__asyncDelegator$5,__asyncValues:__asyncValues$5,__makeTemplateObject:__makeTemplateObject$5,__importStar:__importStar$5,__importDefault:__importDefault$5,__classPrivateFieldGet:__classPrivateFieldGet$5,__classPrivateFieldSet:__classPrivateFieldSet$5};/**
    * @license
    * Copyright 2018 Google Inc.
    *
    * Permission is hereby granted, free of charge, to any person obtaining a copy
    * of this software and associated documentation files (the "Software"), to deal
    * in the Software without restriction, including without limitation the rights
    * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    * copies of the Software, and to permit persons to whom the Software is
    * furnished to do so, subject to the following conditions:
    *
    * The above copyright notice and this permission notice shall be included in
    * all copies or substantial portions of the Software.
    *
    * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    * THE SOFTWARE.
    */_exports.$tslibEs6$4=tslib_es6$5;var cssClasses$2={FIXED_CLASS:"mdc-top-app-bar--fixed",FIXED_SCROLLED_CLASS:"mdc-top-app-bar--fixed-scrolled",SHORT_CLASS:"mdc-top-app-bar--short",SHORT_COLLAPSED_CLASS:"mdc-top-app-bar--short-collapsed",SHORT_HAS_ACTION_ITEM_CLASS:"mdc-top-app-bar--short-has-action-item"};_exports.cssClasses$2=cssClasses$2;var numbers$1={DEBOUNCE_THROTTLE_RESIZE_TIME_MS:100,MAX_TOP_APP_BAR_HEIGHT:128};_exports.numbers$1=numbers$1;var strings$2={ACTION_ITEM_SELECTOR:".mdc-top-app-bar__action-item",NAVIGATION_EVENT:"MDCTopAppBar:nav",NAVIGATION_ICON_SELECTOR:".mdc-top-app-bar__navigation-icon",ROOT_SELECTOR:".mdc-top-app-bar",TITLE_SELECTOR:".mdc-top-app-bar__title"};_exports.strings$2=strings$2;var constants$2={cssClasses:cssClasses$2,numbers:numbers$1,strings:strings$2};/**
    * @license
    * Copyright 2016 Google Inc.
    *
    * Permission is hereby granted, free of charge, to any person obtaining a copy
    * of this software and associated documentation files (the "Software"), to deal
    * in the Software without restriction, including without limitation the rights
    * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    * copies of the Software, and to permit persons to whom the Software is
    * furnished to do so, subject to the following conditions:
    *
    * The above copyright notice and this permission notice shall be included in
    * all copies or substantial portions of the Software.
    *
    * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    * THE SOFTWARE.
    */_exports.$constants$2=constants$2;var MDCFoundation$2=/** @class */function(){function MDCFoundation(adapter){if(void 0===adapter){adapter={}}this.adapter=adapter}Object.defineProperty(MDCFoundation,"cssClasses",{get:function(){// Classes extending MDCFoundation should implement this method to return an object which exports every
// CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
return{}},enumerable:!0,configurable:!0});Object.defineProperty(MDCFoundation,"strings",{get:function(){// Classes extending MDCFoundation should implement this method to return an object which exports all
// semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
return{}},enumerable:!0,configurable:!0});Object.defineProperty(MDCFoundation,"numbers",{get:function(){// Classes extending MDCFoundation should implement this method to return an object which exports all
// of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
return{}},enumerable:!0,configurable:!0});Object.defineProperty(MDCFoundation,"defaultAdapter",{get:function(){// Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
// way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
// validation.
return{}},enumerable:!0,configurable:!0});MDCFoundation.prototype.init=function(){// Subclasses should override this method to perform initialization routines (registering events, etc.)
};MDCFoundation.prototype.destroy=function(){// Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
};return MDCFoundation}();_exports.MDCFoundation$2=_exports.$foundationDefault$6=MDCFoundation$2;var foundation$5={MDCFoundation:MDCFoundation$2,default:MDCFoundation$2};_exports.$foundation$6=foundation$5;var MDCTopAppBarBaseFoundation=/** @class */function(_super){__extends(MDCTopAppBarBaseFoundation,_super);/* istanbul ignore next: optional argument is not a branch statement */function MDCTopAppBarBaseFoundation(adapter){return _super.call(this,__assign(__assign({},MDCTopAppBarBaseFoundation.defaultAdapter),adapter))||this}Object.defineProperty(MDCTopAppBarBaseFoundation,"strings",{get:function(){return strings$2},enumerable:!0,configurable:!0});Object.defineProperty(MDCTopAppBarBaseFoundation,"cssClasses",{get:function(){return cssClasses$2},enumerable:!0,configurable:!0});Object.defineProperty(MDCTopAppBarBaseFoundation,"numbers",{get:function(){return numbers$1},enumerable:!0,configurable:!0});Object.defineProperty(MDCTopAppBarBaseFoundation,"defaultAdapter",{/**
     * See {@link MDCTopAppBarAdapter} for typing information on parameters and return types.
     */get:function(){// tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
return{addClass:function(){return void 0},removeClass:function(){return void 0},hasClass:function(){return!1},setStyle:function(){return void 0},getTopAppBarHeight:function(){return 0},notifyNavigationIconClicked:function(){return void 0},getViewportScrollY:function(){return 0},getTotalActionItems:function(){return 0}};// tslint:enable:object-literal-sort-keys
},enumerable:!0,configurable:!0});/** Other variants of TopAppBar foundation overrides this method */MDCTopAppBarBaseFoundation.prototype.handleTargetScroll=function(){};// tslint:disable-line:no-empty
/** Other variants of TopAppBar foundation overrides this method */MDCTopAppBarBaseFoundation.prototype.handleWindowResize=function(){};// tslint:disable-line:no-empty
MDCTopAppBarBaseFoundation.prototype.handleNavigationClick=function(){this.adapter.notifyNavigationIconClicked()};return MDCTopAppBarBaseFoundation}(MDCFoundation$2);_exports.MDCTopAppBarBaseFoundation=_exports.$foundationDefault$5=MDCTopAppBarBaseFoundation;var foundation$6={MDCTopAppBarBaseFoundation:MDCTopAppBarBaseFoundation,default:MDCTopAppBarBaseFoundation};_exports.$foundation$5=foundation$6;const passiveEventOptionsIfSupported=supportsPassiveEventListener?{passive:!0}:void 0;_exports.passiveEventOptionsIfSupported=passiveEventOptionsIfSupported;class TopAppBarBaseBase extends BaseElement{constructor(){super(...arguments);this.mdcFoundationClass=MDCTopAppBarBaseFoundation;this.centerTitle=!1;this.handleTargetScroll=()=>{this.mdcFoundation.handleTargetScroll()};this.handleNavigationClick=()=>{this.mdcFoundation.handleNavigationClick()}}get scrollTarget(){return this._scrollTarget||window}set scrollTarget(value){this.unregisterScrollListener();const old=this.scrollTarget;this._scrollTarget=value;this.updateRootPosition();this.requestUpdate("scrollTarget",old);this.registerScrollListener()}updateRootPosition(){if(this.mdcRoot){const windowScroller=this.scrollTarget===window;// we add support for top-app-bar's tied to an element scroller.
this.mdcRoot.style.position=windowScroller?"":"absolute"}}render(){// clang-format off
let title=html`<span class="mdc-top-app-bar__title"><slot name="title"></slot></span>`;if(this.centerTitle){title=html`<section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-center">${title}</section>`}// clang-format on
return html`
      <header class="mdc-top-app-bar ${classMap(this.barClasses())}">
      <div class="mdc-top-app-bar__row">
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start" id="navigation">
          <slot name="navigationIcon"
            @click=${this.handleNavigationClick}></slot>
          ${this.centerTitle?null:title}
        </section>
        ${this.centerTitle?title:null}
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" id="actions" role="toolbar">
          <slot name="actionItems"></slot>
        </section>
      </div>
    </header>
    <div class="${classMap(this.contentClasses())}">
      <slot></slot>
    </div>
    `}createAdapter(){return Object.assign(Object.assign({},addHasRemoveClass(this.mdcRoot)),{setStyle:(property,value)=>this.mdcRoot.style.setProperty(property,value),getTopAppBarHeight:()=>this.mdcRoot.clientHeight,notifyNavigationIconClicked:()=>{this.dispatchEvent(new Event(strings$2.NAVIGATION_EVENT,{bubbles:!0,cancelable:!0}))},getViewportScrollY:()=>this.scrollTarget instanceof Window?this.scrollTarget.pageYOffset:this.scrollTarget.scrollTop,getTotalActionItems:()=>this._actionItemsSlot.assignedNodes({flatten:!0}).length})}registerListeners(){this.registerScrollListener()}unregisterListeners(){this.unregisterScrollListener()}registerScrollListener(){this.scrollTarget.addEventListener("scroll",this.handleTargetScroll,passiveEventOptionsIfSupported)}unregisterScrollListener(){this.scrollTarget.removeEventListener("scroll",this.handleTargetScroll)}firstUpdated(){super.firstUpdated();this.updateRootPosition();this.registerListeners()}disconnectedCallback(){super.disconnectedCallback();this.unregisterListeners()}}_exports.TopAppBarBaseBase=TopAppBarBaseBase;__decorate$5([query(".mdc-top-app-bar")],TopAppBarBaseBase.prototype,"mdcRoot",void 0);__decorate$5([query("slot[name=\"actionItems\"]")],TopAppBarBaseBase.prototype,"_actionItemsSlot",void 0);__decorate$5([property({type:Boolean})],TopAppBarBaseBase.prototype,"centerTitle",void 0);__decorate$5([property()],TopAppBarBaseBase.prototype,"scrollTarget",null);var mwcTopAppBarBaseBase={passiveEventOptionsIfSupported:passiveEventOptionsIfSupported,TopAppBarBaseBase:TopAppBarBaseBase};_exports.$mwcTopAppBarBaseBase=mwcTopAppBarBaseBase;var INITIAL_VALUE=0,MDCTopAppBarFoundation=/** @class */function(_super){__extends(MDCTopAppBarFoundation,_super);/* istanbul ignore next: optional argument is not a branch statement */function MDCTopAppBarFoundation(adapter){var _this=_super.call(this,adapter)||this;/**
                                                     * Indicates if the top app bar was docked in the previous scroll handler iteration.
                                                     */_this.wasDocked_=!0;/**
                              * Indicates if the top app bar is docked in the fully shown position.
                              */_this.isDockedShowing_=!0;/**
                                    * Variable for current scroll position of the top app bar
                                    */_this.currentAppBarOffsetTop_=0;/**
                                        * Used to prevent the top app bar from being scrolled out of view during resize events
                                        */_this.isCurrentlyBeingResized_=!1;/**
                                             * The timeout that's used to throttle the resize events
                                             */_this.resizeThrottleId_=INITIAL_VALUE;/**
                                              * The timeout that's used to debounce toggling the isCurrentlyBeingResized_ variable after a resize
                                              */_this.resizeDebounceId_=INITIAL_VALUE;_this.lastScrollPosition_=_this.adapter.getViewportScrollY();_this.topAppBarHeight_=_this.adapter.getTopAppBarHeight();return _this}MDCTopAppBarFoundation.prototype.destroy=function(){_super.prototype.destroy.call(this);this.adapter.setStyle("top","")};/**
      * Scroll handler for the default scroll behavior of the top app bar.
      * @override
      */MDCTopAppBarFoundation.prototype.handleTargetScroll=function(){var currentScrollPosition=Math.max(this.adapter.getViewportScrollY(),0),diff=currentScrollPosition-this.lastScrollPosition_;this.lastScrollPosition_=currentScrollPosition;// If the window is being resized the lastScrollPosition_ needs to be updated but the
// current scroll of the top app bar should stay in the same position.
if(!this.isCurrentlyBeingResized_){this.currentAppBarOffsetTop_-=diff;if(0<this.currentAppBarOffsetTop_){this.currentAppBarOffsetTop_=0}else if(Math.abs(this.currentAppBarOffsetTop_)>this.topAppBarHeight_){this.currentAppBarOffsetTop_=-this.topAppBarHeight_}this.moveTopAppBar_()}};/**
      * Top app bar resize handler that throttle/debounce functions that execute updates.
      * @override
      */MDCTopAppBarFoundation.prototype.handleWindowResize=function(){var _this=this;// Throttle resize events 10 p/s
if(!this.resizeThrottleId_){this.resizeThrottleId_=setTimeout(function(){_this.resizeThrottleId_=INITIAL_VALUE;_this.throttledResizeHandler_()},numbers$1.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)}this.isCurrentlyBeingResized_=!0;if(this.resizeDebounceId_){clearTimeout(this.resizeDebounceId_)}this.resizeDebounceId_=setTimeout(function(){_this.handleTargetScroll();_this.isCurrentlyBeingResized_=!1;_this.resizeDebounceId_=INITIAL_VALUE},numbers$1.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)};/**
      * Function to determine if the DOM needs to update.
      */MDCTopAppBarFoundation.prototype.checkForUpdate_=function(){var offscreenBoundaryTop=-this.topAppBarHeight_,hasAnyPixelsOffscreen=0>this.currentAppBarOffsetTop_,hasAnyPixelsOnscreen=this.currentAppBarOffsetTop_>offscreenBoundaryTop,partiallyShowing=hasAnyPixelsOffscreen&&hasAnyPixelsOnscreen;// If it's partially showing, it can't be docked.
if(partiallyShowing){this.wasDocked_=!1}else{// Not previously docked and not partially showing, it's now docked.
if(!this.wasDocked_){this.wasDocked_=!0;return!0}else if(this.isDockedShowing_!==hasAnyPixelsOnscreen){this.isDockedShowing_=hasAnyPixelsOnscreen;return!0}}return partiallyShowing};/**
      * Function to move the top app bar if needed.
      */MDCTopAppBarFoundation.prototype.moveTopAppBar_=function(){if(this.checkForUpdate_()){// Once the top app bar is fully hidden we use the max potential top app bar height as our offset
// so the top app bar doesn't show if the window resizes and the new height > the old height.
var offset=this.currentAppBarOffsetTop_;if(Math.abs(offset)>=this.topAppBarHeight_){offset=-numbers$1.MAX_TOP_APP_BAR_HEIGHT}this.adapter.setStyle("top",offset+"px")}};/**
      * Throttled function that updates the top app bar scrolled values if the
      * top app bar height changes.
      */MDCTopAppBarFoundation.prototype.throttledResizeHandler_=function(){var currentHeight=this.adapter.getTopAppBarHeight();if(this.topAppBarHeight_!==currentHeight){this.wasDocked_=!1;// Since the top app bar has a different height depending on the screen width, this
// will ensure that the top app bar remains in the correct location if
// completely hidden and a resize makes the top app bar a different height.
this.currentAppBarOffsetTop_-=this.topAppBarHeight_-currentHeight;this.topAppBarHeight_=currentHeight}this.handleTargetScroll()};return MDCTopAppBarFoundation}(MDCTopAppBarBaseFoundation);_exports.MDCTopAppBarFoundation=_exports.$foundationDefault$7=MDCTopAppBarFoundation;var foundation$7={MDCTopAppBarFoundation:MDCTopAppBarFoundation,default:MDCTopAppBarFoundation};_exports.$foundation$7=foundation$7;class TopAppBarBase extends TopAppBarBaseBase{constructor(){super(...arguments);this.mdcFoundationClass=MDCTopAppBarFoundation;this.prominent=!1;this.dense=!1;this.handleResize=()=>{this.mdcFoundation.handleWindowResize()}}barClasses(){return{"mdc-top-app-bar--dense":this.dense,"mdc-top-app-bar--prominent":this.prominent,"center-title":this.centerTitle}}contentClasses(){return{"mdc-top-app-bar--fixed-adjust":!this.dense&&!this.prominent,"mdc-top-app-bar--dense-fixed-adjust":this.dense&&!this.prominent,"mdc-top-app-bar--prominent-fixed-adjust":!this.dense&&this.prominent,"mdc-top-app-bar--dense-prominent-fixed-adjust":this.dense&&this.prominent}}registerListeners(){super.registerListeners();window.addEventListener("resize",this.handleResize,passiveEventOptionsIfSupported)}unregisterListeners(){super.unregisterListeners();window.removeEventListener("resize",this.handleResize)}}_exports.TopAppBarBase=TopAppBarBase;__decorate$5([property({type:Boolean,reflect:!0})],TopAppBarBase.prototype,"prominent",void 0);__decorate$5([property({type:Boolean,reflect:!0})],TopAppBarBase.prototype,"dense",void 0);var mwcTopAppBarBase={TopAppBarBase:TopAppBarBase};_exports.$mwcTopAppBarBase=mwcTopAppBarBase;const style$3=css`.mdc-top-app-bar{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee);color:white;display:flex;position:fixed;flex-direction:column;justify-content:space-between;box-sizing:border-box;width:100%;z-index:4}.mdc-top-app-bar .mdc-top-app-bar__action-item,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon{color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-top-app-bar .mdc-top-app-bar__action-item::before,.mdc-top-app-bar .mdc-top-app-bar__action-item::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::after{background-color:#fff;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-primary, #fff))}.mdc-top-app-bar .mdc-top-app-bar__action-item:hover::before,.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-surface--hover::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:hover::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-surface--hover::before{opacity:0.08;opacity:var(--mdc-ripple-hover-opacity, 0.08)}.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded--background-focused::before,.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):focus::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded--background-focused::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded)::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):active::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.24)}.mdc-top-app-bar__row{display:flex;position:relative;box-sizing:border-box;width:100%;height:64px}.mdc-top-app-bar__section{display:inline-flex;flex:1 1 auto;align-items:center;min-width:0;padding:8px 12px;z-index:1}.mdc-top-app-bar__section--align-start{justify-content:flex-start;order:-1}.mdc-top-app-bar__section--align-end{justify-content:flex-end;order:1}.mdc-top-app-bar__title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight, 500);letter-spacing:0.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing, 0.0125em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform, inherit);padding-left:20px;padding-right:0;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;z-index:1}[dir=rtl] .mdc-top-app-bar__title,.mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:20px}.mdc-top-app-bar--short-collapsed{border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:24px;border-bottom-left-radius:0}[dir=rtl] .mdc-top-app-bar--short-collapsed,.mdc-top-app-bar--short-collapsed[dir=rtl]{border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:24px}.mdc-top-app-bar--short{top:0;right:auto;left:0;width:100%;transition:width 250ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-top-app-bar--short,.mdc-top-app-bar--short[dir=rtl]{right:0;left:auto}.mdc-top-app-bar--short .mdc-top-app-bar__row{height:56px}.mdc-top-app-bar--short .mdc-top-app-bar__section{padding:4px}.mdc-top-app-bar--short .mdc-top-app-bar__title{transition:opacity 200ms cubic-bezier(0.4, 0, 0.2, 1);opacity:1}.mdc-top-app-bar--short-collapsed{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12);width:56px;transition:width 300ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__title{display:none}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__action-item{transition:padding 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item{width:112px}.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end{padding-left:0;padding-right:12px}[dir=rtl] .mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end,.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end[dir=rtl]{padding-left:12px;padding-right:0}.mdc-top-app-bar--dense .mdc-top-app-bar__row{height:48px}.mdc-top-app-bar--dense .mdc-top-app-bar__section{padding:0 4px}.mdc-top-app-bar--dense .mdc-top-app-bar__title{padding-left:12px;padding-right:0}[dir=rtl] .mdc-top-app-bar--dense .mdc-top-app-bar__title,.mdc-top-app-bar--dense .mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:12px}.mdc-top-app-bar--prominent .mdc-top-app-bar__row{height:128px}.mdc-top-app-bar--prominent .mdc-top-app-bar__title{align-self:flex-end;padding-bottom:2px}.mdc-top-app-bar--prominent .mdc-top-app-bar__action-item,.mdc-top-app-bar--prominent .mdc-top-app-bar__navigation-icon{align-self:flex-start}.mdc-top-app-bar--fixed{transition:box-shadow 200ms linear}.mdc-top-app-bar--fixed-scrolled{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12);transition:box-shadow 200ms linear}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__row{height:96px}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__section{padding:0 12px}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-left:20px;padding-right:0;padding-bottom:9px}[dir=rtl] .mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title,.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:20px}.mdc-top-app-bar--fixed-adjust{padding-top:64px}.mdc-top-app-bar--dense-fixed-adjust{padding-top:48px}.mdc-top-app-bar--short-fixed-adjust{padding-top:56px}.mdc-top-app-bar--prominent-fixed-adjust{padding-top:128px}.mdc-top-app-bar--dense-prominent-fixed-adjust{padding-top:96px}@media(max-width: 599px){.mdc-top-app-bar__row{height:56px}.mdc-top-app-bar__section{padding:4px}.mdc-top-app-bar--short{transition:width 200ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed{transition:width 250ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end{padding-left:0;padding-right:12px}[dir=rtl] .mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end,.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end[dir=rtl]{padding-left:12px;padding-right:0}.mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-bottom:6px}.mdc-top-app-bar--fixed-adjust{padding-top:56px}}:host{display:block}.mdc-top-app-bar{color:#fff;color:var(--mdc-theme-on-primary, #fff);width:100%;width:var(--mdc-top-app-bar-width, 100%)}.mdc-top-app-bar--prominent #navigation ::slotted(*),.mdc-top-app-bar--prominent #actions ::slotted(*){align-self:flex-start}#navigation ::slotted(*),#actions ::slotted(*){--mdc-icon-button-ripple-opacity: 0.24}.mdc-top-app-bar--short-collapsed #actions ::slotted(*){transition:padding 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar__section--align-center{justify-content:center}.mdc-top-app-bar__section--align-center .mdc-top-app-bar__title{padding-left:0;padding-right:0}.center-title .mdc-top-app-bar__section--align-start,.center-title .mdc-top-app-bar__section--align-end{flex-basis:0}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__section--align-center .mdc-top-app-bar__title{padding-left:0;padding-right:0}.mdc-top-app-bar--fixed-scrolled{box-shadow:var(--mdc-top-app-bar-fixed-box-shadow, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}`;_exports.style$3=style$3;var mwcTopAppBarCss={style:style$3};_exports.$mwcTopAppBarCss=mwcTopAppBarCss;let TopAppBar=class TopAppBar extends TopAppBarBase{};_exports.TopAppBar=TopAppBar;TopAppBar.styles=style$3;_exports.TopAppBar=TopAppBar=__decorate$5([customElement("mwc-top-app-bar")],TopAppBar);var mwcTopAppBar={get TopAppBar(){return TopAppBar}};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */ /* eslint-disable no-unused-vars */ /**
                                           * When using Closure Compiler, JSCompiler_renameProperty(property, object) is replaced by the munged name for object[property]
                                           * We cannot alias this function, so we have to use a small shim that has the same behavior when not compiling.
                                           *
                                           * @param {?} prop Property name
                                           * @param {*} obj Reference object
                                           * @return {string} Potentially renamed property name
                                           */_exports.$mwcTopAppBar=mwcTopAppBar;window.JSCompiler_renameProperty=function(prop,obj){return prop};/* eslint-enable */let CSS_URL_RX=/(url\()([^)]*)(\))/g,ABS_URL=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,workingURL,resolveDoc;/**
                 * Resolves the given URL against the provided `baseUri'.
                 *
                 * Note that this function performs no resolution for URLs that start
                 * with `/` (absolute URLs) or `#` (hash identifiers).  For general purpose
                 * URL resolution, use `window.URL`.
                 *
                 * @param {string} url Input URL to resolve
                 * @param {?string=} baseURI Base URI to resolve the URL against
                 * @return {string} resolved URL
                 */function resolveUrl(url,baseURI){if(url&&ABS_URL.test(url)){return url}if("//"===url){return url}// Lazy feature detection.
if(workingURL===void 0){workingURL=!1;try{const u=new URL("b","http://a");u.pathname="c%20d";workingURL="http://a/c%20d"===u.href}catch(e){// silently fail
}}if(!baseURI){baseURI=document.baseURI||window.location.href}if(workingURL){try{return new URL(url,baseURI).href}catch(e){// Bad url or baseURI structure. Do not attempt to resolve.
return url}}// Fallback to creating an anchor into a disconnected document.
if(!resolveDoc){resolveDoc=document.implementation.createHTMLDocument("temp");resolveDoc.base=resolveDoc.createElement("base");resolveDoc.head.appendChild(resolveDoc.base);resolveDoc.anchor=resolveDoc.createElement("a");resolveDoc.body.appendChild(resolveDoc.anchor)}resolveDoc.base.href=baseURI;resolveDoc.anchor.href=url;return resolveDoc.anchor.href||url}/**
   * Resolves any relative URL's in the given CSS text against the provided
   * `ownerDocument`'s `baseURI`.
   *
   * @param {string} cssText CSS text to process
   * @param {string} baseURI Base URI to resolve the URL against
   * @return {string} Processed CSS text with resolved URL's
   */function resolveCss(cssText,baseURI){return cssText.replace(CSS_URL_RX,function(m,pre,url,post){return pre+"'"+resolveUrl(url.replace(/["']/g,""),baseURI)+"'"+post})}/**
   * Returns a path from a given `url`. The path includes the trailing
   * `/` from the url.
   *
   * @param {string} url Input URL to transform
   * @return {string} resolved path
   */function pathFromUrl(url){return url.substring(0,url.lastIndexOf("/")+1)}var resolveUrl$1={resolveUrl:resolveUrl,resolveCss:resolveCss,pathFromUrl:pathFromUrl};_exports.$resolveUrl=resolveUrl$1;const useShadow=!window.ShadyDOM||!window.ShadyDOM.inUse;_exports.useShadow=useShadow;const useNativeCSSProperties=!!(!window.ShadyCSS||window.ShadyCSS.nativeCss);_exports.useNativeCSSProperties=useNativeCSSProperties;const useNativeCustomElements=!window.customElements.polyfillWrapFlushCallback;_exports.useNativeCustomElements=useNativeCustomElements;const supportsAdoptingStyleSheets$1=useShadow&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&// Since spec may change, feature detect exact API we need
(()=>{try{const sheet=new CSSStyleSheet;sheet.replaceSync("");const host=document.createElement("div");host.attachShadow({mode:"open"});host.shadowRoot.adoptedStyleSheets=[sheet];return host.shadowRoot.adoptedStyleSheets[0]===sheet}catch(e){return!1}})();/**
       * Globally settable property that is automatically assigned to
       * `ElementMixin` instances, useful for binding in templates to
       * make URL's relative to an application's root.  Defaults to the main
       * document URL, but can be overridden by users.  It may be useful to set
       * `rootPath` to provide a stable application mount path when
       * using client side routing.
       */_exports.supportsAdoptingStyleSheets=supportsAdoptingStyleSheets$1;let rootPath=window.Polymer&&window.Polymer.rootPath||pathFromUrl(document.baseURI||window.location.href);/**
                                                                                                                           * Sets the global rootPath property used by `ElementMixin` and
                                                                                                                           * available via `rootPath`.
                                                                                                                           *
                                                                                                                           * @param {string} path The new root path
                                                                                                                           * @return {void}
                                                                                                                           */_exports.rootPath=rootPath;const setRootPath=function(path){_exports.rootPath=rootPath=path};/**
    * A global callback used to sanitize any value before inserting it into the DOM.
    * The callback signature is:
    *
    *  function sanitizeDOMValue(value, name, type, node) { ... }
    *
    * Where:
    *
    * `value` is the value to sanitize.
    * `name` is the name of an attribute or property (for example, href).
    * `type` indicates where the value is being inserted: one of property, attribute, or text.
    * `node` is the node where the value is being inserted.
    *
    * @type {(function(*,string,string,?Node):*)|undefined}
    */_exports.setRootPath=setRootPath;let sanitizeDOMValue=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;/**
                                                                                               * Sets the global sanitizeDOMValue available via this module's exported
                                                                                               * `sanitizeDOMValue` variable.
                                                                                               *
                                                                                               * @param {(function(*,string,string,?Node):*)|undefined} newSanitizeDOMValue the global sanitizeDOMValue callback
                                                                                               * @return {void}
                                                                                               */_exports.sanitizeDOMValue=sanitizeDOMValue;const setSanitizeDOMValue=function(newSanitizeDOMValue){_exports.sanitizeDOMValue=sanitizeDOMValue=newSanitizeDOMValue};/**
    * Gets sanitizeDOMValue, for environments that don't well support `export let`.
    *
    * @return {(function(*,string,string,?Node):*)|undefined} sanitizeDOMValue
    */_exports.setSanitizeDOMValue=setSanitizeDOMValue;const getSanitizeDOMValue=function(){return sanitizeDOMValue};/**
    * Globally settable property to make Polymer Gestures use passive TouchEvent listeners when recognizing gestures.
    * When set to `true`, gestures made from touch will not be able to prevent scrolling, allowing for smoother
    * scrolling performance.
    * Defaults to `false` for backwards compatibility.
    */_exports.getSanitizeDOMValue=getSanitizeDOMValue;let passiveTouchGestures=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1;/**
                                                                                                      * Sets `passiveTouchGestures` globally for all elements using Polymer Gestures.
                                                                                                      *
                                                                                                      * @param {boolean} usePassive enable or disable passive touch gestures globally
                                                                                                      * @return {void}
                                                                                                      */_exports.passiveTouchGestures=passiveTouchGestures;const setPassiveTouchGestures=function(usePassive){_exports.passiveTouchGestures=passiveTouchGestures=usePassive};/**
    * Setting to ensure Polymer template evaluation only occurs based on tempates
    * defined in trusted script.  When true, `<dom-module>` re-registration is
    * disallowed, `<dom-bind>` is disabled, and `<dom-if>`/`<dom-repeat>`
    * templates will only evaluate in the context of a trusted element template.
    */_exports.setPassiveTouchGestures=setPassiveTouchGestures;let strictTemplatePolicy=window.Polymer&&window.Polymer.strictTemplatePolicy||!1;/**
                                                                                                   * Sets `strictTemplatePolicy` globally for all elements
                                                                                                   *
                                                                                                   * @param {boolean} useStrictPolicy enable or disable strict template policy
                                                                                                   *   globally
                                                                                                   * @return {void}
                                                                                                   */_exports.strictTemplatePolicy=strictTemplatePolicy;const setStrictTemplatePolicy=function(useStrictPolicy){_exports.strictTemplatePolicy=strictTemplatePolicy=useStrictPolicy};/**
    * Setting to enable dom-module lookup from Polymer.Element.  By default,
    * templates must be defined in script using the `static get template()`
    * getter and the `html` tag function.  To enable legacy loading of templates
    * via dom-module, set this flag to true.
    */_exports.setStrictTemplatePolicy=setStrictTemplatePolicy;let allowTemplateFromDomModule=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1;/**
                                                                                                               * Sets `lookupTemplateFromDomModule` globally for all elements
                                                                                                               *
                                                                                                               * @param {boolean} allowDomModule enable or disable template lookup
                                                                                                               *   globally
                                                                                                               * @return {void}
                                                                                                               */_exports.allowTemplateFromDomModule=allowTemplateFromDomModule;const setAllowTemplateFromDomModule=function(allowDomModule){_exports.allowTemplateFromDomModule=allowTemplateFromDomModule=allowDomModule};/**
    * Setting to skip processing style includes and re-writing urls in css styles.
    * Normally "included" styles are pulled into the element and all urls in styles
    * are re-written to be relative to the containing script url.
    * If no includes or relative urls are used in styles, these steps can be
    * skipped as an optimization.
    */_exports.setAllowTemplateFromDomModule=setAllowTemplateFromDomModule;let legacyOptimizations=window.Polymer&&window.Polymer.legacyOptimizations||!1;/**
                                                                                                 * Sets `legacyOptimizations` globally for all elements to enable optimizations
                                                                                                 * when only legacy based elements are used.
                                                                                                 *
                                                                                                 * @param {boolean} useLegacyOptimizations enable or disable legacy optimizations
                                                                                                 * includes and url rewriting
                                                                                                 * @return {void}
                                                                                                 */_exports.legacyOptimizations=legacyOptimizations;const setLegacyOptimizations=function(useLegacyOptimizations){_exports.legacyOptimizations=legacyOptimizations=useLegacyOptimizations};/**
    * Setting to add warnings useful when migrating from Polymer 1.x to 2.x.
    */_exports.setLegacyOptimizations=setLegacyOptimizations;let legacyWarnings=window.Polymer&&window.Polymer.legacyWarnings||!1;/**
                                                                                       * Sets `legacyWarnings` globally for all elements to migration warnings.
                                                                                       *
                                                                                       * @param {boolean} useLegacyWarnings enable or disable warnings
                                                                                       * @return {void}
                                                                                       */_exports.legacyWarnings=legacyWarnings;const setLegacyWarnings=function(useLegacyWarnings){_exports.legacyWarnings=legacyWarnings=useLegacyWarnings};/**
    * Setting to perform initial rendering synchronously when running under ShadyDOM.
    * This matches the behavior of Polymer 1.
    */_exports.setLegacyWarnings=setLegacyWarnings;let syncInitialRender=window.Polymer&&window.Polymer.syncInitialRender||!1;/**
                                                                                             * Sets `syncInitialRender` globally for all elements to enable synchronous
                                                                                             * initial rendering.
                                                                                             *
                                                                                             * @param {boolean} useSyncInitialRender enable or disable synchronous initial
                                                                                             * rendering globally.
                                                                                             * @return {void}
                                                                                             */_exports.syncInitialRender=syncInitialRender;const setSyncInitialRender=function(useSyncInitialRender){_exports.syncInitialRender=syncInitialRender=useSyncInitialRender};/**
    * Setting to retain the legacy Polymer 1 behavior for multi-property
    * observers around undefined values. Observers and computed property methods
    * are not called until no argument is undefined.
    */_exports.setSyncInitialRender=setSyncInitialRender;let legacyUndefined=window.Polymer&&window.Polymer.legacyUndefined||!1;/**
                                                                                         * Sets `legacyUndefined` globally for all elements to enable legacy
                                                                                         * multi-property behavior for undefined values.
                                                                                         *
                                                                                         * @param {boolean} useLegacyUndefined enable or disable legacy
                                                                                         * multi-property behavior for undefined.
                                                                                         * @return {void}
                                                                                         */_exports.legacyUndefined=legacyUndefined;const setLegacyUndefined=function(useLegacyUndefined){_exports.legacyUndefined=legacyUndefined=useLegacyUndefined};/**
    * Setting to ensure computed properties are computed in order to ensure
    * re-computation never occurs in a given turn.
    */_exports.setLegacyUndefined=setLegacyUndefined;let orderedComputed=window.Polymer&&window.Polymer.orderedComputed||!1;/**
                                                                                         * Sets `orderedComputed` globally for all elements to enable ordered computed
                                                                                         * property computation.
                                                                                         *
                                                                                         * @param {boolean} useOrderedComputed enable or disable ordered computed effects
                                                                                         * @return {void}
                                                                                         */_exports.orderedComputed=orderedComputed;const setOrderedComputed=function(useOrderedComputed){_exports.orderedComputed=orderedComputed=useOrderedComputed};/**
    * Setting to cancel synthetic click events fired by older mobile browsers. Modern browsers
    * no longer fire synthetic click events, and the cancellation behavior can interfere
    * when programmatically clicking on elements.
    */_exports.setOrderedComputed=setOrderedComputed;let cancelSyntheticClickEvents=!0;/**
                                               * Sets `setCancelSyntheticEvents` globally for all elements to cancel synthetic click events.
                                               *
                                               * @param {boolean} useCancelSyntheticClickEvents enable or disable cancelling synthetic
                                               * events
                                               * @return {void}
                                               */_exports.cancelSyntheticClickEvents=cancelSyntheticClickEvents;const setCancelSyntheticClickEvents=function(useCancelSyntheticClickEvents){_exports.cancelSyntheticClickEvents=cancelSyntheticClickEvents=useCancelSyntheticClickEvents};/**
    * Setting to remove nested templates inside `dom-if` and `dom-repeat` as
    * part of element template parsing.  This is a performance optimization that
    * eliminates most of the tax of needing two elements due to the loss of
    * type-extended templates as a result of the V1 specification changes.
    */_exports.setCancelSyntheticClickEvents=setCancelSyntheticClickEvents;let removeNestedTemplates=window.Polymer&&window.Polymer.removeNestedTemplates||!1;/**
                                                                                                     * Sets `removeNestedTemplates` globally, to eliminate nested templates
                                                                                                     * inside `dom-if` and `dom-repeat` as part of template parsing.
                                                                                                     *
                                                                                                     * @param {boolean} useRemoveNestedTemplates enable or disable removing nested
                                                                                                     *   templates during parsing
                                                                                                     * @return {void}
                                                                                                     */_exports.removeNestedTemplates=removeNestedTemplates;const setRemoveNestedTemplates=function(useRemoveNestedTemplates){_exports.removeNestedTemplates=removeNestedTemplates=useRemoveNestedTemplates};/**
    * Setting to place `dom-if` elements in a performance-optimized mode that takes
    * advantage of lighter-weight host runtime template stamping to eliminate the
    * need for an intermediate Templatizer `TemplateInstance` to mange the nodes
    * stamped by `dom-if`.  Under this setting, any Templatizer-provided API's
    * such as `modelForElement` will not be available for nodes stamped by
    * `dom-if`.
    */_exports.setRemoveNestedTemplates=setRemoveNestedTemplates;let fastDomIf=window.Polymer&&window.Polymer.fastDomIf||!1;/**
                                                                             * Sets `fastDomIf` globally, to put `dom-if` in a performance-optimized mode.
                                                                             *
                                                                             * @param {boolean} useFastDomIf enable or disable `dom-if` fast-mode
                                                                             * @return {void}
                                                                             */_exports.fastDomIf=fastDomIf;const setFastDomIf=function(useFastDomIf){_exports.fastDomIf=fastDomIf=useFastDomIf};/**
    * Setting to disable `dom-change` and `rendered-item-count` events from
    * `dom-if` and `dom-repeat`. Users can opt back into `dom-change` events by
    * setting the `notify-dom-change` attribute (`notifyDomChange: true` property)
    * to `dom-if`/`don-repeat` instances.
    */_exports.setFastDomIf=setFastDomIf;let suppressTemplateNotifications=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1;/**
                                                                                                                     * Sets `suppressTemplateNotifications` globally, to disable `dom-change` and
                                                                                                                     * `rendered-item-count` events from `dom-if` and `dom-repeat`.
                                                                                                                     *
                                                                                                                     * @param {boolean} suppress enable or disable `suppressTemplateNotifications`
                                                                                                                     * @return {void}
                                                                                                                     */_exports.suppressTemplateNotifications=suppressTemplateNotifications;const setSuppressTemplateNotifications=function(suppress){_exports.suppressTemplateNotifications=suppressTemplateNotifications=suppress};/**
    * Setting to disable use of dynamic attributes. This is an optimization
    * to avoid setting `observedAttributes`. Instead attributes are read
    * once at create time and set/removeAttribute are patched.
    */_exports.setSuppressTemplateNotifications=setSuppressTemplateNotifications;let legacyNoObservedAttributes=window.Polymer&&window.Polymer.legacyNoObservedAttributes||!1;/**
                                                                                                               * Sets `legacyNoObservedAttributes` globally, to disable `observedAttributes`.
                                                                                                               *
                                                                                                               * @param {boolean} noObservedAttributes enable or disable `legacyNoObservedAttributes`
                                                                                                               * @return {void}
                                                                                                               */_exports.legacyNoObservedAttributes=legacyNoObservedAttributes;const setLegacyNoObservedAttributes=function(noObservedAttributes){_exports.legacyNoObservedAttributes=legacyNoObservedAttributes=noObservedAttributes};/**
    * Setting to enable use of `adoptedStyleSheets` for sharing style sheets
    * between component instances' shadow roots, if the app uses built Shady CSS
    * styles.
    */_exports.setLegacyNoObservedAttributes=setLegacyNoObservedAttributes;let useAdoptedStyleSheetsWithBuiltCSS=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1;/**
                                                                                                                             * Sets `useAdoptedStyleSheetsWithBuiltCSS` globally.
                                                                                                                             *
                                                                                                                             * @param {boolean} value enable or disable `useAdoptedStyleSheetsWithBuiltCSS`
                                                                                                                             * @return {void}
                                                                                                                             */_exports.useAdoptedStyleSheetsWithBuiltCSS=useAdoptedStyleSheetsWithBuiltCSS;const setUseAdoptedStyleSheetsWithBuiltCSS=function(value){_exports.useAdoptedStyleSheetsWithBuiltCSS=useAdoptedStyleSheetsWithBuiltCSS=value};_exports.setUseAdoptedStyleSheetsWithBuiltCSS=setUseAdoptedStyleSheetsWithBuiltCSS;var settings={useShadow:useShadow,useNativeCSSProperties:useNativeCSSProperties,useNativeCustomElements:useNativeCustomElements,supportsAdoptingStyleSheets:supportsAdoptingStyleSheets$1,get rootPath(){return rootPath},setRootPath:setRootPath,get sanitizeDOMValue(){return sanitizeDOMValue},setSanitizeDOMValue:setSanitizeDOMValue,getSanitizeDOMValue:getSanitizeDOMValue,get passiveTouchGestures(){return passiveTouchGestures},setPassiveTouchGestures:setPassiveTouchGestures,get strictTemplatePolicy(){return strictTemplatePolicy},setStrictTemplatePolicy:setStrictTemplatePolicy,get allowTemplateFromDomModule(){return allowTemplateFromDomModule},setAllowTemplateFromDomModule:setAllowTemplateFromDomModule,get legacyOptimizations(){return legacyOptimizations},setLegacyOptimizations:setLegacyOptimizations,get legacyWarnings(){return legacyWarnings},setLegacyWarnings:setLegacyWarnings,get syncInitialRender(){return syncInitialRender},setSyncInitialRender:setSyncInitialRender,get legacyUndefined(){return legacyUndefined},setLegacyUndefined:setLegacyUndefined,get orderedComputed(){return orderedComputed},setOrderedComputed:setOrderedComputed,get cancelSyntheticClickEvents(){return cancelSyntheticClickEvents},setCancelSyntheticClickEvents:setCancelSyntheticClickEvents,get removeNestedTemplates(){return removeNestedTemplates},setRemoveNestedTemplates:setRemoveNestedTemplates,get fastDomIf(){return fastDomIf},setFastDomIf:setFastDomIf,get suppressTemplateNotifications(){return suppressTemplateNotifications},setSuppressTemplateNotifications:setSuppressTemplateNotifications,get legacyNoObservedAttributes(){return legacyNoObservedAttributes},setLegacyNoObservedAttributes:setLegacyNoObservedAttributes,get useAdoptedStyleSheetsWithBuiltCSS(){return useAdoptedStyleSheetsWithBuiltCSS},setUseAdoptedStyleSheetsWithBuiltCSS:setUseAdoptedStyleSheetsWithBuiltCSS};_exports.$settings=settings;let modules={},lcModules={};/**
                     * Sets a dom-module into the global registry by id.
                     *
                     * @param {string} id dom-module id
                     * @param {DomModule} module dom-module instance
                     * @return {void}
                     */function setModule(id,module){// store id separate from lowercased id so that
// in all cases mixedCase id will stored distinctly
// and lowercase version is a fallback
modules[id]=lcModules[id.toLowerCase()]=module}/**
   * Retrieves a dom-module from the global registry by id.
   *
   * @param {string} id dom-module id
   * @return {DomModule!} dom-module instance
   */function findModule(id){return modules[id]||lcModules[id.toLowerCase()]}function styleOutsideTemplateCheck(inst){if(inst.querySelector("style")){console.warn("dom-module %s has style outside template",inst.id)}}/**
   * The `dom-module` element registers the dom it contains to the name given
   * by the module's id attribute. It provides a unified database of dom
   * accessible via its static `import` API.
   *
   * A key use case of `dom-module` is for providing custom element `<template>`s
   * via HTML imports that are parsed by the native HTML parser, that can be
   * relocated during a bundling pass and still looked up by `id`.
   *
   * Example:
   *
   *     <dom-module id="foo">
   *       <img src="stuff.png">
   *     </dom-module>
   *
   * Then in code in some other location that cannot access the dom-module above
   *
   *     let img = customElements.get('dom-module').import('foo', 'img');
   *
   * @customElement
   * @extends HTMLElement
   * @summary Custom element that provides a registry of relocatable DOM content
   *   by `id` that is agnostic to bundling.
   * @unrestricted
   */class DomModule extends HTMLElement{/** @override */static get observedAttributes(){return["id"]}/**
     * Retrieves the element specified by the css `selector` in the module
     * registered by `id`. For example, this.import('foo', 'img');
     * @param {string} id The id of the dom-module in which to search.
     * @param {string=} selector The css selector by which to find the element.
     * @return {Element} Returns the element which matches `selector` in the
     * module registered at the specified `id`.
     *
     * @export
     * @nocollapse Referred to indirectly in style-gather.js
     */static import(id,selector){if(id){let m=findModule(id);if(m&&selector){return m.querySelector(selector)}return m}return null}/* eslint-disable no-unused-vars */ /**
                                         * @param {string} name Name of attribute.
                                         * @param {?string} old Old value of attribute.
                                         * @param {?string} value Current value of attribute.
                                         * @param {?string} namespace Attribute namespace.
                                         * @return {void}
                                         * @override
                                         */attributeChangedCallback(name,old,value,namespace){if(old!==value){this.register()}}/* eslint-enable no-unused-args */ /**
                                        * The absolute URL of the original location of this `dom-module`.
                                        *
                                        * This value will differ from this element's `ownerDocument` in the
                                        * following ways:
                                        * - Takes into account any `assetpath` attribute added during bundling
                                        *   to indicate the original location relative to the bundled location
                                        * - Uses the HTMLImports polyfill's `importForElement` API to ensure
                                        *   the path is relative to the import document's location since
                                        *   `ownerDocument` is not currently polyfilled
                                        */get assetpath(){// Don't override existing assetpath.
if(!this.__assetpath){// note: assetpath set via an attribute must be relative to this
// element's location; accomodate polyfilled HTMLImports
const owner=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,url=resolveUrl(this.getAttribute("assetpath")||"",owner.baseURI);this.__assetpath=pathFromUrl(url)}return this.__assetpath}/**
     * Registers the dom-module at a given id. This method should only be called
     * when a dom-module is imperatively created. For
     * example, `document.createElement('dom-module').register('foo')`.
     * @param {string=} id The id at which to register the dom-module.
     * @return {void}
     */register(id){id=id||this.id;if(id){// Under strictTemplatePolicy, reject and null out any re-registered
// dom-module since it is ambiguous whether first-in or last-in is trusted
if(strictTemplatePolicy&&findModule(id)!==void 0){setModule(id,null);throw new Error(`strictTemplatePolicy: dom-module ${id} re-registered`)}this.id=id;setModule(id,this);styleOutsideTemplateCheck(this)}}}_exports.DomModule=DomModule;DomModule.prototype.modules=modules;customElements.define("dom-module",DomModule);var domModule={DomModule:DomModule};_exports.$domModule=domModule;let dedupeId=0;/**
                   * @constructor
                   * @extends {Function}
                   * @private
                   */function MixinFunction(){}/** @type {(WeakMap | undefined)} */MixinFunction.prototype.__mixinApplications;/** @type {(Object | undefined)} */MixinFunction.prototype.__mixinSet;/* eslint-disable valid-jsdoc */ /**
                                                                      * Wraps an ES6 class expression mixin such that the mixin is only applied
                                                                      * if it has not already been applied its base argument. Also memoizes mixin
                                                                      * applications.
                                                                      *
                                                                      * @template T
                                                                      * @param {T} mixin ES6 class expression mixin to wrap
                                                                      * @return {T}
                                                                      * @suppress {invalidCasts}
                                                                      */const dedupingMixin=function(mixin){let mixinApplications=/** @type {!MixinFunction} */mixin.__mixinApplications;if(!mixinApplications){mixinApplications=new WeakMap;/** @type {!MixinFunction} */mixin.__mixinApplications=mixinApplications}// maintain a unique id for each mixin
let mixinDedupeId=dedupeId++;function dedupingMixin(base){let baseSet=/** @type {!MixinFunction} */base.__mixinSet;if(baseSet&&baseSet[mixinDedupeId]){return base}let map=mixinApplications,extended=map.get(base);if(!extended){extended=/** @type {!Function} */mixin(base);map.set(base,extended);// copy inherited mixin set from the extended class, or the base class
// NOTE: we avoid use of Set here because some browser (IE11)
// cannot extend a base Set via the constructor.
let mixinSet=Object.create(/** @type {!MixinFunction} */extended.__mixinSet||baseSet||null);mixinSet[mixinDedupeId]=!0;/** @type {!MixinFunction} */extended.__mixinSet=mixinSet}return extended}return dedupingMixin};/* eslint-enable valid-jsdoc */_exports.dedupingMixin=dedupingMixin;var mixin={dedupingMixin:dedupingMixin};_exports.$mixin=mixin;const MODULE_STYLE_LINK_SELECTOR="link[rel=import][type~=css]",INCLUDE_ATTR="include",SHADY_UNSCOPED_ATTR="shady-unscoped";/**
                                               * @param {string} moduleId .
                                               * @return {?DomModule} .
                                               */function importModule(moduleId){return(/** @type {?DomModule} */DomModule.import(moduleId))}function styleForImport(importDoc){// NOTE: polyfill affordance.
// under the HTMLImports polyfill, there will be no 'body',
// but the import pseudo-doc can be used directly.
let container=importDoc.body?importDoc.body:importDoc;const importCss=resolveCss(container.textContent,importDoc.baseURI),style=document.createElement("style");style.textContent=importCss;return style}/** @typedef {{assetpath: string}} */let templateWithAssetPath;// eslint-disable-line no-unused-vars
/**
 * Returns a list of <style> elements in a space-separated list of `dom-module`s.
 *
 * @function
 * @param {string} moduleIds List of dom-module id's within which to
 * search for css.
 * @return {!Array<!HTMLStyleElement>} Array of contained <style> elements
 */function stylesFromModules(moduleIds){const modules=moduleIds.trim().split(/\s+/),styles=[];for(let i=0;i<modules.length;i++){styles.push(...stylesFromModule(modules[i]))}return styles}/**
   * Returns a list of <style> elements in a given `dom-module`.
   * Styles in a `dom-module` can come either from `<style>`s within the
   * first `<template>`, or else from one or more
   * `<link rel="import" type="css">` links outside the template.
   *
   * @param {string} moduleId dom-module id to gather styles from
   * @return {!Array<!HTMLStyleElement>} Array of contained styles.
   */function stylesFromModule(moduleId){const m=importModule(moduleId);if(!m){console.warn("Could not find style data in module named",moduleId);return[]}if(m._styles===void 0){const styles=[..._stylesFromModuleImports(m)],template=/** @type {?HTMLTemplateElement} */m.querySelector("template");// module imports: <link rel="import" type="css">
if(template){styles.push(...stylesFromTemplate(template,/** @type {templateWithAssetPath} */m.assetpath))}m._styles=styles}return m._styles}/**
   * Returns the `<style>` elements within a given template.
   *
   * @param {!HTMLTemplateElement} template Template to gather styles from
   * @param {string=} baseURI baseURI for style content
   * @return {!Array<!HTMLStyleElement>} Array of styles
   */function stylesFromTemplate(template,baseURI){if(!template._styles){const styles=[],e$=template.content.querySelectorAll("style");// if element is a template, get content from its .content
for(let i=0;i<e$.length;i++){let e=e$[i],include=e.getAttribute(INCLUDE_ATTR);// support style sharing by allowing styles to "include"
// other dom-modules that contain styling
if(include){styles.push(...stylesFromModules(include).filter(function(item,index,self){return self.indexOf(item)===index}))}if(baseURI){e.textContent=resolveCss(e.textContent,/** @type {string} */baseURI)}styles.push(e)}template._styles=styles}return template._styles}/**
   * Returns a list of <style> elements  from stylesheets loaded via `<link rel="import" type="css">` links within the specified `dom-module`.
   *
   * @param {string} moduleId Id of `dom-module` to gather CSS from
   * @return {!Array<!HTMLStyleElement>} Array of contained styles.
   */function stylesFromModuleImports(moduleId){let m=importModule(moduleId);return m?_stylesFromModuleImports(m):[]}/**
   * @param {!HTMLElement} module dom-module element that could contain `<link rel="import" type="css">` styles
   * @return {!Array<!HTMLStyleElement>} Array of contained styles
   */function _stylesFromModuleImports(module){const styles=[],p$=module.querySelectorAll(MODULE_STYLE_LINK_SELECTOR);for(let i=0,p;i<p$.length;i++){p=p$[i];if(p.import){const importDoc=p.import,unscoped=p.hasAttribute(SHADY_UNSCOPED_ATTR);if(unscoped&&!importDoc._unscopedStyle){const style=styleForImport(importDoc);style.setAttribute(SHADY_UNSCOPED_ATTR,"");importDoc._unscopedStyle=style}else if(!importDoc._style){importDoc._style=styleForImport(importDoc)}styles.push(unscoped?importDoc._unscopedStyle:importDoc._style)}}return styles}/**
   *
   * Returns CSS text of styles in a space-separated list of `dom-module`s.
   * Note: This method is deprecated, use `stylesFromModules` instead.
   *
   * @deprecated
   * @param {string} moduleIds List of dom-module id's within which to
   * search for css.
   * @return {string} Concatenated CSS content from specified `dom-module`s
   */function cssFromModules(moduleIds){let modules=moduleIds.trim().split(/\s+/),cssText="";for(let i=0;i<modules.length;i++){cssText+=cssFromModule(modules[i])}return cssText}/**
   * Returns CSS text of styles in a given `dom-module`.  CSS in a `dom-module`
   * can come either from `<style>`s within the first `<template>`, or else
   * from one or more `<link rel="import" type="css">` links outside the
   * template.
   *
   * Any `<styles>` processed are removed from their original location.
   * Note: This method is deprecated, use `styleFromModule` instead.
   *
   * @deprecated
   * @param {string} moduleId dom-module id to gather styles from
   * @return {string} Concatenated CSS content from specified `dom-module`
   */function cssFromModule(moduleId){let m=importModule(moduleId);if(m&&m._cssText===void 0){// module imports: <link rel="import" type="css">
let cssText=_cssFromModuleImports(m),t=/** @type {?HTMLTemplateElement} */m.querySelector("template");// include css from the first template in the module
if(t){cssText+=cssFromTemplate(t,/** @type {templateWithAssetPath} */m.assetpath)}m._cssText=cssText||null}if(!m){console.warn("Could not find style data in module named",moduleId)}return m&&m._cssText||""}/**
   * Returns CSS text of `<styles>` within a given template.
   *
   * Any `<styles>` processed are removed from their original location.
   * Note: This method is deprecated, use `styleFromTemplate` instead.
   *
   * @deprecated
   * @param {!HTMLTemplateElement} template Template to gather styles from
   * @param {string} baseURI Base URI to resolve the URL against
   * @return {string} Concatenated CSS content from specified template
   */function cssFromTemplate(template,baseURI){let cssText="";const e$=stylesFromTemplate(template,baseURI);// if element is a template, get content from its .content
for(let i=0,e;i<e$.length;i++){e=e$[i];if(e.parentNode){e.parentNode.removeChild(e)}cssText+=e.textContent}return cssText}/**
   * Returns CSS text from stylesheets loaded via `<link rel="import" type="css">`
   * links within the specified `dom-module`.
   *
   * Note: This method is deprecated, use `stylesFromModuleImports` instead.
   *
   * @deprecated
   *
   * @param {string} moduleId Id of `dom-module` to gather CSS from
   * @return {string} Concatenated CSS content from links in specified `dom-module`
   */function cssFromModuleImports(moduleId){let m=importModule(moduleId);return m?_cssFromModuleImports(m):""}/**
   * @deprecated
   * @param {!HTMLElement} module dom-module element that could contain `<link rel="import" type="css">` styles
   * @return {string} Concatenated CSS content from links in the dom-module
   */function _cssFromModuleImports(module){let cssText="",styles=_stylesFromModuleImports(module);for(let i=0;i<styles.length;i++){cssText+=styles[i].textContent}return cssText}var styleGather={stylesFromModules:stylesFromModules,stylesFromModule:stylesFromModule,stylesFromTemplate:stylesFromTemplate,stylesFromModuleImports:stylesFromModuleImports,cssFromModules:cssFromModules,cssFromModule:cssFromModule,cssFromTemplate:cssFromTemplate,cssFromModuleImports:cssFromModuleImports};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */ /* eslint-disable valid-jsdoc */ /**
                                        * Node wrapper to ensure ShadowDOM safe operation regardless of polyfill
                                        * presence or mode. Note that with the introduction of `ShadyDOM.noPatch`,
                                        * a node wrapper must be used to access ShadowDOM API.
                                        * This is similar to using `Polymer.dom` but relies exclusively
                                        * on the presence of the ShadyDOM polyfill rather than requiring the loading
                                        * of legacy (Polymer.dom) API.
                                        * @type {function(Node):Node}
                                        */_exports.$styleGather=styleGather;const wrap=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?n=>ShadyDOM.patch(n):n=>n;_exports.wrap=wrap;var wrap$1={wrap:wrap};_exports.$wrap=wrap$1;function isPath(path){return 0<=path.indexOf(".")}/**
   * Returns the root property name for the given path.
   *
   * Example:
   *
   * ```
   * root('foo.bar.baz') // 'foo'
   * root('foo')         // 'foo'
   * ```
   *
   * @param {string} path Path string
   * @return {string} Root property name
   */function root(path){let dotIndex=path.indexOf(".");if(-1===dotIndex){return path}return path.slice(0,dotIndex)}/**
   * Given `base` is `foo.bar`, `foo` is an ancestor, `foo.bar` is not
   * Returns true if the given path is an ancestor of the base path.
   *
   * Example:
   *
   * ```
   * isAncestor('foo.bar', 'foo')         // true
   * isAncestor('foo.bar', 'foo.bar')     // false
   * isAncestor('foo.bar', 'foo.bar.baz') // false
   * ```
   *
   * @param {string} base Path string to test against.
   * @param {string} path Path string to test.
   * @return {boolean} True if `path` is an ancestor of `base`.
   */function isAncestor(base,path){//     base.startsWith(path + '.');
return 0===base.indexOf(path+".")}/**
   * Given `base` is `foo.bar`, `foo.bar.baz` is an descendant
   *
   * Example:
   *
   * ```
   * isDescendant('foo.bar', 'foo.bar.baz') // true
   * isDescendant('foo.bar', 'foo.bar')     // false
   * isDescendant('foo.bar', 'foo')         // false
   * ```
   *
   * @param {string} base Path string to test against.
   * @param {string} path Path string to test.
   * @return {boolean} True if `path` is a descendant of `base`.
   */function isDescendant(base,path){//     path.startsWith(base + '.');
return 0===path.indexOf(base+".")}/**
   * Replaces a previous base path with a new base path, preserving the
   * remainder of the path.
   *
   * User must ensure `path` has a prefix of `base`.
   *
   * Example:
   *
   * ```
   * translate('foo.bar', 'zot', 'foo.bar.baz') // 'zot.baz'
   * ```
   *
   * @param {string} base Current base string to remove
   * @param {string} newBase New base string to replace with
   * @param {string} path Path to translate
   * @return {string} Translated string
   */function translate(base,newBase,path){return newBase+path.slice(base.length)}/**
   * @param {string} base Path string to test against
   * @param {string} path Path string to test
   * @return {boolean} True if `path` is equal to `base`
   */function matches$1(base,path){return base===path||isAncestor(base,path)||isDescendant(base,path)}/**
   * Converts array-based paths to flattened path.  String-based paths
   * are returned as-is.
   *
   * Example:
   *
   * ```
   * normalize(['foo.bar', 0, 'baz'])  // 'foo.bar.0.baz'
   * normalize('foo.bar.0.baz')        // 'foo.bar.0.baz'
   * ```
   *
   * @param {string | !Array<string|number>} path Input path
   * @return {string} Flattened path
   */function normalize(path){if(Array.isArray(path)){let parts=[];for(let i=0,args;i<path.length;i++){args=path[i].toString().split(".");for(let j=0;j<args.length;j++){parts.push(args[j])}}return parts.join(".")}else{return path}}/**
   * Splits a path into an array of property names. Accepts either arrays
   * of path parts or strings.
   *
   * Example:
   *
   * ```
   * split(['foo.bar', 0, 'baz'])  // ['foo', 'bar', '0', 'baz']
   * split('foo.bar.0.baz')        // ['foo', 'bar', '0', 'baz']
   * ```
   *
   * @param {string | !Array<string|number>} path Input path
   * @return {!Array<string>} Array of path parts
   * @suppress {checkTypes}
   */function split(path){if(Array.isArray(path)){return normalize(path).split(".")}return path.toString().split(".")}/**
   * Reads a value from a path.  If any sub-property in the path is `undefined`,
   * this method returns `undefined` (will never throw.
   *
   * @param {Object} root Object from which to dereference path from
   * @param {string | !Array<string|number>} path Path to read
   * @param {Object=} info If an object is provided to `info`, the normalized
   *  (flattened) path will be set to `info.path`.
   * @return {*} Value at path, or `undefined` if the path could not be
   *  fully dereferenced.
   */function get(root,path,info){let prop=root,parts=split(path);// Loop over path parts[0..n-1] and dereference
for(let i=0;i<parts.length;i++){if(!prop){return}let part=parts[i];prop=prop[part]}if(info){info.path=parts.join(".")}return prop}/**
   * Sets a value to a path.  If any sub-property in the path is `undefined`,
   * this method will no-op.
   *
   * @param {Object} root Object from which to dereference path from
   * @param {string | !Array<string|number>} path Path to set
   * @param {*} value Value to set to path
   * @return {string | undefined} The normalized version of the input path
   */function set(root,path,value){let prop=root,parts=split(path),last=parts[parts.length-1];if(1<parts.length){// Loop over path parts[0..n-2] and dereference
for(let i=0,part;i<parts.length-1;i++){part=parts[i];prop=prop[part];if(!prop){return}}// Set value to object at end of path
prop[last]=value}else{// Simple property set
prop[path]=value}return parts.join(".")}/**
   * Returns true if the given string is a structured data path (has dots).
   *
   * This function is deprecated.  Use `isPath` instead.
   *
   * Example:
   *
   * ```
   * isDeep('foo.bar.baz') // true
   * isDeep('foo')         // false
   * ```
   *
   * @deprecated
   * @param {string} path Path string
   * @return {boolean} True if the string contained one or more dots
   */const isDeep=isPath;_exports.isDeep=isDeep;var path={isPath:isPath,root:root,isAncestor:isAncestor,isDescendant:isDescendant,translate:translate,matches:matches$1,normalize:normalize,split:split,get:get,set:set,isDeep:isDeep};_exports.$path=path;const caseMap={},DASH_TO_CAMEL=/-[a-z]/g,CAMEL_TO_DASH=/([A-Z])/g;/**
                                   * @fileoverview Module with utilities for converting between "dash-case" and
                                   * "camelCase" identifiers.
                                   */ /**
                                       * Converts "dash-case" identifier (e.g. `foo-bar-baz`) to "camelCase"
                                       * (e.g. `fooBarBaz`).
                                       *
                                       * @param {string} dash Dash-case identifier
                                       * @return {string} Camel-case representation of the identifier
                                       */function dashToCamelCase(dash){return caseMap[dash]||(caseMap[dash]=0>dash.indexOf("-")?dash:dash.replace(DASH_TO_CAMEL,m=>m[1].toUpperCase()))}/**
   * Converts "camelCase" identifier (e.g. `fooBarBaz`) to "dash-case"
   * (e.g. `foo-bar-baz`).
   *
   * @param {string} camel Camel-case identifier
   * @return {string} Dash-case representation of the identifier
   */function camelToDashCase(camel){return caseMap[camel]||(caseMap[camel]=camel.replace(CAMEL_TO_DASH,"-$1").toLowerCase())}var caseMap$1={dashToCamelCase:dashToCamelCase,camelToDashCase:camelToDashCase};_exports.$caseMap=caseMap$1;let microtaskCurrHandle=0,microtaskLastHandle=0,microtaskCallbacks=[],microtaskNodeContent=0,microtaskScheduled=!1,microtaskNode=document.createTextNode("");new window.MutationObserver(microtaskFlush).observe(microtaskNode,{characterData:!0});function microtaskFlush(){microtaskScheduled=!1;const len=microtaskCallbacks.length;for(let i=0,cb;i<len;i++){cb=microtaskCallbacks[i];if(cb){try{cb()}catch(e){setTimeout(()=>{throw e})}}}microtaskCallbacks.splice(0,len);microtaskLastHandle+=len}/**
   * Async interface wrapper around `setTimeout`.
   *
   * @namespace
   * @summary Async interface wrapper around `setTimeout`.
   */const timeOut={/**
   * Returns a sub-module with the async interface providing the provided
   * delay.
   *
   * @memberof timeOut
   * @param {number=} delay Time to wait before calling callbacks in ms
   * @return {!AsyncInterface} An async timeout interface
   */after(delay){return{run(fn){return window.setTimeout(fn,delay)},cancel(handle){window.clearTimeout(handle)}}},/**
   * Enqueues a function called in the next task.
   *
   * @memberof timeOut
   * @param {!Function} fn Callback to run
   * @param {number=} delay Delay in milliseconds
   * @return {number} Handle used for canceling task
   */run(fn,delay){return window.setTimeout(fn,delay)},/**
   * Cancels a previously enqueued `timeOut` callback.
   *
   * @memberof timeOut
   * @param {number} handle Handle returned from `run` of callback to cancel
   * @return {void}
   */cancel(handle){window.clearTimeout(handle)}};_exports.timeOut=timeOut;const animationFrame={/**
   * Enqueues a function called at `requestAnimationFrame` timing.
   *
   * @memberof animationFrame
   * @param {function(number):void} fn Callback to run
   * @return {number} Handle used for canceling task
   */run(fn){return window.requestAnimationFrame(fn)},/**
   * Cancels a previously enqueued `animationFrame` callback.
   *
   * @memberof animationFrame
   * @param {number} handle Handle returned from `run` of callback to cancel
   * @return {void}
   */cancel(handle){window.cancelAnimationFrame(handle)}};_exports.animationFrame=animationFrame;const idlePeriod={/**
   * Enqueues a function called at `requestIdleCallback` timing.
   *
   * @memberof idlePeriod
   * @param {function(!IdleDeadline):void} fn Callback to run
   * @return {number} Handle used for canceling task
   */run(fn){return window.requestIdleCallback?window.requestIdleCallback(fn):window.setTimeout(fn,16)},/**
   * Cancels a previously enqueued `idlePeriod` callback.
   *
   * @memberof idlePeriod
   * @param {number} handle Handle returned from `run` of callback to cancel
   * @return {void}
   */cancel(handle){window.cancelIdleCallback?window.cancelIdleCallback(handle):window.clearTimeout(handle)}};_exports.idlePeriod=idlePeriod;const microTask={/**
   * Enqueues a function called at microtask timing.
   *
   * @memberof microTask
   * @param {!Function=} callback Callback to run
   * @return {number} Handle used for canceling task
   */run(callback){if(!microtaskScheduled){microtaskScheduled=!0;microtaskNode.textContent=microtaskNodeContent++}microtaskCallbacks.push(callback);return microtaskCurrHandle++},/**
   * Cancels a previously enqueued `microTask` callback.
   *
   * @memberof microTask
   * @param {number} handle Handle returned from `run` of callback to cancel
   * @return {void}
   */cancel(handle){const idx=handle-microtaskLastHandle;if(0<=idx){if(!microtaskCallbacks[idx]){throw new Error("invalid async handle: "+handle)}microtaskCallbacks[idx]=null}}};_exports.microTask=microTask;var async={timeOut:timeOut,animationFrame:animationFrame,idlePeriod:idlePeriod,microTask:microTask};_exports.$async=async;const microtask=microTask,PropertiesChanged=dedupingMixin(/**
                                                 * @template T
                                                 * @param {function(new:T)} superClass Class to apply mixin to.
                                                 * @return {function(new:T)} superClass with mixin applied.
                                                 */superClass=>{/**
   * @polymer
   * @mixinClass
   * @implements {Polymer_PropertiesChanged}
   * @unrestricted
   */class PropertiesChanged extends superClass{/**
     * Creates property accessors for the given property names.
     * @param {!Object} props Object whose keys are names of accessors.
     * @return {void}
     * @protected
     * @nocollapse
     */static createProperties(props){const proto=this.prototype;for(let prop in props){// don't stomp an existing accessor
if(!(prop in proto)){proto._createPropertyAccessor(prop)}}}/**
       * Returns an attribute name that corresponds to the given property.
       * The attribute name is the lowercased property name. Override to
       * customize this mapping.
       * @param {string} property Property to convert
       * @return {string} Attribute name corresponding to the given property.
       *
       * @protected
       * @nocollapse
       */static attributeNameForProperty(property){return property.toLowerCase()}/**
       * Override point to provide a type to which to deserialize a value to
       * a given property.
       * @param {string} name Name of property
       *
       * @protected
       * @nocollapse
       */static typeForProperty(name){}//eslint-disable-line no-unused-vars
/**
     * Creates a setter/getter pair for the named property with its own
     * local storage.  The getter returns the value in the local storage,
     * and the setter calls `_setProperty`, which updates the local storage
     * for the property and enqueues a `_propertiesChanged` callback.
     *
     * This method may be called on a prototype or an instance.  Calling
     * this method may overwrite a property value that already exists on
     * the prototype/instance by creating the accessor.
     *
     * @param {string} property Name of the property
     * @param {boolean=} readOnly When true, no setter is created; the
     *   protected `_setProperty` function must be used to set the property
     * @return {void}
     * @protected
     * @override
     */_createPropertyAccessor(property,readOnly){this._addPropertyToAttributeMap(property);if(!this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))){this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)}if(!this.__dataHasAccessor[property]){this.__dataHasAccessor[property]=!0;this._definePropertyAccessor(property,readOnly)}}/**
       * Adds the given `property` to a map matching attribute names
       * to property names, using `attributeNameForProperty`. This map is
       * used when deserializing attribute values to properties.
       *
       * @param {string} property Name of the property
       * @override
       */_addPropertyToAttributeMap(property){if(!this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))){this.__dataAttributes=Object.assign({},this.__dataAttributes)}// This check is technically not correct; it's an optimization that
// assumes that if a _property_ name is already in the map (note this is
// an attr->property map), the property mapped directly to the attribute
// and it has already been mapped.  This would fail if
// `attributeNameForProperty` were overridden such that this was not the
// case.
let attr=this.__dataAttributes[property];if(!attr){attr=this.constructor.attributeNameForProperty(property);this.__dataAttributes[attr]=property}return attr}/**
       * Defines a property accessor for the given property.
       * @param {string} property Name of the property
       * @param {boolean=} readOnly When true, no setter is created
       * @return {void}
       * @override
       */_definePropertyAccessor(property,readOnly){Object.defineProperty(this,property,{/* eslint-disable valid-jsdoc */ /** @this {PropertiesChanged} */get(){// Inline for perf instead of using `_getProperty`
return this.__data[property]},/** @this {PropertiesChanged} */set:readOnly?function(){}:function(value){// Inline for perf instead of using `_setProperty`
if(this._setPendingProperty(property,value,!0)){this._invalidateProperties()}}/* eslint-enable */})}constructor(){super();/** @type {boolean} */this.__dataEnabled=!1;this.__dataReady=!1;this.__dataInvalid=!1;this.__data={};this.__dataPending=null;this.__dataOld=null;this.__dataInstanceProps=null;/** @type {number} */ // NOTE: used to track re-entrant calls to `_flushProperties`
this.__dataCounter=0;this.__serializing=!1;this._initializeProperties()}/**
       * Lifecycle callback called when properties are enabled via
       * `_enableProperties`.
       *
       * Users may override this function to implement behavior that is
       * dependent on the element having its property data initialized, e.g.
       * from defaults (initialized from `constructor`, `_initializeProperties`),
       * `attributeChangedCallback`, or values propagated from host e.g. via
       * bindings.  `super.ready()` must be called to ensure the data system
       * becomes enabled.
       *
       * @return {void}
       * @public
       * @override
       */ready(){this.__dataReady=!0;this._flushProperties()}/**
       * Initializes the local storage for property accessors.
       *
       * Provided as an override point for performing any setup work prior
       * to initializing the property accessor system.
       *
       * @return {void}
       * @protected
       * @override
       */_initializeProperties(){// Capture instance properties; these will be set into accessors
// during first flush. Don't set them here, since we want
// these to overwrite defaults/constructor assignments
for(let p in this.__dataHasAccessor){if(this.hasOwnProperty(p)){this.__dataInstanceProps=this.__dataInstanceProps||{};this.__dataInstanceProps[p]=this[p];delete this[p]}}}/**
       * Called at ready time with bag of instance properties that overwrote
       * accessors when the element upgraded.
       *
       * The default implementation sets these properties back into the
       * setter at ready time.  This method is provided as an override
       * point for customizing or providing more efficient initialization.
       *
       * @param {Object} props Bag of property values that were overwritten
       *   when creating property accessors.
       * @return {void}
       * @protected
       * @override
       */_initializeInstanceProperties(props){Object.assign(this,props)}/**
       * Updates the local storage for a property (via `_setPendingProperty`)
       * and enqueues a `_proeprtiesChanged` callback.
       *
       * @param {string} property Name of the property
       * @param {*} value Value to set
       * @return {void}
       * @protected
       * @override
       */_setProperty(property,value){if(this._setPendingProperty(property,value)){this._invalidateProperties()}}/**
       * Returns the value for the given property.
       * @param {string} property Name of property
       * @return {*} Value for the given property
       * @protected
       * @override
       */_getProperty(property){return this.__data[property]}/* eslint-disable no-unused-vars */ /**
                                           * Updates the local storage for a property, records the previous value,
                                           * and adds it to the set of "pending changes" that will be passed to the
                                           * `_propertiesChanged` callback.  This method does not enqueue the
                                           * `_propertiesChanged` callback.
                                           *
                                           * @param {string} property Name of the property
                                           * @param {*} value Value to set
                                           * @param {boolean=} ext Not used here; affordance for closure
                                           * @return {boolean} Returns true if the property changed
                                           * @protected
                                           * @override
                                           */_setPendingProperty(property,value,ext){let old=this.__data[property],changed=this._shouldPropertyChange(property,value,old);if(changed){if(!this.__dataPending){this.__dataPending={};this.__dataOld={}}// Ensure old is captured from the last turn
if(this.__dataOld&&!(property in this.__dataOld)){this.__dataOld[property]=old}this.__data[property]=value;this.__dataPending[property]=value}return changed}/* eslint-enable */ /**
                           * @param {string} property Name of the property
                           * @return {boolean} Returns true if the property is pending.
                           */_isPropertyPending(property){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(property))}/**
       * Marks the properties as invalid, and enqueues an async
       * `_propertiesChanged` callback.
       *
       * @return {void}
       * @protected
       * @override
       */_invalidateProperties(){if(!this.__dataInvalid&&this.__dataReady){this.__dataInvalid=!0;microtask.run(()=>{if(this.__dataInvalid){this.__dataInvalid=!1;this._flushProperties()}})}}/**
       * Call to enable property accessor processing. Before this method is
       * called accessor values will be set but side effects are
       * queued. When called, any pending side effects occur immediately.
       * For elements, generally `connectedCallback` is a normal spot to do so.
       * It is safe to call this method multiple times as it only turns on
       * property accessors once.
       *
       * @return {void}
       * @protected
       * @override
       */_enableProperties(){if(!this.__dataEnabled){this.__dataEnabled=!0;if(this.__dataInstanceProps){this._initializeInstanceProperties(this.__dataInstanceProps);this.__dataInstanceProps=null}this.ready()}}/**
       * Calls the `_propertiesChanged` callback with the current set of
       * pending changes (and old values recorded when pending changes were
       * set), and resets the pending set of changes. Generally, this method
       * should not be called in user code.
       *
       * @return {void}
       * @protected
       * @override
       */_flushProperties(){this.__dataCounter++;const props=this.__data,changedProps=this.__dataPending,old=this.__dataOld;if(this._shouldPropertiesChange(props,changedProps,old)){this.__dataPending=null;this.__dataOld=null;this._propertiesChanged(props,changedProps,old)}this.__dataCounter--}/**
       * Called in `_flushProperties` to determine if `_propertiesChanged`
       * should be called. The default implementation returns true if
       * properties are pending. Override to customize when
       * `_propertiesChanged` is called.
       * @param {!Object} currentProps Bag of all current accessor values
       * @param {?Object} changedProps Bag of properties changed since the last
       *   call to `_propertiesChanged`
       * @param {?Object} oldProps Bag of previous values for each property
       *   in `changedProps`
       * @return {boolean} true if changedProps is truthy
       * @override
       */_shouldPropertiesChange(currentProps,changedProps,oldProps){// eslint-disable-line no-unused-vars
return!!changedProps}/**
       * Callback called when any properties with accessors created via
       * `_createPropertyAccessor` have been set.
       *
       * @param {!Object} currentProps Bag of all current accessor values
       * @param {?Object} changedProps Bag of properties changed since the last
       *   call to `_propertiesChanged`
       * @param {?Object} oldProps Bag of previous values for each property
       *   in `changedProps`
       * @return {void}
       * @protected
       * @override
       */_propertiesChanged(currentProps,changedProps,oldProps){}// eslint-disable-line no-unused-vars
/**
     * Method called to determine whether a property value should be
     * considered as a change and cause the `_propertiesChanged` callback
     * to be enqueued.
     *
     * The default implementation returns `true` if a strict equality
     * check fails. The method always returns false for `NaN`.
     *
     * Override this method to e.g. provide stricter checking for
     * Objects/Arrays when using immutable patterns.
     *
     * @param {string} property Property name
     * @param {*} value New property value
     * @param {*} old Previous property value
     * @return {boolean} Whether the property should be considered a change
     *   and enqueue a `_proeprtiesChanged` callback
     * @protected
     * @override
     */_shouldPropertyChange(property,value,old){return(// Strict equality check
old!==value&&(// This ensures (old==NaN, value==NaN) always returns false
old===old||value===value))}/**
       * Implements native Custom Elements `attributeChangedCallback` to
       * set an attribute value to a property via `_attributeToProperty`.
       *
       * @param {string} name Name of attribute that changed
       * @param {?string} old Old attribute value
       * @param {?string} value New attribute value
       * @param {?string} namespace Attribute namespace.
       * @return {void}
       * @suppress {missingProperties} Super may or may not implement the callback
       * @override
       */attributeChangedCallback(name,old,value,namespace){if(old!==value){this._attributeToProperty(name,value)}if(super.attributeChangedCallback){super.attributeChangedCallback(name,old,value,namespace)}}/**
       * Deserializes an attribute to its associated property.
       *
       * This method calls the `_deserializeValue` method to convert the string to
       * a typed value.
       *
       * @param {string} attribute Name of attribute to deserialize.
       * @param {?string} value of the attribute.
       * @param {*=} type type to deserialize to, defaults to the value
       * returned from `typeForProperty`
       * @return {void}
       * @override
       */_attributeToProperty(attribute,value,type){if(!this.__serializing){const map=this.__dataAttributes,property=map&&map[attribute]||attribute;this[property]=this._deserializeValue(value,type||this.constructor.typeForProperty(property))}}/**
       * Serializes a property to its associated attribute.
       *
       * @suppress {invalidCasts} Closure can't figure out `this` is an element.
       *
       * @param {string} property Property name to reflect.
       * @param {string=} attribute Attribute name to reflect to.
       * @param {*=} value Property value to refect.
       * @return {void}
       * @override
       */_propertyToAttribute(property,attribute,value){this.__serializing=!0;value=3>arguments.length?this[property]:value;this._valueToNodeAttribute(/** @type {!HTMLElement} */this,value,attribute||this.constructor.attributeNameForProperty(property));this.__serializing=!1}/**
       * Sets a typed value to an HTML attribute on a node.
       *
       * This method calls the `_serializeValue` method to convert the typed
       * value to a string.  If the `_serializeValue` method returns `undefined`,
       * the attribute will be removed (this is the default for boolean
       * type `false`).
       *
       * @param {Element} node Element to set attribute to.
       * @param {*} value Value to serialize.
       * @param {string} attribute Attribute name to serialize to.
       * @return {void}
       * @override
       */_valueToNodeAttribute(node,value,attribute){const str=this._serializeValue(value);if("class"===attribute||"name"===attribute||"slot"===attribute){node=/** @type {?Element} */wrap(node)}if(str===void 0){node.removeAttribute(attribute)}else{node.setAttribute(attribute,str)}}/**
       * Converts a typed JavaScript value to a string.
       *
       * This method is called when setting JS property values to
       * HTML attributes.  Users may override this method to provide
       * serialization for custom types.
       *
       * @param {*} value Property value to serialize.
       * @return {string | undefined} String serialized from the provided
       * property  value.
       * @override
       */_serializeValue(value){switch(typeof value){case"boolean":return value?"":void 0;default:return null!=value?value.toString():void 0;}}/**
       * Converts a string to a typed JavaScript value.
       *
       * This method is called when reading HTML attribute values to
       * JS properties.  Users may override this method to provide
       * deserialization for custom `type`s. Types for `Boolean`, `String`,
       * and `Number` convert attributes to the expected types.
       *
       * @param {?string} value Value to deserialize.
       * @param {*=} type Type to deserialize the string to.
       * @return {*} Typed value deserialized from the provided string.
       * @override
       */_deserializeValue(value,type){switch(type){case Boolean:return null!==value;case Number:return+value;default:return value;}}}return PropertiesChanged});/**
                              * Element class mixin that provides basic meta-programming for creating one
                              * or more property accessors (getter/setter pair) that enqueue an async
                              * (batched) `_propertiesChanged` callback.
                              *
                              * For basic usage of this mixin, call `MyClass.createProperties(props)`
                              * once at class definition time to create property accessors for properties
                              * named in props, implement `_propertiesChanged` to react as desired to
                              * property changes, and implement `static get observedAttributes()` and
                              * include lowercase versions of any property names that should be set from
                              * attributes. Last, call `this._enableProperties()` in the element's
                              * `connectedCallback` to enable the accessors.
                              *
                              * @mixinFunction
                              * @polymer
                              * @summary Element class mixin for reacting to property changes from
                              *   generated property accessors.
                              * @template T
                              * @param {function(new:T)} superClass Class to apply mixin to.
                              * @return {function(new:T)} superClass with mixin applied.
                              */_exports.PropertiesChanged=PropertiesChanged;var propertiesChanged={PropertiesChanged:PropertiesChanged};// that won't have their values "saved" by `saveAccessorValue`, since
// reading from an HTMLElement accessor from the context of a prototype throws
_exports.$propertiesChanged=propertiesChanged;const nativeProperties={};let proto=HTMLElement.prototype;while(proto){let props=Object.getOwnPropertyNames(proto);for(let i=0;i<props.length;i++){nativeProperties[props[i]]=!0}proto=Object.getPrototypeOf(proto)}/**
   * Used to save the value of a property that will be overridden with
   * an accessor. If the `model` is a prototype, the values will be saved
   * in `__dataProto`, and it's up to the user (or downstream mixin) to
   * decide how/when to set these values back into the accessors.
   * If `model` is already an instance (it has a `__data` property), then
   * the value will be set as a pending property, meaning the user should
   * call `_invalidateProperties` or `_flushProperties` to take effect
   *
   * @param {Object} model Prototype or instance
   * @param {string} property Name of property
   * @return {void}
   * @private
   */function saveAccessorValue(model,property){// Don't read/store value for any native properties since they could throw
if(!nativeProperties[property]){let value=model[property];if(value!==void 0){if(model.__data){// Adding accessor to instance; update the property
// It is the user's responsibility to call _flushProperties
model._setPendingProperty(property,value)}else{// Adding accessor to proto; save proto's value for instance-time use
if(!model.__dataProto){model.__dataProto={}}else if(!model.hasOwnProperty(JSCompiler_renameProperty("__dataProto",model))){model.__dataProto=Object.create(model.__dataProto)}model.__dataProto[property]=value}}}}/**
   * Element class mixin that provides basic meta-programming for creating one
   * or more property accessors (getter/setter pair) that enqueue an async
   * (batched) `_propertiesChanged` callback.
   *
   * For basic usage of this mixin:
   *
   * -   Declare attributes to observe via the standard `static get
   *     observedAttributes()`. Use `dash-case` attribute names to represent
   *     `camelCase` property names.
   * -   Implement the `_propertiesChanged` callback on the class.
   * -   Call `MyClass.createPropertiesForAttributes()` **once** on the class to
   *     generate property accessors for each observed attribute. This must be
   *     called before the first instance is created, for example, by calling it
   *     before calling `customElements.define`. It can also be called lazily from
   *     the element's `constructor`, as long as it's guarded so that the call is
   *     only made once, when the first instance is created.
   * -   Call `this._enableProperties()` in the element's `connectedCallback` to
   *     enable the accessors.
   *
   * Any `observedAttributes` will automatically be
   * deserialized via `attributeChangedCallback` and set to the associated
   * property using `dash-case`-to-`camelCase` convention.
   *
   * @mixinFunction
   * @polymer
   * @appliesMixin PropertiesChanged
   * @summary Element class mixin for reacting to property changes from
   *   generated property accessors.
   * @template T
   * @param {function(new:T)} superClass Class to apply mixin to.
   * @return {function(new:T)} superClass with mixin applied.
   */const PropertyAccessors=dedupingMixin(superClass=>{/**
   * @constructor
   * @implements {Polymer_PropertiesChanged}
   * @unrestricted
   * @private
   */const base=PropertiesChanged(superClass);/**
                                                  * @polymer
                                                  * @mixinClass
                                                  * @implements {Polymer_PropertyAccessors}
                                                  * @extends {base}
                                                  * @unrestricted
                                                  */class PropertyAccessors extends base{/**
     * Generates property accessors for all attributes in the standard
     * static `observedAttributes` array.
     *
     * Attribute names are mapped to property names using the `dash-case` to
     * `camelCase` convention
     *
     * @return {void}
     * @nocollapse
     */static createPropertiesForAttributes(){let a$=/** @type {?} */this.observedAttributes;for(let i=0;i<a$.length;i++){this.prototype._createPropertyAccessor(dashToCamelCase(a$[i]))}}/**
       * Returns an attribute name that corresponds to the given property.
       * By default, converts camel to dash case, e.g. `fooBar` to `foo-bar`.
       * @param {string} property Property to convert
       * @return {string} Attribute name corresponding to the given property.
       *
       * @protected
       * @nocollapse
       */static attributeNameForProperty(property){return camelToDashCase(property)}/**
       * Overrides PropertiesChanged implementation to initialize values for
       * accessors created for values that already existed on the element
       * prototype.
       *
       * @return {void}
       * @protected
       * @override
       */_initializeProperties(){if(this.__dataProto){this._initializeProtoProperties(this.__dataProto);this.__dataProto=null}super._initializeProperties()}/**
       * Called at instance time with bag of properties that were overwritten
       * by accessors on the prototype when accessors were created.
       *
       * The default implementation sets these properties back into the
       * setter at instance time.  This method is provided as an override
       * point for customizing or providing more efficient initialization.
       *
       * @param {Object} props Bag of property values that were overwritten
       *   when creating property accessors.
       * @return {void}
       * @protected
       * @override
       */_initializeProtoProperties(props){for(let p in props){this._setProperty(p,props[p])}}/**
       * Ensures the element has the given attribute. If it does not,
       * assigns the given value to the attribute.
       *
       * @suppress {invalidCasts} Closure can't figure out `this` is infact an
       *     element
       *
       * @param {string} attribute Name of attribute to ensure is set.
       * @param {string} value of the attribute.
       * @return {void}
       * @override
       */_ensureAttribute(attribute,value){const el=/** @type {!HTMLElement} */this;if(!el.hasAttribute(attribute)){this._valueToNodeAttribute(el,value,attribute)}}/**
       * Overrides PropertiesChanged implemention to serialize objects as JSON.
       *
       * @param {*} value Property value to serialize.
       * @return {string | undefined} String serialized from the provided property
       *     value.
       * @override
       */_serializeValue(value){/* eslint-disable no-fallthrough */switch(typeof value){case"object":if(value instanceof Date){return value.toString()}else if(value){try{return JSON.stringify(value)}catch(x){return""}}default:return super._serializeValue(value);}}/**
       * Converts a string to a typed JavaScript value.
       *
       * This method is called by Polymer when reading HTML attribute values to
       * JS properties.  Users may override this method on Polymer element
       * prototypes to provide deserialization for custom `type`s.  Note,
       * the `type` argument is the value of the `type` field provided in the
       * `properties` configuration object for a given property, and is
       * by convention the constructor for the type to deserialize.
       *
       *
       * @param {?string} value Attribute value to deserialize.
       * @param {*=} type Type to deserialize the string to.
       * @return {*} Typed value deserialized from the provided string.
       * @override
       */_deserializeValue(value,type){/**
       * @type {*}
       */let outValue;switch(type){case Object:try{outValue=JSON.parse(/** @type {string} */value)}catch(x){// allow non-JSON literals like Strings and Numbers
outValue=value}break;case Array:try{outValue=JSON.parse(/** @type {string} */value)}catch(x){outValue=null;console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${value}`)}break;case Date:outValue=isNaN(value)?value+"":+value;outValue=new Date(outValue);break;default:outValue=super._deserializeValue(value,type);break;}return outValue}/* eslint-enable no-fallthrough */ /**
                                          * Overrides PropertiesChanged implementation to save existing prototype
                                          * property value so that it can be reset.
                                          * @param {string} property Name of the property
                                          * @param {boolean=} readOnly When true, no setter is created
                                          *
                                          * When calling on a prototype, any overwritten values are saved in
                                          * `__dataProto`, and it is up to the subclasser to decide how/when
                                          * to set those properties back into the accessor.  When calling on an
                                          * instance, the overwritten value is set via `_setPendingProperty`,
                                          * and the user should call `_invalidateProperties` or `_flushProperties`
                                          * for the values to take effect.
                                          * @protected
                                          * @return {void}
                                          * @override
                                          */_definePropertyAccessor(property,readOnly){saveAccessorValue(this,property);super._definePropertyAccessor(property,readOnly)}/**
       * Returns true if this library created an accessor for the given property.
       *
       * @param {string} property Property name
       * @return {boolean} True if an accessor was created
       * @override
       */_hasAccessor(property){return this.__dataHasAccessor&&this.__dataHasAccessor[property]}/**
       * Returns true if the specified property has a pending change.
       *
       * @param {string} prop Property name
       * @return {boolean} True if property has a pending change
       * @protected
       * @override
       */_isPropertyPending(prop){return!!(this.__dataPending&&prop in this.__dataPending)}}return PropertyAccessors});_exports.PropertyAccessors=PropertyAccessors;var propertyAccessors={PropertyAccessors:PropertyAccessors};// This is a clear layering violation and gives favored-nation status to
// dom-if and dom-repeat templates.  This is a conceit we're choosing to keep
// a.) to ease 1.x backwards-compatibility due to loss of `is`, and
// b.) to maintain if/repeat capability in parser-constrained elements
//     (e.g. table, select) in lieu of native CE type extensions without
//     massive new invention in this space (e.g. directive system)
_exports.$propertyAccessors=propertyAccessors;const templateExtensions={"dom-if":!0,"dom-repeat":!0};let placeholderBugDetect=!1,placeholderBug=!1;function hasPlaceholderBug(){if(!placeholderBugDetect){placeholderBugDetect=!0;const t=document.createElement("textarea");t.placeholder="a";placeholderBug=t.placeholder===t.textContent}return placeholderBug}/**
   * Some browsers have a bug with textarea, where placeholder text is copied as
   * a textnode child of the textarea.
   *
   * If the placeholder is a binding, this can break template stamping in two
   * ways.
   *
   * One issue is that when the `placeholder` attribute is removed when the
   * binding is processed, the textnode child of the textarea is deleted, and the
   * template info tries to bind into that node.
   *
   * With `legacyOptimizations` in use, when the template is stamped and the
   * `textarea.textContent` binding is processed, no corresponding node is found
   * because it was removed during parsing. An exception is generated when this
   * binding is updated.
   *
   * With `legacyOptimizations` not in use, the template is cloned before
   * processing and this changes the above behavior. The cloned template also has
   * a value property set to the placeholder and textContent. This prevents the
   * removal of the textContent when the placeholder attribute is removed.
   * Therefore the exception does not occur. However, there is an extra
   * unnecessary binding.
   *
   * @param {!Node} node Check node for placeholder bug
   * @return {void}
   */function fixPlaceholder(node){if(hasPlaceholderBug()&&"textarea"===node.localName&&node.placeholder&&node.placeholder===node.textContent){node.textContent=null}}function wrapTemplateExtension(node){let is=node.getAttribute("is");if(is&&templateExtensions[is]){let t=node;t.removeAttribute("is");node=t.ownerDocument.createElement(is);t.parentNode.replaceChild(node,t);node.appendChild(t);while(t.attributes.length){node.setAttribute(t.attributes[0].name,t.attributes[0].value);t.removeAttribute(t.attributes[0].name)}}return node}function findTemplateNode(root,nodeInfo){// recursively ascend tree until we hit root
let parent=nodeInfo.parentInfo&&findTemplateNode(root,nodeInfo.parentInfo);// unwind the stack, returning the indexed node at each level
if(parent){// note: marginally faster than indexing via childNodes
// (http://jsperf.com/childnodes-lookup)
for(let n=parent.firstChild,i=0;n;n=n.nextSibling){if(nodeInfo.parentIndex===i++){return n}}}else{return root}}// construct `$` map (from id annotations)
function applyIdToMap(inst,map,node,nodeInfo){if(nodeInfo.id){map[nodeInfo.id]=node}}// install event listeners (from event annotations)
function applyEventListener(inst,node,nodeInfo){if(nodeInfo.events&&nodeInfo.events.length){for(let j=0,e$=nodeInfo.events,e;j<e$.length&&(e=e$[j]);j++){inst._addMethodEventListenerToNode(node,e.name,e.value,inst)}}}// push configuration references at configure time
function applyTemplateInfo(inst,node,nodeInfo,parentTemplateInfo){if(nodeInfo.templateInfo){// Give the node an instance of this templateInfo and set its parent
node._templateInfo=nodeInfo.templateInfo;node._parentTemplateInfo=parentTemplateInfo}}function createNodeEventHandler(context,eventName,methodName){// Instances can optionally have a _methodHost which allows redirecting where
// to find methods. Currently used by `templatize`.
context=context._methodHost||context;let handler=function(e){if(context[methodName]){context[methodName](e,e.detail)}else{console.warn("listener method `"+methodName+"` not defined")}};return handler}/**
   * Element mixin that provides basic template parsing and stamping, including
   * the following template-related features for stamped templates:
   *
   * - Declarative event listeners (`on-eventname="listener"`)
   * - Map of node id's to stamped node instances (`this.$.id`)
   * - Nested template content caching/removal and re-installation (performance
   *   optimization)
   *
   * @mixinFunction
   * @polymer
   * @summary Element class mixin that provides basic template parsing and stamping
   */const TemplateStamp=dedupingMixin(/**
                                             * @template T
                                             * @param {function(new:T)} superClass Class to apply mixin to.
                                             * @return {function(new:T)} superClass with mixin applied.
                                             */superClass=>{/**
   * @polymer
   * @mixinClass
   * @implements {Polymer_TemplateStamp}
   */class TemplateStamp extends superClass{/**
     * Scans a template to produce template metadata.
     *
     * Template-specific metadata are stored in the object returned, and node-
     * specific metadata are stored in objects in its flattened `nodeInfoList`
     * array.  Only nodes in the template that were parsed as nodes of
     * interest contain an object in `nodeInfoList`.  Each `nodeInfo` object
     * contains an `index` (`childNodes` index in parent) and optionally
     * `parent`, which points to node info of its parent (including its index).
     *
     * The template metadata object returned from this method has the following
     * structure (many fields optional):
     *
     * ```js
     *   {
     *     // Flattened list of node metadata (for nodes that generated metadata)
     *     nodeInfoList: [
     *       {
     *         // `id` attribute for any nodes with id's for generating `$` map
     *         id: {string},
     *         // `on-event="handler"` metadata
     *         events: [
     *           {
     *             name: {string},   // event name
     *             value: {string},  // handler method name
     *           }, ...
     *         ],
     *         // Notes when the template contained a `<slot>` for shady DOM
     *         // optimization purposes
     *         hasInsertionPoint: {boolean},
     *         // For nested `<template>`` nodes, nested template metadata
     *         templateInfo: {object}, // nested template metadata
     *         // Metadata to allow efficient retrieval of instanced node
     *         // corresponding to this metadata
     *         parentInfo: {number},   // reference to parent nodeInfo>
     *         parentIndex: {number},  // index in parent's `childNodes` collection
     *         infoIndex: {number},    // index of this `nodeInfo` in `templateInfo.nodeInfoList`
     *       },
     *       ...
     *     ],
     *     // When true, the template had the `strip-whitespace` attribute
     *     // or was nested in a template with that setting
     *     stripWhitespace: {boolean},
     *     // For nested templates, nested template content is moved into
     *     // a document fragment stored here; this is an optimization to
     *     // avoid the cost of nested template cloning
     *     content: {DocumentFragment}
     *   }
     * ```
     *
     * This method kicks off a recursive treewalk as follows:
     *
     * ```
     *    _parseTemplate <---------------------+
     *      _parseTemplateContent              |
     *        _parseTemplateNode  <------------|--+
     *          _parseTemplateNestedTemplate --+  |
     *          _parseTemplateChildNodes ---------+
     *          _parseTemplateNodeAttributes
     *            _parseTemplateNodeAttribute
     *
     * ```
     *
     * These methods may be overridden to add custom metadata about templates
     * to either `templateInfo` or `nodeInfo`.
     *
     * Note that this method may be destructive to the template, in that
     * e.g. event annotations may be removed after being noted in the
     * template metadata.
     *
     * @param {!HTMLTemplateElement} template Template to parse
     * @param {TemplateInfo=} outerTemplateInfo Template metadata from the outer
     *   template, for parsing nested templates
     * @return {!TemplateInfo} Parsed template metadata
     * @nocollapse
     */static _parseTemplate(template,outerTemplateInfo){// since a template may be re-used, memo-ize metadata
if(!template._templateInfo){// TODO(rictic): fix typing
let/** ? */templateInfo=template._templateInfo={};templateInfo.nodeInfoList=[];templateInfo.nestedTemplate=!!outerTemplateInfo;templateInfo.stripWhiteSpace=outerTemplateInfo&&outerTemplateInfo.stripWhiteSpace||template.hasAttribute("strip-whitespace");// TODO(rictic): fix typing
this._parseTemplateContent(template,templateInfo,/** @type {?} */{parent:null})}return template._templateInfo}/**
       * See docs for _parseTemplateNode.
       *
       * @param {!HTMLTemplateElement} template .
       * @param {!TemplateInfo} templateInfo .
       * @param {!NodeInfo} nodeInfo .
       * @return {boolean} .
       * @nocollapse
       */static _parseTemplateContent(template,templateInfo,nodeInfo){return this._parseTemplateNode(template.content,templateInfo,nodeInfo)}/**
       * Parses template node and adds template and node metadata based on
       * the current node, and its `childNodes` and `attributes`.
       *
       * This method may be overridden to add custom node or template specific
       * metadata based on this node.
       *
       * @param {Node} node Node to parse
       * @param {!TemplateInfo} templateInfo Template metadata for current template
       * @param {!NodeInfo} nodeInfo Node metadata for current template.
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       * @nocollapse
       */static _parseTemplateNode(node,templateInfo,nodeInfo){let noted=!1,element=/** @type {!HTMLTemplateElement} */node;if("template"==element.localName&&!element.hasAttribute("preserve-content")){noted=this._parseTemplateNestedTemplate(element,templateInfo,nodeInfo)||noted}else if("slot"===element.localName){// For ShadyDom optimization, indicating there is an insertion point
templateInfo.hasInsertionPoint=!0}fixPlaceholder(element);if(element.firstChild){this._parseTemplateChildNodes(element,templateInfo,nodeInfo)}if(element.hasAttributes&&element.hasAttributes()){noted=this._parseTemplateNodeAttributes(element,templateInfo,nodeInfo)||noted}// Checking `nodeInfo.noted` allows a child node of this node (who gets
// access to `parentInfo`) to cause the parent to be noted, which
// otherwise has no return path via `_parseTemplateChildNodes` (used by
// some optimizations)
return noted||nodeInfo.noted}/**
       * Parses template child nodes for the given root node.
       *
       * This method also wraps whitelisted legacy template extensions
       * (`is="dom-if"` and `is="dom-repeat"`) with their equivalent element
       * wrappers, collapses text nodes, and strips whitespace from the template
       * if the `templateInfo.stripWhitespace` setting was provided.
       *
       * @param {Node} root Root node whose `childNodes` will be parsed
       * @param {!TemplateInfo} templateInfo Template metadata for current template
       * @param {!NodeInfo} nodeInfo Node metadata for current template.
       * @return {void}
       */static _parseTemplateChildNodes(root,templateInfo,nodeInfo){if("script"===root.localName||"style"===root.localName){return}for(let node=root.firstChild,parentIndex=0,next;node;node=next){// Wrap templates
if("template"==node.localName){node=wrapTemplateExtension(node)}// collapse adjacent textNodes: fixes an IE issue that can cause
// text nodes to be inexplicably split =(
// note that root.normalize() should work but does not so we do this
// manually.
next=node.nextSibling;if(node.nodeType===Node.TEXT_NODE){let/** Node */n=next;while(n&&n.nodeType===Node.TEXT_NODE){node.textContent+=n.textContent;next=n.nextSibling;root.removeChild(n);n=next}// optionally strip whitespace
if(templateInfo.stripWhiteSpace&&!node.textContent.trim()){root.removeChild(node);continue}}let childInfo=/** @type {!NodeInfo} */{parentIndex,parentInfo:nodeInfo};if(this._parseTemplateNode(node,templateInfo,childInfo)){childInfo.infoIndex=templateInfo.nodeInfoList.push(childInfo)-1}// Increment if not removed
if(node.parentNode){parentIndex++}}}/**
       * Parses template content for the given nested `<template>`.
       *
       * Nested template info is stored as `templateInfo` in the current node's
       * `nodeInfo`. `template.content` is removed and stored in `templateInfo`.
       * It will then be the responsibility of the host to set it back to the
       * template and for users stamping nested templates to use the
       * `_contentForTemplate` method to retrieve the content for this template
       * (an optimization to avoid the cost of cloning nested template content).
       *
       * @param {HTMLTemplateElement} node Node to parse (a <template>)
       * @param {TemplateInfo} outerTemplateInfo Template metadata for current template
       *   that includes the template `node`
       * @param {!NodeInfo} nodeInfo Node metadata for current template.
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       * @nocollapse
       */static _parseTemplateNestedTemplate(node,outerTemplateInfo,nodeInfo){// TODO(rictic): the type of node should be non-null
let element=/** @type {!HTMLTemplateElement} */node,templateInfo=this._parseTemplate(element,outerTemplateInfo),content=templateInfo.content=element.content.ownerDocument.createDocumentFragment();content.appendChild(element.content);nodeInfo.templateInfo=templateInfo;return!0}/**
       * Parses template node attributes and adds node metadata to `nodeInfo`
       * for nodes of interest.
       *
       * @param {Element} node Node to parse
       * @param {!TemplateInfo} templateInfo Template metadata for current
       *     template
       * @param {!NodeInfo} nodeInfo Node metadata for current template.
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       * @nocollapse
       */static _parseTemplateNodeAttributes(node,templateInfo,nodeInfo){// Make copy of original attribute list, since the order may change
// as attributes are added and removed
let noted=!1,attrs=Array.from(node.attributes);for(let i=attrs.length-1,a;a=attrs[i];i--){noted=this._parseTemplateNodeAttribute(node,templateInfo,nodeInfo,a.name,a.value)||noted}return noted}/**
       * Parses a single template node attribute and adds node metadata to
       * `nodeInfo` for attributes of interest.
       *
       * This implementation adds metadata for `on-event="handler"` attributes
       * and `id` attributes.
       *
       * @param {Element} node Node to parse
       * @param {!TemplateInfo} templateInfo Template metadata for current template
       * @param {!NodeInfo} nodeInfo Node metadata for current template.
       * @param {string} name Attribute name
       * @param {string} value Attribute value
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       * @nocollapse
       */static _parseTemplateNodeAttribute(node,templateInfo,nodeInfo,name,value){// events (on-*)
if("on-"===name.slice(0,3)){node.removeAttribute(name);nodeInfo.events=nodeInfo.events||[];nodeInfo.events.push({name:name.slice(3),value});return!0}// static id
else if("id"===name){nodeInfo.id=value;return!0}return!1}/**
       * Returns the `content` document fragment for a given template.
       *
       * For nested templates, Polymer performs an optimization to cache nested
       * template content to avoid the cost of cloning deeply nested templates.
       * This method retrieves the cached content for a given template.
       *
       * @param {HTMLTemplateElement} template Template to retrieve `content` for
       * @return {DocumentFragment} Content fragment
       * @nocollapse
       */static _contentForTemplate(template){let templateInfo=/** @type {HTMLTemplateElementWithInfo} */template._templateInfo;return templateInfo&&templateInfo.content||template.content}/**
       * Clones the provided template content and returns a document fragment
       * containing the cloned dom.
       *
       * The template is parsed (once and memoized) using this library's
       * template parsing features, and provides the following value-added
       * features:
       * * Adds declarative event listeners for `on-event="handler"` attributes
       * * Generates an "id map" for all nodes with id's under `$` on returned
       *   document fragment
       * * Passes template info including `content` back to templates as
       *   `_templateInfo` (a performance optimization to avoid deep template
       *   cloning)
       *
       * Note that the memoized template parsing process is destructive to the
       * template: attributes for bindings and declarative event listeners are
       * removed after being noted in notes, and any nested `<template>.content`
       * is removed and stored in notes as well.
       *
       * @param {!HTMLTemplateElement} template Template to stamp
       * @param {TemplateInfo=} templateInfo Optional template info associated
       *   with the template to be stamped; if omitted the template will be
       *   automatically parsed.
       * @return {!StampedTemplate} Cloned template content
       * @override
       */_stampTemplate(template,templateInfo){// Polyfill support: bootstrap the template if it has not already been
if(template&&!template.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate){HTMLTemplateElement.decorate(template)}// Accepting the `templateInfo` via an argument allows for creating
// instances of the `templateInfo` by the caller, useful for adding
// instance-time information to the prototypical data
templateInfo=templateInfo||this.constructor._parseTemplate(template);let nodeInfo=templateInfo.nodeInfoList,content=templateInfo.content||template.content,dom=/** @type {DocumentFragment} */document.importNode(content,!0);// NOTE: ShadyDom optimization indicating there is an insertion point
dom.__noInsertionPoint=!templateInfo.hasInsertionPoint;let nodes=dom.nodeList=Array(nodeInfo.length);dom.$={};for(let i=0,l=nodeInfo.length,info,node;i<l&&(info=nodeInfo[i]);i++){node=nodes[i]=findTemplateNode(dom,info);applyIdToMap(this,dom.$,node,info);applyTemplateInfo(this,node,info,templateInfo);applyEventListener(this,node,info)}dom=/** @type {!StampedTemplate} */dom;// eslint-disable-line no-self-assign
return dom}/**
       * Adds an event listener by method name for the event provided.
       *
       * This method generates a handler function that looks up the method
       * name at handling time.
       *
       * @param {!EventTarget} node Node to add listener on
       * @param {string} eventName Name of event
       * @param {string} methodName Name of method
       * @param {*=} context Context the method will be called on (defaults
       *   to `node`)
       * @return {Function} Generated handler function
       * @override
       */_addMethodEventListenerToNode(node,eventName,methodName,context){context=context||node;let handler=createNodeEventHandler(context,eventName,methodName);this._addEventListenerToNode(node,eventName,handler);return handler}/**
       * Override point for adding custom or simulated event handling.
       *
       * @param {!EventTarget} node Node to add event listener to
       * @param {string} eventName Name of event
       * @param {function(!Event):void} handler Listener function to add
       * @return {void}
       * @override
       */_addEventListenerToNode(node,eventName,handler){node.addEventListener(eventName,handler)}/**
       * Override point for adding custom or simulated event handling.
       *
       * @param {!EventTarget} node Node to remove event listener from
       * @param {string} eventName Name of event
       * @param {function(!Event):void} handler Listener function to remove
       * @return {void}
       * @override
       */_removeEventListenerFromNode(node,eventName,handler){node.removeEventListener(eventName,handler)}}return TemplateStamp});_exports.TemplateStamp=TemplateStamp;var templateStamp={TemplateStamp:TemplateStamp};// from multiple properties in the same turn
_exports.$templateStamp=templateStamp;let dedupeId$1=0;const NOOP=[],TYPES={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},COMPUTE_INFO="__computeInfo",capitalAttributeRegex=/[A-Z]/;/**
                  * Property effect types; effects are stored on the prototype using these keys
                  * @enum {string}
                  */ /**
                                        * @typedef {{
                                        * name: (string | undefined),
                                        * structured: (boolean | undefined),
                                        * wildcard: (boolean | undefined)
                                        * }}
                                        */let DataTrigger,DataEffect;//eslint-disable-line no-unused-vars
/**
 * @typedef {{
 * info: ?,
 * trigger: (!DataTrigger | undefined),
 * fn: (!Function | undefined)
 * }}
 */ //eslint-disable-line no-unused-vars
/**
 * Ensures that the model has an own-property map of effects for the given type.
 * The model may be a prototype or an instance.
 *
 * Property effects are stored as arrays of effects by property in a map,
 * by named type on the model. e.g.
 *
 *   __computeEffects: {
 *     foo: [ ... ],
 *     bar: [ ... ]
 *   }
 *
 * If the model does not yet have an effect map for the type, one is created
 * and returned.  If it does, but it is not an own property (i.e. the
 * prototype had effects), the the map is deeply cloned and the copy is
 * set on the model and returned, ready for new effects to be added.
 *
 * @param {Object} model Prototype or instance
 * @param {string} type Property effect type
 * @param {boolean=} cloneArrays Clone any arrays assigned to the map when
 *   extending a superclass map onto this subclass
 * @return {Object} The own-property map of effects for the given type
 * @private
 */function ensureOwnEffectMap(model,type,cloneArrays){let effects=model[type];if(!effects){effects=model[type]={}}else if(!model.hasOwnProperty(type)){effects=model[type]=Object.create(model[type]);if(cloneArrays){for(let p in effects){let protoFx=effects[p],instFx=effects[p]=Array(protoFx.length);// Perf optimization over Array.slice
for(let i=0;i<protoFx.length;i++){instFx[i]=protoFx[i]}}}}return effects}// -- effects ----------------------------------------------
/**
 * Runs all effects of a given type for the given set of property changes
 * on an instance.
 *
 * @param {!Polymer_PropertyEffects} inst The instance with effects to run
 * @param {?Object} effects Object map of property-to-Array of effects
 * @param {?Object} props Bag of current property changes
 * @param {?Object=} oldProps Bag of previous values for changed properties
 * @param {boolean=} hasPaths True with `props` contains one or more paths
 * @param {*=} extraArgs Additional metadata to pass to effect function
 * @return {boolean} True if an effect ran for this property
 * @private
 */function runEffects(inst,effects,props,oldProps,hasPaths,extraArgs){if(effects){let ran=!1;const id=dedupeId$1++;for(let prop in props){// Inline `runEffectsForProperty` for perf.
let rootProperty=hasPaths?root(prop):prop,fxs=effects[rootProperty];if(fxs){for(let i=0,l=fxs.length,fx;i<l&&(fx=fxs[i]);i++){if((!fx.info||fx.info.lastRun!==id)&&(!hasPaths||pathMatchesTrigger(prop,fx.trigger))){if(fx.info){fx.info.lastRun=id}fx.fn(inst,prop,props,oldProps,fx.info,hasPaths,extraArgs);ran=!0}}}}return ran}return!1}/**
   * Runs a list of effects for a given property.
   *
   * @param {!Polymer_PropertyEffects} inst The instance with effects to run
   * @param {!Object} effects Object map of property-to-Array of effects
   * @param {number} dedupeId Counter used for de-duping effects
   * @param {string} prop Name of changed property
   * @param {*} props Changed properties
   * @param {*} oldProps Old properties
   * @param {boolean=} hasPaths True with `props` contains one or more paths
   * @param {*=} extraArgs Additional metadata to pass to effect function
   * @return {boolean} True if an effect ran for this property
   * @private
   */function runEffectsForProperty(inst,effects,dedupeId,prop,props,oldProps,hasPaths,extraArgs){let ran=!1,rootProperty=hasPaths?root(prop):prop,fxs=effects[rootProperty];if(fxs){for(let i=0,l=fxs.length,fx;i<l&&(fx=fxs[i]);i++){if((!fx.info||fx.info.lastRun!==dedupeId)&&(!hasPaths||pathMatchesTrigger(prop,fx.trigger))){if(fx.info){fx.info.lastRun=dedupeId}fx.fn(inst,prop,props,oldProps,fx.info,hasPaths,extraArgs);ran=!0}}}return ran}/**
   * Determines whether a property/path that has changed matches the trigger
   * criteria for an effect.  A trigger is a descriptor with the following
   * structure, which matches the descriptors returned from `parseArg`.
   * e.g. for `foo.bar.*`:
   * ```
   * trigger: {
   *   name: 'a.b',
   *   structured: true,
   *   wildcard: true
   * }
   * ```
   * If no trigger is given, the path is deemed to match.
   *
   * @param {string} path Path or property that changed
   * @param {?DataTrigger} trigger Descriptor
   * @return {boolean} Whether the path matched the trigger
   */function pathMatchesTrigger(path,trigger){if(trigger){let triggerPath=/** @type {string} */trigger.name;return triggerPath==path||!!(trigger.structured&&isAncestor(triggerPath,path))||!!(trigger.wildcard&&isDescendant(triggerPath,path))}else{return!0}}/**
   * Implements the "observer" effect.
   *
   * Calls the method with `info.methodName` on the instance, passing the
   * new and old values.
   *
   * @param {!Polymer_PropertyEffects} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @return {void}
   * @private
   */function runObserverEffect(inst,property,props,oldProps,info){let fn="string"===typeof info.method?inst[info.method]:info.method,changedProp=info.property;if(fn){fn.call(inst,inst.__data[changedProp],oldProps[changedProp])}else if(!info.dynamicFn){console.warn("observer method `"+info.method+"` not defined")}}/**
   * Runs "notify" effects for a set of changed properties.
   *
   * This method differs from the generic `runEffects` method in that it
   * will dispatch path notification events in the case that the property
   * changed was a path and the root property for that path didn't have a
   * "notify" effect.  This is to maintain 1.0 behavior that did not require
   * `notify: true` to ensure object sub-property notifications were
   * sent.
   *
   * @param {!Polymer_PropertyEffects} inst The instance with effects to run
   * @param {Object} notifyProps Bag of properties to notify
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {boolean} hasPaths True with `props` contains one or more paths
   * @return {void}
   * @private
   */function runNotifyEffects(inst,notifyProps,props,oldProps,hasPaths){// Notify
let fxs=inst[TYPES.NOTIFY],notified,id=dedupeId$1++;// Try normal notify effects; if none, fall back to try path notification
for(let prop in notifyProps){if(notifyProps[prop]){if(fxs&&runEffectsForProperty(inst,fxs,id,prop,props,oldProps,hasPaths)){notified=!0}else if(hasPaths&&notifyPath(inst,prop,props)){notified=!0}}}// Flush host if we actually notified and host was batching
// And the host has already initialized clients; this prevents
// an issue with a host observing data changes before clients are ready.
let host;if(notified&&(host=inst.__dataHost)&&host._invalidateProperties){host._invalidateProperties()}}/**
   * Dispatches {property}-changed events with path information in the detail
   * object to indicate a sub-path of the property was changed.
   *
   * @param {!Polymer_PropertyEffects} inst The element from which to fire the
   *     event
   * @param {string} path The path that was changed
   * @param {Object} props Bag of current property changes
   * @return {boolean} Returns true if the path was notified
   * @private
   */function notifyPath(inst,path,props){let rootProperty=root(path);if(rootProperty!==path){let eventName=camelToDashCase(rootProperty)+"-changed";dispatchNotifyEvent(inst,eventName,props[path],path);return!0}return!1}/**
   * Dispatches {property}-changed events to indicate a property (or path)
   * changed.
   *
   * @param {!Polymer_PropertyEffects} inst The element from which to fire the
   *     event
   * @param {string} eventName The name of the event to send
   *     ('{property}-changed')
   * @param {*} value The value of the changed property
   * @param {string | null | undefined} path If a sub-path of this property
   *     changed, the path that changed (optional).
   * @return {void}
   * @private
   * @suppress {invalidCasts}
   */function dispatchNotifyEvent(inst,eventName,value,path){let detail={value:value,queueProperty:!0};if(path){detail.path=path}// As a performance optimization, we could elide the wrap here since notifying
// events are non-bubbling and shouldn't need retargeting. However, a very
// small number of internal tests failed in obscure ways, which may indicate
// user code relied on timing differences resulting from ShadyDOM flushing
// as a result of the wrapped `dispatchEvent`.
wrap(/** @type {!HTMLElement} */inst).dispatchEvent(new CustomEvent(eventName,{detail}))}/**
   * Implements the "notify" effect.
   *
   * Dispatches a non-bubbling event named `info.eventName` on the instance
   * with a detail object containing the new `value`.
   *
   * @param {!Polymer_PropertyEffects} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @param {boolean} hasPaths True with `props` contains one or more paths
   * @return {void}
   * @private
   */function runNotifyEffect(inst,property,props,oldProps,info,hasPaths){let rootProperty=hasPaths?root(property):property,path=rootProperty!=property?property:null,value=path?get(inst,path):inst.__data[property];if(path&&value===void 0){value=props[property];// specifically for .splices
}dispatchNotifyEvent(inst,info.eventName,value,path)}/**
   * Handler function for 2-way notification events. Receives context
   * information captured in the `addNotifyListener` closure from the
   * `__notifyListeners` metadata.
   *
   * Sets the value of the notified property to the host property or path.  If
   * the event contained path information, translate that path to the host
   * scope's name for that path first.
   *
   * @param {CustomEvent} event Notification event (e.g. '<property>-changed')
   * @param {!Polymer_PropertyEffects} inst Host element instance handling the
   *     notification event
   * @param {string} fromProp Child element property that was bound
   * @param {string} toPath Host property/path that was bound
   * @param {boolean} negate Whether the binding was negated
   * @return {void}
   * @private
   */function handleNotification(event,inst,fromProp,toPath,negate){let value,detail=/** @type {Object} */event.detail,fromPath=detail&&detail.path;if(fromPath){toPath=translate(fromProp,toPath,fromPath);value=detail&&detail.value}else{value=event.currentTarget[fromProp]}value=negate?!value:value;if(!inst[TYPES.READ_ONLY]||!inst[TYPES.READ_ONLY][toPath]){if(inst._setPendingPropertyOrPath(toPath,value,!0,!!fromPath)&&(!detail||!detail.queueProperty)){inst._invalidateProperties()}}}/**
   * Implements the "reflect" effect.
   *
   * Sets the attribute named `info.attrName` to the given property value.
   *
   * @param {!Polymer_PropertyEffects} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @return {void}
   * @private
   */function runReflectEffect(inst,property,props,oldProps,info){let value=inst.__data[property];if(sanitizeDOMValue){value=sanitizeDOMValue(value,info.attrName,"attribute",/** @type {Node} */inst)}inst._propertyToAttribute(property,info.attrName,value)}/**
   * Runs "computed" effects for a set of changed properties.
   *
   * This method differs from the generic `runEffects` method in that it
   * continues to run computed effects based on the output of each pass until
   * there are no more newly computed properties.  This ensures that all
   * properties that will be computed by the initial set of changes are
   * computed before other effects (binding propagation, observers, and notify)
   * run.
   *
   * @param {!Polymer_PropertyEffects} inst The instance the effect will be run on
   * @param {?Object} changedProps Bag of changed properties
   * @param {?Object} oldProps Bag of previous values for changed properties
   * @param {boolean} hasPaths True with `props` contains one or more paths
   * @return {void}
   * @private
   */function runComputedEffects(inst,changedProps,oldProps,hasPaths){let computeEffects=inst[TYPES.COMPUTE];if(computeEffects){if(orderedComputed){// Runs computed effects in efficient order by keeping a topologically-
// sorted queue of compute effects to run, and inserting subsequently
// invalidated effects as they are run
dedupeId$1++;const order=getComputedOrder(inst),queue=[];for(let p in changedProps){enqueueEffectsFor(p,computeEffects,queue,order,hasPaths)}let info;while(info=queue.shift()){if(runComputedEffect(inst,"",changedProps,oldProps,info)){enqueueEffectsFor(info.methodInfo,computeEffects,queue,order,hasPaths)}}Object.assign(/** @type {!Object} */oldProps,inst.__dataOld);Object.assign(/** @type {!Object} */changedProps,inst.__dataPending);inst.__dataPending=null}else{// Original Polymer 2.x computed effects order, which continues running
// effects until no further computed properties have been invalidated
let inputProps=changedProps;while(runEffects(inst,computeEffects,inputProps,oldProps,hasPaths)){Object.assign(/** @type {!Object} */oldProps,inst.__dataOld);Object.assign(/** @type {!Object} */changedProps,inst.__dataPending);inputProps=inst.__dataPending;inst.__dataPending=null}}}}/**
   * Inserts a computed effect into a queue, given the specified order. Performs
   * the insert using a binary search.
   *
   * Used by `orderedComputed: true` computed property algorithm.
   *
   * @param {Object} info Property effects metadata
   * @param {Array<Object>} queue Ordered queue of effects
   * @param {Map<string,number>} order Map of computed property name->topological
   *   sort order
   */const insertEffect=(info,queue,order)=>{let start=0,end=queue.length-1,idx=-1;while(start<=end){const mid=start+end>>1,cmp=order.get(queue[mid].methodInfo)-order.get(info.methodInfo);// Note `methodInfo` is where the computed property name is stored in
// the effect metadata
if(0>cmp){start=mid+1}else if(0<cmp){end=mid-1}else{idx=mid;break}}if(0>idx){idx=end+1}queue.splice(idx,0,info)},enqueueEffectsFor=(prop,computeEffects,queue,order,hasPaths)=>{const rootProperty=hasPaths?root(prop):prop,fxs=computeEffects[rootProperty];if(fxs){for(let i=0;i<fxs.length;i++){const fx=fxs[i];if(fx.info.lastRun!==dedupeId$1&&(!hasPaths||pathMatchesTrigger(prop,fx.trigger))){fx.info.lastRun=dedupeId$1;insertEffect(fx.info,queue,order)}}}};/**
    * Inserts all downstream computed effects invalidated by the specified property
    * into the topologically-sorted queue of effects to be run.
    *
    * Used by `orderedComputed: true` computed property algorithm.
    *
    * @param {string} prop Property name
    * @param {Object} computeEffects Computed effects for this element
    * @param {Array<Object>} queue Topologically-sorted queue of computed effects
    *   to be run
    * @param {Map<string,number>} order Map of computed property name->topological
    *   sort order
    * @param {boolean} hasPaths True with `changedProps` contains one or more paths
    */ /**
    * Generates and retrieves a memoized map of computed property name to its
    * topologically-sorted order.
    *
    * The map is generated by first assigning a "dependency count" to each property
    * (defined as number properties it depends on, including its method for
    * "dynamic functions"). Any properties that have no dependencies are added to
    * the `ready` queue, which are properties whose order can be added to the final
    * order map. Properties are popped off the `ready` queue one by one and a.) added as
    * the next property in the order map, and b.) each property that it is a
    * dependency for has its dep count decremented (and if that property's dep
    * count goes to zero, it is added to the `ready` queue), until all properties
    * have been visited and ordered.
    *
    * Used by `orderedComputed: true` computed property algorithm.
    *
    * @param {!Polymer_PropertyEffects} inst The instance to retrieve the computed
    *   effect order for.
    * @return {Map<string,number>} Map of computed property name->topological sort
    *   order
    */function getComputedOrder(inst){let ordered=inst.constructor.__orderedComputedDeps;if(!ordered){ordered=new Map;const effects=inst[TYPES.COMPUTE];let{counts,ready,total}=dependencyCounts(inst),curr;while(curr=ready.shift()){ordered.set(curr,ordered.size);const computedByCurr=effects[curr];if(computedByCurr){computedByCurr.forEach(fx=>{// Note `methodInfo` is where the computed property name is stored
const computedProp=fx.info.methodInfo;--total;if(0===--counts[computedProp]){ready.push(computedProp)}})}}if(0!==total){const el=/** @type {HTMLElement} */inst;console.warn(`Computed graph for ${el.localName} incomplete; circular?`)}inst.constructor.__orderedComputedDeps=ordered}return ordered}/**
   * Generates a map of property-to-dependency count (`counts`, where "dependency
   * count" is the number of dependencies a given property has assuming it is a
   * computed property, otherwise 0).  It also returns a pre-populated list of
   * `ready` properties that have no dependencies and a `total` count, which is
   * used for error-checking the graph.
   *
   * Used by `orderedComputed: true` computed property algorithm.
   *
   * @param {!Polymer_PropertyEffects} inst The instance to generate dependency
   *   counts for.
   * @return {!Object} Object containing `counts` map (property-to-dependency
   *   count) and pre-populated `ready` array of properties that had zero
   *   dependencies.
   */function dependencyCounts(inst){const infoForComputed=inst[COMPUTE_INFO],counts={},computedDeps=inst[TYPES.COMPUTE],ready=[];let total=0;// Count dependencies for each computed property
for(let p in infoForComputed){const info=infoForComputed[p];// Be sure to add the method name itself in case of "dynamic functions"
total+=counts[p]=info.args.filter(a=>!a.literal).length+(info.dynamicFn?1:0)}// Build list of ready properties (that aren't themselves computed)
for(let p in computedDeps){if(!infoForComputed[p]){ready.push(p)}}return{counts,ready,total}}/**
   * Implements the "computed property" effect by running the method with the
   * values of the arguments specified in the `info` object and setting the
   * return value to the computed property specified.
   *
   * @param {!Polymer_PropertyEffects} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {?Object} changedProps Bag of current property changes
   * @param {?Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @return {boolean} True when the property being computed changed
   * @private
   */function runComputedEffect(inst,property,changedProps,oldProps,info){// Dirty check dependencies and run if any invalid
let result=runMethodEffect(inst,property,changedProps,oldProps,info);// Abort if method returns a no-op result
if(result===NOOP){return!1}let computedProp=info.methodInfo;if(inst.__dataHasAccessor&&inst.__dataHasAccessor[computedProp]){return inst._setPendingProperty(computedProp,result,!0)}else{inst[computedProp]=result;return!1}}/**
   * Computes path changes based on path links set up using the `linkPaths`
   * API.
   *
   * @param {!Polymer_PropertyEffects} inst The instance whose props are changing
   * @param {string} path Path that has changed
   * @param {*} value Value of changed path
   * @return {void}
   * @private
   */function computeLinkedPaths(inst,path,value){let links=inst.__dataLinkedPaths;if(links){let link;for(let a in links){let b=links[a];if(isDescendant(a,path)){link=translate(a,b,path);inst._setPendingPropertyOrPath(link,value,!0,!0)}else if(isDescendant(b,path)){link=translate(b,a,path);inst._setPendingPropertyOrPath(link,value,!0,!0)}}}}// -- bindings ----------------------------------------------
/**
 * Adds binding metadata to the current `nodeInfo`, and binding effects
 * for all part dependencies to `templateInfo`.
 *
 * @param {Function} constructor Class that `_parseTemplate` is currently
 *   running on
 * @param {TemplateInfo} templateInfo Template metadata for current template
 * @param {NodeInfo} nodeInfo Node metadata for current template node
 * @param {string} kind Binding kind, either 'property', 'attribute', or 'text'
 * @param {string} target Target property name
 * @param {!Array<!BindingPart>} parts Array of binding part metadata
 * @param {string=} literal Literal text surrounding binding parts (specified
 *   only for 'property' bindings, since these must be initialized as part
 *   of boot-up)
 * @return {void}
 * @private
 */function addBinding(constructor,templateInfo,nodeInfo,kind,target,parts,literal){// Create binding metadata and add to nodeInfo
nodeInfo.bindings=nodeInfo.bindings||[];let/** Binding */binding={kind,target,parts,literal,isCompound:1!==parts.length};nodeInfo.bindings.push(binding);// Add listener info to binding metadata
if(shouldAddListener(binding)){let{event,negate}=binding.parts[0];binding.listenerEvent=event||camelToDashCase(target)+"-changed";binding.listenerNegate=negate}// Add "propagate" property effects to templateInfo
let index=templateInfo.nodeInfoList.length;for(let i=0,part;i<binding.parts.length;i++){part=binding.parts[i];part.compoundIndex=i;addEffectForBindingPart(constructor,templateInfo,binding,part,index)}}/**
   * Adds property effects to the given `templateInfo` for the given binding
   * part.
   *
   * @param {Function} constructor Class that `_parseTemplate` is currently
   *   running on
   * @param {TemplateInfo} templateInfo Template metadata for current template
   * @param {!Binding} binding Binding metadata
   * @param {!BindingPart} part Binding part metadata
   * @param {number} index Index into `nodeInfoList` for this node
   * @return {void}
   */function addEffectForBindingPart(constructor,templateInfo,binding,part,index){if(!part.literal){if("attribute"===binding.kind&&"-"===binding.target[0]){console.warn("Cannot set attribute "+binding.target+" because \"-\" is not a valid attribute starting character")}else{let dependencies=part.dependencies,info={index,binding,part,evaluator:constructor};for(let j=0,trigger;j<dependencies.length;j++){trigger=dependencies[j];if("string"==typeof trigger){trigger=parseArg(trigger);trigger.wildcard=!0}constructor._addTemplatePropertyEffect(templateInfo,trigger.rootProperty,{fn:runBindingEffect,info,trigger})}}}}/**
   * Implements the "binding" (property/path binding) effect.
   *
   * Note that binding syntax is overridable via `_parseBindings` and
   * `_evaluateBinding`.  This method will call `_evaluateBinding` for any
   * non-literal parts returned from `_parseBindings`.  However,
   * there is no support for _path_ bindings via custom binding parts,
   * as this is specific to Polymer's path binding syntax.
   *
   * @param {!Polymer_PropertyEffects} inst The instance the effect will be run on
   * @param {string} path Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @param {boolean} hasPaths True with `props` contains one or more paths
   * @param {Array} nodeList List of nodes associated with `nodeInfoList` template
   *   metadata
   * @return {void}
   * @private
   */function runBindingEffect(inst,path,props,oldProps,info,hasPaths,nodeList){let node=nodeList[info.index],binding=info.binding,part=info.part;// Subpath notification: transform path and set to client
// e.g.: foo="{{obj.sub}}", path: 'obj.sub.prop', set 'foo.prop'=obj.sub.prop
if(hasPaths&&part.source&&path.length>part.source.length&&"property"==binding.kind&&!binding.isCompound&&node.__isPropertyEffectsClient&&node.__dataHasAccessor&&node.__dataHasAccessor[binding.target]){let value=props[path];path=translate(part.source,binding.target,path);if(node._setPendingPropertyOrPath(path,value,!1,!0)){inst._enqueueClient(node)}}else{let value=info.evaluator._evaluateBinding(inst,part,path,props,oldProps,hasPaths);// Propagate value to child
// Abort if value is a no-op result
if(value!==NOOP){applyBindingValue(inst,node,binding,part,value)}}}/**
   * Sets the value for an "binding" (binding) effect to a node,
   * either as a property or attribute.
   *
   * @param {!Polymer_PropertyEffects} inst The instance owning the binding effect
   * @param {Node} node Target node for binding
   * @param {!Binding} binding Binding metadata
   * @param {!BindingPart} part Binding part metadata
   * @param {*} value Value to set
   * @return {void}
   * @private
   */function applyBindingValue(inst,node,binding,part,value){value=computeBindingValue(node,value,binding,part);if(sanitizeDOMValue){value=sanitizeDOMValue(value,binding.target,binding.kind,node)}if("attribute"==binding.kind){// Attribute binding
inst._valueToNodeAttribute(/** @type {Element} */node,value,binding.target)}else{// Property binding
let prop=binding.target;if(node.__isPropertyEffectsClient&&node.__dataHasAccessor&&node.__dataHasAccessor[prop]){if(!node[TYPES.READ_ONLY]||!node[TYPES.READ_ONLY][prop]){if(node._setPendingProperty(prop,value)){inst._enqueueClient(node)}}}else{// In legacy no-batching mode, bindings applied before dataReady are
// equivalent to the "apply config" phase, which only set managed props
inst._setUnmanagedPropertyToNode(node,prop,value)}}}/**
   * Transforms an "binding" effect value based on compound & negation
   * effect metadata, as well as handling for special-case properties
   *
   * @param {Node} node Node the value will be set to
   * @param {*} value Value to set
   * @param {!Binding} binding Binding metadata
   * @param {!BindingPart} part Binding part metadata
   * @return {*} Transformed value to set
   * @private
   */function computeBindingValue(node,value,binding,part){if(binding.isCompound){let storage=node.__dataCompoundStorage[binding.target];storage[part.compoundIndex]=value;value=storage.join("")}if("attribute"!==binding.kind){// Some browsers serialize `undefined` to `"undefined"`
if("textContent"===binding.target||"value"===binding.target&&("input"===node.localName||"textarea"===node.localName)){value=value==void 0?"":value}}return value}/**
   * Returns true if a binding's metadata meets all the requirements to allow
   * 2-way binding, and therefore a `<property>-changed` event listener should be
   * added:
   * - used curly braces
   * - is a property (not attribute) binding
   * - is not a textContent binding
   * - is not compound
   *
   * @param {!Binding} binding Binding metadata
   * @return {boolean} True if 2-way listener should be added
   * @private
   */function shouldAddListener(binding){return!!binding.target&&"attribute"!=binding.kind&&"text"!=binding.kind&&!binding.isCompound&&"{"===binding.parts[0].mode}/**
   * Setup compound binding storage structures, notify listeners, and dataHost
   * references onto the bound nodeList.
   *
   * @param {!Polymer_PropertyEffects} inst Instance that bas been previously
   *     bound
   * @param {TemplateInfo} templateInfo Template metadata
   * @return {void}
   * @private
   */function setupBindings(inst,templateInfo){// Setup compound storage, dataHost, and notify listeners
let{nodeList,nodeInfoList}=templateInfo;if(nodeInfoList.length){for(let i=0;i<nodeInfoList.length;i++){let info=nodeInfoList[i],node=nodeList[i],bindings=info.bindings;if(bindings){for(let i=0,binding;i<bindings.length;i++){binding=bindings[i];setupCompoundStorage(node,binding);addNotifyListener(node,inst,binding)}}// This ensures all bound elements have a host set, regardless
// of whether they upgrade synchronous to creation
node.__dataHost=inst}}}/**
   * Initializes `__dataCompoundStorage` local storage on a bound node with
   * initial literal data for compound bindings, and sets the joined
   * literal parts to the bound property.
   *
   * When changes to compound parts occur, they are first set into the compound
   * storage array for that property, and then the array is joined to result in
   * the final value set to the property/attribute.
   *
   * @param {Node} node Bound node to initialize
   * @param {Binding} binding Binding metadata
   * @return {void}
   * @private
   */function setupCompoundStorage(node,binding){if(binding.isCompound){// Create compound storage map
let storage=node.__dataCompoundStorage||(node.__dataCompoundStorage={}),parts=binding.parts,literals=Array(parts.length);for(let j=0;j<parts.length;j++){literals[j]=parts[j].literal}let target=binding.target;storage[target]=literals;// Configure properties with their literal parts
if(binding.literal&&"property"==binding.kind){// Note, className needs style scoping so this needs wrapping.
// We may also want to consider doing this for `textContent` and
// `innerHTML`.
if("className"===target){node=wrap(node)}node[target]=binding.literal}}}/**
   * Adds a 2-way binding notification event listener to the node specified
   *
   * @param {Object} node Child element to add listener to
   * @param {!Polymer_PropertyEffects} inst Host element instance to handle
   *     notification event
   * @param {Binding} binding Binding metadata
   * @return {void}
   * @private
   */function addNotifyListener(node,inst,binding){if(binding.listenerEvent){let part=binding.parts[0];node.addEventListener(binding.listenerEvent,function(e){handleNotification(e,inst,binding.target,part.source,part.negate)})}}// -- for method-based effects (complexObserver & computed) --------------
/**
 * Adds property effects for each argument in the method signature (and
 * optionally, for the method name if `dynamic` is true) that calls the
 * provided effect function.
 *
 * @param {Element | Object} model Prototype or instance
 * @param {!MethodSignature} sig Method signature metadata
 * @param {string} type Type of property effect to add
 * @param {Function} effectFn Function to run when arguments change
 * @param {*=} methodInfo Effect-specific information to be included in
 *   method effect metadata
 * @param {boolean|Object=} dynamicFn Boolean or object map indicating whether
 *   method names should be included as a dependency to the effect. Note,
 *   defaults to true if the signature is static (sig.static is true).
 * @return {!Object} Effect metadata for this method effect
 * @private
 */function createMethodEffect(model,sig,type,effectFn,methodInfo,dynamicFn){dynamicFn=sig.static||dynamicFn&&("object"!==typeof dynamicFn||dynamicFn[sig.methodName]);let info={methodName:sig.methodName,args:sig.args,methodInfo,dynamicFn};for(let i=0,arg;i<sig.args.length&&(arg=sig.args[i]);i++){if(!arg.literal){model._addPropertyEffect(arg.rootProperty,type,{fn:effectFn,info:info,trigger:arg})}}if(dynamicFn){model._addPropertyEffect(sig.methodName,type,{fn:effectFn,info:info})}return info}/**
   * Calls a method with arguments marshaled from properties on the instance
   * based on the method signature contained in the effect metadata.
   *
   * Multi-property observers, computed properties, and inline computing
   * functions call this function to invoke the method, then use the return
   * value accordingly.
   *
   * @param {!Polymer_PropertyEffects} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @return {*} Returns the return value from the method invocation
   * @private
   */function runMethodEffect(inst,property,props,oldProps,info){// Instances can optionally have a _methodHost which allows redirecting where
// to find methods. Currently used by `templatize`.
let context=inst._methodHost||inst,fn=context[info.methodName];if(fn){let args=inst._marshalArgs(info.args,property,props);return args===NOOP?NOOP:fn.apply(context,args)}else if(!info.dynamicFn){console.warn("method `"+info.methodName+"` not defined")}}const emptyArray=[],IDENT="(?:"+"[a-zA-Z_$][\\w.:$\\-*]*"+")",NUMBER="(?:"+"[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?"+")",SQUOTE_STRING="(?:"+"'(?:[^'\\\\]|\\\\.)*'"+")",DQUOTE_STRING="(?:"+"\"(?:[^\"\\\\]|\\\\.)*\""+")",STRING="(?:"+SQUOTE_STRING+"|"+DQUOTE_STRING+")",ARGUMENT="(?:("+IDENT+"|"+NUMBER+"|"+STRING+")\\s*"+")",ARGUMENTS="(?:"+ARGUMENT+"(?:,\\s*"+ARGUMENT+")*"+")",ARGUMENT_LIST="(?:"+"\\(\\s*"+"(?:"+ARGUMENTS+"?"+")"+"\\)\\s*"+")",BINDING="("+IDENT+"\\s*"+ARGUMENT_LIST+"?"+")",OPEN_BRACKET="(\\[\\[|{{)"+"\\s*",CLOSE_BRACKET="(?:]]|}})",NEGATE="(?:(!)\\s*)?",EXPRESSION=OPEN_BRACKET+NEGATE+BINDING+CLOSE_BRACKET,bindingRegex=new RegExp(EXPRESSION,"g");// Regular expressions used for binding
/**
                                                   * Create a string from binding parts of all the literal parts
                                                   *
                                                   * @param {!Array<BindingPart>} parts All parts to stringify
                                                   * @return {string} String made from the literal parts
                                                   */function literalFromParts(parts){let s="";for(let i=0,literal;i<parts.length;i++){literal=parts[i].literal;s+=literal||""}return s}/**
   * Parses an expression string for a method signature, and returns a metadata
   * describing the method in terms of `methodName`, `static` (whether all the
   * arguments are literals), and an array of `args`
   *
   * @param {string} expression The expression to parse
   * @return {?MethodSignature} The method metadata object if a method expression was
   *   found, otherwise `undefined`
   * @private
   */function parseMethod(expression){// tries to match valid javascript property names
let m=expression.match(/([^\s]+?)\(([\s\S]*)\)/);if(m){let methodName=m[1],sig={methodName,static:!0,args:emptyArray};if(m[2].trim()){// replace escaped commas with comma entity, split on un-escaped commas
let args=m[2].replace(/\\,/g,"&comma;").split(",");return parseArgs(args,sig)}else{return sig}}return null}/**
   * Parses an array of arguments and sets the `args` property of the supplied
   * signature metadata object. Sets the `static` property to false if any
   * argument is a non-literal.
   *
   * @param {!Array<string>} argList Array of argument names
   * @param {!MethodSignature} sig Method signature metadata object
   * @return {!MethodSignature} The updated signature metadata object
   * @private
   */function parseArgs(argList,sig){sig.args=argList.map(function(rawArg){let arg=parseArg(rawArg);if(!arg.literal){sig.static=!1}return arg},this);return sig}/**
   * Parses an individual argument, and returns an argument metadata object
   * with the following fields:
   *
   *   {
   *     value: 'prop',        // property/path or literal value
   *     literal: false,       // whether argument is a literal
   *     structured: false,    // whether the property is a path
   *     rootProperty: 'prop', // the root property of the path
   *     wildcard: false       // whether the argument was a wildcard '.*' path
   *   }
   *
   * @param {string} rawArg The string value of the argument
   * @return {!MethodArg} Argument metadata object
   * @private
   */function parseArg(rawArg){// clean up whitespace
let arg=rawArg.trim()// replace comma entity with comma
.replace(/&comma;/g,",")// repair extra escape sequences; note only commas strictly need
// escaping, but we allow any other char to be escaped since its
// likely users will do this
.replace(/\\(.)/g,"$1"),a={name:arg,value:"",literal:!1},fc=arg[0];// basic argument descriptor
if("-"===fc){fc=arg[1]}if("0"<=fc&&"9">=fc){fc="#"}switch(fc){case"'":case"\"":a.value=arg.slice(1,-1);a.literal=!0;break;case"#":a.value=+arg;a.literal=!0;break;}// if not literal, look for structured path
if(!a.literal){a.rootProperty=root(arg);// detect structured path (has dots)
a.structured=isPath(arg);if(a.structured){a.wildcard=".*"==arg.slice(-2);if(a.wildcard){a.name=arg.slice(0,-2)}}}return a}function getArgValue(data,props,path){let value=get(data,path);// when data is not stored e.g. `splices`, get the value from changedProps
// TODO(kschaaf): Note, this can cause a rare issue where the wildcard
// info.value could pull a stale value out of changedProps during a reentrant
// change that sets the value back to undefined.
// https://github.com/Polymer/polymer/issues/5479
if(value===void 0){value=props[path]}return value}// data api
/**
 * Sends array splice notifications (`.splices` and `.length`)
 *
 * Note: this implementation only accepts normalized paths
 *
 * @param {!Polymer_PropertyEffects} inst Instance to send notifications to
 * @param {Array} array The array the mutations occurred on
 * @param {string} path The path to the array that was mutated
 * @param {Array} splices Array of splice records
 * @return {void}
 * @private
 */function notifySplices(inst,array,path,splices){const splicesData={indexSplices:splices};// Legacy behavior stored splices in `__data__` so it was *not* ephemeral.
// To match this behavior, we store splices directly on the array.
if(legacyUndefined&&!inst._overrideLegacyUndefined){array.splices=splicesData}inst.notifyPath(path+".splices",splicesData);inst.notifyPath(path+".length",array.length);// Clear splice data only when it's stored on the array.
if(legacyUndefined&&!inst._overrideLegacyUndefined){splicesData.indexSplices=[]}}/**
   * Creates a splice record and sends an array splice notification for
   * the described mutation
   *
   * Note: this implementation only accepts normalized paths
   *
   * @param {!Polymer_PropertyEffects} inst Instance to send notifications to
   * @param {Array} array The array the mutations occurred on
   * @param {string} path The path to the array that was mutated
   * @param {number} index Index at which the array mutation occurred
   * @param {number} addedCount Number of added items
   * @param {Array} removed Array of removed items
   * @return {void}
   * @private
   */function notifySplice(inst,array,path,index,addedCount,removed){notifySplices(inst,array,path,[{index:index,addedCount:addedCount,removed:removed,object:array,type:"splice"}])}/**
   * Returns an upper-cased version of the string.
   *
   * @param {string} name String to uppercase
   * @return {string} Uppercased string
   * @private
   */function upper(name){return name[0].toUpperCase()+name.substring(1)}/**
   * Element class mixin that provides meta-programming for Polymer's template
   * binding and data observation (collectively, "property effects") system.
   *
   * This mixin uses provides the following key static methods for adding
   * property effects to an element class:
   * - `addPropertyEffect`
   * - `createPropertyObserver`
   * - `createMethodObserver`
   * - `createNotifyingProperty`
   * - `createReadOnlyProperty`
   * - `createReflectedProperty`
   * - `createComputedProperty`
   * - `bindTemplate`
   *
   * Each method creates one or more property accessors, along with metadata
   * used by this mixin's implementation of `_propertiesChanged` to perform
   * the property effects.
   *
   * Underscored versions of the above methods also exist on the element
   * prototype for adding property effects on instances at runtime.
   *
   * Note that this mixin overrides several `PropertyAccessors` methods, in
   * many cases to maintain guarantees provided by the Polymer 1.x features;
   * notably it changes property accessors to be synchronous by default
   * whereas the default when using `PropertyAccessors` standalone is to be
   * async by default.
   *
   * @mixinFunction
   * @polymer
   * @appliesMixin TemplateStamp
   * @appliesMixin PropertyAccessors
   * @summary Element class mixin that provides meta-programming for Polymer's
   * template binding and data observation system.
   */const PropertyEffects=dedupingMixin(superClass=>{/**
   * @constructor
   * @implements {Polymer_PropertyAccessors}
   * @implements {Polymer_TemplateStamp}
   * @unrestricted
   * @private
   */const propertyEffectsBase=TemplateStamp(PropertyAccessors(superClass));/**
                                                                                * @polymer
                                                                                * @mixinClass
                                                                                * @implements {Polymer_PropertyEffects}
                                                                                * @extends {propertyEffectsBase}
                                                                                * @unrestricted
                                                                                */class PropertyEffects extends propertyEffectsBase{constructor(){super();/** @type {boolean} */ // Used to identify users of this mixin, ala instanceof
this.__isPropertyEffectsClient=!0;/** @type {boolean} */this.__dataClientsReady;/** @type {Array} */this.__dataPendingClients;/** @type {Object} */this.__dataToNotify;/** @type {Object} */this.__dataLinkedPaths;/** @type {boolean} */this.__dataHasPaths;/** @type {Object} */this.__dataCompoundStorage;/** @type {Polymer_PropertyEffects} */this.__dataHost;/** @type {!Object} */this.__dataTemp;/** @type {boolean} */this.__dataClientsInitialized;/** @type {!Object} */this.__data;/** @type {!Object|null} */this.__dataPending;/** @type {!Object} */this.__dataOld;/** @type {Object} */this.__computeEffects;/** @type {Object} */this.__computeInfo;/** @type {Object} */this.__reflectEffects;/** @type {Object} */this.__notifyEffects;/** @type {Object} */this.__propagateEffects;/** @type {Object} */this.__observeEffects;/** @type {Object} */this.__readOnly;/** @type {!TemplateInfo} */this.__templateInfo;/** @type {boolean} */this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return TYPES}/**
       * @override
       * @return {void}
       */_initializeProperties(){super._initializeProperties();this._registerHost();this.__dataClientsReady=!1;this.__dataPendingClients=null;this.__dataToNotify=null;this.__dataLinkedPaths=null;this.__dataHasPaths=!1;// May be set on instance prior to upgrade
this.__dataCompoundStorage=this.__dataCompoundStorage||null;this.__dataHost=this.__dataHost||null;this.__dataTemp={};this.__dataClientsInitialized=!1}_registerHost(){if(hostStack.length){let host=hostStack[hostStack.length-1];host._enqueueClient(this);// This ensures even non-bound elements have a host set, as
// long as they upgrade synchronously
this.__dataHost=host}}/**
       * Overrides `PropertyAccessors` implementation to provide a
       * more efficient implementation of initializing properties from
       * the prototype on the instance.
       *
       * @override
       * @param {Object} props Properties to initialize on the prototype
       * @return {void}
       */_initializeProtoProperties(props){this.__data=Object.create(props);this.__dataPending=Object.create(props);this.__dataOld={}}/**
       * Overrides `PropertyAccessors` implementation to avoid setting
       * `_setProperty`'s `shouldNotify: true`.
       *
       * @override
       * @param {Object} props Properties to initialize on the instance
       * @return {void}
       */_initializeInstanceProperties(props){let readOnly=this[TYPES.READ_ONLY];for(let prop in props){if(!readOnly||!readOnly[prop]){this.__dataPending=this.__dataPending||{};this.__dataOld=this.__dataOld||{};this.__data[prop]=this.__dataPending[prop]=props[prop]}}}// Prototype setup ----------------------------------------
/**
     * Equivalent to static `addPropertyEffect` API but can be called on
     * an instance to add effects at runtime.  See that method for
     * full API docs.
     *
     * @override
     * @param {string} property Property that should trigger the effect
     * @param {string} type Effect type, from this.PROPERTY_EFFECT_TYPES
     * @param {Object=} effect Effect metadata object
     * @return {void}
     * @protected
     */_addPropertyEffect(property,type,effect){this._createPropertyAccessor(property,type==TYPES.READ_ONLY);// effects are accumulated into arrays per property based on type
let effects=ensureOwnEffectMap(this,type,!0)[property];if(!effects){effects=this[type][property]=[]}effects.push(effect)}/**
       * Removes the given property effect.
       *
       * @override
       * @param {string} property Property the effect was associated with
       * @param {string} type Effect type, from this.PROPERTY_EFFECT_TYPES
       * @param {Object=} effect Effect metadata object to remove
       * @return {void}
       */_removePropertyEffect(property,type,effect){let effects=ensureOwnEffectMap(this,type,!0)[property],idx=effects.indexOf(effect);if(0<=idx){effects.splice(idx,1)}}/**
       * Returns whether the current prototype/instance has a property effect
       * of a certain type.
       *
       * @override
       * @param {string} property Property name
       * @param {string=} type Effect type, from this.PROPERTY_EFFECT_TYPES
       * @return {boolean} True if the prototype/instance has an effect of this
       *     type
       * @protected
       */_hasPropertyEffect(property,type){let effects=this[type];return!!(effects&&effects[property])}/**
       * Returns whether the current prototype/instance has a "read only"
       * accessor for the given property.
       *
       * @override
       * @param {string} property Property name
       * @return {boolean} True if the prototype/instance has an effect of this
       *     type
       * @protected
       */_hasReadOnlyEffect(property){return this._hasPropertyEffect(property,TYPES.READ_ONLY)}/**
       * Returns whether the current prototype/instance has a "notify"
       * property effect for the given property.
       *
       * @override
       * @param {string} property Property name
       * @return {boolean} True if the prototype/instance has an effect of this
       *     type
       * @protected
       */_hasNotifyEffect(property){return this._hasPropertyEffect(property,TYPES.NOTIFY)}/**
       * Returns whether the current prototype/instance has a "reflect to
       * attribute" property effect for the given property.
       *
       * @override
       * @param {string} property Property name
       * @return {boolean} True if the prototype/instance has an effect of this
       *     type
       * @protected
       */_hasReflectEffect(property){return this._hasPropertyEffect(property,TYPES.REFLECT)}/**
       * Returns whether the current prototype/instance has a "computed"
       * property effect for the given property.
       *
       * @override
       * @param {string} property Property name
       * @return {boolean} True if the prototype/instance has an effect of this
       *     type
       * @protected
       */_hasComputedEffect(property){return this._hasPropertyEffect(property,TYPES.COMPUTE)}// Runtime ----------------------------------------
/**
     * Sets a pending property or path.  If the root property of the path in
     * question had no accessor, the path is set, otherwise it is enqueued
     * via `_setPendingProperty`.
     *
     * This function isolates relatively expensive functionality necessary
     * for the public API (`set`, `setProperties`, `notifyPath`, and property
     * change listeners via {{...}} bindings), such that it is only done
     * when paths enter the system, and not at every propagation step.  It
     * also sets a `__dataHasPaths` flag on the instance which is used to
     * fast-path slower path-matching code in the property effects host paths.
     *
     * `path` can be a path string or array of path parts as accepted by the
     * public API.
     *
     * @override
     * @param {string | !Array<number|string>} path Path to set
     * @param {*} value Value to set
     * @param {boolean=} shouldNotify Set to true if this change should
     *  cause a property notification event dispatch
     * @param {boolean=} isPathNotification If the path being set is a path
     *   notification of an already changed value, as opposed to a request
     *   to set and notify the change.  In the latter `false` case, a dirty
     *   check is performed and then the value is set to the path before
     *   enqueuing the pending property change.
     * @return {boolean} Returns true if the property/path was enqueued in
     *   the pending changes bag.
     * @protected
     */_setPendingPropertyOrPath(path,value,shouldNotify,isPathNotification){if(isPathNotification||root(Array.isArray(path)?path[0]:path)!==path){// Dirty check changes being set to a path against the actual object,
// since this is the entry point for paths into the system; from here
// the only dirty checks are against the `__dataTemp` cache to prevent
// duplicate work in the same turn only. Note, if this was a notification
// of a change already set to a path (isPathNotification: true),
// we always let the change through and skip the `set` since it was
// already dirty checked at the point of entry and the underlying
// object has already been updated
if(!isPathNotification){let old=get(this,path);path=/** @type {string} */set(this,path,value);// Use property-accessor's simpler dirty check
if(!path||!super._shouldPropertyChange(path,value,old)){return!1}}this.__dataHasPaths=!0;if(this._setPendingProperty(/**@type{string}*/path,value,shouldNotify)){computeLinkedPaths(this,/**@type{string}*/path,value);return!0}}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[path]){return this._setPendingProperty(/**@type{string}*/path,value,shouldNotify)}else{this[path]=value}}return!1}/**
       * Applies a value to a non-Polymer element/node's property.
       *
       * The implementation makes a best-effort at binding interop:
       * Some native element properties have side-effects when
       * re-setting the same value (e.g. setting `<input>.value` resets the
       * cursor position), so we do a dirty-check before setting the value.
       * However, for better interop with non-Polymer custom elements that
       * accept objects, we explicitly re-set object changes coming from the
       * Polymer world (which may include deep object changes without the
       * top reference changing), erring on the side of providing more
       * information.
       *
       * Users may override this method to provide alternate approaches.
       *
       * @override
       * @param {!Node} node The node to set a property on
       * @param {string} prop The property to set
       * @param {*} value The value to set
       * @return {void}
       * @protected
       */_setUnmanagedPropertyToNode(node,prop,value){// It is a judgment call that resetting primitives is
// "bad" and resettings objects is also "good"; alternatively we could
// implement a whitelist of tag & property values that should never
// be reset (e.g. <input>.value && <select>.value)
if(value!==node[prop]||"object"==typeof value){// Note, className needs style scoping so this needs wrapping.
if("className"===prop){node=/** @type {!Node} */wrap(node)}node[prop]=value}}/**
       * Overrides the `PropertiesChanged` implementation to introduce special
       * dirty check logic depending on the property & value being set:
       *
       * 1. Any value set to a path (e.g. 'obj.prop': 42 or 'obj.prop': {...})
       *    Stored in `__dataTemp`, dirty checked against `__dataTemp`
       * 2. Object set to simple property (e.g. 'prop': {...})
       *    Stored in `__dataTemp` and `__data`, dirty checked against
       *    `__dataTemp` by default implementation of `_shouldPropertyChange`
       * 3. Primitive value set to simple property (e.g. 'prop': 42)
       *    Stored in `__data`, dirty checked against `__data`
       *
       * The dirty-check is important to prevent cycles due to two-way
       * notification, but paths and objects are only dirty checked against any
       * previous value set during this turn via a "temporary cache" that is
       * cleared when the last `_propertiesChanged` exits. This is so:
       * a. any cached array paths (e.g. 'array.3.prop') may be invalidated
       *    due to array mutations like shift/unshift/splice; this is fine
       *    since path changes are dirty-checked at user entry points like `set`
       * b. dirty-checking for objects only lasts one turn to allow the user
       *    to mutate the object in-place and re-set it with the same identity
       *    and have all sub-properties re-propagated in a subsequent turn.
       *
       * The temp cache is not necessarily sufficient to prevent invalid array
       * paths, since a splice can happen during the same turn (with pathological
       * user code); we could introduce a "fixup" for temporarily cached array
       * paths if needed: https://github.com/Polymer/polymer/issues/4227
       *
       * @override
       * @param {string} property Name of the property
       * @param {*} value Value to set
       * @param {boolean=} shouldNotify True if property should fire notification
       *   event (applies only for `notify: true` properties)
       * @return {boolean} Returns true if the property changed
       */_setPendingProperty(property,value,shouldNotify){let propIsPath=this.__dataHasPaths&&isPath(property),prevProps=propIsPath?this.__dataTemp:this.__data;if(this._shouldPropertyChange(property,value,prevProps[property])){if(!this.__dataPending){this.__dataPending={};this.__dataOld={}}// Ensure old is captured from the last turn
if(!(property in this.__dataOld)){this.__dataOld[property]=this.__data[property]}// Paths are stored in temporary cache (cleared at end of turn),
// which is used for dirty-checking, all others stored in __data
if(propIsPath){this.__dataTemp[property]=value}else{this.__data[property]=value}// All changes go into pending property bag, passed to _propertiesChanged
this.__dataPending[property]=value;// Track properties that should notify separately
if(propIsPath||this[TYPES.NOTIFY]&&this[TYPES.NOTIFY][property]){this.__dataToNotify=this.__dataToNotify||{};this.__dataToNotify[property]=shouldNotify}return!0}return!1}/**
       * Overrides base implementation to ensure all accessors set `shouldNotify`
       * to true, for per-property notification tracking.
       *
       * @override
       * @param {string} property Name of the property
       * @param {*} value Value to set
       * @return {void}
       */_setProperty(property,value){if(this._setPendingProperty(property,value,!0)){this._invalidateProperties()}}/**
       * Overrides `PropertyAccessor`'s default async queuing of
       * `_propertiesChanged`: if `__dataReady` is false (has not yet been
       * manually flushed), the function no-ops; otherwise flushes
       * `_propertiesChanged` synchronously.
       *
       * @override
       * @return {void}
       */_invalidateProperties(){if(this.__dataReady){this._flushProperties()}}/**
       * Enqueues the given client on a list of pending clients, whose
       * pending property changes can later be flushed via a call to
       * `_flushClients`.
       *
       * @override
       * @param {Object} client PropertyEffects client to enqueue
       * @return {void}
       * @protected
       */_enqueueClient(client){this.__dataPendingClients=this.__dataPendingClients||[];if(client!==this){this.__dataPendingClients.push(client)}}/**
       * Flushes any clients previously enqueued via `_enqueueClient`, causing
       * their `_flushProperties` method to run.
       *
       * @override
       * @return {void}
       * @protected
       */_flushClients(){if(!this.__dataClientsReady){this.__dataClientsReady=!0;this._readyClients();// Override point where accessors are turned on; importantly,
// this is after clients have fully readied, providing a guarantee
// that any property effects occur only after all clients are ready.
this.__dataReady=!0}else{this.__enableOrFlushClients()}}// NOTE: We ensure clients either enable or flush as appropriate. This
// handles two corner cases:
// (1) clients flush properly when connected/enabled before the host
// enables; e.g.
//   (a) Templatize stamps with no properties and does not flush and
//   (b) the instance is inserted into dom and
//   (c) then the instance flushes.
// (2) clients enable properly when not connected/enabled when the host
// flushes; e.g.
//   (a) a template is runtime stamped and not yet connected/enabled
//   (b) a host sets a property, causing stamped dom to flush
//   (c) the stamped dom enables.
__enableOrFlushClients(){let clients=this.__dataPendingClients;if(clients){this.__dataPendingClients=null;for(let i=0,client;i<clients.length;i++){client=clients[i];if(!client.__dataEnabled){client._enableProperties()}else if(client.__dataPending){client._flushProperties()}}}}/**
       * Perform any initial setup on client dom. Called before the first
       * `_flushProperties` call on client dom and before any element
       * observers are called.
       *
       * @override
       * @return {void}
       * @protected
       */_readyClients(){this.__enableOrFlushClients()}/**
       * Sets a bag of property changes to this instance, and
       * synchronously processes all effects of the properties as a batch.
       *
       * Property names must be simple properties, not paths.  Batched
       * path propagation is not supported.
       *
       * @override
       * @param {Object} props Bag of one or more key-value pairs whose key is
       *   a property and value is the new value to set for that property.
       * @param {boolean=} setReadOnly When true, any private values set in
       *   `props` will be set. By default, `setProperties` will not set
       *   `readOnly: true` root properties.
       * @return {void}
       * @public
       */setProperties(props,setReadOnly){for(let path in props){if(setReadOnly||!this[TYPES.READ_ONLY]||!this[TYPES.READ_ONLY][path]){//TODO(kschaaf): explicitly disallow paths in setProperty?
// wildcard observers currently only pass the first changed path
// in the `info` object, and you could do some odd things batching
// paths, e.g. {'foo.bar': {...}, 'foo': null}
this._setPendingPropertyOrPath(path,props[path],!0)}}this._invalidateProperties()}/**
       * Overrides `PropertyAccessors` so that property accessor
       * side effects are not enabled until after client dom is fully ready.
       * Also calls `_flushClients` callback to ensure client dom is enabled
       * that was not enabled as a result of flushing properties.
       *
       * @override
       * @return {void}
       */ready(){// It is important that `super.ready()` is not called here as it
// immediately turns on accessors. Instead, we wait until `readyClients`
// to enable accessors to provide a guarantee that clients are ready
// before processing any accessors side effects.
this._flushProperties();// If no data was pending, `_flushProperties` will not `flushClients`
// so ensure this is done.
if(!this.__dataClientsReady){this._flushClients()}// Before ready, client notifications do not trigger _flushProperties.
// Therefore a flush is necessary here if data has been set.
if(this.__dataPending){this._flushProperties()}}/**
       * Implements `PropertyAccessors`'s properties changed callback.
       *
       * Runs each class of effects for the batch of changed properties in
       * a specific order (compute, propagate, reflect, observe, notify).
       *
       * @override
       * @param {!Object} currentProps Bag of all current accessor values
       * @param {?Object} changedProps Bag of properties changed since the last
       *   call to `_propertiesChanged`
       * @param {?Object} oldProps Bag of previous values for each property
       *   in `changedProps`
       * @return {void}
       */_propertiesChanged(currentProps,changedProps,oldProps){// ----------------------------
// let c = Object.getOwnPropertyNames(changedProps || {});
// window.debug && console.group(this.localName + '#' + this.id + ': ' + c);
// if (window.debug) { debugger; }
// ----------------------------
let hasPaths=this.__dataHasPaths;this.__dataHasPaths=!1;let notifyProps;// Compute properties
runComputedEffects(this,changedProps,oldProps,hasPaths);// Clear notify properties prior to possible reentry (propagate, observe),
// but after computing effects have a chance to add to them
notifyProps=this.__dataToNotify;this.__dataToNotify=null;// Propagate properties to clients
this._propagatePropertyChanges(changedProps,oldProps,hasPaths);// Flush clients
this._flushClients();// Reflect properties
runEffects(this,this[TYPES.REFLECT],changedProps,oldProps,hasPaths);// Observe properties
runEffects(this,this[TYPES.OBSERVE],changedProps,oldProps,hasPaths);// Notify properties to host
if(notifyProps){runNotifyEffects(this,notifyProps,changedProps,oldProps,hasPaths)}// Clear temporary cache at end of turn
if(1==this.__dataCounter){this.__dataTemp={}}// ----------------------------
// window.debug && console.groupEnd(this.localName + '#' + this.id + ': ' + c);
// ----------------------------
}/**
       * Called to propagate any property changes to stamped template nodes
       * managed by this element.
       *
       * @override
       * @param {Object} changedProps Bag of changed properties
       * @param {Object} oldProps Bag of previous values for changed properties
       * @param {boolean} hasPaths True with `props` contains one or more paths
       * @return {void}
       * @protected
       */_propagatePropertyChanges(changedProps,oldProps,hasPaths){if(this[TYPES.PROPAGATE]){runEffects(this,this[TYPES.PROPAGATE],changedProps,oldProps,hasPaths)}if(this.__templateInfo){this._runEffectsForTemplate(this.__templateInfo,changedProps,oldProps,hasPaths)}}_runEffectsForTemplate(templateInfo,changedProps,oldProps,hasPaths){const baseRunEffects=(changedProps,hasPaths)=>{runEffects(this,templateInfo.propertyEffects,changedProps,oldProps,hasPaths,templateInfo.nodeList);for(let info=templateInfo.firstChild;info;info=info.nextSibling){this._runEffectsForTemplate(info,changedProps,oldProps,hasPaths)}};if(templateInfo.runEffects){templateInfo.runEffects(baseRunEffects,changedProps,hasPaths)}else{baseRunEffects(changedProps,hasPaths)}}/**
       * Aliases one data path as another, such that path notifications from one
       * are routed to the other.
       *
       * @override
       * @param {string | !Array<string|number>} to Target path to link.
       * @param {string | !Array<string|number>} from Source path to link.
       * @return {void}
       * @public
       */linkPaths(to,from){to=normalize(to);from=normalize(from);this.__dataLinkedPaths=this.__dataLinkedPaths||{};this.__dataLinkedPaths[to]=from}/**
       * Removes a data path alias previously established with `_linkPaths`.
       *
       * Note, the path to unlink should be the target (`to`) used when
       * linking the paths.
       *
       * @override
       * @param {string | !Array<string|number>} path Target path to unlink.
       * @return {void}
       * @public
       */unlinkPaths(path){path=normalize(path);if(this.__dataLinkedPaths){delete this.__dataLinkedPaths[path]}}/**
       * Notify that an array has changed.
       *
       * Example:
       *
       *     this.items = [ {name: 'Jim'}, {name: 'Todd'}, {name: 'Bill'} ];
       *     ...
       *     this.items.splice(1, 1, {name: 'Sam'});
       *     this.items.push({name: 'Bob'});
       *     this.notifySplices('items', [
       *       { index: 1, removed: [{name: 'Todd'}], addedCount: 1,
       *         object: this.items, type: 'splice' },
       *       { index: 3, removed: [], addedCount: 1,
       *         object: this.items, type: 'splice'}
       *     ]);
       *
       * @param {string} path Path that should be notified.
       * @param {Array} splices Array of splice records indicating ordered
       *   changes that occurred to the array. Each record should have the
       *   following fields:
       *    * index: index at which the change occurred
       *    * removed: array of items that were removed from this index
       *    * addedCount: number of new items added at this index
       *    * object: a reference to the array in question
       *    * type: the string literal 'splice'
       *
       *   Note that splice records _must_ be normalized such that they are
       *   reported in index order (raw results from `Object.observe` are not
       *   ordered and must be normalized/merged before notifying).
       *
       * @override
       * @return {void}
       * @public
       */notifySplices(path,splices){let info={path:""},array=/** @type {Array} */get(this,path,info);notifySplices(this,array,info.path,splices)}/**
       * Convenience method for reading a value from a path.
       *
       * Note, if any part in the path is undefined, this method returns
       * `undefined` (this method does not throw when dereferencing undefined
       * paths).
       *
       * @override
       * @param {(string|!Array<(string|number)>)} path Path to the value
       *   to read.  The path may be specified as a string (e.g. `foo.bar.baz`)
       *   or an array of path parts (e.g. `['foo.bar', 'baz']`).  Note that
       *   bracketed expressions are not supported; string-based path parts
       *   *must* be separated by dots.  Note that when dereferencing array
       *   indices, the index may be used as a dotted part directly
       *   (e.g. `users.12.name` or `['users', 12, 'name']`).
       * @param {Object=} root Root object from which the path is evaluated.
       * @return {*} Value at the path, or `undefined` if any part of the path
       *   is undefined.
       * @public
       */get(path,root){return get(root||this,path)}/**
       * Convenience method for setting a value to a path and notifying any
       * elements bound to the same path.
       *
       * Note, if any part in the path except for the last is undefined,
       * this method does nothing (this method does not throw when
       * dereferencing undefined paths).
       *
       * @override
       * @param {(string|!Array<(string|number)>)} path Path to the value
       *   to write.  The path may be specified as a string (e.g. `'foo.bar.baz'`)
       *   or an array of path parts (e.g. `['foo.bar', 'baz']`).  Note that
       *   bracketed expressions are not supported; string-based path parts
       *   *must* be separated by dots.  Note that when dereferencing array
       *   indices, the index may be used as a dotted part directly
       *   (e.g. `'users.12.name'` or `['users', 12, 'name']`).
       * @param {*} value Value to set at the specified path.
       * @param {Object=} root Root object from which the path is evaluated.
       *   When specified, no notification will occur.
       * @return {void}
       * @public
       */set(path,value,root){if(root){set(root,path,value)}else{if(!this[TYPES.READ_ONLY]||!this[TYPES.READ_ONLY][/** @type {string} */path]){if(this._setPendingPropertyOrPath(path,value,!0)){this._invalidateProperties()}}}}/**
       * Adds items onto the end of the array at the path specified.
       *
       * The arguments after `path` and return value match that of
       * `Array.prototype.push`.
       *
       * This method notifies other paths to the same array that a
       * splice occurred to the array.
       *
       * @override
       * @param {string | !Array<string|number>} path Path to array.
       * @param {...*} items Items to push onto array
       * @return {number} New length of the array.
       * @public
       */push(path,...items){let info={path:""},array=/** @type {Array}*/get(this,path,info),len=array.length,ret=array.push(...items);if(items.length){notifySplice(this,array,info.path,len,items.length,[])}return ret}/**
       * Removes an item from the end of array at the path specified.
       *
       * The arguments after `path` and return value match that of
       * `Array.prototype.pop`.
       *
       * This method notifies other paths to the same array that a
       * splice occurred to the array.
       *
       * @override
       * @param {string | !Array<string|number>} path Path to array.
       * @return {*} Item that was removed.
       * @public
       */pop(path){let info={path:""},array=/** @type {Array} */get(this,path,info),hadLength=!!array.length,ret=array.pop();if(hadLength){notifySplice(this,array,info.path,array.length,0,[ret])}return ret}/**
       * Starting from the start index specified, removes 0 or more items
       * from the array and inserts 0 or more new items in their place.
       *
       * The arguments after `path` and return value match that of
       * `Array.prototype.splice`.
       *
       * This method notifies other paths to the same array that a
       * splice occurred to the array.
       *
       * @override
       * @param {string | !Array<string|number>} path Path to array.
       * @param {number} start Index from which to start removing/inserting.
       * @param {number=} deleteCount Number of items to remove.
       * @param {...*} items Items to insert into array.
       * @return {!Array} Array of removed items.
       * @public
       */splice(path,start,deleteCount,...items){let info={path:""},array=/** @type {Array} */get(this,path,info);// Normalize fancy native splice handling of crazy start values
if(0>start){start=array.length-Math.floor(-start)}else if(start){start=Math.floor(start)}// array.splice does different things based on the number of arguments
// you pass in. Therefore, array.splice(0) and array.splice(0, undefined)
// do different things. In the former, the whole array is cleared. In the
// latter, no items are removed.
// This means that we need to detect whether 1. one of the arguments
// is actually passed in and then 2. determine how many arguments
// we should pass on to the native array.splice
//
let ret;// Omit any additional arguments if they were not passed in
if(2===arguments.length){ret=array.splice(start);// Either start was undefined and the others were defined, but in this
// case we can safely pass on all arguments
//
// Note: this includes the case where none of the arguments were passed in,
// e.g. this.splice('array'). However, if both start and deleteCount
// are undefined, array.splice will not modify the array (as expected)
}else{ret=array.splice(start,deleteCount,...items)}// At the end, check whether any items were passed in (e.g. insertions)
// or if the return array contains items (e.g. deletions).
// Only notify if items were added or deleted.
if(items.length||ret.length){notifySplice(this,array,info.path,start,items.length,ret)}return ret}/**
       * Removes an item from the beginning of array at the path specified.
       *
       * The arguments after `path` and return value match that of
       * `Array.prototype.pop`.
       *
       * This method notifies other paths to the same array that a
       * splice occurred to the array.
       *
       * @override
       * @param {string | !Array<string|number>} path Path to array.
       * @return {*} Item that was removed.
       * @public
       */shift(path){let info={path:""},array=/** @type {Array} */get(this,path,info),hadLength=!!array.length,ret=array.shift();if(hadLength){notifySplice(this,array,info.path,0,0,[ret])}return ret}/**
       * Adds items onto the beginning of the array at the path specified.
       *
       * The arguments after `path` and return value match that of
       * `Array.prototype.push`.
       *
       * This method notifies other paths to the same array that a
       * splice occurred to the array.
       *
       * @override
       * @param {string | !Array<string|number>} path Path to array.
       * @param {...*} items Items to insert info array
       * @return {number} New length of the array.
       * @public
       */unshift(path,...items){let info={path:""},array=/** @type {Array} */get(this,path,info),ret=array.unshift(...items);if(items.length){notifySplice(this,array,info.path,0,items.length,[])}return ret}/**
       * Notify that a path has changed.
       *
       * Example:
       *
       *     this.item.user.name = 'Bob';
       *     this.notifyPath('item.user.name');
       *
       * @override
       * @param {string} path Path that should be notified.
       * @param {*=} value Value at the path (optional).
       * @return {void}
       * @public
       */notifyPath(path,value){/** @type {string} */let propPath;if(1==arguments.length){// Get value if not supplied
let info={path:""};value=get(this,path,info);propPath=info.path}else if(Array.isArray(path)){// Normalize path if needed
propPath=normalize(path)}else{propPath=/** @type{string} */path}if(this._setPendingPropertyOrPath(propPath,value,!0,!0)){this._invalidateProperties()}}/**
       * Equivalent to static `createReadOnlyProperty` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * @override
       * @param {string} property Property name
       * @param {boolean=} protectedSetter Creates a custom protected setter
       *   when `true`.
       * @return {void}
       * @protected
       */_createReadOnlyProperty(property,protectedSetter){this._addPropertyEffect(property,TYPES.READ_ONLY);if(protectedSetter){this["_set"+upper(property)]=/** @this {PropertyEffects} */function(value){this._setProperty(property,value)}}}/**
       * Equivalent to static `createPropertyObserver` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * @override
       * @param {string} property Property name
       * @param {string|function(*,*)} method Function or name of observer method
       *     to call
       * @param {boolean=} dynamicFn Whether the method name should be included as
       *   a dependency to the effect.
       * @return {void}
       * @protected
       */_createPropertyObserver(property,method,dynamicFn){let info={property,method,dynamicFn:!!dynamicFn};this._addPropertyEffect(property,TYPES.OBSERVE,{fn:runObserverEffect,info,trigger:{name:property}});if(dynamicFn){this._addPropertyEffect(/** @type {string} */method,TYPES.OBSERVE,{fn:runObserverEffect,info,trigger:{name:method}})}}/**
       * Equivalent to static `createMethodObserver` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * @override
       * @param {string} expression Method expression
       * @param {boolean|Object=} dynamicFn Boolean or object map indicating
       *   whether method names should be included as a dependency to the effect.
       * @return {void}
       * @protected
       */_createMethodObserver(expression,dynamicFn){let sig=parseMethod(expression);if(!sig){throw new Error("Malformed observer expression '"+expression+"'")}createMethodEffect(this,sig,TYPES.OBSERVE,runMethodEffect,null,dynamicFn)}/**
       * Equivalent to static `createNotifyingProperty` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * @override
       * @param {string} property Property name
       * @return {void}
       * @protected
       */_createNotifyingProperty(property){this._addPropertyEffect(property,TYPES.NOTIFY,{fn:runNotifyEffect,info:{eventName:camelToDashCase(property)+"-changed",property:property}})}/**
       * Equivalent to static `createReflectedProperty` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * @override
       * @param {string} property Property name
       * @return {void}
       * @protected
       * @suppress {missingProperties} go/missingfnprops
       */_createReflectedProperty(property){let attr=this.constructor.attributeNameForProperty(property);if("-"===attr[0]){console.warn("Property "+property+" cannot be reflected to attribute "+attr+" because \"-\" is not a valid starting attribute name. Use a lowercase first letter for the property instead.")}else{this._addPropertyEffect(property,TYPES.REFLECT,{fn:runReflectEffect,info:{attrName:attr}})}}/**
       * Equivalent to static `createComputedProperty` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * @override
       * @param {string} property Name of computed property to set
       * @param {string} expression Method expression
       * @param {boolean|Object=} dynamicFn Boolean or object map indicating
       *   whether method names should be included as a dependency to the effect.
       * @return {void}
       * @protected
       */_createComputedProperty(property,expression,dynamicFn){let sig=parseMethod(expression);if(!sig){throw new Error("Malformed computed expression '"+expression+"'")}const info=createMethodEffect(this,sig,TYPES.COMPUTE,runComputedEffect,property,dynamicFn);// Effects are normally stored as map of dependency->effect, but for
// ordered computation, we also need tree of computedProp->dependencies
ensureOwnEffectMap(this,COMPUTE_INFO)[property]=info}/**
       * Gather the argument values for a method specified in the provided array
       * of argument metadata.
       *
       * The `path` and `value` arguments are used to fill in wildcard descriptor
       * when the method is being called as a result of a path notification.
       *
       * @param {!Array<!MethodArg>} args Array of argument metadata
       * @param {string} path Property/path name that triggered the method effect
       * @param {Object} props Bag of current property changes
       * @return {!Array<*>} Array of argument values
       * @private
       */_marshalArgs(args,path,props){const data=this.__data,values=[];for(let i=0,l=args.length;i<l;i++){let{name,structured,wildcard,value,literal}=args[i];if(!literal){if(wildcard){const matches=isDescendant(name,path),pathValue=getArgValue(data,props,matches?path:name);value={path:matches?path:name,value:pathValue,base:matches?get(data,name):pathValue}}else{value=structured?getArgValue(data,props,name):data[name]}}// When the `legacyUndefined` flag is enabled, pass a no-op value
// so that the observer, computed property, or compound binding is aborted.
if(legacyUndefined&&!this._overrideLegacyUndefined&&value===void 0&&1<args.length){return NOOP}values[i]=value}return values}// -- static class methods ------------
/**
     * Ensures an accessor exists for the specified property, and adds
     * to a list of "property effects" that will run when the accessor for
     * the specified property is set.  Effects are grouped by "type", which
     * roughly corresponds to a phase in effect processing.  The effect
     * metadata should be in the following form:
     *
     *     {
     *       fn: effectFunction, // Reference to function to call to perform effect
     *       info: { ... }       // Effect metadata passed to function
     *       trigger: {          // Optional triggering metadata; if not provided
     *         name: string      // the property is treated as a wildcard
     *         structured: boolean
     *         wildcard: boolean
     *       }
     *     }
     *
     * Effects are called from `_propertiesChanged` in the following order by
     * type:
     *
     * 1. COMPUTE
     * 2. PROPAGATE
     * 3. REFLECT
     * 4. OBSERVE
     * 5. NOTIFY
     *
     * Effect functions are called with the following signature:
     *
     *     effectFunction(inst, path, props, oldProps, info, hasPaths)
     *
     * @param {string} property Property that should trigger the effect
     * @param {string} type Effect type, from this.PROPERTY_EFFECT_TYPES
     * @param {Object=} effect Effect metadata object
     * @return {void}
     * @protected
     * @nocollapse
     */static addPropertyEffect(property,type,effect){this.prototype._addPropertyEffect(property,type,effect)}/**
       * Creates a single-property observer for the given property.
       *
       * @param {string} property Property name
       * @param {string|function(*,*)} method Function or name of observer method to call
       * @param {boolean=} dynamicFn Whether the method name should be included as
       *   a dependency to the effect.
       * @return {void}
       * @protected
       * @nocollapse
       */static createPropertyObserver(property,method,dynamicFn){this.prototype._createPropertyObserver(property,method,dynamicFn)}/**
       * Creates a multi-property "method observer" based on the provided
       * expression, which should be a string in the form of a normal JavaScript
       * function signature: `'methodName(arg1, [..., argn])'`.  Each argument
       * should correspond to a property or path in the context of this
       * prototype (or instance), or may be a literal string or number.
       *
       * @param {string} expression Method expression
       * @param {boolean|Object=} dynamicFn Boolean or object map indicating
       * @return {void}
       *   whether method names should be included as a dependency to the effect.
       * @protected
       * @nocollapse
       */static createMethodObserver(expression,dynamicFn){this.prototype._createMethodObserver(expression,dynamicFn)}/**
       * Causes the setter for the given property to dispatch `<property>-changed`
       * events to notify of changes to the property.
       *
       * @param {string} property Property name
       * @return {void}
       * @protected
       * @nocollapse
       */static createNotifyingProperty(property){this.prototype._createNotifyingProperty(property)}/**
       * Creates a read-only accessor for the given property.
       *
       * To set the property, use the protected `_setProperty` API.
       * To create a custom protected setter (e.g. `_setMyProp()` for
       * property `myProp`), pass `true` for `protectedSetter`.
       *
       * Note, if the property will have other property effects, this method
       * should be called first, before adding other effects.
       *
       * @param {string} property Property name
       * @param {boolean=} protectedSetter Creates a custom protected setter
       *   when `true`.
       * @return {void}
       * @protected
       * @nocollapse
       */static createReadOnlyProperty(property,protectedSetter){this.prototype._createReadOnlyProperty(property,protectedSetter)}/**
       * Causes the setter for the given property to reflect the property value
       * to a (dash-cased) attribute of the same name.
       *
       * @param {string} property Property name
       * @return {void}
       * @protected
       * @nocollapse
       */static createReflectedProperty(property){this.prototype._createReflectedProperty(property)}/**
       * Creates a computed property whose value is set to the result of the
       * method described by the given `expression` each time one or more
       * arguments to the method changes.  The expression should be a string
       * in the form of a normal JavaScript function signature:
       * `'methodName(arg1, [..., argn])'`
       *
       * @param {string} property Name of computed property to set
       * @param {string} expression Method expression
       * @param {boolean|Object=} dynamicFn Boolean or object map indicating whether
       *   method names should be included as a dependency to the effect.
       * @return {void}
       * @protected
       * @nocollapse
       */static createComputedProperty(property,expression,dynamicFn){this.prototype._createComputedProperty(property,expression,dynamicFn)}/**
       * Parses the provided template to ensure binding effects are created
       * for them, and then ensures property accessors are created for any
       * dependent properties in the template.  Binding effects for bound
       * templates are stored in a linked list on the instance so that
       * templates can be efficiently stamped and unstamped.
       *
       * @param {!HTMLTemplateElement} template Template containing binding
       *   bindings
       * @return {!TemplateInfo} Template metadata object
       * @protected
       * @nocollapse
       */static bindTemplate(template){return this.prototype._bindTemplate(template)}// -- binding ----------------------------------------------
/*
     * Overview of binding flow:
     *
     * During finalization (`instanceBinding==false`, `wasPreBound==false`):
     *  `_bindTemplate(t, false)` called directly during finalization - parses
     *  the template (for the first time), and then assigns that _prototypical_
     *  template info to `__preboundTemplateInfo` _on the prototype_; note in
     *  this case `wasPreBound` is false; this is the first time we're binding
     *  it, thus we create accessors.
     *
     * During first stamping (`instanceBinding==true`, `wasPreBound==true`):
     *   `_stampTemplate` calls `_bindTemplate(t, true)`: the `templateInfo`
     *   returned matches the prebound one, and so this is `wasPreBound == true`
     *   state; thus we _skip_ creating accessors, but _do_ create an instance
     *   of the template info to serve as the start of our linked list (needs to
     *   be an instance, not the prototypical one, so that we can add `nodeList`
     *   to it to contain the `nodeInfo`-ordered list of instance nodes for
     *   bindings, and so we can chain runtime-stamped template infos off of
     *   it). At this point, the call to `_stampTemplate` calls
     *   `applyTemplateInfo` for each nested `<template>` found during parsing
     *   to hand prototypical `_templateInfo` to them; we also pass the _parent_
     *   `templateInfo` to the `<template>` so that we have the instance-time
     *   parent to link the `templateInfo` under in the case it was
     *   runtime-stamped.
     *
     * During subsequent runtime stamping (`instanceBinding==true`,
     *   `wasPreBound==false`): `_stampTemplate` calls `_bindTemplate(t, true)`
     *   - here `templateInfo` is guaranteed to _not_ match the prebound one,
     *   because it was either a different template altogether, or even if it
     *   was the same template, the step above created a instance of the info;
     *   in this case `wasPreBound == false`, so we _do_ create accessors, _and_
     *   link a instance into the linked list.
     */ /**
         * Equivalent to static `bindTemplate` API but can be called on an instance
         * to add effects at runtime.  See that method for full API docs.
         *
         * This method may be called on the prototype (for prototypical template
         * binding, to avoid creating accessors every instance) once per prototype,
         * and will be called with `runtimeBinding: true` by `_stampTemplate` to
         * create and link an instance of the template metadata associated with a
         * particular stamping.
         *
         * @override
         * @param {!HTMLTemplateElement} template Template containing binding
         * bindings
         * @param {boolean=} instanceBinding When false (default), performs
         * "prototypical" binding of the template and overwrites any previously
         * bound template for the class. When true (as passed from
         * `_stampTemplate`), the template info is instanced and linked into the
         * list of bound templates.
         * @return {!TemplateInfo} Template metadata object; for `runtimeBinding`,
         * this is an instance of the prototypical template info
         * @protected
         * @suppress {missingProperties} go/missingfnprops
         */_bindTemplate(template,instanceBinding){let templateInfo=this.constructor._parseTemplate(template),wasPreBound=this.__preBoundTemplateInfo==templateInfo;// Optimization: since this is called twice for proto-bound templates,
// don't attempt to recreate accessors if this template was pre-bound
if(!wasPreBound){for(let prop in templateInfo.propertyEffects){this._createPropertyAccessor(prop)}}if(instanceBinding){// For instance-time binding, create instance of template metadata
// and link into tree of templates if necessary
templateInfo=/** @type {!TemplateInfo} */Object.create(templateInfo);templateInfo.wasPreBound=wasPreBound;if(!this.__templateInfo){// Set the info to the root of the tree
this.__templateInfo=templateInfo}else{// Append this template info onto the end of its parent template's
// list, which will determine the tree structure via which property
// effects are run; if this template was not nested in another
// template, use the root template (the first stamped one) as the
// parent. Note, `parent` is the `templateInfo` instance for this
// template's parent (containing) template, which was set up in
// `applyTemplateInfo`.  While a given template's `parent` is set
// apriori, it is only added to the parent's child list at the point
// that it is being bound, since a template may or may not ever be
// stamped, and may be stamped more than once (in which case instances
// of the template info will be in the tree under its parent more than
// once).
const parent=template._parentTemplateInfo||this.__templateInfo,previous=parent.lastChild;templateInfo.parent=parent;parent.lastChild=templateInfo;templateInfo.previousSibling=previous;if(previous){previous.nextSibling=templateInfo}else{parent.firstChild=templateInfo}}}else{this.__preBoundTemplateInfo=templateInfo}return templateInfo}/**
       * Adds a property effect to the given template metadata, which is run
       * at the "propagate" stage of `_propertiesChanged` when the template
       * has been bound to the element via `_bindTemplate`.
       *
       * The `effect` object should match the format in `_addPropertyEffect`.
       *
       * @param {Object} templateInfo Template metadata to add effect to
       * @param {string} prop Property that should trigger the effect
       * @param {Object=} effect Effect metadata object
       * @return {void}
       * @protected
       * @nocollapse
       */static _addTemplatePropertyEffect(templateInfo,prop,effect){let hostProps=templateInfo.hostProps=templateInfo.hostProps||{};hostProps[prop]=!0;let effects=templateInfo.propertyEffects=templateInfo.propertyEffects||{},propEffects=effects[prop]=effects[prop]||[];propEffects.push(effect)}/**
       * Stamps the provided template and performs instance-time setup for
       * Polymer template features, including data bindings, declarative event
       * listeners, and the `this.$` map of `id`'s to nodes.  A document fragment
       * is returned containing the stamped DOM, ready for insertion into the
       * DOM.
       *
       * This method may be called more than once; however note that due to
       * `shadycss` polyfill limitations, only styles from templates prepared
       * using `ShadyCSS.prepareTemplate` will be correctly polyfilled (scoped
       * to the shadow root and support CSS custom properties), and note that
       * `ShadyCSS.prepareTemplate` may only be called once per element. As such,
       * any styles required by in runtime-stamped templates must be included
       * in the main element template.
       *
       * @param {!HTMLTemplateElement} template Template to stamp
       * @param {TemplateInfo=} templateInfo Optional bound template info associated
       *   with the template to be stamped; if omitted the template will be
       *   automatically bound.
       * @return {!StampedTemplate} Cloned template content
       * @override
       * @protected
       */_stampTemplate(template,templateInfo){templateInfo=templateInfo||/** @type {!TemplateInfo} */this._bindTemplate(template,!0);// Ensures that created dom is `_enqueueClient`'d to this element so
// that it can be flushed on next call to `_flushProperties`
hostStack.push(this);let dom=super._stampTemplate(template,templateInfo);hostStack.pop();// Add template-instance-specific data to instanced templateInfo
templateInfo.nodeList=dom.nodeList;// Capture child nodes to allow unstamping of non-prototypical templates
if(!templateInfo.wasPreBound){let nodes=templateInfo.childNodes=[];for(let n=dom.firstChild;n;n=n.nextSibling){nodes.push(n)}}dom.templateInfo=templateInfo;// Setup compound storage, 2-way listeners, and dataHost for bindings
setupBindings(this,templateInfo);// Flush properties into template nodes; the check on `__dataClientsReady`
// ensures we don't needlessly run effects for an element's initial
// prototypical template stamping since they will happen as a part of the
// first call to `_propertiesChanged`. This flag is set to true
// after running the initial propagate effects, and immediately before
// flushing clients. Since downstream clients could cause stamping on
// this host (e.g. a fastDomIf `dom-if` being forced to render
// synchronously), this flag ensures effects for runtime-stamped templates
// are run at this point during the initial element boot-up.
if(this.__dataClientsReady){this._runEffectsForTemplate(templateInfo,this.__data,null,!1);this._flushClients()}return dom}/**
       * Removes and unbinds the nodes previously contained in the provided
       * DocumentFragment returned from `_stampTemplate`.
       *
       * @override
       * @param {!StampedTemplate} dom DocumentFragment previously returned
       *   from `_stampTemplate` associated with the nodes to be removed
       * @return {void}
       * @protected
       */_removeBoundDom(dom){// Unlink template info; Note that while the child is unlinked from its
// parent list, a template's `parent` reference is never removed, since
// this is is determined by the tree structure and applied at
// `applyTemplateInfo` time.
const templateInfo=dom.templateInfo,{previousSibling,nextSibling,parent}=templateInfo;if(previousSibling){previousSibling.nextSibling=nextSibling}else if(parent){parent.firstChild=nextSibling}if(nextSibling){nextSibling.previousSibling=previousSibling}else if(parent){parent.lastChild=previousSibling}templateInfo.nextSibling=templateInfo.previousSibling=null;// Remove stamped nodes
let nodes=templateInfo.childNodes;for(let i=0,node;i<nodes.length;i++){node=nodes[i];wrap(wrap(node).parentNode).removeChild(node)}}/**
       * Overrides default `TemplateStamp` implementation to add support for
       * parsing bindings from `TextNode`'s' `textContent`.  A `bindings`
       * array is added to `nodeInfo` and populated with binding metadata
       * with information capturing the binding target, and a `parts` array
       * with one or more metadata objects capturing the source(s) of the
       * binding.
       *
       * @param {Node} node Node to parse
       * @param {TemplateInfo} templateInfo Template metadata for current template
       * @param {NodeInfo} nodeInfo Node metadata for current template node
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       * @protected
       * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
       * @nocollapse
       */static _parseTemplateNode(node,templateInfo,nodeInfo){// TODO(https://github.com/google/closure-compiler/issues/3240):
//     Change back to just super.methodCall()
let noted=propertyEffectsBase._parseTemplateNode.call(this,node,templateInfo,nodeInfo);if(node.nodeType===Node.TEXT_NODE){let parts=this._parseBindings(node.textContent,templateInfo);if(parts){// Initialize the textContent with any literal parts
// NOTE: default to a space here so the textNode remains; some browsers
// (IE) omit an empty textNode following cloneNode/importNode.
node.textContent=literalFromParts(parts)||" ";addBinding(this,templateInfo,nodeInfo,"text","textContent",parts);noted=!0}}return noted}/**
       * Overrides default `TemplateStamp` implementation to add support for
       * parsing bindings from attributes.  A `bindings`
       * array is added to `nodeInfo` and populated with binding metadata
       * with information capturing the binding target, and a `parts` array
       * with one or more metadata objects capturing the source(s) of the
       * binding.
       *
       * @param {Element} node Node to parse
       * @param {TemplateInfo} templateInfo Template metadata for current template
       * @param {NodeInfo} nodeInfo Node metadata for current template node
       * @param {string} name Attribute name
       * @param {string} value Attribute value
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       * @protected
       * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
       * @nocollapse
       */static _parseTemplateNodeAttribute(node,templateInfo,nodeInfo,name,value){let parts=this._parseBindings(value,templateInfo);if(parts){// Attribute or property
let origName=name,kind="property";// The only way we see a capital letter here is if the attr has
// a capital letter in it per spec. In this case, to make sure
// this binding works, we go ahead and make the binding to the attribute.
if(capitalAttributeRegex.test(name)){kind="attribute"}else if("$"==name[name.length-1]){name=name.slice(0,-1);kind="attribute"}// Initialize attribute bindings with any literal parts
let literal=literalFromParts(parts);if(literal&&"attribute"==kind){// Ensure a ShadyCSS template scoped style is not removed
// when a class$ binding's initial literal value is set.
if("class"==name&&node.hasAttribute("class")){literal+=" "+node.getAttribute(name)}node.setAttribute(name,literal)}// support disable-upgrade
if("attribute"==kind&&"disable-upgrade$"==origName){node.setAttribute(name,"")}// Clear attribute before removing, since IE won't allow removing
// `value` attribute if it previously had a value (can't
// unconditionally set '' before removing since attributes with `$`
// can't be set using setAttribute)
if("input"===node.localName&&"value"===origName){node.setAttribute(origName,"")}// Remove annotation
node.removeAttribute(origName);// Case hackery: attributes are lower-case, but bind targets
// (properties) are case sensitive. Gambit is to map dash-case to
// camel-case: `foo-bar` becomes `fooBar`.
// Attribute bindings are excepted.
if("property"===kind){name=dashToCamelCase(name)}addBinding(this,templateInfo,nodeInfo,kind,name,parts,literal);return!0}else{// TODO(https://github.com/google/closure-compiler/issues/3240):
//     Change back to just super.methodCall()
return propertyEffectsBase._parseTemplateNodeAttribute.call(this,node,templateInfo,nodeInfo,name,value)}}/**
       * Overrides default `TemplateStamp` implementation to add support for
       * binding the properties that a nested template depends on to the template
       * as `_host_<property>`.
       *
       * @param {Node} node Node to parse
       * @param {TemplateInfo} templateInfo Template metadata for current template
       * @param {NodeInfo} nodeInfo Node metadata for current template node
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       * @protected
       * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
       * @nocollapse
       */static _parseTemplateNestedTemplate(node,templateInfo,nodeInfo){// TODO(https://github.com/google/closure-compiler/issues/3240):
//     Change back to just super.methodCall()
let noted=propertyEffectsBase._parseTemplateNestedTemplate.call(this,node,templateInfo,nodeInfo);const parent=node.parentNode,nestedTemplateInfo=nodeInfo.templateInfo,isDomIf="dom-if"===parent.localName,isDomRepeat="dom-repeat"===parent.localName;// Remove nested template and redirect its host bindings & templateInfo
// onto the parent (dom-if/repeat element)'s nodeInfo
if(removeNestedTemplates&&(isDomIf||isDomRepeat)){parent.removeChild(node);// Use the parent's nodeInfo (for the dom-if/repeat) to record the
// templateInfo, and use that for any host property bindings below
nodeInfo=nodeInfo.parentInfo;nodeInfo.templateInfo=nestedTemplateInfo;// Ensure the parent dom-if/repeat is noted since it now may have host
// bindings; it may not have been if it did not have its own bindings
nodeInfo.noted=!0;noted=!1}// Merge host props into outer template and add bindings
let hostProps=nestedTemplateInfo.hostProps;if(fastDomIf&&isDomIf){// `fastDomIf` mode uses runtime-template stamping to add accessors/
// effects to properties used in its template; as such we don't need to
// tax the host element with `_host_` bindings for the `dom-if`.
// However, in the event it is nested in a `dom-repeat`, it is still
// important that its host properties are added to the
// TemplateInstance's `hostProps` so that they are forwarded to the
// TemplateInstance.
if(hostProps){templateInfo.hostProps=Object.assign(templateInfo.hostProps||{},hostProps);// Ensure the dom-if is noted so that it has a __dataHost, since
// `fastDomIf` uses the host for runtime template stamping; note this
// was already ensured above in the `removeNestedTemplates` case
if(!removeNestedTemplates){nodeInfo.parentInfo.noted=!0}}}else{let mode="{";for(let source in hostProps){let parts=[{mode,source,dependencies:[source],hostProp:!0}];addBinding(this,templateInfo,nodeInfo,"property","_host_"+source,parts)}}return noted}/**
       * Called to parse text in a template (either attribute values or
       * textContent) into binding metadata.
       *
       * Any overrides of this method should return an array of binding part
       * metadata  representing one or more bindings found in the provided text
       * and any "literal" text in between.  Any non-literal parts will be passed
       * to `_evaluateBinding` when any dependencies change.  The only required
       * fields of each "part" in the returned array are as follows:
       *
       * - `dependencies` - Array containing trigger metadata for each property
       *   that should trigger the binding to update
       * - `literal` - String containing text if the part represents a literal;
       *   in this case no `dependencies` are needed
       *
       * Additional metadata for use by `_evaluateBinding` may be provided in
       * each part object as needed.
       *
       * The default implementation handles the following types of bindings
       * (one or more may be intermixed with literal strings):
       * - Property binding: `[[prop]]`
       * - Path binding: `[[object.prop]]`
       * - Negated property or path bindings: `[[!prop]]` or `[[!object.prop]]`
       * - Two-way property or path bindings (supports negation):
       *   `{{prop}}`, `{{object.prop}}`, `{{!prop}}` or `{{!object.prop}}`
       * - Inline computed method (supports negation):
       *   `[[compute(a, 'literal', b)]]`, `[[!compute(a, 'literal', b)]]`
       *
       * The default implementation uses a regular expression for best
       * performance. However, the regular expression uses a white-list of
       * allowed characters in a data-binding, which causes problems for
       * data-bindings that do use characters not in this white-list.
       *
       * Instead of updating the white-list with all allowed characters,
       * there is a StrictBindingParser (see lib/mixins/strict-binding-parser)
       * that uses a state machine instead. This state machine is able to handle
       * all characters. However, it is slightly less performant, therefore we
       * extracted it into a separate optional mixin.
       *
       * @param {string} text Text to parse from attribute or textContent
       * @param {Object} templateInfo Current template metadata
       * @return {Array<!BindingPart>} Array of binding part metadata
       * @protected
       * @nocollapse
       */static _parseBindings(text,templateInfo){let parts=[],lastIndex=0,m;// Example: "literal1{{prop}}literal2[[!compute(foo,bar)]]final"
// Regex matches:
//        Iteration 1:  Iteration 2:
// m[1]: '{{'          '[['
// m[2]: ''            '!'
// m[3]: 'prop'        'compute(foo,bar)'
while(null!==(m=bindingRegex.exec(text))){// Add literal part
if(m.index>lastIndex){parts.push({literal:text.slice(lastIndex,m.index)})}// Add binding part
let mode=m[1][0],negate=!!m[2],source=m[3].trim(),customEvent=!1,notifyEvent="",colon=-1;if("{"==mode&&0<(colon=source.indexOf("::"))){notifyEvent=source.substring(colon+2);source=source.substring(0,colon);customEvent=!0}let signature=parseMethod(source),dependencies=[];if(signature){// Inline computed function
let{args,methodName}=signature;for(let i=0,arg;i<args.length;i++){arg=args[i];if(!arg.literal){dependencies.push(arg)}}let dynamicFns=templateInfo.dynamicFns;if(dynamicFns&&dynamicFns[methodName]||signature.static){dependencies.push(methodName);signature.dynamicFn=!0}}else{// Property or path
dependencies.push(source)}parts.push({source,mode,negate,customEvent,signature,dependencies,event:notifyEvent});lastIndex=bindingRegex.lastIndex}// Add a final literal part
if(lastIndex&&lastIndex<text.length){let literal=text.substring(lastIndex);if(literal){parts.push({literal:literal})}}if(parts.length){return parts}else{return null}}/**
       * Called to evaluate a previously parsed binding part based on a set of
       * one or more changed dependencies.
       *
       * @param {!Polymer_PropertyEffects} inst Element that should be used as
       *     scope for binding dependencies
       * @param {BindingPart} part Binding part metadata
       * @param {string} path Property/path that triggered this effect
       * @param {Object} props Bag of current property changes
       * @param {Object} oldProps Bag of previous values for changed properties
       * @param {boolean} hasPaths True with `props` contains one or more paths
       * @return {*} Value the binding part evaluated to
       * @protected
       * @nocollapse
       */static _evaluateBinding(inst,part,path,props,oldProps,hasPaths){let value;if(part.signature){value=runMethodEffect(inst,path,props,oldProps,part.signature)}else if(path!=part.source){value=get(inst,part.source)}else{if(hasPaths&&isPath(path)){value=get(inst,path)}else{value=inst.__data[path]}}if(part.negate){value=!value}return value}}return PropertyEffects});/**
     * Stack for enqueuing client dom created by a host element.
     *
     * By default elements are flushed via `_flushProperties` when
     * `connectedCallback` is called. Elements attach their client dom to
     * themselves at `ready` time which results from this first flush.
     * This provides an ordering guarantee that the client dom an element
     * creates is flushed before the element itself (i.e. client `ready`
     * fires before host `ready`).
     *
     * However, if `_flushProperties` is called *before* an element is connected,
     * as for example `Templatize` does, this ordering guarantee cannot be
     * satisfied because no elements are connected. (Note: Bound elements that
     * receive data do become enqueued clients and are properly ordered but
     * unbound elements are not.)
     *
     * To maintain the desired "client before host" ordering guarantee for this
     * case we rely on the "host stack. Client nodes registers themselves with
     * the creating host element when created. This ensures that all client dom
     * is readied in the proper order, maintaining the desired guarantee.
     *
     * @private
     */_exports.PropertyEffects=PropertyEffects;const hostStack=[];var propertyEffects={PropertyEffects:PropertyEffects};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */ /**
       * Total number of Polymer element instances created.
       * @type {number}
       */_exports.$propertyEffects=propertyEffects;let instanceCount=0;_exports.instanceCount=instanceCount;function incrementInstanceCount(){_exports.instanceCount=instanceCount=instanceCount+1}/**
   * Array of Polymer element classes that have been finalized.
   * @type {!Array<!PolymerElementConstructor>}
   */const registrations=[];/**
                                  * @param {!PolymerElementConstructor} prototype Element prototype to log
                                  * @private
                                  */_exports.registrations=registrations;function _regLog(prototype){console.log("["+/** @type {?} */prototype.is+"]: registered")}/**
   * Registers a class prototype for telemetry purposes.
   * @param {!PolymerElementConstructor} prototype Element prototype to register
   * @protected
   */function register(prototype){registrations.push(prototype)}/**
   * Logs all elements registered with an `is` to the console.
   * @public
   */function dumpRegistrations(){registrations.forEach(_regLog)}var telemetry={get instanceCount(){return instanceCount},incrementInstanceCount:incrementInstanceCount,registrations:registrations,register:register,dumpRegistrations:dumpRegistrations};_exports.$telemetry=telemetry;function normalizeProperties(props){const output={};for(let p in props){const o=props[p];output[p]="function"===typeof o?{type:o}:o}return output}/**
   * Mixin that provides a minimal starting point to using the PropertiesChanged
   * mixin by providing a mechanism to declare properties in a static
   * getter (e.g. static get properties() { return { foo: String } }). Changes
   * are reported via the `_propertiesChanged` method.
   *
   * This mixin provides no specific support for rendering. Users are expected
   * to create a ShadowRoot and put content into it and update it in whatever
   * way makes sense. This can be done in reaction to properties changing by
   * implementing `_propertiesChanged`.
   *
   * @mixinFunction
   * @polymer
   * @appliesMixin PropertiesChanged
   * @summary Mixin that provides a minimal starting point for using
   * the PropertiesChanged mixin by providing a declarative `properties` object.
   * @template T
   * @param {function(new:T)} superClass Class to apply mixin to.
   * @return {function(new:T)} superClass with mixin applied.
   */const PropertiesMixin=dedupingMixin(superClass=>{/**
   * @constructor
   * @implements {Polymer_PropertiesChanged}
   * @private
   */const base=PropertiesChanged(superClass);/**
                                                  * Returns the super class constructor for the given class, if it is an
                                                  * instance of the PropertiesMixin.
                                                  *
                                                  * @param {!PropertiesMixinConstructor} constructor PropertiesMixin constructor
                                                  * @return {?PropertiesMixinConstructor} Super class constructor
                                                  */function superPropertiesClass(constructor){const superCtor=Object.getPrototypeOf(constructor);// Note, the `PropertiesMixin` class below only refers to the class
// generated by this call to the mixin; the instanceof test only works
// because the mixin is deduped and guaranteed only to apply once, hence
// all constructors in a proto chain will see the same `PropertiesMixin`
return superCtor.prototype instanceof PropertiesMixin?/** @type {!PropertiesMixinConstructor} */superCtor:null}/**
     * Returns a memoized version of the `properties` object for the
     * given class. Properties not in object format are converted to at
     * least {type}.
     *
     * @param {PropertiesMixinConstructor} constructor PropertiesMixin constructor
     * @return {Object} Memoized properties object
     */function ownProperties(constructor){if(!constructor.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",constructor))){let props=null;if(constructor.hasOwnProperty(JSCompiler_renameProperty("properties",constructor))){const properties=constructor.properties;if(properties){props=normalizeProperties(properties)}}constructor.__ownProperties=props}return constructor.__ownProperties}/**
     * @polymer
     * @mixinClass
     * @extends {base}
     * @implements {Polymer_PropertiesMixin}
     * @unrestricted
     */class PropertiesMixin extends base{/**
     * Implements standard custom elements getter to observes the attributes
     * listed in `properties`.
     * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
     * @nocollapse
     */static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){register(this.prototype);const props=this._properties;this.__observedAttributes=props?Object.keys(props).map(p=>this.prototype._addPropertyToAttributeMap(p)):[]}return this.__observedAttributes}/**
       * Finalizes an element definition, including ensuring any super classes
       * are also finalized. This includes ensuring property
       * accessors exist on the element prototype. This method calls
       * `_finalizeClass` to finalize each constructor in the prototype chain.
       * @return {void}
       * @nocollapse
       */static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const superCtor=superPropertiesClass(/** @type {!PropertiesMixinConstructor} */this);if(superCtor){superCtor.finalize()}this.__finalized=!0;this._finalizeClass()}}/**
       * Finalize an element class. This includes ensuring property
       * accessors exist on the element prototype. This method is called by
       * `finalize` and finalizes the class constructor.
       *
       * @protected
       * @nocollapse
       */static _finalizeClass(){const props=ownProperties(/** @type {!PropertiesMixinConstructor} */this);if(props){/** @type {?} */this.createProperties(props)}}/**
       * Returns a memoized version of all properties, including those inherited
       * from super classes. Properties not in object format are converted to
       * at least {type}.
       *
       * @return {Object} Object containing properties for this class
       * @protected
       * @nocollapse
       */static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const superCtor=superPropertiesClass(/** @type {!PropertiesMixinConstructor} */this);this.__properties=Object.assign({},superCtor&&superCtor._properties,ownProperties(/** @type {PropertiesMixinConstructor} */this))}return this.__properties}/**
       * Overrides `PropertiesChanged` method to return type specified in the
       * static `properties` object for the given property.
       * @param {string} name Name of property
       * @return {*} Type to which to deserialize attribute
       *
       * @protected
       * @nocollapse
       */static typeForProperty(name){const info=this._properties[name];return info&&info.type}/**
       * Overrides `PropertiesChanged` method and adds a call to
       * `finalize` which lazily configures the element's property accessors.
       * @override
       * @return {void}
       */_initializeProperties(){incrementInstanceCount();this.constructor.finalize();super._initializeProperties()}/**
       * Called when the element is added to a document.
       * Calls `_enableProperties` to turn on property system from
       * `PropertiesChanged`.
       * @suppress {missingProperties} Super may or may not implement the callback
       * @return {void}
       * @override
       */connectedCallback(){if(super.connectedCallback){super.connectedCallback()}this._enableProperties()}/**
       * Called when the element is removed from a document
       * @suppress {missingProperties} Super may or may not implement the callback
       * @return {void}
       * @override
       */disconnectedCallback(){if(super.disconnectedCallback){super.disconnectedCallback()}}}return PropertiesMixin});_exports.PropertiesMixin=PropertiesMixin;var propertiesMixin={PropertiesMixin:PropertiesMixin};_exports.$propertiesMixin=propertiesMixin;const bundledImportMeta=_objectSpread({},meta,{url:new URL("../../node_modules/%40polymer/polymer/lib/mixins/element-mixin.js",meta.url).href}),version="3.4.1";_exports.version$1=_exports.version=version;const builtCSS=window.ShadyCSS&&window.ShadyCSS.cssBuild;/**
                                                                         * Element class mixin that provides the core API for Polymer's meta-programming
                                                                         * features including template stamping, data-binding, attribute deserialization,
                                                                         * and property change observation.
                                                                         *
                                                                         * Subclassers may provide the following static getters to return metadata
                                                                         * used to configure Polymer's features for the class:
                                                                         *
                                                                         * - `static get is()`: When the template is provided via a `dom-module`,
                                                                         *   users should return the `dom-module` id from a static `is` getter.  If
                                                                         *   no template is needed or the template is provided directly via the
                                                                         *   `template` getter, there is no need to define `is` for the element.
                                                                         *
                                                                         * - `static get template()`: Users may provide the template directly (as
                                                                         *   opposed to via `dom-module`) by implementing a static `template` getter.
                                                                         *   The getter must return an `HTMLTemplateElement`.
                                                                         *
                                                                         * - `static get properties()`: Should return an object describing
                                                                         *   property-related metadata used by Polymer features (key: property name
                                                                         *   value: object containing property metadata). Valid keys in per-property
                                                                         *   metadata include:
                                                                         *   - `type` (String|Number|Object|Array|...): Used by
                                                                         *     `attributeChangedCallback` to determine how string-based attributes
                                                                         *     are deserialized to JavaScript property values.
                                                                         *   - `notify` (boolean): Causes a change in the property to fire a
                                                                         *     non-bubbling event called `<property>-changed`. Elements that have
                                                                         *     enabled two-way binding to the property use this event to observe changes.
                                                                         *   - `readOnly` (boolean): Creates a getter for the property, but no setter.
                                                                         *     To set a read-only property, use the private setter method
                                                                         *     `_setProperty(property, value)`.
                                                                         *   - `observer` (string): Observer method name that will be called when
                                                                         *     the property changes. The arguments of the method are
                                                                         *     `(value, previousValue)`.
                                                                         *   - `computed` (string): String describing method and dependent properties
                                                                         *     for computing the value of this property (e.g. `'computeFoo(bar, zot)'`).
                                                                         *     Computed properties are read-only by default and can only be changed
                                                                         *     via the return value of the computing method.
                                                                         *
                                                                         * - `static get observers()`: Array of strings describing multi-property
                                                                         *   observer methods and their dependent properties (e.g.
                                                                         *   `'observeABC(a, b, c)'`).
                                                                         *
                                                                         * The base class provides default implementations for the following standard
                                                                         * custom element lifecycle callbacks; users may override these, but should
                                                                         * call the super method to ensure
                                                                         * - `constructor`: Run when the element is created or upgraded
                                                                         * - `connectedCallback`: Run each time the element is connected to the
                                                                         *   document
                                                                         * - `disconnectedCallback`: Run each time the element is disconnected from
                                                                         *   the document
                                                                         * - `attributeChangedCallback`: Run each time an attribute in
                                                                         *   `observedAttributes` is set or removed (note: this element's default
                                                                         *   `observedAttributes` implementation will automatically return an array
                                                                         *   of dash-cased attributes based on `properties`)
                                                                         *
                                                                         * @mixinFunction
                                                                         * @polymer
                                                                         * @appliesMixin PropertyEffects
                                                                         * @appliesMixin PropertiesMixin
                                                                         * @property rootPath {string} Set to the value of `rootPath`,
                                                                         *   which defaults to the main document path
                                                                         * @property importPath {string} Set to the value of the class's static
                                                                         *   `importPath` property, which defaults to the path of this element's
                                                                         *   `dom-module` (when `is` is used), but can be overridden for other
                                                                         *   import strategies.
                                                                         * @summary Element class mixin that provides the core API for Polymer's
                                                                         * meta-programming features.
                                                                         * @template T
                                                                         * @param {function(new:T)} superClass Class to apply mixin to.
                                                                         * @return {function(new:T)} superClass with mixin applied.
                                                                         */_exports.builtCSS=builtCSS;const ElementMixin=dedupingMixin(base=>{/**
   * @constructor
   * @implements {Polymer_PropertyEffects}
   * @implements {Polymer_PropertiesMixin}
   * @extends {HTMLElement}
   * @private
   */const polymerElementBase=PropertiesMixin(PropertyEffects(base));/**
                                                                         * Returns a list of properties with default values.
                                                                         * This list is created as an optimization since it is a subset of
                                                                         * the list returned from `_properties`.
                                                                         * This list is used in `_initializeProperties` to set property defaults.
                                                                         *
                                                                         * @param {PolymerElementConstructor} constructor Element class
                                                                         * @return {PolymerElementProperties} Flattened properties for this class
                                                                         *   that have default values
                                                                         * @private
                                                                         */function propertyDefaults(constructor){if(!constructor.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",constructor))){constructor.__propertyDefaults=null;let props=constructor._properties;for(let p in props){let info=props[p];if("value"in info){constructor.__propertyDefaults=constructor.__propertyDefaults||{};constructor.__propertyDefaults[p]=info}}}return constructor.__propertyDefaults}/**
     * Returns a memoized version of the `observers` array.
     * @param {PolymerElementConstructor} constructor Element class
     * @return {Array} Array containing own observers for the given class
     * @protected
     */function ownObservers(constructor){if(!constructor.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",constructor))){constructor.__ownObservers=constructor.hasOwnProperty(JSCompiler_renameProperty("observers",constructor))?/** @type {PolymerElementConstructor} */constructor.observers:null}return constructor.__ownObservers}/**
     * Creates effects for a property.
     *
     * Note, once a property has been set to
     * `readOnly`, `computed`, `reflectToAttribute`, or `notify`
     * these values may not be changed. For example, a subclass cannot
     * alter these settings. However, additional `observers` may be added
     * by subclasses.
     *
     * The info object should contain property metadata as follows:
     *
     * * `type`: {function} type to which an attribute matching the property
     * is deserialized. Note the property is camel-cased from a dash-cased
     * attribute. For example, 'foo-bar' attribute is deserialized to a
     * property named 'fooBar'.
     *
     * * `readOnly`: {boolean} creates a readOnly property and
     * makes a private setter for the private of the form '_setFoo' for a
     * property 'foo',
     *
     * * `computed`: {string} creates a computed property. A computed property
     * is also automatically set to `readOnly: true`. The value is calculated
     * by running a method and arguments parsed from the given string. For
     * example 'compute(foo)' will compute a given property when the
     * 'foo' property changes by executing the 'compute' method. This method
     * must return the computed value.
     *
     * * `reflectToAttribute`: {boolean} If true, the property value is reflected
     * to an attribute of the same name. Note, the attribute is dash-cased
     * so a property named 'fooBar' is reflected as 'foo-bar'.
     *
     * * `notify`: {boolean} sends a non-bubbling notification event when
     * the property changes. For example, a property named 'foo' sends an
     * event named 'foo-changed' with `event.detail` set to the value of
     * the property.
     *
     * * observer: {string} name of a method that runs when the property
     * changes. The arguments of the method are (value, previousValue).
     *
     * Note: Users may want control over modifying property
     * effects via subclassing. For example, a user might want to make a
     * reflectToAttribute property not do so in a subclass. We've chosen to
     * disable this because it leads to additional complication.
     * For example, a readOnly effect generates a special setter. If a subclass
     * disables the effect, the setter would fail unexpectedly.
     * Based on feedback, we may want to try to make effects more malleable
     * and/or provide an advanced api for manipulating them.
     *
     * @param {!PolymerElement} proto Element class prototype to add accessors
     *   and effects to
     * @param {string} name Name of the property.
     * @param {Object} info Info object from which to create property effects.
     * Supported keys:
     * @param {Object} allProps Flattened map of all properties defined in this
     *   element (including inherited properties)
     * @return {void}
     * @private
     */function createPropertyFromConfig(proto,name,info,allProps){// computed forces readOnly...
if(info.computed){info.readOnly=!0}// Note, since all computed properties are readOnly, this prevents
// adding additional computed property effects (which leads to a confusing
// setup where multiple triggers for setting a property)
// While we do have `hasComputedEffect` this is set on the property's
// dependencies rather than itself.
if(info.computed){if(proto._hasReadOnlyEffect(name)){console.warn(`Cannot redefine computed property '${name}'.`)}else{proto._createComputedProperty(name,info.computed,allProps)}}if(info.readOnly&&!proto._hasReadOnlyEffect(name)){proto._createReadOnlyProperty(name,!info.computed)}else if(!1===info.readOnly&&proto._hasReadOnlyEffect(name)){console.warn(`Cannot make readOnly property '${name}' non-readOnly.`)}if(info.reflectToAttribute&&!proto._hasReflectEffect(name)){proto._createReflectedProperty(name)}else if(!1===info.reflectToAttribute&&proto._hasReflectEffect(name)){console.warn(`Cannot make reflected property '${name}' non-reflected.`)}if(info.notify&&!proto._hasNotifyEffect(name)){proto._createNotifyingProperty(name)}else if(!1===info.notify&&proto._hasNotifyEffect(name)){console.warn(`Cannot make notify property '${name}' non-notify.`)}// always add observer
if(info.observer){proto._createPropertyObserver(name,info.observer,allProps[info.observer])}// always create the mapping from attribute back to property for deserialization.
proto._addPropertyToAttributeMap(name)}/**
     * Process all style elements in the element template. Styles with the
     * `include` attribute are processed such that any styles in
     * the associated "style modules" are included in the element template.
     * @param {PolymerElementConstructor} klass Element class
     * @param {!HTMLTemplateElement} template Template to process
     * @param {string} is Name of element
     * @param {string} baseURI Base URI for element
     * @private
     */function processElementStyles(klass,template,is,baseURI){if(!builtCSS){const templateStyles=template.content.querySelectorAll("style"),stylesWithImports=stylesFromTemplate(template),linkedStyles=stylesFromModuleImports(is),firstTemplateChild=template.content.firstElementChild;for(let idx=0,s;idx<linkedStyles.length;idx++){s=linkedStyles[idx];s.textContent=klass._processStyleText(s.textContent,baseURI);template.content.insertBefore(s,firstTemplateChild)}// keep track of the last "concrete" style in the template we have encountered
let templateStyleIndex=0;// ensure all gathered styles are actually in this template.
for(let i=0;i<stylesWithImports.length;i++){let s=stylesWithImports[i],templateStyle=templateStyles[templateStyleIndex];// if the style is not in this template, it's been "included" and
// we put a clone of it in the template before the style that included it
if(templateStyle!==s){s=s.cloneNode(!0);templateStyle.parentNode.insertBefore(s,templateStyle)}else{templateStyleIndex++}s.textContent=klass._processStyleText(s.textContent,baseURI)}}if(window.ShadyCSS){window.ShadyCSS.prepareTemplate(template,is)}// Support for `adoptedStylesheets` relies on using native Shadow DOM
// and built CSS. Built CSS is required because runtime transformation of
// `@apply` is not supported. This is because ShadyCSS relies on being able
// to update a `style` element in the element template and this is
// removed when using `adoptedStyleSheets`.
// Note, it would be more efficient to allow style includes to become
// separate stylesheets; however, because of `@apply` these are
// potentially not shareable and sharing the ones that could be shared
// would require some coordination. To keep it simple, all the includes
// and styles are collapsed into a single shareable stylesheet.
if(useAdoptedStyleSheetsWithBuiltCSS&&builtCSS&&supportsAdoptingStyleSheets$1){// Remove styles in template and make a shareable stylesheet
const styles=template.content.querySelectorAll("style");if(styles){let css="";Array.from(styles).forEach(s=>{css+=s.textContent;s.parentNode.removeChild(s)});klass._styleSheet=new CSSStyleSheet;klass._styleSheet.replaceSync(css)}}}/**
     * Look up template from dom-module for element
     *
     * @param {string} is Element name to look up
     * @return {?HTMLTemplateElement|undefined} Template found in dom module, or
     *   undefined if not found
     * @protected
     */function getTemplateFromDomModule(is){let template=null;// Under strictTemplatePolicy in 3.x+, dom-module lookup is only allowed
// when opted-in via allowTemplateFromDomModule
if(is&&(!strictTemplatePolicy||allowTemplateFromDomModule)){template=/** @type {?HTMLTemplateElement} */DomModule.import(is,"template");// Under strictTemplatePolicy, require any element with an `is`
// specified to have a dom-module
if(strictTemplatePolicy&&!template){throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${is}`)}}return template}/**
     * @polymer
     * @mixinClass
     * @unrestricted
     * @implements {Polymer_ElementMixin}
     * @extends {polymerElementBase}
     */class PolymerElement extends polymerElementBase{/**
     * Current Polymer version in Semver notation.
     * @type {string} Semver notation of the current version of Polymer.
     * @nocollapse
     */static get polymerElementVersion(){return version}/**
       * Override of PropertiesMixin _finalizeClass to create observers and
       * find the template.
       * @return {void}
       * @protected
       * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
       * @nocollapse
       */static _finalizeClass(){// TODO(https://github.com/google/closure-compiler/issues/3240):
//     Change back to just super.methodCall()
polymerElementBase._finalizeClass.call(this);const observers=ownObservers(this);if(observers){this.createObservers(observers,this._properties)}this._prepareTemplate()}/** @nocollapse */static _prepareTemplate(){// note: create "working" template that is finalized at instance time
let template=/** @type {PolymerElementConstructor} */this.template;if(template){if("string"===typeof template){console.error("template getter must return HTMLTemplateElement");template=null}else if(!legacyOptimizations){template=template.cloneNode(!0)}}/** @override */this.prototype._template=template}/**
       * Override of PropertiesChanged createProperties to create accessors
       * and property effects for all of the properties.
       * @param {!Object} props .
       * @return {void}
       * @protected
       * @nocollapse
       */static createProperties(props){for(let p in props){createPropertyFromConfig(/** @type {?} */this.prototype,p,props[p],props)}}/**
       * Creates observers for the given `observers` array.
       * Leverages `PropertyEffects` to create observers.
       * @param {Object} observers Array of observer descriptors for
       *   this class
       * @param {Object} dynamicFns Object containing keys for any properties
       *   that are functions and should trigger the effect when the function
       *   reference is changed
       * @return {void}
       * @protected
       * @nocollapse
       */static createObservers(observers,dynamicFns){const proto=this.prototype;for(let i=0;i<observers.length;i++){proto._createMethodObserver(observers[i],dynamicFns)}}/**
       * Returns the template that will be stamped into this element's shadow root.
       *
       * If a `static get is()` getter is defined, the default implementation will
       * return the first `<template>` in a `dom-module` whose `id` matches this
       * element's `is` (note that a `_template` property on the class prototype
       * takes precedence over the `dom-module` template, to maintain legacy
       * element semantics; a subclass will subsequently fall back to its super
       * class template if neither a `prototype._template` or a `dom-module` for
       * the class's `is` was found).
       *
       * Users may override this getter to return an arbitrary template
       * (in which case the `is` getter is unnecessary). The template returned
       * must be an `HTMLTemplateElement`.
       *
       * Note that when subclassing, if the super class overrode the default
       * implementation and the subclass would like to provide an alternate
       * template via a `dom-module`, it should override this getter and
       * return `DomModule.import(this.is, 'template')`.
       *
       * If a subclass would like to modify the super class template, it should
       * clone it rather than modify it in place.  If the getter does expensive
       * work such as cloning/modifying a template, it should memoize the
       * template for maximum performance:
       *
       *   let memoizedTemplate;
       *   class MySubClass extends MySuperClass {
       *     static get template() {
       *       if (!memoizedTemplate) {
       *         memoizedTemplate = super.template.cloneNode(true);
       *         let subContent = document.createElement('div');
       *         subContent.textContent = 'This came from MySubClass';
       *         memoizedTemplate.content.appendChild(subContent);
       *       }
       *       return memoizedTemplate;
       *     }
       *   }
       *
       * @return {!HTMLTemplateElement|string} Template to be stamped
       * @nocollapse
       */static get template(){// Explanation of template-related properties:
// - constructor.template (this getter): the template for the class.
//     This can come from the prototype (for legacy elements), from a
//     dom-module, or from the super class's template (or can be overridden
//     altogether by the user)
// - constructor._template: memoized version of constructor.template
// - prototype._template: working template for the element, which will be
//     parsed and modified in place. It is a cloned version of
//     constructor.template, saved in _finalizeClass(). Note that before
//     this getter is called, for legacy elements this could be from a
//     _template field on the info object passed to Polymer(), a behavior,
//     or set in registered(); once the static getter runs, a clone of it
//     will overwrite it on the prototype as the working template.
if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){const protoTemplate=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;this._template=// If user has put template on prototype (e.g. in legacy via registered
// callback or info object), prefer that first. Note that `null` is
// used as a sentinel to indicate "no template" and can be used to
// override a super template, whereas `undefined` is used as a
// sentinel to mean "fall-back to default template lookup" via
// dom-module and/or super.template.
protoTemplate!==void 0?protoTemplate:// Look in dom-module associated with this element's is
this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&getTemplateFromDomModule(/** @type {PolymerElementConstructor}*/this.is)||// Next look for superclass template (call the super impl this
// way so that `this` points to the superclass)
Object.getPrototypeOf(/** @type {PolymerElementConstructor}*/this.prototype).constructor.template}return this._template}/**
       * Set the template.
       *
       * @param {!HTMLTemplateElement|string} value Template to set.
       * @nocollapse
       */static set template(value){this._template=value}/**
       * Path matching the url from which the element was imported.
       *
       * This path is used to resolve url's in template style cssText.
       * The `importPath` property is also set on element instances and can be
       * used to create bindings relative to the import path.
       *
       * For elements defined in ES modules, users should implement
       * `static get importMeta() { return import.meta; }`, and the default
       * implementation of `importPath` will  return `import.meta.url`'s path.
       * For elements defined in HTML imports, this getter will return the path
       * to the document containing a `dom-module` element matching this
       * element's static `is` property.
       *
       * Note, this path should contain a trailing `/`.
       *
       * @return {string} The import path for this element class
       * @suppress {missingProperties}
       * @nocollapse
       */static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const meta=this.importMeta;if(meta){this._importPath=pathFromUrl(meta.url)}else{const module=DomModule.import(/** @type {PolymerElementConstructor} */this.is);this._importPath=module&&module.assetpath||Object.getPrototypeOf(/** @type {PolymerElementConstructor}*/this.prototype).constructor.importPath}}return this._importPath}constructor(){super();/** @type {HTMLTemplateElement} */this._template;/** @type {string} */this._importPath;/** @type {string} */this.rootPath;/** @type {string} */this.importPath;/** @type {StampedTemplate | HTMLElement | ShadowRoot} */this.root;/** @type {!Object<string, !Element>} */this.$}/**
       * Overrides the default `PropertyAccessors` to ensure class
       * metaprogramming related to property accessors and effects has
       * completed (calls `finalize`).
       *
       * It also initializes any property defaults provided via `value` in
       * `properties` metadata.
       *
       * @return {void}
       * @override
       * @suppress {invalidCasts,missingProperties} go/missingfnprops
       */_initializeProperties(){this.constructor.finalize();// note: finalize template when we have access to `localName` to
// avoid dependence on `is` for polyfilling styling.
this.constructor._finalizeTemplate(/** @type {!HTMLElement} */this.localName);super._initializeProperties();// set path defaults
this.rootPath=rootPath;this.importPath=this.constructor.importPath;// apply property defaults...
let p$=propertyDefaults(this.constructor);if(!p$){return}for(let p in p$){let info=p$[p];if(this._canApplyPropertyDefault(p)){let value="function"==typeof info.value?info.value.call(this):info.value;// Set via `_setProperty` if there is an accessor, to enable
// initializing readOnly property defaults
if(this._hasAccessor(p)){this._setPendingProperty(p,value,!0)}else{this[p]=value}}}}/**
       * Determines if a property dfeault can be applied. For example, this
       * prevents a default from being applied when a property that has no
       * accessor is overridden by its host before upgrade (e.g. via a binding).
       * @override
       * @param {string} property Name of the property
       * @return {boolean} Returns true if the property default can be applied.
       */_canApplyPropertyDefault(property){return!this.hasOwnProperty(property)}/**
       * Gather style text for a style element in the template.
       *
       * @param {string} cssText Text containing styling to process
       * @param {string} baseURI Base URI to rebase CSS paths against
       * @return {string} The processed CSS text
       * @protected
       * @nocollapse
       */static _processStyleText(cssText,baseURI){return resolveCss(cssText,baseURI)}/**
      * Configures an element `proto` to function with a given `template`.
      * The element name `is` and extends `ext` must be specified for ShadyCSS
      * style scoping.
      *
      * @param {string} is Tag name (or type extension name) for this element
      * @return {void}
      * @protected
      * @nocollapse
      */static _finalizeTemplate(is){/** @const {HTMLTemplateElement} */const template=this.prototype._template;if(template&&!template.__polymerFinalized){template.__polymerFinalized=!0;const importPath=this.importPath,baseURI=importPath?resolveUrl(importPath):"";// e.g. support `include="module-name"`, and ShadyCSS
processElementStyles(this,template,is,baseURI);this.prototype._bindTemplate(template)}}/**
       * Provides a default implementation of the standard Custom Elements
       * `connectedCallback`.
       *
       * The default implementation enables the property effects system and
       * flushes any pending properties, and updates shimmed CSS properties
       * when using the ShadyCSS scoping/custom properties polyfill.
       *
       * @override
       * @suppress {missingProperties, invalidCasts} Super may or may not
       *     implement the callback
       * @return {void}
       */connectedCallback(){if(window.ShadyCSS&&this._template){window.ShadyCSS.styleElement(/** @type {!HTMLElement} */this)}super.connectedCallback()}/**
       * Stamps the element template.
       *
       * @return {void}
       * @override
       */ready(){if(this._template){this.root=this._stampTemplate(this._template);this.$=this.root.$}super.ready()}/**
       * Implements `PropertyEffects`'s `_readyClients` call. Attaches
       * element dom by calling `_attachDom` with the dom stamped from the
       * element's template via `_stampTemplate`. Note that this allows
       * client dom to be attached to the element prior to any observers
       * running.
       *
       * @return {void}
       * @override
       */_readyClients(){if(this._template){this.root=this._attachDom(/** @type {StampedTemplate} */this.root)}// The super._readyClients here sets the clients initialized flag.
// We must wait to do this until after client dom is created/attached
// so that this flag can be checked to prevent notifications fired
// during this process from being handled before clients are ready.
super._readyClients()}/**
       * Attaches an element's stamped dom to itself. By default,
       * this method creates a `shadowRoot` and adds the dom to it.
       * However, this method may be overridden to allow an element
       * to put its dom in another location.
       *
       * @override
       * @throws {Error}
       * @suppress {missingReturn}
       * @param {StampedTemplate} dom to attach to the element.
       * @return {ShadowRoot} node to which the dom has been attached.
       */_attachDom(dom){const n=wrap(this);if(n.attachShadow){if(dom){if(!n.shadowRoot){n.attachShadow({mode:"open",shadyUpgradeFragment:dom});n.shadowRoot.appendChild(dom);// When `adoptedStyleSheets` is supported a stylesheet is made
// available on the element constructor.
if(this.constructor._styleSheet){n.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet]}}if(syncInitialRender&&window.ShadyDOM){window.ShadyDOM.flushInitial(n.shadowRoot)}return n.shadowRoot}return null}else{throw new Error("ShadowDOM not available. "+// TODO(sorvell): move to compile-time conditional when supported
"PolymerElement can create dom as children instead of in "+"ShadowDOM by setting `this.root = this;` before `ready`.")}}/**
       * When using the ShadyCSS scoping and custom property shim, causes all
       * shimmed styles in this element (and its subtree) to be updated
       * based on current custom property values.
       *
       * The optional parameter overrides inline custom property styles with an
       * object of properties where the keys are CSS properties, and the values
       * are strings.
       *
       * Example: `this.updateStyles({'--color': 'blue'})`
       *
       * These properties are retained unless a value of `null` is set.
       *
       * Note: This function does not support updating CSS mixins.
       * You can not dynamically change the value of an `@apply`.
       *
       * @override
       * @param {Object=} properties Bag of custom property key/values to
       *   apply to this element.
       * @return {void}
       * @suppress {invalidCasts}
       */updateStyles(properties){if(window.ShadyCSS){window.ShadyCSS.styleSubtree(/** @type {!HTMLElement} */this,properties)}}/**
       * Rewrites a given URL relative to a base URL. The base URL defaults to
       * the original location of the document containing the `dom-module` for
       * this element. This method will return the same URL before and after
       * bundling.
       *
       * Note that this function performs no resolution for URLs that start
       * with `/` (absolute URLs) or `#` (hash identifiers).  For general purpose
       * URL resolution, use `window.URL`.
       *
       * @override
       * @param {string} url URL to resolve.
       * @param {string=} base Optional base URL to resolve against, defaults
       * to the element's `importPath`
       * @return {string} Rewritten URL relative to base
       */resolveUrl(url,base){if(!base&&this.importPath){base=resolveUrl(this.importPath)}return resolveUrl(url,base)}/**
       * Overrides `PropertyEffects` to add map of dynamic functions on
       * template info, for consumption by `PropertyEffects` template binding
       * code. This map determines which method templates should have accessors
       * created for them.
       *
       * @param {!HTMLTemplateElement} template Template
       * @param {!TemplateInfo} templateInfo Template metadata for current template
       * @param {!NodeInfo} nodeInfo Node metadata for current template.
       * @return {boolean} .
       * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
       * @nocollapse
       */static _parseTemplateContent(template,templateInfo,nodeInfo){templateInfo.dynamicFns=templateInfo.dynamicFns||this._properties;// TODO(https://github.com/google/closure-compiler/issues/3240):
//     Change back to just super.methodCall()
return polymerElementBase._parseTemplateContent.call(this,template,templateInfo,nodeInfo)}/**
       * Overrides `PropertyEffects` to warn on use of undeclared properties in
       * template.
       *
       * @param {Object} templateInfo Template metadata to add effect to
       * @param {string} prop Property that should trigger the effect
       * @param {Object=} effect Effect metadata object
       * @return {void}
       * @protected
       * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
       * @nocollapse
       */static _addTemplatePropertyEffect(templateInfo,prop,effect){// Warn if properties are used in template without being declared.
// Properties must be listed in `properties` to be included in
// `observedAttributes` since CE V1 reads that at registration time, and
// since we want to keep template parsing lazy, we can't automatically
// add undeclared properties used in templates to `observedAttributes`.
// The warning is only enabled in `legacyOptimizations` mode, since
// we don't want to spam existing users who might have adopted the
// shorthand when attribute deserialization is not important.
if(legacyWarnings&&!(prop in this._properties)&&// Methods used in templates with no dependencies (or only literal
// dependencies) become accessors with template effects; ignore these
!(effect.info.part.signature&&effect.info.part.signature.static)&&// Warnings for bindings added to nested templates are handled by
// templatizer so ignore both the host-to-template bindings
// (`hostProp`) and TemplateInstance-to-child bindings
// (`nestedTemplate`)
!effect.info.part.hostProp&&!templateInfo.nestedTemplate){console.warn(`Property '${prop}' used in template but not declared in 'properties'; `+`attribute will not be observed.`)}// TODO(https://github.com/google/closure-compiler/issues/3240):
//     Change back to just super.methodCall()
return polymerElementBase._addTemplatePropertyEffect.call(this,templateInfo,prop,effect)}}return PolymerElement});/**
     * When using the ShadyCSS scoping and custom property shim, causes all
     * shimmed `styles` (via `custom-style`) in the document (and its subtree)
     * to be updated based on current custom property values.
     *
     * The optional parameter overrides inline custom property styles with an
     * object of properties where the keys are CSS properties, and the values
     * are strings.
     *
     * Example: `updateStyles({'--color': 'blue'})`
     *
     * These properties are retained unless a value of `null` is set.
     *
     * @param {Object=} props Bag of custom property key/values to
     *   apply to the document.
     * @return {void}
     */_exports.ElementMixin=ElementMixin;const updateStyles=function(props){if(window.ShadyCSS){window.ShadyCSS.styleDocument(props)}};_exports.updateStyles=updateStyles;var elementMixin={version:version,builtCSS:builtCSS,ElementMixin:ElementMixin,updateStyles:updateStyles};_exports.$elementMixin=elementMixin;class LiteralString{constructor(string){/** @type {string} */this.value=string.toString()}/**
     * @return {string} LiteralString string value
     * @override
     */toString(){return this.value}}/**
   * @param {*} value Object to stringify into HTML
   * @return {string} HTML stringified form of `obj`
   */function literalValue(value){if(value instanceof LiteralString){return(/** @type {!LiteralString} */value.value)}else{throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${value}`)}}/**
   * @param {*} value Object to stringify into HTML
   * @return {string} HTML stringified form of `obj`
   */function htmlValue(value){if(value instanceof HTMLTemplateElement){return(/** @type {!HTMLTemplateElement } */value.innerHTML)}else if(value instanceof LiteralString){return literalValue(value)}else{throw new Error(`non-template value passed to Polymer's html function: ${value}`)}}/**
   * A template literal tag that creates an HTML <template> element from the
   * contents of the string.
   *
   * This allows you to write a Polymer Template in JavaScript.
   *
   * Templates can be composed by interpolating `HTMLTemplateElement`s in
   * expressions in the JavaScript template literal. The nested template's
   * `innerHTML` is included in the containing template.  The only other
   * values allowed in expressions are those returned from `htmlLiteral`
   * which ensures only literal values from JS source ever reach the HTML, to
   * guard against XSS risks.
   *
   * All other values are disallowed in expressions to help prevent XSS
   * attacks; however, `htmlLiteral` can be used to compose static
   * string values into templates. This is useful to compose strings into
   * places that do not accept html, like the css text of a `style`
   * element.
   *
   * Example:
   *
   *     static get template() {
   *       return html`
   *         <style>:host{ content:"..." }</style>
   *         <div class="shadowed">${this.partialTemplate}</div>
   *         ${super.template}
   *       `;
   *     }
   *     static get partialTemplate() { return html`<span>Partial!</span>`; }
   *
   * @param {!ITemplateArray} strings Constant parts of tagged template literal
   * @param {...*} values Variable parts of tagged template literal
   * @return {!HTMLTemplateElement} Constructed HTMLTemplateElement
   */const html$1=function html(strings,...values){const template=/** @type {!HTMLTemplateElement} */document.createElement("template");template.innerHTML=values.reduce((acc,v,idx)=>acc+htmlValue(v)+strings[idx+1],strings[0]);return template};/**
    * An html literal tag that can be used with `html` to compose.
    * a literal string.
    *
    * Example:
    *
    *     static get template() {
    *       return html`
    *         <style>
    *           :host { display: block; }
    *           ${this.styleTemplate()}
    *         </style>
    *         <div class="shadowed">${staticValue}</div>
    *         ${super.template}
    *       `;
    *     }
    *     static get styleTemplate() {
    *        return htmlLiteral`.shadowed { background: gray; }`;
    *     }
    *
    * @param {!ITemplateArray} strings Constant parts of tagged template literal
    * @param {...*} values Variable parts of tagged template literal
    * @return {!LiteralString} Constructed literal string
    */_exports.html$1=_exports.html=html$1;const htmlLiteral=function(strings,...values){return new LiteralString(values.reduce((acc,v,idx)=>acc+literalValue(v)+strings[idx+1],strings[0]))};_exports.htmlLiteral=htmlLiteral;var htmlTag={html:html$1,htmlLiteral:htmlLiteral};_exports.$htmlTag=htmlTag;const PolymerElement=ElementMixin(HTMLElement);_exports.PolymerElement=PolymerElement;var polymerElement={version:version,PolymerElement:PolymerElement,html:html$1};_exports.$polymerElement=polymerElement;function mutablePropertyChange(inst,property,value,old,mutableData){let isObject;if(mutableData){isObject="object"===typeof value&&null!==value;// Pull `old` for Objects from temp cache, but treat `null` as a primitive
if(isObject){old=inst.__dataTemp[property]}}// Strict equality check, but return false for NaN===NaN
let shouldChange=old!==value&&(old===old||value===value);// Objects are stored in temporary cache (cleared at end of
// turn), which is used for dirty-checking
if(isObject&&shouldChange){inst.__dataTemp[property]=value}return shouldChange}/**
   * Element class mixin to skip strict dirty-checking for objects and arrays
   * (always consider them to be "dirty"), for use on elements utilizing
   * `PropertyEffects`
   *
   * By default, `PropertyEffects` performs strict dirty checking on
   * objects, which means that any deep modifications to an object or array will
   * not be propagated unless "immutable" data patterns are used (i.e. all object
   * references from the root to the mutation were changed).
   *
   * Polymer also provides a proprietary data mutation and path notification API
   * (e.g. `notifyPath`, `set`, and array mutation API's) that allow efficient
   * mutation and notification of deep changes in an object graph to all elements
   * bound to the same object graph.
   *
   * In cases where neither immutable patterns nor the data mutation API can be
   * used, applying this mixin will cause Polymer to skip dirty checking for
   * objects and arrays (always consider them to be "dirty").  This allows a
   * user to make a deep modification to a bound object graph, and then either
   * simply re-set the object (e.g. `this.items = this.items`) or call `notifyPath`
   * (e.g. `this.notifyPath('items')`) to update the tree.  Note that all
   * elements that wish to be updated based on deep mutations must apply this
   * mixin or otherwise skip strict dirty checking for objects/arrays.
   * Specifically, any elements in the binding tree between the source of a
   * mutation and the consumption of it must apply this mixin or enable the
   * `OptionalMutableData` mixin.
   *
   * In order to make the dirty check strategy configurable, see
   * `OptionalMutableData`.
   *
   * Note, the performance characteristics of propagating large object graphs
   * will be worse as opposed to using strict dirty checking with immutable
   * patterns or Polymer's path notification API.
   *
   * @mixinFunction
   * @polymer
   * @summary Element class mixin to skip strict dirty-checking for objects
   *   and arrays
   * @template T
   * @param {function(new:T)} superClass Class to apply mixin to.
   * @return {function(new:T)} superClass with mixin applied.
   */const MutableData=dedupingMixin(superClass=>{/**
   * @polymer
   * @mixinClass
   * @implements {Polymer_MutableData}
   */class MutableData extends superClass{/**
     * Overrides `PropertyEffects` to provide option for skipping
     * strict equality checking for Objects and Arrays.
     *
     * This method pulls the value to dirty check against from the `__dataTemp`
     * cache (rather than the normal `__data` cache) for Objects.  Since the temp
     * cache is cleared at the end of a turn, this implementation allows
     * side-effects of deep object changes to be processed by re-setting the
     * same object (using the temp cache as an in-turn backstop to prevent
     * cycles due to 2-way notification).
     *
     * @param {string} property Property name
     * @param {*} value New property value
     * @param {*} old Previous property value
     * @return {boolean} Whether the property should be considered a change
     * @protected
     */_shouldPropertyChange(property,value,old){return mutablePropertyChange(this,property,value,old,!0)}}return MutableData});/**
     * Element class mixin to add the optional ability to skip strict
     * dirty-checking for objects and arrays (always consider them to be
     * "dirty") by setting a `mutable-data` attribute on an element instance.
     *
     * By default, `PropertyEffects` performs strict dirty checking on
     * objects, which means that any deep modifications to an object or array will
     * not be propagated unless "immutable" data patterns are used (i.e. all object
     * references from the root to the mutation were changed).
     *
     * Polymer also provides a proprietary data mutation and path notification API
     * (e.g. `notifyPath`, `set`, and array mutation API's) that allow efficient
     * mutation and notification of deep changes in an object graph to all elements
     * bound to the same object graph.
     *
     * In cases where neither immutable patterns nor the data mutation API can be
     * used, applying this mixin will allow Polymer to skip dirty checking for
     * objects and arrays (always consider them to be "dirty").  This allows a
     * user to make a deep modification to a bound object graph, and then either
     * simply re-set the object (e.g. `this.items = this.items`) or call `notifyPath`
     * (e.g. `this.notifyPath('items')`) to update the tree.  Note that all
     * elements that wish to be updated based on deep mutations must apply this
     * mixin or otherwise skip strict dirty checking for objects/arrays.
     * Specifically, any elements in the binding tree between the source of a
     * mutation and the consumption of it must enable this mixin or apply the
     * `MutableData` mixin.
     *
     * While this mixin adds the ability to forgo Object/Array dirty checking,
     * the `mutableData` flag defaults to false and must be set on the instance.
     *
     * Note, the performance characteristics of propagating large object graphs
     * will be worse by relying on `mutableData: true` as opposed to using
     * strict dirty checking with immutable patterns or Polymer's path notification
     * API.
     *
     * @mixinFunction
     * @polymer
     * @summary Element class mixin to optionally skip strict dirty-checking
     *   for objects and arrays
     */_exports.MutableData=MutableData;const OptionalMutableData=dedupingMixin(superClass=>{/**
   * @mixinClass
   * @polymer
   * @implements {Polymer_OptionalMutableData}
   */class OptionalMutableData extends superClass{/** @nocollapse */static get properties(){return{/**
         * Instance-level flag for configuring the dirty-checking strategy
         * for this element.  When true, Objects and Arrays will skip dirty
         * checking, otherwise strict equality checking will be used.
         */mutableData:Boolean}}/**
       * Overrides `PropertyEffects` to provide option for skipping
       * strict equality checking for Objects and Arrays.
       *
       * When `this.mutableData` is true on this instance, this method
       * pulls the value to dirty check against from the `__dataTemp` cache
       * (rather than the normal `__data` cache) for Objects.  Since the temp
       * cache is cleared at the end of a turn, this implementation allows
       * side-effects of deep object changes to be processed by re-setting the
       * same object (using the temp cache as an in-turn backstop to prevent
       * cycles due to 2-way notification).
       *
       * @param {string} property Property name
       * @param {*} value New property value
       * @param {*} old Previous property value
       * @return {boolean} Whether the property should be considered a change
       * @protected
       */_shouldPropertyChange(property,value,old){return mutablePropertyChange(this,property,value,old,this.mutableData)}}return OptionalMutableData});// Export for use by legacy behavior
_exports.OptionalMutableData=OptionalMutableData;MutableData._mutablePropertyChange=mutablePropertyChange;var mutableData={MutableData:MutableData,OptionalMutableData:OptionalMutableData};// machinery for propagating host properties to children. This is an ES5
// class only because Babel (incorrectly) requires super() in the class
// constructor even though no `this` is used and it returns an instance.
_exports.$mutableData=mutableData;let newInstance=null;/**
                         * @constructor
                         * @extends {HTMLTemplateElement}
                         * @private
                         */function HTMLTemplateElementExtension(){return newInstance}HTMLTemplateElementExtension.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:HTMLTemplateElementExtension,writable:!0}});/**
     * @constructor
     * @implements {Polymer_PropertyEffects}
     * @extends {HTMLTemplateElementExtension}
     * @private
     */const DataTemplate=PropertyEffects(HTMLTemplateElementExtension),MutableDataTemplate=MutableData(DataTemplate);/**
                                                                     * @constructor
                                                                     * @implements {Polymer_MutableData}
                                                                     * @extends {DataTemplate}
                                                                     * @private
                                                                     */ // Applies a DataTemplate subclass to a <template> instance
function upgradeTemplate(template,constructor){newInstance=template;Object.setPrototypeOf(template,constructor.prototype);new constructor;newInstance=null}/**
   * Base class for TemplateInstance.
   * @constructor
   * @extends {HTMLElement}
   * @implements {Polymer_PropertyEffects}
   * @private
   */const templateInstanceBase=PropertyEffects(class{});function showHideChildren(hide,children){for(let i=0,n;i<children.length;i++){n=children[i];// Ignore non-changes
if(!!hide!=!!n.__hideTemplateChildren__){// clear and restore text
if(n.nodeType===Node.TEXT_NODE){if(hide){n.__polymerTextContent__=n.textContent;n.textContent=""}else{n.textContent=n.__polymerTextContent__}// remove and replace slot
}else if("slot"===n.localName){if(hide){n.__polymerReplaced__=document.createComment("hidden-slot");wrap(wrap(n).parentNode).replaceChild(n.__polymerReplaced__,n)}else{const replace=n.__polymerReplaced__;if(replace){wrap(wrap(replace).parentNode).replaceChild(n,replace)}}}// hide and show nodes
else if(n.style){if(hide){n.__polymerDisplay__=n.style.display;n.style.display="none"}else{n.style.display=n.__polymerDisplay__}}}n.__hideTemplateChildren__=hide;if(n._showHideChildren){n._showHideChildren(hide)}}}/**
   * @polymer
   * @customElement
   * @appliesMixin PropertyEffects
   * @unrestricted
   */class TemplateInstanceBase extends templateInstanceBase{constructor(props){super();this._configureProperties(props);/** @type {!StampedTemplate} */this.root=this._stampTemplate(this.__dataHost);// Save list of stamped children
let children=[];/** @suppress {invalidCasts} */this.children=/** @type {!NodeList} */children;// Polymer 1.x did not use `Polymer.dom` here so not bothering.
for(let n=this.root.firstChild;n;n=n.nextSibling){children.push(n);n.__templatizeInstance=this}if(this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__){this._showHideChildren(!0)}// Flush props only when props are passed if instance props exist
// or when there isn't instance props.
let options=this.__templatizeOptions;if(props&&options.instanceProps||!options.instanceProps){this._enableProperties()}}/**
     * Configure the given `props` by calling `_setPendingProperty`. Also
     * sets any properties stored in `__hostProps`.
     * @private
     * @param {Object} props Object of property name-value pairs to set.
     * @return {void}
     */_configureProperties(props){let options=this.__templatizeOptions;if(options.forwardHostProp){for(let hprop in this.__hostProps){this._setPendingProperty(hprop,this.__dataHost["_host_"+hprop])}}// Any instance props passed in the constructor will overwrite host props;
// normally this would be a user error but we don't specifically filter them
for(let iprop in props){this._setPendingProperty(iprop,props[iprop])}}/**
     * Forwards a host property to this instance.  This method should be
     * called on instances from the `options.forwardHostProp` callback
     * to propagate changes of host properties to each instance.
     *
     * Note this method enqueues the change, which are flushed as a batch.
     *
     * @param {string} prop Property or path name
     * @param {*} value Value of the property to forward
     * @return {void}
     */forwardHostProp(prop,value){if(this._setPendingPropertyOrPath(prop,value,!1,!0)){this.__dataHost._enqueueClient(this)}}/**
     * Override point for adding custom or simulated event handling.
     *
     * @override
     * @param {!Node} node Node to add event listener to
     * @param {string} eventName Name of event
     * @param {function(!Event):void} handler Listener function to add
     * @return {void}
     */_addEventListenerToNode(node,eventName,handler){if(this._methodHost&&this.__templatizeOptions.parentModel){// If this instance should be considered a parent model, decorate
// events this template instance as `model`
this._methodHost._addEventListenerToNode(node,eventName,e=>{e.model=this;handler(e)})}else{// Otherwise delegate to the template's host (which could be)
// another template instance
let templateHost=this.__dataHost.__dataHost;if(templateHost){templateHost._addEventListenerToNode(node,eventName,handler)}}}/**
     * Shows or hides the template instance top level child elements. For
     * text nodes, `textContent` is removed while "hidden" and replaced when
     * "shown."
     * @param {boolean} hide Set to true to hide the children;
     * set to false to show them.
     * @return {void}
     * @protected
     */_showHideChildren(hide){showHideChildren(hide,this.children)}/**
     * Overrides default property-effects implementation to intercept
     * textContent bindings while children are "hidden" and cache in
     * private storage for later retrieval.
     *
     * @override
     * @param {!Node} node The node to set a property on
     * @param {string} prop The property to set
     * @param {*} value The value to set
     * @return {void}
     * @protected
     */_setUnmanagedPropertyToNode(node,prop,value){if(node.__hideTemplateChildren__&&node.nodeType==Node.TEXT_NODE&&"textContent"==prop){node.__polymerTextContent__=value}else{super._setUnmanagedPropertyToNode(node,prop,value)}}/**
     * Find the parent model of this template instance.  The parent model
     * is either another templatize instance that had option `parentModel: true`,
     * or else the host element.
     *
     * @return {!Polymer_PropertyEffects} The parent model of this instance
     */get parentModel(){let model=this.__parentModel;if(!model){let options;model=this;do{// A template instance's `__dataHost` is a <template>
// `model.__dataHost.__dataHost` is the template's host
model=model.__dataHost.__dataHost}while((options=model.__templatizeOptions)&&!options.parentModel);this.__parentModel=model}return model}/**
     * Stub of HTMLElement's `dispatchEvent`, so that effects that may
     * dispatch events safely no-op.
     *
     * @param {Event} event Event to dispatch
     * @return {boolean} Always true.
     * @override
     */dispatchEvent(event){// eslint-disable-line no-unused-vars
return!0}}/** @type {!DataTemplate} */_exports.TemplateInstanceBase=TemplateInstanceBase;TemplateInstanceBase.prototype.__dataHost;/** @type {!TemplatizeOptions} */TemplateInstanceBase.prototype.__templatizeOptions;/** @type {!Polymer_PropertyEffects} */TemplateInstanceBase.prototype._methodHost;/** @type {!Object} */TemplateInstanceBase.prototype.__templatizeOwner;/** @type {!Object} */TemplateInstanceBase.prototype.__hostProps;/**
                                             * @constructor
                                             * @extends {TemplateInstanceBase}
                                             * @implements {Polymer_MutableData}
                                             * @private
                                             */const MutableTemplateInstanceBase=MutableData(// This cast shouldn't be neccessary, but Closure doesn't understand that
// TemplateInstanceBase is a constructor function.
/** @type {function(new:TemplateInstanceBase)} */TemplateInstanceBase);function findMethodHost(template){// Technically this should be the owner of the outermost template.
// In shadow dom, this is always getRootNode().host, but we can
// approximate this via cooperation with our dataHost always setting
// `_methodHost` as long as there were bindings (or id's) on this
// instance causing it to get a dataHost.
let templateHost=template.__dataHost;return templateHost&&templateHost._methodHost||templateHost}/* eslint-disable valid-jsdoc */ /**
                                    * @suppress {missingProperties} class.prototype is not defined for some reason
                                    */function createTemplatizerClass(template,templateInfo,options){/**
   * @constructor
   * @extends {TemplateInstanceBase}
   */let templatizerBase=options.mutableData?MutableTemplateInstanceBase:TemplateInstanceBase;// Affordance for global mixins onto TemplatizeInstance
if(templatize.mixin){templatizerBase=templatize.mixin(templatizerBase)}/**
     * Anonymous class created by the templatize
     * @constructor
     * @private
     */let klass=class extends templatizerBase{};/** @override */klass.prototype.__templatizeOptions=options;klass.prototype._bindTemplate(template);addNotifyEffects(klass,template,templateInfo,options);return klass}/**
   * Adds propagate effects from the template to the template instance for
   * properties that the host binds to the template using the `_host_` prefix.
   *
   * @suppress {missingProperties} class.prototype is not defined for some reason
   */function addPropagateEffects(target,templateInfo,options,methodHost){let userForwardHostProp=options.forwardHostProp;if(userForwardHostProp&&templateInfo.hasHostProps){// Under the `removeNestedTemplates` optimization, a custom element like
// `dom-if` or `dom-repeat` can itself be treated as the "template"; this
// flag is used to switch between upgrading a `<template>` to be a property
// effects client vs. adding the effects directly to the custom element
const isTemplate="template"==target.localName;// Provide data API and property effects on memoized template class
let klass=templateInfo.templatizeTemplateClass;if(!klass){if(isTemplate){/**
         * @constructor
         * @extends {DataTemplate}
         */let templatizedBase=options.mutableData?MutableDataTemplate:DataTemplate;// NOTE: due to https://github.com/google/closure-compiler/issues/2928,
// combining the next two lines into one assignment causes a spurious
// type error.
/** @private */class TemplatizedTemplate extends templatizedBase{}klass=templateInfo.templatizeTemplateClass=TemplatizedTemplate}else{/**
         * @constructor
         * @extends {PolymerElement}
         */const templatizedBase=target.constructor;// Create a cached subclass of the base custom element class onto which
// to put the template-specific propagate effects
// NOTE: due to https://github.com/google/closure-compiler/issues/2928,
// combining the next two lines into one assignment causes a spurious
// type error.
/** @private */class TemplatizedTemplateExtension extends templatizedBase{}klass=templateInfo.templatizeTemplateClass=TemplatizedTemplateExtension}// Add template - >instances effects
// and host <- template effects
let hostProps=templateInfo.hostProps;for(let prop in hostProps){klass.prototype._addPropertyEffect("_host_"+prop,klass.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:createForwardHostPropEffect(prop,userForwardHostProp)});klass.prototype._createNotifyingProperty("_host_"+prop)}if(legacyWarnings&&methodHost){warnOnUndeclaredProperties(templateInfo,options,methodHost)}}// Mix any pre-bound data into __data; no need to flush this to
// instances since they pull from the template at instance-time
if(target.__dataProto){// Note, generally `__dataProto` could be chained, but it's guaranteed
// to not be since this is a vanilla template we just added effects to
Object.assign(target.__data,target.__dataProto)}if(isTemplate){upgradeTemplate(target,klass);// Clear any pending data for performance
target.__dataTemp={};target.__dataPending=null;target.__dataOld=null;target._enableProperties()}else{// Swizzle the cached subclass prototype onto the custom element
Object.setPrototypeOf(target,klass.prototype);// Check for any pre-bound instance host properties, and do the
// instance property delete/assign dance for those (directly into data;
// not need to go through accessor since they are pulled at instance time)
const hostProps=templateInfo.hostProps;for(let prop in hostProps){prop="_host_"+prop;if(prop in target){const val=target[prop];delete target[prop];target.__data[prop]=val}}}}}/* eslint-enable valid-jsdoc */function createForwardHostPropEffect(hostProp,userForwardHostProp){return function forwardHostProp(template,prop,props){userForwardHostProp.call(template.__templatizeOwner,prop.substring("_host_".length),props[prop])}}function addNotifyEffects(klass,template,templateInfo,options){let hostProps=templateInfo.hostProps||{};for(let iprop in options.instanceProps){delete hostProps[iprop];let userNotifyInstanceProp=options.notifyInstanceProp;if(userNotifyInstanceProp){klass.prototype._addPropertyEffect(iprop,klass.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:createNotifyInstancePropEffect(iprop,userNotifyInstanceProp)})}}if(options.forwardHostProp&&template.__dataHost){for(let hprop in hostProps){// As we're iterating hostProps in this function, note whether
// there were any, for an optimization in addPropagateEffects
if(!templateInfo.hasHostProps){templateInfo.hasHostProps=!0}klass.prototype._addPropertyEffect(hprop,klass.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:createNotifyHostPropEffect()})}}}function createNotifyInstancePropEffect(instProp,userNotifyInstanceProp){return function notifyInstanceProp(inst,prop,props){userNotifyInstanceProp.call(inst.__templatizeOwner,inst,prop,props[prop])}}function createNotifyHostPropEffect(){return function notifyHostProp(inst,prop,props){inst.__dataHost._setPendingPropertyOrPath("_host_"+prop,props[prop],!0,!0)}}/**
   * Returns an anonymous `PropertyEffects` class bound to the
   * `<template>` provided.  Instancing the class will result in the
   * template being stamped into a document fragment stored as the instance's
   * `root` property, after which it can be appended to the DOM.
   *
   * Templates may utilize all Polymer data-binding features as well as
   * declarative event listeners.  Event listeners and inline computing
   * functions in the template will be called on the host of the template.
   *
   * The constructor returned takes a single argument dictionary of initial
   * property values to propagate into template bindings.  Additionally
   * host properties can be forwarded in, and instance properties can be
   * notified out by providing optional callbacks in the `options` dictionary.
   *
   * Valid configuration in `options` are as follows:
   *
   * - `forwardHostProp(property, value)`: Called when a property referenced
   *   in the template changed on the template's host. As this library does
   *   not retain references to templates instanced by the user, it is the
   *   templatize owner's responsibility to forward host property changes into
   *   user-stamped instances.  The `instance.forwardHostProp(property, value)`
   *    method on the generated class should be called to forward host
   *   properties into the template to prevent unnecessary property-changed
   *   notifications. Any properties referenced in the template that are not
   *   defined in `instanceProps` will be notified up to the template's host
   *   automatically.
   * - `instanceProps`: Dictionary of property names that will be added
   *   to the instance by the templatize owner.  These properties shadow any
   *   host properties, and changes within the template to these properties
   *   will result in `notifyInstanceProp` being called.
   * - `mutableData`: When `true`, the generated class will skip strict
   *   dirty-checking for objects and arrays (always consider them to be
   *   "dirty").
   * - `notifyInstanceProp(instance, property, value)`: Called when
   *   an instance property changes.  Users may choose to call `notifyPath`
   *   on e.g. the owner to notify the change.
   * - `parentModel`: When `true`, events handled by declarative event listeners
   *   (`on-event="handler"`) will be decorated with a `model` property pointing
   *   to the template instance that stamped it.  It will also be returned
   *   from `instance.parentModel` in cases where template instance nesting
   *   causes an inner model to shadow an outer model.
   *
   * All callbacks are called bound to the `owner`. Any context
   * needed for the callbacks (such as references to `instances` stamped)
   * should be stored on the `owner` such that they can be retrieved via
   * `this`.
   *
   * When `options.forwardHostProp` is declared as an option, any properties
   * referenced in the template will be automatically forwarded from the host of
   * the `<template>` to instances, with the exception of any properties listed in
   * the `options.instanceProps` object.  `instanceProps` are assumed to be
   * managed by the owner of the instances, either passed into the constructor
   * or set after the fact.  Note, any properties passed into the constructor will
   * always be set to the instance (regardless of whether they would normally
   * be forwarded from the host).
   *
   * Note that `templatize()` can be run only once for a given `<template>`.
   * Further calls will result in an error. Also, there is a special
   * behavior if the template was duplicated through a mechanism such as
   * `<dom-repeat>` or `<test-fixture>`. In this case, all calls to
   * `templatize()` return the same class for all duplicates of a template.
   * The class returned from `templatize()` is generated only once using
   * the `options` from the first call. This means that any `options`
   * provided to subsequent calls will be ignored. Therefore, it is very
   * important not to close over any variables inside the callbacks. Also,
   * arrow functions must be avoided because they bind the outer `this`.
   * Inside the callbacks, any contextual information can be accessed
   * through `this`, which points to the `owner`.
   *
   * @param {!HTMLTemplateElement} template Template to templatize
   * @param {Polymer_PropertyEffects=} owner Owner of the template instances;
   *   any optional callbacks will be bound to this owner.
   * @param {Object=} options Options dictionary (see summary for details)
   * @return {function(new:TemplateInstanceBase, Object=)} Generated class bound
   *   to the template provided
   * @suppress {invalidCasts}
   */function templatize(template,owner,options){// Under strictTemplatePolicy, the templatized element must be owned
// by a (trusted) Polymer element, indicated by existence of _methodHost;
// e.g. for dom-if & dom-repeat in main document, _methodHost is null
if(strictTemplatePolicy&&!findMethodHost(template)){throw new Error("strictTemplatePolicy: template owner not trusted")}options=/** @type {!TemplatizeOptions} */options||{};if(template.__templatizeOwner){throw new Error("A <template> can only be templatized once")}template.__templatizeOwner=owner;const ctor=owner?owner.constructor:TemplateInstanceBase;let templateInfo=ctor._parseTemplate(template),baseClass=templateInfo.templatizeInstanceClass;// Get memoized base class for the prototypical template, which
// includes property effects for binding template & forwarding
/**
   * @constructor
   * @extends {TemplateInstanceBase}
   */if(!baseClass){baseClass=createTemplatizerClass(template,templateInfo,options);templateInfo.templatizeInstanceClass=baseClass}const methodHost=findMethodHost(template);// Host property forwarding must be installed onto template instance
addPropagateEffects(template,templateInfo,options,methodHost);// Subclass base class and add reference for this specific template
/** @private */let klass=class TemplateInstance extends baseClass{};/** @override */klass.prototype._methodHost=methodHost;/** @override */klass.prototype.__dataHost=/** @type {!DataTemplate} */template;/** @override */klass.prototype.__templatizeOwner=/** @type {!Object} */owner;/** @override */klass.prototype.__hostProps=templateInfo.hostProps;klass=/** @type {function(new:TemplateInstanceBase)} */klass;//eslint-disable-line no-self-assign
return klass}function warnOnUndeclaredProperties(templateInfo,options,methodHost){const declaredProps=methodHost.constructor._properties,{propertyEffects}=templateInfo,{instanceProps}=options;for(let prop in propertyEffects){// Ensure properties with template effects are declared on the outermost
// host (`methodHost`), unless they are instance props or static functions
if(!declaredProps[prop]&&!(instanceProps&&instanceProps[prop])){const effects=propertyEffects[prop];for(let i=0;i<effects.length;i++){const{part}=effects[i].info;if(!(part.signature&&part.signature.static)){console.warn(`Property '${prop}' used in template but not `+`declared in 'properties'; attribute will not be observed.`);break}}}}}/**
   * Returns the template "model" associated with a given element, which
   * serves as the binding scope for the template instance the element is
   * contained in. A template model is an instance of
   * `TemplateInstanceBase`, and should be used to manipulate data
   * associated with this template instance.
   *
   * Example:
   *
   *   let model = modelForElement(el);
   *   if (model.index < 10) {
   *     model.set('item.checked', true);
   *   }
   *
   * @param {HTMLElement} template The model will be returned for
   *   elements stamped from this template (accepts either an HTMLTemplateElement)
   *   or a `<dom-if>`/`<dom-repeat>` element when using `removeNestedTemplates`
   *   optimization.
   * @param {Node=} node Node for which to return a template model.
   * @return {TemplateInstanceBase} Template instance representing the
   *   binding scope for the element
   */function modelForElement(template,node){let model;while(node){// An element with a __templatizeInstance marks the top boundary
// of a scope; walk up until we find one, and then ensure that
// its __dataHost matches `this`, meaning this dom-repeat stamped it
if(model=node.__dataHost?node:node.__templatizeInstance){// Found an element stamped by another template; keep walking up
// from its __dataHost
if(model.__dataHost!=template){node=model.__dataHost}else{return model}}else{// Still in a template scope, keep going up until
// a __templatizeInstance is found
node=wrap(node).parentNode}}return null}var templatize$1={showHideChildren:showHideChildren,templatize:templatize,modelForElement:modelForElement,TemplateInstanceBase:TemplateInstanceBase};_exports.$templatize=templatize$1;class Debouncer{constructor(){this._asyncModule=null;this._callback=null;this._timer=null}/**
     * Sets the scheduler; that is, a module with the Async interface,
     * a callback and optional arguments to be passed to the run function
     * from the async module.
     *
     * @param {!AsyncInterface} asyncModule Object with Async interface.
     * @param {function()} callback Callback to run.
     * @return {void}
     */setConfig(asyncModule,callback){this._asyncModule=asyncModule;this._callback=callback;this._timer=this._asyncModule.run(()=>{this._timer=null;debouncerQueue.delete(this);this._callback()})}/**
     * Cancels an active debouncer and returns a reference to itself.
     *
     * @return {void}
     */cancel(){if(this.isActive()){this._cancelAsync();// Canceling a debouncer removes its spot from the flush queue,
// so if a debouncer is manually canceled and re-debounced, it
// will reset its flush order (this is a very minor difference from 1.x)
// Re-debouncing via the `debounce` API retains the 1.x FIFO flush order
debouncerQueue.delete(this)}}/**
     * Cancels a debouncer's async callback.
     *
     * @return {void}
     */_cancelAsync(){if(this.isActive()){this._asyncModule.cancel(/** @type {number} */this._timer);this._timer=null}}/**
     * Flushes an active debouncer and returns a reference to itself.
     *
     * @return {void}
     */flush(){if(this.isActive()){this.cancel();this._callback()}}/**
     * Returns true if the debouncer is active.
     *
     * @return {boolean} True if active.
     */isActive(){return null!=this._timer}/**
     * Creates a debouncer if no debouncer is passed as a parameter
     * or it cancels an active debouncer otherwise. The following
     * example shows how a debouncer can be called multiple times within a
     * microtask and "debounced" such that the provided callback function is
     * called once. Add this method to a custom element:
     *
     * ```js
     * import {microTask} from '@polymer/polymer/lib/utils/async.js';
     * import {Debouncer} from '@polymer/polymer/lib/utils/debounce.js';
     * // ...
     *
     * _debounceWork() {
     *   this._debounceJob = Debouncer.debounce(this._debounceJob,
     *       microTask, () => this._doWork());
     * }
     * ```
     *
     * If the `_debounceWork` method is called multiple times within the same
     * microtask, the `_doWork` function will be called only once at the next
     * microtask checkpoint.
     *
     * Note: In testing it is often convenient to avoid asynchrony. To accomplish
     * this with a debouncer, you can use `enqueueDebouncer` and
     * `flush`. For example, extend the above example by adding
     * `enqueueDebouncer(this._debounceJob)` at the end of the
     * `_debounceWork` method. Then in a test, call `flush` to ensure
     * the debouncer has completed.
     *
     * @param {Debouncer?} debouncer Debouncer object.
     * @param {!AsyncInterface} asyncModule Object with Async interface
     * @param {function()} callback Callback to run.
     * @return {!Debouncer} Returns a debouncer object.
     */static debounce(debouncer,asyncModule,callback){if(debouncer instanceof Debouncer){// Cancel the async callback, but leave in debouncerQueue if it was
// enqueued, to maintain 1.x flush order
debouncer._cancelAsync()}else{debouncer=new Debouncer}debouncer.setConfig(asyncModule,callback);return debouncer}}_exports.Debouncer=Debouncer;let debouncerQueue=new Set;/**
                                 * Adds a `Debouncer` to a list of globally flushable tasks.
                                 *
                                 * @param {!Debouncer} debouncer Debouncer to enqueue
                                 * @return {void}
                                 */const enqueueDebouncer=function(debouncer){debouncerQueue.add(debouncer)};/**
    * Flushes any enqueued debouncers
    *
    * @return {boolean} Returns whether any debouncers were flushed
    */_exports.enqueueDebouncer$1=_exports.enqueueDebouncer=enqueueDebouncer;const flushDebouncers=function(){const didFlush=!!debouncerQueue.size;// If new debouncers are added while flushing, Set.forEach will ensure
// newly added ones are also flushed
debouncerQueue.forEach(debouncer=>{try{debouncer.flush()}catch(e){setTimeout(()=>{throw e})}});return didFlush};_exports.flushDebouncers=flushDebouncers;var debounce={Debouncer:Debouncer,enqueueDebouncer:enqueueDebouncer,flushDebouncers:flushDebouncers};_exports.$debounce=debounce;const flush=function(){let shadyDOM,debouncers;do{shadyDOM=window.ShadyDOM&&ShadyDOM.flush();if(window.ShadyCSS&&window.ShadyCSS.ScopingShim){window.ShadyCSS.ScopingShim.flush()}debouncers=flushDebouncers()}while(shadyDOM||debouncers)};_exports.flush=flush;var flush$1={enqueueDebouncer:enqueueDebouncer,flush:flush};_exports.$flush=flush$1;let elementsHidden=!1;/**
                             * @return {boolean} True if elements will be hidden globally
                             */function hideElementsGlobally(){if(legacyOptimizations&&!useShadow){if(!elementsHidden){elementsHidden=!0;const style=document.createElement("style");style.textContent="dom-bind,dom-if,dom-repeat{display:none;}";document.head.appendChild(style)}return!0}return!1}var hideTemplateControls={hideElementsGlobally:hideElementsGlobally};_exports.$hideTemplateControls=hideTemplateControls;const domRepeatBase=OptionalMutableData(PolymerElement);/**
                                                            * The `<dom-repeat>` element will automatically stamp and binds one instance
                                                            * of template content to each object in a user-provided array.
                                                            * `dom-repeat` accepts an `items` property, and one instance of the template
                                                            * is stamped for each item into the DOM at the location of the `dom-repeat`
                                                            * element.  The `item` property will be set on each instance's binding
                                                            * scope, thus templates should bind to sub-properties of `item`.
                                                            *
                                                            * Example:
                                                            *
                                                            * ```html
                                                            * <dom-module id="employee-list">
                                                            *
                                                            *   <template>
                                                            *
                                                            *     <div> Employee list: </div>
                                                            *     <dom-repeat items="{{employees}}">
                                                            *       <template>
                                                            *         <div>First name: <span>{{item.first}}</span></div>
                                                            *         <div>Last name: <span>{{item.last}}</span></div>
                                                            *       </template>
                                                            *     </dom-repeat>
                                                            *
                                                            *   </template>
                                                            *
                                                            * </dom-module>
                                                            * ```
                                                            *
                                                            * With the following custom element definition:
                                                            *
                                                            * ```js
                                                            * class EmployeeList extends PolymerElement {
                                                            *   static get is() { return 'employee-list'; }
                                                            *   static get properties() {
                                                            *     return {
                                                            *       employees: {
                                                            *         value() {
                                                            *           return [
                                                            *             {first: 'Bob', last: 'Smith'},
                                                            *             {first: 'Sally', last: 'Johnson'},
                                                            *             ...
                                                            *           ];
                                                            *         }
                                                            *       }
                                                            *     };
                                                            *   }
                                                            * }
                                                            * ```
                                                            *
                                                            * Notifications for changes to items sub-properties will be forwarded to template
                                                            * instances, which will update via the normal structured data notification system.
                                                            *
                                                            * Mutations to the `items` array itself should be made using the Array
                                                            * mutation API's on the PropertyEffects mixin (`push`, `pop`, `splice`,
                                                            * `shift`, `unshift`), and template instances will be kept in sync with the
                                                            * data in the array.
                                                            *
                                                            * Events caught by event handlers within the `dom-repeat` template will be
                                                            * decorated with a `model` property, which represents the binding scope for
                                                            * each template instance.  The model should be used to manipulate data on the
                                                            * instance, for example `event.model.set('item.checked', true);`.
                                                            *
                                                            * Alternatively, the model for a template instance for an element stamped by
                                                            * a `dom-repeat` can be obtained using the `modelForElement` API on the
                                                            * `dom-repeat` that stamped it, for example
                                                            * `this.$.domRepeat.modelForElement(event.target).set('item.checked', true);`.
                                                            * This may be useful for manipulating instance data of event targets obtained
                                                            * by event handlers on parents of the `dom-repeat` (event delegation).
                                                            *
                                                            * A view-specific filter/sort may be applied to each `dom-repeat` by supplying a
                                                            * `filter` and/or `sort` property.  This may be a string that names a function on
                                                            * the host, or a function may be assigned to the property directly.  The functions
                                                            * should implemented following the standard `Array` filter/sort API.
                                                            *
                                                            * In order to re-run the filter or sort functions based on changes to sub-fields
                                                            * of `items`, the `observe` property may be set as a space-separated list of
                                                            * `item` sub-fields that should cause a re-filter/sort when modified.  If
                                                            * the filter or sort function depends on properties not contained in `items`,
                                                            * the user should observe changes to those properties and call `render` to update
                                                            * the view based on the dependency change.
                                                            *
                                                            * For example, for an `dom-repeat` with a filter of the following:
                                                            *
                                                            * ```js
                                                            * isEngineer(item) {
                                                            *   return item.type == 'engineer' || item.manager.type == 'engineer';
                                                            * }
                                                            * ```
                                                            *
                                                            * Then the `observe` property should be configured as follows:
                                                            *
                                                            * ```html
                                                            * <dom-repeat items="{{employees}}" filter="isEngineer" observe="type manager.type">
                                                            * ```
                                                            *
                                                            * @customElement
                                                            * @polymer
                                                            * @extends {domRepeatBase}
                                                            * @appliesMixin OptionalMutableData
                                                            * @summary Custom element for stamping instance of a template bound to
                                                            *   items in an array.
                                                            */class DomRepeat extends domRepeatBase{// Not needed to find template; can be removed once the analyzer
// can find the tag name from customElements.define call
static get is(){return"dom-repeat"}static get template(){return null}static get properties(){/**
     * Fired whenever DOM is added or removed by this template (by
     * default, rendering occurs lazily).  To force immediate rendering, call
     * `render`.
     *
     * @event dom-change
     */return{/**
       * An array containing items determining how many instances of the template
       * to stamp and that that each template instance should bind to.
       */items:{type:Array},/**
       * The name of the variable to add to the binding scope for the array
       * element associated with a given template instance.
       */as:{type:String,value:"item"},/**
       * The name of the variable to add to the binding scope with the index
       * of the instance in the sorted and filtered list of rendered items.
       * Note, for the index in the `this.items` array, use the value of the
       * `itemsIndexAs` property.
       */indexAs:{type:String,value:"index"},/**
       * The name of the variable to add to the binding scope with the index
       * of the instance in the `this.items` array. Note, for the index of
       * this instance in the sorted and filtered list of rendered items,
       * use the value of the `indexAs` property.
       */itemsIndexAs:{type:String,value:"itemsIndex"},/**
       * A function that should determine the sort order of the items.  This
       * property should either be provided as a string, indicating a method
       * name on the element's host, or else be an actual function.  The
       * function should match the sort function passed to `Array.sort`.
       * Using a sort function has no effect on the underlying `items` array.
       */sort:{type:Function,observer:"__sortChanged"},/**
       * A function that can be used to filter items out of the view.  This
       * property should either be provided as a string, indicating a method
       * name on the element's host, or else be an actual function.  The
       * function should match the sort function passed to `Array.filter`.
       * Using a filter function has no effect on the underlying `items` array.
       */filter:{type:Function,observer:"__filterChanged"},/**
       * When using a `filter` or `sort` function, the `observe` property
       * should be set to a space-separated list of the names of item
       * sub-fields that should trigger a re-sort or re-filter when changed.
       * These should generally be fields of `item` that the sort or filter
       * function depends on.
       */observe:{type:String,observer:"__observeChanged"},/**
       * When using a `filter` or `sort` function, the `delay` property
       * determines a debounce time in ms after a change to observed item
       * properties that must pass before the filter or sort is re-run.
       * This is useful in rate-limiting shuffling of the view when
       * item changes may be frequent.
       */delay:Number,/**
       * Count of currently rendered items after `filter` (if any) has been applied.
       * If "chunking mode" is enabled, `renderedItemCount` is updated each time a
       * set of template instances is rendered.
       *
       */renderedItemCount:{type:Number,notify:!suppressTemplateNotifications,readOnly:!0},/**
       * When greater than zero, defines an initial count of template instances
       * to render after setting the `items` array, before the next paint, and
       * puts the `dom-repeat` into "chunking mode".  The remaining items (and
       * any future items as a result of pushing onto the array) will be created
       * and rendered incrementally at each animation frame thereof until all
       * instances have been rendered.
       */initialCount:{type:Number},/**
       * When `initialCount` is used, this property defines a frame rate (in
       * fps) to target by throttling the number of instances rendered each
       * frame to not exceed the budget for the target frame rate.  The
       * framerate is effectively the number of `requestAnimationFrame`s that
       * it tries to allow to actually fire in a given second. It does this
       * by measuring the time between `rAF`s and continuously adjusting the
       * number of items created each `rAF` to maintain the target framerate.
       * Setting this to a higher number allows lower latency and higher
       * throughput for event handlers and other tasks, but results in a
       * longer time for the remaining items to complete rendering.
       */targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"},/**
       * When the global `suppressTemplateNotifications` setting is used, setting
       * `notifyDomChange: true` will enable firing `dom-change` events on this
       * element.
       */notifyDomChange:{type:Boolean},/**
       * When chunking is enabled via `initialCount` and the `items` array is
       * set to a new array, this flag controls whether the previously rendered
       * instances are reused or not.
       *
       * When `true`, any previously rendered template instances are updated in
       * place to their new item values synchronously in one shot, and then any
       * further items (if any) are chunked out.  When `false`, the list is
       * returned back to its `initialCount` (any instances over the initial
       * count are discarded) and the remainder of the list is chunked back in.
       * Set this to `true` to avoid re-creating the list and losing scroll
       * position, although note that when changing the list to completely
       * different data the render thread will be blocked until all existing
       * instances are updated to their new data.
       */reuseChunkedInstances:{type:Boolean}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super();this.__instances=[];this.__renderDebouncer=null;this.__itemsIdxToInstIdx={};this.__chunkCount=null;this.__renderStartTime=null;this.__itemsArrayChanged=!1;this.__shouldMeasureChunk=!1;this.__shouldContinueChunking=!1;this.__chunkingId=0;this.__sortFn=null;this.__filterFn=null;this.__observePaths=null;/** @type {?function(new:TemplateInstanceBase, Object=)} */this.__ctor=null;this.__isDetached=!0;this.template=null;/** @type {TemplateInfo} */this._templateInfo}/**
     * @override
     * @return {void}
     */disconnectedCallback(){super.disconnectedCallback();this.__isDetached=!0;for(let i=0;i<this.__instances.length;i++){this.__detachInstance(i)}}/**
     * @override
     * @return {void}
     */connectedCallback(){super.connectedCallback();if(!hideElementsGlobally()){this.style.display="none"}// only perform attachment if the element was previously detached.
if(this.__isDetached){this.__isDetached=!1;let wrappedParent=wrap(wrap(this).parentNode);for(let i=0;i<this.__instances.length;i++){this.__attachInstance(i,wrappedParent)}}}__ensureTemplatized(){// Templatizing (generating the instance constructor) needs to wait
// until ready, since won't have its template content handed back to
// it until then
if(!this.__ctor){// When `removeNestedTemplates` is true, the "template" is the element
// itself, which has been given a `_templateInfo` property
const thisAsTemplate=/** @type {!HTMLTemplateElement} */ /** @type {!HTMLElement} */this;let template=this.template=thisAsTemplate._templateInfo?thisAsTemplate:/** @type {!HTMLTemplateElement} */this.querySelector("template");if(!template){// Wait until childList changes and template should be there by then
let observer=new MutationObserver(()=>{if(this.querySelector("template")){observer.disconnect();this.__render()}else{throw new Error("dom-repeat requires a <template> child")}});observer.observe(this,{childList:!0});return!1}// Template instance props that should be excluded from forwarding
let instanceProps={};instanceProps[this.as]=!0;instanceProps[this.indexAs]=!0;instanceProps[this.itemsIndexAs]=!0;this.__ctor=templatize(template,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:instanceProps,/**
         * @this {DomRepeat}
         * @param {string} prop Property to set
         * @param {*} value Value to set property to
         */forwardHostProp:function(prop,value){let i$=this.__instances;for(let i=0,inst;i<i$.length&&(inst=i$[i]);i++){inst.forwardHostProp(prop,value)}},/**
         * @this {DomRepeat}
         * @param {Object} inst Instance to notify
         * @param {string} prop Property to notify
         * @param {*} value Value to notify
         */notifyInstanceProp:function(inst,prop,value){if(matches$1(this.as,prop)){let idx=inst[this.itemsIndexAs];if(prop==this.as){this.items[idx]=value}let path=translate(this.as,`${JSCompiler_renameProperty("items",this)}.${idx}`,prop);this.notifyPath(path,value)}}})}return!0}__getMethodHost(){// Technically this should be the owner of the outermost template.
// In shadow dom, this is always getRootNode().host, but we can
// approximate this via cooperation with our dataHost always setting
// `_methodHost` as long as there were bindings (or id's) on this
// instance causing it to get a dataHost.
return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(functionOrMethodName){if("string"===typeof functionOrMethodName){let methodName=functionOrMethodName,obj=this.__getMethodHost();return function(){return obj[methodName].apply(obj,arguments)}}return functionOrMethodName}__sortChanged(sort){this.__sortFn=this.__functionFromPropertyValue(sort);if(this.items){this.__debounceRender(this.__render)}}__filterChanged(filter){this.__filterFn=this.__functionFromPropertyValue(filter);if(this.items){this.__debounceRender(this.__render)}}__computeFrameTime(rate){return Math.ceil(1e3/rate)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__handleObservedPaths(path){// Handle cases where path changes should cause a re-sort/filter
if(this.__sortFn||this.__filterFn){if(!path){// Always re-render if the item itself changed
this.__debounceRender(this.__render,this.delay)}else if(this.__observePaths){// Otherwise, re-render if the path changed matches an observed path
let paths=this.__observePaths;for(let i=0;i<paths.length;i++){if(0===path.indexOf(paths[i])){this.__debounceRender(this.__render,this.delay)}}}}}__itemsChanged(change){if(this.items&&!Array.isArray(this.items)){console.warn("dom-repeat expected array for `items`, found",this.items)}// If path was to an item (e.g. 'items.3' or 'items.3.foo'), forward the
// path to that instance synchronously (returns false for non-item paths)
if(!this.__handleItemPath(change.path,change.value)){// Otherwise, the array was reset ('items') or spliced ('items.splices'),
// so queue a render.  Restart chunking when the items changed (for
// backward compatibility), unless `reuseChunkedInstances` option is set
if("items"===change.path){this.__itemsArrayChanged=!0}this.__debounceRender(this.__render)}}/**
     * @param {function(this:DomRepeat)} fn Function to debounce.
     * @param {number=} delay Delay in ms to debounce by.
     */__debounceRender(fn,delay=0){this.__renderDebouncer=Debouncer.debounce(this.__renderDebouncer,0<delay?timeOut.after(delay):microTask,fn.bind(this));enqueueDebouncer(this.__renderDebouncer)}/**
     * Forces the element to render its content. Normally rendering is
     * asynchronous to a provoking change. This is done for efficiency so
     * that multiple changes trigger only a single render. The render method
     * should be called if, for example, template rendering is required to
     * validate application state.
     * @return {void}
     */render(){// Queue this repeater, then flush all in order
this.__debounceRender(this.__render);flush()}__render(){if(!this.__ensureTemplatized()){// No template found yet
return}let items=this.items||[];// Sort and filter the items into a mapping array from instance->item
const isntIdxToItemsIdx=this.__sortAndFilterItems(items),limit=this.__calculateLimit(isntIdxToItemsIdx.length);// If we're chunking, increase the limit if there are new instances to
// create and schedule the next chunk
// Create, update, and/or remove instances
this.__updateInstances(items,limit,isntIdxToItemsIdx);// If we're chunking, schedule a rAF task to measure/continue chunking.     
// Do this before any notifying events (renderedItemCount & dom-change)
// since those could modify items and enqueue a new full render which will
// pre-empt this measurement.
if(this.initialCount&&(this.__shouldMeasureChunk||this.__shouldContinueChunking)){cancelAnimationFrame(this.__chunkingId);this.__chunkingId=requestAnimationFrame(()=>this.__continueChunking())}// Set rendered item count
this._setRenderedItemCount(this.__instances.length);// Notify users
if(!suppressTemplateNotifications||this.notifyDomChange){this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}}__sortAndFilterItems(items){// Generate array maping the instance index to the items array index
let isntIdxToItemsIdx=Array(items.length);for(let i=0;i<items.length;i++){isntIdxToItemsIdx[i]=i}// Apply user filter
if(this.__filterFn){isntIdxToItemsIdx=isntIdxToItemsIdx.filter((i,idx,array)=>this.__filterFn(items[i],idx,array))}// Apply user sort
if(this.__sortFn){isntIdxToItemsIdx.sort((a,b)=>this.__sortFn(items[a],items[b]))}return isntIdxToItemsIdx}__calculateLimit(filteredItemCount){let limit=filteredItemCount;const currentCount=this.__instances.length;// When chunking, we increase the limit from the currently rendered count
// by the chunk count that is re-calculated after each rAF (with special
// cases for reseting the limit to initialCount after changing items)
if(this.initialCount){let newCount;if(!this.__chunkCount||this.__itemsArrayChanged&&!this.reuseChunkedInstances){// Limit next render to the initial count
limit=Math.min(filteredItemCount,this.initialCount);// Subtract off any existing instances to determine the number of
// instances that will be created
newCount=Math.max(limit-currentCount,0);// Initialize the chunk size with how many items we're creating
this.__chunkCount=newCount||1}else{// The number of new instances that will be created is based on the
// existing instances, the new list size, and the chunk size
newCount=Math.min(Math.max(filteredItemCount-currentCount,0),this.__chunkCount);// Update the limit based on how many new items we're making, limited
// buy the total size of the list
limit=Math.min(currentCount+newCount,filteredItemCount)}// Record some state about chunking for use in `__continueChunking`
this.__shouldMeasureChunk=newCount===this.__chunkCount;this.__shouldContinueChunking=limit<filteredItemCount;this.__renderStartTime=performance.now()}this.__itemsArrayChanged=!1;return limit}__continueChunking(){// Simple auto chunkSize throttling algorithm based on feedback loop:
// measure actual time between frames and scale chunk count by ratio of
// target/actual frame time.  Only modify chunk size if our measurement
// reflects the cost of a creating a full chunk's worth of instances; this
// avoids scaling up the chunk size if we e.g. quickly re-rendered instances
// in place
if(this.__shouldMeasureChunk){const renderTime=performance.now()-this.__renderStartTime,ratio=this._targetFrameTime/renderTime;this.__chunkCount=Math.round(this.__chunkCount*ratio)||1}// Enqueue a new render if we haven't reached the full size of the list
if(this.__shouldContinueChunking){this.__debounceRender(this.__render)}}__updateInstances(items,limit,isntIdxToItemsIdx){// items->inst map kept for item path forwarding
const itemsIdxToInstIdx=this.__itemsIdxToInstIdx={};let instIdx;// Generate instances and assign items
for(instIdx=0;instIdx<limit;instIdx++){let inst=this.__instances[instIdx],itemIdx=isntIdxToItemsIdx[instIdx],item=items[itemIdx];itemsIdxToInstIdx[itemIdx]=instIdx;if(inst){inst._setPendingProperty(this.as,item);inst._setPendingProperty(this.indexAs,instIdx);inst._setPendingProperty(this.itemsIndexAs,itemIdx);inst._flushProperties()}else{this.__insertInstance(item,instIdx,itemIdx)}}// Remove any extra instances from previous state
for(let i=this.__instances.length-1;i>=instIdx;i--){this.__detachAndRemoveInstance(i)}}__detachInstance(idx){let inst=this.__instances[idx];const wrappedRoot=wrap(inst.root);for(let i=0,el;i<inst.children.length;i++){el=inst.children[i];wrappedRoot.appendChild(el)}return inst}__attachInstance(idx,parent){let inst=this.__instances[idx];// Note, this is pre-wrapped as an optimization
parent.insertBefore(inst.root,this)}__detachAndRemoveInstance(idx){this.__detachInstance(idx);this.__instances.splice(idx,1)}__stampInstance(item,instIdx,itemIdx){let model={};model[this.as]=item;model[this.indexAs]=instIdx;model[this.itemsIndexAs]=itemIdx;return new this.__ctor(model)}__insertInstance(item,instIdx,itemIdx){const inst=this.__stampInstance(item,instIdx,itemIdx);let beforeRow=this.__instances[instIdx+1],beforeNode=beforeRow?beforeRow.children[0]:this;wrap(wrap(this).parentNode).insertBefore(inst.root,beforeNode);this.__instances[instIdx]=inst;return inst}// Implements extension point from Templatize mixin
/**
   * Shows or hides the template instance top level child elements. For
   * text nodes, `textContent` is removed while "hidden" and replaced when
   * "shown."
   * @param {boolean} hidden Set to true to hide the children;
   * set to false to show them.
   * @return {void}
   * @protected
   */_showHideChildren(hidden){for(let i=0;i<this.__instances.length;i++){this.__instances[i]._showHideChildren(hidden)}}// Called as a side effect of a host items.<key>.<path> path change,
// responsible for notifying item.<path> changes to inst for key
__handleItemPath(path,value){let itemsPath=path.slice(6),dot=itemsPath.indexOf("."),itemsIdx=0>dot?itemsPath:itemsPath.substring(0,dot);// 'items.'.length == 6
// If path was index into array...
if(itemsIdx==parseInt(itemsIdx,10)){let itemSubPath=0>dot?"":itemsPath.substring(dot+1);// If the path is observed, it will trigger a full refresh
this.__handleObservedPaths(itemSubPath);// Note, even if a rull refresh is triggered, always do the path
// notification because unless mutableData is used for dom-repeat
// and all elements in the instance subtree, a full refresh may
// not trigger the proper update.
let instIdx=this.__itemsIdxToInstIdx[itemsIdx],inst=this.__instances[instIdx];if(inst){let itemPath=this.as+(itemSubPath?"."+itemSubPath:"");// This is effectively `notifyPath`, but avoids some of the overhead
// of the public API
inst._setPendingPropertyOrPath(itemPath,value,!1,!0);inst._flushProperties()}return!0}}/**
     * Returns the item associated with a given element stamped by
     * this `dom-repeat`.
     *
     * Note, to modify sub-properties of the item,
     * `modelForElement(el).set('item.<sub-prop>', value)`
     * should be used.
     *
     * @param {!HTMLElement} el Element for which to return the item.
     * @return {*} Item associated with the element.
     */itemForElement(el){let instance=this.modelForElement(el);return instance&&instance[this.as]}/**
     * Returns the inst index for a given element stamped by this `dom-repeat`.
     * If `sort` is provided, the index will reflect the sorted order (rather
     * than the original array order).
     *
     * @param {!HTMLElement} el Element for which to return the index.
     * @return {?number} Row index associated with the element (note this may
     *   not correspond to the array index if a user `sort` is applied).
     */indexForElement(el){let instance=this.modelForElement(el);return instance&&instance[this.indexAs]}/**
     * Returns the template "model" associated with a given element, which
     * serves as the binding scope for the template instance the element is
     * contained in. A template model
     * should be used to manipulate data associated with this template instance.
     *
     * Example:
     *
     *   let model = modelForElement(el);
     *   if (model.index < 10) {
     *     model.set('item.checked', true);
     *   }
     *
     * @param {!HTMLElement} el Element for which to return a template model.
     * @return {TemplateInstanceBase} Model representing the binding scope for
     *   the element.
     */modelForElement(el){return modelForElement(this.template,el)}}_exports.DomRepeat=DomRepeat;customElements.define(DomRepeat.is,DomRepeat);var domRepeat={DomRepeat:DomRepeat};_exports.$domRepeat=domRepeat;const posts=[{backgroundImage:"https://devmagazine.co/wp-content/uploads/2018/06/Polymer-3.png",title:"Polymer 3",subtitle:"Documentation",content:"Libraries, tools, and standards for a better web: LitElement, lit-html, web components...",link:"https://polymer-library.polymer-project.org/3.0/docs/about_30"},{backgroundImage:"https://miro.medium.com/max/4864/1*t86kVhDHmyg1hJ70TihDbg.png",title:"Material Design",subtitle:"Components",content:"Material Components are interactive building blocks for creating a user interface.",link:"https://material.io/components?platform=web"},{backgroundImage:"https://www.ryadel.com/wp-content/uploads/2017/10/angular-logo.jpg",title:"Angular",subtitle:"Components",content:"Angular is an application design framework and development platform.",link:"https://angular.io/docs"},{backgroundImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZofSFW4yiF4XMgKFdX969sL13_qY-pX8cEA&usqp=CAU",title:"Vue.js",subtitle:"Components",content:"Vue (pronounced /vju\u02D0/, like view) is a progressive framework for building ui. ",link:"https://vuejs.org/v2/guide/"},{backgroundImage:"https://blog.desafiolatam.com/wp-content/uploads/2019/04/react-galaxia.png",title:"React",subtitle:"Components",content:"A JavaScript library for building user interfaces - Declarative, Component Based, Learn Once, Write Everywhere",link:"https://reactjs.org/docs/getting-started.html"}];_exports.posts=posts;var blogPosts={posts:posts};_exports.$blogPosts=blogPosts;class Drawer$1 extends PolymerElement{constructor(){super()}static get template(){return html$1` <mwc-drawer hasHeader type="modal">
      <span slot="title">Drawer Title</span>
      <span slot="subtitle">subtitle</span>
      <div>
        <p>Drawer content!</p>
        <mwc-icon-button icon="gesture"></mwc-icon-button>
        <mwc-icon-button icon="gavel"></mwc-icon-button>
      </div>
      <div slot="appContent">
        <mwc-top-app-bar>
          <mwc-icon-button slot="navigationIcon" icon="menu"></mwc-icon-button>
          <div slot="title">Title</div>
        </mwc-top-app-bar>
        <div>
          <p>Main Content!</p>
        </div>
      </div>
    </mwc-drawer>`}}customElements.define("app-drawer",Drawer$1);class Header extends PolymerElement{static get template(){return html$1`
      <style>
        mwc-drawer {
          --mdc-drawer-width: 375px;
          font-family: 'roboto', sans-serif;
        }

        .c-drawer__content {
          padding: 0 10px;
        }

        ul {
          list-style: none;
          padding: 0 10px;
          margin: 0;
        }

        ul li {
          margin-bottom: 15px;
        }

        ul li a {
          color: #000;
          text-decoration: none;
        }
      </style>

      <mwc-drawer hasHeader type="modal">
        <span slot="title">[[title]]</span>
        <div class="c-drawer__content">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <div slot="appContent">
          <mwc-top-app-bar>
            <mwc-icon-button
              on-click="toggleDrawer"
              icon="menu"
              slot="navigationIcon"
            ></mwc-icon-button>
            <div slot="title">[[title]]</div>
            <mwc-icon-button icon="code" slot="actionItems"></mwc-icon-button>
            <mwc-icon-button icon="print" slot="actionItems"></mwc-icon-button>
            <mwc-icon-button
              icon="favorite"
              slot="actionItems"
            ></mwc-icon-button>
          </mwc-top-app-bar>
        </div>
      </mwc-drawer>
    `}static get properties(){return{title:{type:String}}}toggleDrawer(){const drawer=this.shadowRoot.querySelector("mwc-drawer");if(drawer){const container=drawer.parentNode;container.addEventListener("MDCTopAppBar:nav",()=>{drawer.open=!drawer.open})}}}customElements.define("app-header",Header);class BlogPost extends PolymerElement{static get template(){return html$1`
      <style>
        .c-card {
          font-family: 'roboto', sans-serif;
          border-radius: 4px;
          box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
            0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
          display: flex;
          flex-direction: column;
          min-height: 250px;
          width: 100%;
          justify-content: center;
          margin: 15px auto;
          max-width: 95%;
        }

        @media screen and (min-width: 440px) {
          max-width: 80%;
        }

        @media screen and (min-width: 700px) {
          .c-card {
            width: calc(50% - 30px);
            margin: 15px;
          }
        }

        @media screen and (min-width: 1024px) {
          .c-card {
            width: 25%;
            justify-content: flex-start;
            margin: 25px 15px 15px 15px;
            max-width: 330px;
          }
        }

        .c-card__media {
          position: relative;
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
        }

        .c-card__media::before {
          display: block;
          content: '';
          margin-top: 56.25%;
        }

        .c-card__wrapper {
          padding: 16px 16px 0 16px;
        }

        .c-card__title {
          font-family: Roboto, sans-serif;
          font-size: 1.25rem;
          line-height: 2rem;
          font-weight: 500;
          letter-spacing: 0.0125em;
          margin: 0;
        }

        .c-card__subtitle {
          font-family: Roboto, sans-serif;
          font-size: 0.875rem;
          line-height: 1.25rem;
          font-weight: 400;
          letter-spacing: 0.0178571429em;
          opacity: 0.6;
          margin: 0;
        }

        .c-card__content {
          font-family: Roboto, sans-serif;
          font-size: 0.875rem;
          line-height: 1.25rem;
          font-weight: 400;
          letter-spacing: 0.0178571429em;
          opacity: 0.6;
        }

        .c-card__actions {
          display: flex;
          flex-direction: row;
          align-items: center;
          box-sizing: border-box;
          min-height: 52px;
          padding: 8px;
        }

        .c-card__btn {
          margin-left: 0;
          margin-right: 8px;
          padding: 0 8px;
          display: inline-flex;
          flex-direction: row;
          align-items: center;
          box-sizing: border-box;
          justify-content: center;
          cursor: pointer;
          user-select: none;
          height: 36px;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          will-change: transform, opacity;
          font-size: 0.875rem;
          font-weight: 500;
          letter-spacing: 0.0892857143em;
          text-decoration: none;
          text-transform: uppercase;
          min-width: 64px;
          border: none;
          outline: none;
          line-height: inherit;
          position: relative;
          appearance: none;
          overflow: visible;
          vertical-align: middle;
          border-radius: 4px;
        }

        .c-card__btn:hover {
          cursor: pointer;
          background-color: #6200ee;
        }

        .c-card__btn:not(:disabled) {
          background-color: transparent;
        }
      </style>

      <template is="dom-repeat" items="[[posts]]">
        <div class="c-card">
          <div
            class="c-card__media"
            style="background-image: url({{item.backgroundImage}})"
          ></div>
          <div class="c-card__wrapper">
            <h3 class="c-card__title">{{item.title}}</h3>
            <p class="c-card__subtitle">{{item.subtitle}}</p>
          </div>
          <div class="c-card__wrapper">
            <p class="c-card__content">{{item.content}}</p>
          </div>
          <div class="c-card__actions">
            <a class="c-card__btn" href="{{item.link}}" target="_blank"
              >Read more about {{item.title}}</a
            >
          </div>
        </div>
      </template>
    `}ready(){super.ready()}static get properties(){return{backgroundImage:{type:String,value:"https://devmagazine.co/wp-content/uploads/2018/06/Polymer-3.png"},posts:{type:Array,value:()=>[...posts]}}}}customElements.define("app-post",BlogPost);class PolymerBlog extends PolymerElement{constructor(){super()}static get template(){return html$1`
      <style>
        :host app-post {
          display: flex;
          flex-wrap: wrap;
        }
      </style>
      <app-header title="Wegrix Resources"></app-header>
      <app-post></app-post>
    `}}customElements.define("polymer-blog",PolymerBlog)});