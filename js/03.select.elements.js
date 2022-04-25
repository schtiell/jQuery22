
//jQuery

$(function() {

    let presionarFila = function(){

        //Se almacena en fila la fila sobre la que se esta haciendo click
        let fila = $(this);
        console.info(fila);

        //Y se aplica sobre este elemento el cambio de color de fondo
        fila.css('background-color','#eeeeee');
        fila.css('border','#000');
    }


    let ocularElemento = function () {
        let elemento_lista = $(this);
        console.log(elemento_lista);
        //elemento_lista.css('display','none');
        elemento_lista.hide();
    }

    let fila = $('tr');
    fila.click(presionarFila);

    let elemento_lista = $('li');
    elemento_lista.click(ocularElemento)
});