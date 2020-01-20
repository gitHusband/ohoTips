var bodyElement = '';
var parentElement = "#box-parent";
var parentElementFloat = "#box-float";
var parentElementGroup = "#box-group";
var parentElementAnimation = '#box-animation';

function tipDefault() {
    document.querySelector('#btn-body-top-left').onclick = function() {
        var msg = '窗口左上角，类型：success';
        ohoTips({
            parentElement: bodyElement,         //父元素为空或者body，则定位基于整个窗口
            position: "top-left",               //Tip显示位置，窗口左上角
            // type: "success",                    //显示的class，可接受自定义
            icon: false,                        //不显示图标
            // msg: msg,                           //Tip内容
        })
    }
    document.querySelector('#btn-body-top-center').onclick = function() {
        var msg = '窗口上居中，类型：success';
        ohoTips({
            parentElement: bodyElement,         //父元素为空或者body，则定位基于整个窗口
            position: "top-center",             //Tip显示位置，窗口上居中
            type: "success",                    //显示的class，可接受自定义
            icon: false,                        //不显示图标
            // msg: msg,                           //Tip内容
        })
    }
    document.querySelector('#btn-body-top-right').onclick = function() {
        var msg = '窗口右上角，类型：success';
        ohoTips({
            parentElement: bodyElement,         //父元素为空或者body，则定位基于整个窗口
            position: "top-right",              //Tip显示位置，窗口右上角
            type: "success",                    //显示的class，可接受自定义
            icon: false,                         //显示icon, 可接受自定义
            msg: msg                            //Tip内容
        })
    }
    document.querySelector('#btn-body-center-left').onclick = function() {
        var msg = '窗口左居中，类型：warning';
        ohoTips({
            parentElement: bodyElement,
            position: "center-left",
            type: "warning",
            icon: false,                        //不显示图标
            msg: msg
        })
    }
    document.querySelector('#btn-body-middle').onclick = function() {
        var msg = '窗口垂直居中，类型：normal';
        ohoTips({
            parentElement: bodyElement,     
            position: "middle",
            //type: "normal",                   //默认 normal
            background: true,                   //显示遮罩层
            icon: false,                        //不显示图标
            msg: msg,                           //Tip内容
        })
    }
    document.querySelector('#btn-body-center-right').onclick = function() {
        var msg = '窗口右居中，类型：normal';
        ohoTips({
            parentElement: bodyElement,
            position: "center-right",
            type: "info",
            icon: false,                        //不显示图标
            msg: msg
        })
    }

    document.querySelector('#btn-body-bottom-left').onclick = function() {
        var msg = '窗口左下角，类型：error';
        ohoTips({
            parentElement: "",
            position: "bottom-left",
            type: "error",
            icon: false,                        //不显示图标
            msg: msg
        })
    }
    document.querySelector('#btn-body-bottom-center').onclick = function() {
        var msg = '窗口下居中，类型：error';
        ohoTips({
            parentElement: "",
            position: "bottom-center",
            type: "error",
            icon: false,                        //不显示图标
            msg: msg
        })
    }
    document.querySelector('#btn-body-bottom-right').onclick = function() {
        var msg = '窗口右下角，类型：error';
        ohoTips({
            //parentElement: "",
            position: "bottom-right",
            type: "error",
            icon: false,                        //不显示图标
            msg: msg
        })
    }

    document.querySelector('#btn-top-left').onclick = function() {
        var msg = '左上角，类型：success';
        ohoTips({
            parentElement: parentElement,       //父元素id，可接受其它选择器，如class
            position: "top-left",               //Tip显示位置，父元素左上角
            type: "success",                    //显示的class，可接受自定义
            msg: msg                            //Tip内容
        })
    }

    document.querySelector('#btn-top-center').onclick = function() {
        var msg = '上居中，类型：success';
        ohoTips({
            parentElement: parentElement,       //父元素id，可接受其它选择器，如class
            position: "top-center",             //Tip显示位置，父元素上居中
            type: "success",                    //显示的class，可接受自定义
            icon: true,
            iconOptions: {                      
                position: 'top',                //Icon 位置
            },
            destroy: 'manual',
            msg: msg                            //Tip内容
        })
    }

    document.querySelector('#btn-top-right').onclick = function() {
        var msg = '右上角，类型：success';
        ohoTips({
            parentElement: parentElement,       //父元素id，可接受其它选择器，如class
            position: "top-right",              //Tip显示位置，父元素右上角
            type: "success",                    //显示的class，可接受自定义
            icon: true,
            iconOptions: {                      
                position: 'right',              //Icon 位置
            },
            msg: msg                            //Tip内容
        })
    }

    document.querySelector('#btn-center-left').onclick = function() {
        var msg = '左居中，类型：warning';
        ohoTips({
            parentElement: parentElement,
            position: "center-left",
            type: "warning",
            msg: msg
        })
    }
    document.querySelector('#btn-middle').onclick = function() {
        var msg = '垂直居中，类型：normal';
        ohoTips({
            parentElement: parentElement,
            position: "middle",
            //type: "normal",                   //默认 normal
            background: true,
            icon: 'success',
            iconOptions: {                      
                position: 'top',                //Icon 位置
            },
            animation: {
                in: 'A',
                out: 'A'
            },
            msg: msg
        })
    }
    document.querySelector('#btn-center-right').onclick = function() {
        var msg = '右居中，类型：info';
        ohoTips({
            parentElement: parentElement,
            position: "center-right",
            type: "info",
            icon: true,
            icon: true,
            iconOptions: {                      
                position: 'right',              //Icon 位置
            },
            msg: msg
        })
    }

    document.querySelector('#btn-bottom-left').onclick = function() {
        var msg = '左下角，类型：error';
        ohoTips({
            parentElement: ".box-parent",       //父元素class
            position: "bottom-left",
            type: "error",
            msg: msg
        })
    }
    document.querySelector('#btn-bottom-center').onclick = function() {
        var msg = '下居中，类型：error';
        ohoTips({
            parentElement: ".box-parent",       //父元素class
            position: "bottom-center",
            type: "error",
            icon: true,
            iconOptions: {                      
                position: 'bottom',             //Icon 位置
            },
            msg: msg
        })
    }
    document.querySelector('#btn-bottom-right').onclick = function() {
        var msg = '右下角，类型：error';
        ohoTips({
            parentElement: ".box-parent",       //父元素class
            position: "bottom-right",
            type: "error",
            icon: true,
            iconOptions: {                      
                position: 'right',              //Icon 位置
            },
            msg: msg
        })
    }
    
    document.querySelector('#btn-array-top').onclick = function() {
        var msg = [                         //换行数组
            '生活就像海洋',
            '只有意志坚强的人才能到达彼岸'
        ];
        ohoTips({
            parentElement: parentElement,
            position: "top-center",
            type: "success",
            msg: msg
        })
    }
    document.querySelector('#btn-array-middle').onclick = function() {
        var msg = [                         //换行数组
            '窗前明月光，',
            '疑似地上霜。',
            '举头望明月，',
            '低头思故乡。',
        ];
        ohoTips({
            parentElement: parentElement,
            position: "middle",
            type: "info",
            msg: msg
        })
    }
    document.querySelector('#btn-array-bottom').onclick = function() {
        var msg = [                         //换行数组
            '警告',
            '吸烟有害健康！'
        ];
        ohoTips({
            parentElement: parentElement,
            position: "bottom-center",
            type: "error",
            msg: msg
        })
    }
    document.querySelector('#btn-delay').onclick = function() {
        var msg = '3s 后销毁 Tip';
        ohoTips({
            parentElement: parentElement,
            position: "middle",
            background: true,
            delay: 3000,                    //3s 后自动销毁
            msg: msg
        })
    }
    document.querySelector('#btn-destroy').onclick = function() {
        var msg = '手动销毁 Tip';
        ohoTips({
            parentElement: parentElement,
            position: "top-center",
            destroy: 'manual',              //手动销毁
            type: 'normal',
            icon: 'error',
            background: true,
            msg: msg
        })
    }
    var clickDesrtoyNever = false;
    var desrtoyNeverTip;
    document.querySelector('#btn-destroy-never').onclick = function() {
        clickDesrtoyNever = !clickDesrtoyNever;
        if(clickDesrtoyNever){
            var msg = ['永不销毁 Tip', '再按一次销毁'];
            desrtoyNeverTip = ohoTips({
                parentElement: parentElement,
                position: "middle",
                destroy: 'never',           //永不销毁
                icon: 'clock',
                msg: msg
            })
        }else{
            desrtoyNeverTip.remove();
        }
    }
    document.querySelector('#btn-simple').onclick = function() {
        var msg = [
            '简单调用 Tip',
            '这种方法调用方便，一般使用该类方法即可'
        ];
        var parent = parentElement;
        ohoTips().info(msg, parent);     //这种方法调用方便，一般使用该类方法即可
        setTimeout(function () {
            ohoTips().success(msg, parent);
        }, 1000);
        setTimeout(function () {
            ohoTips().error(msg, $(parent));
        }, 2000);
        setTimeout(function () {
            ohoTips().warning(msg, parent);
        }, 3000);
        setTimeout(function () {
            ohoTips().normal(msg, 'success', parent);
        }, 4000);
        setTimeout(function () {
            ohoTips().show(msg, "info", parent);
        }, 5000);
    }
    document.querySelector('#btn-callback').onclick = function() {
        var msg = '回调函数 Tip';
        ohoTips({
            parentElement: parentElement,
            position: "middle",
            destroy: 'manual',         //手动销毁
            background: true,
            msg: msg,
            callback: function() {
                console.log(this);
                alert("Tip 渲染提示信息后，回调");
            }
        })
    }
    document.querySelector('#btn-html').onclick = function() {
        var random = Math.round(Math.random()*Math.pow(10, 10));
        var randBtnId = "btn-tip-close"+random;
        var msg = '<div class="box1" style="width: 160px">\n' +
            '        <h4 style="text-align: center">Html Tip 说明</h4>\n' +
            '        <p id="tip-content" style="text-indent:10px">设置选项html: true, msg 选项传入html元素实体。</p>\n' +
            '        <div class="box-center"><button id="'+randBtnId+'" class="button black">隐藏 说明</button></div>\n' +
            '    </div>';

        ohoTips({
            parentElement: parentElement,
            position: "middle",
            type: "box-html",       //自定义msg 样式
            icon: false,
            destroy: 'manual',
            // background: true,
            html: true,
            msg: msg,
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

    document.querySelector('#btn-custom-normal').onclick = function() {
        var posTop = document.querySelector("#cus-top").value;
        var posLeft = document.querySelector("#cus-left").value;
        var posBottom = document.querySelector("#cus-bottom").value;
        var posRight = document.querySelector("#cus-right").value;

        var position = {
            top: posTop,
            left: posLeft,
            bottom: posBottom,
            right: posRight
        };
        var msg = [
            '自定义位置 : ' + posTop + ' - ' + posLeft + ' - ' + posBottom + ' - ' + posRight,
            '普通定位方案，不计算Tips宽高，按照position数据来',
        ];

        ohoTips({
            parentElement: parentElement,
            position: position,
            direction: 'normal',
            background: true,
            delay: 2000,
            type: "error",
            msg: msg
        })
    }
    document.querySelector('#btn-custom-default').onclick = function() {
        var posTop = document.querySelector("#cus-top").value;
        var posLeft = document.querySelector("#cus-left").value;
        var posBottom = document.querySelector("#cus-bottom").value;
        var posRight = document.querySelector("#cus-right").value;

        var position = {
            top: posTop,
            left: posLeft,
            bottom: posBottom,
            right: posRight
        };
        var msg = [
            '自定义位置 : ' + posTop + ' - ' + posLeft + ' - ' + posBottom + ' - ' + posRight,
            '内部(默认)定位方案，计算Tips 宽高，尽量使Tips 位于父元素内部',
        ];

        ohoTips({
            parentElement: parentElement,
            position: position,
            // direction: 'inner',
            background: true,
            delay: 2000,
            type: "normal",
            msg: msg
        })
    }
    document.querySelector('#btn-custom-outer').onclick = function() {
        var posTop = document.querySelector("#cus-top").value;
        var posLeft = document.querySelector("#cus-left").value;
        var posBottom = document.querySelector("#cus-bottom").value;
        var posRight = document.querySelector("#cus-right").value;

        var position = {
            top: posTop,
            left: posLeft,
            bottom: posBottom,
            right: posRight
        };
        var msg = [
            '自定义位置 : ' + posTop + ' - ' + posLeft + ' - ' + posBottom + ' - ' + posRight,
            '外部定位方案，计算Tips 宽高，尽量使Tips 位于父元素外部',
        ];

        ohoTips({
            parentElement: parentElement,
            position: position,
            direction: 'outer',
            background: true,
            delay: 2000,
            type: "normal",
            msg: msg
        })
    }
}

function tipFloat() {
    var clickDesrtoyNever1 = false;
    var desrtoyNeverTip1;
    var clickDesrtoyNever2 = false;
    var desrtoyNeverTip2;
        
    document.querySelector('#btn-float-default').onclick = function() {
        clickDesrtoyNever1 = !clickDesrtoyNever1;
        if(clickDesrtoyNever1) {
            var msg = [
                '默认浮动',
                '再次点击销毁',
            ];
            desrtoyNeverTip1 = ohoTips({
                parentElement: parentElementFloat,      //父元素id，可接受其它选择器，如class
                position: "float",                      //Tip显示位置，浮动
                float: {
                    type: "default",                    //浮动类型
                    /*cusFloatOptions: {                //浮动参数
                        status: true,
                        xOffsetLen: 0.0005,
                        yOffsetLen: 0.0005,
                        delay: 10,
                    },
                    cusFloatStatus: {                   //浮动初始状态
                        top: 60,
                        left: 60,
                    }*/
                },
                destroy: "never",                       //从不销毁
                msg: msg,                               //Tip内容
            })
        }else {
            desrtoyNeverTip1.remove();
        }
    }
    document.querySelector('#btn-float-x').onclick = function() {
        var msg = 'X浮动';
        ohoTips({
            parentElement: parentElement,
            position: "float",                      //Tip显示位置，浮动
            float: {
                type: "x",                          //浮动类型
            },
            destroy: "never",                       //从不销毁
            msg: msg,                               //Tip内容
        })
    }
    document.querySelector('#btn-float-square').onclick = function() {
        var msg = '方形浮动';
        ohoTips({
            //parentElement: parentElementFloat,
            position: "float",                      //Tip显示位置，浮动
            float: {
                type: 'square',
            },
            destroy: "never",                       //从不销毁
            msg: msg,                               //Tip内容
        })
    }

    document.querySelector('#btn-float-x-custom').onclick = function() {
        var msg = '配置X浮动';
        ohoTips({
            parentElement: parentElementFloat,
            position: "float",                      //Tip显示位置，top为上居中
            float: {
                type: "x",                          //浮动类型
                cusFloatOptions: {
                    offsetType: '%',
                    xMinThreshold: 0,
                    xMaxThreshold: 100,
                    xOffsetLen: 0.05,
                    yMinThreshold: 0,
                    yMaxThreshold: 100,
                    yOffsetLen: 0.05,
                    delay: 1,
                },
                cusFloatStatus: {
                    top: 50,
                    left: 50,
                }
            },
            destroy: "never",                       //从不销毁
            msg: msg,                               //Tip内容
        })
    }
    document.querySelector('#btn-float-square-custom').onclick = function() {
        var msg = '配置方形浮动';
        ohoTips({
            //parentElement: parentElementFloat,
            position: "float",                      //Tip显示位置，top为上居中
            float: {
                type: 'square',
                cusFloatOptions: {
                    offsetType: '%',
                    xMinThreshold: 0,
                    xMaxThreshold: 100,
                    xOffsetLen: 0.1,
                    yMinThreshold: 0,
                    yMaxThreshold: 0,
                    yOffsetLen: 0.1,
                    delay: 1,
                },
                cusFloatStatus: {
                    top: 0,
                    left: 0,
                },
                cusFloatCallback: function() { console.log(this.backup._tElem); }
            },
            destroy: "never",                       //从不销毁
            msg: msg,                               //Tip内容
        })
    }
    document.querySelector('#btn-float-custom').onclick = function() {
        var msg = '自定义浮动，三角形';
        var cusFloatFun =  function(){
            var _this = this;

            var cusFloatOptions = {
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

            var cusFloatStatus = {
                top: 100,
                left: 0,
            };

            var floatOptions = this.setFloatOptions(cusFloatOptions);
            var floatStatus = this.getfloatStatus(cusFloatStatus);

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
                cusFloatFun: cusFloatFun,           //自定义浮动函数
            },
            destroy: "never",                       //从不销毁
            msg: msg,                               //Tip内容
        })
    }

    document.querySelector('#btn-float-translate-default').onclick = function() {
        clickDesrtoyNever2 = !clickDesrtoyNever2;
        if(clickDesrtoyNever2) {
            var msg = [
                '默认浮动-Translate',
                '再次点击销毁',
            ];
            desrtoyNeverTip2 = ohoTips({
                parentElement: parentElementFloat,      //父元素id，可接受其它选择器，如class
                position: "translate",                  //Tip显示位置，浮动
                float: {
                    type: "default",                    //浮动类型
                    /*cusFloatOptions: {                //浮动参数
                        status: true,
                        xOffsetLen: 0.0005,
                        yOffsetLen: 0.0005,
                        delay: 10,
                    },
                    cusFloatStatus: {                   //浮动初始状态
                        top: 60,
                        left: 60,
                    }*/
                },
                destroy: "never",                       //从不销毁
                msg: msg,                               //Tip内容
            })
        }else {
            desrtoyNeverTip2.remove();
        }
    }
    document.querySelector('#btn-float-translate-x').onclick = function() {
        var msg = 'X浮动-Translate';
        ohoTips({
            parentElement: parentElement,
            position: "translate",                      //Tip显示位置，浮动
            float: {
                type: "x",                          //浮动类型
            },
            destroy: "never",                       //从不销毁
            msg: msg,                               //Tip内容
        })
    }
    document.querySelector('#btn-float-translate-square').onclick = function() {
        var msg = '方形浮动-Translate';
        ohoTips({
            //parentElement: parentElementFloat,
            position: "translate",                      //Tip显示位置，浮动
            float: {
                type: 'square',
            },
            destroy: "never",                       //从不销毁
            msg: msg,                               //Tip内容
        })
    }

    document.querySelector('#btn-float-translate-x-custom').onclick = function() {
        var msg = '配置X浮动-Translate';
        ohoTips({
            parentElement: parentElementFloat,
            position: "translate",                  //Tip显示位置，top为上居中
            float: {
                type: "x",                          //浮动类型
                cusFloatOptions: {
                    offsetType: '%',
                    xMinThreshold: 0,
                    xMaxThreshold: 100,
                    xOffsetLen: 0.05,
                    yMinThreshold: 0,
                    yMaxThreshold: 100,
                    yOffsetLen: 0.05,
                    delay: 1,
                },
                cusFloatStatus: {
                    top: 50,
                    left: 50,
                }
            },
            destroy: "never",                       //从不销毁
            msg: msg,                               //Tip内容
        })
    }
    document.querySelector('#btn-float-translate-square-custom').onclick = function() {
        var msg = '配置方形浮动-Translate';
        ohoTips({
            //parentElement: parentElementFloat,
            position: "translate",                      //Tip显示位置，top为上居中
            float: {
                type: 'square',
                cusFloatOptions: {
                    offsetType: '%',
                    xMinThreshold: 0,
                    xMaxThreshold: 100,
                    xOffsetLen: 0.1,
                    yMinThreshold: 0,
                    yMaxThreshold: 0,
                    yOffsetLen: 0.1,
                    delay: 1,
                },
                cusFloatStatus: {
                    top: 0,
                    left: 0,
                },
                cusFloatCallback: function() { console.log(this.backup._tElem); }
            },
            destroy: "never",                       //从不销毁
            msg: msg,                               //Tip内容
        })
    }
    document.querySelector('#btn-float-translate-custom').onclick = function() {
        var msg = '自定义浮动-Translate，三角形';
        var cusFloatFun =  function(){
            var _this = this;

            var cusFloatOptions = {
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

            var cusFloatStatus = {
                top: 100,
                left: 0,
            };

            var floatOptions = this.setFloatTranslateOptions(cusFloatOptions);
            var floatStatus = this.getfloatTranslateStatus(cusFloatStatus);

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
                cusFloatFun: cusFloatFun,           //自定义浮动函数
            },
            destroy: "never",                       //从不销毁
            msg: msg,                               //Tip内容
        })
    }
}

function tipGroup() {
    var status1 = true;
    document.querySelector('#btn-group-1').onclick = function() {
        var position = positionRandom();
        var position = 'top-center';
        var icon = typeRandom();
        var msg = '';
        var random = randomNum(0, 1);
        if(random == 1) {
            msg = '定位： ' + position;
        }else {
            msg = ['当前时间： ' , new Date() + new Date()];
        }

        
        if(status1) {
            var msg = '定位： ' + position;
        }else {
            var msg = ['当前时间： ' , new Date() + new Date()];
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
                len: 3,
            },
            destroy: "manual",
            msg: msg,
        })
    }

    document.querySelector('#btn-group-2').onclick = function() {
        var position = positionRandom();
        var position = 'top-left';
        var type = typeRandom();
        var msg = '';
        var random = randomNum(0, 1);
        if(random == 1) {
            msg = '定位： ' + position;
        }else {
            msg = ['当前时间： ' , new Date() + new Date()];
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
                len: 2,
            },
            destroy: "manual",
            msg: msg,
        })
    }

    document.querySelector('#btn-group-3').onclick = function() {
        var position = positionRandom();
        var position = 'top-right';
        var icon = typeRandom();
        var msg = ['当前时间： ' , new Date() + new Date()];
        
        ohoTips({
            parentElement: parentElementGroup,
            position: position,
            //background: randomNum(0, 1),
            type: 'normal',
            //limit: false,
            icon: icon,
            group: {
                name: 'thirdGroup',
                len: 1,
            },
            destroy: "manual",
            msg: msg,
        })
    }
}

function animation() {
    document.querySelector('#btn-animation-oho').onclick = function() {
        var position = 'top-center';
        var icon = 'success';
        var msg = ['当前时间： ' , new Date()];
        
        ohoTips({
            parentElement: parentElementAnimation,
            position: position,
            // background: true,
            type: 'normal',
            //limit: false,
            icon: icon,
            // group: {
            //     name: 'amtGroup',
            //     len: 1,
            // },
            // destroy: "manual",
            msg: msg,
        })
    };

    document.querySelector('#btn-animation-a').onclick = function() {
        var position = 'top-center';
        var icon = 'success';
        var icon = 'clock';
        var msg = ['当前时间： ' , new Date()];
        
        ohoTips({
            // parentElement: parentElementAnimation,
            position: position,
            // background: true,
            type: 'normal',
            //limit: false,
            icon: icon,
            group: {
                name: 'amtGroup-1',
                len: 4,
            },
            destroy: "manual",
            animation: {
                in: 'oho',
                out: 'oho',
            },
            msg: msg,
        })
    };

    document.querySelector('#btn-animation-cus1').onclick = function() {
        var position = 'top-center';
        var icon = 'error';
        var msg = ['自定义动画类型-1', '当前时间： ' , new Date()];
        
        ohoTips({
            parentElement: parentElementAnimation,
            position: position,
            background: true,
            type: 'normal',
            limit: false,
            icon: icon,
            group: {
                name: 'amtGroup-cus',
                len: 4,
            },
            // destroy: "manual",
            animation: {
                cusAmtFun: function(status) {
                    let C = this.C;
                    let $tip = this.backup._tElem;
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
            msg: msg,
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
    tipDefault();
    tipFloat();
    tipGroup();
    animation();
}

window.addEventListener('load', onLoad, false);