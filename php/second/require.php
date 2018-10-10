<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/10/10
 * Time: 15:58
 */

//require 'config.php';
//require 可以用于在当前脚本中载入一个别的脚本文件
//require 在每一次调用时都会载入一次文件
//echo DB_HOST;

//require_once 如果之前载入过，那么就不再执行，只执行一次
//由于类似于 定义常量，定义函数 这种操作不能执行多次
//所以 require_once 更合适载入这种文件
require_once 'config.php';

echo DB_HOST;
