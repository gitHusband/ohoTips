# Tips
Tips is a jQurey plug-in that facilitates the generation of prompt information which is in the middle or other location relative to any parent element.

# 使用方法
将 jquery-tips 文件夹包含到你的项目。

    * 第一种方法，用于特殊需求定制
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

    * 第二种方法，用于简单调用
    $.tips().success(parentElement, msg);
