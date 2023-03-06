
//Metodo abreviado de implementar jQuery
//$(document).ready(fun());

$(function () {

    let titulo1 = $("#titulo1");
    titulo1.click(cambiarColorFondo);


    let titulo2 = $('#titulo2');
    titulo2.click(cambiarColorFuente)

    let tabla = $('#table');
    tabla.click(tunearTabla);


    function cambiarColorFondo() {
        let titulo = $('#titulo1');
        titulo.css('background', '#22C2F7');
        titulo.css('color', '#5E6B6F ');    
    }

    function cambiarColorFuente() {
        let titulo = $('#titulo2');
        titulo.css('font-size','40px');
        titulo.css('font-family','Verdana');
    }

    function tunearTabla() {
        let tabla = $('#table td');
        tabla.css('background', '#FAD7A0');
    }

});