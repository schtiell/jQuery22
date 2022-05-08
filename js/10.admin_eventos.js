
//jQuery
$(function () {
    console.info('Manejo de eventos de con jQuery');

    let informeClick = function() {
        console.info('Se dio click en el parrado');
    }

    let informeClickTable = function () {
        console.log('Se hizo click en los parrafos de la tabla 2');
    }

    let parrafo = $('#p-ejercicio');
    parrafo.click(informeClick);

    //Hace referencia al parrafo dentro de la tabla con id #tbl-2
    let p_table = $('#tbl-2 p');
    p_table.click(informeClickTable);


    //=================== Ejercicio 2

    let ocultarContenido = function () {
        //let palabras = $('strong');
        //palabras.css('display','none');
        $(this).hide();

    }

    let palabras = $('strong');
    palabras.click(ocultarContenido);

});