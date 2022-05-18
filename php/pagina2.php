<?php

    header('Content-Type: text/html; charset=utf8');

    $calculo = $_REQUEST['numero'] * $_REQUEST['numero'];
    echo $calculo;
?>