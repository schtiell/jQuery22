
//
$(function () {

    //Funcion para agregar el atributo clase al parrafo
    let agregarClase = function () {
        let contenedor = $('#contenedor');
        contenedor.addClass('descripcion');
    }

    //Función para eliminar el atributo clase de un parrafo
    let removerClase = function () {
        let contenedor = $('#contenedor');

        //Si el elemento tiene una clase definida
        if (contenedor.attr('class') != undefined) {
            contenedor.removeClass('descripcion');  //Elimina la clase descripcion
            contenedor.removeAttr('class');         //Elimina el atributo clase

        } else {
            console.info('El elemento no tiene esa clase definida');
        }
        
    }

    //Referencias de los botones
    let btn1 = $('#btn-1');
    btn1.click(agregarClase);

    let btn2=$('#btn-2');
    btn2.click(removerClase);


    //===================== Ejercicio 2 ======================

    let aplicarSombreado = function () {
        
        let cabeceraTabla = $('#tbl-data');
        cabeceraTabla.addClass('cabecera');

        let cuerpoTabla = $('#tbl-data');
        cuerpoTabla.addClass('cuerpo');      
    }

    let limpiarSombreado = function () {
        
        let cabeceraTabla = $('#tbl-data');
        cabeceraTabla.removeClass('cabecera');

        let cuerpoTabla = $('#tbl-data');
        cuerpoTabla.removeClass('cuerpo'); 

    }

    let boton1 = $('#btn-tbl-1');
    boton1.click(aplicarSombreado);

    let boton2 = $('#btn-tbl-2');
    boton2.click(limpiarSombreado);    
});