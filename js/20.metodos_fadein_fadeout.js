
//jQuery metodo corto
$(function () {
    
    console.log('Metodos fadeout & fadein');

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

    // Ejercicio 2

    let mostrarContenedor = function () {
        contenedor.fadeIn("fast");
    }

    let ocultarContenedor = function () {
        $(this).fadeOut("slow");
        mostrarContenedor();
    }

    let contenedor = $('#ejercicio2');
    contenedor.click(ocultarContenedor);
});