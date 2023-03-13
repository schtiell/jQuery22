
//jQuery metodo corto
$(function () {
    
    /**
     *  Ejercicio 1:
     */

    let resaltarParrafos = function () {
        let parrafos = $(this);
        if (parrafos.text().length < 10) {
            let contenedor = $('.parrafo');
            contenedor.css('background', ' #e8daef');
        }
    }

    let parrafos = $('.parrafo p');
    parrafos.each(resaltarParrafos);


    /**
     * Ejercicio 2:
     */

    //Funcion realizarBusqueda()
    let realizarBusqueda = function () {

        //Almanacenando el listado en una variable links
        let links = $(this);

        //Almacenando el valor del atributo href de cada link en una variable atributo
        let atributo = links.attr('href');

        //Si el valor del atributo tiene una cadena .ar entonces le cambiar el color de fondo
        if(atributo.indexOf('.ar') != -1){
            links.css('background-color', '#FFCDD2');
        }
        
    }

    //listado de enlaces dentro del elemento div con id lista-links
    let lista_enlaces = $('#lista-links a');

    //recorrer cada uno de los elemento seleccionados y instanciando a la funcion realizarBusqueda() a ellos
    lista_enlaces.each(realizarBusqueda);
});