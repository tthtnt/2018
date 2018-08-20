function my$(id){
    return document.getElementById(id);
}

//设置标签文本内容
function setInnerText(element,text){
    //判断浏览器是否支持这个属性
    if(typeof element.textContent == "undefined"){
        //不支持
        element.innerText = text;
    }else{
        //支持
        element.textContent = text;
    }
}


//获取标签中间的文本内容

function getInnerText(element){
    //
    if(typeof element.textContent == "undefined"){
        //不支持
        return element.innerText;
    }else{
        //支持
        return element.textContent;
    }
}

//添加绑定事件兼容代码
function addEventListener(element, type, fn) {
    if (element.addEventListener){
        element.addEventListener(type,fn, false);
    }else if (element.attachEvent) {
        element.attachEvent("on"+type,fn);
    }else {
        element["on"+type] = fn;
    }
}

//解绑事件的兼容代码

function removeEventListener(element, type, fn) {
    if (element.removeEventListener){
        element.removeEventListener(type,fn, false);
    }else if (element.detachEvent) {
        element.detachEvent("on"+type,fn);
    }else {
        element["on"+type] = null;
    }
}
