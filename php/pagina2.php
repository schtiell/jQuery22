<?php

    header('Content-Type: text/html; charset=utf8');

    // Datos método get

    // Asignación de valores recibidos por HTTP a variables
    $calculo = $_REQUEST['numero'] * $_REQUEST['numero'];
    $nombre = $_REQUEST['nombre'];
    $email = $_REQUEST['email'];

    // Mensaje retornado a la solicitud del cliente
    echo "El calculo fue realizado por: " . $nombre . " su email registrado es: " . $email . " el cuadrado del numero es: " . $calculo;    

?>