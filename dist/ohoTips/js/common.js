var noop = function() {};

function isArray(value) {
    if (typeof Array.isArray === "function") {
        return Array.isArray(value);
    }else{
        return Object.prototype.toString.call(value) === "[object Array]";
    }
}

function isObj(value) {
    // 若value 是 null对象, type 为 "[object Null]"；
    var type = Object.prototype.toString.call(value);
    return type === "[object Object]";
}

//非null对象，非数组对象
function isObjNotArrry(value) {
    return isObj(value) && !isArray(value);
}

function extend(target) {
    if(!target) {
        console.error('No target!')
    }

    var objs = [].slice.call(arguments,1);

    if(objs.length > 0) {
        objs.forEach((item,index) => {
            if(isObjNotArrry(item)) {
                for(var key in item) {
                    if(isObjNotArrry(item[key])) {
                        if(! target.hasOwnProperty(key) || !isObjNotArrry(target[key])) target[key] = {};
                        extend(target[key],item[key])
                    }else {
                        target[key] = item[key];
                    }
                }
            }else {
                console.error('Parameter ' + index + ' is no valid arguments, expected to be object');
            }
        })
    }

    return target;
}

function trim(str, isglobal) {
    let result;
    result = str.replace(/(^\s+)|(\s+$)/g, '');
    if (isglobal && isglobal.toLowerCase() === 'g') {
        result = result.replace(/\s/g, '');
    }
    return result;
}

function objToStyle(obj) {
    let style = [];
    for(let i in obj){
        style.push(i+':'+obj[i]);
    }
    style = style.join(';');

    return  style;
}

function styleToObj(style) {
    if (!style || style == '') { return ''; }

    let styleArr = style.split(';')
    styleArr = styleArr.filter(item => {
        return item != '';
    });

    let objStr = '';
    styleArr.forEach(item => {
        let css = '';
        item = item.replace(/(^\s+)|(\s+$)/g, '');
        trim(item).split(':').forEach(cssValue => {
            css += '"' + trim(cssValue) + '":';
        })
        objStr += css + ',';
    })
    objStr = objStr.replace(/:,/g, ',');
    objStr = objStr.substring(0, objStr.lastIndexOf(','));
    objStr = '{' + objStr + '}';
    return JSON.parse(objStr);
}

function createNode(htmlStr) {
    var div = document.createElement("div");
    div.innerHTML = htmlStr;
    return div.childNodes[0].cloneNode(true);
}

function addCss(ele, cssObj) {
    let oldCssText = ele.style.cssText;
    oldCssText = styleToObj(oldCssText);
    if(oldCssText) cssObj = extend({}, oldCssText, cssObj);
    let cssText = objToStyle(cssObj);

    ele.style.cssText = cssText;
}

function testFun() {
    console.log("test Fun.");
}

export { testFun };