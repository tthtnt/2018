<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        table{
            text-align: center;
        }
    </style>
</head>
<body>
<?php
    $file_path = "names.txt";
    $contents = file_get_contents($file_path);
//    echo "<p>$str</p>";
//换行符要用双引号来写，用单引号php会认为是\n字符串
    $lines = explode("\n",trim($contents));
//    var_dump($arr);
    $data = array();
    foreach ($lines as $item) {
        $cols = explode("|",$item);
        $data[] = $cols;
    }
?>
<h1>全部人员信息表</h1>
<table>
    <thead>
    <tr>
        <th>编号</th>
        <th>姓名</th>
        <th>年龄</th>
        <th>邮箱</th>
        <th>链接</th>
    </tr>
    </thead>
    <tbody>
        <?php foreach ($data as $line):?>
            <tr>
                <?php foreach ($line as $col):?>
                <?php $col = trim($col); ?>
                <?php if (strpos($col,'http://') === 0): ?>
                        <td><a href="<?php echo strtolower($col); ?>"><?php echo substr($col,7)?></a></td>
                    <?php else: ?>
                        <td><?php echo $col ?></td>
                <?php endif; ?>


                <?endforeach;?>
            </tr>
        <?php endforeach;?>
    </tbody>
</table>
</body>
</html>
<script>
    //startwith() js以什么字符串开头
    //endwith() js以什么字符串结尾
</script>

<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/10/9
 * Time: 15:04
 */