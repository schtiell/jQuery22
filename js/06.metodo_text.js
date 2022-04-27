//jQuery
$(function () {
    
    //Obtiene el texto de un elemento
    let obtenerTexto = function () {
        let parrafo = $('#parrafo-1');
        console.log(parrafo.text());
    }

    //Modifica el texto de un elemento
    let modificarTexto = function () {
        let parrafo = $('#parrafo-1');
        parrafo.text('Nuevo texto agregado con jQuery');
    }

    let modificarTabla = function () {
        //Modifica el texto unicamente as las celdas de la tabla con id table-1
        let tabla = $('#table-1 td');
        tabla.text('1');
    }

    //Referencia de los botones
    let boton1 = $('#boton-1');
    boton1.click(obtenerTexto);

    let boton2 = $('#boton-2');
    boton2.click(modificarTexto);

    let boton3 = $('#boton-3');
    boton3.click(modificarTabla);

});