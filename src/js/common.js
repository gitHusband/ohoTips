export const regNum = /^[\-, \+]?\d+(\.\d+)?([e,E][+-]?\d+)?$/;
export const regNumNegative = /^\-\d+(\.\d+)?([e,E][+-]?\d+)?$/;
export const regPer = /^[\-, \+]?((\d+\.?\d*)|(\d*\.\d+))([e,E][+-]?\d+)?\%$/;
export const regPerNegative = /^\-((\d+\.?\d*)|(\d*\.\d+))([e,E][+-]?\d+)?\%$/;

export function noop() {}

export function isEmptyNum(num) {
    if(num !== 0 && !num) {     // "", null, undefined, NaN
        return true;
    }else {
        return false;
    }
}

// 两个浮点数求和
export function numAdd(num1,num2) {
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

export function numAdds(){
    let result = arguments[0];

    let i = 1;
    for(i; i < arguments.length; i++) {
        result = numAdd(result, arguments[i]);
    }

    return result;
}

// 两个浮点数相减
export function numSub(num1,num2) {
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

export function numSubs(){
    let result = arguments[0];

    let i = 1;
    for(i; i < arguments.length; i++) {
        result = numSub(result, arguments[i]);
    }

    return result;
}

// 两个浮点数相乘
export function numMul(num1,num2) {
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

export function numMuls(){
    let result = arguments[0];

    let i = 1;
    for(i; i < arguments.length; i++) {
        result = numMul(result, arguments[i]);
    }

    return result;
}

// 两个浮点数相除
export function numDiv(num1,num2) {
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

export function numDivs(){
    let result = arguments[0];

    let i = 1;
    for(i; i < arguments.length; i++) {
        result = numDiv(result, arguments[i]);
    }

    return result;
}

export function isNumber(val) {
    let regPos = /^\d+(\.\d+)?$/; //非负浮点数
    let regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
    if(regPos.test(val) || regNeg.test(val)) {
        return true;
    } else {
        return false;
    }
}

export function isString(value) {
    return (typeof value == 'string') && value.constructor == String;
}

export function isArray(value) {
    if (typeof Array.isArray === "function") {
        return Array.isArray(value);
    }else{
        return Object.prototype.toString.call(value) === "[object Array]";
    }
}

export function isObj(value) {
    // 若value 是 null对象, type 为 "[object Null]"；
    let type = Object.prototype.toString.call(value);
    return type === "[object Object]";
}

export function isEmptyObj(value) {
    return Object.getOwnPropertyNames(value).length == 0;
}

//非null对象，非数组对象
export function isObjNotArrry(value) {
    return isObj(value) && !isArray(value);
}

export function extend(target) {
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

export function trim(str, isglobal) {
    let result;
    result = str.replace(/(^\s+)|(\s+$)/g, '');
    if (isglobal && isglobal.toLowerCase() === 'g') {
        result = result.replace(/\s/g, '');
    }
    return result;
}

export function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function createNode(htmlStr) {
    let div = document.createElement("div");
    div.innerHTML = htmlStr;
    return div.childNodes[0].cloneNode(true);
}

export function objToStyle(obj) {
    let style = [];
    for(let i in obj){
        style.push(i + ':' + obj[i]);
    }
    style = style.join(';');

    return  style;
}

export function styleToObj(style) {
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

export function addCss(el, cssObj) {
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

export function addClass(el, className) {
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

export function removeClass(el, className) {
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

export function getStyle(el, styleAttr) {
    let style = getComputedStyle(el);

    if(!styleAttr) {
        return style;
    }else {
        return style[styleAttr];
    }
}

export function outerWidth(el, status) {
    let style = getComputedStyle(el);
    let width = parseFloat(style.width) + parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);

    if(!isComputedPaddingEl(el)) width += parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);

    if(!status) return width;

    width += parseFloat(style.marginLeft) + parseFloat(style.marginRight);
    return width;
}

export function outerHeight(el, status) {
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

export function innerWidth(el, status) {
    let style = getComputedStyle(el);
    let width = parseFloat(style.width);

    if(isComputedPaddingEl(el) || !status) return width;

    width += parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
    return width;
}

export function innerHeight(el, status) {
    let style = getComputedStyle(el);
    let height = parseFloat(style.height);

    if(isComputedPaddingEl(el) || !status) return height;

    height += parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
    return height;
}

// getComputedStyle, width 和 height 已经包含Padding 的元素
export function isComputedPaddingEl(el) {
    let elArr = ['button'];
    return elArr.includes(el.localName);
}

// export function position(el) {
//     console.log(el.getBoundingClientRect(), {top: el.offsetTop, left: el.offsetLeft});
//     return {top: el.offsetTop, left: el.offsetLeft};
// }

export function position(el) {
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

export function css(el, styleName, value) {
    if(value !== undefined) return el.style[styleName] = value;
    else return getComputedStyle(el)[styleName];
}

export function getScrollWidth() {
    var noScroll, scroll, oDiv = document.createElement("DIV");
    oDiv.style.cssText = "position:absolute; top:-1000px; width:100px; height:100px; overflow:hidden;";
    noScroll = document.body.appendChild(oDiv).clientWidth;
    oDiv.style.overflowY = "scroll";
    scroll = oDiv.clientWidth;
    document.body.removeChild(oDiv);
    return noScroll-scroll;
}

export function hasScrollbarY() {
    return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight);
}

export function insertAfter(newElement, targentElement) {
    var parent = targentElement.parentNode;

    if(parent.lastChild == targentElement) {
        parent.appendChild(newElement);
    }else {
        parent.insertBefore(newElement, targentElement.nextSibling)
    }
}