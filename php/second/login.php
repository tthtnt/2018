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
<form action="foo.php" method="post">
    <table>
        <tr>
            <td>用户名</td>
            <td><input type="text" name="username"></td>
        </tr>
        <tr>
            <td>密码</td>
            <td><input type="text" name="password"></td>
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