function common() {
    this.regNum = /^[\-, \+]?\d+(\.\d+)?([e,E][+-]?\d+)?$/;
    this.regNumNegative = /^\-\d+(\.\d+)?([e,E][+-]?\d+)?$/;
    this.regPer = /^[\-, \+]?((\d+\.?\d*)|(\d*\.\d+))([e,E][+-]?\d+)?\%$/;
    this.regPerNegative = /^\-((\d+\.?\d*)|(\d*\.\d+))([e,E][+-]?\d+)?\%$/;
};
common.prototype = {
    noop: function() {},

    isEmptyNum: function(num) {
        if(num !== 0 && !num) {     // "", null, undefined, NaN
            return true;
        }else {
            return false;
        }
    },

    // 两个浮点数求和
    numAdd: function(num1,num2){
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
    },

    numAdds: function(){
        let result = arguments[0];

        let i = 1;
        for(i; i < arguments.length; i++) {
            result = this.numAdd(result, arguments[i]);
        }

        return result;
    },
    
    // 两个浮点数相减
    numSub: function(num1,num2){
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
    },

    numSubs: function(){
        let result = arguments[0];

        let i = 1;
        for(i; i < arguments.length; i++) {
            result = this.numSub(result, arguments[i]);
        }

        return result;
    },

    // 两个浮点数相乘
    numMul: function(num1,num2){
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
    },

    numMuls: function(){
        let result = arguments[0];

        let i = 1;
        for(i; i < arguments.length; i++) {
            result = this.numMul(result, arguments[i]);
        }

        return result;
    },

    // 两个浮点数相除
    numDiv: function(num1,num2){
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
    },

    numDivs: function(){
        let result = arguments[0];

        let i = 1;
        for(i; i < arguments.length; i++) {
            result = this.numDiv(result, arguments[i]);
        }

        return result;
    },

    isNumber: function(val) {
        let regPos = /^\d+(\.\d+)?$/; //非负浮点数
        let regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
        if(regPos.test(val) || regNeg.test(val)) {
            return true;
        } else {
            return false;
        }
    },

    isString: function(value) {
        return (typeof value == 'string') && value.constructor == String;
    },

    isArray: function(value) {
        if (typeof Array.isArray === "function") {
            return Array.isArray(value);
        }else{
            return Object.prototype.toString.call(value) === "[object Array]";
        }
    },

    isObj: function(value) {
        // 若value 是 null对象, type 为 "[object Null]"；
        let type = Object.prototype.toString.call(value);
        return type === "[object Object]";
    },

    isEmptyObj: function(value) {
        return Object.getOwnPropertyNames(value).length == 0;
    },

    //非null对象，非数组对象
    isObjNotArrry: function(value) {
        return this.isObj(value) && !this.isArray(value);
    },

    extend: function(target) {
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
                if(this.isObjNotArrry(item)) {
                    for(let key in item) {
                        if(this.isObjNotArrry(item[key]) && !ignore(item[key])) {
                            if(! target.hasOwnProperty(key) || !this.isObjNotArrry(target[key])) target[key] = {};
                            this.extend(target[key],item[key]);
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
    },

    trim: function(str, isglobal) {
        let result;
        result = str.replace(/(^\s+)|(\s+$)/g, '');
        if (isglobal && isglobal.toLowerCase() === 'g') {
            result = result.replace(/\s/g, '');
        }
        return result;
    },

    randomNum: function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    createNode: function(htmlStr) {
        let div = document.createElement("div");
        div.innerHTML = htmlStr;
        return div.childNodes[0].cloneNode(true);
    },

    objToStyle: function(obj) {
        let style = [];
        for(let i in obj){
            style.push(i + ':' + obj[i]);
        }
        style = style.join(';');

        return  style;
    },

    styleToObj: function(style) {
        if (!style || style == '') { return ''; }

        let styleArr = style.split(';')
        styleArr = styleArr.filter(item => {
            return item != '';
        });

        let objStr = '';
        styleArr.forEach(item => {
            let css = '';
            item = item.replace(/(^\s+)|(\s+$)/g, '');
            this.trim(item).split(':').forEach(cssValue => {
                css += '"' + this.trim(cssValue) + '":';
            })
            objStr += css + ',';
        })
        objStr = objStr.replace(/:,/g, ',');
        objStr = objStr.substring(0, objStr.lastIndexOf(','));
        objStr = '{' + objStr + '}';
        return JSON.parse(objStr);
    },

    addCss: function(el, cssObj) {
        let oldCssText = el.style.cssText;
        oldCssText = this.styleToObj(oldCssText) || {};
        if(oldCssText) cssObj = this.extend({}, oldCssText, cssObj);

        let numberStyleArr = ['opacity'];
        for(let i in cssObj){
            if(numberStyleArr.indexOf(i) != -1) continue; 
            if(this.isNumber(cssObj[i])) cssObj[i] += "px";
        }
        let cssText = this.objToStyle(cssObj);

        el.style.cssText = cssText;
    },

    addClass: function(el, className) {
        if(typeof(className) == 'string') {
            className = className.split(' ');
        }

        if(!this.isArray(className)) {
            return false;
        }

        let oldClass = el.className.split(' ');
        className = className.filter(item => !oldClass.includes(item));
        if(className.length == 0) return;

        className = className.join(' ');

        return el.className += ' ' + className;
    },

    removeClass: function(el, className) {
        if (el.classList) {
            if(typeof(className) == 'string') {
                className = className.split(' ');
            }

            if(!this.isArray(className)) {
                return false;
            }

            className.forEach(item => {
                el.classList.remove(className);
            });
        }else {
            el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    },

    getStyle: function(el, styleAttr) {
        let style = getComputedStyle(el);

        if(!styleAttr) {
            return style;
        }else {
            return style[styleAttr];
        }
    },

    outerWidth: function(el, status) {
        let style = getComputedStyle(el);
        let width = parseFloat(style.width) + parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);

        if(!this.isComputedPaddingEl(el)) width += parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);

        if(!status) return width;

        width += parseFloat(style.marginLeft) + parseFloat(style.marginRight);
        return width;
    },

    outerHeight: function(el, status) {
        let style = getComputedStyle(el);
        let height = parseFloat(style.height) + parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);

        if(!this.isComputedPaddingEl(el)) height += parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);

        if(!status) return height;
        
        height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
        return height;
    },

    // innerWidth: function(el, status) {
    //     if(!status) return el.clientWidth;

    //     let width = el.clientWidth;
    //     let style = getComputedStyle(el);

    //     width += parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
    //     return width;
    // },

    // innerHeight: function(el, status) {
    //     if(!status) return el.clientHeight;

    //     let width = el.clientHeight;
    //     let style = getComputedStyle(el);

    //     width += parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
    //     return width;
    // },

    innerWidth: function(el, status) {
        let style = getComputedStyle(el);
        let width = parseFloat(style.width);

        if(this.isComputedPaddingEl(el) || !status) return width;

        width += parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
        return width;
    },

    innerHeight: function(el, status) {
        let style = getComputedStyle(el);
        let height = parseFloat(style.height);

        if(this.isComputedPaddingEl(el) || !status) return height;

        height += parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
        return height;
    },

    // getComputedStyle, width 和 height 已经包含Padding 的元素
    isComputedPaddingEl: function(el) {
        let elArr = ['button'];
        return elArr.includes(el.localName);
    },

    // position: function(el) {
    //     console.log(el.getBoundingClientRect(), {top: el.offsetTop, left: el.offsetLeft});
    //     return {top: el.offsetTop, left: el.offsetLeft};
    // },

    position: function(el) {
        let rect = el.getBoundingClientRect();

        // console.trace();
        // console.log("C.position: ", el, rect, {top: rect.top+scrollY, left: rect.left+scrollX});

        if(this.css(el, 'position') === 'fixed') {
            return {top: rect.top, left: rect.left};
        } else {
            let t;
            let scrollX = (((t = document.documentElement) || (t = document.body.parentNode)) && typeof t.scrollLeft == 'number' ? t : document.body).scrollLeft;
            let scrollY = (((t = document.documentElement) || (t = document.body.parentNode)) && typeof t.scrollTop == 'number' ? t : document.body).scrollTop;
            return {top: rect.top+scrollY, left: rect.left+scrollX};
        }
        
    },

    css: function(el, styleName, value) {
        if(value !== undefined) return el.style[styleName] = value;
        else return getComputedStyle(el)[styleName];
    },

    getScrollWidth: function() {
        var noScroll, scroll, oDiv = document.createElement("DIV");
        oDiv.style.cssText = "position:absolute; top:-1000px; width:100px; height:100px; overflow:hidden;";
        noScroll = document.body.appendChild(oDiv).clientWidth;
        oDiv.style.overflowY = "scroll";
        scroll = oDiv.clientWidth;
        document.body.removeChild(oDiv);
        return noScroll-scroll;
    },

    hasScrollbarY: function() {
        return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight);
    },

    insertAfter: function(newElement, targentElement) {
        var parent = targentElement.parentNode;

        if(parent.lastChild == targentElement) {
            parent.appendChild(newElement);
        }else {
            parent.insertBefore(newElement, targentElement.nextSibling)
        }
    }
}

export { common };