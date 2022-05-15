
//jQuery short method
$(function () {
    
    console.log('Metodo fadeTo');

    //Funciones para reducir y aumentar la opacidad
    let reducirOpacidad = function () {
        let contenedor = $('#contenedor');
        contenedor.fadeTo("slow", 0.2, () => console.log('Opacidad reducida'));
    }

    let aumentarOpacidad = function () {
        let contenedor = $('#contenedor');
        contenedor.fadeTo("slow", 1, () => console.log('Opacidad restaurada'));
    }

    //Referencias de los botones
    let boton1 = $('#boton-1');
    boton1.click(reducirOpacidad);

    let boton2 = $('#boton-2');
    boton2.click(aumentarOpacidad);

    // Ejercicio 2


    //Contenedor
    let container = $('#ejercicio2');

    //Evento click para difuminar el elemento
    container.click(function () {
        $(this).fadeTo("slow", .2, function () {
            console.log('Elemento difuminado');

            //Funcion de tiempo para restaurar la opacidad del contenedor despues de 5 segundos
            setTimeout(function () {
                container.fadeTo("slow", 1)
                console.log('Elemento restaurado');
            }, 5000);
        });
    });
});