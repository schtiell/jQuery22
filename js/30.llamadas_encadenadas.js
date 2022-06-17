
//jQuery metodo corto
$(function () {
    console.log('Llamadas encadenadas a metodos de jQuery');

    //Boton 1
    let boton1 = $('#boton-1');

    //Uso de funciones anónimas 
    boton1.click(function (e) { 

        //Encadenamiento de métodos. 
        $('#descripcion').fadeTo('slow', 0.5, 'swing').hide('slow');
    });

    //Boton 2
    let boton2 = $('#boton-2');
    boton2.click(function (e){

        //Es importante notar que los métodos se ejecutan de izquierda a derecha.
        $('#descripcion').show().fadeTo("slow",1, "linear");
    });


    //Ejercicio 2: Horoscopos

    $('#menu a').click(function () {
        $('#detalles').load($(this).attr('href'));
        return false;
    })
    
});