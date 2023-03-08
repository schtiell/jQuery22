
//jQuery
$(function () {

    let informeClick = function() {
        console.info('Se dio click en el parrafo');
    }

    let informeClickTable = function () {
        console.log('Se hizo click en los parrafos de la tabla 2');
    }

    let parrafo = $('#parrafo');
    parrafo.click(informeClick);

    //Hace referencia al parrafo dentro de la tabla con id #tbl-2
    let p_table = $('#tbl-2 p');
    p_table.click(informeClickTable);


    //=================== Ejercicio 2

    let ocultarContenido = function () {
        console.log($(this).text());
        $(this).hide();
    }

    let palabras = $('strong');
    palabras.click(ocultarContenido);

});