
//jQuery

$(function () {
    
    console.log('Evento hover con jQuery');

    let mouseEntra = function () {
        $(this).css('background', '#A3E4D7')
    }

    let mouseSale = function () {
        $(this).css('background', '#F8F9F9')
    }

    let links = $('a');
    
    //El evento hover recibe como parametros 2 funciones, el comportaminto cuando el mouse entra y otra cuando el mouse sale
    links.hover(mouseEntra, mouseSale);


    //=================== Ejercicio 2

    let enfocarCelda = function () {
        $(this).css('background', '#A9CCE3');
    }

    let desenfocarCelda = function () {
        $(this).css('background', '#F8F9F9');
    }

    let celdas = $('#table td');
    celdas.hover(enfocarCelda, desenfocarCelda);
});