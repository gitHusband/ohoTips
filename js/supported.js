var bodyElement = '';
var defConfingElement = "#box-def-config";
var parentElement = "#box-parent";
var parentElementOuter = "#box-outer";
var parentElementFloat = "#box-float";
var parentElementGroup = "#box-group";
var parentElementAnimation = '#box-animation';

function defConfig() {
    var isFixedSize = false;
    document.querySelector('.icon-box').onclick = function() {
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
    document.querySelector('#def-parent').onclick = function() {
        var options = {parentElement: ''};
        if(this.checked) {
            options.parentElement = this.value;
        }
        ohoTipsPrototype.setDefOptions(options);
    }
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
            // parentElement: bodyElement,         //父元素为空或者body，则定位基于整个窗口
            position: "top-left",               //Tip显示位置，窗口左上角
            // type: "success",                    //显示的class，可接受自定义
            // icon: false,                        //不显示图标
            // message: message,                           //Tip内容
        })
    }
    document.querySelector('#btn-body-top-center').onclick = function() {
        var message = '窗口上居中，类型：success';
        var a = "0px 759.6px 377.2px 663.6px";
        ohoTips({
            // parentElement: bodyElement,         //父元素为空或者body，则定位基于整个窗口
            position: "top-center",             //Tip显示位置，窗口上居中
            type: "success",                    //显示的class，可接受自定义
            // icon: false,                        //不显示图标
            // message: message,                           //Tip内容
        })
    }
    document.querySelector('#btn-body-top-right').onclick = function() {
        var message = '窗口右上角，类型：success';
        ohoTips({
            // parentElement: bodyElement,         //父元素为空或者body，则定位基于整个窗口
            position: "top-right",              //Tip显示位置，窗口右上角
            type: "success",                    //显示的class，可接受自定义
            // icon: false,                         //显示icon, 可接受自定义
            message: message                            //Tip内容
        })
    }
    document.querySelector('#btn-body-center-left').onclick = function() {
        var message = '窗口左居中，类型：warning';
        ohoTips({
            // parentElement: bodyElement,
            position: "center-left",
            type: "warning",
            // icon: false,                        //不显示图标
            message: message
        })
    }
    document.querySelector('#btn-body-middle').onclick = function() {
        var message = '窗口垂直居中，类型：normal';
        ohoTips({
            // parentElement: bodyElement,     
            position: "middle",
            //type: "normal",                   //默认 normal
            background: true,                   //显示遮罩层
            // icon: false,                        //不显示图标
            message: message,                           //Tip内容
        })
    }
    document.querySelector('#btn-body-center-right').onclick = function() {
        var message = '窗口右居中，类型：normal';
        ohoTips({
            // parentElement: bodyElement,
            position: "center-right",
            type: "info",
            // icon: false,                        //不显示图标
            message: message
        })
    }

    document.querySelector('#btn-body-bottom-left').onclick = function() {
        var message = '窗口左下角，类型：error';
        ohoTips({
            // parentElement: "",
            position: "bottom-left",
            type: "error",
            // icon: false,                        //不显示图标
            message: message
        })
    }
    document.querySelector('#btn-body-bottom-center').onclick = function() {
        var message = '窗口下居中，类型：error';
        ohoTips({
            // parentElement: "",
            position: "bottom-center",
            type: "error",
            // icon: false,                        //不显示图标
            message: message
        })
    }
    document.querySelector('#btn-body-bottom-right').onclick = function() {
        var message = '窗口右下角，类型：error';
        ohoTips({
            //parentElement: "",
            position: "bottom-right",
            type: "error",
            // icon: false,                        //不显示图标
            message: message
        })
    }

    document.querySelector('#btn-top-left').onclick = function() {
        var checkboxValue = getCheckboxValue();
        var message = '左上角，类型：success';
        ohoTips({
            parentElement: parentElement,       //父元素id，可接受其它选择器，如class
            position: "top-left",               //Tip显示位置，父元素左上角
            direction: checkboxValue.direction, //Tip 方向, 默认inner
            type: "success",                    //显示的class，可接受自定义
            message: message                            //Tip内容
        })
    }

    document.querySelector('#btn-top-center').onclick = function() {
        var checkboxValue = getCheckboxValue();
        var message = '上居中，类型：success';
        var jsonString = '{ "parentElement": "this", "position": "top-left", "direction": "outer", "type": "success", "icon": false, "destroy": "never", "html": true, "message": "html" }';
        jsonString = JSON.stringify(JSON.parse(jsonString), null, 2);
        var htmlJson = '<pre>'+jsonString+'</pre>';
        
        ohoTips({
            parentElement: parentElement,       //父元素id，可接受其它选择器，如class
            position: "top-center",             //Tip显示位置，父元素上居中
            direction: checkboxValue.direction, //Tip 方向, 默认inner
            type: "success",                    //显示的class，可接受自定义
            icon: true,
            iconOptions: {                      
                position: 'top',                //Icon 位置
            },
            destroy: 'manual',
            // html: true,
            message: message                            //Tip内容
        })
    }

    document.querySelector('#btn-top-right').onclick = function() {
        var checkboxValue = getCheckboxValue();
        var message = '右上角，类型：success';
        ohoTips({
            parentElement: parentElement,       //父元素id，可接受其它选择器，如class
            position: "top-right",              //Tip显示位置，父元素右上角
            direction: checkboxValue.direction, //Tip 方向, 默认inner
            type: "success",                    //显示的class，可接受自定义
            message: message                            //Tip内容
        })
    }

    document.querySelector('#btn-center-left').onclick = function() {
        var checkboxValue = getCheckboxValue();
        var message = '左居中，类型：warning';
        ohoTips({
            parentElement: parentElement,
            position: "center-left",
            direction: checkboxValue.direction, //Tip 方向, 默认inner
            type: "warning",
            icon: true,
            iconOptions: {                      
                position: 'left',              //Icon 位置
            },
            message: message
        })
    }
    document.querySelector('#btn-middle').onclick = function() {
        var checkboxValue = getCheckboxValue();
        var message = '垂直居中，类型：normal';
        ohoTips({
            parentElement: parentElement,
            position: "middle",
            direction: checkboxValue.direction, //Tip 方向, 默认inner
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
            parentElement: parentElement,
            position: "center-right",
            direction: checkboxValue.direction, //Tip 方向, 默认inner
            type: "info",
            icon: true,
            iconOptions: {                      
                position: 'right',              //Icon 位置
            },
            message: message
        })
    }

    document.querySelector('#btn-bottom-left').onclick = function() {
        var checkboxValue = getCheckboxValue();
        var message = '左下角，类型：error';
        ohoTips({
            parentElement: ".box-parent",       //父元素class
            position: "bottom-left",
            direction: checkboxValue.direction, //Tip 方向, 默认inner
            type: "error",
            message: message
        })
    }
    document.querySelector('#btn-bottom-center').onclick = function() {
        var checkboxValue = getCheckboxValue();
        var message = '下居中，类型：error';
        ohoTips({
            parentElement: ".box-parent",       //父元素class
            position: "bottom-center",
            direction: checkboxValue.direction, //Tip 方向, 默认inner
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
            parentElement: ".box-parent",       //父元素class
            position: "bottom-right",
            direction: checkboxValue.direction, //Tip 方向, 默认inner
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
            parentElement: parentElement,
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
            parentElement: parentElement,
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
            parentElement: parentElement,
            position: "bottom-center",
            type: "error",
            message: message
        })
    }
    document.querySelector('#btn-delay').onclick = function() {
        var message = '3s 后销毁 Tip';
        ohoTips({
            parentElement: parentElement,
            position: "center-left",
            delay: 3000,                    //3s 后自动销毁
            message: message
        })
    }
    document.querySelector('#btn-destroy').onclick = function() {
        var message = '手动销毁 Tip';
        ohoTips({
            parentElement: parentElement,
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
                parentElement: parentElement,
                position: "center-right",
                destroy: 'never',           //永不销毁
                icon: 'clock',
                message: message
            })
        }else{
            desrtoyNeverTip.remove();
        }
    }
    document.querySelector('#btn-simple').onclick = function() {
        var message = [
            '简单调用 Tip',
            '这种方法调用方便，一般使用该类方法即可'
        ];
        var parent = parentElement;
        ohoTips().info(message, parent);     //这种方法调用方便，一般使用该类方法即可
        setTimeout(function () {
            ohoTips().success(message, parent);
        }, 1000);
        setTimeout(function () {
            ohoTips().error(message, parent);
        }, 2000);
        setTimeout(function () {
            ohoTips().warning(message, parent);
        }, 3000);
        setTimeout(function () {
            ohoTips().normal(message, 'success', parent);
        }, 4000);
        setTimeout(function () {
            ohoTips().show(message, "info", parent);
        }, 5000);

        ohoTips("以默认配置弹出消息");
        setTimeout(function () {
            ohoTips([
                '以默认配置弹出消息',
                '这种方法调用方便，建议配合 setDefOptions 使用'
                ]);
        }, 2000);
        setTimeout(function () {
            ohoTips([
                '以默认配置弹出消息',
                '这种方法调用方便，建议配合 setDefOptions 使用'
                ]);
        }, 4000);
    }
    document.querySelector('#btn-callback').onclick = function() {
        var message = '回调函数 Tip';
        ohoTips({
            parentElement: parentElement,
            position: "middle",
            destroy: 'manual',         //手动销毁
            background: true,
            message: message,
            callback: function() {
                console.log(this);
                alert("Tip 渲染提示信息后，回调");
            }
        })
    }
    document.querySelector('#btn-html').onclick = function() {
        var random = Math.round(Math.random()*Math.pow(10, 10));
        var randBtnId = "btn-tip-close"+random;
        var message = '<div class="box1" style="width: 160px">\n' +
            '        <h4 style="text-align: center">Html Tip 说明</h4>\n' +
            '        <p id="tip-content" style="text-indent:10px">设置选项html: true, message 选项传入html元素实体。</p>\n' +
            '        <div class="box-center"><button id="'+randBtnId+'" class="button black">隐藏 说明</button></div>\n' +
            '    </div>';

        ohoTips({
            parentElement: parentElement,
            position: "middle",
            type: "box-html",       //自定义message 样式
            icon: false,
            destroy: 'manual',
            // background: true,
            html: true,
            message: message,
            htmlCallback: function() {  //回调函数
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
            parentElement: parentElement,
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
            '内部(默认)定位方案，计算Tips 宽高，尽量使Tips 位于父元素内部',
        ];

        ohoTips({
            parentElement: parentElement,
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
            '外部定位方案，计算Tips 宽高，尽量使Tips 位于父元素外部'
        ];

        ohoTips({
            parentElement: parentElement,
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
            '外围定位方案，计算Tips 宽高，尽量使Tips 位于父元素外部',
            '当百分比为正数时，百分比基准是Tips元素',
            '当百分比为负数时，百分比基准是父元素',
        ];

        // message = "1"

        ohoTips({
            parentElement: parentElement,
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
    var htmlCallback = function() {  //回调函数
        console.log('htmlCallback', this, this.backup._tElem);
    }
    var callback = function() {  //回调函数
        console.log('callback');
        var pre = this.backup._tElem.getElementsByTagName("pre")[0];
        pre.innerText = JSON.stringify(JSON.parse(pre.innerText), null, 2);
        this.resetPosition();
    }
    var stringifyHtml = function(jsonString) {
        jsonString = JSON.stringify(JSON.parse(jsonString), null, 2);
        var html = '<pre>'+jsonString+'</pre>';

        return html;
    }

    var btnOuterTopLeft = document.querySelector('#btn-outer-top-left');
    btnOuterTopLeft.onclick = function() {
        var message = '左上角，类型：success';
        ohoTips({
            parentElement: parentElementOuter,      //父元素id，可接受其它选择器，如class
            position: "top-left",                   //Tip显示位置，父元素左上角
            direction: 'outer',                     //Tip 方向, 默认inner
            icon: 'success',
            message: message                                //Tip内容
        });
    }
    var contentTopLeft;
    btnOuterTopLeft.onmouseenter = function() {
        var jsonString = '{ "parentElement": "this", "position": "top-left", "direction": "outer", "type": "success", "icon": false, "destroy": "never", "html": true, "message": "html" }';
        jsonString = JSON.stringify(JSON.parse(jsonString), null, 2);
        var html = '<pre>'+jsonString+'</pre>';
        contentTopLeft = ohoTips({
            parentElement: btnOuterTopLeft,         //父元素id，可接受其它选择器，如class
            position: "top-left",                   //Tip显示位置，父元素左上角
            direction: 'outer',                     //Tip 方向, 默认inner
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
            contentTopLeft.remove();
        }
    }

    var btnOuterTopCenter = document.querySelector('#btn-outer-top-center');
    btnOuterTopCenter.onclick = function() {
        var checkboxValue = getCheckboxValue();
        var message = '上居中，类型：success';
        ohoTips({
            parentElement: parentElementOuter,       //父元素id，可接受其它选择器，如class
            position: "top-center",             //Tip显示位置，父元素上居中
            direction: 'outer', //Tip 方向, 默认inner
            icon: 'success',
            iconOptions: {                      
                position: 'top',                //Icon 位置
            },
            destroy: 'manual',
            message: message                            //Tip内容
        })
    }
    ohoTips().hoverTip({
        parentElement: btnOuterTopCenter,       //父元素id，可接受其它选择器，如class
        position: "top-center",                 //Tip显示位置，父元素左上角
        direction: 'outer',                     //Tip 方向, 默认inner
        type: 'success',
        icon: false,
        destroy: 'never',
        html: true,
        message: stringifyHtml('{ "parentElement": "this", "position": "top-center", "direction": "outer", "type": "success", "icon": false, "destroy": "never", "html": true, "message": "html" }'),
    }, btnOuterTopCenter);

    var btnOuterTopRight = document.querySelector('#btn-outer-top-right');
    btnOuterTopRight.onclick = function() {
        var message = '右上角，类型：success';
        ohoTips({
            parentElement: parentElementOuter,      //父元素id，可接受其它选择器，如class
            position: "top-right",                  //Tip显示位置，父元素右上角
            direction: 'outer',                     //Tip 方向, 默认inner
            icon: 'success',
            iconOptions: {                      
                position: 'right',              //Icon 位置
            },
            message: message                            //Tip内容
        })
    }
    ohoTips().hoverTip({
        parentElement: btnOuterTopRight,            //父元素id，可接受其它选择器，如class
        position: "top-right",                      //Tip显示位置，父元素左上角
        direction: 'outer',                         //Tip 方向, 默认inner
        type: 'success',
        icon: false,
        destroy: 'never',
        html: true,
        message: stringifyHtml('{ "parentElement": "this", "position": "top-right", "direction": "outer", "type": "success", "icon": false, "destroy": "never", "html": true, "message": "html" }'),
    }, btnOuterTopRight);

    var btnOuterCenterLeft = document.querySelector('#btn-outer-center-left');
    btnOuterCenterLeft.onclick = function() {
        var checkboxValue = getCheckboxValue();
        var message = '左居中，类型：warning';
        ohoTips({
            parentElement: parentElementOuter,
            position: "center-left",
            direction: 'outer', //Tip 方向, 默认inner
            type: "warning",
            message: message
        })
    }
    ohoTips().hoverTip({
        parentElement: btnOuterCenterLeft,      //父元素id，可接受其它选择器，如class
        position: "center-left",                   //Tip显示位置，父元素左上角
        direction: 'outer',                     //Tip 方向, 默认inner
        type: "warning",                        //显示的class，可接受自定义
        icon: false,
        destroy: 'never',
        html: true,
        message: stringifyHtml('{ "parentElement": "this", "position": "center-left", "direction": "outer", "type": "warning", "icon": false, "destroy": "never", "html": true, "message": "html" }'),
    }, btnOuterCenterLeft);

    var btnOuterMiddle = document.querySelector('#btn-outer-middle');
    btnOuterMiddle.onclick = function() {
        var checkboxValue = getCheckboxValue();
        var message = '垂直居中，类型：normal';
        ohoTips({
            parentElement: parentElementOuter,
            position: "middle",
            direction: 'outer', //Tip 方向, 默认inner
            //type: "normal",                   //默认 normal
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
        parentElement: btnOuterMiddle,          //父元素id，可接受其它选择器，如class
        position: "top-center",                 //Tip显示位置，父元素左上角
        direction: 'outer',                     //Tip 方向, 默认inner
        type: "info",
        destroy: 'never',
        html: true,
        message: stringifyHtml('{ "parentElement": "this", "position": "top-center", "direction": "outer", "type": "info", "destroy": "never", "html": true, "message": "html" }'),
    }, btnOuterMiddle);

    var btnOuterCenterRight = document.querySelector('#btn-outer-center-right');
    btnOuterCenterRight.onclick = function() {
        var checkboxValue = getCheckboxValue();
        var message = '右居中，类型：info';
        ohoTips({
            parentElement: parentElementOuter,
            position: "center-right",
            direction: 'outer', //Tip 方向, 默认inner
            type: "info",
            icon: true,
            iconOptions: {                      
                position: 'right',              //Icon 位置
            },
            message: message
        })
    }
    ohoTips().hoverTip({
        parentElement: btnOuterCenterRight,      //父元素id，可接受其它选择器，如class
        position: "center-right",                   //Tip显示位置，父元素左上角
        direction: 'outer',                     //Tip 方向, 默认inner
        type: "info",
        destroy: 'never',
        html: true,
        message: stringifyHtml('{ "parentElement": "this", "position": "center-right", "direction": "outer", "type": "info", "destroy": "never", "html": true, "message": "html" }'),
    }, btnOuterCenterRight);

    var btnOuterBottomLeft = document.querySelector('#btn-outer-bottom-left');
    btnOuterBottomLeft.onclick = function() {
        var checkboxValue = getCheckboxValue();
        var message = '左下角，类型：error';
        ohoTips({
            parentElement: parentElementOuter,       //父元素class
            position: "bottom-left",
            direction: 'outer', //Tip 方向, 默认inner
            type: "error",
            message: message
        })
    }
    ohoTips().hoverTip({
        parentElement: btnOuterBottomLeft,          //父元素id，可接受其它选择器，如class
        position: "bottom-left",                    //Tip显示位置，父元素左上角
        direction: 'outer',                         //Tip 方向, 默认inner
        type: 'error',
        destroy: 'never',
        html: true,
        message: stringifyHtml('{ "parentElement": "this", "position": "bottom-left", "direction": "outer", "destroy": "never", "html": true, "message": "html" }'),
    }, btnOuterBottomLeft);

    var btnOuterBottomCenter = document.querySelector('#btn-outer-bottom-center');
    btnOuterBottomCenter.onclick = function() {
        var checkboxValue = getCheckboxValue();
        var message = '下居中，类型：error';
        ohoTips({
            parentElement: parentElementOuter,       //父元素class
            position: "bottom-center",
            direction: 'outer', //Tip 方向, 默认inner
            type: "error",
            icon: true,
            iconOptions: {                      
                position: 'bottom',             //Icon 位置
            },
            message: message
        })
    }
    ohoTips().hoverTip({
        parentElement: btnOuterBottomCenter,            //父元素id，可接受其它选择器，如class
        position: "bottom-center",                      //Tip显示位置，父元素左上角
        direction: 'outer',                             //Tip 方向, 默认inner
        type: 'error',
        destroy: 'never',
        html: true,
        message: stringifyHtml('{ "parentElement": "this", "position": "bottom-center", "direction": "outer", "destroy": "never", "html": true, "message": "html" }'),
    }, btnOuterBottomCenter);

    var btnOuterBottomRight = document.querySelector('#btn-outer-bottom-right');
    btnOuterBottomRight.onclick = function() {
        var checkboxValue = getCheckboxValue();
        var message = '右下角，类型：error';
        ohoTips({
            parentElement: parentElementOuter,       //父元素class
            position: "bottom-right",
            direction: 'outer', //Tip 方向, 默认inner
            type: "error",
            icon: true,
            iconOptions: {                      
                position: 'right',              //Icon 位置
            },
            message: message
        })
    }
    ohoTips().hoverTip({
        parentElement: btnOuterBottomRight,      //父元素id，可接受其它选择器，如class
        position: "bottom-right",                   //Tip显示位置，父元素左上角
        direction: 'outer',                     //Tip 方向, 默认inner
        destroy: 'never',
        icon: 'error',
        iconOptions: {                      
            position: 'right',              //Icon 位置
        },
        html: true,
        message: stringifyHtml('{ "parentElement": "this", "position": "bottom-right", "direction": "outer", "destroy": "never", "icon": "error", "iconOptions": { "position": "right" }, "html": true, "message": "html" }'),
    }, btnOuterBottomRight);

    var btnOuterLeftTop = document.querySelector('#btn-outer-left-top');
    btnOuterLeftTop.onclick = function() {
        var checkboxValue = getCheckboxValue();
        var message = '上左角，类型：error';
        ohoTips({
            parentElement: parentElementOuter,       //父元素class
            position: "left-top",
            direction: 'outer', //Tip 方向, 默认inner
            type: "error",
            icon: true,
            iconOptions: {                      
                position: 'right',              //Icon 位置
            },
            message: message
        })
    }
    ohoTips().hoverTip({
        parentElement: btnOuterLeftTop,      //父元素id，可接受其它选择器，如class
        position: "left-top",                   //Tip显示位置，父元素左上角
        direction: 'outer',                     //Tip 方向, 默认inner
        destroy: 'never',
        icon: 'error',
        iconOptions: {                      
            position: 'right',              //Icon 位置
        },
        html: true,
        message: stringifyHtml('{ "parentElement": "this", "position": "left-top", "direction": "outer", "destroy": "never", "icon": "error", "iconOptions": { "position": "right" }, "html": true, "message": "html" }'),
    }, btnOuterLeftTop);

    var btnOuterLeftBottom = document.querySelector('#btn-outer-left-bottom');
    btnOuterLeftBottom.onclick = function() {
        var checkboxValue = getCheckboxValue();
        var message = '下左角，类型：error';
        ohoTips({
            parentElement: parentElementOuter,       //父元素class
            position: "left-bottom",
            direction: 'outer', //Tip 方向, 默认inner
            type: "error",
            icon: true,
            iconOptions: {                      
                position: 'right',              //Icon 位置
            },
            message: message
        })
    }
    ohoTips().hoverTip({
        parentElement: btnOuterLeftBottom,      //父元素id，可接受其它选择器，如class
        position: "left-bottom",                   //Tip显示位置，父元素左上角
        direction: 'outer',                     //Tip 方向, 默认inner
        destroy: 'never',
        icon: 'error',
        iconOptions: {                      
            position: 'right',              //Icon 位置
        },
        html: true,
        message: stringifyHtml('{ "parentElement": "this", "position": "left-bottom", "direction": "outer", "destroy": "never", "icon": "error", "iconOptions": { "position": "right" }, "html": true, "message": "html" }'),
    }, btnOuterLeftBottom);

    var btnOuterRightTop = document.querySelector('#btn-outer-right-top');
    btnOuterRightTop.onclick = function() {
        var checkboxValue = getCheckboxValue();
        var message = '上右角，类型：error';
        ohoTips({
            parentElement: parentElementOuter,       //父元素class
            position: "right-top",
            direction: 'outer', //Tip 方向, 默认inner
            type: "error",
            icon: true,
            iconOptions: {                      
                position: 'right',              //Icon 位置
            },
            message: message
        })
    }
    ohoTips().hoverTip({
        parentElement: btnOuterRightTop,      //父元素id，可接受其它选择器，如class
        position: "right-top",                   //Tip显示位置，父元素左上角
        direction: 'outer',                     //Tip 方向, 默认inner
        destroy: 'never',
        icon: 'error',
        iconOptions: {                      
            position: 'right',              //Icon 位置
        },
        html: true,
        message: stringifyHtml('{ "parentElement": "this", "position": "right-top", "direction": "outer", "destroy": "never", "icon": "error", "iconOptions": { "position": "right" }, "html": true, "message": "html" }'),
    }, btnOuterRightTop);

    var btnOuterRightBottom = document.querySelector('#btn-outer-right-bottom');
    btnOuterRightBottom.onclick = function() {
        var checkboxValue = getCheckboxValue();
        var message = '下右角，类型：error';
        ohoTips({
            parentElement: parentElementOuter,       //父元素class
            position: "right-bottom",
            direction: 'outer', //Tip 方向, 默认inner
            type: "error",
            icon: true,
            iconOptions: {                      
                position: 'right',              //Icon 位置
            },
            message: message
        })
    }
    ohoTips().hoverTip({
        parentElement: btnOuterRightBottom,      //父元素id，可接受其它选择器，如class
        position: "right-bottom",                   //Tip显示位置，父元素左上角
        direction: 'outer',                     //Tip 方向, 默认inner
        destroy: 'never',
        icon: 'error',
        iconOptions: {                      
            position: 'right',              //Icon 位置
        },
        html: true,
        message: stringifyHtml('{ "parentElement": "this", "position": "right-bottom", "direction": "outer", "destroy": "never", "icon": "error", "iconOptions": { "position": "right" }, "html": true, "message": "html" }'),
    }, btnOuterRightBottom);

}

function tipFloat() {
    var clickDesrtoyNever1 = false;
    var desrtoyNeverTip1;
    var clickDesrtoyNever2 = false;
    var desrtoyNeverTip2;
        
    document.querySelector('#btn-float-default').onclick = function() {
        clickDesrtoyNever1 = !clickDesrtoyNever1;
        if(clickDesrtoyNever1) {
            var message = [
                '默认浮动',
                '再次点击销毁',
            ];
            desrtoyNeverTip1 = ohoTips({
                parentElement: parentElementFloat,      //父元素id，可接受其它选择器，如class
                position: "float",                      //Tip显示位置，浮动
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
                message: message,                               //Tip内容
            })
        }else {
            desrtoyNeverTip1.remove();
        }
    }
    document.querySelector('#btn-float-x').onclick = function() {
        var message = 'X浮动';
        ohoTips({
            parentElement: parentElement,
            position: "float",                      //Tip显示位置，浮动
            float: {
                type: "x",                          //浮动类型
            },
            destroy: "never",                       //从不销毁
            message: message,                               //Tip内容
        })
    }
    document.querySelector('#btn-float-square').onclick = function() {
        var message = '方形浮动';
        ohoTips({
            //parentElement: parentElementFloat,
            position: "float",                      //Tip显示位置，浮动
            float: {
                type: 'square',
            },
            destroy: "never",                       //从不销毁
            message: message,                               //Tip内容
        })
    }

    document.querySelector('#btn-float-x-custom').onclick = function() {
        var message = '配置X浮动';
        ohoTips({
            parentElement: parentElementFloat,
            position: "float",                      //Tip显示位置，top为上居中
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
            message: message,                               //Tip内容
        })
    }
    document.querySelector('#btn-float-square-custom').onclick = function() {
        var message = '配置方形浮动';
        ohoTips({
            //parentElement: parentElementFloat,
            position: "float",                      //Tip显示位置，top为上居中
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
                customFloatCallback: function() { console.log(this.backup._tElem); }
            },
            destroy: "never",                       //从不销毁
            message: message,                               //Tip内容
        })
    }
    document.querySelector('#btn-float-custom').onclick = function() {
        var message = '自定义浮动，三角形';
        var customFloatFuntion =  function(){
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
            //parentElement: parentElementFloat,
            position: "float",                      //Tip显示位置，浮动
            float: {
                customFloatFuntion: customFloatFuntion,           //自定义浮动函数
            },
            destroy: "never",                       //从不销毁
            message: message,                               //Tip内容
        })
    }

    document.querySelector('#btn-float-translate-default').onclick = function() {
        clickDesrtoyNever2 = !clickDesrtoyNever2;
        if(clickDesrtoyNever2) {
            var message = [
                '默认浮动-Translate',
                '再次点击销毁',
            ];
            desrtoyNeverTip2 = ohoTips({
                parentElement: parentElementFloat,      //父元素id，可接受其它选择器，如class
                position: "translate",                  //Tip显示位置，浮动
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
                message: message,                               //Tip内容
            })
        }else {
            desrtoyNeverTip2.remove();
        }
    }
    document.querySelector('#btn-float-translate-x').onclick = function() {
        var message = 'X浮动-Translate';
        ohoTips({
            parentElement: parentElement,
            position: "translate",                      //Tip显示位置，浮动
            float: {
                type: "x",                          //浮动类型
            },
            destroy: "never",                       //从不销毁
            message: message,                               //Tip内容
        })
    }
    document.querySelector('#btn-float-translate-square').onclick = function() {
        var message = '方形浮动-Translate';
        ohoTips({
            //parentElement: parentElementFloat,
            position: "translate",                      //Tip显示位置，浮动
            float: {
                type: 'square',
            },
            destroy: "never",                       //从不销毁
            message: message,                               //Tip内容
        })
    }

    document.querySelector('#btn-float-translate-x-custom').onclick = function() {
        var message = '配置X浮动-Translate';
        ohoTips({
            parentElement: parentElementFloat,
            position: "translate",                  //Tip显示位置，top为上居中
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
            message: message,                               //Tip内容
        })
    }
    document.querySelector('#btn-float-translate-square-custom').onclick = function() {
        var message = '配置方形浮动-Translate';
        ohoTips({
            //parentElement: parentElementFloat,
            position: "translate",                      //Tip显示位置，top为上居中
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
                customFloatCallback: function() { console.log(this.backup._tElem); }
            },
            destroy: "never",                       //从不销毁
            message: message,                               //Tip内容
        })
    }
    document.querySelector('#btn-float-translate-custom').onclick = function() {
        var message = '自定义浮动-Translate，三角形';
        var customFloatFuntion =  function(){
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
            //parentElement: parentElementFloat,
            position: "translate",                  //Tip显示位置，浮动
            float: {
                customFloatFuntion: customFloatFuntion,           //自定义浮动函数
            },
            destroy: "never",                       //从不销毁
            message: message,                               //Tip内容
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
            //parentElement: parentElementGroup,
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
            parentElement: parentElementGroup,
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
            parentElement: parentElementGroup,
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
            parentElement: parentElementAnimation,
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
            message: message,
        })
    };

    document.querySelector('#btn-animation-a').onclick = function() {
        var position = 'top-center';
        var icon = 'success';
        var icon = 'clock';
        var message = ['当前时间： ' , new Date()];
        
        ohoTips({
            // parentElement: parentElementAnimation,
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
                in: 'oho',
                out: 'oho',
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
            // parentElement: parentElementAnimation,
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
            // parentElement: parentElementAnimation,
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
            // parentElement: parentElementAnimation,
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
            parentElement: parentElementAnimation,
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
                    let $tip = this.backup._tElem;
                    let $tipGroup = this.backup._tgElem;
                    let $bg = this.backup._bgElem;

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