# ohoTips - 一款功能丰富的前端弹出消息提醒工具

ohoTips 消息美观，可自由方便地定位消息位置，支持任何定位。

**下面简单介绍下该工具的用法：**

```
ohoTips({
    parentElement: parent,              //父元素为空或者body，则定位基于整个窗口
    position: "top-left",               //Tip显示位置，窗口左上角
    type: "success",                    //显示的class，可接受自定义
    icon: false,                        //不显示图标
    message: message,                   //Tip内容
})

ohoTips().success(message, parent);

ohoTips(message, options);
```

## 1. 简介
### 1.1 特点
- 支持单行、多行消息，支持 DOM 消息
- 支持自定义消息类型，成功、失败、警告、信息、普通5种类型，默认普通
- 支持自定义图标，成功、失败、警告、信息4种类型，默认成功；支持自定义图标位置，上下左右，默认左
- 支持遮罩层，遮盖住整个父元素
- 支持自定义消息位置类型，有左上角，上居中，右上角，左居中，全居中，右居中，左小角，下居中，右小角。定位基于父元素，父元素可以是任意元素，也可以基于整个窗口
- 支持精准定位，也就是传说中的top，left，right，bottom。父元素可以是任意元素，也可以基于整个窗口
- 支持自定义消息手动销毁，销毁延时以及手动销毁
- 支持生命周期函数，shown, destroyed 等
- 支持消息分组，同组消息上下排列
- 支持浮动，使消息在页面来回浮动。支持自定义浮动函数
- 支持自定义动画类型，支持自定义动画函数

## 2. 安装
项目引入 ohoTips.js

```
<html>
    <link href="lib/ohoTips/css/ohoTips.css" rel="stylesheet">
    <script src="lib/ohoTips/js/ohoTips.js"></script>
</html>
```
## 3. 配置

```
{
    parentElement: "",          //基准方位元素
    direction: 'inner',         //计算tips定位时，inner - 计算Tips 宽高，尽量使Tips 位于父元素内部，'normal' - 不计算Tips宽高，按照position数据来，'outer' - 计算Tips 宽高，尽量使Tips 位于父元素外部； 默认'inner'。
    position: "middle",         //tips 位置，左上角，上居中，右上角，左居中，全居中，右居中，左下角，下居中，右下角，自定义相对位置，浮动
    offset: {                   //如果position 是对象如{tip: 0}，则一般不需要这个，如果是字符串，则可以酌情添加offset, 调整父元素与Tips 的相对定位, 仅支持top，left
        top: null,
        left: null
    },
    group: {                    //分组，多个Tips 集合，超出分组最大限制个数则删除最开始的Tips
        name: null,                 //分组名称
        maxLength: 9999,            //一个分组最大Tips个数
    },
    type: "normal",             //tips 样式, 支持自定义样式（传入class名称）
    limit: true,                //限制Tips 的大小
    icon: false,                //是否显示icon, true - 按照type参数自动设置icon类型，支持字符串设置icon类型，主要是形状，如 normal，clock等
    iconOptions: {
        type: 'info',           //当icon 为字符串时，icon主要定制形状(也含颜色)，此时type可以额外设置icon 的色调
        position: 'left',       //icon 的位置，支持top, left, bottom, right
    },
    symbol: false,              //是否显示binder, true - 默认triangle，支持字符串设置symbol类型，如 triangle等，目前仅支持triangle
    symbolOptions: {
        type: null,             //如果不设置，symbol则按option.type 色调，否则按该参数的色调
        position: null,         //如果不设置，symbol则根据option.position 设置定位(不一定一样)，否则按该参数定位
        offset: {               //如果启用symbol，symbol不计算宽高，则可以酌情添加offset, 调整父元素与Tips 的相对定位, 仅支持top，left
            top: null,
            left: null
        }
    },
    shadow: false,              //false - 没有阴影， true - 有阴影
    background: false,          //false - 不显示遮罩层覆盖父元素， true - 显示遮罩层覆盖父元素
    destroy: "auto",            //auto - 自动销毁tips，manual - 不自动销毁tips，需手动销毁, never - 从不销毁tips
    delay: 2000,                //自动销毁tips 延时，单位：ms
    message: '',                //传入数组可换行
    html: {
        param: false,               //false - 文本类型信息，true - dom元素类型信息
        isParentTransparent: false, //false - 父元素不透明，true - 父元素透明
    },                
    float: {                    //浮动参数，当position 等于 'float' 或 'translate' 时，可选；其余情况不需要 
        type: 'default',            //可选择默认浮动方法，浮动方法支持自定义，见 customFloatType
        customFloatOptions: null,   //自定义浮动选项
        customFloatStatus: null,    //自定义浮动初始状态，top，left等
        customFloatType: null,      //自定义浮动类型的方法, 参考 floatTypeDefault 方法
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
        customAmtFuntion: null,     //自定义Tips 动画函数
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
}
```


## 4. 功能介绍
### 4.1 消息


