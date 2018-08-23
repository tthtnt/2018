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
/*获取父级元素中的第一个子元素
* @param element 父级元素
* @returns {*} 父级中的子级元素
* */
function getFirstElement(element) {
    if (element.firstElementChild) {
        return element.firstElementChild;
    }else {
        var node = element.firstChild;
        while (node && node.nodeType != 1) {
            node = node.nextSibling;
        }
        return node;
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

function animate(element,attr, target) {
    clearInterval(element.timeId);
    element.timeId = setInterval(function () {
        var current = parseInt(getStyle(element,attr));
        var step = 10;
        step = current < target ? step : -step;
        current += step;
        if (Math.abs(target - current) > Math.abs(step)) {
            element.style[attr] = current + "px";
        } else {
            clearInterval(element.timeId);
            element.style[attr] = target + "px";
        }
    }, 10);
}

function changeAnimate(element,json,fn) {
    clearInterval(element.timeId);
    element.timeId = setInterval(function () {
        var flag = true;
        for (var attr in json) {
            if (attr == "opacity") {
                var current = getStyle(element,attr)*100;
                var target = json[attr]*100;
                var step = (target - current)/10;
                step = step > 0 ? Math.ceil(step):Math.floor(step);
                current += step;
                element.style[attr] = current/100;
                if (current != target){
                    flag = false;
                }

            }else if (attr == "zIndex") {
                element.style[attr] = json[attr];
            }else {
                var current = parseInt(getStyle(element,attr));
                var target = json[attr];
                var step = (target - current)/10;
                step = step > 0 ? Math.ceil(step):Math.floor(step);
                current += step;
                element.style[attr] = current + "px";
                if (current != target){
                    flag = false;
                }
            }
        }
        if (flag) {
            clearInterval(element.timeId);
            if (fn) {
                fn();
            }
        }
        //测试代码
        console.log("目标位置："+target+"当前位置："+current+"每次移动步数："+step);
    },10);
}

function getScroll() {
    return {
        left : window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0,
        top : window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    };
}
//获取元素计算后的样式属性
function getStyle(element, attr) {
    //判断浏览器是否支持这个方法
    return window.getComputedStyle ? window.getComputedStyle(element,null)[attr] : element.currentStyle[attr];
}
//获取e
var evt = {
    getEvent:function (e) {
        return window.event || e;
    },
    getClientX:function (e) {
        return this.getEvent(e).clientX;
    },
    getClientY:function (e) {
        return this.getEvent(e).clientY;
    },
    getScrollLeft:function () {
        return window.pageXOffset||document.body.scrollLeft||document.documentElement.scrollLeft||0;
    },
    getScrollTop:function () {
        return window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop||0;
    },
    //相对于页面的横坐标
    getPageX:function (e) {
        return this.getEvent(e).pageX?this.getEvent(e).pageX:this.getClientX(e)+this.getScrollLeft();
    },
    //相对于页面的纵坐标
    getPageY:function (e) {
        return this.getEvent(e).pageY?this.getEvent(e).pageY:this.getClientY(e)+this.getScrollTop();
    },
};
