
//jQuery
$(function () {
    
    //
    let ocultarLista = function () {
        let lista = $('#lista-2 li');
        lista.hide();
    }

    let ocultarFila = function () {
        let lista = $(this)
        lista.css('color', 'red');
    }


    let boton = $('#boton-1');
    boton.click(ocultarLista);

    let fila = $('#tabla-1 tr');
    fila.click(ocultarFila);
});