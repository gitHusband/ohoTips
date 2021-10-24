import * as C from "./common.js";

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

    this.C = C;

    // 单独传入消息
    if(C.isString(options) || C.isArray(options)) {
        let newOptions = {
            message: options
        };

        options = newOptions;

        if(C.isObj(extendOptions) && !C.isEmptyObj(extendOptions)) {
            options = C.extend({}, extendOptions, options);
        }
    }

    this.init(options);
}

tips.C = C;

tips.defaultOptions = {
    message: '',                //传入数组可换行, 支持DOM元素，jQuery元素
    html: {
        param: false,                   //false - 文本类型信息，true - dom元素类型信息
        isContainerTransparent: false,  //false - Tips 容器不透明，true - Tips 容器透明
    },
    baseElement: "",            //基准方位元素
    parentElement: "",          //Tips container 直接父元素，注意，基准元素建议也是父元素的子元素，不然没必要
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
        beforeCreated: C.noop,      //Tips 创建消息之前 触发
        created: C.noop,            //Tips 创建消息之后 触发
        beforeShown: C.noop,        //Tips 创建消息之后，展示之前 触发
        shown: C.noop,              //Tips 展示之后 触发
        beforeDestroyed: C.noop,    //Tips 销毁之前 触发
        destroyed: C.noop,          //Tips 销毁之后 触发
        beforeFloated: C.noop,      //Tips 每次浮动之前 触发
        floated: C.noop,            //Tips 每次浮动之后 触发
    },
    debug: true                     //debug 默认打开，打开可以调试log。 error, warn 类型的log 不受此影响
};

tips._defaultOptions = null;

// 设置默认参数，全局生效
tips.setDefOptions = function(defOptions) {
    if(!tips._defaultOptions) tips._defaultOptions = tips.defaultOptions;

    tips.defaultOptions = C.extend({}, tips.defaultOptions, defOptions);
};

// 重置默认参数
tips.resetDefOptions = function() {
    if(tips._defaultOptions) tips.defaultOptions = C.extend({}, tips._defaultOptions);
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

    this.options = C.extend({}, tips.defaultOptions, options);
    
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
        || (C.isObj(options.html) && options.html.param === true)
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
        if(C.isObj(optHtml) && optHtml.isContainerTransparent) tipBoxClass = tipBoxClass + ' ohoTip-box-html-transparent';
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
 * 1. 当基准元素的定位是Fixed，我们把 Tips 插入到这个基准元素内部
 * 2. 用户可以根据这个特性自定义父元素，建议基准元素也要是父元素的子元素，否则毫无意义
 * 3. 以上均不匹配，那么父元素就是 BODY
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
        // 如果基准元素Postion 是Fixed，则Tips插入到基准元素内
        // 否则插入到body 内更好
        let baseStylePosition = C.getStyle($base, 'position');

        if(["fixed"].includes(baseStylePosition)) {
            $parent = $base;
        }
        else {
            $parent = document.body;
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
        $tipGroup = C.createNode("<div group-name='"+groupName+"' class='ohoTip-group'>");
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
        $tipContainer = C.createNode("<div name='"+containerName+"' class='ohoTip-container'></div>");
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

    let $tip = C.createNode("<div name='ohoTips' class='"+cssClass.tip+"'>");

    // 用于symbol 启用时，设置对应padding 给symbol 展示空间
    let $symbolBox = C.createNode("<div name='symbol-box' class='ohoTip-symbol-box'></div>");
    this.backup._symbolBoxElm = $symbolBox;
    $tip.appendChild($symbolBox);

    let $tipBox = C.createNode("<div class='"+cssClass.tipBox+"'>");
    this.backup._tipBoxElm = $tipBox;
    $symbolBox.appendChild($tipBox);

    let $messageBox = C.createNode("<div class='"+cssClass.message+"'>");
    let $message;
    if(this.isHtmlMessage()) {       //message 为dom元素
        if(typeof options.message == "string") {
            $message = C.createNode(options.message);
        }else if(options.message instanceof HTMLElement) {
            $message = options.message;
        }else if(options.message instanceof jQuery) {
            $message = options.message[0];
        }
        $messageBox.appendChild($message);
        
    }else {                 //message 为文本信息
        if(C.isString(options.message)) {
            $message = document.createElement("span");
            $message.innerText = options.message;
            $messageBox.appendChild($message);
        }else if (C.isArray(options.message)) {
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
        let $iconBox = C.createNode("<div class='ohoTip-icon-box'><span><i class='"+cssClass.icon+"'></i></span></div>");
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
    let $bg = C.createNode("<div class = '"+cssClass.bg+"'>");
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

    let $symbol = C.createNode("<span class='"+ symbolClass +"'></span>");
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

    C.addCss($symbolBox, symbolBoxStyle);

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
            tipGroupWidth: C.outerWidth($tipGroup),
            tipGroupHeight: C.outerHeight($tipGroup),
            tipWidth: C.outerWidth($tip),
            tipHeight: C.outerHeight($tip),
        };
    }else {
        details = {
            basePosition: C.position($base),
            baseMarginTop: parseFloat(C.css($base, "margin-top")),            //获取基准元素外边距，position() 获取的值不算外边距
            baseMarginLeft: parseFloat(C.css($base, "margin-left")),
            baseWidth: C.innerWidth($base, true),                                   //width+padding
            baseHeight: C.innerHeight($base, true),                                 //height+padding
            baseOuterWidth: C.outerWidth($base),
            baseOuterHeight: C.outerHeight($base),
            baseBorderTopWidth: parseFloat(C.css($base, "border-top-width")),            //top border
            baseBorderBottomWidth: parseFloat(C.css($base, "border-bottom-width")),
            baseBorderLeftWidth: parseFloat(C.css($base, "border-left-width")),           //left border
            baseBorderRightWidth: parseFloat(C.css($base, "border-right-width")),
            baseBorderRadius: C.css($base, "border-radius"),                     //圆角半径
            tipGroupWidth: C.outerWidth($tipGroup),
            tipGroupHeight: C.outerHeight($tipGroup),
            tipWidth: C.outerWidth($tip),
            tipHeight: C.outerHeight($tip),
        };

        // 如果父元素不是 BODY 元素，那么要求基准元素也要是父元素的子元素，否则定位将出错
        if(!this.isParentBodyElement()) {
            let $parent = this.backup._parentElm;
            let parentStylePosition = C.css($parent, 'position');

            // 如果父元素定位类型是 相对的，绝对或固定，那么Tips子元素的定位将根据基准元素与父元素相对定位来实现，而不是基准元素与BODY的相对定位
            if(this.isSpecialStylePosition(parentStylePosition)) {
                if($parent === $base) {
                    details.basePosition = { top: 0, left: 0 };
                } else {
                    details.basePosition = C.relativePosition($base);
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
    let tgStyle = C.getStyle($tipGroup);
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
        tipPosition.top = eleDetails.baseTop + eleDetails.baseHeight + eleDetails.baseBorderTopWidth + eleDetails.baseBorderBottomWidth + parseFloat(myPosition.bottom);
    }else if(myPosition.hasOwnProperty('bottom') && regPer.test(myPosition.bottom)) {
        let baseHeight = C.numAdds(eleDetails.baseHeight, eleDetails.baseBorderTopWidth, eleDetails.baseBorderBottomWidth);
        let bottom = C.numMul(baseHeight, C.numDiv(parseFloat(myPosition.bottom), 100));
        tipPosition.top = C.numAdds(eleDetails.baseTop, baseHeight, bottom);
    }else if(myPosition.hasOwnProperty('top') && regNum.test(myPosition.top)) {
        tipPosition.top = eleDetails.baseTop + eleDetails.baseBorderTopWidth + parseFloat(myPosition.top);
    }else if(myPosition.hasOwnProperty('top') && regPer.test(myPosition.top)) {
        let top = (eleDetails.baseHeight - tipGroupHeight) * parseFloat(myPosition.top)/100;
        tipPosition.top = eleDetails.baseTop + eleDetails.baseBorderTopWidth + top;
    }

    if(myPosition.hasOwnProperty('right')  && regNum.test(myPosition.right)) {
        tipPosition.left = C.numAdds(eleDetails.baseLeft, eleDetails.baseWidth, eleDetails.baseBorderLeftWidth, eleDetails.baseBorderRightWidth, parseFloat(myPosition.right));
    }else if(myPosition.hasOwnProperty('right') && regPer.test(myPosition.right)) {
        let baseWidth = C.numAdds(eleDetails.baseWidth, eleDetails.baseBorderLeftWidth, eleDetails.baseBorderRightWidth);
        let right = C.numMul(baseWidth, C.numDiv(parseFloat(myPosition.right), 100));
        tipPosition.left = C.numAdds(eleDetails.baseLeft, baseWidth, right);
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

    let regNum = C.regNum;
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
    let regNum = C.regNum;

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
    let offset = C.extend({}, this.options.symbolOptions.offset, tmpOffset);
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
    let borderWidth = parseFloat(C.css($symbol, "border-top-width"));
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

    let floatOptions = C.extend({}, tips.floatOptions, customFloatOptions, backupfloatOptions);

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

    C.css($tipGroup, {display: 'none'});
    let tipPosition = _this.getPosition({});
    C.addClass($tipGroup, tipPosition.class.tipClass);

    Object.defineProperty(_this.monitor, 'floatPosition', {
        get:function(){
            return floatPosition;
        },
        set:function(newValue){
            let floatPosition = newValue;
            let tipPosition = _this.getPosition(floatPosition);
            C.addCss($tipGroup, tipPosition.style);
            C.addCss($tipGroup, {display: 'block'});
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

    let floatOptions = C.extend({}, tips.floatOptions, customFloatOptions, backupfloatOptions);

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
    C.addClass($tipGroup, tipPositionStart.class.tipClass);
    C.addCss($tipGroup, tipPositionStart.style);
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

    C.css($tipGroup, {display: 'none'});

    let lastValue = null;
    let lastTipTranslate = null;

    let compare = function(lastValue, newValue) {
        // _this.writeLog('info', '*** Compare Value: ', lastValue, newValue);

        if(!lastValue) {
            _this.writeLog('info', 'No last value');
            return;
        }

        lastValue = C.extend({}, lastValue);
        newValue = C.extend({}, newValue);

        let type = "value";
        if(C.isString(lastValue.left)) {
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

            C.addCss($tipGroup, translate);

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
            C.addClass($tipGroup, tipPosition.class.tipClass);
            this.setClassOffset();
        }else {
            $tipGroup.style.cssText = '';
            C.addCss($tipGroup, tipPosition.style);
        }
    }
};

tips.prototype.setBgPosition = function() {
    if(!this.options.background || !this.backup._backgroundElem) return false;
    let $bg = this.backup._backgroundElem;

    if(this.isBaseBodyElement()) {
        let positionClass = this.getPositionClass(this.options.position);
        C.addClass($bg, positionClass.bgClass);
    }else {
        let eleDetails = this.getElementDetails();
        let bgCss = C.extend({}, eleDetails.basePosition, {
            width: eleDetails.baseOuterWidth,
            height: eleDetails.baseOuterHeight
        }, {"border-radius": eleDetails.baseBorderRadius});

        C.addCss($bg, bgCss);
    }
};

//初始化Tips位置，目的在于可以获得Tips 的真实宽度高度
tips.prototype.setInitPosition = function() {
    let $tipGroup = this.backup._tipGroupElm;
    C.addClass($tipGroup, 'ohoTip-init');
}

//初始化Tips位置后必须去除
tips.prototype.unsetInitPosition = function() {
    let $tipGroup = this.backup._tipGroupElm;
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
        C.addClass($tip, 'ohoTip-amt-fade');
        if($bg) {
            C.addClass($bg, 'ohoTip-bg-amt-fade');
        }
        
        setTimeout(function(){
            C.addClass($tip, 'in');
            if($bg) {
                C.addClass($bg, 'in');
            }
        }, 100);
    }else if(status == 'out') {
        setTimeout(function(){
            C.addClass($tip, 'out');
            if($bg) {
                C.removeClass($bg, 'in');
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

        C.addClass($tip, 'ohoTip-amt-fold');
        if($bg) {
            C.addClass($bg, 'ohoTip-bg-amt-fold');
        }
        
        setTimeout(function(){
            C.addCss($tip, tipStyle);
            if($bg) {
                C.addClass($bg, 'in');
            }
        }, 100);
        // 显示阴影
        this.timeoutFoldId = setTimeout(function(){
            C.addCss($tip, {overflow: 'visible'});
        }, 300);
    }else if(status == 'out') {
        if(this.timeoutFoldId) clearTimeout(this.timeoutFoldId);
        
        C.addCss($tip, {overflow: 'hidden'});
        setTimeout(function(){
            C.addClass($tip, 'out');
            if($bg) {
                C.removeClass($bg, 'in');
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
        C.addClass($tip, 'ohoTip-amt-fragment in');
        if($bg) {
            C.addClass($bg, 'ohoTip-bg-amt-fragment in');
        }

        this.fragmentInExplode();
    }else if(status == 'out') {
        this.fragmentOutExplode();

        let tipStyle = {
            display: 'none',
        };
        C.addCss($tip, tipStyle);
    }
}

tips.prototype.createTipCopy = function(hideTip) {
    let $tip = this.backup._tipElm;
    let $tipClone = $tip.cloneNode(true);

    C.insertAfter($tipClone, $tip);

    if(hideTip == true){
        $tip.style.display = "none";
    }

    return $tipClone;
}

tips.prototype.createFragment = function() {
    let $tipClone = this.createTipCopy(true);

    let tipWidth = C.outerWidth($tipClone), tipHeight = C.outerHeight($tipClone);
    C.addCss($tipClone, {width: tipWidth+'px', height: tipHeight+'px'});
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
            fNode = C.createNode('<div class="ohoTip-amt-fragment-box" style="clip: rect('+rectTop+'px, '+(rectLeft+fWidth)+'px, '+(rectTop+fHeight)+'px, '+rectLeft+'px)">'+tipHtml+'</div>');
            $tipClone.appendChild(fNode);
        }
    }

    return $tipClone;
}

tips.prototype.fragmentInExplode = function() {
    let $tip = this.backup._tipElm;

    let $tipClone = this.createFragment();

    $tipClone.querySelectorAll('div[class="ohoTip-amt-fragment-box"]').forEach(item => {            
        let randTop = C.randomNum(-10, 10),
            randLeft = C.randomNum(-10, 10);

        let randDeg = C.randomNum(-5, 15), 
            randScale = C.randomNum(0.7, 1.3),
            randDeg2 = C.randomNum(5, 25);

        C.addCss(item, {'top' : (randTop)+'px', 'left' : (randLeft)+'px', 'opacity' : '0', 'transform' : 'scale('+randScale+') skew('+randDeg+'deg) rotateZ('+randDeg2+'deg)'});
        
        setTimeout(function() {
            C.addClass(item, 'explode-in');
            C.addCss(item, {'left' : '0', 'top' : '0', 'opacity' : '1', 'transform' : 'none'});
        }, 10);
    })

    setTimeout(function() {
        $tipClone.parentNode.removeChild($tipClone);
        C.addCss($tip, {display: ''});
    }, 1000);
}

tips.prototype.fragmentOutExplode = function() {
    let $tipClone = this.createFragment();
    
    let tipWidth = C.outerWidth($tipClone), tipHeight = C.outerHeight($tipClone);

    $tipClone.querySelectorAll('div[class="ohoTip-amt-fragment-box"]').forEach(item => {
        C.addClass(item, 'explode-out');
        
        let randTop = C.randomNum(-30, 30);
        let randLeft = C.randomNum(-30, 30);

        let randDeg = C.randomNum(-5, 10), 
        randScale = C.randomNum(0.9, 1.5),
        randDeg2 = C.randomNum(30, 5);

        C.addCss(item, {'top' : (randTop)+'px', 'left' : (randLeft)+'px', 'opacity' : '0', 'transform' : 'scale('+randScale+') skew('+randDeg+'deg) rotateZ('+randDeg2+'deg)'});
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
    let fHeight = C.outerHeight($tipClone)/yCount;
    
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
    // window.addEventListener('scroll', _this.backup.bind);
    this.backup._parentElm.addEventListener('scroll', _this.backup.bind);
};

tips.prototype.unlisten = function() {
    let _this = this;
    window.removeEventListener('resize', _this.backup.bind);
    // window.removeEventListener('scroll', _this.backup.bind);
    this.backup._parentElm.removeEventListener('scroll', _this.backup.bind);
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
        let $close = C.createNode("<div class='ohoTip-close'>x</div>");
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
    options = C.extend({}, defOptions, options);

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

export function ohoTips(options, extendOptions = {}) {
    return new tips(options, extendOptions);
}

export { tips as ohoTipsPrototype }