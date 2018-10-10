<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/10/10
 * Time: 9:20
 */

//获取字符串长度
//PHP 所有能力都是函数,
//

$str = "hello";

echo strlen($str);

echo "<br>";
//中文属于宽字符集，所以不能使用strlen函数，要使用专门的获取宽字符集长度的函数
echo strlen('你好');

echo "<br>";

phpinfo();
//PHP 中专门为 宽字符集 添加了一套 API
//这一套API 不在1000多内置函数里面
//模块成员 必须通过配置文件载入模块（php_mbstring.dll）后再使用
//所有的API 都是 mb_xxx
echo mb_strlen('你好');

//配置 PHP 扩展的步骤
//1.在PHP安装目录创建一个php.ini
//2.extension_dir
//3.;extension = php_mbstring.dll
//4.默认Apache加载的配置文件路径在C:/windows目录去找
//5.通过Apache配置文件修改默认加载路径 C:/Develop/PHP

