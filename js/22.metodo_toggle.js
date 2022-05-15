
//jQuery short method
$(function () {
    
    console.log('Metodo toogle con jQuery');

    let mostrarOcultarElemento = function () {
        let contenedor = $('#contenedor');
        contenedor.toggle("slow");
    }

    let boton = $('#boton');
    boton.click(mostrarOcultarElemento);

});