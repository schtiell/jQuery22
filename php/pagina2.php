<?php

    header('Content-Type: text/html; charset=utf8');

    $calculo = $_REQUEST['numero'] * $_REQUEST['numero'];
    $nombre = $_REQUEST['nombre'];
    $email = $_REQUEST['email'];

    echo "El calculo fue realizado por: " . $nombre . " su email registrador es: " . $email . " el resultado del cuadrado es: " . $calculo;
?>