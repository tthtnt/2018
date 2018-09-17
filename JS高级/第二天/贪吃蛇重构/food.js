//自调用函数---食物的
(function () {
    var elements = [];//用来保存每个小方块的食物

    //食物就是一个对象，有宽，有高，有横纵坐标，先定义构造函数吗，然后创建对象
    function Food(x, y, width, height, color) {
        this.x = x || 0;
        this.y = y || 0;
        this.width = width || 40;
        this.height = height || 40;
        this.color = color || "green";
    }

    //为原型添加初始化代码，作用：在页面上显示食物
    //因为食物要在地图上显示，所以，需要地图这个参数
    Food.prototype.init = function (map) {
        //外部无法访问的函数
        remove();
        var div = document.createElement("div");

        map.appendChild(div);
        //设置div样式
        div.style.width = this.width + "px";
        div.style.height = this.height + "px";
        div.style.backgroundColor = this.color;
        //横纵坐标先停止，----随机产生，先脱离文档流
        div.style.position = "absolute";

        this.x = parseInt(Math.random() * (map.offsetWidth / this.width)) * this.width;
        this.y = parseInt(Math.random() * (map.offsetHeight / this.height)) * this.width;
        div.style.left = this.x + "px";
        div.style.top = this.y + "px";
        //把div加入到数组elements中
        elements.push(div);

    };

    //私有函数--删除食物
    function remove() {
        //elements数组中有这个食物
        for (var i = 0; i < elements.length; i++) {
            var ele = elements[i];
            //找到这个子元素的父级元素，然后删除这个子元素
            ele.parentNode.removeChild(ele);
            //再次把elements中的这个子元素也删除
            elements.splice(i, 1);
        }
    }

    window.Food = Food;
}());