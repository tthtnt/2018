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