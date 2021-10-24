# ohoTips - 一款功能丰富的前端弹出消息提醒工具

ohoTips 消息美观，可自由方便地定位消息位置，支持任何定位。

麻烦您务必阅读下 **1.3 开发目标**， 谢谢！

> 目录

[TOC]

## 1. 简介
### 1.1 特点
- 支持单行、多行消息，支持 DOM 消息
- 支持自定义消息类型，成功、失败、警告、信息、普通5种类型，默认普通
- 支持自定义图标，成功、失败、警告、信息4种类型，默认成功；支持自定义图标位置，上下左右，默认左
- 支持角标，我也不知道应该管它叫什么，就是消息的那个小三角形
- 支持遮罩层，遮盖住整个基准元素
- 支持自定义消息位置类型，有左上角，上居中，右上角，左居中，全居中，右居中，左小角，下居中，右小角。定位基于基准元素，基准元素可以是任意元素，也可以基于整个窗口
- 支持精准定位，也就是传说中的top，left，right，bottom。基准元素可以是任意元素，也可以基于整个窗口
- 支持自定义消息手动销毁，销毁延时以及手动销毁
- 支持生命周期函数，shown, destroyed 等
- 支持消息分组，同组消息上下排列
- 支持浮动，使消息在页面来回浮动。支持自定义浮动函数
- 支持自定义动画类型，支持自定义动画函数

### 1.2 用法

**下面简单介绍下该工具的用法：**

```
let ohoTips = oho.ohoTips;
let ohoTipsPrototype = oho.ohoTipsPrototype;

ohoTips({
    baseElement: baseElement,           //基准元素为空或者body，则定位基于整个窗口
    position: "top-left",               //Tip显示位置，窗口左上角
    type: "success",                    //显示的class，可接受自定义
    icon: false,                        //不显示图标
    message: message,                   //Tip内容
})

ohoTips().success(message, baseElement);

ohoTips(message, options);
```
> 具体例子展示 请看 index.html

### 1.3 开发目标

1. 增加更多的css样式
2. 增加更多的图标
3. 增加更多类型的角标，目前仅有三角形（难度较高）
4. 增加更多的消息边框，目前仅是方形（难度较高）
5. 优化浮动效果，减少抖动
6. 增加更多的浮动效果
7. 增加更多的动画效果
8. 针对图片的设计，比如鼠标悬浮则自动放大图片细节

。。。

**如果您对我的作品感兴趣的话，**

**诚邀来自五湖四海的你共同开发ohoTips!**

**联系人：蛮吉是魁拔 - 707077549@qq.com**

## 2. 如何引用

ohoTips 可以与 CommonJS、AMD 以及 script 标签使用。

```
# 项目引入 ohoTips.js, ohoTips.min.css
<html>
    <link href="../dist/ohoTips/css/themes/ohoTips.min.css" rel="stylesheet">
    <script src="../dist/ohoTips/js/ohoTips.min.js"></script>
</html>
```
本插件提供测试代码，打开 examples/index.html 即可。

您可以直接引用 ./dist 文件夹里面的文件, 这是已经构建好的文件。

如果您想要开发或者设计您喜欢的样式，可以看看 3. 开发与构建

## 3. 开发与构建

### 3.1. css 构建

目前提供了两种样式，ohoTips.scss 和 ohoTips-light.scss
```
ohoTips.scss - 默认样式
ohoTips-light.scss - 只是改了一点点默认样式，您可参考这个定制您喜欢的样式
```

```
# 构建调试版
sass src/css/themes/ohoTips.scss dist/ohoTips/css/themes/ohoTips.css --style expanded
# 构建生产版
sass src/css/themes/ohoTips.scss dist/ohoTips/css/themes/ohoTips.min.css --style compressed
```
如果不熟悉 sass，请参考 [如何安装Sass](https://www.sass.hk/install/)

### 3.2. js 构建

```
npm install -save-dev   // 安装依赖

npm run dev             // 构建调试版JS
npm run prod            // 构建生产版JS
```
如果不熟悉 webpack, 请参考 [起步](https://webpack.docschina.org/guides/getting-started/)

### 3.3 开发

1. 本插件提供测试代码，打开 examples/index.html 即可。

每次修改 src 里面的源码，您必须重新构建 css 或者 js, 然后刷新页面。

2. 模块热替换开发

开发过程中，强烈建议使用 webpack 提供的 [模块热替换](https://webpack.docschina.org/guides/hot-module-replacement/) 功能。它允许在运行时更新所有类型的模块，而无需完全刷新。

```
// 运行此命令，将自动打开 examples/index.html，任何修改都无所刷新页面
npm run start
```


## 4. 配置及使用方法

### 4.1 配置
```
{
    message: '',                //传入数组可换行, 支持DOM元素，jQuery元素
    html: {
        param: false,                   //false - 文本类型信息，true - dom元素类型信息
        isContainerTransparent: false,  //false - Tips 容器不透明，true - Tips 容器透明
    },
    baseElement: "",            //基准方位元素
    parentElement: "",          //Tips container 直接父元素，注意，基准元素建议也是父元素的子元素，且父元素定位是特殊的定位类型
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
}
```
### 4.2 使用方法

1. **Options 实例法**

直接实例化并且创建展示Tips
```
ohoTips({
    baseElement: baseElement,           //基准元素为空或者body，则定位基于整个窗口
    position: "top-left",               //Tip显示位置，窗口左上角
    type: "success",                    //显示的class，可接受自定义
    icon: false,                        //不显示图标
    message: message,                   //Tip内容
})
```

2. **空实例法**

先生成Tips实例但不展示Tips, 然后再创建Tips。

目的是简化调用，其他配置保持默认值。

```
ohoTips().show(message, "success", baseElement);
或者
ohoTips().normal(message, baseElement);
ohoTips().success(message, baseElement);
ohoTips().error(message, baseElement);
ohoTips().warning(message, baseElement);
ohoTips().info(message, baseElement);
```

实现鼠标悬停，展示详情的效果。
```
ohoTips().hoverTip({
    baseElement: hoverElement,              //基准元素，可以不是hoverElement 
    position: "top-center",                 //Tip显示位置，基准元素左上角
    direction: 'outer',                     //Tip 方向, 在基准元素外部
    type: 'success',
    destroy: 'never',                       //永不销毁，鼠标移开后销毁
    message: '当鼠标悬停时，展示详情',
}, hoverElement);                           //鼠标悬停对象hoverElement
```

3. **Message 实例法**

```
ohoTips(message, options);
```
与Options 实例法 不同的是，第一个参数是 消息字符串，第二个参数options是可选的。

并且不建议使用第二个参数options，这样就失去了灵性。

我们可以在调用前修改一次Tips 默认配置，这样就一劳永逸了。

```
let options = {
    baseElement: baseElement,           //基准元素为空或者body，则定位基于整个窗口
    position: "top-left",               //Tip显示位置，窗口左上角
    type: "info",                       //显示的class，可接受自定义
    icon: true,                         //显示图标
}
ohoTipsPrototype.setDefOptions(options);

// 重置默认配置
ohoTipsPrototype.resetDefOptions();
```


## 5. 功能介绍
### 5.1 消息

1. 消息支持单行或者多行，多行传入数组
```
ohoTips("Hello World!");

ohoTips(["Hello World!", "Here is the second line."]);
```
2. 支持 DOM 元素 和 jQuery 元素

```
{
    html: true                      //可以直接配置 true, 也可接受对象类型
}

# 或者

{
    html: {
        param: false,               //false - 文本类型信息，true - dom元素类型信息
        isContainerTransparent: false, //false - Tips 容器不透明，true - Tips 容器透明
    }
}

```
以上配置，即使传入字符串，也会被处理成 DOM 元素。

如果直接传入 DOM 元素 或者 jQuery 元素，则可省略以上配置。

### 5.2 基准元素与父元素
**1. 基准元素**
```
{
    baseElement: "",            //基准方位元素
}
```
- 任何定位都以此为基准。默认以整个整个窗口为基准。
- 支持 DOM选择器（id等），DOM元素 以及 jQuery 元素。
- 遮罩层也将遮罩的是基准元素，不是父元素

**2. 父元素**
```
{
    parentElement: "",          //Tips container 直接父元素，注意，基准元素建议也是父元素的子元素，且父元素定位是特殊的定位类型
}
```
Tips container 直接父元素，也就是 Tips 将插入到这个元素内。

**需要说明的是**：

特殊的定位，比如，position: relative / absolute / fixed 。 如果这种定位类型的父元素的子元素的定位是 absolute，定位以父元素为基准。

根据这个特性，我们支持：
- 用户可以根据这个特性自定义父元素，注意，基准元素建议也是父元素的子元素，且父元素定位是特殊的定位类型，否则毫无意义
- 如果基准元素的定位是特殊定位，我们把 Tips 插入到这个基准元素内部
- 如果基准元素的直接父元素的定位是特殊定位，我们把 Tips 插入到这个基准元素的直接父元素
- 以上均不匹配，那么父元素就是 BODY

### 5.3 方位

Tips与基准元素的相对方向 

```
{
    direction: 'inner',         //计算Tips定位时，inner - 计算Tips 宽高，尽量使Tips 位于基准元素内部，'normal' - 不计算Tips宽高，按照position数据来，'outer' - 计算Tips 宽高，尽量使Tips 
}
```

**默认: inner**
- inner - 计算Tips 宽高，尽量使Tips 位于基准元素内部 
- normal - 不计算Tips宽高，按照position数据来，尽量使Tips 位于基准元素内部
- outer - 计算Tips 宽高，尽量使Tips 位于基准元素外部 
- outside - 不计算Tips 宽高，尽量使Tips 位于基准元素外部。与outer 主要是负数有区别


### 5.4 定位

```
{
    position: "middle",         //tips 位置，左上角，上居中，右上角，左居中，全居中，右居中，左下角，下居中，右下角，自定义相对位置，浮动
    offset: {                   //如果position 是对象如{top: 0}，则一般不需要这个，如果是字符串，则可以酌情添加offset, 调整基准元素与Tips 的相对定位, 仅支持top，left
        top: null,
        left: null
    },
}
```
position 支持字符串 或者 对象：

参数 | 描述 |可能的值
---|---|---
position | Tips与基准元素的相对定位  | top-left, top-center , top-right , center-left , middle , <br/> center-right , bottom-left , bottom-center , bottom-right, float, translate
offset | 微调定位 | top, left 设置 微调量, 支持正负数，单位px

特别地，当position 等于 float 或 translate，Tips会浮动起来。具体参考 ++5.10 浮动的Tips++ 

5.5 分组的Tips

```
{
    group: {                    //分组，多个Tips 集合，超出分组最大限制个数则删除最开始的Tips
        name: null,                 //分组名称
        maxLength: 9999,            //一个分组最大Tips个数
    },
}
```
具有相同 group.name 的 Tips 会自动归类为同一组。组控制由以下功能：

- 相同组的Tips 会从上到下自动排列在一起。
- 如果存在的Tips 个数超过 group.maxLength，将自动删除第一个Tips。

### 5.6 css 样式

```
{
    type: "normal",             //Tips 样式, 支持自定义样式（传入class名称）
    limit: true,                //限制Tips 的最大宽度 400px
    shadow: false,              //false - 没有阴影， true - 有阴影
    background: false,          //false - 不显示遮罩层覆盖基准元素， true - 显示遮罩层覆盖基准元素
}
```
插件内内置5种样式可供选择：
*normal, success, error, warning, info*

分别有各自对应的便捷调用：

```
ohoTips().success(message, baseElement);
// 或者
ohoTips().show(message, "success", baseElement);
```
默认: **normal** 

支持自定义css：
- 自写css, 如 
```
my-css-1 { background-color: transparent; }
my-css-2 { color: #ffffff; }
```

- type 传入完整的css，如 
```
{
    type: "my-css-1 my-css2"
}
```

### 5.7 图标

```
{
    icon: false,                //是否显示icon, true - 按照type参数自动设置icon类型，支持字符串设置icon类型，主要是形状，如 normal，clock等
    iconOptions: {
        type: 'info',           //当icon 为字符串时，icon主要定制形状(也含颜色)，此时type可以额外设置icon 的色调
        position: 'left',       //icon 的位置，支持top, left, bottom, right
    },
}
```
插件内内置5种样式可供选择：
*normal, success, error, warning, info, clock*

默认: **info** 


### 5.8 角标

```
{
    symbol: false,              //是否显示binder, true - 默认triangle，支持字符串设置symbol类型，如 triangle等，目前仅支持triangle
    symbolOptions: {
        type: null,             //如果不设置，symbol则按option.type 色调，否则按该参数的色调
        position: null,         //如果不设置，symbol则根据option.position 设置定位(不一定一样)，否则按该参数定位
    },
}
```
角标目前仅支持附着在Tips 边框上三角形标志。**希望朋友们能创作出各种有意思的角标**

角标的type 颜色伴随Tips 的type 颜色，也可自行选择定义。**同 css 样式。**

角标的定位类似Tips 的定位，但有更多的选择。

```
top-left, top-center , top-right , right-top , center-right , right-bottom ,
bottom-left , bottom-center , bottom-right, left-bottom, center-left, left-top, middle
```

### 5.9 销毁

```
{
    destroy: "auto",            //auto - 自动销毁Tips，manual - 不自动销毁Tips，需手动销毁, never - 从不销毁Tips
    delay: 2000,                //自动销毁Tips 延时，单位：ms
}
```
支持3种销毁方式
- **auto** 自动销毁，可设置销毁时间，默认2s
- **manual** 手动销毁，单击Tips 右上角x图标销毁
- **never** 永不销毁，调用接口可销毁Tips - myTips.destroy();

### 5.10 浮动的Tips

```
{
    position: 'float',          //Tip浮动显示，float 或者 translate
    float: {                    //浮动参数，当position 等于 'float' 或 'translate' 时，可选；其余情况不需要 
        type: 'default',            //可选择默认浮动方法，浮动方法支持自定义，见 customFloatType
        customFloatOptions: null,   //自定义浮动选项
        customFloatStatus: null,    //自定义浮动初始状态，top，left等
        customFloatType: null,      //自定义浮动类型的方法, 参考 floatTypeDefault 方法
    },
}
```
当position 等于 float 或 translate，Tips会浮动起来。
- float: 不断设置Tips 的top 以及 left 达到 Tips 浮动的效果
- translate: 不断设置Tips 的css transform Tips 浮动的效果

支持3种销毁方式
- **default**: 默认浮动方式。沿着基准元素左上角到右下角直线浮动
- **x**: 浮动方向是 左上角->右下角->右上角->左下角->左上角...
- **square**: 浮动方向是 左上角->右上角->右下角->左下角->左上角...

### 5.11 动画

```
{
    animation: {                //动画
        in: 'default',              //Tips 显示动画
        out: 'default',             //Tips 隐藏动画
        fragments: {
            type: 1,                    // 两种创建fragment 的算法，0和1，1 体验更好
            basePix: 10,                // 对应type = 0, 最小的像素, type 1则不需要该参数
            xCount: 10,                 // 对应type = 1, 水平fragment的个数
            yCount: 10,                 // 对应type = 1, 垂直fragment的个数
        },
        delay: 1000,                //Tips 动画执行时间，延时的时间删除Tips
        customAmtFuntion: null,     //自定义Tips 动画函数
    },
}
```
支持4种销毁方式
- **default**: 同 fade
- **fade**: 淡入淡出动画
- **fold**: 向下展开，向上收起
- **oho**: 在基准元素中间由小到大弹出到定位位置，从定位位置由大到小消失在基准元素中间
- **fragment**: Tips 由碎片合成整体展示，Tips 由整体分裂成碎片消失

### 5.12 生命周期函数

```
{
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
}
```


## 附录 - 配置表（不全）

<table>
<thead>
    <tr>
        <th>参数</th>
        <th>子参数</th>
        <th>子参数</th>
        <th>可能的值</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>baseElement</td>
        <td colspan="3"><strong>Tips 基准元素</strong> <br/> 默认: 空值 <br/> 空值 - 代表Body元素 <br/> DOM 或 jQuery 元素 <br/> DOM 选择器</td>
    </tr>
    <tr>
        <td>direction</td>
        <td colspan="3"><strong>Tips与基准元素的相对方向</strong> <br/> 默认: inner <br/> inner - 计算Tips 宽高，尽量使Tips 位于父元素内部 <br/> normal - 不计算Tips宽高，按照position数据来，尽量使Tips 位于基准元素内部 <br/> outer - 计算Tips 宽高，尽量使Tips 位于父元素外部 <br/> outside - 不计算Tips 宽高，尽量使Tips 位于基准元素外部。与outer 主要是负数有区别</td>
    </tr>
    <tr>
        <td>position</td>
        <td colspan="3"><strong>Tips与父元素的相对定位</strong> <br/> 默认: middle <br/> top-left, top-center , top-right , center-left , middle , center-right , bottom-left , bottom-center , bottom-right</td>
    </tr>
    <tr>
        <td rowspan="2">offset</td>
        <td>top</td>
        <td colspan="2"><strong>偏移父元素Top 多少px</strong> <br/> 任意实数</td>
    </tr>
    <tr>
        <td>left</td>
        <td colspan="2"><strong>偏移父元素Left 多少px</strong> <br/> 任意实数</td>
    </tr>
    <tr>
        <td rowspan="2">group</td>
        <td>name</td>
        <td colspan="2"><strong>分组名称</strong> <br/> 字符串</td>
    </tr>
    <tr>
        <td>maxLength</td>
        <td colspan="2"><strong>分组内允许存在的Tips最大数量</strong> <br/> 正整数</td>
    </tr>
    <tr>
        <td>type</td>
        <td colspan="3"><strong>Tips 样式, 支持自定义样式（传入class名称）</strong> <br/> 默认: normal <br/> normal, success, error, warning, info, 其他自定义css</td>
    </tr>
    <tr>
        <td>limit</td>
        <td colspan="3"><strong>限制Tips 的大小</strong> <br/> 默认: true <br/> true, false</td>
    </tr>
    <tr>
        <td>icon</td>
        <td colspan="3"><strong>是否显示icon, true - 按照type参数自动设置icon类型，支持字符串设置icon类型，主要是形状，如 normal，clock等</strong> <br/> 默认: false <br/> true, false</td>
    </tr>
    <tr>
        <td rowspan="2">iconOptions</td>
        <td>type</td>
        <td colspan="2"><strong>当icon 为字符串时，icon主要定制形状(也含颜色)，此时type可以额外设置icon 的色调</strong> <br/> 默认: info <br/> normal, success, error, warning, info, clock</td>
    </tr>
    <tr>
        <td>position</td>
        <td colspan="2"><strong>icon 的位置</strong> <br/> 默认: left <br/> top, left, bottom, right</td>
    </tr>
    <tr>
        <td>symbol</td>
        <td colspan="3"><strong>是否显示binder, true - 默认triangle，支持字符串设置symbol类型，如 triangle等，目前仅支持triangle</strong> <br/> 默认: false <br/> true, false</td>
    </tr>
    <tr>
        <td rowspan="4">symbolOptions</td>
        <td>type</td>
        <td colspan="2"><strong>如果不设置，symbol则按option.type 色调，否则按该参数的色调</strong> <br/> normal, success, error, warning, info</td>
    </tr>
    <tr>
        <td>position</td>
        <td colspan="2"><strong>symbol与Tips的相对定位</strong> <br/> top-left, top-center , top-right , right-top , center-right , right-bottom , <br/> bottom-left , bottom-center , bottom-right, left-bottom, center-left, left-top, middle</td>
    </tr>
    <tr>
        <td rowspan="2">offset</td>
        <td>top</td>
        <td><strong>偏移Tips元素Top 多少px(暂不支持)</strong> <br/> 任意实数</td>
    </tr>
    <tr>
        <td>left</td>
        <td><strong>偏移Tips元素Left 多少px(暂不支持)</strong> <br/> 任意实数</td>
    </tr>
</tbody>
</table>