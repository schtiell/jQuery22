<?php

     // Datos método post

     $id = $_REQUEST['id'];
     $username = $_REQUEST['username'];
     $password = $_REQUEST['password'];

     echo "Los datos enviados al servidor son: " . "\nid: " . $id . "\nUsurio: " . $username . "\nPassword: " . $password; 
 
?>