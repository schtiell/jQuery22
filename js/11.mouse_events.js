
//jQuery
$(function(){
    console.log('Manejando eventos del tipo mouse');

    //Funciones
    let mouseEntra = function () {
        $(this).css({
            color: '#2980B9 ',
            fontSize: '20px',
            fontWeight: 'bold',
            background: '#E8F6F3'
        });
    }

    let mouseSale = function () {
        $(this).css({
                color: '',
                fontSize: '',
                fontWeight: '',
                background: ''
        });
    }

    //Referencias de los links
    let link = $('a');
    link.mouseover(mouseEntra);
    link.mouseleave(mouseSale);


    // ===========================  Ejercicio2

    let table = $('#table td');

    table.mouseover(function () { 
        $(this).css('background','#FAD7A0');
    });

    table.mouseleave( function () {
        $(this).css('background', '#F8F9F9');
    });
});