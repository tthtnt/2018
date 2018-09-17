//自调用函数---游戏对象
(function () {
    //游戏的构造函数
    var that = null;
    function Game(map) {
        this.food = new Food();//食物对象
        this.snake = new Snake();//小蛇对象
        this.map = map;
        that = this;
    }
    //初始化游戏
    Game.prototype.init = function () {
        //初始化游戏
        this.food.init(this.map);
        this.snake.init(this.map);
        //调用自动移动小蛇的方法
        this.runSnake(this.food, this.map);
        //调用按键的方法
        this.bindKey();
    };
    //添加原型方法，设置小蛇可以自动的跑起来
    Game.prototype.runSnake = function(food,map){
        //自动的去移动
        var timeId = setInterval(function () {
            //setInterval 的 this 是 window
            this.snake.move(food,map);
            this.snake.init(map);
            //判断是否撞墙
            //横坐标的最大值
            var maxX = map.offsetWidth/this.snake.width;
            //纵坐标的最大者
            var maxY = map.offsetHeight/this.snake.height;
            //小蛇的头的坐标
            var headX = this.snake.body[0].x;
            //小蛇的头的纵坐标
            var headY = this.snake.body[0].y;
            //横坐标判断
            if (headX < 0 || headX >= maxX){
                clearInterval(timeId);
                alert("游戏结束");
            }
            //纵坐标判断
            if (headY < 0 || headY >= maxY){
                clearInterval(timeId);
                alert("游戏结束");
            }
            //咬到自己判断
            for(var i = 1;i < this.snake.body.length;i++){
                if (headX === this.snake.body[i].x && headY === this.snake.body[i].y){
                    clearInterval(timeId);
                    alert("游戏结束");
                }
            }
        }.bind(that),100);
    };
    //添加原型方法--设置用户按键，改变小蛇移动方向
    Game.prototype.bindKey = function(){
        //获取用户按键
        document.addEventListener("keydown",function (e) {
            //获取按键的值
            switch (e.keyCode) {
                case 37:
                    if (this.snake.direction !== "right") {
                        this.snake.direction = "left";
                    }
                    break;
                case 38:
                    if (this.snake.direction !== "bottom") {
                    this.snake.direction = "top";
                    }
                    break;
                case 39:
                    if (this.snake.direction !== "left") {
                        this.snake.direction = "right";
                    }
                    break;
                case 40:
                    if (this.snake.direction !== "top") {
                        this.snake.direction = "bottom";
                    }
                    break;
            }
        }.bind(that),false);
    };
    window.Game = Game;
}());