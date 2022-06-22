<?php

    $codigo = $_REQUEST['codigo'];

    if ($codigo == 'c1'){
        echo "<img src='../assets/loader.gif' />";
        echo "Primer tooltip";
    }

    if ($codigo == 'c2'){
        echo "<img src='../assets/loader.gif' />";
        echo "Segundo tooltip";
    }

    if ($codigo == 'c3'){
        echo "<img src='../assets/loader.gif' />";
        echo "Tercer tooltip";
    }

    if ($codigo == 'c4'){
        echo "<img src='../assets/loader.gif' />";
        echo "Cuarto tooltip";
    }

?>