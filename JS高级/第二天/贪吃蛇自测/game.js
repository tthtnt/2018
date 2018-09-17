//自调用函数----游戏对象
(function () {
    var that = null;
    //游戏的构造函数
    function Game(map) {
        this.food = new Food();
        this.snake = new Snake();
        this.map = map;
        that = this;
    }
    //初始化游戏
    Game.prototype.init = function () {
        this.food.init(this.map);
        this.snake.init(this.map);
        this.runSnake(this.food,this.map);
        //调用按键的方法
        this.bindKey();
    };
    //添加原型方法---让小蛇自动跑起来
    Game.prototype.runSnake = function(food,map){
        //自动移动
        var timeId = setInterval(function () {
            //因为setInterval的this是window，所以在构造函数中将构造函数的this赋值给that,然后在setInterval用bind(that)
            this.snake.move(food,map);
            this.snake.init(map);
            //判断是否撞墙
            //横坐标最大值
            var maxX = map.offsetWidth/this.snake.width;
            //纵坐标最大值
            var maxY = map.offsetHeight/this.snake.height;
            //蛇头的横坐标
            var headX = this.snake.body[0].x;
            //蛇头纵坐标
            var headY = this.snake.body[0].y;
            //横坐标判断
            if (headX < 0 || headX >= maxX) {
                //停止蛇的移动
                clearInterval(timeId);
                alert("游戏结束");
            }
            //纵坐标判断
            if (headY < 0 || headY >= maxY) {
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
        }.bind(that),100)
    };
    //添加原型方法-----控制蛇移动方向
    Game.prototype.bindKey = function(){
        //获取用户按键
        document.addEventListener("keydown",function (e) {
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
    //将Game暴露给window
    window.Game = Game;
}());