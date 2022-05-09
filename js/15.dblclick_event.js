
//jQuery
$(function () {
    
    console.info('Manejo del evento doble click con jQuery');

    //Funcion para ocultar el elemento
    let ocultarInfo = function () {
        let div = $('#recuadro');
        div.hide();

        //Invoca a la funcion hacerVisible pasados 3 segundos desde que se oculta el elemento
        setTimeout(hacerVisible, 3000);
    }

    //Aplica el estilo display bloick para hacerlo visible nuevamente
    let hacerVisible = function () {
        
        let div = $('#recuadro');
        div.css('display', 'block');
    }

    //Referencia del elemento que esta a la espera del evento doble click
    let contenedor = $ ('#recuadro');
    contenedor.dblclick(ocultarInfo);

    // =========================== Ejercicio 2


    //Funcion para redimencionar el contenedor aplicando una clase de css
    let redimensionarContenedor = function () {
        
        let contenedor = $('#recuadro-2');
        contenedor.addClass('recuadro-3');
        contenedor.text('Contenedor redimensionado');

        //Invoca a la funcion restaurarContenedor despues de 5 segundos
        setTimeout(restaurarContenedor, 5000);
    }

    //Funcion para restaurar el contenedor eliminando la clase agregada
    let restaurarContenedor = function (){
        let contenedor = $('#recuadro-2');
        contenedor.removeClass('recuadro-3');
    }

    //Referencia del elemento html que escucha el evento doble click
    let recuadro = $('#recuadro-2');
    recuadro.dblclick(redimensionarContenedor);

});