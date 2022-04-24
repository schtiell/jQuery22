
// La función principal de esta librería se llama $.
// A la función $ le podemos pasar distintos valores como veremos
// Esta función nos devuelve un objeto de tipo jQuery.


let x = $(document);

// El primer método que nos interesa de esta clase es el ready:
// El método ready tiene como parámetro un nombre de función. Esta función se ejecutará cuando todos los elementos de la página estén cargados. Es importante notar que solo pasamos el nombre de la función y no disponemos los paréntesis abiertos y cerrados al final.
x.ready(iniciarEventos);

// Utilizamos nuevamente la función $ para crear un objeto de la clase jQuery pero ahora asociándolo al botón, esto lo hacemos pasando el id del control button precediéndolo por el carácter # y encerrado entre paréntesis

// Finalmente llamamos al método click pasándo como parámetro el nombre de la función que se ejecutará al presionar dicho botón.
function iniciarEventos () {
    let boton = $("#boton1");
    boton.click(presionBoton);
}

//
function presionBoton () {
    alert('Se presinó el boton utilizando el evento click de jQuery!!!');
}




