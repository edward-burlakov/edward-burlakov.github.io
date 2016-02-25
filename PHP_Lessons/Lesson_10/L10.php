<!DOCTYPE  html>
<html>
<head>
    <title>First PHP File by Maxim</title>
</head>
<body>
    <?php

    $a=1;
    $b="This is a string";
    $c=1.18;

    $d=$b."<br>"."\n".$b."<br>"."\n".$b."<br>";

    echo $d."<br>\n";



    $arr1=array( 1=>"Sunday", 2=>"Monday", 3=>"Thurday");


    echo  $arr1[1]."<br>";
    echo  $arr1[2]."<br>";
    echo  $arr1[3]."<br>";

    $arr1[]= "Wednesday";

    echo  $arr1[4]."<br><br>";

    $arr2[]="AB";
    $arr2[]="BVV";
    echo $arr2[1]."<br>";


    echo "$b=$b"."<br>";

    echo '$b=$b'."<br>";
    echo "------------------------------------"."<br>\n";

    $arr3=array (
        "one"=>"banana",
        "two"=>"orange",
        "three"=>"tomato",
        "four"=>"pineapple"
    );

    $massiv="arr3";

    if ($massiv=="arr1")
    {
            foreach ($arr1 as $kk1=> $vv1)
            {
            echo "arr1[".$kk1."]=".$vv1."<br>\n";
            }
            echo  $arr1[2]."<br>";
    }
    else if  ($massiv=="arr2")
    {
            foreach ($arr2 as $kk1=> $vv1)
            {
                echo "arr2[".$kk1."]=".$vv1."<br>\n";
            }
            echo  $arr2[1]."<br>";
    }
    else
    {
            foreach ($arr3 as $kk1=> $vv1)
            {
                echo "arr3[" . $kk1 . "]=" . $vv1 . "<br>\n";
            }
    }

    echo "<br>\n";

    echo "------------------------------------"."<br>\n";
    echo "------------------------------------"."<br>\n";

    for ($i=1; $i<=4; $i=$i+1)
    {
        echo "arr1[".$i."] = ".$arr1[$i]."<br>\n";
    }
    echo "<br>\n";
    echo "------------------------------------"."<br>\n";

    $R=0;

    foreach( $arr3 as $key=>$value ) {
        $R=11;
        echo "arr3[".$key."] = ".$value."<br>\n";
        echo "R(for)=".$R."<br>\n";
    }
     /*   echo '$R='.$R."<br>\n";*/
    echo "------------------------------------"."<br>\n";

    foreach ($_GET as $kk1=>$vv1)
    {
        echo '$_GET['.$kk1.']='.$vv1."<br>\n";
    }

    ?>
</body>
</html>

