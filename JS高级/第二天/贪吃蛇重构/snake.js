//自调用函数---小蛇
(function () {
    var elements = [];//存放小蛇的每个身体部分
    //小蛇的构造函数
    function Snake(width, height, direction) {
        //小蛇每个部分的宽高
        this.width = width || 40;
        this.height = height || 40;
        this.body = [
            {x: 3, y: 2, color: "red"},
            {x: 2, y: 2, color: "orange"},
            {x: 1, y: 2, color: "orange"}
        ];


        //方向
        this.direction = direction || "right";
    }

    //为原型添加方法---小蛇初始化方法
    Snake.prototype.init = function (map) {
        remove();
        //循环遍历创建div
        for (var i = 0; i < this.body.length; i++) {
            //数组中的每个数据元素都是一个对象
            var obj = this.body[i];
            var div = document.createElement("div");
            //把div加入到map地图中
            map.appendChild(div);
            //设置div样式
            div.style.position = "absolute";
            div.style.width = this.width + "px";
            div.style.height = this.height + "px";
            //横纵坐标
            div.style.left = obj.x * this.width + "px";
            div.style.top = obj.y * this.height + "px";


            if (i === 0) {
                div.style.backgroundImage = "url(1.jpg)";
            }else {
                div.style.backgroundColor = obj.color;
            }

            //方向暂时不定

            //把div加入到elements数组中-----目的是为了删除
            elements.push(div);
        }
    };
    //为原型添加方法---小蛇动起来
    Snake.prototype.move = function (food, map) {
        //改变小蛇身体坐标位置
        var i = this.body.length - 1;
        for (; i > 0; i--) {
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;
        }
        //判断方向,并且移动蛇头
        switch (this.direction) {
            case "right":
                this.body[0].x += 1;
                break;
            case "left":
                this.body[0].x -= 1;
                break;
            case "top":
                this.body[0].y -= 1;
                break;
            case "bottom":
                this.body[0].y += 1;
                break;
        }

        //判断有没有吃到食物
        //小蛇的头的坐标和食物的坐标一致
        var headX = this.body[0].x * this.width;
        var headY = this.body[0].y * this.height;

        //判断小蛇的坐标和食物的坐标
        if (headX == food.x && headY == food.y) {
            //获取小蛇的最后的尾巴
            var last = this.body[this.body.length - 1];
            //把最后的蛇尾复制一个，重新加入到小蛇的body中
            this.body.push({
                x:last.x,
                y:last.y,
                color:last.color
            });
            //把食物删除，重新初始化食物
            food.init(map);
        }
    };
    //删除小蛇的私有函数
    function remove(){
        var i = elements.length -1;
        for (; i >= 0; i--) {
            //先从当前的子元素中找到该子元素的父级元素，然后在删除这个子元素
            var ele = elements[i];
            //从map地图上删除这个子元素
            ele.parentNode.removeChild(ele);
            //从数组中删除子元素
            elements.splice(i, 1);
        }
    }
    //把Snake 暴露给外部
    window.Snake = Snake;
}());