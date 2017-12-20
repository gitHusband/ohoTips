/*tips 插件*/
(function ($) {
    function tips(options) {
        if(!options)
            return this;

        this.init(options);
    }

    tips.defaultValues = {
        parentElement: "",          //基准方位元素
        position : "middle",        //tips 位置，全居中，上居中，下居中，左居中，右居中，自定义相对位置
        type: "info",               //tips 样式
        background: false,          //false - 不显示遮罩层覆盖父元素， true - 显示遮罩层覆盖父元素
        destroy: true,              //true - 自动销毁tips，false - 不自动销毁tips，需手动销毁。
        delay: 1000,                //自动销毁tips 延时，单位：ms
        html: false,                //false - 文本类型信息，true - dom元素类型信息
        msg: [],                    //传入数组可换行
        htmlCallback: $.noop,       //dom元素回调函数，用于监听dom元素动作
        callback: $.noop            //公共回调函数
    };

    tips.backup = {
        _pElem : null,      //备份父元素
        _tElem : null,      //备份Tips 元素
        _bgElem: null       //备份遮罩层元素
    };

    tips.prototype.init = function(options) {
        this.userOptions = options;
        this.defaultOptions = tips.defaultValues;
        this.options = $.extend(true, {}, this.defaultOptions, this.userOptions);
        this.backup = tips.backup;
        this.initTips();
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

    tips.prototype.getStyle = function(type) {
        var tipClass = "tip";
        var bgClass = "tip-bg";
        var msgClass = "";
        switch(type) {
            case "success" :    msgClass = "tip-msg tip-msg-success";
                break;
            case "error" :  msgClass = "tip-msg tip-msg-error";
                break;
            case "warning" :    msgClass = "tip-msg tip-msg-warning";
                break;
            case "info" :   msgClass = "tip-msg tip-msg-info";
                break;
            default:    msgClass = type;        //用户自定义
                break;
        }

        var cssClass = {
            tip: tipClass,
            bg: bgClass,
            msg: msgClass
        };

        return cssClass;
    };

    tips.prototype.parentElem = function(options) {
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

    tips.prototype.renderTipsBody = function(options) {
        var $parent = this.backup._pElem;
        var $tip = $("<div class='"+options.class.tip+"'>");
        var $msgBox = $("<div class='"+options.class.msg+"'>");

        if(options.html) {       //msg 为dom元素
            var $msg = $(options.msg);
            $msgBox.append($msg);
            this.options.htmlCallback();
        }else {                 //msg 为文本信息
            if(typeof options.msg == "string") {
                //var $msg = $("<div>"+options.msg+"</div>");
                var $msg = $("<div>");
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

        $tip.append($msgBox);
        $parent.append($tip);       //先插入元素，然后才能获取宽度和高度

        return $tip;
    };

    tips.prototype.renderBg = function(options) {
        if(!options.background) return false;

        var $parent = this.backup._pElem;
        var $bg = $("<div class = '"+options.class.bg+"'>");
        $parent.append($bg);

        return $bg;
    };

    tips.prototype.getPositon = function (position, $parent, $tip) {
        var pPosition = $parent.position();
        var pMarginTop = parseFloat($parent.css("margin-top"));     //获取父元素外边距，position() 获取的值不算外边距
        var pMarginLeft = parseFloat($parent.css("margin-left"));
        var pWidth = $parent.innerWidth();              //width+padding
        var pHeight = $parent.innerHeight();            //height+padding
        var pBTWid = parseInt($parent.css("border-top-width"));         //top border
        //var pBBWid = parseInt($parent.css("border-bottom-width"));
        var pBLWid = parseInt($parent.css("border-left-width"));        //left border
        //var pBRWid = parseInt($parent.css("border-right-width"));

        var tipWidth = $tip.outerWidth();           //width+padding+border
        var tipHeight = $tip.outerHeight();         //height+padding+border

        var tipPosition = {         //tip的坐标
            top: "auto",
            bottom: "auto",
            left: "auto",
            right: "auto"
        };

        //补算外边距
        pPosition.top = pPosition.top + pMarginTop;
        pPosition.left = pPosition.left + pMarginLeft;

        //计算tip的坐标
        if(typeof position == "string") {
            switch(position) {
                case "middle" :             //坐标在父元素的中间位置
                    tipPosition.top = pPosition.top + (pHeight/2 + pBTWid - tipHeight/2);
                    tipPosition.left = pPosition.left + (pWidth/2 + pBLWid - tipWidth/2);
                    break;
                case "top" :                //坐标在父元素的上中位置
                    tipPosition.top = pPosition.top + pBTWid;
                    tipPosition.left = pPosition.left + (pWidth/2 + pBLWid - tipWidth/2);
                    break;
                case "bottom" :             //坐标在父元素的下中位置
                    tipPosition.top = pPosition.top + (pBTWid + pHeight) - tipHeight;
                    tipPosition.left = pPosition.left + (pWidth/2 + pBLWid - tipWidth/2);
                    break;
                case "left" :               //坐标在父元素的左中位置
                    tipPosition.top = pPosition.top + (pHeight/2 + pBTWid - tipHeight/2);
                    tipPosition.left = pPosition.left + pBLWid;
                    break;
                case "right" :              //坐标在父元素的右中位置
                    tipPosition.top = pPosition.top + (pHeight/2 + pBTWid - tipHeight/2);
                    tipPosition.left = pPosition.left + (pBLWid + pWidth) - tipWidth;
                    break;
                default :                   //默认坐标在父元素的中间位置
                    tipPosition.top = pPosition.top + (pHeight/2 + pBTWid - tipHeight/2);
                    tipPosition.left = pPosition.left + (pWidth/2 + pBLWid - tipWidth/2);
                    break;
            }
        }else {     //自定义坐标
            if( !isNaN(position.top)) {
                tipPosition.top = pPosition.top + pBTWid + position.top;
            }else if( !isNaN(position.bottom)) {
                tipPosition.top = pPosition.top + pBTWid + pHeight - tipHeight - position.bottom;
            }

            if( !isNaN(position.left)) {
                tipPosition.left = pPosition.left + pBLWid + position.left;
            }else if( !isNaN(position.right)) {
                tipPosition.left = pPosition.left + pBLWid + pWidth - tipWidth - position.right;
            }
        }

        return tipPosition;
    };

    tips.prototype.setTipsPosition = function() {
        var $tip = this.backup._tElem;
        var tipPosition = this.getPositon(this.options.position, this.backup._pElem, $tip);
        $tip.css(tipPosition);
    };

    tips.prototype.setBgPosition = function() {
        if(!this.options.background || !this.backup._bgElem) return false;
        var $bg = this.backup._bgElem;
        var $parent = this.backup._pElem;
        var pPosition = $parent.position();
        var pMarginTop = parseFloat($parent.css("margin-top"));     //获取父元素外边距，position() 获取的值不算外边距
        var pMarginLeft = parseFloat($parent.css("margin-left"));
        var pWidth = $parent.outerWidth();
        var pHeight = $parent.outerHeight();
        var pborRadius = $parent.css("border-radius");  //圆角半径

        //补算外边距
        pPosition.top = pPosition.top + pMarginTop;
        pPosition.left = pPosition.left + pMarginLeft;
        $bg.css(pPosition);
        $bg.css({
            width: pWidth,
            height: pHeight
        });
        $bg.css("border-radius", pborRadius);
    };

    tips.prototype.setPosition = function() {
        this.setTipsPosition();
        this.setBgPosition();
    };

    tips.prototype.destroy = function() {
        var _this = this;
        var $tips = _this.backup._tElem;
        var $bg = _this.backup._bgElem;

        if(this.options.destroy) {      //自动销毁tips
            var delay = this.options.delay;
            setTimeout(function(){
                $tips.fadeOut( "slow", function() {
                    $(this).remove();
                    //取消监听
                    _this.unlisten();
                });

                if($bg)
                    $bg.fadeOut( "slow", function() {
                        $(this).remove();
                    });
            }, delay);
        }else {     //手动销毁tips
            var $close = $("<div class='tip-close'>x</div>");
            $tips.append($close);

            $close.bind("click", function() {
                $tips.fadeOut( "slow", function() {
                    $(this).remove();
                    //取消监听
                    _this.unlisten();
                });

                if($bg)
                    $bg.fadeOut( "slow", function() {
                        $(this).remove();
                    });
            });
        }

    };

    tips.prototype.listen = function() {
        var _this = this;
        _this.backup.bind = function() {
            _this.setPosition();
        };
        $(window).bind("resize", _this.backup.bind);
        $(window).bind("scroll", _this.backup.bind);
    };
    tips.prototype.unlisten = function() {
        var _this = this;
        $(window).unbind("resize", _this.backup.bind);
        $(window).unbind("scroll", _this.backup.bind);
    };

    tips.prototype.render = function(options) {
        this.backup._pElem = this.parentElem(options);
        this.backup._bgElem = this.renderBg(options);
        this.backup._tElem = this.renderTipsBody(options);
        this.setPosition();
        this.listen();
    };

    tips.prototype.initTips = function() {
        this.initMsg();
        this.options.class = this.getStyle(this.options.type);      //增加class 属性
        this.render(this.options);
        this.destroy();
        this.options.callback();    //公共回调函数
    };

    tips.prototype.show = function(parentElm, type, msg) {
        var options = {
            parentElement: parentElm,
            type: type,
            msg: msg
        };
        this.init(options);
    };

    tips.prototype.info = function(parentElm, msg) {
        var options = {
            parentElement: parentElm,
            type: "info",
            msg: msg
        };
        this.init(options);
    };

    tips.prototype.success = function(parentElm, msg) {
        var options = {
            parentElement: parentElm,
            type: "success",
            msg: msg
        };
        this.init(options);
    };

    tips.prototype.error = function(parentElm, msg) {
        var options = {
            parentElement: parentElm,
            type: "error",
            msg: msg
        };
        this.init(options);
    };

    tips.prototype.warning = function(parentElm, msg) {
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


    //使用方法
    /* 第一种方法，用于特殊需求定制
    $.tips({
        parentElement: "groupForm",         //基准方位元素(默认 body元素)
        position: "middle",                 //tips 位置(默认 全居中) - 全居中"middle"，上居中(top)，下居中(bottom)，左居中(left)，右居中(right)，自定义相对位置({top:0, left:0 ...})
        type: "info",                       //tips 样式(默认 info)
        background: true,                   //背景（默认 false）false - 不显示背景覆盖父元素， true - 显示背景覆盖父元素
        destroy: false,                     //销毁tips（默认 true）true - 自动销毁tips，false - 不自动销毁tips，需手动销毁。
        delay: 5000,                        //自动销毁tips 延时，单位：ms（默认 1000ms）
        html: true,                         //false - 文本类型信息，true - dom元素类型信息
        /!*msg: [                           //tips 显示信息，传入数组可换行
         "测试新增jQuery静态方法",
         "测试多行"
         ]*!/
        msg: "<button id='testBtn11' type='button' class='btn btn-danger'>HTML</button>",
        callback: function() {              //公共回调函数
            $("#testBtn21").on("click", function() {
                console.log('htmlCallback');
            })
        }
    });
    */

    /* 第二种方法，用于简单调用
    $.tips().success(parentElement, msg);
    */
})(jQuery);
