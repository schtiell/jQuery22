
//jQuery shot method
$(function () {

    /**
     * Ejercicio 1:
     */

    let mostrarElemento = function () {
        let contenedor = $("#ejercicio");
        contenedor.show("slow");
    }

    let ocultarElemento = function () {
        
        let contenedor = $("#ejercicio");
        contenedor.hide(3000);
    }

    let boton1 = $("#boton1");
    boton1.click(mostrarElemento);

    let boton2 = $("#boton2");
    boton2.click(ocultarElemento);

    /**
     * Ejercicio 2:
     */

    let container = $('#ejercicio-2');
    container.click( function () {
        $(this).hide("slow", function () {
            alert('Se ocultó el párrafo, haz clic en aceptar');
        });

        setTimeout(function () {
            container.text("El texto se modificó porque ya fue ocultado");
            container.show("slow");
        }, 3000);
    });
});