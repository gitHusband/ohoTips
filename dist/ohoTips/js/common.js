(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["oho"] = factory();
	else
		root["oho"] = factory();
})(self, () => {
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
/* harmony export */   "addClass": () => (/* binding */ addClass),
/* harmony export */   "addCss": () => (/* binding */ addCss),
/* harmony export */   "createNode": () => (/* binding */ createNode),
/* harmony export */   "css": () => (/* binding */ css),
/* harmony export */   "extend": () => (/* binding */ extend),
/* harmony export */   "getScrollPosition": () => (/* binding */ getScrollPosition),
/* harmony export */   "getScrollWidth": () => (/* binding */ getScrollWidth),
/* harmony export */   "getStyle": () => (/* binding */ getStyle),
/* harmony export */   "hasScrollbarY": () => (/* binding */ hasScrollbarY),
/* harmony export */   "innerHeight": () => (/* binding */ innerHeight),
/* harmony export */   "innerWidth": () => (/* binding */ innerWidth),
/* harmony export */   "insertAfter": () => (/* binding */ insertAfter),
/* harmony export */   "isArray": () => (/* binding */ isArray),
/* harmony export */   "isComputedPaddingEl": () => (/* binding */ isComputedPaddingEl),
/* harmony export */   "isEmptyNum": () => (/* binding */ isEmptyNum),
/* harmony export */   "isEmptyObj": () => (/* binding */ isEmptyObj),
/* harmony export */   "isNumber": () => (/* binding */ isNumber),
/* harmony export */   "isObj": () => (/* binding */ isObj),
/* harmony export */   "isObjNotArrry": () => (/* binding */ isObjNotArrry),
/* harmony export */   "isString": () => (/* binding */ isString),
/* harmony export */   "noop": () => (/* binding */ noop),
/* harmony export */   "numAdd": () => (/* binding */ numAdd),
/* harmony export */   "numAdds": () => (/* binding */ numAdds),
/* harmony export */   "numDiv": () => (/* binding */ numDiv),
/* harmony export */   "numDivs": () => (/* binding */ numDivs),
/* harmony export */   "numMul": () => (/* binding */ numMul),
/* harmony export */   "numMuls": () => (/* binding */ numMuls),
/* harmony export */   "numSub": () => (/* binding */ numSub),
/* harmony export */   "numSubs": () => (/* binding */ numSubs),
/* harmony export */   "objToStyle": () => (/* binding */ objToStyle),
/* harmony export */   "outerHeight": () => (/* binding */ outerHeight),
/* harmony export */   "outerWidth": () => (/* binding */ outerWidth),
/* harmony export */   "position": () => (/* binding */ position),
/* harmony export */   "randomNum": () => (/* binding */ randomNum),
/* harmony export */   "regNum": () => (/* binding */ regNum),
/* harmony export */   "regNumNegative": () => (/* binding */ regNumNegative),
/* harmony export */   "regPer": () => (/* binding */ regPer),
/* harmony export */   "regPerNegative": () => (/* binding */ regPerNegative),
/* harmony export */   "relativePosition": () => (/* binding */ relativePosition),
/* harmony export */   "removeClass": () => (/* binding */ removeClass),
/* harmony export */   "styleToObj": () => (/* binding */ styleToObj),
/* harmony export */   "trim": () => (/* binding */ trim)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRU87QUFDUDs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdEQUFnRCx1Q0FBdUM7QUFDdkYsZUFBZTtBQUNmOztBQUVPO0FBQ1A7O0FBRUE7QUFDQSw4Q0FBOEMsK0NBQStDOztBQUU3RjtBQUNBLGdCQUFnQjtBQUNoQixNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFTztBQUNQLFlBQVk7QUFDWjs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFTztBQUNQO0FBQ0EsNkNBQTZDLGFBQWEsYUFBYSxjQUFjLGdCQUFnQjtBQUNyRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL29oby93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vb2hvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29oby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2hvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2hvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2hvLy4vc3JjL2pzL2NvbW1vbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJvaG9cIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wib2hvXCJdID0gZmFjdG9yeSgpO1xufSkoc2VsZiwgKCkgPT4ge1xucmV0dXJuICIsIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGNvbnN0IHJlZ051bSA9IC9eW1xcLSwgXFwrXT9cXGQrKFxcLlxcZCspPyhbZSxFXVsrLV0/XFxkKyk/JC87XG5leHBvcnQgY29uc3QgcmVnTnVtTmVnYXRpdmUgPSAvXlxcLVxcZCsoXFwuXFxkKyk/KFtlLEVdWystXT9cXGQrKT8kLztcbmV4cG9ydCBjb25zdCByZWdQZXIgPSAvXltcXC0sIFxcK10/KChcXGQrXFwuP1xcZCopfChcXGQqXFwuXFxkKykpKFtlLEVdWystXT9cXGQrKT9cXCUkLztcbmV4cG9ydCBjb25zdCByZWdQZXJOZWdhdGl2ZSA9IC9eXFwtKChcXGQrXFwuP1xcZCopfChcXGQqXFwuXFxkKykpKFtlLEVdWystXT9cXGQrKT9cXCUkLztcblxuZXhwb3J0IGZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5leHBvcnQgZnVuY3Rpb24gaXNFbXB0eU51bShudW0pIHtcbiAgICBpZihudW0gIT09IDAgJiYgIW51bSkgeyAgICAgLy8gXCJcIiwgbnVsbCwgdW5kZWZpbmVkLCBOYU5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfWVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG4vLyDkuKTkuKrmta7ngrnmlbDmsYLlkoxcbmV4cG9ydCBmdW5jdGlvbiBudW1BZGQobnVtMSxudW0yKSB7XG4gICAgbGV0IHIxLHIyLG07XG4gICAgdHJ5e1xuICAgICAgICByMSA9IG51bTEudG9TdHJpbmcoKS5zcGxpdCgnLicpWzFdLmxlbmd0aDtcbiAgICB9Y2F0Y2goZSl7XG4gICAgICAgIHIxID0gMDtcbiAgICB9XG4gICAgdHJ5e1xuICAgICAgICByMj1udW0yLnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpWzFdLmxlbmd0aDtcbiAgICB9Y2F0Y2goZSl7XG4gICAgICAgIHIyPTA7XG4gICAgfVxuICAgIG09TWF0aC5wb3coMTAsTWF0aC5tYXgocjEscjIpKTtcbiAgICAvLyByZXR1cm4gKG51bTEqbStudW0yKm0pL207XG4gICAgcmV0dXJuIE1hdGgucm91bmQobnVtMSptK251bTIqbSkvbTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG51bUFkZHMoKXtcbiAgICBsZXQgcmVzdWx0ID0gYXJndW1lbnRzWzBdO1xuXG4gICAgbGV0IGkgPSAxO1xuICAgIGZvcihpOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdCA9IG51bUFkZChyZXN1bHQsIGFyZ3VtZW50c1tpXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8g5Lik5Liq5rWu54K55pWw55u45YePXG5leHBvcnQgZnVuY3Rpb24gbnVtU3ViKG51bTEsbnVtMikge1xuICAgIGxldCByMSxyMixtO1xuICAgIHRyeXtcbiAgICAgICAgcjEgPSBudW0xLnRvU3RyaW5nKCkuc3BsaXQoJy4nKVsxXS5sZW5ndGg7XG4gICAgfWNhdGNoKGUpe1xuICAgICAgICByMSA9IDA7XG4gICAgfVxuICAgIHRyeXtcbiAgICAgICAgcjI9bnVtMi50b1N0cmluZygpLnNwbGl0KFwiLlwiKVsxXS5sZW5ndGg7XG4gICAgfWNhdGNoKGUpe1xuICAgICAgICByMj0wO1xuICAgIH1cbiAgICBtPU1hdGgucG93KDEwLE1hdGgubWF4KHIxLHIyKSk7XG4gICAgbj0ocjE+PXIyKT9yMTpyMjtcbiAgICByZXR1cm4gcGFyc2VGbG9hdCgoTWF0aC5yb3VuZChudW0xKm0tbnVtMiptKS9tKS50b0ZpeGVkKG4pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG51bVN1YnMoKXtcbiAgICBsZXQgcmVzdWx0ID0gYXJndW1lbnRzWzBdO1xuXG4gICAgbGV0IGkgPSAxO1xuICAgIGZvcihpOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdCA9IG51bVN1YihyZXN1bHQsIGFyZ3VtZW50c1tpXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8g5Lik5Liq5rWu54K55pWw55u45LmYXG5leHBvcnQgZnVuY3Rpb24gbnVtTXVsKG51bTEsbnVtMikge1xuICAgIGxldCBtPTAsczE9bnVtMS50b1N0cmluZygpLHMyPW51bTIudG9TdHJpbmcoKTtcbiAgICB0cnl7XG4gICAgICAgIG0rPXMxLnNwbGl0KFwiLlwiKVsxXS5sZW5ndGhcbiAgICB9Y2F0Y2goZSl7XG5cbiAgICB9O1xuICAgIHRyeXtcbiAgICAgICAgbSs9czIuc3BsaXQoXCIuXCIpWzFdLmxlbmd0aFxuICAgIH1jYXRjaChlKXtcblxuICAgIH07XG4gICAgcmV0dXJuIE51bWJlcihzMS5yZXBsYWNlKFwiLlwiLFwiXCIpKSpOdW1iZXIoczIucmVwbGFjZShcIi5cIixcIlwiKSkvTWF0aC5wb3coMTAsbSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBudW1NdWxzKCl7XG4gICAgbGV0IHJlc3VsdCA9IGFyZ3VtZW50c1swXTtcblxuICAgIGxldCBpID0gMTtcbiAgICBmb3IoaTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICByZXN1bHQgPSBudW1NdWwocmVzdWx0LCBhcmd1bWVudHNbaV0pO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIOS4pOS4qua1rueCueaVsOebuOmZpFxuZXhwb3J0IGZ1bmN0aW9uIG51bURpdihudW0xLG51bTIpIHtcbiAgICBsZXQgdDEsdDIscjEscjI7XG4gICAgdHJ5e1xuICAgICAgICB0MSA9IG51bTEudG9TdHJpbmcoKS5zcGxpdCgnLicpWzFdLmxlbmd0aDtcbiAgICB9Y2F0Y2goZSl7XG4gICAgICAgIHQxID0gMDtcbiAgICB9XG4gICAgdHJ5e1xuICAgICAgICB0Mj1udW0yLnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpWzFdLmxlbmd0aDtcbiAgICB9Y2F0Y2goZSl7XG4gICAgICAgIHQyPTA7XG4gICAgfVxuICAgIHIxPU51bWJlcihudW0xLnRvU3RyaW5nKCkucmVwbGFjZShcIi5cIixcIlwiKSk7XG4gICAgcjI9TnVtYmVyKG51bTIudG9TdHJpbmcoKS5yZXBsYWNlKFwiLlwiLFwiXCIpKTtcbiAgICByZXR1cm4gKHIxL3IyKSpNYXRoLnBvdygxMCx0Mi10MSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBudW1EaXZzKCl7XG4gICAgbGV0IHJlc3VsdCA9IGFyZ3VtZW50c1swXTtcblxuICAgIGxldCBpID0gMTtcbiAgICBmb3IoaTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICByZXN1bHQgPSBudW1EaXYocmVzdWx0LCBhcmd1bWVudHNbaV0pO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc051bWJlcih2YWwpIHtcbiAgICBsZXQgcmVnUG9zID0gL15cXGQrKFxcLlxcZCspPyQvOyAvL+mdnui0n+a1rueCueaVsFxuICAgIGxldCByZWdOZWcgPSAvXigtKChbMC05XStcXC5bMC05XSpbMS05XVswLTldKil8KFswLTldKlsxLTldWzAtOV0qXFwuWzAtOV0rKXwoWzAtOV0qWzEtOV1bMC05XSopKSkkLzsgLy/otJ/mta7ngrnmlbBcbiAgICBpZihyZWdQb3MudGVzdCh2YWwpIHx8IHJlZ05lZy50ZXN0KHZhbCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nKHZhbHVlKSB7XG4gICAgcmV0dXJuICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycpICYmIHZhbHVlLmNvbnN0cnVjdG9yID09IFN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXkodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIEFycmF5LmlzQXJyYXkgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSk7XG4gICAgfWVsc2V7XG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSBcIltvYmplY3QgQXJyYXldXCI7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNPYmoodmFsdWUpIHtcbiAgICAvLyDoi6V2YWx1ZSDmmK8gbnVsbOWvueixoSwgdHlwZSDkuLogXCJbb2JqZWN0IE51bGxdXCLvvJtcbiAgICBsZXQgdHlwZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gICAgcmV0dXJuIHR5cGUgPT09IFwiW29iamVjdCBPYmplY3RdXCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VtcHR5T2JqKHZhbHVlKSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHZhbHVlKS5sZW5ndGggPT0gMDtcbn1cblxuLy/pnZ5udWxs5a+56LGh77yM6Z2e5pWw57uE5a+56LGhXG5leHBvcnQgZnVuY3Rpb24gaXNPYmpOb3RBcnJyeSh2YWx1ZSkge1xuICAgIHJldHVybiBpc09iaih2YWx1ZSkgJiYgIWlzQXJyYXkodmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0ZW5kKHRhcmdldCkge1xuICAgIGlmKCF0YXJnZXQpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignTm8gdGFyZ2V0IScpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaWdub3JlKG9iaikge1xuICAgICAgICBpZighb2JqKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgbGV0IGlzSnEgPSBmYWxzZTtcbiAgICAgICAgaWYod2luZG93LmpRdWVyeSl7XG4gICAgICAgICAgICBpc0pxID0gb2JqIGluc3RhbmNlb2YgalF1ZXJ5O1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGlzSWdub3JlID0gaXNKcTtcbiAgICAgICAgcmV0dXJuIGlzSWdub3JlO1xuICAgIH1cblxuICAgIGxldCBvYmpzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsMSk7XG5cbiAgICBpZihvYmpzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgb2Jqcy5mb3JFYWNoKChpdGVtLGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZihpc09iak5vdEFycnJ5KGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBrZXkgaW4gaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBpZihpc09iak5vdEFycnJ5KGl0ZW1ba2V5XSkgJiYgIWlnbm9yZShpdGVtW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZighIHRhcmdldC5oYXNPd25Qcm9wZXJ0eShrZXkpIHx8ICFpc09iak5vdEFycnJ5KHRhcmdldFtrZXldKSkgdGFyZ2V0W2tleV0gPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dGVuZCh0YXJnZXRba2V5XSxpdGVtW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IGl0ZW1ba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdQYXJhbWV0ZXIgJyArIGluZGV4ICsgJyBpcyBubyB2YWxpZCBhcmd1bWVudHMsIGV4cGVjdGVkIHRvIGJlIG9iamVjdCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmltKHN0ciwgaXNnbG9iYWwpIHtcbiAgICBsZXQgcmVzdWx0O1xuICAgIHJlc3VsdCA9IHN0ci5yZXBsYWNlKC8oXlxccyspfChcXHMrJCkvZywgJycpO1xuICAgIGlmIChpc2dsb2JhbCAmJiBpc2dsb2JhbC50b0xvd2VyQ2FzZSgpID09PSAnZycpIHtcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UoL1xccy9nLCAnJyk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kb21OdW0obWluLCBtYXgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5vZGUoaHRtbFN0cikge1xuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdi5pbm5lckhUTUwgPSBodG1sU3RyO1xuICAgIHJldHVybiBkaXYuY2hpbGROb2Rlc1swXS5jbG9uZU5vZGUodHJ1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvYmpUb1N0eWxlKG9iaikge1xuICAgIGxldCBzdHlsZSA9IFtdO1xuICAgIGZvcihsZXQgaSBpbiBvYmope1xuICAgICAgICBzdHlsZS5wdXNoKGkgKyAnOicgKyBvYmpbaV0pO1xuICAgIH1cbiAgICBzdHlsZSA9IHN0eWxlLmpvaW4oJzsnKTtcblxuICAgIHJldHVybiAgc3R5bGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHlsZVRvT2JqKHN0eWxlKSB7XG4gICAgaWYgKCFzdHlsZSB8fCBzdHlsZSA9PSAnJykgeyByZXR1cm4gJyc7IH1cblxuICAgIGxldCBzdHlsZUFyciA9IHN0eWxlLnNwbGl0KCc7JylcbiAgICBzdHlsZUFyciA9IHN0eWxlQXJyLmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgcmV0dXJuIGl0ZW0gIT0gJyc7XG4gICAgfSk7XG5cbiAgICBsZXQgb2JqU3RyID0gJyc7XG4gICAgc3R5bGVBcnIuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgbGV0IGNzcyA9ICcnO1xuICAgICAgICBpdGVtID0gaXRlbS5yZXBsYWNlKC8oXlxccyspfChcXHMrJCkvZywgJycpO1xuICAgICAgICB0cmltKGl0ZW0pLnNwbGl0KCc6JykuZm9yRWFjaChjc3NWYWx1ZSA9PiB7XG4gICAgICAgICAgICBjc3MgKz0gJ1wiJyArIHRyaW0oY3NzVmFsdWUpICsgJ1wiOic7XG4gICAgICAgIH0pXG4gICAgICAgIG9ialN0ciArPSBjc3MgKyAnLCc7XG4gICAgfSlcbiAgICBvYmpTdHIgPSBvYmpTdHIucmVwbGFjZSgvOiwvZywgJywnKTtcbiAgICBvYmpTdHIgPSBvYmpTdHIuc3Vic3RyaW5nKDAsIG9ialN0ci5sYXN0SW5kZXhPZignLCcpKTtcbiAgICBvYmpTdHIgPSAneycgKyBvYmpTdHIgKyAnfSc7XG4gICAgcmV0dXJuIEpTT04ucGFyc2Uob2JqU3RyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENzcyhlbCwgY3NzT2JqKSB7XG4gICAgbGV0IG9sZENzc1RleHQgPSBlbC5zdHlsZS5jc3NUZXh0O1xuICAgIG9sZENzc1RleHQgPSBzdHlsZVRvT2JqKG9sZENzc1RleHQpIHx8IHt9O1xuICAgIGlmKG9sZENzc1RleHQpIGNzc09iaiA9IGV4dGVuZCh7fSwgb2xkQ3NzVGV4dCwgY3NzT2JqKTtcblxuICAgIGxldCBudW1iZXJTdHlsZUFyciA9IFsnb3BhY2l0eSddO1xuICAgIGZvcihsZXQgaSBpbiBjc3NPYmope1xuICAgICAgICBpZihudW1iZXJTdHlsZUFyci5pbmRleE9mKGkpICE9IC0xKSBjb250aW51ZTsgXG4gICAgICAgIGlmKGlzTnVtYmVyKGNzc09ialtpXSkpIGNzc09ialtpXSArPSBcInB4XCI7XG4gICAgfVxuICAgIGxldCBjc3NUZXh0ID0gb2JqVG9TdHlsZShjc3NPYmopO1xuXG4gICAgZWwuc3R5bGUuY3NzVGV4dCA9IGNzc1RleHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRDbGFzcyhlbCwgY2xhc3NOYW1lKSB7XG4gICAgaWYodHlwZW9mKGNsYXNzTmFtZSkgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lLnNwbGl0KCcgJyk7XG4gICAgfVxuXG4gICAgaWYoIWlzQXJyYXkoY2xhc3NOYW1lKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbGV0IG9sZENsYXNzID0gZWwuY2xhc3NOYW1lLnNwbGl0KCcgJyk7XG4gICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lLmZpbHRlcihpdGVtID0+ICFvbGRDbGFzcy5pbmNsdWRlcyhpdGVtKSk7XG4gICAgaWYoY2xhc3NOYW1lLmxlbmd0aCA9PSAwKSByZXR1cm47XG5cbiAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUuam9pbignICcpO1xuXG4gICAgcmV0dXJuIGVsLmNsYXNzTmFtZSArPSAnICcgKyBjbGFzc05hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDbGFzcyhlbCwgY2xhc3NOYW1lKSB7XG4gICAgaWYgKGVsLmNsYXNzTGlzdCkge1xuICAgICAgICBpZih0eXBlb2YoY2xhc3NOYW1lKSA9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lLnNwbGl0KCcgJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZighaXNBcnJheShjbGFzc05hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjbGFzc05hbWUuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgICAgfSk7XG4gICAgfWVsc2Uge1xuICAgICAgICBlbC5jbGFzc05hbWUgPSBlbC5jbGFzc05hbWUucmVwbGFjZShuZXcgUmVnRXhwKCcoXnxcXFxcYiknICsgY2xhc3NOYW1lLnNwbGl0KCcgJykuam9pbignfCcpICsgJyhcXFxcYnwkKScsICdnaScpLCAnICcpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0eWxlKGVsLCBzdHlsZUF0dHIpIHtcbiAgICBsZXQgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsKTtcblxuICAgIGlmKCFzdHlsZUF0dHIpIHtcbiAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgIH1lbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0eWxlW3N0eWxlQXR0cl07XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb3V0ZXJXaWR0aChlbCwgc3RhdHVzKSB7XG4gICAgbGV0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XG4gICAgbGV0IHdpZHRoID0gcGFyc2VGbG9hdChzdHlsZS53aWR0aCkgKyBwYXJzZUZsb2F0KHN0eWxlLmJvcmRlckxlZnRXaWR0aCkgKyBwYXJzZUZsb2F0KHN0eWxlLmJvcmRlclJpZ2h0V2lkdGgpO1xuXG4gICAgaWYoIWlzQ29tcHV0ZWRQYWRkaW5nRWwoZWwpKSB3aWR0aCArPSBwYXJzZUZsb2F0KHN0eWxlLnBhZGRpbmdMZWZ0KSArIHBhcnNlRmxvYXQoc3R5bGUucGFkZGluZ1JpZ2h0KTtcblxuICAgIGlmKCFzdGF0dXMpIHJldHVybiB3aWR0aDtcblxuICAgIHdpZHRoICs9IHBhcnNlRmxvYXQoc3R5bGUubWFyZ2luTGVmdCkgKyBwYXJzZUZsb2F0KHN0eWxlLm1hcmdpblJpZ2h0KTtcbiAgICByZXR1cm4gd2lkdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvdXRlckhlaWdodChlbCwgc3RhdHVzKSB7XG4gICAgbGV0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XG4gICAgbGV0IGhlaWdodCA9IHBhcnNlRmxvYXQoc3R5bGUuaGVpZ2h0KSArIHBhcnNlRmxvYXQoc3R5bGUuYm9yZGVyVG9wV2lkdGgpICsgcGFyc2VGbG9hdChzdHlsZS5ib3JkZXJCb3R0b21XaWR0aCk7XG5cbiAgICBpZighaXNDb21wdXRlZFBhZGRpbmdFbChlbCkpIGhlaWdodCArPSBwYXJzZUZsb2F0KHN0eWxlLnBhZGRpbmdUb3ApICsgcGFyc2VGbG9hdChzdHlsZS5wYWRkaW5nQm90dG9tKTtcblxuICAgIGlmKCFzdGF0dXMpIHJldHVybiBoZWlnaHQ7XG4gICAgXG4gICAgaGVpZ2h0ICs9IHBhcnNlRmxvYXQoc3R5bGUubWFyZ2luVG9wKSArIHBhcnNlRmxvYXQoc3R5bGUubWFyZ2luQm90dG9tKTtcbiAgICByZXR1cm4gaGVpZ2h0O1xufVxuXG4vLyBleHBvcnQgZnVuY3Rpb24gaW5uZXJXaWR0aChlbCwgc3RhdHVzKSB7XG4vLyAgICAgaWYoIXN0YXR1cykgcmV0dXJuIGVsLmNsaWVudFdpZHRoO1xuXG4vLyAgICAgbGV0IHdpZHRoID0gZWwuY2xpZW50V2lkdGg7XG4vLyAgICAgbGV0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XG5cbi8vICAgICB3aWR0aCArPSBwYXJzZUZsb2F0KHN0eWxlLnBhZGRpbmdMZWZ0KSArIHBhcnNlRmxvYXQoc3R5bGUucGFkZGluZ1JpZ2h0KTtcbi8vICAgICByZXR1cm4gd2lkdGg7XG4vLyB9XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBpbm5lckhlaWdodChlbCwgc3RhdHVzKSB7XG4vLyAgICAgaWYoIXN0YXR1cykgcmV0dXJuIGVsLmNsaWVudEhlaWdodDtcblxuLy8gICAgIGxldCB3aWR0aCA9IGVsLmNsaWVudEhlaWdodDtcbi8vICAgICBsZXQgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsKTtcblxuLy8gICAgIHdpZHRoICs9IHBhcnNlRmxvYXQoc3R5bGUucGFkZGluZ1RvcCkgKyBwYXJzZUZsb2F0KHN0eWxlLnBhZGRpbmdCb3R0b20pO1xuLy8gICAgIHJldHVybiB3aWR0aDtcbi8vIH1cblxuZXhwb3J0IGZ1bmN0aW9uIGlubmVyV2lkdGgoZWwsIHN0YXR1cykge1xuICAgIGxldCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWwpO1xuICAgIGxldCB3aWR0aCA9IHBhcnNlRmxvYXQoc3R5bGUud2lkdGgpO1xuXG4gICAgaWYoaXNDb21wdXRlZFBhZGRpbmdFbChlbCkgfHwgIXN0YXR1cykgcmV0dXJuIHdpZHRoO1xuXG4gICAgd2lkdGggKz0gcGFyc2VGbG9hdChzdHlsZS5wYWRkaW5nTGVmdCkgKyBwYXJzZUZsb2F0KHN0eWxlLnBhZGRpbmdSaWdodCk7XG4gICAgcmV0dXJuIHdpZHRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5uZXJIZWlnaHQoZWwsIHN0YXR1cykge1xuICAgIGxldCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWwpO1xuICAgIGxldCBoZWlnaHQgPSBwYXJzZUZsb2F0KHN0eWxlLmhlaWdodCk7XG5cbiAgICBpZihpc0NvbXB1dGVkUGFkZGluZ0VsKGVsKSB8fCAhc3RhdHVzKSByZXR1cm4gaGVpZ2h0O1xuXG4gICAgaGVpZ2h0ICs9IHBhcnNlRmxvYXQoc3R5bGUucGFkZGluZ1RvcCkgKyBwYXJzZUZsb2F0KHN0eWxlLnBhZGRpbmdCb3R0b20pO1xuICAgIHJldHVybiBoZWlnaHQ7XG59XG5cbi8vIGdldENvbXB1dGVkU3R5bGUsIHdpZHRoIOWSjCBoZWlnaHQg5bey57uP5YyF5ZCrUGFkZGluZyDnmoTlhYPntKBcbmV4cG9ydCBmdW5jdGlvbiBpc0NvbXB1dGVkUGFkZGluZ0VsKGVsKSB7XG4gICAgbGV0IGVsQXJyID0gWydidXR0b24nXTtcbiAgICByZXR1cm4gZWxBcnIuaW5jbHVkZXMoZWwubG9jYWxOYW1lKTtcbn1cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIHBvc2l0aW9uKGVsKSB7XG4vLyAgICAgY29uc29sZS5sb2coZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksIHt0b3A6IGVsLm9mZnNldFRvcCwgbGVmdDogZWwub2Zmc2V0TGVmdH0pO1xuLy8gICAgIHJldHVybiB7dG9wOiBlbC5vZmZzZXRUb3AsIGxlZnQ6IGVsLm9mZnNldExlZnR9O1xuLy8gfVxuXG5leHBvcnQgZnVuY3Rpb24gcG9zaXRpb24oZWwpIHtcbiAgICBsZXQgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgLy8gY29uc29sZS50cmFjZSgpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwiQy5wb3NpdGlvbjogXCIsIGVsLCByZWN0LCB7dG9wOiByZWN0LnRvcCtzY3JvbGxZLCBsZWZ0OiByZWN0LmxlZnQrc2Nyb2xsWH0pO1xuXG4gICAgaWYoY3NzKGVsLCAncG9zaXRpb24nKSA9PT0gJ2ZpeGVkJykge1xuICAgICAgICByZXR1cm4ge3RvcDogcmVjdC50b3AsIGxlZnQ6IHJlY3QubGVmdH07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHQ7XG4gICAgICAgIGxldCBzY3JvbGxYID0gKCgodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkgfHwgKHQgPSBkb2N1bWVudC5ib2R5LnBhcmVudE5vZGUpKSAmJiB0eXBlb2YgdC5zY3JvbGxMZWZ0ID09ICdudW1iZXInID8gdCA6IGRvY3VtZW50LmJvZHkpLnNjcm9sbExlZnQ7XG4gICAgICAgIGxldCBzY3JvbGxZID0gKCgodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkgfHwgKHQgPSBkb2N1bWVudC5ib2R5LnBhcmVudE5vZGUpKSAmJiB0eXBlb2YgdC5zY3JvbGxUb3AgPT0gJ251bWJlcicgPyB0IDogZG9jdW1lbnQuYm9keSkuc2Nyb2xsVG9wO1xuICAgICAgICByZXR1cm4ge3RvcDogcmVjdC50b3Arc2Nyb2xsWSwgbGVmdDogcmVjdC5sZWZ0K3Njcm9sbFh9O1xuICAgIH1cbiAgICBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbGF0aXZlUG9zaXRpb24oZWwpIHtcbiAgICByZXR1cm4ge3RvcDogZWwub2Zmc2V0VG9wLCBsZWZ0OiBlbC5vZmZzZXRMZWZ0fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNzcyhlbCwgc3R5bGVOYW1lLCB2YWx1ZSkge1xuICAgIGlmKHZhbHVlICE9PSB1bmRlZmluZWQpIHJldHVybiBlbC5zdHlsZVtzdHlsZU5hbWVdID0gdmFsdWU7XG4gICAgZWxzZSByZXR1cm4gZ2V0Q29tcHV0ZWRTdHlsZShlbClbc3R5bGVOYW1lXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjcm9sbFBvc2l0aW9uKCkge1xuICAgIGxldCB0O1xuICAgIGxldCBzY3JvbGxYID0gKCgodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkgfHwgKHQgPSBkb2N1bWVudC5ib2R5LnBhcmVudE5vZGUpKSAmJiB0eXBlb2YgdC5zY3JvbGxMZWZ0ID09ICdudW1iZXInID8gdCA6IGRvY3VtZW50LmJvZHkpLnNjcm9sbExlZnQ7XG4gICAgbGV0IHNjcm9sbFkgPSAoKCh0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB8fCAodCA9IGRvY3VtZW50LmJvZHkucGFyZW50Tm9kZSkpICYmIHR5cGVvZiB0LnNjcm9sbFRvcCA9PSAnbnVtYmVyJyA/IHQgOiBkb2N1bWVudC5ib2R5KS5zY3JvbGxUb3A7XG4gICAgcmV0dXJuIHt4OiBzY3JvbGxYLCB5OiBzY3JvbGxZfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjcm9sbFdpZHRoKCkge1xuICAgIHZhciBub1Njcm9sbCwgc2Nyb2xsLCBvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkRJVlwiKTtcbiAgICBvRGl2LnN0eWxlLmNzc1RleHQgPSBcInBvc2l0aW9uOmFic29sdXRlOyB0b3A6LTEwMDBweDsgd2lkdGg6MTAwcHg7IGhlaWdodDoxMDBweDsgb3ZlcmZsb3c6aGlkZGVuO1wiO1xuICAgIG5vU2Nyb2xsID0gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvRGl2KS5jbGllbnRXaWR0aDtcbiAgICBvRGl2LnN0eWxlLm92ZXJmbG93WSA9IFwic2Nyb2xsXCI7XG4gICAgc2Nyb2xsID0gb0Rpdi5jbGllbnRXaWR0aDtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG9EaXYpO1xuICAgIHJldHVybiBub1Njcm9sbC1zY3JvbGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNTY3JvbGxiYXJZKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCA+ICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnNlcnRBZnRlcihuZXdFbGVtZW50LCB0YXJnZW50RWxlbWVudCkge1xuICAgIHZhciBwYXJlbnQgPSB0YXJnZW50RWxlbWVudC5wYXJlbnROb2RlO1xuXG4gICAgaWYocGFyZW50Lmxhc3RDaGlsZCA9PSB0YXJnZW50RWxlbWVudCkge1xuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobmV3RWxlbWVudCk7XG4gICAgfWVsc2Uge1xuICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKG5ld0VsZW1lbnQsIHRhcmdlbnRFbGVtZW50Lm5leHRTaWJsaW5nKVxuICAgIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=