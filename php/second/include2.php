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
<!-- 如果文件不存在，会报一个致命的错误，所以这里不适合使用require 只要把require换成include -->
<?php //require 'aside.php' ?>
<?php include 'aside.php' ?>
<main>
    这是另外一个页面
</main>
</body>
</html>