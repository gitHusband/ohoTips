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
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!**************************!*\
  !*** ./src/js/common.js ***!
  \**************************/
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
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPOztVQ1ZBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTk87QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDUCxnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7O0FBRUE7QUFDQSxXQUFXLHNCQUFzQjtBQUNqQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDs7QUFFQTtBQUNBLFdBQVcsc0JBQXNCO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFTztBQUNQOztBQUVBO0FBQ0EsV0FBVyxzQkFBc0I7QUFDakM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7O0FBRUE7QUFDQSxXQUFXLHNCQUFzQjtBQUNqQztBQUNBOztBQUVBO0FBQ0E7O0FBRU87QUFDUCxrQ0FBa0M7QUFDbEMsdUdBQXVHO0FBQ3ZHO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCOztBQUV6QjtBQUNBOztBQUVPO0FBQ1AsaUNBQWlDOztBQUVqQyxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxlQUFlLGVBQWU7QUFDOUI7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRU87QUFDUDs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdEQUFnRCx1Q0FBdUM7QUFDdkYsZUFBZTtBQUNmOztBQUVPO0FBQ1A7O0FBRUE7QUFDQSw4Q0FBOEMsK0NBQStDOztBQUU3RjtBQUNBLGdCQUFnQjtBQUNoQixNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFTztBQUNQLFlBQVk7QUFDWjs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFTztBQUNQO0FBQ0EsNkNBQTZDLGFBQWEsYUFBYSxjQUFjLGdCQUFnQjtBQUNyRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL29oby93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vb2hvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29oby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2hvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2hvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2hvLy4vc3JjL2pzL2NvbW1vbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJvaG9cIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wib2hvXCJdID0gZmFjdG9yeSgpO1xufSkoc2VsZiwgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgY29uc3QgcmVnTnVtID0gL15bXFwtLCBcXCtdP1xcZCsoXFwuXFxkKyk/KFtlLEVdWystXT9cXGQrKT8kLztcbmV4cG9ydCBjb25zdCByZWdOdW1OZWdhdGl2ZSA9IC9eXFwtXFxkKyhcXC5cXGQrKT8oW2UsRV1bKy1dP1xcZCspPyQvO1xuZXhwb3J0IGNvbnN0IHJlZ1BlciA9IC9eW1xcLSwgXFwrXT8oKFxcZCtcXC4/XFxkKil8KFxcZCpcXC5cXGQrKSkoW2UsRV1bKy1dP1xcZCspP1xcJSQvO1xuZXhwb3J0IGNvbnN0IHJlZ1Blck5lZ2F0aXZlID0gL15cXC0oKFxcZCtcXC4/XFxkKil8KFxcZCpcXC5cXGQrKSkoW2UsRV1bKy1dP1xcZCspP1xcJSQvO1xuXG5leHBvcnQgZnVuY3Rpb24gbm9vcCgpIHt9XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VtcHR5TnVtKG51bSkge1xuICAgIGlmKG51bSAhPT0gMCAmJiAhbnVtKSB7ICAgICAvLyBcIlwiLCBudWxsLCB1bmRlZmluZWQsIE5hTlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9ZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbi8vIOS4pOS4qua1rueCueaVsOaxguWSjFxuZXhwb3J0IGZ1bmN0aW9uIG51bUFkZChudW0xLG51bTIpIHtcbiAgICBsZXQgcjEscjIsbTtcbiAgICB0cnl7XG4gICAgICAgIHIxID0gbnVtMS50b1N0cmluZygpLnNwbGl0KCcuJylbMV0ubGVuZ3RoO1xuICAgIH1jYXRjaChlKXtcbiAgICAgICAgcjEgPSAwO1xuICAgIH1cbiAgICB0cnl7XG4gICAgICAgIHIyPW51bTIudG9TdHJpbmcoKS5zcGxpdChcIi5cIilbMV0ubGVuZ3RoO1xuICAgIH1jYXRjaChlKXtcbiAgICAgICAgcjI9MDtcbiAgICB9XG4gICAgbT1NYXRoLnBvdygxMCxNYXRoLm1heChyMSxyMikpO1xuICAgIC8vIHJldHVybiAobnVtMSptK251bTIqbSkvbTtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChudW0xKm0rbnVtMiptKS9tO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbnVtQWRkcygpe1xuICAgIGxldCByZXN1bHQgPSBhcmd1bWVudHNbMF07XG5cbiAgICBsZXQgaSA9IDE7XG4gICAgZm9yKGk7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzdWx0ID0gbnVtQWRkKHJlc3VsdCwgYXJndW1lbnRzW2ldKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyDkuKTkuKrmta7ngrnmlbDnm7jlh49cbmV4cG9ydCBmdW5jdGlvbiBudW1TdWIobnVtMSxudW0yKSB7XG4gICAgbGV0IHIxLHIyLG07XG4gICAgdHJ5e1xuICAgICAgICByMSA9IG51bTEudG9TdHJpbmcoKS5zcGxpdCgnLicpWzFdLmxlbmd0aDtcbiAgICB9Y2F0Y2goZSl7XG4gICAgICAgIHIxID0gMDtcbiAgICB9XG4gICAgdHJ5e1xuICAgICAgICByMj1udW0yLnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpWzFdLmxlbmd0aDtcbiAgICB9Y2F0Y2goZSl7XG4gICAgICAgIHIyPTA7XG4gICAgfVxuICAgIG09TWF0aC5wb3coMTAsTWF0aC5tYXgocjEscjIpKTtcbiAgICBuPShyMT49cjIpP3IxOnIyO1xuICAgIHJldHVybiBwYXJzZUZsb2F0KChNYXRoLnJvdW5kKG51bTEqbS1udW0yKm0pL20pLnRvRml4ZWQobikpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbnVtU3Vicygpe1xuICAgIGxldCByZXN1bHQgPSBhcmd1bWVudHNbMF07XG5cbiAgICBsZXQgaSA9IDE7XG4gICAgZm9yKGk7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzdWx0ID0gbnVtU3ViKHJlc3VsdCwgYXJndW1lbnRzW2ldKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyDkuKTkuKrmta7ngrnmlbDnm7jkuZhcbmV4cG9ydCBmdW5jdGlvbiBudW1NdWwobnVtMSxudW0yKSB7XG4gICAgbGV0IG09MCxzMT1udW0xLnRvU3RyaW5nKCksczI9bnVtMi50b1N0cmluZygpO1xuICAgIHRyeXtcbiAgICAgICAgbSs9czEuc3BsaXQoXCIuXCIpWzFdLmxlbmd0aFxuICAgIH1jYXRjaChlKXtcblxuICAgIH07XG4gICAgdHJ5e1xuICAgICAgICBtKz1zMi5zcGxpdChcIi5cIilbMV0ubGVuZ3RoXG4gICAgfWNhdGNoKGUpe1xuXG4gICAgfTtcbiAgICByZXR1cm4gTnVtYmVyKHMxLnJlcGxhY2UoXCIuXCIsXCJcIikpKk51bWJlcihzMi5yZXBsYWNlKFwiLlwiLFwiXCIpKS9NYXRoLnBvdygxMCxtKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG51bU11bHMoKXtcbiAgICBsZXQgcmVzdWx0ID0gYXJndW1lbnRzWzBdO1xuXG4gICAgbGV0IGkgPSAxO1xuICAgIGZvcihpOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdCA9IG51bU11bChyZXN1bHQsIGFyZ3VtZW50c1tpXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8g5Lik5Liq5rWu54K55pWw55u46ZmkXG5leHBvcnQgZnVuY3Rpb24gbnVtRGl2KG51bTEsbnVtMikge1xuICAgIGxldCB0MSx0MixyMSxyMjtcbiAgICB0cnl7XG4gICAgICAgIHQxID0gbnVtMS50b1N0cmluZygpLnNwbGl0KCcuJylbMV0ubGVuZ3RoO1xuICAgIH1jYXRjaChlKXtcbiAgICAgICAgdDEgPSAwO1xuICAgIH1cbiAgICB0cnl7XG4gICAgICAgIHQyPW51bTIudG9TdHJpbmcoKS5zcGxpdChcIi5cIilbMV0ubGVuZ3RoO1xuICAgIH1jYXRjaChlKXtcbiAgICAgICAgdDI9MDtcbiAgICB9XG4gICAgcjE9TnVtYmVyKG51bTEudG9TdHJpbmcoKS5yZXBsYWNlKFwiLlwiLFwiXCIpKTtcbiAgICByMj1OdW1iZXIobnVtMi50b1N0cmluZygpLnJlcGxhY2UoXCIuXCIsXCJcIikpO1xuICAgIHJldHVybiAocjEvcjIpKk1hdGgucG93KDEwLHQyLXQxKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG51bURpdnMoKXtcbiAgICBsZXQgcmVzdWx0ID0gYXJndW1lbnRzWzBdO1xuXG4gICAgbGV0IGkgPSAxO1xuICAgIGZvcihpOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdCA9IG51bURpdihyZXN1bHQsIGFyZ3VtZW50c1tpXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyKHZhbCkge1xuICAgIGxldCByZWdQb3MgPSAvXlxcZCsoXFwuXFxkKyk/JC87IC8v6Z2e6LSf5rWu54K55pWwXG4gICAgbGV0IHJlZ05lZyA9IC9eKC0oKFswLTldK1xcLlswLTldKlsxLTldWzAtOV0qKXwoWzAtOV0qWzEtOV1bMC05XSpcXC5bMC05XSspfChbMC05XSpbMS05XVswLTldKikpKSQvOyAvL+i0n+a1rueCueaVsFxuICAgIGlmKHJlZ1Bvcy50ZXN0KHZhbCkgfHwgcmVnTmVnLnRlc3QodmFsKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmcodmFsdWUpIHtcbiAgICByZXR1cm4gKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykgJiYgdmFsdWUuY29uc3RydWN0b3IgPT0gU3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheSh2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgQXJyYXkuaXNBcnJheSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKTtcbiAgICB9ZWxzZXtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09IFwiW29iamVjdCBBcnJheV1cIjtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc09iaih2YWx1ZSkge1xuICAgIC8vIOiLpXZhbHVlIOaYryBudWxs5a+56LGhLCB0eXBlIOS4uiBcIltvYmplY3QgTnVsbF1cIu+8m1xuICAgIGxldCB0eXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgICByZXR1cm4gdHlwZSA9PT0gXCJbb2JqZWN0IE9iamVjdF1cIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRW1wdHlPYmoodmFsdWUpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModmFsdWUpLmxlbmd0aCA9PSAwO1xufVxuXG4vL+mdnm51bGzlr7nosaHvvIzpnZ7mlbDnu4Tlr7nosaFcbmV4cG9ydCBmdW5jdGlvbiBpc09iak5vdEFycnJ5KHZhbHVlKSB7XG4gICAgcmV0dXJuIGlzT2JqKHZhbHVlKSAmJiAhaXNBcnJheSh2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRlbmQodGFyZ2V0KSB7XG4gICAgaWYoIXRhcmdldCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdObyB0YXJnZXQhJylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpZ25vcmUob2JqKSB7XG4gICAgICAgIGlmKCFvYmopIHJldHVybiBmYWxzZTtcblxuICAgICAgICBsZXQgaXNKcSA9IGZhbHNlO1xuICAgICAgICBpZih3aW5kb3cualF1ZXJ5KXtcbiAgICAgICAgICAgIGlzSnEgPSBvYmogaW5zdGFuY2VvZiBqUXVlcnk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaXNJZ25vcmUgPSBpc0pxO1xuICAgICAgICByZXR1cm4gaXNJZ25vcmU7XG4gICAgfVxuXG4gICAgbGV0IG9ianMgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKTtcblxuICAgIGlmKG9ianMubGVuZ3RoID4gMCkge1xuICAgICAgICBvYmpzLmZvckVhY2goKGl0ZW0saW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmKGlzT2JqTm90QXJycnkoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGtleSBpbiBpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGlzT2JqTm90QXJycnkoaXRlbVtrZXldKSAmJiAhaWdub3JlKGl0ZW1ba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCEgdGFyZ2V0Lmhhc093blByb3BlcnR5KGtleSkgfHwgIWlzT2JqTm90QXJycnkodGFyZ2V0W2tleV0pKSB0YXJnZXRba2V5XSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgZXh0ZW5kKHRhcmdldFtrZXldLGl0ZW1ba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gaXRlbVtrZXldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1BhcmFtZXRlciAnICsgaW5kZXggKyAnIGlzIG5vIHZhbGlkIGFyZ3VtZW50cywgZXhwZWN0ZWQgdG8gYmUgb2JqZWN0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyaW0oc3RyLCBpc2dsb2JhbCkge1xuICAgIGxldCByZXN1bHQ7XG4gICAgcmVzdWx0ID0gc3RyLnJlcGxhY2UoLyheXFxzKyl8KFxccyskKS9nLCAnJyk7XG4gICAgaWYgKGlzZ2xvYmFsICYmIGlzZ2xvYmFsLnRvTG93ZXJDYXNlKCkgPT09ICdnJykge1xuICAgICAgICByZXN1bHQgPSByZXN1bHQucmVwbGFjZSgvXFxzL2csICcnKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbU51bShtaW4sIG1heCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTm9kZShodG1sU3RyKSB7XG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2LmlubmVySFRNTCA9IGh0bWxTdHI7XG4gICAgcmV0dXJuIGRpdi5jaGlsZE5vZGVzWzBdLmNsb25lTm9kZSh0cnVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9ialRvU3R5bGUob2JqKSB7XG4gICAgbGV0IHN0eWxlID0gW107XG4gICAgZm9yKGxldCBpIGluIG9iail7XG4gICAgICAgIHN0eWxlLnB1c2goaSArICc6JyArIG9ialtpXSk7XG4gICAgfVxuICAgIHN0eWxlID0gc3R5bGUuam9pbignOycpO1xuXG4gICAgcmV0dXJuICBzdHlsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0eWxlVG9PYmooc3R5bGUpIHtcbiAgICBpZiAoIXN0eWxlIHx8IHN0eWxlID09ICcnKSB7IHJldHVybiAnJzsgfVxuXG4gICAgbGV0IHN0eWxlQXJyID0gc3R5bGUuc3BsaXQoJzsnKVxuICAgIHN0eWxlQXJyID0gc3R5bGVBcnIuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICByZXR1cm4gaXRlbSAhPSAnJztcbiAgICB9KTtcblxuICAgIGxldCBvYmpTdHIgPSAnJztcbiAgICBzdHlsZUFyci5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBsZXQgY3NzID0gJyc7XG4gICAgICAgIGl0ZW0gPSBpdGVtLnJlcGxhY2UoLyheXFxzKyl8KFxccyskKS9nLCAnJyk7XG4gICAgICAgIHRyaW0oaXRlbSkuc3BsaXQoJzonKS5mb3JFYWNoKGNzc1ZhbHVlID0+IHtcbiAgICAgICAgICAgIGNzcyArPSAnXCInICsgdHJpbShjc3NWYWx1ZSkgKyAnXCI6JztcbiAgICAgICAgfSlcbiAgICAgICAgb2JqU3RyICs9IGNzcyArICcsJztcbiAgICB9KVxuICAgIG9ialN0ciA9IG9ialN0ci5yZXBsYWNlKC86LC9nLCAnLCcpO1xuICAgIG9ialN0ciA9IG9ialN0ci5zdWJzdHJpbmcoMCwgb2JqU3RyLmxhc3RJbmRleE9mKCcsJykpO1xuICAgIG9ialN0ciA9ICd7JyArIG9ialN0ciArICd9JztcbiAgICByZXR1cm4gSlNPTi5wYXJzZShvYmpTdHIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQ3NzKGVsLCBjc3NPYmopIHtcbiAgICBsZXQgb2xkQ3NzVGV4dCA9IGVsLnN0eWxlLmNzc1RleHQ7XG4gICAgb2xkQ3NzVGV4dCA9IHN0eWxlVG9PYmoob2xkQ3NzVGV4dCkgfHwge307XG4gICAgaWYob2xkQ3NzVGV4dCkgY3NzT2JqID0gZXh0ZW5kKHt9LCBvbGRDc3NUZXh0LCBjc3NPYmopO1xuXG4gICAgbGV0IG51bWJlclN0eWxlQXJyID0gWydvcGFjaXR5J107XG4gICAgZm9yKGxldCBpIGluIGNzc09iail7XG4gICAgICAgIGlmKG51bWJlclN0eWxlQXJyLmluZGV4T2YoaSkgIT0gLTEpIGNvbnRpbnVlOyBcbiAgICAgICAgaWYoaXNOdW1iZXIoY3NzT2JqW2ldKSkgY3NzT2JqW2ldICs9IFwicHhcIjtcbiAgICB9XG4gICAgbGV0IGNzc1RleHQgPSBvYmpUb1N0eWxlKGNzc09iaik7XG5cbiAgICBlbC5zdHlsZS5jc3NUZXh0ID0gY3NzVGV4dDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENsYXNzKGVsLCBjbGFzc05hbWUpIHtcbiAgICBpZih0eXBlb2YoY2xhc3NOYW1lKSA9PSAnc3RyaW5nJykge1xuICAgICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUuc3BsaXQoJyAnKTtcbiAgICB9XG5cbiAgICBpZighaXNBcnJheShjbGFzc05hbWUpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBsZXQgb2xkQ2xhc3MgPSBlbC5jbGFzc05hbWUuc3BsaXQoJyAnKTtcbiAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUuZmlsdGVyKGl0ZW0gPT4gIW9sZENsYXNzLmluY2x1ZGVzKGl0ZW0pKTtcbiAgICBpZihjbGFzc05hbWUubGVuZ3RoID09IDApIHJldHVybjtcblxuICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5qb2luKCcgJyk7XG5cbiAgICByZXR1cm4gZWwuY2xhc3NOYW1lICs9ICcgJyArIGNsYXNzTmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsLCBjbGFzc05hbWUpIHtcbiAgICBpZiAoZWwuY2xhc3NMaXN0KSB7XG4gICAgICAgIGlmKHR5cGVvZihjbGFzc05hbWUpID09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUuc3BsaXQoJyAnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCFpc0FycmF5KGNsYXNzTmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNsYXNzTmFtZS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgICAgICB9KTtcbiAgICB9ZWxzZSB7XG4gICAgICAgIGVsLmNsYXNzTmFtZSA9IGVsLmNsYXNzTmFtZS5yZXBsYWNlKG5ldyBSZWdFeHAoJyhefFxcXFxiKScgKyBjbGFzc05hbWUuc3BsaXQoJyAnKS5qb2luKCd8JykgKyAnKFxcXFxifCQpJywgJ2dpJyksICcgJyk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3R5bGUoZWwsIHN0eWxlQXR0cikge1xuICAgIGxldCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWwpO1xuXG4gICAgaWYoIXN0eWxlQXR0cikge1xuICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgfWVsc2Uge1xuICAgICAgICByZXR1cm4gc3R5bGVbc3R5bGVBdHRyXTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvdXRlcldpZHRoKGVsLCBzdGF0dXMpIHtcbiAgICBsZXQgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsKTtcbiAgICBsZXQgd2lkdGggPSBwYXJzZUZsb2F0KHN0eWxlLndpZHRoKSArIHBhcnNlRmxvYXQoc3R5bGUuYm9yZGVyTGVmdFdpZHRoKSArIHBhcnNlRmxvYXQoc3R5bGUuYm9yZGVyUmlnaHRXaWR0aCk7XG5cbiAgICBpZighaXNDb21wdXRlZFBhZGRpbmdFbChlbCkpIHdpZHRoICs9IHBhcnNlRmxvYXQoc3R5bGUucGFkZGluZ0xlZnQpICsgcGFyc2VGbG9hdChzdHlsZS5wYWRkaW5nUmlnaHQpO1xuXG4gICAgaWYoIXN0YXR1cykgcmV0dXJuIHdpZHRoO1xuXG4gICAgd2lkdGggKz0gcGFyc2VGbG9hdChzdHlsZS5tYXJnaW5MZWZ0KSArIHBhcnNlRmxvYXQoc3R5bGUubWFyZ2luUmlnaHQpO1xuICAgIHJldHVybiB3aWR0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG91dGVySGVpZ2h0KGVsLCBzdGF0dXMpIHtcbiAgICBsZXQgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsKTtcbiAgICBsZXQgaGVpZ2h0ID0gcGFyc2VGbG9hdChzdHlsZS5oZWlnaHQpICsgcGFyc2VGbG9hdChzdHlsZS5ib3JkZXJUb3BXaWR0aCkgKyBwYXJzZUZsb2F0KHN0eWxlLmJvcmRlckJvdHRvbVdpZHRoKTtcblxuICAgIGlmKCFpc0NvbXB1dGVkUGFkZGluZ0VsKGVsKSkgaGVpZ2h0ICs9IHBhcnNlRmxvYXQoc3R5bGUucGFkZGluZ1RvcCkgKyBwYXJzZUZsb2F0KHN0eWxlLnBhZGRpbmdCb3R0b20pO1xuXG4gICAgaWYoIXN0YXR1cykgcmV0dXJuIGhlaWdodDtcbiAgICBcbiAgICBoZWlnaHQgKz0gcGFyc2VGbG9hdChzdHlsZS5tYXJnaW5Ub3ApICsgcGFyc2VGbG9hdChzdHlsZS5tYXJnaW5Cb3R0b20pO1xuICAgIHJldHVybiBoZWlnaHQ7XG59XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBpbm5lcldpZHRoKGVsLCBzdGF0dXMpIHtcbi8vICAgICBpZighc3RhdHVzKSByZXR1cm4gZWwuY2xpZW50V2lkdGg7XG5cbi8vICAgICBsZXQgd2lkdGggPSBlbC5jbGllbnRXaWR0aDtcbi8vICAgICBsZXQgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsKTtcblxuLy8gICAgIHdpZHRoICs9IHBhcnNlRmxvYXQoc3R5bGUucGFkZGluZ0xlZnQpICsgcGFyc2VGbG9hdChzdHlsZS5wYWRkaW5nUmlnaHQpO1xuLy8gICAgIHJldHVybiB3aWR0aDtcbi8vIH1cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIGlubmVySGVpZ2h0KGVsLCBzdGF0dXMpIHtcbi8vICAgICBpZighc3RhdHVzKSByZXR1cm4gZWwuY2xpZW50SGVpZ2h0O1xuXG4vLyAgICAgbGV0IHdpZHRoID0gZWwuY2xpZW50SGVpZ2h0O1xuLy8gICAgIGxldCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWwpO1xuXG4vLyAgICAgd2lkdGggKz0gcGFyc2VGbG9hdChzdHlsZS5wYWRkaW5nVG9wKSArIHBhcnNlRmxvYXQoc3R5bGUucGFkZGluZ0JvdHRvbSk7XG4vLyAgICAgcmV0dXJuIHdpZHRoO1xuLy8gfVxuXG5leHBvcnQgZnVuY3Rpb24gaW5uZXJXaWR0aChlbCwgc3RhdHVzKSB7XG4gICAgbGV0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XG4gICAgbGV0IHdpZHRoID0gcGFyc2VGbG9hdChzdHlsZS53aWR0aCk7XG5cbiAgICBpZihpc0NvbXB1dGVkUGFkZGluZ0VsKGVsKSB8fCAhc3RhdHVzKSByZXR1cm4gd2lkdGg7XG5cbiAgICB3aWR0aCArPSBwYXJzZUZsb2F0KHN0eWxlLnBhZGRpbmdMZWZ0KSArIHBhcnNlRmxvYXQoc3R5bGUucGFkZGluZ1JpZ2h0KTtcbiAgICByZXR1cm4gd2lkdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbm5lckhlaWdodChlbCwgc3RhdHVzKSB7XG4gICAgbGV0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XG4gICAgbGV0IGhlaWdodCA9IHBhcnNlRmxvYXQoc3R5bGUuaGVpZ2h0KTtcblxuICAgIGlmKGlzQ29tcHV0ZWRQYWRkaW5nRWwoZWwpIHx8ICFzdGF0dXMpIHJldHVybiBoZWlnaHQ7XG5cbiAgICBoZWlnaHQgKz0gcGFyc2VGbG9hdChzdHlsZS5wYWRkaW5nVG9wKSArIHBhcnNlRmxvYXQoc3R5bGUucGFkZGluZ0JvdHRvbSk7XG4gICAgcmV0dXJuIGhlaWdodDtcbn1cblxuLy8gZ2V0Q29tcHV0ZWRTdHlsZSwgd2lkdGgg5ZKMIGhlaWdodCDlt7Lnu4/ljIXlkKtQYWRkaW5nIOeahOWFg+e0oFxuZXhwb3J0IGZ1bmN0aW9uIGlzQ29tcHV0ZWRQYWRkaW5nRWwoZWwpIHtcbiAgICBsZXQgZWxBcnIgPSBbJ2J1dHRvbiddO1xuICAgIHJldHVybiBlbEFyci5pbmNsdWRlcyhlbC5sb2NhbE5hbWUpO1xufVxuXG4vLyBleHBvcnQgZnVuY3Rpb24gcG9zaXRpb24oZWwpIHtcbi8vICAgICBjb25zb2xlLmxvZyhlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSwge3RvcDogZWwub2Zmc2V0VG9wLCBsZWZ0OiBlbC5vZmZzZXRMZWZ0fSk7XG4vLyAgICAgcmV0dXJuIHt0b3A6IGVsLm9mZnNldFRvcCwgbGVmdDogZWwub2Zmc2V0TGVmdH07XG4vLyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3NpdGlvbihlbCkge1xuICAgIGxldCByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAvLyBjb25zb2xlLnRyYWNlKCk7XG4gICAgLy8gY29uc29sZS5sb2coXCJDLnBvc2l0aW9uOiBcIiwgZWwsIHJlY3QsIHt0b3A6IHJlY3QudG9wK3Njcm9sbFksIGxlZnQ6IHJlY3QubGVmdCtzY3JvbGxYfSk7XG5cbiAgICBpZihjc3MoZWwsICdwb3NpdGlvbicpID09PSAnZml4ZWQnKSB7XG4gICAgICAgIHJldHVybiB7dG9wOiByZWN0LnRvcCwgbGVmdDogcmVjdC5sZWZ0fTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgdDtcbiAgICAgICAgbGV0IHNjcm9sbFggPSAoKCh0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB8fCAodCA9IGRvY3VtZW50LmJvZHkucGFyZW50Tm9kZSkpICYmIHR5cGVvZiB0LnNjcm9sbExlZnQgPT0gJ251bWJlcicgPyB0IDogZG9jdW1lbnQuYm9keSkuc2Nyb2xsTGVmdDtcbiAgICAgICAgbGV0IHNjcm9sbFkgPSAoKCh0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB8fCAodCA9IGRvY3VtZW50LmJvZHkucGFyZW50Tm9kZSkpICYmIHR5cGVvZiB0LnNjcm9sbFRvcCA9PSAnbnVtYmVyJyA/IHQgOiBkb2N1bWVudC5ib2R5KS5zY3JvbGxUb3A7XG4gICAgICAgIHJldHVybiB7dG9wOiByZWN0LnRvcCtzY3JvbGxZLCBsZWZ0OiByZWN0LmxlZnQrc2Nyb2xsWH07XG4gICAgfVxuICAgIFxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVsYXRpdmVQb3NpdGlvbihlbCkge1xuICAgIHJldHVybiB7dG9wOiBlbC5vZmZzZXRUb3AsIGxlZnQ6IGVsLm9mZnNldExlZnR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3NzKGVsLCBzdHlsZU5hbWUsIHZhbHVlKSB7XG4gICAgaWYodmFsdWUgIT09IHVuZGVmaW5lZCkgcmV0dXJuIGVsLnN0eWxlW3N0eWxlTmFtZV0gPSB2YWx1ZTtcbiAgICBlbHNlIHJldHVybiBnZXRDb21wdXRlZFN0eWxlKGVsKVtzdHlsZU5hbWVdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2Nyb2xsUG9zaXRpb24oKSB7XG4gICAgbGV0IHQ7XG4gICAgbGV0IHNjcm9sbFggPSAoKCh0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB8fCAodCA9IGRvY3VtZW50LmJvZHkucGFyZW50Tm9kZSkpICYmIHR5cGVvZiB0LnNjcm9sbExlZnQgPT0gJ251bWJlcicgPyB0IDogZG9jdW1lbnQuYm9keSkuc2Nyb2xsTGVmdDtcbiAgICBsZXQgc2Nyb2xsWSA9ICgoKHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHx8ICh0ID0gZG9jdW1lbnQuYm9keS5wYXJlbnROb2RlKSkgJiYgdHlwZW9mIHQuc2Nyb2xsVG9wID09ICdudW1iZXInID8gdCA6IGRvY3VtZW50LmJvZHkpLnNjcm9sbFRvcDtcbiAgICByZXR1cm4ge3g6IHNjcm9sbFgsIHk6IHNjcm9sbFl9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2Nyb2xsV2lkdGgoKSB7XG4gICAgdmFyIG5vU2Nyb2xsLCBzY3JvbGwsIG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiRElWXCIpO1xuICAgIG9EaXYuc3R5bGUuY3NzVGV4dCA9IFwicG9zaXRpb246YWJzb2x1dGU7IHRvcDotMTAwMHB4OyB3aWR0aDoxMDBweDsgaGVpZ2h0OjEwMHB4OyBvdmVyZmxvdzpoaWRkZW47XCI7XG4gICAgbm9TY3JvbGwgPSBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG9EaXYpLmNsaWVudFdpZHRoO1xuICAgIG9EaXYuc3R5bGUub3ZlcmZsb3dZID0gXCJzY3JvbGxcIjtcbiAgICBzY3JvbGwgPSBvRGl2LmNsaWVudFdpZHRoO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQob0Rpdik7XG4gICAgcmV0dXJuIG5vU2Nyb2xsLXNjcm9sbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc1Njcm9sbGJhclkoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0ID4gKHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluc2VydEFmdGVyKG5ld0VsZW1lbnQsIHRhcmdlbnRFbGVtZW50KSB7XG4gICAgdmFyIHBhcmVudCA9IHRhcmdlbnRFbGVtZW50LnBhcmVudE5vZGU7XG5cbiAgICBpZihwYXJlbnQubGFzdENoaWxkID09IHRhcmdlbnRFbGVtZW50KSB7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChuZXdFbGVtZW50KTtcbiAgICB9ZWxzZSB7XG4gICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUobmV3RWxlbWVudCwgdGFyZ2VudEVsZW1lbnQubmV4dFNpYmxpbmcpXG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==