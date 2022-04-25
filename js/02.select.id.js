
//Metodo abreviado de implementar jQuery
//$(document).ready(fun());

$(function () {

    let titulo1 = $("#titulo-1");
    titulo1.click(cambiarColorFondo);


    let titulo2 = $('#titulo-2');
    titulo2.click(cambiarColorFuente)

    let tabla = $('#table');
    tabla.click(tunearTabla);


    function cambiarColorFondo() {
        let titulo = $('#titulo-1');
        titulo.css('background', 'silver');
        titulo.css('font-size', '20px');    
    }

    function cambiarColorFuente() {
        let titulo = $('#titulo-2');
        titulo.css('color','red');
        titulo.css('font-family','Tahoma');
    }

    function tunearTabla() {
        let tabla = $('#table');
        tabla.css('background', '#96D4D4');
    }

});