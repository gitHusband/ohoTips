(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["oho"] = factory();
	else
		root["oho"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/common.js":
/*!**************************!*\
  !*** ./src/js/common.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "regNum": () => (/* binding */ regNum),
/* harmony export */   "regNumNegative": () => (/* binding */ regNumNegative),
/* harmony export */   "regPer": () => (/* binding */ regPer),
/* harmony export */   "regPerNegative": () => (/* binding */ regPerNegative),
/* harmony export */   "noop": () => (/* binding */ noop),
/* harmony export */   "isEmptyNum": () => (/* binding */ isEmptyNum),
/* harmony export */   "numAdd": () => (/* binding */ numAdd),
/* harmony export */   "numAdds": () => (/* binding */ numAdds),
/* harmony export */   "numSub": () => (/* binding */ numSub),
/* harmony export */   "numSubs": () => (/* binding */ numSubs),
/* harmony export */   "numMul": () => (/* binding */ numMul),
/* harmony export */   "numMuls": () => (/* binding */ numMuls),
/* harmony export */   "numDiv": () => (/* binding */ numDiv),
/* harmony export */   "numDivs": () => (/* binding */ numDivs),
/* harmony export */   "isNumber": () => (/* binding */ isNumber),
/* harmony export */   "isString": () => (/* binding */ isString),
/* harmony export */   "isArray": () => (/* binding */ isArray),
/* harmony export */   "isObj": () => (/* binding */ isObj),
/* harmony export */   "isEmptyObj": () => (/* binding */ isEmptyObj),
/* harmony export */   "isObjNotArrry": () => (/* binding */ isObjNotArrry),
/* harmony export */   "extend": () => (/* binding */ extend),
/* harmony export */   "trim": () => (/* binding */ trim),
/* harmony export */   "randomNum": () => (/* binding */ randomNum),
/* harmony export */   "createNode": () => (/* binding */ createNode),
/* harmony export */   "objToStyle": () => (/* binding */ objToStyle),
/* harmony export */   "styleToObj": () => (/* binding */ styleToObj),
/* harmony export */   "addCss": () => (/* binding */ addCss),
/* harmony export */   "addClass": () => (/* binding */ addClass),
/* harmony export */   "removeClass": () => (/* binding */ removeClass),
/* harmony export */   "getStyle": () => (/* binding */ getStyle),
/* harmony export */   "outerWidth": () => (/* binding */ outerWidth),
/* harmony export */   "outerHeight": () => (/* binding */ outerHeight),
/* harmony export */   "innerWidth": () => (/* binding */ innerWidth),
/* harmony export */   "innerHeight": () => (/* binding */ innerHeight),
/* harmony export */   "isComputedPaddingEl": () => (/* binding */ isComputedPaddingEl),
/* harmony export */   "position": () => (/* binding */ position),
/* harmony export */   "relativePosition": () => (/* binding */ relativePosition),
/* harmony export */   "css": () => (/* binding */ css),
/* harmony export */   "getScrollPosition": () => (/* binding */ getScrollPosition),
/* harmony export */   "getScrollWidth": () => (/* binding */ getScrollWidth),
/* harmony export */   "hasScrollbarY": () => (/* binding */ hasScrollbarY),
/* harmony export */   "insertAfter": () => (/* binding */ insertAfter)
/* harmony export */ });
const regNum = /^[\-, \+]?\d+(\.\d+)?([e,E][+-]?\d+)?$/;
const regNumNegative = /^\-\d+(\.\d+)?([e,E][+-]?\d+)?$/;
const regPer = /^[\-, \+]?((\d+\.?\d*)|(\d*\.\d+))([e,E][+-]?\d+)?\%$/;
const regPerNegative = /^\-((\d+\.?\d*)|(\d*\.\d+))([e,E][+-]?\d+)?\%$/;

function noop() {}

function isEmptyNum(num) {
    if(num !== 0 && !num) {     // "", null, undefined, NaN
        return true;
    }else {
        return false;
    }
}

// 两个浮点数求和
function numAdd(num1,num2) {
    let r1,r2,m;
    try{
        r1 = num1.toString().split('.')[1].length;
    }catch(e){
        r1 = 0;
    }
    try{
        r2=num2.toString().split(".")[1].length;
    }catch(e){
        r2=0;
    }
    m=Math.pow(10,Math.max(r1,r2));
    // return (num1*m+num2*m)/m;
    return Math.round(num1*m+num2*m)/m;
}

function numAdds(){
    let result = arguments[0];

    let i = 1;
    for(i; i < arguments.length; i++) {
        result = numAdd(result, arguments[i]);
    }

    return result;
}

// 两个浮点数相减
function numSub(num1,num2) {
    let r1,r2,m;
    try{
        r1 = num1.toString().split('.')[1].length;
    }catch(e){
        r1 = 0;
    }
    try{
        r2=num2.toString().split(".")[1].length;
    }catch(e){
        r2=0;
    }
    m=Math.pow(10,Math.max(r1,r2));
    n=(r1>=r2)?r1:r2;
    return parseFloat((Math.round(num1*m-num2*m)/m).toFixed(n));
}

function numSubs(){
    let result = arguments[0];

    let i = 1;
    for(i; i < arguments.length; i++) {
        result = numSub(result, arguments[i]);
    }

    return result;
}

// 两个浮点数相乘
function numMul(num1,num2) {
    let m=0,s1=num1.toString(),s2=num2.toString();
    try{
        m+=s1.split(".")[1].length
    }catch(e){

    };
    try{
        m+=s2.split(".")[1].length
    }catch(e){

    };
    return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m);
}

function numMuls(){
    let result = arguments[0];

    let i = 1;
    for(i; i < arguments.length; i++) {
        result = numMul(result, arguments[i]);
    }

    return result;
}

// 两个浮点数相除
function numDiv(num1,num2) {
    let t1,t2,r1,r2;
    try{
        t1 = num1.toString().split('.')[1].length;
    }catch(e){
        t1 = 0;
    }
    try{
        t2=num2.toString().split(".")[1].length;
    }catch(e){
        t2=0;
    }
    r1=Number(num1.toString().replace(".",""));
    r2=Number(num2.toString().replace(".",""));
    return (r1/r2)*Math.pow(10,t2-t1);
}

function numDivs(){
    let result = arguments[0];

    let i = 1;
    for(i; i < arguments.length; i++) {
        result = numDiv(result, arguments[i]);
    }

    return result;
}

function isNumber(val) {
    let regPos = /^\d+(\.\d+)?$/; //非负浮点数
    let regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
    if(regPos.test(val) || regNeg.test(val)) {
        return true;
    } else {
        return false;
    }
}

function isString(value) {
    return (typeof value == 'string') && value.constructor == String;
}

function isArray(value) {
    if (typeof Array.isArray === "function") {
        return Array.isArray(value);
    }else{
        return Object.prototype.toString.call(value) === "[object Array]";
    }
}

function isObj(value) {
    // 若value 是 null对象, type 为 "[object Null]"；
    let type = Object.prototype.toString.call(value);
    return type === "[object Object]";
}

function isEmptyObj(value) {
    return Object.getOwnPropertyNames(value).length == 0;
}

//非null对象，非数组对象
function isObjNotArrry(value) {
    return isObj(value) && !isArray(value);
}

function extend(target) {
    if(!target) {
        console.error('No target!')
    }

    function ignore(obj) {
        if(!obj) return false;

        let isJq = false;
        if(window.jQuery){
            isJq = obj instanceof jQuery;
        }

        let isIgnore = isJq;
        return isIgnore;
    }

    let objs = [].slice.call(arguments,1);

    if(objs.length > 0) {
        objs.forEach((item,index) => {
            if(isObjNotArrry(item)) {
                for(let key in item) {
                    if(isObjNotArrry(item[key]) && !ignore(item[key])) {
                        if(! target.hasOwnProperty(key) || !isObjNotArrry(target[key])) target[key] = {};
                        extend(target[key],item[key]);
                    }else {
                        target[key] = item[key];
                    }
                }
            }else {
                console.error('Parameter ' + index + ' is no valid arguments, expected to be object');
            }
        })
    }

    return target;
}

function trim(str, isglobal) {
    let result;
    result = str.replace(/(^\s+)|(\s+$)/g, '');
    if (isglobal && isglobal.toLowerCase() === 'g') {
        result = result.replace(/\s/g, '');
    }
    return result;
}

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createNode(htmlStr) {
    let div = document.createElement("div");
    div.innerHTML = htmlStr;
    return div.childNodes[0].cloneNode(true);
}

function objToStyle(obj) {
    let style = [];
    for(let i in obj){
        style.push(i + ':' + obj[i]);
    }
    style = style.join(';');

    return  style;
}

function styleToObj(style) {
    if (!style || style == '') { return ''; }

    let styleArr = style.split(';')
    styleArr = styleArr.filter(item => {
        return item != '';
    });

    let objStr = '';
    styleArr.forEach(item => {
        let css = '';
        item = item.replace(/(^\s+)|(\s+$)/g, '');
        trim(item).split(':').forEach(cssValue => {
            css += '"' + trim(cssValue) + '":';
        })
        objStr += css + ',';
    })
    objStr = objStr.replace(/:,/g, ',');
    objStr = objStr.substring(0, objStr.lastIndexOf(','));
    objStr = '{' + objStr + '}';
    return JSON.parse(objStr);
}

function addCss(el, cssObj) {
    let oldCssText = el.style.cssText;
    oldCssText = styleToObj(oldCssText) || {};
    if(oldCssText) cssObj = extend({}, oldCssText, cssObj);

    let numberStyleArr = ['opacity'];
    for(let i in cssObj){
        if(numberStyleArr.indexOf(i) != -1) continue; 
        if(isNumber(cssObj[i])) cssObj[i] += "px";
    }
    let cssText = objToStyle(cssObj);

    el.style.cssText = cssText;
}

function addClass(el, className) {
    if(typeof(className) == 'string') {
        className = className.split(' ');
    }

    if(!isArray(className)) {
        return false;
    }

    let oldClass = el.className.split(' ');
    className = className.filter(item => !oldClass.includes(item));
    if(className.length == 0) return;

    className = className.join(' ');

    return el.className += ' ' + className;
}

function removeClass(el, className) {
    if (el.classList) {
        if(typeof(className) == 'string') {
            className = className.split(' ');
        }

        if(!isArray(className)) {
            return false;
        }

        className.forEach(item => {
            el.classList.remove(className);
        });
    }else {
        el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
}

function getStyle(el, styleAttr) {
    let style = getComputedStyle(el);

    if(!styleAttr) {
        return style;
    }else {
        return style[styleAttr];
    }
}

function outerWidth(el, status) {
    let style = getComputedStyle(el);
    let width = parseFloat(style.width) + parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);

    if(!isComputedPaddingEl(el)) width += parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);

    if(!status) return width;

    width += parseFloat(style.marginLeft) + parseFloat(style.marginRight);
    return width;
}

function outerHeight(el, status) {
    let style = getComputedStyle(el);
    let height = parseFloat(style.height) + parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);

    if(!isComputedPaddingEl(el)) height += parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);

    if(!status) return height;
    
    height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
    return height;
}

// export function innerWidth(el, status) {
//     if(!status) return el.clientWidth;

//     let width = el.clientWidth;
//     let style = getComputedStyle(el);

//     width += parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
//     return width;
// }

// export function innerHeight(el, status) {
//     if(!status) return el.clientHeight;

//     let width = el.clientHeight;
//     let style = getComputedStyle(el);

//     width += parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
//     return width;
// }

function innerWidth(el, status) {
    let style = getComputedStyle(el);
    let width = parseFloat(style.width);

    if(isComputedPaddingEl(el) || !status) return width;

    width += parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
    return width;
}

function innerHeight(el, status) {
    let style = getComputedStyle(el);
    let height = parseFloat(style.height);

    if(isComputedPaddingEl(el) || !status) return height;

    height += parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
    return height;
}

// getComputedStyle, width 和 height 已经包含Padding 的元素
function isComputedPaddingEl(el) {
    let elArr = ['button'];
    return elArr.includes(el.localName);
}

// export function position(el) {
//     console.log(el.getBoundingClientRect(), {top: el.offsetTop, left: el.offsetLeft});
//     return {top: el.offsetTop, left: el.offsetLeft};
// }

function position(el) {
    let rect = el.getBoundingClientRect();

    // console.trace();
    // console.log("C.position: ", el, rect, {top: rect.top+scrollY, left: rect.left+scrollX});

    if(css(el, 'position') === 'fixed') {
        return {top: rect.top, left: rect.left};
    } else {
        let t;
        let scrollX = (((t = document.documentElement) || (t = document.body.parentNode)) && typeof t.scrollLeft == 'number' ? t : document.body).scrollLeft;
        let scrollY = (((t = document.documentElement) || (t = document.body.parentNode)) && typeof t.scrollTop == 'number' ? t : document.body).scrollTop;
        return {top: rect.top+scrollY, left: rect.left+scrollX};
    }
    
}

function relativePosition(el) {
    return {top: el.offsetTop, left: el.offsetLeft};
}

function css(el, styleName, value) {
    if(value !== undefined) return el.style[styleName] = value;
    else return getComputedStyle(el)[styleName];
}

function getScrollPosition() {
    let t;
    let scrollX = (((t = document.documentElement) || (t = document.body.parentNode)) && typeof t.scrollLeft == 'number' ? t : document.body).scrollLeft;
    let scrollY = (((t = document.documentElement) || (t = document.body.parentNode)) && typeof t.scrollTop == 'number' ? t : document.body).scrollTop;
    return {x: scrollX, y: scrollY};
}

function getScrollWidth() {
    var noScroll, scroll, oDiv = document.createElement("DIV");
    oDiv.style.cssText = "position:absolute; top:-1000px; width:100px; height:100px; overflow:hidden;";
    noScroll = document.body.appendChild(oDiv).clientWidth;
    oDiv.style.overflowY = "scroll";
    scroll = oDiv.clientWidth;
    document.body.removeChild(oDiv);
    return noScroll-scroll;
}

function hasScrollbarY() {
    return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight);
}

function insertAfter(newElement, targentElement) {
    var parent = targentElement.parentNode;

    if(parent.lastChild == targentElement) {
        parent.appendChild(newElement);
    }else {
        parent.insertBefore(newElement, targentElement.nextSibling)
    }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./src/js/ohoTips.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ohoTips": () => (/* binding */ ohoTips),
/* harmony export */   "ohoTipsPrototype": () => (/* binding */ tips)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./src/js/common.js");


/**
 * tips 插件
 */
    
/**
 * 实例化方式
 * 1. 不传任何参数，则直接返回实例
 * 2. options 只传tips消息字符串或消息数组，则按默认配置弹出消息。其他配置在 extendOptions, 可选的
 * 3. options 传入完整配置对象，则按配置弹出消息，不需要 extendOptions
 * @Author   Devin
 * @param    {[type]}                 options       支持消息字符串，消息数组以及完整配置对象
 * @param    {Object}                 extendOptions 仅在消息字符串，消息数组 的情况下可选的，
 * @return   {[type]}                               [description]
 */
function tips(options, extendOptions = {}) {
    if(!options)
        return this;

    this.C = _common_js__WEBPACK_IMPORTED_MODULE_0__;

    // 单独传入消息
    if(_common_js__WEBPACK_IMPORTED_MODULE_0__.isString(options) || _common_js__WEBPACK_IMPORTED_MODULE_0__.isArray(options)) {
        let newOptions = {
            message: options
        };

        options = newOptions;

        if(_common_js__WEBPACK_IMPORTED_MODULE_0__.isObj(extendOptions) && !_common_js__WEBPACK_IMPORTED_MODULE_0__.isEmptyObj(extendOptions)) {
            options = _common_js__WEBPACK_IMPORTED_MODULE_0__.extend({}, extendOptions, options);
        }
    }

    this.init(options);
}

tips.C = _common_js__WEBPACK_IMPORTED_MODULE_0__;

tips.defaultOptions = {
    message: '',                //传入数组可换行, 支持DOM元素，jQuery元素
    html: {
        param: false,                   //false - 文本类型信息，true - dom元素类型信息
        isContainerTransparent: false,  //false - Tips 容器不透明，true - Tips 容器透明
    },
    baseElement: "",            //基准方位元素
    parentElement: "",          //Tips container 直接父元素，注意，基准元素建议也是父元素的子元素，且父元素定位是特殊的定位类型
    direction: 'inner',         //计算Tips定位时，inner - 计算Tips 宽高，尽量使Tips 位于基准元素内部，normal - 不计算Tips宽高，按照position数据来，outer - 计算Tips 宽高，尽量使Tips 位于基准元素外部, outside - 计算Tips 宽高，尽量使Tips 位于基准元素外部； 默认'inner'。
    position: "middle",         //Tips 位置，左上角，上居中，右上角，左居中，全居中，右居中，左下角，下居中，右下角，自定义相对位置，浮动
    offset: {                   //如果position 是对象如{top: 0}，则一般不需要这个，如果是字符串，则可以酌情添加offset, 调整基准元素与Tips 的相对定位, 仅支持top，left
        top: null,
        left: null
    },
    group: {                    //分组，多个Tips 集合，超出分组最大限制个数则删除最开始的Tips
        name: null,                 //分组名称
        maxLength: 9999,            //一个分组最大Tips个数
    },
    type: "normal",             //Tips 样式, 支持自定义样式（传入class名称）
    limit: true,                //限制Tips 的最大宽度 400px
    shadow: false,              //false - 没有阴影， true - 有阴影
    background: false,          //false - 不显示遮罩层覆盖基准元素， true - 显示遮罩层覆盖基准元素
    icon: false,                //是否显示icon, true - 按照type参数自动设置icon类型，支持字符串设置icon类型，主要是形状，如 normal，clock等
    iconOptions: {
        type: 'info',           //当icon 为字符串时，icon主要定制形状(也含颜色)，此时type可以额外设置icon 的色调
        position: 'left',       //icon 的位置，支持top, left, bottom, right
    },
    symbol: false,              //是否显示binder, true - 默认triangle，支持字符串设置symbol类型，如 triangle等，目前仅支持triangle
    symbolOptions: {
        type: null,             //如果不设置，symbol则按option.type 色调，否则按该参数的色调
        position: null,         //如果不设置，symbol则根据option.position 设置定位(不一定一样)，否则按该参数定位
        // offset: {               //如果启用symbol，symbol不计算宽高，则可以酌情添加offset, 调整父元素与Tips 的相对定位, 仅支持top，left
        //     top: null,
        //     left: null
        // }
    },
    destroy: "auto",            //auto - 自动销毁Tips，manual - 不自动销毁Tips，需手动销毁, never - 从不销毁Tips
    delay: 2000,                //自动销毁Tips 延时，单位：ms
    animation: {                //动画
        in: 'default',              //Tips 显示动画
        out: 'default',             //Tips 隐藏动画
        fragments: {
            type: 1,                    // 两种创建fragment 的算法，0和1，1 体验更好
            basePix: 10,                // 对应type = 0, 最小的像素, type 1则不需要该参数
            xCount: 10,                 // 对应type = 1, 水平fragment的个数
            yCount: 10,                 // 对应type = 1, 垂直fragment的个数
        },
        delay: 1000,                //Tips 动画执行时间，延时时间删除Tips
        customAmtFuntion: null,     //自定义Tips 动画函数
    },
    float: {                    //浮动参数，当position 等于 'float' 或 'translate' 时，可选；其余情况不需要 
        type: 'default',            //可选择默认浮动方法，浮动方法支持自定义，见 customFloatType
        customFloatOptions: null,   //自定义浮动选项
        customFloatStatus: null,    //自定义浮动初始状态，top，left等
        customFloatType: null,      //自定义浮动类型的方法, 参考 floatTypeDefault 方法
    },
    events: {
        beforeCreated: _common_js__WEBPACK_IMPORTED_MODULE_0__.noop,      //Tips 创建消息之前 触发
        created: _common_js__WEBPACK_IMPORTED_MODULE_0__.noop,            //Tips 创建消息之后 触发
        beforeShown: _common_js__WEBPACK_IMPORTED_MODULE_0__.noop,        //Tips 创建消息之后，展示之前 触发
        shown: _common_js__WEBPACK_IMPORTED_MODULE_0__.noop,              //Tips 展示之后 触发
        beforeDestroyed: _common_js__WEBPACK_IMPORTED_MODULE_0__.noop,    //Tips 销毁之前 触发
        destroyed: _common_js__WEBPACK_IMPORTED_MODULE_0__.noop,          //Tips 销毁之后 触发
        beforeFloated: _common_js__WEBPACK_IMPORTED_MODULE_0__.noop,      //Tips 每次浮动之前 触发
        floated: _common_js__WEBPACK_IMPORTED_MODULE_0__.noop,            //Tips 每次浮动之后 触发
    },
    debug: true                     //debug 默认打开，打开可以调试log。 error, warn 类型的log 不受此影响
};

tips._defaultOptions = null;

// 设置默认参数，全局生效
tips.setDefOptions = function(defOptions) {
    if(!tips._defaultOptions) tips._defaultOptions = tips.defaultOptions;

    tips.defaultOptions = _common_js__WEBPACK_IMPORTED_MODULE_0__.extend({}, tips.defaultOptions, defOptions);
};

// 重置默认参数
tips.resetDefOptions = function() {
    if(tips._defaultOptions) tips.defaultOptions = _common_js__WEBPACK_IMPORTED_MODULE_0__.extend({}, tips._defaultOptions);
};

tips.floatOptions = {
    topStart: 0,                //浮动起始位置 Top
    leftStart: 0,               //浮动起始位置 Left
    status: true,               //浮动状态，一般用于转折点改变方向趋势
    offsetType: '',             //每次改变状态量的类型，px 或 百分比，默认px
    xMinThreshold: 0,           //x轴相对于基准元素的最小偏差值
    xMaxThreshold: '',          //x轴相对于基准元素的最大偏差值
    xOffsetLen: 1,              //x轴一次的偏差量
    yMinThreshold: 0,           //y轴相对于基准元素的最小偏差值
    yMaxThreshold: '',          //y轴相对于基准元素的最大偏差值
    yOffsetLen: 1,              //y轴一次的偏差量
    delay: 1,                   //浮动位置的时间间隔
};

/**
 * 每个Tips 实例都会查找groups数组，判断实例的组是否已经存在，存在则直接往存在的组里插入Tips
 * @type {Array}
 */
tips.groups = [];

/**
 * 调试信息需要设置 debug 配置 true, 支持任意多个消息参数
 */
tips.prototype.writeLog = function(level, ...message) {
    if((level != 'error' || level != 'warn') && !this.options.debug) return false;

    console[level](...message);
};

/**
 * 初始化展示Tips。
 * @param    {[type]}                 options [description]
 * @return   {[type]}                         [description]
 */
tips.prototype.init = function(options) {
    //生成实例唯一id，方便同个组里识别彼此
    this.id = this.uniqueId();

    this.options = _common_js__WEBPACK_IMPORTED_MODULE_0__.extend({}, tips.defaultOptions, options);
    
    this.backup = {
        _baseElm : null,                //备份基准元素
        _parentElm : null,              //Tips container 直接父元素
        _tipContainerElm : null,        //备份Tips 容器元素
        _tipGroupElm : null,            //备份Tips 分组元素
        _tipElm : null,                 //备份Tips 元素
        _symbolBoxElm: null,            //备份symbol Box 元素，是Tips 元素（_tipElm）的直接子元素
        _tipBoxElm: null,               //备份Tips Box 元素，是symbol Box 元素（_symbolBoxElm）的直接子元素
        _symbolElm : null,              //备份symbol 元素
        _backgroundElem: null,          //备份遮罩层元素
        _group: {                       //备份组状态
            isExisted: false,
            id: null,
        },
        _floatStatus: {},               //备份当前定位
    };

    this.monitor = {
        floatPosition : {},         //浮动定位，支持自定义浮动方式
        floatTranslate : {},        //浮动定位，支持自定义浮动方式
    };

    this.tGroups = tips.groups;     //每个Tips 实例都会查找groups数组，判断实例的组是否已经存在，存在则直接往存在的组里插入Tips.groups;

    this.event = null;              //触发Tips 重新定位的事件

    this.initTips();

    this.checkGroup();

    return this;
};

/**
 * 设置消息
 * 用户不设置，则根据type 自动设置
 * @return   {[type]}                 [description]
 */
tips.prototype.initMsg = function() {
    if(this.options.message == "") {
        switch(this.options.type) {
            case "success" :    this.options.message = "保存成功";
                break;
            case "error" :  this.options.message = "保存失败";
                break;
            case "warning" :    this.options.message = "警告";
                break;
            case "info" :this.options.message = "tips 小工具";
                break;
            default:    this.options.message = "tips 小工具";
                break;
        }
    }
};

/**
 * 判断是否是 Html 类型的消息
 */
tips.prototype.isHtmlMessage = function() {
    let options = this.options;

    if(options.html === true 
        || (_common_js__WEBPACK_IMPORTED_MODULE_0__.isObj(options.html) && options.html.param === true)
        || options.message instanceof HTMLElement
        || options.message instanceof jQuery)
    {
        return true;
    } else {
        return false;
    }
}

/**
 * 设置Tips css 类。
 * 包括消息，图标，遮罩层，阴影，标志等
 */
tips.prototype.setClass = function() {
    let optType = this.options.type;
    let optLimit = this.options.limit;
    let optShadow = this.options.shadow;
    let optIcon = this.options.icon;
    let optSymbol = this.options.symbol;
    let optHtml = this.options.html;

    // ohoTip-hide 动画用，首先设置为全透明
    let tipClass = "ohoTip ohoTip-hide";
    let tipBoxClass = "ohoTip-box";
    let bgClass = "ohoTip-bg ohoTip-hide";
    let messageClass = "";
    let iconClass = "";
    let symbolClass = "";

    // 限制Tips 宽度或者高度
    if(optLimit) {
        tipClass = tipClass + " ohoTip-limit";
    }
    // 是否显示阴影
    if(!optShadow) {
        tipBoxClass = tipBoxClass + ' ohoTip-box-no-shadow';
    }

    if(this.isHtmlMessage()) {
        tipBoxClass = tipBoxClass + ' ohoTip-box-html';
        if(_common_js__WEBPACK_IMPORTED_MODULE_0__.isObj(optHtml) && optHtml.isContainerTransparent) tipBoxClass = tipBoxClass + ' ohoTip-box-html-transparent';
    }

    switch(optType) {
        case "normal" :
            messageClass = "ohoTip-message";
            iconClass = "ohoTip-icon icon-check";
            symbolClass = "ohoTip-symbol";
            break;
        case "success" :
            tipBoxClass = tipBoxClass + " ohoTip-success";
            messageClass = "ohoTip-message ohoTip-message-success";
            iconClass = "ohoTip-icon icon-check";
            symbolClass = "ohoTip-symbol symbol-success";
            break;
        case "error" :
            tipBoxClass = tipBoxClass + " ohoTip-error";
            messageClass = "ohoTip-message ohoTip-message-error";
            iconClass = "ohoTip-icon icon-cross";
            symbolClass = "ohoTip-symbol symbol-error";
            break;
        case "warning" :
            tipBoxClass = tipBoxClass + " ohoTip-warning";
            messageClass = "ohoTip-message ohoTip-message-warning";
            iconClass = "ohoTip-icon icon-exclamation";
            symbolClass = "ohoTip-symbol symbol-warning";
            break;
        case "info" :
            tipBoxClass = tipBoxClass + " ohoTip-info";  
            messageClass = "ohoTip-message ohoTip-message-info";
            iconClass = "ohoTip-icon icon-exclamation-circle";
            symbolClass = "ohoTip-symbol symbol-info";
            break;
        default :
            messageClass = optType;        //用户自定义
            iconClass = "ohoTip-icon icon-check";
            symbolClass = "ohoTip-symbol";
            break;
    }

    if(optIcon) {
        tipBoxClass = tipBoxClass + " ohoTip-add-icon" + " icon-" + this.options.iconOptions.position;
        // 如果icon 为true，色调基于option.type。 如果为字符串，则根据字符串设置
        if(typeof optIcon == 'string') {
            iconClass = "ohoTip-icon";
            switch(optIcon) {
                case "normal" :
                    iconClass = iconClass + " icon-check";
                    break;
                case "success" :
                    iconClass = iconClass + " icon-check icon-success";
                    break;
                case "error" :
                    iconClass = iconClass + " icon-cross icon-error";
                    break;
                case "warning" :
                    iconClass = iconClass + " icon-exclamation icon-warning";
                    break;
                case "info" :
                    iconClass = iconClass + " icon-exclamation-circle icon-info";
                    break;
                case "clock" :
                    iconClass = iconClass + " icon-clock icon-" + this.options.iconOptions.type;
                    break;
                default:
                    iconClass = icon;   // 用户自定义
                    break;
            }
        }
    }

    if(optSymbol) {
        // 如果symbolOptions.type 为空，色调基于option.type。 如果为字符串，则根据字符串设置色调
        if(this.options.symbolOptions.type) {
            symbolClass = "ohoTip-symbol";
            switch(this.options.symbolOptions.type) {
                case "normal" :
                case "success" :
                case "error" :
                case "warning" :
                case "info" :
                    symbolClass = "ohoTip-symbol symbol-" + this.options.symbolOptions.type;
                    break;
                default:
                    symbolClass = "ohoTip-symbol " + this.options.symbolOptions.type;   // 用户自定义
                    break;
            }
        }
    }

    // 部分类型没有启用，对应cssClass 也没用
    let cssClass = {
        tip: tipClass,
        tipBox: tipBoxClass,
        bg: bgClass,
        message: messageClass,
        icon: iconClass,
        symbol: symbolClass
    };

    this.cssClass = cssClass;

    return cssClass;
};

/**
 * 设置 Tips 属性
 * 比如组名
 */
tips.prototype.setTipsAttribute = function() {
    let optGroup = this.options.group;
    let tipsAttribute = {};
    if(optGroup.name) {
        tipsAttribute.tipName = optGroup.name;
    }else {
        tipsAttribute.tipName = new Date().getTime();
    }

    this.tipsAttribute = tipsAttribute;

    return tipsAttribute;
};

/**
 * 获取基准元素
 */
tips.prototype.getBaseElememt = function(options) {
    let $base = null;

    if(!options.baseElement) {
        $base = document.querySelector("body");
    }else if(options.baseElement instanceof HTMLElement) {
        $base = options.baseElement;
    }else if(window.jQuery && options.baseElement instanceof jQuery) {
        $base = options.baseElement[0];
    }else {
        $base = document.querySelector(options.baseElement);
    }

    return $base;
};

/**
 * 获取Tips container 直接父元素
 * 
 * 说明：特殊的定位，比如，position: relative / absolute / fixed 。 如果这种定位类型的父元素的子元素的定位是 absolute，定位以父元素为基准。
 * 
 * 根据这个特性，我们可以：
 * 1. 用户可以根据这个特性自定义父元素，注意，基准元素建议也是父元素的子元素，且父元素定位是特殊的定位类型，否则毫无意义
 * 2. 如果基准元素的定位是特殊定位，我们把 Tips 插入到这个基准元素内部
 * 3. 如果基准元素的直接父元素的定位是特殊定位，我们把 Tips 插入到这个基准元素的直接父元素
 * 4. 以上均不匹配，那么父元素就是 BODY
 */
tips.prototype.getParentElememt = function(options, $base) {
    let $parent = null;

    // 用户自定义父元素
    if(!options.parentElement) {
        $parent = null;
    }else if(options.parentElement instanceof HTMLElement) {
        $parent = options.parentElement;
    }else if(window.jQuery && options.parentElement instanceof jQuery) {
        $parent = options.parentElement[0];
    }else {
        $parent = document.querySelector(options.parentElement);
    }

    // 如果没有自定义父元素，那么就自动根据基准元素来获取父元素
    if(!$parent) {
        // 如果基准元素Postion 是特殊定位，则Tips插入到基准元素内
        let baseStylePosition = _common_js__WEBPACK_IMPORTED_MODULE_0__.getStyle($base, 'position');

        if(this.isSpecialStylePosition(baseStylePosition)) {
            $parent = $base;
        }
        // 如果基准元素的直接父元素的定位是特殊定位，我们把 Tips 插入到这个基准元素的直接父元素
        else {
            let baseParentStylePosition = _common_js__WEBPACK_IMPORTED_MODULE_0__.getStyle($base.parentNode, 'position');

            if(this.isSpecialStylePosition(baseParentStylePosition)) {
                $parent = $base.parentNode;
            }
            // 以上均不匹配，那么父元素就是 BODY
            else {
                $parent = document.body;
            }
        }
    }

    return $parent;
};

/**
 * 特殊的定位，比如，position: relative / absolute / fixed
 * 如果这种定位类型的父元素的子元素的定位是 absolute，定位以父元素为基准。
 */
tips.prototype.isSpecialStylePosition = function(stylePosition) {
    return ["relative", "absolute", "fixed"].includes(stylePosition);
}

// 获取组元素，同一个组的Tips 将包含在相同的组元素里面
tips.prototype.getTipsGroup = function(options) {
    let tipsAttribute = this.tipsAttribute;
    let groupName = 'tipGroup-' + tipsAttribute.tipName;

    let $tipGroup = document.querySelector("div[group-name='"+groupName+"']");

    if(!$tipGroup) {
        $tipGroup = _common_js__WEBPACK_IMPORTED_MODULE_0__.createNode("<div group-name='"+groupName+"' class='ohoTip-group'>");
    }else {
        this.backup._group.isExisted = true;
    }

    return $tipGroup;
};

// 将Tips 和 背景元素包住，避免凌乱
tips.prototype.getTipsContainer = function(options) {
    let tipsAttribute = this.tipsAttribute;
    let $tipGroup = this.backup._tipGroupElm;
    let $tipContainer = $tipGroup.parentNode;

    if(!$tipContainer) {
        let containerName = 'tipContainer-' + new Date().getTime();
        $tipContainer = _common_js__WEBPACK_IMPORTED_MODULE_0__.createNode("<div name='"+containerName+"' class='ohoTip-container'></div>");
    }

    return $tipContainer;
};

/**
 * 渲染Tips 内容，支持 Dom 元素
 * 包括 消息，图标，标志箭头等
 */
tips.prototype.renderTipsBody = function(options) {
    let $parent = this.backup._parentElm;
    let $tipContainer = this.backup._tipContainerElm;
    let $tipGroup = this.backup._tipGroupElm;
    let cssClass = this.cssClass;
    let tipsAttribute = this.tipsAttribute;

    this.options.events.beforeCreated.call(this);  //Tips 创建消息之前 触发

    let $tip = _common_js__WEBPACK_IMPORTED_MODULE_0__.createNode("<div name='ohoTips' class='"+cssClass.tip+"'>");

    // 用于symbol 启用时，设置对应padding 给symbol 展示空间
    let $symbolBox = _common_js__WEBPACK_IMPORTED_MODULE_0__.createNode("<div name='symbol-box' class='ohoTip-symbol-box'></div>");
    this.backup._symbolBoxElm = $symbolBox;
    $tip.appendChild($symbolBox);

    let $tipBox = _common_js__WEBPACK_IMPORTED_MODULE_0__.createNode("<div class='"+cssClass.tipBox+"'>");
    this.backup._tipBoxElm = $tipBox;
    $symbolBox.appendChild($tipBox);

    let $messageBox = _common_js__WEBPACK_IMPORTED_MODULE_0__.createNode("<div class='"+cssClass.message+"'>");
    let $message;
    if(this.isHtmlMessage()) {       //message 为dom元素
        if(typeof options.message == "string") {
            $message = _common_js__WEBPACK_IMPORTED_MODULE_0__.createNode(options.message);
        }else if(options.message instanceof HTMLElement) {
            $message = options.message;
        }else if(options.message instanceof jQuery) {
            $message = options.message[0];
        }
        $messageBox.appendChild($message);
        
    }else {                 //message 为文本信息
        if(_common_js__WEBPACK_IMPORTED_MODULE_0__.isString(options.message)) {
            $message = document.createElement("span");
            $message.innerText = options.message;
            $messageBox.appendChild($message);
        }else if (_common_js__WEBPACK_IMPORTED_MODULE_0__.isArray(options.message)) {
            for(let i=0; i<options.message.length; i++) {
                $message = document.createElement("div");
                $message.innerText = options.message[i];
                $messageBox.appendChild($message);
            }
        }
    }

    $tipBox.appendChild($messageBox);
    this.renderIcon(options, $tipBox);

    this.renderTipsSymbol(options, $tipBox);

    $tipGroup.appendChild($tip);
    $tipContainer.appendChild($tipGroup);

    //先插入元素，然后才能获取宽度和高度
    $parent.appendChild($tipContainer);

    this.setStyleSymbolBox();

    this.options.events.created.call(this);  //Tips 创建消息之后 触发

    return $tip;
};

/**
 * 渲染图标
 */
tips.prototype.renderIcon = function(options, $tipBox) {
    if(options.icon) {
        let cssClass = this.cssClass;
        let $iconBox = _common_js__WEBPACK_IMPORTED_MODULE_0__.createNode("<div class='ohoTip-icon-box'><span><i class='"+cssClass.icon+"'></i></span></div>");
        $tipBox.appendChild($iconBox);
    }
}

/**
 * 渲染遮罩层
 */
tips.prototype.renderTipsBg = function(options) {
    if(!options.background) return false;

    let cssClass = this.cssClass;
    let $base = this.backup._baseElm;
    let $tipContainer = this.backup._tipContainerElm;
    let $bg = _common_js__WEBPACK_IMPORTED_MODULE_0__.createNode("<div class = '"+cssClass.bg+"'>");
    $tipContainer.appendChild($bg);

    return $bg;
};

/**
 * 根据Tips定位选择标志的位置
 */
tips.prototype.mapPositionToSymbolPosition = function(myPosition) {
    let positionToSymbolPosition = {
        'inner': {
            'top-left': 'top-left',
            'top-center': 'top-center',
            'top-right': 'top-right',
            'center-left': 'center-left',
            'middle': 'middle',
            'center-right': 'center-right',
            'bottom-left': 'bottom-left',
            'bottom-center': 'bottom-center',
            'bottom-right': 'bottom-right',
        },
        'outer': {
            'top-left': 'bottom-left',
            'top-center': 'bottom-center',
            'top-right': 'bottom-right',
            'center-left': 'center-right',
            'middle': 'middle',
            'center-right': 'center-left',
            'bottom-left': 'top-left',
            'bottom-center': 'top-center',
            'bottom-right': 'top-right',
            'left-top': 'right-top',
            'left-bottom': 'right-bottom',
            'right-top': 'left-top',
            'right-bottom': 'left-bottom',
        }
    };

    if(typeof myPosition == "string") {
        if(this.options.direction == 'inner' || this.options.direction == 'normal') {
            if(positionToSymbolPosition['inner'].hasOwnProperty(myPosition)) return positionToSymbolPosition['inner'][myPosition];
        }else if(this.options.direction == 'outer' || this.options.direction == 'outside') {
            if(positionToSymbolPosition['outer'].hasOwnProperty(myPosition)) return positionToSymbolPosition['outer'][myPosition];
        }
    }

    return '';
}

/**
 * 渲染标志，支持自动选择位置
 */
tips.prototype.renderTipsSymbol = function(options, $tipBox) {
    if(!options.symbol) return false;

    let symbolClass = this.cssClass.symbol;
    let symbol = "triangle";
    if(typeof options.symbol == 'string') symbol = options.symbol;

    if(!this.options.symbolOptions.position && typeof this.options.position == 'string') {
        symbolClass = symbolClass + " " + symbol + "-" + this.mapPositionToSymbolPosition(this.options.position);
        this.writeLog('info', 'renderTipsSymbol - Auto set by options.position(%s) - Set symbolClass(%s)', this.options.position, symbolClass);
    }else if(this.options.symbolOptions.position && typeof this.options.symbolOptions.position == 'string') {
        symbolClass = symbolClass + " " + symbol + "-" + this.options.symbolOptions.position;
        this.writeLog('info', 'renderTipsSymbol - Auto set by symbolOptions.position(%s) - Set symbolClass(%s)', this.options.symbolOptions.position, symbolClass);
    }else {
        symbolClass = symbolClass + " " + symbol;
        this.writeLog('info', 'renderTipsSymbol - Auto set by symbolClass(%s), symbol(%s) - Set symbolClass(%s)', symbolClass, symbol, symbolClass);
    }

    let $symbol = _common_js__WEBPACK_IMPORTED_MODULE_0__.createNode("<span class='"+ symbolClass +"'></span>");
    this.backup._symbolElm = $symbol;
    $tipBox.appendChild($symbol);
    
    return $symbol;
}

/**
 * 设置标志父元素盒子的大小，依靠padding撑开父元素，利于动画执行
 */
tips.prototype.setStyleSymbolBox = function() {
    if(!this.options.symbol) return false;

    let $symbolBox = this.backup._symbolBoxElm;
    let symbolSize = this.getSymbolSize();

    let symbolBoxStyle = {
        'padding-top': 0,
        'padding-bottom': 0,
        'padding-left': 0,
        'padding-right': 0,
    };

    let symbolPosition = this.options.symbolOptions.position || this.mapPositionToSymbolPosition(this.options.position);
    if(symbolPosition && typeof symbolPosition == 'string') {
        switch(symbolPosition) {
                case "top-left" :           //坐标在Tips 的左上角位置
                case "top-center" :         //坐标在Tips 的上中位置
                case "top-right" :          //坐标在Tips 的右上角位置
                    symbolBoxStyle['padding-top'] = symbolSize.height + "px";
                    break;
                case "right-top" :          //坐标在Tips 的上右角位置
                case "center-right" :       //坐标在Tips 的右中位置
                case "right-bottom" :       //坐标在Tips 的下右角位置
                    symbolBoxStyle['padding-right'] = symbolSize.width + "px";
                    break;
                case "bottom-right" :       //坐标在Tips 的右下角位置
                case "bottom-center" :      //坐标在Tips 的下中位置
                case "bottom-left" :        //坐标在Tips 的左下角位置
                    symbolBoxStyle['padding-bottom'] = symbolSize.height + "px";
                    break;
                case "left-bottom" :        //坐标在Tips 的下左角位置
                case "center-left" :        //坐标在Tips 的左中位置
                case "left-top" :           //坐标在Tips 的上左角位置
                    symbolBoxStyle['padding-left'] = symbolSize.width + "px";
                    break;
                case "middle" :             //坐标在Tips 的中间位置
                    break;
                default :                   //默认坐标在Tips 的中间位置
                    break;
            }
    }

    _common_js__WEBPACK_IMPORTED_MODULE_0__.addCss($symbolBox, symbolBoxStyle);

    return symbolBoxStyle;
}

/**
 * 如果Tips 有分组配置，就将相同组的Tips 实例存入group 数组。
 */
tips.prototype.setGroup = function() {
    let _this = this;

    let optGroup = this.options.group;

    if(optGroup.name) {
        if(this.tGroups.hasOwnProperty(optGroup.name)) {
            this.tGroups[optGroup.name].push(_this);
        }else {
            this.tGroups[optGroup.name] = [_this];
        }
    }
}

/**
 * 销毁Tips 的时候，
 * 从分组里面移除这个 Tips
 */
tips.prototype.unsetGroup = function() {
    let _this = this;

    let optGroup = this.options.group;

    if(optGroup.name) {
        if(this.tGroups.hasOwnProperty(optGroup.name)) {
            for (let i = 0; i < this.tGroups[optGroup.name].length; i++) {
                if(this.tGroups[optGroup.name][i].id == this.id) {
                    this.tGroups[optGroup.name].splice(i, 1);
                    break;
                }
            }
        }
    }
}

/**
 * 如果Tips 有分组配置，创建之后需要检查当前分组个数是否已经超出最大个数
 * 如果超出，则将最前面的Tips 销毁删除
 */
tips.prototype.checkGroup = function() {
    let _this = this;

    let optGroup = this.options.group;

    if(optGroup.name) {
        if(this.tGroups.hasOwnProperty(optGroup.name) && this.tGroups[optGroup.name].length > optGroup.maxLength) {
            this.tGroups[optGroup.name][0].destroy(_this);
            this.tGroups[optGroup.name].splice(0, 1);
        }
    }
}

/**
 * 判断Tips 基准元素是否是 Body 元素
 */
tips.prototype.isBaseBodyElement = function() {
    return !this.options.baseElement || this.backup._baseElm.tagName == 'BODY';
}

/**
 * 判断Tips container 直接父元素是否是 Body 元素
 */
tips.prototype.isParentBodyElement = function() {
    return this.backup._parentElm.tagName == 'BODY';
}

/**
 * 获取基准元素以及Tips元素的详情
 * 包括位置，宽高，边宽属性等
 */
tips.prototype.getElementDetails = function() {
    //当基准元素或Tips 元素发生或可能发生变化时，才重新获取详细参数。
    //一般来说，scroll 是不需要重新获取详情的，因为它不会改变基准元素的大小。只有当基准元素位于position:fixed 的父元素内，才会需要重新获取。
    if(this.elementDetails && (!this.event || (this.event.type != 'resize' && this.event.type != 'scroll'))) {
        return this.elementDetails;
    }

    this.setInitPosition();

    let $base = this.backup._baseElm;
    let $tipGroup = this.backup._tipGroupElm;
    let $tip = this.backup._tipElm;
    let details;

    if(this.isBaseBodyElement()) {
        details = {
            basePosition: {top: 0, left: 0},
            baseMarginTop: 0,           //获取基准元素外边距，position() 获取的值不算外边距
            baseMarginLeft: 0,
            baseWidth: document.documentElement.clientWidth,                                //width+padding
            baseHeight: document.documentElement.clientHeight,                              //height+padding
            baseOuterWidth: document.documentElement.clientWidth,
            baseOuterHeight: document.documentElement.clientHeight,
            // baseOffsetWidth: document.documentElement.offsetWidth,
            // baseOffsetHeight: document.documentElement.offsetHeight,
            baseBorderTopWidth: 0,           //top border
            baseBorderBottomWidth: 0,
            baseBorderLeftWidth: 0,          //left border
            baseBorderRightWidth: 0,
            baseBorderRadius: 0,                    //圆角半径
            tipGroupWidth: _common_js__WEBPACK_IMPORTED_MODULE_0__.outerWidth($tipGroup),
            tipGroupHeight: _common_js__WEBPACK_IMPORTED_MODULE_0__.outerHeight($tipGroup),
            tipWidth: _common_js__WEBPACK_IMPORTED_MODULE_0__.outerWidth($tip),
            tipHeight: _common_js__WEBPACK_IMPORTED_MODULE_0__.outerHeight($tip),
        };
    }else {
        details = {
            basePosition: _common_js__WEBPACK_IMPORTED_MODULE_0__.position($base),
            baseMarginTop: parseFloat(_common_js__WEBPACK_IMPORTED_MODULE_0__.css($base, "margin-top")),            //获取基准元素外边距，position() 获取的值不算外边距
            baseMarginLeft: parseFloat(_common_js__WEBPACK_IMPORTED_MODULE_0__.css($base, "margin-left")),
            baseWidth: _common_js__WEBPACK_IMPORTED_MODULE_0__.innerWidth($base, true),                                   //width+padding
            baseHeight: _common_js__WEBPACK_IMPORTED_MODULE_0__.innerHeight($base, true),                                 //height+padding
            baseOuterWidth: _common_js__WEBPACK_IMPORTED_MODULE_0__.outerWidth($base),
            baseOuterHeight: _common_js__WEBPACK_IMPORTED_MODULE_0__.outerHeight($base),
            baseBorderTopWidth: parseFloat(_common_js__WEBPACK_IMPORTED_MODULE_0__.css($base, "border-top-width")),            //top border
            baseBorderBottomWidth: parseFloat(_common_js__WEBPACK_IMPORTED_MODULE_0__.css($base, "border-bottom-width")),
            baseBorderLeftWidth: parseFloat(_common_js__WEBPACK_IMPORTED_MODULE_0__.css($base, "border-left-width")),           //left border
            baseBorderRightWidth: parseFloat(_common_js__WEBPACK_IMPORTED_MODULE_0__.css($base, "border-right-width")),
            baseBorderRadius: _common_js__WEBPACK_IMPORTED_MODULE_0__.css($base, "border-radius"),                     //圆角半径
            tipGroupWidth: _common_js__WEBPACK_IMPORTED_MODULE_0__.outerWidth($tipGroup),
            tipGroupHeight: _common_js__WEBPACK_IMPORTED_MODULE_0__.outerHeight($tipGroup),
            tipWidth: _common_js__WEBPACK_IMPORTED_MODULE_0__.outerWidth($tip),
            tipHeight: _common_js__WEBPACK_IMPORTED_MODULE_0__.outerHeight($tip),
        };

        // 如果父元素不是 BODY 元素，那么建议基准元素也要是父元素的子元素，否则定位将出错
        if(!this.isParentBodyElement()) {
            let $parent = this.backup._parentElm;
            let parentStylePosition = _common_js__WEBPACK_IMPORTED_MODULE_0__.css($parent, 'position');

            // 如果父元素定位类型是特殊定位，比图 相对的，绝对或固定，那么Tips子元素的定位将根据基准元素与父元素相对定位来实现，而不是基准元素与BODY的相对定位
            if(this.isSpecialStylePosition(parentStylePosition)) {
                if($parent === $base) {
                    // 基准元素同时也是父元素，那么基准元素相对于父元素的定位就是 { top: 0, left: 0 }
                    // 定位计算规则都是以BODY为父元素设计的。假设父元素是BODY, 基准元素的定位还应该算上基准元素的边框厚度
                    // 在此我们将其算上
                    details.basePosition = { top: 0-details.baseBorderTopWidth, left: 0-details.baseBorderLeftWidth };
                } else {
                    details.basePosition = _common_js__WEBPACK_IMPORTED_MODULE_0__.relativePosition($base);
                }

                this.writeLog("info", "父元素不是BODY,且其定位是 相对的，绝对或固定的");
                this.writeLog("info", "基准元素与父元素的相对定位是：", details.basePosition);
            }
        }
    }

    //补算外边距
    details.baseTop = details.basePosition.top;
    details.baseLeft = details.basePosition.left;

    //tips元素position阈值，大于该阈值，tips会超出基准元素
    details.topThreshold = details.baseHeight - details.tipGroupHeight;
    details.leftThreshold = details.baseWidth - details.tipGroupWidth;

    this.elementDetails = details;

    this.unsetInitPosition();

    this.writeLog('info', 'Get Element Details: ', this.elementDetails);

    return this.elementDetails;
};

/**
 * 获取Tips 的css 定位类，只有以body 为基准元素的Tips 需要
 */
tips.prototype.getPositionClass = function(myPosition) {
    let positionClass = {};

    if(this.isBaseBodyElement()) {
        positionClass.tipClass = "ohoTip-fixed";
        positionClass.bgClass = "ohoTip-bg-fixed";

        if(typeof myPosition == "string") {
            switch(myPosition) {
                case "top-left" :           //坐标在基准元素的左上角位置
                case "top-center" :         //坐标在基准元素的上中位置
                case "top-right" :          //坐标在基准元素的右上角位置
                case "center-left" :        //坐标在基准元素的左中位置
                case "middle" :             //坐标在基准元素的中间位置
                case "center-right" :       //坐标在基准元素的右中位置
                case "bottom-left" :        //坐标在基准元素的左下角位置
                case "bottom-center" :      //坐标在基准元素的下中位置
                case "bottom-right" :       //坐标在基准元素的右下角位置
                    positionClass.tipClass = positionClass.tipClass + ' ' + myPosition;
                    break;
                case "default" :            //默认坐标在基准元素的中间位置
                    positionClass.tipClass = positionClass.tipClass + ' ' + "middle";
                    break;
                default :                   //可支持自定义
                    positionClass.tipClass = positionClass.tipClass + ' ' + myPosition;
                    break;
            }
        }
    }

    return positionClass;
};

/**
 * 如果以Body 为基准元素，Tips 以css 类设置定位
 * 这个方法可以设置像素级别的定位偏移
 */
tips.prototype.setClassPositionOffset = function() {
    let $tipGroup = this.backup._tipGroupElm;
    let myPosition = this.options.position;
    let optOffset = this.options.offset;
    optOffset.top = optOffset.top || 0;
    optOffset.left = optOffset.left || 0;

    if(optOffset.top == 0 && optOffset.left == 0) return;

    if(this.isBaseBodyElement()) {
        if(typeof myPosition == "string") {
            switch(myPosition) {
                case "top-left" :           //坐标在基准元素的左上角位置
                    $tipGroup.style.top = optOffset.top + "px";
                    $tipGroup.style.left = optOffset.left + "px";
                    break;
                case "top-center" :         //坐标在基准元素的上中位置
                    $tipGroup.style.top = optOffset.top + "px";
                    $tipGroup.style.right = optOffset.left + "px";
                    break;
                case "top-right" :          //坐标在基准元素的右上角位置
                    $tipGroup.style.top = optOffset.top + "px";
                    $tipGroup.style.right = optOffset.left + "px";
                    break;
                case "center-left" :        //坐标在基准元素的左中位置
                    $tipGroup.style.left = optOffset.left + "px";
                    break;
                case "middle" :             //坐标在基准元素的中间位置
                    break;
                case "center-right" :       //坐标在基准元素的右中位置
                    $tipGroup.style.right = optOffset.left + "px";
                    break;
                case "bottom-left" :        //坐标在基准元素的左下角位置
                    $tipGroup.style.bottom = optOffset.top + "px";
                    $tipGroup.style.left = optOffset.left + "px";
                    break;
                case "bottom-center" :      //坐标在基准元素的下中位置
                    $tipGroup.style.bottom = optOffset.top + "px";
                    break;
                case "bottom-right" :       //坐标在基准元素的右下角位置
                    $tipGroup.style.bottom = optOffset.top + "px";
                    $tipGroup.style.right = optOffset.left + "px";
                    break;
                case "default" :            //默认坐标在基准元素的中间位置
                    break;
                default :                   //可支持自定义
                    break;
            }
        }
    }
}

/**
 * 已弃用。替代方案是根据Symbol 设置padding，利于动画执行
 * 
 * 如果启动symbol，而symbol 不占Tips 宽度和高度。 则可根据symbol offset 微调基准元素与Tips 的相对定位
 */
tips.prototype.setClassSymbolOffset = function() {
    // 一个分组只需要设置一次symbol offset
    if(this.backup._group.isExisted == true) return false;
    if(!this.options.symbol) return false;

    let $tipGroup = this.backup._tipGroupElm;
    let tgStyle = _common_js__WEBPACK_IMPORTED_MODULE_0__.getStyle($tipGroup);
    // 优先设置position.offset, 所以需要先计算当前定位
    let tgPosition = {
        top: parseFloat(tgStyle.top),
        left: parseFloat(tgStyle.left),
        right: parseFloat(tgStyle.right),
        bottom: parseFloat(tgStyle.bottom),
    }

    if(this.isBaseBodyElement()) {
        let symbolSize = this.getSymbolSize();

        let symbolPosition = this.options.symbolOptions.position || this.mapPositionToSymbolPosition(this.options.position);
        if(symbolPosition && typeof symbolPosition == 'string') {
            switch(symbolPosition) {
                case "top-left" :           //坐标在Tips 的左上角位置
                case "top-center" :         //坐标在Tips 的上中位置
                case "top-right" :          //坐标在Tips 的右上角位置
                    $tipGroup.style.top = tgPosition.top + symbolSize.height + "px";
                    break;
                case "right-top" :          //坐标在Tips 的上右角位置
                case "center-right" :       //坐标在Tips 的右中位置
                case "right-bottom" :       //坐标在Tips 的下右角位置
                    $tipGroup.style.right = tgPosition.right + symbolSize.width + "px";
                    break;
                case "bottom-right" :       //坐标在Tips 的右下角位置
                case "bottom-center" :      //坐标在Tips 的下中位置
                case "bottom-left" :        //坐标在Tips 的左下角位置
                    $tipGroup.style.bottom = tgPosition.bottom + symbolSize.height + "px";
                    break;
                case "left-bottom" :        //坐标在Tips 的下左角位置
                case "center-left" :        //坐标在Tips 的左中位置
                case "left-top" :           //坐标在Tips 的上左角位置
                    $tipGroup.style.left = tgPosition.left + symbolSize.width + "px";
                    break;
                case "middle" :             //坐标在Tips 的中间位置
                    break;
                default :                   //默认坐标在Tips 的中间位置
                    break;
            }
        }
    }
}

/**
 * Position Fixed 只需要设置一次 offset
 */
tips.prototype.setClassOffset = function() {
    if(!this.hasOwnProperty('hasSetClassOffset')) {
        this.setClassPositionOffset();
        // this.setClassSymbolOffset();
        this.hasSetClassOffset = true;
    }
}

/**
 * 计算Tips位置，支持特殊定位，自定义像素级定位和百分比定位，支持top,left,bottom,right
 * 定位结果是top和left定位，不采用bottom和right定位
 * @Author   Devin
 * @DateTime 2020-01-09T21:35:47+0800
 * @param    {[mixed]}              myPosition   [relative position obj or position string]
 * @param    {[Boolean]}            calculateTip [If false, do not calculate Tips width and height]
 * @param    {[Boolean]}            force        [If true, get position style forcibly even base element is BODY]
 * @return   {[Object]}             [Position object]
 */
tips.prototype.getPositionStyle = function(myPosition, calculateTip, force) {
    if(((this.isBaseBodyElement()) && typeof myPosition == "string") && !force) {
        return {};
    }

    let tipPosition = {         //tip position
        top: "auto",
        bottom: "auto",
        left: "auto",
        right: "auto"
    };

    //计算tip的坐标
    if(typeof myPosition == "string") {
        if(this.options.direction == "outer") {
            this.getPosStyleOuter(myPosition, calculateTip, tipPosition);
        }else {
            this.getPosStyleInner(myPosition, calculateTip, tipPosition);
        }
    }else {     //自定义坐标，支持百分比
        let posStyleType = 'getPosStyle' + this.options.direction.charAt(0).toUpperCase() + this.options.direction.slice(1);
        if(this[posStyleType]) {
            this[posStyleType](myPosition, calculateTip, tipPosition);
        }else {
            this.getPosStyleInner(myPosition, calculateTip, tipPosition);
        }
    }

    this.setStylePositionOffset(tipPosition);
    // this.setStyleSymbolOffset(tipPosition);

    return tipPosition;
};

/**
 * 内部定位
 * 正数 top, left, bottom, right 表示往基准元素内部方向走，负数表示相反方向
 */
tips.prototype.getPosStyleInner = function(myPosition, calculateTip, tipPosition) {
    let regNum = _common_js__WEBPACK_IMPORTED_MODULE_0__.regNum;
    let regPer = _common_js__WEBPACK_IMPORTED_MODULE_0__.regPer;
    let regPerNegative = _common_js__WEBPACK_IMPORTED_MODULE_0__.regPerNegative;

    let eleDetails = this.getElementDetails();

    let tipGroupWidth = eleDetails.tipGroupWidth;
    let tipGroupHeight = eleDetails.tipGroupHeight;
    if(calculateTip === false) {
        tipGroupWidth = 0;
        tipGroupHeight = 0;
    }

    if(typeof myPosition == "string") {
        switch(myPosition) {
            case "top-left" :           //坐标在基准元素的左上角位置
                tipPosition.top = eleDetails.baseTop + eleDetails.baseBorderTopWidth;
                tipPosition.left = eleDetails.baseLeft + eleDetails.baseBorderLeftWidth;
                break;
            case "top-center" :         //坐标在基准元素的上中位置
                tipPosition.top = eleDetails.baseTop + eleDetails.baseBorderTopWidth;
                tipPosition.left = eleDetails.baseLeft + (eleDetails.baseWidth/2 + eleDetails.baseBorderLeftWidth - tipGroupWidth/2);
                break;
            case "top-right" :          //坐标在基准元素的右上角位置
                tipPosition.top = eleDetails.baseTop + eleDetails.baseBorderTopWidth;
                tipPosition.left = eleDetails.baseLeft + (eleDetails.baseBorderLeftWidth + eleDetails.baseWidth) - tipGroupWidth;
                break;
            case "center-left" :        //坐标在基准元素的左中位置
                tipPosition.top = eleDetails.baseTop + (eleDetails.baseHeight/2 + eleDetails.baseBorderTopWidth - tipGroupHeight/2);
                tipPosition.left = eleDetails.baseLeft + eleDetails.baseBorderLeftWidth;
                break;
            case "middle" :             //坐标在基准元素的中间位置
                tipPosition.top = eleDetails.baseTop + (eleDetails.baseHeight/2 + eleDetails.baseBorderTopWidth - tipGroupHeight/2);
                tipPosition.left = eleDetails.baseLeft + (eleDetails.baseWidth/2 + eleDetails.baseBorderLeftWidth - tipGroupWidth/2);
                break;
            case "center-right" :       //坐标在基准元素的右中位置
                tipPosition.top = eleDetails.baseTop + (eleDetails.baseHeight/2 + eleDetails.baseBorderTopWidth - tipGroupHeight/2);
                tipPosition.left = eleDetails.baseLeft + (eleDetails.baseBorderLeftWidth + eleDetails.baseWidth) - tipGroupWidth;
                break;
            case "bottom-left" :        //坐标在基准元素的左下角位置
                tipPosition.top = eleDetails.baseTop + (eleDetails.baseBorderTopWidth + eleDetails.baseHeight) - tipGroupHeight;
                tipPosition.left = eleDetails.baseLeft + eleDetails.baseBorderLeftWidth;
                break;
            case "bottom-center" :      //坐标在基准元素的下中位置
                tipPosition.top = eleDetails.baseTop + (eleDetails.baseBorderTopWidth + eleDetails.baseHeight) - tipGroupHeight;
                tipPosition.left = eleDetails.baseLeft + (eleDetails.baseWidth/2 + eleDetails.baseBorderLeftWidth - tipGroupWidth/2);
                break;
            case "bottom-right" :       //坐标在基准元素的右下角位置
                tipPosition.top = eleDetails.baseTop + (eleDetails.baseBorderTopWidth + eleDetails.baseHeight) - tipGroupHeight;
                tipPosition.left = eleDetails.baseLeft + (eleDetails.baseBorderLeftWidth + eleDetails.baseWidth) - tipGroupWidth;
                break;
            default :                   //默认坐标在基准元素的中间位置
                tipPosition.top = eleDetails.baseTop + (eleDetails.baseHeight/2 + eleDetails.baseBorderTopWidth - tipGroupHeight/2);
                tipPosition.left = eleDetails.baseLeft + (eleDetails.baseWidth/2 + eleDetails.baseBorderLeftWidth - tipGroupWidth/2);
                break;
        }

        return tipPosition;
    }

    if(myPosition.hasOwnProperty('bottom') && regNum.test(myPosition.bottom)) {
        tipPosition.top = eleDetails.baseTop + eleDetails.baseBorderTopWidth + eleDetails.baseHeight - tipGroupHeight - parseFloat(myPosition.bottom);
    }else if(myPosition.hasOwnProperty('bottom') && regPer.test(myPosition.bottom)) {
        let bottom = (eleDetails.baseHeight - tipGroupHeight) * parseFloat(myPosition.bottom)/100;
        tipPosition.top = eleDetails.baseTop + eleDetails.baseBorderTopWidth + eleDetails.baseHeight - tipGroupHeight - bottom;
    }else if(myPosition.hasOwnProperty('top') && regNum.test(myPosition.top)) {
        tipPosition.top = eleDetails.baseTop + eleDetails.baseBorderTopWidth + parseFloat(myPosition.top);
    }else if(myPosition.hasOwnProperty('top') && regPer.test(myPosition.top)) {
        let top = (eleDetails.baseHeight - tipGroupHeight) * parseFloat(myPosition.top)/100;
        tipPosition.top = eleDetails.baseTop + eleDetails.baseBorderTopWidth + top;
    }

    if(myPosition.hasOwnProperty('right') && regNum.test(myPosition.right)) {
        tipPosition.left = eleDetails.baseLeft + eleDetails.baseBorderLeftWidth + eleDetails.baseWidth - tipGroupWidth - parseFloat(myPosition.right);
    }else if(myPosition.hasOwnProperty('right') && regPer.test(myPosition.right)) {
        let right = (eleDetails.baseWidth - tipGroupWidth) * parseFloat(myPosition.right)/100;
        tipPosition.left = eleDetails.baseLeft + eleDetails.baseBorderLeftWidth + eleDetails.baseWidth - tipGroupWidth - right;
    }else if(myPosition.hasOwnProperty('left') && regNum.test(myPosition.left)) {
        tipPosition.left = eleDetails.baseLeft + eleDetails.baseBorderLeftWidth + parseFloat(myPosition.left);
    }else if(myPosition.hasOwnProperty('left') && regPer.test(myPosition.left)) {
        let left = (eleDetails.baseWidth - tipGroupWidth) * parseFloat(myPosition.left)/100;
        tipPosition.left = eleDetails.baseLeft + eleDetails.baseBorderLeftWidth + left;
    }

    return tipPosition;
}

/**
 * 普通定位
 * 正数 top, left 表示往基准元素内部方向走，负数表示相反方向，与内部定位相同
 * 正数 bottom，right 表示以基准元素外部方向走，负数表示相反方向，与内部方向相反
 */
tips.prototype.getPosStyleNormal = function(myPosition, calculateTip, tipPosition) {
    let regNum = _common_js__WEBPACK_IMPORTED_MODULE_0__.regNum;
    let regPer = _common_js__WEBPACK_IMPORTED_MODULE_0__.regPer;
    let regPerNegative = _common_js__WEBPACK_IMPORTED_MODULE_0__.regPerNegative;

    let eleDetails = this.getElementDetails();

    let tipGroupWidth = eleDetails.tipGroupWidth;
    let tipGroupHeight = eleDetails.tipGroupHeight;
    if(calculateTip === false) {
        tipGroupWidth = 0;
        tipGroupHeight = 0;
    }

    if(myPosition.hasOwnProperty('bottom')  && regNum.test(myPosition.bottom)) {
        tipPosition.top = eleDetails.baseTop + eleDetails.baseHeight + eleDetails.baseBorderTopWidth + eleDetails.baseBorderBottomWidth + parseFloat(myPosition.bottom);
    }else if(myPosition.hasOwnProperty('bottom') && regPer.test(myPosition.bottom)) {
        let baseHeight = _common_js__WEBPACK_IMPORTED_MODULE_0__.numAdds(eleDetails.baseHeight, eleDetails.baseBorderTopWidth, eleDetails.baseBorderBottomWidth);
        let bottom = _common_js__WEBPACK_IMPORTED_MODULE_0__.numMul(baseHeight, _common_js__WEBPACK_IMPORTED_MODULE_0__.numDiv(parseFloat(myPosition.bottom), 100));
        tipPosition.top = _common_js__WEBPACK_IMPORTED_MODULE_0__.numAdds(eleDetails.baseTop, baseHeight, bottom);
    }else if(myPosition.hasOwnProperty('top') && regNum.test(myPosition.top)) {
        tipPosition.top = eleDetails.baseTop + eleDetails.baseBorderTopWidth + parseFloat(myPosition.top);
    }else if(myPosition.hasOwnProperty('top') && regPer.test(myPosition.top)) {
        let top = (eleDetails.baseHeight - tipGroupHeight) * parseFloat(myPosition.top)/100;
        tipPosition.top = eleDetails.baseTop + eleDetails.baseBorderTopWidth + top;
    }

    if(myPosition.hasOwnProperty('right')  && regNum.test(myPosition.right)) {
        tipPosition.left = _common_js__WEBPACK_IMPORTED_MODULE_0__.numAdds(eleDetails.baseLeft, eleDetails.baseWidth, eleDetails.baseBorderLeftWidth, eleDetails.baseBorderRightWidth, parseFloat(myPosition.right));
    }else if(myPosition.hasOwnProperty('right') && regPer.test(myPosition.right)) {
        let baseWidth = _common_js__WEBPACK_IMPORTED_MODULE_0__.numAdds(eleDetails.baseWidth, eleDetails.baseBorderLeftWidth, eleDetails.baseBorderRightWidth);
        let right = _common_js__WEBPACK_IMPORTED_MODULE_0__.numMul(baseWidth, _common_js__WEBPACK_IMPORTED_MODULE_0__.numDiv(parseFloat(myPosition.right), 100));
        tipPosition.left = _common_js__WEBPACK_IMPORTED_MODULE_0__.numAdds(eleDetails.baseLeft, baseWidth, right);
    }else if(myPosition.hasOwnProperty('left') && regNum.test(myPosition.left)) {
        tipPosition.left = eleDetails.baseLeft + eleDetails.baseBorderLeftWidth + parseFloat(myPosition.left);
    }else if(myPosition.hasOwnProperty('left') && regPer.test(myPosition.left)) {
        let left = (eleDetails.baseWidth - tipGroupWidth) * parseFloat(myPosition.left)/100;
        tipPosition.left = eleDetails.baseLeft + eleDetails.baseBorderLeftWidth + left;
    }

    return tipPosition;
}

/**
 * 外部定位，所有定位以基准元素外为准，百分比基准也是基准元素
 * top, left, bottom, right 都是以基准元素的对应边框为准，且忽略边框厚度
 * 比如top，正数X时，表示Tip 底部高于基准元素的顶部 X；负数-X时，表示基准元素顶部低于Tip顶部 X
 */
tips.prototype.getPosStyleOutside = function(myPosition, calculateTip, tipPosition) {
    let regNum = _common_js__WEBPACK_IMPORTED_MODULE_0__.regNum;
    let regNumNegative = _common_js__WEBPACK_IMPORTED_MODULE_0__.regNumNegative;
    let regPer = _common_js__WEBPACK_IMPORTED_MODULE_0__.regPer;
    let regPerNegative = _common_js__WEBPACK_IMPORTED_MODULE_0__.regPerNegative;

    let eleDetails = this.getElementDetails();

    let tipGroupWidth = eleDetails.tipGroupWidth;
    let tipGroupHeight = eleDetails.tipGroupHeight;
    if(calculateTip === false) {
        tipGroupWidth = 0;
        tipGroupHeight = 0;
    }

    if(myPosition.hasOwnProperty('bottom') && regNum.test(myPosition.bottom)) {
        tipPosition.top = eleDetails.baseTop + eleDetails.baseBorderTopWidth + eleDetails.baseHeight + eleDetails.baseBorderBottomWidth + parseFloat(myPosition.bottom);
        if(regNumNegative.test(myPosition.bottom)) {
            tipPosition.top -= eleDetails.baseBorderBottomWidth;
        }
    }else if(myPosition.hasOwnProperty('bottom') && regPer.test(myPosition.bottom)) {
        let bottom = eleDetails.baseHeight * parseFloat(myPosition.bottom)/100;
        tipPosition.top = eleDetails.baseTop + eleDetails.baseBorderTopWidth + eleDetails.baseBorderBottomWidth + eleDetails.baseHeight + bottom;
        if(regPerNegative.test(myPosition.bottom)) {
            tipPosition.top -= eleDetails.baseBorderBottomWidth;
        }
    }else if(myPosition.hasOwnProperty('top') && regNum.test(myPosition.top)) {
        tipPosition.top = eleDetails.baseTop - tipGroupHeight - parseFloat(myPosition.top);
        if(regNumNegative.test(myPosition.top)) {
            tipPosition.top = tipPosition.top + tipGroupHeight + eleDetails.baseBorderTopWidth;
        }
    }else if(myPosition.hasOwnProperty('top') && regPer.test(myPosition.top)) {
        let top = eleDetails.baseHeight * parseFloat(myPosition.top)/100;
        tipPosition.top = eleDetails.baseTop - top;
        if(regPerNegative.test(myPosition.top)) {
            tipPosition.top = tipPosition.top + eleDetails.baseBorderTopWidth;
        }
    }

    if(myPosition.hasOwnProperty('right') && regNum.test(myPosition.right)) {
        tipPosition.left = eleDetails.baseLeft + eleDetails.baseBorderLeftWidth + eleDetails.baseWidth + eleDetails.baseBorderRightWidth + parseFloat(myPosition.right);
        if(regNumNegative.test(myPosition.right)) {
            tipPosition.left = tipPosition.left - tipGroupWidth - eleDetails.baseBorderRightWidth;
        }
    }else if(myPosition.hasOwnProperty('right') && regPer.test(myPosition.right)) {
        let right = eleDetails.baseWidth * parseFloat(myPosition.right)/100;
        tipPosition.left = eleDetails.baseLeft + eleDetails.baseBorderLeftWidth + eleDetails.baseWidth + right;
        if(regPerNegative.test(myPosition.right)) {
            tipPosition.left = tipPosition.left - tipGroupWidth - eleDetails.baseBorderRightWidth;
        }
    }else if(myPosition.hasOwnProperty('left') && regNum.test(myPosition.left)) {
        tipPosition.left = eleDetails.baseLeft - tipGroupWidth - parseFloat(myPosition.left);
        if(regNumNegative.test(myPosition.left)) {
            tipPosition.left = tipPosition.left + tipGroupWidth + eleDetails.baseBorderLeftWidth;
        }
    }else if(myPosition.hasOwnProperty('left') && regPer.test(myPosition.left)) {
        let left = eleDetails.baseWidth * parseFloat(myPosition.left)/100;
        tipPosition.left = eleDetails.baseLeft - tipGroupWidth - left;
        if(regPerNegative.test(myPosition.left)) {
            tipPosition.left = tipPosition.left + tipGroupWidth + eleDetails.baseBorderLeftWidth;
        }
    }

    return tipPosition;
}

/**
 * 外围定位
 * 当百分比为正数时(从外部远离基准元素)，百分比基准是Tips元素
 * 当百分比为负数时(从内部远离基准元素)，百分比基准是基准元素
 * top, left, bottom, right 都是以基准元素的对应边框为准，且忽略边框厚度
 * 比如top，正数X%时，表示Tip 顶部高于基准元素的顶部 Tips高度*X%；负数-X%时，表示Tip 中心低于基准元素的顶部 基准元素高度*X%
 */
tips.prototype.getPosStyleOuter = function(myPosition, calculateTip, tipPosition) {
    let regNum = _common_js__WEBPACK_IMPORTED_MODULE_0__.regNum;
    let regNumNegative = _common_js__WEBPACK_IMPORTED_MODULE_0__.regNumNegative;
    let regPer = _common_js__WEBPACK_IMPORTED_MODULE_0__.regPer;
    let regPerNegative = _common_js__WEBPACK_IMPORTED_MODULE_0__.regPerNegative;

    let eleDetails = this.getElementDetails();

    let tipGroupWidth = eleDetails.tipGroupWidth;
    let tipGroupHeight = eleDetails.tipGroupHeight;
    if(calculateTip === false) {
        tipGroupWidth = 0;
        tipGroupHeight = 0;
    }

    if(typeof myPosition == "string") {
        let myPositionTmp = {};
        switch(myPosition) {
            case "top-left" :           //坐标在基准元素的左上角位置
                // tipPosition.top = eleDetails.baseTop - tipGroupHeight * (100%)/100;
                // tipPosition.left = eleDetails.baseLeft - tipGroupWidth * (100%)/100;
                myPositionTmp.top = "100%";
                myPositionTmp.left = "-0%";
                break;
            case "top-center" :         //坐标在基准元素的上中位置
                myPositionTmp.top = "100%";
                myPositionTmp.left = "-50%";
                break;
            case "top-right" :          //坐标在基准元素的右上角位置
                myPositionTmp.top = "100%";
                myPositionTmp.left = "-100%";
                break;
            case "center-left" :        //坐标在基准元素的左中位置
                myPositionTmp.top = "-50%";
                myPositionTmp.left = "0";
                break;
            case "middle" :             //坐标在基准元素的中间位置
                myPositionTmp.top = "-50%";
                myPositionTmp.left = "-50%";
                break;
            case "center-right" :       //坐标在基准元素的右中位置
                myPositionTmp.top = "-50%";
                myPositionTmp.right = "100%";
                break;
            case "bottom-left" :        //坐标在基准元素的左下角位置
                myPositionTmp.bottom = "100%";
                myPositionTmp.left = "-0%";
                break;
            case "bottom-center" :      //坐标在基准元素的下中位置
                myPositionTmp.bottom = "100%";
                myPositionTmp.left = "-50%";
                break;
            case "bottom-right" :       //坐标在基准元素的右下角位置
                myPositionTmp.bottom = "100%";
                myPositionTmp.left = "-100%";
                break;
            case "left-top" :       //坐标在基准元素的右下角位置
                myPositionTmp.bottom = "-100%";
                myPositionTmp.left = "0";
                break;
            case "left-bottom" :       //坐标在基准元素的右下角位置
                myPositionTmp.top = "-100%";
                myPositionTmp.left = "0";
                break;
            case "right-top" :       //坐标在基准元素的右下角位置
                myPositionTmp.bottom = "-100%";
                myPositionTmp.right = "100%";
                break;
            case "right-bottom" :       //坐标在基准元素的右下角位置
                myPositionTmp.top = "-100%";
                myPositionTmp.right = "100%";
                break;
            default :                   //默认坐标在基准元素的中间位置
                myPositionTmp.top = "100%";
                myPositionTmp.left = "-0%";
                break;
        }

        myPosition = myPositionTmp;
    }

    // 非百分比区分正负主要是考虑到边框问题，忽略边框带来的影响
    if(myPosition.hasOwnProperty('bottom') && regNum.test(myPosition.bottom)) {
        if(!regNumNegative.test(myPosition.bottom)) {
            tipPosition.top = eleDetails.baseTop + eleDetails.baseBorderTopWidth + eleDetails.baseHeight + eleDetails.baseBorderBottomWidth + parseFloat(myPosition.bottom);
        }else {
            tipPosition.top = eleDetails.baseTop + eleDetails.baseBorderTopWidth + eleDetails.baseHeight + parseFloat(myPosition.bottom);
        }
    }else if(myPosition.hasOwnProperty('bottom') && regPer.test(myPosition.bottom)) {
        if(!regPerNegative.test(myPosition.bottom)) {
            let bottom = tipGroupHeight - tipGroupHeight * parseFloat(myPosition.bottom)/100;
            tipPosition.top = eleDetails.baseTop + eleDetails.baseBorderTopWidth + eleDetails.baseBorderBottomWidth + eleDetails.baseHeight - bottom;
        }else {
            let bottom = (eleDetails.baseHeight - tipGroupHeight) * (-parseFloat(myPosition.bottom)/100);
            tipPosition.top = eleDetails.baseTop + eleDetails.baseBorderTopWidth + eleDetails.baseHeight - tipGroupHeight - bottom;
        }
    }else if(myPosition.hasOwnProperty('top') && regNum.test(myPosition.top)) {
        if(!regNumNegative.test(myPosition.top)) {
            tipPosition.top = eleDetails.baseTop - tipGroupHeight - parseFloat(myPosition.top);
        }else {
            tipPosition.top = eleDetails.baseTop + eleDetails.baseBorderTopWidth - tipGroupHeight - parseFloat(myPosition.top);
        }
    }else if(myPosition.hasOwnProperty('top') && regPer.test(myPosition.top)) {
        if(!regPerNegative.test(myPosition.top)) {
            let top = tipGroupHeight * parseFloat(myPosition.top)/100;
            tipPosition.top = eleDetails.baseTop - top;
        }else {
            let top = (eleDetails.baseHeight - tipGroupHeight) * (-parseFloat(myPosition.top)/100);
            tipPosition.top = eleDetails.baseTop + eleDetails.baseBorderTopWidth + top;
        }
    }

    if(myPosition.hasOwnProperty('right') && regNum.test(myPosition.right)) {
        tipPosition.left = eleDetails.baseLeft + eleDetails.baseBorderLeftWidth + eleDetails.baseWidth + eleDetails.baseBorderRightWidth + parseFloat(myPosition.right);
    }else if(myPosition.hasOwnProperty('right') && regPer.test(myPosition.right)) {
        if(!regPerNegative.test(myPosition.right)) {
            let right = tipGroupWidth - tipGroupWidth * parseFloat(myPosition.right)/100;
            tipPosition.left = eleDetails.baseLeft + eleDetails.baseBorderLeftWidth + eleDetails.baseBorderRightWidth + eleDetails.baseWidth - right;
        }else {
            let right = (eleDetails.baseWidth - tipGroupWidth) * (-parseFloat(myPosition.right)/100);
            tipPosition.left = eleDetails.baseLeft + eleDetails.baseBorderLeftWidth + eleDetails.baseWidth - tipGroupWidth - right;
        }
    }else if(myPosition.hasOwnProperty('left') && regNum.test(myPosition.left)) {
        if(!regNumNegative.test(myPosition.left)) {
            tipPosition.left = eleDetails.baseLeft - tipGroupWidth - parseFloat(myPosition.left);
        }else {
            tipPosition.left = eleDetails.baseLeft + eleDetails.baseBorderLeftWidth - tipGroupWidth - parseFloat(myPosition.left);
        }
    }else if(myPosition.hasOwnProperty('left') && regPer.test(myPosition.left)) {
        if(!regPerNegative.test(myPosition.left)) {
            let left = tipGroupWidth * parseFloat(myPosition.left)/100;
            tipPosition.left = eleDetails.baseLeft - left;
        }else {
            let left = (eleDetails.baseWidth - tipGroupWidth) * (-parseFloat(myPosition.left)/100);
            tipPosition.left = eleDetails.baseLeft + eleDetails.baseBorderLeftWidth + left;
        }
    }

    return tipPosition;
}

/**
 * Offset 只支持px，用于微调基准元素与Tips 的相对定位
 * 计算定位得出的结果只含top和left，故offset只支持top和left
 * 比如上居中，此时Tips 顶部是紧贴着基准元素顶部的，设置offset.top = 10, 则Tips 顶部低于基准元素顶部10px
 */
tips.prototype.setStylePositionOffset = function(tipPosition) {
    let optOffset = this.options.offset;

    if(!optOffset) return tipPosition;

    let regNum = _common_js__WEBPACK_IMPORTED_MODULE_0__.regNum;
    if(optOffset.hasOwnProperty('top') && regNum.test(optOffset.top)) tipPosition.top += optOffset.top;
    if(optOffset.hasOwnProperty('left') && regNum.test(optOffset.left)) tipPosition.left += optOffset.left;

    return tipPosition;
}

/**
 * 已弃用。替代方案是根据Symbol 设置padding，利于动画执行
 * 
 * 如果启动symbol，而symbol 不占Tips 宽度和高度。 则可根据symbol offset 微调父元素与Tips 的相对定位
 * Offset 只支持px
 * 计算定位得出的结果只含top和left，故offset只支持top和left
 * 比如上居中，此时Tips 顶部是紧贴着父元素顶部的，
 * 此时symbol 正常来说会高于Tips 上中部位, 如8px, 设置symbolOptions.offset.top = 8, 则Tips 顶部低于父元素顶部8px，Symbol紧贴父元素顶部
 */
tips.prototype.setStyleSymbolOffset = function(tipPosition) {
    if(!this.options.symbol) return tipPosition;
    let regNum = _common_js__WEBPACK_IMPORTED_MODULE_0__.regNum;

    let tmpOffset = {
        top: null,
        left: null,
    };

    let symbolSize = this.getSymbolSize();

    let symbolPosition = this.options.symbolOptions.position || this.mapPositionToSymbolPosition(this.options.position);
    if(symbolPosition && typeof symbolPosition == 'string') {
        switch(symbolPosition) {
            case "top-left" :           //坐标在Tips 的左上角位置
                tmpOffset.top = symbolSize.height;
                break;
            case "top-center" :         //坐标在Tips 的上中位置
                tmpOffset.top = symbolSize.height;
                break;
            case "top-right" :          //坐标在Tips 的右上角位置
                tmpOffset.top = symbolSize.height;
                break;
            case "center-left" :        //坐标在Tips 的左中位置
                tmpOffset.left = symbolSize.width;
                break;
            case "middle" :             //坐标在Tips 的中间位置
                // tmpOffset.left = symbolSize.width;
                break;
            case "center-right" :       //坐标在Tips 的右中位置
                tmpOffset.left = 0 - symbolSize.width;
                break;
            case "bottom-left" :        //坐标在Tips 的左下角位置
                tmpOffset.top = 0 - symbolSize.height;
                break;
            case "bottom-center" :      //坐标在Tips 的下中位置
                tmpOffset.top = 0 - symbolSize.height;
                break;
            case "bottom-right" :       //坐标在Tips 的右下角位置
                tmpOffset.top = 0 - symbolSize.height;
                break;
            case "left-top" :               //坐标在Tips 的上左角位置
                tmpOffset.left = symbolSize.width;
                break;
            case "left-bottom" :                //坐标在Tips 的下左角位置
                tmpOffset.left = symbolSize.width;
                break;
            case "right-top" :              //坐标在Tips 的上右角位置
                tmpOffset.left = 0 - symbolSize.width;
                break;
            case "right-bottom" :               //坐标在Tips 的下右角位置
                tmpOffset.left = 0 - symbolSize.width;
                break;
            default :                   //默认坐标在Tips 的中间位置
                break;
        }
    }

    this.writeLog('info', 'setStyleSymbolOffset: ', symbolSize, symbolPosition, tmpOffset);

    // offset 以symbolOptions.offset 为准，tmpOffset 为辅，内外部定位规则一样
    let offset = _common_js__WEBPACK_IMPORTED_MODULE_0__.extend({}, this.options.symbolOptions.offset, tmpOffset);
    // 当为外部定位时，需要反转
    // if(this.options.direction == 'outer' || this.options.direction == 'outside') {
    //     if(offset.hasOwnProperty('top') && regNum.test(offset.top)) offset.top = 0 - offset.top;
    //     if(offset.hasOwnProperty('left') && regNum.test(offset.left)) offset.left = 0 - offset.left;
    // }

    this.writeLog('info', 'setStyleSymbolOffset: ', symbolSize, offset);

    if(offset.top || offset.left) {
        if(offset.hasOwnProperty('top') && regNum.test(offset.top)) tipPosition.top += offset.top;
        if(offset.hasOwnProperty('left') && regNum.test(offset.left)) tipPosition.left += offset.left;
    }

    return tipPosition;
}

//根据不同的symbol 类型获取不同的Size，用于定位补足
tips.prototype.getSymbolSize = function() {
    let symbol = "triangle";
    if(typeof this.options.symbol == 'string') symbol = this.options.symbol;

    let getSymbolSizeMethod = "getSymbolSize" + symbol.slice(0, 1).toUpperCase() + symbol.slice(1);
    return this[getSymbolSizeMethod]();
}

//获取Triangle Size，用于定位补足
tips.prototype.getSymbolSizeTriangle = function() {
    let $symbol = this.backup._symbolElm;
    let symbolSize = {width: 0, height: 0};

    if(!$symbol) return symbolSize;
    //Triangle 的四个边框都一样
    let borderWidth = parseFloat(_common_js__WEBPACK_IMPORTED_MODULE_0__.css($symbol, "border-top-width"));
    symbolSize.width = borderWidth;
    symbolSize.height = borderWidth;

    return symbolSize;
}

tips.prototype.getPosition = function(myPosition) {
    let positionClass = this.getPositionClass(myPosition);
    let positionStyle = this.getPositionStyle(myPosition);
    let tipPosition = {
        class: positionClass,
        style: positionStyle,
    };

    return tipPosition;
}

//设置浮动参数。支持用户自定义。
tips.prototype.setFloatOptions = function(customFloatOptions) {
    //窗口发生变化时需要重新定义float
    //若不是首次设置，则还原当前状态
    let backupfloatOptions = {};
    if(this.floatOptions) {
        backupfloatOptions.status = this.floatOptions.status;
        backupfloatOptions.floatId = this.floatOptions.floatId;
    };

    //用户自定义
    if(this.options.float.customFloatOptions) customFloatOptions = this.options.float.customFloatOptions;

    let floatOptions = _common_js__WEBPACK_IMPORTED_MODULE_0__.extend({}, tips.floatOptions, customFloatOptions, backupfloatOptions);

    let eleDetails = this.getElementDetails();

    //设置最大最小值，一般最小值0，最大值视情况而定，若是一般情况（px）则为元素的最大阈值，如是百分比，则为100%
    floatOptions.xMinThreshold = !_common_js__WEBPACK_IMPORTED_MODULE_0__.isEmptyNum(floatOptions.xMinThreshold)? floatOptions.xMinThreshold : 0;
    floatOptions.xMaxThreshold = !_common_js__WEBPACK_IMPORTED_MODULE_0__.isEmptyNum(floatOptions.xMaxThreshold)? floatOptions.xMaxThreshold : eleDetails.leftThreshold;
    floatOptions.yMinThreshold = !_common_js__WEBPACK_IMPORTED_MODULE_0__.isEmptyNum(floatOptions.yMinThreshold)? floatOptions.yMinThreshold : 0;
    floatOptions.yMaxThreshold = !_common_js__WEBPACK_IMPORTED_MODULE_0__.isEmptyNum(floatOptions.yMaxThreshold)? floatOptions.yMaxThreshold : eleDetails.topThreshold;

    floatOptions.xOffset = (floatOptions.xMaxThreshold - floatOptions.xMinThreshold) * floatOptions.xOffsetLen;
    floatOptions.yOffset = (floatOptions.yMaxThreshold- floatOptions.yMinThreshold) * floatOptions.yOffsetLen;

    if(floatOptions.hasOwnProperty('offsetType') && floatOptions.offsetType === '%') {
        floatOptions.xOffset = floatOptions.xOffsetLen;  
        floatOptions.yOffset = floatOptions.yOffsetLen;
    }

    this.floatOptions = floatOptions;

    return this.floatOptions;
}

//当需要重新设置float，如窗口，基准元素发生改变，若不是首次设置，则还原当前状态
tips.prototype.getfloatStatus = function(customFloatStatus) {
    if(this.options.float.customFloatStatus) {
        customFloatStatus = this.options.float.customFloatStatus;
    }else if(!customFloatStatus){
        customFloatStatus = {
            top: tips.floatOptions.topStart,
            left: tips.floatOptions.leftStart,
        }
    }
    for(let key in customFloatStatus) {
        if(this.backup._floatStatus.hasOwnProperty(key)) {
            customFloatStatus[key] = this.backup._floatStatus[key];
        }
    }

    return customFloatStatus;
}

/**
 * 设置浮动定位的状态，触发Tips 重新定位，实现浮动的效果
 */
tips.prototype.setFloatStatus = function(floatStatus, floatOptions) {
    if(floatStatus.top > floatOptions.yMaxThreshold) floatStatus.top = floatOptions.yMaxThreshold;
    if(floatStatus.top < floatOptions.yMinThreshold) floatStatus.top = floatOptions.yMinThreshold;
    if(floatStatus.left > floatOptions.xMaxThreshold) floatStatus.left = floatOptions.xMaxThreshold;
    if(floatStatus.left < floatOptions.xMinThreshold) floatStatus.left = floatOptions.xMinThreshold;

    for(let key in floatStatus) {
        this.backup._floatStatus[key] = floatStatus[key];
    }

    let offsetType = floatOptions.hasOwnProperty('offsetType')? floatOptions.offsetType : '';

    //请务必设置floatPosition，否则不生效
    this.monitor.floatPosition = {
        top: floatStatus.top + offsetType,
        left: floatStatus.left + offsetType,
    }
}

//默认浮动方式。沿着基准元素左上角到右下角直线浮动
//用户自定义浮动方法，可参考该方法。
tips.prototype.floatTypeDefault = function() {
    let _this = this;

    let customFloatOptions = {
        status: true,
        xOffsetLen: 0.0005,
        yOffsetLen: 0.0005,
        delay: 1,
    };

    let customFloatStatus = {
        top: 0,
        left: 0,
    };

    let floatOptions = this.setFloatOptions(customFloatOptions);
    let floatStatus = this.getfloatStatus(customFloatStatus);

    if(floatOptions.floatId) clearInterval(floatOptions.floatId);
    floatOptions.floatId = setInterval(function(){
        if((floatStatus.top >= floatOptions.yMaxThreshold && floatOptions.status) || (floatStatus.top <= floatOptions.yMinThreshold && !floatOptions.status)) {
            floatOptions.status = !floatOptions.status;
        }

        if(floatOptions.status) {
            floatStatus.top = floatStatus.top + floatOptions.yOffset;
            floatStatus.left = floatStatus.left + floatOptions.xOffset;
        }else {
            floatStatus.top = floatStatus.top - floatOptions.yOffset;
            floatStatus.left = floatStatus.left - floatOptions.xOffset;
        }

        _this.setFloatStatus(floatStatus, floatOptions);
    }, floatOptions.delay);
};

//X 浮动
//浮动方向是 左上角->右下角->右上角->左下角->左上角...
tips.prototype.floatTypeX = function() {
    let _this = this;

    let customFloatOptions = {
        status: 1,
        offsetType: '%',
        xMinThreshold: 0,
        xMaxThreshold: 100,
        xOffsetLen: 0.01,
        yMinThreshold: 0,
        yMaxThreshold: 100,
        yOffsetLen: 0.01,
        delay: 1,
    };
    
    let customFloatStatus = {
        top: 0,
        left: 0,
    };

    let floatOptions = this.setFloatOptions(customFloatOptions);
    let floatStatus = this.getfloatStatus(customFloatStatus);

    if(floatOptions.floatId) clearInterval(floatOptions.floatId);
    floatOptions.floatId = setInterval(function(){
        if(floatStatus.top <= floatOptions.yMinThreshold && floatStatus.left <= floatOptions.xMinThreshold) {
            floatOptions.status = 1;
        }else if(floatStatus.top >= floatOptions.yMaxThreshold && floatStatus.left >= floatOptions.xMaxThreshold) {
            floatOptions.status = 2;
        }else if(floatStatus.top <= floatOptions.yMinThreshold && floatStatus.left >= floatOptions.xMaxThreshold) {
            floatOptions.status = 3;
        }else if(floatStatus.top >= floatOptions.yMaxThreshold && floatStatus.left <= floatOptions.xMinThreshold) {
            floatOptions.status = 4;
        }

        if(floatOptions.status == 1) {
            floatStatus.top = floatStatus.top + floatOptions.yOffset;
            floatStatus.left = floatStatus.left + floatOptions.xOffset;
        }else if(floatOptions.status == 2) {
            floatStatus.top = floatStatus.top - floatOptions.yOffset;
        }else if(floatOptions.status == 3) {
            floatStatus.top = floatStatus.top + floatOptions.yOffset;
            floatStatus.left = floatStatus.left - floatOptions.xOffset;
        }else if(floatOptions.status == 4) {
            floatStatus.top = floatStatus.top - floatOptions.yOffset;
        }

        _this.setFloatStatus(floatStatus, floatOptions);
    }, floatOptions.delay);
};

//方形浮动
//浮动方向是 左上角->右上角->右下角->左下角->左上角...
tips.prototype.floatTypeSquare =  function() {
    let _this = this;

    let customFloatOptions = {
        status: 1,
        offsetType: '%',
        xMinThreshold: 0,
        xMaxThreshold: 100,
        xOffsetLen: 0.01,
        yMinThreshold: 0,
        yMaxThreshold: 100,
        yOffsetLen: 0.01,
        delay: 1,
    };

    let customFloatStatus = {
        top: 0,
        left: 0,
    };

    let floatOptions = this.setFloatOptions(customFloatOptions);
    let floatStatus = this.getfloatStatus(customFloatStatus);

    if(floatOptions.floatId) clearInterval(floatOptions.floatId);
    floatOptions.floatId = setInterval(function(){
        if(floatOptions.yMinThreshold != floatOptions.yMaxThreshold && floatOptions.xMinThreshold != floatOptions.xMaxThreshold){
            if(floatStatus.top <= floatOptions.yMinThreshold && floatStatus.left <= floatOptions.xMinThreshold) {
                floatOptions.status = 1;
            }else if(floatStatus.top <= floatOptions.yMinThreshold && floatStatus.left >= floatOptions.xMaxThreshold) {
                floatOptions.status = 2;
            }else if(floatStatus.top >= floatOptions.yMaxThreshold && floatStatus.left >= floatOptions.xMaxThreshold) {
                floatOptions.status = 3;
            }else if(floatStatus.top >= floatOptions.yMaxThreshold && floatStatus.left <= floatOptions.xMinThreshold) {
                floatOptions.status = 4;
            }
        }

        if(floatOptions.yMinThreshold == floatOptions.yMaxThreshold && floatOptions.xMinThreshold != floatOptions.xMaxThreshold){
            if(floatStatus.left <= floatOptions.xMinThreshold) {
                floatOptions.status = 5;
            }else if(floatStatus.left >= floatOptions.xMaxThreshold) {
                floatOptions.status = 6;
            }
        }

        if(floatOptions.yMinThreshold != floatOptions.yMaxThreshold && floatOptions.xMinThreshold == floatOptions.xMaxThreshold){
            if(floatStatus.top <= floatOptions.yMinThreshold) {
                floatOptions.status = 7;
            }else if(floatStatus.top >= floatOptions.yMaxThreshold) {
                floatOptions.status = 8;
            }
        }

        if(floatOptions.status == 1) {
            floatStatus.left = floatStatus.left + floatOptions.xOffset;
        }else if(floatOptions.status == 2) {
            floatStatus.top = floatStatus.top + floatOptions.yOffset;
        }else if(floatOptions.status == 3) {
            floatStatus.left = floatStatus.left - floatOptions.xOffset;
        }else if(floatOptions.status == 4) {
            floatStatus.top = floatStatus.top - floatOptions.yOffset;
        }else if(floatOptions.status == 5) {
            floatStatus.left = floatStatus.left + floatOptions.xOffset;
        }else if(floatOptions.status == 6) {
            floatStatus.left = floatStatus.left - floatOptions.xOffset;
        }else if(floatOptions.status == 7) {
            floatStatus.top = floatStatus.top + floatOptions.yOffset;
        }else if(floatOptions.status == 8) {
            floatStatus.top = floatStatus.top - floatOptions.yOffset;
        }

        _this.setFloatStatus(floatStatus, floatOptions);
    }, floatOptions.delay);
};

tips.prototype.setFloatType = function() {
    let optFloatType = this.options.float.type;
    let floatFun = 'floatType' + optFloatType.slice(0, 1).toUpperCase() + optFloatType.slice(1);
    if(this[floatFun]) {
        this[floatFun]();
    }else {
        this.floatTypeDefault();
    }
};

tips.prototype.setFloatEvents = function() {
    let _this = this;
    let $tip = _this.backup._tipElm;
    let floatFlag = 0;

    let hoverIn = function() {
        if(_this.floatOptions.floatId) clearInterval(_this.floatOptions.floatId);
    }
    let hoverOut = function() {
        _this.setFloatPosition(++floatFlag);
    }
    
    $tip.onmouseenter = hoverIn;
    $tip.onmouseleave = hoverOut;
};

tips.prototype.setFloatPosition = function(floatFlag = 0) {
    this.options.events.beforeFloated.call(this, floatFlag);      //Tips 浮动之前 触发

    let _this = this;
    let $tip = _this.backup._tipElm;
    let $tipGroup = this.backup._tipGroupElm;
    let $base = _this.backup._baseElm;

    _common_js__WEBPACK_IMPORTED_MODULE_0__.css($tipGroup, {display: 'none'});
    let tipPosition = _this.getPosition({});
    _common_js__WEBPACK_IMPORTED_MODULE_0__.addClass($tipGroup, tipPosition.class.tipClass);

    Object.defineProperty(_this.monitor, 'floatPosition', {
        get:function(){
            return floatPosition;
        },
        set:function(newValue){
            let floatPosition = newValue;
            let tipPosition = _this.getPosition(floatPosition);
            _common_js__WEBPACK_IMPORTED_MODULE_0__.addCss($tipGroup, tipPosition.style);
            _common_js__WEBPACK_IMPORTED_MODULE_0__.addCss($tipGroup, {display: 'block'});
        }
    });

    if(typeof _this.options.float.customFloatFuntion === "function") {
        _this.options.float.customFloatFuntion.call(_this);
    }else {
        _this.setFloatType();
    }

    if(floatFlag === 0) _this.setFloatEvents();

    this.options.events.floated.call(this, floatFlag);      //Tips 浮动之后 触发
};

/**
 * 设置浮动参数。支持用户自定义。 支持的参数有，参考 tips.floatOptions
 * topStart: 0,                //浮动起始位置 Top
 * leftStart: 0,               //浮动起始位置 Left
 * status: true,               //浮动状态，一般用于转折点改变方向趋势
 * offsetType: '',             //每次改变状态量的类型，px 或 百分比，默认px
 * xMinThreshold: 0,           //x轴相对于基准元素的最小偏差值
 * xMaxThreshold: '',          //x轴相对于基准元素的最大偏差值
 * xOffsetLen: 1,              //x轴一次的偏差量
 * yMinThreshold: 0,           //y轴相对于基准元素的最小偏差值
 * yMaxThreshold: '',          //y轴相对于基准元素的最大偏差值
 * yOffsetLen: 1,              //y轴一次的偏差量
 * delay: 1,                   //浮动位置的时间间隔，单位毫秒
 * 
 * @param    Object                 customFloatOptions 函数内自定义浮动参数，优先级低于用户自定义浮动参数
 */
tips.prototype.setFloatTranslateOptions = function(customFloatOptions) {
    //窗口发生变化时需要重新定义float
    //若不是首次设置，则还原当前状态
    let backupfloatOptions = {};
    //注意 this.floatOptions 和 tips.floatOptions 不同
    //前者是当前实例的浮动参数， 后者是默认参数
    if(this.floatOptions) {
        backupfloatOptions.status = this.floatOptions.status;       //当前状态，一般是转折点状态
        backupfloatOptions.floatId = this.floatOptions.floatId;     //每个浮动都是依靠setInterval 实现的，此为其id
    };

    //用户自定义浮动参数，优先级高于函数内自定义浮动参数
    if(this.options.float.customFloatOptions) customFloatOptions = this.options.float.customFloatOptions;

    let floatOptions = _common_js__WEBPACK_IMPORTED_MODULE_0__.extend({}, tips.floatOptions, customFloatOptions, backupfloatOptions);

    let eleDetails = this.getElementDetails();

    floatOptions.xMinThreshold = !_common_js__WEBPACK_IMPORTED_MODULE_0__.isEmptyNum(floatOptions.xMinThreshold)? floatOptions.xMinThreshold : 0;
    floatOptions.yMinThreshold = !_common_js__WEBPACK_IMPORTED_MODULE_0__.isEmptyNum(floatOptions.yMinThreshold)? floatOptions.yMinThreshold : 0;

    //设置最大最小值，一般最小值0，最大值视情况而定，若是一般情况（px）则为元素的最大阈值，如是百分比，则为100%
    if(floatOptions.hasOwnProperty('offsetType') && floatOptions.offsetType === '%') {
        floatOptions.xMaxThreshold = !_common_js__WEBPACK_IMPORTED_MODULE_0__.isEmptyNum(floatOptions.xMaxThreshold)? floatOptions.xMaxThreshold : 100;
        floatOptions.yMaxThreshold = !_common_js__WEBPACK_IMPORTED_MODULE_0__.isEmptyNum(floatOptions.yMaxThreshold)? floatOptions.yMaxThreshold : 100;
        floatOptions.xOffset = floatOptions.xOffsetLen;
        floatOptions.yOffset = floatOptions.yOffsetLen;
    }else {
        floatOptions.xMaxThreshold = !_common_js__WEBPACK_IMPORTED_MODULE_0__.isEmptyNum(floatOptions.xMaxThreshold)? floatOptions.xMaxThreshold : eleDetails.leftThreshold;
        floatOptions.yMaxThreshold = !_common_js__WEBPACK_IMPORTED_MODULE_0__.isEmptyNum(floatOptions.yMaxThreshold)? floatOptions.yMaxThreshold : eleDetails.topThreshold;
        floatOptions.xOffset = (floatOptions.xMaxThreshold - floatOptions.xMinThreshold) * floatOptions.xOffsetLen;
        floatOptions.yOffset = (floatOptions.yMaxThreshold- floatOptions.yMinThreshold) * floatOptions.yOffsetLen;
    }

    this.floatOptions = floatOptions;

    return this.floatOptions;
}

//当需要重新设置float，如窗口，基准元素发生改变，若不是首次设置，则还原当前状态
tips.prototype.getfloatTranslateStatus = function(customFloatStatus) {
    if(this.options.float.customFloatStatus) {
        customFloatStatus = this.options.float.customFloatStatus;
    }else if(!customFloatStatus){
        customFloatStatus = {
            top: tips.floatOptions.topStart,
            left: tips.floatOptions.leftStart,
        }
    }

    //从备份的状态中恢复
    for(let key in customFloatStatus) {
        if(this.backup._floatStatus.hasOwnProperty(key)) {
            customFloatStatus[key] = this.backup._floatStatus[key];
        }else {
            this.backup._floatStatus[key] = customFloatStatus[key];
        }
    }

    return customFloatStatus;
}

/**
 * 设置当前translate 状态
 * @DateTime 2020-05-24T21:01:32+0800
 */
tips.prototype.setFloatTranslateStatus = function(floatStatus, floatOptions) {
    //状态不能超出临界值，一般目的是为了保证不超出基准元素(即临界值不超出基准元素)
    if(floatStatus.top > floatOptions.yMaxThreshold) floatStatus.top = floatOptions.yMaxThreshold;
    if(floatStatus.top < floatOptions.yMinThreshold) floatStatus.top = floatOptions.yMinThreshold;
    if(floatStatus.left > floatOptions.xMaxThreshold) floatStatus.left = floatOptions.xMaxThreshold;
    if(floatStatus.left < floatOptions.xMinThreshold) floatStatus.left = floatOptions.xMinThreshold;

    for(let key in floatStatus) {
        this.backup._floatStatus[key] = floatStatus[key];
    }

    //一般是px 或者 百分比
    let offsetType = floatOptions.hasOwnProperty('offsetType')? floatOptions.offsetType : '';

    //请务必设置floatTranslate，否则不生效
    this.monitor.floatTranslate = {
        top: floatStatus.top + offsetType,
        left: floatStatus.left + offsetType,
    }
}

//默认浮动方式。沿着基准元素左上角到右下角直线浮动
//用户自定义浮动方法，可参考该方法。
tips.prototype.floatTranslateTypeDefault = function() {
    let _this = this;

    //函数内自定义的浮动参数，参考 tips.floatOptions
    //优先级低于用户自定义浮动参数 this.options.float.customFloatOptions
    let customFloatOptions = {
        status: true,
        xOffsetLen: 0.0005,
        yOffsetLen: 0.0005,
        delay: 1,
    };

    //浮动起始状态，如不设置，默认值 tips.floatOptions.topStart 和 tips.floatOptions.leftStart
    //优先级低于 this.options.float.customFloatStatus
    //首次设置浮动时，this.options.float.customFloatStatus 不存在，以后每次浮动都会记录当前浮动状态。 
    //当浏览器窗口大小发生改变时，会重新设置浮动。 此时this.options.float.customFloatStatus已存在，则以其为准，忽略 customFloatStatus
    let customFloatStatus = {
        top: 0,
        left: 0,
    };

    //用户自定义浮动函数时，注意要执行这两个函数
    let floatOptions = this.setFloatTranslateOptions(customFloatOptions);
    let floatStatus = this.getfloatTranslateStatus(customFloatStatus);

    this.writeLog('info', 'floatOptions: ', floatOptions);

    //首次设置浮动时，添加间歇调用，id 保存为 floatId
    //当浏览器窗口大小发生改变时，会重新设置浮动。 需要清空floatId并重新设置间歇调用
    //间歇调用函数依赖于floatOptions 和 floatStatus
    if(floatOptions.floatId) clearInterval(floatOptions.floatId);
    floatOptions.floatId = setInterval(function(){
        //浮动状态top大于y轴临界值，表示已到达基准元素底部，反过来则表示到达基准元素顶部
        if((floatStatus.top >= floatOptions.yMaxThreshold && floatOptions.status) || (floatStatus.top <= floatOptions.yMinThreshold && !floatOptions.status)) {
            floatOptions.status = !floatOptions.status;
        }

        if(floatOptions.status) {
            floatStatus.top = floatStatus.top + floatOptions.yOffset;
            floatStatus.left = floatStatus.left + floatOptions.xOffset;
        }else {
            floatStatus.top = floatStatus.top - floatOptions.yOffset;
            floatStatus.left = floatStatus.left - floatOptions.xOffset;
        }

        //浮动最重要的一步，设置浮动状态，将会触发浮动定位的改变
        _this.setFloatTranslateStatus(floatStatus, floatOptions);
    }, floatOptions.delay);
};

//X 浮动
//浮动方向是 左上角->右下角->右上角->左下角->左上角...
tips.prototype.floatTranslateTypeX = function() {
    let _this = this;

    let customFloatOptions = {
        status: 1,
        offsetType: '%',
        xMinThreshold: 0,
        xMaxThreshold: 100,
        xOffsetLen: 0.01,
        yMinThreshold: 0,
        yMaxThreshold: 100,
        yOffsetLen: 0.01,
        delay: 1,
    };
    
    let customFloatStatus = {
        top: 0,
        left: 0,
    };

    let floatOptions = this.setFloatTranslateOptions(customFloatOptions);
    let floatStatus = this.getfloatTranslateStatus(customFloatStatus);

    if(floatOptions.floatId) clearInterval(floatOptions.floatId);
    floatOptions.floatId = setInterval(function(){
        if(floatStatus.top <= floatOptions.yMinThreshold && floatStatus.left <= floatOptions.xMinThreshold) {
            floatOptions.status = 1;
        }else if(floatStatus.top >= floatOptions.yMaxThreshold && floatStatus.left >= floatOptions.xMaxThreshold) {
            floatOptions.status = 2;
        }else if(floatStatus.top <= floatOptions.yMinThreshold && floatStatus.left >= floatOptions.xMaxThreshold) {
            floatOptions.status = 3;
        }else if(floatStatus.top >= floatOptions.yMaxThreshold && floatStatus.left <= floatOptions.xMinThreshold) {
            floatOptions.status = 4;
        }

        if(floatOptions.status == 1) {
            floatStatus.top = floatStatus.top + floatOptions.yOffset;
            floatStatus.left = floatStatus.left + floatOptions.xOffset;
        }else if(floatOptions.status == 2) {
            floatStatus.top = floatStatus.top - floatOptions.yOffset;
        }else if(floatOptions.status == 3) {
            floatStatus.top = floatStatus.top + floatOptions.yOffset;
            floatStatus.left = floatStatus.left - floatOptions.xOffset;
        }else if(floatOptions.status == 4) {
            floatStatus.top = floatStatus.top - floatOptions.yOffset;
        }

        _this.setFloatTranslateStatus(floatStatus, floatOptions);
    }, floatOptions.delay);
};

//方形浮动
//浮动方向是 左上角->右上角->右下角->左下角->左上角...
tips.prototype.floatTranslateTypeSquare =  function() {
    let _this = this;

    let customFloatOptions = {
        status: 1,
        offsetType: '%',
        xMinThreshold: 0,
        xMaxThreshold: 100,
        xOffsetLen: 0.01,
        yMinThreshold: 0,
        yMaxThreshold: 100,
        yOffsetLen: 0.01,
        delay: 1,
    };

    let customFloatStatus = {
        top: 0,
        left: 0,
    };

    let floatOptions = this.setFloatTranslateOptions(customFloatOptions);
    let floatStatus = this.getfloatTranslateStatus(customFloatStatus);

    if(floatOptions.floatId) clearInterval(floatOptions.floatId);
    floatOptions.floatId = setInterval(function(){
        if(floatOptions.yMinThreshold != floatOptions.yMaxThreshold && floatOptions.xMinThreshold != floatOptions.xMaxThreshold){
            if(floatStatus.top <= floatOptions.yMinThreshold && floatStatus.left <= floatOptions.xMinThreshold) {
                floatOptions.status = 1;
            }else if(floatStatus.top <= floatOptions.yMinThreshold && floatStatus.left >= floatOptions.xMaxThreshold) {
                floatOptions.status = 2;
            }else if(floatStatus.top >= floatOptions.yMaxThreshold && floatStatus.left >= floatOptions.xMaxThreshold) {
                floatOptions.status = 3;
            }else if(floatStatus.top >= floatOptions.yMaxThreshold && floatStatus.left <= floatOptions.xMinThreshold) {
                floatOptions.status = 4;
            }
        }

        if(floatOptions.yMinThreshold == floatOptions.yMaxThreshold && floatOptions.xMinThreshold != floatOptions.xMaxThreshold){
            if(floatStatus.left <= floatOptions.xMinThreshold) {
                floatOptions.status = 5;
            }else if(floatStatus.left >= floatOptions.xMaxThreshold) {
                floatOptions.status = 6;
            }
        }

        if(floatOptions.yMinThreshold != floatOptions.yMaxThreshold && floatOptions.xMinThreshold == floatOptions.xMaxThreshold){
            if(floatStatus.top <= floatOptions.yMinThreshold) {
                floatOptions.status = 7;
            }else if(floatStatus.top >= floatOptions.yMaxThreshold) {
                floatOptions.status = 8;
            }
        }

        if(floatOptions.status == 1) {
            floatStatus.left = floatStatus.left + floatOptions.xOffset;
        }else if(floatOptions.status == 2) {
            floatStatus.top = floatStatus.top + floatOptions.yOffset;
        }else if(floatOptions.status == 3) {
            floatStatus.left = floatStatus.left - floatOptions.xOffset;
        }else if(floatOptions.status == 4) {
            floatStatus.top = floatStatus.top - floatOptions.yOffset;
        }else if(floatOptions.status == 5) {
            floatStatus.left = floatStatus.left + floatOptions.xOffset;
        }else if(floatOptions.status == 6) {
            floatStatus.left = floatStatus.left - floatOptions.xOffset;
        }else if(floatOptions.status == 7) {
            floatStatus.top = floatStatus.top + floatOptions.yOffset;
        }else if(floatOptions.status == 8) {
            floatStatus.top = floatStatus.top - floatOptions.yOffset;
        }

        _this.setFloatTranslateStatus(floatStatus, floatOptions);
    }, floatOptions.delay);
};

/**
 * 设置浮动的起始点
 * 通过间歇改变tipGroup元素translate达到浮动的效果
 */
tips.prototype.setfloatTranslateStart = function() {
    let floatOptions = this.floatOptions;
    let offsetType = floatOptions.hasOwnProperty('offsetType')? floatOptions.offsetType : '';
    let positionStart = {
        top: floatOptions.topStart + offsetType,
        left: floatOptions.leftStart + offsetType,
    };

    let $tipGroup = this.backup._tipGroupElm;
    let tipPositionStart = this.getPosition(positionStart);
    _common_js__WEBPACK_IMPORTED_MODULE_0__.addClass($tipGroup, tipPositionStart.class.tipClass);
    _common_js__WEBPACK_IMPORTED_MODULE_0__.addCss($tipGroup, tipPositionStart.style);
}

/**
 * 设置浮动类型，默认浮动方式是左上角->右下角
 */
tips.prototype.setFloatTranslateType = function() {
    let optFloatType = this.options.float.type;
    let floatFun = 'floatTranslateType' + optFloatType.slice(0, 1).toUpperCase() + optFloatType.slice(1);
    if(this[floatFun]) {
        this[floatFun]();
    }else {
        this.floatTypeTranslateDefault();
    }
};

/**
 * 浮动回调函数
 * 鼠标悬停在Tips 上时，停止浮动
 * 鼠标从Tips移开，继续浮动
 */
tips.prototype.setFloatTranslateEvents = function() {
    let _this = this;
    let $tip = _this.backup._tipElm;
    let floatFlag = 0;

    let hoverIn = function() {
        if(_this.floatOptions.floatId) clearInterval(_this.floatOptions.floatId);
    }
    let hoverOut = function() {
        _this.setFloatTranslate(++floatFlag);
    }
    
    $tip.onmouseenter = hoverIn;
    $tip.onmouseleave = hoverOut;
};

/**
 * 计算Tips 位置转变量，支持px和百分比
 */
tips.prototype.getTranslate = function(myTranslate, calculateTip) {
    let eleDetails = this.getElementDetails();

    let tipGroupWidth = eleDetails.tipGroupWidth;
    let tipGroupHeight = eleDetails.tipGroupHeight;
    if(calculateTip === false) {
        tipGroupWidth = 0;
        tipGroupHeight = 0;
    }

    let tipTranslate = {
        top: "",
        left: "",
    };

    if(this.floatOptions.hasOwnProperty('offsetType') && this.floatOptions.offsetType === '%') {
        tipTranslate.top = (eleDetails.baseHeight - tipGroupHeight) * parseFloat(myTranslate.top)/100;
        tipTranslate.left = (eleDetails.baseWidth - tipGroupWidth) * parseFloat(myTranslate.left)/100;
    }else {
        tipTranslate.top = parseFloat(myTranslate.top);
        tipTranslate.left = parseFloat(myTranslate.left);
    }

    tipTranslate.top = tipTranslate.top.toFixed(4) + "px";
    tipTranslate.left = tipTranslate.left.toFixed(4) + "px";

    return tipTranslate;
};

/**
 * translate 浮动入口函数。
 */
tips.prototype.setFloatTranslate = function(floatFlag = 0) {
    this.options.events.beforeFloated.call(this, floatFlag);      //Tips 浮动之前 触发

    let _this = this;
    let $tip = _this.backup._tipElm;
    let $tipGroup = this.backup._tipGroupElm;
    let $base = _this.backup._baseElm;

    _common_js__WEBPACK_IMPORTED_MODULE_0__.css($tipGroup, {display: 'none'});

    let lastValue = null;
    let lastTipTranslate = null;

    let compare = function(lastValue, newValue) {
        // _this.writeLog('info', '*** Compare Value: ', lastValue, newValue);

        if(!lastValue) {
            _this.writeLog('info', 'No last value');
            return;
        }

        lastValue = _common_js__WEBPACK_IMPORTED_MODULE_0__.extend({}, lastValue);
        newValue = _common_js__WEBPACK_IMPORTED_MODULE_0__.extend({}, newValue);

        let type = "value";
        if(_common_js__WEBPACK_IMPORTED_MODULE_0__.isString(lastValue.left)) {
            type = "translate";
            lastValue.left = parseFloat(lastValue.left);
            lastValue.top = parseFloat(lastValue.top);
            newValue.left = parseFloat(newValue.left);
            newValue.top = parseFloat(newValue.top);
        }

        let leftFlag = '?';
        if(newValue.left > lastValue.left) leftFlag = '>';
        else if(newValue.left == lastValue.left) leftFlag = '=';
        else if(newValue.left < lastValue.left) leftFlag = '<';

        let topFlag = '?';
        if(newValue.top > lastValue.top) topFlag = '>';
        else if(newValue.top == lastValue.top) topFlag = '=';
        else if(newValue.top < lastValue.top) topFlag = '<';

        // _this.writeLog('info', 'New %s Left : Old %s Left ? ', type, type, leftFlag);
        // _this.writeLog('info', 'New %s Top  : Old %s Top  ? ', type, type, leftFlag);

        return {
            leftFlag: leftFlag,
            topFlag: topFlag,
        }
    }

    let compareResult = function(valueResult, translateResult) {
        if(!valueResult) return true;

        let result = true;

        if(valueResult.leftFlag != translateResult.leftFlag) {
            _this.writeLog('error', 'Translate Left Error! ', valueResult.leftFlag, translateResult.leftFlag);
            result = false;
        }

        if(valueResult.topFlag != translateResult.topFlag) {
            _this.writeLog('error', 'Translate Top Error! ', valueResult.topFlag, translateResult.topFlag);
            result = false;
        }

        return result;
    }

    //给this.monitor 添加新属性 floatTranslate
    //当 floatTranslate改变时，设置 tipGroup 的 translate，达到浮动的效果
    Object.defineProperty(_this.monitor, 'floatTranslate', {
        get:function(){
            return floatTranslate;
        },
        set:function(newValue){
            let floatTranslate = newValue;
            let tipTranslate = _this.getTranslate(floatTranslate);

            // 想调试的话就取消注释
            // let result = compareResult(compare(lastValue, newValue), compare(lastTipTranslate, tipTranslate));
            // if(!result) {
            //     _this.writeLog('info', '--- Last Value: ', lastValue, lastTipTranslate);
            //     _this.writeLog('info', '+++ New  Value: ', newValue, tipTranslate);
            // }

            let translate = {
                display: 'block',
                transform: 'translate('+ tipTranslate.left + ',' + tipTranslate.top + ')',
            };

            _common_js__WEBPACK_IMPORTED_MODULE_0__.addCss($tipGroup, translate);

            lastValue = newValue;
            lastTipTranslate = tipTranslate;
        }
    });

    if(typeof _this.options.float.customFloatFuntion === "function") {
        _this.options.float.customFloatFuntion.call(_this);
    }else {
        _this.setFloatTranslateType();
    }

    this.setfloatTranslateStart();

    if(floatFlag === 0) _this.setFloatTranslateEvents();

    this.options.events.floated.call(this, floatFlag);      //Tips 浮动之后 触发
};

/**
 * 设置Tips Group 定位
 * 包括固定定位和浮动定位。
 * Float 和 Translate 都是浮动定位，只用使用的方法不同
 */
tips.prototype.setTipsPosition = function() {
    let $tip = this.backup._tipElm;
    let $tipGroup = this.backup._tipGroupElm;
    let $base = this.backup._baseElm;

    if(this.options.position == 'float') {
        this.setFloatPosition();
    }else if(this.options.position == 'translate') {
        this.setFloatTranslate();
    }else {
        let tipPosition = this.getPosition(this.options.position);
        if(this.isBaseBodyElement()) {
            _common_js__WEBPACK_IMPORTED_MODULE_0__.addClass($tipGroup, tipPosition.class.tipClass);
            this.setClassOffset();
        }else {
            $tipGroup.style.cssText = '';
            _common_js__WEBPACK_IMPORTED_MODULE_0__.addCss($tipGroup, tipPosition.style);
        }
    }
};

tips.prototype.setBgPosition = function() {
    if(!this.options.background || !this.backup._backgroundElem) return false;
    let $bg = this.backup._backgroundElem;

    if(this.isBaseBodyElement()) {
        let positionClass = this.getPositionClass(this.options.position);
        _common_js__WEBPACK_IMPORTED_MODULE_0__.addClass($bg, positionClass.bgClass);
    }else {
        let eleDetails = this.getElementDetails();
        let bgCss = _common_js__WEBPACK_IMPORTED_MODULE_0__.extend({}, eleDetails.basePosition, {
            width: eleDetails.baseOuterWidth,
            height: eleDetails.baseOuterHeight
        }, {"border-radius": eleDetails.baseBorderRadius});

        _common_js__WEBPACK_IMPORTED_MODULE_0__.addCss($bg, bgCss);
    }
};

//初始化Tips位置，目的在于可以获得Tips 的真实宽度高度
tips.prototype.setInitPosition = function() {
    let $tipGroup = this.backup._tipGroupElm;
    _common_js__WEBPACK_IMPORTED_MODULE_0__.addClass($tipGroup, 'ohoTip-init');
}

//初始化Tips位置后必须去除
tips.prototype.unsetInitPosition = function() {
    let $tipGroup = this.backup._tipGroupElm;
    _common_js__WEBPACK_IMPORTED_MODULE_0__.removeClass($tipGroup, 'ohoTip-init');
}

tips.prototype.setPosition = function() {
    this.setTipsPosition();
    this.setBgPosition();
};

tips.prototype.resetPosition = function() {
    this.event = {};
    this.event.type = 'resize';
    this.setPosition();
}

tips.prototype.render = function() {
    let options = this.options;
    this.backup._baseElm = this.getBaseElememt(options);
    this.backup._parentElm = this.getParentElememt(options, this.backup._baseElm);
    this.backup._tipGroupElm = this.getTipsGroup(options);
    this.backup._tipContainerElm = this.getTipsContainer(options);
    this.backup._backgroundElem = this.renderTipsBg(options);
    this.backup._tipElm = this.renderTipsBody(options);
    this.setPosition();
};

tips.prototype.animation = function(status) {
    status = 'animation' + status.charAt(0).toUpperCase() + status.slice(1);
    if(this[status]) {
        this[status]();
    }
};

tips.prototype.animationIn = function() {
    let animationOption = this.options.animation;
    let $tipGroup = this.backup._tipGroupElm;

    if($tipGroup.querySelectorAll("[name=ohoTips]").length <= 1) {
        if(animationOption.customAmtFuntion) {
            animationOption.customAmtFuntion.call(this, 'in');
        }else {
            let amtFun = animationOption.in;
            amtFun = 'animationType' + amtFun.charAt(0).toUpperCase() + amtFun.slice(1);
            if(this[amtFun]) {
                this[amtFun]('in');
            }else {
                this.animationTypeDefault('in');
            }
        }
    }else {
        this.animationTypeDefault('in');
    }
};

tips.prototype.animationOut = function() {
    let animationOption = this.options.animation;
    let $tipGroup = this.backup._tipGroupElm;

    if($tipGroup.querySelectorAll("[name=ohoTips]").length <= 1) {
        if(animationOption.customAmtFuntion) {
            animationOption.customAmtFuntion.call(this, 'out');
        }else {
            let amtFun = animationOption.out;
            amtFun = 'animationType' + amtFun.charAt(0).toUpperCase() + amtFun.slice(1);
            if(this[amtFun]) {
                this[amtFun]('out');
            }else {
                this.animationTypeDefault('out');
            }
        }
    }else {
        this.animationTypeDefault('out');
    }
};

tips.prototype.animationTypeDefault = function(status) {
    this.animationTypeFade(status);
};

/**
 * 默认动画
 * 淡入淡出动画
 * @param    {[type]}                 status in - 显示 / out - 隐藏
 */
tips.prototype.animationTypeFade = function(status) {
    let $tip = this.backup._tipElm;
    let $tipGroup = this.backup._tipGroupElm;
    let $bg = this.backup._backgroundElem;
    if(status == 'in') {
        _common_js__WEBPACK_IMPORTED_MODULE_0__.addClass($tip, 'ohoTip-amt-fade');
        if($bg) {
            _common_js__WEBPACK_IMPORTED_MODULE_0__.addClass($bg, 'ohoTip-bg-amt-fade');
        }
        
        setTimeout(function(){
            _common_js__WEBPACK_IMPORTED_MODULE_0__.addClass($tip, 'in');
            if($bg) {
                _common_js__WEBPACK_IMPORTED_MODULE_0__.addClass($bg, 'in');
            }
        }, 100);
    }else if(status == 'out') {
        setTimeout(function(){
            _common_js__WEBPACK_IMPORTED_MODULE_0__.addClass($tip, 'out');
            if($bg) {
                _common_js__WEBPACK_IMPORTED_MODULE_0__.removeClass($bg, 'in');
            }
        }, 100);
    }
};

/**
 * 折叠特效
 * 向下展开，向上收起
 * @param    {[type]}                 status in - 显示 / out - 隐藏
 */
tips.prototype.animationTypeFold = function(status) {
    let $tip = this.backup._tipElm;
    let $bg = this.backup._backgroundElem;
    if(status == 'in') {
        let eleDetails = this.getElementDetails();
        let tipStyle = {
            height: eleDetails.tipHeight + 'px',
        };

        _common_js__WEBPACK_IMPORTED_MODULE_0__.addClass($tip, 'ohoTip-amt-fold');
        if($bg) {
            _common_js__WEBPACK_IMPORTED_MODULE_0__.addClass($bg, 'ohoTip-bg-amt-fold');
        }
        
        setTimeout(function(){
            _common_js__WEBPACK_IMPORTED_MODULE_0__.addCss($tip, tipStyle);
            if($bg) {
                _common_js__WEBPACK_IMPORTED_MODULE_0__.addClass($bg, 'in');
            }
        }, 100);
        // 显示阴影
        this.timeoutFoldId = setTimeout(function(){
            _common_js__WEBPACK_IMPORTED_MODULE_0__.addCss($tip, {overflow: 'visible'});
        }, 300);
    }else if(status == 'out') {
        if(this.timeoutFoldId) clearTimeout(this.timeoutFoldId);
        
        _common_js__WEBPACK_IMPORTED_MODULE_0__.addCss($tip, {overflow: 'hidden'});
        setTimeout(function(){
            _common_js__WEBPACK_IMPORTED_MODULE_0__.addClass($tip, 'out');
            if($bg) {
                _common_js__WEBPACK_IMPORTED_MODULE_0__.removeClass($bg, 'in');
            }
        }, 100);
    }
};

/**
 * oho特效
 * 在基准元素中间由小到大弹出到定位位置，从定位位置由大到小消失在基准元素中间
 * @param    {[type]}                 status in - 显示 / out - 隐藏
 */
tips.prototype.animationTypeOho = function(status) {
    let $tip = this.backup._tipElm;
    let $tipGroup = this.backup._tipGroupElm;
    let $bg = this.backup._backgroundElem;

    let startPosition = this.getPositionStyle('middle', false, true);
    let startSize = {
        width: 0,
        height: 0
    };
    let startStyle = _common_js__WEBPACK_IMPORTED_MODULE_0__.extend({}, startPosition, startSize, {'opacity': '1'});

    let eleDetails = this.getElementDetails();
    let tipGroupPosition = _common_js__WEBPACK_IMPORTED_MODULE_0__.relativePosition($tipGroup);
    let oldGroupStyle = $tipGroup.style.cssText;
    let oldGroupStyleObj = {
        top: tipGroupPosition.top,
        left: tipGroupPosition.left,
        width: eleDetails.tipGroupWidth,
        height: eleDetails.tipGroupHeight,
    };

    if(status == 'in') {
        _common_js__WEBPACK_IMPORTED_MODULE_0__.addCss($tipGroup, {overflow: 'hidden'});

        _common_js__WEBPACK_IMPORTED_MODULE_0__.addCss($tip, {'opacity': '1'});
        _common_js__WEBPACK_IMPORTED_MODULE_0__.addCss($tipGroup, startStyle);
        
        setTimeout(function(){
            _common_js__WEBPACK_IMPORTED_MODULE_0__.addClass($tipGroup, 'ohoTip-amt-oho');

            _common_js__WEBPACK_IMPORTED_MODULE_0__.addCss($tipGroup, oldGroupStyleObj);
            if($bg) {
                _common_js__WEBPACK_IMPORTED_MODULE_0__.addClass($bg, 'ohoTip-bg-amt-oho');
                _common_js__WEBPACK_IMPORTED_MODULE_0__.addClass($bg, 'in');
            }
        }, 1);
        setTimeout(function(){
            // 分组第二个Tip 使用默认动画，所以需要删除其他动画效果，避免默认动画效果冲突
            _common_js__WEBPACK_IMPORTED_MODULE_0__.removeClass($tipGroup, 'ohoTip-amt-oho');
            $tipGroup.style.cssText = oldGroupStyle;
        }, 201);
    }else if(status == 'out') {
        _common_js__WEBPACK_IMPORTED_MODULE_0__.addCss($tipGroup, {overflow: 'hidden'});

        // in 之后 会删除动画效果，out 需要将动画效果先添加回来
        _common_js__WEBPACK_IMPORTED_MODULE_0__.addClass($tipGroup, 'ohoTip-amt-oho');
        if($bg) {
            _common_js__WEBPACK_IMPORTED_MODULE_0__.addClass($bg, 'ohoTip-bg-amt-oho');
        }

        _common_js__WEBPACK_IMPORTED_MODULE_0__.addCss($tipGroup, oldGroupStyleObj);

        setTimeout(function(){
            _common_js__WEBPACK_IMPORTED_MODULE_0__.addCss($tipGroup, startStyle);
            if($bg) {
                _common_js__WEBPACK_IMPORTED_MODULE_0__.removeClass($bg, 'in');
            }
        }, 1);
    }
};

/**
 * 玻璃碎片特效
 * Tips 由碎片合成整体展示，Tips 由整体分裂成碎片消失
 * @param    {[type]}                 status in - 显示 / out - 隐藏
 */
tips.prototype.animationTypeFragment = function(status) {
    let $tipGroup = this.backup._tipGroupElm;
    let $tip = this.backup._tipElm;
    let $bg = this.backup._backgroundElem;
    if(status == 'in') {
        _common_js__WEBPACK_IMPORTED_MODULE_0__.addClass($tip, 'ohoTip-amt-fragment in');
        if($bg) {
            _common_js__WEBPACK_IMPORTED_MODULE_0__.addClass($bg, 'ohoTip-bg-amt-fragment in');
        }

        this.fragmentInExplode();
    }else if(status == 'out') {
        this.fragmentOutExplode();

        let tipStyle = {
            display: 'none',
        };
        _common_js__WEBPACK_IMPORTED_MODULE_0__.addCss($tip, tipStyle);
    }
}

tips.prototype.createTipCopy = function(hideTip) {
    let $tip = this.backup._tipElm;
    let $tipClone = $tip.cloneNode(true);

    _common_js__WEBPACK_IMPORTED_MODULE_0__.insertAfter($tipClone, $tip);

    if(hideTip == true){
        $tip.style.display = "none";
    }

    return $tipClone;
}

tips.prototype.createFragment = function() {
    let $tipClone = this.createTipCopy(true);

    let tipWidth = _common_js__WEBPACK_IMPORTED_MODULE_0__.outerWidth($tipClone), tipHeight = _common_js__WEBPACK_IMPORTED_MODULE_0__.outerHeight($tipClone);
    _common_js__WEBPACK_IMPORTED_MODULE_0__.addCss($tipClone, {width: tipWidth+'px', height: tipHeight+'px'});
    let tipHtml = $tipClone.innerHTML;
    $tipClone.innerHTML = '';
    
    let animationOption = this.options.animation;
    let xCount = animationOption.fragments.xCount,
        yCount = animationOption.fragments.yCount,
        fWidth = tipWidth/xCount,
        fHeight = tipHeight/yCount;

    let x=0, y=0, rectLeft=0, rectTop=0, fNode;
    for(y=0; y<yCount; y++) {
        rectTop = y*fHeight;
        for(x=0; x<xCount; x++) {
            rectLeft=x*fWidth;
            fNode = _common_js__WEBPACK_IMPORTED_MODULE_0__.createNode('<div class="ohoTip-amt-fragment-box" style="clip: rect('+rectTop+'px, '+(rectLeft+fWidth)+'px, '+(rectTop+fHeight)+'px, '+rectLeft+'px)">'+tipHtml+'</div>');
            $tipClone.appendChild(fNode);
        }
    }

    return $tipClone;
}

tips.prototype.fragmentInExplode = function() {
    let $tip = this.backup._tipElm;

    let $tipClone = this.createFragment();

    $tipClone.querySelectorAll('div[class="ohoTip-amt-fragment-box"]').forEach(item => {            
        let randTop = _common_js__WEBPACK_IMPORTED_MODULE_0__.randomNum(-10, 10),
            randLeft = _common_js__WEBPACK_IMPORTED_MODULE_0__.randomNum(-10, 10);

        let randDeg = _common_js__WEBPACK_IMPORTED_MODULE_0__.randomNum(-5, 15), 
            randScale = _common_js__WEBPACK_IMPORTED_MODULE_0__.randomNum(0.7, 1.3),
            randDeg2 = _common_js__WEBPACK_IMPORTED_MODULE_0__.randomNum(5, 25);

        _common_js__WEBPACK_IMPORTED_MODULE_0__.addCss(item, {'top' : (randTop)+'px', 'left' : (randLeft)+'px', 'opacity' : '0', 'transform' : 'scale('+randScale+') skew('+randDeg+'deg) rotateZ('+randDeg2+'deg)'});
        
        setTimeout(function() {
            _common_js__WEBPACK_IMPORTED_MODULE_0__.addClass(item, 'explode-in');
            _common_js__WEBPACK_IMPORTED_MODULE_0__.addCss(item, {'left' : '0', 'top' : '0', 'opacity' : '1', 'transform' : 'none'});
        }, 10);
    })

    setTimeout(function() {
        $tipClone.parentNode.removeChild($tipClone);
        _common_js__WEBPACK_IMPORTED_MODULE_0__.addCss($tip, {display: ''});
    }, 1000);
}

tips.prototype.fragmentOutExplode = function() {
    let $tipClone = this.createFragment();
    
    let tipWidth = _common_js__WEBPACK_IMPORTED_MODULE_0__.outerWidth($tipClone), tipHeight = _common_js__WEBPACK_IMPORTED_MODULE_0__.outerHeight($tipClone);

    $tipClone.querySelectorAll('div[class="ohoTip-amt-fragment-box"]').forEach(item => {
        _common_js__WEBPACK_IMPORTED_MODULE_0__.addClass(item, 'explode-out');
        
        let randTop = _common_js__WEBPACK_IMPORTED_MODULE_0__.randomNum(-30, 30);
        let randLeft = _common_js__WEBPACK_IMPORTED_MODULE_0__.randomNum(-30, 30);

        let randDeg = _common_js__WEBPACK_IMPORTED_MODULE_0__.randomNum(-5, 10), 
        randScale = _common_js__WEBPACK_IMPORTED_MODULE_0__.randomNum(0.9, 1.5),
        randDeg2 = _common_js__WEBPACK_IMPORTED_MODULE_0__.randomNum(30, 5);

        _common_js__WEBPACK_IMPORTED_MODULE_0__.addCss(item, {'top' : (randTop)+'px', 'left' : (randLeft)+'px', 'opacity' : '0', 'transform' : 'scale('+randScale+') skew('+randDeg+'deg) rotateZ('+randDeg2+'deg)'});
    })

    setTimeout(function() {
        $tipClone.parentNode.removeChild($tipClone);
    }, 1000);

    this.options.animation.delay = 1010;
}

tips.prototype.fragmentOutFlow = function() {
    let $tipClone = this.createFragment();

    let fragments = $tipClone.querySelectorAll('div[class="ohoTip-amt-fragment-box"]');
    let animationOption = this.options.animation;
    let xCount = animationOption.fragments.xCount,
        yCount = animationOption.fragments.yCount;
    let fHeight = _common_js__WEBPACK_IMPORTED_MODULE_0__.outerHeight($tipClone)/yCount;
    
    let x=0, y=0, curTimeout=0, maxTimeout=0;
    for(y=0; y<yCount; y++) {
        let top = y*fHeight+5;
        for(x=0; x<xCount; x++) {
            curTimeout = x*30;
            maxTimeout = maxTimeout > curTimeout? maxTimeout : curTimeout;
            let k = y*xCount + x;
            setTimeout(function() {
                if(fragments[k] === undefined) return;

                fragments[k].style.top = top + "px";
                fragments[k].style.opacity = 0;
                // fragments[k].style.transform = "rotate(360deg) scale(0)";
            }, curTimeout);
        }
    }
    setTimeout(function() {
        $tipClone.parentNode.removeChild($tipClone);
    }, curTimeout+100);

    // Will remove All the tips element after delay
    this.options.animation.delay = curTimeout+100;
}

/**
 * 监听窗口大小发生改变，重新定位
 *
 * 注意窗口大小改变（resize） 500毫秒内 立刻上下滚动（scroll），需要立即重新定位一次。
 * 原因是 getElementDetails 只有 resize 才会重新获取
 */
tips.prototype.listen = function() {
    let _this = this;

    let lastEvent = null;

    let triggerSetPosition = function(e) {
        _this.writeLog('info', "Trigger Set Position: ", e);
        _this.event = e;
        _this.setPosition();

        // setTimeout(function(){_this.event = null;}, 1);
        _this.event = null;
    }


    _this.backup.bind = function(e) {
        // _this.writeLog('info', "Trigger Event: ", e);

        if(lastEvent && lastEvent.type == 'resize' && e.type != 'resize') {
            _this.writeLog('info', "Trigger Event type was changed from %s to %s, need to set position immediately.", lastEvent.type, e.type);
            triggerSetPosition(lastEvent);
        }

        lastEvent = e;

        if(_this.eventTimeoutID) clearTimeout(_this.eventTimeoutID);
        _this.eventTimeoutID = setTimeout(function() {
            triggerSetPosition(e);
        }, 10);
    }
    window.addEventListener('resize', _this.backup.bind);
    if(this.isParentBodyElement()) window.addEventListener('scroll', _this.backup.bind);
    else this.backup._parentElm.addEventListener('scroll', _this.backup.bind);
};

tips.prototype.unlisten = function() {
    let _this = this;
    window.removeEventListener('resize', _this.backup.bind);
    if(this.isParentBodyElement()) window.removeEventListener('scroll', _this.backup.bind);
    else this.backup._parentElm.removeEventListener('scroll', _this.backup.bind);
};

tips.prototype.clearTimeout = function() {
    if(this.floatOptions && this.floatOptions.hasOwnProperty('floatId') && this.floatOptions.floatId) clearInterval(this.floatOptions.floatId);
}

tips.prototype.deleteGroup = function() {
}

//移除Tips 元素
tips.prototype.destroy = function() {
    let _this = this;
    let $tipContainer = _this.backup._tipContainerElm;
    let $tipGroup = _this.backup._tipGroupElm;
    let $tip = _this.backup._tipElm;
    let $bg = _this.backup._backgroundElem;
    let $symbol = _this.backup._symbolElm;

    this.options.events.beforeDestroyed.call(this);      //Tips 销毁之前 触发

    _this.animation('out');

    setTimeout(function() {
        $tip.remove();
        if($bg) {
            $bg.remove();
        }

        // 一个组只有一个Symbol，当组内只剩下一个元素的时候，说明它是Symbol
        if($symbol) {
            if($tipGroup.getElementsByTagName("*").length == 1) {
                $symbol.remove();
            }
        }

        if($tipGroup.getElementsByTagName("*").length == 0) {
            $tipGroup.remove();
        }else {
            // 用于显示symbol
            _common_js__WEBPACK_IMPORTED_MODULE_0__.addCss($tipGroup, {overflow: 'visible'});
            _this.resetPosition();
        }

        if($tipContainer.getElementsByTagName("*").length == 0) {
            $tipContainer.remove();
        }

        //取消监听
        _this.unlisten();

        _this.clearTimeout();

        _this.unsetGroup();

        _this.options.events.destroyed.call(_this);        //Tips 销毁之后 触发
    }, _this.options.animation.delay);
}

tips.prototype.setDestroy = function() {
    let _this = this;
    let $tipBox = _this.backup._tipBoxElm;
    let $bg = _this.backup._backgroundElem;

    if(this.options.destroy == 'auto') {      //自动销毁tips
        let delay = this.options.delay;
        setTimeout(function(){
            _this.destroy();
        }, delay);
    }else if(this.options.destroy == 'manual') {     //手动销毁tips
        let $close = _common_js__WEBPACK_IMPORTED_MODULE_0__.createNode("<div class='ohoTip-close'>x</div>");
        $tipBox.appendChild($close);

        $close.onclick = function() {
            _this.destroy();
        };
    }else {
        // 从不销毁
    }
};

tips.prototype.initTips = function() {
    this.initMsg();
    this.setClass();                //获取class
    this.setTipsAttribute();        //获取属性
    this.render();
    this.setGroup();

    this.options.events.beforeShown.call(this);  //Tips 创建消息之后，展示之前 触发

    this.animation('in');
    this.listen();
    this.setDestroy();

    this.options.events.shown.call(this);        //Tips 展示之后 触发
};

tips.prototype.uniqueId = function() {
   let date = new Date();
   let y = date.getFullYear();
   let m = date.getMonth() + 1;
   m = m < 10 ? ('0' + m) : m;
   let d = date.getDate();
   d = d < 10 ? ('0' + d) : d;
   let h = date.getHours();
   let minute = date.getMinutes();
   let second = date.getSeconds();

   let randomStr = Math.random().toString(36).substr(2);

   return y + m + d + h + minute + second + randomStr;
}

tips.prototype.show = function(message, type, baseElement) {
    let options = {
        baseElement: baseElement,
        type: type,
        message: message
    };
    this.init(options);
};

tips.prototype.normal = function(message, icon, baseElement) {
    let options = {
        baseElement: baseElement,
        type: "normal",
        icon: icon? icon : 'info',
        message: message
    };
    this.init(options);
};

tips.prototype.info = function(message, baseElement) {
    let options = {
        baseElement: baseElement,
        type: "info",
        message: message
    };
    this.init(options);
};

tips.prototype.success = function(message, baseElement) {
    let options = {
        baseElement: baseElement,
        type: "success",
        message: message
    };
    this.init(options);
};

tips.prototype.error = function(message, baseElement) {
    let options = {
        baseElement: baseElement,
        type: "error",
        message: message
    };
    this.init(options);
};

tips.prototype.warning = function(message, baseElement) {
    let options = {
        baseElement: baseElement,
        type: "warning",
        message: message
    };
    this.init(options);
};

tips.prototype.hoverTip = function(options, hoverElement) {
    let defOptions = {
        symbol: 'triangle'
    };
    let hoverTip;
    options = _common_js__WEBPACK_IMPORTED_MODULE_0__.extend({}, defOptions, options);

    hoverElement.onmouseenter = function() {
        hoverTip = ohoTips(options);
    }
    hoverElement.onmouseleave = function() {
        if(hoverTip) hoverTip.destroy();
    }
};

//jQuery 拓展静态方法 tips
if(typeof jQuery != 'undefined'){
    $.extend({
        ohoTips: function(options, extendOptions = {}) {
            return new tips(options, extendOptions);
        }
    });
}

function ohoTips(options, extendOptions = {}) {
    return new tips(options, extendOptions);
}


})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0ZBQXdGO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsZ0RBQVU7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsZ0RBQVU7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esb0JBQW9CLGtEQUFZO0FBQ2hDLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLGtEQUFZO0FBQ3BDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbURBQW1EOztBQUVuRCxlQUFlLGtEQUFZOztBQUUzQjtBQUNBLHFCQUFxQixrREFBWTtBQUNqQztBQUNBOztBQUVBLGtCQUFrQixrREFBWTtBQUM5QjtBQUNBOztBQUVBLHNCQUFzQixrREFBWTtBQUNsQztBQUNBLHFDQUFxQztBQUNyQztBQUNBLHVCQUF1QixrREFBWTtBQUNuQyxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHVCQUF1QjtBQUM1QixXQUFXLGdEQUFVO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUywrQ0FBUztBQUMzQix5QkFBeUIsMEJBQTBCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSw2Q0FBNkM7O0FBRTdDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGtEQUFZO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsa0RBQVk7QUFDMUI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0Isa0RBQVk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSw4Q0FBUTs7QUFFWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLHdDQUF3QztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkIsZ0JBQWdCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGtEQUFZO0FBQ3ZDLDRCQUE0QixtREFBYTtBQUN6QyxzQkFBc0Isa0RBQVk7QUFDbEMsdUJBQXVCLG1EQUFhO0FBQ3BDO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMEJBQTBCLGdEQUFVO0FBQ3BDLHNDQUFzQywyQ0FBSztBQUMzQyx1Q0FBdUMsMkNBQUs7QUFDNUMsdUJBQXVCLGtEQUFZO0FBQ25DLHdCQUF3QixtREFBYTtBQUNyQyw0QkFBNEIsa0RBQVk7QUFDeEMsNkJBQTZCLG1EQUFhO0FBQzFDLDJDQUEyQywyQ0FBSztBQUNoRCw4Q0FBOEMsMkNBQUs7QUFDbkQsNENBQTRDLDJDQUFLO0FBQ2pELDZDQUE2QywyQ0FBSztBQUNsRCw4QkFBOEIsMkNBQUs7QUFDbkMsMkJBQTJCLGtEQUFZO0FBQ3ZDLDRCQUE0QixtREFBYTtBQUN6QyxzQkFBc0Isa0RBQVk7QUFDbEMsdUJBQXVCLG1EQUFhO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQywyQ0FBSzs7QUFFM0M7QUFDQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0Msa0JBQWtCO0FBQ2xCLDJDQUEyQyx3REFBa0I7QUFDN0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLGdEQUFVO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsc0JBQXNCO0FBQ3BDLGNBQWMsc0JBQXNCO0FBQ3BDLGNBQWMsc0JBQXNCO0FBQ3BDLGNBQWMsc0JBQXNCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUssV0FBVztBQUNoQjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDhDQUFRO0FBQ3pCLGlCQUFpQiw4Q0FBUTtBQUN6Qix5QkFBeUIsc0RBQWdCOztBQUV6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsOENBQVE7QUFDekIsaUJBQWlCLDhDQUFRO0FBQ3pCLHlCQUF5QixzREFBZ0I7O0FBRXpDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMLHlCQUF5QiwrQ0FBUztBQUNsQyxxQkFBcUIsOENBQVEsYUFBYSw4Q0FBUTtBQUNsRCwwQkFBMEIsK0NBQVM7QUFDbkMsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQiwrQ0FBUztBQUNwQyxLQUFLO0FBQ0wsd0JBQXdCLCtDQUFTO0FBQ2pDLG9CQUFvQiw4Q0FBUSxZQUFZLDhDQUFRO0FBQ2hELDJCQUEyQiwrQ0FBUztBQUNwQyxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDhDQUFRO0FBQ3pCLHlCQUF5QixzREFBZ0I7QUFDekMsaUJBQWlCLDhDQUFRO0FBQ3pCLHlCQUF5QixzREFBZ0I7O0FBRXpDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDhDQUFRO0FBQ3pCLHlCQUF5QixzREFBZ0I7QUFDekMsaUJBQWlCLDhDQUFRO0FBQ3pCLHlCQUF5QixzREFBZ0I7O0FBRXpDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxpQkFBaUIsOENBQVE7QUFDekI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsOENBQVE7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsaUJBQWlCLDhDQUFRLEdBQUc7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7O0FBRXRCO0FBQ0E7QUFDQSxpQ0FBaUMsMkNBQUs7QUFDdEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsdUJBQXVCLDhDQUFRLEdBQUc7O0FBRWxDOztBQUVBO0FBQ0Esa0NBQWtDLGtEQUFZO0FBQzlDLGtDQUFrQyxrREFBWTtBQUM5QyxrQ0FBa0Msa0RBQVk7QUFDOUMsa0NBQWtDLGtEQUFZOztBQUU5QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0VBQWtFOztBQUVsRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLDJDQUFLLGFBQWEsZ0JBQWdCO0FBQ3RDLDBDQUEwQztBQUMxQyxJQUFJLGdEQUFVOztBQUVkO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxZQUFZLDhDQUFRO0FBQ3BCLFlBQVksOENBQVEsYUFBYSxpQkFBaUI7QUFDbEQ7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQSw0REFBNEQ7QUFDNUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9FQUFvRTtBQUNwRSxvRUFBb0U7QUFDcEU7O0FBRUE7QUFDQTs7QUFFQSx1QkFBdUIsOENBQVEsR0FBRzs7QUFFbEM7O0FBRUEsa0NBQWtDLGtEQUFZO0FBQzlDLGtDQUFrQyxrREFBWTs7QUFFOUM7QUFDQTtBQUNBLHNDQUFzQyxrREFBWTtBQUNsRCxzQ0FBc0Msa0RBQVk7QUFDbEQ7QUFDQTtBQUNBLEtBQUs7QUFDTCxzQ0FBc0Msa0RBQVk7QUFDbEQsc0NBQXNDLGtEQUFZO0FBQ2xEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLGdEQUFVO0FBQ2QsSUFBSSw4Q0FBUTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7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OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsOENBQVEsR0FBRzs7QUFFekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRU8sNENBQTRDO0FBQ25EO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vaG8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL29oby8uL3NyYy9qcy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vb2hvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29oby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2hvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2hvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2hvLy4vc3JjL2pzL29ob1RpcHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wib2hvXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIm9ob1wiXSA9IGZhY3RvcnkoKTtcbn0pKHNlbGYsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsImV4cG9ydCBjb25zdCByZWdOdW0gPSAvXltcXC0sIFxcK10/XFxkKyhcXC5cXGQrKT8oW2UsRV1bKy1dP1xcZCspPyQvO1xuZXhwb3J0IGNvbnN0IHJlZ051bU5lZ2F0aXZlID0gL15cXC1cXGQrKFxcLlxcZCspPyhbZSxFXVsrLV0/XFxkKyk/JC87XG5leHBvcnQgY29uc3QgcmVnUGVyID0gL15bXFwtLCBcXCtdPygoXFxkK1xcLj9cXGQqKXwoXFxkKlxcLlxcZCspKShbZSxFXVsrLV0/XFxkKyk/XFwlJC87XG5leHBvcnQgY29uc3QgcmVnUGVyTmVnYXRpdmUgPSAvXlxcLSgoXFxkK1xcLj9cXGQqKXwoXFxkKlxcLlxcZCspKShbZSxFXVsrLV0/XFxkKyk/XFwlJC87XG5cbmV4cG9ydCBmdW5jdGlvbiBub29wKCkge31cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRW1wdHlOdW0obnVtKSB7XG4gICAgaWYobnVtICE9PSAwICYmICFudW0pIHsgICAgIC8vIFwiXCIsIG51bGwsIHVuZGVmaW5lZCwgTmFOXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1lbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuLy8g5Lik5Liq5rWu54K55pWw5rGC5ZKMXG5leHBvcnQgZnVuY3Rpb24gbnVtQWRkKG51bTEsbnVtMikge1xuICAgIGxldCByMSxyMixtO1xuICAgIHRyeXtcbiAgICAgICAgcjEgPSBudW0xLnRvU3RyaW5nKCkuc3BsaXQoJy4nKVsxXS5sZW5ndGg7XG4gICAgfWNhdGNoKGUpe1xuICAgICAgICByMSA9IDA7XG4gICAgfVxuICAgIHRyeXtcbiAgICAgICAgcjI9bnVtMi50b1N0cmluZygpLnNwbGl0KFwiLlwiKVsxXS5sZW5ndGg7XG4gICAgfWNhdGNoKGUpe1xuICAgICAgICByMj0wO1xuICAgIH1cbiAgICBtPU1hdGgucG93KDEwLE1hdGgubWF4KHIxLHIyKSk7XG4gICAgLy8gcmV0dXJuIChudW0xKm0rbnVtMiptKS9tO1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG51bTEqbStudW0yKm0pL207XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBudW1BZGRzKCl7XG4gICAgbGV0IHJlc3VsdCA9IGFyZ3VtZW50c1swXTtcblxuICAgIGxldCBpID0gMTtcbiAgICBmb3IoaTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICByZXN1bHQgPSBudW1BZGQocmVzdWx0LCBhcmd1bWVudHNbaV0pO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIOS4pOS4qua1rueCueaVsOebuOWHj1xuZXhwb3J0IGZ1bmN0aW9uIG51bVN1YihudW0xLG51bTIpIHtcbiAgICBsZXQgcjEscjIsbTtcbiAgICB0cnl7XG4gICAgICAgIHIxID0gbnVtMS50b1N0cmluZygpLnNwbGl0KCcuJylbMV0ubGVuZ3RoO1xuICAgIH1jYXRjaChlKXtcbiAgICAgICAgcjEgPSAwO1xuICAgIH1cbiAgICB0cnl7XG4gICAgICAgIHIyPW51bTIudG9TdHJpbmcoKS5zcGxpdChcIi5cIilbMV0ubGVuZ3RoO1xuICAgIH1jYXRjaChlKXtcbiAgICAgICAgcjI9MDtcbiAgICB9XG4gICAgbT1NYXRoLnBvdygxMCxNYXRoLm1heChyMSxyMikpO1xuICAgIG49KHIxPj1yMik/cjE6cjI7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQoKE1hdGgucm91bmQobnVtMSptLW51bTIqbSkvbSkudG9GaXhlZChuKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBudW1TdWJzKCl7XG4gICAgbGV0IHJlc3VsdCA9IGFyZ3VtZW50c1swXTtcblxuICAgIGxldCBpID0gMTtcbiAgICBmb3IoaTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICByZXN1bHQgPSBudW1TdWIocmVzdWx0LCBhcmd1bWVudHNbaV0pO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIOS4pOS4qua1rueCueaVsOebuOS5mFxuZXhwb3J0IGZ1bmN0aW9uIG51bU11bChudW0xLG51bTIpIHtcbiAgICBsZXQgbT0wLHMxPW51bTEudG9TdHJpbmcoKSxzMj1udW0yLnRvU3RyaW5nKCk7XG4gICAgdHJ5e1xuICAgICAgICBtKz1zMS5zcGxpdChcIi5cIilbMV0ubGVuZ3RoXG4gICAgfWNhdGNoKGUpe1xuXG4gICAgfTtcbiAgICB0cnl7XG4gICAgICAgIG0rPXMyLnNwbGl0KFwiLlwiKVsxXS5sZW5ndGhcbiAgICB9Y2F0Y2goZSl7XG5cbiAgICB9O1xuICAgIHJldHVybiBOdW1iZXIoczEucmVwbGFjZShcIi5cIixcIlwiKSkqTnVtYmVyKHMyLnJlcGxhY2UoXCIuXCIsXCJcIikpL01hdGgucG93KDEwLG0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbnVtTXVscygpe1xuICAgIGxldCByZXN1bHQgPSBhcmd1bWVudHNbMF07XG5cbiAgICBsZXQgaSA9IDE7XG4gICAgZm9yKGk7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzdWx0ID0gbnVtTXVsKHJlc3VsdCwgYXJndW1lbnRzW2ldKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyDkuKTkuKrmta7ngrnmlbDnm7jpmaRcbmV4cG9ydCBmdW5jdGlvbiBudW1EaXYobnVtMSxudW0yKSB7XG4gICAgbGV0IHQxLHQyLHIxLHIyO1xuICAgIHRyeXtcbiAgICAgICAgdDEgPSBudW0xLnRvU3RyaW5nKCkuc3BsaXQoJy4nKVsxXS5sZW5ndGg7XG4gICAgfWNhdGNoKGUpe1xuICAgICAgICB0MSA9IDA7XG4gICAgfVxuICAgIHRyeXtcbiAgICAgICAgdDI9bnVtMi50b1N0cmluZygpLnNwbGl0KFwiLlwiKVsxXS5sZW5ndGg7XG4gICAgfWNhdGNoKGUpe1xuICAgICAgICB0Mj0wO1xuICAgIH1cbiAgICByMT1OdW1iZXIobnVtMS50b1N0cmluZygpLnJlcGxhY2UoXCIuXCIsXCJcIikpO1xuICAgIHIyPU51bWJlcihudW0yLnRvU3RyaW5nKCkucmVwbGFjZShcIi5cIixcIlwiKSk7XG4gICAgcmV0dXJuIChyMS9yMikqTWF0aC5wb3coMTAsdDItdDEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbnVtRGl2cygpe1xuICAgIGxldCByZXN1bHQgPSBhcmd1bWVudHNbMF07XG5cbiAgICBsZXQgaSA9IDE7XG4gICAgZm9yKGk7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzdWx0ID0gbnVtRGl2KHJlc3VsdCwgYXJndW1lbnRzW2ldKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIodmFsKSB7XG4gICAgbGV0IHJlZ1BvcyA9IC9eXFxkKyhcXC5cXGQrKT8kLzsgLy/pnZ7otJ/mta7ngrnmlbBcbiAgICBsZXQgcmVnTmVnID0gL14oLSgoWzAtOV0rXFwuWzAtOV0qWzEtOV1bMC05XSopfChbMC05XSpbMS05XVswLTldKlxcLlswLTldKyl8KFswLTldKlsxLTldWzAtOV0qKSkpJC87IC8v6LSf5rWu54K55pWwXG4gICAgaWYocmVnUG9zLnRlc3QodmFsKSB8fCByZWdOZWcudGVzdCh2YWwpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xuICAgIHJldHVybiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnKSAmJiB2YWx1ZS5jb25zdHJ1Y3RvciA9PSBTdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5KHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBBcnJheS5pc0FycmF5ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpO1xuICAgIH1lbHNle1xuICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqKHZhbHVlKSB7XG4gICAgLy8g6IuldmFsdWUg5pivIG51bGzlr7nosaEsIHR5cGUg5Li6IFwiW29iamVjdCBOdWxsXVwi77ybXG4gICAgbGV0IHR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICAgIHJldHVybiB0eXBlID09PSBcIltvYmplY3QgT2JqZWN0XVwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNFbXB0eU9iaih2YWx1ZSkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh2YWx1ZSkubGVuZ3RoID09IDA7XG59XG5cbi8v6Z2ebnVsbOWvueixoe+8jOmdnuaVsOe7hOWvueixoVxuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqTm90QXJycnkodmFsdWUpIHtcbiAgICByZXR1cm4gaXNPYmoodmFsdWUpICYmICFpc0FycmF5KHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4dGVuZCh0YXJnZXQpIHtcbiAgICBpZighdGFyZ2V0KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ05vIHRhcmdldCEnKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlnbm9yZShvYmopIHtcbiAgICAgICAgaWYoIW9iaikgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIGxldCBpc0pxID0gZmFsc2U7XG4gICAgICAgIGlmKHdpbmRvdy5qUXVlcnkpe1xuICAgICAgICAgICAgaXNKcSA9IG9iaiBpbnN0YW5jZW9mIGpRdWVyeTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpc0lnbm9yZSA9IGlzSnE7XG4gICAgICAgIHJldHVybiBpc0lnbm9yZTtcbiAgICB9XG5cbiAgICBsZXQgb2JqcyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLDEpO1xuXG4gICAgaWYob2Jqcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIG9ianMuZm9yRWFjaCgoaXRlbSxpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYoaXNPYmpOb3RBcnJyeShpdGVtKSkge1xuICAgICAgICAgICAgICAgIGZvcihsZXQga2V5IGluIGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoaXNPYmpOb3RBcnJyeShpdGVtW2tleV0pICYmICFpZ25vcmUoaXRlbVtrZXldKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoISB0YXJnZXQuaGFzT3duUHJvcGVydHkoa2V5KSB8fCAhaXNPYmpOb3RBcnJyeSh0YXJnZXRba2V5XSkpIHRhcmdldFtrZXldID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICBleHRlbmQodGFyZ2V0W2tleV0saXRlbVtrZXldKTtcbiAgICAgICAgICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBpdGVtW2tleV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignUGFyYW1ldGVyICcgKyBpbmRleCArICcgaXMgbm8gdmFsaWQgYXJndW1lbnRzLCBleHBlY3RlZCB0byBiZSBvYmplY3QnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJpbShzdHIsIGlzZ2xvYmFsKSB7XG4gICAgbGV0IHJlc3VsdDtcbiAgICByZXN1bHQgPSBzdHIucmVwbGFjZSgvKF5cXHMrKXwoXFxzKyQpL2csICcnKTtcbiAgICBpZiAoaXNnbG9iYWwgJiYgaXNnbG9iYWwudG9Mb3dlckNhc2UoKSA9PT0gJ2cnKSB7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKC9cXHMvZywgJycpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tTnVtKG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOb2RlKGh0bWxTdHIpIHtcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuaW5uZXJIVE1MID0gaHRtbFN0cjtcbiAgICByZXR1cm4gZGl2LmNoaWxkTm9kZXNbMF0uY2xvbmVOb2RlKHRydWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb2JqVG9TdHlsZShvYmopIHtcbiAgICBsZXQgc3R5bGUgPSBbXTtcbiAgICBmb3IobGV0IGkgaW4gb2JqKXtcbiAgICAgICAgc3R5bGUucHVzaChpICsgJzonICsgb2JqW2ldKTtcbiAgICB9XG4gICAgc3R5bGUgPSBzdHlsZS5qb2luKCc7Jyk7XG5cbiAgICByZXR1cm4gIHN0eWxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3R5bGVUb09iaihzdHlsZSkge1xuICAgIGlmICghc3R5bGUgfHwgc3R5bGUgPT0gJycpIHsgcmV0dXJuICcnOyB9XG5cbiAgICBsZXQgc3R5bGVBcnIgPSBzdHlsZS5zcGxpdCgnOycpXG4gICAgc3R5bGVBcnIgPSBzdHlsZUFyci5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgIHJldHVybiBpdGVtICE9ICcnO1xuICAgIH0pO1xuXG4gICAgbGV0IG9ialN0ciA9ICcnO1xuICAgIHN0eWxlQXJyLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGxldCBjc3MgPSAnJztcbiAgICAgICAgaXRlbSA9IGl0ZW0ucmVwbGFjZSgvKF5cXHMrKXwoXFxzKyQpL2csICcnKTtcbiAgICAgICAgdHJpbShpdGVtKS5zcGxpdCgnOicpLmZvckVhY2goY3NzVmFsdWUgPT4ge1xuICAgICAgICAgICAgY3NzICs9ICdcIicgKyB0cmltKGNzc1ZhbHVlKSArICdcIjonO1xuICAgICAgICB9KVxuICAgICAgICBvYmpTdHIgKz0gY3NzICsgJywnO1xuICAgIH0pXG4gICAgb2JqU3RyID0gb2JqU3RyLnJlcGxhY2UoLzosL2csICcsJyk7XG4gICAgb2JqU3RyID0gb2JqU3RyLnN1YnN0cmluZygwLCBvYmpTdHIubGFzdEluZGV4T2YoJywnKSk7XG4gICAgb2JqU3RyID0gJ3snICsgb2JqU3RyICsgJ30nO1xuICAgIHJldHVybiBKU09OLnBhcnNlKG9ialN0cik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRDc3MoZWwsIGNzc09iaikge1xuICAgIGxldCBvbGRDc3NUZXh0ID0gZWwuc3R5bGUuY3NzVGV4dDtcbiAgICBvbGRDc3NUZXh0ID0gc3R5bGVUb09iaihvbGRDc3NUZXh0KSB8fCB7fTtcbiAgICBpZihvbGRDc3NUZXh0KSBjc3NPYmogPSBleHRlbmQoe30sIG9sZENzc1RleHQsIGNzc09iaik7XG5cbiAgICBsZXQgbnVtYmVyU3R5bGVBcnIgPSBbJ29wYWNpdHknXTtcbiAgICBmb3IobGV0IGkgaW4gY3NzT2JqKXtcbiAgICAgICAgaWYobnVtYmVyU3R5bGVBcnIuaW5kZXhPZihpKSAhPSAtMSkgY29udGludWU7IFxuICAgICAgICBpZihpc051bWJlcihjc3NPYmpbaV0pKSBjc3NPYmpbaV0gKz0gXCJweFwiO1xuICAgIH1cbiAgICBsZXQgY3NzVGV4dCA9IG9ialRvU3R5bGUoY3NzT2JqKTtcblxuICAgIGVsLnN0eWxlLmNzc1RleHQgPSBjc3NUZXh0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2xhc3MoZWwsIGNsYXNzTmFtZSkge1xuICAgIGlmKHR5cGVvZihjbGFzc05hbWUpID09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5zcGxpdCgnICcpO1xuICAgIH1cblxuICAgIGlmKCFpc0FycmF5KGNsYXNzTmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGxldCBvbGRDbGFzcyA9IGVsLmNsYXNzTmFtZS5zcGxpdCgnICcpO1xuICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5maWx0ZXIoaXRlbSA9PiAhb2xkQ2xhc3MuaW5jbHVkZXMoaXRlbSkpO1xuICAgIGlmKGNsYXNzTmFtZS5sZW5ndGggPT0gMCkgcmV0dXJuO1xuXG4gICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lLmpvaW4oJyAnKTtcblxuICAgIHJldHVybiBlbC5jbGFzc05hbWUgKz0gJyAnICsgY2xhc3NOYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWwsIGNsYXNzTmFtZSkge1xuICAgIGlmIChlbC5jbGFzc0xpc3QpIHtcbiAgICAgICAgaWYodHlwZW9mKGNsYXNzTmFtZSkgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5zcGxpdCgnICcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIWlzQXJyYXkoY2xhc3NOYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY2xhc3NOYW1lLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICAgIH0pO1xuICAgIH1lbHNlIHtcbiAgICAgICAgZWwuY2xhc3NOYW1lID0gZWwuY2xhc3NOYW1lLnJlcGxhY2UobmV3IFJlZ0V4cCgnKF58XFxcXGIpJyArIGNsYXNzTmFtZS5zcGxpdCgnICcpLmpvaW4oJ3wnKSArICcoXFxcXGJ8JCknLCAnZ2knKSwgJyAnKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdHlsZShlbCwgc3R5bGVBdHRyKSB7XG4gICAgbGV0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XG5cbiAgICBpZighc3R5bGVBdHRyKSB7XG4gICAgICAgIHJldHVybiBzdHlsZTtcbiAgICB9ZWxzZSB7XG4gICAgICAgIHJldHVybiBzdHlsZVtzdHlsZUF0dHJdO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG91dGVyV2lkdGgoZWwsIHN0YXR1cykge1xuICAgIGxldCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWwpO1xuICAgIGxldCB3aWR0aCA9IHBhcnNlRmxvYXQoc3R5bGUud2lkdGgpICsgcGFyc2VGbG9hdChzdHlsZS5ib3JkZXJMZWZ0V2lkdGgpICsgcGFyc2VGbG9hdChzdHlsZS5ib3JkZXJSaWdodFdpZHRoKTtcblxuICAgIGlmKCFpc0NvbXB1dGVkUGFkZGluZ0VsKGVsKSkgd2lkdGggKz0gcGFyc2VGbG9hdChzdHlsZS5wYWRkaW5nTGVmdCkgKyBwYXJzZUZsb2F0KHN0eWxlLnBhZGRpbmdSaWdodCk7XG5cbiAgICBpZighc3RhdHVzKSByZXR1cm4gd2lkdGg7XG5cbiAgICB3aWR0aCArPSBwYXJzZUZsb2F0KHN0eWxlLm1hcmdpbkxlZnQpICsgcGFyc2VGbG9hdChzdHlsZS5tYXJnaW5SaWdodCk7XG4gICAgcmV0dXJuIHdpZHRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb3V0ZXJIZWlnaHQoZWwsIHN0YXR1cykge1xuICAgIGxldCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWwpO1xuICAgIGxldCBoZWlnaHQgPSBwYXJzZUZsb2F0KHN0eWxlLmhlaWdodCkgKyBwYXJzZUZsb2F0KHN0eWxlLmJvcmRlclRvcFdpZHRoKSArIHBhcnNlRmxvYXQoc3R5bGUuYm9yZGVyQm90dG9tV2lkdGgpO1xuXG4gICAgaWYoIWlzQ29tcHV0ZWRQYWRkaW5nRWwoZWwpKSBoZWlnaHQgKz0gcGFyc2VGbG9hdChzdHlsZS5wYWRkaW5nVG9wKSArIHBhcnNlRmxvYXQoc3R5bGUucGFkZGluZ0JvdHRvbSk7XG5cbiAgICBpZighc3RhdHVzKSByZXR1cm4gaGVpZ2h0O1xuICAgIFxuICAgIGhlaWdodCArPSBwYXJzZUZsb2F0KHN0eWxlLm1hcmdpblRvcCkgKyBwYXJzZUZsb2F0KHN0eWxlLm1hcmdpbkJvdHRvbSk7XG4gICAgcmV0dXJuIGhlaWdodDtcbn1cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIGlubmVyV2lkdGgoZWwsIHN0YXR1cykge1xuLy8gICAgIGlmKCFzdGF0dXMpIHJldHVybiBlbC5jbGllbnRXaWR0aDtcblxuLy8gICAgIGxldCB3aWR0aCA9IGVsLmNsaWVudFdpZHRoO1xuLy8gICAgIGxldCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWwpO1xuXG4vLyAgICAgd2lkdGggKz0gcGFyc2VGbG9hdChzdHlsZS5wYWRkaW5nTGVmdCkgKyBwYXJzZUZsb2F0KHN0eWxlLnBhZGRpbmdSaWdodCk7XG4vLyAgICAgcmV0dXJuIHdpZHRoO1xuLy8gfVxuXG4vLyBleHBvcnQgZnVuY3Rpb24gaW5uZXJIZWlnaHQoZWwsIHN0YXR1cykge1xuLy8gICAgIGlmKCFzdGF0dXMpIHJldHVybiBlbC5jbGllbnRIZWlnaHQ7XG5cbi8vICAgICBsZXQgd2lkdGggPSBlbC5jbGllbnRIZWlnaHQ7XG4vLyAgICAgbGV0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XG5cbi8vICAgICB3aWR0aCArPSBwYXJzZUZsb2F0KHN0eWxlLnBhZGRpbmdUb3ApICsgcGFyc2VGbG9hdChzdHlsZS5wYWRkaW5nQm90dG9tKTtcbi8vICAgICByZXR1cm4gd2lkdGg7XG4vLyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBpbm5lcldpZHRoKGVsLCBzdGF0dXMpIHtcbiAgICBsZXQgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsKTtcbiAgICBsZXQgd2lkdGggPSBwYXJzZUZsb2F0KHN0eWxlLndpZHRoKTtcblxuICAgIGlmKGlzQ29tcHV0ZWRQYWRkaW5nRWwoZWwpIHx8ICFzdGF0dXMpIHJldHVybiB3aWR0aDtcblxuICAgIHdpZHRoICs9IHBhcnNlRmxvYXQoc3R5bGUucGFkZGluZ0xlZnQpICsgcGFyc2VGbG9hdChzdHlsZS5wYWRkaW5nUmlnaHQpO1xuICAgIHJldHVybiB3aWR0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlubmVySGVpZ2h0KGVsLCBzdGF0dXMpIHtcbiAgICBsZXQgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsKTtcbiAgICBsZXQgaGVpZ2h0ID0gcGFyc2VGbG9hdChzdHlsZS5oZWlnaHQpO1xuXG4gICAgaWYoaXNDb21wdXRlZFBhZGRpbmdFbChlbCkgfHwgIXN0YXR1cykgcmV0dXJuIGhlaWdodDtcblxuICAgIGhlaWdodCArPSBwYXJzZUZsb2F0KHN0eWxlLnBhZGRpbmdUb3ApICsgcGFyc2VGbG9hdChzdHlsZS5wYWRkaW5nQm90dG9tKTtcbiAgICByZXR1cm4gaGVpZ2h0O1xufVxuXG4vLyBnZXRDb21wdXRlZFN0eWxlLCB3aWR0aCDlkowgaGVpZ2h0IOW3sue7j+WMheWQq1BhZGRpbmcg55qE5YWD57SgXG5leHBvcnQgZnVuY3Rpb24gaXNDb21wdXRlZFBhZGRpbmdFbChlbCkge1xuICAgIGxldCBlbEFyciA9IFsnYnV0dG9uJ107XG4gICAgcmV0dXJuIGVsQXJyLmluY2x1ZGVzKGVsLmxvY2FsTmFtZSk7XG59XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBwb3NpdGlvbihlbCkge1xuLy8gICAgIGNvbnNvbGUubG9nKGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLCB7dG9wOiBlbC5vZmZzZXRUb3AsIGxlZnQ6IGVsLm9mZnNldExlZnR9KTtcbi8vICAgICByZXR1cm4ge3RvcDogZWwub2Zmc2V0VG9wLCBsZWZ0OiBlbC5vZmZzZXRMZWZ0fTtcbi8vIH1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvc2l0aW9uKGVsKSB7XG4gICAgbGV0IHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIC8vIGNvbnNvbGUudHJhY2UoKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcIkMucG9zaXRpb246IFwiLCBlbCwgcmVjdCwge3RvcDogcmVjdC50b3Arc2Nyb2xsWSwgbGVmdDogcmVjdC5sZWZ0K3Njcm9sbFh9KTtcblxuICAgIGlmKGNzcyhlbCwgJ3Bvc2l0aW9uJykgPT09ICdmaXhlZCcpIHtcbiAgICAgICAgcmV0dXJuIHt0b3A6IHJlY3QudG9wLCBsZWZ0OiByZWN0LmxlZnR9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCB0O1xuICAgICAgICBsZXQgc2Nyb2xsWCA9ICgoKHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHx8ICh0ID0gZG9jdW1lbnQuYm9keS5wYXJlbnROb2RlKSkgJiYgdHlwZW9mIHQuc2Nyb2xsTGVmdCA9PSAnbnVtYmVyJyA/IHQgOiBkb2N1bWVudC5ib2R5KS5zY3JvbGxMZWZ0O1xuICAgICAgICBsZXQgc2Nyb2xsWSA9ICgoKHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHx8ICh0ID0gZG9jdW1lbnQuYm9keS5wYXJlbnROb2RlKSkgJiYgdHlwZW9mIHQuc2Nyb2xsVG9wID09ICdudW1iZXInID8gdCA6IGRvY3VtZW50LmJvZHkpLnNjcm9sbFRvcDtcbiAgICAgICAgcmV0dXJuIHt0b3A6IHJlY3QudG9wK3Njcm9sbFksIGxlZnQ6IHJlY3QubGVmdCtzY3JvbGxYfTtcbiAgICB9XG4gICAgXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWxhdGl2ZVBvc2l0aW9uKGVsKSB7XG4gICAgcmV0dXJuIHt0b3A6IGVsLm9mZnNldFRvcCwgbGVmdDogZWwub2Zmc2V0TGVmdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjc3MoZWwsIHN0eWxlTmFtZSwgdmFsdWUpIHtcbiAgICBpZih2YWx1ZSAhPT0gdW5kZWZpbmVkKSByZXR1cm4gZWwuc3R5bGVbc3R5bGVOYW1lXSA9IHZhbHVlO1xuICAgIGVsc2UgcmV0dXJuIGdldENvbXB1dGVkU3R5bGUoZWwpW3N0eWxlTmFtZV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY3JvbGxQb3NpdGlvbigpIHtcbiAgICBsZXQgdDtcbiAgICBsZXQgc2Nyb2xsWCA9ICgoKHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHx8ICh0ID0gZG9jdW1lbnQuYm9keS5wYXJlbnROb2RlKSkgJiYgdHlwZW9mIHQuc2Nyb2xsTGVmdCA9PSAnbnVtYmVyJyA/IHQgOiBkb2N1bWVudC5ib2R5KS5zY3JvbGxMZWZ0O1xuICAgIGxldCBzY3JvbGxZID0gKCgodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkgfHwgKHQgPSBkb2N1bWVudC5ib2R5LnBhcmVudE5vZGUpKSAmJiB0eXBlb2YgdC5zY3JvbGxUb3AgPT0gJ251bWJlcicgPyB0IDogZG9jdW1lbnQuYm9keSkuc2Nyb2xsVG9wO1xuICAgIHJldHVybiB7eDogc2Nyb2xsWCwgeTogc2Nyb2xsWX07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY3JvbGxXaWR0aCgpIHtcbiAgICB2YXIgbm9TY3JvbGwsIHNjcm9sbCwgb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJESVZcIik7XG4gICAgb0Rpdi5zdHlsZS5jc3NUZXh0ID0gXCJwb3NpdGlvbjphYnNvbHV0ZTsgdG9wOi0xMDAwcHg7IHdpZHRoOjEwMHB4OyBoZWlnaHQ6MTAwcHg7IG92ZXJmbG93OmhpZGRlbjtcIjtcbiAgICBub1Njcm9sbCA9IGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob0RpdikuY2xpZW50V2lkdGg7XG4gICAgb0Rpdi5zdHlsZS5vdmVyZmxvd1kgPSBcInNjcm9sbFwiO1xuICAgIHNjcm9sbCA9IG9EaXYuY2xpZW50V2lkdGg7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChvRGl2KTtcbiAgICByZXR1cm4gbm9TY3JvbGwtc2Nyb2xsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzU2Nyb2xsYmFyWSgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQgPiAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5zZXJ0QWZ0ZXIobmV3RWxlbWVudCwgdGFyZ2VudEVsZW1lbnQpIHtcbiAgICB2YXIgcGFyZW50ID0gdGFyZ2VudEVsZW1lbnQucGFyZW50Tm9kZTtcblxuICAgIGlmKHBhcmVudC5sYXN0Q2hpbGQgPT0gdGFyZ2VudEVsZW1lbnQpIHtcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKG5ld0VsZW1lbnQpO1xuICAgIH1lbHNlIHtcbiAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShuZXdFbGVtZW50LCB0YXJnZW50RWxlbWVudC5uZXh0U2libGluZylcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgKiBhcyBDIGZyb20gXCIuL2NvbW1vbi5qc1wiO1xuXG4vKipcbiAqIHRpcHMg5o+S5Lu2XG4gKi9cbiAgICBcbi8qKlxuICog5a6e5L6L5YyW5pa55byPXG4gKiAxLiDkuI3kvKDku7vkvZXlj4LmlbDvvIzliJnnm7TmjqXov5Tlm57lrp7kvotcbiAqIDIuIG9wdGlvbnMg5Y+q5LygdGlwc+a2iOaBr+Wtl+espuS4suaIlua2iOaBr+aVsOe7hO+8jOWImeaMiem7mOiupOmFjee9ruW8ueWHuua2iOaBr+OAguWFtuS7lumFjee9ruWcqCBleHRlbmRPcHRpb25zLCDlj6/pgInnmoRcbiAqIDMuIG9wdGlvbnMg5Lyg5YWl5a6M5pW06YWN572u5a+56LGh77yM5YiZ5oyJ6YWN572u5by55Ye65raI5oGv77yM5LiN6ZyA6KaBIGV4dGVuZE9wdGlvbnNcbiAqIEBBdXRob3IgICBEZXZpblxuICogQHBhcmFtICAgIHtbdHlwZV19ICAgICAgICAgICAgICAgICBvcHRpb25zICAgICAgIOaUr+aMgea2iOaBr+Wtl+espuS4su+8jOa2iOaBr+aVsOe7hOS7peWPiuWujOaVtOmFjee9ruWvueixoVxuICogQHBhcmFtICAgIHtPYmplY3R9ICAgICAgICAgICAgICAgICBleHRlbmRPcHRpb25zIOS7heWcqOa2iOaBr+Wtl+espuS4su+8jOa2iOaBr+aVsOe7hCDnmoTmg4XlhrXkuIvlj6/pgInnmoTvvIxcbiAqIEByZXR1cm4gICB7W3R5cGVdfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gKi9cbmZ1bmN0aW9uIHRpcHMob3B0aW9ucywgZXh0ZW5kT3B0aW9ucyA9IHt9KSB7XG4gICAgaWYoIW9wdGlvbnMpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgdGhpcy5DID0gQztcblxuICAgIC8vIOWNleeLrOS8oOWFpea2iOaBr1xuICAgIGlmKEMuaXNTdHJpbmcob3B0aW9ucykgfHwgQy5pc0FycmF5KG9wdGlvbnMpKSB7XG4gICAgICAgIGxldCBuZXdPcHRpb25zID0ge1xuICAgICAgICAgICAgbWVzc2FnZTogb3B0aW9uc1xuICAgICAgICB9O1xuXG4gICAgICAgIG9wdGlvbnMgPSBuZXdPcHRpb25zO1xuXG4gICAgICAgIGlmKEMuaXNPYmooZXh0ZW5kT3B0aW9ucykgJiYgIUMuaXNFbXB0eU9iaihleHRlbmRPcHRpb25zKSkge1xuICAgICAgICAgICAgb3B0aW9ucyA9IEMuZXh0ZW5kKHt9LCBleHRlbmRPcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuaW5pdChvcHRpb25zKTtcbn1cblxudGlwcy5DID0gQztcblxudGlwcy5kZWZhdWx0T3B0aW9ucyA9IHtcbiAgICBtZXNzYWdlOiAnJywgICAgICAgICAgICAgICAgLy/kvKDlhaXmlbDnu4Tlj6/mjaLooYwsIOaUr+aMgURPTeWFg+e0oO+8jGpRdWVyeeWFg+e0oFxuICAgIGh0bWw6IHtcbiAgICAgICAgcGFyYW06IGZhbHNlLCAgICAgICAgICAgICAgICAgICAvL2ZhbHNlIC0g5paH5pys57G75Z6L5L+h5oGv77yMdHJ1ZSAtIGRvbeWFg+e0oOexu+Wei+S/oeaBr1xuICAgICAgICBpc0NvbnRhaW5lclRyYW5zcGFyZW50OiBmYWxzZSwgIC8vZmFsc2UgLSBUaXBzIOWuueWZqOS4jemAj+aYju+8jHRydWUgLSBUaXBzIOWuueWZqOmAj+aYjlxuICAgIH0sXG4gICAgYmFzZUVsZW1lbnQ6IFwiXCIsICAgICAgICAgICAgLy/ln7rlh4bmlrnkvY3lhYPntKBcbiAgICBwYXJlbnRFbGVtZW50OiBcIlwiLCAgICAgICAgICAvL1RpcHMgY29udGFpbmVyIOebtOaOpeeItuWFg+e0oO+8jOazqOaEj++8jOWfuuWHhuWFg+e0oOW7uuiuruS5n+aYr+eItuWFg+e0oOeahOWtkOWFg+e0oO+8jOS4lOeItuWFg+e0oOWumuS9jeaYr+eJueauiueahOWumuS9jeexu+Wei1xuICAgIGRpcmVjdGlvbjogJ2lubmVyJywgICAgICAgICAvL+iuoeeul1RpcHPlrprkvY3ml7bvvIxpbm5lciAtIOiuoeeul1RpcHMg5a696auY77yM5bC96YeP5L2/VGlwcyDkvY3kuo7ln7rlh4blhYPntKDlhoXpg6jvvIxub3JtYWwgLSDkuI3orqHnrpdUaXBz5a696auY77yM5oyJ54WncG9zaXRpb27mlbDmja7mnaXvvIxvdXRlciAtIOiuoeeul1RpcHMg5a696auY77yM5bC96YeP5L2/VGlwcyDkvY3kuo7ln7rlh4blhYPntKDlpJbpg6gsIG91dHNpZGUgLSDorqHnrpdUaXBzIOWuvemrmO+8jOWwvemHj+S9v1RpcHMg5L2N5LqO5Z+65YeG5YWD57Sg5aSW6YOo77ybIOm7mOiupCdpbm5lcifjgIJcbiAgICBwb3NpdGlvbjogXCJtaWRkbGVcIiwgICAgICAgICAvL1RpcHMg5L2N572u77yM5bem5LiK6KeS77yM5LiK5bGF5Lit77yM5Y+z5LiK6KeS77yM5bem5bGF5Lit77yM5YWo5bGF5Lit77yM5Y+z5bGF5Lit77yM5bem5LiL6KeS77yM5LiL5bGF5Lit77yM5Y+z5LiL6KeS77yM6Ieq5a6a5LmJ55u45a+55L2N572u77yM5rWu5YqoXG4gICAgb2Zmc2V0OiB7ICAgICAgICAgICAgICAgICAgIC8v5aaC5p6ccG9zaXRpb24g5piv5a+56LGh5aaCe3RvcDogMH3vvIzliJnkuIDoiKzkuI3pnIDopoHov5nkuKrvvIzlpoLmnpzmmK/lrZfnrKbkuLLvvIzliJnlj6/ku6XphYzmg4Xmt7vliqBvZmZzZXQsIOiwg+aVtOWfuuWHhuWFg+e0oOS4jlRpcHMg55qE55u45a+55a6a5L2NLCDku4XmlK/mjIF0b3DvvIxsZWZ0XG4gICAgICAgIHRvcDogbnVsbCxcbiAgICAgICAgbGVmdDogbnVsbFxuICAgIH0sXG4gICAgZ3JvdXA6IHsgICAgICAgICAgICAgICAgICAgIC8v5YiG57uE77yM5aSa5LiqVGlwcyDpm4blkIjvvIzotoXlh7rliIbnu4TmnIDlpKfpmZDliLbkuKrmlbDliJnliKDpmaTmnIDlvIDlp4vnmoRUaXBzXG4gICAgICAgIG5hbWU6IG51bGwsICAgICAgICAgICAgICAgICAvL+WIhue7hOWQjeensFxuICAgICAgICBtYXhMZW5ndGg6IDk5OTksICAgICAgICAgICAgLy/kuIDkuKrliIbnu4TmnIDlpKdUaXBz5Liq5pWwXG4gICAgfSxcbiAgICB0eXBlOiBcIm5vcm1hbFwiLCAgICAgICAgICAgICAvL1RpcHMg5qC35byPLCDmlK/mjIHoh6rlrprkuYnmoLflvI/vvIjkvKDlhaVjbGFzc+WQjeensO+8iVxuICAgIGxpbWl0OiB0cnVlLCAgICAgICAgICAgICAgICAvL+mZkOWItlRpcHMg55qE5pyA5aSn5a695bqmIDQwMHB4XG4gICAgc2hhZG93OiBmYWxzZSwgICAgICAgICAgICAgIC8vZmFsc2UgLSDmsqHmnInpmLTlvbHvvIwgdHJ1ZSAtIOaciemYtOW9sVxuICAgIGJhY2tncm91bmQ6IGZhbHNlLCAgICAgICAgICAvL2ZhbHNlIC0g5LiN5pi+56S66YGu572p5bGC6KaG55uW5Z+65YeG5YWD57Sg77yMIHRydWUgLSDmmL7npLrpga7nvanlsYLopobnm5bln7rlh4blhYPntKBcbiAgICBpY29uOiBmYWxzZSwgICAgICAgICAgICAgICAgLy/mmK/lkKbmmL7npLppY29uLCB0cnVlIC0g5oyJ54WndHlwZeWPguaVsOiHquWKqOiuvue9rmljb27nsbvlnovvvIzmlK/mjIHlrZfnrKbkuLLorr7nva5pY29u57G75Z6L77yM5Li76KaB5piv5b2i54q277yM5aaCIG5vcm1hbO+8jGNsb2Nr562JXG4gICAgaWNvbk9wdGlvbnM6IHtcbiAgICAgICAgdHlwZTogJ2luZm8nLCAgICAgICAgICAgLy/lvZNpY29uIOS4uuWtl+espuS4suaXtu+8jGljb27kuLvopoHlrprliLblvaLnirYo5Lmf5ZCr6aKc6ImyKe+8jOatpOaXtnR5cGXlj6/ku6Xpop3lpJborr7nva5pY29uIOeahOiJsuiwg1xuICAgICAgICBwb3NpdGlvbjogJ2xlZnQnLCAgICAgICAvL2ljb24g55qE5L2N572u77yM5pSv5oyBdG9wLCBsZWZ0LCBib3R0b20sIHJpZ2h0XG4gICAgfSxcbiAgICBzeW1ib2w6IGZhbHNlLCAgICAgICAgICAgICAgLy/mmK/lkKbmmL7npLpiaW5kZXIsIHRydWUgLSDpu5jorqR0cmlhbmdsZe+8jOaUr+aMgeWtl+espuS4suiuvue9rnN5bWJvbOexu+Wei++8jOWmgiB0cmlhbmdsZeetie+8jOebruWJjeS7heaUr+aMgXRyaWFuZ2xlXG4gICAgc3ltYm9sT3B0aW9uczoge1xuICAgICAgICB0eXBlOiBudWxsLCAgICAgICAgICAgICAvL+WmguaenOS4jeiuvue9ru+8jHN5bWJvbOWImeaMiW9wdGlvbi50eXBlIOiJsuiwg++8jOWQpuWImeaMieivpeWPguaVsOeahOiJsuiwg1xuICAgICAgICBwb3NpdGlvbjogbnVsbCwgICAgICAgICAvL+WmguaenOS4jeiuvue9ru+8jHN5bWJvbOWImeagueaNrm9wdGlvbi5wb3NpdGlvbiDorr7nva7lrprkvY0o5LiN5LiA5a6a5LiA5qC3Ke+8jOWQpuWImeaMieivpeWPguaVsOWumuS9jVxuICAgICAgICAvLyBvZmZzZXQ6IHsgICAgICAgICAgICAgICAvL+WmguaenOWQr+eUqHN5bWJvbO+8jHN5bWJvbOS4jeiuoeeul+WuvemrmO+8jOWImeWPr+S7pemFjOaDhea3u+WKoG9mZnNldCwg6LCD5pW054i25YWD57Sg5LiOVGlwcyDnmoTnm7jlr7nlrprkvY0sIOS7heaUr+aMgXRvcO+8jGxlZnRcbiAgICAgICAgLy8gICAgIHRvcDogbnVsbCxcbiAgICAgICAgLy8gICAgIGxlZnQ6IG51bGxcbiAgICAgICAgLy8gfVxuICAgIH0sXG4gICAgZGVzdHJveTogXCJhdXRvXCIsICAgICAgICAgICAgLy9hdXRvIC0g6Ieq5Yqo6ZSA5q+BVGlwc++8jG1hbnVhbCAtIOS4jeiHquWKqOmUgOavgVRpcHPvvIzpnIDmiYvliqjplIDmr4EsIG5ldmVyIC0g5LuO5LiN6ZSA5q+BVGlwc1xuICAgIGRlbGF5OiAyMDAwLCAgICAgICAgICAgICAgICAvL+iHquWKqOmUgOavgVRpcHMg5bu25pe277yM5Y2V5L2N77yabXNcbiAgICBhbmltYXRpb246IHsgICAgICAgICAgICAgICAgLy/liqjnlLtcbiAgICAgICAgaW46ICdkZWZhdWx0JywgICAgICAgICAgICAgIC8vVGlwcyDmmL7npLrliqjnlLtcbiAgICAgICAgb3V0OiAnZGVmYXVsdCcsICAgICAgICAgICAgIC8vVGlwcyDpmpDol4/liqjnlLtcbiAgICAgICAgZnJhZ21lbnRzOiB7XG4gICAgICAgICAgICB0eXBlOiAxLCAgICAgICAgICAgICAgICAgICAgLy8g5Lik56eN5Yib5bu6ZnJhZ21lbnQg55qE566X5rOV77yMMOWSjDHvvIwxIOS9k+mqjOabtOWlvVxuICAgICAgICAgICAgYmFzZVBpeDogMTAsICAgICAgICAgICAgICAgIC8vIOWvueW6lHR5cGUgPSAwLCDmnIDlsI/nmoTlg4/ntKAsIHR5cGUgMeWImeS4jemcgOimgeivpeWPguaVsFxuICAgICAgICAgICAgeENvdW50OiAxMCwgICAgICAgICAgICAgICAgIC8vIOWvueW6lHR5cGUgPSAxLCDmsLTlubNmcmFnbWVudOeahOS4quaVsFxuICAgICAgICAgICAgeUNvdW50OiAxMCwgICAgICAgICAgICAgICAgIC8vIOWvueW6lHR5cGUgPSAxLCDlnoLnm7RmcmFnbWVudOeahOS4quaVsFxuICAgICAgICB9LFxuICAgICAgICBkZWxheTogMTAwMCwgICAgICAgICAgICAgICAgLy9UaXBzIOWKqOeUu+aJp+ihjOaXtumXtO+8jOW7tuaXtuaXtumXtOWIoOmZpFRpcHNcbiAgICAgICAgY3VzdG9tQW10RnVudGlvbjogbnVsbCwgICAgIC8v6Ieq5a6a5LmJVGlwcyDliqjnlLvlh73mlbBcbiAgICB9LFxuICAgIGZsb2F0OiB7ICAgICAgICAgICAgICAgICAgICAvL+a1ruWKqOWPguaVsO+8jOW9k3Bvc2l0aW9uIOetieS6jiAnZmxvYXQnIOaIliAndHJhbnNsYXRlJyDml7bvvIzlj6/pgInvvJvlhbbkvZnmg4XlhrXkuI3pnIDopoEgXG4gICAgICAgIHR5cGU6ICdkZWZhdWx0JywgICAgICAgICAgICAvL+WPr+mAieaLqem7mOiupOa1ruWKqOaWueazle+8jOa1ruWKqOaWueazleaUr+aMgeiHquWumuS5ie+8jOingSBjdXN0b21GbG9hdFR5cGVcbiAgICAgICAgY3VzdG9tRmxvYXRPcHRpb25zOiBudWxsLCAgIC8v6Ieq5a6a5LmJ5rWu5Yqo6YCJ6aG5XG4gICAgICAgIGN1c3RvbUZsb2F0U3RhdHVzOiBudWxsLCAgICAvL+iHquWumuS5iea1ruWKqOWIneWni+eKtuaAge+8jHRvcO+8jGxlZnTnrYlcbiAgICAgICAgY3VzdG9tRmxvYXRUeXBlOiBudWxsLCAgICAgIC8v6Ieq5a6a5LmJ5rWu5Yqo57G75Z6L55qE5pa55rOVLCDlj4LogIMgZmxvYXRUeXBlRGVmYXVsdCDmlrnms5VcbiAgICB9LFxuICAgIGV2ZW50czoge1xuICAgICAgICBiZWZvcmVDcmVhdGVkOiBDLm5vb3AsICAgICAgLy9UaXBzIOWIm+W7uua2iOaBr+S5i+WJjSDop6blj5FcbiAgICAgICAgY3JlYXRlZDogQy5ub29wLCAgICAgICAgICAgIC8vVGlwcyDliJvlu7rmtojmga/kuYvlkI4g6Kem5Y+RXG4gICAgICAgIGJlZm9yZVNob3duOiBDLm5vb3AsICAgICAgICAvL1RpcHMg5Yib5bu65raI5oGv5LmL5ZCO77yM5bGV56S65LmL5YmNIOinpuWPkVxuICAgICAgICBzaG93bjogQy5ub29wLCAgICAgICAgICAgICAgLy9UaXBzIOWxleekuuS5i+WQjiDop6blj5FcbiAgICAgICAgYmVmb3JlRGVzdHJveWVkOiBDLm5vb3AsICAgIC8vVGlwcyDplIDmr4HkuYvliY0g6Kem5Y+RXG4gICAgICAgIGRlc3Ryb3llZDogQy5ub29wLCAgICAgICAgICAvL1RpcHMg6ZSA5q+B5LmL5ZCOIOinpuWPkVxuICAgICAgICBiZWZvcmVGbG9hdGVkOiBDLm5vb3AsICAgICAgLy9UaXBzIOavj+asoea1ruWKqOS5i+WJjSDop6blj5FcbiAgICAgICAgZmxvYXRlZDogQy5ub29wLCAgICAgICAgICAgIC8vVGlwcyDmr4/mrKHmta7liqjkuYvlkI4g6Kem5Y+RXG4gICAgfSxcbiAgICBkZWJ1ZzogdHJ1ZSAgICAgICAgICAgICAgICAgICAgIC8vZGVidWcg6buY6K6k5omT5byA77yM5omT5byA5Y+v5Lul6LCD6K+VbG9n44CCIGVycm9yLCB3YXJuIOexu+Wei+eahGxvZyDkuI3lj5fmraTlvbHlk41cbn07XG5cbnRpcHMuX2RlZmF1bHRPcHRpb25zID0gbnVsbDtcblxuLy8g6K6+572u6buY6K6k5Y+C5pWw77yM5YWo5bGA55Sf5pWIXG50aXBzLnNldERlZk9wdGlvbnMgPSBmdW5jdGlvbihkZWZPcHRpb25zKSB7XG4gICAgaWYoIXRpcHMuX2RlZmF1bHRPcHRpb25zKSB0aXBzLl9kZWZhdWx0T3B0aW9ucyA9IHRpcHMuZGVmYXVsdE9wdGlvbnM7XG5cbiAgICB0aXBzLmRlZmF1bHRPcHRpb25zID0gQy5leHRlbmQoe30sIHRpcHMuZGVmYXVsdE9wdGlvbnMsIGRlZk9wdGlvbnMpO1xufTtcblxuLy8g6YeN572u6buY6K6k5Y+C5pWwXG50aXBzLnJlc2V0RGVmT3B0aW9ucyA9IGZ1bmN0aW9uKCkge1xuICAgIGlmKHRpcHMuX2RlZmF1bHRPcHRpb25zKSB0aXBzLmRlZmF1bHRPcHRpb25zID0gQy5leHRlbmQoe30sIHRpcHMuX2RlZmF1bHRPcHRpb25zKTtcbn07XG5cbnRpcHMuZmxvYXRPcHRpb25zID0ge1xuICAgIHRvcFN0YXJ0OiAwLCAgICAgICAgICAgICAgICAvL+a1ruWKqOi1t+Wni+S9jee9riBUb3BcbiAgICBsZWZ0U3RhcnQ6IDAsICAgICAgICAgICAgICAgLy/mta7liqjotbflp4vkvY3nva4gTGVmdFxuICAgIHN0YXR1czogdHJ1ZSwgICAgICAgICAgICAgICAvL+a1ruWKqOeKtuaAge+8jOS4gOiIrOeUqOS6jui9rOaKmOeCueaUueWPmOaWueWQkei2i+WKv1xuICAgIG9mZnNldFR5cGU6ICcnLCAgICAgICAgICAgICAvL+avj+asoeaUueWPmOeKtuaAgemHj+eahOexu+Wei++8jHB4IOaIliDnmb7liIbmr5TvvIzpu5jorqRweFxuICAgIHhNaW5UaHJlc2hvbGQ6IDAsICAgICAgICAgICAvL3jovbTnm7jlr7nkuo7ln7rlh4blhYPntKDnmoTmnIDlsI/lgY/lt67lgLxcbiAgICB4TWF4VGhyZXNob2xkOiAnJywgICAgICAgICAgLy946L2055u45a+55LqO5Z+65YeG5YWD57Sg55qE5pyA5aSn5YGP5beu5YC8XG4gICAgeE9mZnNldExlbjogMSwgICAgICAgICAgICAgIC8veOi9tOS4gOasoeeahOWBj+W3rumHj1xuICAgIHlNaW5UaHJlc2hvbGQ6IDAsICAgICAgICAgICAvL3novbTnm7jlr7nkuo7ln7rlh4blhYPntKDnmoTmnIDlsI/lgY/lt67lgLxcbiAgICB5TWF4VGhyZXNob2xkOiAnJywgICAgICAgICAgLy956L2055u45a+55LqO5Z+65YeG5YWD57Sg55qE5pyA5aSn5YGP5beu5YC8XG4gICAgeU9mZnNldExlbjogMSwgICAgICAgICAgICAgIC8veei9tOS4gOasoeeahOWBj+W3rumHj1xuICAgIGRlbGF5OiAxLCAgICAgICAgICAgICAgICAgICAvL+a1ruWKqOS9jee9rueahOaXtumXtOmXtOmalFxufTtcblxuLyoqXG4gKiDmr4/kuKpUaXBzIOWunuS+i+mDveS8muafpeaJvmdyb3Vwc+aVsOe7hO+8jOWIpOaWreWunuS+i+eahOe7hOaYr+WQpuW3sue7j+WtmOWcqO+8jOWtmOWcqOWImeebtOaOpeW+gOWtmOWcqOeahOe7hOmHjOaPkuWFpVRpcHNcbiAqIEB0eXBlIHtBcnJheX1cbiAqL1xudGlwcy5ncm91cHMgPSBbXTtcblxuLyoqXG4gKiDosIPor5Xkv6Hmga/pnIDopoHorr7nva4gZGVidWcg6YWN572uIHRydWUsIOaUr+aMgeS7u+aEj+WkmuS4qua2iOaBr+WPguaVsFxuICovXG50aXBzLnByb3RvdHlwZS53cml0ZUxvZyA9IGZ1bmN0aW9uKGxldmVsLCAuLi5tZXNzYWdlKSB7XG4gICAgaWYoKGxldmVsICE9ICdlcnJvcicgfHwgbGV2ZWwgIT0gJ3dhcm4nKSAmJiAhdGhpcy5vcHRpb25zLmRlYnVnKSByZXR1cm4gZmFsc2U7XG5cbiAgICBjb25zb2xlW2xldmVsXSguLi5tZXNzYWdlKTtcbn07XG5cbi8qKlxuICog5Yid5aeL5YyW5bGV56S6VGlwc+OAglxuICogQHBhcmFtICAgIHtbdHlwZV19ICAgICAgICAgICAgICAgICBvcHRpb25zIFtkZXNjcmlwdGlvbl1cbiAqIEByZXR1cm4gICB7W3R5cGVdfSAgICAgICAgICAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gKi9cbnRpcHMucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgLy/nlJ/miJDlrp7kvovllK/kuIBpZO+8jOaWueS+v+WQjOS4que7hOmHjOivhuWIq+W9vOatpFxuICAgIHRoaXMuaWQgPSB0aGlzLnVuaXF1ZUlkKCk7XG5cbiAgICB0aGlzLm9wdGlvbnMgPSBDLmV4dGVuZCh7fSwgdGlwcy5kZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XG4gICAgXG4gICAgdGhpcy5iYWNrdXAgPSB7XG4gICAgICAgIF9iYXNlRWxtIDogbnVsbCwgICAgICAgICAgICAgICAgLy/lpIfku73ln7rlh4blhYPntKBcbiAgICAgICAgX3BhcmVudEVsbSA6IG51bGwsICAgICAgICAgICAgICAvL1RpcHMgY29udGFpbmVyIOebtOaOpeeItuWFg+e0oFxuICAgICAgICBfdGlwQ29udGFpbmVyRWxtIDogbnVsbCwgICAgICAgIC8v5aSH5Lu9VGlwcyDlrrnlmajlhYPntKBcbiAgICAgICAgX3RpcEdyb3VwRWxtIDogbnVsbCwgICAgICAgICAgICAvL+Wkh+S7vVRpcHMg5YiG57uE5YWD57SgXG4gICAgICAgIF90aXBFbG0gOiBudWxsLCAgICAgICAgICAgICAgICAgLy/lpIfku71UaXBzIOWFg+e0oFxuICAgICAgICBfc3ltYm9sQm94RWxtOiBudWxsLCAgICAgICAgICAgIC8v5aSH5Lu9c3ltYm9sIEJveCDlhYPntKDvvIzmmK9UaXBzIOWFg+e0oO+8iF90aXBFbG3vvInnmoTnm7TmjqXlrZDlhYPntKBcbiAgICAgICAgX3RpcEJveEVsbTogbnVsbCwgICAgICAgICAgICAgICAvL+Wkh+S7vVRpcHMgQm94IOWFg+e0oO+8jOaYr3N5bWJvbCBCb3gg5YWD57Sg77yIX3N5bWJvbEJveEVsbe+8ieeahOebtOaOpeWtkOWFg+e0oFxuICAgICAgICBfc3ltYm9sRWxtIDogbnVsbCwgICAgICAgICAgICAgIC8v5aSH5Lu9c3ltYm9sIOWFg+e0oFxuICAgICAgICBfYmFja2dyb3VuZEVsZW06IG51bGwsICAgICAgICAgIC8v5aSH5Lu96YGu572p5bGC5YWD57SgXG4gICAgICAgIF9ncm91cDogeyAgICAgICAgICAgICAgICAgICAgICAgLy/lpIfku73nu4TnirbmgIFcbiAgICAgICAgICAgIGlzRXhpc3RlZDogZmFsc2UsXG4gICAgICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAgX2Zsb2F0U3RhdHVzOiB7fSwgICAgICAgICAgICAgICAvL+Wkh+S7veW9k+WJjeWumuS9jVxuICAgIH07XG5cbiAgICB0aGlzLm1vbml0b3IgPSB7XG4gICAgICAgIGZsb2F0UG9zaXRpb24gOiB7fSwgICAgICAgICAvL+a1ruWKqOWumuS9je+8jOaUr+aMgeiHquWumuS5iea1ruWKqOaWueW8j1xuICAgICAgICBmbG9hdFRyYW5zbGF0ZSA6IHt9LCAgICAgICAgLy/mta7liqjlrprkvY3vvIzmlK/mjIHoh6rlrprkuYnmta7liqjmlrnlvI9cbiAgICB9O1xuXG4gICAgdGhpcy50R3JvdXBzID0gdGlwcy5ncm91cHM7ICAgICAvL+avj+S4qlRpcHMg5a6e5L6L6YO95Lya5p+l5om+Z3JvdXBz5pWw57uE77yM5Yik5pat5a6e5L6L55qE57uE5piv5ZCm5bey57uP5a2Y5Zyo77yM5a2Y5Zyo5YiZ55u05o6l5b6A5a2Y5Zyo55qE57uE6YeM5o+S5YWlVGlwcy5ncm91cHM7XG5cbiAgICB0aGlzLmV2ZW50ID0gbnVsbDsgICAgICAgICAgICAgIC8v6Kem5Y+RVGlwcyDph43mlrDlrprkvY3nmoTkuovku7ZcblxuICAgIHRoaXMuaW5pdFRpcHMoKTtcblxuICAgIHRoaXMuY2hlY2tHcm91cCgpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIOiuvue9rua2iOaBr1xuICog55So5oi35LiN6K6+572u77yM5YiZ5qC55o2udHlwZSDoh6rliqjorr7nva5cbiAqIEByZXR1cm4gICB7W3R5cGVdfSAgICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICovXG50aXBzLnByb3RvdHlwZS5pbml0TXNnID0gZnVuY3Rpb24oKSB7XG4gICAgaWYodGhpcy5vcHRpb25zLm1lc3NhZ2UgPT0gXCJcIikge1xuICAgICAgICBzd2l0Y2godGhpcy5vcHRpb25zLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJzdWNjZXNzXCIgOiAgICB0aGlzLm9wdGlvbnMubWVzc2FnZSA9IFwi5L+d5a2Y5oiQ5YqfXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZXJyb3JcIiA6ICB0aGlzLm9wdGlvbnMubWVzc2FnZSA9IFwi5L+d5a2Y5aSx6LSlXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwid2FybmluZ1wiIDogICAgdGhpcy5vcHRpb25zLm1lc3NhZ2UgPSBcIuitpuWRilwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImluZm9cIiA6dGhpcy5vcHRpb25zLm1lc3NhZ2UgPSBcInRpcHMg5bCP5bel5YW3XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OiAgICB0aGlzLm9wdGlvbnMubWVzc2FnZSA9IFwidGlwcyDlsI/lt6XlhbdcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8qKlxuICog5Yik5pat5piv5ZCm5pivIEh0bWwg57G75Z6L55qE5raI5oGvXG4gKi9cbnRpcHMucHJvdG90eXBlLmlzSHRtbE1lc3NhZ2UgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblxuICAgIGlmKG9wdGlvbnMuaHRtbCA9PT0gdHJ1ZSBcbiAgICAgICAgfHwgKEMuaXNPYmoob3B0aW9ucy5odG1sKSAmJiBvcHRpb25zLmh0bWwucGFyYW0gPT09IHRydWUpXG4gICAgICAgIHx8IG9wdGlvbnMubWVzc2FnZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50XG4gICAgICAgIHx8IG9wdGlvbnMubWVzc2FnZSBpbnN0YW5jZW9mIGpRdWVyeSlcbiAgICB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbi8qKlxuICog6K6+572uVGlwcyBjc3Mg57G744CCXG4gKiDljIXmi6zmtojmga/vvIzlm77moIfvvIzpga7nvanlsYLvvIzpmLTlvbHvvIzmoIflv5fnrYlcbiAqL1xudGlwcy5wcm90b3R5cGUuc2V0Q2xhc3MgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgb3B0VHlwZSA9IHRoaXMub3B0aW9ucy50eXBlO1xuICAgIGxldCBvcHRMaW1pdCA9IHRoaXMub3B0aW9ucy5saW1pdDtcbiAgICBsZXQgb3B0U2hhZG93ID0gdGhpcy5vcHRpb25zLnNoYWRvdztcbiAgICBsZXQgb3B0SWNvbiA9IHRoaXMub3B0aW9ucy5pY29uO1xuICAgIGxldCBvcHRTeW1ib2wgPSB0aGlzLm9wdGlvbnMuc3ltYm9sO1xuICAgIGxldCBvcHRIdG1sID0gdGhpcy5vcHRpb25zLmh0bWw7XG5cbiAgICAvLyBvaG9UaXAtaGlkZSDliqjnlLvnlKjvvIzpppblhYjorr7nva7kuLrlhajpgI/mmI5cbiAgICBsZXQgdGlwQ2xhc3MgPSBcIm9ob1RpcCBvaG9UaXAtaGlkZVwiO1xuICAgIGxldCB0aXBCb3hDbGFzcyA9IFwib2hvVGlwLWJveFwiO1xuICAgIGxldCBiZ0NsYXNzID0gXCJvaG9UaXAtYmcgb2hvVGlwLWhpZGVcIjtcbiAgICBsZXQgbWVzc2FnZUNsYXNzID0gXCJcIjtcbiAgICBsZXQgaWNvbkNsYXNzID0gXCJcIjtcbiAgICBsZXQgc3ltYm9sQ2xhc3MgPSBcIlwiO1xuXG4gICAgLy8g6ZmQ5Yi2VGlwcyDlrr3luqbmiJbogIXpq5jluqZcbiAgICBpZihvcHRMaW1pdCkge1xuICAgICAgICB0aXBDbGFzcyA9IHRpcENsYXNzICsgXCIgb2hvVGlwLWxpbWl0XCI7XG4gICAgfVxuICAgIC8vIOaYr+WQpuaYvuekuumYtOW9sVxuICAgIGlmKCFvcHRTaGFkb3cpIHtcbiAgICAgICAgdGlwQm94Q2xhc3MgPSB0aXBCb3hDbGFzcyArICcgb2hvVGlwLWJveC1uby1zaGFkb3cnO1xuICAgIH1cblxuICAgIGlmKHRoaXMuaXNIdG1sTWVzc2FnZSgpKSB7XG4gICAgICAgIHRpcEJveENsYXNzID0gdGlwQm94Q2xhc3MgKyAnIG9ob1RpcC1ib3gtaHRtbCc7XG4gICAgICAgIGlmKEMuaXNPYmoob3B0SHRtbCkgJiYgb3B0SHRtbC5pc0NvbnRhaW5lclRyYW5zcGFyZW50KSB0aXBCb3hDbGFzcyA9IHRpcEJveENsYXNzICsgJyBvaG9UaXAtYm94LWh0bWwtdHJhbnNwYXJlbnQnO1xuICAgIH1cblxuICAgIHN3aXRjaChvcHRUeXBlKSB7XG4gICAgICAgIGNhc2UgXCJub3JtYWxcIiA6XG4gICAgICAgICAgICBtZXNzYWdlQ2xhc3MgPSBcIm9ob1RpcC1tZXNzYWdlXCI7XG4gICAgICAgICAgICBpY29uQ2xhc3MgPSBcIm9ob1RpcC1pY29uIGljb24tY2hlY2tcIjtcbiAgICAgICAgICAgIHN5bWJvbENsYXNzID0gXCJvaG9UaXAtc3ltYm9sXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInN1Y2Nlc3NcIiA6XG4gICAgICAgICAgICB0aXBCb3hDbGFzcyA9IHRpcEJveENsYXNzICsgXCIgb2hvVGlwLXN1Y2Nlc3NcIjtcbiAgICAgICAgICAgIG1lc3NhZ2VDbGFzcyA9IFwib2hvVGlwLW1lc3NhZ2Ugb2hvVGlwLW1lc3NhZ2Utc3VjY2Vzc1wiO1xuICAgICAgICAgICAgaWNvbkNsYXNzID0gXCJvaG9UaXAtaWNvbiBpY29uLWNoZWNrXCI7XG4gICAgICAgICAgICBzeW1ib2xDbGFzcyA9IFwib2hvVGlwLXN5bWJvbCBzeW1ib2wtc3VjY2Vzc1wiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJlcnJvclwiIDpcbiAgICAgICAgICAgIHRpcEJveENsYXNzID0gdGlwQm94Q2xhc3MgKyBcIiBvaG9UaXAtZXJyb3JcIjtcbiAgICAgICAgICAgIG1lc3NhZ2VDbGFzcyA9IFwib2hvVGlwLW1lc3NhZ2Ugb2hvVGlwLW1lc3NhZ2UtZXJyb3JcIjtcbiAgICAgICAgICAgIGljb25DbGFzcyA9IFwib2hvVGlwLWljb24gaWNvbi1jcm9zc1wiO1xuICAgICAgICAgICAgc3ltYm9sQ2xhc3MgPSBcIm9ob1RpcC1zeW1ib2wgc3ltYm9sLWVycm9yXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIndhcm5pbmdcIiA6XG4gICAgICAgICAgICB0aXBCb3hDbGFzcyA9IHRpcEJveENsYXNzICsgXCIgb2hvVGlwLXdhcm5pbmdcIjtcbiAgICAgICAgICAgIG1lc3NhZ2VDbGFzcyA9IFwib2hvVGlwLW1lc3NhZ2Ugb2hvVGlwLW1lc3NhZ2Utd2FybmluZ1wiO1xuICAgICAgICAgICAgaWNvbkNsYXNzID0gXCJvaG9UaXAtaWNvbiBpY29uLWV4Y2xhbWF0aW9uXCI7XG4gICAgICAgICAgICBzeW1ib2xDbGFzcyA9IFwib2hvVGlwLXN5bWJvbCBzeW1ib2wtd2FybmluZ1wiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJpbmZvXCIgOlxuICAgICAgICAgICAgdGlwQm94Q2xhc3MgPSB0aXBCb3hDbGFzcyArIFwiIG9ob1RpcC1pbmZvXCI7ICBcbiAgICAgICAgICAgIG1lc3NhZ2VDbGFzcyA9IFwib2hvVGlwLW1lc3NhZ2Ugb2hvVGlwLW1lc3NhZ2UtaW5mb1wiO1xuICAgICAgICAgICAgaWNvbkNsYXNzID0gXCJvaG9UaXAtaWNvbiBpY29uLWV4Y2xhbWF0aW9uLWNpcmNsZVwiO1xuICAgICAgICAgICAgc3ltYm9sQ2xhc3MgPSBcIm9ob1RpcC1zeW1ib2wgc3ltYm9sLWluZm9cIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0IDpcbiAgICAgICAgICAgIG1lc3NhZ2VDbGFzcyA9IG9wdFR5cGU7ICAgICAgICAvL+eUqOaIt+iHquWumuS5iVxuICAgICAgICAgICAgaWNvbkNsYXNzID0gXCJvaG9UaXAtaWNvbiBpY29uLWNoZWNrXCI7XG4gICAgICAgICAgICBzeW1ib2xDbGFzcyA9IFwib2hvVGlwLXN5bWJvbFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYob3B0SWNvbikge1xuICAgICAgICB0aXBCb3hDbGFzcyA9IHRpcEJveENsYXNzICsgXCIgb2hvVGlwLWFkZC1pY29uXCIgKyBcIiBpY29uLVwiICsgdGhpcy5vcHRpb25zLmljb25PcHRpb25zLnBvc2l0aW9uO1xuICAgICAgICAvLyDlpoLmnpxpY29uIOS4unRydWXvvIzoibLosIPln7rkuo5vcHRpb24udHlwZeOAgiDlpoLmnpzkuLrlrZfnrKbkuLLvvIzliJnmoLnmja7lrZfnrKbkuLLorr7nva5cbiAgICAgICAgaWYodHlwZW9mIG9wdEljb24gPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGljb25DbGFzcyA9IFwib2hvVGlwLWljb25cIjtcbiAgICAgICAgICAgIHN3aXRjaChvcHRJY29uKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcIm5vcm1hbFwiIDpcbiAgICAgICAgICAgICAgICAgICAgaWNvbkNsYXNzID0gaWNvbkNsYXNzICsgXCIgaWNvbi1jaGVja1wiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwic3VjY2Vzc1wiIDpcbiAgICAgICAgICAgICAgICAgICAgaWNvbkNsYXNzID0gaWNvbkNsYXNzICsgXCIgaWNvbi1jaGVjayBpY29uLXN1Y2Nlc3NcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImVycm9yXCIgOlxuICAgICAgICAgICAgICAgICAgICBpY29uQ2xhc3MgPSBpY29uQ2xhc3MgKyBcIiBpY29uLWNyb3NzIGljb24tZXJyb3JcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIndhcm5pbmdcIiA6XG4gICAgICAgICAgICAgICAgICAgIGljb25DbGFzcyA9IGljb25DbGFzcyArIFwiIGljb24tZXhjbGFtYXRpb24gaWNvbi13YXJuaW5nXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJpbmZvXCIgOlxuICAgICAgICAgICAgICAgICAgICBpY29uQ2xhc3MgPSBpY29uQ2xhc3MgKyBcIiBpY29uLWV4Y2xhbWF0aW9uLWNpcmNsZSBpY29uLWluZm9cIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImNsb2NrXCIgOlxuICAgICAgICAgICAgICAgICAgICBpY29uQ2xhc3MgPSBpY29uQ2xhc3MgKyBcIiBpY29uLWNsb2NrIGljb24tXCIgKyB0aGlzLm9wdGlvbnMuaWNvbk9wdGlvbnMudHlwZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWNvbkNsYXNzID0gaWNvbjsgICAvLyDnlKjmiLfoh6rlrprkuYlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZihvcHRTeW1ib2wpIHtcbiAgICAgICAgLy8g5aaC5p6cc3ltYm9sT3B0aW9ucy50eXBlIOS4uuepuu+8jOiJsuiwg+WfuuS6jm9wdGlvbi50eXBl44CCIOWmguaenOS4uuWtl+espuS4su+8jOWImeagueaNruWtl+espuS4suiuvue9ruiJsuiwg1xuICAgICAgICBpZih0aGlzLm9wdGlvbnMuc3ltYm9sT3B0aW9ucy50eXBlKSB7XG4gICAgICAgICAgICBzeW1ib2xDbGFzcyA9IFwib2hvVGlwLXN5bWJvbFwiO1xuICAgICAgICAgICAgc3dpdGNoKHRoaXMub3B0aW9ucy5zeW1ib2xPcHRpb25zLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwibm9ybWFsXCIgOlxuICAgICAgICAgICAgICAgIGNhc2UgXCJzdWNjZXNzXCIgOlxuICAgICAgICAgICAgICAgIGNhc2UgXCJlcnJvclwiIDpcbiAgICAgICAgICAgICAgICBjYXNlIFwid2FybmluZ1wiIDpcbiAgICAgICAgICAgICAgICBjYXNlIFwiaW5mb1wiIDpcbiAgICAgICAgICAgICAgICAgICAgc3ltYm9sQ2xhc3MgPSBcIm9ob1RpcC1zeW1ib2wgc3ltYm9sLVwiICsgdGhpcy5vcHRpb25zLnN5bWJvbE9wdGlvbnMudHlwZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgc3ltYm9sQ2xhc3MgPSBcIm9ob1RpcC1zeW1ib2wgXCIgKyB0aGlzLm9wdGlvbnMuc3ltYm9sT3B0aW9ucy50eXBlOyAgIC8vIOeUqOaIt+iHquWumuS5iVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIOmDqOWIhuexu+Wei+ayoeacieWQr+eUqO+8jOWvueW6lGNzc0NsYXNzIOS5n+ayoeeUqFxuICAgIGxldCBjc3NDbGFzcyA9IHtcbiAgICAgICAgdGlwOiB0aXBDbGFzcyxcbiAgICAgICAgdGlwQm94OiB0aXBCb3hDbGFzcyxcbiAgICAgICAgYmc6IGJnQ2xhc3MsXG4gICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VDbGFzcyxcbiAgICAgICAgaWNvbjogaWNvbkNsYXNzLFxuICAgICAgICBzeW1ib2w6IHN5bWJvbENsYXNzXG4gICAgfTtcblxuICAgIHRoaXMuY3NzQ2xhc3MgPSBjc3NDbGFzcztcblxuICAgIHJldHVybiBjc3NDbGFzcztcbn07XG5cbi8qKlxuICog6K6+572uIFRpcHMg5bGe5oCnXG4gKiDmr5TlpoLnu4TlkI1cbiAqL1xudGlwcy5wcm90b3R5cGUuc2V0VGlwc0F0dHJpYnV0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBvcHRHcm91cCA9IHRoaXMub3B0aW9ucy5ncm91cDtcbiAgICBsZXQgdGlwc0F0dHJpYnV0ZSA9IHt9O1xuICAgIGlmKG9wdEdyb3VwLm5hbWUpIHtcbiAgICAgICAgdGlwc0F0dHJpYnV0ZS50aXBOYW1lID0gb3B0R3JvdXAubmFtZTtcbiAgICB9ZWxzZSB7XG4gICAgICAgIHRpcHNBdHRyaWJ1dGUudGlwTmFtZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIH1cblxuICAgIHRoaXMudGlwc0F0dHJpYnV0ZSA9IHRpcHNBdHRyaWJ1dGU7XG5cbiAgICByZXR1cm4gdGlwc0F0dHJpYnV0ZTtcbn07XG5cbi8qKlxuICog6I635Y+W5Z+65YeG5YWD57SgXG4gKi9cbnRpcHMucHJvdG90eXBlLmdldEJhc2VFbGVtZW10ID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIGxldCAkYmFzZSA9IG51bGw7XG5cbiAgICBpZighb3B0aW9ucy5iYXNlRWxlbWVudCkge1xuICAgICAgICAkYmFzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgIH1lbHNlIGlmKG9wdGlvbnMuYmFzZUVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAkYmFzZSA9IG9wdGlvbnMuYmFzZUVsZW1lbnQ7XG4gICAgfWVsc2UgaWYod2luZG93LmpRdWVyeSAmJiBvcHRpb25zLmJhc2VFbGVtZW50IGluc3RhbmNlb2YgalF1ZXJ5KSB7XG4gICAgICAgICRiYXNlID0gb3B0aW9ucy5iYXNlRWxlbWVudFswXTtcbiAgICB9ZWxzZSB7XG4gICAgICAgICRiYXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLmJhc2VFbGVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gJGJhc2U7XG59O1xuXG4vKipcbiAqIOiOt+WPllRpcHMgY29udGFpbmVyIOebtOaOpeeItuWFg+e0oFxuICogXG4gKiDor7TmmI7vvJrnibnmrornmoTlrprkvY3vvIzmr5TlpoLvvIxwb3NpdGlvbjogcmVsYXRpdmUgLyBhYnNvbHV0ZSAvIGZpeGVkIOOAgiDlpoLmnpzov5nnp43lrprkvY3nsbvlnovnmoTniLblhYPntKDnmoTlrZDlhYPntKDnmoTlrprkvY3mmK8gYWJzb2x1dGXvvIzlrprkvY3ku6XniLblhYPntKDkuLrln7rlh4bjgIJcbiAqIFxuICog5qC55o2u6L+Z5Liq54m55oCn77yM5oiR5Lus5Y+v5Lul77yaXG4gKiAxLiDnlKjmiLflj6/ku6XmoLnmja7ov5nkuKrnibnmgKfoh6rlrprkuYnniLblhYPntKDvvIzms6jmhI/vvIzln7rlh4blhYPntKDlu7rorq7kuZ/mmK/niLblhYPntKDnmoTlrZDlhYPntKDvvIzkuJTniLblhYPntKDlrprkvY3mmK/nibnmrornmoTlrprkvY3nsbvlnovvvIzlkKbliJnmr6vml6DmhI/kuYlcbiAqIDIuIOWmguaenOWfuuWHhuWFg+e0oOeahOWumuS9jeaYr+eJueauiuWumuS9je+8jOaIkeS7rOaKiiBUaXBzIOaPkuWFpeWIsOi/meS4quWfuuWHhuWFg+e0oOWGhemDqFxuICogMy4g5aaC5p6c5Z+65YeG5YWD57Sg55qE55u05o6l54i25YWD57Sg55qE5a6a5L2N5piv54m55q6K5a6a5L2N77yM5oiR5Lus5oqKIFRpcHMg5o+S5YWl5Yiw6L+Z5Liq5Z+65YeG5YWD57Sg55qE55u05o6l54i25YWD57SgXG4gKiA0LiDku6XkuIrlnYfkuI3ljLnphY3vvIzpgqPkuYjniLblhYPntKDlsLHmmK8gQk9EWVxuICovXG50aXBzLnByb3RvdHlwZS5nZXRQYXJlbnRFbGVtZW10ID0gZnVuY3Rpb24ob3B0aW9ucywgJGJhc2UpIHtcbiAgICBsZXQgJHBhcmVudCA9IG51bGw7XG5cbiAgICAvLyDnlKjmiLfoh6rlrprkuYnniLblhYPntKBcbiAgICBpZighb3B0aW9ucy5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgICRwYXJlbnQgPSBudWxsO1xuICAgIH1lbHNlIGlmKG9wdGlvbnMucGFyZW50RWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICRwYXJlbnQgPSBvcHRpb25zLnBhcmVudEVsZW1lbnQ7XG4gICAgfWVsc2UgaWYod2luZG93LmpRdWVyeSAmJiBvcHRpb25zLnBhcmVudEVsZW1lbnQgaW5zdGFuY2VvZiBqUXVlcnkpIHtcbiAgICAgICAgJHBhcmVudCA9IG9wdGlvbnMucGFyZW50RWxlbWVudFswXTtcbiAgICB9ZWxzZSB7XG4gICAgICAgICRwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbnMucGFyZW50RWxlbWVudCk7XG4gICAgfVxuXG4gICAgLy8g5aaC5p6c5rKh5pyJ6Ieq5a6a5LmJ54i25YWD57Sg77yM6YKj5LmI5bCx6Ieq5Yqo5qC55o2u5Z+65YeG5YWD57Sg5p2l6I635Y+W54i25YWD57SgXG4gICAgaWYoISRwYXJlbnQpIHtcbiAgICAgICAgLy8g5aaC5p6c5Z+65YeG5YWD57SgUG9zdGlvbiDmmK/nibnmrorlrprkvY3vvIzliJlUaXBz5o+S5YWl5Yiw5Z+65YeG5YWD57Sg5YaFXG4gICAgICAgIGxldCBiYXNlU3R5bGVQb3NpdGlvbiA9IEMuZ2V0U3R5bGUoJGJhc2UsICdwb3NpdGlvbicpO1xuXG4gICAgICAgIGlmKHRoaXMuaXNTcGVjaWFsU3R5bGVQb3NpdGlvbihiYXNlU3R5bGVQb3NpdGlvbikpIHtcbiAgICAgICAgICAgICRwYXJlbnQgPSAkYmFzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyDlpoLmnpzln7rlh4blhYPntKDnmoTnm7TmjqXniLblhYPntKDnmoTlrprkvY3mmK/nibnmrorlrprkvY3vvIzmiJHku6zmioogVGlwcyDmj5LlhaXliLDov5nkuKrln7rlh4blhYPntKDnmoTnm7TmjqXniLblhYPntKBcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgYmFzZVBhcmVudFN0eWxlUG9zaXRpb24gPSBDLmdldFN0eWxlKCRiYXNlLnBhcmVudE5vZGUsICdwb3NpdGlvbicpO1xuXG4gICAgICAgICAgICBpZih0aGlzLmlzU3BlY2lhbFN0eWxlUG9zaXRpb24oYmFzZVBhcmVudFN0eWxlUG9zaXRpb24pKSB7XG4gICAgICAgICAgICAgICAgJHBhcmVudCA9ICRiYXNlLnBhcmVudE5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDku6XkuIrlnYfkuI3ljLnphY3vvIzpgqPkuYjniLblhYPntKDlsLHmmK8gQk9EWVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgJHBhcmVudCA9IGRvY3VtZW50LmJvZHk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gJHBhcmVudDtcbn07XG5cbi8qKlxuICog54m55q6K55qE5a6a5L2N77yM5q+U5aaC77yMcG9zaXRpb246IHJlbGF0aXZlIC8gYWJzb2x1dGUgLyBmaXhlZFxuICog5aaC5p6c6L+Z56eN5a6a5L2N57G75Z6L55qE54i25YWD57Sg55qE5a2Q5YWD57Sg55qE5a6a5L2N5pivIGFic29sdXRl77yM5a6a5L2N5Lul54i25YWD57Sg5Li65Z+65YeG44CCXG4gKi9cbnRpcHMucHJvdG90eXBlLmlzU3BlY2lhbFN0eWxlUG9zaXRpb24gPSBmdW5jdGlvbihzdHlsZVBvc2l0aW9uKSB7XG4gICAgcmV0dXJuIFtcInJlbGF0aXZlXCIsIFwiYWJzb2x1dGVcIiwgXCJmaXhlZFwiXS5pbmNsdWRlcyhzdHlsZVBvc2l0aW9uKTtcbn1cblxuLy8g6I635Y+W57uE5YWD57Sg77yM5ZCM5LiA5Liq57uE55qEVGlwcyDlsIbljIXlkKvlnKjnm7jlkIznmoTnu4TlhYPntKDph4zpnaJcbnRpcHMucHJvdG90eXBlLmdldFRpcHNHcm91cCA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICBsZXQgdGlwc0F0dHJpYnV0ZSA9IHRoaXMudGlwc0F0dHJpYnV0ZTtcbiAgICBsZXQgZ3JvdXBOYW1lID0gJ3RpcEdyb3VwLScgKyB0aXBzQXR0cmlidXRlLnRpcE5hbWU7XG5cbiAgICBsZXQgJHRpcEdyb3VwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdltncm91cC1uYW1lPSdcIitncm91cE5hbWUrXCInXVwiKTtcblxuICAgIGlmKCEkdGlwR3JvdXApIHtcbiAgICAgICAgJHRpcEdyb3VwID0gQy5jcmVhdGVOb2RlKFwiPGRpdiBncm91cC1uYW1lPSdcIitncm91cE5hbWUrXCInIGNsYXNzPSdvaG9UaXAtZ3JvdXAnPlwiKTtcbiAgICB9ZWxzZSB7XG4gICAgICAgIHRoaXMuYmFja3VwLl9ncm91cC5pc0V4aXN0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiAkdGlwR3JvdXA7XG59O1xuXG4vLyDlsIZUaXBzIOWSjCDog4zmma/lhYPntKDljIXkvY/vvIzpgb/lhY3lh4zkubFcbnRpcHMucHJvdG90eXBlLmdldFRpcHNDb250YWluZXIgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgbGV0IHRpcHNBdHRyaWJ1dGUgPSB0aGlzLnRpcHNBdHRyaWJ1dGU7XG4gICAgbGV0ICR0aXBHcm91cCA9IHRoaXMuYmFja3VwLl90aXBHcm91cEVsbTtcbiAgICBsZXQgJHRpcENvbnRhaW5lciA9ICR0aXBHcm91cC5wYXJlbnROb2RlO1xuXG4gICAgaWYoISR0aXBDb250YWluZXIpIHtcbiAgICAgICAgbGV0IGNvbnRhaW5lck5hbWUgPSAndGlwQ29udGFpbmVyLScgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgJHRpcENvbnRhaW5lciA9IEMuY3JlYXRlTm9kZShcIjxkaXYgbmFtZT0nXCIrY29udGFpbmVyTmFtZStcIicgY2xhc3M9J29ob1RpcC1jb250YWluZXInPjwvZGl2PlwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gJHRpcENvbnRhaW5lcjtcbn07XG5cbi8qKlxuICog5riy5p+TVGlwcyDlhoXlrrnvvIzmlK/mjIEgRG9tIOWFg+e0oFxuICog5YyF5ousIOa2iOaBr++8jOWbvuagh++8jOagh+W/l+eureWktOetiVxuICovXG50aXBzLnByb3RvdHlwZS5yZW5kZXJUaXBzQm9keSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICBsZXQgJHBhcmVudCA9IHRoaXMuYmFja3VwLl9wYXJlbnRFbG07XG4gICAgbGV0ICR0aXBDb250YWluZXIgPSB0aGlzLmJhY2t1cC5fdGlwQ29udGFpbmVyRWxtO1xuICAgIGxldCAkdGlwR3JvdXAgPSB0aGlzLmJhY2t1cC5fdGlwR3JvdXBFbG07XG4gICAgbGV0IGNzc0NsYXNzID0gdGhpcy5jc3NDbGFzcztcbiAgICBsZXQgdGlwc0F0dHJpYnV0ZSA9IHRoaXMudGlwc0F0dHJpYnV0ZTtcblxuICAgIHRoaXMub3B0aW9ucy5ldmVudHMuYmVmb3JlQ3JlYXRlZC5jYWxsKHRoaXMpOyAgLy9UaXBzIOWIm+W7uua2iOaBr+S5i+WJjSDop6blj5FcblxuICAgIGxldCAkdGlwID0gQy5jcmVhdGVOb2RlKFwiPGRpdiBuYW1lPSdvaG9UaXBzJyBjbGFzcz0nXCIrY3NzQ2xhc3MudGlwK1wiJz5cIik7XG5cbiAgICAvLyDnlKjkuo5zeW1ib2wg5ZCv55So5pe277yM6K6+572u5a+55bqUcGFkZGluZyDnu5lzeW1ib2wg5bGV56S656m66Ze0XG4gICAgbGV0ICRzeW1ib2xCb3ggPSBDLmNyZWF0ZU5vZGUoXCI8ZGl2IG5hbWU9J3N5bWJvbC1ib3gnIGNsYXNzPSdvaG9UaXAtc3ltYm9sLWJveCc+PC9kaXY+XCIpO1xuICAgIHRoaXMuYmFja3VwLl9zeW1ib2xCb3hFbG0gPSAkc3ltYm9sQm94O1xuICAgICR0aXAuYXBwZW5kQ2hpbGQoJHN5bWJvbEJveCk7XG5cbiAgICBsZXQgJHRpcEJveCA9IEMuY3JlYXRlTm9kZShcIjxkaXYgY2xhc3M9J1wiK2Nzc0NsYXNzLnRpcEJveCtcIic+XCIpO1xuICAgIHRoaXMuYmFja3VwLl90aXBCb3hFbG0gPSAkdGlwQm94O1xuICAgICRzeW1ib2xCb3guYXBwZW5kQ2hpbGQoJHRpcEJveCk7XG5cbiAgICBsZXQgJG1lc3NhZ2VCb3ggPSBDLmNyZWF0ZU5vZGUoXCI8ZGl2IGNsYXNzPSdcIitjc3NDbGFzcy5tZXNzYWdlK1wiJz5cIik7XG4gICAgbGV0ICRtZXNzYWdlO1xuICAgIGlmKHRoaXMuaXNIdG1sTWVzc2FnZSgpKSB7ICAgICAgIC8vbWVzc2FnZSDkuLpkb23lhYPntKBcbiAgICAgICAgaWYodHlwZW9mIG9wdGlvbnMubWVzc2FnZSA9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAkbWVzc2FnZSA9IEMuY3JlYXRlTm9kZShvcHRpb25zLm1lc3NhZ2UpO1xuICAgICAgICB9ZWxzZSBpZihvcHRpb25zLm1lc3NhZ2UgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgJG1lc3NhZ2UgPSBvcHRpb25zLm1lc3NhZ2U7XG4gICAgICAgIH1lbHNlIGlmKG9wdGlvbnMubWVzc2FnZSBpbnN0YW5jZW9mIGpRdWVyeSkge1xuICAgICAgICAgICAgJG1lc3NhZ2UgPSBvcHRpb25zLm1lc3NhZ2VbMF07XG4gICAgICAgIH1cbiAgICAgICAgJG1lc3NhZ2VCb3guYXBwZW5kQ2hpbGQoJG1lc3NhZ2UpO1xuICAgICAgICBcbiAgICB9ZWxzZSB7ICAgICAgICAgICAgICAgICAvL21lc3NhZ2Ug5Li65paH5pys5L+h5oGvXG4gICAgICAgIGlmKEMuaXNTdHJpbmcob3B0aW9ucy5tZXNzYWdlKSkge1xuICAgICAgICAgICAgJG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICAgICRtZXNzYWdlLmlubmVyVGV4dCA9IG9wdGlvbnMubWVzc2FnZTtcbiAgICAgICAgICAgICRtZXNzYWdlQm94LmFwcGVuZENoaWxkKCRtZXNzYWdlKTtcbiAgICAgICAgfWVsc2UgaWYgKEMuaXNBcnJheShvcHRpb25zLm1lc3NhZ2UpKSB7XG4gICAgICAgICAgICBmb3IobGV0IGk9MDsgaTxvcHRpb25zLm1lc3NhZ2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAkbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgJG1lc3NhZ2UuaW5uZXJUZXh0ID0gb3B0aW9ucy5tZXNzYWdlW2ldO1xuICAgICAgICAgICAgICAgICRtZXNzYWdlQm94LmFwcGVuZENoaWxkKCRtZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICR0aXBCb3guYXBwZW5kQ2hpbGQoJG1lc3NhZ2VCb3gpO1xuICAgIHRoaXMucmVuZGVySWNvbihvcHRpb25zLCAkdGlwQm94KTtcblxuICAgIHRoaXMucmVuZGVyVGlwc1N5bWJvbChvcHRpb25zLCAkdGlwQm94KTtcblxuICAgICR0aXBHcm91cC5hcHBlbmRDaGlsZCgkdGlwKTtcbiAgICAkdGlwQ29udGFpbmVyLmFwcGVuZENoaWxkKCR0aXBHcm91cCk7XG5cbiAgICAvL+WFiOaPkuWFpeWFg+e0oO+8jOeEtuWQjuaJjeiDveiOt+WPluWuveW6puWSjOmrmOW6plxuICAgICRwYXJlbnQuYXBwZW5kQ2hpbGQoJHRpcENvbnRhaW5lcik7XG5cbiAgICB0aGlzLnNldFN0eWxlU3ltYm9sQm94KCk7XG5cbiAgICB0aGlzLm9wdGlvbnMuZXZlbnRzLmNyZWF0ZWQuY2FsbCh0aGlzKTsgIC8vVGlwcyDliJvlu7rmtojmga/kuYvlkI4g6Kem5Y+RXG5cbiAgICByZXR1cm4gJHRpcDtcbn07XG5cbi8qKlxuICog5riy5p+T5Zu+5qCHXG4gKi9cbnRpcHMucHJvdG90eXBlLnJlbmRlckljb24gPSBmdW5jdGlvbihvcHRpb25zLCAkdGlwQm94KSB7XG4gICAgaWYob3B0aW9ucy5pY29uKSB7XG4gICAgICAgIGxldCBjc3NDbGFzcyA9IHRoaXMuY3NzQ2xhc3M7XG4gICAgICAgIGxldCAkaWNvbkJveCA9IEMuY3JlYXRlTm9kZShcIjxkaXYgY2xhc3M9J29ob1RpcC1pY29uLWJveCc+PHNwYW4+PGkgY2xhc3M9J1wiK2Nzc0NsYXNzLmljb24rXCInPjwvaT48L3NwYW4+PC9kaXY+XCIpO1xuICAgICAgICAkdGlwQm94LmFwcGVuZENoaWxkKCRpY29uQm94KTtcbiAgICB9XG59XG5cbi8qKlxuICog5riy5p+T6YGu572p5bGCXG4gKi9cbnRpcHMucHJvdG90eXBlLnJlbmRlclRpcHNCZyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICBpZighb3B0aW9ucy5iYWNrZ3JvdW5kKSByZXR1cm4gZmFsc2U7XG5cbiAgICBsZXQgY3NzQ2xhc3MgPSB0aGlzLmNzc0NsYXNzO1xuICAgIGxldCAkYmFzZSA9IHRoaXMuYmFja3VwLl9iYXNlRWxtO1xuICAgIGxldCAkdGlwQ29udGFpbmVyID0gdGhpcy5iYWNrdXAuX3RpcENvbnRhaW5lckVsbTtcbiAgICBsZXQgJGJnID0gQy5jcmVhdGVOb2RlKFwiPGRpdiBjbGFzcyA9ICdcIitjc3NDbGFzcy5iZytcIic+XCIpO1xuICAgICR0aXBDb250YWluZXIuYXBwZW5kQ2hpbGQoJGJnKTtcblxuICAgIHJldHVybiAkYmc7XG59O1xuXG4vKipcbiAqIOagueaNrlRpcHPlrprkvY3pgInmi6nmoIflv5fnmoTkvY3nva5cbiAqL1xudGlwcy5wcm90b3R5cGUubWFwUG9zaXRpb25Ub1N5bWJvbFBvc2l0aW9uID0gZnVuY3Rpb24obXlQb3NpdGlvbikge1xuICAgIGxldCBwb3NpdGlvblRvU3ltYm9sUG9zaXRpb24gPSB7XG4gICAgICAgICdpbm5lcic6IHtcbiAgICAgICAgICAgICd0b3AtbGVmdCc6ICd0b3AtbGVmdCcsXG4gICAgICAgICAgICAndG9wLWNlbnRlcic6ICd0b3AtY2VudGVyJyxcbiAgICAgICAgICAgICd0b3AtcmlnaHQnOiAndG9wLXJpZ2h0JyxcbiAgICAgICAgICAgICdjZW50ZXItbGVmdCc6ICdjZW50ZXItbGVmdCcsXG4gICAgICAgICAgICAnbWlkZGxlJzogJ21pZGRsZScsXG4gICAgICAgICAgICAnY2VudGVyLXJpZ2h0JzogJ2NlbnRlci1yaWdodCcsXG4gICAgICAgICAgICAnYm90dG9tLWxlZnQnOiAnYm90dG9tLWxlZnQnLFxuICAgICAgICAgICAgJ2JvdHRvbS1jZW50ZXInOiAnYm90dG9tLWNlbnRlcicsXG4gICAgICAgICAgICAnYm90dG9tLXJpZ2h0JzogJ2JvdHRvbS1yaWdodCcsXG4gICAgICAgIH0sXG4gICAgICAgICdvdXRlcic6IHtcbiAgICAgICAgICAgICd0b3AtbGVmdCc6ICdib3R0b20tbGVmdCcsXG4gICAgICAgICAgICAndG9wLWNlbnRlcic6ICdib3R0b20tY2VudGVyJyxcbiAgICAgICAgICAgICd0b3AtcmlnaHQnOiAnYm90dG9tLXJpZ2h0JyxcbiAgICAgICAgICAgICdjZW50ZXItbGVmdCc6ICdjZW50ZXItcmlnaHQnLFxuICAgICAgICAgICAgJ21pZGRsZSc6ICdtaWRkbGUnLFxuICAgICAgICAgICAgJ2NlbnRlci1yaWdodCc6ICdjZW50ZXItbGVmdCcsXG4gICAgICAgICAgICAnYm90dG9tLWxlZnQnOiAndG9wLWxlZnQnLFxuICAgICAgICAgICAgJ2JvdHRvbS1jZW50ZXInOiAndG9wLWNlbnRlcicsXG4gICAgICAgICAgICAnYm90dG9tLXJpZ2h0JzogJ3RvcC1yaWdodCcsXG4gICAgICAgICAgICAnbGVmdC10b3AnOiAncmlnaHQtdG9wJyxcbiAgICAgICAgICAgICdsZWZ0LWJvdHRvbSc6ICdyaWdodC1ib3R0b20nLFxuICAgICAgICAgICAgJ3JpZ2h0LXRvcCc6ICdsZWZ0LXRvcCcsXG4gICAgICAgICAgICAncmlnaHQtYm90dG9tJzogJ2xlZnQtYm90dG9tJyxcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBpZih0eXBlb2YgbXlQb3NpdGlvbiA9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGlmKHRoaXMub3B0aW9ucy5kaXJlY3Rpb24gPT0gJ2lubmVyJyB8fCB0aGlzLm9wdGlvbnMuZGlyZWN0aW9uID09ICdub3JtYWwnKSB7XG4gICAgICAgICAgICBpZihwb3NpdGlvblRvU3ltYm9sUG9zaXRpb25bJ2lubmVyJ10uaGFzT3duUHJvcGVydHkobXlQb3NpdGlvbikpIHJldHVybiBwb3NpdGlvblRvU3ltYm9sUG9zaXRpb25bJ2lubmVyJ11bbXlQb3NpdGlvbl07XG4gICAgICAgIH1lbHNlIGlmKHRoaXMub3B0aW9ucy5kaXJlY3Rpb24gPT0gJ291dGVyJyB8fCB0aGlzLm9wdGlvbnMuZGlyZWN0aW9uID09ICdvdXRzaWRlJykge1xuICAgICAgICAgICAgaWYocG9zaXRpb25Ub1N5bWJvbFBvc2l0aW9uWydvdXRlciddLmhhc093blByb3BlcnR5KG15UG9zaXRpb24pKSByZXR1cm4gcG9zaXRpb25Ub1N5bWJvbFBvc2l0aW9uWydvdXRlciddW215UG9zaXRpb25dO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xufVxuXG4vKipcbiAqIOa4suafk+agh+W/l++8jOaUr+aMgeiHquWKqOmAieaLqeS9jee9rlxuICovXG50aXBzLnByb3RvdHlwZS5yZW5kZXJUaXBzU3ltYm9sID0gZnVuY3Rpb24ob3B0aW9ucywgJHRpcEJveCkge1xuICAgIGlmKCFvcHRpb25zLnN5bWJvbCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgbGV0IHN5bWJvbENsYXNzID0gdGhpcy5jc3NDbGFzcy5zeW1ib2w7XG4gICAgbGV0IHN5bWJvbCA9IFwidHJpYW5nbGVcIjtcbiAgICBpZih0eXBlb2Ygb3B0aW9ucy5zeW1ib2wgPT0gJ3N0cmluZycpIHN5bWJvbCA9IG9wdGlvbnMuc3ltYm9sO1xuXG4gICAgaWYoIXRoaXMub3B0aW9ucy5zeW1ib2xPcHRpb25zLnBvc2l0aW9uICYmIHR5cGVvZiB0aGlzLm9wdGlvbnMucG9zaXRpb24gPT0gJ3N0cmluZycpIHtcbiAgICAgICAgc3ltYm9sQ2xhc3MgPSBzeW1ib2xDbGFzcyArIFwiIFwiICsgc3ltYm9sICsgXCItXCIgKyB0aGlzLm1hcFBvc2l0aW9uVG9TeW1ib2xQb3NpdGlvbih0aGlzLm9wdGlvbnMucG9zaXRpb24pO1xuICAgICAgICB0aGlzLndyaXRlTG9nKCdpbmZvJywgJ3JlbmRlclRpcHNTeW1ib2wgLSBBdXRvIHNldCBieSBvcHRpb25zLnBvc2l0aW9uKCVzKSAtIFNldCBzeW1ib2xDbGFzcyglcyknLCB0aGlzLm9wdGlvbnMucG9zaXRpb24sIHN5bWJvbENsYXNzKTtcbiAgICB9ZWxzZSBpZih0aGlzLm9wdGlvbnMuc3ltYm9sT3B0aW9ucy5wb3NpdGlvbiAmJiB0eXBlb2YgdGhpcy5vcHRpb25zLnN5bWJvbE9wdGlvbnMucG9zaXRpb24gPT0gJ3N0cmluZycpIHtcbiAgICAgICAgc3ltYm9sQ2xhc3MgPSBzeW1ib2xDbGFzcyArIFwiIFwiICsgc3ltYm9sICsgXCItXCIgKyB0aGlzLm9wdGlvbnMuc3ltYm9sT3B0aW9ucy5wb3NpdGlvbjtcbiAgICAgICAgdGhpcy53cml0ZUxvZygnaW5mbycsICdyZW5kZXJUaXBzU3ltYm9sIC0gQXV0byBzZXQgYnkgc3ltYm9sT3B0aW9ucy5wb3NpdGlvbiglcykgLSBTZXQgc3ltYm9sQ2xhc3MoJXMpJywgdGhpcy5vcHRpb25zLnN5bWJvbE9wdGlvbnMucG9zaXRpb24sIHN5bWJvbENsYXNzKTtcbiAgICB9ZWxzZSB7XG4gICAgICAgIHN5bWJvbENsYXNzID0gc3ltYm9sQ2xhc3MgKyBcIiBcIiArIHN5bWJvbDtcbiAgICAgICAgdGhpcy53cml0ZUxvZygnaW5mbycsICdyZW5kZXJUaXBzU3ltYm9sIC0gQXV0byBzZXQgYnkgc3ltYm9sQ2xhc3MoJXMpLCBzeW1ib2woJXMpIC0gU2V0IHN5bWJvbENsYXNzKCVzKScsIHN5bWJvbENsYXNzLCBzeW1ib2wsIHN5bWJvbENsYXNzKTtcbiAgICB9XG5cbiAgICBsZXQgJHN5bWJvbCA9IEMuY3JlYXRlTm9kZShcIjxzcGFuIGNsYXNzPSdcIisgc3ltYm9sQ2xhc3MgK1wiJz48L3NwYW4+XCIpO1xuICAgIHRoaXMuYmFja3VwLl9zeW1ib2xFbG0gPSAkc3ltYm9sO1xuICAgICR0aXBCb3guYXBwZW5kQ2hpbGQoJHN5bWJvbCk7XG4gICAgXG4gICAgcmV0dXJuICRzeW1ib2w7XG59XG5cbi8qKlxuICog6K6+572u5qCH5b+X54i25YWD57Sg55uS5a2Q55qE5aSn5bCP77yM5L6d6Z2gcGFkZGluZ+aSkeW8gOeItuWFg+e0oO+8jOWIqeS6juWKqOeUu+aJp+ihjFxuICovXG50aXBzLnByb3RvdHlwZS5zZXRTdHlsZVN5bWJvbEJveCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmKCF0aGlzLm9wdGlvbnMuc3ltYm9sKSByZXR1cm4gZmFsc2U7XG5cbiAgICBsZXQgJHN5bWJvbEJveCA9IHRoaXMuYmFja3VwLl9zeW1ib2xCb3hFbG07XG4gICAgbGV0IHN5bWJvbFNpemUgPSB0aGlzLmdldFN5bWJvbFNpemUoKTtcblxuICAgIGxldCBzeW1ib2xCb3hTdHlsZSA9IHtcbiAgICAgICAgJ3BhZGRpbmctdG9wJzogMCxcbiAgICAgICAgJ3BhZGRpbmctYm90dG9tJzogMCxcbiAgICAgICAgJ3BhZGRpbmctbGVmdCc6IDAsXG4gICAgICAgICdwYWRkaW5nLXJpZ2h0JzogMCxcbiAgICB9O1xuXG4gICAgbGV0IHN5bWJvbFBvc2l0aW9uID0gdGhpcy5vcHRpb25zLnN5bWJvbE9wdGlvbnMucG9zaXRpb24gfHwgdGhpcy5tYXBQb3NpdGlvblRvU3ltYm9sUG9zaXRpb24odGhpcy5vcHRpb25zLnBvc2l0aW9uKTtcbiAgICBpZihzeW1ib2xQb3NpdGlvbiAmJiB0eXBlb2Ygc3ltYm9sUG9zaXRpb24gPT0gJ3N0cmluZycpIHtcbiAgICAgICAgc3dpdGNoKHN5bWJvbFBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInRvcC1sZWZ0XCIgOiAgICAgICAgICAgLy/lnZDmoIflnKhUaXBzIOeahOW3puS4iuinkuS9jee9rlxuICAgICAgICAgICAgICAgIGNhc2UgXCJ0b3AtY2VudGVyXCIgOiAgICAgICAgIC8v5Z2Q5qCH5ZyoVGlwcyDnmoTkuIrkuK3kvY3nva5cbiAgICAgICAgICAgICAgICBjYXNlIFwidG9wLXJpZ2h0XCIgOiAgICAgICAgICAvL+WdkOagh+WcqFRpcHMg55qE5Y+z5LiK6KeS5L2N572uXG4gICAgICAgICAgICAgICAgICAgIHN5bWJvbEJveFN0eWxlWydwYWRkaW5nLXRvcCddID0gc3ltYm9sU2l6ZS5oZWlnaHQgKyBcInB4XCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJyaWdodC10b3BcIiA6ICAgICAgICAgIC8v5Z2Q5qCH5ZyoVGlwcyDnmoTkuIrlj7Pop5LkvY3nva5cbiAgICAgICAgICAgICAgICBjYXNlIFwiY2VudGVyLXJpZ2h0XCIgOiAgICAgICAvL+WdkOagh+WcqFRpcHMg55qE5Y+z5Lit5L2N572uXG4gICAgICAgICAgICAgICAgY2FzZSBcInJpZ2h0LWJvdHRvbVwiIDogICAgICAgLy/lnZDmoIflnKhUaXBzIOeahOS4i+WPs+inkuS9jee9rlxuICAgICAgICAgICAgICAgICAgICBzeW1ib2xCb3hTdHlsZVsncGFkZGluZy1yaWdodCddID0gc3ltYm9sU2l6ZS53aWR0aCArIFwicHhcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImJvdHRvbS1yaWdodFwiIDogICAgICAgLy/lnZDmoIflnKhUaXBzIOeahOWPs+S4i+inkuS9jee9rlxuICAgICAgICAgICAgICAgIGNhc2UgXCJib3R0b20tY2VudGVyXCIgOiAgICAgIC8v5Z2Q5qCH5ZyoVGlwcyDnmoTkuIvkuK3kvY3nva5cbiAgICAgICAgICAgICAgICBjYXNlIFwiYm90dG9tLWxlZnRcIiA6ICAgICAgICAvL+WdkOagh+WcqFRpcHMg55qE5bem5LiL6KeS5L2N572uXG4gICAgICAgICAgICAgICAgICAgIHN5bWJvbEJveFN0eWxlWydwYWRkaW5nLWJvdHRvbSddID0gc3ltYm9sU2l6ZS5oZWlnaHQgKyBcInB4XCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJsZWZ0LWJvdHRvbVwiIDogICAgICAgIC8v5Z2Q5qCH5ZyoVGlwcyDnmoTkuIvlt6bop5LkvY3nva5cbiAgICAgICAgICAgICAgICBjYXNlIFwiY2VudGVyLWxlZnRcIiA6ICAgICAgICAvL+WdkOagh+WcqFRpcHMg55qE5bem5Lit5L2N572uXG4gICAgICAgICAgICAgICAgY2FzZSBcImxlZnQtdG9wXCIgOiAgICAgICAgICAgLy/lnZDmoIflnKhUaXBzIOeahOS4iuW3puinkuS9jee9rlxuICAgICAgICAgICAgICAgICAgICBzeW1ib2xCb3hTdHlsZVsncGFkZGluZy1sZWZ0J10gPSBzeW1ib2xTaXplLndpZHRoICsgXCJweFwiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwibWlkZGxlXCIgOiAgICAgICAgICAgICAvL+WdkOagh+WcqFRpcHMg55qE5Lit6Ze05L2N572uXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQgOiAgICAgICAgICAgICAgICAgICAvL+m7mOiupOWdkOagh+WcqFRpcHMg55qE5Lit6Ze05L2N572uXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgIH1cblxuICAgIEMuYWRkQ3NzKCRzeW1ib2xCb3gsIHN5bWJvbEJveFN0eWxlKTtcblxuICAgIHJldHVybiBzeW1ib2xCb3hTdHlsZTtcbn1cblxuLyoqXG4gKiDlpoLmnpxUaXBzIOacieWIhue7hOmFjee9ru+8jOWwseWwhuebuOWQjOe7hOeahFRpcHMg5a6e5L6L5a2Y5YWlZ3JvdXAg5pWw57uE44CCXG4gKi9cbnRpcHMucHJvdG90eXBlLnNldEdyb3VwID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIGxldCBvcHRHcm91cCA9IHRoaXMub3B0aW9ucy5ncm91cDtcblxuICAgIGlmKG9wdEdyb3VwLm5hbWUpIHtcbiAgICAgICAgaWYodGhpcy50R3JvdXBzLmhhc093blByb3BlcnR5KG9wdEdyb3VwLm5hbWUpKSB7XG4gICAgICAgICAgICB0aGlzLnRHcm91cHNbb3B0R3JvdXAubmFtZV0ucHVzaChfdGhpcyk7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHRoaXMudEdyb3Vwc1tvcHRHcm91cC5uYW1lXSA9IFtfdGhpc107XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICog6ZSA5q+BVGlwcyDnmoTml7blgJnvvIxcbiAqIOS7juWIhue7hOmHjOmdouenu+mZpOi/meS4qiBUaXBzXG4gKi9cbnRpcHMucHJvdG90eXBlLnVuc2V0R3JvdXAgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgbGV0IG9wdEdyb3VwID0gdGhpcy5vcHRpb25zLmdyb3VwO1xuXG4gICAgaWYob3B0R3JvdXAubmFtZSkge1xuICAgICAgICBpZih0aGlzLnRHcm91cHMuaGFzT3duUHJvcGVydHkob3B0R3JvdXAubmFtZSkpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50R3JvdXBzW29wdEdyb3VwLm5hbWVdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYodGhpcy50R3JvdXBzW29wdEdyb3VwLm5hbWVdW2ldLmlkID09IHRoaXMuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50R3JvdXBzW29wdEdyb3VwLm5hbWVdLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIOWmguaenFRpcHMg5pyJ5YiG57uE6YWN572u77yM5Yib5bu65LmL5ZCO6ZyA6KaB5qOA5p+l5b2T5YmN5YiG57uE5Liq5pWw5piv5ZCm5bey57uP6LaF5Ye65pyA5aSn5Liq5pWwXG4gKiDlpoLmnpzotoXlh7rvvIzliJnlsIbmnIDliY3pnaLnmoRUaXBzIOmUgOavgeWIoOmZpFxuICovXG50aXBzLnByb3RvdHlwZS5jaGVja0dyb3VwID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIGxldCBvcHRHcm91cCA9IHRoaXMub3B0aW9ucy5ncm91cDtcblxuICAgIGlmKG9wdEdyb3VwLm5hbWUpIHtcbiAgICAgICAgaWYodGhpcy50R3JvdXBzLmhhc093blByb3BlcnR5KG9wdEdyb3VwLm5hbWUpICYmIHRoaXMudEdyb3Vwc1tvcHRHcm91cC5uYW1lXS5sZW5ndGggPiBvcHRHcm91cC5tYXhMZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMudEdyb3Vwc1tvcHRHcm91cC5uYW1lXVswXS5kZXN0cm95KF90aGlzKTtcbiAgICAgICAgICAgIHRoaXMudEdyb3Vwc1tvcHRHcm91cC5uYW1lXS5zcGxpY2UoMCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICog5Yik5patVGlwcyDln7rlh4blhYPntKDmmK/lkKbmmK8gQm9keSDlhYPntKBcbiAqL1xudGlwcy5wcm90b3R5cGUuaXNCYXNlQm9keUVsZW1lbnQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gIXRoaXMub3B0aW9ucy5iYXNlRWxlbWVudCB8fCB0aGlzLmJhY2t1cC5fYmFzZUVsbS50YWdOYW1lID09ICdCT0RZJztcbn1cblxuLyoqXG4gKiDliKTmlq1UaXBzIGNvbnRhaW5lciDnm7TmjqXniLblhYPntKDmmK/lkKbmmK8gQm9keSDlhYPntKBcbiAqL1xudGlwcy5wcm90b3R5cGUuaXNQYXJlbnRCb2R5RWxlbWVudCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmJhY2t1cC5fcGFyZW50RWxtLnRhZ05hbWUgPT0gJ0JPRFknO1xufVxuXG4vKipcbiAqIOiOt+WPluWfuuWHhuWFg+e0oOS7peWPilRpcHPlhYPntKDnmoTor6bmg4VcbiAqIOWMheaLrOS9jee9ru+8jOWuvemrmO+8jOi+ueWuveWxnuaAp+etiVxuICovXG50aXBzLnByb3RvdHlwZS5nZXRFbGVtZW50RGV0YWlscyA9IGZ1bmN0aW9uKCkge1xuICAgIC8v5b2T5Z+65YeG5YWD57Sg5oiWVGlwcyDlhYPntKDlj5HnlJ/miJblj6/og73lj5HnlJ/lj5jljJbml7bvvIzmiY3ph43mlrDojrflj5bor6bnu4blj4LmlbDjgIJcbiAgICAvL+S4gOiIrOadpeivtO+8jHNjcm9sbCDmmK/kuI3pnIDopoHph43mlrDojrflj5bor6bmg4XnmoTvvIzlm6DkuLrlroPkuI3kvJrmlLnlj5jln7rlh4blhYPntKDnmoTlpKflsI/jgILlj6rmnInlvZPln7rlh4blhYPntKDkvY3kuo5wb3NpdGlvbjpmaXhlZCDnmoTniLblhYPntKDlhoXvvIzmiY3kvJrpnIDopoHph43mlrDojrflj5bjgIJcbiAgICBpZih0aGlzLmVsZW1lbnREZXRhaWxzICYmICghdGhpcy5ldmVudCB8fCAodGhpcy5ldmVudC50eXBlICE9ICdyZXNpemUnICYmIHRoaXMuZXZlbnQudHlwZSAhPSAnc2Nyb2xsJykpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnREZXRhaWxzO1xuICAgIH1cblxuICAgIHRoaXMuc2V0SW5pdFBvc2l0aW9uKCk7XG5cbiAgICBsZXQgJGJhc2UgPSB0aGlzLmJhY2t1cC5fYmFzZUVsbTtcbiAgICBsZXQgJHRpcEdyb3VwID0gdGhpcy5iYWNrdXAuX3RpcEdyb3VwRWxtO1xuICAgIGxldCAkdGlwID0gdGhpcy5iYWNrdXAuX3RpcEVsbTtcbiAgICBsZXQgZGV0YWlscztcblxuICAgIGlmKHRoaXMuaXNCYXNlQm9keUVsZW1lbnQoKSkge1xuICAgICAgICBkZXRhaWxzID0ge1xuICAgICAgICAgICAgYmFzZVBvc2l0aW9uOiB7dG9wOiAwLCBsZWZ0OiAwfSxcbiAgICAgICAgICAgIGJhc2VNYXJnaW5Ub3A6IDAsICAgICAgICAgICAvL+iOt+WPluWfuuWHhuWFg+e0oOWklui+uei3ne+8jHBvc2l0aW9uKCkg6I635Y+W55qE5YC85LiN566X5aSW6L656LedXG4gICAgICAgICAgICBiYXNlTWFyZ2luTGVmdDogMCxcbiAgICAgICAgICAgIGJhc2VXaWR0aDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy93aWR0aCtwYWRkaW5nXG4gICAgICAgICAgICBiYXNlSGVpZ2h0OiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vaGVpZ2h0K3BhZGRpbmdcbiAgICAgICAgICAgIGJhc2VPdXRlcldpZHRoOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsXG4gICAgICAgICAgICBiYXNlT3V0ZXJIZWlnaHQ6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsXG4gICAgICAgICAgICAvLyBiYXNlT2Zmc2V0V2lkdGg6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRXaWR0aCxcbiAgICAgICAgICAgIC8vIGJhc2VPZmZzZXRIZWlnaHQ6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRIZWlnaHQsXG4gICAgICAgICAgICBiYXNlQm9yZGVyVG9wV2lkdGg6IDAsICAgICAgICAgICAvL3RvcCBib3JkZXJcbiAgICAgICAgICAgIGJhc2VCb3JkZXJCb3R0b21XaWR0aDogMCxcbiAgICAgICAgICAgIGJhc2VCb3JkZXJMZWZ0V2lkdGg6IDAsICAgICAgICAgIC8vbGVmdCBib3JkZXJcbiAgICAgICAgICAgIGJhc2VCb3JkZXJSaWdodFdpZHRoOiAwLFxuICAgICAgICAgICAgYmFzZUJvcmRlclJhZGl1czogMCwgICAgICAgICAgICAgICAgICAgIC8v5ZyG6KeS5Y2K5b6EXG4gICAgICAgICAgICB0aXBHcm91cFdpZHRoOiBDLm91dGVyV2lkdGgoJHRpcEdyb3VwKSxcbiAgICAgICAgICAgIHRpcEdyb3VwSGVpZ2h0OiBDLm91dGVySGVpZ2h0KCR0aXBHcm91cCksXG4gICAgICAgICAgICB0aXBXaWR0aDogQy5vdXRlcldpZHRoKCR0aXApLFxuICAgICAgICAgICAgdGlwSGVpZ2h0OiBDLm91dGVySGVpZ2h0KCR0aXApLFxuICAgICAgICB9O1xuICAgIH1lbHNlIHtcbiAgICAgICAgZGV0YWlscyA9IHtcbiAgICAgICAgICAgIGJhc2VQb3NpdGlvbjogQy5wb3NpdGlvbigkYmFzZSksXG4gICAgICAgICAgICBiYXNlTWFyZ2luVG9wOiBwYXJzZUZsb2F0KEMuY3NzKCRiYXNlLCBcIm1hcmdpbi10b3BcIikpLCAgICAgICAgICAgIC8v6I635Y+W5Z+65YeG5YWD57Sg5aSW6L656Led77yMcG9zaXRpb24oKSDojrflj5bnmoTlgLzkuI3nrpflpJbovrnot51cbiAgICAgICAgICAgIGJhc2VNYXJnaW5MZWZ0OiBwYXJzZUZsb2F0KEMuY3NzKCRiYXNlLCBcIm1hcmdpbi1sZWZ0XCIpKSxcbiAgICAgICAgICAgIGJhc2VXaWR0aDogQy5pbm5lcldpZHRoKCRiYXNlLCB0cnVlKSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vd2lkdGgrcGFkZGluZ1xuICAgICAgICAgICAgYmFzZUhlaWdodDogQy5pbm5lckhlaWdodCgkYmFzZSwgdHJ1ZSksICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9oZWlnaHQrcGFkZGluZ1xuICAgICAgICAgICAgYmFzZU91dGVyV2lkdGg6IEMub3V0ZXJXaWR0aCgkYmFzZSksXG4gICAgICAgICAgICBiYXNlT3V0ZXJIZWlnaHQ6IEMub3V0ZXJIZWlnaHQoJGJhc2UpLFxuICAgICAgICAgICAgYmFzZUJvcmRlclRvcFdpZHRoOiBwYXJzZUZsb2F0KEMuY3NzKCRiYXNlLCBcImJvcmRlci10b3Atd2lkdGhcIikpLCAgICAgICAgICAgIC8vdG9wIGJvcmRlclxuICAgICAgICAgICAgYmFzZUJvcmRlckJvdHRvbVdpZHRoOiBwYXJzZUZsb2F0KEMuY3NzKCRiYXNlLCBcImJvcmRlci1ib3R0b20td2lkdGhcIikpLFxuICAgICAgICAgICAgYmFzZUJvcmRlckxlZnRXaWR0aDogcGFyc2VGbG9hdChDLmNzcygkYmFzZSwgXCJib3JkZXItbGVmdC13aWR0aFwiKSksICAgICAgICAgICAvL2xlZnQgYm9yZGVyXG4gICAgICAgICAgICBiYXNlQm9yZGVyUmlnaHRXaWR0aDogcGFyc2VGbG9hdChDLmNzcygkYmFzZSwgXCJib3JkZXItcmlnaHQtd2lkdGhcIikpLFxuICAgICAgICAgICAgYmFzZUJvcmRlclJhZGl1czogQy5jc3MoJGJhc2UsIFwiYm9yZGVyLXJhZGl1c1wiKSwgICAgICAgICAgICAgICAgICAgICAvL+WchuinkuWNiuW+hFxuICAgICAgICAgICAgdGlwR3JvdXBXaWR0aDogQy5vdXRlcldpZHRoKCR0aXBHcm91cCksXG4gICAgICAgICAgICB0aXBHcm91cEhlaWdodDogQy5vdXRlckhlaWdodCgkdGlwR3JvdXApLFxuICAgICAgICAgICAgdGlwV2lkdGg6IEMub3V0ZXJXaWR0aCgkdGlwKSxcbiAgICAgICAgICAgIHRpcEhlaWdodDogQy5vdXRlckhlaWdodCgkdGlwKSxcbiAgICAgICAgfTtcblxuICAgICAgICAvLyDlpoLmnpzniLblhYPntKDkuI3mmK8gQk9EWSDlhYPntKDvvIzpgqPkuYjlu7rorq7ln7rlh4blhYPntKDkuZ/opoHmmK/niLblhYPntKDnmoTlrZDlhYPntKDvvIzlkKbliJnlrprkvY3lsIblh7rplJlcbiAgICAgICAgaWYoIXRoaXMuaXNQYXJlbnRCb2R5RWxlbWVudCgpKSB7XG4gICAgICAgICAgICBsZXQgJHBhcmVudCA9IHRoaXMuYmFja3VwLl9wYXJlbnRFbG07XG4gICAgICAgICAgICBsZXQgcGFyZW50U3R5bGVQb3NpdGlvbiA9IEMuY3NzKCRwYXJlbnQsICdwb3NpdGlvbicpO1xuXG4gICAgICAgICAgICAvLyDlpoLmnpzniLblhYPntKDlrprkvY3nsbvlnovmmK/nibnmrorlrprkvY3vvIzmr5Tlm74g55u45a+555qE77yM57ud5a+55oiW5Zu65a6a77yM6YKj5LmIVGlwc+WtkOWFg+e0oOeahOWumuS9jeWwhuagueaNruWfuuWHhuWFg+e0oOS4jueItuWFg+e0oOebuOWvueWumuS9jeadpeWunueOsO+8jOiAjOS4jeaYr+WfuuWHhuWFg+e0oOS4jkJPRFnnmoTnm7jlr7nlrprkvY1cbiAgICAgICAgICAgIGlmKHRoaXMuaXNTcGVjaWFsU3R5bGVQb3NpdGlvbihwYXJlbnRTdHlsZVBvc2l0aW9uKSkge1xuICAgICAgICAgICAgICAgIGlmKCRwYXJlbnQgPT09ICRiYXNlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOWfuuWHhuWFg+e0oOWQjOaXtuS5n+aYr+eItuWFg+e0oO+8jOmCo+S5iOWfuuWHhuWFg+e0oOebuOWvueS6jueItuWFg+e0oOeahOWumuS9jeWwseaYryB7IHRvcDogMCwgbGVmdDogMCB9XG4gICAgICAgICAgICAgICAgICAgIC8vIOWumuS9jeiuoeeul+inhOWImemDveaYr+S7pUJPRFnkuLrniLblhYPntKDorr7orqHnmoTjgILlgYforr7niLblhYPntKDmmK9CT0RZLCDln7rlh4blhYPntKDnmoTlrprkvY3ov5jlupTor6XnrpfkuIrln7rlh4blhYPntKDnmoTovrnmoYbljprluqZcbiAgICAgICAgICAgICAgICAgICAgLy8g5Zyo5q2k5oiR5Lus5bCG5YW2566X5LiKXG4gICAgICAgICAgICAgICAgICAgIGRldGFpbHMuYmFzZVBvc2l0aW9uID0geyB0b3A6IDAtZGV0YWlscy5iYXNlQm9yZGVyVG9wV2lkdGgsIGxlZnQ6IDAtZGV0YWlscy5iYXNlQm9yZGVyTGVmdFdpZHRoIH07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGV0YWlscy5iYXNlUG9zaXRpb24gPSBDLnJlbGF0aXZlUG9zaXRpb24oJGJhc2UpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMud3JpdGVMb2coXCJpbmZvXCIsIFwi54i25YWD57Sg5LiN5pivQk9EWSzkuJTlhbblrprkvY3mmK8g55u45a+555qE77yM57ud5a+55oiW5Zu65a6a55qEXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMud3JpdGVMb2coXCJpbmZvXCIsIFwi5Z+65YeG5YWD57Sg5LiO54i25YWD57Sg55qE55u45a+55a6a5L2N5piv77yaXCIsIGRldGFpbHMuYmFzZVBvc2l0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8v6KGl566X5aSW6L656LedXG4gICAgZGV0YWlscy5iYXNlVG9wID0gZGV0YWlscy5iYXNlUG9zaXRpb24udG9wO1xuICAgIGRldGFpbHMuYmFzZUxlZnQgPSBkZXRhaWxzLmJhc2VQb3NpdGlvbi5sZWZ0O1xuXG4gICAgLy90aXBz5YWD57SgcG9zaXRpb27pmIjlgLzvvIzlpKfkuo7or6XpmIjlgLzvvIx0aXBz5Lya6LaF5Ye65Z+65YeG5YWD57SgXG4gICAgZGV0YWlscy50b3BUaHJlc2hvbGQgPSBkZXRhaWxzLmJhc2VIZWlnaHQgLSBkZXRhaWxzLnRpcEdyb3VwSGVpZ2h0O1xuICAgIGRldGFpbHMubGVmdFRocmVzaG9sZCA9IGRldGFpbHMuYmFzZVdpZHRoIC0gZGV0YWlscy50aXBHcm91cFdpZHRoO1xuXG4gICAgdGhpcy5lbGVtZW50RGV0YWlscyA9IGRldGFpbHM7XG5cbiAgICB0aGlzLnVuc2V0SW5pdFBvc2l0aW9uKCk7XG5cbiAgICB0aGlzLndyaXRlTG9nKCdpbmZvJywgJ0dldCBFbGVtZW50IERldGFpbHM6ICcsIHRoaXMuZWxlbWVudERldGFpbHMpO1xuXG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudERldGFpbHM7XG59O1xuXG4vKipcbiAqIOiOt+WPllRpcHMg55qEY3NzIOWumuS9jeexu++8jOWPquacieS7pWJvZHkg5Li65Z+65YeG5YWD57Sg55qEVGlwcyDpnIDopoFcbiAqL1xudGlwcy5wcm90b3R5cGUuZ2V0UG9zaXRpb25DbGFzcyA9IGZ1bmN0aW9uKG15UG9zaXRpb24pIHtcbiAgICBsZXQgcG9zaXRpb25DbGFzcyA9IHt9O1xuXG4gICAgaWYodGhpcy5pc0Jhc2VCb2R5RWxlbWVudCgpKSB7XG4gICAgICAgIHBvc2l0aW9uQ2xhc3MudGlwQ2xhc3MgPSBcIm9ob1RpcC1maXhlZFwiO1xuICAgICAgICBwb3NpdGlvbkNsYXNzLmJnQ2xhc3MgPSBcIm9ob1RpcC1iZy1maXhlZFwiO1xuXG4gICAgICAgIGlmKHR5cGVvZiBteVBvc2l0aW9uID09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHN3aXRjaChteVBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInRvcC1sZWZ0XCIgOiAgICAgICAgICAgLy/lnZDmoIflnKjln7rlh4blhYPntKDnmoTlt6bkuIrop5LkvY3nva5cbiAgICAgICAgICAgICAgICBjYXNlIFwidG9wLWNlbnRlclwiIDogICAgICAgICAvL+WdkOagh+WcqOWfuuWHhuWFg+e0oOeahOS4iuS4reS9jee9rlxuICAgICAgICAgICAgICAgIGNhc2UgXCJ0b3AtcmlnaHRcIiA6ICAgICAgICAgIC8v5Z2Q5qCH5Zyo5Z+65YeG5YWD57Sg55qE5Y+z5LiK6KeS5L2N572uXG4gICAgICAgICAgICAgICAgY2FzZSBcImNlbnRlci1sZWZ0XCIgOiAgICAgICAgLy/lnZDmoIflnKjln7rlh4blhYPntKDnmoTlt6bkuK3kvY3nva5cbiAgICAgICAgICAgICAgICBjYXNlIFwibWlkZGxlXCIgOiAgICAgICAgICAgICAvL+WdkOagh+WcqOWfuuWHhuWFg+e0oOeahOS4remXtOS9jee9rlxuICAgICAgICAgICAgICAgIGNhc2UgXCJjZW50ZXItcmlnaHRcIiA6ICAgICAgIC8v5Z2Q5qCH5Zyo5Z+65YeG5YWD57Sg55qE5Y+z5Lit5L2N572uXG4gICAgICAgICAgICAgICAgY2FzZSBcImJvdHRvbS1sZWZ0XCIgOiAgICAgICAgLy/lnZDmoIflnKjln7rlh4blhYPntKDnmoTlt6bkuIvop5LkvY3nva5cbiAgICAgICAgICAgICAgICBjYXNlIFwiYm90dG9tLWNlbnRlclwiIDogICAgICAvL+WdkOagh+WcqOWfuuWHhuWFg+e0oOeahOS4i+S4reS9jee9rlxuICAgICAgICAgICAgICAgIGNhc2UgXCJib3R0b20tcmlnaHRcIiA6ICAgICAgIC8v5Z2Q5qCH5Zyo5Z+65YeG5YWD57Sg55qE5Y+z5LiL6KeS5L2N572uXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uQ2xhc3MudGlwQ2xhc3MgPSBwb3NpdGlvbkNsYXNzLnRpcENsYXNzICsgJyAnICsgbXlQb3NpdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImRlZmF1bHRcIiA6ICAgICAgICAgICAgLy/pu5jorqTlnZDmoIflnKjln7rlh4blhYPntKDnmoTkuK3pl7TkvY3nva5cbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25DbGFzcy50aXBDbGFzcyA9IHBvc2l0aW9uQ2xhc3MudGlwQ2xhc3MgKyAnICcgKyBcIm1pZGRsZVwiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0IDogICAgICAgICAgICAgICAgICAgLy/lj6/mlK/mjIHoh6rlrprkuYlcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25DbGFzcy50aXBDbGFzcyA9IHBvc2l0aW9uQ2xhc3MudGlwQ2xhc3MgKyAnICcgKyBteVBvc2l0aW9uO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwb3NpdGlvbkNsYXNzO1xufTtcblxuLyoqXG4gKiDlpoLmnpzku6VCb2R5IOS4uuWfuuWHhuWFg+e0oO+8jFRpcHMg5LulY3NzIOexu+iuvue9ruWumuS9jVxuICog6L+Z5Liq5pa55rOV5Y+v5Lul6K6+572u5YOP57Sg57qn5Yir55qE5a6a5L2N5YGP56e7XG4gKi9cbnRpcHMucHJvdG90eXBlLnNldENsYXNzUG9zaXRpb25PZmZzZXQgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgJHRpcEdyb3VwID0gdGhpcy5iYWNrdXAuX3RpcEdyb3VwRWxtO1xuICAgIGxldCBteVBvc2l0aW9uID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uO1xuICAgIGxldCBvcHRPZmZzZXQgPSB0aGlzLm9wdGlvbnMub2Zmc2V0O1xuICAgIG9wdE9mZnNldC50b3AgPSBvcHRPZmZzZXQudG9wIHx8IDA7XG4gICAgb3B0T2Zmc2V0LmxlZnQgPSBvcHRPZmZzZXQubGVmdCB8fCAwO1xuXG4gICAgaWYob3B0T2Zmc2V0LnRvcCA9PSAwICYmIG9wdE9mZnNldC5sZWZ0ID09IDApIHJldHVybjtcblxuICAgIGlmKHRoaXMuaXNCYXNlQm9keUVsZW1lbnQoKSkge1xuICAgICAgICBpZih0eXBlb2YgbXlQb3NpdGlvbiA9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBzd2l0Y2gobXlQb3NpdGlvbikge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ0b3AtbGVmdFwiIDogICAgICAgICAgIC8v5Z2Q5qCH5Zyo5Z+65YeG5YWD57Sg55qE5bem5LiK6KeS5L2N572uXG4gICAgICAgICAgICAgICAgICAgICR0aXBHcm91cC5zdHlsZS50b3AgPSBvcHRPZmZzZXQudG9wICsgXCJweFwiO1xuICAgICAgICAgICAgICAgICAgICAkdGlwR3JvdXAuc3R5bGUubGVmdCA9IG9wdE9mZnNldC5sZWZ0ICsgXCJweFwiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwidG9wLWNlbnRlclwiIDogICAgICAgICAvL+WdkOagh+WcqOWfuuWHhuWFg+e0oOeahOS4iuS4reS9jee9rlxuICAgICAgICAgICAgICAgICAgICAkdGlwR3JvdXAuc3R5bGUudG9wID0gb3B0T2Zmc2V0LnRvcCArIFwicHhcIjtcbiAgICAgICAgICAgICAgICAgICAgJHRpcEdyb3VwLnN0eWxlLnJpZ2h0ID0gb3B0T2Zmc2V0LmxlZnQgKyBcInB4XCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ0b3AtcmlnaHRcIiA6ICAgICAgICAgIC8v5Z2Q5qCH5Zyo5Z+65YeG5YWD57Sg55qE5Y+z5LiK6KeS5L2N572uXG4gICAgICAgICAgICAgICAgICAgICR0aXBHcm91cC5zdHlsZS50b3AgPSBvcHRPZmZzZXQudG9wICsgXCJweFwiO1xuICAgICAgICAgICAgICAgICAgICAkdGlwR3JvdXAuc3R5bGUucmlnaHQgPSBvcHRPZmZzZXQubGVmdCArIFwicHhcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImNlbnRlci1sZWZ0XCIgOiAgICAgICAgLy/lnZDmoIflnKjln7rlh4blhYPntKDnmoTlt6bkuK3kvY3nva5cbiAgICAgICAgICAgICAgICAgICAgJHRpcEdyb3VwLnN0eWxlLmxlZnQgPSBvcHRPZmZzZXQubGVmdCArIFwicHhcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIm1pZGRsZVwiIDogICAgICAgICAgICAgLy/lnZDmoIflnKjln7rlh4blhYPntKDnmoTkuK3pl7TkvY3nva5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImNlbnRlci1yaWdodFwiIDogICAgICAgLy/lnZDmoIflnKjln7rlh4blhYPntKDnmoTlj7PkuK3kvY3nva5cbiAgICAgICAgICAgICAgICAgICAgJHRpcEdyb3VwLnN0eWxlLnJpZ2h0ID0gb3B0T2Zmc2V0LmxlZnQgKyBcInB4XCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJib3R0b20tbGVmdFwiIDogICAgICAgIC8v5Z2Q5qCH5Zyo5Z+65YeG5YWD57Sg55qE5bem5LiL6KeS5L2N572uXG4gICAgICAgICAgICAgICAgICAgICR0aXBHcm91cC5zdHlsZS5ib3R0b20gPSBvcHRPZmZzZXQudG9wICsgXCJweFwiO1xuICAgICAgICAgICAgICAgICAgICAkdGlwR3JvdXAuc3R5bGUubGVmdCA9IG9wdE9mZnNldC5sZWZ0ICsgXCJweFwiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiYm90dG9tLWNlbnRlclwiIDogICAgICAvL+WdkOagh+WcqOWfuuWHhuWFg+e0oOeahOS4i+S4reS9jee9rlxuICAgICAgICAgICAgICAgICAgICAkdGlwR3JvdXAuc3R5bGUuYm90dG9tID0gb3B0T2Zmc2V0LnRvcCArIFwicHhcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImJvdHRvbS1yaWdodFwiIDogICAgICAgLy/lnZDmoIflnKjln7rlh4blhYPntKDnmoTlj7PkuIvop5LkvY3nva5cbiAgICAgICAgICAgICAgICAgICAgJHRpcEdyb3VwLnN0eWxlLmJvdHRvbSA9IG9wdE9mZnNldC50b3AgKyBcInB4XCI7XG4gICAgICAgICAgICAgICAgICAgICR0aXBHcm91cC5zdHlsZS5yaWdodCA9IG9wdE9mZnNldC5sZWZ0ICsgXCJweFwiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiZGVmYXVsdFwiIDogICAgICAgICAgICAvL+m7mOiupOWdkOagh+WcqOWfuuWHhuWFg+e0oOeahOS4remXtOS9jee9rlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0IDogICAgICAgICAgICAgICAgICAgLy/lj6/mlK/mjIHoh6rlrprkuYlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICog5bey5byD55So44CC5pu/5Luj5pa55qGI5piv5qC55o2uU3ltYm9sIOiuvue9rnBhZGRpbmfvvIzliKnkuo7liqjnlLvmiafooYxcbiAqIFxuICog5aaC5p6c5ZCv5Yqoc3ltYm9s77yM6ICMc3ltYm9sIOS4jeWNoFRpcHMg5a695bqm5ZKM6auY5bqm44CCIOWImeWPr+agueaNrnN5bWJvbCBvZmZzZXQg5b6u6LCD5Z+65YeG5YWD57Sg5LiOVGlwcyDnmoTnm7jlr7nlrprkvY1cbiAqL1xudGlwcy5wcm90b3R5cGUuc2V0Q2xhc3NTeW1ib2xPZmZzZXQgPSBmdW5jdGlvbigpIHtcbiAgICAvLyDkuIDkuKrliIbnu4Tlj6rpnIDopoHorr7nva7kuIDmrKFzeW1ib2wgb2Zmc2V0XG4gICAgaWYodGhpcy5iYWNrdXAuX2dyb3VwLmlzRXhpc3RlZCA9PSB0cnVlKSByZXR1cm4gZmFsc2U7XG4gICAgaWYoIXRoaXMub3B0aW9ucy5zeW1ib2wpIHJldHVybiBmYWxzZTtcblxuICAgIGxldCAkdGlwR3JvdXAgPSB0aGlzLmJhY2t1cC5fdGlwR3JvdXBFbG07XG4gICAgbGV0IHRnU3R5bGUgPSBDLmdldFN0eWxlKCR0aXBHcm91cCk7XG4gICAgLy8g5LyY5YWI6K6+572ucG9zaXRpb24ub2Zmc2V0LCDmiYDku6XpnIDopoHlhYjorqHnrpflvZPliY3lrprkvY1cbiAgICBsZXQgdGdQb3NpdGlvbiA9IHtcbiAgICAgICAgdG9wOiBwYXJzZUZsb2F0KHRnU3R5bGUudG9wKSxcbiAgICAgICAgbGVmdDogcGFyc2VGbG9hdCh0Z1N0eWxlLmxlZnQpLFxuICAgICAgICByaWdodDogcGFyc2VGbG9hdCh0Z1N0eWxlLnJpZ2h0KSxcbiAgICAgICAgYm90dG9tOiBwYXJzZUZsb2F0KHRnU3R5bGUuYm90dG9tKSxcbiAgICB9XG5cbiAgICBpZih0aGlzLmlzQmFzZUJvZHlFbGVtZW50KCkpIHtcbiAgICAgICAgbGV0IHN5bWJvbFNpemUgPSB0aGlzLmdldFN5bWJvbFNpemUoKTtcblxuICAgICAgICBsZXQgc3ltYm9sUG9zaXRpb24gPSB0aGlzLm9wdGlvbnMuc3ltYm9sT3B0aW9ucy5wb3NpdGlvbiB8fCB0aGlzLm1hcFBvc2l0aW9uVG9TeW1ib2xQb3NpdGlvbih0aGlzLm9wdGlvbnMucG9zaXRpb24pO1xuICAgICAgICBpZihzeW1ib2xQb3NpdGlvbiAmJiB0eXBlb2Ygc3ltYm9sUG9zaXRpb24gPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHN3aXRjaChzeW1ib2xQb3NpdGlvbikge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ0b3AtbGVmdFwiIDogICAgICAgICAgIC8v5Z2Q5qCH5ZyoVGlwcyDnmoTlt6bkuIrop5LkvY3nva5cbiAgICAgICAgICAgICAgICBjYXNlIFwidG9wLWNlbnRlclwiIDogICAgICAgICAvL+WdkOagh+WcqFRpcHMg55qE5LiK5Lit5L2N572uXG4gICAgICAgICAgICAgICAgY2FzZSBcInRvcC1yaWdodFwiIDogICAgICAgICAgLy/lnZDmoIflnKhUaXBzIOeahOWPs+S4iuinkuS9jee9rlxuICAgICAgICAgICAgICAgICAgICAkdGlwR3JvdXAuc3R5bGUudG9wID0gdGdQb3NpdGlvbi50b3AgKyBzeW1ib2xTaXplLmhlaWdodCArIFwicHhcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInJpZ2h0LXRvcFwiIDogICAgICAgICAgLy/lnZDmoIflnKhUaXBzIOeahOS4iuWPs+inkuS9jee9rlxuICAgICAgICAgICAgICAgIGNhc2UgXCJjZW50ZXItcmlnaHRcIiA6ICAgICAgIC8v5Z2Q5qCH5ZyoVGlwcyDnmoTlj7PkuK3kvY3nva5cbiAgICAgICAgICAgICAgICBjYXNlIFwicmlnaHQtYm90dG9tXCIgOiAgICAgICAvL+WdkOagh+WcqFRpcHMg55qE5LiL5Y+z6KeS5L2N572uXG4gICAgICAgICAgICAgICAgICAgICR0aXBHcm91cC5zdHlsZS5yaWdodCA9IHRnUG9zaXRpb24ucmlnaHQgKyBzeW1ib2xTaXplLndpZHRoICsgXCJweFwiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiYm90dG9tLXJpZ2h0XCIgOiAgICAgICAvL+WdkOagh+WcqFRpcHMg55qE5Y+z5LiL6KeS5L2N572uXG4gICAgICAgICAgICAgICAgY2FzZSBcImJvdHRvbS1jZW50ZXJcIiA6ICAgICAgLy/lnZDmoIflnKhUaXBzIOeahOS4i+S4reS9jee9rlxuICAgICAgICAgICAgICAgIGNhc2UgXCJib3R0b20tbGVmdFwiIDogICAgICAgIC8v5Z2Q5qCH5ZyoVGlwcyDnmoTlt6bkuIvop5LkvY3nva5cbiAgICAgICAgICAgICAgICAgICAgJHRpcEdyb3VwLnN0eWxlLmJvdHRvbSA9IHRnUG9zaXRpb24uYm90dG9tICsgc3ltYm9sU2l6ZS5oZWlnaHQgKyBcInB4XCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJsZWZ0LWJvdHRvbVwiIDogICAgICAgIC8v5Z2Q5qCH5ZyoVGlwcyDnmoTkuIvlt6bop5LkvY3nva5cbiAgICAgICAgICAgICAgICBjYXNlIFwiY2VudGVyLWxlZnRcIiA6ICAgICAgICAvL+WdkOagh+WcqFRpcHMg55qE5bem5Lit5L2N572uXG4gICAgICAgICAgICAgICAgY2FzZSBcImxlZnQtdG9wXCIgOiAgICAgICAgICAgLy/lnZDmoIflnKhUaXBzIOeahOS4iuW3puinkuS9jee9rlxuICAgICAgICAgICAgICAgICAgICAkdGlwR3JvdXAuc3R5bGUubGVmdCA9IHRnUG9zaXRpb24ubGVmdCArIHN5bWJvbFNpemUud2lkdGggKyBcInB4XCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJtaWRkbGVcIiA6ICAgICAgICAgICAgIC8v5Z2Q5qCH5ZyoVGlwcyDnmoTkuK3pl7TkvY3nva5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdCA6ICAgICAgICAgICAgICAgICAgIC8v6buY6K6k5Z2Q5qCH5ZyoVGlwcyDnmoTkuK3pl7TkvY3nva5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogUG9zaXRpb24gRml4ZWQg5Y+q6ZyA6KaB6K6+572u5LiA5qyhIG9mZnNldFxuICovXG50aXBzLnByb3RvdHlwZS5zZXRDbGFzc09mZnNldCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmKCF0aGlzLmhhc093blByb3BlcnR5KCdoYXNTZXRDbGFzc09mZnNldCcpKSB7XG4gICAgICAgIHRoaXMuc2V0Q2xhc3NQb3NpdGlvbk9mZnNldCgpO1xuICAgICAgICAvLyB0aGlzLnNldENsYXNzU3ltYm9sT2Zmc2V0KCk7XG4gICAgICAgIHRoaXMuaGFzU2V0Q2xhc3NPZmZzZXQgPSB0cnVlO1xuICAgIH1cbn1cblxuLyoqXG4gKiDorqHnrpdUaXBz5L2N572u77yM5pSv5oyB54m55q6K5a6a5L2N77yM6Ieq5a6a5LmJ5YOP57Sg57qn5a6a5L2N5ZKM55m+5YiG5q+U5a6a5L2N77yM5pSv5oyBdG9wLGxlZnQsYm90dG9tLHJpZ2h0XG4gKiDlrprkvY3nu5PmnpzmmK90b3DlkoxsZWZ05a6a5L2N77yM5LiN6YeH55SoYm90dG9t5ZKMcmlnaHTlrprkvY1cbiAqIEBBdXRob3IgICBEZXZpblxuICogQERhdGVUaW1lIDIwMjAtMDEtMDlUMjE6MzU6NDcrMDgwMFxuICogQHBhcmFtICAgIHtbbWl4ZWRdfSAgICAgICAgICAgICAgbXlQb3NpdGlvbiAgIFtyZWxhdGl2ZSBwb3NpdGlvbiBvYmogb3IgcG9zaXRpb24gc3RyaW5nXVxuICogQHBhcmFtICAgIHtbQm9vbGVhbl19ICAgICAgICAgICAgY2FsY3VsYXRlVGlwIFtJZiBmYWxzZSwgZG8gbm90IGNhbGN1bGF0ZSBUaXBzIHdpZHRoIGFuZCBoZWlnaHRdXG4gKiBAcGFyYW0gICAge1tCb29sZWFuXX0gICAgICAgICAgICBmb3JjZSAgICAgICAgW0lmIHRydWUsIGdldCBwb3NpdGlvbiBzdHlsZSBmb3JjaWJseSBldmVuIGJhc2UgZWxlbWVudCBpcyBCT0RZXVxuICogQHJldHVybiAgIHtbT2JqZWN0XX0gICAgICAgICAgICAgW1Bvc2l0aW9uIG9iamVjdF1cbiAqL1xudGlwcy5wcm90b3R5cGUuZ2V0UG9zaXRpb25TdHlsZSA9IGZ1bmN0aW9uKG15UG9zaXRpb24sIGNhbGN1bGF0ZVRpcCwgZm9yY2UpIHtcbiAgICBpZigoKHRoaXMuaXNCYXNlQm9keUVsZW1lbnQoKSkgJiYgdHlwZW9mIG15UG9zaXRpb24gPT0gXCJzdHJpbmdcIikgJiYgIWZvcmNlKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBsZXQgdGlwUG9zaXRpb24gPSB7ICAgICAgICAgLy90aXAgcG9zaXRpb25cbiAgICAgICAgdG9wOiBcImF1dG9cIixcbiAgICAgICAgYm90dG9tOiBcImF1dG9cIixcbiAgICAgICAgbGVmdDogXCJhdXRvXCIsXG4gICAgICAgIHJpZ2h0OiBcImF1dG9cIlxuICAgIH07XG5cbiAgICAvL+iuoeeul3RpcOeahOWdkOagh1xuICAgIGlmKHR5cGVvZiBteVBvc2l0aW9uID09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgaWYodGhpcy5vcHRpb25zLmRpcmVjdGlvbiA9PSBcIm91dGVyXCIpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0UG9zU3R5bGVPdXRlcihteVBvc2l0aW9uLCBjYWxjdWxhdGVUaXAsIHRpcFBvc2l0aW9uKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nZXRQb3NTdHlsZUlubmVyKG15UG9zaXRpb24sIGNhbGN1bGF0ZVRpcCwgdGlwUG9zaXRpb24pO1xuICAgICAgICB9XG4gICAgfWVsc2UgeyAgICAgLy/oh6rlrprkuYnlnZDmoIfvvIzmlK/mjIHnmb7liIbmr5RcbiAgICAgICAgbGV0IHBvc1N0eWxlVHlwZSA9ICdnZXRQb3NTdHlsZScgKyB0aGlzLm9wdGlvbnMuZGlyZWN0aW9uLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5vcHRpb25zLmRpcmVjdGlvbi5zbGljZSgxKTtcbiAgICAgICAgaWYodGhpc1twb3NTdHlsZVR5cGVdKSB7XG4gICAgICAgICAgICB0aGlzW3Bvc1N0eWxlVHlwZV0obXlQb3NpdGlvbiwgY2FsY3VsYXRlVGlwLCB0aXBQb3NpdGlvbik7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0UG9zU3R5bGVJbm5lcihteVBvc2l0aW9uLCBjYWxjdWxhdGVUaXAsIHRpcFBvc2l0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2V0U3R5bGVQb3NpdGlvbk9mZnNldCh0aXBQb3NpdGlvbik7XG4gICAgLy8gdGhpcy5zZXRTdHlsZVN5bWJvbE9mZnNldCh0aXBQb3NpdGlvbik7XG5cbiAgICByZXR1cm4gdGlwUG9zaXRpb247XG59O1xuXG4vKipcbiAqIOWGhemDqOWumuS9jVxuICog5q2j5pWwIHRvcCwgbGVmdCwgYm90dG9tLCByaWdodCDooajnpLrlvoDln7rlh4blhYPntKDlhoXpg6jmlrnlkJHotbDvvIzotJ/mlbDooajnpLrnm7jlj43mlrnlkJFcbiAqL1xudGlwcy5wcm90b3R5cGUuZ2V0UG9zU3R5bGVJbm5lciA9IGZ1bmN0aW9uKG15UG9zaXRpb24sIGNhbGN1bGF0ZVRpcCwgdGlwUG9zaXRpb24pIHtcbiAgICBsZXQgcmVnTnVtID0gQy5yZWdOdW07XG4gICAgbGV0IHJlZ1BlciA9IEMucmVnUGVyO1xuICAgIGxldCByZWdQZXJOZWdhdGl2ZSA9IEMucmVnUGVyTmVnYXRpdmU7XG5cbiAgICBsZXQgZWxlRGV0YWlscyA9IHRoaXMuZ2V0RWxlbWVudERldGFpbHMoKTtcblxuICAgIGxldCB0aXBHcm91cFdpZHRoID0gZWxlRGV0YWlscy50aXBHcm91cFdpZHRoO1xuICAgIGxldCB0aXBHcm91cEhlaWdodCA9IGVsZURldGFpbHMudGlwR3JvdXBIZWlnaHQ7XG4gICAgaWYoY2FsY3VsYXRlVGlwID09PSBmYWxzZSkge1xuICAgICAgICB0aXBHcm91cFdpZHRoID0gMDtcbiAgICAgICAgdGlwR3JvdXBIZWlnaHQgPSAwO1xuICAgIH1cblxuICAgIGlmKHR5cGVvZiBteVBvc2l0aW9uID09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgc3dpdGNoKG15UG9zaXRpb24pIHtcbiAgICAgICAgICAgIGNhc2UgXCJ0b3AtbGVmdFwiIDogICAgICAgICAgIC8v5Z2Q5qCH5Zyo5Z+65YeG5YWD57Sg55qE5bem5LiK6KeS5L2N572uXG4gICAgICAgICAgICAgICAgdGlwUG9zaXRpb24udG9wID0gZWxlRGV0YWlscy5iYXNlVG9wICsgZWxlRGV0YWlscy5iYXNlQm9yZGVyVG9wV2lkdGg7XG4gICAgICAgICAgICAgICAgdGlwUG9zaXRpb24ubGVmdCA9IGVsZURldGFpbHMuYmFzZUxlZnQgKyBlbGVEZXRhaWxzLmJhc2VCb3JkZXJMZWZ0V2lkdGg7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwidG9wLWNlbnRlclwiIDogICAgICAgICAvL+WdkOagh+WcqOWfuuWHhuWFg+e0oOeahOS4iuS4reS9jee9rlxuICAgICAgICAgICAgICAgIHRpcFBvc2l0aW9uLnRvcCA9IGVsZURldGFpbHMuYmFzZVRvcCArIGVsZURldGFpbHMuYmFzZUJvcmRlclRvcFdpZHRoO1xuICAgICAgICAgICAgICAgIHRpcFBvc2l0aW9uLmxlZnQgPSBlbGVEZXRhaWxzLmJhc2VMZWZ0ICsgKGVsZURldGFpbHMuYmFzZVdpZHRoLzIgKyBlbGVEZXRhaWxzLmJhc2VCb3JkZXJMZWZ0V2lkdGggLSB0aXBHcm91cFdpZHRoLzIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInRvcC1yaWdodFwiIDogICAgICAgICAgLy/lnZDmoIflnKjln7rlh4blhYPntKDnmoTlj7PkuIrop5LkvY3nva5cbiAgICAgICAgICAgICAgICB0aXBQb3NpdGlvbi50b3AgPSBlbGVEZXRhaWxzLmJhc2VUb3AgKyBlbGVEZXRhaWxzLmJhc2VCb3JkZXJUb3BXaWR0aDtcbiAgICAgICAgICAgICAgICB0aXBQb3NpdGlvbi5sZWZ0ID0gZWxlRGV0YWlscy5iYXNlTGVmdCArIChlbGVEZXRhaWxzLmJhc2VCb3JkZXJMZWZ0V2lkdGggKyBlbGVEZXRhaWxzLmJhc2VXaWR0aCkgLSB0aXBHcm91cFdpZHRoO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImNlbnRlci1sZWZ0XCIgOiAgICAgICAgLy/lnZDmoIflnKjln7rlh4blhYPntKDnmoTlt6bkuK3kvY3nva5cbiAgICAgICAgICAgICAgICB0aXBQb3NpdGlvbi50b3AgPSBlbGVEZXRhaWxzLmJhc2VUb3AgKyAoZWxlRGV0YWlscy5iYXNlSGVpZ2h0LzIgKyBlbGVEZXRhaWxzLmJhc2VCb3JkZXJUb3BXaWR0aCAtIHRpcEdyb3VwSGVpZ2h0LzIpO1xuICAgICAgICAgICAgICAgIHRpcFBvc2l0aW9uLmxlZnQgPSBlbGVEZXRhaWxzLmJhc2VMZWZ0ICsgZWxlRGV0YWlscy5iYXNlQm9yZGVyTGVmdFdpZHRoO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIm1pZGRsZVwiIDogICAgICAgICAgICAgLy/lnZDmoIflnKjln7rlh4blhYPntKDnmoTkuK3pl7TkvY3nva5cbiAgICAgICAgICAgICAgICB0aXBQb3NpdGlvbi50b3AgPSBlbGVEZXRhaWxzLmJhc2VUb3AgKyAoZWxlRGV0YWlscy5iYXNlSGVpZ2h0LzIgKyBlbGVEZXRhaWxzLmJhc2VCb3JkZXJUb3BXaWR0aCAtIHRpcEdyb3VwSGVpZ2h0LzIpO1xuICAgICAgICAgICAgICAgIHRpcFBvc2l0aW9uLmxlZnQgPSBlbGVEZXRhaWxzLmJhc2VMZWZ0ICsgKGVsZURldGFpbHMuYmFzZVdpZHRoLzIgKyBlbGVEZXRhaWxzLmJhc2VCb3JkZXJMZWZ0V2lkdGggLSB0aXBHcm91cFdpZHRoLzIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImNlbnRlci1yaWdodFwiIDogICAgICAgLy/lnZDmoIflnKjln7rlh4blhYPntKDnmoTlj7PkuK3kvY3nva5cbiAgICAgICAgICAgICAgICB0aXBQb3NpdGlvbi50b3AgPSBlbGVEZXRhaWxzLmJhc2VUb3AgKyAoZWxlRGV0YWlscy5iYXNlSGVpZ2h0LzIgKyBlbGVEZXRhaWxzLmJhc2VCb3JkZXJUb3BXaWR0aCAtIHRpcEdyb3VwSGVpZ2h0LzIpO1xuICAgICAgICAgICAgICAgIHRpcFBvc2l0aW9uLmxlZnQgPSBlbGVEZXRhaWxzLmJhc2VMZWZ0ICsgKGVsZURldGFpbHMuYmFzZUJvcmRlckxlZnRXaWR0aCArIGVsZURldGFpbHMuYmFzZVdpZHRoKSAtIHRpcEdyb3VwV2lkdGg7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYm90dG9tLWxlZnRcIiA6ICAgICAgICAvL+WdkOagh+WcqOWfuuWHhuWFg+e0oOeahOW3puS4i+inkuS9jee9rlxuICAgICAgICAgICAgICAgIHRpcFBvc2l0aW9uLnRvcCA9IGVsZURldGFpbHMuYmFzZVRvcCArIChlbGVEZXRhaWxzLmJhc2VCb3JkZXJUb3BXaWR0aCArIGVsZURldGFpbHMuYmFzZUhlaWdodCkgLSB0aXBHcm91cEhlaWdodDtcbiAgICAgICAgICAgICAgICB0aXBQb3NpdGlvbi5sZWZ0ID0gZWxlRGV0YWlscy5iYXNlTGVmdCArIGVsZURldGFpbHMuYmFzZUJvcmRlckxlZnRXaWR0aDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJib3R0b20tY2VudGVyXCIgOiAgICAgIC8v5Z2Q5qCH5Zyo5Z+65YeG5YWD57Sg55qE5LiL5Lit5L2N572uXG4gICAgICAgICAgICAgICAgdGlwUG9zaXRpb24udG9wID0gZWxlRGV0YWlscy5iYXNlVG9wICsgKGVsZURldGFpbHMuYmFzZUJvcmRlclRvcFdpZHRoICsgZWxlRGV0YWlscy5iYXNlSGVpZ2h0KSAtIHRpcEdyb3VwSGVpZ2h0O1xuICAgICAgICAgICAgICAgIHRpcFBvc2l0aW9uLmxlZnQgPSBlbGVEZXRhaWxzLmJhc2VMZWZ0ICsgKGVsZURldGFpbHMuYmFzZVdpZHRoLzIgKyBlbGVEZXRhaWxzLmJhc2VCb3JkZXJMZWZ0V2lkdGggLSB0aXBHcm91cFdpZHRoLzIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImJvdHRvbS1yaWdodFwiIDogICAgICAgLy/lnZDmoIflnKjln7rlh4blhYPntKDnmoTlj7PkuIvop5LkvY3nva5cbiAgICAgICAgICAgICAgICB0aXBQb3NpdGlvbi50b3AgPSBlbGVEZXRhaWxzLmJhc2VUb3AgKyAoZWxlRGV0YWlscy5iYXNlQm9yZGVyVG9wV2lkdGggKyBlbGVEZXRhaWxzLmJhc2VIZWlnaHQpIC0gdGlwR3JvdXBIZWlnaHQ7XG4gICAgICAgICAgICAgICAgdGlwUG9zaXRpb24ubGVmdCA9IGVsZURldGFpbHMuYmFzZUxlZnQgKyAoZWxlRGV0YWlscy5iYXNlQm9yZGVyTGVmdFdpZHRoICsgZWxlRGV0YWlscy5iYXNlV2lkdGgpIC0gdGlwR3JvdXBXaWR0aDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQgOiAgICAgICAgICAgICAgICAgICAvL+m7mOiupOWdkOagh+WcqOWfuuWHhuWFg+e0oOeahOS4remXtOS9jee9rlxuICAgICAgICAgICAgICAgIHRpcFBvc2l0aW9uLnRvcCA9IGVsZURldGFpbHMuYmFzZVRvcCArIChlbGVEZXRhaWxzLmJhc2VIZWlnaHQvMiArIGVsZURldGFpbHMuYmFzZUJvcmRlclRvcFdpZHRoIC0gdGlwR3JvdXBIZWlnaHQvMik7XG4gICAgICAgICAgICAgICAgdGlwUG9zaXRpb24ubGVmdCA9IGVsZURldGFpbHMuYmFzZUxlZnQgKyAoZWxlRGV0YWlscy5iYXNlV2lkdGgvMiArIGVsZURldGFpbHMuYmFzZUJvcmRlckxlZnRXaWR0aCAtIHRpcEdyb3VwV2lkdGgvMik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGlwUG9zaXRpb247XG4gICAgfVxuXG4gICAgaWYobXlQb3NpdGlvbi5oYXNPd25Qcm9wZXJ0eSgnYm90dG9tJykgJiYgcmVnTnVtLnRlc3QobXlQb3NpdGlvbi5ib3R0b20pKSB7XG4gICAgICAgIHRpcFBvc2l0aW9uLnRvcCA9IGVsZURldGFpbHMuYmFzZVRvcCArIGVsZURldGFpbHMuYmFzZUJvcmRlclRvcFdpZHRoICsgZWxlRGV0YWlscy5iYXNlSGVpZ2h0IC0gdGlwR3JvdXBIZWlnaHQgLSBwYXJzZUZsb2F0KG15UG9zaXRpb24uYm90dG9tKTtcbiAgICB9ZWxzZSBpZihteVBvc2l0aW9uLmhhc093blByb3BlcnR5KCdib3R0b20nKSAmJiByZWdQZXIudGVzdChteVBvc2l0aW9uLmJvdHRvbSkpIHtcbiAgICAgICAgbGV0IGJvdHRvbSA9IChlbGVEZXRhaWxzLmJhc2VIZWlnaHQgLSB0aXBHcm91cEhlaWdodCkgKiBwYXJzZUZsb2F0KG15UG9zaXRpb24uYm90dG9tKS8xMDA7XG4gICAgICAgIHRpcFBvc2l0aW9uLnRvcCA9IGVsZURldGFpbHMuYmFzZVRvcCArIGVsZURldGFpbHMuYmFzZUJvcmRlclRvcFdpZHRoICsgZWxlRGV0YWlscy5iYXNlSGVpZ2h0IC0gdGlwR3JvdXBIZWlnaHQgLSBib3R0b207XG4gICAgfWVsc2UgaWYobXlQb3NpdGlvbi5oYXNPd25Qcm9wZXJ0eSgndG9wJykgJiYgcmVnTnVtLnRlc3QobXlQb3NpdGlvbi50b3ApKSB7XG4gICAgICAgIHRpcFBvc2l0aW9uLnRvcCA9IGVsZURldGFpbHMuYmFzZVRvcCArIGVsZURldGFpbHMuYmFzZUJvcmRlclRvcFdpZHRoICsgcGFyc2VGbG9hdChteVBvc2l0aW9uLnRvcCk7XG4gICAgfWVsc2UgaWYobXlQb3NpdGlvbi5oYXNPd25Qcm9wZXJ0eSgndG9wJykgJiYgcmVnUGVyLnRlc3QobXlQb3NpdGlvbi50b3ApKSB7XG4gICAgICAgIGxldCB0b3AgPSAoZWxlRGV0YWlscy5iYXNlSGVpZ2h0IC0gdGlwR3JvdXBIZWlnaHQpICogcGFyc2VGbG9hdChteVBvc2l0aW9uLnRvcCkvMTAwO1xuICAgICAgICB0aXBQb3NpdGlvbi50b3AgPSBlbGVEZXRhaWxzLmJhc2VUb3AgKyBlbGVEZXRhaWxzLmJhc2VCb3JkZXJUb3BXaWR0aCArIHRvcDtcbiAgICB9XG5cbiAgICBpZihteVBvc2l0aW9uLmhhc093blByb3BlcnR5KCdyaWdodCcpICYmIHJlZ051bS50ZXN0KG15UG9zaXRpb24ucmlnaHQpKSB7XG4gICAgICAgIHRpcFBvc2l0aW9uLmxlZnQgPSBlbGVEZXRhaWxzLmJhc2VMZWZ0ICsgZWxlRGV0YWlscy5iYXNlQm9yZGVyTGVmdFdpZHRoICsgZWxlRGV0YWlscy5iYXNlV2lkdGggLSB0aXBHcm91cFdpZHRoIC0gcGFyc2VGbG9hdChteVBvc2l0aW9uLnJpZ2h0KTtcbiAgICB9ZWxzZSBpZihteVBvc2l0aW9uLmhhc093blByb3BlcnR5KCdyaWdodCcpICYmIHJlZ1Blci50ZXN0KG15UG9zaXRpb24ucmlnaHQpKSB7XG4gICAgICAgIGxldCByaWdodCA9IChlbGVEZXRhaWxzLmJhc2VXaWR0aCAtIHRpcEdyb3VwV2lkdGgpICogcGFyc2VGbG9hdChteVBvc2l0aW9uLnJpZ2h0KS8xMDA7XG4gICAgICAgIHRpcFBvc2l0aW9uLmxlZnQgPSBlbGVEZXRhaWxzLmJhc2VMZWZ0ICsgZWxlRGV0YWlscy5iYXNlQm9yZGVyTGVmdFdpZHRoICsgZWxlRGV0YWlscy5iYXNlV2lkdGggLSB0aXBHcm91cFdpZHRoIC0gcmlnaHQ7XG4gICAgfWVsc2UgaWYobXlQb3NpdGlvbi5oYXNPd25Qcm9wZXJ0eSgnbGVmdCcpICYmIHJlZ051bS50ZXN0KG15UG9zaXRpb24ubGVmdCkpIHtcbiAgICAgICAgdGlwUG9zaXRpb24ubGVmdCA9IGVsZURldGFpbHMuYmFzZUxlZnQgKyBlbGVEZXRhaWxzLmJhc2VCb3JkZXJMZWZ0V2lkdGggKyBwYXJzZUZsb2F0KG15UG9zaXRpb24ubGVmdCk7XG4gICAgfWVsc2UgaWYobXlQb3NpdGlvbi5oYXNPd25Qcm9wZXJ0eSgnbGVmdCcpICYmIHJlZ1Blci50ZXN0KG15UG9zaXRpb24ubGVmdCkpIHtcbiAgICAgICAgbGV0IGxlZnQgPSAoZWxlRGV0YWlscy5iYXNlV2lkdGggLSB0aXBHcm91cFdpZHRoKSAqIHBhcnNlRmxvYXQobXlQb3NpdGlvbi5sZWZ0KS8xMDA7XG4gICAgICAgIHRpcFBvc2l0aW9uLmxlZnQgPSBlbGVEZXRhaWxzLmJhc2VMZWZ0ICsgZWxlRGV0YWlscy5iYXNlQm9yZGVyTGVmdFdpZHRoICsgbGVmdDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGlwUG9zaXRpb247XG59XG5cbi8qKlxuICog5pmu6YCa5a6a5L2NXG4gKiDmraPmlbAgdG9wLCBsZWZ0IOihqOekuuW+gOWfuuWHhuWFg+e0oOWGhemDqOaWueWQkei1sO+8jOi0n+aVsOihqOekuuebuOWPjeaWueWQke+8jOS4juWGhemDqOWumuS9jeebuOWQjFxuICog5q2j5pWwIGJvdHRvbe+8jHJpZ2h0IOihqOekuuS7peWfuuWHhuWFg+e0oOWklumDqOaWueWQkei1sO+8jOi0n+aVsOihqOekuuebuOWPjeaWueWQke+8jOS4juWGhemDqOaWueWQkeebuOWPjVxuICovXG50aXBzLnByb3RvdHlwZS5nZXRQb3NTdHlsZU5vcm1hbCA9IGZ1bmN0aW9uKG15UG9zaXRpb24sIGNhbGN1bGF0ZVRpcCwgdGlwUG9zaXRpb24pIHtcbiAgICBsZXQgcmVnTnVtID0gQy5yZWdOdW07XG4gICAgbGV0IHJlZ1BlciA9IEMucmVnUGVyO1xuICAgIGxldCByZWdQZXJOZWdhdGl2ZSA9IEMucmVnUGVyTmVnYXRpdmU7XG5cbiAgICBsZXQgZWxlRGV0YWlscyA9IHRoaXMuZ2V0RWxlbWVudERldGFpbHMoKTtcblxuICAgIGxldCB0aXBHcm91cFdpZHRoID0gZWxlRGV0YWlscy50aXBHcm91cFdpZHRoO1xuICAgIGxldCB0aXBHcm91cEhlaWdodCA9IGVsZURldGFpbHMudGlwR3JvdXBIZWlnaHQ7XG4gICAgaWYoY2FsY3VsYXRlVGlwID09PSBmYWxzZSkge1xuICAgICAgICB0aXBHcm91cFdpZHRoID0gMDtcbiAgICAgICAgdGlwR3JvdXBIZWlnaHQgPSAwO1xuICAgIH1cblxuICAgIGlmKG15UG9zaXRpb24uaGFzT3duUHJvcGVydHkoJ2JvdHRvbScpICAmJiByZWdOdW0udGVzdChteVBvc2l0aW9uLmJvdHRvbSkpIHtcbiAgICAgICAgdGlwUG9zaXRpb24udG9wID0gZWxlRGV0YWlscy5iYXNlVG9wICsgZWxlRGV0YWlscy5iYXNlSGVpZ2h0ICsgZWxlRGV0YWlscy5iYXNlQm9yZGVyVG9wV2lkdGggKyBlbGVEZXRhaWxzLmJhc2VCb3JkZXJCb3R0b21XaWR0aCArIHBhcnNlRmxvYXQobXlQb3NpdGlvbi5ib3R0b20pO1xuICAgIH1lbHNlIGlmKG15UG9zaXRpb24uaGFzT3duUHJvcGVydHkoJ2JvdHRvbScpICYmIHJlZ1Blci50ZXN0KG15UG9zaXRpb24uYm90dG9tKSkge1xuICAgICAgICBsZXQgYmFzZUhlaWdodCA9IEMubnVtQWRkcyhlbGVEZXRhaWxzLmJhc2VIZWlnaHQsIGVsZURldGFpbHMuYmFzZUJvcmRlclRvcFdpZHRoLCBlbGVEZXRhaWxzLmJhc2VCb3JkZXJCb3R0b21XaWR0aCk7XG4gICAgICAgIGxldCBib3R0b20gPSBDLm51bU11bChiYXNlSGVpZ2h0LCBDLm51bURpdihwYXJzZUZsb2F0KG15UG9zaXRpb24uYm90dG9tKSwgMTAwKSk7XG4gICAgICAgIHRpcFBvc2l0aW9uLnRvcCA9IEMubnVtQWRkcyhlbGVEZXRhaWxzLmJhc2VUb3AsIGJhc2VIZWlnaHQsIGJvdHRvbSk7XG4gICAgfWVsc2UgaWYobXlQb3NpdGlvbi5oYXNPd25Qcm9wZXJ0eSgndG9wJykgJiYgcmVnTnVtLnRlc3QobXlQb3NpdGlvbi50b3ApKSB7XG4gICAgICAgIHRpcFBvc2l0aW9uLnRvcCA9IGVsZURldGFpbHMuYmFzZVRvcCArIGVsZURldGFpbHMuYmFzZUJvcmRlclRvcFdpZHRoICsgcGFyc2VGbG9hdChteVBvc2l0aW9uLnRvcCk7XG4gICAgfWVsc2UgaWYobXlQb3NpdGlvbi5oYXNPd25Qcm9wZXJ0eSgndG9wJykgJiYgcmVnUGVyLnRlc3QobXlQb3NpdGlvbi50b3ApKSB7XG4gICAgICAgIGxldCB0b3AgPSAoZWxlRGV0YWlscy5iYXNlSGVpZ2h0IC0gdGlwR3JvdXBIZWlnaHQpICogcGFyc2VGbG9hdChteVBvc2l0aW9uLnRvcCkvMTAwO1xuICAgICAgICB0aXBQb3NpdGlvbi50b3AgPSBlbGVEZXRhaWxzLmJhc2VUb3AgKyBlbGVEZXRhaWxzLmJhc2VCb3JkZXJUb3BXaWR0aCArIHRvcDtcbiAgICB9XG5cbiAgICBpZihteVBvc2l0aW9uLmhhc093blByb3BlcnR5KCdyaWdodCcpICAmJiByZWdOdW0udGVzdChteVBvc2l0aW9uLnJpZ2h0KSkge1xuICAgICAgICB0aXBQb3NpdGlvbi5sZWZ0ID0gQy5udW1BZGRzKGVsZURldGFpbHMuYmFzZUxlZnQsIGVsZURldGFpbHMuYmFzZVdpZHRoLCBlbGVEZXRhaWxzLmJhc2VCb3JkZXJMZWZ0V2lkdGgsIGVsZURldGFpbHMuYmFzZUJvcmRlclJpZ2h0V2lkdGgsIHBhcnNlRmxvYXQobXlQb3NpdGlvbi5yaWdodCkpO1xuICAgIH1lbHNlIGlmKG15UG9zaXRpb24uaGFzT3duUHJvcGVydHkoJ3JpZ2h0JykgJiYgcmVnUGVyLnRlc3QobXlQb3NpdGlvbi5yaWdodCkpIHtcbiAgICAgICAgbGV0IGJhc2VXaWR0aCA9IEMubnVtQWRkcyhlbGVEZXRhaWxzLmJhc2VXaWR0aCwgZWxlRGV0YWlscy5iYXNlQm9yZGVyTGVmdFdpZHRoLCBlbGVEZXRhaWxzLmJhc2VCb3JkZXJSaWdodFdpZHRoKTtcbiAgICAgICAgbGV0IHJpZ2h0ID0gQy5udW1NdWwoYmFzZVdpZHRoLCBDLm51bURpdihwYXJzZUZsb2F0KG15UG9zaXRpb24ucmlnaHQpLCAxMDApKTtcbiAgICAgICAgdGlwUG9zaXRpb24ubGVmdCA9IEMubnVtQWRkcyhlbGVEZXRhaWxzLmJhc2VMZWZ0LCBiYXNlV2lkdGgsIHJpZ2h0KTtcbiAgICB9ZWxzZSBpZihteVBvc2l0aW9uLmhhc093blByb3BlcnR5KCdsZWZ0JykgJiYgcmVnTnVtLnRlc3QobXlQb3NpdGlvbi5sZWZ0KSkge1xuICAgICAgICB0aXBQb3NpdGlvbi5sZWZ0ID0gZWxlRGV0YWlscy5iYXNlTGVmdCArIGVsZURldGFpbHMuYmFzZUJvcmRlckxlZnRXaWR0aCArIHBhcnNlRmxvYXQobXlQb3NpdGlvbi5sZWZ0KTtcbiAgICB9ZWxzZSBpZihteVBvc2l0aW9uLmhhc093blByb3BlcnR5KCdsZWZ0JykgJiYgcmVnUGVyLnRlc3QobXlQb3NpdGlvbi5sZWZ0KSkge1xuICAgICAgICBsZXQgbGVmdCA9IChlbGVEZXRhaWxzLmJhc2VXaWR0aCAtIHRpcEdyb3VwV2lkdGgpICogcGFyc2VGbG9hdChteVBvc2l0aW9uLmxlZnQpLzEwMDtcbiAgICAgICAgdGlwUG9zaXRpb24ubGVmdCA9IGVsZURldGFpbHMuYmFzZUxlZnQgKyBlbGVEZXRhaWxzLmJhc2VCb3JkZXJMZWZ0V2lkdGggKyBsZWZ0O1xuICAgIH1cblxuICAgIHJldHVybiB0aXBQb3NpdGlvbjtcbn1cblxuLyoqXG4gKiDlpJbpg6jlrprkvY3vvIzmiYDmnInlrprkvY3ku6Xln7rlh4blhYPntKDlpJbkuLrlh4bvvIznmb7liIbmr5Tln7rlh4bkuZ/mmK/ln7rlh4blhYPntKBcbiAqIHRvcCwgbGVmdCwgYm90dG9tLCByaWdodCDpg73mmK/ku6Xln7rlh4blhYPntKDnmoTlr7nlupTovrnmoYbkuLrlh4bvvIzkuJTlv73nlaXovrnmoYbljprluqZcbiAqIOavlOWmgnRvcO+8jOato+aVsFjml7bvvIzooajnpLpUaXAg5bqV6YOo6auY5LqO5Z+65YeG5YWD57Sg55qE6aG26YOoIFjvvJvotJ/mlbAtWOaXtu+8jOihqOekuuWfuuWHhuWFg+e0oOmhtumDqOS9juS6jlRpcOmhtumDqCBYXG4gKi9cbnRpcHMucHJvdG90eXBlLmdldFBvc1N0eWxlT3V0c2lkZSA9IGZ1bmN0aW9uKG15UG9zaXRpb24sIGNhbGN1bGF0ZVRpcCwgdGlwUG9zaXRpb24pIHtcbiAgICBsZXQgcmVnTnVtID0gQy5yZWdOdW07XG4gICAgbGV0IHJlZ051bU5lZ2F0aXZlID0gQy5yZWdOdW1OZWdhdGl2ZTtcbiAgICBsZXQgcmVnUGVyID0gQy5yZWdQZXI7XG4gICAgbGV0IHJlZ1Blck5lZ2F0aXZlID0gQy5yZWdQZXJOZWdhdGl2ZTtcblxuICAgIGxldCBlbGVEZXRhaWxzID0gdGhpcy5nZXRFbGVtZW50RGV0YWlscygpO1xuXG4gICAgbGV0IHRpcEdyb3VwV2lkdGggPSBlbGVEZXRhaWxzLnRpcEdyb3VwV2lkdGg7XG4gICAgbGV0IHRpcEdyb3VwSGVpZ2h0ID0gZWxlRGV0YWlscy50aXBHcm91cEhlaWdodDtcbiAgICBpZihjYWxjdWxhdGVUaXAgPT09IGZhbHNlKSB7XG4gICAgICAgIHRpcEdyb3VwV2lkdGggPSAwO1xuICAgICAgICB0aXBHcm91cEhlaWdodCA9IDA7XG4gICAgfVxuXG4gICAgaWYobXlQb3NpdGlvbi5oYXNPd25Qcm9wZXJ0eSgnYm90dG9tJykgJiYgcmVnTnVtLnRlc3QobXlQb3NpdGlvbi5ib3R0b20pKSB7XG4gICAgICAgIHRpcFBvc2l0aW9uLnRvcCA9IGVsZURldGFpbHMuYmFzZVRvcCArIGVsZURldGFpbHMuYmFzZUJvcmRlclRvcFdpZHRoICsgZWxlRGV0YWlscy5iYXNlSGVpZ2h0ICsgZWxlRGV0YWlscy5iYXNlQm9yZGVyQm90dG9tV2lkdGggKyBwYXJzZUZsb2F0KG15UG9zaXRpb24uYm90dG9tKTtcbiAgICAgICAgaWYocmVnTnVtTmVnYXRpdmUudGVzdChteVBvc2l0aW9uLmJvdHRvbSkpIHtcbiAgICAgICAgICAgIHRpcFBvc2l0aW9uLnRvcCAtPSBlbGVEZXRhaWxzLmJhc2VCb3JkZXJCb3R0b21XaWR0aDtcbiAgICAgICAgfVxuICAgIH1lbHNlIGlmKG15UG9zaXRpb24uaGFzT3duUHJvcGVydHkoJ2JvdHRvbScpICYmIHJlZ1Blci50ZXN0KG15UG9zaXRpb24uYm90dG9tKSkge1xuICAgICAgICBsZXQgYm90dG9tID0gZWxlRGV0YWlscy5iYXNlSGVpZ2h0ICogcGFyc2VGbG9hdChteVBvc2l0aW9uLmJvdHRvbSkvMTAwO1xuICAgICAgICB0aXBQb3NpdGlvbi50b3AgPSBlbGVEZXRhaWxzLmJhc2VUb3AgKyBlbGVEZXRhaWxzLmJhc2VCb3JkZXJUb3BXaWR0aCArIGVsZURldGFpbHMuYmFzZUJvcmRlckJvdHRvbVdpZHRoICsgZWxlRGV0YWlscy5iYXNlSGVpZ2h0ICsgYm90dG9tO1xuICAgICAgICBpZihyZWdQZXJOZWdhdGl2ZS50ZXN0KG15UG9zaXRpb24uYm90dG9tKSkge1xuICAgICAgICAgICAgdGlwUG9zaXRpb24udG9wIC09IGVsZURldGFpbHMuYmFzZUJvcmRlckJvdHRvbVdpZHRoO1xuICAgICAgICB9XG4gICAgfWVsc2UgaWYobXlQb3NpdGlvbi5oYXNPd25Qcm9wZXJ0eSgndG9wJykgJiYgcmVnTnVtLnRlc3QobXlQb3NpdGlvbi50b3ApKSB7XG4gICAgICAgIHRpcFBvc2l0aW9uLnRvcCA9IGVsZURldGFpbHMuYmFzZVRvcCAtIHRpcEdyb3VwSGVpZ2h0IC0gcGFyc2VGbG9hdChteVBvc2l0aW9uLnRvcCk7XG4gICAgICAgIGlmKHJlZ051bU5lZ2F0aXZlLnRlc3QobXlQb3NpdGlvbi50b3ApKSB7XG4gICAgICAgICAgICB0aXBQb3NpdGlvbi50b3AgPSB0aXBQb3NpdGlvbi50b3AgKyB0aXBHcm91cEhlaWdodCArIGVsZURldGFpbHMuYmFzZUJvcmRlclRvcFdpZHRoO1xuICAgICAgICB9XG4gICAgfWVsc2UgaWYobXlQb3NpdGlvbi5oYXNPd25Qcm9wZXJ0eSgndG9wJykgJiYgcmVnUGVyLnRlc3QobXlQb3NpdGlvbi50b3ApKSB7XG4gICAgICAgIGxldCB0b3AgPSBlbGVEZXRhaWxzLmJhc2VIZWlnaHQgKiBwYXJzZUZsb2F0KG15UG9zaXRpb24udG9wKS8xMDA7XG4gICAgICAgIHRpcFBvc2l0aW9uLnRvcCA9IGVsZURldGFpbHMuYmFzZVRvcCAtIHRvcDtcbiAgICAgICAgaWYocmVnUGVyTmVnYXRpdmUudGVzdChteVBvc2l0aW9uLnRvcCkpIHtcbiAgICAgICAgICAgIHRpcFBvc2l0aW9uLnRvcCA9IHRpcFBvc2l0aW9uLnRvcCArIGVsZURldGFpbHMuYmFzZUJvcmRlclRvcFdpZHRoO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYobXlQb3NpdGlvbi5oYXNPd25Qcm9wZXJ0eSgncmlnaHQnKSAmJiByZWdOdW0udGVzdChteVBvc2l0aW9uLnJpZ2h0KSkge1xuICAgICAgICB0aXBQb3NpdGlvbi5sZWZ0ID0gZWxlRGV0YWlscy5iYXNlTGVmdCArIGVsZURldGFpbHMuYmFzZUJvcmRlckxlZnRXaWR0aCArIGVsZURldGFpbHMuYmFzZVdpZHRoICsgZWxlRGV0YWlscy5iYXNlQm9yZGVyUmlnaHRXaWR0aCArIHBhcnNlRmxvYXQobXlQb3NpdGlvbi5yaWdodCk7XG4gICAgICAgIGlmKHJlZ051bU5lZ2F0aXZlLnRlc3QobXlQb3NpdGlvbi5yaWdodCkpIHtcbiAgICAgICAgICAgIHRpcFBvc2l0aW9uLmxlZnQgPSB0aXBQb3NpdGlvbi5sZWZ0IC0gdGlwR3JvdXBXaWR0aCAtIGVsZURldGFpbHMuYmFzZUJvcmRlclJpZ2h0V2lkdGg7XG4gICAgICAgIH1cbiAgICB9ZWxzZSBpZihteVBvc2l0aW9uLmhhc093blByb3BlcnR5KCdyaWdodCcpICYmIHJlZ1Blci50ZXN0KG15UG9zaXRpb24ucmlnaHQpKSB7XG4gICAgICAgIGxldCByaWdodCA9IGVsZURldGFpbHMuYmFzZVdpZHRoICogcGFyc2VGbG9hdChteVBvc2l0aW9uLnJpZ2h0KS8xMDA7XG4gICAgICAgIHRpcFBvc2l0aW9uLmxlZnQgPSBlbGVEZXRhaWxzLmJhc2VMZWZ0ICsgZWxlRGV0YWlscy5iYXNlQm9yZGVyTGVmdFdpZHRoICsgZWxlRGV0YWlscy5iYXNlV2lkdGggKyByaWdodDtcbiAgICAgICAgaWYocmVnUGVyTmVnYXRpdmUudGVzdChteVBvc2l0aW9uLnJpZ2h0KSkge1xuICAgICAgICAgICAgdGlwUG9zaXRpb24ubGVmdCA9IHRpcFBvc2l0aW9uLmxlZnQgLSB0aXBHcm91cFdpZHRoIC0gZWxlRGV0YWlscy5iYXNlQm9yZGVyUmlnaHRXaWR0aDtcbiAgICAgICAgfVxuICAgIH1lbHNlIGlmKG15UG9zaXRpb24uaGFzT3duUHJvcGVydHkoJ2xlZnQnKSAmJiByZWdOdW0udGVzdChteVBvc2l0aW9uLmxlZnQpKSB7XG4gICAgICAgIHRpcFBvc2l0aW9uLmxlZnQgPSBlbGVEZXRhaWxzLmJhc2VMZWZ0IC0gdGlwR3JvdXBXaWR0aCAtIHBhcnNlRmxvYXQobXlQb3NpdGlvbi5sZWZ0KTtcbiAgICAgICAgaWYocmVnTnVtTmVnYXRpdmUudGVzdChteVBvc2l0aW9uLmxlZnQpKSB7XG4gICAgICAgICAgICB0aXBQb3NpdGlvbi5sZWZ0ID0gdGlwUG9zaXRpb24ubGVmdCArIHRpcEdyb3VwV2lkdGggKyBlbGVEZXRhaWxzLmJhc2VCb3JkZXJMZWZ0V2lkdGg7XG4gICAgICAgIH1cbiAgICB9ZWxzZSBpZihteVBvc2l0aW9uLmhhc093blByb3BlcnR5KCdsZWZ0JykgJiYgcmVnUGVyLnRlc3QobXlQb3NpdGlvbi5sZWZ0KSkge1xuICAgICAgICBsZXQgbGVmdCA9IGVsZURldGFpbHMuYmFzZVdpZHRoICogcGFyc2VGbG9hdChteVBvc2l0aW9uLmxlZnQpLzEwMDtcbiAgICAgICAgdGlwUG9zaXRpb24ubGVmdCA9IGVsZURldGFpbHMuYmFzZUxlZnQgLSB0aXBHcm91cFdpZHRoIC0gbGVmdDtcbiAgICAgICAgaWYocmVnUGVyTmVnYXRpdmUudGVzdChteVBvc2l0aW9uLmxlZnQpKSB7XG4gICAgICAgICAgICB0aXBQb3NpdGlvbi5sZWZ0ID0gdGlwUG9zaXRpb24ubGVmdCArIHRpcEdyb3VwV2lkdGggKyBlbGVEZXRhaWxzLmJhc2VCb3JkZXJMZWZ0V2lkdGg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGlwUG9zaXRpb247XG59XG5cbi8qKlxuICog5aSW5Zu05a6a5L2NXG4gKiDlvZPnmb7liIbmr5TkuLrmraPmlbDml7Yo5LuO5aSW6YOo6L+c56a75Z+65YeG5YWD57SgKe+8jOeZvuWIhuavlOWfuuWHhuaYr1RpcHPlhYPntKBcbiAqIOW9k+eZvuWIhuavlOS4uui0n+aVsOaXtijku47lhoXpg6jov5znprvln7rlh4blhYPntKAp77yM55m+5YiG5q+U5Z+65YeG5piv5Z+65YeG5YWD57SgXG4gKiB0b3AsIGxlZnQsIGJvdHRvbSwgcmlnaHQg6YO95piv5Lul5Z+65YeG5YWD57Sg55qE5a+55bqU6L655qGG5Li65YeG77yM5LiU5b+955Wl6L655qGG5Y6a5bqmXG4gKiDmr5TlpoJ0b3DvvIzmraPmlbBYJeaXtu+8jOihqOekulRpcCDpobbpg6jpq5jkuo7ln7rlh4blhYPntKDnmoTpobbpg6ggVGlwc+mrmOW6pipYJe+8m+i0n+aVsC1YJeaXtu+8jOihqOekulRpcCDkuK3lv4PkvY7kuo7ln7rlh4blhYPntKDnmoTpobbpg6gg5Z+65YeG5YWD57Sg6auY5bqmKlglXG4gKi9cbnRpcHMucHJvdG90eXBlLmdldFBvc1N0eWxlT3V0ZXIgPSBmdW5jdGlvbihteVBvc2l0aW9uLCBjYWxjdWxhdGVUaXAsIHRpcFBvc2l0aW9uKSB7XG4gICAgbGV0IHJlZ051bSA9IEMucmVnTnVtO1xuICAgIGxldCByZWdOdW1OZWdhdGl2ZSA9IEMucmVnTnVtTmVnYXRpdmU7XG4gICAgbGV0IHJlZ1BlciA9IEMucmVnUGVyO1xuICAgIGxldCByZWdQZXJOZWdhdGl2ZSA9IEMucmVnUGVyTmVnYXRpdmU7XG5cbiAgICBsZXQgZWxlRGV0YWlscyA9IHRoaXMuZ2V0RWxlbWVudERldGFpbHMoKTtcblxuICAgIGxldCB0aXBHcm91cFdpZHRoID0gZWxlRGV0YWlscy50aXBHcm91cFdpZHRoO1xuICAgIGxldCB0aXBHcm91cEhlaWdodCA9IGVsZURldGFpbHMudGlwR3JvdXBIZWlnaHQ7XG4gICAgaWYoY2FsY3VsYXRlVGlwID09PSBmYWxzZSkge1xuICAgICAgICB0aXBHcm91cFdpZHRoID0gMDtcbiAgICAgICAgdGlwR3JvdXBIZWlnaHQgPSAwO1xuICAgIH1cblxuICAgIGlmKHR5cGVvZiBteVBvc2l0aW9uID09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgbGV0IG15UG9zaXRpb25UbXAgPSB7fTtcbiAgICAgICAgc3dpdGNoKG15UG9zaXRpb24pIHtcbiAgICAgICAgICAgIGNhc2UgXCJ0b3AtbGVmdFwiIDogICAgICAgICAgIC8v5Z2Q5qCH5Zyo5Z+65YeG5YWD57Sg55qE5bem5LiK6KeS5L2N572uXG4gICAgICAgICAgICAgICAgLy8gdGlwUG9zaXRpb24udG9wID0gZWxlRGV0YWlscy5iYXNlVG9wIC0gdGlwR3JvdXBIZWlnaHQgKiAoMTAwJSkvMTAwO1xuICAgICAgICAgICAgICAgIC8vIHRpcFBvc2l0aW9uLmxlZnQgPSBlbGVEZXRhaWxzLmJhc2VMZWZ0IC0gdGlwR3JvdXBXaWR0aCAqICgxMDAlKS8xMDA7XG4gICAgICAgICAgICAgICAgbXlQb3NpdGlvblRtcC50b3AgPSBcIjEwMCVcIjtcbiAgICAgICAgICAgICAgICBteVBvc2l0aW9uVG1wLmxlZnQgPSBcIi0wJVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInRvcC1jZW50ZXJcIiA6ICAgICAgICAgLy/lnZDmoIflnKjln7rlh4blhYPntKDnmoTkuIrkuK3kvY3nva5cbiAgICAgICAgICAgICAgICBteVBvc2l0aW9uVG1wLnRvcCA9IFwiMTAwJVwiO1xuICAgICAgICAgICAgICAgIG15UG9zaXRpb25UbXAubGVmdCA9IFwiLTUwJVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInRvcC1yaWdodFwiIDogICAgICAgICAgLy/lnZDmoIflnKjln7rlh4blhYPntKDnmoTlj7PkuIrop5LkvY3nva5cbiAgICAgICAgICAgICAgICBteVBvc2l0aW9uVG1wLnRvcCA9IFwiMTAwJVwiO1xuICAgICAgICAgICAgICAgIG15UG9zaXRpb25UbXAubGVmdCA9IFwiLTEwMCVcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJjZW50ZXItbGVmdFwiIDogICAgICAgIC8v5Z2Q5qCH5Zyo5Z+65YeG5YWD57Sg55qE5bem5Lit5L2N572uXG4gICAgICAgICAgICAgICAgbXlQb3NpdGlvblRtcC50b3AgPSBcIi01MCVcIjtcbiAgICAgICAgICAgICAgICBteVBvc2l0aW9uVG1wLmxlZnQgPSBcIjBcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJtaWRkbGVcIiA6ICAgICAgICAgICAgIC8v5Z2Q5qCH5Zyo5Z+65YeG5YWD57Sg55qE5Lit6Ze05L2N572uXG4gICAgICAgICAgICAgICAgbXlQb3NpdGlvblRtcC50b3AgPSBcIi01MCVcIjtcbiAgICAgICAgICAgICAgICBteVBvc2l0aW9uVG1wLmxlZnQgPSBcIi01MCVcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJjZW50ZXItcmlnaHRcIiA6ICAgICAgIC8v5Z2Q5qCH5Zyo5Z+65YeG5YWD57Sg55qE5Y+z5Lit5L2N572uXG4gICAgICAgICAgICAgICAgbXlQb3NpdGlvblRtcC50b3AgPSBcIi01MCVcIjtcbiAgICAgICAgICAgICAgICBteVBvc2l0aW9uVG1wLnJpZ2h0ID0gXCIxMDAlXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYm90dG9tLWxlZnRcIiA6ICAgICAgICAvL+WdkOagh+WcqOWfuuWHhuWFg+e0oOeahOW3puS4i+inkuS9jee9rlxuICAgICAgICAgICAgICAgIG15UG9zaXRpb25UbXAuYm90dG9tID0gXCIxMDAlXCI7XG4gICAgICAgICAgICAgICAgbXlQb3NpdGlvblRtcC5sZWZ0ID0gXCItMCVcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJib3R0b20tY2VudGVyXCIgOiAgICAgIC8v5Z2Q5qCH5Zyo5Z+65YeG5YWD57Sg55qE5LiL5Lit5L2N572uXG4gICAgICAgICAgICAgICAgbXlQb3NpdGlvblRtcC5ib3R0b20gPSBcIjEwMCVcIjtcbiAgICAgICAgICAgICAgICBteVBvc2l0aW9uVG1wLmxlZnQgPSBcIi01MCVcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJib3R0b20tcmlnaHRcIiA6ICAgICAgIC8v5Z2Q5qCH5Zyo5Z+65YeG5YWD57Sg55qE5Y+z5LiL6KeS5L2N572uXG4gICAgICAgICAgICAgICAgbXlQb3NpdGlvblRtcC5ib3R0b20gPSBcIjEwMCVcIjtcbiAgICAgICAgICAgICAgICBteVBvc2l0aW9uVG1wLmxlZnQgPSBcIi0xMDAlXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibGVmdC10b3BcIiA6ICAgICAgIC8v5Z2Q5qCH5Zyo5Z+65YeG5YWD57Sg55qE5Y+z5LiL6KeS5L2N572uXG4gICAgICAgICAgICAgICAgbXlQb3NpdGlvblRtcC5ib3R0b20gPSBcIi0xMDAlXCI7XG4gICAgICAgICAgICAgICAgbXlQb3NpdGlvblRtcC5sZWZ0ID0gXCIwXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibGVmdC1ib3R0b21cIiA6ICAgICAgIC8v5Z2Q5qCH5Zyo5Z+65YeG5YWD57Sg55qE5Y+z5LiL6KeS5L2N572uXG4gICAgICAgICAgICAgICAgbXlQb3NpdGlvblRtcC50b3AgPSBcIi0xMDAlXCI7XG4gICAgICAgICAgICAgICAgbXlQb3NpdGlvblRtcC5sZWZ0ID0gXCIwXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicmlnaHQtdG9wXCIgOiAgICAgICAvL+WdkOagh+WcqOWfuuWHhuWFg+e0oOeahOWPs+S4i+inkuS9jee9rlxuICAgICAgICAgICAgICAgIG15UG9zaXRpb25UbXAuYm90dG9tID0gXCItMTAwJVwiO1xuICAgICAgICAgICAgICAgIG15UG9zaXRpb25UbXAucmlnaHQgPSBcIjEwMCVcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJyaWdodC1ib3R0b21cIiA6ICAgICAgIC8v5Z2Q5qCH5Zyo5Z+65YeG5YWD57Sg55qE5Y+z5LiL6KeS5L2N572uXG4gICAgICAgICAgICAgICAgbXlQb3NpdGlvblRtcC50b3AgPSBcIi0xMDAlXCI7XG4gICAgICAgICAgICAgICAgbXlQb3NpdGlvblRtcC5yaWdodCA9IFwiMTAwJVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdCA6ICAgICAgICAgICAgICAgICAgIC8v6buY6K6k5Z2Q5qCH5Zyo5Z+65YeG5YWD57Sg55qE5Lit6Ze05L2N572uXG4gICAgICAgICAgICAgICAgbXlQb3NpdGlvblRtcC50b3AgPSBcIjEwMCVcIjtcbiAgICAgICAgICAgICAgICBteVBvc2l0aW9uVG1wLmxlZnQgPSBcIi0wJVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgbXlQb3NpdGlvbiA9IG15UG9zaXRpb25UbXA7XG4gICAgfVxuXG4gICAgLy8g6Z2e55m+5YiG5q+U5Yy65YiG5q2j6LSf5Li76KaB5piv6ICD6JmR5Yiw6L655qGG6Zeu6aKY77yM5b+955Wl6L655qGG5bim5p2l55qE5b2x5ZONXG4gICAgaWYobXlQb3NpdGlvbi5oYXNPd25Qcm9wZXJ0eSgnYm90dG9tJykgJiYgcmVnTnVtLnRlc3QobXlQb3NpdGlvbi5ib3R0b20pKSB7XG4gICAgICAgIGlmKCFyZWdOdW1OZWdhdGl2ZS50ZXN0KG15UG9zaXRpb24uYm90dG9tKSkge1xuICAgICAgICAgICAgdGlwUG9zaXRpb24udG9wID0gZWxlRGV0YWlscy5iYXNlVG9wICsgZWxlRGV0YWlscy5iYXNlQm9yZGVyVG9wV2lkdGggKyBlbGVEZXRhaWxzLmJhc2VIZWlnaHQgKyBlbGVEZXRhaWxzLmJhc2VCb3JkZXJCb3R0b21XaWR0aCArIHBhcnNlRmxvYXQobXlQb3NpdGlvbi5ib3R0b20pO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICB0aXBQb3NpdGlvbi50b3AgPSBlbGVEZXRhaWxzLmJhc2VUb3AgKyBlbGVEZXRhaWxzLmJhc2VCb3JkZXJUb3BXaWR0aCArIGVsZURldGFpbHMuYmFzZUhlaWdodCArIHBhcnNlRmxvYXQobXlQb3NpdGlvbi5ib3R0b20pO1xuICAgICAgICB9XG4gICAgfWVsc2UgaWYobXlQb3NpdGlvbi5oYXNPd25Qcm9wZXJ0eSgnYm90dG9tJykgJiYgcmVnUGVyLnRlc3QobXlQb3NpdGlvbi5ib3R0b20pKSB7XG4gICAgICAgIGlmKCFyZWdQZXJOZWdhdGl2ZS50ZXN0KG15UG9zaXRpb24uYm90dG9tKSkge1xuICAgICAgICAgICAgbGV0IGJvdHRvbSA9IHRpcEdyb3VwSGVpZ2h0IC0gdGlwR3JvdXBIZWlnaHQgKiBwYXJzZUZsb2F0KG15UG9zaXRpb24uYm90dG9tKS8xMDA7XG4gICAgICAgICAgICB0aXBQb3NpdGlvbi50b3AgPSBlbGVEZXRhaWxzLmJhc2VUb3AgKyBlbGVEZXRhaWxzLmJhc2VCb3JkZXJUb3BXaWR0aCArIGVsZURldGFpbHMuYmFzZUJvcmRlckJvdHRvbVdpZHRoICsgZWxlRGV0YWlscy5iYXNlSGVpZ2h0IC0gYm90dG9tO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBsZXQgYm90dG9tID0gKGVsZURldGFpbHMuYmFzZUhlaWdodCAtIHRpcEdyb3VwSGVpZ2h0KSAqICgtcGFyc2VGbG9hdChteVBvc2l0aW9uLmJvdHRvbSkvMTAwKTtcbiAgICAgICAgICAgIHRpcFBvc2l0aW9uLnRvcCA9IGVsZURldGFpbHMuYmFzZVRvcCArIGVsZURldGFpbHMuYmFzZUJvcmRlclRvcFdpZHRoICsgZWxlRGV0YWlscy5iYXNlSGVpZ2h0IC0gdGlwR3JvdXBIZWlnaHQgLSBib3R0b207XG4gICAgICAgIH1cbiAgICB9ZWxzZSBpZihteVBvc2l0aW9uLmhhc093blByb3BlcnR5KCd0b3AnKSAmJiByZWdOdW0udGVzdChteVBvc2l0aW9uLnRvcCkpIHtcbiAgICAgICAgaWYoIXJlZ051bU5lZ2F0aXZlLnRlc3QobXlQb3NpdGlvbi50b3ApKSB7XG4gICAgICAgICAgICB0aXBQb3NpdGlvbi50b3AgPSBlbGVEZXRhaWxzLmJhc2VUb3AgLSB0aXBHcm91cEhlaWdodCAtIHBhcnNlRmxvYXQobXlQb3NpdGlvbi50b3ApO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICB0aXBQb3NpdGlvbi50b3AgPSBlbGVEZXRhaWxzLmJhc2VUb3AgKyBlbGVEZXRhaWxzLmJhc2VCb3JkZXJUb3BXaWR0aCAtIHRpcEdyb3VwSGVpZ2h0IC0gcGFyc2VGbG9hdChteVBvc2l0aW9uLnRvcCk7XG4gICAgICAgIH1cbiAgICB9ZWxzZSBpZihteVBvc2l0aW9uLmhhc093blByb3BlcnR5KCd0b3AnKSAmJiByZWdQZXIudGVzdChteVBvc2l0aW9uLnRvcCkpIHtcbiAgICAgICAgaWYoIXJlZ1Blck5lZ2F0aXZlLnRlc3QobXlQb3NpdGlvbi50b3ApKSB7XG4gICAgICAgICAgICBsZXQgdG9wID0gdGlwR3JvdXBIZWlnaHQgKiBwYXJzZUZsb2F0KG15UG9zaXRpb24udG9wKS8xMDA7XG4gICAgICAgICAgICB0aXBQb3NpdGlvbi50b3AgPSBlbGVEZXRhaWxzLmJhc2VUb3AgLSB0b3A7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIGxldCB0b3AgPSAoZWxlRGV0YWlscy5iYXNlSGVpZ2h0IC0gdGlwR3JvdXBIZWlnaHQpICogKC1wYXJzZUZsb2F0KG15UG9zaXRpb24udG9wKS8xMDApO1xuICAgICAgICAgICAgdGlwUG9zaXRpb24udG9wID0gZWxlRGV0YWlscy5iYXNlVG9wICsgZWxlRGV0YWlscy5iYXNlQm9yZGVyVG9wV2lkdGggKyB0b3A7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZihteVBvc2l0aW9uLmhhc093blByb3BlcnR5KCdyaWdodCcpICYmIHJlZ051bS50ZXN0KG15UG9zaXRpb24ucmlnaHQpKSB7XG4gICAgICAgIHRpcFBvc2l0aW9uLmxlZnQgPSBlbGVEZXRhaWxzLmJhc2VMZWZ0ICsgZWxlRGV0YWlscy5iYXNlQm9yZGVyTGVmdFdpZHRoICsgZWxlRGV0YWlscy5iYXNlV2lkdGggKyBlbGVEZXRhaWxzLmJhc2VCb3JkZXJSaWdodFdpZHRoICsgcGFyc2VGbG9hdChteVBvc2l0aW9uLnJpZ2h0KTtcbiAgICB9ZWxzZSBpZihteVBvc2l0aW9uLmhhc093blByb3BlcnR5KCdyaWdodCcpICYmIHJlZ1Blci50ZXN0KG15UG9zaXRpb24ucmlnaHQpKSB7XG4gICAgICAgIGlmKCFyZWdQZXJOZWdhdGl2ZS50ZXN0KG15UG9zaXRpb24ucmlnaHQpKSB7XG4gICAgICAgICAgICBsZXQgcmlnaHQgPSB0aXBHcm91cFdpZHRoIC0gdGlwR3JvdXBXaWR0aCAqIHBhcnNlRmxvYXQobXlQb3NpdGlvbi5yaWdodCkvMTAwO1xuICAgICAgICAgICAgdGlwUG9zaXRpb24ubGVmdCA9IGVsZURldGFpbHMuYmFzZUxlZnQgKyBlbGVEZXRhaWxzLmJhc2VCb3JkZXJMZWZ0V2lkdGggKyBlbGVEZXRhaWxzLmJhc2VCb3JkZXJSaWdodFdpZHRoICsgZWxlRGV0YWlscy5iYXNlV2lkdGggLSByaWdodDtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgbGV0IHJpZ2h0ID0gKGVsZURldGFpbHMuYmFzZVdpZHRoIC0gdGlwR3JvdXBXaWR0aCkgKiAoLXBhcnNlRmxvYXQobXlQb3NpdGlvbi5yaWdodCkvMTAwKTtcbiAgICAgICAgICAgIHRpcFBvc2l0aW9uLmxlZnQgPSBlbGVEZXRhaWxzLmJhc2VMZWZ0ICsgZWxlRGV0YWlscy5iYXNlQm9yZGVyTGVmdFdpZHRoICsgZWxlRGV0YWlscy5iYXNlV2lkdGggLSB0aXBHcm91cFdpZHRoIC0gcmlnaHQ7XG4gICAgICAgIH1cbiAgICB9ZWxzZSBpZihteVBvc2l0aW9uLmhhc093blByb3BlcnR5KCdsZWZ0JykgJiYgcmVnTnVtLnRlc3QobXlQb3NpdGlvbi5sZWZ0KSkge1xuICAgICAgICBpZighcmVnTnVtTmVnYXRpdmUudGVzdChteVBvc2l0aW9uLmxlZnQpKSB7XG4gICAgICAgICAgICB0aXBQb3NpdGlvbi5sZWZ0ID0gZWxlRGV0YWlscy5iYXNlTGVmdCAtIHRpcEdyb3VwV2lkdGggLSBwYXJzZUZsb2F0KG15UG9zaXRpb24ubGVmdCk7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHRpcFBvc2l0aW9uLmxlZnQgPSBlbGVEZXRhaWxzLmJhc2VMZWZ0ICsgZWxlRGV0YWlscy5iYXNlQm9yZGVyTGVmdFdpZHRoIC0gdGlwR3JvdXBXaWR0aCAtIHBhcnNlRmxvYXQobXlQb3NpdGlvbi5sZWZ0KTtcbiAgICAgICAgfVxuICAgIH1lbHNlIGlmKG15UG9zaXRpb24uaGFzT3duUHJvcGVydHkoJ2xlZnQnKSAmJiByZWdQZXIudGVzdChteVBvc2l0aW9uLmxlZnQpKSB7XG4gICAgICAgIGlmKCFyZWdQZXJOZWdhdGl2ZS50ZXN0KG15UG9zaXRpb24ubGVmdCkpIHtcbiAgICAgICAgICAgIGxldCBsZWZ0ID0gdGlwR3JvdXBXaWR0aCAqIHBhcnNlRmxvYXQobXlQb3NpdGlvbi5sZWZ0KS8xMDA7XG4gICAgICAgICAgICB0aXBQb3NpdGlvbi5sZWZ0ID0gZWxlRGV0YWlscy5iYXNlTGVmdCAtIGxlZnQ7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIGxldCBsZWZ0ID0gKGVsZURldGFpbHMuYmFzZVdpZHRoIC0gdGlwR3JvdXBXaWR0aCkgKiAoLXBhcnNlRmxvYXQobXlQb3NpdGlvbi5sZWZ0KS8xMDApO1xuICAgICAgICAgICAgdGlwUG9zaXRpb24ubGVmdCA9IGVsZURldGFpbHMuYmFzZUxlZnQgKyBlbGVEZXRhaWxzLmJhc2VCb3JkZXJMZWZ0V2lkdGggKyBsZWZ0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRpcFBvc2l0aW9uO1xufVxuXG4vKipcbiAqIE9mZnNldCDlj6rmlK/mjIFweO+8jOeUqOS6juW+ruiwg+WfuuWHhuWFg+e0oOS4jlRpcHMg55qE55u45a+55a6a5L2NXG4gKiDorqHnrpflrprkvY3lvpflh7rnmoTnu5Pmnpzlj6rlkKt0b3DlkoxsZWZ077yM5pWFb2Zmc2V05Y+q5pSv5oyBdG9w5ZKMbGVmdFxuICog5q+U5aaC5LiK5bGF5Lit77yM5q2k5pe2VGlwcyDpobbpg6jmmK/ntKfotLTnnYDln7rlh4blhYPntKDpobbpg6jnmoTvvIzorr7nva5vZmZzZXQudG9wID0gMTAsIOWImVRpcHMg6aG26YOo5L2O5LqO5Z+65YeG5YWD57Sg6aG26YOoMTBweFxuICovXG50aXBzLnByb3RvdHlwZS5zZXRTdHlsZVBvc2l0aW9uT2Zmc2V0ID0gZnVuY3Rpb24odGlwUG9zaXRpb24pIHtcbiAgICBsZXQgb3B0T2Zmc2V0ID0gdGhpcy5vcHRpb25zLm9mZnNldDtcblxuICAgIGlmKCFvcHRPZmZzZXQpIHJldHVybiB0aXBQb3NpdGlvbjtcblxuICAgIGxldCByZWdOdW0gPSBDLnJlZ051bTtcbiAgICBpZihvcHRPZmZzZXQuaGFzT3duUHJvcGVydHkoJ3RvcCcpICYmIHJlZ051bS50ZXN0KG9wdE9mZnNldC50b3ApKSB0aXBQb3NpdGlvbi50b3AgKz0gb3B0T2Zmc2V0LnRvcDtcbiAgICBpZihvcHRPZmZzZXQuaGFzT3duUHJvcGVydHkoJ2xlZnQnKSAmJiByZWdOdW0udGVzdChvcHRPZmZzZXQubGVmdCkpIHRpcFBvc2l0aW9uLmxlZnQgKz0gb3B0T2Zmc2V0LmxlZnQ7XG5cbiAgICByZXR1cm4gdGlwUG9zaXRpb247XG59XG5cbi8qKlxuICog5bey5byD55So44CC5pu/5Luj5pa55qGI5piv5qC55o2uU3ltYm9sIOiuvue9rnBhZGRpbmfvvIzliKnkuo7liqjnlLvmiafooYxcbiAqIFxuICog5aaC5p6c5ZCv5Yqoc3ltYm9s77yM6ICMc3ltYm9sIOS4jeWNoFRpcHMg5a695bqm5ZKM6auY5bqm44CCIOWImeWPr+agueaNrnN5bWJvbCBvZmZzZXQg5b6u6LCD54i25YWD57Sg5LiOVGlwcyDnmoTnm7jlr7nlrprkvY1cbiAqIE9mZnNldCDlj6rmlK/mjIFweFxuICog6K6h566X5a6a5L2N5b6X5Ye655qE57uT5p6c5Y+q5ZCrdG9w5ZKMbGVmdO+8jOaVhW9mZnNldOWPquaUr+aMgXRvcOWSjGxlZnRcbiAqIOavlOWmguS4iuWxheS4re+8jOatpOaXtlRpcHMg6aG26YOo5piv57Sn6LS0552A54i25YWD57Sg6aG26YOo55qE77yMXG4gKiDmraTml7ZzeW1ib2wg5q2j5bi45p2l6K+05Lya6auY5LqOVGlwcyDkuIrkuK3pg6jkvY0sIOWmgjhweCwg6K6+572uc3ltYm9sT3B0aW9ucy5vZmZzZXQudG9wID0gOCwg5YiZVGlwcyDpobbpg6jkvY7kuo7niLblhYPntKDpobbpg6g4cHjvvIxTeW1ib2zntKfotLTniLblhYPntKDpobbpg6hcbiAqL1xudGlwcy5wcm90b3R5cGUuc2V0U3R5bGVTeW1ib2xPZmZzZXQgPSBmdW5jdGlvbih0aXBQb3NpdGlvbikge1xuICAgIGlmKCF0aGlzLm9wdGlvbnMuc3ltYm9sKSByZXR1cm4gdGlwUG9zaXRpb247XG4gICAgbGV0IHJlZ051bSA9IEMucmVnTnVtO1xuXG4gICAgbGV0IHRtcE9mZnNldCA9IHtcbiAgICAgICAgdG9wOiBudWxsLFxuICAgICAgICBsZWZ0OiBudWxsLFxuICAgIH07XG5cbiAgICBsZXQgc3ltYm9sU2l6ZSA9IHRoaXMuZ2V0U3ltYm9sU2l6ZSgpO1xuXG4gICAgbGV0IHN5bWJvbFBvc2l0aW9uID0gdGhpcy5vcHRpb25zLnN5bWJvbE9wdGlvbnMucG9zaXRpb24gfHwgdGhpcy5tYXBQb3NpdGlvblRvU3ltYm9sUG9zaXRpb24odGhpcy5vcHRpb25zLnBvc2l0aW9uKTtcbiAgICBpZihzeW1ib2xQb3NpdGlvbiAmJiB0eXBlb2Ygc3ltYm9sUG9zaXRpb24gPT0gJ3N0cmluZycpIHtcbiAgICAgICAgc3dpdGNoKHN5bWJvbFBvc2l0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIFwidG9wLWxlZnRcIiA6ICAgICAgICAgICAvL+WdkOagh+WcqFRpcHMg55qE5bem5LiK6KeS5L2N572uXG4gICAgICAgICAgICAgICAgdG1wT2Zmc2V0LnRvcCA9IHN5bWJvbFNpemUuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInRvcC1jZW50ZXJcIiA6ICAgICAgICAgLy/lnZDmoIflnKhUaXBzIOeahOS4iuS4reS9jee9rlxuICAgICAgICAgICAgICAgIHRtcE9mZnNldC50b3AgPSBzeW1ib2xTaXplLmhlaWdodDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ0b3AtcmlnaHRcIiA6ICAgICAgICAgIC8v5Z2Q5qCH5ZyoVGlwcyDnmoTlj7PkuIrop5LkvY3nva5cbiAgICAgICAgICAgICAgICB0bXBPZmZzZXQudG9wID0gc3ltYm9sU2l6ZS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiY2VudGVyLWxlZnRcIiA6ICAgICAgICAvL+WdkOagh+WcqFRpcHMg55qE5bem5Lit5L2N572uXG4gICAgICAgICAgICAgICAgdG1wT2Zmc2V0LmxlZnQgPSBzeW1ib2xTaXplLndpZHRoO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIm1pZGRsZVwiIDogICAgICAgICAgICAgLy/lnZDmoIflnKhUaXBzIOeahOS4remXtOS9jee9rlxuICAgICAgICAgICAgICAgIC8vIHRtcE9mZnNldC5sZWZ0ID0gc3ltYm9sU2l6ZS53aWR0aDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJjZW50ZXItcmlnaHRcIiA6ICAgICAgIC8v5Z2Q5qCH5ZyoVGlwcyDnmoTlj7PkuK3kvY3nva5cbiAgICAgICAgICAgICAgICB0bXBPZmZzZXQubGVmdCA9IDAgLSBzeW1ib2xTaXplLndpZHRoO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImJvdHRvbS1sZWZ0XCIgOiAgICAgICAgLy/lnZDmoIflnKhUaXBzIOeahOW3puS4i+inkuS9jee9rlxuICAgICAgICAgICAgICAgIHRtcE9mZnNldC50b3AgPSAwIC0gc3ltYm9sU2l6ZS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYm90dG9tLWNlbnRlclwiIDogICAgICAvL+WdkOagh+WcqFRpcHMg55qE5LiL5Lit5L2N572uXG4gICAgICAgICAgICAgICAgdG1wT2Zmc2V0LnRvcCA9IDAgLSBzeW1ib2xTaXplLmhlaWdodDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJib3R0b20tcmlnaHRcIiA6ICAgICAgIC8v5Z2Q5qCH5ZyoVGlwcyDnmoTlj7PkuIvop5LkvY3nva5cbiAgICAgICAgICAgICAgICB0bXBPZmZzZXQudG9wID0gMCAtIHN5bWJvbFNpemUuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImxlZnQtdG9wXCIgOiAgICAgICAgICAgICAgIC8v5Z2Q5qCH5ZyoVGlwcyDnmoTkuIrlt6bop5LkvY3nva5cbiAgICAgICAgICAgICAgICB0bXBPZmZzZXQubGVmdCA9IHN5bWJvbFNpemUud2lkdGg7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibGVmdC1ib3R0b21cIiA6ICAgICAgICAgICAgICAgIC8v5Z2Q5qCH5ZyoVGlwcyDnmoTkuIvlt6bop5LkvY3nva5cbiAgICAgICAgICAgICAgICB0bXBPZmZzZXQubGVmdCA9IHN5bWJvbFNpemUud2lkdGg7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicmlnaHQtdG9wXCIgOiAgICAgICAgICAgICAgLy/lnZDmoIflnKhUaXBzIOeahOS4iuWPs+inkuS9jee9rlxuICAgICAgICAgICAgICAgIHRtcE9mZnNldC5sZWZ0ID0gMCAtIHN5bWJvbFNpemUud2lkdGg7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicmlnaHQtYm90dG9tXCIgOiAgICAgICAgICAgICAgIC8v5Z2Q5qCH5ZyoVGlwcyDnmoTkuIvlj7Pop5LkvY3nva5cbiAgICAgICAgICAgICAgICB0bXBPZmZzZXQubGVmdCA9IDAgLSBzeW1ib2xTaXplLndpZHRoO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdCA6ICAgICAgICAgICAgICAgICAgIC8v6buY6K6k5Z2Q5qCH5ZyoVGlwcyDnmoTkuK3pl7TkvY3nva5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMud3JpdGVMb2coJ2luZm8nLCAnc2V0U3R5bGVTeW1ib2xPZmZzZXQ6ICcsIHN5bWJvbFNpemUsIHN5bWJvbFBvc2l0aW9uLCB0bXBPZmZzZXQpO1xuXG4gICAgLy8gb2Zmc2V0IOS7pXN5bWJvbE9wdGlvbnMub2Zmc2V0IOS4uuWHhu+8jHRtcE9mZnNldCDkuLrovoXvvIzlhoXlpJbpg6jlrprkvY3op4TliJnkuIDmoLdcbiAgICBsZXQgb2Zmc2V0ID0gQy5leHRlbmQoe30sIHRoaXMub3B0aW9ucy5zeW1ib2xPcHRpb25zLm9mZnNldCwgdG1wT2Zmc2V0KTtcbiAgICAvLyDlvZPkuLrlpJbpg6jlrprkvY3ml7bvvIzpnIDopoHlj43ovaxcbiAgICAvLyBpZih0aGlzLm9wdGlvbnMuZGlyZWN0aW9uID09ICdvdXRlcicgfHwgdGhpcy5vcHRpb25zLmRpcmVjdGlvbiA9PSAnb3V0c2lkZScpIHtcbiAgICAvLyAgICAgaWYob2Zmc2V0Lmhhc093blByb3BlcnR5KCd0b3AnKSAmJiByZWdOdW0udGVzdChvZmZzZXQudG9wKSkgb2Zmc2V0LnRvcCA9IDAgLSBvZmZzZXQudG9wO1xuICAgIC8vICAgICBpZihvZmZzZXQuaGFzT3duUHJvcGVydHkoJ2xlZnQnKSAmJiByZWdOdW0udGVzdChvZmZzZXQubGVmdCkpIG9mZnNldC5sZWZ0ID0gMCAtIG9mZnNldC5sZWZ0O1xuICAgIC8vIH1cblxuICAgIHRoaXMud3JpdGVMb2coJ2luZm8nLCAnc2V0U3R5bGVTeW1ib2xPZmZzZXQ6ICcsIHN5bWJvbFNpemUsIG9mZnNldCk7XG5cbiAgICBpZihvZmZzZXQudG9wIHx8IG9mZnNldC5sZWZ0KSB7XG4gICAgICAgIGlmKG9mZnNldC5oYXNPd25Qcm9wZXJ0eSgndG9wJykgJiYgcmVnTnVtLnRlc3Qob2Zmc2V0LnRvcCkpIHRpcFBvc2l0aW9uLnRvcCArPSBvZmZzZXQudG9wO1xuICAgICAgICBpZihvZmZzZXQuaGFzT3duUHJvcGVydHkoJ2xlZnQnKSAmJiByZWdOdW0udGVzdChvZmZzZXQubGVmdCkpIHRpcFBvc2l0aW9uLmxlZnQgKz0gb2Zmc2V0LmxlZnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRpcFBvc2l0aW9uO1xufVxuXG4vL+agueaNruS4jeWQjOeahHN5bWJvbCDnsbvlnovojrflj5bkuI3lkIznmoRTaXpl77yM55So5LqO5a6a5L2N6KGl6LazXG50aXBzLnByb3RvdHlwZS5nZXRTeW1ib2xTaXplID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IHN5bWJvbCA9IFwidHJpYW5nbGVcIjtcbiAgICBpZih0eXBlb2YgdGhpcy5vcHRpb25zLnN5bWJvbCA9PSAnc3RyaW5nJykgc3ltYm9sID0gdGhpcy5vcHRpb25zLnN5bWJvbDtcblxuICAgIGxldCBnZXRTeW1ib2xTaXplTWV0aG9kID0gXCJnZXRTeW1ib2xTaXplXCIgKyBzeW1ib2wuc2xpY2UoMCwgMSkudG9VcHBlckNhc2UoKSArIHN5bWJvbC5zbGljZSgxKTtcbiAgICByZXR1cm4gdGhpc1tnZXRTeW1ib2xTaXplTWV0aG9kXSgpO1xufVxuXG4vL+iOt+WPllRyaWFuZ2xlIFNpemXvvIznlKjkuo7lrprkvY3ooaXotrNcbnRpcHMucHJvdG90eXBlLmdldFN5bWJvbFNpemVUcmlhbmdsZSA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCAkc3ltYm9sID0gdGhpcy5iYWNrdXAuX3N5bWJvbEVsbTtcbiAgICBsZXQgc3ltYm9sU2l6ZSA9IHt3aWR0aDogMCwgaGVpZ2h0OiAwfTtcblxuICAgIGlmKCEkc3ltYm9sKSByZXR1cm4gc3ltYm9sU2l6ZTtcbiAgICAvL1RyaWFuZ2xlIOeahOWbm+S4qui+ueahhumDveS4gOagt1xuICAgIGxldCBib3JkZXJXaWR0aCA9IHBhcnNlRmxvYXQoQy5jc3MoJHN5bWJvbCwgXCJib3JkZXItdG9wLXdpZHRoXCIpKTtcbiAgICBzeW1ib2xTaXplLndpZHRoID0gYm9yZGVyV2lkdGg7XG4gICAgc3ltYm9sU2l6ZS5oZWlnaHQgPSBib3JkZXJXaWR0aDtcblxuICAgIHJldHVybiBzeW1ib2xTaXplO1xufVxuXG50aXBzLnByb3RvdHlwZS5nZXRQb3NpdGlvbiA9IGZ1bmN0aW9uKG15UG9zaXRpb24pIHtcbiAgICBsZXQgcG9zaXRpb25DbGFzcyA9IHRoaXMuZ2V0UG9zaXRpb25DbGFzcyhteVBvc2l0aW9uKTtcbiAgICBsZXQgcG9zaXRpb25TdHlsZSA9IHRoaXMuZ2V0UG9zaXRpb25TdHlsZShteVBvc2l0aW9uKTtcbiAgICBsZXQgdGlwUG9zaXRpb24gPSB7XG4gICAgICAgIGNsYXNzOiBwb3NpdGlvbkNsYXNzLFxuICAgICAgICBzdHlsZTogcG9zaXRpb25TdHlsZSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRpcFBvc2l0aW9uO1xufVxuXG4vL+iuvue9rua1ruWKqOWPguaVsOOAguaUr+aMgeeUqOaIt+iHquWumuS5ieOAglxudGlwcy5wcm90b3R5cGUuc2V0RmxvYXRPcHRpb25zID0gZnVuY3Rpb24oY3VzdG9tRmxvYXRPcHRpb25zKSB7XG4gICAgLy/nqpflj6Plj5HnlJ/lj5jljJbml7bpnIDopoHph43mlrDlrprkuYlmbG9hdFxuICAgIC8v6Iul5LiN5piv6aaW5qyh6K6+572u77yM5YiZ6L+Y5Y6f5b2T5YmN54q25oCBXG4gICAgbGV0IGJhY2t1cGZsb2F0T3B0aW9ucyA9IHt9O1xuICAgIGlmKHRoaXMuZmxvYXRPcHRpb25zKSB7XG4gICAgICAgIGJhY2t1cGZsb2F0T3B0aW9ucy5zdGF0dXMgPSB0aGlzLmZsb2F0T3B0aW9ucy5zdGF0dXM7XG4gICAgICAgIGJhY2t1cGZsb2F0T3B0aW9ucy5mbG9hdElkID0gdGhpcy5mbG9hdE9wdGlvbnMuZmxvYXRJZDtcbiAgICB9O1xuXG4gICAgLy/nlKjmiLfoh6rlrprkuYlcbiAgICBpZih0aGlzLm9wdGlvbnMuZmxvYXQuY3VzdG9tRmxvYXRPcHRpb25zKSBjdXN0b21GbG9hdE9wdGlvbnMgPSB0aGlzLm9wdGlvbnMuZmxvYXQuY3VzdG9tRmxvYXRPcHRpb25zO1xuXG4gICAgbGV0IGZsb2F0T3B0aW9ucyA9IEMuZXh0ZW5kKHt9LCB0aXBzLmZsb2F0T3B0aW9ucywgY3VzdG9tRmxvYXRPcHRpb25zLCBiYWNrdXBmbG9hdE9wdGlvbnMpO1xuXG4gICAgbGV0IGVsZURldGFpbHMgPSB0aGlzLmdldEVsZW1lbnREZXRhaWxzKCk7XG5cbiAgICAvL+iuvue9ruacgOWkp+acgOWwj+WAvO+8jOS4gOiIrOacgOWwj+WAvDDvvIzmnIDlpKflgLzop4bmg4XlhrXogIzlrprvvIzoi6XmmK/kuIDoiKzmg4XlhrXvvIhweO+8ieWImeS4uuWFg+e0oOeahOacgOWkp+mYiOWAvO+8jOWmguaYr+eZvuWIhuavlO+8jOWImeS4ujEwMCVcbiAgICBmbG9hdE9wdGlvbnMueE1pblRocmVzaG9sZCA9ICFDLmlzRW1wdHlOdW0oZmxvYXRPcHRpb25zLnhNaW5UaHJlc2hvbGQpPyBmbG9hdE9wdGlvbnMueE1pblRocmVzaG9sZCA6IDA7XG4gICAgZmxvYXRPcHRpb25zLnhNYXhUaHJlc2hvbGQgPSAhQy5pc0VtcHR5TnVtKGZsb2F0T3B0aW9ucy54TWF4VGhyZXNob2xkKT8gZmxvYXRPcHRpb25zLnhNYXhUaHJlc2hvbGQgOiBlbGVEZXRhaWxzLmxlZnRUaHJlc2hvbGQ7XG4gICAgZmxvYXRPcHRpb25zLnlNaW5UaHJlc2hvbGQgPSAhQy5pc0VtcHR5TnVtKGZsb2F0T3B0aW9ucy55TWluVGhyZXNob2xkKT8gZmxvYXRPcHRpb25zLnlNaW5UaHJlc2hvbGQgOiAwO1xuICAgIGZsb2F0T3B0aW9ucy55TWF4VGhyZXNob2xkID0gIUMuaXNFbXB0eU51bShmbG9hdE9wdGlvbnMueU1heFRocmVzaG9sZCk/IGZsb2F0T3B0aW9ucy55TWF4VGhyZXNob2xkIDogZWxlRGV0YWlscy50b3BUaHJlc2hvbGQ7XG5cbiAgICBmbG9hdE9wdGlvbnMueE9mZnNldCA9IChmbG9hdE9wdGlvbnMueE1heFRocmVzaG9sZCAtIGZsb2F0T3B0aW9ucy54TWluVGhyZXNob2xkKSAqIGZsb2F0T3B0aW9ucy54T2Zmc2V0TGVuO1xuICAgIGZsb2F0T3B0aW9ucy55T2Zmc2V0ID0gKGZsb2F0T3B0aW9ucy55TWF4VGhyZXNob2xkLSBmbG9hdE9wdGlvbnMueU1pblRocmVzaG9sZCkgKiBmbG9hdE9wdGlvbnMueU9mZnNldExlbjtcblxuICAgIGlmKGZsb2F0T3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgnb2Zmc2V0VHlwZScpICYmIGZsb2F0T3B0aW9ucy5vZmZzZXRUeXBlID09PSAnJScpIHtcbiAgICAgICAgZmxvYXRPcHRpb25zLnhPZmZzZXQgPSBmbG9hdE9wdGlvbnMueE9mZnNldExlbjsgIFxuICAgICAgICBmbG9hdE9wdGlvbnMueU9mZnNldCA9IGZsb2F0T3B0aW9ucy55T2Zmc2V0TGVuO1xuICAgIH1cblxuICAgIHRoaXMuZmxvYXRPcHRpb25zID0gZmxvYXRPcHRpb25zO1xuXG4gICAgcmV0dXJuIHRoaXMuZmxvYXRPcHRpb25zO1xufVxuXG4vL+W9k+mcgOimgemHjeaWsOiuvue9rmZsb2F077yM5aaC56qX5Y+j77yM5Z+65YeG5YWD57Sg5Y+R55Sf5pS55Y+Y77yM6Iul5LiN5piv6aaW5qyh6K6+572u77yM5YiZ6L+Y5Y6f5b2T5YmN54q25oCBXG50aXBzLnByb3RvdHlwZS5nZXRmbG9hdFN0YXR1cyA9IGZ1bmN0aW9uKGN1c3RvbUZsb2F0U3RhdHVzKSB7XG4gICAgaWYodGhpcy5vcHRpb25zLmZsb2F0LmN1c3RvbUZsb2F0U3RhdHVzKSB7XG4gICAgICAgIGN1c3RvbUZsb2F0U3RhdHVzID0gdGhpcy5vcHRpb25zLmZsb2F0LmN1c3RvbUZsb2F0U3RhdHVzO1xuICAgIH1lbHNlIGlmKCFjdXN0b21GbG9hdFN0YXR1cyl7XG4gICAgICAgIGN1c3RvbUZsb2F0U3RhdHVzID0ge1xuICAgICAgICAgICAgdG9wOiB0aXBzLmZsb2F0T3B0aW9ucy50b3BTdGFydCxcbiAgICAgICAgICAgIGxlZnQ6IHRpcHMuZmxvYXRPcHRpb25zLmxlZnRTdGFydCxcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IobGV0IGtleSBpbiBjdXN0b21GbG9hdFN0YXR1cykge1xuICAgICAgICBpZih0aGlzLmJhY2t1cC5fZmxvYXRTdGF0dXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgY3VzdG9tRmxvYXRTdGF0dXNba2V5XSA9IHRoaXMuYmFja3VwLl9mbG9hdFN0YXR1c1trZXldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGN1c3RvbUZsb2F0U3RhdHVzO1xufVxuXG4vKipcbiAqIOiuvue9rua1ruWKqOWumuS9jeeahOeKtuaAge+8jOinpuWPkVRpcHMg6YeN5paw5a6a5L2N77yM5a6e546w5rWu5Yqo55qE5pWI5p6cXG4gKi9cbnRpcHMucHJvdG90eXBlLnNldEZsb2F0U3RhdHVzID0gZnVuY3Rpb24oZmxvYXRTdGF0dXMsIGZsb2F0T3B0aW9ucykge1xuICAgIGlmKGZsb2F0U3RhdHVzLnRvcCA+IGZsb2F0T3B0aW9ucy55TWF4VGhyZXNob2xkKSBmbG9hdFN0YXR1cy50b3AgPSBmbG9hdE9wdGlvbnMueU1heFRocmVzaG9sZDtcbiAgICBpZihmbG9hdFN0YXR1cy50b3AgPCBmbG9hdE9wdGlvbnMueU1pblRocmVzaG9sZCkgZmxvYXRTdGF0dXMudG9wID0gZmxvYXRPcHRpb25zLnlNaW5UaHJlc2hvbGQ7XG4gICAgaWYoZmxvYXRTdGF0dXMubGVmdCA+IGZsb2F0T3B0aW9ucy54TWF4VGhyZXNob2xkKSBmbG9hdFN0YXR1cy5sZWZ0ID0gZmxvYXRPcHRpb25zLnhNYXhUaHJlc2hvbGQ7XG4gICAgaWYoZmxvYXRTdGF0dXMubGVmdCA8IGZsb2F0T3B0aW9ucy54TWluVGhyZXNob2xkKSBmbG9hdFN0YXR1cy5sZWZ0ID0gZmxvYXRPcHRpb25zLnhNaW5UaHJlc2hvbGQ7XG5cbiAgICBmb3IobGV0IGtleSBpbiBmbG9hdFN0YXR1cykge1xuICAgICAgICB0aGlzLmJhY2t1cC5fZmxvYXRTdGF0dXNba2V5XSA9IGZsb2F0U3RhdHVzW2tleV07XG4gICAgfVxuXG4gICAgbGV0IG9mZnNldFR5cGUgPSBmbG9hdE9wdGlvbnMuaGFzT3duUHJvcGVydHkoJ29mZnNldFR5cGUnKT8gZmxvYXRPcHRpb25zLm9mZnNldFR5cGUgOiAnJztcblxuICAgIC8v6K+35Yqh5b+F6K6+572uZmxvYXRQb3NpdGlvbu+8jOWQpuWImeS4jeeUn+aViFxuICAgIHRoaXMubW9uaXRvci5mbG9hdFBvc2l0aW9uID0ge1xuICAgICAgICB0b3A6IGZsb2F0U3RhdHVzLnRvcCArIG9mZnNldFR5cGUsXG4gICAgICAgIGxlZnQ6IGZsb2F0U3RhdHVzLmxlZnQgKyBvZmZzZXRUeXBlLFxuICAgIH1cbn1cblxuLy/pu5jorqTmta7liqjmlrnlvI/jgILmsr/nnYDln7rlh4blhYPntKDlt6bkuIrop5LliLDlj7PkuIvop5Lnm7Tnur/mta7liqhcbi8v55So5oi36Ieq5a6a5LmJ5rWu5Yqo5pa55rOV77yM5Y+v5Y+C6ICD6K+l5pa55rOV44CCXG50aXBzLnByb3RvdHlwZS5mbG9hdFR5cGVEZWZhdWx0ID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIGxldCBjdXN0b21GbG9hdE9wdGlvbnMgPSB7XG4gICAgICAgIHN0YXR1czogdHJ1ZSxcbiAgICAgICAgeE9mZnNldExlbjogMC4wMDA1LFxuICAgICAgICB5T2Zmc2V0TGVuOiAwLjAwMDUsXG4gICAgICAgIGRlbGF5OiAxLFxuICAgIH07XG5cbiAgICBsZXQgY3VzdG9tRmxvYXRTdGF0dXMgPSB7XG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICB9O1xuXG4gICAgbGV0IGZsb2F0T3B0aW9ucyA9IHRoaXMuc2V0RmxvYXRPcHRpb25zKGN1c3RvbUZsb2F0T3B0aW9ucyk7XG4gICAgbGV0IGZsb2F0U3RhdHVzID0gdGhpcy5nZXRmbG9hdFN0YXR1cyhjdXN0b21GbG9hdFN0YXR1cyk7XG5cbiAgICBpZihmbG9hdE9wdGlvbnMuZmxvYXRJZCkgY2xlYXJJbnRlcnZhbChmbG9hdE9wdGlvbnMuZmxvYXRJZCk7XG4gICAgZmxvYXRPcHRpb25zLmZsb2F0SWQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xuICAgICAgICBpZigoZmxvYXRTdGF0dXMudG9wID49IGZsb2F0T3B0aW9ucy55TWF4VGhyZXNob2xkICYmIGZsb2F0T3B0aW9ucy5zdGF0dXMpIHx8IChmbG9hdFN0YXR1cy50b3AgPD0gZmxvYXRPcHRpb25zLnlNaW5UaHJlc2hvbGQgJiYgIWZsb2F0T3B0aW9ucy5zdGF0dXMpKSB7XG4gICAgICAgICAgICBmbG9hdE9wdGlvbnMuc3RhdHVzID0gIWZsb2F0T3B0aW9ucy5zdGF0dXM7XG4gICAgICAgIH1cblxuICAgICAgICBpZihmbG9hdE9wdGlvbnMuc3RhdHVzKSB7XG4gICAgICAgICAgICBmbG9hdFN0YXR1cy50b3AgPSBmbG9hdFN0YXR1cy50b3AgKyBmbG9hdE9wdGlvbnMueU9mZnNldDtcbiAgICAgICAgICAgIGZsb2F0U3RhdHVzLmxlZnQgPSBmbG9hdFN0YXR1cy5sZWZ0ICsgZmxvYXRPcHRpb25zLnhPZmZzZXQ7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIGZsb2F0U3RhdHVzLnRvcCA9IGZsb2F0U3RhdHVzLnRvcCAtIGZsb2F0T3B0aW9ucy55T2Zmc2V0O1xuICAgICAgICAgICAgZmxvYXRTdGF0dXMubGVmdCA9IGZsb2F0U3RhdHVzLmxlZnQgLSBmbG9hdE9wdGlvbnMueE9mZnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzLnNldEZsb2F0U3RhdHVzKGZsb2F0U3RhdHVzLCBmbG9hdE9wdGlvbnMpO1xuICAgIH0sIGZsb2F0T3B0aW9ucy5kZWxheSk7XG59O1xuXG4vL1gg5rWu5YqoXG4vL+a1ruWKqOaWueWQkeaYryDlt6bkuIrop5ItPuWPs+S4i+inki0+5Y+z5LiK6KeSLT7lt6bkuIvop5ItPuW3puS4iuinki4uLlxudGlwcy5wcm90b3R5cGUuZmxvYXRUeXBlWCA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBsZXQgY3VzdG9tRmxvYXRPcHRpb25zID0ge1xuICAgICAgICBzdGF0dXM6IDEsXG4gICAgICAgIG9mZnNldFR5cGU6ICclJyxcbiAgICAgICAgeE1pblRocmVzaG9sZDogMCxcbiAgICAgICAgeE1heFRocmVzaG9sZDogMTAwLFxuICAgICAgICB4T2Zmc2V0TGVuOiAwLjAxLFxuICAgICAgICB5TWluVGhyZXNob2xkOiAwLFxuICAgICAgICB5TWF4VGhyZXNob2xkOiAxMDAsXG4gICAgICAgIHlPZmZzZXRMZW46IDAuMDEsXG4gICAgICAgIGRlbGF5OiAxLFxuICAgIH07XG4gICAgXG4gICAgbGV0IGN1c3RvbUZsb2F0U3RhdHVzID0ge1xuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgfTtcblxuICAgIGxldCBmbG9hdE9wdGlvbnMgPSB0aGlzLnNldEZsb2F0T3B0aW9ucyhjdXN0b21GbG9hdE9wdGlvbnMpO1xuICAgIGxldCBmbG9hdFN0YXR1cyA9IHRoaXMuZ2V0ZmxvYXRTdGF0dXMoY3VzdG9tRmxvYXRTdGF0dXMpO1xuXG4gICAgaWYoZmxvYXRPcHRpb25zLmZsb2F0SWQpIGNsZWFySW50ZXJ2YWwoZmxvYXRPcHRpb25zLmZsb2F0SWQpO1xuICAgIGZsb2F0T3B0aW9ucy5mbG9hdElkID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoZmxvYXRTdGF0dXMudG9wIDw9IGZsb2F0T3B0aW9ucy55TWluVGhyZXNob2xkICYmIGZsb2F0U3RhdHVzLmxlZnQgPD0gZmxvYXRPcHRpb25zLnhNaW5UaHJlc2hvbGQpIHtcbiAgICAgICAgICAgIGZsb2F0T3B0aW9ucy5zdGF0dXMgPSAxO1xuICAgICAgICB9ZWxzZSBpZihmbG9hdFN0YXR1cy50b3AgPj0gZmxvYXRPcHRpb25zLnlNYXhUaHJlc2hvbGQgJiYgZmxvYXRTdGF0dXMubGVmdCA+PSBmbG9hdE9wdGlvbnMueE1heFRocmVzaG9sZCkge1xuICAgICAgICAgICAgZmxvYXRPcHRpb25zLnN0YXR1cyA9IDI7XG4gICAgICAgIH1lbHNlIGlmKGZsb2F0U3RhdHVzLnRvcCA8PSBmbG9hdE9wdGlvbnMueU1pblRocmVzaG9sZCAmJiBmbG9hdFN0YXR1cy5sZWZ0ID49IGZsb2F0T3B0aW9ucy54TWF4VGhyZXNob2xkKSB7XG4gICAgICAgICAgICBmbG9hdE9wdGlvbnMuc3RhdHVzID0gMztcbiAgICAgICAgfWVsc2UgaWYoZmxvYXRTdGF0dXMudG9wID49IGZsb2F0T3B0aW9ucy55TWF4VGhyZXNob2xkICYmIGZsb2F0U3RhdHVzLmxlZnQgPD0gZmxvYXRPcHRpb25zLnhNaW5UaHJlc2hvbGQpIHtcbiAgICAgICAgICAgIGZsb2F0T3B0aW9ucy5zdGF0dXMgPSA0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoZmxvYXRPcHRpb25zLnN0YXR1cyA9PSAxKSB7XG4gICAgICAgICAgICBmbG9hdFN0YXR1cy50b3AgPSBmbG9hdFN0YXR1cy50b3AgKyBmbG9hdE9wdGlvbnMueU9mZnNldDtcbiAgICAgICAgICAgIGZsb2F0U3RhdHVzLmxlZnQgPSBmbG9hdFN0YXR1cy5sZWZ0ICsgZmxvYXRPcHRpb25zLnhPZmZzZXQ7XG4gICAgICAgIH1lbHNlIGlmKGZsb2F0T3B0aW9ucy5zdGF0dXMgPT0gMikge1xuICAgICAgICAgICAgZmxvYXRTdGF0dXMudG9wID0gZmxvYXRTdGF0dXMudG9wIC0gZmxvYXRPcHRpb25zLnlPZmZzZXQ7XG4gICAgICAgIH1lbHNlIGlmKGZsb2F0T3B0aW9ucy5zdGF0dXMgPT0gMykge1xuICAgICAgICAgICAgZmxvYXRTdGF0dXMudG9wID0gZmxvYXRTdGF0dXMudG9wICsgZmxvYXRPcHRpb25zLnlPZmZzZXQ7XG4gICAgICAgICAgICBmbG9hdFN0YXR1cy5sZWZ0ID0gZmxvYXRTdGF0dXMubGVmdCAtIGZsb2F0T3B0aW9ucy54T2Zmc2V0O1xuICAgICAgICB9ZWxzZSBpZihmbG9hdE9wdGlvbnMuc3RhdHVzID09IDQpIHtcbiAgICAgICAgICAgIGZsb2F0U3RhdHVzLnRvcCA9IGZsb2F0U3RhdHVzLnRvcCAtIGZsb2F0T3B0aW9ucy55T2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMuc2V0RmxvYXRTdGF0dXMoZmxvYXRTdGF0dXMsIGZsb2F0T3B0aW9ucyk7XG4gICAgfSwgZmxvYXRPcHRpb25zLmRlbGF5KTtcbn07XG5cbi8v5pa55b2i5rWu5YqoXG4vL+a1ruWKqOaWueWQkeaYryDlt6bkuIrop5ItPuWPs+S4iuinki0+5Y+z5LiL6KeSLT7lt6bkuIvop5ItPuW3puS4iuinki4uLlxudGlwcy5wcm90b3R5cGUuZmxvYXRUeXBlU3F1YXJlID0gIGZ1bmN0aW9uKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBsZXQgY3VzdG9tRmxvYXRPcHRpb25zID0ge1xuICAgICAgICBzdGF0dXM6IDEsXG4gICAgICAgIG9mZnNldFR5cGU6ICclJyxcbiAgICAgICAgeE1pblRocmVzaG9sZDogMCxcbiAgICAgICAgeE1heFRocmVzaG9sZDogMTAwLFxuICAgICAgICB4T2Zmc2V0TGVuOiAwLjAxLFxuICAgICAgICB5TWluVGhyZXNob2xkOiAwLFxuICAgICAgICB5TWF4VGhyZXNob2xkOiAxMDAsXG4gICAgICAgIHlPZmZzZXRMZW46IDAuMDEsXG4gICAgICAgIGRlbGF5OiAxLFxuICAgIH07XG5cbiAgICBsZXQgY3VzdG9tRmxvYXRTdGF0dXMgPSB7XG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICB9O1xuXG4gICAgbGV0IGZsb2F0T3B0aW9ucyA9IHRoaXMuc2V0RmxvYXRPcHRpb25zKGN1c3RvbUZsb2F0T3B0aW9ucyk7XG4gICAgbGV0IGZsb2F0U3RhdHVzID0gdGhpcy5nZXRmbG9hdFN0YXR1cyhjdXN0b21GbG9hdFN0YXR1cyk7XG5cbiAgICBpZihmbG9hdE9wdGlvbnMuZmxvYXRJZCkgY2xlYXJJbnRlcnZhbChmbG9hdE9wdGlvbnMuZmxvYXRJZCk7XG4gICAgZmxvYXRPcHRpb25zLmZsb2F0SWQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xuICAgICAgICBpZihmbG9hdE9wdGlvbnMueU1pblRocmVzaG9sZCAhPSBmbG9hdE9wdGlvbnMueU1heFRocmVzaG9sZCAmJiBmbG9hdE9wdGlvbnMueE1pblRocmVzaG9sZCAhPSBmbG9hdE9wdGlvbnMueE1heFRocmVzaG9sZCl7XG4gICAgICAgICAgICBpZihmbG9hdFN0YXR1cy50b3AgPD0gZmxvYXRPcHRpb25zLnlNaW5UaHJlc2hvbGQgJiYgZmxvYXRTdGF0dXMubGVmdCA8PSBmbG9hdE9wdGlvbnMueE1pblRocmVzaG9sZCkge1xuICAgICAgICAgICAgICAgIGZsb2F0T3B0aW9ucy5zdGF0dXMgPSAxO1xuICAgICAgICAgICAgfWVsc2UgaWYoZmxvYXRTdGF0dXMudG9wIDw9IGZsb2F0T3B0aW9ucy55TWluVGhyZXNob2xkICYmIGZsb2F0U3RhdHVzLmxlZnQgPj0gZmxvYXRPcHRpb25zLnhNYXhUaHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICBmbG9hdE9wdGlvbnMuc3RhdHVzID0gMjtcbiAgICAgICAgICAgIH1lbHNlIGlmKGZsb2F0U3RhdHVzLnRvcCA+PSBmbG9hdE9wdGlvbnMueU1heFRocmVzaG9sZCAmJiBmbG9hdFN0YXR1cy5sZWZ0ID49IGZsb2F0T3B0aW9ucy54TWF4VGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgZmxvYXRPcHRpb25zLnN0YXR1cyA9IDM7XG4gICAgICAgICAgICB9ZWxzZSBpZihmbG9hdFN0YXR1cy50b3AgPj0gZmxvYXRPcHRpb25zLnlNYXhUaHJlc2hvbGQgJiYgZmxvYXRTdGF0dXMubGVmdCA8PSBmbG9hdE9wdGlvbnMueE1pblRocmVzaG9sZCkge1xuICAgICAgICAgICAgICAgIGZsb2F0T3B0aW9ucy5zdGF0dXMgPSA0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYoZmxvYXRPcHRpb25zLnlNaW5UaHJlc2hvbGQgPT0gZmxvYXRPcHRpb25zLnlNYXhUaHJlc2hvbGQgJiYgZmxvYXRPcHRpb25zLnhNaW5UaHJlc2hvbGQgIT0gZmxvYXRPcHRpb25zLnhNYXhUaHJlc2hvbGQpe1xuICAgICAgICAgICAgaWYoZmxvYXRTdGF0dXMubGVmdCA8PSBmbG9hdE9wdGlvbnMueE1pblRocmVzaG9sZCkge1xuICAgICAgICAgICAgICAgIGZsb2F0T3B0aW9ucy5zdGF0dXMgPSA1O1xuICAgICAgICAgICAgfWVsc2UgaWYoZmxvYXRTdGF0dXMubGVmdCA+PSBmbG9hdE9wdGlvbnMueE1heFRocmVzaG9sZCkge1xuICAgICAgICAgICAgICAgIGZsb2F0T3B0aW9ucy5zdGF0dXMgPSA2O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYoZmxvYXRPcHRpb25zLnlNaW5UaHJlc2hvbGQgIT0gZmxvYXRPcHRpb25zLnlNYXhUaHJlc2hvbGQgJiYgZmxvYXRPcHRpb25zLnhNaW5UaHJlc2hvbGQgPT0gZmxvYXRPcHRpb25zLnhNYXhUaHJlc2hvbGQpe1xuICAgICAgICAgICAgaWYoZmxvYXRTdGF0dXMudG9wIDw9IGZsb2F0T3B0aW9ucy55TWluVGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgZmxvYXRPcHRpb25zLnN0YXR1cyA9IDc7XG4gICAgICAgICAgICB9ZWxzZSBpZihmbG9hdFN0YXR1cy50b3AgPj0gZmxvYXRPcHRpb25zLnlNYXhUaHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICBmbG9hdE9wdGlvbnMuc3RhdHVzID0gODtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGZsb2F0T3B0aW9ucy5zdGF0dXMgPT0gMSkge1xuICAgICAgICAgICAgZmxvYXRTdGF0dXMubGVmdCA9IGZsb2F0U3RhdHVzLmxlZnQgKyBmbG9hdE9wdGlvbnMueE9mZnNldDtcbiAgICAgICAgfWVsc2UgaWYoZmxvYXRPcHRpb25zLnN0YXR1cyA9PSAyKSB7XG4gICAgICAgICAgICBmbG9hdFN0YXR1cy50b3AgPSBmbG9hdFN0YXR1cy50b3AgKyBmbG9hdE9wdGlvbnMueU9mZnNldDtcbiAgICAgICAgfWVsc2UgaWYoZmxvYXRPcHRpb25zLnN0YXR1cyA9PSAzKSB7XG4gICAgICAgICAgICBmbG9hdFN0YXR1cy5sZWZ0ID0gZmxvYXRTdGF0dXMubGVmdCAtIGZsb2F0T3B0aW9ucy54T2Zmc2V0O1xuICAgICAgICB9ZWxzZSBpZihmbG9hdE9wdGlvbnMuc3RhdHVzID09IDQpIHtcbiAgICAgICAgICAgIGZsb2F0U3RhdHVzLnRvcCA9IGZsb2F0U3RhdHVzLnRvcCAtIGZsb2F0T3B0aW9ucy55T2Zmc2V0O1xuICAgICAgICB9ZWxzZSBpZihmbG9hdE9wdGlvbnMuc3RhdHVzID09IDUpIHtcbiAgICAgICAgICAgIGZsb2F0U3RhdHVzLmxlZnQgPSBmbG9hdFN0YXR1cy5sZWZ0ICsgZmxvYXRPcHRpb25zLnhPZmZzZXQ7XG4gICAgICAgIH1lbHNlIGlmKGZsb2F0T3B0aW9ucy5zdGF0dXMgPT0gNikge1xuICAgICAgICAgICAgZmxvYXRTdGF0dXMubGVmdCA9IGZsb2F0U3RhdHVzLmxlZnQgLSBmbG9hdE9wdGlvbnMueE9mZnNldDtcbiAgICAgICAgfWVsc2UgaWYoZmxvYXRPcHRpb25zLnN0YXR1cyA9PSA3KSB7XG4gICAgICAgICAgICBmbG9hdFN0YXR1cy50b3AgPSBmbG9hdFN0YXR1cy50b3AgKyBmbG9hdE9wdGlvbnMueU9mZnNldDtcbiAgICAgICAgfWVsc2UgaWYoZmxvYXRPcHRpb25zLnN0YXR1cyA9PSA4KSB7XG4gICAgICAgICAgICBmbG9hdFN0YXR1cy50b3AgPSBmbG9hdFN0YXR1cy50b3AgLSBmbG9hdE9wdGlvbnMueU9mZnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzLnNldEZsb2F0U3RhdHVzKGZsb2F0U3RhdHVzLCBmbG9hdE9wdGlvbnMpO1xuICAgIH0sIGZsb2F0T3B0aW9ucy5kZWxheSk7XG59O1xuXG50aXBzLnByb3RvdHlwZS5zZXRGbG9hdFR5cGUgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgb3B0RmxvYXRUeXBlID0gdGhpcy5vcHRpb25zLmZsb2F0LnR5cGU7XG4gICAgbGV0IGZsb2F0RnVuID0gJ2Zsb2F0VHlwZScgKyBvcHRGbG9hdFR5cGUuc2xpY2UoMCwgMSkudG9VcHBlckNhc2UoKSArIG9wdEZsb2F0VHlwZS5zbGljZSgxKTtcbiAgICBpZih0aGlzW2Zsb2F0RnVuXSkge1xuICAgICAgICB0aGlzW2Zsb2F0RnVuXSgpO1xuICAgIH1lbHNlIHtcbiAgICAgICAgdGhpcy5mbG9hdFR5cGVEZWZhdWx0KCk7XG4gICAgfVxufTtcblxudGlwcy5wcm90b3R5cGUuc2V0RmxvYXRFdmVudHMgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIGxldCAkdGlwID0gX3RoaXMuYmFja3VwLl90aXBFbG07XG4gICAgbGV0IGZsb2F0RmxhZyA9IDA7XG5cbiAgICBsZXQgaG92ZXJJbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZihfdGhpcy5mbG9hdE9wdGlvbnMuZmxvYXRJZCkgY2xlYXJJbnRlcnZhbChfdGhpcy5mbG9hdE9wdGlvbnMuZmxvYXRJZCk7XG4gICAgfVxuICAgIGxldCBob3Zlck91dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBfdGhpcy5zZXRGbG9hdFBvc2l0aW9uKCsrZmxvYXRGbGFnKTtcbiAgICB9XG4gICAgXG4gICAgJHRpcC5vbm1vdXNlZW50ZXIgPSBob3ZlckluO1xuICAgICR0aXAub25tb3VzZWxlYXZlID0gaG92ZXJPdXQ7XG59O1xuXG50aXBzLnByb3RvdHlwZS5zZXRGbG9hdFBvc2l0aW9uID0gZnVuY3Rpb24oZmxvYXRGbGFnID0gMCkge1xuICAgIHRoaXMub3B0aW9ucy5ldmVudHMuYmVmb3JlRmxvYXRlZC5jYWxsKHRoaXMsIGZsb2F0RmxhZyk7ICAgICAgLy9UaXBzIOa1ruWKqOS5i+WJjSDop6blj5FcblxuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgbGV0ICR0aXAgPSBfdGhpcy5iYWNrdXAuX3RpcEVsbTtcbiAgICBsZXQgJHRpcEdyb3VwID0gdGhpcy5iYWNrdXAuX3RpcEdyb3VwRWxtO1xuICAgIGxldCAkYmFzZSA9IF90aGlzLmJhY2t1cC5fYmFzZUVsbTtcblxuICAgIEMuY3NzKCR0aXBHcm91cCwge2Rpc3BsYXk6ICdub25lJ30pO1xuICAgIGxldCB0aXBQb3NpdGlvbiA9IF90aGlzLmdldFBvc2l0aW9uKHt9KTtcbiAgICBDLmFkZENsYXNzKCR0aXBHcm91cCwgdGlwUG9zaXRpb24uY2xhc3MudGlwQ2xhc3MpO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KF90aGlzLm1vbml0b3IsICdmbG9hdFBvc2l0aW9uJywge1xuICAgICAgICBnZXQ6ZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHJldHVybiBmbG9hdFBvc2l0aW9uO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6ZnVuY3Rpb24obmV3VmFsdWUpe1xuICAgICAgICAgICAgbGV0IGZsb2F0UG9zaXRpb24gPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgIGxldCB0aXBQb3NpdGlvbiA9IF90aGlzLmdldFBvc2l0aW9uKGZsb2F0UG9zaXRpb24pO1xuICAgICAgICAgICAgQy5hZGRDc3MoJHRpcEdyb3VwLCB0aXBQb3NpdGlvbi5zdHlsZSk7XG4gICAgICAgICAgICBDLmFkZENzcygkdGlwR3JvdXAsIHtkaXNwbGF5OiAnYmxvY2snfSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmKHR5cGVvZiBfdGhpcy5vcHRpb25zLmZsb2F0LmN1c3RvbUZsb2F0RnVudGlvbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIF90aGlzLm9wdGlvbnMuZmxvYXQuY3VzdG9tRmxvYXRGdW50aW9uLmNhbGwoX3RoaXMpO1xuICAgIH1lbHNlIHtcbiAgICAgICAgX3RoaXMuc2V0RmxvYXRUeXBlKCk7XG4gICAgfVxuXG4gICAgaWYoZmxvYXRGbGFnID09PSAwKSBfdGhpcy5zZXRGbG9hdEV2ZW50cygpO1xuXG4gICAgdGhpcy5vcHRpb25zLmV2ZW50cy5mbG9hdGVkLmNhbGwodGhpcywgZmxvYXRGbGFnKTsgICAgICAvL1RpcHMg5rWu5Yqo5LmL5ZCOIOinpuWPkVxufTtcblxuLyoqXG4gKiDorr7nva7mta7liqjlj4LmlbDjgILmlK/mjIHnlKjmiLfoh6rlrprkuYnjgIIg5pSv5oyB55qE5Y+C5pWw5pyJ77yM5Y+C6ICDIHRpcHMuZmxvYXRPcHRpb25zXG4gKiB0b3BTdGFydDogMCwgICAgICAgICAgICAgICAgLy/mta7liqjotbflp4vkvY3nva4gVG9wXG4gKiBsZWZ0U3RhcnQ6IDAsICAgICAgICAgICAgICAgLy/mta7liqjotbflp4vkvY3nva4gTGVmdFxuICogc3RhdHVzOiB0cnVlLCAgICAgICAgICAgICAgIC8v5rWu5Yqo54q25oCB77yM5LiA6Iis55So5LqO6L2s5oqY54K55pS55Y+Y5pa55ZCR6LaL5Yq/XG4gKiBvZmZzZXRUeXBlOiAnJywgICAgICAgICAgICAgLy/mr4/mrKHmlLnlj5jnirbmgIHph4/nmoTnsbvlnovvvIxweCDmiJYg55m+5YiG5q+U77yM6buY6K6kcHhcbiAqIHhNaW5UaHJlc2hvbGQ6IDAsICAgICAgICAgICAvL3jovbTnm7jlr7nkuo7ln7rlh4blhYPntKDnmoTmnIDlsI/lgY/lt67lgLxcbiAqIHhNYXhUaHJlc2hvbGQ6ICcnLCAgICAgICAgICAvL3jovbTnm7jlr7nkuo7ln7rlh4blhYPntKDnmoTmnIDlpKflgY/lt67lgLxcbiAqIHhPZmZzZXRMZW46IDEsICAgICAgICAgICAgICAvL3jovbTkuIDmrKHnmoTlgY/lt67ph49cbiAqIHlNaW5UaHJlc2hvbGQ6IDAsICAgICAgICAgICAvL3novbTnm7jlr7nkuo7ln7rlh4blhYPntKDnmoTmnIDlsI/lgY/lt67lgLxcbiAqIHlNYXhUaHJlc2hvbGQ6ICcnLCAgICAgICAgICAvL3novbTnm7jlr7nkuo7ln7rlh4blhYPntKDnmoTmnIDlpKflgY/lt67lgLxcbiAqIHlPZmZzZXRMZW46IDEsICAgICAgICAgICAgICAvL3novbTkuIDmrKHnmoTlgY/lt67ph49cbiAqIGRlbGF5OiAxLCAgICAgICAgICAgICAgICAgICAvL+a1ruWKqOS9jee9rueahOaXtumXtOmXtOmalO+8jOWNleS9jeavq+enklxuICogXG4gKiBAcGFyYW0gICAgT2JqZWN0ICAgICAgICAgICAgICAgICBjdXN0b21GbG9hdE9wdGlvbnMg5Ye95pWw5YaF6Ieq5a6a5LmJ5rWu5Yqo5Y+C5pWw77yM5LyY5YWI57qn5L2O5LqO55So5oi36Ieq5a6a5LmJ5rWu5Yqo5Y+C5pWwXG4gKi9cbnRpcHMucHJvdG90eXBlLnNldEZsb2F0VHJhbnNsYXRlT3B0aW9ucyA9IGZ1bmN0aW9uKGN1c3RvbUZsb2F0T3B0aW9ucykge1xuICAgIC8v56qX5Y+j5Y+R55Sf5Y+Y5YyW5pe26ZyA6KaB6YeN5paw5a6a5LmJZmxvYXRcbiAgICAvL+iLpeS4jeaYr+mmluasoeiuvue9ru+8jOWImei/mOWOn+W9k+WJjeeKtuaAgVxuICAgIGxldCBiYWNrdXBmbG9hdE9wdGlvbnMgPSB7fTtcbiAgICAvL+azqOaEjyB0aGlzLmZsb2F0T3B0aW9ucyDlkowgdGlwcy5mbG9hdE9wdGlvbnMg5LiN5ZCMXG4gICAgLy/liY3ogIXmmK/lvZPliY3lrp7kvovnmoTmta7liqjlj4LmlbDvvIwg5ZCO6ICF5piv6buY6K6k5Y+C5pWwXG4gICAgaWYodGhpcy5mbG9hdE9wdGlvbnMpIHtcbiAgICAgICAgYmFja3VwZmxvYXRPcHRpb25zLnN0YXR1cyA9IHRoaXMuZmxvYXRPcHRpb25zLnN0YXR1czsgICAgICAgLy/lvZPliY3nirbmgIHvvIzkuIDoiKzmmK/ovazmipjngrnnirbmgIFcbiAgICAgICAgYmFja3VwZmxvYXRPcHRpb25zLmZsb2F0SWQgPSB0aGlzLmZsb2F0T3B0aW9ucy5mbG9hdElkOyAgICAgLy/mr4/kuKrmta7liqjpg73mmK/kvp3pnaBzZXRJbnRlcnZhbCDlrp7njrDnmoTvvIzmraTkuLrlhbZpZFxuICAgIH07XG5cbiAgICAvL+eUqOaIt+iHquWumuS5iea1ruWKqOWPguaVsO+8jOS8mOWFiOe6p+mrmOS6juWHveaVsOWGheiHquWumuS5iea1ruWKqOWPguaVsFxuICAgIGlmKHRoaXMub3B0aW9ucy5mbG9hdC5jdXN0b21GbG9hdE9wdGlvbnMpIGN1c3RvbUZsb2F0T3B0aW9ucyA9IHRoaXMub3B0aW9ucy5mbG9hdC5jdXN0b21GbG9hdE9wdGlvbnM7XG5cbiAgICBsZXQgZmxvYXRPcHRpb25zID0gQy5leHRlbmQoe30sIHRpcHMuZmxvYXRPcHRpb25zLCBjdXN0b21GbG9hdE9wdGlvbnMsIGJhY2t1cGZsb2F0T3B0aW9ucyk7XG5cbiAgICBsZXQgZWxlRGV0YWlscyA9IHRoaXMuZ2V0RWxlbWVudERldGFpbHMoKTtcblxuICAgIGZsb2F0T3B0aW9ucy54TWluVGhyZXNob2xkID0gIUMuaXNFbXB0eU51bShmbG9hdE9wdGlvbnMueE1pblRocmVzaG9sZCk/IGZsb2F0T3B0aW9ucy54TWluVGhyZXNob2xkIDogMDtcbiAgICBmbG9hdE9wdGlvbnMueU1pblRocmVzaG9sZCA9ICFDLmlzRW1wdHlOdW0oZmxvYXRPcHRpb25zLnlNaW5UaHJlc2hvbGQpPyBmbG9hdE9wdGlvbnMueU1pblRocmVzaG9sZCA6IDA7XG5cbiAgICAvL+iuvue9ruacgOWkp+acgOWwj+WAvO+8jOS4gOiIrOacgOWwj+WAvDDvvIzmnIDlpKflgLzop4bmg4XlhrXogIzlrprvvIzoi6XmmK/kuIDoiKzmg4XlhrXvvIhweO+8ieWImeS4uuWFg+e0oOeahOacgOWkp+mYiOWAvO+8jOWmguaYr+eZvuWIhuavlO+8jOWImeS4ujEwMCVcbiAgICBpZihmbG9hdE9wdGlvbnMuaGFzT3duUHJvcGVydHkoJ29mZnNldFR5cGUnKSAmJiBmbG9hdE9wdGlvbnMub2Zmc2V0VHlwZSA9PT0gJyUnKSB7XG4gICAgICAgIGZsb2F0T3B0aW9ucy54TWF4VGhyZXNob2xkID0gIUMuaXNFbXB0eU51bShmbG9hdE9wdGlvbnMueE1heFRocmVzaG9sZCk/IGZsb2F0T3B0aW9ucy54TWF4VGhyZXNob2xkIDogMTAwO1xuICAgICAgICBmbG9hdE9wdGlvbnMueU1heFRocmVzaG9sZCA9ICFDLmlzRW1wdHlOdW0oZmxvYXRPcHRpb25zLnlNYXhUaHJlc2hvbGQpPyBmbG9hdE9wdGlvbnMueU1heFRocmVzaG9sZCA6IDEwMDtcbiAgICAgICAgZmxvYXRPcHRpb25zLnhPZmZzZXQgPSBmbG9hdE9wdGlvbnMueE9mZnNldExlbjtcbiAgICAgICAgZmxvYXRPcHRpb25zLnlPZmZzZXQgPSBmbG9hdE9wdGlvbnMueU9mZnNldExlbjtcbiAgICB9ZWxzZSB7XG4gICAgICAgIGZsb2F0T3B0aW9ucy54TWF4VGhyZXNob2xkID0gIUMuaXNFbXB0eU51bShmbG9hdE9wdGlvbnMueE1heFRocmVzaG9sZCk/IGZsb2F0T3B0aW9ucy54TWF4VGhyZXNob2xkIDogZWxlRGV0YWlscy5sZWZ0VGhyZXNob2xkO1xuICAgICAgICBmbG9hdE9wdGlvbnMueU1heFRocmVzaG9sZCA9ICFDLmlzRW1wdHlOdW0oZmxvYXRPcHRpb25zLnlNYXhUaHJlc2hvbGQpPyBmbG9hdE9wdGlvbnMueU1heFRocmVzaG9sZCA6IGVsZURldGFpbHMudG9wVGhyZXNob2xkO1xuICAgICAgICBmbG9hdE9wdGlvbnMueE9mZnNldCA9IChmbG9hdE9wdGlvbnMueE1heFRocmVzaG9sZCAtIGZsb2F0T3B0aW9ucy54TWluVGhyZXNob2xkKSAqIGZsb2F0T3B0aW9ucy54T2Zmc2V0TGVuO1xuICAgICAgICBmbG9hdE9wdGlvbnMueU9mZnNldCA9IChmbG9hdE9wdGlvbnMueU1heFRocmVzaG9sZC0gZmxvYXRPcHRpb25zLnlNaW5UaHJlc2hvbGQpICogZmxvYXRPcHRpb25zLnlPZmZzZXRMZW47XG4gICAgfVxuXG4gICAgdGhpcy5mbG9hdE9wdGlvbnMgPSBmbG9hdE9wdGlvbnM7XG5cbiAgICByZXR1cm4gdGhpcy5mbG9hdE9wdGlvbnM7XG59XG5cbi8v5b2T6ZyA6KaB6YeN5paw6K6+572uZmxvYXTvvIzlpoLnqpflj6PvvIzln7rlh4blhYPntKDlj5HnlJ/mlLnlj5jvvIzoi6XkuI3mmK/pppbmrKHorr7nva7vvIzliJnov5jljp/lvZPliY3nirbmgIFcbnRpcHMucHJvdG90eXBlLmdldGZsb2F0VHJhbnNsYXRlU3RhdHVzID0gZnVuY3Rpb24oY3VzdG9tRmxvYXRTdGF0dXMpIHtcbiAgICBpZih0aGlzLm9wdGlvbnMuZmxvYXQuY3VzdG9tRmxvYXRTdGF0dXMpIHtcbiAgICAgICAgY3VzdG9tRmxvYXRTdGF0dXMgPSB0aGlzLm9wdGlvbnMuZmxvYXQuY3VzdG9tRmxvYXRTdGF0dXM7XG4gICAgfWVsc2UgaWYoIWN1c3RvbUZsb2F0U3RhdHVzKXtcbiAgICAgICAgY3VzdG9tRmxvYXRTdGF0dXMgPSB7XG4gICAgICAgICAgICB0b3A6IHRpcHMuZmxvYXRPcHRpb25zLnRvcFN0YXJ0LFxuICAgICAgICAgICAgbGVmdDogdGlwcy5mbG9hdE9wdGlvbnMubGVmdFN0YXJ0LFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy/ku47lpIfku73nmoTnirbmgIHkuK3mgaLlpI1cbiAgICBmb3IobGV0IGtleSBpbiBjdXN0b21GbG9hdFN0YXR1cykge1xuICAgICAgICBpZih0aGlzLmJhY2t1cC5fZmxvYXRTdGF0dXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgY3VzdG9tRmxvYXRTdGF0dXNba2V5XSA9IHRoaXMuYmFja3VwLl9mbG9hdFN0YXR1c1trZXldO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJhY2t1cC5fZmxvYXRTdGF0dXNba2V5XSA9IGN1c3RvbUZsb2F0U3RhdHVzW2tleV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY3VzdG9tRmxvYXRTdGF0dXM7XG59XG5cbi8qKlxuICog6K6+572u5b2T5YmNdHJhbnNsYXRlIOeKtuaAgVxuICogQERhdGVUaW1lIDIwMjAtMDUtMjRUMjE6MDE6MzIrMDgwMFxuICovXG50aXBzLnByb3RvdHlwZS5zZXRGbG9hdFRyYW5zbGF0ZVN0YXR1cyA9IGZ1bmN0aW9uKGZsb2F0U3RhdHVzLCBmbG9hdE9wdGlvbnMpIHtcbiAgICAvL+eKtuaAgeS4jeiDvei2heWHuuS4tOeVjOWAvO+8jOS4gOiIrOebrueahOaYr+S4uuS6huS/neivgeS4jei2heWHuuWfuuWHhuWFg+e0oCjljbPkuLTnlYzlgLzkuI3otoXlh7rln7rlh4blhYPntKApXG4gICAgaWYoZmxvYXRTdGF0dXMudG9wID4gZmxvYXRPcHRpb25zLnlNYXhUaHJlc2hvbGQpIGZsb2F0U3RhdHVzLnRvcCA9IGZsb2F0T3B0aW9ucy55TWF4VGhyZXNob2xkO1xuICAgIGlmKGZsb2F0U3RhdHVzLnRvcCA8IGZsb2F0T3B0aW9ucy55TWluVGhyZXNob2xkKSBmbG9hdFN0YXR1cy50b3AgPSBmbG9hdE9wdGlvbnMueU1pblRocmVzaG9sZDtcbiAgICBpZihmbG9hdFN0YXR1cy5sZWZ0ID4gZmxvYXRPcHRpb25zLnhNYXhUaHJlc2hvbGQpIGZsb2F0U3RhdHVzLmxlZnQgPSBmbG9hdE9wdGlvbnMueE1heFRocmVzaG9sZDtcbiAgICBpZihmbG9hdFN0YXR1cy5sZWZ0IDwgZmxvYXRPcHRpb25zLnhNaW5UaHJlc2hvbGQpIGZsb2F0U3RhdHVzLmxlZnQgPSBmbG9hdE9wdGlvbnMueE1pblRocmVzaG9sZDtcblxuICAgIGZvcihsZXQga2V5IGluIGZsb2F0U3RhdHVzKSB7XG4gICAgICAgIHRoaXMuYmFja3VwLl9mbG9hdFN0YXR1c1trZXldID0gZmxvYXRTdGF0dXNba2V5XTtcbiAgICB9XG5cbiAgICAvL+S4gOiIrOaYr3B4IOaIluiAhSDnmb7liIbmr5RcbiAgICBsZXQgb2Zmc2V0VHlwZSA9IGZsb2F0T3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgnb2Zmc2V0VHlwZScpPyBmbG9hdE9wdGlvbnMub2Zmc2V0VHlwZSA6ICcnO1xuXG4gICAgLy/or7fliqHlv4Xorr7nva5mbG9hdFRyYW5zbGF0Ze+8jOWQpuWImeS4jeeUn+aViFxuICAgIHRoaXMubW9uaXRvci5mbG9hdFRyYW5zbGF0ZSA9IHtcbiAgICAgICAgdG9wOiBmbG9hdFN0YXR1cy50b3AgKyBvZmZzZXRUeXBlLFxuICAgICAgICBsZWZ0OiBmbG9hdFN0YXR1cy5sZWZ0ICsgb2Zmc2V0VHlwZSxcbiAgICB9XG59XG5cbi8v6buY6K6k5rWu5Yqo5pa55byP44CC5rK/552A5Z+65YeG5YWD57Sg5bem5LiK6KeS5Yiw5Y+z5LiL6KeS55u057q/5rWu5YqoXG4vL+eUqOaIt+iHquWumuS5iea1ruWKqOaWueazle+8jOWPr+WPguiAg+ivpeaWueazleOAglxudGlwcy5wcm90b3R5cGUuZmxvYXRUcmFuc2xhdGVUeXBlRGVmYXVsdCA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICAvL+WHveaVsOWGheiHquWumuS5ieeahOa1ruWKqOWPguaVsO+8jOWPguiAgyB0aXBzLmZsb2F0T3B0aW9uc1xuICAgIC8v5LyY5YWI57qn5L2O5LqO55So5oi36Ieq5a6a5LmJ5rWu5Yqo5Y+C5pWwIHRoaXMub3B0aW9ucy5mbG9hdC5jdXN0b21GbG9hdE9wdGlvbnNcbiAgICBsZXQgY3VzdG9tRmxvYXRPcHRpb25zID0ge1xuICAgICAgICBzdGF0dXM6IHRydWUsXG4gICAgICAgIHhPZmZzZXRMZW46IDAuMDAwNSxcbiAgICAgICAgeU9mZnNldExlbjogMC4wMDA1LFxuICAgICAgICBkZWxheTogMSxcbiAgICB9O1xuXG4gICAgLy/mta7liqjotbflp4vnirbmgIHvvIzlpoLkuI3orr7nva7vvIzpu5jorqTlgLwgdGlwcy5mbG9hdE9wdGlvbnMudG9wU3RhcnQg5ZKMIHRpcHMuZmxvYXRPcHRpb25zLmxlZnRTdGFydFxuICAgIC8v5LyY5YWI57qn5L2O5LqOIHRoaXMub3B0aW9ucy5mbG9hdC5jdXN0b21GbG9hdFN0YXR1c1xuICAgIC8v6aaW5qyh6K6+572u5rWu5Yqo5pe277yMdGhpcy5vcHRpb25zLmZsb2F0LmN1c3RvbUZsb2F0U3RhdHVzIOS4jeWtmOWcqO+8jOS7peWQjuavj+asoea1ruWKqOmDveS8muiusOW9leW9k+WJjea1ruWKqOeKtuaAgeOAgiBcbiAgICAvL+W9k+a1j+iniOWZqOeql+WPo+Wkp+Wwj+WPkeeUn+aUueWPmOaXtu+8jOS8mumHjeaWsOiuvue9rua1ruWKqOOAgiDmraTml7Z0aGlzLm9wdGlvbnMuZmxvYXQuY3VzdG9tRmxvYXRTdGF0dXPlt7LlrZjlnKjvvIzliJnku6XlhbbkuLrlh4bvvIzlv73nlaUgY3VzdG9tRmxvYXRTdGF0dXNcbiAgICBsZXQgY3VzdG9tRmxvYXRTdGF0dXMgPSB7XG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICB9O1xuXG4gICAgLy/nlKjmiLfoh6rlrprkuYnmta7liqjlh73mlbDml7bvvIzms6jmhI/opoHmiafooYzov5nkuKTkuKrlh73mlbBcbiAgICBsZXQgZmxvYXRPcHRpb25zID0gdGhpcy5zZXRGbG9hdFRyYW5zbGF0ZU9wdGlvbnMoY3VzdG9tRmxvYXRPcHRpb25zKTtcbiAgICBsZXQgZmxvYXRTdGF0dXMgPSB0aGlzLmdldGZsb2F0VHJhbnNsYXRlU3RhdHVzKGN1c3RvbUZsb2F0U3RhdHVzKTtcblxuICAgIHRoaXMud3JpdGVMb2coJ2luZm8nLCAnZmxvYXRPcHRpb25zOiAnLCBmbG9hdE9wdGlvbnMpO1xuXG4gICAgLy/pppbmrKHorr7nva7mta7liqjml7bvvIzmt7vliqDpl7TmrYfosIPnlKjvvIxpZCDkv53lrZjkuLogZmxvYXRJZFxuICAgIC8v5b2T5rWP6KeI5Zmo56qX5Y+j5aSn5bCP5Y+R55Sf5pS55Y+Y5pe277yM5Lya6YeN5paw6K6+572u5rWu5Yqo44CCIOmcgOimgea4heepumZsb2F0SWTlubbph43mlrDorr7nva7pl7TmrYfosIPnlKhcbiAgICAvL+mXtOath+iwg+eUqOWHveaVsOS+nei1luS6jmZsb2F0T3B0aW9ucyDlkowgZmxvYXRTdGF0dXNcbiAgICBpZihmbG9hdE9wdGlvbnMuZmxvYXRJZCkgY2xlYXJJbnRlcnZhbChmbG9hdE9wdGlvbnMuZmxvYXRJZCk7XG4gICAgZmxvYXRPcHRpb25zLmZsb2F0SWQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xuICAgICAgICAvL+a1ruWKqOeKtuaAgXRvcOWkp+S6jnnovbTkuLTnlYzlgLzvvIzooajnpLrlt7LliLDovr7ln7rlh4blhYPntKDlupXpg6jvvIzlj43ov4fmnaXliJnooajnpLrliLDovr7ln7rlh4blhYPntKDpobbpg6hcbiAgICAgICAgaWYoKGZsb2F0U3RhdHVzLnRvcCA+PSBmbG9hdE9wdGlvbnMueU1heFRocmVzaG9sZCAmJiBmbG9hdE9wdGlvbnMuc3RhdHVzKSB8fCAoZmxvYXRTdGF0dXMudG9wIDw9IGZsb2F0T3B0aW9ucy55TWluVGhyZXNob2xkICYmICFmbG9hdE9wdGlvbnMuc3RhdHVzKSkge1xuICAgICAgICAgICAgZmxvYXRPcHRpb25zLnN0YXR1cyA9ICFmbG9hdE9wdGlvbnMuc3RhdHVzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoZmxvYXRPcHRpb25zLnN0YXR1cykge1xuICAgICAgICAgICAgZmxvYXRTdGF0dXMudG9wID0gZmxvYXRTdGF0dXMudG9wICsgZmxvYXRPcHRpb25zLnlPZmZzZXQ7XG4gICAgICAgICAgICBmbG9hdFN0YXR1cy5sZWZ0ID0gZmxvYXRTdGF0dXMubGVmdCArIGZsb2F0T3B0aW9ucy54T2Zmc2V0O1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBmbG9hdFN0YXR1cy50b3AgPSBmbG9hdFN0YXR1cy50b3AgLSBmbG9hdE9wdGlvbnMueU9mZnNldDtcbiAgICAgICAgICAgIGZsb2F0U3RhdHVzLmxlZnQgPSBmbG9hdFN0YXR1cy5sZWZ0IC0gZmxvYXRPcHRpb25zLnhPZmZzZXQ7XG4gICAgICAgIH1cblxuICAgICAgICAvL+a1ruWKqOacgOmHjeimgeeahOS4gOatpe+8jOiuvue9rua1ruWKqOeKtuaAge+8jOWwhuS8muinpuWPkea1ruWKqOWumuS9jeeahOaUueWPmFxuICAgICAgICBfdGhpcy5zZXRGbG9hdFRyYW5zbGF0ZVN0YXR1cyhmbG9hdFN0YXR1cywgZmxvYXRPcHRpb25zKTtcbiAgICB9LCBmbG9hdE9wdGlvbnMuZGVsYXkpO1xufTtcblxuLy9YIOa1ruWKqFxuLy/mta7liqjmlrnlkJHmmK8g5bem5LiK6KeSLT7lj7PkuIvop5ItPuWPs+S4iuinki0+5bem5LiL6KeSLT7lt6bkuIrop5IuLi5cbnRpcHMucHJvdG90eXBlLmZsb2F0VHJhbnNsYXRlVHlwZVggPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgbGV0IGN1c3RvbUZsb2F0T3B0aW9ucyA9IHtcbiAgICAgICAgc3RhdHVzOiAxLFxuICAgICAgICBvZmZzZXRUeXBlOiAnJScsXG4gICAgICAgIHhNaW5UaHJlc2hvbGQ6IDAsXG4gICAgICAgIHhNYXhUaHJlc2hvbGQ6IDEwMCxcbiAgICAgICAgeE9mZnNldExlbjogMC4wMSxcbiAgICAgICAgeU1pblRocmVzaG9sZDogMCxcbiAgICAgICAgeU1heFRocmVzaG9sZDogMTAwLFxuICAgICAgICB5T2Zmc2V0TGVuOiAwLjAxLFxuICAgICAgICBkZWxheTogMSxcbiAgICB9O1xuICAgIFxuICAgIGxldCBjdXN0b21GbG9hdFN0YXR1cyA9IHtcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwLFxuICAgIH07XG5cbiAgICBsZXQgZmxvYXRPcHRpb25zID0gdGhpcy5zZXRGbG9hdFRyYW5zbGF0ZU9wdGlvbnMoY3VzdG9tRmxvYXRPcHRpb25zKTtcbiAgICBsZXQgZmxvYXRTdGF0dXMgPSB0aGlzLmdldGZsb2F0VHJhbnNsYXRlU3RhdHVzKGN1c3RvbUZsb2F0U3RhdHVzKTtcblxuICAgIGlmKGZsb2F0T3B0aW9ucy5mbG9hdElkKSBjbGVhckludGVydmFsKGZsb2F0T3B0aW9ucy5mbG9hdElkKTtcbiAgICBmbG9hdE9wdGlvbnMuZmxvYXRJZCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKGZsb2F0U3RhdHVzLnRvcCA8PSBmbG9hdE9wdGlvbnMueU1pblRocmVzaG9sZCAmJiBmbG9hdFN0YXR1cy5sZWZ0IDw9IGZsb2F0T3B0aW9ucy54TWluVGhyZXNob2xkKSB7XG4gICAgICAgICAgICBmbG9hdE9wdGlvbnMuc3RhdHVzID0gMTtcbiAgICAgICAgfWVsc2UgaWYoZmxvYXRTdGF0dXMudG9wID49IGZsb2F0T3B0aW9ucy55TWF4VGhyZXNob2xkICYmIGZsb2F0U3RhdHVzLmxlZnQgPj0gZmxvYXRPcHRpb25zLnhNYXhUaHJlc2hvbGQpIHtcbiAgICAgICAgICAgIGZsb2F0T3B0aW9ucy5zdGF0dXMgPSAyO1xuICAgICAgICB9ZWxzZSBpZihmbG9hdFN0YXR1cy50b3AgPD0gZmxvYXRPcHRpb25zLnlNaW5UaHJlc2hvbGQgJiYgZmxvYXRTdGF0dXMubGVmdCA+PSBmbG9hdE9wdGlvbnMueE1heFRocmVzaG9sZCkge1xuICAgICAgICAgICAgZmxvYXRPcHRpb25zLnN0YXR1cyA9IDM7XG4gICAgICAgIH1lbHNlIGlmKGZsb2F0U3RhdHVzLnRvcCA+PSBmbG9hdE9wdGlvbnMueU1heFRocmVzaG9sZCAmJiBmbG9hdFN0YXR1cy5sZWZ0IDw9IGZsb2F0T3B0aW9ucy54TWluVGhyZXNob2xkKSB7XG4gICAgICAgICAgICBmbG9hdE9wdGlvbnMuc3RhdHVzID0gNDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGZsb2F0T3B0aW9ucy5zdGF0dXMgPT0gMSkge1xuICAgICAgICAgICAgZmxvYXRTdGF0dXMudG9wID0gZmxvYXRTdGF0dXMudG9wICsgZmxvYXRPcHRpb25zLnlPZmZzZXQ7XG4gICAgICAgICAgICBmbG9hdFN0YXR1cy5sZWZ0ID0gZmxvYXRTdGF0dXMubGVmdCArIGZsb2F0T3B0aW9ucy54T2Zmc2V0O1xuICAgICAgICB9ZWxzZSBpZihmbG9hdE9wdGlvbnMuc3RhdHVzID09IDIpIHtcbiAgICAgICAgICAgIGZsb2F0U3RhdHVzLnRvcCA9IGZsb2F0U3RhdHVzLnRvcCAtIGZsb2F0T3B0aW9ucy55T2Zmc2V0O1xuICAgICAgICB9ZWxzZSBpZihmbG9hdE9wdGlvbnMuc3RhdHVzID09IDMpIHtcbiAgICAgICAgICAgIGZsb2F0U3RhdHVzLnRvcCA9IGZsb2F0U3RhdHVzLnRvcCArIGZsb2F0T3B0aW9ucy55T2Zmc2V0O1xuICAgICAgICAgICAgZmxvYXRTdGF0dXMubGVmdCA9IGZsb2F0U3RhdHVzLmxlZnQgLSBmbG9hdE9wdGlvbnMueE9mZnNldDtcbiAgICAgICAgfWVsc2UgaWYoZmxvYXRPcHRpb25zLnN0YXR1cyA9PSA0KSB7XG4gICAgICAgICAgICBmbG9hdFN0YXR1cy50b3AgPSBmbG9hdFN0YXR1cy50b3AgLSBmbG9hdE9wdGlvbnMueU9mZnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzLnNldEZsb2F0VHJhbnNsYXRlU3RhdHVzKGZsb2F0U3RhdHVzLCBmbG9hdE9wdGlvbnMpO1xuICAgIH0sIGZsb2F0T3B0aW9ucy5kZWxheSk7XG59O1xuXG4vL+aWueW9oua1ruWKqFxuLy/mta7liqjmlrnlkJHmmK8g5bem5LiK6KeSLT7lj7PkuIrop5ItPuWPs+S4i+inki0+5bem5LiL6KeSLT7lt6bkuIrop5IuLi5cbnRpcHMucHJvdG90eXBlLmZsb2F0VHJhbnNsYXRlVHlwZVNxdWFyZSA9ICBmdW5jdGlvbigpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgbGV0IGN1c3RvbUZsb2F0T3B0aW9ucyA9IHtcbiAgICAgICAgc3RhdHVzOiAxLFxuICAgICAgICBvZmZzZXRUeXBlOiAnJScsXG4gICAgICAgIHhNaW5UaHJlc2hvbGQ6IDAsXG4gICAgICAgIHhNYXhUaHJlc2hvbGQ6IDEwMCxcbiAgICAgICAgeE9mZnNldExlbjogMC4wMSxcbiAgICAgICAgeU1pblRocmVzaG9sZDogMCxcbiAgICAgICAgeU1heFRocmVzaG9sZDogMTAwLFxuICAgICAgICB5T2Zmc2V0TGVuOiAwLjAxLFxuICAgICAgICBkZWxheTogMSxcbiAgICB9O1xuXG4gICAgbGV0IGN1c3RvbUZsb2F0U3RhdHVzID0ge1xuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgfTtcblxuICAgIGxldCBmbG9hdE9wdGlvbnMgPSB0aGlzLnNldEZsb2F0VHJhbnNsYXRlT3B0aW9ucyhjdXN0b21GbG9hdE9wdGlvbnMpO1xuICAgIGxldCBmbG9hdFN0YXR1cyA9IHRoaXMuZ2V0ZmxvYXRUcmFuc2xhdGVTdGF0dXMoY3VzdG9tRmxvYXRTdGF0dXMpO1xuXG4gICAgaWYoZmxvYXRPcHRpb25zLmZsb2F0SWQpIGNsZWFySW50ZXJ2YWwoZmxvYXRPcHRpb25zLmZsb2F0SWQpO1xuICAgIGZsb2F0T3B0aW9ucy5mbG9hdElkID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoZmxvYXRPcHRpb25zLnlNaW5UaHJlc2hvbGQgIT0gZmxvYXRPcHRpb25zLnlNYXhUaHJlc2hvbGQgJiYgZmxvYXRPcHRpb25zLnhNaW5UaHJlc2hvbGQgIT0gZmxvYXRPcHRpb25zLnhNYXhUaHJlc2hvbGQpe1xuICAgICAgICAgICAgaWYoZmxvYXRTdGF0dXMudG9wIDw9IGZsb2F0T3B0aW9ucy55TWluVGhyZXNob2xkICYmIGZsb2F0U3RhdHVzLmxlZnQgPD0gZmxvYXRPcHRpb25zLnhNaW5UaHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICBmbG9hdE9wdGlvbnMuc3RhdHVzID0gMTtcbiAgICAgICAgICAgIH1lbHNlIGlmKGZsb2F0U3RhdHVzLnRvcCA8PSBmbG9hdE9wdGlvbnMueU1pblRocmVzaG9sZCAmJiBmbG9hdFN0YXR1cy5sZWZ0ID49IGZsb2F0T3B0aW9ucy54TWF4VGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgZmxvYXRPcHRpb25zLnN0YXR1cyA9IDI7XG4gICAgICAgICAgICB9ZWxzZSBpZihmbG9hdFN0YXR1cy50b3AgPj0gZmxvYXRPcHRpb25zLnlNYXhUaHJlc2hvbGQgJiYgZmxvYXRTdGF0dXMubGVmdCA+PSBmbG9hdE9wdGlvbnMueE1heFRocmVzaG9sZCkge1xuICAgICAgICAgICAgICAgIGZsb2F0T3B0aW9ucy5zdGF0dXMgPSAzO1xuICAgICAgICAgICAgfWVsc2UgaWYoZmxvYXRTdGF0dXMudG9wID49IGZsb2F0T3B0aW9ucy55TWF4VGhyZXNob2xkICYmIGZsb2F0U3RhdHVzLmxlZnQgPD0gZmxvYXRPcHRpb25zLnhNaW5UaHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICBmbG9hdE9wdGlvbnMuc3RhdHVzID0gNDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGZsb2F0T3B0aW9ucy55TWluVGhyZXNob2xkID09IGZsb2F0T3B0aW9ucy55TWF4VGhyZXNob2xkICYmIGZsb2F0T3B0aW9ucy54TWluVGhyZXNob2xkICE9IGZsb2F0T3B0aW9ucy54TWF4VGhyZXNob2xkKXtcbiAgICAgICAgICAgIGlmKGZsb2F0U3RhdHVzLmxlZnQgPD0gZmxvYXRPcHRpb25zLnhNaW5UaHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICBmbG9hdE9wdGlvbnMuc3RhdHVzID0gNTtcbiAgICAgICAgICAgIH1lbHNlIGlmKGZsb2F0U3RhdHVzLmxlZnQgPj0gZmxvYXRPcHRpb25zLnhNYXhUaHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICBmbG9hdE9wdGlvbnMuc3RhdHVzID0gNjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGZsb2F0T3B0aW9ucy55TWluVGhyZXNob2xkICE9IGZsb2F0T3B0aW9ucy55TWF4VGhyZXNob2xkICYmIGZsb2F0T3B0aW9ucy54TWluVGhyZXNob2xkID09IGZsb2F0T3B0aW9ucy54TWF4VGhyZXNob2xkKXtcbiAgICAgICAgICAgIGlmKGZsb2F0U3RhdHVzLnRvcCA8PSBmbG9hdE9wdGlvbnMueU1pblRocmVzaG9sZCkge1xuICAgICAgICAgICAgICAgIGZsb2F0T3B0aW9ucy5zdGF0dXMgPSA3O1xuICAgICAgICAgICAgfWVsc2UgaWYoZmxvYXRTdGF0dXMudG9wID49IGZsb2F0T3B0aW9ucy55TWF4VGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgZmxvYXRPcHRpb25zLnN0YXR1cyA9IDg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZihmbG9hdE9wdGlvbnMuc3RhdHVzID09IDEpIHtcbiAgICAgICAgICAgIGZsb2F0U3RhdHVzLmxlZnQgPSBmbG9hdFN0YXR1cy5sZWZ0ICsgZmxvYXRPcHRpb25zLnhPZmZzZXQ7XG4gICAgICAgIH1lbHNlIGlmKGZsb2F0T3B0aW9ucy5zdGF0dXMgPT0gMikge1xuICAgICAgICAgICAgZmxvYXRTdGF0dXMudG9wID0gZmxvYXRTdGF0dXMudG9wICsgZmxvYXRPcHRpb25zLnlPZmZzZXQ7XG4gICAgICAgIH1lbHNlIGlmKGZsb2F0T3B0aW9ucy5zdGF0dXMgPT0gMykge1xuICAgICAgICAgICAgZmxvYXRTdGF0dXMubGVmdCA9IGZsb2F0U3RhdHVzLmxlZnQgLSBmbG9hdE9wdGlvbnMueE9mZnNldDtcbiAgICAgICAgfWVsc2UgaWYoZmxvYXRPcHRpb25zLnN0YXR1cyA9PSA0KSB7XG4gICAgICAgICAgICBmbG9hdFN0YXR1cy50b3AgPSBmbG9hdFN0YXR1cy50b3AgLSBmbG9hdE9wdGlvbnMueU9mZnNldDtcbiAgICAgICAgfWVsc2UgaWYoZmxvYXRPcHRpb25zLnN0YXR1cyA9PSA1KSB7XG4gICAgICAgICAgICBmbG9hdFN0YXR1cy5sZWZ0ID0gZmxvYXRTdGF0dXMubGVmdCArIGZsb2F0T3B0aW9ucy54T2Zmc2V0O1xuICAgICAgICB9ZWxzZSBpZihmbG9hdE9wdGlvbnMuc3RhdHVzID09IDYpIHtcbiAgICAgICAgICAgIGZsb2F0U3RhdHVzLmxlZnQgPSBmbG9hdFN0YXR1cy5sZWZ0IC0gZmxvYXRPcHRpb25zLnhPZmZzZXQ7XG4gICAgICAgIH1lbHNlIGlmKGZsb2F0T3B0aW9ucy5zdGF0dXMgPT0gNykge1xuICAgICAgICAgICAgZmxvYXRTdGF0dXMudG9wID0gZmxvYXRTdGF0dXMudG9wICsgZmxvYXRPcHRpb25zLnlPZmZzZXQ7XG4gICAgICAgIH1lbHNlIGlmKGZsb2F0T3B0aW9ucy5zdGF0dXMgPT0gOCkge1xuICAgICAgICAgICAgZmxvYXRTdGF0dXMudG9wID0gZmxvYXRTdGF0dXMudG9wIC0gZmxvYXRPcHRpb25zLnlPZmZzZXQ7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpcy5zZXRGbG9hdFRyYW5zbGF0ZVN0YXR1cyhmbG9hdFN0YXR1cywgZmxvYXRPcHRpb25zKTtcbiAgICB9LCBmbG9hdE9wdGlvbnMuZGVsYXkpO1xufTtcblxuLyoqXG4gKiDorr7nva7mta7liqjnmoTotbflp4vngrlcbiAqIOmAmui/h+mXtOath+aUueWPmHRpcEdyb3Vw5YWD57SgdHJhbnNsYXRl6L6+5Yiw5rWu5Yqo55qE5pWI5p6cXG4gKi9cbnRpcHMucHJvdG90eXBlLnNldGZsb2F0VHJhbnNsYXRlU3RhcnQgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgZmxvYXRPcHRpb25zID0gdGhpcy5mbG9hdE9wdGlvbnM7XG4gICAgbGV0IG9mZnNldFR5cGUgPSBmbG9hdE9wdGlvbnMuaGFzT3duUHJvcGVydHkoJ29mZnNldFR5cGUnKT8gZmxvYXRPcHRpb25zLm9mZnNldFR5cGUgOiAnJztcbiAgICBsZXQgcG9zaXRpb25TdGFydCA9IHtcbiAgICAgICAgdG9wOiBmbG9hdE9wdGlvbnMudG9wU3RhcnQgKyBvZmZzZXRUeXBlLFxuICAgICAgICBsZWZ0OiBmbG9hdE9wdGlvbnMubGVmdFN0YXJ0ICsgb2Zmc2V0VHlwZSxcbiAgICB9O1xuXG4gICAgbGV0ICR0aXBHcm91cCA9IHRoaXMuYmFja3VwLl90aXBHcm91cEVsbTtcbiAgICBsZXQgdGlwUG9zaXRpb25TdGFydCA9IHRoaXMuZ2V0UG9zaXRpb24ocG9zaXRpb25TdGFydCk7XG4gICAgQy5hZGRDbGFzcygkdGlwR3JvdXAsIHRpcFBvc2l0aW9uU3RhcnQuY2xhc3MudGlwQ2xhc3MpO1xuICAgIEMuYWRkQ3NzKCR0aXBHcm91cCwgdGlwUG9zaXRpb25TdGFydC5zdHlsZSk7XG59XG5cbi8qKlxuICog6K6+572u5rWu5Yqo57G75Z6L77yM6buY6K6k5rWu5Yqo5pa55byP5piv5bem5LiK6KeSLT7lj7PkuIvop5JcbiAqL1xudGlwcy5wcm90b3R5cGUuc2V0RmxvYXRUcmFuc2xhdGVUeXBlID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IG9wdEZsb2F0VHlwZSA9IHRoaXMub3B0aW9ucy5mbG9hdC50eXBlO1xuICAgIGxldCBmbG9hdEZ1biA9ICdmbG9hdFRyYW5zbGF0ZVR5cGUnICsgb3B0RmxvYXRUeXBlLnNsaWNlKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyBvcHRGbG9hdFR5cGUuc2xpY2UoMSk7XG4gICAgaWYodGhpc1tmbG9hdEZ1bl0pIHtcbiAgICAgICAgdGhpc1tmbG9hdEZ1bl0oKTtcbiAgICB9ZWxzZSB7XG4gICAgICAgIHRoaXMuZmxvYXRUeXBlVHJhbnNsYXRlRGVmYXVsdCgpO1xuICAgIH1cbn07XG5cbi8qKlxuICog5rWu5Yqo5Zue6LCD5Ye95pWwXG4gKiDpvKDmoIfmgqzlgZzlnKhUaXBzIOS4iuaXtu+8jOWBnOatoua1ruWKqFxuICog6byg5qCH5LuOVGlwc+enu+W8gO+8jOe7p+e7rea1ruWKqFxuICovXG50aXBzLnByb3RvdHlwZS5zZXRGbG9hdFRyYW5zbGF0ZUV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgbGV0ICR0aXAgPSBfdGhpcy5iYWNrdXAuX3RpcEVsbTtcbiAgICBsZXQgZmxvYXRGbGFnID0gMDtcblxuICAgIGxldCBob3ZlckluID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmKF90aGlzLmZsb2F0T3B0aW9ucy5mbG9hdElkKSBjbGVhckludGVydmFsKF90aGlzLmZsb2F0T3B0aW9ucy5mbG9hdElkKTtcbiAgICB9XG4gICAgbGV0IGhvdmVyT3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIF90aGlzLnNldEZsb2F0VHJhbnNsYXRlKCsrZmxvYXRGbGFnKTtcbiAgICB9XG4gICAgXG4gICAgJHRpcC5vbm1vdXNlZW50ZXIgPSBob3ZlckluO1xuICAgICR0aXAub25tb3VzZWxlYXZlID0gaG92ZXJPdXQ7XG59O1xuXG4vKipcbiAqIOiuoeeul1RpcHMg5L2N572u6L2s5Y+Y6YeP77yM5pSv5oyBcHjlkoznmb7liIbmr5RcbiAqL1xudGlwcy5wcm90b3R5cGUuZ2V0VHJhbnNsYXRlID0gZnVuY3Rpb24obXlUcmFuc2xhdGUsIGNhbGN1bGF0ZVRpcCkge1xuICAgIGxldCBlbGVEZXRhaWxzID0gdGhpcy5nZXRFbGVtZW50RGV0YWlscygpO1xuXG4gICAgbGV0IHRpcEdyb3VwV2lkdGggPSBlbGVEZXRhaWxzLnRpcEdyb3VwV2lkdGg7XG4gICAgbGV0IHRpcEdyb3VwSGVpZ2h0ID0gZWxlRGV0YWlscy50aXBHcm91cEhlaWdodDtcbiAgICBpZihjYWxjdWxhdGVUaXAgPT09IGZhbHNlKSB7XG4gICAgICAgIHRpcEdyb3VwV2lkdGggPSAwO1xuICAgICAgICB0aXBHcm91cEhlaWdodCA9IDA7XG4gICAgfVxuXG4gICAgbGV0IHRpcFRyYW5zbGF0ZSA9IHtcbiAgICAgICAgdG9wOiBcIlwiLFxuICAgICAgICBsZWZ0OiBcIlwiLFxuICAgIH07XG5cbiAgICBpZih0aGlzLmZsb2F0T3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgnb2Zmc2V0VHlwZScpICYmIHRoaXMuZmxvYXRPcHRpb25zLm9mZnNldFR5cGUgPT09ICclJykge1xuICAgICAgICB0aXBUcmFuc2xhdGUudG9wID0gKGVsZURldGFpbHMuYmFzZUhlaWdodCAtIHRpcEdyb3VwSGVpZ2h0KSAqIHBhcnNlRmxvYXQobXlUcmFuc2xhdGUudG9wKS8xMDA7XG4gICAgICAgIHRpcFRyYW5zbGF0ZS5sZWZ0ID0gKGVsZURldGFpbHMuYmFzZVdpZHRoIC0gdGlwR3JvdXBXaWR0aCkgKiBwYXJzZUZsb2F0KG15VHJhbnNsYXRlLmxlZnQpLzEwMDtcbiAgICB9ZWxzZSB7XG4gICAgICAgIHRpcFRyYW5zbGF0ZS50b3AgPSBwYXJzZUZsb2F0KG15VHJhbnNsYXRlLnRvcCk7XG4gICAgICAgIHRpcFRyYW5zbGF0ZS5sZWZ0ID0gcGFyc2VGbG9hdChteVRyYW5zbGF0ZS5sZWZ0KTtcbiAgICB9XG5cbiAgICB0aXBUcmFuc2xhdGUudG9wID0gdGlwVHJhbnNsYXRlLnRvcC50b0ZpeGVkKDQpICsgXCJweFwiO1xuICAgIHRpcFRyYW5zbGF0ZS5sZWZ0ID0gdGlwVHJhbnNsYXRlLmxlZnQudG9GaXhlZCg0KSArIFwicHhcIjtcblxuICAgIHJldHVybiB0aXBUcmFuc2xhdGU7XG59O1xuXG4vKipcbiAqIHRyYW5zbGF0ZSDmta7liqjlhaXlj6Plh73mlbDjgIJcbiAqL1xudGlwcy5wcm90b3R5cGUuc2V0RmxvYXRUcmFuc2xhdGUgPSBmdW5jdGlvbihmbG9hdEZsYWcgPSAwKSB7XG4gICAgdGhpcy5vcHRpb25zLmV2ZW50cy5iZWZvcmVGbG9hdGVkLmNhbGwodGhpcywgZmxvYXRGbGFnKTsgICAgICAvL1RpcHMg5rWu5Yqo5LmL5YmNIOinpuWPkVxuXG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBsZXQgJHRpcCA9IF90aGlzLmJhY2t1cC5fdGlwRWxtO1xuICAgIGxldCAkdGlwR3JvdXAgPSB0aGlzLmJhY2t1cC5fdGlwR3JvdXBFbG07XG4gICAgbGV0ICRiYXNlID0gX3RoaXMuYmFja3VwLl9iYXNlRWxtO1xuXG4gICAgQy5jc3MoJHRpcEdyb3VwLCB7ZGlzcGxheTogJ25vbmUnfSk7XG5cbiAgICBsZXQgbGFzdFZhbHVlID0gbnVsbDtcbiAgICBsZXQgbGFzdFRpcFRyYW5zbGF0ZSA9IG51bGw7XG5cbiAgICBsZXQgY29tcGFyZSA9IGZ1bmN0aW9uKGxhc3RWYWx1ZSwgbmV3VmFsdWUpIHtcbiAgICAgICAgLy8gX3RoaXMud3JpdGVMb2coJ2luZm8nLCAnKioqIENvbXBhcmUgVmFsdWU6ICcsIGxhc3RWYWx1ZSwgbmV3VmFsdWUpO1xuXG4gICAgICAgIGlmKCFsYXN0VmFsdWUpIHtcbiAgICAgICAgICAgIF90aGlzLndyaXRlTG9nKCdpbmZvJywgJ05vIGxhc3QgdmFsdWUnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxhc3RWYWx1ZSA9IEMuZXh0ZW5kKHt9LCBsYXN0VmFsdWUpO1xuICAgICAgICBuZXdWYWx1ZSA9IEMuZXh0ZW5kKHt9LCBuZXdWYWx1ZSk7XG5cbiAgICAgICAgbGV0IHR5cGUgPSBcInZhbHVlXCI7XG4gICAgICAgIGlmKEMuaXNTdHJpbmcobGFzdFZhbHVlLmxlZnQpKSB7XG4gICAgICAgICAgICB0eXBlID0gXCJ0cmFuc2xhdGVcIjtcbiAgICAgICAgICAgIGxhc3RWYWx1ZS5sZWZ0ID0gcGFyc2VGbG9hdChsYXN0VmFsdWUubGVmdCk7XG4gICAgICAgICAgICBsYXN0VmFsdWUudG9wID0gcGFyc2VGbG9hdChsYXN0VmFsdWUudG9wKTtcbiAgICAgICAgICAgIG5ld1ZhbHVlLmxlZnQgPSBwYXJzZUZsb2F0KG5ld1ZhbHVlLmxlZnQpO1xuICAgICAgICAgICAgbmV3VmFsdWUudG9wID0gcGFyc2VGbG9hdChuZXdWYWx1ZS50b3ApO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGxlZnRGbGFnID0gJz8nO1xuICAgICAgICBpZihuZXdWYWx1ZS5sZWZ0ID4gbGFzdFZhbHVlLmxlZnQpIGxlZnRGbGFnID0gJz4nO1xuICAgICAgICBlbHNlIGlmKG5ld1ZhbHVlLmxlZnQgPT0gbGFzdFZhbHVlLmxlZnQpIGxlZnRGbGFnID0gJz0nO1xuICAgICAgICBlbHNlIGlmKG5ld1ZhbHVlLmxlZnQgPCBsYXN0VmFsdWUubGVmdCkgbGVmdEZsYWcgPSAnPCc7XG5cbiAgICAgICAgbGV0IHRvcEZsYWcgPSAnPyc7XG4gICAgICAgIGlmKG5ld1ZhbHVlLnRvcCA+IGxhc3RWYWx1ZS50b3ApIHRvcEZsYWcgPSAnPic7XG4gICAgICAgIGVsc2UgaWYobmV3VmFsdWUudG9wID09IGxhc3RWYWx1ZS50b3ApIHRvcEZsYWcgPSAnPSc7XG4gICAgICAgIGVsc2UgaWYobmV3VmFsdWUudG9wIDwgbGFzdFZhbHVlLnRvcCkgdG9wRmxhZyA9ICc8JztcblxuICAgICAgICAvLyBfdGhpcy53cml0ZUxvZygnaW5mbycsICdOZXcgJXMgTGVmdCA6IE9sZCAlcyBMZWZ0ID8gJywgdHlwZSwgdHlwZSwgbGVmdEZsYWcpO1xuICAgICAgICAvLyBfdGhpcy53cml0ZUxvZygnaW5mbycsICdOZXcgJXMgVG9wICA6IE9sZCAlcyBUb3AgID8gJywgdHlwZSwgdHlwZSwgbGVmdEZsYWcpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsZWZ0RmxhZzogbGVmdEZsYWcsXG4gICAgICAgICAgICB0b3BGbGFnOiB0b3BGbGFnLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGNvbXBhcmVSZXN1bHQgPSBmdW5jdGlvbih2YWx1ZVJlc3VsdCwgdHJhbnNsYXRlUmVzdWx0KSB7XG4gICAgICAgIGlmKCF2YWx1ZVJlc3VsdCkgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgbGV0IHJlc3VsdCA9IHRydWU7XG5cbiAgICAgICAgaWYodmFsdWVSZXN1bHQubGVmdEZsYWcgIT0gdHJhbnNsYXRlUmVzdWx0LmxlZnRGbGFnKSB7XG4gICAgICAgICAgICBfdGhpcy53cml0ZUxvZygnZXJyb3InLCAnVHJhbnNsYXRlIExlZnQgRXJyb3IhICcsIHZhbHVlUmVzdWx0LmxlZnRGbGFnLCB0cmFuc2xhdGVSZXN1bHQubGVmdEZsYWcpO1xuICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZih2YWx1ZVJlc3VsdC50b3BGbGFnICE9IHRyYW5zbGF0ZVJlc3VsdC50b3BGbGFnKSB7XG4gICAgICAgICAgICBfdGhpcy53cml0ZUxvZygnZXJyb3InLCAnVHJhbnNsYXRlIFRvcCBFcnJvciEgJywgdmFsdWVSZXN1bHQudG9wRmxhZywgdHJhbnNsYXRlUmVzdWx0LnRvcEZsYWcpO1xuICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8v57uZdGhpcy5tb25pdG9yIOa3u+WKoOaWsOWxnuaApyBmbG9hdFRyYW5zbGF0ZVxuICAgIC8v5b2TIGZsb2F0VHJhbnNsYXRl5pS55Y+Y5pe277yM6K6+572uIHRpcEdyb3VwIOeahCB0cmFuc2xhdGXvvIzovr7liLDmta7liqjnmoTmlYjmnpxcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoX3RoaXMubW9uaXRvciwgJ2Zsb2F0VHJhbnNsYXRlJywge1xuICAgICAgICBnZXQ6ZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHJldHVybiBmbG9hdFRyYW5zbGF0ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OmZ1bmN0aW9uKG5ld1ZhbHVlKXtcbiAgICAgICAgICAgIGxldCBmbG9hdFRyYW5zbGF0ZSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgbGV0IHRpcFRyYW5zbGF0ZSA9IF90aGlzLmdldFRyYW5zbGF0ZShmbG9hdFRyYW5zbGF0ZSk7XG5cbiAgICAgICAgICAgIC8vIOaDs+iwg+ivleeahOivneWwseWPlua2iOazqOmHilxuICAgICAgICAgICAgLy8gbGV0IHJlc3VsdCA9IGNvbXBhcmVSZXN1bHQoY29tcGFyZShsYXN0VmFsdWUsIG5ld1ZhbHVlKSwgY29tcGFyZShsYXN0VGlwVHJhbnNsYXRlLCB0aXBUcmFuc2xhdGUpKTtcbiAgICAgICAgICAgIC8vIGlmKCFyZXN1bHQpIHtcbiAgICAgICAgICAgIC8vICAgICBfdGhpcy53cml0ZUxvZygnaW5mbycsICctLS0gTGFzdCBWYWx1ZTogJywgbGFzdFZhbHVlLCBsYXN0VGlwVHJhbnNsYXRlKTtcbiAgICAgICAgICAgIC8vICAgICBfdGhpcy53cml0ZUxvZygnaW5mbycsICcrKysgTmV3ICBWYWx1ZTogJywgbmV3VmFsdWUsIHRpcFRyYW5zbGF0ZSk7XG4gICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgIGxldCB0cmFuc2xhdGUgPSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoJysgdGlwVHJhbnNsYXRlLmxlZnQgKyAnLCcgKyB0aXBUcmFuc2xhdGUudG9wICsgJyknLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgQy5hZGRDc3MoJHRpcEdyb3VwLCB0cmFuc2xhdGUpO1xuXG4gICAgICAgICAgICBsYXN0VmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgIGxhc3RUaXBUcmFuc2xhdGUgPSB0aXBUcmFuc2xhdGU7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmKHR5cGVvZiBfdGhpcy5vcHRpb25zLmZsb2F0LmN1c3RvbUZsb2F0RnVudGlvbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIF90aGlzLm9wdGlvbnMuZmxvYXQuY3VzdG9tRmxvYXRGdW50aW9uLmNhbGwoX3RoaXMpO1xuICAgIH1lbHNlIHtcbiAgICAgICAgX3RoaXMuc2V0RmxvYXRUcmFuc2xhdGVUeXBlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRmbG9hdFRyYW5zbGF0ZVN0YXJ0KCk7XG5cbiAgICBpZihmbG9hdEZsYWcgPT09IDApIF90aGlzLnNldEZsb2F0VHJhbnNsYXRlRXZlbnRzKCk7XG5cbiAgICB0aGlzLm9wdGlvbnMuZXZlbnRzLmZsb2F0ZWQuY2FsbCh0aGlzLCBmbG9hdEZsYWcpOyAgICAgIC8vVGlwcyDmta7liqjkuYvlkI4g6Kem5Y+RXG59O1xuXG4vKipcbiAqIOiuvue9rlRpcHMgR3JvdXAg5a6a5L2NXG4gKiDljIXmi6zlm7rlrprlrprkvY3lkozmta7liqjlrprkvY3jgIJcbiAqIEZsb2F0IOWSjCBUcmFuc2xhdGUg6YO95piv5rWu5Yqo5a6a5L2N77yM5Y+q55So5L2/55So55qE5pa55rOV5LiN5ZCMXG4gKi9cbnRpcHMucHJvdG90eXBlLnNldFRpcHNQb3NpdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCAkdGlwID0gdGhpcy5iYWNrdXAuX3RpcEVsbTtcbiAgICBsZXQgJHRpcEdyb3VwID0gdGhpcy5iYWNrdXAuX3RpcEdyb3VwRWxtO1xuICAgIGxldCAkYmFzZSA9IHRoaXMuYmFja3VwLl9iYXNlRWxtO1xuXG4gICAgaWYodGhpcy5vcHRpb25zLnBvc2l0aW9uID09ICdmbG9hdCcpIHtcbiAgICAgICAgdGhpcy5zZXRGbG9hdFBvc2l0aW9uKCk7XG4gICAgfWVsc2UgaWYodGhpcy5vcHRpb25zLnBvc2l0aW9uID09ICd0cmFuc2xhdGUnKSB7XG4gICAgICAgIHRoaXMuc2V0RmxvYXRUcmFuc2xhdGUoKTtcbiAgICB9ZWxzZSB7XG4gICAgICAgIGxldCB0aXBQb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24odGhpcy5vcHRpb25zLnBvc2l0aW9uKTtcbiAgICAgICAgaWYodGhpcy5pc0Jhc2VCb2R5RWxlbWVudCgpKSB7XG4gICAgICAgICAgICBDLmFkZENsYXNzKCR0aXBHcm91cCwgdGlwUG9zaXRpb24uY2xhc3MudGlwQ2xhc3MpO1xuICAgICAgICAgICAgdGhpcy5zZXRDbGFzc09mZnNldCgpO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAkdGlwR3JvdXAuc3R5bGUuY3NzVGV4dCA9ICcnO1xuICAgICAgICAgICAgQy5hZGRDc3MoJHRpcEdyb3VwLCB0aXBQb3NpdGlvbi5zdHlsZSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG50aXBzLnByb3RvdHlwZS5zZXRCZ1Bvc2l0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgaWYoIXRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kIHx8ICF0aGlzLmJhY2t1cC5fYmFja2dyb3VuZEVsZW0pIHJldHVybiBmYWxzZTtcbiAgICBsZXQgJGJnID0gdGhpcy5iYWNrdXAuX2JhY2tncm91bmRFbGVtO1xuXG4gICAgaWYodGhpcy5pc0Jhc2VCb2R5RWxlbWVudCgpKSB7XG4gICAgICAgIGxldCBwb3NpdGlvbkNsYXNzID0gdGhpcy5nZXRQb3NpdGlvbkNsYXNzKHRoaXMub3B0aW9ucy5wb3NpdGlvbik7XG4gICAgICAgIEMuYWRkQ2xhc3MoJGJnLCBwb3NpdGlvbkNsYXNzLmJnQ2xhc3MpO1xuICAgIH1lbHNlIHtcbiAgICAgICAgbGV0IGVsZURldGFpbHMgPSB0aGlzLmdldEVsZW1lbnREZXRhaWxzKCk7XG4gICAgICAgIGxldCBiZ0NzcyA9IEMuZXh0ZW5kKHt9LCBlbGVEZXRhaWxzLmJhc2VQb3NpdGlvbiwge1xuICAgICAgICAgICAgd2lkdGg6IGVsZURldGFpbHMuYmFzZU91dGVyV2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IGVsZURldGFpbHMuYmFzZU91dGVySGVpZ2h0XG4gICAgICAgIH0sIHtcImJvcmRlci1yYWRpdXNcIjogZWxlRGV0YWlscy5iYXNlQm9yZGVyUmFkaXVzfSk7XG5cbiAgICAgICAgQy5hZGRDc3MoJGJnLCBiZ0Nzcyk7XG4gICAgfVxufTtcblxuLy/liJ3lp4vljJZUaXBz5L2N572u77yM55uu55qE5Zyo5LqO5Y+v5Lul6I635b6XVGlwcyDnmoTnnJ/lrp7lrr3luqbpq5jluqZcbnRpcHMucHJvdG90eXBlLnNldEluaXRQb3NpdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCAkdGlwR3JvdXAgPSB0aGlzLmJhY2t1cC5fdGlwR3JvdXBFbG07XG4gICAgQy5hZGRDbGFzcygkdGlwR3JvdXAsICdvaG9UaXAtaW5pdCcpO1xufVxuXG4vL+WIneWni+WMllRpcHPkvY3nva7lkI7lv4XpobvljrvpmaRcbnRpcHMucHJvdG90eXBlLnVuc2V0SW5pdFBvc2l0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0ICR0aXBHcm91cCA9IHRoaXMuYmFja3VwLl90aXBHcm91cEVsbTtcbiAgICBDLnJlbW92ZUNsYXNzKCR0aXBHcm91cCwgJ29ob1RpcC1pbml0Jyk7XG59XG5cbnRpcHMucHJvdG90eXBlLnNldFBvc2l0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zZXRUaXBzUG9zaXRpb24oKTtcbiAgICB0aGlzLnNldEJnUG9zaXRpb24oKTtcbn07XG5cbnRpcHMucHJvdG90eXBlLnJlc2V0UG9zaXRpb24gPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmV2ZW50ID0ge307XG4gICAgdGhpcy5ldmVudC50eXBlID0gJ3Jlc2l6ZSc7XG4gICAgdGhpcy5zZXRQb3NpdGlvbigpO1xufVxuXG50aXBzLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICB0aGlzLmJhY2t1cC5fYmFzZUVsbSA9IHRoaXMuZ2V0QmFzZUVsZW1lbXQob3B0aW9ucyk7XG4gICAgdGhpcy5iYWNrdXAuX3BhcmVudEVsbSA9IHRoaXMuZ2V0UGFyZW50RWxlbWVtdChvcHRpb25zLCB0aGlzLmJhY2t1cC5fYmFzZUVsbSk7XG4gICAgdGhpcy5iYWNrdXAuX3RpcEdyb3VwRWxtID0gdGhpcy5nZXRUaXBzR3JvdXAob3B0aW9ucyk7XG4gICAgdGhpcy5iYWNrdXAuX3RpcENvbnRhaW5lckVsbSA9IHRoaXMuZ2V0VGlwc0NvbnRhaW5lcihvcHRpb25zKTtcbiAgICB0aGlzLmJhY2t1cC5fYmFja2dyb3VuZEVsZW0gPSB0aGlzLnJlbmRlclRpcHNCZyhvcHRpb25zKTtcbiAgICB0aGlzLmJhY2t1cC5fdGlwRWxtID0gdGhpcy5yZW5kZXJUaXBzQm9keShvcHRpb25zKTtcbiAgICB0aGlzLnNldFBvc2l0aW9uKCk7XG59O1xuXG50aXBzLnByb3RvdHlwZS5hbmltYXRpb24gPSBmdW5jdGlvbihzdGF0dXMpIHtcbiAgICBzdGF0dXMgPSAnYW5pbWF0aW9uJyArIHN0YXR1cy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0YXR1cy5zbGljZSgxKTtcbiAgICBpZih0aGlzW3N0YXR1c10pIHtcbiAgICAgICAgdGhpc1tzdGF0dXNdKCk7XG4gICAgfVxufTtcblxudGlwcy5wcm90b3R5cGUuYW5pbWF0aW9uSW4gPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgYW5pbWF0aW9uT3B0aW9uID0gdGhpcy5vcHRpb25zLmFuaW1hdGlvbjtcbiAgICBsZXQgJHRpcEdyb3VwID0gdGhpcy5iYWNrdXAuX3RpcEdyb3VwRWxtO1xuXG4gICAgaWYoJHRpcEdyb3VwLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmFtZT1vaG9UaXBzXVwiKS5sZW5ndGggPD0gMSkge1xuICAgICAgICBpZihhbmltYXRpb25PcHRpb24uY3VzdG9tQW10RnVudGlvbikge1xuICAgICAgICAgICAgYW5pbWF0aW9uT3B0aW9uLmN1c3RvbUFtdEZ1bnRpb24uY2FsbCh0aGlzLCAnaW4nKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgbGV0IGFtdEZ1biA9IGFuaW1hdGlvbk9wdGlvbi5pbjtcbiAgICAgICAgICAgIGFtdEZ1biA9ICdhbmltYXRpb25UeXBlJyArIGFtdEZ1bi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGFtdEZ1bi5zbGljZSgxKTtcbiAgICAgICAgICAgIGlmKHRoaXNbYW10RnVuXSkge1xuICAgICAgICAgICAgICAgIHRoaXNbYW10RnVuXSgnaW4nKTtcbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvblR5cGVEZWZhdWx0KCdpbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfWVsc2Uge1xuICAgICAgICB0aGlzLmFuaW1hdGlvblR5cGVEZWZhdWx0KCdpbicpO1xuICAgIH1cbn07XG5cbnRpcHMucHJvdG90eXBlLmFuaW1hdGlvbk91dCA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBhbmltYXRpb25PcHRpb24gPSB0aGlzLm9wdGlvbnMuYW5pbWF0aW9uO1xuICAgIGxldCAkdGlwR3JvdXAgPSB0aGlzLmJhY2t1cC5fdGlwR3JvdXBFbG07XG5cbiAgICBpZigkdGlwR3JvdXAucXVlcnlTZWxlY3RvckFsbChcIltuYW1lPW9ob1RpcHNdXCIpLmxlbmd0aCA8PSAxKSB7XG4gICAgICAgIGlmKGFuaW1hdGlvbk9wdGlvbi5jdXN0b21BbXRGdW50aW9uKSB7XG4gICAgICAgICAgICBhbmltYXRpb25PcHRpb24uY3VzdG9tQW10RnVudGlvbi5jYWxsKHRoaXMsICdvdXQnKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgbGV0IGFtdEZ1biA9IGFuaW1hdGlvbk9wdGlvbi5vdXQ7XG4gICAgICAgICAgICBhbXRGdW4gPSAnYW5pbWF0aW9uVHlwZScgKyBhbXRGdW4uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBhbXRGdW4uc2xpY2UoMSk7XG4gICAgICAgICAgICBpZih0aGlzW2FtdEZ1bl0pIHtcbiAgICAgICAgICAgICAgICB0aGlzW2FtdEZ1bl0oJ291dCcpO1xuICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uVHlwZURlZmF1bHQoJ291dCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfWVsc2Uge1xuICAgICAgICB0aGlzLmFuaW1hdGlvblR5cGVEZWZhdWx0KCdvdXQnKTtcbiAgICB9XG59O1xuXG50aXBzLnByb3RvdHlwZS5hbmltYXRpb25UeXBlRGVmYXVsdCA9IGZ1bmN0aW9uKHN0YXR1cykge1xuICAgIHRoaXMuYW5pbWF0aW9uVHlwZUZhZGUoc3RhdHVzKTtcbn07XG5cbi8qKlxuICog6buY6K6k5Yqo55S7XG4gKiDmt6HlhaXmt6Hlh7rliqjnlLtcbiAqIEBwYXJhbSAgICB7W3R5cGVdfSAgICAgICAgICAgICAgICAgc3RhdHVzIGluIC0g5pi+56S6IC8gb3V0IC0g6ZqQ6JePXG4gKi9cbnRpcHMucHJvdG90eXBlLmFuaW1hdGlvblR5cGVGYWRlID0gZnVuY3Rpb24oc3RhdHVzKSB7XG4gICAgbGV0ICR0aXAgPSB0aGlzLmJhY2t1cC5fdGlwRWxtO1xuICAgIGxldCAkdGlwR3JvdXAgPSB0aGlzLmJhY2t1cC5fdGlwR3JvdXBFbG07XG4gICAgbGV0ICRiZyA9IHRoaXMuYmFja3VwLl9iYWNrZ3JvdW5kRWxlbTtcbiAgICBpZihzdGF0dXMgPT0gJ2luJykge1xuICAgICAgICBDLmFkZENsYXNzKCR0aXAsICdvaG9UaXAtYW10LWZhZGUnKTtcbiAgICAgICAgaWYoJGJnKSB7XG4gICAgICAgICAgICBDLmFkZENsYXNzKCRiZywgJ29ob1RpcC1iZy1hbXQtZmFkZScpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBDLmFkZENsYXNzKCR0aXAsICdpbicpO1xuICAgICAgICAgICAgaWYoJGJnKSB7XG4gICAgICAgICAgICAgICAgQy5hZGRDbGFzcygkYmcsICdpbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMDApO1xuICAgIH1lbHNlIGlmKHN0YXR1cyA9PSAnb3V0Jykge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBDLmFkZENsYXNzKCR0aXAsICdvdXQnKTtcbiAgICAgICAgICAgIGlmKCRiZykge1xuICAgICAgICAgICAgICAgIEMucmVtb3ZlQ2xhc3MoJGJnLCAnaW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMTAwKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIOaKmOWPoOeJueaViFxuICog5ZCR5LiL5bGV5byA77yM5ZCR5LiK5pS26LW3XG4gKiBAcGFyYW0gICAge1t0eXBlXX0gICAgICAgICAgICAgICAgIHN0YXR1cyBpbiAtIOaYvuekuiAvIG91dCAtIOmakOiXj1xuICovXG50aXBzLnByb3RvdHlwZS5hbmltYXRpb25UeXBlRm9sZCA9IGZ1bmN0aW9uKHN0YXR1cykge1xuICAgIGxldCAkdGlwID0gdGhpcy5iYWNrdXAuX3RpcEVsbTtcbiAgICBsZXQgJGJnID0gdGhpcy5iYWNrdXAuX2JhY2tncm91bmRFbGVtO1xuICAgIGlmKHN0YXR1cyA9PSAnaW4nKSB7XG4gICAgICAgIGxldCBlbGVEZXRhaWxzID0gdGhpcy5nZXRFbGVtZW50RGV0YWlscygpO1xuICAgICAgICBsZXQgdGlwU3R5bGUgPSB7XG4gICAgICAgICAgICBoZWlnaHQ6IGVsZURldGFpbHMudGlwSGVpZ2h0ICsgJ3B4JyxcbiAgICAgICAgfTtcblxuICAgICAgICBDLmFkZENsYXNzKCR0aXAsICdvaG9UaXAtYW10LWZvbGQnKTtcbiAgICAgICAgaWYoJGJnKSB7XG4gICAgICAgICAgICBDLmFkZENsYXNzKCRiZywgJ29ob1RpcC1iZy1hbXQtZm9sZCcpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBDLmFkZENzcygkdGlwLCB0aXBTdHlsZSk7XG4gICAgICAgICAgICBpZigkYmcpIHtcbiAgICAgICAgICAgICAgICBDLmFkZENsYXNzKCRiZywgJ2luJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMCk7XG4gICAgICAgIC8vIOaYvuekuumYtOW9sVxuICAgICAgICB0aGlzLnRpbWVvdXRGb2xkSWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBDLmFkZENzcygkdGlwLCB7b3ZlcmZsb3c6ICd2aXNpYmxlJ30pO1xuICAgICAgICB9LCAzMDApO1xuICAgIH1lbHNlIGlmKHN0YXR1cyA9PSAnb3V0Jykge1xuICAgICAgICBpZih0aGlzLnRpbWVvdXRGb2xkSWQpIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRGb2xkSWQpO1xuICAgICAgICBcbiAgICAgICAgQy5hZGRDc3MoJHRpcCwge292ZXJmbG93OiAnaGlkZGVuJ30pO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBDLmFkZENsYXNzKCR0aXAsICdvdXQnKTtcbiAgICAgICAgICAgIGlmKCRiZykge1xuICAgICAgICAgICAgICAgIEMucmVtb3ZlQ2xhc3MoJGJnLCAnaW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMTAwKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIG9ob+eJueaViFxuICog5Zyo5Z+65YeG5YWD57Sg5Lit6Ze055Sx5bCP5Yiw5aSn5by55Ye65Yiw5a6a5L2N5L2N572u77yM5LuO5a6a5L2N5L2N572u55Sx5aSn5Yiw5bCP5raI5aSx5Zyo5Z+65YeG5YWD57Sg5Lit6Ze0XG4gKiBAcGFyYW0gICAge1t0eXBlXX0gICAgICAgICAgICAgICAgIHN0YXR1cyBpbiAtIOaYvuekuiAvIG91dCAtIOmakOiXj1xuICovXG50aXBzLnByb3RvdHlwZS5hbmltYXRpb25UeXBlT2hvID0gZnVuY3Rpb24oc3RhdHVzKSB7XG4gICAgbGV0ICR0aXAgPSB0aGlzLmJhY2t1cC5fdGlwRWxtO1xuICAgIGxldCAkdGlwR3JvdXAgPSB0aGlzLmJhY2t1cC5fdGlwR3JvdXBFbG07XG4gICAgbGV0ICRiZyA9IHRoaXMuYmFja3VwLl9iYWNrZ3JvdW5kRWxlbTtcblxuICAgIGxldCBzdGFydFBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvblN0eWxlKCdtaWRkbGUnLCBmYWxzZSwgdHJ1ZSk7XG4gICAgbGV0IHN0YXJ0U2l6ZSA9IHtcbiAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgIGhlaWdodDogMFxuICAgIH07XG4gICAgbGV0IHN0YXJ0U3R5bGUgPSBDLmV4dGVuZCh7fSwgc3RhcnRQb3NpdGlvbiwgc3RhcnRTaXplLCB7J29wYWNpdHknOiAnMSd9KTtcblxuICAgIGxldCBlbGVEZXRhaWxzID0gdGhpcy5nZXRFbGVtZW50RGV0YWlscygpO1xuICAgIGxldCB0aXBHcm91cFBvc2l0aW9uID0gQy5yZWxhdGl2ZVBvc2l0aW9uKCR0aXBHcm91cCk7XG4gICAgbGV0IG9sZEdyb3VwU3R5bGUgPSAkdGlwR3JvdXAuc3R5bGUuY3NzVGV4dDtcbiAgICBsZXQgb2xkR3JvdXBTdHlsZU9iaiA9IHtcbiAgICAgICAgdG9wOiB0aXBHcm91cFBvc2l0aW9uLnRvcCxcbiAgICAgICAgbGVmdDogdGlwR3JvdXBQb3NpdGlvbi5sZWZ0LFxuICAgICAgICB3aWR0aDogZWxlRGV0YWlscy50aXBHcm91cFdpZHRoLFxuICAgICAgICBoZWlnaHQ6IGVsZURldGFpbHMudGlwR3JvdXBIZWlnaHQsXG4gICAgfTtcblxuICAgIGlmKHN0YXR1cyA9PSAnaW4nKSB7XG4gICAgICAgIEMuYWRkQ3NzKCR0aXBHcm91cCwge292ZXJmbG93OiAnaGlkZGVuJ30pO1xuXG4gICAgICAgIEMuYWRkQ3NzKCR0aXAsIHsnb3BhY2l0eSc6ICcxJ30pO1xuICAgICAgICBDLmFkZENzcygkdGlwR3JvdXAsIHN0YXJ0U3R5bGUpO1xuICAgICAgICBcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgQy5hZGRDbGFzcygkdGlwR3JvdXAsICdvaG9UaXAtYW10LW9obycpO1xuXG4gICAgICAgICAgICBDLmFkZENzcygkdGlwR3JvdXAsIG9sZEdyb3VwU3R5bGVPYmopO1xuICAgICAgICAgICAgaWYoJGJnKSB7XG4gICAgICAgICAgICAgICAgQy5hZGRDbGFzcygkYmcsICdvaG9UaXAtYmctYW10LW9obycpO1xuICAgICAgICAgICAgICAgIEMuYWRkQ2xhc3MoJGJnLCAnaW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMSk7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIC8vIOWIhue7hOesrOS6jOS4qlRpcCDkvb/nlKjpu5jorqTliqjnlLvvvIzmiYDku6XpnIDopoHliKDpmaTlhbbku5bliqjnlLvmlYjmnpzvvIzpgb/lhY3pu5jorqTliqjnlLvmlYjmnpzlhrLnqoFcbiAgICAgICAgICAgIEMucmVtb3ZlQ2xhc3MoJHRpcEdyb3VwLCAnb2hvVGlwLWFtdC1vaG8nKTtcbiAgICAgICAgICAgICR0aXBHcm91cC5zdHlsZS5jc3NUZXh0ID0gb2xkR3JvdXBTdHlsZTtcbiAgICAgICAgfSwgMjAxKTtcbiAgICB9ZWxzZSBpZihzdGF0dXMgPT0gJ291dCcpIHtcbiAgICAgICAgQy5hZGRDc3MoJHRpcEdyb3VwLCB7b3ZlcmZsb3c6ICdoaWRkZW4nfSk7XG5cbiAgICAgICAgLy8gaW4g5LmL5ZCOIOS8muWIoOmZpOWKqOeUu+aViOaenO+8jG91dCDpnIDopoHlsIbliqjnlLvmlYjmnpzlhYjmt7vliqDlm57mnaVcbiAgICAgICAgQy5hZGRDbGFzcygkdGlwR3JvdXAsICdvaG9UaXAtYW10LW9obycpO1xuICAgICAgICBpZigkYmcpIHtcbiAgICAgICAgICAgIEMuYWRkQ2xhc3MoJGJnLCAnb2hvVGlwLWJnLWFtdC1vaG8nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIEMuYWRkQ3NzKCR0aXBHcm91cCwgb2xkR3JvdXBTdHlsZU9iaik7XG5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgQy5hZGRDc3MoJHRpcEdyb3VwLCBzdGFydFN0eWxlKTtcbiAgICAgICAgICAgIGlmKCRiZykge1xuICAgICAgICAgICAgICAgIEMucmVtb3ZlQ2xhc3MoJGJnLCAnaW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMSk7XG4gICAgfVxufTtcblxuLyoqXG4gKiDnjrvnkoPnoo7niYfnibnmlYhcbiAqIFRpcHMg55Sx56KO54mH5ZCI5oiQ5pW05L2T5bGV56S677yMVGlwcyDnlLHmlbTkvZPliIboo4LmiJDnoo7niYfmtojlpLFcbiAqIEBwYXJhbSAgICB7W3R5cGVdfSAgICAgICAgICAgICAgICAgc3RhdHVzIGluIC0g5pi+56S6IC8gb3V0IC0g6ZqQ6JePXG4gKi9cbnRpcHMucHJvdG90eXBlLmFuaW1hdGlvblR5cGVGcmFnbWVudCA9IGZ1bmN0aW9uKHN0YXR1cykge1xuICAgIGxldCAkdGlwR3JvdXAgPSB0aGlzLmJhY2t1cC5fdGlwR3JvdXBFbG07XG4gICAgbGV0ICR0aXAgPSB0aGlzLmJhY2t1cC5fdGlwRWxtO1xuICAgIGxldCAkYmcgPSB0aGlzLmJhY2t1cC5fYmFja2dyb3VuZEVsZW07XG4gICAgaWYoc3RhdHVzID09ICdpbicpIHtcbiAgICAgICAgQy5hZGRDbGFzcygkdGlwLCAnb2hvVGlwLWFtdC1mcmFnbWVudCBpbicpO1xuICAgICAgICBpZigkYmcpIHtcbiAgICAgICAgICAgIEMuYWRkQ2xhc3MoJGJnLCAnb2hvVGlwLWJnLWFtdC1mcmFnbWVudCBpbicpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5mcmFnbWVudEluRXhwbG9kZSgpO1xuICAgIH1lbHNlIGlmKHN0YXR1cyA9PSAnb3V0Jykge1xuICAgICAgICB0aGlzLmZyYWdtZW50T3V0RXhwbG9kZSgpO1xuXG4gICAgICAgIGxldCB0aXBTdHlsZSA9IHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgICAgfTtcbiAgICAgICAgQy5hZGRDc3MoJHRpcCwgdGlwU3R5bGUpO1xuICAgIH1cbn1cblxudGlwcy5wcm90b3R5cGUuY3JlYXRlVGlwQ29weSA9IGZ1bmN0aW9uKGhpZGVUaXApIHtcbiAgICBsZXQgJHRpcCA9IHRoaXMuYmFja3VwLl90aXBFbG07XG4gICAgbGV0ICR0aXBDbG9uZSA9ICR0aXAuY2xvbmVOb2RlKHRydWUpO1xuXG4gICAgQy5pbnNlcnRBZnRlcigkdGlwQ2xvbmUsICR0aXApO1xuXG4gICAgaWYoaGlkZVRpcCA9PSB0cnVlKXtcbiAgICAgICAgJHRpcC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuICR0aXBDbG9uZTtcbn1cblxudGlwcy5wcm90b3R5cGUuY3JlYXRlRnJhZ21lbnQgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgJHRpcENsb25lID0gdGhpcy5jcmVhdGVUaXBDb3B5KHRydWUpO1xuXG4gICAgbGV0IHRpcFdpZHRoID0gQy5vdXRlcldpZHRoKCR0aXBDbG9uZSksIHRpcEhlaWdodCA9IEMub3V0ZXJIZWlnaHQoJHRpcENsb25lKTtcbiAgICBDLmFkZENzcygkdGlwQ2xvbmUsIHt3aWR0aDogdGlwV2lkdGgrJ3B4JywgaGVpZ2h0OiB0aXBIZWlnaHQrJ3B4J30pO1xuICAgIGxldCB0aXBIdG1sID0gJHRpcENsb25lLmlubmVySFRNTDtcbiAgICAkdGlwQ2xvbmUuaW5uZXJIVE1MID0gJyc7XG4gICAgXG4gICAgbGV0IGFuaW1hdGlvbk9wdGlvbiA9IHRoaXMub3B0aW9ucy5hbmltYXRpb247XG4gICAgbGV0IHhDb3VudCA9IGFuaW1hdGlvbk9wdGlvbi5mcmFnbWVudHMueENvdW50LFxuICAgICAgICB5Q291bnQgPSBhbmltYXRpb25PcHRpb24uZnJhZ21lbnRzLnlDb3VudCxcbiAgICAgICAgZldpZHRoID0gdGlwV2lkdGgveENvdW50LFxuICAgICAgICBmSGVpZ2h0ID0gdGlwSGVpZ2h0L3lDb3VudDtcblxuICAgIGxldCB4PTAsIHk9MCwgcmVjdExlZnQ9MCwgcmVjdFRvcD0wLCBmTm9kZTtcbiAgICBmb3IoeT0wOyB5PHlDb3VudDsgeSsrKSB7XG4gICAgICAgIHJlY3RUb3AgPSB5KmZIZWlnaHQ7XG4gICAgICAgIGZvcih4PTA7IHg8eENvdW50OyB4KyspIHtcbiAgICAgICAgICAgIHJlY3RMZWZ0PXgqZldpZHRoO1xuICAgICAgICAgICAgZk5vZGUgPSBDLmNyZWF0ZU5vZGUoJzxkaXYgY2xhc3M9XCJvaG9UaXAtYW10LWZyYWdtZW50LWJveFwiIHN0eWxlPVwiY2xpcDogcmVjdCgnK3JlY3RUb3ArJ3B4LCAnKyhyZWN0TGVmdCtmV2lkdGgpKydweCwgJysocmVjdFRvcCtmSGVpZ2h0KSsncHgsICcrcmVjdExlZnQrJ3B4KVwiPicrdGlwSHRtbCsnPC9kaXY+Jyk7XG4gICAgICAgICAgICAkdGlwQ2xvbmUuYXBwZW5kQ2hpbGQoZk5vZGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuICR0aXBDbG9uZTtcbn1cblxudGlwcy5wcm90b3R5cGUuZnJhZ21lbnRJbkV4cGxvZGUgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgJHRpcCA9IHRoaXMuYmFja3VwLl90aXBFbG07XG5cbiAgICBsZXQgJHRpcENsb25lID0gdGhpcy5jcmVhdGVGcmFnbWVudCgpO1xuXG4gICAgJHRpcENsb25lLnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdltjbGFzcz1cIm9ob1RpcC1hbXQtZnJhZ21lbnQtYm94XCJdJykuZm9yRWFjaChpdGVtID0+IHsgICAgICAgICAgICBcbiAgICAgICAgbGV0IHJhbmRUb3AgPSBDLnJhbmRvbU51bSgtMTAsIDEwKSxcbiAgICAgICAgICAgIHJhbmRMZWZ0ID0gQy5yYW5kb21OdW0oLTEwLCAxMCk7XG5cbiAgICAgICAgbGV0IHJhbmREZWcgPSBDLnJhbmRvbU51bSgtNSwgMTUpLCBcbiAgICAgICAgICAgIHJhbmRTY2FsZSA9IEMucmFuZG9tTnVtKDAuNywgMS4zKSxcbiAgICAgICAgICAgIHJhbmREZWcyID0gQy5yYW5kb21OdW0oNSwgMjUpO1xuXG4gICAgICAgIEMuYWRkQ3NzKGl0ZW0sIHsndG9wJyA6IChyYW5kVG9wKSsncHgnLCAnbGVmdCcgOiAocmFuZExlZnQpKydweCcsICdvcGFjaXR5JyA6ICcwJywgJ3RyYW5zZm9ybScgOiAnc2NhbGUoJytyYW5kU2NhbGUrJykgc2tldygnK3JhbmREZWcrJ2RlZykgcm90YXRlWignK3JhbmREZWcyKydkZWcpJ30pO1xuICAgICAgICBcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIEMuYWRkQ2xhc3MoaXRlbSwgJ2V4cGxvZGUtaW4nKTtcbiAgICAgICAgICAgIEMuYWRkQ3NzKGl0ZW0sIHsnbGVmdCcgOiAnMCcsICd0b3AnIDogJzAnLCAnb3BhY2l0eScgOiAnMScsICd0cmFuc2Zvcm0nIDogJ25vbmUnfSk7XG4gICAgICAgIH0sIDEwKTtcbiAgICB9KVxuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgJHRpcENsb25lLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoJHRpcENsb25lKTtcbiAgICAgICAgQy5hZGRDc3MoJHRpcCwge2Rpc3BsYXk6ICcnfSk7XG4gICAgfSwgMTAwMCk7XG59XG5cbnRpcHMucHJvdG90eXBlLmZyYWdtZW50T3V0RXhwbG9kZSA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCAkdGlwQ2xvbmUgPSB0aGlzLmNyZWF0ZUZyYWdtZW50KCk7XG4gICAgXG4gICAgbGV0IHRpcFdpZHRoID0gQy5vdXRlcldpZHRoKCR0aXBDbG9uZSksIHRpcEhlaWdodCA9IEMub3V0ZXJIZWlnaHQoJHRpcENsb25lKTtcblxuICAgICR0aXBDbG9uZS5xdWVyeVNlbGVjdG9yQWxsKCdkaXZbY2xhc3M9XCJvaG9UaXAtYW10LWZyYWdtZW50LWJveFwiXScpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIEMuYWRkQ2xhc3MoaXRlbSwgJ2V4cGxvZGUtb3V0Jyk7XG4gICAgICAgIFxuICAgICAgICBsZXQgcmFuZFRvcCA9IEMucmFuZG9tTnVtKC0zMCwgMzApO1xuICAgICAgICBsZXQgcmFuZExlZnQgPSBDLnJhbmRvbU51bSgtMzAsIDMwKTtcblxuICAgICAgICBsZXQgcmFuZERlZyA9IEMucmFuZG9tTnVtKC01LCAxMCksIFxuICAgICAgICByYW5kU2NhbGUgPSBDLnJhbmRvbU51bSgwLjksIDEuNSksXG4gICAgICAgIHJhbmREZWcyID0gQy5yYW5kb21OdW0oMzAsIDUpO1xuXG4gICAgICAgIEMuYWRkQ3NzKGl0ZW0sIHsndG9wJyA6IChyYW5kVG9wKSsncHgnLCAnbGVmdCcgOiAocmFuZExlZnQpKydweCcsICdvcGFjaXR5JyA6ICcwJywgJ3RyYW5zZm9ybScgOiAnc2NhbGUoJytyYW5kU2NhbGUrJykgc2tldygnK3JhbmREZWcrJ2RlZykgcm90YXRlWignK3JhbmREZWcyKydkZWcpJ30pO1xuICAgIH0pXG5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAkdGlwQ2xvbmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCgkdGlwQ2xvbmUpO1xuICAgIH0sIDEwMDApO1xuXG4gICAgdGhpcy5vcHRpb25zLmFuaW1hdGlvbi5kZWxheSA9IDEwMTA7XG59XG5cbnRpcHMucHJvdG90eXBlLmZyYWdtZW50T3V0RmxvdyA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCAkdGlwQ2xvbmUgPSB0aGlzLmNyZWF0ZUZyYWdtZW50KCk7XG5cbiAgICBsZXQgZnJhZ21lbnRzID0gJHRpcENsb25lLnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdltjbGFzcz1cIm9ob1RpcC1hbXQtZnJhZ21lbnQtYm94XCJdJyk7XG4gICAgbGV0IGFuaW1hdGlvbk9wdGlvbiA9IHRoaXMub3B0aW9ucy5hbmltYXRpb247XG4gICAgbGV0IHhDb3VudCA9IGFuaW1hdGlvbk9wdGlvbi5mcmFnbWVudHMueENvdW50LFxuICAgICAgICB5Q291bnQgPSBhbmltYXRpb25PcHRpb24uZnJhZ21lbnRzLnlDb3VudDtcbiAgICBsZXQgZkhlaWdodCA9IEMub3V0ZXJIZWlnaHQoJHRpcENsb25lKS95Q291bnQ7XG4gICAgXG4gICAgbGV0IHg9MCwgeT0wLCBjdXJUaW1lb3V0PTAsIG1heFRpbWVvdXQ9MDtcbiAgICBmb3IoeT0wOyB5PHlDb3VudDsgeSsrKSB7XG4gICAgICAgIGxldCB0b3AgPSB5KmZIZWlnaHQrNTtcbiAgICAgICAgZm9yKHg9MDsgeDx4Q291bnQ7IHgrKykge1xuICAgICAgICAgICAgY3VyVGltZW91dCA9IHgqMzA7XG4gICAgICAgICAgICBtYXhUaW1lb3V0ID0gbWF4VGltZW91dCA+IGN1clRpbWVvdXQ/IG1heFRpbWVvdXQgOiBjdXJUaW1lb3V0O1xuICAgICAgICAgICAgbGV0IGsgPSB5KnhDb3VudCArIHg7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmKGZyYWdtZW50c1trXSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICBmcmFnbWVudHNba10uc3R5bGUudG9wID0gdG9wICsgXCJweFwiO1xuICAgICAgICAgICAgICAgIGZyYWdtZW50c1trXS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgICAgICAvLyBmcmFnbWVudHNba10uc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoMzYwZGVnKSBzY2FsZSgwKVwiO1xuICAgICAgICAgICAgfSwgY3VyVGltZW91dCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgJHRpcENsb25lLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoJHRpcENsb25lKTtcbiAgICB9LCBjdXJUaW1lb3V0KzEwMCk7XG5cbiAgICAvLyBXaWxsIHJlbW92ZSBBbGwgdGhlIHRpcHMgZWxlbWVudCBhZnRlciBkZWxheVxuICAgIHRoaXMub3B0aW9ucy5hbmltYXRpb24uZGVsYXkgPSBjdXJUaW1lb3V0KzEwMDtcbn1cblxuLyoqXG4gKiDnm5HlkKznqpflj6PlpKflsI/lj5HnlJ/mlLnlj5jvvIzph43mlrDlrprkvY1cbiAqXG4gKiDms6jmhI/nqpflj6PlpKflsI/mlLnlj5jvvIhyZXNpemXvvIkgNTAw5q+r56eS5YaFIOeri+WIu+S4iuS4i+a7muWKqO+8iHNjcm9sbO+8ie+8jOmcgOimgeeri+WNs+mHjeaWsOWumuS9jeS4gOasoeOAglxuICog5Y6f5Zug5pivIGdldEVsZW1lbnREZXRhaWxzIOWPquaciSByZXNpemUg5omN5Lya6YeN5paw6I635Y+WXG4gKi9cbnRpcHMucHJvdG90eXBlLmxpc3RlbiA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBsZXQgbGFzdEV2ZW50ID0gbnVsbDtcblxuICAgIGxldCB0cmlnZ2VyU2V0UG9zaXRpb24gPSBmdW5jdGlvbihlKSB7XG4gICAgICAgIF90aGlzLndyaXRlTG9nKCdpbmZvJywgXCJUcmlnZ2VyIFNldCBQb3NpdGlvbjogXCIsIGUpO1xuICAgICAgICBfdGhpcy5ldmVudCA9IGU7XG4gICAgICAgIF90aGlzLnNldFBvc2l0aW9uKCk7XG5cbiAgICAgICAgLy8gc2V0VGltZW91dChmdW5jdGlvbigpe190aGlzLmV2ZW50ID0gbnVsbDt9LCAxKTtcbiAgICAgICAgX3RoaXMuZXZlbnQgPSBudWxsO1xuICAgIH1cblxuXG4gICAgX3RoaXMuYmFja3VwLmJpbmQgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgIC8vIF90aGlzLndyaXRlTG9nKCdpbmZvJywgXCJUcmlnZ2VyIEV2ZW50OiBcIiwgZSk7XG5cbiAgICAgICAgaWYobGFzdEV2ZW50ICYmIGxhc3RFdmVudC50eXBlID09ICdyZXNpemUnICYmIGUudHlwZSAhPSAncmVzaXplJykge1xuICAgICAgICAgICAgX3RoaXMud3JpdGVMb2coJ2luZm8nLCBcIlRyaWdnZXIgRXZlbnQgdHlwZSB3YXMgY2hhbmdlZCBmcm9tICVzIHRvICVzLCBuZWVkIHRvIHNldCBwb3NpdGlvbiBpbW1lZGlhdGVseS5cIiwgbGFzdEV2ZW50LnR5cGUsIGUudHlwZSk7XG4gICAgICAgICAgICB0cmlnZ2VyU2V0UG9zaXRpb24obGFzdEV2ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxhc3RFdmVudCA9IGU7XG5cbiAgICAgICAgaWYoX3RoaXMuZXZlbnRUaW1lb3V0SUQpIGNsZWFyVGltZW91dChfdGhpcy5ldmVudFRpbWVvdXRJRCk7XG4gICAgICAgIF90aGlzLmV2ZW50VGltZW91dElEID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRyaWdnZXJTZXRQb3NpdGlvbihlKTtcbiAgICAgICAgfSwgMTApO1xuICAgIH1cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgX3RoaXMuYmFja3VwLmJpbmQpO1xuICAgIGlmKHRoaXMuaXNQYXJlbnRCb2R5RWxlbWVudCgpKSB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgX3RoaXMuYmFja3VwLmJpbmQpO1xuICAgIGVsc2UgdGhpcy5iYWNrdXAuX3BhcmVudEVsbS5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBfdGhpcy5iYWNrdXAuYmluZCk7XG59O1xuXG50aXBzLnByb3RvdHlwZS51bmxpc3RlbiA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIF90aGlzLmJhY2t1cC5iaW5kKTtcbiAgICBpZih0aGlzLmlzUGFyZW50Qm9keUVsZW1lbnQoKSkgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIF90aGlzLmJhY2t1cC5iaW5kKTtcbiAgICBlbHNlIHRoaXMuYmFja3VwLl9wYXJlbnRFbG0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgX3RoaXMuYmFja3VwLmJpbmQpO1xufTtcblxudGlwcy5wcm90b3R5cGUuY2xlYXJUaW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYodGhpcy5mbG9hdE9wdGlvbnMgJiYgdGhpcy5mbG9hdE9wdGlvbnMuaGFzT3duUHJvcGVydHkoJ2Zsb2F0SWQnKSAmJiB0aGlzLmZsb2F0T3B0aW9ucy5mbG9hdElkKSBjbGVhckludGVydmFsKHRoaXMuZmxvYXRPcHRpb25zLmZsb2F0SWQpO1xufVxuXG50aXBzLnByb3RvdHlwZS5kZWxldGVHcm91cCA9IGZ1bmN0aW9uKCkge1xufVxuXG4vL+enu+mZpFRpcHMg5YWD57SgXG50aXBzLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBsZXQgJHRpcENvbnRhaW5lciA9IF90aGlzLmJhY2t1cC5fdGlwQ29udGFpbmVyRWxtO1xuICAgIGxldCAkdGlwR3JvdXAgPSBfdGhpcy5iYWNrdXAuX3RpcEdyb3VwRWxtO1xuICAgIGxldCAkdGlwID0gX3RoaXMuYmFja3VwLl90aXBFbG07XG4gICAgbGV0ICRiZyA9IF90aGlzLmJhY2t1cC5fYmFja2dyb3VuZEVsZW07XG4gICAgbGV0ICRzeW1ib2wgPSBfdGhpcy5iYWNrdXAuX3N5bWJvbEVsbTtcblxuICAgIHRoaXMub3B0aW9ucy5ldmVudHMuYmVmb3JlRGVzdHJveWVkLmNhbGwodGhpcyk7ICAgICAgLy9UaXBzIOmUgOavgeS5i+WJjSDop6blj5FcblxuICAgIF90aGlzLmFuaW1hdGlvbignb3V0Jyk7XG5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAkdGlwLnJlbW92ZSgpO1xuICAgICAgICBpZigkYmcpIHtcbiAgICAgICAgICAgICRiZy5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOS4gOS4que7hOWPquacieS4gOS4qlN5bWJvbO+8jOW9k+e7hOWGheWPquWJqeS4i+S4gOS4quWFg+e0oOeahOaXtuWAme+8jOivtOaYjuWug+aYr1N5bWJvbFxuICAgICAgICBpZigkc3ltYm9sKSB7XG4gICAgICAgICAgICBpZigkdGlwR3JvdXAuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIqXCIpLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgJHN5bWJvbC5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCR0aXBHcm91cC5nZXRFbGVtZW50c0J5VGFnTmFtZShcIipcIikubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICR0aXBHcm91cC5yZW1vdmUoKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgLy8g55So5LqO5pi+56S6c3ltYm9sXG4gICAgICAgICAgICBDLmFkZENzcygkdGlwR3JvdXAsIHtvdmVyZmxvdzogJ3Zpc2libGUnfSk7XG4gICAgICAgICAgICBfdGhpcy5yZXNldFBvc2l0aW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZigkdGlwQ29udGFpbmVyLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiKlwiKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgJHRpcENvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8v5Y+W5raI55uR5ZCsXG4gICAgICAgIF90aGlzLnVubGlzdGVuKCk7XG5cbiAgICAgICAgX3RoaXMuY2xlYXJUaW1lb3V0KCk7XG5cbiAgICAgICAgX3RoaXMudW5zZXRHcm91cCgpO1xuXG4gICAgICAgIF90aGlzLm9wdGlvbnMuZXZlbnRzLmRlc3Ryb3llZC5jYWxsKF90aGlzKTsgICAgICAgIC8vVGlwcyDplIDmr4HkuYvlkI4g6Kem5Y+RXG4gICAgfSwgX3RoaXMub3B0aW9ucy5hbmltYXRpb24uZGVsYXkpO1xufVxuXG50aXBzLnByb3RvdHlwZS5zZXREZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBsZXQgJHRpcEJveCA9IF90aGlzLmJhY2t1cC5fdGlwQm94RWxtO1xuICAgIGxldCAkYmcgPSBfdGhpcy5iYWNrdXAuX2JhY2tncm91bmRFbGVtO1xuXG4gICAgaWYodGhpcy5vcHRpb25zLmRlc3Ryb3kgPT0gJ2F1dG8nKSB7ICAgICAgLy/oh6rliqjplIDmr4F0aXBzXG4gICAgICAgIGxldCBkZWxheSA9IHRoaXMub3B0aW9ucy5kZWxheTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgX3RoaXMuZGVzdHJveSgpO1xuICAgICAgICB9LCBkZWxheSk7XG4gICAgfWVsc2UgaWYodGhpcy5vcHRpb25zLmRlc3Ryb3kgPT0gJ21hbnVhbCcpIHsgICAgIC8v5omL5Yqo6ZSA5q+BdGlwc1xuICAgICAgICBsZXQgJGNsb3NlID0gQy5jcmVhdGVOb2RlKFwiPGRpdiBjbGFzcz0nb2hvVGlwLWNsb3NlJz54PC9kaXY+XCIpO1xuICAgICAgICAkdGlwQm94LmFwcGVuZENoaWxkKCRjbG9zZSk7XG5cbiAgICAgICAgJGNsb3NlLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIF90aGlzLmRlc3Ryb3koKTtcbiAgICAgICAgfTtcbiAgICB9ZWxzZSB7XG4gICAgICAgIC8vIOS7juS4jemUgOavgVxuICAgIH1cbn07XG5cbnRpcHMucHJvdG90eXBlLmluaXRUaXBzID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5pbml0TXNnKCk7XG4gICAgdGhpcy5zZXRDbGFzcygpOyAgICAgICAgICAgICAgICAvL+iOt+WPlmNsYXNzXG4gICAgdGhpcy5zZXRUaXBzQXR0cmlidXRlKCk7ICAgICAgICAvL+iOt+WPluWxnuaAp1xuICAgIHRoaXMucmVuZGVyKCk7XG4gICAgdGhpcy5zZXRHcm91cCgpO1xuXG4gICAgdGhpcy5vcHRpb25zLmV2ZW50cy5iZWZvcmVTaG93bi5jYWxsKHRoaXMpOyAgLy9UaXBzIOWIm+W7uua2iOaBr+S5i+WQju+8jOWxleekuuS5i+WJjSDop6blj5FcblxuICAgIHRoaXMuYW5pbWF0aW9uKCdpbicpO1xuICAgIHRoaXMubGlzdGVuKCk7XG4gICAgdGhpcy5zZXREZXN0cm95KCk7XG5cbiAgICB0aGlzLm9wdGlvbnMuZXZlbnRzLnNob3duLmNhbGwodGhpcyk7ICAgICAgICAvL1RpcHMg5bGV56S65LmL5ZCOIOinpuWPkVxufTtcblxudGlwcy5wcm90b3R5cGUudW5pcXVlSWQgPSBmdW5jdGlvbigpIHtcbiAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcbiAgIGxldCB5ID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgbGV0IG0gPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xuICAgbSA9IG0gPCAxMCA/ICgnMCcgKyBtKSA6IG07XG4gICBsZXQgZCA9IGRhdGUuZ2V0RGF0ZSgpO1xuICAgZCA9IGQgPCAxMCA/ICgnMCcgKyBkKSA6IGQ7XG4gICBsZXQgaCA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgIGxldCBtaW51dGUgPSBkYXRlLmdldE1pbnV0ZXMoKTtcbiAgIGxldCBzZWNvbmQgPSBkYXRlLmdldFNlY29uZHMoKTtcblxuICAgbGV0IHJhbmRvbVN0ciA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyKTtcblxuICAgcmV0dXJuIHkgKyBtICsgZCArIGggKyBtaW51dGUgKyBzZWNvbmQgKyByYW5kb21TdHI7XG59XG5cbnRpcHMucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbihtZXNzYWdlLCB0eXBlLCBiYXNlRWxlbWVudCkge1xuICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICBiYXNlRWxlbWVudDogYmFzZUVsZW1lbnQsXG4gICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICB9O1xuICAgIHRoaXMuaW5pdChvcHRpb25zKTtcbn07XG5cbnRpcHMucHJvdG90eXBlLm5vcm1hbCA9IGZ1bmN0aW9uKG1lc3NhZ2UsIGljb24sIGJhc2VFbGVtZW50KSB7XG4gICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgIGJhc2VFbGVtZW50OiBiYXNlRWxlbWVudCxcbiAgICAgICAgdHlwZTogXCJub3JtYWxcIixcbiAgICAgICAgaWNvbjogaWNvbj8gaWNvbiA6ICdpbmZvJyxcbiAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH07XG4gICAgdGhpcy5pbml0KG9wdGlvbnMpO1xufTtcblxudGlwcy5wcm90b3R5cGUuaW5mbyA9IGZ1bmN0aW9uKG1lc3NhZ2UsIGJhc2VFbGVtZW50KSB7XG4gICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgIGJhc2VFbGVtZW50OiBiYXNlRWxlbWVudCxcbiAgICAgICAgdHlwZTogXCJpbmZvXCIsXG4gICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICB9O1xuICAgIHRoaXMuaW5pdChvcHRpb25zKTtcbn07XG5cbnRpcHMucHJvdG90eXBlLnN1Y2Nlc3MgPSBmdW5jdGlvbihtZXNzYWdlLCBiYXNlRWxlbWVudCkge1xuICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICBiYXNlRWxlbWVudDogYmFzZUVsZW1lbnQsXG4gICAgICAgIHR5cGU6IFwic3VjY2Vzc1wiLFxuICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfTtcbiAgICB0aGlzLmluaXQob3B0aW9ucyk7XG59O1xuXG50aXBzLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uKG1lc3NhZ2UsIGJhc2VFbGVtZW50KSB7XG4gICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgIGJhc2VFbGVtZW50OiBiYXNlRWxlbWVudCxcbiAgICAgICAgdHlwZTogXCJlcnJvclwiLFxuICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfTtcbiAgICB0aGlzLmluaXQob3B0aW9ucyk7XG59O1xuXG50aXBzLnByb3RvdHlwZS53YXJuaW5nID0gZnVuY3Rpb24obWVzc2FnZSwgYmFzZUVsZW1lbnQpIHtcbiAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgYmFzZUVsZW1lbnQ6IGJhc2VFbGVtZW50LFxuICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcbiAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH07XG4gICAgdGhpcy5pbml0KG9wdGlvbnMpO1xufTtcblxudGlwcy5wcm90b3R5cGUuaG92ZXJUaXAgPSBmdW5jdGlvbihvcHRpb25zLCBob3ZlckVsZW1lbnQpIHtcbiAgICBsZXQgZGVmT3B0aW9ucyA9IHtcbiAgICAgICAgc3ltYm9sOiAndHJpYW5nbGUnXG4gICAgfTtcbiAgICBsZXQgaG92ZXJUaXA7XG4gICAgb3B0aW9ucyA9IEMuZXh0ZW5kKHt9LCBkZWZPcHRpb25zLCBvcHRpb25zKTtcblxuICAgIGhvdmVyRWxlbWVudC5vbm1vdXNlZW50ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaG92ZXJUaXAgPSBvaG9UaXBzKG9wdGlvbnMpO1xuICAgIH1cbiAgICBob3ZlckVsZW1lbnQub25tb3VzZWxlYXZlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmKGhvdmVyVGlwKSBob3ZlclRpcC5kZXN0cm95KCk7XG4gICAgfVxufTtcblxuLy9qUXVlcnkg5ouT5bGV6Z2Z5oCB5pa55rOVIHRpcHNcbmlmKHR5cGVvZiBqUXVlcnkgIT0gJ3VuZGVmaW5lZCcpe1xuICAgICQuZXh0ZW5kKHtcbiAgICAgICAgb2hvVGlwczogZnVuY3Rpb24ob3B0aW9ucywgZXh0ZW5kT3B0aW9ucyA9IHt9KSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IHRpcHMob3B0aW9ucywgZXh0ZW5kT3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9ob1RpcHMob3B0aW9ucywgZXh0ZW5kT3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIG5ldyB0aXBzKG9wdGlvbnMsIGV4dGVuZE9wdGlvbnMpO1xufVxuXG5leHBvcnQgeyB0aXBzIGFzIG9ob1RpcHNQcm90b3R5cGUgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==