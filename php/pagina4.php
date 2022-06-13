<?php

    header('Content-Type: application/json');
    
    $nombre="";
    $apellido="";
    $direccion="";

    $id = $_REQUEST['id'];

    if ($id == '1'){
        $nombre='Juan';
        $apellido='Rodriguez';
        $direccion='Colon 123';
    }
    
    if($id == '2'){
        $nombre='Ana';
        $apellido='Maldonado';
        $direccion='Lima 245';
    }
    
    if($id == '3'){
        $nombre='laura';
        $apellido='Pueyrredon';
        $direccion='Laprida 785';
    }

    echo json_encode(['id'=>$id, 'nombre'=>$nombre, 'apellido'=>$apellido, 'direccion'=>$direccion]);

?>