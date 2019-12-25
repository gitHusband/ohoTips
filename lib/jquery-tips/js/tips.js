/*tips 插件*/
(function ($) {
    function tips(options) {
        if(!options)
            return this;

        this.init(options);
    }

    tips.defaultOptions = {
        parentElement: "",          //基准方位元素
        position: "middle",         //tips 位置，左上角，上居中，右上角，左居中，全居中，右居中，左下角，下居中，右下角，自定义相对位置，浮动
        positionFix: true,          //计算tip定位时，true - 考虑tip 宽高，false - 不考虑； 默认true。
        float: {                    //浮动参数，当position = 'float'时，可选；其余情况不需要 
            type: 'default',            //若不使用floatPositionFun, 可选择默认浮动方法
            cusFloatOptions: null,      //自定义浮动选项
            cusFloatStatus: null,       //自定义浮动初始状态，top，left等
            cusFloatFun: null,          //自定义浮动方法
            cusFloatCallback: $.noop,   //自定义浮动回调函数
        },
        group: {                    //分组，多个Tips 集合
            name: null,                 //分组名称
            len: 9999,                  //一个分组最大Tips个数
        },
        type: "normal",             //tips 样式, 支持自定义样式（传入class名称）
        limit: true,                //限制Tips 的大小
        icon: true,                 //是否显示icon
        background: false,          //false - 不显示遮罩层覆盖父元素， true - 显示遮罩层覆盖父元素
        destroy: "auto",            //auto - 自动销毁tips，manual - 不自动销毁tips，需手动销毁, never - 从不销毁tips
        delay: 2000,                //自动销毁tips 延时，单位：ms
        html: false,                //false - 文本类型信息，true - dom元素类型信息
        msg: [],                    //传入数组可换行
        htmlCallback: $.noop,       //dom元素回调函数，用于监听dom元素动作
        callback: $.noop            //公共回调函数
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

    tips.groups = [];                

    tips.prototype.init = function(options) {
        this.id = this.uniqueId();

        this.options = $.extend(true, {}, tips.defaultOptions, options);
        
        this.backup = {
            _pElem : null,      //备份父元素
            _tcElem : null,     //备份Tips 容器元素
            _tgElem : null,      //备份Tips 分组元素
            _tElem : null,      //备份Tips 元素
            _bgElem: null,      //备份遮罩层元素
            _group: {           //备份组状态
                isExisted: false,
                id: null,
            },
            _floatStatus: {},   //备份当前定位
        };

        this.monitor = {
            floatPosition : {},     //浮动定位，支持自定义浮动方式
        };

        this.tGroups = tips.groups;

        this.event = null;          //触发Tips 重新定位的事件

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
        var type = this.options.type;
        var limit = this.options.limit;
        var icon = this.options.icon;
        var html = this.options.html;

        var tipClass = "tip";
        var tipBoxClass = "tip-box";
        var bgClass = "tip-bg";
        var msgClass = "";
        var iconClass = "";

        if(limit) {
            tipClass = tipClass + " tip-limit";
        }

        if(html) {
            tipBoxClass = tipBoxClass + ' tip-box-html';
        }

        switch(type) {
            case "normal" :
                msgClass = "tip-msg";
                break;
            case "success" :
                tipBoxClass = tipBoxClass + " tip-success";
                msgClass = "tip-msg tip-msg-success";
                break;
            case "error" :
                tipBoxClass = tipBoxClass + " tip-error";
                msgClass = "tip-msg tip-msg-error";
                break;
            case "warning" :
                tipBoxClass = tipBoxClass + " tip-warning";
                msgClass = "tip-msg tip-msg-warning";
                break;
            case "info" :
                tipBoxClass = tipBoxClass + " tip-info";  
                msgClass = "tip-msg tip-msg-info";
                break;
            default :
                msgClass = type;        //用户自定义
                break;
        }

        if(icon) {
            tipBoxClass = tipBoxClass + " tip-add-icon";
            iconClass = "tip-icon";
            if(icon === true) {
                switch(type) {
                    case "normal" :
                        iconClass = iconClass + " icon-check";
                        break;
                    case "success" :
                        iconClass = iconClass + " icon-check";
                        break;
                    case "error" :
                        iconClass = iconClass + " icon-cross";
                        break;
                    case "warning" :
                        iconClass = iconClass + " icon-exclamation";
                        break;
                    case "info" :
                        iconClass = iconClass + " icon-exclamation-circle";
                        break;
                    default:
                        iconClass = iconClass + " icon-check";
                        break;
                }
            }else {
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
                    default:
                        iconClass = icon;
                        break;
                }
            }
        }

        var cssClass = {
            tip: tipClass,
            tipBox: tipBoxClass,
            bg: bgClass,
            msg: msgClass,
            icon: iconClass
        };

        this.cssClass = cssClass;

        return cssClass;
    };

    tips.prototype.getTipsAttribute = function() {
        var group = this.options.group;
        var tipsAttribute = {};
        if(group.name) {
            tipsAttribute.tipName = group.name;
        }else {
            tipsAttribute.tipName = new Date().getTime();
        }

        this.tipsAttribute = tipsAttribute;

        return tipsAttribute;
    };

    tips.prototype.getParentElem = function(options) {
        var $parent = null;

        if(!options.parentElement) {
            $parent = $("body");
        }else if(options.parentElement instanceof jQuery) {
            $parent = options.parentElement;
        }else {
            $parent = $(options.parentElement);
        }

        return $parent;
    };

    // 获取组元素，同一个组的Tips 将包含在相同的组元素里面
    tips.prototype.getTipsGroup = function(options) {
        var tipsAttribute = this.tipsAttribute;
        var groupName = 'tipGroup-' + tipsAttribute.tipName;

        var $tipsGroup = $("div[group-name='"+groupName+"']");

        if($tipsGroup.length <= 0) {
            $tipsGroup = $("<div group-name='"+groupName+"' class='tip-group'></div>");
        }else {
            this.backup._group.isExisted = true;
        }

        return $tipsGroup;
    };

    // 将Tips 和 背景元素包住，避免凌乱
    tips.prototype.getTipsContainer = function(options) {
        var tipsAttribute = this.tipsAttribute;
        var $tipsGroup = this.backup._tgElem;
        var $tipsContainer = $tipsGroup.parent("div[name^='tipContainer-']");

        if($tipsContainer.length <= 0) {
            var containerName = 'tipContainer-' + new Date().getTime();
            $tipsContainer = $("<div name='"+containerName+"' class='tip-container'></div>");
        }

        return $tipsContainer;
    };

    tips.prototype.renderTipsBody = function(options) {
        var $parent = this.backup._pElem;
        var $tipsContainer = this.backup._tcElem;
        var $tipsGroup = this.backup._tgElem;
        var cssClass = this.cssClass;
        var tipsAttribute = this.tipsAttribute;

        var $tip = $("<div name='tips' class='"+cssClass.tip+"'>");
        var $tipBox = $("<div class='"+cssClass.tipBox+"'>");
        $tip.append($tipBox);

        var $msgBox = $("<div class='"+cssClass.msg+"'>");
        if(options.html) {       //msg 为dom元素
            var $msg = $(options.msg);
            $msgBox.append($msg);
            this.options.htmlCallback();
        }else {                 //msg 为文本信息
            if(typeof options.msg == "string") {
                //var $msg = $("<div>"+options.msg+"</div>");
                var $msg = $("<span>");
                $msg.text(options.msg);
                $msgBox.append($msg);
            }else {
                for(var i=0; i<options.msg.length; i++) {
                    //var $msg = $("<div>"+options.msg[i]+"</div>");
                    var $msg = $("<div>");
                    var msg = options.msg[i];
                    $msg.text(msg);
                    $msgBox.append($msg);
                }
            }
        }

        $tipBox.append($msgBox);
        this.renderIcon(options, $tipBox);

        $tipsGroup.append($tip);
        $tipsContainer.append($tipsGroup);
        $parent.append($tipsContainer);         //先插入元素，然后才能获取宽度和高度

        return $tip;
    };

    tips.prototype.renderIcon = function(options, $tipBox) {
        if(options.icon) {
            var cssClass = this.cssClass;
            var $iconBox = $("<div class='tip-icon-box'><span><i class='"+cssClass.icon+"'></i></span></div>");
            $tipBox.append($iconBox);
        }
    }

    tips.prototype.renderTipsBg = function(options) {
        if(!options.background) return false;

        var cssClass = this.cssClass;
        var $parent = this.backup._pElem;
        var $tipContainer = this.backup._tcElem;
        var $bg = $("<div class = '"+cssClass.bg+"'>");
        $tipContainer.append($bg);

        return $bg;
    };

    tips.prototype.setGroup = function() {
        var _this = this;

        var group = this.options.group;

        if(group.name) {
            if(this.tGroups.hasOwnProperty(group.name)) {
                this.tGroups[group.name].push(_this);
            }else {
                this.tGroups[group.name] = [_this];
            }
        }
    }

    tips.prototype.unsetGroup = function() {
        var _this = this;

        var group = this.options.group;

        if(group.name) {
            if(this.tGroups.hasOwnProperty(group.name)) {
                for (var i = 0; i < this.tGroups[group.name].length; i++) {
                    if(this.tGroups[group.name][i].id == this.id) {
                        this.tGroups[group.name].splice(i, 1);
                        break;
                    }
                }
            }
        }
    }

    tips.prototype.checkGroup = function() {
        var _this = this;

        var group = this.options.group;

        if(group.name) {
            if(this.tGroups.hasOwnProperty(group.name) && this.tGroups[group.name].length > group.len) {
                this.tGroups[group.name][0].remove(_this);
                this.tGroups[group.name].splice(0, 1);
            }
        }
    }

    tips.prototype.getElementDetails = function() {
        //当父元素或Tip 元素发生或可能发生变化时，才重新获取详细参数。
        if(this.elementDetails && (!this.event || this.event.type != 'resize')) {
            return this.elementDetails;
        }

        this.setInitPosition();

        var $pElem = this.backup._pElem;
        var $tipsGroup = this.backup._tgElem;
        var $tip = this.backup._tElem;

        if(!this.options.parentElement || this.backup._pElem.is('body')) {
            var details = {
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
                tipGroupWidth: $tipsGroup.outerWidth(),
                tipGroupHeight: $tipsGroup.outerHeight(),
                tipWidth: $tip.outerWidth(),
                tipHeight: $tip.outerHeight(),
            };
        }else {
            var details = {
                pPosition: $pElem.position(),
                pMarginTop: parseFloat($pElem.css("margin-top")),           //获取父元素外边距，position() 获取的值不算外边距
                pMarginLeft: parseFloat($pElem.css("margin-left")),
                pWidth: $pElem.innerWidth(),                                //width+padding
                pHeight: $pElem.innerHeight(),                              //height+padding
                pOuterWidth: $pElem.outerWidth(),
                pOuterHeight: $pElem.outerHeight(),
                pBTWid: parseInt($pElem.css("border-top-width")),           //top border
                pBBWid: parseInt($pElem.css("border-bottom-width")),
                pBLWid: parseInt($pElem.css("border-left-width")),          //left border
                pBRWid: parseInt($pElem.css("border-right-width")),
                pborRadius: $pElem.css("border-radius"),                    //圆角半径
                tipGroupWidth: $tipsGroup.outerWidth(),
                tipGroupHeight: $tipsGroup.outerHeight(),
                tipWidth: $tip.outerWidth(),
                tipHeight: $tip.outerHeight(),
            };
        }

        //补算外边距
        details.pTop = details.pPosition.top + details.pMarginTop;
        details.pLeft = details.pPosition.left + details.pMarginLeft;
        details.pPositionFix = {
            top: details.pTop,
            left: details.pLeft,
        }

        //tips元素position阈值，大于该阈值，tips会超出父元素
        details.topThreshold = details.pHeight - details.tipGroupHeight;
        details.leftThreshold = details.pWidth - details.tipGroupWidth;

        this.elementDetails = details;

        this.unsetInitPosition();

        return this.elementDetails;
    };

    tips.prototype.getPositionClass = function(myPosition) {
        var positionClass = {};

        if(!this.options.parentElement || this.backup._pElem.is('body')) {
            positionClass.tipClass = "tip-fixed ";      //注意空格
            positionClass.bgClass = "tip-bg-fixed ";

            if(typeof myPosition == "string") {
                switch(myPosition) {
                    case "top-left" :           //坐标在父元素的左上角位置
                    case "top-center" :         //坐标在父元素的上中位置
                    case "top-right" :          //坐标在父元素的左上角位置
                    case "center-left" :        //坐标在父元素的左中位置
                    case "middle" :             //坐标在父元素的中间位置
                    case "center-right" :       //坐标在父元素的右中位置
                    case "bottom-left" :        //坐标在父元素的下中位置
                    case "bottom-center" :      //坐标在父元素的下中位置
                    case "bottom-right" :       //坐标在父元素的下中位置
                        positionClass.tipClass = positionClass.tipClass + myPosition;
                        break;
                    case "default" :            //默认坐标在父元素的中间位置
                        positionClass.tipClass = positionClass.tipClass + "middle";
                        break;
                    default :                   //可支持自定义
                        positionClass.tipClass = positionClass.tipClass + myPosition;
                        break;
                }
            }
        }

        return positionClass;
    };

    //计算Tips位置，支持特殊定位，自定义像素级定位和百分比定位
    tips.prototype.getPositionStyle = function(myPosition) {
        var eleDetails = this.getElementDetails();

        var tipPosition = {         //tip的坐标
            top: "auto",
            bottom: "auto",
            left: "auto",
            right: "auto"
        };

        if((!this.options.parentElement || this.backup._pElem.is('body')) && typeof myPosition == "string") {
            return {};
        }

        //计算tip的坐标
        if(typeof myPosition == "string") {
            switch(myPosition) {
                case "top-left" :           //坐标在父元素的左上角位置
                    tipPosition.top = eleDetails.pTop + eleDetails.pBTWid;
                    tipPosition.left = eleDetails.pLeft + eleDetails.pBLWid;
                    break;
                case "top-center" :         //坐标在父元素的上中位置
                    tipPosition.top = eleDetails.pTop + eleDetails.pBTWid;
                    tipPosition.left = eleDetails.pLeft + (eleDetails.pWidth/2 + eleDetails.pBLWid - eleDetails.tipGroupWidth/2);
                    break;
                case "top-right" :          //坐标在父元素的左上角位置
                    tipPosition.top = eleDetails.pTop + eleDetails.pBTWid;
                    tipPosition.left = eleDetails.pLeft + (eleDetails.pBLWid + eleDetails.pWidth) - eleDetails.tipGroupWidth;
                    break;
                case "center-left" :        //坐标在父元素的左中位置
                    tipPosition.top = eleDetails.pTop + (eleDetails.pHeight/2 + eleDetails.pBTWid - eleDetails.tipGroupHeight/2);
                    tipPosition.left = eleDetails.pLeft + eleDetails.pBLWid;
                    break;
                case "middle" :             //坐标在父元素的中间位置
                    tipPosition.top = eleDetails.pTop + (eleDetails.pHeight/2 + eleDetails.pBTWid - eleDetails.tipGroupHeight/2);
                    tipPosition.left = eleDetails.pLeft + (eleDetails.pWidth/2 + eleDetails.pBLWid - eleDetails.tipGroupWidth/2);
                    break;
                case "center-right" :       //坐标在父元素的右中位置
                    tipPosition.top = eleDetails.pTop + (eleDetails.pHeight/2 + eleDetails.pBTWid - eleDetails.tipGroupHeight/2);
                    tipPosition.left = eleDetails.pLeft + (eleDetails.pBLWid + eleDetails.pWidth) - eleDetails.tipGroupWidth;
                    break;
                case "bottom-left" :        //坐标在父元素的下中位置
                    tipPosition.top = eleDetails.pTop + (eleDetails.pBTWid + eleDetails.pHeight) - eleDetails.tipGroupHeight;
                    tipPosition.left = eleDetails.pLeft + eleDetails.pBLWid;
                    break;
                case "bottom-center" :      //坐标在父元素的下中位置
                    tipPosition.top = eleDetails.pTop + (eleDetails.pBTWid + eleDetails.pHeight) - eleDetails.tipGroupHeight;
                    tipPosition.left = eleDetails.pLeft + (eleDetails.pWidth/2 + eleDetails.pBLWid - eleDetails.tipGroupWidth/2);
                    break;
                case "bottom-right" :       //坐标在父元素的下中位置
                    tipPosition.top = eleDetails.pTop + (eleDetails.pBTWid + eleDetails.pHeight) - eleDetails.tipGroupHeight;
                    tipPosition.left = eleDetails.pLeft + (eleDetails.pBLWid + eleDetails.pWidth) - eleDetails.tipGroupWidth;
                    break;
                default :                   //默认坐标在父元素的中间位置
                    tipPosition.top = eleDetails.pTop + (eleDetails.pHeight/2 + eleDetails.pBTWid - eleDetails.tipGroupHeight/2);
                    tipPosition.left = eleDetails.pLeft + (eleDetails.pWidth/2 + eleDetails.pBLWid - eleDetails.tipGroupWidth/2);
                    break;
            }
        }else {     //自定义坐标，支持百分比
            var regNum = /^[\-, \+]?\d+(\.\d+)?([e,E][+-]?\d+)?$/;
            var regPer = /^[\-, \+]?((\d+\.?\d*)|(\d*\.\d+))([e,E][+-]?\d+)?\%$/;

            /*if(myPosition.hasOwnProperty('top') && !myPosition.hasOwnProperty('bottom') && this.isEmptyNum(myPosition.top)) myPosition.top = 0;
            if(myPosition.hasOwnProperty('bottom') && this.isEmptyNum(myPosition.bottom)) myPosition.bottom = 0;
            if(myPosition.hasOwnProperty('left') && !myPosition.hasOwnProperty('right') && this.isEmptyNum(myPosition.left)) myPosition.left = 0;
            if(myPosition.hasOwnProperty('right') && this.isEmptyNum(myPosition.right)) myPosition.right = 0;*/

            if(myPosition.hasOwnProperty('top') && regNum.test(myPosition.top)) {
                // tipPosition.top = eleDetails.pTop + eleDetails.pBTWid + parseFloat(myPosition.top);
                tipPosition.top = this.numAdds(eleDetails.pTop, eleDetails.pBTWid, parseFloat(myPosition.top));
            }else if(myPosition.hasOwnProperty('top') && regPer.test(myPosition.top)) {
                // var top = (eleDetails.pHeight - eleDetails.tipGroupHeight) * parseFloat(myPosition.top)/100;
                // tipPosition.top = eleDetails.pTop + eleDetails.pBTWid + top;
                var top = this.numMul(this.numSub(eleDetails.pHeight, eleDetails.tipGroupHeight), this.numDiv(parseFloat(myPosition.top), 100));
                tipPosition.top = this.numAdds(eleDetails.pTop, eleDetails.pBTWid, top);
            }else if(myPosition.hasOwnProperty('bottom') && regNum.test(myPosition.bottom)) {
                // tipPosition.top = eleDetails.pTop + eleDetails.pBTWid + eleDetails.pHeight - eleDetails.tipGroupHeight - parseFloat(myPosition.bottom);
                tipPosition.top = this.numSubs(this.numAdds(eleDetails.pTop, eleDetails.pBTWid, eleDetails.pHeight), eleDetails.tipGroupHeight, parseFloat(myPosition.bottom));
            }else if(myPosition.hasOwnProperty('bottom') && regPer.test(myPosition.bottom)) {
                // var bottom = (eleDetails.pHeight - eleDetails.tipGroupHeight) * parseFloat(myPosition.bottom)/100;
                // tipPosition.top = eleDetails.pTop + eleDetails.pBTWid + eleDetails.pHeight - eleDetails.tipGroupHeight - bottom;
                var bottom = this.numMul(this.numSub(eleDetails.pTop , eleDetails.pBTWid), this.numDiv(parseFloat(myPosition.bottom), 100));
                tipPosition.top = this.numSubs(this.numAdds(eleDetails.pTop , eleDetails.pBTWid , eleDetails.pHeight), eleDetails.tipGroupHeight , bottom);
            }

            if(myPosition.hasOwnProperty('left') && regNum.test(myPosition.left)) {
                // tipPosition.left = eleDetails.pLeft + eleDetails.pBLWid + parseFloat(myPosition.left);
                tipPosition.left = this.numAdds(eleDetails.pLeft , eleDetails.pBLWid , parseFloat(myPosition.left));
            }else if(myPosition.hasOwnProperty('left') && regPer.test(myPosition.left)) {
                // var left = (eleDetails.pWidth - eleDetails.tipGroupWidth) * parseFloat(myPosition.left)/100;
                // tipPosition.left = eleDetails.pLeft + eleDetails.pBLWid + left;
                var left = this.numMul(this.numSub(eleDetails.pWidth , eleDetails.tipGroupWidth), this.numDiv(parseFloat(myPosition.left) , 100));
                tipPosition.left = this.numAdds(eleDetails.pLeft , eleDetails.pBLWid , left);
            }else if(myPosition.hasOwnProperty('right') && regNum.test(myPosition.right)) {
                // tipPosition.left = eleDetails.pLeft + eleDetails.pBLWid + eleDetails.pWidth - eleDetails.tipGroupWidth - parseFloat(position.right);
                tipPosition.left = this.numSubs(this.numAdds(eleDetails.pLeft , eleDetails.pBLWid , eleDetails.pWidth), eleDetails.tipGroupWidth , parseFloat(myPosition.right))
            }else if(myPosition.hasOwnProperty('right') && regPer.test(myPosition.right)) {
                // var right = (eleDetails.pWidth - eleDetails.tipGroupWidth) * parseFloat(myPosition.right)/100;
                // tipPosition.left = eleDetails.pLeft + eleDetails.pBLWid + eleDetails.pWidth - eleDetails.tipGroupWidth - right;
                var right = this.numMul(this.numSub(eleDetails.pWidth , eleDetails.tipGroupWidth), this.numDiv(parseFloat(myPosition.right) , 100));
                tipPosition.left = this.numSubs(this.numAdds(eleDetails.pLeft , eleDetails.pBLWid , eleDetails.pWidth), eleDetails.tipGroupWidth , right);
            }
        }

        //bottom 和 right 参数以父元素外为准，默认以父元素内为准
        if(typeof myPosition != "string" && !this.options.positionFix) {
            if(myPosition.hasOwnProperty('bottom')  && regNum.test(myPosition.bottom)) {
                tipPosition.top = this.numAdds(eleDetails.pTop, eleDetails.pHeight, eleDetails.pBTWid, eleDetails.pBBWid, parseFloat(myPosition.bottom));
            }else if(myPosition.hasOwnProperty('bottom') && regPer.test(myPosition.bottom)) {
                var pHeight = this.numAdds(eleDetails.pHeight, eleDetails.pBTWid, eleDetails.pBBWid);
                var bottom = this.numMul(pHeight, this.numDiv(parseFloat(myPosition.bottom), 100));
                tipPosition.top = this.numAdds(eleDetails.pTop, pHeight, bottom);
            }

            if(myPosition.hasOwnProperty('right')  && regNum.test(myPosition.right)) {
                tipPosition.left = this.numAdds(eleDetails.pLeft, eleDetails.pWidth, eleDetails.pBLWid, eleDetails.pBRWid, parseFloat(myPosition.right));
            }else if(myPosition.hasOwnProperty('right') && regPer.test(myPosition.right)) {
                var pWidth = this.numAdds(eleDetails.pWidth, eleDetails.pBLWid, eleDetails.pBRWid);
                var right = this.numMul(pWidth, this.numDiv(parseFloat(myPosition.right), 100));
                tipPosition.left = this.numAdds(eleDetails.pLeft, pWidth, right);
            }
        }

        return tipPosition;
    };

    tips.prototype.getPosition = function(myPosition) {
        var positionClass = this.getPositionClass(myPosition);
        var positionStyle = this.getPositionStyle(myPosition);
        var tipPosition = {
            class: positionClass,
            style: positionStyle,
        };

        return tipPosition;
    }

    //设置浮动参数。支持用户自定义。
    tips.prototype.setFloatOptions = function(cusFloatOptions) {
        //窗口发生变化时需要重新定义float
        //若不是首次设置，则还原当前状态
        var backupfloatOptions = {};
        if(this.floatOptions) {
            backupfloatOptions.status = this.floatOptions.status;
            backupfloatOptions.floatId = this.floatOptions.floatId;
        };

        //用户自定义
        if(this.options.float.cusFloatOptions) cusFloatOptions = this.options.float.cusFloatOptions;

        var floatOptions = $.extend(true, {}, tips.floatOptions, cusFloatOptions, backupfloatOptions);

        var eleDetails = this.getElementDetails();

        //设置最大最小值，一般最小值0，最大值视情况而定，若是一般情况（px）则为元素的最大阈值，如是百分比，则为100%
        floatOptions.xMinThreshold = !this.isEmptyNum(floatOptions.xMinThreshold)? floatOptions.xMinThreshold : 0;
        floatOptions.xMaxThreshold = !this.isEmptyNum(floatOptions.xMaxThreshold)? floatOptions.xMaxThreshold : eleDetails.leftThreshold;
        floatOptions.yMinThreshold = !this.isEmptyNum(floatOptions.yMinThreshold)? floatOptions.yMinThreshold : 0;
        floatOptions.yMaxThreshold = !this.isEmptyNum(floatOptions.yMaxThreshold)? floatOptions.yMaxThreshold : eleDetails.topThreshold;

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
        for(var key in cusFloatStatus) {
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

        for(var key in floatStatus) {
            this.backup._floatStatus[key] = floatStatus[key];
        }

        var offsetType = floatOptions.hasOwnProperty('offsetType')? floatOptions.offsetType : '';

        //请务必设置floatPosition，否则不生效
        this.monitor.floatPosition = {
            top: floatStatus.top + offsetType,
            left: floatStatus.left + offsetType,
        }
    }

    //默认浮动方式。用户自定义浮动方法，可参考该方法。
    tips.prototype.floatTypeDefault = function() {
        var _this = this;

        var cusFloatOptions = {
            top: 0,
            left: 0,
            status: true,
            xOffsetLen: 0.0005,
            yOffsetLen: 0.0005,
            delay: 1,
        };

        var cusFloatStatus = {
            top: 0,
            left: 0,
        };

        var floatOptions = this.setFloatOptions(cusFloatOptions);
        var floatStatus = this.getfloatStatus(cusFloatStatus);

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
        var _this = this;

        var cusFloatOptions = {
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
        
        var cusFloatStatus = {
            top: 0,
            left: 0,
        };

        var floatOptions = this.setFloatOptions(cusFloatOptions);
        var floatStatus = this.getfloatStatus(cusFloatStatus);

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
        var _this = this;

        var cusFloatOptions = {
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

        var cusfloatStatus = {
            top: 0,
            left: 0,
        };

        var floatOptions = this.setFloatOptions(cusFloatOptions);
        var floatStatus = this.getfloatStatus(cusfloatStatus);

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
        var type = this.options.float.type;
        var floatFun = 'floatType' + type.slice(0, 1).toUpperCase() + type.slice(1);
        if(this[floatFun]) {
            this[floatFun]();
        }else {
            this.floatTypeDefault();
        }
    };

    tips.prototype.floatCallback = function() {
        var _this = this;
        var $tip = _this.backup._tElem;
        var hoverIn = function() {
            if(_this.floatOptions.floatId) clearInterval(_this.floatOptions.floatId);
        }
        var hoverOut = function() {
            _this.setFloatPosition();
        }
        $tip.unbind('mouseenter').unbind('mouseleave');
        $tip.hover(hoverIn, hoverOut);

        _this.options.float.cusFloatCallback.call(_this);
    };

    tips.prototype.setFloatPosition = function() {
        var _this = this;
        var $tip = _this.backup._tElem;
        var $tipsGroup = this.backup._tgElem;
        var $pElem = _this.backup._pElem;

        $tipsGroup.css({display: 'none'});

        Object.defineProperty(_this.monitor, 'floatPosition', {
            get:function(){
                return floatPosition;
            },
            set:function(newValue){
                floatPosition = newValue;
                var tipPosition = _this.getPosition(floatPosition);
                $tipsGroup.addClass(tipPosition.class.tipClass);
                $tipsGroup.css(tipPosition.style);
                $tipsGroup.css({display: 'block'});
            }
        });

        if(_this.options.float.cusFloatFun) {
            _this.options.float.cusFloatFun.call(_this);
        }else {
            _this.setFloatType();
        }

        _this.floatCallback();
    };

    tips.prototype.setTipsPosition = function() {
        var $tip = this.backup._tElem;
        var $tipsGroup = this.backup._tgElem;
        var $pElem = this.backup._pElem;

        if(this.options.position !== 'float') {
            var tipPosition = this.getPosition(this.options.position);
            $tipsGroup.addClass(tipPosition.class.tipClass);
            $tipsGroup.css(tipPosition.style);
        }else {
            this.setFloatPosition();
        }
    };

    tips.prototype.setBgPosition = function() {
        if(!this.options.background || !this.backup._bgElem) return false;
        var $bg = this.backup._bgElem;

        if(!this.options.parentElement || this.backup._pElem.is('body')) {
            var positionClass = this.getPositionClass(this.options.position);
            $bg.addClass(positionClass.bgClass);
        }else {
            var eleDetails = this.getElementDetails();
            $bg.css(eleDetails.pPositionFix);
            $bg.css({
                width: eleDetails.pOuterWidth,
                height: eleDetails.pOuterHeight
            });
            $bg.css("border-radius", eleDetails.pborRadius);
        }
    };

    //初始化Tips位置，目的在于可以获得Tips 的真实宽度高度
    tips.prototype.setInitPosition = function() {
        $tipsGroup = this.backup._tgElem;
        $tipsGroup.addClass('tip-init');
    }

    //初始化Tips位置后必须去除
    tips.prototype.unsetInitPosition = function() {
        $tipsGroup = this.backup._tgElem;
        $tipsGroup.removeClass('tip-init');
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
        var options = this.options;
        this.backup._pElem = this.getParentElem(options);
        this.backup._tgElem = this.getTipsGroup(options);
        this.backup._tcElem = this.getTipsContainer(options);
        this.backup._bgElem = this.renderTipsBg(options);
        this.backup._tElem = this.renderTipsBody(options);
        this.setPosition();
    };

    tips.prototype.in = function() {
        var $tip = this.backup._tElem;
        var $bg = this.backup._bgElem;
        
        setTimeout(function(){
            $tip.addClass('tip-in');
            if($bg) {
                $bg.addClass('tip-bg-in');
            }
        }, 1);
    }

    tips.prototype.out = function() {
        var $tip = this.backup._tElem;
        var $bg = this.backup._bgElem;
        var eleDetails = this.getElementDetails();
        var tipStyle = {
            height: eleDetails.tipHeight,
        };
        $tip.css(tipStyle);

        setTimeout(function(){
            $tip.addClass('tip-out');
            if($bg) {
                $bg.removeClass('tip-bg-in');
            }
        }, 100);
    }

    tips.prototype.listen = function() {
        var _this = this;

        _this.backup.bind = function(e) {
            _this.event = e;
            _this.setPosition();
            if(_this.eventTimeoutID) clearTimeout(_this.eventTimeoutID);
            _this.eventTimeoutID = setTimeout(function(){_this.event = null;}, 100);
        }
        $(window).bind("resize", _this.backup.bind);
        $(window).bind("scroll", _this.backup.bind);
    };

    tips.prototype.unlisten = function() {
        var _this = this;
        $(window).unbind("resize", _this.backup.bind);
        $(window).unbind("scroll", _this.backup.bind);
    };

    tips.prototype.clearTimeout = function() {
        if(this.floatOptions && this.floatOptions.hasOwnProperty('floatId') && this.floatOptions.floatId) clearInterval(this.floatOptions.floatId);
    }

    tips.prototype.deleteGroup = function() {

    }

    /**
     * 移除Tips 元素
     * @param    {Object}                 tipsObj [组删除其中某个Tips时，重新定位，避免大小改变而位置不齐]
     */
    tips.prototype.remove = function(tipsObj) {
        var _this = this;
        var $tipsContainer = _this.backup._tcElem;
        var $tipsGroup = _this.backup._tgElem;
        var $tips = _this.backup._tElem;
        var $bg = _this.backup._bgElem;

        _this.out();

        setTimeout(function(){
            $tips.remove();
            if($bg) {
                $bg.remove();
            }

            if($tipsGroup.children().length == 0) {
                $tipsGroup.remove();
            }else {
                if(tipsObj) _this.resetPosition.call(tipsObj);
                else _this.resetPosition();
            }

            if($tipsContainer.children().length == 0) {
                $tipsContainer.remove();
            }

            //取消监听
            _this.unlisten();

            _this.clearTimeout();

            _this.unsetGroup();
        }, 1000);
    }

    tips.prototype.destroy = function() {
        var _this = this;
        var $tips = _this.backup._tElem;
        var $bg = _this.backup._bgElem;

        if(this.options.destroy == 'auto') {      //自动销毁tips
            var delay = this.options.delay;
            setTimeout(function(){
                _this.remove();
            }, delay);
        }else if(this.options.destroy == 'manual') {     //手动销毁tips
            var $close = $("<div class='tip-close'>x</div>");
            $tips.append($close);

            $close.bind("click", function() {
                _this.remove();
            });
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
        this.in();
        this.listen();
        this.destroy();
        this.options.callback();        //公共回调函数
    };

    tips.prototype.isEmptyNum = function(num) {
        if(num !== 0 && !num) {     // "", null, undefined, NaN
            return true;
        }else {
            return false;
        }
    }

    // 两个浮点数求和
    tips.prototype.numAdd = function(num1,num2){
        var r1,r2,m;
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

    tips.prototype.numAdds = function(){
        var result = arguments[0];

        var i = 1;
        for(i; i < arguments.length; i++) {
            result = this.numAdd(result, arguments[i]);
        }

        return result;
    }
    
    // 两个浮点数相减
    tips.prototype.numSub = function(num1,num2){
        var r1,r2,m;
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

    tips.prototype.numSubs = function(){
        var result = arguments[0];

        var i = 1;
        for(i; i < arguments.length; i++) {
            result = this.numSub(result, arguments[i]);
        }

        return result;
    }

    // 两个浮点数相乘
    tips.prototype.numMul = function(num1,num2){
        var m=0,s1=num1.toString(),s2=num2.toString();
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

    tips.prototype.numMuls = function(){
        var result = arguments[0];

        var i = 1;
        for(i; i < arguments.length; i++) {
            result = this.numMul(result, arguments[i]);
        }

        return result;
    }

    // 两个浮点数相除
    tips.prototype.numDiv = function(num1,num2){
        var t1,t2,r1,r2;
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

    tips.prototype.numDivs = function(){
        var result = arguments[0];

        var i = 1;
        for(i; i < arguments.length; i++) {
            result = this.numDiv(result, arguments[i]);
        }

        return result;
    }

    tips.prototype.uniqueId = function() {
       var date = new Date();
       var y = date.getFullYear();
       var m = date.getMonth() + 1;
       m = m < 10 ? ('0' + m) : m;
       var d = date.getDate();
       d = d < 10 ? ('0' + d) : d;
       var h = date.getHours();
       var minute = date.getMinutes();
       var second = date.getSeconds();

       var randomStr = Math.random().toString(36).substr(2);

       return y + m + d + h + minute + second + randomStr;
    }

    tips.prototype.show = function(msg, type, parentElm) {
        var options = {
            parentElement: parentElm,
            type: type,
            msg: msg
        };
        this.init(options);
    };

    tips.prototype.normal = function(msg, icon, parentElm) {
        var options = {
            parentElement: parentElm,
            type: "normal",
            icon: icon? icon : 'info',
            msg: msg
        };
        this.init(options);
    };

    tips.prototype.info = function(msg, parentElm) {
        var options = {
            parentElement: parentElm,
            type: "info",
            msg: msg
        };
        this.init(options);
    };

    tips.prototype.success = function(msg, parentElm) {
        var options = {
            parentElement: parentElm,
            type: "success",
            msg: msg
        };
        this.init(options);
    };

    tips.prototype.error = function(msg, parentElm) {
        var options = {
            parentElement: parentElm,
            type: "error",
            msg: msg
        };
        this.init(options);
    };

    tips.prototype.warning = function(msg, parentElm) {
        var options = {
            parentElement: parentElm,
            type: "warning",
            msg: msg
        };
        this.init(options);
    };

    //jQuery 拓展静态方法 tips
    $.extend({
        tips: function(option) {
            return new tips(option);
        }
    });
   
    // 使用方法
    // 第一种方法，用于特殊需求定制
    // $.tips({
    //     parentElement: "",          //基准方位元素
    //     position: "middle",         //tips 位置，左上角，上居中，右上角，左居中，全居中，右居中，左下角，下居中，右下角，自定义相对位置，浮动
    //     positionFix: true,          //计算tip定位时，true - 考虑tip 宽高，false - 不考虑； 默认true。
    //     float: {                    //浮动参数，当position = 'float'时，可选；其余情况不需要 
    //         type: 'default',            //若不使用floatPositionFun, 可选择默认浮动方法
    //         cusFloatOptions: null,      //自定义浮动选项
    //         cusFloatStatus: null,       //自定义浮动初始状态，top，left等
    //         cusFloatFun: null,          //自定义浮动方法
    //         cusFloatCallback: $.noop,   //自定义浮动回调函数
    //     },
    //     group: {                    //分组，多个Tips 集合
    //         name: null,                 //分组名称
    //         len: 9999,                  //一个分组最大Tips个数
    //     },
    //     type: "normal",             //tips 样式, 支持自定义样式（传入class名称）
    //     limit: true,                //限制Tips 的大小
    //     icon: true,                 //是否显示icon
    //     background: false,          //false - 不显示遮罩层覆盖父元素， true - 显示遮罩层覆盖父元素
    //     destroy: "auto",            //auto - 自动销毁tips，manual - 不自动销毁tips，需手动销毁, never - 从不销毁tips
    //     delay: 2000,                //自动销毁tips 延时，单位：ms
    //     html: false,                //false - 文本类型信息，true - dom元素类型信息
    //     msg: [],                    //传入数组可换行
    //     htmlCallback: $.noop,       //dom元素回调函数，用于监听dom元素动作
    //     callback: $.noop            //公共回调函数
    // });

    // 第二种方法，用于简单调用
    // $.tips().success(msg, parentElement);
    
})(jQuery);
