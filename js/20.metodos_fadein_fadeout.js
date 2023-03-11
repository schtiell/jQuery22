
//jQuery metodo corto
$(function () {
    
    /**
     * Ejercicio 1:
     */
    let ocultarElemento = function() {
        let contenedor = $('#ejercicio');
        contenedor.fadeOut("slow");
    }

    let mostrarElemento = function () {
        let contenedor = $('#ejercicio');
        contenedor.fadeIn("slow");
    }

    let boton1 = $('#boton-1');
    boton1.click(mostrarElemento);

    let boton2 = $('#boton-2');
    boton2.click(ocultarElemento);

    /**
     * Ejercicio 2:
     */

    let mostrarContenedor = function () {
        contenedor.fadeIn("fast");
    }

    let ocultarContenedor = function () {
        let contenedor = $(this);
        contenedor.fadeOut("slow", function (){
            setTimeout(function (){
                mostrarContenedor();
                contenedor.text("El texto fue cambiado despues de desaparecer el contenedor");
            }, 3000);
        });
    }

    let contenedor = $('#ejercicio2');
    contenedor.click(ocultarContenedor);
});