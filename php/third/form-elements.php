<?php
    if ($_SERVER['REQUEST_METHOD'] === 'POST'){
        var_dump($_POST);
    }
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<form action="<?php $_SERVER['PHP_SELF'] ?>" method="post">
    性别：
<!--  当表单使用radio ， 一定要为相同 name 的 radio 设置不同的 value ，让服务端可以辨别  -->
    <label for="male"><input type="radio" name="sex" value="1" id="male">男</label>
    <label for="famale"><input type="radio" name="sex" value="2" id="famale">女</label>
    <br>
<!--  checkbox 如果没有选中则不会提交，如果选中提交 on ，如果需要一个别的值，可以设置value  -->
    <label for="agree"><input type="checkbox" name="agree" value="true" id="agree">同意协议</label>
    <br>
<!--  name上加上[]就是数组形式，可以保存多个checkbox的值 索引数组  -->
    <label><input type="checkbox" name="balls[]" value="1">足球</label>
    <label><input type="checkbox" name="balls[]" value="2">篮球</label>
    <label><input type="checkbox" name="balls[]" value="3">排球</label>
    <br>

    <select name="status">
        <option>激活</option>
        <option>未激活</option>
        <option value="1">待激活</option>
    </select>
    
    <br>
    <button>提交</button>
</form>
</body>
</html>
