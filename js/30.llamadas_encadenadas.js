
//jQuery metodo corto
$(function () {
    console.log('Llamadas encadenadas a metodos de jQuery');

    //Boton 1
    let boton1 = $('#boton-1');

    //Uso de funciones anónimas y encadenamiento de métodos
    boton1.click(function (e) { 
        $('#descripcion').fadeTo('slow', 0.5).hide('slow');
    });

    //Boton 2
    let boton2 = $('#boton-2');
    boton2.click(function (e){
        $('#descripcion').show().fadeTo("slow",1);
    });
});