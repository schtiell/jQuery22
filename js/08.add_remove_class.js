
//
$(function () {

    let agregarClase = function () {
        let contenedor = $('#contenedor');
        contenedor.addClass('.descripcion');
    }

    //
    let btn1 = $('btn-1')
    btn1.click(agregarClase);
});