
//jQuery

$(function() {

    let presionarFila = function(){

        let row = $(this);  //Se almacena en row la fila sobre la que se esta haciendo click
        console.info(row);

        row.css('background-color','#A3E4D7');
        row.css('border','#000');
    }


    let ocularElemento = () => {
        let item = $(this);
        console.log(item);
        item.hide();
    }

    let fila = $('tr');
    fila.click(presionarFila);

    let item = $('li');
    item.click(ocularElemento);
});