//jQuery
$(function () {
    
    let ocultarLista = function () {
        let lista = $('#lista-2 li');
        lista.hide();
    }

    let colorearFila = function () {
        let lista = $(this);
        lista.css('color', 'red');
    }

    let boton = $('#boton');
    boton.click(ocultarLista);

    let fila = $('#table1 tr');
    fila.click(colorearFila);
});