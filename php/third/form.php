<?php
//将表单的处理逻辑放在HTML页面前，这样可以更灵活的处理
//    var_dump($_POST);
//因为对于表单的处理逻辑不是每一次都执行，所以一般我们会判断请求的方式，从而决定是否执行对数据的处理

if ($_SERVER['REQUEST_METHOD'] === 'POST'){
    //请求方式是POST,当前是点击按钮产生的POST请求
    var_dump($_POST);
}
//鲁棒性：指的是我们的程序应对变化的能力

//1.请求方式不同
//2.传参方式不同 get 是用url地址传参。post使用请求体传参
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>用户登录</title>
</head>
<body>
<!--
    不设置action 默认是当前页面
    不设置method 默认是get
    表单元素（表单域） 必须有name (如果希望被提交)
    必须有一个提交按钮（在没有JS的情况下）
-->
<!--由于文件重命名会导致代码修改，鲁棒性不强-->
<!--通过 $_SERVER['PHP_SELF'] 获取路径,可以避免这个问题-->
<form action="<?php echo $_SERVER['PHP_SELF'];  ?>" method="post">
    <table>
        <tr>
            <td><label for="username">用户名</label></td>
            <td><input id="username" type="text" name="username"></td>
        </tr>
        <tr>
            <td><label for="password">密码</label></td>
            <td><input id="password" type="text" name="password"></td>
        </tr>
        <tr>
            <td></td>
            <td><input type="submit" value="登录"></td>
            <!--            <td><input type="image" value="登录"></td>-->
            <!--     type="image" 也可以让表单提交       -->
            <!--            <td><button>登录</button></td>-->
            <!--      button 默认的type就是submit 现在一般用button，因为可控性更强      -->
        </tr>
    </table>
</form>
</body>
</html>