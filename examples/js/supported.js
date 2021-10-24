// 需要先引入 ohoTips.js
let ohoTips = oho.ohoTips;
let ohoTipsPrototype = oho.ohoTipsPrototype;

var bodyElement = '';
var defConfingElement = "#box-def-config";
var baseElement = "#box-parent";
var baseElementOuter = "#box-outer";
var baseElementFloat = "#box-float";
var baseElementGroup = "#box-group";
var baseElementAnimation = '#box-animation';

function defConfig() {
    var defConfigHelpTips = null;
    var showDefConfigHelp = function(message, parentElement) {
        message = message || '单击一下，固定住弹框不缩小';
        destroyDefConfigHelp();
        defConfigHelpTips = ohoTips({
            baseElement: defConfigIconBox,                          //基准元素，可接受其它选择器，如id, class
            parentElement: parentElement || "#box-def-config",      //Tips 元素父元素
            position: "center-right",                               //Tips显示位置，基准元素中右位置
            direction: 'outer',                                     //Tips 方向, 基准元素外围
            type: 'info',
            icon: false,
            symbol: 'triangle',
            delay: 3000,
            message: message,
        });
    }
    var destroyDefConfigHelp = function() {
        if(defConfigHelpTips) {
            defConfigHelpTips.destroy();
            defConfigHelpTips = null;
        }
    }
    var resetPositionDefConfigHelp = function() {
        if(defConfigHelpTips) {
            defConfigHelpTips.resetPosition();
        }
    }
    var showDefConfigClickMessage = function(message) {
        ohoTips({
            baseElement: '#box-def-config',             //基准元素id，可接受其它选择器，如class
            position: "top-center",                     //Tips显示位置，基准元素右上角
            type: 'success',
            delay: 3000,
            message: message,
        });
    }

    setTimeout(function(){
        showDefConfigHelp([
            "你可以试试这里，配置全局参数"
        ], "body");
    }, 10000);

    var isFixedSize = false;
    var iconBox = document.querySelector('.icon-box');
    var defConfigIconBox = document.querySelector("#def-config-icon-box");
    defConfigIconBox.onmouseenter = function() {
        setTimeout(showDefConfigHelp, 1000);
    }
    document.querySelector(defConfingElement).onmouseleave = function() {
        setTimeout(resetPositionDefConfigHelp, 1000);
    }
    iconBox.onclick = function() {
        if(!isFixedSize) {
            document.querySelector(defConfingElement).classList.add('box-def-config-fixed');
            document.querySelector("#def-config-icon-box").classList.add('active');
            isFixedSize = true;
        }else {
            document.querySelector(defConfingElement).classList.remove('box-def-config-fixed');
            document.querySelector("#def-config-icon-box").classList.remove('active');
            isFixedSize = false;
        }
    }
    var btnDefParent = document.querySelector('#def-parent');
    btnDefParent.onclick = function() {
        var options = {baseElement: ''};
        if(this.checked) {
            options.baseElement = this.value;

            showDefConfigClickMessage([
                '设置默认 baseElement: #box-def-config',
                '接下来生成的Tips 都将以 “Tips 全局配置” 框为基准',
                '请点击左侧 “!” 图标将此固定不缩小'
            ]);
        }
        ohoTipsPrototype.setDefOptions(options);
    }
    ohoTips().hoverTip({
        baseElement: btnDefParent.parentNode,
        parentElement: "#box-def-config",
        position: "top-center",
        direction: 'outer',
        type: 'warning',
        icon: false,
        destroy: 'never',
        message: [
            "单击设置 Tips 全局配置",
            "再次点击则恢复默认的全局配置"
        ],
    }, btnDefParent.parentNode);
    document.querySelector('#def-direction').onclick = function() {
        var options = {direction: 'inner'};
        if(this.checked) {
            options.direction = this.value;
        }
        ohoTipsPrototype.setDefOptions(options);
    }
    document.querySelector('#def-group').onclick = function() {
        var options = { group: { name: null } };
        if(this.checked) {
            options.group.name = this.value;
        }
        ohoTipsPrototype.setDefOptions(options);
    }
    document.querySelector('#def-offset').onclick = function() {
        var options = {};
        if(this.checked) {
            options = {
                offset: {
                    top: 10,
                    left: 10
                }
            }
        }else {
            options = {
                offset: {
                    top: null,
                    left: null
                }
            }
        }
        ohoTipsPrototype.setDefOptions(options);
    }
    document.querySelector('#def-symbol').onclick = function() {
        var options = {symbol: false};
        if(this.checked) {
            options.symbol = true;
        }
        ohoTipsPrototype.setDefOptions(options);
    }
    document.querySelector('#def-icon').onclick = function() {
        var options = {icon: false};
        if(this.checked) {
            options.icon = true;
        }
        ohoTipsPrototype.setDefOptions(options);
    }
    document.querySelector('#def-background').onclick = function() {
        var options = {background: false};
        if(this.checked) {
            options.background = true;
        }
        ohoTipsPrototype.setDefOptions(options);
    }
    document.querySelector('#def-shadow').onclick = function() {
        var options = {shadow: false};
        if(this.checked) {
            options.shadow = true;
        }
        ohoTipsPrototype.setDefOptions(options);
    }
    document.querySelector('#def-destroy').onclick = function() {
        var options = {destroy: 'auto'};
        if(this.checked) {
            options.destroy = this.value;
        }
        ohoTipsPrototype.setDefOptions(options);
    }
    document.querySelector('#def-animation-oho').onclick = function() {
        var options = {animation: { in: 'default', out: 'default' }};
        if(this.checked) {
            options.animation.in = this.value;
            options.animation.out = this.value;
        }
        ohoTipsPrototype.setDefOptions(options);
    }
    document.querySelector('#def-animation-gf').onclick = function() {
        var options = {animation: { in: 'default', out: 'default' }};
        if(this.checked) {
            options.animation.in = this.value;
            options.animation.out = this.value;
        }
        ohoTipsPrototype.setDefOptions(options);
    }
}

function clickDirection(cBox) {
    if(cBox.checked) {
        var dButtons = document.getElementsByName('directionBtn');
        for(var i=0; i<dButtons.length; i++) {
            dButtons[i].classList.remove("gray-2");
            dButtons[i].classList.add("green");
        }
    }else {
        var dButtons = document.getElementsByName('directionBtn');
        for(var i=0; i<dButtons.length; i++) {
            dButtons[i].classList.remove("green");
            dButtons[i].classList.add("gray-2");
        }
    }
}

function getCheckboxValue() {
    var checkboxValue = {bg: false, direction: 'inner', destroy: 'auto'};
    var bgCheckbox = document.getElementsByName("background");
    var directionCheckbox = document.getElementsByName("direction");
    var destroyCheckbox = document.getElementsByName("destroy");

    for(var i=0; i<bgCheckbox.length; i++) {
        if(bgCheckbox[i].checked) {
            checkboxValue.bg = bgCheckbox[i].value;
            break;
        }
    }

    for(var i=0; i<directionCheckbox.length; i++) {
        if(directionCheckbox[i].checked) {
            checkboxValue.direction = directionCheckbox[i].value;
            break;
        }
    }

    for(var i=0; i<destroyCheckbox.length; i++) {
        if(destroyCheckbox[i].checked) {
            checkboxValue.destroy = destroyCheckbox[i].value;
            break;
        }
    }

    console.log("--- checkboxValue is ", checkboxValue);
    return checkboxValue;
}

function tipDefault() {
    document.querySelector('#btn-body-top-left').onclick = function() {
        var message = '窗口左上角，类型：success';
        ohoTips({
            position: "top-left",               //Tips显示位置，窗口左上角
        })
    }
    document.querySelector('#btn-body-top-center').onclick = function() {
        var message = '窗口上居中，类型：success';
        var a = "0px 759.6px 377.2px 663.6px";
        ohoTips({
            position: "top-center",             //Tips示位置，窗口上居中
            type: "success",                    //显示的class，可接受自定义
        })
    }
    document.querySelector('#btn-body-top-right').onclick = function() {
        var message = '窗口右上角，类型：success';
        ohoTips({
            position: "top-right",              //Tips示位置，窗口右上角
            type: "success",                    //显示的class，可接受自定义
            message: message                    //Tips容
        })
    }
    document.querySelector('#btn-body-center-left').onclick = function() {
        var message = '窗口左居中，类型：warning';
        ohoTips({
            position: "center-left",
            type: "warning",
            message: message
        })
    }
    document.querySelector('#btn-body-middle').onclick = function() {
        var message = '窗口垂直居中，类型：normal';
        ohoTips({
            position: "middle",
            background: true,                   //显示遮罩层
            message: message,                   //Tips内容
        })
    }
    document.querySelector('#btn-body-center-right').onclick = function() {
        var message = '窗口右居中，类型：normal';
        ohoTips({
            position: "center-right",
            type: "info",
            message: message
        })
    }

    document.querySelector('#btn-body-bottom-left').onclick = function() {
        var message = '窗口左下角，类型：error';
        ohoTips({
            position: "bottom-left",
            type: "error",
            message: message
        })
    }
    document.querySelector('#btn-body-bottom-center').onclick = function() {
        var message = '窗口下居中，类型：error';
        ohoTips({
            position: "bottom-center",
            type: "error",
            message: message
        })
    }
    document.querySelector('#btn-body-bottom-right').onclick = function() {
        var message = '窗口右下角，类型：error';
        ohoTips({
            position: "bottom-right",
            type: "error",
            message: message
        })
    }

    document.querySelector('#btn-top-left').onclick = function() {
        var checkboxValue = getCheckboxValue();
        var message = '左上角，类型：success';
        ohoTips({
            baseElement: baseElement,           //基准元素，可接受其它选择器，如class
            position: "top-left",               //Tips示位置，基准元素左上角
            direction: checkboxValue.direction, //Tips方向, 默认inner
            type: "success",                    //显示的class，可接受自定义
            message: message                    //Tips容
        })
    }

    document.querySelector('#btn-top-center').onclick = function() {
        var checkboxValue = getCheckboxValue();
        var message = '上居中，类型：success';
        var jsonString = '{ "baseElement": "this", "position": "top-left", "direction": "outer", "type": "success", "icon": false, "destroy": "never", "html": true, "message": "html" }';
        jsonString = JSON.stringify(JSON.parse(jsonString), null, 2);
        var htmlJson = '<pre>'+jsonString+'</pre>';
        
        ohoTips({
            baseElement: baseElement,           //基准元素，可接受其它选择器，如class
            position: "top-center",             //Tips示位置，基准元素上居中
            direction: checkboxValue.direction, //Tips方向, 默认inner
            type: "success",                    //显示的class，可接受自定义
            icon: true,
            iconOptions: {                      
                position: 'top',                //Icon 位置
            },
            destroy: 'manual',
            message: message                            //Tips容
        })
    }

    document.querySelector('#btn-top-right').onclick = function() {
        var checkboxValue = getCheckboxValue();
        var message = '右上角，类型：success';
        ohoTips({
            baseElement: baseElement,           //基准元素，可接受其它选择器，如class
            position: "top-right",              //Tips示位置，基准元素右上角
            direction: checkboxValue.direction, //Tips方向, 默认inner
            type: "success",                    //显示的class，可接受自定义
            message: message                    //Tips容
        })
    }

    document.querySelector('#btn-center-left').onclick = function() {
        var checkboxValue = getCheckboxValue();
        var message = '左居中，类型：warning';
        ohoTips({
            baseElement: baseElement,
            position: "center-left",
            direction: checkboxValue.direction, //Tips方向, 默认inner
            type: "warning",
            icon: true,
            iconOptions: {                      
                position: 'left',
            },
            message: message
        })
    }
    document.querySelector('#btn-middle').onclick = function() {
        var checkboxValue = getCheckboxValue();
        var message = '垂直居中，类型：normal';
        ohoTips({
            baseElement: baseElement,
            position: "middle",
            direction: checkboxValue.direction, //Tips方向, 默认inner
            //type: "normal",                   //默认 normal
            background: true,
            icon: 'success',
            iconOptions: {                      
                position: 'top',                //Icon 位置
            },
            animation: {
                in: 'fold',
                out: 'fold'
            },
            message: message
        })
    }
    document.querySelector('#btn-center-right').onclick = function() {
        var checkboxValue = getCheckboxValue();
        var message = '右居中，类型：info';
        ohoTips({
            baseElement: baseElement,
            position: "center-right",
            direction: checkboxValue.direction, //Tips方向, 默认inner
            type: "info",
            icon: true,
            iconOptions: {                      
                position: 'right',
            },
            message: message
        })
    }

    document.querySelector('#btn-bottom-left').onclick = function() {
        var checkboxValue = getCheckboxValue();
        var message = '左下角，类型：error';
        ohoTips({
            baseElement: ".box-parent",         //基准元素class
            position: "bottom-left",
            direction: checkboxValue.direction, //Tips方向, 默认inner
            type: "error",
            message: message
        })
    }
    document.querySelector('#btn-bottom-center').onclick = function() {
        var checkboxValue = getCheckboxValue();
        var message = '下居中，类型：error';
        ohoTips({
            baseElement: ".box-parent",         //基准元素class
            position: "bottom-center",
            direction: checkboxValue.direction, //Tips方向, 默认inner
            type: "error",
            icon: true,
            iconOptions: {                      
                position: 'bottom',             //Icon 位置
            },
            message: message
        })
    }
    document.querySelector('#btn-bottom-right').onclick = function() {
        var checkboxValue = getCheckboxValue();
        var message = '右下角，类型：error';
        ohoTips({
            baseElement: ".box-parent",         //基准元素class
            position: "bottom-right",
            direction: checkboxValue.direction, //Tips方向, 默认inner
            type: "error",
            message: message
        })
    }
    
    document.querySelector('#btn-array-top').onclick = function() {
        var message = [                         //换行数组
            '生活就像海洋',
            '只有意志坚强的人才能到达彼岸'
        ];
        ohoTips({
            baseElement: baseElement,
            position: "top-center",
            type: "success",
            message: message
        })
    }
    document.querySelector('#btn-array-middle').onclick = function() {
        var message = [                         //换行数组
            '窗前明月光，',
            '疑似地上霜。',
            '举头望明月，',
            '低头思故乡。',
        ];
        ohoTips({
            baseElement: baseElement,
            position: "middle",
            type: "info",
            message: message
        })
    }
    document.querySelector('#btn-array-bottom').onclick = function() {
        var message = [                         //换行数组
            '警告',
            '吸烟有害健康！'
        ];
        ohoTips({
            baseElement: baseElement,
            position: "bottom-center",
            type: "error",
            message: message
        })
    }
    document.querySelector('#btn-delay').onclick = function() {
        var message = '3s 后销毁 Tip';
        ohoTips({
            baseElement: baseElement,
            position: "center-left",
            delay: 3000,                    //3s 后自动销毁
            message: message
        })
    }
    document.querySelector('#btn-destroy').onclick = function() {
        var message = '手动销毁 Tip';
        ohoTips({
            baseElement: baseElement,
            position: "middle",
            destroy: 'manual',              //手动销毁
            type: 'normal',
            icon: 'error',
            background: true,
            message: message
        })
    }
    var clickDesrtoyNever = false;
    var desrtoyNeverTip;
    document.querySelector('#btn-destroy-never').onclick = function() {
        clickDesrtoyNever = !clickDesrtoyNever;
        if(clickDesrtoyNever){
            var message = ['永不销毁 Tip', '再按一次销毁'];
            desrtoyNeverTip = ohoTips({
                baseElement: baseElement,
                position: "center-right",
                destroy: 'never',           //永不销毁
                icon: 'clock',
                message: message
            })
        }else{
            desrtoyNeverTip.destroy();
        }
    }
    document.querySelector('#btn-simple-1').onclick = function() {
        var message = [
            '简单调用 Tips 接口',
        ];
        var parent = baseElement;

        message[1] = "ohoTips().info(message, baseElement)";
        ohoTips().info(message, parent);     //这种方法调用方便，一般使用该类方法即可
        setTimeout(function () {
            message[1] = "ohoTips().success(message, baseElement)";
            ohoTips().success(message, parent);
        }, 1000);
        setTimeout(function () {
            message[1] = "ohoTips().error(message, baseElement)";
            ohoTips().error(message, parent);
        }, 2000);
        setTimeout(function () {
            message[1] = "ohoTips().warning(message, baseElement)";
            ohoTips().warning(message, parent);
        }, 3000);
        setTimeout(function () {
            message[1] = "ohoTips().normal(message, baseElement)";
            ohoTips().normal(message, 'success', parent);
        }, 4000);
        setTimeout(function () {
            message[1] = "ohoTips().show(message, \"info\", baseElement)";
            ohoTips().show(message, "info", parent);
        }, 5000);
    }
    document.querySelector('#btn-simple-2').onclick = function() {
        // 配置默认配置，是影响全局的，如果是临时修改记得重置回来
        ohoTipsPrototype.setDefOptions({
            type: "info",
            position: "top-center",
            offset: {                   //如果position 是对象如{tip: 0}，则一般不需要这个，如果是字符串，则可以酌情添加offset, 调整基准元素与Tips 的相对定位, 仅支持top，left
                top: 10,
                left: null
            },
        });
        var onlyMessage = [
            '以默认配置弹出消息，第二参数是可选配置对象',
            '建议配合 setDefOptions 使用',
        ];
        ohoTips('以默认配置弹出消息，第二参数可选配置');
        setTimeout(function () {
            onlyMessage[2] = "ohoTips(message)";
            ohoTips(onlyMessage);
        }, 2000);
        setTimeout(function () {
            onlyMessage[2] = "ohoTips(message, options)";
            ohoTips(onlyMessage, {
                type: "success"
            });

            // 重置默认配置
            ohoTipsPrototype.resetDefOptions();

        }, 4000);
    }
    document.querySelector('#btn-callback').onclick = function() {
        var message = 'Tips 生命周期函数，请看控制台log';
        ohoTips({
            baseElement: baseElement,
            position: "middle",
            destroy: 'manual',         //手动销毁
            background: true,
            message: message,
            events: {
                beforeCreated: function() {     //Tips 创建消息之前 触发
                    console.log("events.beforeCreated - Tips 创建消息之前 触发", this);
                },
                created: function() {           //Tips 创建消息之后 触发
                    console.log("events.created - Tips 创建消息之后 触发", this);
                },
                beforeShown: function() {
                    console.log("events.beforeShown - Tips 创建消息之后，展示之前 触发", this);
                },
                shown: function() {
                    console.log("events.shown - Tips 展示之后触发", this);
                },
                beforeDestroyed: function() {
                    console.log("events.beforeDestroyed - Tips 销毁之前触发", this);
                },
                destroyed: function() {
                    console.log("events.destroyed - Tips 销毁之后触发", this);
                },
            }
        })
    }

    document.querySelector('#btn-html-string').onclick = function() {
        var random = Math.round(Math.random()*Math.pow(10, 10));
        var randBtnId = "btn-tip-close"+random;
        var message = '<div class="box1" style="width: 160px">\n' +
            '        <h4 style="text-align: center">Html Tip 说明</h4>\n' +
            '        <p id="tip-content" style="text-indent:10px">设置选项html: true, message 选项传入html元素实体。</p>\n' +
            '        <div class="box-center"><button id="'+randBtnId+'" class="button black">隐藏 说明</button></div>\n' +
            '    </div>';

        ohoTips({
            baseElement: baseElement,
            position: "middle",
            type: "box-html",                   //自定义message 样式
            icon: false,
            destroy: 'manual',
            html: {
                param: true,                    //false - 文本类型信息，true - dom元素类型信息
                isContainerTransparent: true,   //false - Tips 容器不透明，true - Tips 容器透明
            },
            message: message,
            events: {
                beforeCreated: function() {     //Tips 创建消息之前 触发
                    console.log("events.beforeCreated - Tips 创建消息之前 触发", this);
                },
                created: function() {           //Tips 创建消息之后 触发
                    console.log("events.created - Tips 创建消息之后 触发, 为 Dom消息实体添加点击事件", this);

                    document.querySelector("#"+randBtnId).addEventListener("click", function() {
                        var $content = document.querySelector("#tip-content");
                        if($content.style.display != 'none') {
                            $content.style.display = 'none';
                            this.innerHTML = "显示 说明";
                        }else {
                            $content.style.display = 'block';
                            this.innerHTML = "隐藏 说明";
                        }
                    });
                },
            }
        })
    }
    document.querySelector('#btn-html-js').onclick = function() {
        var random = Math.round(Math.random()*Math.pow(10, 10));
        var randBtnId = "btn-tip-close"+random;
        var message = document.querySelector('#btn-html-js');

        ohoTips({
            baseElement: baseElement,
            position: "middle",
            type: "box-html",                   //自定义message 样式
            icon: false,
            destroy: 'manual',
            html: {
                param: true,                    //false - 文本类型信息，true - dom元素类型信息
                isContainerTransparent: true,   //false - Tips 容器不透明，true - Tips 容器透明
            },
            message: message,
            events: {
                destroyed: function() {  
                    console.log("events.destroyed - Tips 销毁消息之后 触发", this);

                    this.C.insertAfter(message, document.querySelector('#btn-html-string'));
                },
            }
        })
    }
    document.querySelector('#btn-html-jq').onclick = function() {
        var random = Math.round(Math.random()*Math.pow(10, 10));
        var randBtnId = "btn-tip-close"+random;
        var message = $('#btn-html-jq');

        ohoTips({
            baseElement: baseElement,
            position: "middle",
            type: "box-html",                   //自定义message 样式
            icon: false,
            destroy: 'manual',
            // background: true,
            html: {
                param: true,                    //false - 文本类型信息，true - dom元素类型信息
                isContainerTransparent: true,   //false - Tips 容器不透明，true - Tips 容器透明
            },
            message: message,
            events: {
                destroyed: function() {  
                    console.log("events.destroyed - Tips 销毁消息之后 触发", this);

                    this.C.insertAfter(message[0], document.querySelector('#btn-html-js'));
                },
            }
        })
    }

    var inputPosition = function() {
        var posTop = document.querySelector("#cus-top").value;
        var posLeft = document.querySelector("#cus-left").value;
        var posBottom = document.querySelector("#cus-bottom").value;
        var posRight = document.querySelector("#cus-right").value;

        var position = {};

        if(posBottom) {
            position.bottom = posBottom;
        }else if(posTop) {
            position.top = posTop;
        }else {
            position.top = 0;
        }

        if(posRight) {
            position.right = posRight;
        }else if(posLeft) {
            position.left = posLeft;
        }else {
            position.left = 0;
        }

        console.log("Position: ", position);

        return position;
    }

    document.querySelector('#btn-custom-normal').onclick = function() {
        var checkboxValue = getCheckboxValue();
        var position = inputPosition();
        var message = [
            '自定义位置 : ' + JSON.stringify(position),
            '普通定位方案，不计算Tips宽高，按照position数据来',
        ];

        ohoTips({
            baseElement: baseElement,
            position: position,
            direction: 'normal',
            background: checkboxValue.bg,
            delay: 2000,
            type: "normal",
            destroy: checkboxValue.destroy,
            message: message
        })
    }
    document.querySelector('#btn-custom-default').onclick = function() {
        var checkboxValue = getCheckboxValue();
        var position = inputPosition();
        var message = [
            '自定义位置 : ' + JSON.stringify(position),
            '内部(默认)定位方案，计算Tips 宽高，尽量使Tips 位于基准元素内部',
        ];

        ohoTips({
            baseElement: baseElement,
            position: position,
            // direction: 'inner',
            background: checkboxValue.bg,
            delay: 2000,
            type: "success",
            destroy: checkboxValue.destroy,
            message: message
        })
    }
    document.querySelector('#btn-custom-outside').onclick = function() {
        var checkboxValue = getCheckboxValue();
        var position = inputPosition();
        var message = [
            '自定义位置 : ' + JSON.stringify(position),
            '外部定位方案，计算Tips 宽高，尽量使Tips 位于基准元素外部'
        ];

        ohoTips({
            baseElement: baseElement,
            position: position,
            direction: 'outside',
            background: checkboxValue.bg,
            delay: 2000,
            type: "info",
            destroy: checkboxValue.destroy,
            message: message
        })
    }
    document.querySelector('#btn-custom-outer').onclick = function() {
        var checkboxValue = getCheckboxValue();
        var position = inputPosition();
        var message = [
            '自定义位置 : ' + JSON.stringify(position),
            '外围定位方案，计算Tips 宽高，尽量使Tips 位于基准元素外部',
            '当百分比为正数时，百分比基准是Tips元素',
            '当百分比为负数时，百分比基准是基准元素',
        ];

        ohoTips({
            baseElement: baseElement,
            position: position,
            direction: 'outer',
            background: checkboxValue.bg,
            delay: 2000,
            type: "error",
            icon: false,
            destroy: checkboxValue.destroy,
            message: message
        })
    }
}

function tipOuter() {
    var stringifyHtml = function(jsonString) {
        jsonString = JSON.stringify(JSON.parse(jsonString), null, 2);
        var html = '<pre>'+jsonString+'</pre>';

        return html;
    }

    var btnOuterTopLeft = document.querySelector('#btn-outer-top-left');
    btnOuterTopLeft.onclick = function() {
        var message = '左上角，类型：success';
        ohoTips({
            baseElement: baseElementOuter,          //基准元素，可接受其它选择器，如class
            position: "top-left",                   //Tips显示位置，基准元素左上角
            direction: 'outer',                     //Tips 方向, 默认inner
            icon: 'success',
            message: message                        //Tips内容
        });
    }
    var contentTopLeft;
    btnOuterTopLeft.onmouseenter = function() {
        var jsonString = '{ "baseElement": "this", "position": "top-left", "direction": "outer", "type": "success", "icon": false, "destroy": "never", "html": true, "message": "html" }';
        jsonString = JSON.stringify(JSON.parse(jsonString), null, 2);
        var html = '<pre>'+jsonString+'</pre>';
        contentTopLeft = ohoTips({
            baseElement: btnOuterTopLeft,           //基准元素，可接受其它选择器，如class
            position: "top-left",                   //Tips显示位置，基准元素左上角
            direction: 'outer',                     //Tips 方向, 默认inner
            type: 'success',
            symbol: true,
            icon: false,
            destroy: 'never',
            html: true,
            message: html,
        })
    }
    btnOuterTopLeft.onmouseleave = function() {
        if(contentTopLeft) {
            contentTopLeft.destroy();
        }
    }

    var btnOuterTopCenter = document.querySelector('#btn-outer-top-center');
    btnOuterTopCenter.onclick = function() {
        var checkboxValue = getCheckboxValue();
        var message = '上居中，类型：success';
        ohoTips({
            baseElement: baseElementOuter,      //基准元素，可接受其它选择器，如class
            position: "top-center",             //Tips显示位置，基准元素上居中
            direction: 'outer',                 //Tips 方向, 默认inner
            icon: 'success',
            iconOptions: {                      
                position: 'top',                //Icon 位置
            },
            destroy: 'manual',
            message: message                    //Tips内容
        })
    }
    ohoTips().hoverTip({
        baseElement: btnOuterTopCenter,         //基准元素，可接受其它选择器，如class
        position: "top-center",                 //Tips显示位置，基准元素左上角
        direction: 'outer',                     //Tips 方向, 默认inner
        type: 'success',
        icon: false,
        destroy: 'never',
        html: true,
        message: stringifyHtml('{ "baseElement": "this", "position": "top-center", "direction": "outer", "type": "success", "icon": false, "destroy": "never", "html": true, "message": "html" }'),
    }, btnOuterTopCenter);

    var btnOuterTopRight = document.querySelector('#btn-outer-top-right');
    btnOuterTopRight.onclick = function() {
        var message = '右上角，类型：success';
        ohoTips({
            baseElement: baseElementOuter,          //基准元素，可接受其它选择器，如class
            position: "top-right",                  //Tips显示位置，基准元素右上角
            direction: 'outer',                     //Tips 方向, 默认inner
            icon: 'success',
            iconOptions: {                      
                position: 'right',                  //Icon 位置
            },
            message: message                        //Tips内容
        })
    }
    ohoTips().hoverTip({
        baseElement: btnOuterTopRight,              //基准元素，可接受其它选择器，如class
        position: "top-right",                      //Tips显示位置，基准元素左上角
        direction: 'outer',                         //Tips 方向, 默认inner
        type: 'success',
        icon: false,
        destroy: 'never',
        html: true,
        message: stringifyHtml('{ "baseElement": "this", "position": "top-right", "direction": "outer", "type": "success", "icon": false, "destroy": "never", "html": true, "message": "html" }'),
    }, btnOuterTopRight);

    var btnOuterCenterLeft = document.querySelector('#btn-outer-center-left');
    btnOuterCenterLeft.onclick = function() {
        var checkboxValue = getCheckboxValue();
        var message = '左居中，类型：warning';
        ohoTips({
            baseElement: baseElementOuter,
            position: "center-left",
            direction: 'outer',
            type: "warning",
            message: message
        })
    }
    ohoTips().hoverTip({
        baseElement: btnOuterCenterLeft,        //基准元素，可接受其它选择器，如class
        position: "center-left",                //Tips显示位置，基准元素左上角
        direction: 'outer',                     //Tips 方向, 默认inner
        type: "warning",                        //显示的class，可接受自定义
        icon: false,
        destroy: 'never',
        html: true,
        message: stringifyHtml('{ "baseElement": "this", "position": "center-left", "direction": "outer", "type": "warning", "icon": false, "destroy": "never", "html": true, "message": "html" }'),
    }, btnOuterCenterLeft);

    var btnOuterMiddle = document.querySelector('#btn-outer-middle');
    btnOuterMiddle.onclick = function() {
        var checkboxValue = getCheckboxValue();
        var message = '垂直居中，类型：normal';
        ohoTips({
            baseElement: baseElementOuter,
            position: "middle",
            direction: 'outer',
            background: true,
            icon: 'info',
            iconOptions: {                      
                position: 'top',                //Icon 位置
            },
            animation: {
                in: 'fold',
                out: 'fold'
            },
            message: message
        })
    }
    ohoTips().hoverTip({
        baseElement: btnOuterMiddle,            //基准元素，可接受其它选择器，如class
        position: "top-center",                 //Tips显示位置，基准元素右上角
        direction: 'outer',                     //Tips 方向, 在基准元素外围
        type: "info",
        destroy: 'never',
        html: true,
        message: stringifyHtml('{ "baseElement": "this", "position": "top-center", "direction": "outer", "type": "info", "destroy": "never", "html": true, "message": "html" }'),
    }, btnOuterMiddle);

    var btnOuterCenterRight = document.querySelector('#btn-outer-center-right');
    btnOuterCenterRight.onclick = function() {
        var checkboxValue = getCheckboxValue();
        var message = '右居中，类型：info';
        ohoTips({
            baseElement: baseElementOuter,
            position: "center-right",
            direction: 'outer',                 //Tips 方向, 默认inner
            type: "info",
            icon: true,
            iconOptions: {                      
                position: 'right',
            },
            message: message
        })
    }
    ohoTips().hoverTip({
        baseElement: btnOuterCenterRight,       //基准元素，可接受其它选择器，如class
        position: "center-right",               //Tips显示位置，基准元素左上角
        direction: 'outer',                     //Tips 方向, 默认inner
        type: "info",
        destroy: 'never',
        html: true,
        message: stringifyHtml('{ "baseElement": "this", "position": "center-right", "direction": "outer", "type": "info", "destroy": "never", "html": true, "message": "html" }'),
    }, btnOuterCenterRight);

    var btnOuterBottomLeft = document.querySelector('#btn-outer-bottom-left');
    btnOuterBottomLeft.onclick = function() {
        var checkboxValue = getCheckboxValue();
        var message = '左下角，类型：error';
        ohoTips({
            baseElement: baseElementOuter,
            position: "bottom-left",
            direction: 'outer',
            type: "error",
            message: message
        })
    }
    ohoTips().hoverTip({
        baseElement: btnOuterBottomLeft,            //基准元素，可接受其它选择器，如class
        position: "bottom-left",                    //Tips显示位置，基准元素左上角
        direction: 'outer',                         //Tips 方向, 默认inner
        type: 'error',
        destroy: 'never',
        html: true,
        message: stringifyHtml('{ "baseElement": "this", "position": "bottom-left", "direction": "outer", "destroy": "never", "html": true, "message": "html" }'),
    }, btnOuterBottomLeft);

    var btnOuterBottomCenter = document.querySelector('#btn-outer-bottom-center');
    btnOuterBottomCenter.onclick = function() {
        var checkboxValue = getCheckboxValue();
        var message = '下居中，类型：error';
        ohoTips({
            baseElement: baseElementOuter,
            position: "bottom-center",
            direction: 'outer',
            type: "error",
            icon: true,
            iconOptions: {                      
                position: 'bottom',
            },
            message: message
        })
    }
    ohoTips().hoverTip({
        baseElement: btnOuterBottomCenter,              //基准元素，可接受其它选择器，如class
        position: "bottom-center",                      //Tips显示位置，基准元素左上角
        direction: 'outer',                             //Tips 方向, 默认inner
        type: 'error',
        destroy: 'never',
        html: true,
        message: stringifyHtml('{ "baseElement": "this", "position": "bottom-center", "direction": "outer", "destroy": "never", "html": true, "message": "html" }'),
    }, btnOuterBottomCenter);

    var btnOuterBottomRight = document.querySelector('#btn-outer-bottom-right');
    btnOuterBottomRight.onclick = function() {
        var checkboxValue = getCheckboxValue();
        var message = '右下角，类型：error';
        ohoTips({
            baseElement: baseElementOuter,
            position: "bottom-right",
            direction: 'outer',
            type: "error",
            icon: true,
            iconOptions: {                      
                position: 'right',
            },
            message: message
        })
    }
    ohoTips().hoverTip({
        baseElement: btnOuterBottomRight,           //基准元素，可接受其它选择器，如class
        position: "bottom-right",                   //Tips显示位置，基准元素左上角
        direction: 'outer',                         //Tips 方向, 默认inner
        destroy: 'never',
        icon: 'error',
        iconOptions: {                      
            position: 'right',                      //Icon 位置
        },
        html: true,
        message: stringifyHtml('{ "baseElement": "this", "position": "bottom-right", "direction": "outer", "destroy": "never", "icon": "error", "iconOptions": { "position": "right" }, "html": true, "message": "html" }'),
    }, btnOuterBottomRight);

    var btnOuterLeftTop = document.querySelector('#btn-outer-left-top');
    btnOuterLeftTop.onclick = function() {
        var checkboxValue = getCheckboxValue();
        var message = '上左角，类型：error';
        ohoTips({
            baseElement: baseElementOuter,
            position: "left-top",
            direction: 'outer',
            type: "error",
            icon: true,
            iconOptions: {                      
                position: 'right',
            },
            message: message
        })
    }
    ohoTips().hoverTip({
        baseElement: btnOuterLeftTop,           //基准元素，可接受其它选择器，如class
        position: "left-top",                   //Tips显示位置，基准元素左上角
        direction: 'outer',                     //Tips 方向, 默认inner
        destroy: 'never',
        icon: 'error',
        iconOptions: {                      
            position: 'right',                  //Icon 位置
        },
        html: true,
        message: stringifyHtml('{ "baseElement": "this", "position": "left-top", "direction": "outer", "destroy": "never", "icon": "error", "iconOptions": { "position": "right" }, "html": true, "message": "html" }'),
    }, btnOuterLeftTop);

    var btnOuterLeftBottom = document.querySelector('#btn-outer-left-bottom');
    btnOuterLeftBottom.onclick = function() {
        var checkboxValue = getCheckboxValue();
        var message = '下左角，类型：error';
        ohoTips({
            baseElement: baseElementOuter,
            position: "left-bottom",
            direction: 'outer',
            type: "error",
            icon: true,
            iconOptions: {                      
                position: 'right',
            },
            message: message
        })
    }
    ohoTips().hoverTip({
        baseElement: btnOuterLeftBottom,        //基准元素，可接受其它选择器，如class
        position: "left-bottom",                //Tips显示位置，基准元素左上角
        direction: 'outer',                     //Tips 方向, 默认inner
        destroy: 'never',
        icon: 'error',
        iconOptions: {                      
            position: 'right',                  //Icon 位置
        },
        html: true,
        message: stringifyHtml('{ "baseElement": "this", "position": "left-bottom", "direction": "outer", "destroy": "never", "icon": "error", "iconOptions": { "position": "right" }, "html": true, "message": "html" }'),
    }, btnOuterLeftBottom);

    var btnOuterRightTop = document.querySelector('#btn-outer-right-top');
    btnOuterRightTop.onclick = function() {
        var checkboxValue = getCheckboxValue();
        var message = '上右角，类型：error';
        ohoTips({
            baseElement: baseElementOuter,
            position: "right-top",
            direction: 'outer',
            type: "error",
            icon: true,
            iconOptions: {                      
                position: 'right',
            },
            message: message
        })
    }
    ohoTips().hoverTip({
        baseElement: btnOuterRightTop,          //基准元素，可接受其它选择器，如class
        position: "right-top",                  //Tips显示位置，基准元素左上角
        direction: 'outer',                     //Tips 方向, 默认inner
        destroy: 'never',
        icon: 'error',
        iconOptions: {                      
            position: 'right',
        },
        html: true,
        message: stringifyHtml('{ "baseElement": "this", "position": "right-top", "direction": "outer", "destroy": "never", "icon": "error", "iconOptions": { "position": "right" }, "html": true, "message": "html" }'),
    }, btnOuterRightTop);

    var btnOuterRightBottom = document.querySelector('#btn-outer-right-bottom');
    btnOuterRightBottom.onclick = function() {
        var checkboxValue = getCheckboxValue();
        var message = '下右角，类型：error';
        ohoTips({
            baseElement: baseElementOuter,
            position: "right-bottom",
            direction: 'outer',
            type: "error",
            icon: true,
            iconOptions: {                      
                position: 'right',
            },
            message: message
        })
    }
    ohoTips().hoverTip({
        baseElement: btnOuterRightBottom,           //基准元素，可接受其它选择器，如class
        position: "right-bottom",                   //Tips显示位置，基准元素左上角
        direction: 'outer',                         //Tips 方向, 默认inner
        destroy: 'never',
        icon: 'error',
        iconOptions: {                      
            position: 'right',
        },
        html: true,
        message: stringifyHtml('{ "baseElement": "this", "position": "right-bottom", "direction": "outer", "destroy": "never", "icon": "error", "iconOptions": { "position": "right" }, "html": true, "message": "html" }'),
    }, btnOuterRightBottom);


    var btnOuterTopLeftParent = document.querySelector('#btn-outer-top-left-parent');
    btnOuterTopLeftParent.onclick = function() {
        var checkboxValue = getCheckboxValue();
        var message = '左上角，类型：success';
        ohoTips({
            baseElement: btnOuterTopLeftParent,         //基准元素
            parentElement: baseElementOuter,            //父元素
            position: "top-left",                       //Tips显示位置，基准元素上居中
            direction: 'outer',
            icon: 'success',
            iconOptions: {                      
                position: 'top',                        //Icon 位置
            },
            symbol: 'triangle',
            destroy: 'manual',
            message: message                            //Tips内容
        })
    }
    ohoTips().hoverTip({
        baseElement: btnOuterTopLeftParent,             //基准元素
        position: "top-left",                           //Tips显示位置，基准元素左上角
        direction: 'outer',                             //Tips 方向, 默认inner
        type: 'success',
        icon: false,
        destroy: 'never',
        message: [
            "如果基准元素的父元素存在 scroll",
            "Tips 元素最好创建在父元素之内"
        ],
    }, btnOuterTopLeftParent);

    var btnOuterTopCenterParent = document.querySelector('#btn-outer-top-center-parent');
    btnOuterTopCenterParent.onclick = function() {
        var checkboxValue = getCheckboxValue();
        var message = '上居中，类型：success';
        ohoTips({
            baseElement: btnOuterTopCenterParent,       //基准元素
            parentElement: baseElementOuter,            //父元素
            position: "top-center",                     //Tips显示位置，基准元素上居中
            direction: 'outer',
            icon: 'success',
            iconOptions: {                      
                position: 'top',                        //Icon 位置
            },
            symbol: 'triangle',
            destroy: 'manual',
            message: message                            //Tips内容
        })
    }
    ohoTips().hoverTip({
        baseElement: btnOuterTopCenterParent,           //基准元素
        position: "top-center",                         //Tips显示位置，基准元素左上角
        direction: 'outer',                             //Tips 方向, 默认inner
        type: 'success',
        icon: false,
        destroy: 'never',
        message: [
            "Tips 父元素 position: relative",
            "所以 Tips 会被父元素scroll 隐藏"
        ],
    }, btnOuterTopCenterParent);

    var btnOuterTopRightParent = document.querySelector('#btn-outer-top-right-parent');
    btnOuterTopRightParent.onclick = function() {
        var checkboxValue = getCheckboxValue();
        var message = '右上角，类型：success';
        ohoTips({
            baseElement: btnOuterTopRightParent,       //基准元素
            parentElement: baseElementOuter,            //父元素
            position: "top-right",                     //Tips显示位置，基准元素上居中
            direction: 'outer',
            icon: 'success',
            iconOptions: {                      
                position: 'top',                        //Icon 位置
            },
            symbol: 'triangle',
            destroy: 'manual',
            message: message                            //Tips内容
        })
    }
    ohoTips().hoverTip({
        baseElement: btnOuterTopRightParent,           //基准元素
        position: "top-right",                         //Tips显示位置，基准元素左上角
        direction: 'outer',                             //Tips 方向, 默认inner
        type: 'success',
        icon: false,
        destroy: 'never',
        message: [
            "你可以试试手动删除父元素 position",
            "然后看看效果"
        ],
    }, btnOuterTopRightParent);
}

function tipFloat() {
    var canDesrtoyFloatDefault = false;
    var floatDefaultTips;
    document.querySelector('#btn-float-default').onclick = function() {
        canDesrtoyFloatDefault = !canDesrtoyFloatDefault;
        if(canDesrtoyFloatDefault) {
            var message = [
                '默认浮动',
                '再次点击销毁',
            ];
            floatDefaultTips = ohoTips({
                baseElement: baseElementFloat,
                position: "float",                      //Tips显示位置，浮动
                float: {
                    type: "default",                    //浮动类型
                    /*customFloatOptions: {                //浮动参数
                        status: true,
                        xOffsetLen: 0.0005,
                        yOffsetLen: 0.0005,
                        delay: 10,
                    },
                    customFloatStatus: {                   //浮动初始状态
                        top: 60,
                        left: 60,
                    }*/
                },
                destroy: "never",                       //从不销毁
                message: message,                       //Tips内容
            })
        }else {
            floatDefaultTips.destroy();
        }
    }
    document.querySelector('#btn-float-x').onclick = function() {
        var message = 'X浮动';
        ohoTips({
            baseElement: baseElement,
            position: "float",                      //Tips显示位置，浮动
            float: {
                type: "x",                          //浮动类型
            },
            destroy: "never",                       //从不销毁
            message: message,                       //Tips内容
        })
    }
    document.querySelector('#btn-float-square').onclick = function() {
        var message = '方形浮动';
        ohoTips({
            position: "float",                      //Tips显示位置，浮动
            float: {
                type: 'square',
            },
            destroy: "never",                       //从不销毁
            message: message,                       //Tips内容
        })
    }

    document.querySelector('#btn-float-x-custom').onclick = function() {
        var message = '配置X浮动';
        ohoTips({
            baseElement: baseElementFloat,
            position: "float",                      //Tips显示位置
            float: {
                type: "x",                          //浮动类型
                customFloatOptions: {
                    offsetType: '%',
                    xMinThreshold: 0,
                    xMaxThreshold: 100,
                    xOffsetLen: 0.05,
                    yMinThreshold: 0,
                    yMaxThreshold: 100,
                    yOffsetLen: 0.05,
                    delay: 1,
                },
                customFloatStatus: {
                    top: 50,
                    left: 50,
                }
            },
            destroy: "never",                       //从不销毁
            message: message,                       //Tips内容
        })
    }
    document.querySelector('#btn-float-square-custom').onclick = function() {
        var message = '配置方形浮动, 事件请看log';
        ohoTips({
            //baseElement: baseElementFloat,
            position: "float",                      //Tips显示位置，top为上居中
            float: {
                type: 'square',
                customFloatOptions: {
                    offsetType: '%',
                    xMinThreshold: 0,
                    xMaxThreshold: 100,
                    xOffsetLen: 0.1,
                    yMinThreshold: 0,
                    yMaxThreshold: 0,
                    yOffsetLen: 0.1,
                    delay: 1,
                },
                customFloatStatus: {
                    top: 0,
                    left: 0,
                },
            },
            destroy: "never",                       //从不销毁
            message: message,                       //Tips内容
            events: {
                beforeFloated: function(floatFlag) { console.log(floatFlag + " - " + "Before Tips floating.", this.backup._tipElm); },
                floated: function(floatFlag) { console.log(floatFlag + " - " + "Tips begins to float.", this.backup._tipElm); },
            }
        })
    }
    document.querySelector('#btn-float-custom').onclick = function() {
        var message = '自定义浮动，三角形';
        var customFloatType =  function(){
            var _this = this;

            var customFloatOptions = {
                status: 1,
                offsetType: '%',
                xMinThreshold: 0,
                xMaxThreshold: 100,
                xOffsetLen: 0.01,
                yMinThreshold: 0,
                yMaxThreshold: 100,
                yOffsetLen: 0.02,
                delay: 1,
            };

            var customFloatStatus = {
                top: 100,
                left: 0,
            };

            var floatOptions = this.setFloatOptions(customFloatOptions);
            var floatStatus = this.getfloatStatus(customFloatStatus);

            if(floatOptions.floatId) clearInterval(floatOptions.floatId);
            floatOptions.floatId = setInterval(function(){
                if(floatStatus.top >= floatOptions.yMaxThreshold && floatStatus.left <= floatOptions.xMinThreshold) {
                    floatOptions.status = 1;
                }else if(floatStatus.top <= floatOptions.yMinThreshold && floatStatus.left >= floatOptions.xMaxThreshold/2) {
                    floatOptions.status = 2;
                }else if(floatStatus.top >= floatOptions.yMaxThreshold && floatStatus.left >= floatOptions.xMaxThreshold) {
                    floatOptions.status = 3;
                }

                if(floatOptions.status == 1) {
                    floatStatus.top = floatStatus.top - floatOptions.yOffset;
                    floatStatus.left = floatStatus.left + floatOptions.xOffset;
                }else if(floatOptions.status == 2) {
                    floatStatus.top = floatStatus.top + floatOptions.yOffset;
                    floatStatus.left = floatStatus.left + floatOptions.xOffset;
                }else if(floatOptions.status == 3) {
                    floatStatus.left = floatStatus.left - floatOptions.xOffset;
                }

                _this.setFloatStatus(floatStatus, floatOptions);
            }, floatOptions.delay);
        };
        ohoTips({
            //baseElement: baseElementFloat,
            position: "float",                      //Tips显示位置，浮动
            float: {
                customFloatType: customFloatType,   //自定义浮动函数
            },
            destroy: "never",                       //从不销毁
            message: message,                       //Tips内容
        })
    }

    var canDesrtoyFloatTranslateDefault = false;
    var floatTranslateDefaultTips;
    document.querySelector('#btn-float-translate-default').onclick = function() {
        canDesrtoyFloatTranslateDefault = !canDesrtoyFloatTranslateDefault;
        if(canDesrtoyFloatTranslateDefault) {
            var message = [
                '默认浮动-Translate',
                '再次点击销毁',
            ];
            floatTranslateDefaultTips = ohoTips({
                baseElement: baseElementFloat,          //基准元素，可接受其它选择器，如class
                position: "translate",                  //Tips显示位置，浮动
                float: {
                    type: "default",                    //浮动类型
                    /*customFloatOptions: {                //浮动参数
                        status: true,
                        xOffsetLen: 0.0005,
                        yOffsetLen: 0.0005,
                        delay: 10,
                    },
                    customFloatStatus: {                   //浮动初始状态
                        top: 60,
                        left: 60,
                    }*/
                },
                destroy: "never",                       //从不销毁
                message: message,                       //Tips内容
            })
        }else {
            floatTranslateDefaultTips.destroy();
        }
    }
    document.querySelector('#btn-float-translate-x').onclick = function() {
        var message = 'X浮动-Translate';
        ohoTips({
            baseElement: baseElement,
            position: "translate",                  //Tips显示位置，浮动
            float: {
                type: "x",                          //浮动类型
            },
            destroy: "never",                       //从不销毁
            message: message,                       //Tips内容
        })
    }
    document.querySelector('#btn-float-translate-square').onclick = function() {
        var message = '方形浮动-Translate';
        ohoTips({
            //baseElement: baseElementFloat,
            position: "translate",                  //Tips显示位置，浮动
            float: {
                type: 'square',
            },
            destroy: "never",                       //从不销毁
            message: message,                       //Tips内容
        })
    }

    var canDesrtoyFloatTranslateDefaultConfing = false;
    var floatTranslateDefaultConfingTips;
    document.querySelector('#btn-float-translate-x-custom').onclick = function() {
        canDesrtoyFloatTranslateDefaultConfing = !canDesrtoyFloatTranslateDefaultConfing;
        if(canDesrtoyFloatTranslateDefaultConfing) {
            var message = '配置X浮动-Translate';
            floatTranslateDefaultConfingTips = ohoTips({
                baseElement: baseElementFloat,
                position: "translate",                  //Tips显示位置
                float: {
                    type: "x",                          //浮动类型
                    customFloatOptions: {
                        offsetType: '%',
                        xMinThreshold: 0,
                        xMaxThreshold: 100,
                        xOffsetLen: 0.05,
                        yMinThreshold: 0,
                        yMaxThreshold: 100,
                        yOffsetLen: 0.05,
                        delay: 1,
                    },
                    customFloatStatus: {
                        top: 50,
                        left: 50,
                    }
                },
                destroy: "never",                       //从不销毁
                message: message,                       //Tips内容
            })
        }else {
            floatTranslateDefaultConfingTips.destroy();
        }
    }
    document.querySelector('#btn-float-translate-square-custom').onclick = function() {
        var message = '配置方形浮动-Translate, 事件请看log';
        ohoTips({
            //baseElement: baseElementFloat,
            position: "translate",                  //Tips显示位置
            float: {
                type: 'square',
                customFloatOptions: {
                    offsetType: '%',
                    xMinThreshold: 0,
                    xMaxThreshold: 100,
                    xOffsetLen: 0.1,
                    yMinThreshold: 0,
                    yMaxThreshold: 0,
                    yOffsetLen: 0.1,
                    delay: 1,
                },
                customFloatStatus: {
                    top: 0,
                    left: 0,
                },
            },
            destroy: "never",                       //从不销毁
            message: message,                       //Tips内容
            events: {
                beforeFloated: function(floatFlag) { console.log(floatFlag + " - " + "Before Tips floating.", this.backup._tipElm); },
                floated: function(floatFlag) { console.log(floatFlag + " - " + "Tips begins to float.", this.backup._tipElm); },
            }
        })
    }
    document.querySelector('#btn-float-translate-custom').onclick = function() {
        var message = '自定义浮动-Translate，三角形';
        var customFloatType =  function(){
            var _this = this;

            var customFloatOptions = {
                status: 1,
                offsetType: '%',
                xMinThreshold: 0,
                xMaxThreshold: 100,
                xOffsetLen: 0.01,
                yMinThreshold: 0,
                yMaxThreshold: 100,
                yOffsetLen: 0.02,
                delay: 1,
            };

            var customFloatStatus = {
                top: 100,
                left: 0,
            };

            var floatOptions = this.setFloatTranslateOptions(customFloatOptions);
            var floatStatus = this.getfloatTranslateStatus(customFloatStatus);

            if(floatOptions.floatId) clearInterval(floatOptions.floatId);
            floatOptions.floatId = setInterval(function(){
                if(floatStatus.top >= floatOptions.yMaxThreshold && floatStatus.left <= floatOptions.xMinThreshold) {
                    floatOptions.status = 1;
                }else if(floatStatus.top <= floatOptions.yMinThreshold && floatStatus.left >= floatOptions.xMaxThreshold/2) {
                    floatOptions.status = 2;
                }else if(floatStatus.top >= floatOptions.yMaxThreshold && floatStatus.left >= floatOptions.xMaxThreshold) {
                    floatOptions.status = 3;
                }

                if(floatOptions.status == 1) {
                    floatStatus.top = floatStatus.top - floatOptions.yOffset;
                    floatStatus.left = floatStatus.left + floatOptions.xOffset;
                }else if(floatOptions.status == 2) {
                    floatStatus.top = floatStatus.top + floatOptions.yOffset;
                    floatStatus.left = floatStatus.left + floatOptions.xOffset;
                }else if(floatOptions.status == 3) {
                    floatStatus.left = floatStatus.left - floatOptions.xOffset;
                }

                _this.setFloatTranslateStatus(floatStatus, floatOptions);
            }, floatOptions.delay);
        };
        ohoTips({
            //baseElement: baseElementFloat,
            position: "translate",                          //Tips显示位置，浮动
            float: {
                customFloatType: customFloatType,           //自定义浮动函数
            },
            destroy: "never",                               //从不销毁
            message: message,                               //Tips内容
        })
    }
}

function tipGroup() {
    var status1 = true;
    document.querySelector('#btn-group-1').onclick = function() {
        var position = positionRandom();
        var position = 'top-center';
        var icon = typeRandom();
        var message = '';
        var random = randomNum(0, 1);
        if(random == 1) {
            message = '定位： ' + position;
        }else {
            message = ['当前时间： ' , new Date() + new Date()];
        }

        
        if(status1) {
            var message = '定位： ' + position;
        }else {
            var message = ['当前时间： ' , new Date() + new Date()];
        }
        status1 = !status1;
        
        ohoTips({
            //baseElement: baseElementGroup,
            position: position,
            //background: randomNum(0, 1),
            type: 'normal',
            //limit: false,
            icon: icon,
            group: {
                name: 'firstGroup',
                maxLength: 3,
            },
            destroy: "manual",
            message: message,
        })
    }

    document.querySelector('#btn-group-2').onclick = function() {
        var position = positionRandom();
        var position = 'top-left';
        var type = typeRandom();
        var message = '';
        var random = randomNum(0, 1);
        if(random == 1) {
            message = '定位： ' + position;
        }else {
            message = ['当前时间： ' , new Date() + new Date()];
        }

        ohoTips({
            baseElement: baseElementGroup,
            position: position,
            //background: randomNum(0, 1),
            type: type,
            //limit: false,
            icon: true,
            group: {
                name: 'secondGroup',
                maxLength: 2,
            },
            destroy: "manual",
            message: message,
        })
    }

    document.querySelector('#btn-group-3').onclick = function() {
        var position = positionRandom();
        var position = 'top-right';
        var icon = typeRandom();
        var message = ['当前时间： ' , new Date() + new Date()];
        
        ohoTips({
            baseElement: baseElementGroup,
            position: position,
            //background: randomNum(0, 1),
            type: 'normal',
            //limit: false,
            icon: icon,
            group: {
                name: 'thirdGroup',
                maxLength: 1,
            },
            destroy: "manual",
            message: message,
        })
    }
}

function animation() {
    document.querySelector('#btn-animation-oho').onclick = function() {
        var position = 'top-center';
        var icon = 'success';
        var message = ['当前时间： ' , new Date()];
        
        ohoTips({
            baseElement: baseElementAnimation,
            position: position,
            // background: true,
            type: 'normal',
            //limit: false,
            icon: icon,
            // group: {
            //     name: 'amtGroup',
            //     maxLength: 1,
            // },
            // destroy: "manual",
            animation: {
                in: 'oho',
                out: 'oho',
            },
            message: message,
        })
    };

    document.querySelector('#btn-animation-fade').onclick = function() {
        var position = 'top-center';
        var icon = 'success';
        var message = ['当前时间： ' , new Date()];
        
        ohoTips({
            baseElement: baseElementAnimation,
            position: position,
            type: 'normal',
            icon: icon,
            message: message,
        })
    };

    document.querySelector('#btn-animation-fold').onclick = function() {
        var position = 'top-center';
        var icon = 'success';
        var icon = 'clock';
        var message = ['当前时间： ' , new Date()];
        
        ohoTips({
            // baseElement: baseElementAnimation,
            position: position,
            // background: true,
            type: 'normal',
            //limit: false,
            icon: icon,
            group: {
                name: 'amtGroup-1',
                maxLength: 4,
            },
            destroy: "manual",
            animation: {
                in: 'fold',
                out: 'fold',
            },
            message: message,
        })
    };

    document.querySelector('#btn-animation-gf-1').onclick = function() {
        var position = 'top-left';
        var icon = 'success';
        var icon = 'info';
        var message = ['当前时间： ' , new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date()];
        
        ohoTips({
            // baseElement: baseElementAnimation,
            position: position,
            background: true,
            type: 'normal',
            //limit: false,
            icon: icon,
            group: {
                name: 'amtGroup-gf',
                maxLength: 4,
            },
            destroy: "manual",
            animation: {
                in: 'fragment',
                out: 'fragment',
                delay: 1000,
            },
            message: message,
        })
    };

    document.querySelector('#btn-animation-gf-2').onclick = function() {
        var position = 'center-left';
        var icon = 'success';
        var message = ['当前时间： ' , new Date()];
        
        ohoTips({
            // baseElement: baseElementAnimation,
            position: position,
            // background: true,
            type: 'warning',
            //limit: false,
            // icon: icon,
            shadow: true,
            group: {
                name: 'amtGroup-gf',
                maxLength: 4,
            },
            destroy: "manual",
            animation: {
                in: 'fragment',
                out: 'fragment',
                fragments: {
                    xCount: 5,
                    yCount: 5,
                },
                delay: 1000,
            },
            message: message,
        })
    };

    document.querySelector('#btn-animation-gf-3').onclick = function() {
        var position = 'bottom-left';
        var icon = 'success';
        var icon = 'info';
        var message = ['当前时间： ' , new Date(), new Date(), new Date(), new Date(), new Date()];
        
        ohoTips({
            // baseElement: baseElementAnimation,
            position: position,
            // background: true,
            type: 'info',
            //limit: false,
            // icon: icon,
            group: {
                name: 'amtGroup-gf',
                maxLength: 4,
            },
            destroy: "manual",
            animation: {
                in: 'fragment',
                out: 'fragment',
                delay: 1000,
            },
            message: message,
        })
    };

    document.querySelector('#btn-animation-cus1').onclick = function() {
        var position = 'top-center';
        var icon = 'error';
        var message = ['自定义动画类型-1', '当前时间： ' , new Date()];
        
        ohoTips({
            baseElement: baseElementAnimation,
            position: position,
            background: true,
            type: 'normal',
            limit: false,
            icon: icon,
            group: {
                name: 'amtGroup-cus',
                maxLength: 4,
            },
            // destroy: "manual",
            animation: {
                customAmtFuntion: function(status) {
                    let C = this.C;
                    let $tip = this.backup._tipElm;
                    let $tipGroup = this.backup._tipGroupElm;
                    let $bg = this.backup._backgroundElem;

                    if(status == 'in') {
                        C.addClass($tip, 'ohoTip-amt-cus1');
                        if($bg) {
                            C.addClass($bg, 'ohoTip-bg-amt-cus1');
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
                            width: eleDetails.tipWidth,
                            height: eleDetails.tipHeight,
                        };
                        C.addCss($tip, tipStyle);

                        setTimeout(function(){
                            C.addClass($tip, 'ohoTip-amt-cus1');
                            if($bg) {
                                C.addClass($bg, 'ohoTip-bg-amt-cus1');
                            }
                            C.addClass($tip, 'out');
                            if($bg) {
                                C.removeClass($bg, 'in');
                            }
                        }, 100);
                    }
                },
            },
            message: message,
        })
    };
}

//生成从minNum到maxNum的随机数
function randomNum(minNum,maxNum) { 
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 
            break; 
        case 2: 
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
            break; 
        default: 
            return 0; 
            break; 
    } 
}

function positionRandom() {
    var types = ["top-left", "top-center", "top-right", "center-left", "middle", "center-right", "bottom-left", "bottom-center", "bottom-right"];
    var randomIndex = randomNum(0, 8);
    return types[randomIndex];
}

function typeRandom() {
    var types = ["success", "error", "warning", "info"];
    var randomIndex = randomNum(0, 3);
    return types[randomIndex];
}

var onLoad = function() {
    defConfig();
    tipDefault();
    tipOuter();
    tipFloat();
    tipGroup();
    animation();
}

window.addEventListener('load', onLoad, false);