//蛇的自调用函数
(function () {
    //存放蛇的每个身体部分
    var elements = [];
    function Snake(width , height , direction) {
        this.width = width || 20;
        this.height = height || 20;
        //蛇初始的位置和颜色
        this.body = [
            {x:3,y:2,color:"red"},
            {x:2,y:2,color:"orange"},
            {x:1,y:2,color:"orange"}
        ];
        //蛇的方向
        this.direction = direction || "right";
    }

    //为原型添加方法---蛇的初始化方法
    Snake.prototype.init = function (map) {
        remove();
        //循环遍历创建蛇身体的div
        for (var i = 0;i < this.body.length;i++){
            //body数组中的每一个元素都是一个对象
            var obj = this.body[i];
            var div = document.createElement("div");
            //将div加入到地图中
            map.appendChild(div);
            //为div设置样式
            div.style.position = "absolute";
            div.style.width = this.width + "px";
            div.style.height = this.height + "px";
            div.style.backgroundColor = obj.color;
            //横纵坐标
            div.style.left = obj.x * this.width + "px";
            div.style.top = obj.y * this.height + "px";

            //然后将div加入到elements数组中
            elements.push(div);
        }
    };
    //为原型添加方法----蛇的移动
    Snake.prototype.move = function(food,map){
        //改变蛇身体的坐标位置
        var i = this.body.length - 1;
        for (; i > 0; i--) {
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;
        }
        //判断方向，然后移动蛇头
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
            case  "bottom":
                this.body[0].y += 1;
                break;
        }

        //判断有没有吃到食物
        //小蛇的蛇头和食物的坐标一致
        var headX = this.body[0].x * this.width;
        var headY = this.body[0].y * this.height;
        //判断蛇头和食物的坐标
        if (headX == food.x && headY == food.y){
            //获取小蛇最后的尾巴
            var last = this.body[this.body.length - 1];
            //把蛇尾巴复制一份加入body中
            this.body.push({
                x:last.x,
                y:last.y,
                color:last.color
            });
            food.init(map);
        }
    };
    //删除小蛇的私有函数
    function remove(){
        //因为之前的蛇先暴露出来的是尾巴，所以要从尾巴先开始删除
        var i = elements.length - 1;
        for(;i >= 0;i--){
            //先从当前元素找到该元素的父元素，然后再删除这个子元素
            var ele =elements[i];
            //从map上删除这个子元素
            ele.parentNode.removeChild(ele);
            //从数组中删掉这个元素
            elements.splice(i, 1);
        }
    }
    //将Snake暴露给window
    window.Snake = Snake;
}());