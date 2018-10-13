<?php
function upload(){
    if (!isset($_FILES['avatar'])){
        //客户端提交的表单内容中没有文件域
        $GLOBALS['message'] = "没有上传文件";
        return;
    }
    $avatar = $_FILES['avatar'];
//    var_dump($avatar);

//    UPLOAD_ERR_OK文件上传常量，值为0
    if ($avatar['error'] !== UPLOAD_ERR_OK){
        //上传失败，服务端没有接收到上传的文件
        $GLOBALS['message'] = "上传失败";
        return;
    }
    //接收到了文件，放在服务端的临时文件夹里面
//    将文件从临时目录移动到网站根目录以内

    $source = $avatar['tmp_name'];
    //移动的目标路径
    $target = './upload/' . $avatar['name'];
    $moved = move_uploaded_file($source,$target);
    if (!$moved){
        $GLOBALS['message'] = "移动失败";
        return;
    }
    $GLOBALS['message'] = "上传成功";

}
//服务端如何去接收文件
if ($_SERVER['REQUEST_METHOD'] === 'POST'){
    //接收文件 使用一个叫做$_FILES 超全局成员
    upload();
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
<!-- 如果表单中有文件域，那么method一定是post  -->
<!-- enctype="multipart/form-data" 意思是让表单变成分卷传输 enctype 默认的值是 urlencode 格式 key1=value1&key2=value2-->
<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post" enctype="multipart/form-data">
    <input type="file" name="avatar" id="img">
    <?php if (isset($message)): ?>
    <p><?php echo $message; ?></p>
    <?php endif ?>
    <button>提交</button>
</form>
</body>
</html>