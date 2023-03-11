
//jQuery short method
$(function () {

    /**
     * Ejercicio 1:
     */

    //Funciones para reducir y aumentar la opacidad
    let reducirOpacidad = function () {
        let contenedor = $('.bloques');
        contenedor.fadeTo("slow", 0.2, () => console.log('Opacidad reducida')); // 0: transparente
    }

    let aumentarOpacidad = function () {
        let contenedor = $('.bloques');
        contenedor.fadeTo("slow", 1, () => console.log('Opacidad restaurada')); // 1: sin opacidad
    }

    //Referencias de los botones
    let boton1 = $('#boton1');
    let boton2 = $('#boton2');
    
    boton1.click(reducirOpacidad);
    boton2.click(aumentarOpacidad);

    /**
     * Ejercicio 2
     */

    let mostrarContenedor = function (){
        let container = $('#ejercicio2');
        setTimeout(() => container.fadeTo("slow",1),3000);
    }

    let container = $('#ejercicio2');
    container.click(function () {
        $(this).fadeTo("slow", 0.2, mostrarContenedor());
    });
});