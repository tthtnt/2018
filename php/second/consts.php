<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/10/10
 * Time: 15:44
 */

//PHP中的常亮
//可以使用define函数定义一个常量 就是定义后不能被修改，临时存放数据的容器
//什么时候使用常量：一般程序的配置信息都会在常量中定义，不会在运行的时候修改

//变量或者函数都是采用snake_case 命名规则
//第一个参数是常量名称
//第二个参数是常量的值
//第三个参数是常量名称是否忽略大小写

define('SYSTEM_NAME','阿里百秀');
define('SYSTEM_VERSION','1.1',true);

echo SYSTEM_NAME;
echo system_version;