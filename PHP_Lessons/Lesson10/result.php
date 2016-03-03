<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Lesson_10.Edward_Burlakov.Result_of_filled_form</title>
</head>
<body>
    <?php
    echo "------------------------------------"."<br>\n";
    foreach ($_GET as $kk1=>$vv1)
    {
    echo '$_GET['.$kk1.']='.$vv1."<br>\n";
    }
    echo "------------------------------------"."<br>\n";
    ?>
</body>
</html>