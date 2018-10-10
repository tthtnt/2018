<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/10/10
 * Time: 10:33
 */

$dict = array(
    'hello'=>'你好',
    'hello1'=>'nihao',
    'hello2'=>'hello'
);

var_dump(array_keys($dict));

var_dump(array_values($dict));

var_dump(array_key_exists('hello',$dict));
var_dump(array_key_exists('hello54',$dict));

//只有当php.ini中display_errors = On 时候
//才会在界面上显示notice错误
//开发阶段一定设置为On   生产阶段（上线)设置为OFF
//isset()函数可以看到一个变量是否存在，或者是数组中一个键是否存在（是否有指定的键）

//isset() 会吞掉 undefined index 的警告
if (isset($dict['foo'])){
    echo $dict['foo'];
}else{
    echo '没有';
}

//empty($dict['foo']) === !isset($dict['foo']) || $dict['foo'] == false;
if (empty($dict['foo'])){
    echo "没有";
}else{
    echo $dict['foo'];
}