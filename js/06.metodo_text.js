//jQuery
$(function () {
    
    //Obtiene el texto de un elemento
    let obtenerTexto = function () {
        let parrafo = $('#parrafo1');
        alert(parrafo.text());

    }

    //Modifica el texto de un elemento
    let modificarTexto = function () {
        let parrafo = $('#parrafo2');
        parrafo.text('Texto modificado con jQuery y Método text(valor)');
    }

    let modificarTabla = function () {
        //Modifica el texto unicamente as las celdas de la tabla con id table-1
        let tabla = $('#table1 td');
        tabla.text('1');
    }

    //Referencia de los botones
    let boton1 = $('#boton1');
    boton1.click(obtenerTexto);

    let boton2 = $('#boton2');
    boton2.click(modificarTexto);

    let boton3 = $('#boton3');
    boton3.click(modificarTabla);

});