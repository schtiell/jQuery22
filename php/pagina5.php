<?php

    $cuadrado = $_REQUEST['numero'] * $_REQUEST['numero'];

    sleep(3);   // 3 segundos antes de enviar la respuesta

    echo $cuadrado;
?>