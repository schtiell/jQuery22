
//jQuery metodo corto
$(function () {
    
    console.log('Iterando elementos con el metodo each()');

    //Funcion resaltar parrafos
    let resaltarParrafos = function () {

        //Lista de parrafos declarada en una variable parrafos
        let parrafos = $(this);

        //Si la longitud del texto por cada elemento de la lista es menor a 100 caracteres se cambia el color de fondo
        if (parrafos.text().length < 100) {
            parrafos.css('background-color', '#FFAB91')
        }
    }
    //Se obtiene la lista de parrafos contendidas en el div con id parrafos
    let parrafos = $('#parrafos p');

    //El metodo each llama a la funcion resaltarParrafos()
    parrafos.each(resaltarParrafos);


    // Ejericico 2

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