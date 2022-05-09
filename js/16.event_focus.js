
//jQuery

$(function () {
    
    //Funcion para cambiar el valor del atributo valor
    let enfocarElemento = function () {
        let buscar = $('#buscar');
        buscar.attr('value', '')
    }

    //Referencia del elemento html
    let buscar = $('#buscar');
    buscar.focus(enfocarElemento);


    // ===================== Ejericicio 2

    let enfocarNombre = function () {
        let nombre = $('#nombre');
        nombre.attr('value','Agregar nombre...');

    }

    let enfocarApellido = function () {
        
        let apellido = $('#apellido');
        apellido.attr('value','Agregar apellido...');
    }


    let nombre = $('#nombre');
    nombre.focus(enfocarNombre);

    let apellido = $('#apellido');
    apellido.focus(enfocarApellido);

});