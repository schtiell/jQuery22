
//jQuery
$(function(){
    console.log('Manejando eventos del tipo mouse');

    //Funciones
    let mouseEntra = function () {
        $(this).css('color', '#f00')
    }

    let mouseSale = function () {
        $(this).css('color', '#0000EE');
    }

    //Referencias de los links
    let link = $('a');
    link.mouseover(mouseEntra);
    link.mouseleave(mouseSale);


    // ===========================  Ejercicio2

    let table = $('#table td');

    table.mouseover(function () { 
        $(this).css('background','#D6EAF8');
    });

    table.mouseleave(function () { 
        $(this).css('background', '#F8F9F9');
    });
});