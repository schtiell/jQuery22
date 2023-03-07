
//
$(function () {

    //Funcion para agregar el atributo clase al parrafo
    let agregarClase = function () {
        let contenedor = $('#parrafo');
        contenedor.addClass('descripcion');
        console.log(`Clase descripción agregada al elemento con id #parrafo`);
    }

    //Función para eliminar el atributo clase de un parrafo
    let removerClase = function () {
        let contenedor = $('#parrafo');

        //Si el elemento tiene una clase definida
        if (contenedor.attr('class') != undefined) {
            contenedor.removeClass('descripcion');  //Elimina la clase descripcion
            contenedor.removeAttr('class');         //Elimina el atributo clase
            console.log(`Clase descripción eliminada del elemento con id #parrafo`);

        } else {
            console.info('El elemento no tiene esa clase definida');
        }
        
    }

    //Referencias de los botones
    let btn1 = $('#btn1');
    btn1.click(agregarClase);

    let btn2=$('#btn2');
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