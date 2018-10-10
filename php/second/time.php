<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/10/10
 * Time: 14:38
 */
//设置时区 第一种方法通过代码设置时区
//date_default_timezone_set('PRC');
//第二种方法，通过配置文件配置时区
//date.timezone = PRC

//time 获取的是 秒数为单位的时间戳
//echo time();
//echo "<br>";
//date 格式化一个时间戳
//第一个参数是一个时间格式
//第二个参数是一个时间戳
//默认时间戳获取的就是格林威治时间
//echo date("Y-m-d H:i:s",time());

$str = '2017-10-22 15:18:58';

//对已有时间做格式化
//strtotime()可以用来将一个有格式的字符串，转换为时间戳
$timestamp = strtotime($str);

echo date("Y年m月d日 <b\\r/>H时i分s秒",$timestamp);

