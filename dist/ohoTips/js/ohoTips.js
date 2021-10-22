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
/* harmony export */   "css": () => (/* binding */ css),
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

function css(el, styleName, value) {
    if(value !== undefined) return el.style[styleName] = value;
    else return getComputedStyle(el)[styleName];
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
    let type = this.options.type;
    let limit = this.options.limit;
    let shadow = this.options.shadow;
    let icon = this.options.icon;
    let symbol = this.options.symbol;
    let html = this.options.html;

    // ohoTip-hide 动画用，首先设置为全透明
    let tipClass = "ohoTip ohoTip-hide";
    let tipBoxClass = "ohoTip-box";
    let bgClass = "ohoTip-bg ohoTip-hide";
    let messageClass = "";
    let iconClass = "";
    let symbolClass = "";

    // 限制Tips 宽度或者高度
    if(limit) {
        tipClass = tipClass + " ohoTip-limit";
    }
    // 是否显示阴影
    if(!shadow) {
        tipBoxClass = tipBoxClass + ' ohoTip-box-no-shadow';
    }

    if(this.isHtmlMessage()) {
        tipBoxClass = tipBoxClass + ' ohoTip-box-html';
        if(_common_js__WEBPACK_IMPORTED_MODULE_0__.isObj(html) && html.isContainerTransparent) tipBoxClass = tipBoxClass + ' ohoTip-box-html-transparent';
    }

    switch(type) {
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
            messageClass = type;        //用户自定义
            iconClass = "ohoTip-icon icon-check";
            symbolClass = "ohoTip-symbol";
            break;
    }

    if(icon) {
        tipBoxClass = tipBoxClass + " ohoTip-add-icon" + " icon-" + this.options.iconOptions.position;
        // 如果icon 为true，色调基于option.type。 如果为字符串，则根据字符串设置
        if(typeof icon == 'string') {
            iconClass = "ohoTip-icon";
            switch(icon) {
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

    if(symbol) {
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
    let group = this.options.group;
    let tipsAttribute = {};
    if(group.name) {
        tipsAttribute.tipName = group.name;
    }else {
        tipsAttribute.tipName = new Date().getTime();
    }

    this.tipsAttribute = tipsAttribute;

    return tipsAttribute;
};

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
    let $base = this.backup._baseElm;
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

    // 如果基准元素Postion 是Fixed，则Tips插入到基准元素内
    // 否则插入到body 内更好
    let pStylePosition = _common_js__WEBPACK_IMPORTED_MODULE_0__.getStyle($base, 'position');
    if(pStylePosition == 'fixed') $base.appendChild($tipContainer);         //先插入元素，然后才能获取宽度和高度
    else document.body.appendChild($tipContainer);

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

    let group = this.options.group;

    if(group.name) {
        if(this.tGroups.hasOwnProperty(group.name)) {
            this.tGroups[group.name].push(_this);
        }else {
            this.tGroups[group.name] = [_this];
        }
    }
}

/**
 * 销毁Tips 的时候，
 * 从分组里面移除这个 Tips
 */
tips.prototype.unsetGroup = function() {
    let _this = this;

    let group = this.options.group;

    if(group.name) {
        if(this.tGroups.hasOwnProperty(group.name)) {
            for (let i = 0; i < this.tGroups[group.name].length; i++) {
                if(this.tGroups[group.name][i].id == this.id) {
                    this.tGroups[group.name].splice(i, 1);
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

    let group = this.options.group;

    if(group.name) {
        if(this.tGroups.hasOwnProperty(group.name) && this.tGroups[group.name].length > group.maxLength) {
            this.tGroups[group.name][0].destroy(_this);
            this.tGroups[group.name].splice(0, 1);
        }
    }
}

/**
 * 判断Tips 基准元素是否是 Body 元素
 */
tips.prototype.isBodyElement = function() {
    return !this.options.baseElement || this.backup._baseElm.tagName == 'BODY';
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

    let $pElem = this.backup._baseElm;
    let $tipGroup = this.backup._tipGroupElm;
    let $tip = this.backup._tipElm;
    let details;

    if(this.isBodyElement()) {
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
            basePosition: _common_js__WEBPACK_IMPORTED_MODULE_0__.position($pElem),
            baseMarginTop: parseFloat(_common_js__WEBPACK_IMPORTED_MODULE_0__.css($pElem, "margin-top")),            //获取基准元素外边距，position() 获取的值不算外边距
            baseMarginLeft: parseFloat(_common_js__WEBPACK_IMPORTED_MODULE_0__.css($pElem, "margin-left")),
            baseWidth: _common_js__WEBPACK_IMPORTED_MODULE_0__.innerWidth($pElem, true),                                   //width+padding
            baseHeight: _common_js__WEBPACK_IMPORTED_MODULE_0__.innerHeight($pElem, true),                                 //height+padding
            baseOuterWidth: _common_js__WEBPACK_IMPORTED_MODULE_0__.outerWidth($pElem),
            baseOuterHeight: _common_js__WEBPACK_IMPORTED_MODULE_0__.outerHeight($pElem),
            baseBorderTopWidth: parseFloat(_common_js__WEBPACK_IMPORTED_MODULE_0__.css($pElem, "border-top-width")),            //top border
            baseBorderBottomWidth: parseFloat(_common_js__WEBPACK_IMPORTED_MODULE_0__.css($pElem, "border-bottom-width")),
            baseBorderLeftWidth: parseFloat(_common_js__WEBPACK_IMPORTED_MODULE_0__.css($pElem, "border-left-width")),           //left border
            baseBorderRightWidth: parseFloat(_common_js__WEBPACK_IMPORTED_MODULE_0__.css($pElem, "border-right-width")),
            baseBorderRadius: _common_js__WEBPACK_IMPORTED_MODULE_0__.css($pElem, "border-radius"),                     //圆角半径
            tipGroupWidth: _common_js__WEBPACK_IMPORTED_MODULE_0__.outerWidth($tipGroup),
            tipGroupHeight: _common_js__WEBPACK_IMPORTED_MODULE_0__.outerHeight($tipGroup),
            tipWidth: _common_js__WEBPACK_IMPORTED_MODULE_0__.outerWidth($tip),
            tipHeight: _common_js__WEBPACK_IMPORTED_MODULE_0__.outerHeight($tip),
        };
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

    if(this.isBodyElement()) {
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
    let offset = this.options.offset;
    offset.top = offset.top || 0;
    offset.left = offset.left || 0;

    if(offset.top == 0 && offset.left == 0) return;

    if(this.isBodyElement()) {
        if(typeof myPosition == "string") {
            switch(myPosition) {
                case "top-left" :           //坐标在基准元素的左上角位置
                    $tipGroup.style.top = offset.top + "px";
                    $tipGroup.style.left = offset.left + "px";
                    break;
                case "top-center" :         //坐标在基准元素的上中位置
                    $tipGroup.style.top = offset.top + "px";
                    $tipGroup.style.right = offset.left + "px";
                    break;
                case "top-right" :          //坐标在基准元素的右上角位置
                    $tipGroup.style.top = offset.top + "px";
                    $tipGroup.style.right = offset.left + "px";
                    break;
                case "center-left" :        //坐标在基准元素的左中位置
                    $tipGroup.style.left = offset.left + "px";
                    break;
                case "middle" :             //坐标在基准元素的中间位置
                    break;
                case "center-right" :       //坐标在基准元素的右中位置
                    $tipGroup.style.right = offset.left + "px";
                    break;
                case "bottom-left" :        //坐标在基准元素的左下角位置
                    $tipGroup.style.bottom = offset.top + "px";
                    $tipGroup.style.left = offset.left + "px";
                    break;
                case "bottom-center" :      //坐标在基准元素的下中位置
                    $tipGroup.style.bottom = offset.top + "px";
                    break;
                case "bottom-right" :       //坐标在基准元素的右下角位置
                    $tipGroup.style.bottom = offset.top + "px";
                    $tipGroup.style.right = offset.left + "px";
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

    if(this.isBodyElement()) {
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
    if(((this.isBodyElement()) && typeof myPosition == "string") && !force) {
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
    let offset = this.options.offset;

    if(!offset) return tipPosition;

    let regNum = _common_js__WEBPACK_IMPORTED_MODULE_0__.regNum;
    if(offset.hasOwnProperty('top') && regNum.test(offset.top)) tipPosition.top += offset.top;
    if(offset.hasOwnProperty('left') && regNum.test(offset.left)) tipPosition.left += offset.left;

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
    let type = this.options.float.type;
    let floatFun = 'floatType' + type.slice(0, 1).toUpperCase() + type.slice(1);
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
    let $pElem = _this.backup._baseElm;

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
    let type = this.options.float.type;
    let floatFun = 'floatTranslateType' + type.slice(0, 1).toUpperCase() + type.slice(1);
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
    let $pElem = _this.backup._baseElm;

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
    let $pElem = this.backup._baseElm;

    if(this.options.position == 'float') {
        this.setFloatPosition();
    }else if(this.options.position == 'translate') {
        this.setFloatTranslate();
    }else {
        let tipPosition = this.getPosition(this.options.position);
        if(this.isBodyElement()) {
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

    if(this.isBodyElement()) {
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
    let tipGroupPosition = _common_js__WEBPACK_IMPORTED_MODULE_0__.position($tipGroup);
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
    window.addEventListener('scroll', _this.backup.bind);
};

tips.prototype.unlisten = function() {
    let _this = this;
    window.removeEventListener('resize', _this.backup.bind);
    window.removeEventListener('scroll', _this.backup.bind);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBNEIsbURBQWE7QUFDekMsc0JBQXNCLGtEQUFZO0FBQ2xDLHVCQUF1QixtREFBYTtBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsZ0RBQVU7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlCQUFpQiw4Q0FBUTtBQUN6QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw4Q0FBUTs7QUFFekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxpQkFBaUIsOENBQVEsR0FBRztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjs7QUFFdEI7QUFDQTtBQUNBLGlDQUFpQywyQ0FBSztBQUN0QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx1QkFBdUIsOENBQVEsR0FBRzs7QUFFbEM7O0FBRUE7QUFDQSxrQ0FBa0Msa0RBQVk7QUFDOUMsa0NBQWtDLGtEQUFZO0FBQzlDLGtDQUFrQyxrREFBWTtBQUM5QyxrQ0FBa0Msa0RBQVk7O0FBRTlDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrRUFBa0U7O0FBRWxFO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksMkNBQUssYUFBYSxnQkFBZ0I7QUFDdEMsMENBQTBDO0FBQzFDLElBQUksZ0RBQVU7O0FBRWQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFlBQVksOENBQVE7QUFDcEIsWUFBWSw4Q0FBUSxhQUFhLGlCQUFpQjtBQUNsRDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBLDREQUE0RDtBQUM1RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FO0FBQ3BFLG9FQUFvRTtBQUNwRTs7QUFFQTtBQUNBOztBQUVBLHVCQUF1Qiw4Q0FBUSxHQUFHOztBQUVsQzs7QUFFQSxrQ0FBa0Msa0RBQVk7QUFDOUMsa0NBQWtDLGtEQUFZOztBQUU5QztBQUNBO0FBQ0Esc0NBQXNDLGtEQUFZO0FBQ2xELHNDQUFzQyxrREFBWTtBQUNsRDtBQUNBO0FBQ0EsS0FBSztBQUNMLHNDQUFzQyxrREFBWTtBQUNsRCxzQ0FBc0Msa0RBQVk7QUFDbEQ7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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RUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSwyREFBMkQ7QUFDM0QsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSyxnREFBZ0Q7QUFDckQscUJBQXFCLGtEQUFZO0FBQ2pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9DQUFvQztBQUNwQyxvQ0FBb0M7QUFDcEM7QUFDQTs7QUFFQSxpREFBaUQ7O0FBRWpEO0FBQ0E7QUFDQTs7QUFFQSxpREFBaUQ7QUFDakQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDhDQUFRLEdBQUc7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVPLDRDQUE0QztBQUNuRDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2hvL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9vaG8vLi9zcmMvanMvY29tbW9uLmpzIiwid2VicGFjazovL29oby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vaG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29oby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29oby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29oby8uL3NyYy9qcy9vaG9UaXBzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm9ob1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJvaG9cIl0gPSBmYWN0b3J5KCk7XG59KShzZWxmLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCJleHBvcnQgY29uc3QgcmVnTnVtID0gL15bXFwtLCBcXCtdP1xcZCsoXFwuXFxkKyk/KFtlLEVdWystXT9cXGQrKT8kLztcbmV4cG9ydCBjb25zdCByZWdOdW1OZWdhdGl2ZSA9IC9eXFwtXFxkKyhcXC5cXGQrKT8oW2UsRV1bKy1dP1xcZCspPyQvO1xuZXhwb3J0IGNvbnN0IHJlZ1BlciA9IC9eW1xcLSwgXFwrXT8oKFxcZCtcXC4/XFxkKil8KFxcZCpcXC5cXGQrKSkoW2UsRV1bKy1dP1xcZCspP1xcJSQvO1xuZXhwb3J0IGNvbnN0IHJlZ1Blck5lZ2F0aXZlID0gL15cXC0oKFxcZCtcXC4/XFxkKil8KFxcZCpcXC5cXGQrKSkoW2UsRV1bKy1dP1xcZCspP1xcJSQvO1xuXG5leHBvcnQgZnVuY3Rpb24gbm9vcCgpIHt9XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VtcHR5TnVtKG51bSkge1xuICAgIGlmKG51bSAhPT0gMCAmJiAhbnVtKSB7ICAgICAvLyBcIlwiLCBudWxsLCB1bmRlZmluZWQsIE5hTlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9ZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbi8vIOS4pOS4qua1rueCueaVsOaxguWSjFxuZXhwb3J0IGZ1bmN0aW9uIG51bUFkZChudW0xLG51bTIpIHtcbiAgICBsZXQgcjEscjIsbTtcbiAgICB0cnl7XG4gICAgICAgIHIxID0gbnVtMS50b1N0cmluZygpLnNwbGl0KCcuJylbMV0ubGVuZ3RoO1xuICAgIH1jYXRjaChlKXtcbiAgICAgICAgcjEgPSAwO1xuICAgIH1cbiAgICB0cnl7XG4gICAgICAgIHIyPW51bTIudG9TdHJpbmcoKS5zcGxpdChcIi5cIilbMV0ubGVuZ3RoO1xuICAgIH1jYXRjaChlKXtcbiAgICAgICAgcjI9MDtcbiAgICB9XG4gICAgbT1NYXRoLnBvdygxMCxNYXRoLm1heChyMSxyMikpO1xuICAgIC8vIHJldHVybiAobnVtMSptK251bTIqbSkvbTtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChudW0xKm0rbnVtMiptKS9tO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbnVtQWRkcygpe1xuICAgIGxldCByZXN1bHQgPSBhcmd1bWVudHNbMF07XG5cbiAgICBsZXQgaSA9IDE7XG4gICAgZm9yKGk7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzdWx0ID0gbnVtQWRkKHJlc3VsdCwgYXJndW1lbnRzW2ldKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyDkuKTkuKrmta7ngrnmlbDnm7jlh49cbmV4cG9ydCBmdW5jdGlvbiBudW1TdWIobnVtMSxudW0yKSB7XG4gICAgbGV0IHIxLHIyLG07XG4gICAgdHJ5e1xuICAgICAgICByMSA9IG51bTEudG9TdHJpbmcoKS5zcGxpdCgnLicpWzFdLmxlbmd0aDtcbiAgICB9Y2F0Y2goZSl7XG4gICAgICAgIHIxID0gMDtcbiAgICB9XG4gICAgdHJ5e1xuICAgICAgICByMj1udW0yLnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpWzFdLmxlbmd0aDtcbiAgICB9Y2F0Y2goZSl7XG4gICAgICAgIHIyPTA7XG4gICAgfVxuICAgIG09TWF0aC5wb3coMTAsTWF0aC5tYXgocjEscjIpKTtcbiAgICBuPShyMT49cjIpP3IxOnIyO1xuICAgIHJldHVybiBwYXJzZUZsb2F0KChNYXRoLnJvdW5kKG51bTEqbS1udW0yKm0pL20pLnRvRml4ZWQobikpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbnVtU3Vicygpe1xuICAgIGxldCByZXN1bHQgPSBhcmd1bWVudHNbMF07XG5cbiAgICBsZXQgaSA9IDE7XG4gICAgZm9yKGk7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzdWx0ID0gbnVtU3ViKHJlc3VsdCwgYXJndW1lbnRzW2ldKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyDkuKTkuKrmta7ngrnmlbDnm7jkuZhcbmV4cG9ydCBmdW5jdGlvbiBudW1NdWwobnVtMSxudW0yKSB7XG4gICAgbGV0IG09MCxzMT1udW0xLnRvU3RyaW5nKCksczI9bnVtMi50b1N0cmluZygpO1xuICAgIHRyeXtcbiAgICAgICAgbSs9czEuc3BsaXQoXCIuXCIpWzFdLmxlbmd0aFxuICAgIH1jYXRjaChlKXtcblxuICAgIH07XG4gICAgdHJ5e1xuICAgICAgICBtKz1zMi5zcGxpdChcIi5cIilbMV0ubGVuZ3RoXG4gICAgfWNhdGNoKGUpe1xuXG4gICAgfTtcbiAgICByZXR1cm4gTnVtYmVyKHMxLnJlcGxhY2UoXCIuXCIsXCJcIikpKk51bWJlcihzMi5yZXBsYWNlKFwiLlwiLFwiXCIpKS9NYXRoLnBvdygxMCxtKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG51bU11bHMoKXtcbiAgICBsZXQgcmVzdWx0ID0gYXJndW1lbnRzWzBdO1xuXG4gICAgbGV0IGkgPSAxO1xuICAgIGZvcihpOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdCA9IG51bU11bChyZXN1bHQsIGFyZ3VtZW50c1tpXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8g5Lik5Liq5rWu54K55pWw55u46ZmkXG5leHBvcnQgZnVuY3Rpb24gbnVtRGl2KG51bTEsbnVtMikge1xuICAgIGxldCB0MSx0MixyMSxyMjtcbiAgICB0cnl7XG4gICAgICAgIHQxID0gbnVtMS50b1N0cmluZygpLnNwbGl0KCcuJylbMV0ubGVuZ3RoO1xuICAgIH1jYXRjaChlKXtcbiAgICAgICAgdDEgPSAwO1xuICAgIH1cbiAgICB0cnl7XG4gICAgICAgIHQyPW51bTIudG9TdHJpbmcoKS5zcGxpdChcIi5cIilbMV0ubGVuZ3RoO1xuICAgIH1jYXRjaChlKXtcbiAgICAgICAgdDI9MDtcbiAgICB9XG4gICAgcjE9TnVtYmVyKG51bTEudG9TdHJpbmcoKS5yZXBsYWNlKFwiLlwiLFwiXCIpKTtcbiAgICByMj1OdW1iZXIobnVtMi50b1N0cmluZygpLnJlcGxhY2UoXCIuXCIsXCJcIikpO1xuICAgIHJldHVybiAocjEvcjIpKk1hdGgucG93KDEwLHQyLXQxKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG51bURpdnMoKXtcbiAgICBsZXQgcmVzdWx0ID0gYXJndW1lbnRzWzBdO1xuXG4gICAgbGV0IGkgPSAxO1xuICAgIGZvcihpOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdCA9IG51bURpdihyZXN1bHQsIGFyZ3VtZW50c1tpXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyKHZhbCkge1xuICAgIGxldCByZWdQb3MgPSAvXlxcZCsoXFwuXFxkKyk/JC87IC8v6Z2e6LSf5rWu54K55pWwXG4gICAgbGV0IHJlZ05lZyA9IC9eKC0oKFswLTldK1xcLlswLTldKlsxLTldWzAtOV0qKXwoWzAtOV0qWzEtOV1bMC05XSpcXC5bMC05XSspfChbMC05XSpbMS05XVswLTldKikpKSQvOyAvL+i0n+a1rueCueaVsFxuICAgIGlmKHJlZ1Bvcy50ZXN0KHZhbCkgfHwgcmVnTmVnLnRlc3QodmFsKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmcodmFsdWUpIHtcbiAgICByZXR1cm4gKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykgJiYgdmFsdWUuY29uc3RydWN0b3IgPT0gU3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheSh2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgQXJyYXkuaXNBcnJheSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKTtcbiAgICB9ZWxzZXtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09IFwiW29iamVjdCBBcnJheV1cIjtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc09iaih2YWx1ZSkge1xuICAgIC8vIOiLpXZhbHVlIOaYryBudWxs5a+56LGhLCB0eXBlIOS4uiBcIltvYmplY3QgTnVsbF1cIu+8m1xuICAgIGxldCB0eXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgICByZXR1cm4gdHlwZSA9PT0gXCJbb2JqZWN0IE9iamVjdF1cIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRW1wdHlPYmoodmFsdWUpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModmFsdWUpLmxlbmd0aCA9PSAwO1xufVxuXG4vL+mdnm51bGzlr7nosaHvvIzpnZ7mlbDnu4Tlr7nosaFcbmV4cG9ydCBmdW5jdGlvbiBpc09iak5vdEFycnJ5KHZhbHVlKSB7XG4gICAgcmV0dXJuIGlzT2JqKHZhbHVlKSAmJiAhaXNBcnJheSh2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRlbmQodGFyZ2V0KSB7XG4gICAgaWYoIXRhcmdldCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdObyB0YXJnZXQhJylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpZ25vcmUob2JqKSB7XG4gICAgICAgIGlmKCFvYmopIHJldHVybiBmYWxzZTtcblxuICAgICAgICBsZXQgaXNKcSA9IGZhbHNlO1xuICAgICAgICBpZih3aW5kb3cualF1ZXJ5KXtcbiAgICAgICAgICAgIGlzSnEgPSBvYmogaW5zdGFuY2VvZiBqUXVlcnk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaXNJZ25vcmUgPSBpc0pxO1xuICAgICAgICByZXR1cm4gaXNJZ25vcmU7XG4gICAgfVxuXG4gICAgbGV0IG9ianMgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKTtcblxuICAgIGlmKG9ianMubGVuZ3RoID4gMCkge1xuICAgICAgICBvYmpzLmZvckVhY2goKGl0ZW0saW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmKGlzT2JqTm90QXJycnkoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGtleSBpbiBpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGlzT2JqTm90QXJycnkoaXRlbVtrZXldKSAmJiAhaWdub3JlKGl0ZW1ba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCEgdGFyZ2V0Lmhhc093blByb3BlcnR5KGtleSkgfHwgIWlzT2JqTm90QXJycnkodGFyZ2V0W2tleV0pKSB0YXJnZXRba2V5XSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgZXh0ZW5kKHRhcmdldFtrZXldLGl0ZW1ba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gaXRlbVtrZXldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1BhcmFtZXRlciAnICsgaW5kZXggKyAnIGlzIG5vIHZhbGlkIGFyZ3VtZW50cywgZXhwZWN0ZWQgdG8gYmUgb2JqZWN0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyaW0oc3RyLCBpc2dsb2JhbCkge1xuICAgIGxldCByZXN1bHQ7XG4gICAgcmVzdWx0ID0gc3RyLnJlcGxhY2UoLyheXFxzKyl8KFxccyskKS9nLCAnJyk7XG4gICAgaWYgKGlzZ2xvYmFsICYmIGlzZ2xvYmFsLnRvTG93ZXJDYXNlKCkgPT09ICdnJykge1xuICAgICAgICByZXN1bHQgPSByZXN1bHQucmVwbGFjZSgvXFxzL2csICcnKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbU51bShtaW4sIG1heCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTm9kZShodG1sU3RyKSB7XG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2LmlubmVySFRNTCA9IGh0bWxTdHI7XG4gICAgcmV0dXJuIGRpdi5jaGlsZE5vZGVzWzBdLmNsb25lTm9kZSh0cnVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9ialRvU3R5bGUob2JqKSB7XG4gICAgbGV0IHN0eWxlID0gW107XG4gICAgZm9yKGxldCBpIGluIG9iail7XG4gICAgICAgIHN0eWxlLnB1c2goaSArICc6JyArIG9ialtpXSk7XG4gICAgfVxuICAgIHN0eWxlID0gc3R5bGUuam9pbignOycpO1xuXG4gICAgcmV0dXJuICBzdHlsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0eWxlVG9PYmooc3R5bGUpIHtcbiAgICBpZiAoIXN0eWxlIHx8IHN0eWxlID09ICcnKSB7IHJldHVybiAnJzsgfVxuXG4gICAgbGV0IHN0eWxlQXJyID0gc3R5bGUuc3BsaXQoJzsnKVxuICAgIHN0eWxlQXJyID0gc3R5bGVBcnIuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICByZXR1cm4gaXRlbSAhPSAnJztcbiAgICB9KTtcblxuICAgIGxldCBvYmpTdHIgPSAnJztcbiAgICBzdHlsZUFyci5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBsZXQgY3NzID0gJyc7XG4gICAgICAgIGl0ZW0gPSBpdGVtLnJlcGxhY2UoLyheXFxzKyl8KFxccyskKS9nLCAnJyk7XG4gICAgICAgIHRyaW0oaXRlbSkuc3BsaXQoJzonKS5mb3JFYWNoKGNzc1ZhbHVlID0+IHtcbiAgICAgICAgICAgIGNzcyArPSAnXCInICsgdHJpbShjc3NWYWx1ZSkgKyAnXCI6JztcbiAgICAgICAgfSlcbiAgICAgICAgb2JqU3RyICs9IGNzcyArICcsJztcbiAgICB9KVxuICAgIG9ialN0ciA9IG9ialN0ci5yZXBsYWNlKC86LC9nLCAnLCcpO1xuICAgIG9ialN0ciA9IG9ialN0ci5zdWJzdHJpbmcoMCwgb2JqU3RyLmxhc3RJbmRleE9mKCcsJykpO1xuICAgIG9ialN0ciA9ICd7JyArIG9ialN0ciArICd9JztcbiAgICByZXR1cm4gSlNPTi5wYXJzZShvYmpTdHIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQ3NzKGVsLCBjc3NPYmopIHtcbiAgICBsZXQgb2xkQ3NzVGV4dCA9IGVsLnN0eWxlLmNzc1RleHQ7XG4gICAgb2xkQ3NzVGV4dCA9IHN0eWxlVG9PYmoob2xkQ3NzVGV4dCkgfHwge307XG4gICAgaWYob2xkQ3NzVGV4dCkgY3NzT2JqID0gZXh0ZW5kKHt9LCBvbGRDc3NUZXh0LCBjc3NPYmopO1xuXG4gICAgbGV0IG51bWJlclN0eWxlQXJyID0gWydvcGFjaXR5J107XG4gICAgZm9yKGxldCBpIGluIGNzc09iail7XG4gICAgICAgIGlmKG51bWJlclN0eWxlQXJyLmluZGV4T2YoaSkgIT0gLTEpIGNvbnRpbnVlOyBcbiAgICAgICAgaWYoaXNOdW1iZXIoY3NzT2JqW2ldKSkgY3NzT2JqW2ldICs9IFwicHhcIjtcbiAgICB9XG4gICAgbGV0IGNzc1RleHQgPSBvYmpUb1N0eWxlKGNzc09iaik7XG5cbiAgICBlbC5zdHlsZS5jc3NUZXh0ID0gY3NzVGV4dDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENsYXNzKGVsLCBjbGFzc05hbWUpIHtcbiAgICBpZih0eXBlb2YoY2xhc3NOYW1lKSA9PSAnc3RyaW5nJykge1xuICAgICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUuc3BsaXQoJyAnKTtcbiAgICB9XG5cbiAgICBpZighaXNBcnJheShjbGFzc05hbWUpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBsZXQgb2xkQ2xhc3MgPSBlbC5jbGFzc05hbWUuc3BsaXQoJyAnKTtcbiAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUuZmlsdGVyKGl0ZW0gPT4gIW9sZENsYXNzLmluY2x1ZGVzKGl0ZW0pKTtcbiAgICBpZihjbGFzc05hbWUubGVuZ3RoID09IDApIHJldHVybjtcblxuICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5qb2luKCcgJyk7XG5cbiAgICByZXR1cm4gZWwuY2xhc3NOYW1lICs9ICcgJyArIGNsYXNzTmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsLCBjbGFzc05hbWUpIHtcbiAgICBpZiAoZWwuY2xhc3NMaXN0KSB7XG4gICAgICAgIGlmKHR5cGVvZihjbGFzc05hbWUpID09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUuc3BsaXQoJyAnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCFpc0FycmF5KGNsYXNzTmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNsYXNzTmFtZS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgICAgICB9KTtcbiAgICB9ZWxzZSB7XG4gICAgICAgIGVsLmNsYXNzTmFtZSA9IGVsLmNsYXNzTmFtZS5yZXBsYWNlKG5ldyBSZWdFeHAoJyhefFxcXFxiKScgKyBjbGFzc05hbWUuc3BsaXQoJyAnKS5qb2luKCd8JykgKyAnKFxcXFxifCQpJywgJ2dpJyksICcgJyk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3R5bGUoZWwsIHN0eWxlQXR0cikge1xuICAgIGxldCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWwpO1xuXG4gICAgaWYoIXN0eWxlQXR0cikge1xuICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgfWVsc2Uge1xuICAgICAgICByZXR1cm4gc3R5bGVbc3R5bGVBdHRyXTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvdXRlcldpZHRoKGVsLCBzdGF0dXMpIHtcbiAgICBsZXQgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsKTtcbiAgICBsZXQgd2lkdGggPSBwYXJzZUZsb2F0KHN0eWxlLndpZHRoKSArIHBhcnNlRmxvYXQoc3R5bGUuYm9yZGVyTGVmdFdpZHRoKSArIHBhcnNlRmxvYXQoc3R5bGUuYm9yZGVyUmlnaHRXaWR0aCk7XG5cbiAgICBpZighaXNDb21wdXRlZFBhZGRpbmdFbChlbCkpIHdpZHRoICs9IHBhcnNlRmxvYXQoc3R5bGUucGFkZGluZ0xlZnQpICsgcGFyc2VGbG9hdChzdHlsZS5wYWRkaW5nUmlnaHQpO1xuXG4gICAgaWYoIXN0YXR1cykgcmV0dXJuIHdpZHRoO1xuXG4gICAgd2lkdGggKz0gcGFyc2VGbG9hdChzdHlsZS5tYXJnaW5MZWZ0KSArIHBhcnNlRmxvYXQoc3R5bGUubWFyZ2luUmlnaHQpO1xuICAgIHJldHVybiB3aWR0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG91dGVySGVpZ2h0KGVsLCBzdGF0dXMpIHtcbiAgICBsZXQgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsKTtcbiAgICBsZXQgaGVpZ2h0ID0gcGFyc2VGbG9hdChzdHlsZS5oZWlnaHQpICsgcGFyc2VGbG9hdChzdHlsZS5ib3JkZXJUb3BXaWR0aCkgKyBwYXJzZUZsb2F0KHN0eWxlLmJvcmRlckJvdHRvbVdpZHRoKTtcblxuICAgIGlmKCFpc0NvbXB1dGVkUGFkZGluZ0VsKGVsKSkgaGVpZ2h0ICs9IHBhcnNlRmxvYXQoc3R5bGUucGFkZGluZ1RvcCkgKyBwYXJzZUZsb2F0KHN0eWxlLnBhZGRpbmdCb3R0b20pO1xuXG4gICAgaWYoIXN0YXR1cykgcmV0dXJuIGhlaWdodDtcbiAgICBcbiAgICBoZWlnaHQgKz0gcGFyc2VGbG9hdChzdHlsZS5tYXJnaW5Ub3ApICsgcGFyc2VGbG9hdChzdHlsZS5tYXJnaW5Cb3R0b20pO1xuICAgIHJldHVybiBoZWlnaHQ7XG59XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBpbm5lcldpZHRoKGVsLCBzdGF0dXMpIHtcbi8vICAgICBpZighc3RhdHVzKSByZXR1cm4gZWwuY2xpZW50V2lkdGg7XG5cbi8vICAgICBsZXQgd2lkdGggPSBlbC5jbGllbnRXaWR0aDtcbi8vICAgICBsZXQgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsKTtcblxuLy8gICAgIHdpZHRoICs9IHBhcnNlRmxvYXQoc3R5bGUucGFkZGluZ0xlZnQpICsgcGFyc2VGbG9hdChzdHlsZS5wYWRkaW5nUmlnaHQpO1xuLy8gICAgIHJldHVybiB3aWR0aDtcbi8vIH1cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIGlubmVySGVpZ2h0KGVsLCBzdGF0dXMpIHtcbi8vICAgICBpZighc3RhdHVzKSByZXR1cm4gZWwuY2xpZW50SGVpZ2h0O1xuXG4vLyAgICAgbGV0IHdpZHRoID0gZWwuY2xpZW50SGVpZ2h0O1xuLy8gICAgIGxldCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWwpO1xuXG4vLyAgICAgd2lkdGggKz0gcGFyc2VGbG9hdChzdHlsZS5wYWRkaW5nVG9wKSArIHBhcnNlRmxvYXQoc3R5bGUucGFkZGluZ0JvdHRvbSk7XG4vLyAgICAgcmV0dXJuIHdpZHRoO1xuLy8gfVxuXG5leHBvcnQgZnVuY3Rpb24gaW5uZXJXaWR0aChlbCwgc3RhdHVzKSB7XG4gICAgbGV0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XG4gICAgbGV0IHdpZHRoID0gcGFyc2VGbG9hdChzdHlsZS53aWR0aCk7XG5cbiAgICBpZihpc0NvbXB1dGVkUGFkZGluZ0VsKGVsKSB8fCAhc3RhdHVzKSByZXR1cm4gd2lkdGg7XG5cbiAgICB3aWR0aCArPSBwYXJzZUZsb2F0KHN0eWxlLnBhZGRpbmdMZWZ0KSArIHBhcnNlRmxvYXQoc3R5bGUucGFkZGluZ1JpZ2h0KTtcbiAgICByZXR1cm4gd2lkdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbm5lckhlaWdodChlbCwgc3RhdHVzKSB7XG4gICAgbGV0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XG4gICAgbGV0IGhlaWdodCA9IHBhcnNlRmxvYXQoc3R5bGUuaGVpZ2h0KTtcblxuICAgIGlmKGlzQ29tcHV0ZWRQYWRkaW5nRWwoZWwpIHx8ICFzdGF0dXMpIHJldHVybiBoZWlnaHQ7XG5cbiAgICBoZWlnaHQgKz0gcGFyc2VGbG9hdChzdHlsZS5wYWRkaW5nVG9wKSArIHBhcnNlRmxvYXQoc3R5bGUucGFkZGluZ0JvdHRvbSk7XG4gICAgcmV0dXJuIGhlaWdodDtcbn1cblxuLy8gZ2V0Q29tcHV0ZWRTdHlsZSwgd2lkdGgg5ZKMIGhlaWdodCDlt7Lnu4/ljIXlkKtQYWRkaW5nIOeahOWFg+e0oFxuZXhwb3J0IGZ1bmN0aW9uIGlzQ29tcHV0ZWRQYWRkaW5nRWwoZWwpIHtcbiAgICBsZXQgZWxBcnIgPSBbJ2J1dHRvbiddO1xuICAgIHJldHVybiBlbEFyci5pbmNsdWRlcyhlbC5sb2NhbE5hbWUpO1xufVxuXG4vLyBleHBvcnQgZnVuY3Rpb24gcG9zaXRpb24oZWwpIHtcbi8vICAgICBjb25zb2xlLmxvZyhlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSwge3RvcDogZWwub2Zmc2V0VG9wLCBsZWZ0OiBlbC5vZmZzZXRMZWZ0fSk7XG4vLyAgICAgcmV0dXJuIHt0b3A6IGVsLm9mZnNldFRvcCwgbGVmdDogZWwub2Zmc2V0TGVmdH07XG4vLyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3NpdGlvbihlbCkge1xuICAgIGxldCByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAvLyBjb25zb2xlLnRyYWNlKCk7XG4gICAgLy8gY29uc29sZS5sb2coXCJDLnBvc2l0aW9uOiBcIiwgZWwsIHJlY3QsIHt0b3A6IHJlY3QudG9wK3Njcm9sbFksIGxlZnQ6IHJlY3QubGVmdCtzY3JvbGxYfSk7XG5cbiAgICBpZihjc3MoZWwsICdwb3NpdGlvbicpID09PSAnZml4ZWQnKSB7XG4gICAgICAgIHJldHVybiB7dG9wOiByZWN0LnRvcCwgbGVmdDogcmVjdC5sZWZ0fTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgdDtcbiAgICAgICAgbGV0IHNjcm9sbFggPSAoKCh0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB8fCAodCA9IGRvY3VtZW50LmJvZHkucGFyZW50Tm9kZSkpICYmIHR5cGVvZiB0LnNjcm9sbExlZnQgPT0gJ251bWJlcicgPyB0IDogZG9jdW1lbnQuYm9keSkuc2Nyb2xsTGVmdDtcbiAgICAgICAgbGV0IHNjcm9sbFkgPSAoKCh0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB8fCAodCA9IGRvY3VtZW50LmJvZHkucGFyZW50Tm9kZSkpICYmIHR5cGVvZiB0LnNjcm9sbFRvcCA9PSAnbnVtYmVyJyA/IHQgOiBkb2N1bWVudC5ib2R5KS5zY3JvbGxUb3A7XG4gICAgICAgIHJldHVybiB7dG9wOiByZWN0LnRvcCtzY3JvbGxZLCBsZWZ0OiByZWN0LmxlZnQrc2Nyb2xsWH07XG4gICAgfVxuICAgIFxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3NzKGVsLCBzdHlsZU5hbWUsIHZhbHVlKSB7XG4gICAgaWYodmFsdWUgIT09IHVuZGVmaW5lZCkgcmV0dXJuIGVsLnN0eWxlW3N0eWxlTmFtZV0gPSB2YWx1ZTtcbiAgICBlbHNlIHJldHVybiBnZXRDb21wdXRlZFN0eWxlKGVsKVtzdHlsZU5hbWVdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2Nyb2xsV2lkdGgoKSB7XG4gICAgdmFyIG5vU2Nyb2xsLCBzY3JvbGwsIG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiRElWXCIpO1xuICAgIG9EaXYuc3R5bGUuY3NzVGV4dCA9IFwicG9zaXRpb246YWJzb2x1dGU7IHRvcDotMTAwMHB4OyB3aWR0aDoxMDBweDsgaGVpZ2h0OjEwMHB4OyBvdmVyZmxvdzpoaWRkZW47XCI7XG4gICAgbm9TY3JvbGwgPSBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG9EaXYpLmNsaWVudFdpZHRoO1xuICAgIG9EaXYuc3R5bGUub3ZlcmZsb3dZID0gXCJzY3JvbGxcIjtcbiAgICBzY3JvbGwgPSBvRGl2LmNsaWVudFdpZHRoO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQob0Rpdik7XG4gICAgcmV0dXJuIG5vU2Nyb2xsLXNjcm9sbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc1Njcm9sbGJhclkoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0ID4gKHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluc2VydEFmdGVyKG5ld0VsZW1lbnQsIHRhcmdlbnRFbGVtZW50KSB7XG4gICAgdmFyIHBhcmVudCA9IHRhcmdlbnRFbGVtZW50LnBhcmVudE5vZGU7XG5cbiAgICBpZihwYXJlbnQubGFzdENoaWxkID09IHRhcmdlbnRFbGVtZW50KSB7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChuZXdFbGVtZW50KTtcbiAgICB9ZWxzZSB7XG4gICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUobmV3RWxlbWVudCwgdGFyZ2VudEVsZW1lbnQubmV4dFNpYmxpbmcpXG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICogYXMgQyBmcm9tIFwiLi9jb21tb24uanNcIjtcblxuLyoqXG4gKiB0aXBzIOaPkuS7tlxuICovXG4gICAgXG4vKipcbiAqIOWunuS+i+WMluaWueW8j1xuICogMS4g5LiN5Lyg5Lu75L2V5Y+C5pWw77yM5YiZ55u05o6l6L+U5Zue5a6e5L6LXG4gKiAyLiBvcHRpb25zIOWPquS8oHRpcHPmtojmga/lrZfnrKbkuLLmiJbmtojmga/mlbDnu4TvvIzliJnmjInpu5jorqTphY3nva7lvLnlh7rmtojmga/jgILlhbbku5bphY3nva7lnKggZXh0ZW5kT3B0aW9ucywg5Y+v6YCJ55qEXG4gKiAzLiBvcHRpb25zIOS8oOWFpeWujOaVtOmFjee9ruWvueixoe+8jOWImeaMiemFjee9ruW8ueWHuua2iOaBr++8jOS4jemcgOimgSBleHRlbmRPcHRpb25zXG4gKiBAQXV0aG9yICAgRGV2aW5cbiAqIEBwYXJhbSAgICB7W3R5cGVdfSAgICAgICAgICAgICAgICAgb3B0aW9ucyAgICAgICDmlK/mjIHmtojmga/lrZfnrKbkuLLvvIzmtojmga/mlbDnu4Tku6Xlj4rlrozmlbTphY3nva7lr7nosaFcbiAqIEBwYXJhbSAgICB7T2JqZWN0fSAgICAgICAgICAgICAgICAgZXh0ZW5kT3B0aW9ucyDku4XlnKjmtojmga/lrZfnrKbkuLLvvIzmtojmga/mlbDnu4Qg55qE5oOF5Ya15LiL5Y+v6YCJ55qE77yMXG4gKiBAcmV0dXJuICAge1t0eXBlXX0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICovXG5mdW5jdGlvbiB0aXBzKG9wdGlvbnMsIGV4dGVuZE9wdGlvbnMgPSB7fSkge1xuICAgIGlmKCFvcHRpb25zKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgIHRoaXMuQyA9IEM7XG5cbiAgICAvLyDljZXni6zkvKDlhaXmtojmga9cbiAgICBpZihDLmlzU3RyaW5nKG9wdGlvbnMpIHx8IEMuaXNBcnJheShvcHRpb25zKSkge1xuICAgICAgICBsZXQgbmV3T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IG9wdGlvbnNcbiAgICAgICAgfTtcblxuICAgICAgICBvcHRpb25zID0gbmV3T3B0aW9ucztcblxuICAgICAgICBpZihDLmlzT2JqKGV4dGVuZE9wdGlvbnMpICYmICFDLmlzRW1wdHlPYmooZXh0ZW5kT3B0aW9ucykpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSBDLmV4dGVuZCh7fSwgZXh0ZW5kT3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmluaXQob3B0aW9ucyk7XG59XG5cbnRpcHMuQyA9IEM7XG5cbnRpcHMuZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgbWVzc2FnZTogJycsICAgICAgICAgICAgICAgIC8v5Lyg5YWl5pWw57uE5Y+v5o2i6KGMLCDmlK/mjIFET03lhYPntKDvvIxqUXVlcnnlhYPntKBcbiAgICBodG1sOiB7XG4gICAgICAgIHBhcmFtOiBmYWxzZSwgICAgICAgICAgICAgICAgICAgLy9mYWxzZSAtIOaWh+acrOexu+Wei+S/oeaBr++8jHRydWUgLSBkb23lhYPntKDnsbvlnovkv6Hmga9cbiAgICAgICAgaXNDb250YWluZXJUcmFuc3BhcmVudDogZmFsc2UsICAvL2ZhbHNlIC0gVGlwcyDlrrnlmajkuI3pgI/mmI7vvIx0cnVlIC0gVGlwcyDlrrnlmajpgI/mmI5cbiAgICB9LFxuICAgIGJhc2VFbGVtZW50OiBcIlwiLCAgICAgICAgICAgIC8v5Z+65YeG5pa55L2N5YWD57SgXG4gICAgZGlyZWN0aW9uOiAnaW5uZXInLCAgICAgICAgIC8v6K6h566XVGlwc+WumuS9jeaXtu+8jGlubmVyIC0g6K6h566XVGlwcyDlrr3pq5jvvIzlsL3ph4/kvb9UaXBzIOS9jeS6juWfuuWHhuWFg+e0oOWGhemDqO+8jG5vcm1hbCAtIOS4jeiuoeeul1RpcHPlrr3pq5jvvIzmjInnhadwb3NpdGlvbuaVsOaNruadpe+8jG91dGVyIC0g6K6h566XVGlwcyDlrr3pq5jvvIzlsL3ph4/kvb9UaXBzIOS9jeS6juWfuuWHhuWFg+e0oOWklumDqCwgb3V0c2lkZSAtIOiuoeeul1RpcHMg5a696auY77yM5bC96YeP5L2/VGlwcyDkvY3kuo7ln7rlh4blhYPntKDlpJbpg6jvvJsg6buY6K6kJ2lubmVyJ+OAglxuICAgIHBvc2l0aW9uOiBcIm1pZGRsZVwiLCAgICAgICAgIC8vVGlwcyDkvY3nva7vvIzlt6bkuIrop5LvvIzkuIrlsYXkuK3vvIzlj7PkuIrop5LvvIzlt6blsYXkuK3vvIzlhajlsYXkuK3vvIzlj7PlsYXkuK3vvIzlt6bkuIvop5LvvIzkuIvlsYXkuK3vvIzlj7PkuIvop5LvvIzoh6rlrprkuYnnm7jlr7nkvY3nva7vvIzmta7liqhcbiAgICBvZmZzZXQ6IHsgICAgICAgICAgICAgICAgICAgLy/lpoLmnpxwb3NpdGlvbiDmmK/lr7nosaHlpoJ7dG9wOiAwfe+8jOWImeS4gOiIrOS4jemcgOimgei/meS4qu+8jOWmguaenOaYr+Wtl+espuS4su+8jOWImeWPr+S7pemFjOaDhea3u+WKoG9mZnNldCwg6LCD5pW05Z+65YeG5YWD57Sg5LiOVGlwcyDnmoTnm7jlr7nlrprkvY0sIOS7heaUr+aMgXRvcO+8jGxlZnRcbiAgICAgICAgdG9wOiBudWxsLFxuICAgICAgICBsZWZ0OiBudWxsXG4gICAgfSxcbiAgICBncm91cDogeyAgICAgICAgICAgICAgICAgICAgLy/liIbnu4TvvIzlpJrkuKpUaXBzIOmbhuWQiO+8jOi2heWHuuWIhue7hOacgOWkp+mZkOWItuS4quaVsOWImeWIoOmZpOacgOW8gOWni+eahFRpcHNcbiAgICAgICAgbmFtZTogbnVsbCwgICAgICAgICAgICAgICAgIC8v5YiG57uE5ZCN56ewXG4gICAgICAgIG1heExlbmd0aDogOTk5OSwgICAgICAgICAgICAvL+S4gOS4quWIhue7hOacgOWkp1RpcHPkuKrmlbBcbiAgICB9LFxuICAgIHR5cGU6IFwibm9ybWFsXCIsICAgICAgICAgICAgIC8vVGlwcyDmoLflvI8sIOaUr+aMgeiHquWumuS5ieagt+W8j++8iOS8oOWFpWNsYXNz5ZCN56ew77yJXG4gICAgbGltaXQ6IHRydWUsICAgICAgICAgICAgICAgIC8v6ZmQ5Yi2VGlwcyDnmoTmnIDlpKflrr3luqYgNDAwcHhcbiAgICBzaGFkb3c6IGZhbHNlLCAgICAgICAgICAgICAgLy9mYWxzZSAtIOayoeaciemYtOW9se+8jCB0cnVlIC0g5pyJ6Zi05b2xXG4gICAgYmFja2dyb3VuZDogZmFsc2UsICAgICAgICAgIC8vZmFsc2UgLSDkuI3mmL7npLrpga7nvanlsYLopobnm5bln7rlh4blhYPntKDvvIwgdHJ1ZSAtIOaYvuekuumBrue9qeWxguimhuebluWfuuWHhuWFg+e0oFxuICAgIGljb246IGZhbHNlLCAgICAgICAgICAgICAgICAvL+aYr+WQpuaYvuekumljb24sIHRydWUgLSDmjInnhad0eXBl5Y+C5pWw6Ieq5Yqo6K6+572uaWNvbuexu+Wei++8jOaUr+aMgeWtl+espuS4suiuvue9rmljb27nsbvlnovvvIzkuLvopoHmmK/lvaLnirbvvIzlpoIgbm9ybWFs77yMY2xvY2vnrYlcbiAgICBpY29uT3B0aW9uczoge1xuICAgICAgICB0eXBlOiAnaW5mbycsICAgICAgICAgICAvL+W9k2ljb24g5Li65a2X56ym5Liy5pe277yMaWNvbuS4u+imgeWumuWItuW9oueKtijkuZ/lkKvpopzoibIp77yM5q2k5pe2dHlwZeWPr+S7pemineWkluiuvue9rmljb24g55qE6Imy6LCDXG4gICAgICAgIHBvc2l0aW9uOiAnbGVmdCcsICAgICAgIC8vaWNvbiDnmoTkvY3nva7vvIzmlK/mjIF0b3AsIGxlZnQsIGJvdHRvbSwgcmlnaHRcbiAgICB9LFxuICAgIHN5bWJvbDogZmFsc2UsICAgICAgICAgICAgICAvL+aYr+WQpuaYvuekumJpbmRlciwgdHJ1ZSAtIOm7mOiupHRyaWFuZ2xl77yM5pSv5oyB5a2X56ym5Liy6K6+572uc3ltYm9s57G75Z6L77yM5aaCIHRyaWFuZ2xl562J77yM55uu5YmN5LuF5pSv5oyBdHJpYW5nbGVcbiAgICBzeW1ib2xPcHRpb25zOiB7XG4gICAgICAgIHR5cGU6IG51bGwsICAgICAgICAgICAgIC8v5aaC5p6c5LiN6K6+572u77yMc3ltYm9s5YiZ5oyJb3B0aW9uLnR5cGUg6Imy6LCD77yM5ZCm5YiZ5oyJ6K+l5Y+C5pWw55qE6Imy6LCDXG4gICAgICAgIHBvc2l0aW9uOiBudWxsLCAgICAgICAgIC8v5aaC5p6c5LiN6K6+572u77yMc3ltYm9s5YiZ5qC55o2ub3B0aW9uLnBvc2l0aW9uIOiuvue9ruWumuS9jSjkuI3kuIDlrprkuIDmoLcp77yM5ZCm5YiZ5oyJ6K+l5Y+C5pWw5a6a5L2NXG4gICAgICAgIC8vIG9mZnNldDogeyAgICAgICAgICAgICAgIC8v5aaC5p6c5ZCv55Soc3ltYm9s77yMc3ltYm9s5LiN6K6h566X5a696auY77yM5YiZ5Y+v5Lul6YWM5oOF5re75Yqgb2Zmc2V0LCDosIPmlbTniLblhYPntKDkuI5UaXBzIOeahOebuOWvueWumuS9jSwg5LuF5pSv5oyBdG9w77yMbGVmdFxuICAgICAgICAvLyAgICAgdG9wOiBudWxsLFxuICAgICAgICAvLyAgICAgbGVmdDogbnVsbFxuICAgICAgICAvLyB9XG4gICAgfSxcbiAgICBkZXN0cm95OiBcImF1dG9cIiwgICAgICAgICAgICAvL2F1dG8gLSDoh6rliqjplIDmr4FUaXBz77yMbWFudWFsIC0g5LiN6Ieq5Yqo6ZSA5q+BVGlwc++8jOmcgOaJi+WKqOmUgOavgSwgbmV2ZXIgLSDku47kuI3plIDmr4FUaXBzXG4gICAgZGVsYXk6IDIwMDAsICAgICAgICAgICAgICAgIC8v6Ieq5Yqo6ZSA5q+BVGlwcyDlu7bml7bvvIzljZXkvY3vvJptc1xuICAgIGFuaW1hdGlvbjogeyAgICAgICAgICAgICAgICAvL+WKqOeUu1xuICAgICAgICBpbjogJ2RlZmF1bHQnLCAgICAgICAgICAgICAgLy9UaXBzIOaYvuekuuWKqOeUu1xuICAgICAgICBvdXQ6ICdkZWZhdWx0JywgICAgICAgICAgICAgLy9UaXBzIOmakOiXj+WKqOeUu1xuICAgICAgICBmcmFnbWVudHM6IHtcbiAgICAgICAgICAgIHR5cGU6IDEsICAgICAgICAgICAgICAgICAgICAvLyDkuKTnp43liJvlu7pmcmFnbWVudCDnmoTnrpfms5XvvIww5ZKMMe+8jDEg5L2T6aqM5pu05aW9XG4gICAgICAgICAgICBiYXNlUGl4OiAxMCwgICAgICAgICAgICAgICAgLy8g5a+55bqUdHlwZSA9IDAsIOacgOWwj+eahOWDj+e0oCwgdHlwZSAx5YiZ5LiN6ZyA6KaB6K+l5Y+C5pWwXG4gICAgICAgICAgICB4Q291bnQ6IDEwLCAgICAgICAgICAgICAgICAgLy8g5a+55bqUdHlwZSA9IDEsIOawtOW5s2ZyYWdtZW5055qE5Liq5pWwXG4gICAgICAgICAgICB5Q291bnQ6IDEwLCAgICAgICAgICAgICAgICAgLy8g5a+55bqUdHlwZSA9IDEsIOWeguebtGZyYWdtZW5055qE5Liq5pWwXG4gICAgICAgIH0sXG4gICAgICAgIGRlbGF5OiAxMDAwLCAgICAgICAgICAgICAgICAvL1RpcHMg5Yqo55S75omn6KGM5pe26Ze077yM5bu25pe25pe26Ze05Yig6ZmkVGlwc1xuICAgICAgICBjdXN0b21BbXRGdW50aW9uOiBudWxsLCAgICAgLy/oh6rlrprkuYlUaXBzIOWKqOeUu+WHveaVsFxuICAgIH0sXG4gICAgZmxvYXQ6IHsgICAgICAgICAgICAgICAgICAgIC8v5rWu5Yqo5Y+C5pWw77yM5b2TcG9zaXRpb24g562J5LqOICdmbG9hdCcg5oiWICd0cmFuc2xhdGUnIOaXtu+8jOWPr+mAie+8m+WFtuS9meaDheWGteS4jemcgOimgSBcbiAgICAgICAgdHlwZTogJ2RlZmF1bHQnLCAgICAgICAgICAgIC8v5Y+v6YCJ5oup6buY6K6k5rWu5Yqo5pa55rOV77yM5rWu5Yqo5pa55rOV5pSv5oyB6Ieq5a6a5LmJ77yM6KeBIGN1c3RvbUZsb2F0VHlwZVxuICAgICAgICBjdXN0b21GbG9hdE9wdGlvbnM6IG51bGwsICAgLy/oh6rlrprkuYnmta7liqjpgInpoblcbiAgICAgICAgY3VzdG9tRmxvYXRTdGF0dXM6IG51bGwsICAgIC8v6Ieq5a6a5LmJ5rWu5Yqo5Yid5aeL54q25oCB77yMdG9w77yMbGVmdOetiVxuICAgICAgICBjdXN0b21GbG9hdFR5cGU6IG51bGwsICAgICAgLy/oh6rlrprkuYnmta7liqjnsbvlnovnmoTmlrnms5UsIOWPguiAgyBmbG9hdFR5cGVEZWZhdWx0IOaWueazlVxuICAgIH0sXG4gICAgZXZlbnRzOiB7XG4gICAgICAgIGJlZm9yZUNyZWF0ZWQ6IEMubm9vcCwgICAgICAvL1RpcHMg5Yib5bu65raI5oGv5LmL5YmNIOinpuWPkVxuICAgICAgICBjcmVhdGVkOiBDLm5vb3AsICAgICAgICAgICAgLy9UaXBzIOWIm+W7uua2iOaBr+S5i+WQjiDop6blj5FcbiAgICAgICAgYmVmb3JlU2hvd246IEMubm9vcCwgICAgICAgIC8vVGlwcyDliJvlu7rmtojmga/kuYvlkI7vvIzlsZXnpLrkuYvliY0g6Kem5Y+RXG4gICAgICAgIHNob3duOiBDLm5vb3AsICAgICAgICAgICAgICAvL1RpcHMg5bGV56S65LmL5ZCOIOinpuWPkVxuICAgICAgICBiZWZvcmVEZXN0cm95ZWQ6IEMubm9vcCwgICAgLy9UaXBzIOmUgOavgeS5i+WJjSDop6blj5FcbiAgICAgICAgZGVzdHJveWVkOiBDLm5vb3AsICAgICAgICAgIC8vVGlwcyDplIDmr4HkuYvlkI4g6Kem5Y+RXG4gICAgICAgIGJlZm9yZUZsb2F0ZWQ6IEMubm9vcCwgICAgICAvL1RpcHMg5q+P5qyh5rWu5Yqo5LmL5YmNIOinpuWPkVxuICAgICAgICBmbG9hdGVkOiBDLm5vb3AsICAgICAgICAgICAgLy9UaXBzIOavj+asoea1ruWKqOS5i+WQjiDop6blj5FcbiAgICB9LFxuICAgIGRlYnVnOiB0cnVlICAgICAgICAgICAgICAgICAgICAgLy9kZWJ1ZyDpu5jorqTmiZPlvIDvvIzmiZPlvIDlj6/ku6XosIPor5Vsb2fjgIIgZXJyb3IsIHdhcm4g57G75Z6L55qEbG9nIOS4jeWPl+atpOW9seWTjVxufTtcblxudGlwcy5fZGVmYXVsdE9wdGlvbnMgPSBudWxsO1xuXG4vLyDorr7nva7pu5jorqTlj4LmlbDvvIzlhajlsYDnlJ/mlYhcbnRpcHMuc2V0RGVmT3B0aW9ucyA9IGZ1bmN0aW9uKGRlZk9wdGlvbnMpIHtcbiAgICBpZighdGlwcy5fZGVmYXVsdE9wdGlvbnMpIHRpcHMuX2RlZmF1bHRPcHRpb25zID0gdGlwcy5kZWZhdWx0T3B0aW9ucztcblxuICAgIHRpcHMuZGVmYXVsdE9wdGlvbnMgPSBDLmV4dGVuZCh7fSwgdGlwcy5kZWZhdWx0T3B0aW9ucywgZGVmT3B0aW9ucyk7XG59O1xuXG4vLyDph43nva7pu5jorqTlj4LmlbBcbnRpcHMucmVzZXREZWZPcHRpb25zID0gZnVuY3Rpb24oKSB7XG4gICAgaWYodGlwcy5fZGVmYXVsdE9wdGlvbnMpIHRpcHMuZGVmYXVsdE9wdGlvbnMgPSBDLmV4dGVuZCh7fSwgdGlwcy5fZGVmYXVsdE9wdGlvbnMpO1xufTtcblxudGlwcy5mbG9hdE9wdGlvbnMgPSB7XG4gICAgdG9wU3RhcnQ6IDAsICAgICAgICAgICAgICAgIC8v5rWu5Yqo6LW35aeL5L2N572uIFRvcFxuICAgIGxlZnRTdGFydDogMCwgICAgICAgICAgICAgICAvL+a1ruWKqOi1t+Wni+S9jee9riBMZWZ0XG4gICAgc3RhdHVzOiB0cnVlLCAgICAgICAgICAgICAgIC8v5rWu5Yqo54q25oCB77yM5LiA6Iis55So5LqO6L2s5oqY54K55pS55Y+Y5pa55ZCR6LaL5Yq/XG4gICAgb2Zmc2V0VHlwZTogJycsICAgICAgICAgICAgIC8v5q+P5qyh5pS55Y+Y54q25oCB6YeP55qE57G75Z6L77yMcHgg5oiWIOeZvuWIhuavlO+8jOm7mOiupHB4XG4gICAgeE1pblRocmVzaG9sZDogMCwgICAgICAgICAgIC8veOi9tOebuOWvueS6juWfuuWHhuWFg+e0oOeahOacgOWwj+WBj+W3ruWAvFxuICAgIHhNYXhUaHJlc2hvbGQ6ICcnLCAgICAgICAgICAvL3jovbTnm7jlr7nkuo7ln7rlh4blhYPntKDnmoTmnIDlpKflgY/lt67lgLxcbiAgICB4T2Zmc2V0TGVuOiAxLCAgICAgICAgICAgICAgLy946L205LiA5qyh55qE5YGP5beu6YePXG4gICAgeU1pblRocmVzaG9sZDogMCwgICAgICAgICAgIC8veei9tOebuOWvueS6juWfuuWHhuWFg+e0oOeahOacgOWwj+WBj+W3ruWAvFxuICAgIHlNYXhUaHJlc2hvbGQ6ICcnLCAgICAgICAgICAvL3novbTnm7jlr7nkuo7ln7rlh4blhYPntKDnmoTmnIDlpKflgY/lt67lgLxcbiAgICB5T2Zmc2V0TGVuOiAxLCAgICAgICAgICAgICAgLy956L205LiA5qyh55qE5YGP5beu6YePXG4gICAgZGVsYXk6IDEsICAgICAgICAgICAgICAgICAgIC8v5rWu5Yqo5L2N572u55qE5pe26Ze06Ze06ZqUXG59O1xuXG4vKipcbiAqIOavj+S4qlRpcHMg5a6e5L6L6YO95Lya5p+l5om+Z3JvdXBz5pWw57uE77yM5Yik5pat5a6e5L6L55qE57uE5piv5ZCm5bey57uP5a2Y5Zyo77yM5a2Y5Zyo5YiZ55u05o6l5b6A5a2Y5Zyo55qE57uE6YeM5o+S5YWlVGlwc1xuICogQHR5cGUge0FycmF5fVxuICovXG50aXBzLmdyb3VwcyA9IFtdO1xuXG4vKipcbiAqIOiwg+ivleS/oeaBr+mcgOimgeiuvue9riBkZWJ1ZyDphY3nva4gdHJ1ZSwg5pSv5oyB5Lu75oSP5aSa5Liq5raI5oGv5Y+C5pWwXG4gKi9cbnRpcHMucHJvdG90eXBlLndyaXRlTG9nID0gZnVuY3Rpb24obGV2ZWwsIC4uLm1lc3NhZ2UpIHtcbiAgICBpZigobGV2ZWwgIT0gJ2Vycm9yJyB8fCBsZXZlbCAhPSAnd2FybicpICYmICF0aGlzLm9wdGlvbnMuZGVidWcpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnNvbGVbbGV2ZWxdKC4uLm1lc3NhZ2UpO1xufTtcblxuLyoqXG4gKiDliJ3lp4vljJblsZXnpLpUaXBz44CCXG4gKiBAcGFyYW0gICAge1t0eXBlXX0gICAgICAgICAgICAgICAgIG9wdGlvbnMgW2Rlc2NyaXB0aW9uXVxuICogQHJldHVybiAgIHtbdHlwZV19ICAgICAgICAgICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAqL1xudGlwcy5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAvL+eUn+aIkOWunuS+i+WUr+S4gGlk77yM5pa55L6/5ZCM5Liq57uE6YeM6K+G5Yir5b285q2kXG4gICAgdGhpcy5pZCA9IHRoaXMudW5pcXVlSWQoKTtcblxuICAgIHRoaXMub3B0aW9ucyA9IEMuZXh0ZW5kKHt9LCB0aXBzLmRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcbiAgICBcbiAgICB0aGlzLmJhY2t1cCA9IHtcbiAgICAgICAgX2Jhc2VFbG0gOiBudWxsLCAgICAgICAgICAgICAgICAvL+Wkh+S7veWfuuWHhuWFg+e0oFxuICAgICAgICBfdGlwQ29udGFpbmVyRWxtIDogbnVsbCwgICAgICAgIC8v5aSH5Lu9VGlwcyDlrrnlmajlhYPntKBcbiAgICAgICAgX3RpcEdyb3VwRWxtIDogbnVsbCwgICAgICAgICAgICAvL+Wkh+S7vVRpcHMg5YiG57uE5YWD57SgXG4gICAgICAgIF90aXBFbG0gOiBudWxsLCAgICAgICAgICAgICAgICAgLy/lpIfku71UaXBzIOWFg+e0oFxuICAgICAgICBfc3ltYm9sQm94RWxtOiBudWxsLCAgICAgICAgICAgIC8v5aSH5Lu9c3ltYm9sIEJveCDlhYPntKDvvIzmmK9UaXBzIOWFg+e0oO+8iF90aXBFbG3vvInnmoTnm7TmjqXlrZDlhYPntKBcbiAgICAgICAgX3RpcEJveEVsbTogbnVsbCwgICAgICAgICAgICAgICAvL+Wkh+S7vVRpcHMgQm94IOWFg+e0oO+8jOaYr3N5bWJvbCBCb3gg5YWD57Sg77yIX3N5bWJvbEJveEVsbe+8ieeahOebtOaOpeWtkOWFg+e0oFxuICAgICAgICBfc3ltYm9sRWxtIDogbnVsbCwgICAgICAgICAgICAgIC8v5aSH5Lu9c3ltYm9sIOWFg+e0oFxuICAgICAgICBfYmFja2dyb3VuZEVsZW06IG51bGwsICAgICAgICAgIC8v5aSH5Lu96YGu572p5bGC5YWD57SgXG4gICAgICAgIF9ncm91cDogeyAgICAgICAgICAgICAgICAgICAgICAgLy/lpIfku73nu4TnirbmgIFcbiAgICAgICAgICAgIGlzRXhpc3RlZDogZmFsc2UsXG4gICAgICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAgX2Zsb2F0U3RhdHVzOiB7fSwgICAgICAgICAgICAgICAvL+Wkh+S7veW9k+WJjeWumuS9jVxuICAgIH07XG5cbiAgICB0aGlzLm1vbml0b3IgPSB7XG4gICAgICAgIGZsb2F0UG9zaXRpb24gOiB7fSwgICAgICAgICAvL+a1ruWKqOWumuS9je+8jOaUr+aMgeiHquWumuS5iea1ruWKqOaWueW8j1xuICAgICAgICBmbG9hdFRyYW5zbGF0ZSA6IHt9LCAgICAgICAgLy/mta7liqjlrprkvY3vvIzmlK/mjIHoh6rlrprkuYnmta7liqjmlrnlvI9cbiAgICB9O1xuXG4gICAgdGhpcy50R3JvdXBzID0gdGlwcy5ncm91cHM7ICAgICAvL+avj+S4qlRpcHMg5a6e5L6L6YO95Lya5p+l5om+Z3JvdXBz5pWw57uE77yM5Yik5pat5a6e5L6L55qE57uE5piv5ZCm5bey57uP5a2Y5Zyo77yM5a2Y5Zyo5YiZ55u05o6l5b6A5a2Y5Zyo55qE57uE6YeM5o+S5YWlVGlwcy5ncm91cHM7XG5cbiAgICB0aGlzLmV2ZW50ID0gbnVsbDsgICAgICAgICAgICAgIC8v6Kem5Y+RVGlwcyDph43mlrDlrprkvY3nmoTkuovku7ZcblxuICAgIHRoaXMuaW5pdFRpcHMoKTtcblxuICAgIHRoaXMuY2hlY2tHcm91cCgpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIOiuvue9rua2iOaBr1xuICog55So5oi35LiN6K6+572u77yM5YiZ5qC55o2udHlwZSDoh6rliqjorr7nva5cbiAqIEByZXR1cm4gICB7W3R5cGVdfSAgICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICovXG50aXBzLnByb3RvdHlwZS5pbml0TXNnID0gZnVuY3Rpb24oKSB7XG4gICAgaWYodGhpcy5vcHRpb25zLm1lc3NhZ2UgPT0gXCJcIikge1xuICAgICAgICBzd2l0Y2godGhpcy5vcHRpb25zLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJzdWNjZXNzXCIgOiAgICB0aGlzLm9wdGlvbnMubWVzc2FnZSA9IFwi5L+d5a2Y5oiQ5YqfXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZXJyb3JcIiA6ICB0aGlzLm9wdGlvbnMubWVzc2FnZSA9IFwi5L+d5a2Y5aSx6LSlXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwid2FybmluZ1wiIDogICAgdGhpcy5vcHRpb25zLm1lc3NhZ2UgPSBcIuitpuWRilwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImluZm9cIiA6dGhpcy5vcHRpb25zLm1lc3NhZ2UgPSBcInRpcHMg5bCP5bel5YW3XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OiAgICB0aGlzLm9wdGlvbnMubWVzc2FnZSA9IFwidGlwcyDlsI/lt6XlhbdcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8qKlxuICog5Yik5pat5piv5ZCm5pivIEh0bWwg57G75Z6L55qE5raI5oGvXG4gKi9cbnRpcHMucHJvdG90eXBlLmlzSHRtbE1lc3NhZ2UgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblxuICAgIGlmKG9wdGlvbnMuaHRtbCA9PT0gdHJ1ZSBcbiAgICAgICAgfHwgKEMuaXNPYmoob3B0aW9ucy5odG1sKSAmJiBvcHRpb25zLmh0bWwucGFyYW0gPT09IHRydWUpXG4gICAgICAgIHx8IG9wdGlvbnMubWVzc2FnZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50XG4gICAgICAgIHx8IG9wdGlvbnMubWVzc2FnZSBpbnN0YW5jZW9mIGpRdWVyeSlcbiAgICB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbi8qKlxuICog6K6+572uVGlwcyBjc3Mg57G744CCXG4gKiDljIXmi6zmtojmga/vvIzlm77moIfvvIzpga7nvanlsYLvvIzpmLTlvbHvvIzmoIflv5fnrYlcbiAqL1xudGlwcy5wcm90b3R5cGUuc2V0Q2xhc3MgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgdHlwZSA9IHRoaXMub3B0aW9ucy50eXBlO1xuICAgIGxldCBsaW1pdCA9IHRoaXMub3B0aW9ucy5saW1pdDtcbiAgICBsZXQgc2hhZG93ID0gdGhpcy5vcHRpb25zLnNoYWRvdztcbiAgICBsZXQgaWNvbiA9IHRoaXMub3B0aW9ucy5pY29uO1xuICAgIGxldCBzeW1ib2wgPSB0aGlzLm9wdGlvbnMuc3ltYm9sO1xuICAgIGxldCBodG1sID0gdGhpcy5vcHRpb25zLmh0bWw7XG5cbiAgICAvLyBvaG9UaXAtaGlkZSDliqjnlLvnlKjvvIzpppblhYjorr7nva7kuLrlhajpgI/mmI5cbiAgICBsZXQgdGlwQ2xhc3MgPSBcIm9ob1RpcCBvaG9UaXAtaGlkZVwiO1xuICAgIGxldCB0aXBCb3hDbGFzcyA9IFwib2hvVGlwLWJveFwiO1xuICAgIGxldCBiZ0NsYXNzID0gXCJvaG9UaXAtYmcgb2hvVGlwLWhpZGVcIjtcbiAgICBsZXQgbWVzc2FnZUNsYXNzID0gXCJcIjtcbiAgICBsZXQgaWNvbkNsYXNzID0gXCJcIjtcbiAgICBsZXQgc3ltYm9sQ2xhc3MgPSBcIlwiO1xuXG4gICAgLy8g6ZmQ5Yi2VGlwcyDlrr3luqbmiJbogIXpq5jluqZcbiAgICBpZihsaW1pdCkge1xuICAgICAgICB0aXBDbGFzcyA9IHRpcENsYXNzICsgXCIgb2hvVGlwLWxpbWl0XCI7XG4gICAgfVxuICAgIC8vIOaYr+WQpuaYvuekuumYtOW9sVxuICAgIGlmKCFzaGFkb3cpIHtcbiAgICAgICAgdGlwQm94Q2xhc3MgPSB0aXBCb3hDbGFzcyArICcgb2hvVGlwLWJveC1uby1zaGFkb3cnO1xuICAgIH1cblxuICAgIGlmKHRoaXMuaXNIdG1sTWVzc2FnZSgpKSB7XG4gICAgICAgIHRpcEJveENsYXNzID0gdGlwQm94Q2xhc3MgKyAnIG9ob1RpcC1ib3gtaHRtbCc7XG4gICAgICAgIGlmKEMuaXNPYmooaHRtbCkgJiYgaHRtbC5pc0NvbnRhaW5lclRyYW5zcGFyZW50KSB0aXBCb3hDbGFzcyA9IHRpcEJveENsYXNzICsgJyBvaG9UaXAtYm94LWh0bWwtdHJhbnNwYXJlbnQnO1xuICAgIH1cblxuICAgIHN3aXRjaCh0eXBlKSB7XG4gICAgICAgIGNhc2UgXCJub3JtYWxcIiA6XG4gICAgICAgICAgICBtZXNzYWdlQ2xhc3MgPSBcIm9ob1RpcC1tZXNzYWdlXCI7XG4gICAgICAgICAgICBpY29uQ2xhc3MgPSBcIm9ob1RpcC1pY29uIGljb24tY2hlY2tcIjtcbiAgICAgICAgICAgIHN5bWJvbENsYXNzID0gXCJvaG9UaXAtc3ltYm9sXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInN1Y2Nlc3NcIiA6XG4gICAgICAgICAgICB0aXBCb3hDbGFzcyA9IHRpcEJveENsYXNzICsgXCIgb2hvVGlwLXN1Y2Nlc3NcIjtcbiAgICAgICAgICAgIG1lc3NhZ2VDbGFzcyA9IFwib2hvVGlwLW1lc3NhZ2Ugb2hvVGlwLW1lc3NhZ2Utc3VjY2Vzc1wiO1xuICAgICAgICAgICAgaWNvbkNsYXNzID0gXCJvaG9UaXAtaWNvbiBpY29uLWNoZWNrXCI7XG4gICAgICAgICAgICBzeW1ib2xDbGFzcyA9IFwib2hvVGlwLXN5bWJvbCBzeW1ib2wtc3VjY2Vzc1wiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJlcnJvclwiIDpcbiAgICAgICAgICAgIHRpcEJveENsYXNzID0gdGlwQm94Q2xhc3MgKyBcIiBvaG9UaXAtZXJyb3JcIjtcbiAgICAgICAgICAgIG1lc3NhZ2VDbGFzcyA9IFwib2hvVGlwLW1lc3NhZ2Ugb2hvVGlwLW1lc3NhZ2UtZXJyb3JcIjtcbiAgICAgICAgICAgIGljb25DbGFzcyA9IFwib2hvVGlwLWljb24gaWNvbi1jcm9zc1wiO1xuICAgICAgICAgICAgc3ltYm9sQ2xhc3MgPSBcIm9ob1RpcC1zeW1ib2wgc3ltYm9sLWVycm9yXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIndhcm5pbmdcIiA6XG4gICAgICAgICAgICB0aXBCb3hDbGFzcyA9IHRpcEJveENsYXNzICsgXCIgb2hvVGlwLXdhcm5pbmdcIjtcbiAgICAgICAgICAgIG1lc3NhZ2VDbGFzcyA9IFwib2hvVGlwLW1lc3NhZ2Ugb2hvVGlwLW1lc3NhZ2Utd2FybmluZ1wiO1xuICAgICAgICAgICAgaWNvbkNsYXNzID0gXCJvaG9UaXAtaWNvbiBpY29uLWV4Y2xhbWF0aW9uXCI7XG4gICAgICAgICAgICBzeW1ib2xDbGFzcyA9IFwib2hvVGlwLXN5bWJvbCBzeW1ib2wtd2FybmluZ1wiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJpbmZvXCIgOlxuICAgICAgICAgICAgdGlwQm94Q2xhc3MgPSB0aXBCb3hDbGFzcyArIFwiIG9ob1RpcC1pbmZvXCI7ICBcbiAgICAgICAgICAgIG1lc3NhZ2VDbGFzcyA9IFwib2hvVGlwLW1lc3NhZ2Ugb2hvVGlwLW1lc3NhZ2UtaW5mb1wiO1xuICAgICAgICAgICAgaWNvbkNsYXNzID0gXCJvaG9UaXAtaWNvbiBpY29uLWV4Y2xhbWF0aW9uLWNpcmNsZVwiO1xuICAgICAgICAgICAgc3ltYm9sQ2xhc3MgPSBcIm9ob1RpcC1zeW1ib2wgc3ltYm9sLWluZm9cIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0IDpcbiAgICAgICAgICAgIG1lc3NhZ2VDbGFzcyA9IHR5cGU7ICAgICAgICAvL+eUqOaIt+iHquWumuS5iVxuICAgICAgICAgICAgaWNvbkNsYXNzID0gXCJvaG9UaXAtaWNvbiBpY29uLWNoZWNrXCI7XG4gICAgICAgICAgICBzeW1ib2xDbGFzcyA9IFwib2hvVGlwLXN5bWJvbFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYoaWNvbikge1xuICAgICAgICB0aXBCb3hDbGFzcyA9IHRpcEJveENsYXNzICsgXCIgb2hvVGlwLWFkZC1pY29uXCIgKyBcIiBpY29uLVwiICsgdGhpcy5vcHRpb25zLmljb25PcHRpb25zLnBvc2l0aW9uO1xuICAgICAgICAvLyDlpoLmnpxpY29uIOS4unRydWXvvIzoibLosIPln7rkuo5vcHRpb24udHlwZeOAgiDlpoLmnpzkuLrlrZfnrKbkuLLvvIzliJnmoLnmja7lrZfnrKbkuLLorr7nva5cbiAgICAgICAgaWYodHlwZW9mIGljb24gPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGljb25DbGFzcyA9IFwib2hvVGlwLWljb25cIjtcbiAgICAgICAgICAgIHN3aXRjaChpY29uKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcIm5vcm1hbFwiIDpcbiAgICAgICAgICAgICAgICAgICAgaWNvbkNsYXNzID0gaWNvbkNsYXNzICsgXCIgaWNvbi1jaGVja1wiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwic3VjY2Vzc1wiIDpcbiAgICAgICAgICAgICAgICAgICAgaWNvbkNsYXNzID0gaWNvbkNsYXNzICsgXCIgaWNvbi1jaGVjayBpY29uLXN1Y2Nlc3NcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImVycm9yXCIgOlxuICAgICAgICAgICAgICAgICAgICBpY29uQ2xhc3MgPSBpY29uQ2xhc3MgKyBcIiBpY29uLWNyb3NzIGljb24tZXJyb3JcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIndhcm5pbmdcIiA6XG4gICAgICAgICAgICAgICAgICAgIGljb25DbGFzcyA9IGljb25DbGFzcyArIFwiIGljb24tZXhjbGFtYXRpb24gaWNvbi13YXJuaW5nXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJpbmZvXCIgOlxuICAgICAgICAgICAgICAgICAgICBpY29uQ2xhc3MgPSBpY29uQ2xhc3MgKyBcIiBpY29uLWV4Y2xhbWF0aW9uLWNpcmNsZSBpY29uLWluZm9cIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImNsb2NrXCIgOlxuICAgICAgICAgICAgICAgICAgICBpY29uQ2xhc3MgPSBpY29uQ2xhc3MgKyBcIiBpY29uLWNsb2NrIGljb24tXCIgKyB0aGlzLm9wdGlvbnMuaWNvbk9wdGlvbnMudHlwZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWNvbkNsYXNzID0gaWNvbjsgICAvLyDnlKjmiLfoh6rlrprkuYlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZihzeW1ib2wpIHtcbiAgICAgICAgLy8g5aaC5p6cc3ltYm9sT3B0aW9ucy50eXBlIOS4uuepuu+8jOiJsuiwg+WfuuS6jm9wdGlvbi50eXBl44CCIOWmguaenOS4uuWtl+espuS4su+8jOWImeagueaNruWtl+espuS4suiuvue9ruiJsuiwg1xuICAgICAgICBpZih0aGlzLm9wdGlvbnMuc3ltYm9sT3B0aW9ucy50eXBlKSB7XG4gICAgICAgICAgICBzeW1ib2xDbGFzcyA9IFwib2hvVGlwLXN5bWJvbFwiO1xuICAgICAgICAgICAgc3dpdGNoKHRoaXMub3B0aW9ucy5zeW1ib2xPcHRpb25zLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwibm9ybWFsXCIgOlxuICAgICAgICAgICAgICAgIGNhc2UgXCJzdWNjZXNzXCIgOlxuICAgICAgICAgICAgICAgIGNhc2UgXCJlcnJvclwiIDpcbiAgICAgICAgICAgICAgICBjYXNlIFwid2FybmluZ1wiIDpcbiAgICAgICAgICAgICAgICBjYXNlIFwiaW5mb1wiIDpcbiAgICAgICAgICAgICAgICAgICAgc3ltYm9sQ2xhc3MgPSBcIm9ob1RpcC1zeW1ib2wgc3ltYm9sLVwiICsgdGhpcy5vcHRpb25zLnN5bWJvbE9wdGlvbnMudHlwZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgc3ltYm9sQ2xhc3MgPSBcIm9ob1RpcC1zeW1ib2wgXCIgKyB0aGlzLm9wdGlvbnMuc3ltYm9sT3B0aW9ucy50eXBlOyAgIC8vIOeUqOaIt+iHquWumuS5iVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIOmDqOWIhuexu+Wei+ayoeacieWQr+eUqO+8jOWvueW6lGNzc0NsYXNzIOS5n+ayoeeUqFxuICAgIGxldCBjc3NDbGFzcyA9IHtcbiAgICAgICAgdGlwOiB0aXBDbGFzcyxcbiAgICAgICAgdGlwQm94OiB0aXBCb3hDbGFzcyxcbiAgICAgICAgYmc6IGJnQ2xhc3MsXG4gICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VDbGFzcyxcbiAgICAgICAgaWNvbjogaWNvbkNsYXNzLFxuICAgICAgICBzeW1ib2w6IHN5bWJvbENsYXNzXG4gICAgfTtcblxuICAgIHRoaXMuY3NzQ2xhc3MgPSBjc3NDbGFzcztcblxuICAgIHJldHVybiBjc3NDbGFzcztcbn07XG5cbi8qKlxuICog6K6+572uIFRpcHMg5bGe5oCnXG4gKiDmr5TlpoLnu4TlkI1cbiAqL1xudGlwcy5wcm90b3R5cGUuc2V0VGlwc0F0dHJpYnV0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBncm91cCA9IHRoaXMub3B0aW9ucy5ncm91cDtcbiAgICBsZXQgdGlwc0F0dHJpYnV0ZSA9IHt9O1xuICAgIGlmKGdyb3VwLm5hbWUpIHtcbiAgICAgICAgdGlwc0F0dHJpYnV0ZS50aXBOYW1lID0gZ3JvdXAubmFtZTtcbiAgICB9ZWxzZSB7XG4gICAgICAgIHRpcHNBdHRyaWJ1dGUudGlwTmFtZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIH1cblxuICAgIHRoaXMudGlwc0F0dHJpYnV0ZSA9IHRpcHNBdHRyaWJ1dGU7XG5cbiAgICByZXR1cm4gdGlwc0F0dHJpYnV0ZTtcbn07XG5cbnRpcHMucHJvdG90eXBlLmdldEJhc2VFbGVtZW10ID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIGxldCAkYmFzZSA9IG51bGw7XG5cbiAgICBpZighb3B0aW9ucy5iYXNlRWxlbWVudCkge1xuICAgICAgICAkYmFzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgIH1lbHNlIGlmKG9wdGlvbnMuYmFzZUVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAkYmFzZSA9IG9wdGlvbnMuYmFzZUVsZW1lbnQ7XG4gICAgfWVsc2UgaWYod2luZG93LmpRdWVyeSAmJiBvcHRpb25zLmJhc2VFbGVtZW50IGluc3RhbmNlb2YgalF1ZXJ5KSB7XG4gICAgICAgICRiYXNlID0gb3B0aW9ucy5iYXNlRWxlbWVudFswXTtcbiAgICB9ZWxzZSB7XG4gICAgICAgICRiYXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLmJhc2VFbGVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gJGJhc2U7XG59O1xuXG4vLyDojrflj5bnu4TlhYPntKDvvIzlkIzkuIDkuKrnu4TnmoRUaXBzIOWwhuWMheWQq+WcqOebuOWQjOeahOe7hOWFg+e0oOmHjOmdolxudGlwcy5wcm90b3R5cGUuZ2V0VGlwc0dyb3VwID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIGxldCB0aXBzQXR0cmlidXRlID0gdGhpcy50aXBzQXR0cmlidXRlO1xuICAgIGxldCBncm91cE5hbWUgPSAndGlwR3JvdXAtJyArIHRpcHNBdHRyaWJ1dGUudGlwTmFtZTtcblxuICAgIGxldCAkdGlwR3JvdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2W2dyb3VwLW5hbWU9J1wiK2dyb3VwTmFtZStcIiddXCIpO1xuXG4gICAgaWYoISR0aXBHcm91cCkge1xuICAgICAgICAkdGlwR3JvdXAgPSBDLmNyZWF0ZU5vZGUoXCI8ZGl2IGdyb3VwLW5hbWU9J1wiK2dyb3VwTmFtZStcIicgY2xhc3M9J29ob1RpcC1ncm91cCc+XCIpO1xuICAgIH1lbHNlIHtcbiAgICAgICAgdGhpcy5iYWNrdXAuX2dyb3VwLmlzRXhpc3RlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuICR0aXBHcm91cDtcbn07XG5cbi8vIOWwhlRpcHMg5ZKMIOiDjOaZr+WFg+e0oOWMheS9j++8jOmBv+WFjeWHjOS5sVxudGlwcy5wcm90b3R5cGUuZ2V0VGlwc0NvbnRhaW5lciA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICBsZXQgdGlwc0F0dHJpYnV0ZSA9IHRoaXMudGlwc0F0dHJpYnV0ZTtcbiAgICBsZXQgJHRpcEdyb3VwID0gdGhpcy5iYWNrdXAuX3RpcEdyb3VwRWxtO1xuICAgIGxldCAkdGlwQ29udGFpbmVyID0gJHRpcEdyb3VwLnBhcmVudE5vZGU7XG5cbiAgICBpZighJHRpcENvbnRhaW5lcikge1xuICAgICAgICBsZXQgY29udGFpbmVyTmFtZSA9ICd0aXBDb250YWluZXItJyArIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAkdGlwQ29udGFpbmVyID0gQy5jcmVhdGVOb2RlKFwiPGRpdiBuYW1lPSdcIitjb250YWluZXJOYW1lK1wiJyBjbGFzcz0nb2hvVGlwLWNvbnRhaW5lcic+PC9kaXY+XCIpO1xuICAgIH1cblxuICAgIHJldHVybiAkdGlwQ29udGFpbmVyO1xufTtcblxuLyoqXG4gKiDmuLLmn5NUaXBzIOWGheWuue+8jOaUr+aMgSBEb20g5YWD57SgXG4gKiDljIXmi6wg5raI5oGv77yM5Zu+5qCH77yM5qCH5b+X566t5aS0562JXG4gKi9cbnRpcHMucHJvdG90eXBlLnJlbmRlclRpcHNCb2R5ID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIGxldCAkYmFzZSA9IHRoaXMuYmFja3VwLl9iYXNlRWxtO1xuICAgIGxldCAkdGlwQ29udGFpbmVyID0gdGhpcy5iYWNrdXAuX3RpcENvbnRhaW5lckVsbTtcbiAgICBsZXQgJHRpcEdyb3VwID0gdGhpcy5iYWNrdXAuX3RpcEdyb3VwRWxtO1xuICAgIGxldCBjc3NDbGFzcyA9IHRoaXMuY3NzQ2xhc3M7XG4gICAgbGV0IHRpcHNBdHRyaWJ1dGUgPSB0aGlzLnRpcHNBdHRyaWJ1dGU7XG5cbiAgICB0aGlzLm9wdGlvbnMuZXZlbnRzLmJlZm9yZUNyZWF0ZWQuY2FsbCh0aGlzKTsgIC8vVGlwcyDliJvlu7rmtojmga/kuYvliY0g6Kem5Y+RXG5cbiAgICBsZXQgJHRpcCA9IEMuY3JlYXRlTm9kZShcIjxkaXYgbmFtZT0nb2hvVGlwcycgY2xhc3M9J1wiK2Nzc0NsYXNzLnRpcCtcIic+XCIpO1xuXG4gICAgLy8g55So5LqOc3ltYm9sIOWQr+eUqOaXtu+8jOiuvue9ruWvueW6lHBhZGRpbmcg57uZc3ltYm9sIOWxleekuuepuumXtFxuICAgIGxldCAkc3ltYm9sQm94ID0gQy5jcmVhdGVOb2RlKFwiPGRpdiBuYW1lPSdzeW1ib2wtYm94JyBjbGFzcz0nb2hvVGlwLXN5bWJvbC1ib3gnPjwvZGl2PlwiKTtcbiAgICB0aGlzLmJhY2t1cC5fc3ltYm9sQm94RWxtID0gJHN5bWJvbEJveDtcbiAgICAkdGlwLmFwcGVuZENoaWxkKCRzeW1ib2xCb3gpO1xuXG4gICAgbGV0ICR0aXBCb3ggPSBDLmNyZWF0ZU5vZGUoXCI8ZGl2IGNsYXNzPSdcIitjc3NDbGFzcy50aXBCb3grXCInPlwiKTtcbiAgICB0aGlzLmJhY2t1cC5fdGlwQm94RWxtID0gJHRpcEJveDtcbiAgICAkc3ltYm9sQm94LmFwcGVuZENoaWxkKCR0aXBCb3gpO1xuXG4gICAgbGV0ICRtZXNzYWdlQm94ID0gQy5jcmVhdGVOb2RlKFwiPGRpdiBjbGFzcz0nXCIrY3NzQ2xhc3MubWVzc2FnZStcIic+XCIpO1xuICAgIGxldCAkbWVzc2FnZTtcbiAgICBpZih0aGlzLmlzSHRtbE1lc3NhZ2UoKSkgeyAgICAgICAvL21lc3NhZ2Ug5Li6ZG9t5YWD57SgXG4gICAgICAgIGlmKHR5cGVvZiBvcHRpb25zLm1lc3NhZ2UgPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgJG1lc3NhZ2UgPSBDLmNyZWF0ZU5vZGUob3B0aW9ucy5tZXNzYWdlKTtcbiAgICAgICAgfWVsc2UgaWYob3B0aW9ucy5tZXNzYWdlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgICRtZXNzYWdlID0gb3B0aW9ucy5tZXNzYWdlO1xuICAgICAgICB9ZWxzZSBpZihvcHRpb25zLm1lc3NhZ2UgaW5zdGFuY2VvZiBqUXVlcnkpIHtcbiAgICAgICAgICAgICRtZXNzYWdlID0gb3B0aW9ucy5tZXNzYWdlWzBdO1xuICAgICAgICB9XG4gICAgICAgICRtZXNzYWdlQm94LmFwcGVuZENoaWxkKCRtZXNzYWdlKTtcbiAgICAgICAgXG4gICAgfWVsc2UgeyAgICAgICAgICAgICAgICAgLy9tZXNzYWdlIOS4uuaWh+acrOS/oeaBr1xuICAgICAgICBpZihDLmlzU3RyaW5nKG9wdGlvbnMubWVzc2FnZSkpIHtcbiAgICAgICAgICAgICRtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgICAkbWVzc2FnZS5pbm5lclRleHQgPSBvcHRpb25zLm1lc3NhZ2U7XG4gICAgICAgICAgICAkbWVzc2FnZUJveC5hcHBlbmRDaGlsZCgkbWVzc2FnZSk7XG4gICAgICAgIH1lbHNlIGlmIChDLmlzQXJyYXkob3B0aW9ucy5tZXNzYWdlKSkge1xuICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8b3B0aW9ucy5tZXNzYWdlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgJG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgICRtZXNzYWdlLmlubmVyVGV4dCA9IG9wdGlvbnMubWVzc2FnZVtpXTtcbiAgICAgICAgICAgICAgICAkbWVzc2FnZUJveC5hcHBlbmRDaGlsZCgkbWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkdGlwQm94LmFwcGVuZENoaWxkKCRtZXNzYWdlQm94KTtcbiAgICB0aGlzLnJlbmRlckljb24ob3B0aW9ucywgJHRpcEJveCk7XG5cbiAgICB0aGlzLnJlbmRlclRpcHNTeW1ib2wob3B0aW9ucywgJHRpcEJveCk7XG5cbiAgICAkdGlwR3JvdXAuYXBwZW5kQ2hpbGQoJHRpcCk7XG4gICAgJHRpcENvbnRhaW5lci5hcHBlbmRDaGlsZCgkdGlwR3JvdXApO1xuXG4gICAgLy8g5aaC5p6c5Z+65YeG5YWD57SgUG9zdGlvbiDmmK9GaXhlZO+8jOWImVRpcHPmj5LlhaXliLDln7rlh4blhYPntKDlhoVcbiAgICAvLyDlkKbliJnmj5LlhaXliLBib2R5IOWGheabtOWlvVxuICAgIGxldCBwU3R5bGVQb3NpdGlvbiA9IEMuZ2V0U3R5bGUoJGJhc2UsICdwb3NpdGlvbicpO1xuICAgIGlmKHBTdHlsZVBvc2l0aW9uID09ICdmaXhlZCcpICRiYXNlLmFwcGVuZENoaWxkKCR0aXBDb250YWluZXIpOyAgICAgICAgIC8v5YWI5o+S5YWl5YWD57Sg77yM54S25ZCO5omN6IO96I635Y+W5a695bqm5ZKM6auY5bqmXG4gICAgZWxzZSBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKCR0aXBDb250YWluZXIpO1xuXG4gICAgdGhpcy5zZXRTdHlsZVN5bWJvbEJveCgpO1xuXG4gICAgdGhpcy5vcHRpb25zLmV2ZW50cy5jcmVhdGVkLmNhbGwodGhpcyk7ICAvL1RpcHMg5Yib5bu65raI5oGv5LmL5ZCOIOinpuWPkVxuXG4gICAgcmV0dXJuICR0aXA7XG59O1xuXG4vKipcbiAqIOa4suafk+Wbvuagh1xuICovXG50aXBzLnByb3RvdHlwZS5yZW5kZXJJY29uID0gZnVuY3Rpb24ob3B0aW9ucywgJHRpcEJveCkge1xuICAgIGlmKG9wdGlvbnMuaWNvbikge1xuICAgICAgICBsZXQgY3NzQ2xhc3MgPSB0aGlzLmNzc0NsYXNzO1xuICAgICAgICBsZXQgJGljb25Cb3ggPSBDLmNyZWF0ZU5vZGUoXCI8ZGl2IGNsYXNzPSdvaG9UaXAtaWNvbi1ib3gnPjxzcGFuPjxpIGNsYXNzPSdcIitjc3NDbGFzcy5pY29uK1wiJz48L2k+PC9zcGFuPjwvZGl2PlwiKTtcbiAgICAgICAgJHRpcEJveC5hcHBlbmRDaGlsZCgkaWNvbkJveCk7XG4gICAgfVxufVxuXG4vKipcbiAqIOa4suafk+mBrue9qeWxglxuICovXG50aXBzLnByb3RvdHlwZS5yZW5kZXJUaXBzQmcgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgaWYoIW9wdGlvbnMuYmFja2dyb3VuZCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgbGV0IGNzc0NsYXNzID0gdGhpcy5jc3NDbGFzcztcbiAgICBsZXQgJGJhc2UgPSB0aGlzLmJhY2t1cC5fYmFzZUVsbTtcbiAgICBsZXQgJHRpcENvbnRhaW5lciA9IHRoaXMuYmFja3VwLl90aXBDb250YWluZXJFbG07XG4gICAgbGV0ICRiZyA9IEMuY3JlYXRlTm9kZShcIjxkaXYgY2xhc3MgPSAnXCIrY3NzQ2xhc3MuYmcrXCInPlwiKTtcbiAgICAkdGlwQ29udGFpbmVyLmFwcGVuZENoaWxkKCRiZyk7XG5cbiAgICByZXR1cm4gJGJnO1xufTtcblxuLyoqXG4gKiDmoLnmja5UaXBz5a6a5L2N6YCJ5oup5qCH5b+X55qE5L2N572uXG4gKi9cbnRpcHMucHJvdG90eXBlLm1hcFBvc2l0aW9uVG9TeW1ib2xQb3NpdGlvbiA9IGZ1bmN0aW9uKG15UG9zaXRpb24pIHtcbiAgICBsZXQgcG9zaXRpb25Ub1N5bWJvbFBvc2l0aW9uID0ge1xuICAgICAgICAnaW5uZXInOiB7XG4gICAgICAgICAgICAndG9wLWxlZnQnOiAndG9wLWxlZnQnLFxuICAgICAgICAgICAgJ3RvcC1jZW50ZXInOiAndG9wLWNlbnRlcicsXG4gICAgICAgICAgICAndG9wLXJpZ2h0JzogJ3RvcC1yaWdodCcsXG4gICAgICAgICAgICAnY2VudGVyLWxlZnQnOiAnY2VudGVyLWxlZnQnLFxuICAgICAgICAgICAgJ21pZGRsZSc6ICdtaWRkbGUnLFxuICAgICAgICAgICAgJ2NlbnRlci1yaWdodCc6ICdjZW50ZXItcmlnaHQnLFxuICAgICAgICAgICAgJ2JvdHRvbS1sZWZ0JzogJ2JvdHRvbS1sZWZ0JyxcbiAgICAgICAgICAgICdib3R0b20tY2VudGVyJzogJ2JvdHRvbS1jZW50ZXInLFxuICAgICAgICAgICAgJ2JvdHRvbS1yaWdodCc6ICdib3R0b20tcmlnaHQnLFxuICAgICAgICB9LFxuICAgICAgICAnb3V0ZXInOiB7XG4gICAgICAgICAgICAndG9wLWxlZnQnOiAnYm90dG9tLWxlZnQnLFxuICAgICAgICAgICAgJ3RvcC1jZW50ZXInOiAnYm90dG9tLWNlbnRlcicsXG4gICAgICAgICAgICAndG9wLXJpZ2h0JzogJ2JvdHRvbS1yaWdodCcsXG4gICAgICAgICAgICAnY2VudGVyLWxlZnQnOiAnY2VudGVyLXJpZ2h0JyxcbiAgICAgICAgICAgICdtaWRkbGUnOiAnbWlkZGxlJyxcbiAgICAgICAgICAgICdjZW50ZXItcmlnaHQnOiAnY2VudGVyLWxlZnQnLFxuICAgICAgICAgICAgJ2JvdHRvbS1sZWZ0JzogJ3RvcC1sZWZ0JyxcbiAgICAgICAgICAgICdib3R0b20tY2VudGVyJzogJ3RvcC1jZW50ZXInLFxuICAgICAgICAgICAgJ2JvdHRvbS1yaWdodCc6ICd0b3AtcmlnaHQnLFxuICAgICAgICAgICAgJ2xlZnQtdG9wJzogJ3JpZ2h0LXRvcCcsXG4gICAgICAgICAgICAnbGVmdC1ib3R0b20nOiAncmlnaHQtYm90dG9tJyxcbiAgICAgICAgICAgICdyaWdodC10b3AnOiAnbGVmdC10b3AnLFxuICAgICAgICAgICAgJ3JpZ2h0LWJvdHRvbSc6ICdsZWZ0LWJvdHRvbScsXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYodHlwZW9mIG15UG9zaXRpb24gPT0gXCJzdHJpbmdcIikge1xuICAgICAgICBpZih0aGlzLm9wdGlvbnMuZGlyZWN0aW9uID09ICdpbm5lcicgfHwgdGhpcy5vcHRpb25zLmRpcmVjdGlvbiA9PSAnbm9ybWFsJykge1xuICAgICAgICAgICAgaWYocG9zaXRpb25Ub1N5bWJvbFBvc2l0aW9uWydpbm5lciddLmhhc093blByb3BlcnR5KG15UG9zaXRpb24pKSByZXR1cm4gcG9zaXRpb25Ub1N5bWJvbFBvc2l0aW9uWydpbm5lciddW215UG9zaXRpb25dO1xuICAgICAgICB9ZWxzZSBpZih0aGlzLm9wdGlvbnMuZGlyZWN0aW9uID09ICdvdXRlcicgfHwgdGhpcy5vcHRpb25zLmRpcmVjdGlvbiA9PSAnb3V0c2lkZScpIHtcbiAgICAgICAgICAgIGlmKHBvc2l0aW9uVG9TeW1ib2xQb3NpdGlvblsnb3V0ZXInXS5oYXNPd25Qcm9wZXJ0eShteVBvc2l0aW9uKSkgcmV0dXJuIHBvc2l0aW9uVG9TeW1ib2xQb3NpdGlvblsnb3V0ZXInXVtteVBvc2l0aW9uXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAnJztcbn1cblxuLyoqXG4gKiDmuLLmn5PmoIflv5fvvIzmlK/mjIHoh6rliqjpgInmi6nkvY3nva5cbiAqL1xudGlwcy5wcm90b3R5cGUucmVuZGVyVGlwc1N5bWJvbCA9IGZ1bmN0aW9uKG9wdGlvbnMsICR0aXBCb3gpIHtcbiAgICBpZighb3B0aW9ucy5zeW1ib2wpIHJldHVybiBmYWxzZTtcblxuICAgIGxldCBzeW1ib2xDbGFzcyA9IHRoaXMuY3NzQ2xhc3Muc3ltYm9sO1xuICAgIGxldCBzeW1ib2wgPSBcInRyaWFuZ2xlXCI7XG4gICAgaWYodHlwZW9mIG9wdGlvbnMuc3ltYm9sID09ICdzdHJpbmcnKSBzeW1ib2wgPSBvcHRpb25zLnN5bWJvbDtcblxuICAgIGlmKCF0aGlzLm9wdGlvbnMuc3ltYm9sT3B0aW9ucy5wb3NpdGlvbiAmJiB0eXBlb2YgdGhpcy5vcHRpb25zLnBvc2l0aW9uID09ICdzdHJpbmcnKSB7XG4gICAgICAgIHN5bWJvbENsYXNzID0gc3ltYm9sQ2xhc3MgKyBcIiBcIiArIHN5bWJvbCArIFwiLVwiICsgdGhpcy5tYXBQb3NpdGlvblRvU3ltYm9sUG9zaXRpb24odGhpcy5vcHRpb25zLnBvc2l0aW9uKTtcbiAgICAgICAgdGhpcy53cml0ZUxvZygnaW5mbycsICdyZW5kZXJUaXBzU3ltYm9sIC0gQXV0byBzZXQgYnkgb3B0aW9ucy5wb3NpdGlvbiglcykgLSBTZXQgc3ltYm9sQ2xhc3MoJXMpJywgdGhpcy5vcHRpb25zLnBvc2l0aW9uLCBzeW1ib2xDbGFzcyk7XG4gICAgfWVsc2UgaWYodGhpcy5vcHRpb25zLnN5bWJvbE9wdGlvbnMucG9zaXRpb24gJiYgdHlwZW9mIHRoaXMub3B0aW9ucy5zeW1ib2xPcHRpb25zLnBvc2l0aW9uID09ICdzdHJpbmcnKSB7XG4gICAgICAgIHN5bWJvbENsYXNzID0gc3ltYm9sQ2xhc3MgKyBcIiBcIiArIHN5bWJvbCArIFwiLVwiICsgdGhpcy5vcHRpb25zLnN5bWJvbE9wdGlvbnMucG9zaXRpb247XG4gICAgICAgIHRoaXMud3JpdGVMb2coJ2luZm8nLCAncmVuZGVyVGlwc1N5bWJvbCAtIEF1dG8gc2V0IGJ5IHN5bWJvbE9wdGlvbnMucG9zaXRpb24oJXMpIC0gU2V0IHN5bWJvbENsYXNzKCVzKScsIHRoaXMub3B0aW9ucy5zeW1ib2xPcHRpb25zLnBvc2l0aW9uLCBzeW1ib2xDbGFzcyk7XG4gICAgfWVsc2Uge1xuICAgICAgICBzeW1ib2xDbGFzcyA9IHN5bWJvbENsYXNzICsgXCIgXCIgKyBzeW1ib2w7XG4gICAgICAgIHRoaXMud3JpdGVMb2coJ2luZm8nLCAncmVuZGVyVGlwc1N5bWJvbCAtIEF1dG8gc2V0IGJ5IHN5bWJvbENsYXNzKCVzKSwgc3ltYm9sKCVzKSAtIFNldCBzeW1ib2xDbGFzcyglcyknLCBzeW1ib2xDbGFzcywgc3ltYm9sLCBzeW1ib2xDbGFzcyk7XG4gICAgfVxuXG4gICAgbGV0ICRzeW1ib2wgPSBDLmNyZWF0ZU5vZGUoXCI8c3BhbiBjbGFzcz0nXCIrIHN5bWJvbENsYXNzICtcIic+PC9zcGFuPlwiKTtcbiAgICB0aGlzLmJhY2t1cC5fc3ltYm9sRWxtID0gJHN5bWJvbDtcbiAgICAkdGlwQm94LmFwcGVuZENoaWxkKCRzeW1ib2wpO1xuICAgIFxuICAgIHJldHVybiAkc3ltYm9sO1xufVxuXG4vKipcbiAqIOiuvue9ruagh+W/l+eItuWFg+e0oOebkuWtkOeahOWkp+Wwj++8jOS+nemdoHBhZGRpbmfmkpHlvIDniLblhYPntKDvvIzliKnkuo7liqjnlLvmiafooYxcbiAqL1xudGlwcy5wcm90b3R5cGUuc2V0U3R5bGVTeW1ib2xCb3ggPSBmdW5jdGlvbigpIHtcbiAgICBpZighdGhpcy5vcHRpb25zLnN5bWJvbCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgbGV0ICRzeW1ib2xCb3ggPSB0aGlzLmJhY2t1cC5fc3ltYm9sQm94RWxtO1xuICAgIGxldCBzeW1ib2xTaXplID0gdGhpcy5nZXRTeW1ib2xTaXplKCk7XG5cbiAgICBsZXQgc3ltYm9sQm94U3R5bGUgPSB7XG4gICAgICAgICdwYWRkaW5nLXRvcCc6IDAsXG4gICAgICAgICdwYWRkaW5nLWJvdHRvbSc6IDAsXG4gICAgICAgICdwYWRkaW5nLWxlZnQnOiAwLFxuICAgICAgICAncGFkZGluZy1yaWdodCc6IDAsXG4gICAgfTtcblxuICAgIGxldCBzeW1ib2xQb3NpdGlvbiA9IHRoaXMub3B0aW9ucy5zeW1ib2xPcHRpb25zLnBvc2l0aW9uIHx8IHRoaXMubWFwUG9zaXRpb25Ub1N5bWJvbFBvc2l0aW9uKHRoaXMub3B0aW9ucy5wb3NpdGlvbik7XG4gICAgaWYoc3ltYm9sUG9zaXRpb24gJiYgdHlwZW9mIHN5bWJvbFBvc2l0aW9uID09ICdzdHJpbmcnKSB7XG4gICAgICAgIHN3aXRjaChzeW1ib2xQb3NpdGlvbikge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ0b3AtbGVmdFwiIDogICAgICAgICAgIC8v5Z2Q5qCH5ZyoVGlwcyDnmoTlt6bkuIrop5LkvY3nva5cbiAgICAgICAgICAgICAgICBjYXNlIFwidG9wLWNlbnRlclwiIDogICAgICAgICAvL+WdkOagh+WcqFRpcHMg55qE5LiK5Lit5L2N572uXG4gICAgICAgICAgICAgICAgY2FzZSBcInRvcC1yaWdodFwiIDogICAgICAgICAgLy/lnZDmoIflnKhUaXBzIOeahOWPs+S4iuinkuS9jee9rlxuICAgICAgICAgICAgICAgICAgICBzeW1ib2xCb3hTdHlsZVsncGFkZGluZy10b3AnXSA9IHN5bWJvbFNpemUuaGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicmlnaHQtdG9wXCIgOiAgICAgICAgICAvL+WdkOagh+WcqFRpcHMg55qE5LiK5Y+z6KeS5L2N572uXG4gICAgICAgICAgICAgICAgY2FzZSBcImNlbnRlci1yaWdodFwiIDogICAgICAgLy/lnZDmoIflnKhUaXBzIOeahOWPs+S4reS9jee9rlxuICAgICAgICAgICAgICAgIGNhc2UgXCJyaWdodC1ib3R0b21cIiA6ICAgICAgIC8v5Z2Q5qCH5ZyoVGlwcyDnmoTkuIvlj7Pop5LkvY3nva5cbiAgICAgICAgICAgICAgICAgICAgc3ltYm9sQm94U3R5bGVbJ3BhZGRpbmctcmlnaHQnXSA9IHN5bWJvbFNpemUud2lkdGggKyBcInB4XCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJib3R0b20tcmlnaHRcIiA6ICAgICAgIC8v5Z2Q5qCH5ZyoVGlwcyDnmoTlj7PkuIvop5LkvY3nva5cbiAgICAgICAgICAgICAgICBjYXNlIFwiYm90dG9tLWNlbnRlclwiIDogICAgICAvL+WdkOagh+WcqFRpcHMg55qE5LiL5Lit5L2N572uXG4gICAgICAgICAgICAgICAgY2FzZSBcImJvdHRvbS1sZWZ0XCIgOiAgICAgICAgLy/lnZDmoIflnKhUaXBzIOeahOW3puS4i+inkuS9jee9rlxuICAgICAgICAgICAgICAgICAgICBzeW1ib2xCb3hTdHlsZVsncGFkZGluZy1ib3R0b20nXSA9IHN5bWJvbFNpemUuaGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwibGVmdC1ib3R0b21cIiA6ICAgICAgICAvL+WdkOagh+WcqFRpcHMg55qE5LiL5bem6KeS5L2N572uXG4gICAgICAgICAgICAgICAgY2FzZSBcImNlbnRlci1sZWZ0XCIgOiAgICAgICAgLy/lnZDmoIflnKhUaXBzIOeahOW3puS4reS9jee9rlxuICAgICAgICAgICAgICAgIGNhc2UgXCJsZWZ0LXRvcFwiIDogICAgICAgICAgIC8v5Z2Q5qCH5ZyoVGlwcyDnmoTkuIrlt6bop5LkvY3nva5cbiAgICAgICAgICAgICAgICAgICAgc3ltYm9sQm94U3R5bGVbJ3BhZGRpbmctbGVmdCddID0gc3ltYm9sU2l6ZS53aWR0aCArIFwicHhcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIm1pZGRsZVwiIDogICAgICAgICAgICAgLy/lnZDmoIflnKhUaXBzIOeahOS4remXtOS9jee9rlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0IDogICAgICAgICAgICAgICAgICAgLy/pu5jorqTlnZDmoIflnKhUaXBzIOeahOS4remXtOS9jee9rlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICB9XG5cbiAgICBDLmFkZENzcygkc3ltYm9sQm94LCBzeW1ib2xCb3hTdHlsZSk7XG5cbiAgICByZXR1cm4gc3ltYm9sQm94U3R5bGU7XG59XG5cbi8qKlxuICog5aaC5p6cVGlwcyDmnInliIbnu4TphY3nva7vvIzlsLHlsIbnm7jlkIznu4TnmoRUaXBzIOWunuS+i+WtmOWFpWdyb3VwIOaVsOe7hOOAglxuICovXG50aXBzLnByb3RvdHlwZS5zZXRHcm91cCA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBsZXQgZ3JvdXAgPSB0aGlzLm9wdGlvbnMuZ3JvdXA7XG5cbiAgICBpZihncm91cC5uYW1lKSB7XG4gICAgICAgIGlmKHRoaXMudEdyb3Vwcy5oYXNPd25Qcm9wZXJ0eShncm91cC5uYW1lKSkge1xuICAgICAgICAgICAgdGhpcy50R3JvdXBzW2dyb3VwLm5hbWVdLnB1c2goX3RoaXMpO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRHcm91cHNbZ3JvdXAubmFtZV0gPSBbX3RoaXNdO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIOmUgOavgVRpcHMg55qE5pe25YCZ77yMXG4gKiDku47liIbnu4Tph4zpnaLnp7vpmaTov5nkuKogVGlwc1xuICovXG50aXBzLnByb3RvdHlwZS51bnNldEdyb3VwID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIGxldCBncm91cCA9IHRoaXMub3B0aW9ucy5ncm91cDtcblxuICAgIGlmKGdyb3VwLm5hbWUpIHtcbiAgICAgICAgaWYodGhpcy50R3JvdXBzLmhhc093blByb3BlcnR5KGdyb3VwLm5hbWUpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudEdyb3Vwc1tncm91cC5uYW1lXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmKHRoaXMudEdyb3Vwc1tncm91cC5uYW1lXVtpXS5pZCA9PSB0aGlzLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudEdyb3Vwc1tncm91cC5uYW1lXS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiDlpoLmnpxUaXBzIOacieWIhue7hOmFjee9ru+8jOWIm+W7uuS5i+WQjumcgOimgeajgOafpeW9k+WJjeWIhue7hOS4quaVsOaYr+WQpuW3sue7j+i2heWHuuacgOWkp+S4quaVsFxuICog5aaC5p6c6LaF5Ye677yM5YiZ5bCG5pyA5YmN6Z2i55qEVGlwcyDplIDmr4HliKDpmaRcbiAqL1xudGlwcy5wcm90b3R5cGUuY2hlY2tHcm91cCA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBsZXQgZ3JvdXAgPSB0aGlzLm9wdGlvbnMuZ3JvdXA7XG5cbiAgICBpZihncm91cC5uYW1lKSB7XG4gICAgICAgIGlmKHRoaXMudEdyb3Vwcy5oYXNPd25Qcm9wZXJ0eShncm91cC5uYW1lKSAmJiB0aGlzLnRHcm91cHNbZ3JvdXAubmFtZV0ubGVuZ3RoID4gZ3JvdXAubWF4TGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnRHcm91cHNbZ3JvdXAubmFtZV1bMF0uZGVzdHJveShfdGhpcyk7XG4gICAgICAgICAgICB0aGlzLnRHcm91cHNbZ3JvdXAubmFtZV0uc3BsaWNlKDAsIDEpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIOWIpOaWrVRpcHMg5Z+65YeG5YWD57Sg5piv5ZCm5pivIEJvZHkg5YWD57SgXG4gKi9cbnRpcHMucHJvdG90eXBlLmlzQm9keUVsZW1lbnQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gIXRoaXMub3B0aW9ucy5iYXNlRWxlbWVudCB8fCB0aGlzLmJhY2t1cC5fYmFzZUVsbS50YWdOYW1lID09ICdCT0RZJztcbn1cblxuLyoqXG4gKiDojrflj5bln7rlh4blhYPntKDku6Xlj4pUaXBz5YWD57Sg55qE6K+m5oOFXG4gKiDljIXmi6zkvY3nva7vvIzlrr3pq5jvvIzovrnlrr3lsZ7mgKfnrYlcbiAqL1xudGlwcy5wcm90b3R5cGUuZ2V0RWxlbWVudERldGFpbHMgPSBmdW5jdGlvbigpIHtcbiAgICAvL+W9k+WfuuWHhuWFg+e0oOaIllRpcHMg5YWD57Sg5Y+R55Sf5oiW5Y+v6IO95Y+R55Sf5Y+Y5YyW5pe277yM5omN6YeN5paw6I635Y+W6K+m57uG5Y+C5pWw44CCXG4gICAgLy/kuIDoiKzmnaXor7TvvIxzY3JvbGwg5piv5LiN6ZyA6KaB6YeN5paw6I635Y+W6K+m5oOF55qE77yM5Zug5Li65a6D5LiN5Lya5pS55Y+Y5Z+65YeG5YWD57Sg55qE5aSn5bCP44CC5Y+q5pyJ5b2T5Z+65YeG5YWD57Sg5L2N5LqOcG9zaXRpb246Zml4ZWQg55qE54i25YWD57Sg5YaF77yM5omN5Lya6ZyA6KaB6YeN5paw6I635Y+W44CCXG4gICAgaWYodGhpcy5lbGVtZW50RGV0YWlscyAmJiAoIXRoaXMuZXZlbnQgfHwgKHRoaXMuZXZlbnQudHlwZSAhPSAncmVzaXplJyAmJiB0aGlzLmV2ZW50LnR5cGUgIT0gJ3Njcm9sbCcpKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50RGV0YWlscztcbiAgICB9XG5cbiAgICB0aGlzLnNldEluaXRQb3NpdGlvbigpO1xuXG4gICAgbGV0ICRwRWxlbSA9IHRoaXMuYmFja3VwLl9iYXNlRWxtO1xuICAgIGxldCAkdGlwR3JvdXAgPSB0aGlzLmJhY2t1cC5fdGlwR3JvdXBFbG07XG4gICAgbGV0ICR0aXAgPSB0aGlzLmJhY2t1cC5fdGlwRWxtO1xuICAgIGxldCBkZXRhaWxzO1xuXG4gICAgaWYodGhpcy5pc0JvZHlFbGVtZW50KCkpIHtcbiAgICAgICAgZGV0YWlscyA9IHtcbiAgICAgICAgICAgIGJhc2VQb3NpdGlvbjoge3RvcDogMCwgbGVmdDogMH0sXG4gICAgICAgICAgICBiYXNlTWFyZ2luVG9wOiAwLCAgICAgICAgICAgLy/ojrflj5bln7rlh4blhYPntKDlpJbovrnot53vvIxwb3NpdGlvbigpIOiOt+WPlueahOWAvOS4jeeul+Wklui+uei3nVxuICAgICAgICAgICAgYmFzZU1hcmdpbkxlZnQ6IDAsXG4gICAgICAgICAgICBiYXNlV2lkdGg6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vd2lkdGgrcGFkZGluZ1xuICAgICAgICAgICAgYmFzZUhlaWdodDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2hlaWdodCtwYWRkaW5nXG4gICAgICAgICAgICBiYXNlT3V0ZXJXaWR0aDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLFxuICAgICAgICAgICAgYmFzZU91dGVySGVpZ2h0OiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LFxuICAgICAgICAgICAgLy8gYmFzZU9mZnNldFdpZHRoOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgICAvLyBiYXNlT2Zmc2V0SGVpZ2h0OiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0LFxuICAgICAgICAgICAgYmFzZUJvcmRlclRvcFdpZHRoOiAwLCAgICAgICAgICAgLy90b3AgYm9yZGVyXG4gICAgICAgICAgICBiYXNlQm9yZGVyQm90dG9tV2lkdGg6IDAsXG4gICAgICAgICAgICBiYXNlQm9yZGVyTGVmdFdpZHRoOiAwLCAgICAgICAgICAvL2xlZnQgYm9yZGVyXG4gICAgICAgICAgICBiYXNlQm9yZGVyUmlnaHRXaWR0aDogMCxcbiAgICAgICAgICAgIGJhc2VCb3JkZXJSYWRpdXM6IDAsICAgICAgICAgICAgICAgICAgICAvL+WchuinkuWNiuW+hFxuICAgICAgICAgICAgdGlwR3JvdXBXaWR0aDogQy5vdXRlcldpZHRoKCR0aXBHcm91cCksXG4gICAgICAgICAgICB0aXBHcm91cEhlaWdodDogQy5vdXRlckhlaWdodCgkdGlwR3JvdXApLFxuICAgICAgICAgICAgdGlwV2lkdGg6IEMub3V0ZXJXaWR0aCgkdGlwKSxcbiAgICAgICAgICAgIHRpcEhlaWdodDogQy5vdXRlckhlaWdodCgkdGlwKSxcbiAgICAgICAgfTtcbiAgICB9ZWxzZSB7XG4gICAgICAgIGRldGFpbHMgPSB7XG4gICAgICAgICAgICBiYXNlUG9zaXRpb246IEMucG9zaXRpb24oJHBFbGVtKSxcbiAgICAgICAgICAgIGJhc2VNYXJnaW5Ub3A6IHBhcnNlRmxvYXQoQy5jc3MoJHBFbGVtLCBcIm1hcmdpbi10b3BcIikpLCAgICAgICAgICAgIC8v6I635Y+W5Z+65YeG5YWD57Sg5aSW6L656Led77yMcG9zaXRpb24oKSDojrflj5bnmoTlgLzkuI3nrpflpJbovrnot51cbiAgICAgICAgICAgIGJhc2VNYXJnaW5MZWZ0OiBwYXJzZUZsb2F0KEMuY3NzKCRwRWxlbSwgXCJtYXJnaW4tbGVmdFwiKSksXG4gICAgICAgICAgICBiYXNlV2lkdGg6IEMuaW5uZXJXaWR0aCgkcEVsZW0sIHRydWUpLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy93aWR0aCtwYWRkaW5nXG4gICAgICAgICAgICBiYXNlSGVpZ2h0OiBDLmlubmVySGVpZ2h0KCRwRWxlbSwgdHJ1ZSksICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9oZWlnaHQrcGFkZGluZ1xuICAgICAgICAgICAgYmFzZU91dGVyV2lkdGg6IEMub3V0ZXJXaWR0aCgkcEVsZW0pLFxuICAgICAgICAgICAgYmFzZU91dGVySGVpZ2h0OiBDLm91dGVySGVpZ2h0KCRwRWxlbSksXG4gICAgICAgICAgICBiYXNlQm9yZGVyVG9wV2lkdGg6IHBhcnNlRmxvYXQoQy5jc3MoJHBFbGVtLCBcImJvcmRlci10b3Atd2lkdGhcIikpLCAgICAgICAgICAgIC8vdG9wIGJvcmRlclxuICAgICAgICAgICAgYmFzZUJvcmRlckJvdHRvbVdpZHRoOiBwYXJzZUZsb2F0KEMuY3NzKCRwRWxlbSwgXCJib3JkZXItYm90dG9tLXdpZHRoXCIpKSxcbiAgICAgICAgICAgIGJhc2VCb3JkZXJMZWZ0V2lkdGg6IHBhcnNlRmxvYXQoQy5jc3MoJHBFbGVtLCBcImJvcmRlci1sZWZ0LXdpZHRoXCIpKSwgICAgICAgICAgIC8vbGVmdCBib3JkZXJcbiAgICAgICAgICAgIGJhc2VCb3JkZXJSaWdodFdpZHRoOiBwYXJzZUZsb2F0KEMuY3NzKCRwRWxlbSwgXCJib3JkZXItcmlnaHQtd2lkdGhcIikpLFxuICAgICAgICAgICAgYmFzZUJvcmRlclJhZGl1czogQy5jc3MoJHBFbGVtLCBcImJvcmRlci1yYWRpdXNcIiksICAgICAgICAgICAgICAgICAgICAgLy/lnIbop5LljYrlvoRcbiAgICAgICAgICAgIHRpcEdyb3VwV2lkdGg6IEMub3V0ZXJXaWR0aCgkdGlwR3JvdXApLFxuICAgICAgICAgICAgdGlwR3JvdXBIZWlnaHQ6IEMub3V0ZXJIZWlnaHQoJHRpcEdyb3VwKSxcbiAgICAgICAgICAgIHRpcFdpZHRoOiBDLm91dGVyV2lkdGgoJHRpcCksXG4gICAgICAgICAgICB0aXBIZWlnaHQ6IEMub3V0ZXJIZWlnaHQoJHRpcCksXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy/ooaXnrpflpJbovrnot51cbiAgICBkZXRhaWxzLmJhc2VUb3AgPSBkZXRhaWxzLmJhc2VQb3NpdGlvbi50b3A7XG4gICAgZGV0YWlscy5iYXNlTGVmdCA9IGRldGFpbHMuYmFzZVBvc2l0aW9uLmxlZnQ7XG5cbiAgICAvL3RpcHPlhYPntKBwb3NpdGlvbumYiOWAvO+8jOWkp+S6juivpemYiOWAvO+8jHRpcHPkvJrotoXlh7rln7rlh4blhYPntKBcbiAgICBkZXRhaWxzLnRvcFRocmVzaG9sZCA9IGRldGFpbHMuYmFzZUhlaWdodCAtIGRldGFpbHMudGlwR3JvdXBIZWlnaHQ7XG4gICAgZGV0YWlscy5sZWZ0VGhyZXNob2xkID0gZGV0YWlscy5iYXNlV2lkdGggLSBkZXRhaWxzLnRpcEdyb3VwV2lkdGg7XG5cbiAgICB0aGlzLmVsZW1lbnREZXRhaWxzID0gZGV0YWlscztcblxuICAgIHRoaXMudW5zZXRJbml0UG9zaXRpb24oKTtcblxuICAgIHRoaXMud3JpdGVMb2coJ2luZm8nLCAnR2V0IEVsZW1lbnQgRGV0YWlsczogJywgdGhpcy5lbGVtZW50RGV0YWlscyk7XG5cbiAgICByZXR1cm4gdGhpcy5lbGVtZW50RGV0YWlscztcbn07XG5cbi8qKlxuICog6I635Y+WVGlwcyDnmoRjc3Mg5a6a5L2N57G777yM5Y+q5pyJ5LulYm9keSDkuLrln7rlh4blhYPntKDnmoRUaXBzIOmcgOimgVxuICovXG50aXBzLnByb3RvdHlwZS5nZXRQb3NpdGlvbkNsYXNzID0gZnVuY3Rpb24obXlQb3NpdGlvbikge1xuICAgIGxldCBwb3NpdGlvbkNsYXNzID0ge307XG5cbiAgICBpZih0aGlzLmlzQm9keUVsZW1lbnQoKSkge1xuICAgICAgICBwb3NpdGlvbkNsYXNzLnRpcENsYXNzID0gXCJvaG9UaXAtZml4ZWRcIjtcbiAgICAgICAgcG9zaXRpb25DbGFzcy5iZ0NsYXNzID0gXCJvaG9UaXAtYmctZml4ZWRcIjtcblxuICAgICAgICBpZih0eXBlb2YgbXlQb3NpdGlvbiA9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBzd2l0Y2gobXlQb3NpdGlvbikge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ0b3AtbGVmdFwiIDogICAgICAgICAgIC8v5Z2Q5qCH5Zyo5Z+65YeG5YWD57Sg55qE5bem5LiK6KeS5L2N572uXG4gICAgICAgICAgICAgICAgY2FzZSBcInRvcC1jZW50ZXJcIiA6ICAgICAgICAgLy/lnZDmoIflnKjln7rlh4blhYPntKDnmoTkuIrkuK3kvY3nva5cbiAgICAgICAgICAgICAgICBjYXNlIFwidG9wLXJpZ2h0XCIgOiAgICAgICAgICAvL+WdkOagh+WcqOWfuuWHhuWFg+e0oOeahOWPs+S4iuinkuS9jee9rlxuICAgICAgICAgICAgICAgIGNhc2UgXCJjZW50ZXItbGVmdFwiIDogICAgICAgIC8v5Z2Q5qCH5Zyo5Z+65YeG5YWD57Sg55qE5bem5Lit5L2N572uXG4gICAgICAgICAgICAgICAgY2FzZSBcIm1pZGRsZVwiIDogICAgICAgICAgICAgLy/lnZDmoIflnKjln7rlh4blhYPntKDnmoTkuK3pl7TkvY3nva5cbiAgICAgICAgICAgICAgICBjYXNlIFwiY2VudGVyLXJpZ2h0XCIgOiAgICAgICAvL+WdkOagh+WcqOWfuuWHhuWFg+e0oOeahOWPs+S4reS9jee9rlxuICAgICAgICAgICAgICAgIGNhc2UgXCJib3R0b20tbGVmdFwiIDogICAgICAgIC8v5Z2Q5qCH5Zyo5Z+65YeG5YWD57Sg55qE5bem5LiL6KeS5L2N572uXG4gICAgICAgICAgICAgICAgY2FzZSBcImJvdHRvbS1jZW50ZXJcIiA6ICAgICAgLy/lnZDmoIflnKjln7rlh4blhYPntKDnmoTkuIvkuK3kvY3nva5cbiAgICAgICAgICAgICAgICBjYXNlIFwiYm90dG9tLXJpZ2h0XCIgOiAgICAgICAvL+WdkOagh+WcqOWfuuWHhuWFg+e0oOeahOWPs+S4i+inkuS9jee9rlxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbkNsYXNzLnRpcENsYXNzID0gcG9zaXRpb25DbGFzcy50aXBDbGFzcyArICcgJyArIG15UG9zaXRpb247XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJkZWZhdWx0XCIgOiAgICAgICAgICAgIC8v6buY6K6k5Z2Q5qCH5Zyo5Z+65YeG5YWD57Sg55qE5Lit6Ze05L2N572uXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uQ2xhc3MudGlwQ2xhc3MgPSBwb3NpdGlvbkNsYXNzLnRpcENsYXNzICsgJyAnICsgXCJtaWRkbGVcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdCA6ICAgICAgICAgICAgICAgICAgIC8v5Y+v5pSv5oyB6Ieq5a6a5LmJXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uQ2xhc3MudGlwQ2xhc3MgPSBwb3NpdGlvbkNsYXNzLnRpcENsYXNzICsgJyAnICsgbXlQb3NpdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcG9zaXRpb25DbGFzcztcbn07XG5cbi8qKlxuICog5aaC5p6c5LulQm9keSDkuLrln7rlh4blhYPntKDvvIxUaXBzIOS7pWNzcyDnsbvorr7nva7lrprkvY1cbiAqIOi/meS4quaWueazleWPr+S7peiuvue9ruWDj+e0oOe6p+WIq+eahOWumuS9jeWBj+enu1xuICovXG50aXBzLnByb3RvdHlwZS5zZXRDbGFzc1Bvc2l0aW9uT2Zmc2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0ICR0aXBHcm91cCA9IHRoaXMuYmFja3VwLl90aXBHcm91cEVsbTtcbiAgICBsZXQgbXlQb3NpdGlvbiA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbjtcbiAgICBsZXQgb2Zmc2V0ID0gdGhpcy5vcHRpb25zLm9mZnNldDtcbiAgICBvZmZzZXQudG9wID0gb2Zmc2V0LnRvcCB8fCAwO1xuICAgIG9mZnNldC5sZWZ0ID0gb2Zmc2V0LmxlZnQgfHwgMDtcblxuICAgIGlmKG9mZnNldC50b3AgPT0gMCAmJiBvZmZzZXQubGVmdCA9PSAwKSByZXR1cm47XG5cbiAgICBpZih0aGlzLmlzQm9keUVsZW1lbnQoKSkge1xuICAgICAgICBpZih0eXBlb2YgbXlQb3NpdGlvbiA9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBzd2l0Y2gobXlQb3NpdGlvbikge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ0b3AtbGVmdFwiIDogICAgICAgICAgIC8v5Z2Q5qCH5Zyo5Z+65YeG5YWD57Sg55qE5bem5LiK6KeS5L2N572uXG4gICAgICAgICAgICAgICAgICAgICR0aXBHcm91cC5zdHlsZS50b3AgPSBvZmZzZXQudG9wICsgXCJweFwiO1xuICAgICAgICAgICAgICAgICAgICAkdGlwR3JvdXAuc3R5bGUubGVmdCA9IG9mZnNldC5sZWZ0ICsgXCJweFwiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwidG9wLWNlbnRlclwiIDogICAgICAgICAvL+WdkOagh+WcqOWfuuWHhuWFg+e0oOeahOS4iuS4reS9jee9rlxuICAgICAgICAgICAgICAgICAgICAkdGlwR3JvdXAuc3R5bGUudG9wID0gb2Zmc2V0LnRvcCArIFwicHhcIjtcbiAgICAgICAgICAgICAgICAgICAgJHRpcEdyb3VwLnN0eWxlLnJpZ2h0ID0gb2Zmc2V0LmxlZnQgKyBcInB4XCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ0b3AtcmlnaHRcIiA6ICAgICAgICAgIC8v5Z2Q5qCH5Zyo5Z+65YeG5YWD57Sg55qE5Y+z5LiK6KeS5L2N572uXG4gICAgICAgICAgICAgICAgICAgICR0aXBHcm91cC5zdHlsZS50b3AgPSBvZmZzZXQudG9wICsgXCJweFwiO1xuICAgICAgICAgICAgICAgICAgICAkdGlwR3JvdXAuc3R5bGUucmlnaHQgPSBvZmZzZXQubGVmdCArIFwicHhcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImNlbnRlci1sZWZ0XCIgOiAgICAgICAgLy/lnZDmoIflnKjln7rlh4blhYPntKDnmoTlt6bkuK3kvY3nva5cbiAgICAgICAgICAgICAgICAgICAgJHRpcEdyb3VwLnN0eWxlLmxlZnQgPSBvZmZzZXQubGVmdCArIFwicHhcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIm1pZGRsZVwiIDogICAgICAgICAgICAgLy/lnZDmoIflnKjln7rlh4blhYPntKDnmoTkuK3pl7TkvY3nva5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImNlbnRlci1yaWdodFwiIDogICAgICAgLy/lnZDmoIflnKjln7rlh4blhYPntKDnmoTlj7PkuK3kvY3nva5cbiAgICAgICAgICAgICAgICAgICAgJHRpcEdyb3VwLnN0eWxlLnJpZ2h0ID0gb2Zmc2V0LmxlZnQgKyBcInB4XCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJib3R0b20tbGVmdFwiIDogICAgICAgIC8v5Z2Q5qCH5Zyo5Z+65YeG5YWD57Sg55qE5bem5LiL6KeS5L2N572uXG4gICAgICAgICAgICAgICAgICAgICR0aXBHcm91cC5zdHlsZS5ib3R0b20gPSBvZmZzZXQudG9wICsgXCJweFwiO1xuICAgICAgICAgICAgICAgICAgICAkdGlwR3JvdXAuc3R5bGUubGVmdCA9IG9mZnNldC5sZWZ0ICsgXCJweFwiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiYm90dG9tLWNlbnRlclwiIDogICAgICAvL+WdkOagh+WcqOWfuuWHhuWFg+e0oOeahOS4i+S4reS9jee9rlxuICAgICAgICAgICAgICAgICAgICAkdGlwR3JvdXAuc3R5bGUuYm90dG9tID0gb2Zmc2V0LnRvcCArIFwicHhcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImJvdHRvbS1yaWdodFwiIDogICAgICAgLy/lnZDmoIflnKjln7rlh4blhYPntKDnmoTlj7PkuIvop5LkvY3nva5cbiAgICAgICAgICAgICAgICAgICAgJHRpcEdyb3VwLnN0eWxlLmJvdHRvbSA9IG9mZnNldC50b3AgKyBcInB4XCI7XG4gICAgICAgICAgICAgICAgICAgICR0aXBHcm91cC5zdHlsZS5yaWdodCA9IG9mZnNldC5sZWZ0ICsgXCJweFwiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiZGVmYXVsdFwiIDogICAgICAgICAgICAvL+m7mOiupOWdkOagh+WcqOWfuuWHhuWFg+e0oOeahOS4remXtOS9jee9rlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0IDogICAgICAgICAgICAgICAgICAgLy/lj6/mlK/mjIHoh6rlrprkuYlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICog5bey5byD55So44CC5pu/5Luj5pa55qGI5piv5qC55o2uU3ltYm9sIOiuvue9rnBhZGRpbmfvvIzliKnkuo7liqjnlLvmiafooYxcbiAqIFxuICog5aaC5p6c5ZCv5Yqoc3ltYm9s77yM6ICMc3ltYm9sIOS4jeWNoFRpcHMg5a695bqm5ZKM6auY5bqm44CCIOWImeWPr+agueaNrnN5bWJvbCBvZmZzZXQg5b6u6LCD5Z+65YeG5YWD57Sg5LiOVGlwcyDnmoTnm7jlr7nlrprkvY1cbiAqL1xudGlwcy5wcm90b3R5cGUuc2V0Q2xhc3NTeW1ib2xPZmZzZXQgPSBmdW5jdGlvbigpIHtcbiAgICAvLyDkuIDkuKrliIbnu4Tlj6rpnIDopoHorr7nva7kuIDmrKFzeW1ib2wgb2Zmc2V0XG4gICAgaWYodGhpcy5iYWNrdXAuX2dyb3VwLmlzRXhpc3RlZCA9PSB0cnVlKSByZXR1cm4gZmFsc2U7XG4gICAgaWYoIXRoaXMub3B0aW9ucy5zeW1ib2wpIHJldHVybiBmYWxzZTtcblxuICAgIGxldCAkdGlwR3JvdXAgPSB0aGlzLmJhY2t1cC5fdGlwR3JvdXBFbG07XG4gICAgbGV0IHRnU3R5bGUgPSBDLmdldFN0eWxlKCR0aXBHcm91cCk7XG4gICAgLy8g5LyY5YWI6K6+572ucG9zaXRpb24ub2Zmc2V0LCDmiYDku6XpnIDopoHlhYjorqHnrpflvZPliY3lrprkvY1cbiAgICBsZXQgdGdQb3NpdGlvbiA9IHtcbiAgICAgICAgdG9wOiBwYXJzZUZsb2F0KHRnU3R5bGUudG9wKSxcbiAgICAgICAgbGVmdDogcGFyc2VGbG9hdCh0Z1N0eWxlLmxlZnQpLFxuICAgICAgICByaWdodDogcGFyc2VGbG9hdCh0Z1N0eWxlLnJpZ2h0KSxcbiAgICAgICAgYm90dG9tOiBwYXJzZUZsb2F0KHRnU3R5bGUuYm90dG9tKSxcbiAgICB9XG5cbiAgICBpZih0aGlzLmlzQm9keUVsZW1lbnQoKSkge1xuICAgICAgICBsZXQgc3ltYm9sU2l6ZSA9IHRoaXMuZ2V0U3ltYm9sU2l6ZSgpO1xuXG4gICAgICAgIGxldCBzeW1ib2xQb3NpdGlvbiA9IHRoaXMub3B0aW9ucy5zeW1ib2xPcHRpb25zLnBvc2l0aW9uIHx8IHRoaXMubWFwUG9zaXRpb25Ub1N5bWJvbFBvc2l0aW9uKHRoaXMub3B0aW9ucy5wb3NpdGlvbik7XG4gICAgICAgIGlmKHN5bWJvbFBvc2l0aW9uICYmIHR5cGVvZiBzeW1ib2xQb3NpdGlvbiA9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgc3dpdGNoKHN5bWJvbFBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInRvcC1sZWZ0XCIgOiAgICAgICAgICAgLy/lnZDmoIflnKhUaXBzIOeahOW3puS4iuinkuS9jee9rlxuICAgICAgICAgICAgICAgIGNhc2UgXCJ0b3AtY2VudGVyXCIgOiAgICAgICAgIC8v5Z2Q5qCH5ZyoVGlwcyDnmoTkuIrkuK3kvY3nva5cbiAgICAgICAgICAgICAgICBjYXNlIFwidG9wLXJpZ2h0XCIgOiAgICAgICAgICAvL+WdkOagh+WcqFRpcHMg55qE5Y+z5LiK6KeS5L2N572uXG4gICAgICAgICAgICAgICAgICAgICR0aXBHcm91cC5zdHlsZS50b3AgPSB0Z1Bvc2l0aW9uLnRvcCArIHN5bWJvbFNpemUuaGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicmlnaHQtdG9wXCIgOiAgICAgICAgICAvL+WdkOagh+WcqFRpcHMg55qE5LiK5Y+z6KeS5L2N572uXG4gICAgICAgICAgICAgICAgY2FzZSBcImNlbnRlci1yaWdodFwiIDogICAgICAgLy/lnZDmoIflnKhUaXBzIOeahOWPs+S4reS9jee9rlxuICAgICAgICAgICAgICAgIGNhc2UgXCJyaWdodC1ib3R0b21cIiA6ICAgICAgIC8v5Z2Q5qCH5ZyoVGlwcyDnmoTkuIvlj7Pop5LkvY3nva5cbiAgICAgICAgICAgICAgICAgICAgJHRpcEdyb3VwLnN0eWxlLnJpZ2h0ID0gdGdQb3NpdGlvbi5yaWdodCArIHN5bWJvbFNpemUud2lkdGggKyBcInB4XCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJib3R0b20tcmlnaHRcIiA6ICAgICAgIC8v5Z2Q5qCH5ZyoVGlwcyDnmoTlj7PkuIvop5LkvY3nva5cbiAgICAgICAgICAgICAgICBjYXNlIFwiYm90dG9tLWNlbnRlclwiIDogICAgICAvL+WdkOagh+WcqFRpcHMg55qE5LiL5Lit5L2N572uXG4gICAgICAgICAgICAgICAgY2FzZSBcImJvdHRvbS1sZWZ0XCIgOiAgICAgICAgLy/lnZDmoIflnKhUaXBzIOeahOW3puS4i+inkuS9jee9rlxuICAgICAgICAgICAgICAgICAgICAkdGlwR3JvdXAuc3R5bGUuYm90dG9tID0gdGdQb3NpdGlvbi5ib3R0b20gKyBzeW1ib2xTaXplLmhlaWdodCArIFwicHhcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImxlZnQtYm90dG9tXCIgOiAgICAgICAgLy/lnZDmoIflnKhUaXBzIOeahOS4i+W3puinkuS9jee9rlxuICAgICAgICAgICAgICAgIGNhc2UgXCJjZW50ZXItbGVmdFwiIDogICAgICAgIC8v5Z2Q5qCH5ZyoVGlwcyDnmoTlt6bkuK3kvY3nva5cbiAgICAgICAgICAgICAgICBjYXNlIFwibGVmdC10b3BcIiA6ICAgICAgICAgICAvL+WdkOagh+WcqFRpcHMg55qE5LiK5bem6KeS5L2N572uXG4gICAgICAgICAgICAgICAgICAgICR0aXBHcm91cC5zdHlsZS5sZWZ0ID0gdGdQb3NpdGlvbi5sZWZ0ICsgc3ltYm9sU2l6ZS53aWR0aCArIFwicHhcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIm1pZGRsZVwiIDogICAgICAgICAgICAgLy/lnZDmoIflnKhUaXBzIOeahOS4remXtOS9jee9rlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0IDogICAgICAgICAgICAgICAgICAgLy/pu5jorqTlnZDmoIflnKhUaXBzIOeahOS4remXtOS9jee9rlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBQb3NpdGlvbiBGaXhlZCDlj6rpnIDopoHorr7nva7kuIDmrKEgb2Zmc2V0XG4gKi9cbnRpcHMucHJvdG90eXBlLnNldENsYXNzT2Zmc2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYoIXRoaXMuaGFzT3duUHJvcGVydHkoJ2hhc1NldENsYXNzT2Zmc2V0JykpIHtcbiAgICAgICAgdGhpcy5zZXRDbGFzc1Bvc2l0aW9uT2Zmc2V0KCk7XG4gICAgICAgIC8vIHRoaXMuc2V0Q2xhc3NTeW1ib2xPZmZzZXQoKTtcbiAgICAgICAgdGhpcy5oYXNTZXRDbGFzc09mZnNldCA9IHRydWU7XG4gICAgfVxufVxuXG4vKipcbiAqIOiuoeeul1RpcHPkvY3nva7vvIzmlK/mjIHnibnmrorlrprkvY3vvIzoh6rlrprkuYnlg4/ntKDnuqflrprkvY3lkoznmb7liIbmr5TlrprkvY3vvIzmlK/mjIF0b3AsbGVmdCxib3R0b20scmlnaHRcbiAqIOWumuS9jee7k+aenOaYr3RvcOWSjGxlZnTlrprkvY3vvIzkuI3ph4fnlKhib3R0b23lkoxyaWdodOWumuS9jVxuICogQEF1dGhvciAgIERldmluXG4gKiBARGF0ZVRpbWUgMjAyMC0wMS0wOVQyMTozNTo0NyswODAwXG4gKiBAcGFyYW0gICAge1ttaXhlZF19ICAgICAgICAgICAgICBteVBvc2l0aW9uICAgW3JlbGF0aXZlIHBvc2l0aW9uIG9iaiBvciBwb3NpdGlvbiBzdHJpbmddXG4gKiBAcGFyYW0gICAge1tCb29sZWFuXX0gICAgICAgICAgICBjYWxjdWxhdGVUaXAgW0lmIGZhbHNlLCBkbyBub3QgY2FsY3VsYXRlIFRpcHMgd2lkdGggYW5kIGhlaWdodF1cbiAqIEBwYXJhbSAgICB7W0Jvb2xlYW5dfSAgICAgICAgICAgIGZvcmNlICAgICAgICBbSWYgdHJ1ZSwgZ2V0IHBvc2l0aW9uIHN0eWxlIGZvcmNpYmx5IGV2ZW4gYmFzZSBlbGVtZW50IGlzIEJPRFldXG4gKiBAcmV0dXJuICAge1tPYmplY3RdfSAgICAgICAgICAgICBbUG9zaXRpb24gb2JqZWN0XVxuICovXG50aXBzLnByb3RvdHlwZS5nZXRQb3NpdGlvblN0eWxlID0gZnVuY3Rpb24obXlQb3NpdGlvbiwgY2FsY3VsYXRlVGlwLCBmb3JjZSkge1xuICAgIGlmKCgodGhpcy5pc0JvZHlFbGVtZW50KCkpICYmIHR5cGVvZiBteVBvc2l0aW9uID09IFwic3RyaW5nXCIpICYmICFmb3JjZSkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgbGV0IHRpcFBvc2l0aW9uID0geyAgICAgICAgIC8vdGlwIHBvc2l0aW9uXG4gICAgICAgIHRvcDogXCJhdXRvXCIsXG4gICAgICAgIGJvdHRvbTogXCJhdXRvXCIsXG4gICAgICAgIGxlZnQ6IFwiYXV0b1wiLFxuICAgICAgICByaWdodDogXCJhdXRvXCJcbiAgICB9O1xuXG4gICAgLy/orqHnrpd0aXDnmoTlnZDmoIdcbiAgICBpZih0eXBlb2YgbXlQb3NpdGlvbiA9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGlmKHRoaXMub3B0aW9ucy5kaXJlY3Rpb24gPT0gXCJvdXRlclwiKSB7XG4gICAgICAgICAgICB0aGlzLmdldFBvc1N0eWxlT3V0ZXIobXlQb3NpdGlvbiwgY2FsY3VsYXRlVGlwLCB0aXBQb3NpdGlvbik7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0UG9zU3R5bGVJbm5lcihteVBvc2l0aW9uLCBjYWxjdWxhdGVUaXAsIHRpcFBvc2l0aW9uKTtcbiAgICAgICAgfVxuICAgIH1lbHNlIHsgICAgIC8v6Ieq5a6a5LmJ5Z2Q5qCH77yM5pSv5oyB55m+5YiG5q+UXG4gICAgICAgIGxldCBwb3NTdHlsZVR5cGUgPSAnZ2V0UG9zU3R5bGUnICsgdGhpcy5vcHRpb25zLmRpcmVjdGlvbi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRoaXMub3B0aW9ucy5kaXJlY3Rpb24uc2xpY2UoMSk7XG4gICAgICAgIGlmKHRoaXNbcG9zU3R5bGVUeXBlXSkge1xuICAgICAgICAgICAgdGhpc1twb3NTdHlsZVR5cGVdKG15UG9zaXRpb24sIGNhbGN1bGF0ZVRpcCwgdGlwUG9zaXRpb24pO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdldFBvc1N0eWxlSW5uZXIobXlQb3NpdGlvbiwgY2FsY3VsYXRlVGlwLCB0aXBQb3NpdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNldFN0eWxlUG9zaXRpb25PZmZzZXQodGlwUG9zaXRpb24pO1xuICAgIC8vIHRoaXMuc2V0U3R5bGVTeW1ib2xPZmZzZXQodGlwUG9zaXRpb24pO1xuXG4gICAgcmV0dXJuIHRpcFBvc2l0aW9uO1xufTtcblxuLyoqXG4gKiDlhoXpg6jlrprkvY1cbiAqIOato+aVsCB0b3AsIGxlZnQsIGJvdHRvbSwgcmlnaHQg6KGo56S65b6A5Z+65YeG5YWD57Sg5YaF6YOo5pa55ZCR6LWw77yM6LSf5pWw6KGo56S655u45Y+N5pa55ZCRXG4gKi9cbnRpcHMucHJvdG90eXBlLmdldFBvc1N0eWxlSW5uZXIgPSBmdW5jdGlvbihteVBvc2l0aW9uLCBjYWxjdWxhdGVUaXAsIHRpcFBvc2l0aW9uKSB7XG4gICAgbGV0IHJlZ051bSA9IEMucmVnTnVtO1xuICAgIGxldCByZWdQZXIgPSBDLnJlZ1BlcjtcbiAgICBsZXQgcmVnUGVyTmVnYXRpdmUgPSBDLnJlZ1Blck5lZ2F0aXZlO1xuXG4gICAgbGV0IGVsZURldGFpbHMgPSB0aGlzLmdldEVsZW1lbnREZXRhaWxzKCk7XG5cbiAgICBsZXQgdGlwR3JvdXBXaWR0aCA9IGVsZURldGFpbHMudGlwR3JvdXBXaWR0aDtcbiAgICBsZXQgdGlwR3JvdXBIZWlnaHQgPSBlbGVEZXRhaWxzLnRpcEdyb3VwSGVpZ2h0O1xuICAgIGlmKGNhbGN1bGF0ZVRpcCA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGlwR3JvdXBXaWR0aCA9IDA7XG4gICAgICAgIHRpcEdyb3VwSGVpZ2h0ID0gMDtcbiAgICB9XG5cbiAgICBpZih0eXBlb2YgbXlQb3NpdGlvbiA9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHN3aXRjaChteVBvc2l0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIFwidG9wLWxlZnRcIiA6ICAgICAgICAgICAvL+WdkOagh+WcqOWfuuWHhuWFg+e0oOeahOW3puS4iuinkuS9jee9rlxuICAgICAgICAgICAgICAgIHRpcFBvc2l0aW9uLnRvcCA9IGVsZURldGFpbHMuYmFzZVRvcCArIGVsZURldGFpbHMuYmFzZUJvcmRlclRvcFdpZHRoO1xuICAgICAgICAgICAgICAgIHRpcFBvc2l0aW9uLmxlZnQgPSBlbGVEZXRhaWxzLmJhc2VMZWZ0ICsgZWxlRGV0YWlscy5iYXNlQm9yZGVyTGVmdFdpZHRoO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInRvcC1jZW50ZXJcIiA6ICAgICAgICAgLy/lnZDmoIflnKjln7rlh4blhYPntKDnmoTkuIrkuK3kvY3nva5cbiAgICAgICAgICAgICAgICB0aXBQb3NpdGlvbi50b3AgPSBlbGVEZXRhaWxzLmJhc2VUb3AgKyBlbGVEZXRhaWxzLmJhc2VCb3JkZXJUb3BXaWR0aDtcbiAgICAgICAgICAgICAgICB0aXBQb3NpdGlvbi5sZWZ0ID0gZWxlRGV0YWlscy5iYXNlTGVmdCArIChlbGVEZXRhaWxzLmJhc2VXaWR0aC8yICsgZWxlRGV0YWlscy5iYXNlQm9yZGVyTGVmdFdpZHRoIC0gdGlwR3JvdXBXaWR0aC8yKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ0b3AtcmlnaHRcIiA6ICAgICAgICAgIC8v5Z2Q5qCH5Zyo5Z+65YeG5YWD57Sg55qE5Y+z5LiK6KeS5L2N572uXG4gICAgICAgICAgICAgICAgdGlwUG9zaXRpb24udG9wID0gZWxlRGV0YWlscy5iYXNlVG9wICsgZWxlRGV0YWlscy5iYXNlQm9yZGVyVG9wV2lkdGg7XG4gICAgICAgICAgICAgICAgdGlwUG9zaXRpb24ubGVmdCA9IGVsZURldGFpbHMuYmFzZUxlZnQgKyAoZWxlRGV0YWlscy5iYXNlQm9yZGVyTGVmdFdpZHRoICsgZWxlRGV0YWlscy5iYXNlV2lkdGgpIC0gdGlwR3JvdXBXaWR0aDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJjZW50ZXItbGVmdFwiIDogICAgICAgIC8v5Z2Q5qCH5Zyo5Z+65YeG5YWD57Sg55qE5bem5Lit5L2N572uXG4gICAgICAgICAgICAgICAgdGlwUG9zaXRpb24udG9wID0gZWxlRGV0YWlscy5iYXNlVG9wICsgKGVsZURldGFpbHMuYmFzZUhlaWdodC8yICsgZWxlRGV0YWlscy5iYXNlQm9yZGVyVG9wV2lkdGggLSB0aXBHcm91cEhlaWdodC8yKTtcbiAgICAgICAgICAgICAgICB0aXBQb3NpdGlvbi5sZWZ0ID0gZWxlRGV0YWlscy5iYXNlTGVmdCArIGVsZURldGFpbHMuYmFzZUJvcmRlckxlZnRXaWR0aDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJtaWRkbGVcIiA6ICAgICAgICAgICAgIC8v5Z2Q5qCH5Zyo5Z+65YeG5YWD57Sg55qE5Lit6Ze05L2N572uXG4gICAgICAgICAgICAgICAgdGlwUG9zaXRpb24udG9wID0gZWxlRGV0YWlscy5iYXNlVG9wICsgKGVsZURldGFpbHMuYmFzZUhlaWdodC8yICsgZWxlRGV0YWlscy5iYXNlQm9yZGVyVG9wV2lkdGggLSB0aXBHcm91cEhlaWdodC8yKTtcbiAgICAgICAgICAgICAgICB0aXBQb3NpdGlvbi5sZWZ0ID0gZWxlRGV0YWlscy5iYXNlTGVmdCArIChlbGVEZXRhaWxzLmJhc2VXaWR0aC8yICsgZWxlRGV0YWlscy5iYXNlQm9yZGVyTGVmdFdpZHRoIC0gdGlwR3JvdXBXaWR0aC8yKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJjZW50ZXItcmlnaHRcIiA6ICAgICAgIC8v5Z2Q5qCH5Zyo5Z+65YeG5YWD57Sg55qE5Y+z5Lit5L2N572uXG4gICAgICAgICAgICAgICAgdGlwUG9zaXRpb24udG9wID0gZWxlRGV0YWlscy5iYXNlVG9wICsgKGVsZURldGFpbHMuYmFzZUhlaWdodC8yICsgZWxlRGV0YWlscy5iYXNlQm9yZGVyVG9wV2lkdGggLSB0aXBHcm91cEhlaWdodC8yKTtcbiAgICAgICAgICAgICAgICB0aXBQb3NpdGlvbi5sZWZ0ID0gZWxlRGV0YWlscy5iYXNlTGVmdCArIChlbGVEZXRhaWxzLmJhc2VCb3JkZXJMZWZ0V2lkdGggKyBlbGVEZXRhaWxzLmJhc2VXaWR0aCkgLSB0aXBHcm91cFdpZHRoO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImJvdHRvbS1sZWZ0XCIgOiAgICAgICAgLy/lnZDmoIflnKjln7rlh4blhYPntKDnmoTlt6bkuIvop5LkvY3nva5cbiAgICAgICAgICAgICAgICB0aXBQb3NpdGlvbi50b3AgPSBlbGVEZXRhaWxzLmJhc2VUb3AgKyAoZWxlRGV0YWlscy5iYXNlQm9yZGVyVG9wV2lkdGggKyBlbGVEZXRhaWxzLmJhc2VIZWlnaHQpIC0gdGlwR3JvdXBIZWlnaHQ7XG4gICAgICAgICAgICAgICAgdGlwUG9zaXRpb24ubGVmdCA9IGVsZURldGFpbHMuYmFzZUxlZnQgKyBlbGVEZXRhaWxzLmJhc2VCb3JkZXJMZWZ0V2lkdGg7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYm90dG9tLWNlbnRlclwiIDogICAgICAvL+WdkOagh+WcqOWfuuWHhuWFg+e0oOeahOS4i+S4reS9jee9rlxuICAgICAgICAgICAgICAgIHRpcFBvc2l0aW9uLnRvcCA9IGVsZURldGFpbHMuYmFzZVRvcCArIChlbGVEZXRhaWxzLmJhc2VCb3JkZXJUb3BXaWR0aCArIGVsZURldGFpbHMuYmFzZUhlaWdodCkgLSB0aXBHcm91cEhlaWdodDtcbiAgICAgICAgICAgICAgICB0aXBQb3NpdGlvbi5sZWZ0ID0gZWxlRGV0YWlscy5iYXNlTGVmdCArIChlbGVEZXRhaWxzLmJhc2VXaWR0aC8yICsgZWxlRGV0YWlscy5iYXNlQm9yZGVyTGVmdFdpZHRoIC0gdGlwR3JvdXBXaWR0aC8yKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJib3R0b20tcmlnaHRcIiA6ICAgICAgIC8v5Z2Q5qCH5Zyo5Z+65YeG5YWD57Sg55qE5Y+z5LiL6KeS5L2N572uXG4gICAgICAgICAgICAgICAgdGlwUG9zaXRpb24udG9wID0gZWxlRGV0YWlscy5iYXNlVG9wICsgKGVsZURldGFpbHMuYmFzZUJvcmRlclRvcFdpZHRoICsgZWxlRGV0YWlscy5iYXNlSGVpZ2h0KSAtIHRpcEdyb3VwSGVpZ2h0O1xuICAgICAgICAgICAgICAgIHRpcFBvc2l0aW9uLmxlZnQgPSBlbGVEZXRhaWxzLmJhc2VMZWZ0ICsgKGVsZURldGFpbHMuYmFzZUJvcmRlckxlZnRXaWR0aCArIGVsZURldGFpbHMuYmFzZVdpZHRoKSAtIHRpcEdyb3VwV2lkdGg7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0IDogICAgICAgICAgICAgICAgICAgLy/pu5jorqTlnZDmoIflnKjln7rlh4blhYPntKDnmoTkuK3pl7TkvY3nva5cbiAgICAgICAgICAgICAgICB0aXBQb3NpdGlvbi50b3AgPSBlbGVEZXRhaWxzLmJhc2VUb3AgKyAoZWxlRGV0YWlscy5iYXNlSGVpZ2h0LzIgKyBlbGVEZXRhaWxzLmJhc2VCb3JkZXJUb3BXaWR0aCAtIHRpcEdyb3VwSGVpZ2h0LzIpO1xuICAgICAgICAgICAgICAgIHRpcFBvc2l0aW9uLmxlZnQgPSBlbGVEZXRhaWxzLmJhc2VMZWZ0ICsgKGVsZURldGFpbHMuYmFzZVdpZHRoLzIgKyBlbGVEZXRhaWxzLmJhc2VCb3JkZXJMZWZ0V2lkdGggLSB0aXBHcm91cFdpZHRoLzIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRpcFBvc2l0aW9uO1xuICAgIH1cblxuICAgIGlmKG15UG9zaXRpb24uaGFzT3duUHJvcGVydHkoJ2JvdHRvbScpICYmIHJlZ051bS50ZXN0KG15UG9zaXRpb24uYm90dG9tKSkge1xuICAgICAgICB0aXBQb3NpdGlvbi50b3AgPSBlbGVEZXRhaWxzLmJhc2VUb3AgKyBlbGVEZXRhaWxzLmJhc2VCb3JkZXJUb3BXaWR0aCArIGVsZURldGFpbHMuYmFzZUhlaWdodCAtIHRpcEdyb3VwSGVpZ2h0IC0gcGFyc2VGbG9hdChteVBvc2l0aW9uLmJvdHRvbSk7XG4gICAgfWVsc2UgaWYobXlQb3NpdGlvbi5oYXNPd25Qcm9wZXJ0eSgnYm90dG9tJykgJiYgcmVnUGVyLnRlc3QobXlQb3NpdGlvbi5ib3R0b20pKSB7XG4gICAgICAgIGxldCBib3R0b20gPSAoZWxlRGV0YWlscy5iYXNlSGVpZ2h0IC0gdGlwR3JvdXBIZWlnaHQpICogcGFyc2VGbG9hdChteVBvc2l0aW9uLmJvdHRvbSkvMTAwO1xuICAgICAgICB0aXBQb3NpdGlvbi50b3AgPSBlbGVEZXRhaWxzLmJhc2VUb3AgKyBlbGVEZXRhaWxzLmJhc2VCb3JkZXJUb3BXaWR0aCArIGVsZURldGFpbHMuYmFzZUhlaWdodCAtIHRpcEdyb3VwSGVpZ2h0IC0gYm90dG9tO1xuICAgIH1lbHNlIGlmKG15UG9zaXRpb24uaGFzT3duUHJvcGVydHkoJ3RvcCcpICYmIHJlZ051bS50ZXN0KG15UG9zaXRpb24udG9wKSkge1xuICAgICAgICB0aXBQb3NpdGlvbi50b3AgPSBlbGVEZXRhaWxzLmJhc2VUb3AgKyBlbGVEZXRhaWxzLmJhc2VCb3JkZXJUb3BXaWR0aCArIHBhcnNlRmxvYXQobXlQb3NpdGlvbi50b3ApO1xuICAgIH1lbHNlIGlmKG15UG9zaXRpb24uaGFzT3duUHJvcGVydHkoJ3RvcCcpICYmIHJlZ1Blci50ZXN0KG15UG9zaXRpb24udG9wKSkge1xuICAgICAgICBsZXQgdG9wID0gKGVsZURldGFpbHMuYmFzZUhlaWdodCAtIHRpcEdyb3VwSGVpZ2h0KSAqIHBhcnNlRmxvYXQobXlQb3NpdGlvbi50b3ApLzEwMDtcbiAgICAgICAgdGlwUG9zaXRpb24udG9wID0gZWxlRGV0YWlscy5iYXNlVG9wICsgZWxlRGV0YWlscy5iYXNlQm9yZGVyVG9wV2lkdGggKyB0b3A7XG4gICAgfVxuXG4gICAgaWYobXlQb3NpdGlvbi5oYXNPd25Qcm9wZXJ0eSgncmlnaHQnKSAmJiByZWdOdW0udGVzdChteVBvc2l0aW9uLnJpZ2h0KSkge1xuICAgICAgICB0aXBQb3NpdGlvbi5sZWZ0ID0gZWxlRGV0YWlscy5iYXNlTGVmdCArIGVsZURldGFpbHMuYmFzZUJvcmRlckxlZnRXaWR0aCArIGVsZURldGFpbHMuYmFzZVdpZHRoIC0gdGlwR3JvdXBXaWR0aCAtIHBhcnNlRmxvYXQobXlQb3NpdGlvbi5yaWdodCk7XG4gICAgfWVsc2UgaWYobXlQb3NpdGlvbi5oYXNPd25Qcm9wZXJ0eSgncmlnaHQnKSAmJiByZWdQZXIudGVzdChteVBvc2l0aW9uLnJpZ2h0KSkge1xuICAgICAgICBsZXQgcmlnaHQgPSAoZWxlRGV0YWlscy5iYXNlV2lkdGggLSB0aXBHcm91cFdpZHRoKSAqIHBhcnNlRmxvYXQobXlQb3NpdGlvbi5yaWdodCkvMTAwO1xuICAgICAgICB0aXBQb3NpdGlvbi5sZWZ0ID0gZWxlRGV0YWlscy5iYXNlTGVmdCArIGVsZURldGFpbHMuYmFzZUJvcmRlckxlZnRXaWR0aCArIGVsZURldGFpbHMuYmFzZVdpZHRoIC0gdGlwR3JvdXBXaWR0aCAtIHJpZ2h0O1xuICAgIH1lbHNlIGlmKG15UG9zaXRpb24uaGFzT3duUHJvcGVydHkoJ2xlZnQnKSAmJiByZWdOdW0udGVzdChteVBvc2l0aW9uLmxlZnQpKSB7XG4gICAgICAgIHRpcFBvc2l0aW9uLmxlZnQgPSBlbGVEZXRhaWxzLmJhc2VMZWZ0ICsgZWxlRGV0YWlscy5iYXNlQm9yZGVyTGVmdFdpZHRoICsgcGFyc2VGbG9hdChteVBvc2l0aW9uLmxlZnQpO1xuICAgIH1lbHNlIGlmKG15UG9zaXRpb24uaGFzT3duUHJvcGVydHkoJ2xlZnQnKSAmJiByZWdQZXIudGVzdChteVBvc2l0aW9uLmxlZnQpKSB7XG4gICAgICAgIGxldCBsZWZ0ID0gKGVsZURldGFpbHMuYmFzZVdpZHRoIC0gdGlwR3JvdXBXaWR0aCkgKiBwYXJzZUZsb2F0KG15UG9zaXRpb24ubGVmdCkvMTAwO1xuICAgICAgICB0aXBQb3NpdGlvbi5sZWZ0ID0gZWxlRGV0YWlscy5iYXNlTGVmdCArIGVsZURldGFpbHMuYmFzZUJvcmRlckxlZnRXaWR0aCArIGxlZnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRpcFBvc2l0aW9uO1xufVxuXG4vKipcbiAqIOaZrumAmuWumuS9jVxuICog5q2j5pWwIHRvcCwgbGVmdCDooajnpLrlvoDln7rlh4blhYPntKDlhoXpg6jmlrnlkJHotbDvvIzotJ/mlbDooajnpLrnm7jlj43mlrnlkJHvvIzkuI7lhoXpg6jlrprkvY3nm7jlkIxcbiAqIOato+aVsCBib3R0b23vvIxyaWdodCDooajnpLrku6Xln7rlh4blhYPntKDlpJbpg6jmlrnlkJHotbDvvIzotJ/mlbDooajnpLrnm7jlj43mlrnlkJHvvIzkuI7lhoXpg6jmlrnlkJHnm7jlj41cbiAqL1xudGlwcy5wcm90b3R5cGUuZ2V0UG9zU3R5bGVOb3JtYWwgPSBmdW5jdGlvbihteVBvc2l0aW9uLCBjYWxjdWxhdGVUaXAsIHRpcFBvc2l0aW9uKSB7XG4gICAgbGV0IHJlZ051bSA9IEMucmVnTnVtO1xuICAgIGxldCByZWdQZXIgPSBDLnJlZ1BlcjtcbiAgICBsZXQgcmVnUGVyTmVnYXRpdmUgPSBDLnJlZ1Blck5lZ2F0aXZlO1xuXG4gICAgbGV0IGVsZURldGFpbHMgPSB0aGlzLmdldEVsZW1lbnREZXRhaWxzKCk7XG5cbiAgICBsZXQgdGlwR3JvdXBXaWR0aCA9IGVsZURldGFpbHMudGlwR3JvdXBXaWR0aDtcbiAgICBsZXQgdGlwR3JvdXBIZWlnaHQgPSBlbGVEZXRhaWxzLnRpcEdyb3VwSGVpZ2h0O1xuICAgIGlmKGNhbGN1bGF0ZVRpcCA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGlwR3JvdXBXaWR0aCA9IDA7XG4gICAgICAgIHRpcEdyb3VwSGVpZ2h0ID0gMDtcbiAgICB9XG5cbiAgICBpZihteVBvc2l0aW9uLmhhc093blByb3BlcnR5KCdib3R0b20nKSAgJiYgcmVnTnVtLnRlc3QobXlQb3NpdGlvbi5ib3R0b20pKSB7XG4gICAgICAgIHRpcFBvc2l0aW9uLnRvcCA9IGVsZURldGFpbHMuYmFzZVRvcCArIGVsZURldGFpbHMuYmFzZUhlaWdodCArIGVsZURldGFpbHMuYmFzZUJvcmRlclRvcFdpZHRoICsgZWxlRGV0YWlscy5iYXNlQm9yZGVyQm90dG9tV2lkdGggKyBwYXJzZUZsb2F0KG15UG9zaXRpb24uYm90dG9tKTtcbiAgICB9ZWxzZSBpZihteVBvc2l0aW9uLmhhc093blByb3BlcnR5KCdib3R0b20nKSAmJiByZWdQZXIudGVzdChteVBvc2l0aW9uLmJvdHRvbSkpIHtcbiAgICAgICAgbGV0IGJhc2VIZWlnaHQgPSBDLm51bUFkZHMoZWxlRGV0YWlscy5iYXNlSGVpZ2h0LCBlbGVEZXRhaWxzLmJhc2VCb3JkZXJUb3BXaWR0aCwgZWxlRGV0YWlscy5iYXNlQm9yZGVyQm90dG9tV2lkdGgpO1xuICAgICAgICBsZXQgYm90dG9tID0gQy5udW1NdWwoYmFzZUhlaWdodCwgQy5udW1EaXYocGFyc2VGbG9hdChteVBvc2l0aW9uLmJvdHRvbSksIDEwMCkpO1xuICAgICAgICB0aXBQb3NpdGlvbi50b3AgPSBDLm51bUFkZHMoZWxlRGV0YWlscy5iYXNlVG9wLCBiYXNlSGVpZ2h0LCBib3R0b20pO1xuICAgIH1lbHNlIGlmKG15UG9zaXRpb24uaGFzT3duUHJvcGVydHkoJ3RvcCcpICYmIHJlZ051bS50ZXN0KG15UG9zaXRpb24udG9wKSkge1xuICAgICAgICB0aXBQb3NpdGlvbi50b3AgPSBlbGVEZXRhaWxzLmJhc2VUb3AgKyBlbGVEZXRhaWxzLmJhc2VCb3JkZXJUb3BXaWR0aCArIHBhcnNlRmxvYXQobXlQb3NpdGlvbi50b3ApO1xuICAgIH1lbHNlIGlmKG15UG9zaXRpb24uaGFzT3duUHJvcGVydHkoJ3RvcCcpICYmIHJlZ1Blci50ZXN0KG15UG9zaXRpb24udG9wKSkge1xuICAgICAgICBsZXQgdG9wID0gKGVsZURldGFpbHMuYmFzZUhlaWdodCAtIHRpcEdyb3VwSGVpZ2h0KSAqIHBhcnNlRmxvYXQobXlQb3NpdGlvbi50b3ApLzEwMDtcbiAgICAgICAgdGlwUG9zaXRpb24udG9wID0gZWxlRGV0YWlscy5iYXNlVG9wICsgZWxlRGV0YWlscy5iYXNlQm9yZGVyVG9wV2lkdGggKyB0b3A7XG4gICAgfVxuXG4gICAgaWYobXlQb3NpdGlvbi5oYXNPd25Qcm9wZXJ0eSgncmlnaHQnKSAgJiYgcmVnTnVtLnRlc3QobXlQb3NpdGlvbi5yaWdodCkpIHtcbiAgICAgICAgdGlwUG9zaXRpb24ubGVmdCA9IEMubnVtQWRkcyhlbGVEZXRhaWxzLmJhc2VMZWZ0LCBlbGVEZXRhaWxzLmJhc2VXaWR0aCwgZWxlRGV0YWlscy5iYXNlQm9yZGVyTGVmdFdpZHRoLCBlbGVEZXRhaWxzLmJhc2VCb3JkZXJSaWdodFdpZHRoLCBwYXJzZUZsb2F0KG15UG9zaXRpb24ucmlnaHQpKTtcbiAgICB9ZWxzZSBpZihteVBvc2l0aW9uLmhhc093blByb3BlcnR5KCdyaWdodCcpICYmIHJlZ1Blci50ZXN0KG15UG9zaXRpb24ucmlnaHQpKSB7XG4gICAgICAgIGxldCBiYXNlV2lkdGggPSBDLm51bUFkZHMoZWxlRGV0YWlscy5iYXNlV2lkdGgsIGVsZURldGFpbHMuYmFzZUJvcmRlckxlZnRXaWR0aCwgZWxlRGV0YWlscy5iYXNlQm9yZGVyUmlnaHRXaWR0aCk7XG4gICAgICAgIGxldCByaWdodCA9IEMubnVtTXVsKGJhc2VXaWR0aCwgQy5udW1EaXYocGFyc2VGbG9hdChteVBvc2l0aW9uLnJpZ2h0KSwgMTAwKSk7XG4gICAgICAgIHRpcFBvc2l0aW9uLmxlZnQgPSBDLm51bUFkZHMoZWxlRGV0YWlscy5iYXNlTGVmdCwgYmFzZVdpZHRoLCByaWdodCk7XG4gICAgfWVsc2UgaWYobXlQb3NpdGlvbi5oYXNPd25Qcm9wZXJ0eSgnbGVmdCcpICYmIHJlZ051bS50ZXN0KG15UG9zaXRpb24ubGVmdCkpIHtcbiAgICAgICAgdGlwUG9zaXRpb24ubGVmdCA9IGVsZURldGFpbHMuYmFzZUxlZnQgKyBlbGVEZXRhaWxzLmJhc2VCb3JkZXJMZWZ0V2lkdGggKyBwYXJzZUZsb2F0KG15UG9zaXRpb24ubGVmdCk7XG4gICAgfWVsc2UgaWYobXlQb3NpdGlvbi5oYXNPd25Qcm9wZXJ0eSgnbGVmdCcpICYmIHJlZ1Blci50ZXN0KG15UG9zaXRpb24ubGVmdCkpIHtcbiAgICAgICAgbGV0IGxlZnQgPSAoZWxlRGV0YWlscy5iYXNlV2lkdGggLSB0aXBHcm91cFdpZHRoKSAqIHBhcnNlRmxvYXQobXlQb3NpdGlvbi5sZWZ0KS8xMDA7XG4gICAgICAgIHRpcFBvc2l0aW9uLmxlZnQgPSBlbGVEZXRhaWxzLmJhc2VMZWZ0ICsgZWxlRGV0YWlscy5iYXNlQm9yZGVyTGVmdFdpZHRoICsgbGVmdDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGlwUG9zaXRpb247XG59XG5cbi8qKlxuICog5aSW6YOo5a6a5L2N77yM5omA5pyJ5a6a5L2N5Lul5Z+65YeG5YWD57Sg5aSW5Li65YeG77yM55m+5YiG5q+U5Z+65YeG5Lmf5piv5Z+65YeG5YWD57SgXG4gKiB0b3AsIGxlZnQsIGJvdHRvbSwgcmlnaHQg6YO95piv5Lul5Z+65YeG5YWD57Sg55qE5a+55bqU6L655qGG5Li65YeG77yM5LiU5b+955Wl6L655qGG5Y6a5bqmXG4gKiDmr5TlpoJ0b3DvvIzmraPmlbBY5pe277yM6KGo56S6VGlwIOW6lemDqOmrmOS6juWfuuWHhuWFg+e0oOeahOmhtumDqCBY77yb6LSf5pWwLVjml7bvvIzooajnpLrln7rlh4blhYPntKDpobbpg6jkvY7kuo5UaXDpobbpg6ggWFxuICovXG50aXBzLnByb3RvdHlwZS5nZXRQb3NTdHlsZU91dHNpZGUgPSBmdW5jdGlvbihteVBvc2l0aW9uLCBjYWxjdWxhdGVUaXAsIHRpcFBvc2l0aW9uKSB7XG4gICAgbGV0IHJlZ051bSA9IEMucmVnTnVtO1xuICAgIGxldCByZWdOdW1OZWdhdGl2ZSA9IEMucmVnTnVtTmVnYXRpdmU7XG4gICAgbGV0IHJlZ1BlciA9IEMucmVnUGVyO1xuICAgIGxldCByZWdQZXJOZWdhdGl2ZSA9IEMucmVnUGVyTmVnYXRpdmU7XG5cbiAgICBsZXQgZWxlRGV0YWlscyA9IHRoaXMuZ2V0RWxlbWVudERldGFpbHMoKTtcblxuICAgIGxldCB0aXBHcm91cFdpZHRoID0gZWxlRGV0YWlscy50aXBHcm91cFdpZHRoO1xuICAgIGxldCB0aXBHcm91cEhlaWdodCA9IGVsZURldGFpbHMudGlwR3JvdXBIZWlnaHQ7XG4gICAgaWYoY2FsY3VsYXRlVGlwID09PSBmYWxzZSkge1xuICAgICAgICB0aXBHcm91cFdpZHRoID0gMDtcbiAgICAgICAgdGlwR3JvdXBIZWlnaHQgPSAwO1xuICAgIH1cblxuICAgIGlmKG15UG9zaXRpb24uaGFzT3duUHJvcGVydHkoJ2JvdHRvbScpICYmIHJlZ051bS50ZXN0KG15UG9zaXRpb24uYm90dG9tKSkge1xuICAgICAgICB0aXBQb3NpdGlvbi50b3AgPSBlbGVEZXRhaWxzLmJhc2VUb3AgKyBlbGVEZXRhaWxzLmJhc2VCb3JkZXJUb3BXaWR0aCArIGVsZURldGFpbHMuYmFzZUhlaWdodCArIGVsZURldGFpbHMuYmFzZUJvcmRlckJvdHRvbVdpZHRoICsgcGFyc2VGbG9hdChteVBvc2l0aW9uLmJvdHRvbSk7XG4gICAgICAgIGlmKHJlZ051bU5lZ2F0aXZlLnRlc3QobXlQb3NpdGlvbi5ib3R0b20pKSB7XG4gICAgICAgICAgICB0aXBQb3NpdGlvbi50b3AgLT0gZWxlRGV0YWlscy5iYXNlQm9yZGVyQm90dG9tV2lkdGg7XG4gICAgICAgIH1cbiAgICB9ZWxzZSBpZihteVBvc2l0aW9uLmhhc093blByb3BlcnR5KCdib3R0b20nKSAmJiByZWdQZXIudGVzdChteVBvc2l0aW9uLmJvdHRvbSkpIHtcbiAgICAgICAgbGV0IGJvdHRvbSA9IGVsZURldGFpbHMuYmFzZUhlaWdodCAqIHBhcnNlRmxvYXQobXlQb3NpdGlvbi5ib3R0b20pLzEwMDtcbiAgICAgICAgdGlwUG9zaXRpb24udG9wID0gZWxlRGV0YWlscy5iYXNlVG9wICsgZWxlRGV0YWlscy5iYXNlQm9yZGVyVG9wV2lkdGggKyBlbGVEZXRhaWxzLmJhc2VCb3JkZXJCb3R0b21XaWR0aCArIGVsZURldGFpbHMuYmFzZUhlaWdodCArIGJvdHRvbTtcbiAgICAgICAgaWYocmVnUGVyTmVnYXRpdmUudGVzdChteVBvc2l0aW9uLmJvdHRvbSkpIHtcbiAgICAgICAgICAgIHRpcFBvc2l0aW9uLnRvcCAtPSBlbGVEZXRhaWxzLmJhc2VCb3JkZXJCb3R0b21XaWR0aDtcbiAgICAgICAgfVxuICAgIH1lbHNlIGlmKG15UG9zaXRpb24uaGFzT3duUHJvcGVydHkoJ3RvcCcpICYmIHJlZ051bS50ZXN0KG15UG9zaXRpb24udG9wKSkge1xuICAgICAgICB0aXBQb3NpdGlvbi50b3AgPSBlbGVEZXRhaWxzLmJhc2VUb3AgLSB0aXBHcm91cEhlaWdodCAtIHBhcnNlRmxvYXQobXlQb3NpdGlvbi50b3ApO1xuICAgICAgICBpZihyZWdOdW1OZWdhdGl2ZS50ZXN0KG15UG9zaXRpb24udG9wKSkge1xuICAgICAgICAgICAgdGlwUG9zaXRpb24udG9wID0gdGlwUG9zaXRpb24udG9wICsgdGlwR3JvdXBIZWlnaHQgKyBlbGVEZXRhaWxzLmJhc2VCb3JkZXJUb3BXaWR0aDtcbiAgICAgICAgfVxuICAgIH1lbHNlIGlmKG15UG9zaXRpb24uaGFzT3duUHJvcGVydHkoJ3RvcCcpICYmIHJlZ1Blci50ZXN0KG15UG9zaXRpb24udG9wKSkge1xuICAgICAgICBsZXQgdG9wID0gZWxlRGV0YWlscy5iYXNlSGVpZ2h0ICogcGFyc2VGbG9hdChteVBvc2l0aW9uLnRvcCkvMTAwO1xuICAgICAgICB0aXBQb3NpdGlvbi50b3AgPSBlbGVEZXRhaWxzLmJhc2VUb3AgLSB0b3A7XG4gICAgICAgIGlmKHJlZ1Blck5lZ2F0aXZlLnRlc3QobXlQb3NpdGlvbi50b3ApKSB7XG4gICAgICAgICAgICB0aXBQb3NpdGlvbi50b3AgPSB0aXBQb3NpdGlvbi50b3AgKyBlbGVEZXRhaWxzLmJhc2VCb3JkZXJUb3BXaWR0aDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmKG15UG9zaXRpb24uaGFzT3duUHJvcGVydHkoJ3JpZ2h0JykgJiYgcmVnTnVtLnRlc3QobXlQb3NpdGlvbi5yaWdodCkpIHtcbiAgICAgICAgdGlwUG9zaXRpb24ubGVmdCA9IGVsZURldGFpbHMuYmFzZUxlZnQgKyBlbGVEZXRhaWxzLmJhc2VCb3JkZXJMZWZ0V2lkdGggKyBlbGVEZXRhaWxzLmJhc2VXaWR0aCArIGVsZURldGFpbHMuYmFzZUJvcmRlclJpZ2h0V2lkdGggKyBwYXJzZUZsb2F0KG15UG9zaXRpb24ucmlnaHQpO1xuICAgICAgICBpZihyZWdOdW1OZWdhdGl2ZS50ZXN0KG15UG9zaXRpb24ucmlnaHQpKSB7XG4gICAgICAgICAgICB0aXBQb3NpdGlvbi5sZWZ0ID0gdGlwUG9zaXRpb24ubGVmdCAtIHRpcEdyb3VwV2lkdGggLSBlbGVEZXRhaWxzLmJhc2VCb3JkZXJSaWdodFdpZHRoO1xuICAgICAgICB9XG4gICAgfWVsc2UgaWYobXlQb3NpdGlvbi5oYXNPd25Qcm9wZXJ0eSgncmlnaHQnKSAmJiByZWdQZXIudGVzdChteVBvc2l0aW9uLnJpZ2h0KSkge1xuICAgICAgICBsZXQgcmlnaHQgPSBlbGVEZXRhaWxzLmJhc2VXaWR0aCAqIHBhcnNlRmxvYXQobXlQb3NpdGlvbi5yaWdodCkvMTAwO1xuICAgICAgICB0aXBQb3NpdGlvbi5sZWZ0ID0gZWxlRGV0YWlscy5iYXNlTGVmdCArIGVsZURldGFpbHMuYmFzZUJvcmRlckxlZnRXaWR0aCArIGVsZURldGFpbHMuYmFzZVdpZHRoICsgcmlnaHQ7XG4gICAgICAgIGlmKHJlZ1Blck5lZ2F0aXZlLnRlc3QobXlQb3NpdGlvbi5yaWdodCkpIHtcbiAgICAgICAgICAgIHRpcFBvc2l0aW9uLmxlZnQgPSB0aXBQb3NpdGlvbi5sZWZ0IC0gdGlwR3JvdXBXaWR0aCAtIGVsZURldGFpbHMuYmFzZUJvcmRlclJpZ2h0V2lkdGg7XG4gICAgICAgIH1cbiAgICB9ZWxzZSBpZihteVBvc2l0aW9uLmhhc093blByb3BlcnR5KCdsZWZ0JykgJiYgcmVnTnVtLnRlc3QobXlQb3NpdGlvbi5sZWZ0KSkge1xuICAgICAgICB0aXBQb3NpdGlvbi5sZWZ0ID0gZWxlRGV0YWlscy5iYXNlTGVmdCAtIHRpcEdyb3VwV2lkdGggLSBwYXJzZUZsb2F0KG15UG9zaXRpb24ubGVmdCk7XG4gICAgICAgIGlmKHJlZ051bU5lZ2F0aXZlLnRlc3QobXlQb3NpdGlvbi5sZWZ0KSkge1xuICAgICAgICAgICAgdGlwUG9zaXRpb24ubGVmdCA9IHRpcFBvc2l0aW9uLmxlZnQgKyB0aXBHcm91cFdpZHRoICsgZWxlRGV0YWlscy5iYXNlQm9yZGVyTGVmdFdpZHRoO1xuICAgICAgICB9XG4gICAgfWVsc2UgaWYobXlQb3NpdGlvbi5oYXNPd25Qcm9wZXJ0eSgnbGVmdCcpICYmIHJlZ1Blci50ZXN0KG15UG9zaXRpb24ubGVmdCkpIHtcbiAgICAgICAgbGV0IGxlZnQgPSBlbGVEZXRhaWxzLmJhc2VXaWR0aCAqIHBhcnNlRmxvYXQobXlQb3NpdGlvbi5sZWZ0KS8xMDA7XG4gICAgICAgIHRpcFBvc2l0aW9uLmxlZnQgPSBlbGVEZXRhaWxzLmJhc2VMZWZ0IC0gdGlwR3JvdXBXaWR0aCAtIGxlZnQ7XG4gICAgICAgIGlmKHJlZ1Blck5lZ2F0aXZlLnRlc3QobXlQb3NpdGlvbi5sZWZ0KSkge1xuICAgICAgICAgICAgdGlwUG9zaXRpb24ubGVmdCA9IHRpcFBvc2l0aW9uLmxlZnQgKyB0aXBHcm91cFdpZHRoICsgZWxlRGV0YWlscy5iYXNlQm9yZGVyTGVmdFdpZHRoO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRpcFBvc2l0aW9uO1xufVxuXG4vKipcbiAqIOWkluWbtOWumuS9jVxuICog5b2T55m+5YiG5q+U5Li65q2j5pWw5pe2KOS7juWklumDqOi/nOemu+WfuuWHhuWFg+e0oCnvvIznmb7liIbmr5Tln7rlh4bmmK9UaXBz5YWD57SgXG4gKiDlvZPnmb7liIbmr5TkuLrotJ/mlbDml7Yo5LuO5YaF6YOo6L+c56a75Z+65YeG5YWD57SgKe+8jOeZvuWIhuavlOWfuuWHhuaYr+WfuuWHhuWFg+e0oFxuICogdG9wLCBsZWZ0LCBib3R0b20sIHJpZ2h0IOmDveaYr+S7peWfuuWHhuWFg+e0oOeahOWvueW6lOi+ueahhuS4uuWHhu+8jOS4lOW/veeVpei+ueahhuWOmuW6plxuICog5q+U5aaCdG9w77yM5q2j5pWwWCXml7bvvIzooajnpLpUaXAg6aG26YOo6auY5LqO5Z+65YeG5YWD57Sg55qE6aG26YOoIFRpcHPpq5jluqYqWCXvvJvotJ/mlbAtWCXml7bvvIzooajnpLpUaXAg5Lit5b+D5L2O5LqO5Z+65YeG5YWD57Sg55qE6aG26YOoIOWfuuWHhuWFg+e0oOmrmOW6pipYJVxuICovXG50aXBzLnByb3RvdHlwZS5nZXRQb3NTdHlsZU91dGVyID0gZnVuY3Rpb24obXlQb3NpdGlvbiwgY2FsY3VsYXRlVGlwLCB0aXBQb3NpdGlvbikge1xuICAgIGxldCByZWdOdW0gPSBDLnJlZ051bTtcbiAgICBsZXQgcmVnTnVtTmVnYXRpdmUgPSBDLnJlZ051bU5lZ2F0aXZlO1xuICAgIGxldCByZWdQZXIgPSBDLnJlZ1BlcjtcbiAgICBsZXQgcmVnUGVyTmVnYXRpdmUgPSBDLnJlZ1Blck5lZ2F0aXZlO1xuXG4gICAgbGV0IGVsZURldGFpbHMgPSB0aGlzLmdldEVsZW1lbnREZXRhaWxzKCk7XG5cbiAgICBsZXQgdGlwR3JvdXBXaWR0aCA9IGVsZURldGFpbHMudGlwR3JvdXBXaWR0aDtcbiAgICBsZXQgdGlwR3JvdXBIZWlnaHQgPSBlbGVEZXRhaWxzLnRpcEdyb3VwSGVpZ2h0O1xuICAgIGlmKGNhbGN1bGF0ZVRpcCA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGlwR3JvdXBXaWR0aCA9IDA7XG4gICAgICAgIHRpcEdyb3VwSGVpZ2h0ID0gMDtcbiAgICB9XG5cbiAgICBpZih0eXBlb2YgbXlQb3NpdGlvbiA9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGxldCBteVBvc2l0aW9uVG1wID0ge307XG4gICAgICAgIHN3aXRjaChteVBvc2l0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIFwidG9wLWxlZnRcIiA6ICAgICAgICAgICAvL+WdkOagh+WcqOWfuuWHhuWFg+e0oOeahOW3puS4iuinkuS9jee9rlxuICAgICAgICAgICAgICAgIC8vIHRpcFBvc2l0aW9uLnRvcCA9IGVsZURldGFpbHMuYmFzZVRvcCAtIHRpcEdyb3VwSGVpZ2h0ICogKDEwMCUpLzEwMDtcbiAgICAgICAgICAgICAgICAvLyB0aXBQb3NpdGlvbi5sZWZ0ID0gZWxlRGV0YWlscy5iYXNlTGVmdCAtIHRpcEdyb3VwV2lkdGggKiAoMTAwJSkvMTAwO1xuICAgICAgICAgICAgICAgIG15UG9zaXRpb25UbXAudG9wID0gXCIxMDAlXCI7XG4gICAgICAgICAgICAgICAgbXlQb3NpdGlvblRtcC5sZWZ0ID0gXCItMCVcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ0b3AtY2VudGVyXCIgOiAgICAgICAgIC8v5Z2Q5qCH5Zyo5Z+65YeG5YWD57Sg55qE5LiK5Lit5L2N572uXG4gICAgICAgICAgICAgICAgbXlQb3NpdGlvblRtcC50b3AgPSBcIjEwMCVcIjtcbiAgICAgICAgICAgICAgICBteVBvc2l0aW9uVG1wLmxlZnQgPSBcIi01MCVcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ0b3AtcmlnaHRcIiA6ICAgICAgICAgIC8v5Z2Q5qCH5Zyo5Z+65YeG5YWD57Sg55qE5Y+z5LiK6KeS5L2N572uXG4gICAgICAgICAgICAgICAgbXlQb3NpdGlvblRtcC50b3AgPSBcIjEwMCVcIjtcbiAgICAgICAgICAgICAgICBteVBvc2l0aW9uVG1wLmxlZnQgPSBcIi0xMDAlXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiY2VudGVyLWxlZnRcIiA6ICAgICAgICAvL+WdkOagh+WcqOWfuuWHhuWFg+e0oOeahOW3puS4reS9jee9rlxuICAgICAgICAgICAgICAgIG15UG9zaXRpb25UbXAudG9wID0gXCItNTAlXCI7XG4gICAgICAgICAgICAgICAgbXlQb3NpdGlvblRtcC5sZWZ0ID0gXCIwXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibWlkZGxlXCIgOiAgICAgICAgICAgICAvL+WdkOagh+WcqOWfuuWHhuWFg+e0oOeahOS4remXtOS9jee9rlxuICAgICAgICAgICAgICAgIG15UG9zaXRpb25UbXAudG9wID0gXCItNTAlXCI7XG4gICAgICAgICAgICAgICAgbXlQb3NpdGlvblRtcC5sZWZ0ID0gXCItNTAlXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiY2VudGVyLXJpZ2h0XCIgOiAgICAgICAvL+WdkOagh+WcqOWfuuWHhuWFg+e0oOeahOWPs+S4reS9jee9rlxuICAgICAgICAgICAgICAgIG15UG9zaXRpb25UbXAudG9wID0gXCItNTAlXCI7XG4gICAgICAgICAgICAgICAgbXlQb3NpdGlvblRtcC5yaWdodCA9IFwiMTAwJVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImJvdHRvbS1sZWZ0XCIgOiAgICAgICAgLy/lnZDmoIflnKjln7rlh4blhYPntKDnmoTlt6bkuIvop5LkvY3nva5cbiAgICAgICAgICAgICAgICBteVBvc2l0aW9uVG1wLmJvdHRvbSA9IFwiMTAwJVwiO1xuICAgICAgICAgICAgICAgIG15UG9zaXRpb25UbXAubGVmdCA9IFwiLTAlXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYm90dG9tLWNlbnRlclwiIDogICAgICAvL+WdkOagh+WcqOWfuuWHhuWFg+e0oOeahOS4i+S4reS9jee9rlxuICAgICAgICAgICAgICAgIG15UG9zaXRpb25UbXAuYm90dG9tID0gXCIxMDAlXCI7XG4gICAgICAgICAgICAgICAgbXlQb3NpdGlvblRtcC5sZWZ0ID0gXCItNTAlXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYm90dG9tLXJpZ2h0XCIgOiAgICAgICAvL+WdkOagh+WcqOWfuuWHhuWFg+e0oOeahOWPs+S4i+inkuS9jee9rlxuICAgICAgICAgICAgICAgIG15UG9zaXRpb25UbXAuYm90dG9tID0gXCIxMDAlXCI7XG4gICAgICAgICAgICAgICAgbXlQb3NpdGlvblRtcC5sZWZ0ID0gXCItMTAwJVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImxlZnQtdG9wXCIgOiAgICAgICAvL+WdkOagh+WcqOWfuuWHhuWFg+e0oOeahOWPs+S4i+inkuS9jee9rlxuICAgICAgICAgICAgICAgIG15UG9zaXRpb25UbXAuYm90dG9tID0gXCItMTAwJVwiO1xuICAgICAgICAgICAgICAgIG15UG9zaXRpb25UbXAubGVmdCA9IFwiMFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImxlZnQtYm90dG9tXCIgOiAgICAgICAvL+WdkOagh+WcqOWfuuWHhuWFg+e0oOeahOWPs+S4i+inkuS9jee9rlxuICAgICAgICAgICAgICAgIG15UG9zaXRpb25UbXAudG9wID0gXCItMTAwJVwiO1xuICAgICAgICAgICAgICAgIG15UG9zaXRpb25UbXAubGVmdCA9IFwiMFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInJpZ2h0LXRvcFwiIDogICAgICAgLy/lnZDmoIflnKjln7rlh4blhYPntKDnmoTlj7PkuIvop5LkvY3nva5cbiAgICAgICAgICAgICAgICBteVBvc2l0aW9uVG1wLmJvdHRvbSA9IFwiLTEwMCVcIjtcbiAgICAgICAgICAgICAgICBteVBvc2l0aW9uVG1wLnJpZ2h0ID0gXCIxMDAlXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicmlnaHQtYm90dG9tXCIgOiAgICAgICAvL+WdkOagh+WcqOWfuuWHhuWFg+e0oOeahOWPs+S4i+inkuS9jee9rlxuICAgICAgICAgICAgICAgIG15UG9zaXRpb25UbXAudG9wID0gXCItMTAwJVwiO1xuICAgICAgICAgICAgICAgIG15UG9zaXRpb25UbXAucmlnaHQgPSBcIjEwMCVcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQgOiAgICAgICAgICAgICAgICAgICAvL+m7mOiupOWdkOagh+WcqOWfuuWHhuWFg+e0oOeahOS4remXtOS9jee9rlxuICAgICAgICAgICAgICAgIG15UG9zaXRpb25UbXAudG9wID0gXCIxMDAlXCI7XG4gICAgICAgICAgICAgICAgbXlQb3NpdGlvblRtcC5sZWZ0ID0gXCItMCVcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIG15UG9zaXRpb24gPSBteVBvc2l0aW9uVG1wO1xuICAgIH1cblxuICAgIC8vIOmdnueZvuWIhuavlOWMuuWIhuato+i0n+S4u+imgeaYr+iAg+iZkeWIsOi+ueahhumXrumimO+8jOW/veeVpei+ueahhuW4puadpeeahOW9seWTjVxuICAgIGlmKG15UG9zaXRpb24uaGFzT3duUHJvcGVydHkoJ2JvdHRvbScpICYmIHJlZ051bS50ZXN0KG15UG9zaXRpb24uYm90dG9tKSkge1xuICAgICAgICBpZighcmVnTnVtTmVnYXRpdmUudGVzdChteVBvc2l0aW9uLmJvdHRvbSkpIHtcbiAgICAgICAgICAgIHRpcFBvc2l0aW9uLnRvcCA9IGVsZURldGFpbHMuYmFzZVRvcCArIGVsZURldGFpbHMuYmFzZUJvcmRlclRvcFdpZHRoICsgZWxlRGV0YWlscy5iYXNlSGVpZ2h0ICsgZWxlRGV0YWlscy5iYXNlQm9yZGVyQm90dG9tV2lkdGggKyBwYXJzZUZsb2F0KG15UG9zaXRpb24uYm90dG9tKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgdGlwUG9zaXRpb24udG9wID0gZWxlRGV0YWlscy5iYXNlVG9wICsgZWxlRGV0YWlscy5iYXNlQm9yZGVyVG9wV2lkdGggKyBlbGVEZXRhaWxzLmJhc2VIZWlnaHQgKyBwYXJzZUZsb2F0KG15UG9zaXRpb24uYm90dG9tKTtcbiAgICAgICAgfVxuICAgIH1lbHNlIGlmKG15UG9zaXRpb24uaGFzT3duUHJvcGVydHkoJ2JvdHRvbScpICYmIHJlZ1Blci50ZXN0KG15UG9zaXRpb24uYm90dG9tKSkge1xuICAgICAgICBpZighcmVnUGVyTmVnYXRpdmUudGVzdChteVBvc2l0aW9uLmJvdHRvbSkpIHtcbiAgICAgICAgICAgIGxldCBib3R0b20gPSB0aXBHcm91cEhlaWdodCAtIHRpcEdyb3VwSGVpZ2h0ICogcGFyc2VGbG9hdChteVBvc2l0aW9uLmJvdHRvbSkvMTAwO1xuICAgICAgICAgICAgdGlwUG9zaXRpb24udG9wID0gZWxlRGV0YWlscy5iYXNlVG9wICsgZWxlRGV0YWlscy5iYXNlQm9yZGVyVG9wV2lkdGggKyBlbGVEZXRhaWxzLmJhc2VCb3JkZXJCb3R0b21XaWR0aCArIGVsZURldGFpbHMuYmFzZUhlaWdodCAtIGJvdHRvbTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgbGV0IGJvdHRvbSA9IChlbGVEZXRhaWxzLmJhc2VIZWlnaHQgLSB0aXBHcm91cEhlaWdodCkgKiAoLXBhcnNlRmxvYXQobXlQb3NpdGlvbi5ib3R0b20pLzEwMCk7XG4gICAgICAgICAgICB0aXBQb3NpdGlvbi50b3AgPSBlbGVEZXRhaWxzLmJhc2VUb3AgKyBlbGVEZXRhaWxzLmJhc2VCb3JkZXJUb3BXaWR0aCArIGVsZURldGFpbHMuYmFzZUhlaWdodCAtIHRpcEdyb3VwSGVpZ2h0IC0gYm90dG9tO1xuICAgICAgICB9XG4gICAgfWVsc2UgaWYobXlQb3NpdGlvbi5oYXNPd25Qcm9wZXJ0eSgndG9wJykgJiYgcmVnTnVtLnRlc3QobXlQb3NpdGlvbi50b3ApKSB7XG4gICAgICAgIGlmKCFyZWdOdW1OZWdhdGl2ZS50ZXN0KG15UG9zaXRpb24udG9wKSkge1xuICAgICAgICAgICAgdGlwUG9zaXRpb24udG9wID0gZWxlRGV0YWlscy5iYXNlVG9wIC0gdGlwR3JvdXBIZWlnaHQgLSBwYXJzZUZsb2F0KG15UG9zaXRpb24udG9wKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgdGlwUG9zaXRpb24udG9wID0gZWxlRGV0YWlscy5iYXNlVG9wICsgZWxlRGV0YWlscy5iYXNlQm9yZGVyVG9wV2lkdGggLSB0aXBHcm91cEhlaWdodCAtIHBhcnNlRmxvYXQobXlQb3NpdGlvbi50b3ApO1xuICAgICAgICB9XG4gICAgfWVsc2UgaWYobXlQb3NpdGlvbi5oYXNPd25Qcm9wZXJ0eSgndG9wJykgJiYgcmVnUGVyLnRlc3QobXlQb3NpdGlvbi50b3ApKSB7XG4gICAgICAgIGlmKCFyZWdQZXJOZWdhdGl2ZS50ZXN0KG15UG9zaXRpb24udG9wKSkge1xuICAgICAgICAgICAgbGV0IHRvcCA9IHRpcEdyb3VwSGVpZ2h0ICogcGFyc2VGbG9hdChteVBvc2l0aW9uLnRvcCkvMTAwO1xuICAgICAgICAgICAgdGlwUG9zaXRpb24udG9wID0gZWxlRGV0YWlscy5iYXNlVG9wIC0gdG9wO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBsZXQgdG9wID0gKGVsZURldGFpbHMuYmFzZUhlaWdodCAtIHRpcEdyb3VwSGVpZ2h0KSAqICgtcGFyc2VGbG9hdChteVBvc2l0aW9uLnRvcCkvMTAwKTtcbiAgICAgICAgICAgIHRpcFBvc2l0aW9uLnRvcCA9IGVsZURldGFpbHMuYmFzZVRvcCArIGVsZURldGFpbHMuYmFzZUJvcmRlclRvcFdpZHRoICsgdG9wO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYobXlQb3NpdGlvbi5oYXNPd25Qcm9wZXJ0eSgncmlnaHQnKSAmJiByZWdOdW0udGVzdChteVBvc2l0aW9uLnJpZ2h0KSkge1xuICAgICAgICB0aXBQb3NpdGlvbi5sZWZ0ID0gZWxlRGV0YWlscy5iYXNlTGVmdCArIGVsZURldGFpbHMuYmFzZUJvcmRlckxlZnRXaWR0aCArIGVsZURldGFpbHMuYmFzZVdpZHRoICsgZWxlRGV0YWlscy5iYXNlQm9yZGVyUmlnaHRXaWR0aCArIHBhcnNlRmxvYXQobXlQb3NpdGlvbi5yaWdodCk7XG4gICAgfWVsc2UgaWYobXlQb3NpdGlvbi5oYXNPd25Qcm9wZXJ0eSgncmlnaHQnKSAmJiByZWdQZXIudGVzdChteVBvc2l0aW9uLnJpZ2h0KSkge1xuICAgICAgICBpZighcmVnUGVyTmVnYXRpdmUudGVzdChteVBvc2l0aW9uLnJpZ2h0KSkge1xuICAgICAgICAgICAgbGV0IHJpZ2h0ID0gdGlwR3JvdXBXaWR0aCAtIHRpcEdyb3VwV2lkdGggKiBwYXJzZUZsb2F0KG15UG9zaXRpb24ucmlnaHQpLzEwMDtcbiAgICAgICAgICAgIHRpcFBvc2l0aW9uLmxlZnQgPSBlbGVEZXRhaWxzLmJhc2VMZWZ0ICsgZWxlRGV0YWlscy5iYXNlQm9yZGVyTGVmdFdpZHRoICsgZWxlRGV0YWlscy5iYXNlQm9yZGVyUmlnaHRXaWR0aCArIGVsZURldGFpbHMuYmFzZVdpZHRoIC0gcmlnaHQ7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIGxldCByaWdodCA9IChlbGVEZXRhaWxzLmJhc2VXaWR0aCAtIHRpcEdyb3VwV2lkdGgpICogKC1wYXJzZUZsb2F0KG15UG9zaXRpb24ucmlnaHQpLzEwMCk7XG4gICAgICAgICAgICB0aXBQb3NpdGlvbi5sZWZ0ID0gZWxlRGV0YWlscy5iYXNlTGVmdCArIGVsZURldGFpbHMuYmFzZUJvcmRlckxlZnRXaWR0aCArIGVsZURldGFpbHMuYmFzZVdpZHRoIC0gdGlwR3JvdXBXaWR0aCAtIHJpZ2h0O1xuICAgICAgICB9XG4gICAgfWVsc2UgaWYobXlQb3NpdGlvbi5oYXNPd25Qcm9wZXJ0eSgnbGVmdCcpICYmIHJlZ051bS50ZXN0KG15UG9zaXRpb24ubGVmdCkpIHtcbiAgICAgICAgaWYoIXJlZ051bU5lZ2F0aXZlLnRlc3QobXlQb3NpdGlvbi5sZWZ0KSkge1xuICAgICAgICAgICAgdGlwUG9zaXRpb24ubGVmdCA9IGVsZURldGFpbHMuYmFzZUxlZnQgLSB0aXBHcm91cFdpZHRoIC0gcGFyc2VGbG9hdChteVBvc2l0aW9uLmxlZnQpO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICB0aXBQb3NpdGlvbi5sZWZ0ID0gZWxlRGV0YWlscy5iYXNlTGVmdCArIGVsZURldGFpbHMuYmFzZUJvcmRlckxlZnRXaWR0aCAtIHRpcEdyb3VwV2lkdGggLSBwYXJzZUZsb2F0KG15UG9zaXRpb24ubGVmdCk7XG4gICAgICAgIH1cbiAgICB9ZWxzZSBpZihteVBvc2l0aW9uLmhhc093blByb3BlcnR5KCdsZWZ0JykgJiYgcmVnUGVyLnRlc3QobXlQb3NpdGlvbi5sZWZ0KSkge1xuICAgICAgICBpZighcmVnUGVyTmVnYXRpdmUudGVzdChteVBvc2l0aW9uLmxlZnQpKSB7XG4gICAgICAgICAgICBsZXQgbGVmdCA9IHRpcEdyb3VwV2lkdGggKiBwYXJzZUZsb2F0KG15UG9zaXRpb24ubGVmdCkvMTAwO1xuICAgICAgICAgICAgdGlwUG9zaXRpb24ubGVmdCA9IGVsZURldGFpbHMuYmFzZUxlZnQgLSBsZWZ0O1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBsZXQgbGVmdCA9IChlbGVEZXRhaWxzLmJhc2VXaWR0aCAtIHRpcEdyb3VwV2lkdGgpICogKC1wYXJzZUZsb2F0KG15UG9zaXRpb24ubGVmdCkvMTAwKTtcbiAgICAgICAgICAgIHRpcFBvc2l0aW9uLmxlZnQgPSBlbGVEZXRhaWxzLmJhc2VMZWZ0ICsgZWxlRGV0YWlscy5iYXNlQm9yZGVyTGVmdFdpZHRoICsgbGVmdDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aXBQb3NpdGlvbjtcbn1cblxuLyoqXG4gKiBPZmZzZXQg5Y+q5pSv5oyBcHjvvIznlKjkuo7lvq7osIPln7rlh4blhYPntKDkuI5UaXBzIOeahOebuOWvueWumuS9jVxuICog6K6h566X5a6a5L2N5b6X5Ye655qE57uT5p6c5Y+q5ZCrdG9w5ZKMbGVmdO+8jOaVhW9mZnNldOWPquaUr+aMgXRvcOWSjGxlZnRcbiAqIOavlOWmguS4iuWxheS4re+8jOatpOaXtlRpcHMg6aG26YOo5piv57Sn6LS0552A5Z+65YeG5YWD57Sg6aG26YOo55qE77yM6K6+572ub2Zmc2V0LnRvcCA9IDEwLCDliJlUaXBzIOmhtumDqOS9juS6juWfuuWHhuWFg+e0oOmhtumDqDEwcHhcbiAqL1xudGlwcy5wcm90b3R5cGUuc2V0U3R5bGVQb3NpdGlvbk9mZnNldCA9IGZ1bmN0aW9uKHRpcFBvc2l0aW9uKSB7XG4gICAgbGV0IG9mZnNldCA9IHRoaXMub3B0aW9ucy5vZmZzZXQ7XG5cbiAgICBpZighb2Zmc2V0KSByZXR1cm4gdGlwUG9zaXRpb247XG5cbiAgICBsZXQgcmVnTnVtID0gQy5yZWdOdW07XG4gICAgaWYob2Zmc2V0Lmhhc093blByb3BlcnR5KCd0b3AnKSAmJiByZWdOdW0udGVzdChvZmZzZXQudG9wKSkgdGlwUG9zaXRpb24udG9wICs9IG9mZnNldC50b3A7XG4gICAgaWYob2Zmc2V0Lmhhc093blByb3BlcnR5KCdsZWZ0JykgJiYgcmVnTnVtLnRlc3Qob2Zmc2V0LmxlZnQpKSB0aXBQb3NpdGlvbi5sZWZ0ICs9IG9mZnNldC5sZWZ0O1xuXG4gICAgcmV0dXJuIHRpcFBvc2l0aW9uO1xufVxuXG4vKipcbiAqIOW3suW8g+eUqOOAguabv+S7o+aWueahiOaYr+agueaNrlN5bWJvbCDorr7nva5wYWRkaW5n77yM5Yip5LqO5Yqo55S75omn6KGMXG4gKiBcbiAqIOWmguaenOWQr+WKqHN5bWJvbO+8jOiAjHN5bWJvbCDkuI3ljaBUaXBzIOWuveW6puWSjOmrmOW6puOAgiDliJnlj6/moLnmja5zeW1ib2wgb2Zmc2V0IOW+ruiwg+eItuWFg+e0oOS4jlRpcHMg55qE55u45a+55a6a5L2NXG4gKiBPZmZzZXQg5Y+q5pSv5oyBcHhcbiAqIOiuoeeul+WumuS9jeW+l+WHuueahOe7k+aenOWPquWQq3RvcOWSjGxlZnTvvIzmlYVvZmZzZXTlj6rmlK/mjIF0b3DlkoxsZWZ0XG4gKiDmr5TlpoLkuIrlsYXkuK3vvIzmraTml7ZUaXBzIOmhtumDqOaYr+e0p+i0tOedgOeItuWFg+e0oOmhtumDqOeahO+8jFxuICog5q2k5pe2c3ltYm9sIOato+W4uOadpeivtOS8mumrmOS6jlRpcHMg5LiK5Lit6YOo5L2NLCDlpoI4cHgsIOiuvue9rnN5bWJvbE9wdGlvbnMub2Zmc2V0LnRvcCA9IDgsIOWImVRpcHMg6aG26YOo5L2O5LqO54i25YWD57Sg6aG26YOoOHB477yMU3ltYm9s57Sn6LS054i25YWD57Sg6aG26YOoXG4gKi9cbnRpcHMucHJvdG90eXBlLnNldFN0eWxlU3ltYm9sT2Zmc2V0ID0gZnVuY3Rpb24odGlwUG9zaXRpb24pIHtcbiAgICBpZighdGhpcy5vcHRpb25zLnN5bWJvbCkgcmV0dXJuIHRpcFBvc2l0aW9uO1xuICAgIGxldCByZWdOdW0gPSBDLnJlZ051bTtcblxuICAgIGxldCB0bXBPZmZzZXQgPSB7XG4gICAgICAgIHRvcDogbnVsbCxcbiAgICAgICAgbGVmdDogbnVsbCxcbiAgICB9O1xuXG4gICAgbGV0IHN5bWJvbFNpemUgPSB0aGlzLmdldFN5bWJvbFNpemUoKTtcblxuICAgIGxldCBzeW1ib2xQb3NpdGlvbiA9IHRoaXMub3B0aW9ucy5zeW1ib2xPcHRpb25zLnBvc2l0aW9uIHx8IHRoaXMubWFwUG9zaXRpb25Ub1N5bWJvbFBvc2l0aW9uKHRoaXMub3B0aW9ucy5wb3NpdGlvbik7XG4gICAgaWYoc3ltYm9sUG9zaXRpb24gJiYgdHlwZW9mIHN5bWJvbFBvc2l0aW9uID09ICdzdHJpbmcnKSB7XG4gICAgICAgIHN3aXRjaChzeW1ib2xQb3NpdGlvbikge1xuICAgICAgICAgICAgY2FzZSBcInRvcC1sZWZ0XCIgOiAgICAgICAgICAgLy/lnZDmoIflnKhUaXBzIOeahOW3puS4iuinkuS9jee9rlxuICAgICAgICAgICAgICAgIHRtcE9mZnNldC50b3AgPSBzeW1ib2xTaXplLmhlaWdodDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ0b3AtY2VudGVyXCIgOiAgICAgICAgIC8v5Z2Q5qCH5ZyoVGlwcyDnmoTkuIrkuK3kvY3nva5cbiAgICAgICAgICAgICAgICB0bXBPZmZzZXQudG9wID0gc3ltYm9sU2l6ZS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwidG9wLXJpZ2h0XCIgOiAgICAgICAgICAvL+WdkOagh+WcqFRpcHMg55qE5Y+z5LiK6KeS5L2N572uXG4gICAgICAgICAgICAgICAgdG1wT2Zmc2V0LnRvcCA9IHN5bWJvbFNpemUuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImNlbnRlci1sZWZ0XCIgOiAgICAgICAgLy/lnZDmoIflnKhUaXBzIOeahOW3puS4reS9jee9rlxuICAgICAgICAgICAgICAgIHRtcE9mZnNldC5sZWZ0ID0gc3ltYm9sU2l6ZS53aWR0aDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJtaWRkbGVcIiA6ICAgICAgICAgICAgIC8v5Z2Q5qCH5ZyoVGlwcyDnmoTkuK3pl7TkvY3nva5cbiAgICAgICAgICAgICAgICAvLyB0bXBPZmZzZXQubGVmdCA9IHN5bWJvbFNpemUud2lkdGg7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiY2VudGVyLXJpZ2h0XCIgOiAgICAgICAvL+WdkOagh+WcqFRpcHMg55qE5Y+z5Lit5L2N572uXG4gICAgICAgICAgICAgICAgdG1wT2Zmc2V0LmxlZnQgPSAwIC0gc3ltYm9sU2l6ZS53aWR0aDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJib3R0b20tbGVmdFwiIDogICAgICAgIC8v5Z2Q5qCH5ZyoVGlwcyDnmoTlt6bkuIvop5LkvY3nva5cbiAgICAgICAgICAgICAgICB0bXBPZmZzZXQudG9wID0gMCAtIHN5bWJvbFNpemUuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImJvdHRvbS1jZW50ZXJcIiA6ICAgICAgLy/lnZDmoIflnKhUaXBzIOeahOS4i+S4reS9jee9rlxuICAgICAgICAgICAgICAgIHRtcE9mZnNldC50b3AgPSAwIC0gc3ltYm9sU2l6ZS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYm90dG9tLXJpZ2h0XCIgOiAgICAgICAvL+WdkOagh+WcqFRpcHMg55qE5Y+z5LiL6KeS5L2N572uXG4gICAgICAgICAgICAgICAgdG1wT2Zmc2V0LnRvcCA9IDAgLSBzeW1ib2xTaXplLmhlaWdodDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJsZWZ0LXRvcFwiIDogICAgICAgICAgICAgICAvL+WdkOagh+WcqFRpcHMg55qE5LiK5bem6KeS5L2N572uXG4gICAgICAgICAgICAgICAgdG1wT2Zmc2V0LmxlZnQgPSBzeW1ib2xTaXplLndpZHRoO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImxlZnQtYm90dG9tXCIgOiAgICAgICAgICAgICAgICAvL+WdkOagh+WcqFRpcHMg55qE5LiL5bem6KeS5L2N572uXG4gICAgICAgICAgICAgICAgdG1wT2Zmc2V0LmxlZnQgPSBzeW1ib2xTaXplLndpZHRoO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInJpZ2h0LXRvcFwiIDogICAgICAgICAgICAgIC8v5Z2Q5qCH5ZyoVGlwcyDnmoTkuIrlj7Pop5LkvY3nva5cbiAgICAgICAgICAgICAgICB0bXBPZmZzZXQubGVmdCA9IDAgLSBzeW1ib2xTaXplLndpZHRoO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInJpZ2h0LWJvdHRvbVwiIDogICAgICAgICAgICAgICAvL+WdkOagh+WcqFRpcHMg55qE5LiL5Y+z6KeS5L2N572uXG4gICAgICAgICAgICAgICAgdG1wT2Zmc2V0LmxlZnQgPSAwIC0gc3ltYm9sU2l6ZS53aWR0aDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQgOiAgICAgICAgICAgICAgICAgICAvL+m7mOiupOWdkOagh+WcqFRpcHMg55qE5Lit6Ze05L2N572uXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLndyaXRlTG9nKCdpbmZvJywgJ3NldFN0eWxlU3ltYm9sT2Zmc2V0OiAnLCBzeW1ib2xTaXplLCBzeW1ib2xQb3NpdGlvbiwgdG1wT2Zmc2V0KTtcblxuICAgIC8vIG9mZnNldCDku6VzeW1ib2xPcHRpb25zLm9mZnNldCDkuLrlh4bvvIx0bXBPZmZzZXQg5Li66L6F77yM5YaF5aSW6YOo5a6a5L2N6KeE5YiZ5LiA5qC3XG4gICAgbGV0IG9mZnNldCA9IEMuZXh0ZW5kKHt9LCB0aGlzLm9wdGlvbnMuc3ltYm9sT3B0aW9ucy5vZmZzZXQsIHRtcE9mZnNldCk7XG4gICAgLy8g5b2T5Li65aSW6YOo5a6a5L2N5pe277yM6ZyA6KaB5Y+N6L2sXG4gICAgLy8gaWYodGhpcy5vcHRpb25zLmRpcmVjdGlvbiA9PSAnb3V0ZXInIHx8IHRoaXMub3B0aW9ucy5kaXJlY3Rpb24gPT0gJ291dHNpZGUnKSB7XG4gICAgLy8gICAgIGlmKG9mZnNldC5oYXNPd25Qcm9wZXJ0eSgndG9wJykgJiYgcmVnTnVtLnRlc3Qob2Zmc2V0LnRvcCkpIG9mZnNldC50b3AgPSAwIC0gb2Zmc2V0LnRvcDtcbiAgICAvLyAgICAgaWYob2Zmc2V0Lmhhc093blByb3BlcnR5KCdsZWZ0JykgJiYgcmVnTnVtLnRlc3Qob2Zmc2V0LmxlZnQpKSBvZmZzZXQubGVmdCA9IDAgLSBvZmZzZXQubGVmdDtcbiAgICAvLyB9XG5cbiAgICB0aGlzLndyaXRlTG9nKCdpbmZvJywgJ3NldFN0eWxlU3ltYm9sT2Zmc2V0OiAnLCBzeW1ib2xTaXplLCBvZmZzZXQpO1xuXG4gICAgaWYob2Zmc2V0LnRvcCB8fCBvZmZzZXQubGVmdCkge1xuICAgICAgICBpZihvZmZzZXQuaGFzT3duUHJvcGVydHkoJ3RvcCcpICYmIHJlZ051bS50ZXN0KG9mZnNldC50b3ApKSB0aXBQb3NpdGlvbi50b3AgKz0gb2Zmc2V0LnRvcDtcbiAgICAgICAgaWYob2Zmc2V0Lmhhc093blByb3BlcnR5KCdsZWZ0JykgJiYgcmVnTnVtLnRlc3Qob2Zmc2V0LmxlZnQpKSB0aXBQb3NpdGlvbi5sZWZ0ICs9IG9mZnNldC5sZWZ0O1xuICAgIH1cblxuICAgIHJldHVybiB0aXBQb3NpdGlvbjtcbn1cblxuLy/moLnmja7kuI3lkIznmoRzeW1ib2wg57G75Z6L6I635Y+W5LiN5ZCM55qEU2l6Ze+8jOeUqOS6juWumuS9jeihpei2s1xudGlwcy5wcm90b3R5cGUuZ2V0U3ltYm9sU2l6ZSA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBzeW1ib2wgPSBcInRyaWFuZ2xlXCI7XG4gICAgaWYodHlwZW9mIHRoaXMub3B0aW9ucy5zeW1ib2wgPT0gJ3N0cmluZycpIHN5bWJvbCA9IHRoaXMub3B0aW9ucy5zeW1ib2w7XG5cbiAgICBsZXQgZ2V0U3ltYm9sU2l6ZU1ldGhvZCA9IFwiZ2V0U3ltYm9sU2l6ZVwiICsgc3ltYm9sLnNsaWNlKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyBzeW1ib2wuc2xpY2UoMSk7XG4gICAgcmV0dXJuIHRoaXNbZ2V0U3ltYm9sU2l6ZU1ldGhvZF0oKTtcbn1cblxuLy/ojrflj5ZUcmlhbmdsZSBTaXpl77yM55So5LqO5a6a5L2N6KGl6LazXG50aXBzLnByb3RvdHlwZS5nZXRTeW1ib2xTaXplVHJpYW5nbGUgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgJHN5bWJvbCA9IHRoaXMuYmFja3VwLl9zeW1ib2xFbG07XG4gICAgbGV0IHN5bWJvbFNpemUgPSB7d2lkdGg6IDAsIGhlaWdodDogMH07XG5cbiAgICBpZighJHN5bWJvbCkgcmV0dXJuIHN5bWJvbFNpemU7XG4gICAgLy9UcmlhbmdsZSDnmoTlm5vkuKrovrnmoYbpg73kuIDmoLdcbiAgICBsZXQgYm9yZGVyV2lkdGggPSBwYXJzZUZsb2F0KEMuY3NzKCRzeW1ib2wsIFwiYm9yZGVyLXRvcC13aWR0aFwiKSk7XG4gICAgc3ltYm9sU2l6ZS53aWR0aCA9IGJvcmRlcldpZHRoO1xuICAgIHN5bWJvbFNpemUuaGVpZ2h0ID0gYm9yZGVyV2lkdGg7XG5cbiAgICByZXR1cm4gc3ltYm9sU2l6ZTtcbn1cblxudGlwcy5wcm90b3R5cGUuZ2V0UG9zaXRpb24gPSBmdW5jdGlvbihteVBvc2l0aW9uKSB7XG4gICAgbGV0IHBvc2l0aW9uQ2xhc3MgPSB0aGlzLmdldFBvc2l0aW9uQ2xhc3MobXlQb3NpdGlvbik7XG4gICAgbGV0IHBvc2l0aW9uU3R5bGUgPSB0aGlzLmdldFBvc2l0aW9uU3R5bGUobXlQb3NpdGlvbik7XG4gICAgbGV0IHRpcFBvc2l0aW9uID0ge1xuICAgICAgICBjbGFzczogcG9zaXRpb25DbGFzcyxcbiAgICAgICAgc3R5bGU6IHBvc2l0aW9uU3R5bGUsXG4gICAgfTtcblxuICAgIHJldHVybiB0aXBQb3NpdGlvbjtcbn1cblxuLy/orr7nva7mta7liqjlj4LmlbDjgILmlK/mjIHnlKjmiLfoh6rlrprkuYnjgIJcbnRpcHMucHJvdG90eXBlLnNldEZsb2F0T3B0aW9ucyA9IGZ1bmN0aW9uKGN1c3RvbUZsb2F0T3B0aW9ucykge1xuICAgIC8v56qX5Y+j5Y+R55Sf5Y+Y5YyW5pe26ZyA6KaB6YeN5paw5a6a5LmJZmxvYXRcbiAgICAvL+iLpeS4jeaYr+mmluasoeiuvue9ru+8jOWImei/mOWOn+W9k+WJjeeKtuaAgVxuICAgIGxldCBiYWNrdXBmbG9hdE9wdGlvbnMgPSB7fTtcbiAgICBpZih0aGlzLmZsb2F0T3B0aW9ucykge1xuICAgICAgICBiYWNrdXBmbG9hdE9wdGlvbnMuc3RhdHVzID0gdGhpcy5mbG9hdE9wdGlvbnMuc3RhdHVzO1xuICAgICAgICBiYWNrdXBmbG9hdE9wdGlvbnMuZmxvYXRJZCA9IHRoaXMuZmxvYXRPcHRpb25zLmZsb2F0SWQ7XG4gICAgfTtcblxuICAgIC8v55So5oi36Ieq5a6a5LmJXG4gICAgaWYodGhpcy5vcHRpb25zLmZsb2F0LmN1c3RvbUZsb2F0T3B0aW9ucykgY3VzdG9tRmxvYXRPcHRpb25zID0gdGhpcy5vcHRpb25zLmZsb2F0LmN1c3RvbUZsb2F0T3B0aW9ucztcblxuICAgIGxldCBmbG9hdE9wdGlvbnMgPSBDLmV4dGVuZCh7fSwgdGlwcy5mbG9hdE9wdGlvbnMsIGN1c3RvbUZsb2F0T3B0aW9ucywgYmFja3VwZmxvYXRPcHRpb25zKTtcblxuICAgIGxldCBlbGVEZXRhaWxzID0gdGhpcy5nZXRFbGVtZW50RGV0YWlscygpO1xuXG4gICAgLy/orr7nva7mnIDlpKfmnIDlsI/lgLzvvIzkuIDoiKzmnIDlsI/lgLww77yM5pyA5aSn5YC86KeG5oOF5Ya16ICM5a6a77yM6Iul5piv5LiA6Iis5oOF5Ya177yIcHjvvInliJnkuLrlhYPntKDnmoTmnIDlpKfpmIjlgLzvvIzlpoLmmK/nmb7liIbmr5TvvIzliJnkuLoxMDAlXG4gICAgZmxvYXRPcHRpb25zLnhNaW5UaHJlc2hvbGQgPSAhQy5pc0VtcHR5TnVtKGZsb2F0T3B0aW9ucy54TWluVGhyZXNob2xkKT8gZmxvYXRPcHRpb25zLnhNaW5UaHJlc2hvbGQgOiAwO1xuICAgIGZsb2F0T3B0aW9ucy54TWF4VGhyZXNob2xkID0gIUMuaXNFbXB0eU51bShmbG9hdE9wdGlvbnMueE1heFRocmVzaG9sZCk/IGZsb2F0T3B0aW9ucy54TWF4VGhyZXNob2xkIDogZWxlRGV0YWlscy5sZWZ0VGhyZXNob2xkO1xuICAgIGZsb2F0T3B0aW9ucy55TWluVGhyZXNob2xkID0gIUMuaXNFbXB0eU51bShmbG9hdE9wdGlvbnMueU1pblRocmVzaG9sZCk/IGZsb2F0T3B0aW9ucy55TWluVGhyZXNob2xkIDogMDtcbiAgICBmbG9hdE9wdGlvbnMueU1heFRocmVzaG9sZCA9ICFDLmlzRW1wdHlOdW0oZmxvYXRPcHRpb25zLnlNYXhUaHJlc2hvbGQpPyBmbG9hdE9wdGlvbnMueU1heFRocmVzaG9sZCA6IGVsZURldGFpbHMudG9wVGhyZXNob2xkO1xuXG4gICAgZmxvYXRPcHRpb25zLnhPZmZzZXQgPSAoZmxvYXRPcHRpb25zLnhNYXhUaHJlc2hvbGQgLSBmbG9hdE9wdGlvbnMueE1pblRocmVzaG9sZCkgKiBmbG9hdE9wdGlvbnMueE9mZnNldExlbjtcbiAgICBmbG9hdE9wdGlvbnMueU9mZnNldCA9IChmbG9hdE9wdGlvbnMueU1heFRocmVzaG9sZC0gZmxvYXRPcHRpb25zLnlNaW5UaHJlc2hvbGQpICogZmxvYXRPcHRpb25zLnlPZmZzZXRMZW47XG5cbiAgICBpZihmbG9hdE9wdGlvbnMuaGFzT3duUHJvcGVydHkoJ29mZnNldFR5cGUnKSAmJiBmbG9hdE9wdGlvbnMub2Zmc2V0VHlwZSA9PT0gJyUnKSB7XG4gICAgICAgIGZsb2F0T3B0aW9ucy54T2Zmc2V0ID0gZmxvYXRPcHRpb25zLnhPZmZzZXRMZW47ICBcbiAgICAgICAgZmxvYXRPcHRpb25zLnlPZmZzZXQgPSBmbG9hdE9wdGlvbnMueU9mZnNldExlbjtcbiAgICB9XG5cbiAgICB0aGlzLmZsb2F0T3B0aW9ucyA9IGZsb2F0T3B0aW9ucztcblxuICAgIHJldHVybiB0aGlzLmZsb2F0T3B0aW9ucztcbn1cblxuLy/lvZPpnIDopoHph43mlrDorr7nva5mbG9hdO+8jOWmgueql+WPo++8jOWfuuWHhuWFg+e0oOWPkeeUn+aUueWPmO+8jOiLpeS4jeaYr+mmluasoeiuvue9ru+8jOWImei/mOWOn+W9k+WJjeeKtuaAgVxudGlwcy5wcm90b3R5cGUuZ2V0ZmxvYXRTdGF0dXMgPSBmdW5jdGlvbihjdXN0b21GbG9hdFN0YXR1cykge1xuICAgIGlmKHRoaXMub3B0aW9ucy5mbG9hdC5jdXN0b21GbG9hdFN0YXR1cykge1xuICAgICAgICBjdXN0b21GbG9hdFN0YXR1cyA9IHRoaXMub3B0aW9ucy5mbG9hdC5jdXN0b21GbG9hdFN0YXR1cztcbiAgICB9ZWxzZSBpZighY3VzdG9tRmxvYXRTdGF0dXMpe1xuICAgICAgICBjdXN0b21GbG9hdFN0YXR1cyA9IHtcbiAgICAgICAgICAgIHRvcDogdGlwcy5mbG9hdE9wdGlvbnMudG9wU3RhcnQsXG4gICAgICAgICAgICBsZWZ0OiB0aXBzLmZsb2F0T3B0aW9ucy5sZWZ0U3RhcnQsXG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yKGxldCBrZXkgaW4gY3VzdG9tRmxvYXRTdGF0dXMpIHtcbiAgICAgICAgaWYodGhpcy5iYWNrdXAuX2Zsb2F0U3RhdHVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIGN1c3RvbUZsb2F0U3RhdHVzW2tleV0gPSB0aGlzLmJhY2t1cC5fZmxvYXRTdGF0dXNba2V5XTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjdXN0b21GbG9hdFN0YXR1cztcbn1cblxuLyoqXG4gKiDorr7nva7mta7liqjlrprkvY3nmoTnirbmgIHvvIzop6blj5FUaXBzIOmHjeaWsOWumuS9je+8jOWunueOsOa1ruWKqOeahOaViOaenFxuICovXG50aXBzLnByb3RvdHlwZS5zZXRGbG9hdFN0YXR1cyA9IGZ1bmN0aW9uKGZsb2F0U3RhdHVzLCBmbG9hdE9wdGlvbnMpIHtcbiAgICBpZihmbG9hdFN0YXR1cy50b3AgPiBmbG9hdE9wdGlvbnMueU1heFRocmVzaG9sZCkgZmxvYXRTdGF0dXMudG9wID0gZmxvYXRPcHRpb25zLnlNYXhUaHJlc2hvbGQ7XG4gICAgaWYoZmxvYXRTdGF0dXMudG9wIDwgZmxvYXRPcHRpb25zLnlNaW5UaHJlc2hvbGQpIGZsb2F0U3RhdHVzLnRvcCA9IGZsb2F0T3B0aW9ucy55TWluVGhyZXNob2xkO1xuICAgIGlmKGZsb2F0U3RhdHVzLmxlZnQgPiBmbG9hdE9wdGlvbnMueE1heFRocmVzaG9sZCkgZmxvYXRTdGF0dXMubGVmdCA9IGZsb2F0T3B0aW9ucy54TWF4VGhyZXNob2xkO1xuICAgIGlmKGZsb2F0U3RhdHVzLmxlZnQgPCBmbG9hdE9wdGlvbnMueE1pblRocmVzaG9sZCkgZmxvYXRTdGF0dXMubGVmdCA9IGZsb2F0T3B0aW9ucy54TWluVGhyZXNob2xkO1xuXG4gICAgZm9yKGxldCBrZXkgaW4gZmxvYXRTdGF0dXMpIHtcbiAgICAgICAgdGhpcy5iYWNrdXAuX2Zsb2F0U3RhdHVzW2tleV0gPSBmbG9hdFN0YXR1c1trZXldO1xuICAgIH1cblxuICAgIGxldCBvZmZzZXRUeXBlID0gZmxvYXRPcHRpb25zLmhhc093blByb3BlcnR5KCdvZmZzZXRUeXBlJyk/IGZsb2F0T3B0aW9ucy5vZmZzZXRUeXBlIDogJyc7XG5cbiAgICAvL+ivt+WKoeW/heiuvue9rmZsb2F0UG9zaXRpb27vvIzlkKbliJnkuI3nlJ/mlYhcbiAgICB0aGlzLm1vbml0b3IuZmxvYXRQb3NpdGlvbiA9IHtcbiAgICAgICAgdG9wOiBmbG9hdFN0YXR1cy50b3AgKyBvZmZzZXRUeXBlLFxuICAgICAgICBsZWZ0OiBmbG9hdFN0YXR1cy5sZWZ0ICsgb2Zmc2V0VHlwZSxcbiAgICB9XG59XG5cbi8v6buY6K6k5rWu5Yqo5pa55byP44CC5rK/552A5Z+65YeG5YWD57Sg5bem5LiK6KeS5Yiw5Y+z5LiL6KeS55u057q/5rWu5YqoXG4vL+eUqOaIt+iHquWumuS5iea1ruWKqOaWueazle+8jOWPr+WPguiAg+ivpeaWueazleOAglxudGlwcy5wcm90b3R5cGUuZmxvYXRUeXBlRGVmYXVsdCA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBsZXQgY3VzdG9tRmxvYXRPcHRpb25zID0ge1xuICAgICAgICBzdGF0dXM6IHRydWUsXG4gICAgICAgIHhPZmZzZXRMZW46IDAuMDAwNSxcbiAgICAgICAgeU9mZnNldExlbjogMC4wMDA1LFxuICAgICAgICBkZWxheTogMSxcbiAgICB9O1xuXG4gICAgbGV0IGN1c3RvbUZsb2F0U3RhdHVzID0ge1xuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgfTtcblxuICAgIGxldCBmbG9hdE9wdGlvbnMgPSB0aGlzLnNldEZsb2F0T3B0aW9ucyhjdXN0b21GbG9hdE9wdGlvbnMpO1xuICAgIGxldCBmbG9hdFN0YXR1cyA9IHRoaXMuZ2V0ZmxvYXRTdGF0dXMoY3VzdG9tRmxvYXRTdGF0dXMpO1xuXG4gICAgaWYoZmxvYXRPcHRpb25zLmZsb2F0SWQpIGNsZWFySW50ZXJ2YWwoZmxvYXRPcHRpb25zLmZsb2F0SWQpO1xuICAgIGZsb2F0T3B0aW9ucy5mbG9hdElkID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoKGZsb2F0U3RhdHVzLnRvcCA+PSBmbG9hdE9wdGlvbnMueU1heFRocmVzaG9sZCAmJiBmbG9hdE9wdGlvbnMuc3RhdHVzKSB8fCAoZmxvYXRTdGF0dXMudG9wIDw9IGZsb2F0T3B0aW9ucy55TWluVGhyZXNob2xkICYmICFmbG9hdE9wdGlvbnMuc3RhdHVzKSkge1xuICAgICAgICAgICAgZmxvYXRPcHRpb25zLnN0YXR1cyA9ICFmbG9hdE9wdGlvbnMuc3RhdHVzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoZmxvYXRPcHRpb25zLnN0YXR1cykge1xuICAgICAgICAgICAgZmxvYXRTdGF0dXMudG9wID0gZmxvYXRTdGF0dXMudG9wICsgZmxvYXRPcHRpb25zLnlPZmZzZXQ7XG4gICAgICAgICAgICBmbG9hdFN0YXR1cy5sZWZ0ID0gZmxvYXRTdGF0dXMubGVmdCArIGZsb2F0T3B0aW9ucy54T2Zmc2V0O1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBmbG9hdFN0YXR1cy50b3AgPSBmbG9hdFN0YXR1cy50b3AgLSBmbG9hdE9wdGlvbnMueU9mZnNldDtcbiAgICAgICAgICAgIGZsb2F0U3RhdHVzLmxlZnQgPSBmbG9hdFN0YXR1cy5sZWZ0IC0gZmxvYXRPcHRpb25zLnhPZmZzZXQ7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpcy5zZXRGbG9hdFN0YXR1cyhmbG9hdFN0YXR1cywgZmxvYXRPcHRpb25zKTtcbiAgICB9LCBmbG9hdE9wdGlvbnMuZGVsYXkpO1xufTtcblxuLy9YIOa1ruWKqFxuLy/mta7liqjmlrnlkJHmmK8g5bem5LiK6KeSLT7lj7PkuIvop5ItPuWPs+S4iuinki0+5bem5LiL6KeSLT7lt6bkuIrop5IuLi5cbnRpcHMucHJvdG90eXBlLmZsb2F0VHlwZVggPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgbGV0IGN1c3RvbUZsb2F0T3B0aW9ucyA9IHtcbiAgICAgICAgc3RhdHVzOiAxLFxuICAgICAgICBvZmZzZXRUeXBlOiAnJScsXG4gICAgICAgIHhNaW5UaHJlc2hvbGQ6IDAsXG4gICAgICAgIHhNYXhUaHJlc2hvbGQ6IDEwMCxcbiAgICAgICAgeE9mZnNldExlbjogMC4wMSxcbiAgICAgICAgeU1pblRocmVzaG9sZDogMCxcbiAgICAgICAgeU1heFRocmVzaG9sZDogMTAwLFxuICAgICAgICB5T2Zmc2V0TGVuOiAwLjAxLFxuICAgICAgICBkZWxheTogMSxcbiAgICB9O1xuICAgIFxuICAgIGxldCBjdXN0b21GbG9hdFN0YXR1cyA9IHtcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwLFxuICAgIH07XG5cbiAgICBsZXQgZmxvYXRPcHRpb25zID0gdGhpcy5zZXRGbG9hdE9wdGlvbnMoY3VzdG9tRmxvYXRPcHRpb25zKTtcbiAgICBsZXQgZmxvYXRTdGF0dXMgPSB0aGlzLmdldGZsb2F0U3RhdHVzKGN1c3RvbUZsb2F0U3RhdHVzKTtcblxuICAgIGlmKGZsb2F0T3B0aW9ucy5mbG9hdElkKSBjbGVhckludGVydmFsKGZsb2F0T3B0aW9ucy5mbG9hdElkKTtcbiAgICBmbG9hdE9wdGlvbnMuZmxvYXRJZCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKGZsb2F0U3RhdHVzLnRvcCA8PSBmbG9hdE9wdGlvbnMueU1pblRocmVzaG9sZCAmJiBmbG9hdFN0YXR1cy5sZWZ0IDw9IGZsb2F0T3B0aW9ucy54TWluVGhyZXNob2xkKSB7XG4gICAgICAgICAgICBmbG9hdE9wdGlvbnMuc3RhdHVzID0gMTtcbiAgICAgICAgfWVsc2UgaWYoZmxvYXRTdGF0dXMudG9wID49IGZsb2F0T3B0aW9ucy55TWF4VGhyZXNob2xkICYmIGZsb2F0U3RhdHVzLmxlZnQgPj0gZmxvYXRPcHRpb25zLnhNYXhUaHJlc2hvbGQpIHtcbiAgICAgICAgICAgIGZsb2F0T3B0aW9ucy5zdGF0dXMgPSAyO1xuICAgICAgICB9ZWxzZSBpZihmbG9hdFN0YXR1cy50b3AgPD0gZmxvYXRPcHRpb25zLnlNaW5UaHJlc2hvbGQgJiYgZmxvYXRTdGF0dXMubGVmdCA+PSBmbG9hdE9wdGlvbnMueE1heFRocmVzaG9sZCkge1xuICAgICAgICAgICAgZmxvYXRPcHRpb25zLnN0YXR1cyA9IDM7XG4gICAgICAgIH1lbHNlIGlmKGZsb2F0U3RhdHVzLnRvcCA+PSBmbG9hdE9wdGlvbnMueU1heFRocmVzaG9sZCAmJiBmbG9hdFN0YXR1cy5sZWZ0IDw9IGZsb2F0T3B0aW9ucy54TWluVGhyZXNob2xkKSB7XG4gICAgICAgICAgICBmbG9hdE9wdGlvbnMuc3RhdHVzID0gNDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGZsb2F0T3B0aW9ucy5zdGF0dXMgPT0gMSkge1xuICAgICAgICAgICAgZmxvYXRTdGF0dXMudG9wID0gZmxvYXRTdGF0dXMudG9wICsgZmxvYXRPcHRpb25zLnlPZmZzZXQ7XG4gICAgICAgICAgICBmbG9hdFN0YXR1cy5sZWZ0ID0gZmxvYXRTdGF0dXMubGVmdCArIGZsb2F0T3B0aW9ucy54T2Zmc2V0O1xuICAgICAgICB9ZWxzZSBpZihmbG9hdE9wdGlvbnMuc3RhdHVzID09IDIpIHtcbiAgICAgICAgICAgIGZsb2F0U3RhdHVzLnRvcCA9IGZsb2F0U3RhdHVzLnRvcCAtIGZsb2F0T3B0aW9ucy55T2Zmc2V0O1xuICAgICAgICB9ZWxzZSBpZihmbG9hdE9wdGlvbnMuc3RhdHVzID09IDMpIHtcbiAgICAgICAgICAgIGZsb2F0U3RhdHVzLnRvcCA9IGZsb2F0U3RhdHVzLnRvcCArIGZsb2F0T3B0aW9ucy55T2Zmc2V0O1xuICAgICAgICAgICAgZmxvYXRTdGF0dXMubGVmdCA9IGZsb2F0U3RhdHVzLmxlZnQgLSBmbG9hdE9wdGlvbnMueE9mZnNldDtcbiAgICAgICAgfWVsc2UgaWYoZmxvYXRPcHRpb25zLnN0YXR1cyA9PSA0KSB7XG4gICAgICAgICAgICBmbG9hdFN0YXR1cy50b3AgPSBmbG9hdFN0YXR1cy50b3AgLSBmbG9hdE9wdGlvbnMueU9mZnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzLnNldEZsb2F0U3RhdHVzKGZsb2F0U3RhdHVzLCBmbG9hdE9wdGlvbnMpO1xuICAgIH0sIGZsb2F0T3B0aW9ucy5kZWxheSk7XG59O1xuXG4vL+aWueW9oua1ruWKqFxuLy/mta7liqjmlrnlkJHmmK8g5bem5LiK6KeSLT7lj7PkuIrop5ItPuWPs+S4i+inki0+5bem5LiL6KeSLT7lt6bkuIrop5IuLi5cbnRpcHMucHJvdG90eXBlLmZsb2F0VHlwZVNxdWFyZSA9ICBmdW5jdGlvbigpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgbGV0IGN1c3RvbUZsb2F0T3B0aW9ucyA9IHtcbiAgICAgICAgc3RhdHVzOiAxLFxuICAgICAgICBvZmZzZXRUeXBlOiAnJScsXG4gICAgICAgIHhNaW5UaHJlc2hvbGQ6IDAsXG4gICAgICAgIHhNYXhUaHJlc2hvbGQ6IDEwMCxcbiAgICAgICAgeE9mZnNldExlbjogMC4wMSxcbiAgICAgICAgeU1pblRocmVzaG9sZDogMCxcbiAgICAgICAgeU1heFRocmVzaG9sZDogMTAwLFxuICAgICAgICB5T2Zmc2V0TGVuOiAwLjAxLFxuICAgICAgICBkZWxheTogMSxcbiAgICB9O1xuXG4gICAgbGV0IGN1c3RvbUZsb2F0U3RhdHVzID0ge1xuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgfTtcblxuICAgIGxldCBmbG9hdE9wdGlvbnMgPSB0aGlzLnNldEZsb2F0T3B0aW9ucyhjdXN0b21GbG9hdE9wdGlvbnMpO1xuICAgIGxldCBmbG9hdFN0YXR1cyA9IHRoaXMuZ2V0ZmxvYXRTdGF0dXMoY3VzdG9tRmxvYXRTdGF0dXMpO1xuXG4gICAgaWYoZmxvYXRPcHRpb25zLmZsb2F0SWQpIGNsZWFySW50ZXJ2YWwoZmxvYXRPcHRpb25zLmZsb2F0SWQpO1xuICAgIGZsb2F0T3B0aW9ucy5mbG9hdElkID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoZmxvYXRPcHRpb25zLnlNaW5UaHJlc2hvbGQgIT0gZmxvYXRPcHRpb25zLnlNYXhUaHJlc2hvbGQgJiYgZmxvYXRPcHRpb25zLnhNaW5UaHJlc2hvbGQgIT0gZmxvYXRPcHRpb25zLnhNYXhUaHJlc2hvbGQpe1xuICAgICAgICAgICAgaWYoZmxvYXRTdGF0dXMudG9wIDw9IGZsb2F0T3B0aW9ucy55TWluVGhyZXNob2xkICYmIGZsb2F0U3RhdHVzLmxlZnQgPD0gZmxvYXRPcHRpb25zLnhNaW5UaHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICBmbG9hdE9wdGlvbnMuc3RhdHVzID0gMTtcbiAgICAgICAgICAgIH1lbHNlIGlmKGZsb2F0U3RhdHVzLnRvcCA8PSBmbG9hdE9wdGlvbnMueU1pblRocmVzaG9sZCAmJiBmbG9hdFN0YXR1cy5sZWZ0ID49IGZsb2F0T3B0aW9ucy54TWF4VGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgZmxvYXRPcHRpb25zLnN0YXR1cyA9IDI7XG4gICAgICAgICAgICB9ZWxzZSBpZihmbG9hdFN0YXR1cy50b3AgPj0gZmxvYXRPcHRpb25zLnlNYXhUaHJlc2hvbGQgJiYgZmxvYXRTdGF0dXMubGVmdCA+PSBmbG9hdE9wdGlvbnMueE1heFRocmVzaG9sZCkge1xuICAgICAgICAgICAgICAgIGZsb2F0T3B0aW9ucy5zdGF0dXMgPSAzO1xuICAgICAgICAgICAgfWVsc2UgaWYoZmxvYXRTdGF0dXMudG9wID49IGZsb2F0T3B0aW9ucy55TWF4VGhyZXNob2xkICYmIGZsb2F0U3RhdHVzLmxlZnQgPD0gZmxvYXRPcHRpb25zLnhNaW5UaHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICBmbG9hdE9wdGlvbnMuc3RhdHVzID0gNDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGZsb2F0T3B0aW9ucy55TWluVGhyZXNob2xkID09IGZsb2F0T3B0aW9ucy55TWF4VGhyZXNob2xkICYmIGZsb2F0T3B0aW9ucy54TWluVGhyZXNob2xkICE9IGZsb2F0T3B0aW9ucy54TWF4VGhyZXNob2xkKXtcbiAgICAgICAgICAgIGlmKGZsb2F0U3RhdHVzLmxlZnQgPD0gZmxvYXRPcHRpb25zLnhNaW5UaHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICBmbG9hdE9wdGlvbnMuc3RhdHVzID0gNTtcbiAgICAgICAgICAgIH1lbHNlIGlmKGZsb2F0U3RhdHVzLmxlZnQgPj0gZmxvYXRPcHRpb25zLnhNYXhUaHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICBmbG9hdE9wdGlvbnMuc3RhdHVzID0gNjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGZsb2F0T3B0aW9ucy55TWluVGhyZXNob2xkICE9IGZsb2F0T3B0aW9ucy55TWF4VGhyZXNob2xkICYmIGZsb2F0T3B0aW9ucy54TWluVGhyZXNob2xkID09IGZsb2F0T3B0aW9ucy54TWF4VGhyZXNob2xkKXtcbiAgICAgICAgICAgIGlmKGZsb2F0U3RhdHVzLnRvcCA8PSBmbG9hdE9wdGlvbnMueU1pblRocmVzaG9sZCkge1xuICAgICAgICAgICAgICAgIGZsb2F0T3B0aW9ucy5zdGF0dXMgPSA3O1xuICAgICAgICAgICAgfWVsc2UgaWYoZmxvYXRTdGF0dXMudG9wID49IGZsb2F0T3B0aW9ucy55TWF4VGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgZmxvYXRPcHRpb25zLnN0YXR1cyA9IDg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZihmbG9hdE9wdGlvbnMuc3RhdHVzID09IDEpIHtcbiAgICAgICAgICAgIGZsb2F0U3RhdHVzLmxlZnQgPSBmbG9hdFN0YXR1cy5sZWZ0ICsgZmxvYXRPcHRpb25zLnhPZmZzZXQ7XG4gICAgICAgIH1lbHNlIGlmKGZsb2F0T3B0aW9ucy5zdGF0dXMgPT0gMikge1xuICAgICAgICAgICAgZmxvYXRTdGF0dXMudG9wID0gZmxvYXRTdGF0dXMudG9wICsgZmxvYXRPcHRpb25zLnlPZmZzZXQ7XG4gICAgICAgIH1lbHNlIGlmKGZsb2F0T3B0aW9ucy5zdGF0dXMgPT0gMykge1xuICAgICAgICAgICAgZmxvYXRTdGF0dXMubGVmdCA9IGZsb2F0U3RhdHVzLmxlZnQgLSBmbG9hdE9wdGlvbnMueE9mZnNldDtcbiAgICAgICAgfWVsc2UgaWYoZmxvYXRPcHRpb25zLnN0YXR1cyA9PSA0KSB7XG4gICAgICAgICAgICBmbG9hdFN0YXR1cy50b3AgPSBmbG9hdFN0YXR1cy50b3AgLSBmbG9hdE9wdGlvbnMueU9mZnNldDtcbiAgICAgICAgfWVsc2UgaWYoZmxvYXRPcHRpb25zLnN0YXR1cyA9PSA1KSB7XG4gICAgICAgICAgICBmbG9hdFN0YXR1cy5sZWZ0ID0gZmxvYXRTdGF0dXMubGVmdCArIGZsb2F0T3B0aW9ucy54T2Zmc2V0O1xuICAgICAgICB9ZWxzZSBpZihmbG9hdE9wdGlvbnMuc3RhdHVzID09IDYpIHtcbiAgICAgICAgICAgIGZsb2F0U3RhdHVzLmxlZnQgPSBmbG9hdFN0YXR1cy5sZWZ0IC0gZmxvYXRPcHRpb25zLnhPZmZzZXQ7XG4gICAgICAgIH1lbHNlIGlmKGZsb2F0T3B0aW9ucy5zdGF0dXMgPT0gNykge1xuICAgICAgICAgICAgZmxvYXRTdGF0dXMudG9wID0gZmxvYXRTdGF0dXMudG9wICsgZmxvYXRPcHRpb25zLnlPZmZzZXQ7XG4gICAgICAgIH1lbHNlIGlmKGZsb2F0T3B0aW9ucy5zdGF0dXMgPT0gOCkge1xuICAgICAgICAgICAgZmxvYXRTdGF0dXMudG9wID0gZmxvYXRTdGF0dXMudG9wIC0gZmxvYXRPcHRpb25zLnlPZmZzZXQ7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpcy5zZXRGbG9hdFN0YXR1cyhmbG9hdFN0YXR1cywgZmxvYXRPcHRpb25zKTtcbiAgICB9LCBmbG9hdE9wdGlvbnMuZGVsYXkpO1xufTtcblxudGlwcy5wcm90b3R5cGUuc2V0RmxvYXRUeXBlID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IHR5cGUgPSB0aGlzLm9wdGlvbnMuZmxvYXQudHlwZTtcbiAgICBsZXQgZmxvYXRGdW4gPSAnZmxvYXRUeXBlJyArIHR5cGUuc2xpY2UoMCwgMSkudG9VcHBlckNhc2UoKSArIHR5cGUuc2xpY2UoMSk7XG4gICAgaWYodGhpc1tmbG9hdEZ1bl0pIHtcbiAgICAgICAgdGhpc1tmbG9hdEZ1bl0oKTtcbiAgICB9ZWxzZSB7XG4gICAgICAgIHRoaXMuZmxvYXRUeXBlRGVmYXVsdCgpO1xuICAgIH1cbn07XG5cbnRpcHMucHJvdG90eXBlLnNldEZsb2F0RXZlbnRzID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBsZXQgJHRpcCA9IF90aGlzLmJhY2t1cC5fdGlwRWxtO1xuICAgIGxldCBmbG9hdEZsYWcgPSAwO1xuXG4gICAgbGV0IGhvdmVySW4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYoX3RoaXMuZmxvYXRPcHRpb25zLmZsb2F0SWQpIGNsZWFySW50ZXJ2YWwoX3RoaXMuZmxvYXRPcHRpb25zLmZsb2F0SWQpO1xuICAgIH1cbiAgICBsZXQgaG92ZXJPdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgX3RoaXMuc2V0RmxvYXRQb3NpdGlvbigrK2Zsb2F0RmxhZyk7XG4gICAgfVxuICAgIFxuICAgICR0aXAub25tb3VzZWVudGVyID0gaG92ZXJJbjtcbiAgICAkdGlwLm9ubW91c2VsZWF2ZSA9IGhvdmVyT3V0O1xufTtcblxudGlwcy5wcm90b3R5cGUuc2V0RmxvYXRQb3NpdGlvbiA9IGZ1bmN0aW9uKGZsb2F0RmxhZyA9IDApIHtcbiAgICB0aGlzLm9wdGlvbnMuZXZlbnRzLmJlZm9yZUZsb2F0ZWQuY2FsbCh0aGlzLCBmbG9hdEZsYWcpOyAgICAgIC8vVGlwcyDmta7liqjkuYvliY0g6Kem5Y+RXG5cbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIGxldCAkdGlwID0gX3RoaXMuYmFja3VwLl90aXBFbG07XG4gICAgbGV0ICR0aXBHcm91cCA9IHRoaXMuYmFja3VwLl90aXBHcm91cEVsbTtcbiAgICBsZXQgJHBFbGVtID0gX3RoaXMuYmFja3VwLl9iYXNlRWxtO1xuXG4gICAgQy5jc3MoJHRpcEdyb3VwLCB7ZGlzcGxheTogJ25vbmUnfSk7XG4gICAgbGV0IHRpcFBvc2l0aW9uID0gX3RoaXMuZ2V0UG9zaXRpb24oe30pO1xuICAgIEMuYWRkQ2xhc3MoJHRpcEdyb3VwLCB0aXBQb3NpdGlvbi5jbGFzcy50aXBDbGFzcyk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoX3RoaXMubW9uaXRvciwgJ2Zsb2F0UG9zaXRpb24nLCB7XG4gICAgICAgIGdldDpmdW5jdGlvbigpe1xuICAgICAgICAgICAgcmV0dXJuIGZsb2F0UG9zaXRpb247XG4gICAgICAgIH0sXG4gICAgICAgIHNldDpmdW5jdGlvbihuZXdWYWx1ZSl7XG4gICAgICAgICAgICBsZXQgZmxvYXRQb3NpdGlvbiA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgbGV0IHRpcFBvc2l0aW9uID0gX3RoaXMuZ2V0UG9zaXRpb24oZmxvYXRQb3NpdGlvbik7XG4gICAgICAgICAgICBDLmFkZENzcygkdGlwR3JvdXAsIHRpcFBvc2l0aW9uLnN0eWxlKTtcbiAgICAgICAgICAgIEMuYWRkQ3NzKCR0aXBHcm91cCwge2Rpc3BsYXk6ICdibG9jayd9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYodHlwZW9mIF90aGlzLm9wdGlvbnMuZmxvYXQuY3VzdG9tRmxvYXRGdW50aW9uID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgX3RoaXMub3B0aW9ucy5mbG9hdC5jdXN0b21GbG9hdEZ1bnRpb24uY2FsbChfdGhpcyk7XG4gICAgfWVsc2Uge1xuICAgICAgICBfdGhpcy5zZXRGbG9hdFR5cGUoKTtcbiAgICB9XG5cbiAgICBpZihmbG9hdEZsYWcgPT09IDApIF90aGlzLnNldEZsb2F0RXZlbnRzKCk7XG5cbiAgICB0aGlzLm9wdGlvbnMuZXZlbnRzLmZsb2F0ZWQuY2FsbCh0aGlzLCBmbG9hdEZsYWcpOyAgICAgIC8vVGlwcyDmta7liqjkuYvlkI4g6Kem5Y+RXG59O1xuXG4vKipcbiAqIOiuvue9rua1ruWKqOWPguaVsOOAguaUr+aMgeeUqOaIt+iHquWumuS5ieOAgiDmlK/mjIHnmoTlj4LmlbDmnInvvIzlj4LogIMgdGlwcy5mbG9hdE9wdGlvbnNcbiAqIHRvcFN0YXJ0OiAwLCAgICAgICAgICAgICAgICAvL+a1ruWKqOi1t+Wni+S9jee9riBUb3BcbiAqIGxlZnRTdGFydDogMCwgICAgICAgICAgICAgICAvL+a1ruWKqOi1t+Wni+S9jee9riBMZWZ0XG4gKiBzdGF0dXM6IHRydWUsICAgICAgICAgICAgICAgLy/mta7liqjnirbmgIHvvIzkuIDoiKznlKjkuo7ovazmipjngrnmlLnlj5jmlrnlkJHotovlir9cbiAqIG9mZnNldFR5cGU6ICcnLCAgICAgICAgICAgICAvL+avj+asoeaUueWPmOeKtuaAgemHj+eahOexu+Wei++8jHB4IOaIliDnmb7liIbmr5TvvIzpu5jorqRweFxuICogeE1pblRocmVzaG9sZDogMCwgICAgICAgICAgIC8veOi9tOebuOWvueS6juWfuuWHhuWFg+e0oOeahOacgOWwj+WBj+W3ruWAvFxuICogeE1heFRocmVzaG9sZDogJycsICAgICAgICAgIC8veOi9tOebuOWvueS6juWfuuWHhuWFg+e0oOeahOacgOWkp+WBj+W3ruWAvFxuICogeE9mZnNldExlbjogMSwgICAgICAgICAgICAgIC8veOi9tOS4gOasoeeahOWBj+W3rumHj1xuICogeU1pblRocmVzaG9sZDogMCwgICAgICAgICAgIC8veei9tOebuOWvueS6juWfuuWHhuWFg+e0oOeahOacgOWwj+WBj+W3ruWAvFxuICogeU1heFRocmVzaG9sZDogJycsICAgICAgICAgIC8veei9tOebuOWvueS6juWfuuWHhuWFg+e0oOeahOacgOWkp+WBj+W3ruWAvFxuICogeU9mZnNldExlbjogMSwgICAgICAgICAgICAgIC8veei9tOS4gOasoeeahOWBj+W3rumHj1xuICogZGVsYXk6IDEsICAgICAgICAgICAgICAgICAgIC8v5rWu5Yqo5L2N572u55qE5pe26Ze06Ze06ZqU77yM5Y2V5L2N5q+r56eSXG4gKiBcbiAqIEBwYXJhbSAgICBPYmplY3QgICAgICAgICAgICAgICAgIGN1c3RvbUZsb2F0T3B0aW9ucyDlh73mlbDlhoXoh6rlrprkuYnmta7liqjlj4LmlbDvvIzkvJjlhYjnuqfkvY7kuo7nlKjmiLfoh6rlrprkuYnmta7liqjlj4LmlbBcbiAqL1xudGlwcy5wcm90b3R5cGUuc2V0RmxvYXRUcmFuc2xhdGVPcHRpb25zID0gZnVuY3Rpb24oY3VzdG9tRmxvYXRPcHRpb25zKSB7XG4gICAgLy/nqpflj6Plj5HnlJ/lj5jljJbml7bpnIDopoHph43mlrDlrprkuYlmbG9hdFxuICAgIC8v6Iul5LiN5piv6aaW5qyh6K6+572u77yM5YiZ6L+Y5Y6f5b2T5YmN54q25oCBXG4gICAgbGV0IGJhY2t1cGZsb2F0T3B0aW9ucyA9IHt9O1xuICAgIC8v5rOo5oSPIHRoaXMuZmxvYXRPcHRpb25zIOWSjCB0aXBzLmZsb2F0T3B0aW9ucyDkuI3lkIxcbiAgICAvL+WJjeiAheaYr+W9k+WJjeWunuS+i+eahOa1ruWKqOWPguaVsO+8jCDlkI7ogIXmmK/pu5jorqTlj4LmlbBcbiAgICBpZih0aGlzLmZsb2F0T3B0aW9ucykge1xuICAgICAgICBiYWNrdXBmbG9hdE9wdGlvbnMuc3RhdHVzID0gdGhpcy5mbG9hdE9wdGlvbnMuc3RhdHVzOyAgICAgICAvL+W9k+WJjeeKtuaAge+8jOS4gOiIrOaYr+i9rOaKmOeCueeKtuaAgVxuICAgICAgICBiYWNrdXBmbG9hdE9wdGlvbnMuZmxvYXRJZCA9IHRoaXMuZmxvYXRPcHRpb25zLmZsb2F0SWQ7ICAgICAvL+avj+S4qua1ruWKqOmDveaYr+S+nemdoHNldEludGVydmFsIOWunueOsOeahO+8jOatpOS4uuWFtmlkXG4gICAgfTtcblxuICAgIC8v55So5oi36Ieq5a6a5LmJ5rWu5Yqo5Y+C5pWw77yM5LyY5YWI57qn6auY5LqO5Ye95pWw5YaF6Ieq5a6a5LmJ5rWu5Yqo5Y+C5pWwXG4gICAgaWYodGhpcy5vcHRpb25zLmZsb2F0LmN1c3RvbUZsb2F0T3B0aW9ucykgY3VzdG9tRmxvYXRPcHRpb25zID0gdGhpcy5vcHRpb25zLmZsb2F0LmN1c3RvbUZsb2F0T3B0aW9ucztcblxuICAgIGxldCBmbG9hdE9wdGlvbnMgPSBDLmV4dGVuZCh7fSwgdGlwcy5mbG9hdE9wdGlvbnMsIGN1c3RvbUZsb2F0T3B0aW9ucywgYmFja3VwZmxvYXRPcHRpb25zKTtcblxuICAgIGxldCBlbGVEZXRhaWxzID0gdGhpcy5nZXRFbGVtZW50RGV0YWlscygpO1xuXG4gICAgZmxvYXRPcHRpb25zLnhNaW5UaHJlc2hvbGQgPSAhQy5pc0VtcHR5TnVtKGZsb2F0T3B0aW9ucy54TWluVGhyZXNob2xkKT8gZmxvYXRPcHRpb25zLnhNaW5UaHJlc2hvbGQgOiAwO1xuICAgIGZsb2F0T3B0aW9ucy55TWluVGhyZXNob2xkID0gIUMuaXNFbXB0eU51bShmbG9hdE9wdGlvbnMueU1pblRocmVzaG9sZCk/IGZsb2F0T3B0aW9ucy55TWluVGhyZXNob2xkIDogMDtcblxuICAgIC8v6K6+572u5pyA5aSn5pyA5bCP5YC877yM5LiA6Iis5pyA5bCP5YC8MO+8jOacgOWkp+WAvOinhuaDheWGteiAjOWumu+8jOiLpeaYr+S4gOiIrOaDheWGte+8iHB477yJ5YiZ5Li65YWD57Sg55qE5pyA5aSn6ZiI5YC877yM5aaC5piv55m+5YiG5q+U77yM5YiZ5Li6MTAwJVxuICAgIGlmKGZsb2F0T3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgnb2Zmc2V0VHlwZScpICYmIGZsb2F0T3B0aW9ucy5vZmZzZXRUeXBlID09PSAnJScpIHtcbiAgICAgICAgZmxvYXRPcHRpb25zLnhNYXhUaHJlc2hvbGQgPSAhQy5pc0VtcHR5TnVtKGZsb2F0T3B0aW9ucy54TWF4VGhyZXNob2xkKT8gZmxvYXRPcHRpb25zLnhNYXhUaHJlc2hvbGQgOiAxMDA7XG4gICAgICAgIGZsb2F0T3B0aW9ucy55TWF4VGhyZXNob2xkID0gIUMuaXNFbXB0eU51bShmbG9hdE9wdGlvbnMueU1heFRocmVzaG9sZCk/IGZsb2F0T3B0aW9ucy55TWF4VGhyZXNob2xkIDogMTAwO1xuICAgICAgICBmbG9hdE9wdGlvbnMueE9mZnNldCA9IGZsb2F0T3B0aW9ucy54T2Zmc2V0TGVuO1xuICAgICAgICBmbG9hdE9wdGlvbnMueU9mZnNldCA9IGZsb2F0T3B0aW9ucy55T2Zmc2V0TGVuO1xuICAgIH1lbHNlIHtcbiAgICAgICAgZmxvYXRPcHRpb25zLnhNYXhUaHJlc2hvbGQgPSAhQy5pc0VtcHR5TnVtKGZsb2F0T3B0aW9ucy54TWF4VGhyZXNob2xkKT8gZmxvYXRPcHRpb25zLnhNYXhUaHJlc2hvbGQgOiBlbGVEZXRhaWxzLmxlZnRUaHJlc2hvbGQ7XG4gICAgICAgIGZsb2F0T3B0aW9ucy55TWF4VGhyZXNob2xkID0gIUMuaXNFbXB0eU51bShmbG9hdE9wdGlvbnMueU1heFRocmVzaG9sZCk/IGZsb2F0T3B0aW9ucy55TWF4VGhyZXNob2xkIDogZWxlRGV0YWlscy50b3BUaHJlc2hvbGQ7XG4gICAgICAgIGZsb2F0T3B0aW9ucy54T2Zmc2V0ID0gKGZsb2F0T3B0aW9ucy54TWF4VGhyZXNob2xkIC0gZmxvYXRPcHRpb25zLnhNaW5UaHJlc2hvbGQpICogZmxvYXRPcHRpb25zLnhPZmZzZXRMZW47XG4gICAgICAgIGZsb2F0T3B0aW9ucy55T2Zmc2V0ID0gKGZsb2F0T3B0aW9ucy55TWF4VGhyZXNob2xkLSBmbG9hdE9wdGlvbnMueU1pblRocmVzaG9sZCkgKiBmbG9hdE9wdGlvbnMueU9mZnNldExlbjtcbiAgICB9XG5cbiAgICB0aGlzLmZsb2F0T3B0aW9ucyA9IGZsb2F0T3B0aW9ucztcblxuICAgIHJldHVybiB0aGlzLmZsb2F0T3B0aW9ucztcbn1cblxuLy/lvZPpnIDopoHph43mlrDorr7nva5mbG9hdO+8jOWmgueql+WPo++8jOWfuuWHhuWFg+e0oOWPkeeUn+aUueWPmO+8jOiLpeS4jeaYr+mmluasoeiuvue9ru+8jOWImei/mOWOn+W9k+WJjeeKtuaAgVxudGlwcy5wcm90b3R5cGUuZ2V0ZmxvYXRUcmFuc2xhdGVTdGF0dXMgPSBmdW5jdGlvbihjdXN0b21GbG9hdFN0YXR1cykge1xuICAgIGlmKHRoaXMub3B0aW9ucy5mbG9hdC5jdXN0b21GbG9hdFN0YXR1cykge1xuICAgICAgICBjdXN0b21GbG9hdFN0YXR1cyA9IHRoaXMub3B0aW9ucy5mbG9hdC5jdXN0b21GbG9hdFN0YXR1cztcbiAgICB9ZWxzZSBpZighY3VzdG9tRmxvYXRTdGF0dXMpe1xuICAgICAgICBjdXN0b21GbG9hdFN0YXR1cyA9IHtcbiAgICAgICAgICAgIHRvcDogdGlwcy5mbG9hdE9wdGlvbnMudG9wU3RhcnQsXG4gICAgICAgICAgICBsZWZ0OiB0aXBzLmZsb2F0T3B0aW9ucy5sZWZ0U3RhcnQsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL+S7juWkh+S7veeahOeKtuaAgeS4reaBouWkjVxuICAgIGZvcihsZXQga2V5IGluIGN1c3RvbUZsb2F0U3RhdHVzKSB7XG4gICAgICAgIGlmKHRoaXMuYmFja3VwLl9mbG9hdFN0YXR1cy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBjdXN0b21GbG9hdFN0YXR1c1trZXldID0gdGhpcy5iYWNrdXAuX2Zsb2F0U3RhdHVzW2tleV07XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYmFja3VwLl9mbG9hdFN0YXR1c1trZXldID0gY3VzdG9tRmxvYXRTdGF0dXNba2V5XTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjdXN0b21GbG9hdFN0YXR1cztcbn1cblxuLyoqXG4gKiDorr7nva7lvZPliY10cmFuc2xhdGUg54q25oCBXG4gKiBARGF0ZVRpbWUgMjAyMC0wNS0yNFQyMTowMTozMiswODAwXG4gKi9cbnRpcHMucHJvdG90eXBlLnNldEZsb2F0VHJhbnNsYXRlU3RhdHVzID0gZnVuY3Rpb24oZmxvYXRTdGF0dXMsIGZsb2F0T3B0aW9ucykge1xuICAgIC8v54q25oCB5LiN6IO96LaF5Ye65Li055WM5YC877yM5LiA6Iis55uu55qE5piv5Li65LqG5L+d6K+B5LiN6LaF5Ye65Z+65YeG5YWD57SgKOWNs+S4tOeVjOWAvOS4jei2heWHuuWfuuWHhuWFg+e0oClcbiAgICBpZihmbG9hdFN0YXR1cy50b3AgPiBmbG9hdE9wdGlvbnMueU1heFRocmVzaG9sZCkgZmxvYXRTdGF0dXMudG9wID0gZmxvYXRPcHRpb25zLnlNYXhUaHJlc2hvbGQ7XG4gICAgaWYoZmxvYXRTdGF0dXMudG9wIDwgZmxvYXRPcHRpb25zLnlNaW5UaHJlc2hvbGQpIGZsb2F0U3RhdHVzLnRvcCA9IGZsb2F0T3B0aW9ucy55TWluVGhyZXNob2xkO1xuICAgIGlmKGZsb2F0U3RhdHVzLmxlZnQgPiBmbG9hdE9wdGlvbnMueE1heFRocmVzaG9sZCkgZmxvYXRTdGF0dXMubGVmdCA9IGZsb2F0T3B0aW9ucy54TWF4VGhyZXNob2xkO1xuICAgIGlmKGZsb2F0U3RhdHVzLmxlZnQgPCBmbG9hdE9wdGlvbnMueE1pblRocmVzaG9sZCkgZmxvYXRTdGF0dXMubGVmdCA9IGZsb2F0T3B0aW9ucy54TWluVGhyZXNob2xkO1xuXG4gICAgZm9yKGxldCBrZXkgaW4gZmxvYXRTdGF0dXMpIHtcbiAgICAgICAgdGhpcy5iYWNrdXAuX2Zsb2F0U3RhdHVzW2tleV0gPSBmbG9hdFN0YXR1c1trZXldO1xuICAgIH1cblxuICAgIC8v5LiA6Iis5pivcHgg5oiW6ICFIOeZvuWIhuavlFxuICAgIGxldCBvZmZzZXRUeXBlID0gZmxvYXRPcHRpb25zLmhhc093blByb3BlcnR5KCdvZmZzZXRUeXBlJyk/IGZsb2F0T3B0aW9ucy5vZmZzZXRUeXBlIDogJyc7XG5cbiAgICAvL+ivt+WKoeW/heiuvue9rmZsb2F0VHJhbnNsYXRl77yM5ZCm5YiZ5LiN55Sf5pWIXG4gICAgdGhpcy5tb25pdG9yLmZsb2F0VHJhbnNsYXRlID0ge1xuICAgICAgICB0b3A6IGZsb2F0U3RhdHVzLnRvcCArIG9mZnNldFR5cGUsXG4gICAgICAgIGxlZnQ6IGZsb2F0U3RhdHVzLmxlZnQgKyBvZmZzZXRUeXBlLFxuICAgIH1cbn1cblxuLy/pu5jorqTmta7liqjmlrnlvI/jgILmsr/nnYDln7rlh4blhYPntKDlt6bkuIrop5LliLDlj7PkuIvop5Lnm7Tnur/mta7liqhcbi8v55So5oi36Ieq5a6a5LmJ5rWu5Yqo5pa55rOV77yM5Y+v5Y+C6ICD6K+l5pa55rOV44CCXG50aXBzLnByb3RvdHlwZS5mbG9hdFRyYW5zbGF0ZVR5cGVEZWZhdWx0ID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIC8v5Ye95pWw5YaF6Ieq5a6a5LmJ55qE5rWu5Yqo5Y+C5pWw77yM5Y+C6ICDIHRpcHMuZmxvYXRPcHRpb25zXG4gICAgLy/kvJjlhYjnuqfkvY7kuo7nlKjmiLfoh6rlrprkuYnmta7liqjlj4LmlbAgdGhpcy5vcHRpb25zLmZsb2F0LmN1c3RvbUZsb2F0T3B0aW9uc1xuICAgIGxldCBjdXN0b21GbG9hdE9wdGlvbnMgPSB7XG4gICAgICAgIHN0YXR1czogdHJ1ZSxcbiAgICAgICAgeE9mZnNldExlbjogMC4wMDA1LFxuICAgICAgICB5T2Zmc2V0TGVuOiAwLjAwMDUsXG4gICAgICAgIGRlbGF5OiAxLFxuICAgIH07XG5cbiAgICAvL+a1ruWKqOi1t+Wni+eKtuaAge+8jOWmguS4jeiuvue9ru+8jOm7mOiupOWAvCB0aXBzLmZsb2F0T3B0aW9ucy50b3BTdGFydCDlkowgdGlwcy5mbG9hdE9wdGlvbnMubGVmdFN0YXJ0XG4gICAgLy/kvJjlhYjnuqfkvY7kuo4gdGhpcy5vcHRpb25zLmZsb2F0LmN1c3RvbUZsb2F0U3RhdHVzXG4gICAgLy/pppbmrKHorr7nva7mta7liqjml7bvvIx0aGlzLm9wdGlvbnMuZmxvYXQuY3VzdG9tRmxvYXRTdGF0dXMg5LiN5a2Y5Zyo77yM5Lul5ZCO5q+P5qyh5rWu5Yqo6YO95Lya6K6w5b2V5b2T5YmN5rWu5Yqo54q25oCB44CCIFxuICAgIC8v5b2T5rWP6KeI5Zmo56qX5Y+j5aSn5bCP5Y+R55Sf5pS55Y+Y5pe277yM5Lya6YeN5paw6K6+572u5rWu5Yqo44CCIOatpOaXtnRoaXMub3B0aW9ucy5mbG9hdC5jdXN0b21GbG9hdFN0YXR1c+W3suWtmOWcqO+8jOWImeS7peWFtuS4uuWHhu+8jOW/veeVpSBjdXN0b21GbG9hdFN0YXR1c1xuICAgIGxldCBjdXN0b21GbG9hdFN0YXR1cyA9IHtcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwLFxuICAgIH07XG5cbiAgICAvL+eUqOaIt+iHquWumuS5iea1ruWKqOWHveaVsOaXtu+8jOazqOaEj+imgeaJp+ihjOi/meS4pOS4quWHveaVsFxuICAgIGxldCBmbG9hdE9wdGlvbnMgPSB0aGlzLnNldEZsb2F0VHJhbnNsYXRlT3B0aW9ucyhjdXN0b21GbG9hdE9wdGlvbnMpO1xuICAgIGxldCBmbG9hdFN0YXR1cyA9IHRoaXMuZ2V0ZmxvYXRUcmFuc2xhdGVTdGF0dXMoY3VzdG9tRmxvYXRTdGF0dXMpO1xuXG4gICAgdGhpcy53cml0ZUxvZygnaW5mbycsICdmbG9hdE9wdGlvbnM6ICcsIGZsb2F0T3B0aW9ucyk7XG5cbiAgICAvL+mmluasoeiuvue9rua1ruWKqOaXtu+8jOa3u+WKoOmXtOath+iwg+eUqO+8jGlkIOS/neWtmOS4uiBmbG9hdElkXG4gICAgLy/lvZPmtY/op4jlmajnqpflj6PlpKflsI/lj5HnlJ/mlLnlj5jml7bvvIzkvJrph43mlrDorr7nva7mta7liqjjgIIg6ZyA6KaB5riF56m6ZmxvYXRJZOW5tumHjeaWsOiuvue9rumXtOath+iwg+eUqFxuICAgIC8v6Ze05q2H6LCD55So5Ye95pWw5L6d6LWW5LqOZmxvYXRPcHRpb25zIOWSjCBmbG9hdFN0YXR1c1xuICAgIGlmKGZsb2F0T3B0aW9ucy5mbG9hdElkKSBjbGVhckludGVydmFsKGZsb2F0T3B0aW9ucy5mbG9hdElkKTtcbiAgICBmbG9hdE9wdGlvbnMuZmxvYXRJZCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCl7XG4gICAgICAgIC8v5rWu5Yqo54q25oCBdG9w5aSn5LqOeei9tOS4tOeVjOWAvO+8jOihqOekuuW3suWIsOi+vuWfuuWHhuWFg+e0oOW6lemDqO+8jOWPjei/h+adpeWImeihqOekuuWIsOi+vuWfuuWHhuWFg+e0oOmhtumDqFxuICAgICAgICBpZigoZmxvYXRTdGF0dXMudG9wID49IGZsb2F0T3B0aW9ucy55TWF4VGhyZXNob2xkICYmIGZsb2F0T3B0aW9ucy5zdGF0dXMpIHx8IChmbG9hdFN0YXR1cy50b3AgPD0gZmxvYXRPcHRpb25zLnlNaW5UaHJlc2hvbGQgJiYgIWZsb2F0T3B0aW9ucy5zdGF0dXMpKSB7XG4gICAgICAgICAgICBmbG9hdE9wdGlvbnMuc3RhdHVzID0gIWZsb2F0T3B0aW9ucy5zdGF0dXM7XG4gICAgICAgIH1cblxuICAgICAgICBpZihmbG9hdE9wdGlvbnMuc3RhdHVzKSB7XG4gICAgICAgICAgICBmbG9hdFN0YXR1cy50b3AgPSBmbG9hdFN0YXR1cy50b3AgKyBmbG9hdE9wdGlvbnMueU9mZnNldDtcbiAgICAgICAgICAgIGZsb2F0U3RhdHVzLmxlZnQgPSBmbG9hdFN0YXR1cy5sZWZ0ICsgZmxvYXRPcHRpb25zLnhPZmZzZXQ7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIGZsb2F0U3RhdHVzLnRvcCA9IGZsb2F0U3RhdHVzLnRvcCAtIGZsb2F0T3B0aW9ucy55T2Zmc2V0O1xuICAgICAgICAgICAgZmxvYXRTdGF0dXMubGVmdCA9IGZsb2F0U3RhdHVzLmxlZnQgLSBmbG9hdE9wdGlvbnMueE9mZnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8v5rWu5Yqo5pyA6YeN6KaB55qE5LiA5q2l77yM6K6+572u5rWu5Yqo54q25oCB77yM5bCG5Lya6Kem5Y+R5rWu5Yqo5a6a5L2N55qE5pS55Y+YXG4gICAgICAgIF90aGlzLnNldEZsb2F0VHJhbnNsYXRlU3RhdHVzKGZsb2F0U3RhdHVzLCBmbG9hdE9wdGlvbnMpO1xuICAgIH0sIGZsb2F0T3B0aW9ucy5kZWxheSk7XG59O1xuXG4vL1gg5rWu5YqoXG4vL+a1ruWKqOaWueWQkeaYryDlt6bkuIrop5ItPuWPs+S4i+inki0+5Y+z5LiK6KeSLT7lt6bkuIvop5ItPuW3puS4iuinki4uLlxudGlwcy5wcm90b3R5cGUuZmxvYXRUcmFuc2xhdGVUeXBlWCA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBsZXQgY3VzdG9tRmxvYXRPcHRpb25zID0ge1xuICAgICAgICBzdGF0dXM6IDEsXG4gICAgICAgIG9mZnNldFR5cGU6ICclJyxcbiAgICAgICAgeE1pblRocmVzaG9sZDogMCxcbiAgICAgICAgeE1heFRocmVzaG9sZDogMTAwLFxuICAgICAgICB4T2Zmc2V0TGVuOiAwLjAxLFxuICAgICAgICB5TWluVGhyZXNob2xkOiAwLFxuICAgICAgICB5TWF4VGhyZXNob2xkOiAxMDAsXG4gICAgICAgIHlPZmZzZXRMZW46IDAuMDEsXG4gICAgICAgIGRlbGF5OiAxLFxuICAgIH07XG4gICAgXG4gICAgbGV0IGN1c3RvbUZsb2F0U3RhdHVzID0ge1xuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgfTtcblxuICAgIGxldCBmbG9hdE9wdGlvbnMgPSB0aGlzLnNldEZsb2F0VHJhbnNsYXRlT3B0aW9ucyhjdXN0b21GbG9hdE9wdGlvbnMpO1xuICAgIGxldCBmbG9hdFN0YXR1cyA9IHRoaXMuZ2V0ZmxvYXRUcmFuc2xhdGVTdGF0dXMoY3VzdG9tRmxvYXRTdGF0dXMpO1xuXG4gICAgaWYoZmxvYXRPcHRpb25zLmZsb2F0SWQpIGNsZWFySW50ZXJ2YWwoZmxvYXRPcHRpb25zLmZsb2F0SWQpO1xuICAgIGZsb2F0T3B0aW9ucy5mbG9hdElkID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoZmxvYXRTdGF0dXMudG9wIDw9IGZsb2F0T3B0aW9ucy55TWluVGhyZXNob2xkICYmIGZsb2F0U3RhdHVzLmxlZnQgPD0gZmxvYXRPcHRpb25zLnhNaW5UaHJlc2hvbGQpIHtcbiAgICAgICAgICAgIGZsb2F0T3B0aW9ucy5zdGF0dXMgPSAxO1xuICAgICAgICB9ZWxzZSBpZihmbG9hdFN0YXR1cy50b3AgPj0gZmxvYXRPcHRpb25zLnlNYXhUaHJlc2hvbGQgJiYgZmxvYXRTdGF0dXMubGVmdCA+PSBmbG9hdE9wdGlvbnMueE1heFRocmVzaG9sZCkge1xuICAgICAgICAgICAgZmxvYXRPcHRpb25zLnN0YXR1cyA9IDI7XG4gICAgICAgIH1lbHNlIGlmKGZsb2F0U3RhdHVzLnRvcCA8PSBmbG9hdE9wdGlvbnMueU1pblRocmVzaG9sZCAmJiBmbG9hdFN0YXR1cy5sZWZ0ID49IGZsb2F0T3B0aW9ucy54TWF4VGhyZXNob2xkKSB7XG4gICAgICAgICAgICBmbG9hdE9wdGlvbnMuc3RhdHVzID0gMztcbiAgICAgICAgfWVsc2UgaWYoZmxvYXRTdGF0dXMudG9wID49IGZsb2F0T3B0aW9ucy55TWF4VGhyZXNob2xkICYmIGZsb2F0U3RhdHVzLmxlZnQgPD0gZmxvYXRPcHRpb25zLnhNaW5UaHJlc2hvbGQpIHtcbiAgICAgICAgICAgIGZsb2F0T3B0aW9ucy5zdGF0dXMgPSA0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoZmxvYXRPcHRpb25zLnN0YXR1cyA9PSAxKSB7XG4gICAgICAgICAgICBmbG9hdFN0YXR1cy50b3AgPSBmbG9hdFN0YXR1cy50b3AgKyBmbG9hdE9wdGlvbnMueU9mZnNldDtcbiAgICAgICAgICAgIGZsb2F0U3RhdHVzLmxlZnQgPSBmbG9hdFN0YXR1cy5sZWZ0ICsgZmxvYXRPcHRpb25zLnhPZmZzZXQ7XG4gICAgICAgIH1lbHNlIGlmKGZsb2F0T3B0aW9ucy5zdGF0dXMgPT0gMikge1xuICAgICAgICAgICAgZmxvYXRTdGF0dXMudG9wID0gZmxvYXRTdGF0dXMudG9wIC0gZmxvYXRPcHRpb25zLnlPZmZzZXQ7XG4gICAgICAgIH1lbHNlIGlmKGZsb2F0T3B0aW9ucy5zdGF0dXMgPT0gMykge1xuICAgICAgICAgICAgZmxvYXRTdGF0dXMudG9wID0gZmxvYXRTdGF0dXMudG9wICsgZmxvYXRPcHRpb25zLnlPZmZzZXQ7XG4gICAgICAgICAgICBmbG9hdFN0YXR1cy5sZWZ0ID0gZmxvYXRTdGF0dXMubGVmdCAtIGZsb2F0T3B0aW9ucy54T2Zmc2V0O1xuICAgICAgICB9ZWxzZSBpZihmbG9hdE9wdGlvbnMuc3RhdHVzID09IDQpIHtcbiAgICAgICAgICAgIGZsb2F0U3RhdHVzLnRvcCA9IGZsb2F0U3RhdHVzLnRvcCAtIGZsb2F0T3B0aW9ucy55T2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMuc2V0RmxvYXRUcmFuc2xhdGVTdGF0dXMoZmxvYXRTdGF0dXMsIGZsb2F0T3B0aW9ucyk7XG4gICAgfSwgZmxvYXRPcHRpb25zLmRlbGF5KTtcbn07XG5cbi8v5pa55b2i5rWu5YqoXG4vL+a1ruWKqOaWueWQkeaYryDlt6bkuIrop5ItPuWPs+S4iuinki0+5Y+z5LiL6KeSLT7lt6bkuIvop5ItPuW3puS4iuinki4uLlxudGlwcy5wcm90b3R5cGUuZmxvYXRUcmFuc2xhdGVUeXBlU3F1YXJlID0gIGZ1bmN0aW9uKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBsZXQgY3VzdG9tRmxvYXRPcHRpb25zID0ge1xuICAgICAgICBzdGF0dXM6IDEsXG4gICAgICAgIG9mZnNldFR5cGU6ICclJyxcbiAgICAgICAgeE1pblRocmVzaG9sZDogMCxcbiAgICAgICAgeE1heFRocmVzaG9sZDogMTAwLFxuICAgICAgICB4T2Zmc2V0TGVuOiAwLjAxLFxuICAgICAgICB5TWluVGhyZXNob2xkOiAwLFxuICAgICAgICB5TWF4VGhyZXNob2xkOiAxMDAsXG4gICAgICAgIHlPZmZzZXRMZW46IDAuMDEsXG4gICAgICAgIGRlbGF5OiAxLFxuICAgIH07XG5cbiAgICBsZXQgY3VzdG9tRmxvYXRTdGF0dXMgPSB7XG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICB9O1xuXG4gICAgbGV0IGZsb2F0T3B0aW9ucyA9IHRoaXMuc2V0RmxvYXRUcmFuc2xhdGVPcHRpb25zKGN1c3RvbUZsb2F0T3B0aW9ucyk7XG4gICAgbGV0IGZsb2F0U3RhdHVzID0gdGhpcy5nZXRmbG9hdFRyYW5zbGF0ZVN0YXR1cyhjdXN0b21GbG9hdFN0YXR1cyk7XG5cbiAgICBpZihmbG9hdE9wdGlvbnMuZmxvYXRJZCkgY2xlYXJJbnRlcnZhbChmbG9hdE9wdGlvbnMuZmxvYXRJZCk7XG4gICAgZmxvYXRPcHRpb25zLmZsb2F0SWQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xuICAgICAgICBpZihmbG9hdE9wdGlvbnMueU1pblRocmVzaG9sZCAhPSBmbG9hdE9wdGlvbnMueU1heFRocmVzaG9sZCAmJiBmbG9hdE9wdGlvbnMueE1pblRocmVzaG9sZCAhPSBmbG9hdE9wdGlvbnMueE1heFRocmVzaG9sZCl7XG4gICAgICAgICAgICBpZihmbG9hdFN0YXR1cy50b3AgPD0gZmxvYXRPcHRpb25zLnlNaW5UaHJlc2hvbGQgJiYgZmxvYXRTdGF0dXMubGVmdCA8PSBmbG9hdE9wdGlvbnMueE1pblRocmVzaG9sZCkge1xuICAgICAgICAgICAgICAgIGZsb2F0T3B0aW9ucy5zdGF0dXMgPSAxO1xuICAgICAgICAgICAgfWVsc2UgaWYoZmxvYXRTdGF0dXMudG9wIDw9IGZsb2F0T3B0aW9ucy55TWluVGhyZXNob2xkICYmIGZsb2F0U3RhdHVzLmxlZnQgPj0gZmxvYXRPcHRpb25zLnhNYXhUaHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICBmbG9hdE9wdGlvbnMuc3RhdHVzID0gMjtcbiAgICAgICAgICAgIH1lbHNlIGlmKGZsb2F0U3RhdHVzLnRvcCA+PSBmbG9hdE9wdGlvbnMueU1heFRocmVzaG9sZCAmJiBmbG9hdFN0YXR1cy5sZWZ0ID49IGZsb2F0T3B0aW9ucy54TWF4VGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgZmxvYXRPcHRpb25zLnN0YXR1cyA9IDM7XG4gICAgICAgICAgICB9ZWxzZSBpZihmbG9hdFN0YXR1cy50b3AgPj0gZmxvYXRPcHRpb25zLnlNYXhUaHJlc2hvbGQgJiYgZmxvYXRTdGF0dXMubGVmdCA8PSBmbG9hdE9wdGlvbnMueE1pblRocmVzaG9sZCkge1xuICAgICAgICAgICAgICAgIGZsb2F0T3B0aW9ucy5zdGF0dXMgPSA0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYoZmxvYXRPcHRpb25zLnlNaW5UaHJlc2hvbGQgPT0gZmxvYXRPcHRpb25zLnlNYXhUaHJlc2hvbGQgJiYgZmxvYXRPcHRpb25zLnhNaW5UaHJlc2hvbGQgIT0gZmxvYXRPcHRpb25zLnhNYXhUaHJlc2hvbGQpe1xuICAgICAgICAgICAgaWYoZmxvYXRTdGF0dXMubGVmdCA8PSBmbG9hdE9wdGlvbnMueE1pblRocmVzaG9sZCkge1xuICAgICAgICAgICAgICAgIGZsb2F0T3B0aW9ucy5zdGF0dXMgPSA1O1xuICAgICAgICAgICAgfWVsc2UgaWYoZmxvYXRTdGF0dXMubGVmdCA+PSBmbG9hdE9wdGlvbnMueE1heFRocmVzaG9sZCkge1xuICAgICAgICAgICAgICAgIGZsb2F0T3B0aW9ucy5zdGF0dXMgPSA2O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYoZmxvYXRPcHRpb25zLnlNaW5UaHJlc2hvbGQgIT0gZmxvYXRPcHRpb25zLnlNYXhUaHJlc2hvbGQgJiYgZmxvYXRPcHRpb25zLnhNaW5UaHJlc2hvbGQgPT0gZmxvYXRPcHRpb25zLnhNYXhUaHJlc2hvbGQpe1xuICAgICAgICAgICAgaWYoZmxvYXRTdGF0dXMudG9wIDw9IGZsb2F0T3B0aW9ucy55TWluVGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgZmxvYXRPcHRpb25zLnN0YXR1cyA9IDc7XG4gICAgICAgICAgICB9ZWxzZSBpZihmbG9hdFN0YXR1cy50b3AgPj0gZmxvYXRPcHRpb25zLnlNYXhUaHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICBmbG9hdE9wdGlvbnMuc3RhdHVzID0gODtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGZsb2F0T3B0aW9ucy5zdGF0dXMgPT0gMSkge1xuICAgICAgICAgICAgZmxvYXRTdGF0dXMubGVmdCA9IGZsb2F0U3RhdHVzLmxlZnQgKyBmbG9hdE9wdGlvbnMueE9mZnNldDtcbiAgICAgICAgfWVsc2UgaWYoZmxvYXRPcHRpb25zLnN0YXR1cyA9PSAyKSB7XG4gICAgICAgICAgICBmbG9hdFN0YXR1cy50b3AgPSBmbG9hdFN0YXR1cy50b3AgKyBmbG9hdE9wdGlvbnMueU9mZnNldDtcbiAgICAgICAgfWVsc2UgaWYoZmxvYXRPcHRpb25zLnN0YXR1cyA9PSAzKSB7XG4gICAgICAgICAgICBmbG9hdFN0YXR1cy5sZWZ0ID0gZmxvYXRTdGF0dXMubGVmdCAtIGZsb2F0T3B0aW9ucy54T2Zmc2V0O1xuICAgICAgICB9ZWxzZSBpZihmbG9hdE9wdGlvbnMuc3RhdHVzID09IDQpIHtcbiAgICAgICAgICAgIGZsb2F0U3RhdHVzLnRvcCA9IGZsb2F0U3RhdHVzLnRvcCAtIGZsb2F0T3B0aW9ucy55T2Zmc2V0O1xuICAgICAgICB9ZWxzZSBpZihmbG9hdE9wdGlvbnMuc3RhdHVzID09IDUpIHtcbiAgICAgICAgICAgIGZsb2F0U3RhdHVzLmxlZnQgPSBmbG9hdFN0YXR1cy5sZWZ0ICsgZmxvYXRPcHRpb25zLnhPZmZzZXQ7XG4gICAgICAgIH1lbHNlIGlmKGZsb2F0T3B0aW9ucy5zdGF0dXMgPT0gNikge1xuICAgICAgICAgICAgZmxvYXRTdGF0dXMubGVmdCA9IGZsb2F0U3RhdHVzLmxlZnQgLSBmbG9hdE9wdGlvbnMueE9mZnNldDtcbiAgICAgICAgfWVsc2UgaWYoZmxvYXRPcHRpb25zLnN0YXR1cyA9PSA3KSB7XG4gICAgICAgICAgICBmbG9hdFN0YXR1cy50b3AgPSBmbG9hdFN0YXR1cy50b3AgKyBmbG9hdE9wdGlvbnMueU9mZnNldDtcbiAgICAgICAgfWVsc2UgaWYoZmxvYXRPcHRpb25zLnN0YXR1cyA9PSA4KSB7XG4gICAgICAgICAgICBmbG9hdFN0YXR1cy50b3AgPSBmbG9hdFN0YXR1cy50b3AgLSBmbG9hdE9wdGlvbnMueU9mZnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzLnNldEZsb2F0VHJhbnNsYXRlU3RhdHVzKGZsb2F0U3RhdHVzLCBmbG9hdE9wdGlvbnMpO1xuICAgIH0sIGZsb2F0T3B0aW9ucy5kZWxheSk7XG59O1xuXG4vKipcbiAqIOiuvue9rua1ruWKqOeahOi1t+Wni+eCuVxuICog6YCa6L+H6Ze05q2H5pS55Y+YdGlwR3JvdXDlhYPntKB0cmFuc2xhdGXovr7liLDmta7liqjnmoTmlYjmnpxcbiAqL1xudGlwcy5wcm90b3R5cGUuc2V0ZmxvYXRUcmFuc2xhdGVTdGFydCA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBmbG9hdE9wdGlvbnMgPSB0aGlzLmZsb2F0T3B0aW9ucztcbiAgICBsZXQgb2Zmc2V0VHlwZSA9IGZsb2F0T3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgnb2Zmc2V0VHlwZScpPyBmbG9hdE9wdGlvbnMub2Zmc2V0VHlwZSA6ICcnO1xuICAgIGxldCBwb3NpdGlvblN0YXJ0ID0ge1xuICAgICAgICB0b3A6IGZsb2F0T3B0aW9ucy50b3BTdGFydCArIG9mZnNldFR5cGUsXG4gICAgICAgIGxlZnQ6IGZsb2F0T3B0aW9ucy5sZWZ0U3RhcnQgKyBvZmZzZXRUeXBlLFxuICAgIH07XG5cbiAgICBsZXQgJHRpcEdyb3VwID0gdGhpcy5iYWNrdXAuX3RpcEdyb3VwRWxtO1xuICAgIGxldCB0aXBQb3NpdGlvblN0YXJ0ID0gdGhpcy5nZXRQb3NpdGlvbihwb3NpdGlvblN0YXJ0KTtcbiAgICBDLmFkZENsYXNzKCR0aXBHcm91cCwgdGlwUG9zaXRpb25TdGFydC5jbGFzcy50aXBDbGFzcyk7XG4gICAgQy5hZGRDc3MoJHRpcEdyb3VwLCB0aXBQb3NpdGlvblN0YXJ0LnN0eWxlKTtcbn1cblxuLyoqXG4gKiDorr7nva7mta7liqjnsbvlnovvvIzpu5jorqTmta7liqjmlrnlvI/mmK/lt6bkuIrop5ItPuWPs+S4i+inklxuICovXG50aXBzLnByb3RvdHlwZS5zZXRGbG9hdFRyYW5zbGF0ZVR5cGUgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgdHlwZSA9IHRoaXMub3B0aW9ucy5mbG9hdC50eXBlO1xuICAgIGxldCBmbG9hdEZ1biA9ICdmbG9hdFRyYW5zbGF0ZVR5cGUnICsgdHlwZS5zbGljZSgwLCAxKS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKTtcbiAgICBpZih0aGlzW2Zsb2F0RnVuXSkge1xuICAgICAgICB0aGlzW2Zsb2F0RnVuXSgpO1xuICAgIH1lbHNlIHtcbiAgICAgICAgdGhpcy5mbG9hdFR5cGVUcmFuc2xhdGVEZWZhdWx0KCk7XG4gICAgfVxufTtcblxuLyoqXG4gKiDmta7liqjlm57osIPlh73mlbBcbiAqIOm8oOagh+aCrOWBnOWcqFRpcHMg5LiK5pe277yM5YGc5q2i5rWu5YqoXG4gKiDpvKDmoIfku45UaXBz56e75byA77yM57un57ut5rWu5YqoXG4gKi9cbnRpcHMucHJvdG90eXBlLnNldEZsb2F0VHJhbnNsYXRlRXZlbnRzID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBsZXQgJHRpcCA9IF90aGlzLmJhY2t1cC5fdGlwRWxtO1xuICAgIGxldCBmbG9hdEZsYWcgPSAwO1xuXG4gICAgbGV0IGhvdmVySW4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYoX3RoaXMuZmxvYXRPcHRpb25zLmZsb2F0SWQpIGNsZWFySW50ZXJ2YWwoX3RoaXMuZmxvYXRPcHRpb25zLmZsb2F0SWQpO1xuICAgIH1cbiAgICBsZXQgaG92ZXJPdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgX3RoaXMuc2V0RmxvYXRUcmFuc2xhdGUoKytmbG9hdEZsYWcpO1xuICAgIH1cbiAgICBcbiAgICAkdGlwLm9ubW91c2VlbnRlciA9IGhvdmVySW47XG4gICAgJHRpcC5vbm1vdXNlbGVhdmUgPSBob3Zlck91dDtcbn07XG5cbi8qKlxuICog6K6h566XVGlwcyDkvY3nva7ovazlj5jph4/vvIzmlK/mjIFweOWSjOeZvuWIhuavlFxuICovXG50aXBzLnByb3RvdHlwZS5nZXRUcmFuc2xhdGUgPSBmdW5jdGlvbihteVRyYW5zbGF0ZSwgY2FsY3VsYXRlVGlwKSB7XG4gICAgbGV0IGVsZURldGFpbHMgPSB0aGlzLmdldEVsZW1lbnREZXRhaWxzKCk7XG5cbiAgICBsZXQgdGlwR3JvdXBXaWR0aCA9IGVsZURldGFpbHMudGlwR3JvdXBXaWR0aDtcbiAgICBsZXQgdGlwR3JvdXBIZWlnaHQgPSBlbGVEZXRhaWxzLnRpcEdyb3VwSGVpZ2h0O1xuICAgIGlmKGNhbGN1bGF0ZVRpcCA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGlwR3JvdXBXaWR0aCA9IDA7XG4gICAgICAgIHRpcEdyb3VwSGVpZ2h0ID0gMDtcbiAgICB9XG5cbiAgICBsZXQgdGlwVHJhbnNsYXRlID0ge1xuICAgICAgICB0b3A6IFwiXCIsXG4gICAgICAgIGxlZnQ6IFwiXCIsXG4gICAgfTtcblxuICAgIGlmKHRoaXMuZmxvYXRPcHRpb25zLmhhc093blByb3BlcnR5KCdvZmZzZXRUeXBlJykgJiYgdGhpcy5mbG9hdE9wdGlvbnMub2Zmc2V0VHlwZSA9PT0gJyUnKSB7XG4gICAgICAgIHRpcFRyYW5zbGF0ZS50b3AgPSAoZWxlRGV0YWlscy5iYXNlSGVpZ2h0IC0gdGlwR3JvdXBIZWlnaHQpICogcGFyc2VGbG9hdChteVRyYW5zbGF0ZS50b3ApLzEwMDtcbiAgICAgICAgdGlwVHJhbnNsYXRlLmxlZnQgPSAoZWxlRGV0YWlscy5iYXNlV2lkdGggLSB0aXBHcm91cFdpZHRoKSAqIHBhcnNlRmxvYXQobXlUcmFuc2xhdGUubGVmdCkvMTAwO1xuICAgIH1lbHNlIHtcbiAgICAgICAgdGlwVHJhbnNsYXRlLnRvcCA9IHBhcnNlRmxvYXQobXlUcmFuc2xhdGUudG9wKTtcbiAgICAgICAgdGlwVHJhbnNsYXRlLmxlZnQgPSBwYXJzZUZsb2F0KG15VHJhbnNsYXRlLmxlZnQpO1xuICAgIH1cblxuICAgIHRpcFRyYW5zbGF0ZS50b3AgPSB0aXBUcmFuc2xhdGUudG9wLnRvRml4ZWQoNCkgKyBcInB4XCI7XG4gICAgdGlwVHJhbnNsYXRlLmxlZnQgPSB0aXBUcmFuc2xhdGUubGVmdC50b0ZpeGVkKDQpICsgXCJweFwiO1xuXG4gICAgcmV0dXJuIHRpcFRyYW5zbGF0ZTtcbn07XG5cbi8qKlxuICogdHJhbnNsYXRlIOa1ruWKqOWFpeWPo+WHveaVsOOAglxuICovXG50aXBzLnByb3RvdHlwZS5zZXRGbG9hdFRyYW5zbGF0ZSA9IGZ1bmN0aW9uKGZsb2F0RmxhZyA9IDApIHtcbiAgICB0aGlzLm9wdGlvbnMuZXZlbnRzLmJlZm9yZUZsb2F0ZWQuY2FsbCh0aGlzLCBmbG9hdEZsYWcpOyAgICAgIC8vVGlwcyDmta7liqjkuYvliY0g6Kem5Y+RXG5cbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIGxldCAkdGlwID0gX3RoaXMuYmFja3VwLl90aXBFbG07XG4gICAgbGV0ICR0aXBHcm91cCA9IHRoaXMuYmFja3VwLl90aXBHcm91cEVsbTtcbiAgICBsZXQgJHBFbGVtID0gX3RoaXMuYmFja3VwLl9iYXNlRWxtO1xuXG4gICAgQy5jc3MoJHRpcEdyb3VwLCB7ZGlzcGxheTogJ25vbmUnfSk7XG5cbiAgICBsZXQgbGFzdFZhbHVlID0gbnVsbDtcbiAgICBsZXQgbGFzdFRpcFRyYW5zbGF0ZSA9IG51bGw7XG5cbiAgICBsZXQgY29tcGFyZSA9IGZ1bmN0aW9uKGxhc3RWYWx1ZSwgbmV3VmFsdWUpIHtcbiAgICAgICAgLy8gX3RoaXMud3JpdGVMb2coJ2luZm8nLCAnKioqIENvbXBhcmUgVmFsdWU6ICcsIGxhc3RWYWx1ZSwgbmV3VmFsdWUpO1xuXG4gICAgICAgIGlmKCFsYXN0VmFsdWUpIHtcbiAgICAgICAgICAgIF90aGlzLndyaXRlTG9nKCdpbmZvJywgJ05vIGxhc3QgdmFsdWUnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxhc3RWYWx1ZSA9IEMuZXh0ZW5kKHt9LCBsYXN0VmFsdWUpO1xuICAgICAgICBuZXdWYWx1ZSA9IEMuZXh0ZW5kKHt9LCBuZXdWYWx1ZSk7XG5cbiAgICAgICAgbGV0IHR5cGUgPSBcInZhbHVlXCI7XG4gICAgICAgIGlmKEMuaXNTdHJpbmcobGFzdFZhbHVlLmxlZnQpKSB7XG4gICAgICAgICAgICB0eXBlID0gXCJ0cmFuc2xhdGVcIjtcbiAgICAgICAgICAgIGxhc3RWYWx1ZS5sZWZ0ID0gcGFyc2VGbG9hdChsYXN0VmFsdWUubGVmdCk7XG4gICAgICAgICAgICBsYXN0VmFsdWUudG9wID0gcGFyc2VGbG9hdChsYXN0VmFsdWUudG9wKTtcbiAgICAgICAgICAgIG5ld1ZhbHVlLmxlZnQgPSBwYXJzZUZsb2F0KG5ld1ZhbHVlLmxlZnQpO1xuICAgICAgICAgICAgbmV3VmFsdWUudG9wID0gcGFyc2VGbG9hdChuZXdWYWx1ZS50b3ApO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGxlZnRGbGFnID0gJz8nO1xuICAgICAgICBpZihuZXdWYWx1ZS5sZWZ0ID4gbGFzdFZhbHVlLmxlZnQpIGxlZnRGbGFnID0gJz4nO1xuICAgICAgICBlbHNlIGlmKG5ld1ZhbHVlLmxlZnQgPT0gbGFzdFZhbHVlLmxlZnQpIGxlZnRGbGFnID0gJz0nO1xuICAgICAgICBlbHNlIGlmKG5ld1ZhbHVlLmxlZnQgPCBsYXN0VmFsdWUubGVmdCkgbGVmdEZsYWcgPSAnPCc7XG5cbiAgICAgICAgbGV0IHRvcEZsYWcgPSAnPyc7XG4gICAgICAgIGlmKG5ld1ZhbHVlLnRvcCA+IGxhc3RWYWx1ZS50b3ApIHRvcEZsYWcgPSAnPic7XG4gICAgICAgIGVsc2UgaWYobmV3VmFsdWUudG9wID09IGxhc3RWYWx1ZS50b3ApIHRvcEZsYWcgPSAnPSc7XG4gICAgICAgIGVsc2UgaWYobmV3VmFsdWUudG9wIDwgbGFzdFZhbHVlLnRvcCkgdG9wRmxhZyA9ICc8JztcblxuICAgICAgICAvLyBfdGhpcy53cml0ZUxvZygnaW5mbycsICdOZXcgJXMgTGVmdCA6IE9sZCAlcyBMZWZ0ID8gJywgdHlwZSwgdHlwZSwgbGVmdEZsYWcpO1xuICAgICAgICAvLyBfdGhpcy53cml0ZUxvZygnaW5mbycsICdOZXcgJXMgVG9wICA6IE9sZCAlcyBUb3AgID8gJywgdHlwZSwgdHlwZSwgbGVmdEZsYWcpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsZWZ0RmxhZzogbGVmdEZsYWcsXG4gICAgICAgICAgICB0b3BGbGFnOiB0b3BGbGFnLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGNvbXBhcmVSZXN1bHQgPSBmdW5jdGlvbih2YWx1ZVJlc3VsdCwgdHJhbnNsYXRlUmVzdWx0KSB7XG4gICAgICAgIGlmKCF2YWx1ZVJlc3VsdCkgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgbGV0IHJlc3VsdCA9IHRydWU7XG5cbiAgICAgICAgaWYodmFsdWVSZXN1bHQubGVmdEZsYWcgIT0gdHJhbnNsYXRlUmVzdWx0LmxlZnRGbGFnKSB7XG4gICAgICAgICAgICBfdGhpcy53cml0ZUxvZygnZXJyb3InLCAnVHJhbnNsYXRlIExlZnQgRXJyb3IhICcsIHZhbHVlUmVzdWx0LmxlZnRGbGFnLCB0cmFuc2xhdGVSZXN1bHQubGVmdEZsYWcpO1xuICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZih2YWx1ZVJlc3VsdC50b3BGbGFnICE9IHRyYW5zbGF0ZVJlc3VsdC50b3BGbGFnKSB7XG4gICAgICAgICAgICBfdGhpcy53cml0ZUxvZygnZXJyb3InLCAnVHJhbnNsYXRlIFRvcCBFcnJvciEgJywgdmFsdWVSZXN1bHQudG9wRmxhZywgdHJhbnNsYXRlUmVzdWx0LnRvcEZsYWcpO1xuICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8v57uZdGhpcy5tb25pdG9yIOa3u+WKoOaWsOWxnuaApyBmbG9hdFRyYW5zbGF0ZVxuICAgIC8v5b2TIGZsb2F0VHJhbnNsYXRl5pS55Y+Y5pe277yM6K6+572uIHRpcEdyb3VwIOeahCB0cmFuc2xhdGXvvIzovr7liLDmta7liqjnmoTmlYjmnpxcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoX3RoaXMubW9uaXRvciwgJ2Zsb2F0VHJhbnNsYXRlJywge1xuICAgICAgICBnZXQ6ZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHJldHVybiBmbG9hdFRyYW5zbGF0ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OmZ1bmN0aW9uKG5ld1ZhbHVlKXtcbiAgICAgICAgICAgIGxldCBmbG9hdFRyYW5zbGF0ZSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgbGV0IHRpcFRyYW5zbGF0ZSA9IF90aGlzLmdldFRyYW5zbGF0ZShmbG9hdFRyYW5zbGF0ZSk7XG5cbiAgICAgICAgICAgIC8vIOaDs+iwg+ivleeahOivneWwseWPlua2iOazqOmHilxuICAgICAgICAgICAgLy8gbGV0IHJlc3VsdCA9IGNvbXBhcmVSZXN1bHQoY29tcGFyZShsYXN0VmFsdWUsIG5ld1ZhbHVlKSwgY29tcGFyZShsYXN0VGlwVHJhbnNsYXRlLCB0aXBUcmFuc2xhdGUpKTtcbiAgICAgICAgICAgIC8vIGlmKCFyZXN1bHQpIHtcbiAgICAgICAgICAgIC8vICAgICBfdGhpcy53cml0ZUxvZygnaW5mbycsICctLS0gTGFzdCBWYWx1ZTogJywgbGFzdFZhbHVlLCBsYXN0VGlwVHJhbnNsYXRlKTtcbiAgICAgICAgICAgIC8vICAgICBfdGhpcy53cml0ZUxvZygnaW5mbycsICcrKysgTmV3ICBWYWx1ZTogJywgbmV3VmFsdWUsIHRpcFRyYW5zbGF0ZSk7XG4gICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgIGxldCB0cmFuc2xhdGUgPSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoJysgdGlwVHJhbnNsYXRlLmxlZnQgKyAnLCcgKyB0aXBUcmFuc2xhdGUudG9wICsgJyknLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgQy5hZGRDc3MoJHRpcEdyb3VwLCB0cmFuc2xhdGUpO1xuXG4gICAgICAgICAgICBsYXN0VmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgIGxhc3RUaXBUcmFuc2xhdGUgPSB0aXBUcmFuc2xhdGU7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmKHR5cGVvZiBfdGhpcy5vcHRpb25zLmZsb2F0LmN1c3RvbUZsb2F0RnVudGlvbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIF90aGlzLm9wdGlvbnMuZmxvYXQuY3VzdG9tRmxvYXRGdW50aW9uLmNhbGwoX3RoaXMpO1xuICAgIH1lbHNlIHtcbiAgICAgICAgX3RoaXMuc2V0RmxvYXRUcmFuc2xhdGVUeXBlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRmbG9hdFRyYW5zbGF0ZVN0YXJ0KCk7XG5cbiAgICBpZihmbG9hdEZsYWcgPT09IDApIF90aGlzLnNldEZsb2F0VHJhbnNsYXRlRXZlbnRzKCk7XG5cbiAgICB0aGlzLm9wdGlvbnMuZXZlbnRzLmZsb2F0ZWQuY2FsbCh0aGlzLCBmbG9hdEZsYWcpOyAgICAgIC8vVGlwcyDmta7liqjkuYvlkI4g6Kem5Y+RXG59O1xuXG4vKipcbiAqIOiuvue9rlRpcHMgR3JvdXAg5a6a5L2NXG4gKiDljIXmi6zlm7rlrprlrprkvY3lkozmta7liqjlrprkvY3jgIJcbiAqIEZsb2F0IOWSjCBUcmFuc2xhdGUg6YO95piv5rWu5Yqo5a6a5L2N77yM5Y+q55So5L2/55So55qE5pa55rOV5LiN5ZCMXG4gKi9cbnRpcHMucHJvdG90eXBlLnNldFRpcHNQb3NpdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCAkdGlwID0gdGhpcy5iYWNrdXAuX3RpcEVsbTtcbiAgICBsZXQgJHRpcEdyb3VwID0gdGhpcy5iYWNrdXAuX3RpcEdyb3VwRWxtO1xuICAgIGxldCAkcEVsZW0gPSB0aGlzLmJhY2t1cC5fYmFzZUVsbTtcblxuICAgIGlmKHRoaXMub3B0aW9ucy5wb3NpdGlvbiA9PSAnZmxvYXQnKSB7XG4gICAgICAgIHRoaXMuc2V0RmxvYXRQb3NpdGlvbigpO1xuICAgIH1lbHNlIGlmKHRoaXMub3B0aW9ucy5wb3NpdGlvbiA9PSAndHJhbnNsYXRlJykge1xuICAgICAgICB0aGlzLnNldEZsb2F0VHJhbnNsYXRlKCk7XG4gICAgfWVsc2Uge1xuICAgICAgICBsZXQgdGlwUG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uKHRoaXMub3B0aW9ucy5wb3NpdGlvbik7XG4gICAgICAgIGlmKHRoaXMuaXNCb2R5RWxlbWVudCgpKSB7XG4gICAgICAgICAgICBDLmFkZENsYXNzKCR0aXBHcm91cCwgdGlwUG9zaXRpb24uY2xhc3MudGlwQ2xhc3MpO1xuICAgICAgICAgICAgdGhpcy5zZXRDbGFzc09mZnNldCgpO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAkdGlwR3JvdXAuc3R5bGUuY3NzVGV4dCA9ICcnO1xuICAgICAgICAgICAgQy5hZGRDc3MoJHRpcEdyb3VwLCB0aXBQb3NpdGlvbi5zdHlsZSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG50aXBzLnByb3RvdHlwZS5zZXRCZ1Bvc2l0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgaWYoIXRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kIHx8ICF0aGlzLmJhY2t1cC5fYmFja2dyb3VuZEVsZW0pIHJldHVybiBmYWxzZTtcbiAgICBsZXQgJGJnID0gdGhpcy5iYWNrdXAuX2JhY2tncm91bmRFbGVtO1xuXG4gICAgaWYodGhpcy5pc0JvZHlFbGVtZW50KCkpIHtcbiAgICAgICAgbGV0IHBvc2l0aW9uQ2xhc3MgPSB0aGlzLmdldFBvc2l0aW9uQ2xhc3ModGhpcy5vcHRpb25zLnBvc2l0aW9uKTtcbiAgICAgICAgQy5hZGRDbGFzcygkYmcsIHBvc2l0aW9uQ2xhc3MuYmdDbGFzcyk7XG4gICAgfWVsc2Uge1xuICAgICAgICBsZXQgZWxlRGV0YWlscyA9IHRoaXMuZ2V0RWxlbWVudERldGFpbHMoKTtcbiAgICAgICAgbGV0IGJnQ3NzID0gQy5leHRlbmQoe30sIGVsZURldGFpbHMuYmFzZVBvc2l0aW9uLCB7XG4gICAgICAgICAgICB3aWR0aDogZWxlRGV0YWlscy5iYXNlT3V0ZXJXaWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogZWxlRGV0YWlscy5iYXNlT3V0ZXJIZWlnaHRcbiAgICAgICAgfSwge1wiYm9yZGVyLXJhZGl1c1wiOiBlbGVEZXRhaWxzLmJhc2VCb3JkZXJSYWRpdXN9KTtcblxuICAgICAgICBDLmFkZENzcygkYmcsIGJnQ3NzKTtcbiAgICB9XG59O1xuXG4vL+WIneWni+WMllRpcHPkvY3nva7vvIznm67nmoTlnKjkuo7lj6/ku6XojrflvpdUaXBzIOeahOecn+WunuWuveW6pumrmOW6plxudGlwcy5wcm90b3R5cGUuc2V0SW5pdFBvc2l0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0ICR0aXBHcm91cCA9IHRoaXMuYmFja3VwLl90aXBHcm91cEVsbTtcbiAgICBDLmFkZENsYXNzKCR0aXBHcm91cCwgJ29ob1RpcC1pbml0Jyk7XG59XG5cbi8v5Yid5aeL5YyWVGlwc+S9jee9ruWQjuW/hemhu+WOu+mZpFxudGlwcy5wcm90b3R5cGUudW5zZXRJbml0UG9zaXRpb24gPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgJHRpcEdyb3VwID0gdGhpcy5iYWNrdXAuX3RpcEdyb3VwRWxtO1xuICAgIEMucmVtb3ZlQ2xhc3MoJHRpcEdyb3VwLCAnb2hvVGlwLWluaXQnKTtcbn1cblxudGlwcy5wcm90b3R5cGUuc2V0UG9zaXRpb24gPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnNldFRpcHNQb3NpdGlvbigpO1xuICAgIHRoaXMuc2V0QmdQb3NpdGlvbigpO1xufTtcblxudGlwcy5wcm90b3R5cGUucmVzZXRQb3NpdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZXZlbnQgPSB7fTtcbiAgICB0aGlzLmV2ZW50LnR5cGUgPSAncmVzaXplJztcbiAgICB0aGlzLnNldFBvc2l0aW9uKCk7XG59XG5cbnRpcHMucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgIHRoaXMuYmFja3VwLl9iYXNlRWxtID0gdGhpcy5nZXRCYXNlRWxlbWVtdChvcHRpb25zKTtcbiAgICB0aGlzLmJhY2t1cC5fdGlwR3JvdXBFbG0gPSB0aGlzLmdldFRpcHNHcm91cChvcHRpb25zKTtcbiAgICB0aGlzLmJhY2t1cC5fdGlwQ29udGFpbmVyRWxtID0gdGhpcy5nZXRUaXBzQ29udGFpbmVyKG9wdGlvbnMpO1xuICAgIHRoaXMuYmFja3VwLl9iYWNrZ3JvdW5kRWxlbSA9IHRoaXMucmVuZGVyVGlwc0JnKG9wdGlvbnMpO1xuICAgIHRoaXMuYmFja3VwLl90aXBFbG0gPSB0aGlzLnJlbmRlclRpcHNCb2R5KG9wdGlvbnMpO1xuICAgIHRoaXMuc2V0UG9zaXRpb24oKTtcbn07XG5cbnRpcHMucHJvdG90eXBlLmFuaW1hdGlvbiA9IGZ1bmN0aW9uKHN0YXR1cykge1xuICAgIHN0YXR1cyA9ICdhbmltYXRpb24nICsgc3RhdHVzLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RhdHVzLnNsaWNlKDEpO1xuICAgIGlmKHRoaXNbc3RhdHVzXSkge1xuICAgICAgICB0aGlzW3N0YXR1c10oKTtcbiAgICB9XG59O1xuXG50aXBzLnByb3RvdHlwZS5hbmltYXRpb25JbiA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBhbmltYXRpb25PcHRpb24gPSB0aGlzLm9wdGlvbnMuYW5pbWF0aW9uO1xuICAgIGxldCAkdGlwR3JvdXAgPSB0aGlzLmJhY2t1cC5fdGlwR3JvdXBFbG07XG5cbiAgICBpZigkdGlwR3JvdXAucXVlcnlTZWxlY3RvckFsbChcIltuYW1lPW9ob1RpcHNdXCIpLmxlbmd0aCA8PSAxKSB7XG4gICAgICAgIGlmKGFuaW1hdGlvbk9wdGlvbi5jdXN0b21BbXRGdW50aW9uKSB7XG4gICAgICAgICAgICBhbmltYXRpb25PcHRpb24uY3VzdG9tQW10RnVudGlvbi5jYWxsKHRoaXMsICdpbicpO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBsZXQgYW10RnVuID0gYW5pbWF0aW9uT3B0aW9uLmluO1xuICAgICAgICAgICAgYW10RnVuID0gJ2FuaW1hdGlvblR5cGUnICsgYW10RnVuLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgYW10RnVuLnNsaWNlKDEpO1xuICAgICAgICAgICAgaWYodGhpc1thbXRGdW5dKSB7XG4gICAgICAgICAgICAgICAgdGhpc1thbXRGdW5dKCdpbicpO1xuICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uVHlwZURlZmF1bHQoJ2luJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9ZWxzZSB7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uVHlwZURlZmF1bHQoJ2luJyk7XG4gICAgfVxufTtcblxudGlwcy5wcm90b3R5cGUuYW5pbWF0aW9uT3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IGFuaW1hdGlvbk9wdGlvbiA9IHRoaXMub3B0aW9ucy5hbmltYXRpb247XG4gICAgbGV0ICR0aXBHcm91cCA9IHRoaXMuYmFja3VwLl90aXBHcm91cEVsbTtcblxuICAgIGlmKCR0aXBHcm91cC5xdWVyeVNlbGVjdG9yQWxsKFwiW25hbWU9b2hvVGlwc11cIikubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgaWYoYW5pbWF0aW9uT3B0aW9uLmN1c3RvbUFtdEZ1bnRpb24pIHtcbiAgICAgICAgICAgIGFuaW1hdGlvbk9wdGlvbi5jdXN0b21BbXRGdW50aW9uLmNhbGwodGhpcywgJ291dCcpO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBsZXQgYW10RnVuID0gYW5pbWF0aW9uT3B0aW9uLm91dDtcbiAgICAgICAgICAgIGFtdEZ1biA9ICdhbmltYXRpb25UeXBlJyArIGFtdEZ1bi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGFtdEZ1bi5zbGljZSgxKTtcbiAgICAgICAgICAgIGlmKHRoaXNbYW10RnVuXSkge1xuICAgICAgICAgICAgICAgIHRoaXNbYW10RnVuXSgnb3V0Jyk7XG4gICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb25UeXBlRGVmYXVsdCgnb3V0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9ZWxzZSB7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uVHlwZURlZmF1bHQoJ291dCcpO1xuICAgIH1cbn07XG5cbnRpcHMucHJvdG90eXBlLmFuaW1hdGlvblR5cGVEZWZhdWx0ID0gZnVuY3Rpb24oc3RhdHVzKSB7XG4gICAgdGhpcy5hbmltYXRpb25UeXBlRmFkZShzdGF0dXMpO1xufTtcblxuLyoqXG4gKiDpu5jorqTliqjnlLtcbiAqIOa3oeWFpea3oeWHuuWKqOeUu1xuICogQHBhcmFtICAgIHtbdHlwZV19ICAgICAgICAgICAgICAgICBzdGF0dXMgaW4gLSDmmL7npLogLyBvdXQgLSDpmpDol49cbiAqL1xudGlwcy5wcm90b3R5cGUuYW5pbWF0aW9uVHlwZUZhZGUgPSBmdW5jdGlvbihzdGF0dXMpIHtcbiAgICBsZXQgJHRpcCA9IHRoaXMuYmFja3VwLl90aXBFbG07XG4gICAgbGV0ICR0aXBHcm91cCA9IHRoaXMuYmFja3VwLl90aXBHcm91cEVsbTtcbiAgICBsZXQgJGJnID0gdGhpcy5iYWNrdXAuX2JhY2tncm91bmRFbGVtO1xuICAgIGlmKHN0YXR1cyA9PSAnaW4nKSB7XG4gICAgICAgIEMuYWRkQ2xhc3MoJHRpcCwgJ29ob1RpcC1hbXQtZmFkZScpO1xuICAgICAgICBpZigkYmcpIHtcbiAgICAgICAgICAgIEMuYWRkQ2xhc3MoJGJnLCAnb2hvVGlwLWJnLWFtdC1mYWRlJyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIEMuYWRkQ2xhc3MoJHRpcCwgJ2luJyk7XG4gICAgICAgICAgICBpZigkYmcpIHtcbiAgICAgICAgICAgICAgICBDLmFkZENsYXNzKCRiZywgJ2luJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMCk7XG4gICAgfWVsc2UgaWYoc3RhdHVzID09ICdvdXQnKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIEMuYWRkQ2xhc3MoJHRpcCwgJ291dCcpO1xuICAgICAgICAgICAgaWYoJGJnKSB7XG4gICAgICAgICAgICAgICAgQy5yZW1vdmVDbGFzcygkYmcsICdpbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMDApO1xuICAgIH1cbn07XG5cbi8qKlxuICog5oqY5Y+g54m55pWIXG4gKiDlkJHkuIvlsZXlvIDvvIzlkJHkuIrmlLbotbdcbiAqIEBwYXJhbSAgICB7W3R5cGVdfSAgICAgICAgICAgICAgICAgc3RhdHVzIGluIC0g5pi+56S6IC8gb3V0IC0g6ZqQ6JePXG4gKi9cbnRpcHMucHJvdG90eXBlLmFuaW1hdGlvblR5cGVGb2xkID0gZnVuY3Rpb24oc3RhdHVzKSB7XG4gICAgbGV0ICR0aXAgPSB0aGlzLmJhY2t1cC5fdGlwRWxtO1xuICAgIGxldCAkYmcgPSB0aGlzLmJhY2t1cC5fYmFja2dyb3VuZEVsZW07XG4gICAgaWYoc3RhdHVzID09ICdpbicpIHtcbiAgICAgICAgbGV0IGVsZURldGFpbHMgPSB0aGlzLmdldEVsZW1lbnREZXRhaWxzKCk7XG4gICAgICAgIGxldCB0aXBTdHlsZSA9IHtcbiAgICAgICAgICAgIGhlaWdodDogZWxlRGV0YWlscy50aXBIZWlnaHQgKyAncHgnLFxuICAgICAgICB9O1xuXG4gICAgICAgIEMuYWRkQ2xhc3MoJHRpcCwgJ29ob1RpcC1hbXQtZm9sZCcpO1xuICAgICAgICBpZigkYmcpIHtcbiAgICAgICAgICAgIEMuYWRkQ2xhc3MoJGJnLCAnb2hvVGlwLWJnLWFtdC1mb2xkJyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIEMuYWRkQ3NzKCR0aXAsIHRpcFN0eWxlKTtcbiAgICAgICAgICAgIGlmKCRiZykge1xuICAgICAgICAgICAgICAgIEMuYWRkQ2xhc3MoJGJnLCAnaW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgLy8g5pi+56S66Zi05b2xXG4gICAgICAgIHRoaXMudGltZW91dEZvbGRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIEMuYWRkQ3NzKCR0aXAsIHtvdmVyZmxvdzogJ3Zpc2libGUnfSk7XG4gICAgICAgIH0sIDMwMCk7XG4gICAgfWVsc2UgaWYoc3RhdHVzID09ICdvdXQnKSB7XG4gICAgICAgIGlmKHRoaXMudGltZW91dEZvbGRJZCkgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dEZvbGRJZCk7XG4gICAgICAgIFxuICAgICAgICBDLmFkZENzcygkdGlwLCB7b3ZlcmZsb3c6ICdoaWRkZW4nfSk7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIEMuYWRkQ2xhc3MoJHRpcCwgJ291dCcpO1xuICAgICAgICAgICAgaWYoJGJnKSB7XG4gICAgICAgICAgICAgICAgQy5yZW1vdmVDbGFzcygkYmcsICdpbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMDApO1xuICAgIH1cbn07XG5cbi8qKlxuICogb2hv54m55pWIXG4gKiDlnKjln7rlh4blhYPntKDkuK3pl7TnlLHlsI/liLDlpKflvLnlh7rliLDlrprkvY3kvY3nva7vvIzku47lrprkvY3kvY3nva7nlLHlpKfliLDlsI/mtojlpLHlnKjln7rlh4blhYPntKDkuK3pl7RcbiAqIEBwYXJhbSAgICB7W3R5cGVdfSAgICAgICAgICAgICAgICAgc3RhdHVzIGluIC0g5pi+56S6IC8gb3V0IC0g6ZqQ6JePXG4gKi9cbnRpcHMucHJvdG90eXBlLmFuaW1hdGlvblR5cGVPaG8gPSBmdW5jdGlvbihzdGF0dXMpIHtcbiAgICBsZXQgJHRpcCA9IHRoaXMuYmFja3VwLl90aXBFbG07XG4gICAgbGV0ICR0aXBHcm91cCA9IHRoaXMuYmFja3VwLl90aXBHcm91cEVsbTtcbiAgICBsZXQgJGJnID0gdGhpcy5iYWNrdXAuX2JhY2tncm91bmRFbGVtO1xuXG4gICAgbGV0IHN0YXJ0UG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uU3R5bGUoJ21pZGRsZScsIGZhbHNlLCB0cnVlKTtcbiAgICBsZXQgc3RhcnRTaXplID0ge1xuICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgaGVpZ2h0OiAwXG4gICAgfTtcbiAgICBsZXQgc3RhcnRTdHlsZSA9IEMuZXh0ZW5kKHt9LCBzdGFydFBvc2l0aW9uLCBzdGFydFNpemUsIHsnb3BhY2l0eSc6ICcxJ30pO1xuXG4gICAgbGV0IGVsZURldGFpbHMgPSB0aGlzLmdldEVsZW1lbnREZXRhaWxzKCk7XG4gICAgbGV0IHRpcEdyb3VwUG9zaXRpb24gPSBDLnBvc2l0aW9uKCR0aXBHcm91cCk7XG4gICAgbGV0IG9sZEdyb3VwU3R5bGUgPSAkdGlwR3JvdXAuc3R5bGUuY3NzVGV4dDtcbiAgICBsZXQgb2xkR3JvdXBTdHlsZU9iaiA9IHtcbiAgICAgICAgdG9wOiB0aXBHcm91cFBvc2l0aW9uLnRvcCxcbiAgICAgICAgbGVmdDogdGlwR3JvdXBQb3NpdGlvbi5sZWZ0LFxuICAgICAgICB3aWR0aDogZWxlRGV0YWlscy50aXBHcm91cFdpZHRoLFxuICAgICAgICBoZWlnaHQ6IGVsZURldGFpbHMudGlwR3JvdXBIZWlnaHQsXG4gICAgfTtcblxuICAgIGlmKHN0YXR1cyA9PSAnaW4nKSB7XG4gICAgICAgIEMuYWRkQ3NzKCR0aXBHcm91cCwge292ZXJmbG93OiAnaGlkZGVuJ30pO1xuXG4gICAgICAgIEMuYWRkQ3NzKCR0aXAsIHsnb3BhY2l0eSc6ICcxJ30pO1xuICAgICAgICBDLmFkZENzcygkdGlwR3JvdXAsIHN0YXJ0U3R5bGUpO1xuICAgICAgICBcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgQy5hZGRDbGFzcygkdGlwR3JvdXAsICdvaG9UaXAtYW10LW9obycpO1xuXG4gICAgICAgICAgICBDLmFkZENzcygkdGlwR3JvdXAsIG9sZEdyb3VwU3R5bGVPYmopO1xuICAgICAgICAgICAgaWYoJGJnKSB7XG4gICAgICAgICAgICAgICAgQy5hZGRDbGFzcygkYmcsICdvaG9UaXAtYmctYW10LW9obycpO1xuICAgICAgICAgICAgICAgIEMuYWRkQ2xhc3MoJGJnLCAnaW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMSk7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIC8vIOWIhue7hOesrOS6jOS4qlRpcCDkvb/nlKjpu5jorqTliqjnlLvvvIzmiYDku6XpnIDopoHliKDpmaTlhbbku5bliqjnlLvmlYjmnpzvvIzpgb/lhY3pu5jorqTliqjnlLvmlYjmnpzlhrLnqoFcbiAgICAgICAgICAgIEMucmVtb3ZlQ2xhc3MoJHRpcEdyb3VwLCAnb2hvVGlwLWFtdC1vaG8nKTtcbiAgICAgICAgICAgICR0aXBHcm91cC5zdHlsZS5jc3NUZXh0ID0gb2xkR3JvdXBTdHlsZTtcbiAgICAgICAgfSwgMjAxKTtcbiAgICB9ZWxzZSBpZihzdGF0dXMgPT0gJ291dCcpIHtcbiAgICAgICAgQy5hZGRDc3MoJHRpcEdyb3VwLCB7b3ZlcmZsb3c6ICdoaWRkZW4nfSk7XG5cbiAgICAgICAgLy8gaW4g5LmL5ZCOIOS8muWIoOmZpOWKqOeUu+aViOaenO+8jG91dCDpnIDopoHlsIbliqjnlLvmlYjmnpzlhYjmt7vliqDlm57mnaVcbiAgICAgICAgQy5hZGRDbGFzcygkdGlwR3JvdXAsICdvaG9UaXAtYW10LW9obycpO1xuICAgICAgICBpZigkYmcpIHtcbiAgICAgICAgICAgIEMuYWRkQ2xhc3MoJGJnLCAnb2hvVGlwLWJnLWFtdC1vaG8nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIEMuYWRkQ3NzKCR0aXBHcm91cCwgb2xkR3JvdXBTdHlsZU9iaik7XG5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgQy5hZGRDc3MoJHRpcEdyb3VwLCBzdGFydFN0eWxlKTtcbiAgICAgICAgICAgIGlmKCRiZykge1xuICAgICAgICAgICAgICAgIEMucmVtb3ZlQ2xhc3MoJGJnLCAnaW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMSk7XG4gICAgfVxufTtcblxuLyoqXG4gKiDnjrvnkoPnoo7niYfnibnmlYhcbiAqIFRpcHMg55Sx56KO54mH5ZCI5oiQ5pW05L2T5bGV56S677yMVGlwcyDnlLHmlbTkvZPliIboo4LmiJDnoo7niYfmtojlpLFcbiAqIEBwYXJhbSAgICB7W3R5cGVdfSAgICAgICAgICAgICAgICAgc3RhdHVzIGluIC0g5pi+56S6IC8gb3V0IC0g6ZqQ6JePXG4gKi9cbnRpcHMucHJvdG90eXBlLmFuaW1hdGlvblR5cGVGcmFnbWVudCA9IGZ1bmN0aW9uKHN0YXR1cykge1xuICAgIGxldCAkdGlwR3JvdXAgPSB0aGlzLmJhY2t1cC5fdGlwR3JvdXBFbG07XG4gICAgbGV0ICR0aXAgPSB0aGlzLmJhY2t1cC5fdGlwRWxtO1xuICAgIGxldCAkYmcgPSB0aGlzLmJhY2t1cC5fYmFja2dyb3VuZEVsZW07XG4gICAgaWYoc3RhdHVzID09ICdpbicpIHtcbiAgICAgICAgQy5hZGRDbGFzcygkdGlwLCAnb2hvVGlwLWFtdC1mcmFnbWVudCBpbicpO1xuICAgICAgICBpZigkYmcpIHtcbiAgICAgICAgICAgIEMuYWRkQ2xhc3MoJGJnLCAnb2hvVGlwLWJnLWFtdC1mcmFnbWVudCBpbicpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5mcmFnbWVudEluRXhwbG9kZSgpO1xuICAgIH1lbHNlIGlmKHN0YXR1cyA9PSAnb3V0Jykge1xuICAgICAgICB0aGlzLmZyYWdtZW50T3V0RXhwbG9kZSgpO1xuXG4gICAgICAgIGxldCB0aXBTdHlsZSA9IHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgICAgfTtcbiAgICAgICAgQy5hZGRDc3MoJHRpcCwgdGlwU3R5bGUpO1xuICAgIH1cbn1cblxudGlwcy5wcm90b3R5cGUuY3JlYXRlVGlwQ29weSA9IGZ1bmN0aW9uKGhpZGVUaXApIHtcbiAgICBsZXQgJHRpcCA9IHRoaXMuYmFja3VwLl90aXBFbG07XG4gICAgbGV0ICR0aXBDbG9uZSA9ICR0aXAuY2xvbmVOb2RlKHRydWUpO1xuXG4gICAgQy5pbnNlcnRBZnRlcigkdGlwQ2xvbmUsICR0aXApO1xuXG4gICAgaWYoaGlkZVRpcCA9PSB0cnVlKXtcbiAgICAgICAgJHRpcC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuICR0aXBDbG9uZTtcbn1cblxudGlwcy5wcm90b3R5cGUuY3JlYXRlRnJhZ21lbnQgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgJHRpcENsb25lID0gdGhpcy5jcmVhdGVUaXBDb3B5KHRydWUpO1xuXG4gICAgbGV0IHRpcFdpZHRoID0gQy5vdXRlcldpZHRoKCR0aXBDbG9uZSksIHRpcEhlaWdodCA9IEMub3V0ZXJIZWlnaHQoJHRpcENsb25lKTtcbiAgICBDLmFkZENzcygkdGlwQ2xvbmUsIHt3aWR0aDogdGlwV2lkdGgrJ3B4JywgaGVpZ2h0OiB0aXBIZWlnaHQrJ3B4J30pO1xuICAgIGxldCB0aXBIdG1sID0gJHRpcENsb25lLmlubmVySFRNTDtcbiAgICAkdGlwQ2xvbmUuaW5uZXJIVE1MID0gJyc7XG4gICAgXG4gICAgbGV0IGFuaW1hdGlvbk9wdGlvbiA9IHRoaXMub3B0aW9ucy5hbmltYXRpb247XG4gICAgbGV0IHhDb3VudCA9IGFuaW1hdGlvbk9wdGlvbi5mcmFnbWVudHMueENvdW50LFxuICAgICAgICB5Q291bnQgPSBhbmltYXRpb25PcHRpb24uZnJhZ21lbnRzLnlDb3VudCxcbiAgICAgICAgZldpZHRoID0gdGlwV2lkdGgveENvdW50LFxuICAgICAgICBmSGVpZ2h0ID0gdGlwSGVpZ2h0L3lDb3VudDtcblxuICAgIGxldCB4PTAsIHk9MCwgcmVjdExlZnQ9MCwgcmVjdFRvcD0wLCBmTm9kZTtcbiAgICBmb3IoeT0wOyB5PHlDb3VudDsgeSsrKSB7XG4gICAgICAgIHJlY3RUb3AgPSB5KmZIZWlnaHQ7XG4gICAgICAgIGZvcih4PTA7IHg8eENvdW50OyB4KyspIHtcbiAgICAgICAgICAgIHJlY3RMZWZ0PXgqZldpZHRoO1xuICAgICAgICAgICAgZk5vZGUgPSBDLmNyZWF0ZU5vZGUoJzxkaXYgY2xhc3M9XCJvaG9UaXAtYW10LWZyYWdtZW50LWJveFwiIHN0eWxlPVwiY2xpcDogcmVjdCgnK3JlY3RUb3ArJ3B4LCAnKyhyZWN0TGVmdCtmV2lkdGgpKydweCwgJysocmVjdFRvcCtmSGVpZ2h0KSsncHgsICcrcmVjdExlZnQrJ3B4KVwiPicrdGlwSHRtbCsnPC9kaXY+Jyk7XG4gICAgICAgICAgICAkdGlwQ2xvbmUuYXBwZW5kQ2hpbGQoZk5vZGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuICR0aXBDbG9uZTtcbn1cblxudGlwcy5wcm90b3R5cGUuZnJhZ21lbnRJbkV4cGxvZGUgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgJHRpcCA9IHRoaXMuYmFja3VwLl90aXBFbG07XG5cbiAgICBsZXQgJHRpcENsb25lID0gdGhpcy5jcmVhdGVGcmFnbWVudCgpO1xuXG4gICAgJHRpcENsb25lLnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdltjbGFzcz1cIm9ob1RpcC1hbXQtZnJhZ21lbnQtYm94XCJdJykuZm9yRWFjaChpdGVtID0+IHsgICAgICAgICAgICBcbiAgICAgICAgbGV0IHJhbmRUb3AgPSBDLnJhbmRvbU51bSgtMTAsIDEwKSxcbiAgICAgICAgICAgIHJhbmRMZWZ0ID0gQy5yYW5kb21OdW0oLTEwLCAxMCk7XG5cbiAgICAgICAgbGV0IHJhbmREZWcgPSBDLnJhbmRvbU51bSgtNSwgMTUpLCBcbiAgICAgICAgICAgIHJhbmRTY2FsZSA9IEMucmFuZG9tTnVtKDAuNywgMS4zKSxcbiAgICAgICAgICAgIHJhbmREZWcyID0gQy5yYW5kb21OdW0oNSwgMjUpO1xuXG4gICAgICAgIEMuYWRkQ3NzKGl0ZW0sIHsndG9wJyA6IChyYW5kVG9wKSsncHgnLCAnbGVmdCcgOiAocmFuZExlZnQpKydweCcsICdvcGFjaXR5JyA6ICcwJywgJ3RyYW5zZm9ybScgOiAnc2NhbGUoJytyYW5kU2NhbGUrJykgc2tldygnK3JhbmREZWcrJ2RlZykgcm90YXRlWignK3JhbmREZWcyKydkZWcpJ30pO1xuICAgICAgICBcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIEMuYWRkQ2xhc3MoaXRlbSwgJ2V4cGxvZGUtaW4nKTtcbiAgICAgICAgICAgIEMuYWRkQ3NzKGl0ZW0sIHsnbGVmdCcgOiAnMCcsICd0b3AnIDogJzAnLCAnb3BhY2l0eScgOiAnMScsICd0cmFuc2Zvcm0nIDogJ25vbmUnfSk7XG4gICAgICAgIH0sIDEwKTtcbiAgICB9KVxuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgJHRpcENsb25lLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoJHRpcENsb25lKTtcbiAgICAgICAgQy5hZGRDc3MoJHRpcCwge2Rpc3BsYXk6ICcnfSk7XG4gICAgfSwgMTAwMCk7XG59XG5cbnRpcHMucHJvdG90eXBlLmZyYWdtZW50T3V0RXhwbG9kZSA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCAkdGlwQ2xvbmUgPSB0aGlzLmNyZWF0ZUZyYWdtZW50KCk7XG4gICAgXG4gICAgbGV0IHRpcFdpZHRoID0gQy5vdXRlcldpZHRoKCR0aXBDbG9uZSksIHRpcEhlaWdodCA9IEMub3V0ZXJIZWlnaHQoJHRpcENsb25lKTtcblxuICAgICR0aXBDbG9uZS5xdWVyeVNlbGVjdG9yQWxsKCdkaXZbY2xhc3M9XCJvaG9UaXAtYW10LWZyYWdtZW50LWJveFwiXScpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIEMuYWRkQ2xhc3MoaXRlbSwgJ2V4cGxvZGUtb3V0Jyk7XG4gICAgICAgIFxuICAgICAgICBsZXQgcmFuZFRvcCA9IEMucmFuZG9tTnVtKC0zMCwgMzApO1xuICAgICAgICBsZXQgcmFuZExlZnQgPSBDLnJhbmRvbU51bSgtMzAsIDMwKTtcblxuICAgICAgICBsZXQgcmFuZERlZyA9IEMucmFuZG9tTnVtKC01LCAxMCksIFxuICAgICAgICByYW5kU2NhbGUgPSBDLnJhbmRvbU51bSgwLjksIDEuNSksXG4gICAgICAgIHJhbmREZWcyID0gQy5yYW5kb21OdW0oMzAsIDUpO1xuXG4gICAgICAgIEMuYWRkQ3NzKGl0ZW0sIHsndG9wJyA6IChyYW5kVG9wKSsncHgnLCAnbGVmdCcgOiAocmFuZExlZnQpKydweCcsICdvcGFjaXR5JyA6ICcwJywgJ3RyYW5zZm9ybScgOiAnc2NhbGUoJytyYW5kU2NhbGUrJykgc2tldygnK3JhbmREZWcrJ2RlZykgcm90YXRlWignK3JhbmREZWcyKydkZWcpJ30pO1xuICAgIH0pXG5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAkdGlwQ2xvbmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCgkdGlwQ2xvbmUpO1xuICAgIH0sIDEwMDApO1xuXG4gICAgdGhpcy5vcHRpb25zLmFuaW1hdGlvbi5kZWxheSA9IDEwMTA7XG59XG5cbnRpcHMucHJvdG90eXBlLmZyYWdtZW50T3V0RmxvdyA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCAkdGlwQ2xvbmUgPSB0aGlzLmNyZWF0ZUZyYWdtZW50KCk7XG5cbiAgICBsZXQgZnJhZ21lbnRzID0gJHRpcENsb25lLnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdltjbGFzcz1cIm9ob1RpcC1hbXQtZnJhZ21lbnQtYm94XCJdJyk7XG4gICAgbGV0IGFuaW1hdGlvbk9wdGlvbiA9IHRoaXMub3B0aW9ucy5hbmltYXRpb247XG4gICAgbGV0IHhDb3VudCA9IGFuaW1hdGlvbk9wdGlvbi5mcmFnbWVudHMueENvdW50LFxuICAgICAgICB5Q291bnQgPSBhbmltYXRpb25PcHRpb24uZnJhZ21lbnRzLnlDb3VudDtcbiAgICBsZXQgZkhlaWdodCA9IEMub3V0ZXJIZWlnaHQoJHRpcENsb25lKS95Q291bnQ7XG4gICAgXG4gICAgbGV0IHg9MCwgeT0wLCBjdXJUaW1lb3V0PTAsIG1heFRpbWVvdXQ9MDtcbiAgICBmb3IoeT0wOyB5PHlDb3VudDsgeSsrKSB7XG4gICAgICAgIGxldCB0b3AgPSB5KmZIZWlnaHQrNTtcbiAgICAgICAgZm9yKHg9MDsgeDx4Q291bnQ7IHgrKykge1xuICAgICAgICAgICAgY3VyVGltZW91dCA9IHgqMzA7XG4gICAgICAgICAgICBtYXhUaW1lb3V0ID0gbWF4VGltZW91dCA+IGN1clRpbWVvdXQ/IG1heFRpbWVvdXQgOiBjdXJUaW1lb3V0O1xuICAgICAgICAgICAgbGV0IGsgPSB5KnhDb3VudCArIHg7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmKGZyYWdtZW50c1trXSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICBmcmFnbWVudHNba10uc3R5bGUudG9wID0gdG9wICsgXCJweFwiO1xuICAgICAgICAgICAgICAgIGZyYWdtZW50c1trXS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgICAgICAvLyBmcmFnbWVudHNba10uc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoMzYwZGVnKSBzY2FsZSgwKVwiO1xuICAgICAgICAgICAgfSwgY3VyVGltZW91dCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgJHRpcENsb25lLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoJHRpcENsb25lKTtcbiAgICB9LCBjdXJUaW1lb3V0KzEwMCk7XG5cbiAgICAvLyBXaWxsIHJlbW92ZSBBbGwgdGhlIHRpcHMgZWxlbWVudCBhZnRlciBkZWxheVxuICAgIHRoaXMub3B0aW9ucy5hbmltYXRpb24uZGVsYXkgPSBjdXJUaW1lb3V0KzEwMDtcbn1cblxuLyoqXG4gKiDnm5HlkKznqpflj6PlpKflsI/lj5HnlJ/mlLnlj5jvvIzph43mlrDlrprkvY1cbiAqXG4gKiDms6jmhI/nqpflj6PlpKflsI/mlLnlj5jvvIhyZXNpemXvvIkgNTAw5q+r56eS5YaFIOeri+WIu+S4iuS4i+a7muWKqO+8iHNjcm9sbO+8ie+8jOmcgOimgeeri+WNs+mHjeaWsOWumuS9jeS4gOasoeOAglxuICog5Y6f5Zug5pivIGdldEVsZW1lbnREZXRhaWxzIOWPquaciSByZXNpemUg5omN5Lya6YeN5paw6I635Y+WXG4gKi9cbnRpcHMucHJvdG90eXBlLmxpc3RlbiA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBsZXQgbGFzdEV2ZW50ID0gbnVsbDtcblxuICAgIGxldCB0cmlnZ2VyU2V0UG9zaXRpb24gPSBmdW5jdGlvbihlKSB7XG4gICAgICAgIF90aGlzLndyaXRlTG9nKCdpbmZvJywgXCJUcmlnZ2VyIFNldCBQb3NpdGlvbjogXCIsIGUpO1xuICAgICAgICBfdGhpcy5ldmVudCA9IGU7XG4gICAgICAgIF90aGlzLnNldFBvc2l0aW9uKCk7XG5cbiAgICAgICAgLy8gc2V0VGltZW91dChmdW5jdGlvbigpe190aGlzLmV2ZW50ID0gbnVsbDt9LCAxKTtcbiAgICAgICAgX3RoaXMuZXZlbnQgPSBudWxsO1xuICAgIH1cblxuXG4gICAgX3RoaXMuYmFja3VwLmJpbmQgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgIC8vIF90aGlzLndyaXRlTG9nKCdpbmZvJywgXCJUcmlnZ2VyIEV2ZW50OiBcIiwgZSk7XG5cbiAgICAgICAgaWYobGFzdEV2ZW50ICYmIGxhc3RFdmVudC50eXBlID09ICdyZXNpemUnICYmIGUudHlwZSAhPSAncmVzaXplJykge1xuICAgICAgICAgICAgX3RoaXMud3JpdGVMb2coJ2luZm8nLCBcIlRyaWdnZXIgRXZlbnQgdHlwZSB3YXMgY2hhbmdlZCBmcm9tICVzIHRvICVzLCBuZWVkIHRvIHNldCBwb3NpdGlvbiBpbW1lZGlhdGVseS5cIiwgbGFzdEV2ZW50LnR5cGUsIGUudHlwZSk7XG4gICAgICAgICAgICB0cmlnZ2VyU2V0UG9zaXRpb24obGFzdEV2ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxhc3RFdmVudCA9IGU7XG5cbiAgICAgICAgaWYoX3RoaXMuZXZlbnRUaW1lb3V0SUQpIGNsZWFyVGltZW91dChfdGhpcy5ldmVudFRpbWVvdXRJRCk7XG4gICAgICAgIF90aGlzLmV2ZW50VGltZW91dElEID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRyaWdnZXJTZXRQb3NpdGlvbihlKTtcbiAgICAgICAgfSwgMTApO1xuICAgIH1cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgX3RoaXMuYmFja3VwLmJpbmQpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBfdGhpcy5iYWNrdXAuYmluZCk7XG59O1xuXG50aXBzLnByb3RvdHlwZS51bmxpc3RlbiA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIF90aGlzLmJhY2t1cC5iaW5kKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgX3RoaXMuYmFja3VwLmJpbmQpO1xufTtcblxudGlwcy5wcm90b3R5cGUuY2xlYXJUaW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYodGhpcy5mbG9hdE9wdGlvbnMgJiYgdGhpcy5mbG9hdE9wdGlvbnMuaGFzT3duUHJvcGVydHkoJ2Zsb2F0SWQnKSAmJiB0aGlzLmZsb2F0T3B0aW9ucy5mbG9hdElkKSBjbGVhckludGVydmFsKHRoaXMuZmxvYXRPcHRpb25zLmZsb2F0SWQpO1xufVxuXG50aXBzLnByb3RvdHlwZS5kZWxldGVHcm91cCA9IGZ1bmN0aW9uKCkge1xufVxuXG4vL+enu+mZpFRpcHMg5YWD57SgXG50aXBzLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBsZXQgJHRpcENvbnRhaW5lciA9IF90aGlzLmJhY2t1cC5fdGlwQ29udGFpbmVyRWxtO1xuICAgIGxldCAkdGlwR3JvdXAgPSBfdGhpcy5iYWNrdXAuX3RpcEdyb3VwRWxtO1xuICAgIGxldCAkdGlwID0gX3RoaXMuYmFja3VwLl90aXBFbG07XG4gICAgbGV0ICRiZyA9IF90aGlzLmJhY2t1cC5fYmFja2dyb3VuZEVsZW07XG4gICAgbGV0ICRzeW1ib2wgPSBfdGhpcy5iYWNrdXAuX3N5bWJvbEVsbTtcblxuICAgIHRoaXMub3B0aW9ucy5ldmVudHMuYmVmb3JlRGVzdHJveWVkLmNhbGwodGhpcyk7ICAgICAgLy9UaXBzIOmUgOavgeS5i+WJjSDop6blj5FcblxuICAgIF90aGlzLmFuaW1hdGlvbignb3V0Jyk7XG5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAkdGlwLnJlbW92ZSgpO1xuICAgICAgICBpZigkYmcpIHtcbiAgICAgICAgICAgICRiZy5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOS4gOS4que7hOWPquacieS4gOS4qlN5bWJvbO+8jOW9k+e7hOWGheWPquWJqeS4i+S4gOS4quWFg+e0oOeahOaXtuWAme+8jOivtOaYjuWug+aYr1N5bWJvbFxuICAgICAgICBpZigkc3ltYm9sKSB7XG4gICAgICAgICAgICBpZigkdGlwR3JvdXAuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIqXCIpLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgJHN5bWJvbC5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCR0aXBHcm91cC5nZXRFbGVtZW50c0J5VGFnTmFtZShcIipcIikubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICR0aXBHcm91cC5yZW1vdmUoKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgLy8g55So5LqO5pi+56S6c3ltYm9sXG4gICAgICAgICAgICBDLmFkZENzcygkdGlwR3JvdXAsIHtvdmVyZmxvdzogJ3Zpc2libGUnfSk7XG4gICAgICAgICAgICBfdGhpcy5yZXNldFBvc2l0aW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZigkdGlwQ29udGFpbmVyLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiKlwiKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgJHRpcENvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8v5Y+W5raI55uR5ZCsXG4gICAgICAgIF90aGlzLnVubGlzdGVuKCk7XG5cbiAgICAgICAgX3RoaXMuY2xlYXJUaW1lb3V0KCk7XG5cbiAgICAgICAgX3RoaXMudW5zZXRHcm91cCgpO1xuXG4gICAgICAgIF90aGlzLm9wdGlvbnMuZXZlbnRzLmRlc3Ryb3llZC5jYWxsKF90aGlzKTsgICAgICAgIC8vVGlwcyDplIDmr4HkuYvlkI4g6Kem5Y+RXG4gICAgfSwgX3RoaXMub3B0aW9ucy5hbmltYXRpb24uZGVsYXkpO1xufVxuXG50aXBzLnByb3RvdHlwZS5zZXREZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBsZXQgJHRpcEJveCA9IF90aGlzLmJhY2t1cC5fdGlwQm94RWxtO1xuICAgIGxldCAkYmcgPSBfdGhpcy5iYWNrdXAuX2JhY2tncm91bmRFbGVtO1xuXG4gICAgaWYodGhpcy5vcHRpb25zLmRlc3Ryb3kgPT0gJ2F1dG8nKSB7ICAgICAgLy/oh6rliqjplIDmr4F0aXBzXG4gICAgICAgIGxldCBkZWxheSA9IHRoaXMub3B0aW9ucy5kZWxheTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgX3RoaXMuZGVzdHJveSgpO1xuICAgICAgICB9LCBkZWxheSk7XG4gICAgfWVsc2UgaWYodGhpcy5vcHRpb25zLmRlc3Ryb3kgPT0gJ21hbnVhbCcpIHsgICAgIC8v5omL5Yqo6ZSA5q+BdGlwc1xuICAgICAgICBsZXQgJGNsb3NlID0gQy5jcmVhdGVOb2RlKFwiPGRpdiBjbGFzcz0nb2hvVGlwLWNsb3NlJz54PC9kaXY+XCIpO1xuICAgICAgICAkdGlwQm94LmFwcGVuZENoaWxkKCRjbG9zZSk7XG5cbiAgICAgICAgJGNsb3NlLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIF90aGlzLmRlc3Ryb3koKTtcbiAgICAgICAgfTtcbiAgICB9ZWxzZSB7XG4gICAgICAgIC8vIOS7juS4jemUgOavgVxuICAgIH1cbn07XG5cbnRpcHMucHJvdG90eXBlLmluaXRUaXBzID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5pbml0TXNnKCk7XG4gICAgdGhpcy5zZXRDbGFzcygpOyAgICAgICAgICAgICAgICAvL+iOt+WPlmNsYXNzXG4gICAgdGhpcy5zZXRUaXBzQXR0cmlidXRlKCk7ICAgICAgICAvL+iOt+WPluWxnuaAp1xuICAgIHRoaXMucmVuZGVyKCk7XG4gICAgdGhpcy5zZXRHcm91cCgpO1xuXG4gICAgdGhpcy5vcHRpb25zLmV2ZW50cy5iZWZvcmVTaG93bi5jYWxsKHRoaXMpOyAgLy9UaXBzIOWIm+W7uua2iOaBr+S5i+WQju+8jOWxleekuuS5i+WJjSDop6blj5FcblxuICAgIHRoaXMuYW5pbWF0aW9uKCdpbicpO1xuICAgIHRoaXMubGlzdGVuKCk7XG4gICAgdGhpcy5zZXREZXN0cm95KCk7XG5cbiAgICB0aGlzLm9wdGlvbnMuZXZlbnRzLnNob3duLmNhbGwodGhpcyk7ICAgICAgICAvL1RpcHMg5bGV56S65LmL5ZCOIOinpuWPkVxufTtcblxudGlwcy5wcm90b3R5cGUudW5pcXVlSWQgPSBmdW5jdGlvbigpIHtcbiAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcbiAgIGxldCB5ID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgbGV0IG0gPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xuICAgbSA9IG0gPCAxMCA/ICgnMCcgKyBtKSA6IG07XG4gICBsZXQgZCA9IGRhdGUuZ2V0RGF0ZSgpO1xuICAgZCA9IGQgPCAxMCA/ICgnMCcgKyBkKSA6IGQ7XG4gICBsZXQgaCA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgIGxldCBtaW51dGUgPSBkYXRlLmdldE1pbnV0ZXMoKTtcbiAgIGxldCBzZWNvbmQgPSBkYXRlLmdldFNlY29uZHMoKTtcblxuICAgbGV0IHJhbmRvbVN0ciA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyKTtcblxuICAgcmV0dXJuIHkgKyBtICsgZCArIGggKyBtaW51dGUgKyBzZWNvbmQgKyByYW5kb21TdHI7XG59XG5cbnRpcHMucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbihtZXNzYWdlLCB0eXBlLCBiYXNlRWxlbWVudCkge1xuICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICBiYXNlRWxlbWVudDogYmFzZUVsZW1lbnQsXG4gICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICB9O1xuICAgIHRoaXMuaW5pdChvcHRpb25zKTtcbn07XG5cbnRpcHMucHJvdG90eXBlLm5vcm1hbCA9IGZ1bmN0aW9uKG1lc3NhZ2UsIGljb24sIGJhc2VFbGVtZW50KSB7XG4gICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgIGJhc2VFbGVtZW50OiBiYXNlRWxlbWVudCxcbiAgICAgICAgdHlwZTogXCJub3JtYWxcIixcbiAgICAgICAgaWNvbjogaWNvbj8gaWNvbiA6ICdpbmZvJyxcbiAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH07XG4gICAgdGhpcy5pbml0KG9wdGlvbnMpO1xufTtcblxudGlwcy5wcm90b3R5cGUuaW5mbyA9IGZ1bmN0aW9uKG1lc3NhZ2UsIGJhc2VFbGVtZW50KSB7XG4gICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgIGJhc2VFbGVtZW50OiBiYXNlRWxlbWVudCxcbiAgICAgICAgdHlwZTogXCJpbmZvXCIsXG4gICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICB9O1xuICAgIHRoaXMuaW5pdChvcHRpb25zKTtcbn07XG5cbnRpcHMucHJvdG90eXBlLnN1Y2Nlc3MgPSBmdW5jdGlvbihtZXNzYWdlLCBiYXNlRWxlbWVudCkge1xuICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICBiYXNlRWxlbWVudDogYmFzZUVsZW1lbnQsXG4gICAgICAgIHR5cGU6IFwic3VjY2Vzc1wiLFxuICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfTtcbiAgICB0aGlzLmluaXQob3B0aW9ucyk7XG59O1xuXG50aXBzLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uKG1lc3NhZ2UsIGJhc2VFbGVtZW50KSB7XG4gICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgIGJhc2VFbGVtZW50OiBiYXNlRWxlbWVudCxcbiAgICAgICAgdHlwZTogXCJlcnJvclwiLFxuICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfTtcbiAgICB0aGlzLmluaXQob3B0aW9ucyk7XG59O1xuXG50aXBzLnByb3RvdHlwZS53YXJuaW5nID0gZnVuY3Rpb24obWVzc2FnZSwgYmFzZUVsZW1lbnQpIHtcbiAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgYmFzZUVsZW1lbnQ6IGJhc2VFbGVtZW50LFxuICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcbiAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH07XG4gICAgdGhpcy5pbml0KG9wdGlvbnMpO1xufTtcblxudGlwcy5wcm90b3R5cGUuaG92ZXJUaXAgPSBmdW5jdGlvbihvcHRpb25zLCBob3ZlckVsZW1lbnQpIHtcbiAgICBsZXQgZGVmT3B0aW9ucyA9IHtcbiAgICAgICAgc3ltYm9sOiAndHJpYW5nbGUnXG4gICAgfTtcbiAgICBsZXQgaG92ZXJUaXA7XG4gICAgb3B0aW9ucyA9IEMuZXh0ZW5kKHt9LCBkZWZPcHRpb25zLCBvcHRpb25zKTtcblxuICAgIGhvdmVyRWxlbWVudC5vbm1vdXNlZW50ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaG92ZXJUaXAgPSBvaG9UaXBzKG9wdGlvbnMpO1xuICAgIH1cbiAgICBob3ZlckVsZW1lbnQub25tb3VzZWxlYXZlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmKGhvdmVyVGlwKSBob3ZlclRpcC5kZXN0cm95KCk7XG4gICAgfVxufTtcblxuLy9qUXVlcnkg5ouT5bGV6Z2Z5oCB5pa55rOVIHRpcHNcbmlmKHR5cGVvZiBqUXVlcnkgIT0gJ3VuZGVmaW5lZCcpe1xuICAgICQuZXh0ZW5kKHtcbiAgICAgICAgb2hvVGlwczogZnVuY3Rpb24ob3B0aW9ucywgZXh0ZW5kT3B0aW9ucyA9IHt9KSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IHRpcHMob3B0aW9ucywgZXh0ZW5kT3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9ob1RpcHMob3B0aW9ucywgZXh0ZW5kT3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIG5ldyB0aXBzKG9wdGlvbnMsIGV4dGVuZE9wdGlvbnMpO1xufVxuXG5leHBvcnQgeyB0aXBzIGFzIG9ob1RpcHNQcm90b3R5cGUgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==