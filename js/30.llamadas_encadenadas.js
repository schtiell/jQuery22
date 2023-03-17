
$(function () {
    /**
     * Ejercicio 1
     */

    let boton1 = $('#boton1');
    boton1.click(function (e) { 
        /*
        *Encadenamiento de métodos.
        *Primero se ejecuta el metodo fadeTo para difuminar, despues el metodo hide(), para ocultar lentamente
        */
        $('#descripcion')
            .fadeTo('slow', 0.5, 'swing')
            .hide('slow');
    });

    let boton2 = $('#boton2');
    boton2.click(function (e){

        /*
        *Importante los métodos se ejecutan de izquierda a derecha.
        *Primero se muestra el elemento lentamente metodo show(), despues el metodo fadeTo() restaura el difuminado 
        */
        $('#descripcion')
            .show('slow')
            .fadeTo("slow",1, "swing");
    });

    /**
     * Ejercicio 2
     */

    $('#menu a').click(function () {
        $('#detalles').load($(this).attr('href'));
        return false;
    })
});