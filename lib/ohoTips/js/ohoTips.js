// import { testFun } from "./common.js";
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
        console.log(style);
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
        if(!status) return el.offsetWidth;

        let width = el.offsetWidth;
        let style = getComputedStyle(el);

        width += parseFloat(style.marginLeft) + parseFloat(style.marginRight);
        return width;
    },

    outerHeight: function(el, status) {
        if(!status) return el.offsetHeight;

        let height = el.offsetHeight;
        let style = getComputedStyle(el);

        height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
        return height;
    },

    innerWidth: function(el, status) {
        if(!status) return el.clientWidth;

        let width = el.clientWidth;
        let style = getComputedStyle(el);

        width += parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
        return width;
    },

    innerHeight: function(el, status) {
        if(!status) return el.clientHeight;

        let width = el.clientHeight;
        let style = getComputedStyle(el);

        width += parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
        return width;
    },

    position: function(el) {
        return {top: el.offsetTop, left: el.offsetLeft};
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
    }
}

let C = new common();

/*tips 插件*/
(function () {
    
    function tips(options) {
        if(!options)
            return this;

        this.C = C;

        this.init(options);
    }

    tips.C = C;

    tips.defaultOptions = {
        parentElement: "",          //基准方位元素
        direction: 'inner',         //计算tips定位时，inner - 计算Tips 宽高，尽量使Tips 位于父元素内部，'normal' - 不计算Tips宽高，按照position数据来，'outer' - 计算Tips 宽高，尽量使Tips 位于父元素外部； 默认'inner'。
        position: "middle",         //tips 位置，左上角，上居中，右上角，左居中，全居中，右居中，左下角，下居中，右下角，自定义相对位置，浮动
        offset: {                   //如果position 是对象如{tip: 0}，则一般不需要这个，如果是字符串，则可以酌情添加offset, 调整父元素与Tips 的相对定位, 仅支持top，left
            top: null,
            left: null
        },
        group: {                    //分组，多个Tips 集合，超出分组最大限制个数则删除最开始的Tips
            name: null,                 //分组名称
            len: 9999,                  //一个分组最大Tips个数
        },
        type: "normal",             //tips 样式, 支持自定义样式（传入class名称）
        limit: true,                //限制Tips 的大小
        icon: false,                //是否显示icon, true - 按照type参数自动设置icon类型，支持字符串设置icon类型，主要是形状，如 normal，clock等
        iconOptions: {
            type: 'info',           //当icon 为字符串时，icon主要定制形状(也含颜色)，此时type可以额外设置icon 的色调
            position: 'left',       //icon 的位置，支持top, left, bottom, right
        },
        binder: false,              //是否显示bnder, true - 默认triangle，支持字符串设置binder类型，如 triangle等，目前仅支持triangle
        binderOptions: {
            type: null,             //如果不设置，binder则按option.type 色调，否则按该参数的色调
            position: null,         //如果不设置，binder则根据option.position 设置定位(不一定一样)，否则按该参数定位
            offset: {               //如果启用binder，binder不计算宽高，则可以酌情添加offset, 调整父元素与Tips 的相对定位, 仅支持top，left
                top: null,
                left: null
            }
        },
        shadow: false,              //false - 没有阴影， true - 有阴影
        background: false,          //false - 不显示遮罩层覆盖父元素， true - 显示遮罩层覆盖父元素
        destroy: "auto",            //auto - 自动销毁tips，manual - 不自动销毁tips，需手动销毁, never - 从不销毁tips
        delay: 2000,                //自动销毁tips 延时，单位：ms
        msg: '',                    //传入数组可换行
        html: false,                //false - 文本类型信息，true - dom元素类型信息
        htmlCallback: C.noop,       //dom元素回调函数，用于监听dom元素动作
        float: {                    //浮动参数，当position 等于 'float' 或 'translate' 时，可选；其余情况不需要 
            type: 'default',            //若不使用floatPositionFun, 可选择默认浮动方法
            cusFloatOptions: null,      //自定义浮动选项
            cusFloatStatus: null,       //自定义浮动初始状态，top，left等
            cusFloatFun: null,          //自定义浮动方法
            cusFloatCallback: C.noop,     //自定义浮动回调函数
        },
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
            cusAmtFun: null,            //自定义Tips 动画函数
        },
        callback: C.noop,           //公共回调函数
    };

    // 设置默认参数
    tips.setDefOptions = function(defOptions) {
        tips.defaultOptions = C.extend({}, tips.defaultOptions, defOptions);
    };

    tips.floatOptions = {
        topStart: 0,                //浮动起始位置 Top
        leftStart: 0,               //浮动起始位置 Left
        status: true,               //浮动状态，一般用于转折点改变方向趋势
        offsetType: '',             //每次改变状态量的类型，px 或 百分比，默认px
        xMinThreshold: 0,           //x轴相对于父元素的最小偏差值
        xMaxThreshold: '',          //x轴相对于父元素的最大偏差值
        xOffsetLen: 1,              //x轴一次的偏差量
        yMinThreshold: 0,           //y轴相对于父元素的最小偏差值
        yMaxThreshold: '',          //y轴相对于父元素的最大偏差值
        yOffsetLen: 1,              //y轴一次的偏差量
        delay: 1,                   //浮动位置的时间间隔
    };

    tips.groups = [];               //每个Tips 实例都会查找groups数组，判断实例的组是否已经存在，存在则直接往存在的组里插入Tips

    tips.prototype.init = function(options) {
        //生成实例唯一id，方便同个组里识别彼此
        this.id = this.uniqueId();

        this.options = C.extend({}, tips.defaultOptions, options);
        
        this.backup = {
            _pElem : null,      //备份父元素
            _tcElem : null,     //备份Tips 容器元素
            _tgElem : null,     //备份Tips 分组元素
            _tElem : null,      //备份Tips 元素
            _binderElem : null,      //备份Tips symbol元素
            _bgElem: null,      //备份遮罩层元素
            _group: {           //备份组状态
                isExisted: false,
                id: null,
            },
            _floatStatus: {},   //备份当前定位
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

    tips.prototype.initMsg = function() {
        if(this.options.msg == "") {
            switch(this.options.type) {
                case "success" :    this.options.msg = "保存成功";
                    break;
                case "error" :  this.options.msg = "保存失败";
                    break;
                case "warning" :    this.options.msg = "警告";
                    break;
                case "info" :this.options.msg = "tips 小工具";
                    break;
                default:    this.options.msg = "tips 小工具";
                    break;
            }
        }
    };

    tips.prototype.getClass = function() {
        let type = this.options.type;
        let limit = this.options.limit;
        let shadow = this.options.shadow;
        let icon = this.options.icon;
        let binder = this.options.binder;
        let html = this.options.html;

        // ohoTip-hide 动画用，首先设置为全透明
        let tipClass = "ohoTip ohoTip-hide";
        let tipBoxClass = "ohoTip-box";
        let bgClass = "ohoTip-bg ohoTip-hide";
        let msgClass = "";
        let iconClass = "";
        let binderClass = "";

        // 限制Tips 宽度或者高度
        if(limit) {
            tipClass = tipClass + " ohoTip-limit";
        }
        // 是否显示阴影
        if(!shadow) {
            tipBoxClass = tipBoxClass + ' ohoTip-box-no-shadow';
        }
        // 目前好像没用到 ohoTip-box-html
        if(html) {
            tipBoxClass = tipBoxClass + ' ohoTip-box-html';
        }

        switch(type) {
            case "normal" :
                msgClass = "ohoTip-msg";
                iconClass = "ohoTip-icon icon-check";
                binderClass = "ohoTip-binder";
                break;
            case "success" :
                tipBoxClass = tipBoxClass + " ohoTip-success";
                msgClass = "ohoTip-msg ohoTip-msg-success";
                iconClass = "ohoTip-icon icon-check";
                binderClass = "ohoTip-binder binder-success";
                break;
            case "error" :
                tipBoxClass = tipBoxClass + " ohoTip-error";
                msgClass = "ohoTip-msg ohoTip-msg-error";
                iconClass = "ohoTip-icon icon-cross";
                binderClass = "ohoTip-binder binder-error";
                break;
            case "warning" :
                tipBoxClass = tipBoxClass + " ohoTip-warning";
                msgClass = "ohoTip-msg ohoTip-msg-warning";
                iconClass = "ohoTip-icon icon-exclamation";
                binderClass = "ohoTip-binder binder-warning";
                break;
            case "info" :
                tipBoxClass = tipBoxClass + " ohoTip-info";  
                msgClass = "ohoTip-msg ohoTip-msg-info";
                iconClass = "ohoTip-icon icon-exclamation-circle";
                binderClass = "ohoTip-binder binder-info";
                break;
            default :
                msgClass = type;        //用户自定义
                iconClass = "ohoTip-icon icon-check";
                binderClass = "ohoTip-binder";
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

        if(binder) {
            // 如果binderOptions.type 为空，色调基于option.type。 如果为字符串，则根据字符串设置色调
            if(this.options.binderOptions.type) {
                binderClass = "ohoTip-binder";
                switch(this.options.binderOptions.type) {
                    case "normal" :
                    case "success" :
                    case "error" :
                    case "warning" :
                    case "info" :
                        binderClass = "ohoTip-binder binder-" + this.options.binderOptions.type;
                        break;
                    default:
                        binderClass = "ohoTip-binder " + this.options.binderOptions.type;   // 用户自定义
                        break;
                }
            }
        }

        // 部分类型没有启用，对应cssClass 也没用
        let cssClass = {
            tip: tipClass,
            tipBox: tipBoxClass,
            bg: bgClass,
            msg: msgClass,
            icon: iconClass,
            binder: binderClass
        };

        this.cssClass = cssClass;

        return cssClass;
    };

    tips.prototype.getTipsAttribute = function() {
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

    tips.prototype.getParentElem = function(options) {
        let $parent = null;

        if(!options.parentElement) {
            $parent = document.querySelector("body");
        }else if(options.parentElement instanceof HTMLElement) {
            $parent = options.parentElement;
        }else if(window.jQuery && options.parentElement instanceof jQuery) {
            $parent = options.parentElement[0];
        }else {
            $parent = document.querySelector(options.parentElement);
        }

        return $parent;
    };

    // 获取组元素，同一个组的Tips 将包含在相同的组元素里面
    tips.prototype.getTipsGroup = function(options) {
        let tipsAttribute = this.tipsAttribute;
        let groupName = 'tipGroup-' + tipsAttribute.tipName;

        let $tipGroup = document.querySelector("div[group-name='"+groupName+"']");

        if(!$tipGroup) {
            $tipGroup = C.createNode("<div group-name='"+groupName+"' class='ohoTip-group'>");
        }else {
            this.backup._group.isExisted = true;
        }

        return $tipGroup;
    };

    // 将Tips 和 背景元素包住，避免凌乱
    tips.prototype.getTipsContainer = function(options) {
        let tipsAttribute = this.tipsAttribute;
        let $tipGroup = this.backup._tgElem;
        let $tipContainer = $tipGroup.parentNode;

        if(!$tipContainer) {
            let containerName = 'tipContainer-' + new Date().getTime();
            $tipContainer = C.createNode("<div name='"+containerName+"' class='ohoTip-container'></div>");
        }

        return $tipContainer;
    };

    tips.prototype.renderTipsBody = function(options) {
        let $parent = this.backup._pElem;
        let $tipContainer = this.backup._tcElem;
        let $tipGroup = this.backup._tgElem;
        let cssClass = this.cssClass;
        let tipsAttribute = this.tipsAttribute;

        let $tip = C.createNode("<div name='ohoTips' class='"+cssClass.tip+"'>");
        let $tipBox = C.createNode("<div class='"+cssClass.tipBox+"'>");
        $tip.appendChild($tipBox);

        let $msgBox = C.createNode("<div class='"+cssClass.msg+"'>");
        if(options.html) {       //msg 为dom元素
            let $msg;
            if(typeof options.msg == "string") {
                $msg = C.createNode(options.msg);
            }else if(options.msg instanceof HTMLElement) {
                $msg = options.msg;
            }else if(options.msg instanceof jQuery) {
                $msg = options.msg[0];
            }
            $msgBox.appendChild($msg);
            
        }else {                 //msg 为文本信息
            if(typeof options.msg == "string") {
                let $msg = document.createElement("span");
                $msg.innerText = options.msg;
                $msgBox.appendChild($msg);
            }else {
                for(let i=0; i<options.msg.length; i++) {
                    let $msg = document.createElement("div");
                    let msg = options.msg[i];
                    $msg.innerText = msg;
                    $msgBox.appendChild($msg);
                }
            }
        }

        $tipBox.appendChild($msgBox);
        this.renderIcon(options, $tipBox);

        $tipGroup.appendChild($tip);
        $tipContainer.appendChild($tipGroup);

        // 如果父元素Postion 是FIxed，则Tips插入到父元素内
        // 否则插入到body 内更好
        let pStylePosition = C.getStyle($parent, 'position');
        if(pStylePosition == 'fixed') $parent.appendChild($tipContainer);         //先插入元素，然后才能获取宽度和高度
        else document.body.appendChild($tipContainer);

        this.options.htmlCallback.call(this);

        return $tip;
    };

    tips.prototype.renderIcon = function(options, $tipBox) {
        if(options.icon) {
            let cssClass = this.cssClass;
            let $iconBox = C.createNode("<div class='ohoTip-icon-box'><span><i class='"+cssClass.icon+"'></i></span></div>");
            $tipBox.appendChild($iconBox);
        }
    }

    tips.prototype.renderTipsBg = function(options) {
        if(!options.background) return false;

        let cssClass = this.cssClass;
        let $parent = this.backup._pElem;
        let $tipContainer = this.backup._tcElem;
        let $bg = C.createNode("<div class = '"+cssClass.bg+"'>");
        $tipContainer.appendChild($bg);

        return $bg;
    };

    tips.prototype.mapPosToBinderPos = function(myPosition) {
        let posToBinderPos = {
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
                if(posToBinderPos['inner'].hasOwnProperty(myPosition)) return posToBinderPos['inner'][myPosition];
            }else if(this.options.direction == 'outer' || this.options.direction == 'outside') {
                if(posToBinderPos['outer'].hasOwnProperty(myPosition)) return posToBinderPos['outer'][myPosition];
            }
        }

        return '';
    }

    tips.prototype.renderTipsBinder = function(options) {
        if(!options.binder) return false;

        let $tip = this.backup._tElem;
        let $binder = $tip.querySelector('.ohoTip-binder');
        // 一个组只需要一个结合器
        // if($binder) return $binder;

        let binderClass = this.cssClass.binder;
        let binder = "triangle";
        if(typeof options.binder == 'string') binder = options.binder;

        if(!this.options.binderOptions.position && typeof this.options.position == 'string') {
            binderClass = binderClass + " " + binder + "-" + this.mapPosToBinderPos(this.options.position);
            console.log('---1 ', this.options.position, binderClass);
        }else if(this.options.binderOptions.position && typeof this.options.binderOptions.position == 'string') {
            binderClass = binderClass + " " + binder + "-" + this.options.binderOptions.position;
            console.log('---2 ', this.options.binderOptions.position, binderClass);
        }else {
            binderClass = binderClass + " " + binder;
            console.log('---3 ', this.options.position, ' --- ', this.options.binderOptions.position, binderClass);
        }

        $binder = C.createNode("<span class='"+ binderClass +"'></span>");
        $tip.appendChild($binder);
        
        return $binder;
    }

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

    tips.prototype.checkGroup = function() {
        let _this = this;

        let group = this.options.group;

        if(group.name) {
            if(this.tGroups.hasOwnProperty(group.name) && this.tGroups[group.name].length > group.len) {
                this.tGroups[group.name][0].remove(_this);
                this.tGroups[group.name].splice(0, 1);
            }
        }
    }

    tips.prototype.isBodyElement = function() {
        return !this.options.parentElement || this.backup._pElem.tagName == 'BODY';
    }

    tips.prototype.getElementDetails = function() {
        //当父元素或Tip 元素发生或可能发生变化时，才重新获取详细参数。
        if(this.elementDetails && (!this.event || this.event.type != 'resize')) {
            return this.elementDetails;
        }

        this.setInitPosition();

        let $pElem = this.backup._pElem;
        let $tipGroup = this.backup._tgElem;
        let $tip = this.backup._tElem;
        let details;

        if(this.isBodyElement()) {
            details = {
                pPosition: {top: 0, left: 0},
                pMarginTop: 0,           //获取父元素外边距，position() 获取的值不算外边距
                pMarginLeft: 0,
                pWidth: document.documentElement.clientWidth,                                //width+padding
                pHeight: document.documentElement.clientHeight,                              //height+padding
                pOuterWidth: document.documentElement.clientWidth,
                pOuterHeight: document.documentElement.clientHeight,
                pOffsetWidth: document.documentElement.offsetWidth,
                pOffsetHeight: document.documentElement.offsetHeight,
                pBTWid: 0,           //top border
                pBBWid: 0,
                pBLWid: 0,          //left border
                pBRWid: 0,
                pborRadius: 0,                    //圆角半径
                tipGroupWidth: C.outerWidth($tipGroup),
                tipGroupHeight: C.outerHeight($tipGroup),
                tipWidth: C.outerWidth($tip),
                tipHeight: C.outerHeight($tip),
            };
        }else {
            details = {
                pPosition: C.position($pElem),
                pMarginTop: parseFloat(C.css($pElem, "margin-top")),           //获取父元素外边距，position() 获取的值不算外边距
                pMarginLeft: parseFloat(C.css($pElem, "margin-left")),
                pWidth: C.innerWidth($pElem),                                //width+padding
                pHeight: C.innerHeight($pElem),                              //height+padding
                pOuterWidth: C.outerWidth($pElem),
                pOuterHeight: C.outerHeight($pElem),
                pBTWid: parseInt(C.css($pElem, "border-top-width")),           //top border
                pBBWid: parseInt(C.css($pElem, "border-bottom-width")),
                pBLWid: parseInt(C.css($pElem, "border-left-width")),          //left border
                pBRWid: parseInt(C.css($pElem, "border-right-width")),
                pborRadius: C.css($pElem, "border-radius"),                    //圆角半径
                tipGroupWidth: C.outerWidth($tipGroup),
                tipGroupHeight: C.outerHeight($tipGroup),
                tipWidth: C.outerWidth($tip),
                tipHeight: C.outerHeight($tip),
            };
        }

        //补算外边距
        details.pTop = details.pPosition.top;
        details.pLeft = details.pPosition.left;

        //tips元素position阈值，大于该阈值，tips会超出父元素
        details.topThreshold = details.pHeight - details.tipGroupHeight;
        details.leftThreshold = details.pWidth - details.tipGroupWidth;

        this.elementDetails = details;

        this.unsetInitPosition();

        return this.elementDetails;
    };

    tips.prototype.getPositionClass = function(myPosition) {
        let positionClass = {};

        if(this.isBodyElement()) {
            positionClass.tipClass = "ohoTip-fixed";
            positionClass.bgClass = "ohoTip-bg-fixed";

            if(typeof myPosition == "string") {
                switch(myPosition) {
                    case "top-left" :           //坐标在父元素的左上角位置
                    case "top-center" :         //坐标在父元素的上中位置
                    case "top-right" :          //坐标在父元素的右上角位置
                    case "center-left" :        //坐标在父元素的左中位置
                    case "middle" :             //坐标在父元素的中间位置
                    case "center-right" :       //坐标在父元素的右中位置
                    case "bottom-left" :        //坐标在父元素的左下角位置
                    case "bottom-center" :      //坐标在父元素的下中位置
                    case "bottom-right" :       //坐标在父元素的右下角位置
                        positionClass.tipClass = positionClass.tipClass + ' ' + myPosition;
                        break;
                    case "default" :            //默认坐标在父元素的中间位置
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

    tips.prototype.setClassPositionOffset = function() {
        let $tipGroup = this.backup._tgElem;
        let myPosition = this.options.position;
        let offset = this.options.offset;
        offset.top = offset.top || 0;
        offset.left = offset.left || 0;

        if(offset.top == 0 && offset.left == 0) return;

        if(this.isBodyElement()) {
            if(typeof myPosition == "string") {
                switch(myPosition) {
                    case "top-left" :           //坐标在父元素的左上角位置
                        $tipGroup.style.top = offset.top + "px";
                        $tipGroup.style.left = offset.left + "px";
                        break;
                    case "top-center" :         //坐标在父元素的上中位置
                        $tipGroup.style.top = offset.top + "px";
                        $tipGroup.style.right = offset.left + "px";
                        break;
                    case "top-right" :          //坐标在父元素的右上角位置
                        $tipGroup.style.top = offset.top + "px";
                        $tipGroup.style.right = offset.left + "px";
                        break;
                    case "center-left" :        //坐标在父元素的左中位置
                        $tipGroup.style.left = offset.left + "px";
                        break;
                    case "middle" :             //坐标在父元素的中间位置
                        break;
                    case "center-right" :       //坐标在父元素的右中位置
                        $tipGroup.style.right = offset.left + "px";
                        break;
                    case "bottom-left" :        //坐标在父元素的左下角位置
                        $tipGroup.style.bottom = offset.top + "px";
                        $tipGroup.style.left = offset.left + "px";
                        break;
                    case "bottom-center" :      //坐标在父元素的下中位置
                        $tipGroup.style.bottom = offset.top + "px";
                        break;
                    case "bottom-right" :       //坐标在父元素的右下角位置
                        $tipGroup.style.bottom = offset.top + "px";
                        $tipGroup.style.right = offset.left + "px";
                        break;
                    case "default" :            //默认坐标在父元素的中间位置
                        break;
                    default :                   //可支持自定义
                        break;
                }
            }
        }
    }

    tips.prototype.setClassBinderOffset = function() {
        // 一个分组只需要设置一次binder offset
        if(this.backup._group.isExisted == true) return false;
        if(!this.options.binder) return false;

        let $tipGroup = this.backup._tgElem;
        let tgStyle = C.getStyle($tipGroup);
        // 优先设置position.offset, 所以需要先计算当前定位
        let tgPosition = {
            top: parseFloat(tgStyle.top),
            left: parseFloat(tgStyle.left),
            right: parseFloat(tgStyle.right),
            bottom: parseFloat(tgStyle.bottom),
        }

        if(this.isBodyElement()) {
            let binderSize = this.getBinderSize();

            let binderPosition = this.options.binderOptions.position || this.mapPosToBinderPos(this.options.position);
            if(binderPosition && typeof binderPosition == 'string') {
                switch(binderPosition) {
                    case "top-left" :           //坐标在Tips 的左上角位置
                    case "top-center" :         //坐标在Tips 的上中位置
                    case "top-right" :          //坐标在Tips 的右上角位置
                        $tipGroup.style.top = tgPosition.top + binderSize.height + "px";
                        break;
                    case "center-left" :        //坐标在Tips 的左中位置
                    case "left-top" :               //坐标在Tips 的上左角位置
                    case "left-bottom" :                //坐标在Tips 的下左角位置
                        $tipGroup.style.left = tgPosition.left + binderSize.width + "px";
                        break;
                    case "middle" :             //坐标在Tips 的中间位置
                        break;
                    case "center-right" :       //坐标在Tips 的右中位置
                    case "right-top" :              //坐标在Tips 的上右角位置
                    case "right-bottom" :               //坐标在Tips 的下右角位置
                        $tipGroup.style.right = tgPosition.right + binderSize.width + "px";
                        break;
                    case "bottom-left" :        //坐标在Tips 的左下角位置
                    case "bottom-center" :      //坐标在Tips 的下中位置
                    case "bottom-right" :       //坐标在Tips 的右下角位置
                        $tipGroup.style.bottom = tgPosition.bottom + binderSize.height + "px";
                        break;
                    default :                   //默认坐标在Tips 的中间位置
                        break;
                }
            }
        }
    }

    // Position Fixed 只需要设置一次 offset
    tips.prototype.setClassOffset = function() {
        if(!this.hasOwnProperty('hasSetClassOffset')) {
            this.setClassPositionOffset();
            this.setClassBinderOffset();
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
     * @param    {[Boolean]}            force        [If true, get position style forcibly even parent element is BODY]
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
        this.setStyleBinderOffset(tipPosition);

        return tipPosition;
    };

    // 内部定位
    // 正数 top, left, bottom, right 表示往父元素内部方向走，负数表示相反方向
    tips.prototype.getPosStyleInner = function(myPosition, calculateTip, tipPosition) {
        let regNum = C.regNum;
        let regPer = C.regPer;
        let regPerNegative = C.regPerNegative;

        let eleDetails = this.getElementDetails();

        let tipGroupWidth = eleDetails.tipGroupWidth;
        let tipGroupHeight = eleDetails.tipGroupHeight;
        if(calculateTip === false) {
            tipGroupWidth = 0;
            tipGroupHeight = 0;
        }

        if(typeof myPosition == "string") {
            switch(myPosition) {
                case "top-left" :           //坐标在父元素的左上角位置
                    tipPosition.top = eleDetails.pTop + eleDetails.pBTWid;
                    tipPosition.left = eleDetails.pLeft + eleDetails.pBLWid;
                    break;
                case "top-center" :         //坐标在父元素的上中位置
                    tipPosition.top = eleDetails.pTop + eleDetails.pBTWid;
                    tipPosition.left = eleDetails.pLeft + (eleDetails.pWidth/2 + eleDetails.pBLWid - tipGroupWidth/2);
                    break;
                case "top-right" :          //坐标在父元素的右上角位置
                    tipPosition.top = eleDetails.pTop + eleDetails.pBTWid;
                    tipPosition.left = eleDetails.pLeft + (eleDetails.pBLWid + eleDetails.pWidth) - tipGroupWidth;
                    break;
                case "center-left" :        //坐标在父元素的左中位置
                    tipPosition.top = eleDetails.pTop + (eleDetails.pHeight/2 + eleDetails.pBTWid - tipGroupHeight/2);
                    tipPosition.left = eleDetails.pLeft + eleDetails.pBLWid;
                    break;
                case "middle" :             //坐标在父元素的中间位置
                    tipPosition.top = eleDetails.pTop + (eleDetails.pHeight/2 + eleDetails.pBTWid - tipGroupHeight/2);
                    tipPosition.left = eleDetails.pLeft + (eleDetails.pWidth/2 + eleDetails.pBLWid - tipGroupWidth/2);
                    break;
                case "center-right" :       //坐标在父元素的右中位置
                    tipPosition.top = eleDetails.pTop + (eleDetails.pHeight/2 + eleDetails.pBTWid - tipGroupHeight/2);
                    tipPosition.left = eleDetails.pLeft + (eleDetails.pBLWid + eleDetails.pWidth) - tipGroupWidth;
                    break;
                case "bottom-left" :        //坐标在父元素的左下角位置
                    tipPosition.top = eleDetails.pTop + (eleDetails.pBTWid + eleDetails.pHeight) - tipGroupHeight;
                    tipPosition.left = eleDetails.pLeft + eleDetails.pBLWid;
                    break;
                case "bottom-center" :      //坐标在父元素的下中位置
                    tipPosition.top = eleDetails.pTop + (eleDetails.pBTWid + eleDetails.pHeight) - tipGroupHeight;
                    tipPosition.left = eleDetails.pLeft + (eleDetails.pWidth/2 + eleDetails.pBLWid - tipGroupWidth/2);
                    break;
                case "bottom-right" :       //坐标在父元素的右下角位置
                    tipPosition.top = eleDetails.pTop + (eleDetails.pBTWid + eleDetails.pHeight) - tipGroupHeight;
                    tipPosition.left = eleDetails.pLeft + (eleDetails.pBLWid + eleDetails.pWidth) - tipGroupWidth;
                    break;
                default :                   //默认坐标在父元素的中间位置
                    tipPosition.top = eleDetails.pTop + (eleDetails.pHeight/2 + eleDetails.pBTWid - tipGroupHeight/2);
                    tipPosition.left = eleDetails.pLeft + (eleDetails.pWidth/2 + eleDetails.pBLWid - tipGroupWidth/2);
                    break;
            }

            return tipPosition;
        }

        if(myPosition.hasOwnProperty('bottom') && regNum.test(myPosition.bottom)) {
            tipPosition.top = eleDetails.pTop + eleDetails.pBTWid + eleDetails.pHeight - tipGroupHeight - parseFloat(myPosition.bottom);
        }else if(myPosition.hasOwnProperty('bottom') && regPer.test(myPosition.bottom)) {
            let bottom = (eleDetails.pHeight - tipGroupHeight) * parseFloat(myPosition.bottom)/100;
            tipPosition.top = eleDetails.pTop + eleDetails.pBTWid + eleDetails.pHeight - tipGroupHeight - bottom;
        }else if(myPosition.hasOwnProperty('top') && regNum.test(myPosition.top)) {
            tipPosition.top = eleDetails.pTop + eleDetails.pBTWid + parseFloat(myPosition.top);
        }else if(myPosition.hasOwnProperty('top') && regPer.test(myPosition.top)) {
            let top = (eleDetails.pHeight - tipGroupHeight) * parseFloat(myPosition.top)/100;
            tipPosition.top = eleDetails.pTop + eleDetails.pBTWid + top;
        }

        if(myPosition.hasOwnProperty('right') && regNum.test(myPosition.right)) {
            tipPosition.left = eleDetails.pLeft + eleDetails.pBLWid + eleDetails.pWidth - tipGroupWidth - parseFloat(myPosition.right);
        }else if(myPosition.hasOwnProperty('right') && regPer.test(myPosition.right)) {
            let right = (eleDetails.pWidth - tipGroupWidth) * parseFloat(myPosition.right)/100;
            tipPosition.left = eleDetails.pLeft + eleDetails.pBLWid + eleDetails.pWidth - tipGroupWidth - right;
        }else if(myPosition.hasOwnProperty('left') && regNum.test(myPosition.left)) {
            tipPosition.left = eleDetails.pLeft + eleDetails.pBLWid + parseFloat(myPosition.left);
        }else if(myPosition.hasOwnProperty('left') && regPer.test(myPosition.left)) {
            let left = (eleDetails.pWidth - tipGroupWidth) * parseFloat(myPosition.left)/100;
            tipPosition.left = eleDetails.pLeft + eleDetails.pBLWid + left;
        }

        return tipPosition;
    }

    // 普通定位
    // 正数 top, left 表示往父元素内部方向走，负数表示相反方向，与内部定位相同
    // 正数 bottom，right 表示以父元素外部方向走，负数表示相反方向，与内部方向相反
    tips.prototype.getPosStyleNormal = function(myPosition, calculateTip, tipPosition) {
        let regNum = C.regNum;
        let regPer = C.regPer;
        let regPerNegative = C.regPerNegative;

        let eleDetails = this.getElementDetails();

        let tipGroupWidth = eleDetails.tipGroupWidth;
        let tipGroupHeight = eleDetails.tipGroupHeight;
        if(calculateTip === false) {
            tipGroupWidth = 0;
            tipGroupHeight = 0;
        }

        if(myPosition.hasOwnProperty('bottom')  && regNum.test(myPosition.bottom)) {
            tipPosition.top = eleDetails.pTop + eleDetails.pHeight + eleDetails.pBTWid + eleDetails.pBBWid + parseFloat(myPosition.bottom);
        }else if(myPosition.hasOwnProperty('bottom') && regPer.test(myPosition.bottom)) {
            let pHeight = C.numAdds(eleDetails.pHeight, eleDetails.pBTWid, eleDetails.pBBWid);
            let bottom = C.numMul(pHeight, C.numDiv(parseFloat(myPosition.bottom), 100));
            tipPosition.top = C.numAdds(eleDetails.pTop, pHeight, bottom);
        }else if(myPosition.hasOwnProperty('top') && regNum.test(myPosition.top)) {
            tipPosition.top = eleDetails.pTop + eleDetails.pBTWid + parseFloat(myPosition.top);
        }else if(myPosition.hasOwnProperty('top') && regPer.test(myPosition.top)) {
            let top = (eleDetails.pHeight - tipGroupHeight) * parseFloat(myPosition.top)/100;
            tipPosition.top = eleDetails.pTop + eleDetails.pBTWid + top;
        }

        if(myPosition.hasOwnProperty('right')  && regNum.test(myPosition.right)) {
            tipPosition.left = C.numAdds(eleDetails.pLeft, eleDetails.pWidth, eleDetails.pBLWid, eleDetails.pBRWid, parseFloat(myPosition.right));
        }else if(myPosition.hasOwnProperty('right') && regPer.test(myPosition.right)) {
            let pWidth = C.numAdds(eleDetails.pWidth, eleDetails.pBLWid, eleDetails.pBRWid);
            let right = C.numMul(pWidth, C.numDiv(parseFloat(myPosition.right), 100));
            tipPosition.left = C.numAdds(eleDetails.pLeft, pWidth, right);
        }else if(myPosition.hasOwnProperty('left') && regNum.test(myPosition.left)) {
            tipPosition.left = eleDetails.pLeft + eleDetails.pBLWid + parseFloat(myPosition.left);
        }else if(myPosition.hasOwnProperty('left') && regPer.test(myPosition.left)) {
            let left = (eleDetails.pWidth - tipGroupWidth) * parseFloat(myPosition.left)/100;
            tipPosition.left = eleDetails.pLeft + eleDetails.pBLWid + left;
        }

        return tipPosition;
    }

    // 外部定位，所有定位以父元素外为准，百分比基准也是父元素
    // top, left, bottom, right 都是以父元素的对应边框为准，且忽略边框厚度
    // 比如top，正数X时，表示Tip 底部高于父元素的顶部 X；负数-X时，表示父元素顶部低于Tip顶部 X
    tips.prototype.getPosStyleOutside = function(myPosition, calculateTip, tipPosition) {
        let regNum = C.regNum;
        let regNumNegative = C.regNumNegative;
        let regPer = C.regPer;
        let regPerNegative = C.regPerNegative;

        let eleDetails = this.getElementDetails();

        let tipGroupWidth = eleDetails.tipGroupWidth;
        let tipGroupHeight = eleDetails.tipGroupHeight;
        if(calculateTip === false) {
            tipGroupWidth = 0;
            tipGroupHeight = 0;
        }

        if(myPosition.hasOwnProperty('bottom') && regNum.test(myPosition.bottom)) {
            tipPosition.top = eleDetails.pTop + eleDetails.pBTWid + eleDetails.pHeight + eleDetails.pBBWid + parseFloat(myPosition.bottom);
            if(regNumNegative.test(myPosition.bottom)) {
                tipPosition.top -= eleDetails.pBBWid;
            }
        }else if(myPosition.hasOwnProperty('bottom') && regPer.test(myPosition.bottom)) {
            let bottom = eleDetails.pHeight * parseFloat(myPosition.bottom)/100;
            tipPosition.top = eleDetails.pTop + eleDetails.pBTWid + eleDetails.pBBWid + eleDetails.pHeight + bottom;
            if(regPerNegative.test(myPosition.bottom)) {
                tipPosition.top -= eleDetails.pBBWid;
            }
        }else if(myPosition.hasOwnProperty('top') && regNum.test(myPosition.top)) {
            tipPosition.top = eleDetails.pTop - tipGroupHeight - parseFloat(myPosition.top);
            if(regNumNegative.test(myPosition.top)) {
                tipPosition.top = tipPosition.top + tipGroupHeight + eleDetails.pBTWid;
            }
        }else if(myPosition.hasOwnProperty('top') && regPer.test(myPosition.top)) {
            let top = eleDetails.pHeight * parseFloat(myPosition.top)/100;
            tipPosition.top = eleDetails.pTop - top;
            if(regPerNegative.test(myPosition.top)) {
                tipPosition.top = tipPosition.top + eleDetails.pBTWid;
            }
        }

        if(myPosition.hasOwnProperty('right') && regNum.test(myPosition.right)) {
            tipPosition.left = eleDetails.pLeft + eleDetails.pBLWid + eleDetails.pWidth + eleDetails.pBRWid + parseFloat(myPosition.right);
            if(regNumNegative.test(myPosition.right)) {
                tipPosition.left = tipPosition.left - tipGroupWidth - eleDetails.pBRWid;
            }
        }else if(myPosition.hasOwnProperty('right') && regPer.test(myPosition.right)) {
            let right = eleDetails.pWidth * parseFloat(myPosition.right)/100;
            tipPosition.left = eleDetails.pLeft + eleDetails.pBLWid + eleDetails.pWidth + right;
            if(regPerNegative.test(myPosition.right)) {
                tipPosition.left = tipPosition.left - tipGroupWidth - eleDetails.pBRWid;
            }
        }else if(myPosition.hasOwnProperty('left') && regNum.test(myPosition.left)) {
            tipPosition.left = eleDetails.pLeft - tipGroupWidth - parseFloat(myPosition.left);
            if(regNumNegative.test(myPosition.left)) {
                tipPosition.left = tipPosition.left + tipGroupWidth + eleDetails.pBLWid;
            }
        }else if(myPosition.hasOwnProperty('left') && regPer.test(myPosition.left)) {
            let left = eleDetails.pWidth * parseFloat(myPosition.left)/100;
            tipPosition.left = eleDetails.pLeft - tipGroupWidth - left;
            if(regPerNegative.test(myPosition.left)) {
                tipPosition.left = tipPosition.left + tipGroupWidth + eleDetails.pBLWid;
            }
        }

        return tipPosition;
    }

    // 外围定位
    // 当百分比为正数时(从外部远离父元素)，百分比基准是Tips元素
    // 当百分比为负数时(从内部远离父元素)，百分比基准是父元素
    // top, left, bottom, right 都是以父元素的对应边框为准，且忽略边框厚度
    // 比如top，正数X%时，表示Tip 顶部高于父元素的顶部 Tips高度*X%；负数-X%时，表示Tip 中心低于父元素的顶部 父元素高度*X%
    tips.prototype.getPosStyleOuter = function(myPosition, calculateTip, tipPosition) {
        let regNum = C.regNum;
        let regNumNegative = C.regNumNegative;
        let regPer = C.regPer;
        let regPerNegative = C.regPerNegative;

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
                case "top-left" :           //坐标在父元素的左上角位置
                    // tipPosition.top = eleDetails.pTop - tipGroupHeight * (100%)/100;
                    // tipPosition.left = eleDetails.pLeft - tipGroupWidth * (100%)/100;
                    myPositionTmp.top = "100%";
                    myPositionTmp.left = "-0%";
                    break;
                case "top-center" :         //坐标在父元素的上中位置
                    myPositionTmp.top = "100%";
                    myPositionTmp.left = "-50%";
                    break;
                case "top-right" :          //坐标在父元素的右上角位置
                    myPositionTmp.top = "100%";
                    myPositionTmp.left = "-100%";
                    break;
                case "center-left" :        //坐标在父元素的左中位置
                    myPositionTmp.top = "-50%";
                    myPositionTmp.left = "0";
                    break;
                case "middle" :             //坐标在父元素的中间位置
                    myPositionTmp.top = "-50%";
                    myPositionTmp.left = "-50%";
                    break;
                case "center-right" :       //坐标在父元素的右中位置
                    myPositionTmp.top = "-50%";
                    myPositionTmp.right = "100%";
                    break;
                case "bottom-left" :        //坐标在父元素的左下角位置
                    myPositionTmp.bottom = "100%";
                    myPositionTmp.left = "-0%";
                    break;
                case "bottom-center" :      //坐标在父元素的下中位置
                    myPositionTmp.bottom = "100%";
                    myPositionTmp.left = "-50%";
                    break;
                case "bottom-right" :       //坐标在父元素的右下角位置
                    myPositionTmp.bottom = "100%";
                    myPositionTmp.left = "-100%";
                    break;
                case "left-top" :       //坐标在父元素的右下角位置
                    myPositionTmp.bottom = "-100%";
                    myPositionTmp.left = "0";
                    break;
                case "left-bottom" :       //坐标在父元素的右下角位置
                    myPositionTmp.top = "-100%";
                    myPositionTmp.left = "0";
                    break;
                case "right-top" :       //坐标在父元素的右下角位置
                    myPositionTmp.bottom = "-100%";
                    myPositionTmp.right = "100%";
                    break;
                case "right-bottom" :       //坐标在父元素的右下角位置
                    myPositionTmp.top = "-100%";
                    myPositionTmp.right = "100%";
                    break;
                default :                   //默认坐标在父元素的中间位置
                    myPositionTmp.top = "100%";
                    myPositionTmp.left = "-0%";
                    break;
            }

            myPosition = myPositionTmp;
        }

        // 非百分比区分正负主要是考虑到边框问题，忽略边框带来的影响
        if(myPosition.hasOwnProperty('bottom') && regNum.test(myPosition.bottom)) {
            if(!regNumNegative.test(myPosition.bottom)) {
                tipPosition.top = eleDetails.pTop + eleDetails.pBTWid + eleDetails.pHeight + eleDetails.pBBWid + parseFloat(myPosition.bottom);
            }else {
                tipPosition.top = eleDetails.pTop + eleDetails.pBTWid + eleDetails.pHeight + parseFloat(myPosition.bottom);
            }
        }else if(myPosition.hasOwnProperty('bottom') && regPer.test(myPosition.bottom)) {
            if(!regPerNegative.test(myPosition.bottom)) {
                let bottom = tipGroupHeight - tipGroupHeight * parseFloat(myPosition.bottom)/100;
                tipPosition.top = eleDetails.pTop + eleDetails.pBTWid + eleDetails.pBBWid + eleDetails.pHeight - bottom;
            }else {
                let bottom = (eleDetails.pHeight - tipGroupHeight) * (-parseFloat(myPosition.bottom)/100);
                tipPosition.top = eleDetails.pTop + eleDetails.pBTWid + eleDetails.pHeight - tipGroupHeight - bottom;
            }
        }else if(myPosition.hasOwnProperty('top') && regNum.test(myPosition.top)) {
            if(!regNumNegative.test(myPosition.top)) {
                tipPosition.top = eleDetails.pTop - tipGroupHeight - parseFloat(myPosition.top);
            }else {
                tipPosition.top = eleDetails.pTop + eleDetails.pBTWid - tipGroupHeight - parseFloat(myPosition.top);
            }
        }else if(myPosition.hasOwnProperty('top') && regPer.test(myPosition.top)) {
            if(!regPerNegative.test(myPosition.top)) {
                let top = tipGroupHeight * parseFloat(myPosition.top)/100;
                tipPosition.top = eleDetails.pTop - top;
            }else {
                let top = (eleDetails.pHeight - tipGroupHeight) * (-parseFloat(myPosition.top)/100);
                tipPosition.top = eleDetails.pTop + eleDetails.pBTWid + top;
            }
        }

        if(myPosition.hasOwnProperty('right') && regNum.test(myPosition.right)) {
            tipPosition.left = eleDetails.pLeft + eleDetails.pBLWid + eleDetails.pWidth + eleDetails.pBRWid + parseFloat(myPosition.right);
        }else if(myPosition.hasOwnProperty('right') && regPer.test(myPosition.right)) {
            if(!regPerNegative.test(myPosition.right)) {
                let right = tipGroupWidth - tipGroupWidth * parseFloat(myPosition.right)/100;
                tipPosition.left = eleDetails.pLeft + eleDetails.pBLWid + eleDetails.pBRWid + eleDetails.pWidth - right;
            }else {
                let right = (eleDetails.pWidth - tipGroupWidth) * (-parseFloat(myPosition.right)/100);
                tipPosition.left = eleDetails.pLeft + eleDetails.pBLWid + eleDetails.pWidth - tipGroupWidth - right;
            }
        }else if(myPosition.hasOwnProperty('left') && regNum.test(myPosition.left)) {
            if(!regNumNegative.test(myPosition.left)) {
                tipPosition.left = eleDetails.pLeft - tipGroupWidth - parseFloat(myPosition.left);
            }else {
                tipPosition.left = eleDetails.pLeft + eleDetails.pBLWid - tipGroupWidth - parseFloat(myPosition.left);
            }
        }else if(myPosition.hasOwnProperty('left') && regPer.test(myPosition.left)) {
            if(!regPerNegative.test(myPosition.left)) {
                let left = tipGroupWidth * parseFloat(myPosition.left)/100;
                tipPosition.left = eleDetails.pLeft - left;
            }else {
                let left = (eleDetails.pWidth - tipGroupWidth) * (-parseFloat(myPosition.left)/100);
                tipPosition.left = eleDetails.pLeft + eleDetails.pBLWid + left;
            }
        }

        return tipPosition;
    }

    // Offset 只支持px，用于微调父元素与Tips 的相对定位
    // 计算定位得出的结果只含top和left，故offset只支持top和left
    // 比如上居中，此时Tips 顶部是紧贴着父元素顶部的，设置offset.top = 10, 则Tips 顶部低于父元素顶部10px
    tips.prototype.setStylePositionOffset = function(tipPosition) {
        let offset = this.options.offset;

        if(!offset) return tipPosition;

        let regNum = C.regNum;
        if(offset.hasOwnProperty('top') && regNum.test(offset.top)) tipPosition.top += offset.top;
        if(offset.hasOwnProperty('left') && regNum.test(offset.left)) tipPosition.left += offset.left;

        return tipPosition;
    }

    // 如果启动binder，而binder 不占Tips 宽度和高度。 则可根据binder offset 微调父元素与Tips 的相对定位
    // Offset 只支持px
    // 计算定位得出的结果只含top和left，故offset只支持top和left
    // 比如上居中，此时Tips 顶部是紧贴着父元素顶部的，
    // 此时binder 正常来说会高于Tips 上中部位, 如8px, 设置binderOptions.offset.top = 8, 则Tips 顶部低于父元素顶部8px，Binder紧贴父元素顶部
    tips.prototype.setStyleBinderOffset = function(tipPosition) {
        if(!this.options.binder) return tipPosition;
        let regNum = C.regNum;

        let tmpOffset = {
            top: null,
            left: null,
        };

        let binderSize = this.getBinderSize();

        let binderPosition = this.options.binderOptions.position || this.mapPosToBinderPos(this.options.position);
        if(binderPosition && typeof binderPosition == 'string') {
            switch(binderPosition) {
                case "top-left" :           //坐标在Tips 的左上角位置
                    tmpOffset.top = binderSize.height;
                    break;
                case "top-center" :         //坐标在Tips 的上中位置
                    tmpOffset.top = binderSize.height;
                    break;
                case "top-right" :          //坐标在Tips 的右上角位置
                    tmpOffset.top = binderSize.height;
                    break;
                case "center-left" :        //坐标在Tips 的左中位置
                    tmpOffset.left = binderSize.width;
                    break;
                case "middle" :             //坐标在Tips 的中间位置
                    // tmpOffset.left = binderSize.width;
                    break;
                case "center-right" :       //坐标在Tips 的右中位置
                    tmpOffset.left = 0 - binderSize.width;
                    break;
                case "bottom-left" :        //坐标在Tips 的左下角位置
                    tmpOffset.top = 0 - binderSize.height;
                    break;
                case "bottom-center" :      //坐标在Tips 的下中位置
                    tmpOffset.top = 0 - binderSize.height;
                    break;
                case "bottom-right" :       //坐标在Tips 的右下角位置
                    tmpOffset.top = 0 - binderSize.height;
                    break;
                case "left-top" :               //坐标在Tips 的上左角位置
                    tmpOffset.left = binderSize.width;
                    break;
                case "left-bottom" :                //坐标在Tips 的下左角位置
                    tmpOffset.left = binderSize.width;
                    break;
                case "right-top" :              //坐标在Tips 的上右角位置
                    tmpOffset.left = 0 - binderSize.width;
                    break;
                case "right-bottom" :               //坐标在Tips 的下右角位置
                    tmpOffset.left = 0 - binderSize.width;
                    break;
                default :                   //默认坐标在Tips 的中间位置
                    break;
            }
        }

        console.log('==== ', binderSize, binderPosition, tmpOffset);

        // offset 以binderOptions.offset 为准，tmpOffset 为辅，内外部定位规则一样
        let offset = C.extend({}, this.options.binderOptions.offset, tmpOffset);
        // 当为外部定位时，需要反转
        // if(this.options.direction == 'outer' || this.options.direction == 'outside') {
        //     if(offset.hasOwnProperty('top') && regNum.test(offset.top)) offset.top = 0 - offset.top;
        //     if(offset.hasOwnProperty('left') && regNum.test(offset.left)) offset.left = 0 - offset.left;
        // }

        console.log('++++++ ', binderSize, offset);

        if(offset.top || offset.left) {
            if(offset.hasOwnProperty('top') && regNum.test(offset.top)) tipPosition.top += offset.top;
            if(offset.hasOwnProperty('left') && regNum.test(offset.left)) tipPosition.left += offset.left;
        }

        return tipPosition;
    }

    // 根据不同的binder 类型获取不同的Size，用于定位补足
    tips.prototype.getBinderSize = function() {
        let binder = "triangle";
        if(typeof this.options.binder == 'string') binder = this.options.binder;

        let getBinderSizeMethod = "getBinderSize" + binder.slice(0, 1).toUpperCase() + binder.slice(1);
        return this[getBinderSizeMethod]();
    }

    // 获取Triangle Size，用于定位补足
    tips.prototype.getBinderSizeTriangle = function() {
        let $tipGroup = this.backup._tgElem;
        let $binder = $tipGroup.querySelector('.ohoTip-binder');
        let binderSize = {width: 0, height: 0};

        if(!$binder) return binderSize;
        //Triangle 的四个边框都一样
        let borderWidth = parseInt(C.css($binder, "border-top-width"));
        binderSize.width = borderWidth;
        binderSize.height = borderWidth;

        return binderSize;
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
    tips.prototype.setFloatOptions = function(cusFloatOptions) {
        //窗口发生变化时需要重新定义float
        //若不是首次设置，则还原当前状态
        let backupfloatOptions = {};
        if(this.floatOptions) {
            backupfloatOptions.status = this.floatOptions.status;
            backupfloatOptions.floatId = this.floatOptions.floatId;
        };

        //用户自定义
        if(this.options.float.cusFloatOptions) cusFloatOptions = this.options.float.cusFloatOptions;

        let floatOptions = C.extend({}, tips.floatOptions, cusFloatOptions, backupfloatOptions);

        let eleDetails = this.getElementDetails();

        //设置最大最小值，一般最小值0，最大值视情况而定，若是一般情况（px）则为元素的最大阈值，如是百分比，则为100%
        floatOptions.xMinThreshold = !C.isEmptyNum(floatOptions.xMinThreshold)? floatOptions.xMinThreshold : 0;
        floatOptions.xMaxThreshold = !C.isEmptyNum(floatOptions.xMaxThreshold)? floatOptions.xMaxThreshold : eleDetails.leftThreshold;
        floatOptions.yMinThreshold = !C.isEmptyNum(floatOptions.yMinThreshold)? floatOptions.yMinThreshold : 0;
        floatOptions.yMaxThreshold = !C.isEmptyNum(floatOptions.yMaxThreshold)? floatOptions.yMaxThreshold : eleDetails.topThreshold;

        floatOptions.xOffset = (floatOptions.xMaxThreshold - floatOptions.xMinThreshold) * floatOptions.xOffsetLen;
        floatOptions.yOffset = (floatOptions.yMaxThreshold- floatOptions.yMinThreshold) * floatOptions.yOffsetLen;

        if(floatOptions.hasOwnProperty('offsetType') && floatOptions.offsetType === '%') {
            floatOptions.xOffset = floatOptions.xOffsetLen;  
            floatOptions.yOffset = floatOptions.yOffsetLen;
        }

        this.floatOptions = floatOptions;

        return this.floatOptions;
    }

    //当需要重新设置float，如窗口，父元素发生改变，若不是首次设置，则还原当前状态
    tips.prototype.getfloatStatus = function(cusFloatStatus) {
        if(this.options.float.cusFloatStatus) {
            cusFloatStatus = this.options.float.cusFloatStatus;
        }else if(!cusFloatStatus){
            cusFloatStatus = {
                top: tips.floatOptions.topStart,
                left: tips.floatOptions.leftStart,
            }
        }
        for(let key in cusFloatStatus) {
            if(this.backup._floatStatus.hasOwnProperty(key)) {
                cusFloatStatus[key] = this.backup._floatStatus[key];
            }
        }

        return cusFloatStatus;
    }

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

    //默认浮动方式。用户自定义浮动方法，可参考该方法。
    tips.prototype.floatTypeDefault = function() {
        let _this = this;

        let cusFloatOptions = {
            status: true,
            xOffsetLen: 0.0005,
            yOffsetLen: 0.0005,
            delay: 1,
        };

        let cusFloatStatus = {
            top: 0,
            left: 0,
        };

        let floatOptions = this.setFloatOptions(cusFloatOptions);
        let floatStatus = this.getfloatStatus(cusFloatStatus);

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

    tips.prototype.floatTypeX = function() {
        let _this = this;

        let cusFloatOptions = {
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
        
        let cusFloatStatus = {
            top: 0,
            left: 0,
        };

        let floatOptions = this.setFloatOptions(cusFloatOptions);
        let floatStatus = this.getfloatStatus(cusFloatStatus);

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

    tips.prototype.floatTypeSquare =  function() {
        let _this = this;

        let cusFloatOptions = {
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

        let cusfloatStatus = {
            top: 0,
            left: 0,
        };

        let floatOptions = this.setFloatOptions(cusFloatOptions);
        let floatStatus = this.getfloatStatus(cusfloatStatus);

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

    tips.prototype.floatCallback = function() {
        let _this = this;
        let $tip = _this.backup._tElem;
        let hoverIn = function() {
            if(_this.floatOptions.floatId) clearInterval(_this.floatOptions.floatId);
        }
        let hoverOut = function() {
            _this.setFloatPosition();
        }
        
        $tip.onmouseenter = hoverIn;
        $tip.onmouseleave = hoverOut;

        _this.options.float.cusFloatCallback.call(_this);
    };

    tips.prototype.setFloatPosition = function() {
        let _this = this;
        let $tip = _this.backup._tElem;
        let $tipGroup = this.backup._tgElem;
        let $pElem = _this.backup._pElem;

        C.css($tipGroup, {display: 'none'});
        let tipPosition = _this.getPosition({});
        C.addClass($tipGroup, tipPosition.class.tipClass);

        Object.defineProperty(_this.monitor, 'floatPosition', {
            get:function(){
                return floatPosition;
            },
            set:function(newValue){
                floatPosition = newValue;
                let tipPosition = _this.getPosition(floatPosition);
                C.addCss($tipGroup, tipPosition.style);
                C.addCss($tipGroup, {display: 'block'});
            }
        });

        if(typeof _this.options.float.cusFloatFun === "function") {
            _this.options.float.cusFloatFun.call(_this);
        }else {
            _this.setFloatType();
        }

        _this.floatCallback();
    };

    //设置浮动参数。支持用户自定义。
    tips.prototype.setFloatTranslateOptions = function(cusFloatOptions) {
        //窗口发生变化时需要重新定义float
        //若不是首次设置，则还原当前状态
        let backupfloatOptions = {};
        if(this.floatOptions) {
            backupfloatOptions.status = this.floatOptions.status;
            backupfloatOptions.floatId = this.floatOptions.floatId;
        };

        //用户自定义
        if(this.options.float.cusFloatOptions) cusFloatOptions = this.options.float.cusFloatOptions;

        let floatOptions = C.extend({}, tips.floatOptions, cusFloatOptions, backupfloatOptions);

        let eleDetails = this.getElementDetails();

        floatOptions.xMinThreshold = !C.isEmptyNum(floatOptions.xMinThreshold)? floatOptions.xMinThreshold : 0;
        floatOptions.yMinThreshold = !C.isEmptyNum(floatOptions.yMinThreshold)? floatOptions.yMinThreshold : 0;

        //设置最大最小值，一般最小值0，最大值视情况而定，若是一般情况（px）则为元素的最大阈值，如是百分比，则为100%
        if(floatOptions.hasOwnProperty('offsetType') && floatOptions.offsetType === '%') {
            floatOptions.xMaxThreshold = !C.isEmptyNum(floatOptions.xMaxThreshold)? floatOptions.xMaxThreshold : 100;
            floatOptions.yMaxThreshold = !C.isEmptyNum(floatOptions.yMaxThreshold)? floatOptions.yMaxThreshold : 100;
            floatOptions.xOffset = floatOptions.xOffsetLen;
            floatOptions.yOffset = floatOptions.yOffsetLen;
        }else {
            floatOptions.xMaxThreshold = !C.isEmptyNum(floatOptions.xMaxThreshold)? floatOptions.xMaxThreshold : eleDetails.leftThreshold;
            floatOptions.yMaxThreshold = !C.isEmptyNum(floatOptions.yMaxThreshold)? floatOptions.yMaxThreshold : eleDetails.topThreshold;
            floatOptions.xOffset = (floatOptions.xMaxThreshold - floatOptions.xMinThreshold) * floatOptions.xOffsetLen;
            floatOptions.yOffset = (floatOptions.yMaxThreshold- floatOptions.yMinThreshold) * floatOptions.yOffsetLen;
        }

        this.floatOptions = floatOptions;

        return this.floatOptions;
    }

    //当需要重新设置float，如窗口，父元素发生改变，若不是首次设置，则还原当前状态
    tips.prototype.getfloatTranslateStatus = function(cusFloatStatus) {
        if(this.options.float.cusFloatStatus) {
            cusFloatStatus = this.options.float.cusFloatStatus;
        }else if(!cusFloatStatus){
            cusFloatStatus = {
                top: tips.floatOptions.topStart,
                left: tips.floatOptions.leftStart,
            }
        }
        for(let key in cusFloatStatus) {
            if(this.backup._floatStatus.hasOwnProperty(key)) {
                cusFloatStatus[key] = this.backup._floatStatus[key];
            }else {
                this.backup._floatStatus[key] = cusFloatStatus[key];
            }
        }

        return cusFloatStatus;
    }

    tips.prototype.setFloatTranslateStatus = function(floatStatus, floatOptions) {
        if(floatStatus.top > floatOptions.yMaxThreshold) floatStatus.top = floatOptions.yMaxThreshold;
        if(floatStatus.top < floatOptions.yMinThreshold) floatStatus.top = floatOptions.yMinThreshold;
        if(floatStatus.left > floatOptions.xMaxThreshold) floatStatus.left = floatOptions.xMaxThreshold;
        if(floatStatus.left < floatOptions.xMinThreshold) floatStatus.left = floatOptions.xMinThreshold;

        for(let key in floatStatus) {
            this.backup._floatStatus[key] = floatStatus[key];
        }

        let offsetType = floatOptions.hasOwnProperty('offsetType')? floatOptions.offsetType : '';

        //请务必设置floatPosition，否则不生效
        this.monitor.floatTranslate = {
            top: floatStatus.top + offsetType,
            left: floatStatus.left + offsetType,
        }
    }

    //默认浮动方式。用户自定义浮动方法，可参考该方法。
    tips.prototype.floatTranslateTypeDefault = function() {
        let _this = this;

        let cusFloatOptions = {
            status: true,
            xOffsetLen: 0.0005,
            yOffsetLen: 0.0005,
            delay: 1,
        };

        let cusFloatStatus = {
            top: 0,
            left: 0,
        };

        let floatOptions = this.setFloatTranslateOptions(cusFloatOptions);
        let floatStatus = this.getfloatTranslateStatus(cusFloatStatus);

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

            _this.setFloatTranslateStatus(floatStatus, floatOptions);
        }, floatOptions.delay);
    };

    tips.prototype.floatTranslateTypeX = function() {
        let _this = this;

        let cusFloatOptions = {
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
        
        let cusFloatStatus = {
            top: 0,
            left: 0,
        };

        let floatOptions = this.setFloatTranslateOptions(cusFloatOptions);
        let floatStatus = this.getfloatTranslateStatus(cusFloatStatus);

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

    tips.prototype.floatTranslateTypeSquare =  function() {
        let _this = this;

        let cusFloatOptions = {
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

        let cusfloatStatus = {
            top: 0,
            left: 0,
        };

        let floatOptions = this.setFloatTranslateOptions(cusFloatOptions);
        let floatStatus = this.getfloatTranslateStatus(cusfloatStatus);

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

    tips.prototype.setfloatTranslateStart = function() {
        let floatOptions = this.floatOptions;
        let offsetType = floatOptions.hasOwnProperty('offsetType')? floatOptions.offsetType : '';
        let positionStart = {
            top: floatOptions.topStart + offsetType,
            left: floatOptions.leftStart + offsetType,
        };

        let $tipGroup = this.backup._tgElem;
        let tipPositionStart = this.getPosition(positionStart);
        C.addClass($tipGroup, tipPositionStart.class.tipClass);
        C.addCss($tipGroup, tipPositionStart.style);
    }

    tips.prototype.setFloatTranslateType = function() {
        let type = this.options.float.type;
        let floatFun = 'floatTranslateType' + type.slice(0, 1).toUpperCase() + type.slice(1);
        if(this[floatFun]) {
            this[floatFun]();
        }else {
            this.floatTypeTranslateDefault();
        }
    };

    tips.prototype.floatTranslateCallback = function() {
        let _this = this;
        let $tip = _this.backup._tElem;
        let hoverIn = function() {
            if(_this.floatOptions.floatId) clearInterval(_this.floatOptions.floatId);
        }
        let hoverOut = function() {
            _this.setFloatTranslate();
        }
        
        $tip.onmouseenter = hoverIn;
        $tip.onmouseleave = hoverOut;

        _this.options.float.cusFloatCallback.call(_this);
    };

    // 计算Tips 位置转变量
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
            tipTranslate.top = (eleDetails.pHeight - tipGroupHeight) * parseFloat(myTranslate.top)/100 + "px";
            tipTranslate.left = (eleDetails.pWidth - tipGroupWidth) * parseFloat(myTranslate.left)/100 + "px";
        }else {
            tipTranslate.top = myTranslate.top + "px";
            tipTranslate.left = myTranslate.left + "px";
        }

        return tipTranslate;
    };

    tips.prototype.setFloatTranslate = function() {
        let _this = this;
        let $tip = _this.backup._tElem;
        let $tipGroup = this.backup._tgElem;
        let $pElem = _this.backup._pElem;

        C.css($tipGroup, {display: 'none'});

        Object.defineProperty(_this.monitor, 'floatTranslate', {
            get:function(){
                return floatTranslate;
            },
            set:function(newValue){
                floatTranslate = newValue;
                let tipTranslate = _this.getTranslate(floatTranslate);

                let translate = {
                    display: 'block',
                    transform: 'translate('+ tipTranslate.left + ',' + tipTranslate.top + ')',
                };

                C.addCss($tipGroup, translate);
            }
        });

        if(typeof _this.options.float.cusFloatFun === "function") {
            _this.options.float.cusFloatFun.call(_this);
        }else {
            _this.setFloatTranslateType();
        }

        this.setfloatTranslateStart();

        _this.floatTranslateCallback();
    };

    tips.prototype.setTipsPosition = function() {
        let $tip = this.backup._tElem;
        let $tipGroup = this.backup._tgElem;
        let $pElem = this.backup._pElem;

        if(this.options.position == 'float') {
            this.setFloatPosition();
        }else if(this.options.position == 'translate') {
            this.setFloatTranslate();
        }else {
            let tipPosition = this.getPosition(this.options.position);
            if(this.isBodyElement()) {
                C.addClass($tipGroup, tipPosition.class.tipClass);
                this.setClassOffset();
            }else {
                $tipGroup.style.cssText = '';
                C.addCss($tipGroup, tipPosition.style);
            }
        }
    };

    tips.prototype.setBgPosition = function() {
        if(!this.options.background || !this.backup._bgElem) return false;
        let $bg = this.backup._bgElem;

        if(this.isBodyElement()) {
            let positionClass = this.getPositionClass(this.options.position);
            C.addClass($bg, positionClass.bgClass);
        }else {
            let eleDetails = this.getElementDetails();
            let bgCss = C.extend({}, eleDetails.pPosition, {
                width: eleDetails.pOuterWidth,
                height: eleDetails.pOuterHeight
            }, {"border-radius": eleDetails.pborRadius});

            C.addCss($bg, bgCss);
        }
    };

    //初始化Tips位置，目的在于可以获得Tips 的真实宽度高度
    tips.prototype.setInitPosition = function() {
        let $tipGroup = this.backup._tgElem;
        C.addClass($tipGroup, 'ohoTip-init');
    }

    //初始化Tips位置后必须去除
    tips.prototype.unsetInitPosition = function() {
        let $tipGroup = this.backup._tgElem;
        C.removeClass($tipGroup, 'ohoTip-init');
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
        this.backup._pElem = this.getParentElem(options);
        this.backup._tgElem = this.getTipsGroup(options);
        this.backup._tcElem = this.getTipsContainer(options);
        this.backup._bgElem = this.renderTipsBg(options);
        this.backup._tElem = this.renderTipsBody(options);
        this.backup._binderElem = this.renderTipsBinder(options);
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
        let $tipGroup = this.backup._tgElem;

        if($tipGroup.querySelectorAll("[name=ohoTips]").length <= 1) {
            if(animationOption.cusAmtFun) {
                animationOption.cusAmtFun.call(this, 'in');
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
        let $tipGroup = this.backup._tgElem;

        if($tipGroup.querySelectorAll("[name=ohoTips]").length <= 1) {
            if(animationOption.cusAmtFun) {
                animationOption.cusAmtFun.call(this, 'out');
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
        this.animationTypeA(status);
    };

    tips.prototype.animationTypeA = function(status) {
        let $tip = this.backup._tElem;
        let $tipGroup = this.backup._tgElem;
        let $bg = this.backup._bgElem;
        if(status == 'in') {
            C.addClass($tip, 'ohoTip-amt-A');
            if($bg) {
                C.addClass($bg, 'ohoTip-bg-amt-A');
            }
            
            setTimeout(function(){
                C.addClass($tip, 'in');
                if($bg) {
                    C.addClass($bg, 'in');
                }
            }, 1);
        }else if(status == 'out') {
            C.addCss($tipGroup, {overflow: 'hidden'});
            let eleDetails = this.getElementDetails();
            let tipStyle = {
                height: eleDetails.tipHeight,
            };
            C.addCss($tip, tipStyle);

            setTimeout(function(){
                C.addClass($tip, 'ohoTip-amt-A');
                if($bg) {
                    C.addClass($bg, 'ohoTip-bg-amt-A');
                }
                C.addClass($tip, 'out');
                if($bg) {
                    C.removeClass($bg, 'in');
                }
            }, 100);
        }
    };

    tips.prototype.animationTypeOho = function(status) {
        let $tip = this.backup._tElem;
        let $tipGroup = this.backup._tgElem;
        let $bg = this.backup._bgElem;

        let startPosition = this.getPositionStyle('middle', false, true);
        let startSize = {
            width: 0,
            height: 0
        };
        let startStyle = C.extend({}, startPosition, startSize, {'opacity': '1'});

        let eleDetails = this.getElementDetails();
        let tipGroupPosition = C.position($tipGroup);
        let oldGroupStyle = $tipGroup.style.cssText;
        let oldGroupStyleObj = {
            top: tipGroupPosition.top,
            left: tipGroupPosition.left,
            width: eleDetails.tipGroupWidth,
            height: eleDetails.tipGroupHeight,
        };

        if(status == 'in') {
            C.addCss($tipGroup, {overflow: 'hidden'});

            C.addCss($tip, {'opacity': '1'});
            C.addCss($tipGroup, startStyle);
            
            setTimeout(function(){
                C.addClass($tipGroup, 'ohoTip-amt-oho');

                C.addCss($tipGroup, oldGroupStyleObj);
                if($bg) {
                    C.addClass($bg, 'ohoTip-bg-amt-oho');
                    C.addClass($bg, 'in');
                }
            }, 1);
            setTimeout(function(){
                // 分组第二个Tip 使用默认动画，所以需要删除其他动画效果，避免默认动画效果冲突
                C.removeClass($tipGroup, 'ohoTip-amt-oho');
                $tipGroup.style.cssText = oldGroupStyle;
            }, 201);
        }else if(status == 'out') {
            C.addCss($tipGroup, {overflow: 'hidden'});

            // in 之后 会删除动画效果，out 需要将动画效果先添加回来
            C.addClass($tipGroup, 'ohoTip-amt-oho');
            if($bg) {
                C.addClass($bg, 'ohoTip-bg-amt-oho');
            }

            C.addCss($tipGroup, oldGroupStyleObj);

            setTimeout(function(){
                C.addCss($tipGroup, startStyle);
                if($bg) {
                    C.removeClass($bg, 'in');
                }
            }, 1);
        }
    };

    tips.prototype.animationTypeGf = function(status) {
        let $tipGroup = this.backup._tgElem;
        let $tip = this.backup._tElem;
        let $bg = this.backup._bgElem;
        if(status == 'in') {
            C.addClass($tip, 'ohoTip-amt-A');
            if($bg) {
                C.addClass($bg, 'ohoTip-bg-amt-A');
            }
            
            setTimeout(function(){
                C.addClass($tip, 'in');
                if($bg) {
                    C.addClass($bg, 'in');
                }
            }, 1);
        }else if(status == 'out') {
            this.insertCanvas();

            let tipStyle = {
                display: 'none',
            };
            C.addCss($tip, tipStyle);
        }
    };

    tips.prototype.createGroupCopy = function() {
        let $tipGroup = this.backup._tgElem;
        let $tipGroupClone = $tipGroup.cloneNode(true);
        // 方便动画展示
        $tipGroupClone.style.overflow = "visible";
        return document.body.appendChild($tipGroupClone);
    }

    tips.prototype.insertCanvas = function() {
        let _this = this;
        //复制一个组元素，目的是定位一样
        let $tipGroupClone = _this.createGroupCopy();
        let tgcWidth = $tipGroupClone.offsetWidth, tgcHeight = $tipGroupClone.offsetHeight;
        
        let html2canvasConfig = {
            width: tgcWidth,
            height: tgcHeight,
            // position 为 absolute 或 fixed 时有用，参考 https://github.com/niklasvh/html2canvas/blob/master/docs/configuration.md 
            // windowWidth: document.body.scrollWidth,
            // windowHeight: document.body.scrollHeight,
            // x: window.pageXOffset,
            // y: window.pageYOffset,
            
            // window.devicePixelRatio是设备像素比，默认是window.devicePixelRatio，可以保证canvas 高清，但是导出的img 尺寸相比原来的会变成 window.devicePixelRatio倍
            // 若将 scale设置为1，则canvas 模糊不高清，但是导出图片尺寸不变。
            // scale: window.devicePixelRatio,
        };

        let tgcStyle = C.getStyle($tipGroupClone);
        let tgcPosition = C.position($tipGroupClone);

        // console.log("===", tgcStyle.position, tgcPosition, $tipGroupClone.classList);
        // console.log("***", " top: ", tgcStyle.top, " left: ", tgcStyle.left, " bottom: ", tgcStyle.bottom, " right: ", tgcStyle.right, " transformOrigin: ", tgcStyle.transformOrigin, tgcStyle.transform);
        // console.log("+++", " scrollWidth: ",document.body.scrollWidth, " scrollHeight: ", document.body.scrollHeight, " clientHeight: ", document.body.clientHeight);
        // console.log("+++", " pageXOffset: ", window.pageXOffset, " pageYOffset: ", window.pageYOffset);

        let scrollWidth = C.getScrollWidth();

        // 绝对定位，必须设置top, left, bottom, right 为确定的值，不能是百分比，这样才能正常转换为canvas，不然会空白
        if(tgcStyle.position == "fixed") {
            // 如果绝对定位使用了transfrom，必须考虑transform 的x, y
            let transfromX = 0, transfromY = 0;
            if(tgcStyle.transform != 'none') {
                let transform = tgcStyle.transform.split(',');
                transfromX = parseFloat(transform[4]);
                transfromY = parseFloat(transform[5]);
            }
            // console.log('--- transfromX: ', transfromX, ' transfromY: ', transfromY);

            html2canvasConfig.windowWidth = document.body.scrollWidth;
            html2canvasConfig.windowHeight = document.body.scrollHeight;
            html2canvasConfig.x = window.pageXOffset + tgcPosition.left + transfromX;
            html2canvasConfig.y = window.pageYOffset + tgcPosition.top + transfromY;

            // 由于本项目使用绝对定位right, bottom 属性时，都是 0px, 所以使用此方法简单粗暴地判断是否使用了 right或者bottom
            if(tgcStyle.right == '0px') {
                $tipGroupClone.style.right = tgcStyle.right;
                // 如果有垂直滚动条
                if(C.hasScrollbarY()) {
                    html2canvasConfig['scrollX'] = scrollWidth;
                }
            }else {
                $tipGroupClone.style.left = tgcStyle.left;
            }
            if(tgcStyle.bottom == '0px') {
                $tipGroupClone.style.bottom = tgcStyle.bottom;
                // bottom 时的 y 值计算是这个，不要问我为什么，天知道我是试出来的
                html2canvasConfig.y = window.pageYOffset + document.body.clientHeight - (tgcHeight - 50) + transfromY;
            }else {
                $tipGroupClone.style.top = tgcStyle.top;
            }
        }else {
            html2canvasConfig.x = tgcPosition.left;
            html2canvasConfig.y = tgcPosition.top;
        }

        // 如果有滚动条，对于不是位于页面顶部的元素，若想转换成 canvas不空白，可以使用将scrollTop改为0，跳转到页面顶部
        // 此简单方法简单粗暴，记得生成canvas 之后把scrollTop 改回来。
        // let curScrollTop = document.documentElement.scrollTop;
        // document.body.scrollTop = document.documentElement.scrollTop = 0;
        // let html2canvasConfig = {
        //     width: tgcWidth,
        //     height: tgcHeight,
        // };
        
        // console.log(html2canvasConfig);

        html2canvas($tipGroupClone, html2canvasConfig).then(function(canvas) {
            // document.body.scrollTop = document.documentElement.scrollTop = curScrollTop;
            $tipGroupClone.innerHTML = "";
            $tipGroupClone.append(canvas);
            _this.createImgFragment(canvas, $tipGroupClone);
            _this.removeImgFragment($tipGroupClone);
        }); 
    }

    tips.prototype.createImgFragment = function(canvas, $tipGroupClone) {
        let devicePixelRatio = window.devicePixelRatio;

        let ctx = canvas.getContext("2d");
        // 将canvas 导出为图片
        let imgData = canvas.toDataURL("image/png", 1);
        
        let tgcWidth = $tipGroupClone.offsetWidth;
        let tgcHeight = $tipGroupClone.offsetHeight;
        // 强制设置宽度和高度，固定不变
        $tipGroupClone.style.width = tgcWidth+"px";
        $tipGroupClone.style.height = tgcHeight+"px";

        let animationOption = this.options.animation;
        let type = animationOption.fragments.type;
        let fWidth, fHeight, fOffsetW, fOffsetH, fCount;
        let xCount, yCount;
        switch(type) {
            case 0: 
                let basePix = animationOption.fragments.basePix;
                fWidth = basePix/devicePixelRatio;
                fHeight = basePix*(tgcHeight/tgcWidth)/devicePixelRatio;
                if(tgcWidth > tgcHeight) {
                    fHeight = basePix/devicePixelRatio;
                    fWidth = basePix*(tgcWidth/tgcHeight)/devicePixelRatio;
                }
                fWidth = fWidth/100*100 + 0.01;
                fHeight = fHeight/100*100 + 0.01;

                fOffsetW = tgcWidth/fWidth;
                fOffsetH = tgcHeight/fHeight;
                fCount = (tgcWidth/fWidth) * (tgcHeight/fHeight);
                break;
            case 1: 
                tgcWidth = $tipGroupClone.offsetWidth;
                tgcHeight = $tipGroupClone.offsetHeight;
                xCount = animationOption.fragments.xCount;
                yCount = animationOption.fragments.yCount;
                fCount = xCount*yCount;
                fWidth = tgcWidth/xCount;
                fHeight = tgcHeight/yCount;
                fOffsetW = tgcWidth/fWidth;
                fOffsetH = tgcHeight/fHeight;
                break;
        }

        // 根据预定的fragments数量动态生成小div
        // 每个div都设置背景图为canvas导出的图片，设置各个div背景图的background-position，达到所有div拼凑成原始的图片
        let fragmentStr = "";
        for(let i=0; i<fCount; i++) {
            let x = parseInt(i%fOffsetW);       // x为个位数
            let y = parseInt(i/fOffsetH);       // y为10位数
            fragmentStr += '<div class="ohoTip-amt-GF-fragment" style="width:'+fWidth+'px;height:'+fHeight+'px;background-position:-'+(x*fWidth)+'px -'+(y*fHeight)+'px;left:'+(x*fWidth)+'px;top:'+(y*fHeight)+'px"></div>';
        }

        $tipGroupClone.innerHTML = fragmentStr;

        let eventIn = function() {
            this.className = "ohoTip-amt-GF-fragment active";
        }
        let eventOut = function() {
            this.className = "ohoTip-amt-GF-fragment";
        }

        let fragments = $tipGroupClone.getElementsByTagName("div");
        for(let i=0; i<fragments.length; i++) {
            //鼠标移动到的小图片旋转180°，离开后复原，可以不需要设置
            fragments[i].addEventListener('mouseover', eventIn, false);
            fragments[i].addEventListener('mouseout', eventOut, false);

            fragments[i].style.position = "absolute";
            fragments[i].style.backgroundImage = "url('"+imgData+"')";
            fragments[i].style.backgroundSize = fOffsetW*100 + "% " + fOffsetH*100 + "%";
        }

        return $tipGroupClone;
    }

    tips.prototype.removeImgFragment = function($tipGroupClone) {
        let fragments = $tipGroupClone.getElementsByTagName("div");
        let xCount = Math.round($tipGroupClone.offsetWidth/fragments[0].offsetWidth);
        let yCount = Math.round($tipGroupClone.offsetHeight/fragments[0].offsetHeight);
        console.log(fragments.length, $tipGroupClone.offsetWidth/fragments[0].offsetWidth, xCount, $tipGroupClone.offsetHeight/fragments[0].offsetHeight, yCount);
        
        let curTimeout=0, maxTimeout=0;
        for(let i=0; i<xCount; i++) {
            for(let j=0; j<yCount; j++) {
                curTimeout = i*200;
                maxTimeout = maxTimeout > curTimeout? maxTimeout : curTimeout;
                setTimeout(function() {
                    let k = j*xCount + i;
                    let top = j*xCount;

                    if(fragments[k] === undefined) return;

                    // console.log(top, ' --- ', k, ' --- ', i*100);
                    fragments[k].style.top = (top)+50 + "px";
                    fragments[k].style.opacity = 0;
                    // fragments[k].style.transform = "rotate(360deg) scale(0)";
                }, curTimeout);
            }
        }
        setTimeout(function() {
            $tipGroupClone.parentNode.removeChild($tipGroupClone);
            console.log("remove");
        }, curTimeout+1000);
    }

    tips.prototype.listen = function() {
        let _this = this;

        _this.backup.bind = function(e) {
            _this.event = e;
            console.log(e);
            _this.setPosition();
            if(_this.eventTimeoutID) clearTimeout(_this.eventTimeoutID);
            _this.eventTimeoutID = setTimeout(function(){_this.event = null;}, 100);
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

    // 移除Tips 元素
    tips.prototype.remove = function() {
        let _this = this;
        let $tipContainer = _this.backup._tcElem;
        let $tipGroup = _this.backup._tgElem;
        let $tip = _this.backup._tElem;
        let $bg = _this.backup._bgElem;
        let $binder = _this.backup._binderElem;

        _this.animation('out');

        setTimeout(function() {
            $tip.remove();
            if($bg) {
                $bg.remove();
            }

            // 一个组只有一个Symbol，当组内只剩下一个元素的时候，说明它是Symbol
            if($binder) {
                if($tipGroup.getElementsByTagName("*").length == 1) {
                    $binder.remove();
                }
            }

            if($tipGroup.getElementsByTagName("*").length == 0) {
                $tipGroup.remove();
            }else {
                // 用于显示binder
                C.addCss($tipGroup, {overflow: 'visible'});
                _this.resetPosition();
            }

            if($tipContainer.getElementsByTagName("*").length == 0) {
                $tipContainer.remove();
            }

            //取消监听
            _this.unlisten();

            _this.clearTimeout();

            _this.unsetGroup();
        }, _this.options.animation.delay);
    }

    tips.prototype.destroy = function() {
        let _this = this;
        let $tip = _this.backup._tElem;
        let $bg = _this.backup._bgElem;

        if(this.options.destroy == 'auto') {      //自动销毁tips
            let delay = this.options.delay;
            setTimeout(function(){
                _this.remove();
            }, delay);
        }else if(this.options.destroy == 'manual') {     //手动销毁tips
            let $close = C.createNode("<div class='ohoTip-close'>x</div>");
            $tip.appendChild($close);

            $close.onclick = function() {
                _this.remove();
            };
        }else {
            // 从不销毁
        }
    };

    tips.prototype.initTips = function() {
        this.initMsg();
        this.getClass();                //获取class
        this.getTipsAttribute();        //获取属性
        this.render();
        this.setGroup();
        this.animation('in');
        this.listen();
        this.destroy();
        this.options.callback.call(this);        //公共回调函数
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

    tips.prototype.show = function(msg, type, parentElm) {
        let options = {
            parentElement: parentElm,
            type: type,
            msg: msg
        };
        this.init(options);
    };

    tips.prototype.normal = function(msg, icon, parentElm) {
        let options = {
            parentElement: parentElm,
            type: "normal",
            icon: icon? icon : 'info',
            msg: msg
        };
        this.init(options);
    };

    tips.prototype.info = function(msg, parentElm) {
        let options = {
            parentElement: parentElm,
            type: "info",
            msg: msg
        };
        this.init(options);
    };

    tips.prototype.success = function(msg, parentElm) {
        let options = {
            parentElement: parentElm,
            type: "success",
            msg: msg
        };
        this.init(options);
    };

    tips.prototype.error = function(msg, parentElm) {
        let options = {
            parentElement: parentElm,
            type: "error",
            msg: msg
        };
        this.init(options);
    };

    tips.prototype.warning = function(msg, parentElm) {
        let options = {
            parentElement: parentElm,
            type: "warning",
            msg: msg
        };
        this.init(options);
    };

    tips.prototype.hoverTip = function(options, hoverEle) {
        let defOptions = {
            binder: 'triangle'
        };
        let hoverTip;
        options = C.extend({}, defOptions, options);

        hoverEle.onmouseenter = function() {
            hoverTip = ohoTips(options);
        }
        hoverEle.onmouseleave = function() {
            if(hoverTip) hoverTip.remove();
        }
    };

    //jQuery 拓展静态方法 tips
    if(typeof jQuery != 'undefined'){
        $.extend({
            ohoTips: function(option) {
                return new tips(option);
            }
        });
    }

    window.ohoTips = function(option) {
        return new tips(option);
    }

    window.ohoTipsPrototype = tips;

})();
