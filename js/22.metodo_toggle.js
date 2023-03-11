
//jQuery short method
$(function () {

    let mostrarOcultarElemento = function () {
        let contenedor = $('.bloques');
        contenedor.toggle(4000);    // Tiempo en milisegundos
    }

    let boton = $('#boton');
    boton.click(mostrarOcultarElemento);
});