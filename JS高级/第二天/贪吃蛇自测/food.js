//食物的自调用函数
(function () {
    //用来保存每个小方块的食物
    var elements = [];

    //食物的构造函数
    function Food(x, y, width, height, color) {
        this.x = x || 0;
        this.y = y || 0;
        this.width = width || 20;
        this.height = height || 20;
        this.color = color || "green"
        //如果不传值都有默认值
    }

    //为原型添加初始化食物代码，需要一个地图参数
    Food.prototype.init = function (map) {
        remove();
        //先创建一个食物的div
        var div = document.createElement("div");

        //将食物添加到地图中
        map.appendChild(div);

        //设置食物的样式
        div.style.width = this.width + "px";
        div.style.height = this.height + "px";
        //设置食物的位置的时候，需要先让食物脱离文档流
        div.style.position = "absolute";
        //设置食物的位置,随机在地图内产生一个位置
        this.x = parseInt(Math.random() * (map.offsetWidth / this.width)) * this.width;
        this.y = parseInt(Math.random() * (map.offsetHeight / this.height)) * this.height;
        div.style.left = this.x + "px";
        div.style.top = this.y + "px";
        //设置食物的颜色
        div.style.backgroundColor = this.color;
        //将食物存进数组中，将来删除使用
        elements.push(div);
    };

    //私有函数---删除食物
    function remove(){
        for (var i = 0; i < elements.length; i++) {
            var ele = elements[i];
            ele.parentNode.removeChild(ele);
            elements.splice(i, 1);
        }
    }

    //将Food暴露给window
    window.Food = Food;
}());