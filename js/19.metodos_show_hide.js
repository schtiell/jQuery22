
//jQuery shot method
$(function () {
    
    console.log("Metodos show() y hide() de jQuery");

    let mostrarElemento = function () {
        let contenedor = $("#ejercicio");
        contenedor.show("slow");
    }

    let ocultarElemento = function () {
        
        let contenedor = $("#ejercicio");
        contenedor.hide("slow", "linear", function (){
            alert('Elemento oculto');
        });
    }

    let boton1 = $("#boton-1");
    boton1.click(mostrarElemento);

    let boton2 = $("#boton-2");
    boton2.click(ocultarElemento);
});