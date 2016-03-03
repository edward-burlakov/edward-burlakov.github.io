<!DOCTYPE  html>
<html>
<head>
    <title>lesson11 by Maxim</title>
</head>
<?php

function MyFunc($txt)
{
    $txt=$txt.$txt.$txt ;
    echo "$txt=".$txt."<br>";
    echo "a=".$txt."<br>";
    return $txt;
}


?>
<body>
<?php
    $a="Some";
    $txt="1";


    echo $a."<br>\n";

    echo MyFunc($a);
    echo "txt=".$txt;

    $a="a=".$a."<br>";
?>
</body>
</html>

