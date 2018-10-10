<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/10/10
 * Time: 16:53
 */

//$_GET 用于接收URL地址当中的提交数据 （一般接收GET参数）
var_dump($_GET);
echo "<br>";

//$_POST 用于接收 请求体 中提交的数据（一般是POST提交的数据）
var_dump($_POST);
echo "<br>";


//$_REQUEST = $_GET + $_POST 
var_dump($_REQUEST);
