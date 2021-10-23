import '../src/css/themes/ohoTips.scss';        // 仅用于测试，发布时 还需使用 sass 命令构建 css

// 仅用于测试，发布时还需使用 npm run dev / npm run prod 构建 ohoTips.js  
import('../src/js/ohoTips')
.then((module) => {
    console.log('动态引入 ohoTips.js ', module)
    window.oho = module;

    // 因为 supported.js 依赖于 ohoTips.js
    import("./js/supported").then( module => {
        console.log('动态引入 supported.js ', module)
    })
});