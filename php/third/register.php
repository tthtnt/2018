<?php
//接收用户提交的数据，保存到文件
//1.接收并校验
//2.持久化
//3.响应
if ($_SERVER['REQUEST_METHOD'] === 'POST'){
    //先校验参数的完整性
    if(empty($_POST['username'])){
        //没有提交用户名，或用户名为空字符串
        $message =  '会不会玩';
    }else if(empty($_POST['password'])){
        //没有提交用户名，或用户名为空字符串
        $message = '请输入密码';
    }else if(empty($_POST['confirm'])){
        //没有提交用户名，或用户名为空字符串
        $message = '请输入确认密码';
    }else{
        if ($_POST['password'] !== $_POST['confirm']){
            $message = '两次输入不一致';
        }else{
            if (!(isset($_POST['agree']) && $_POST['agree'] === "true")){
                $message = '必须同意注册协议';
            }else{
                //所有校验都OK
                $username = $_POST['username'];
                $password = $_POST['password'];
                $message = '注册成功';
                //将数据保存到文本中
                file_put_contents('users.txt',$username . ' | ' . $password . "\n",FILE_APPEND);
            }
        }
    }

}
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>注册</title>
</head>
<body>
<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
    <table>
        <tr>
            <!--      label 为input解释说明      -->
            <td><label for="username">用户名</label></td>
            <td><input type="text" name="username" id="username" value="<?php echo isset($_POST['username']) ? $_POST['username'] : ''; ?>"></td>
        </tr>
        <tr>
            <td><label for="password">密码</label></td>
            <td><input type="password" name="password" id="password"></td>
        </tr>
        <tr>
            <td><label for="confirm">确认密码</label></td>
            <td><input type="password" name="confirm" id="confirm"></td>
        </tr>
        <tr>
            <td></td>
            <td>
                <label>
                    <input type="checkbox" name="agree" value="true">同意注册协议
                </label>
            </td>
        </tr>
        <?php if (isset($message)):?>
        <tr>
            <td></td>
            <td><?php echo $message ?></td>
        </tr>
        <?php endif; ?>
        <tr>
            <td></td>
            <td><button>注册</button></td>
        </tr>
    </table>
</form>
</body>
</html>