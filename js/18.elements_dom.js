
//jQuert ready short declaration
$(function () {


    //Eliminar los elementos de la lista
    let eliminarLista = function (){
        let lista = $('.lista');
        lista.empty();
    }

    //Función para restaurar los elementos de la lista
    let restaurarLista = function (){
        let lista = $('.lista');
        lista.html(
            `<li>Primero</li>
            <li>Segundo</li>
            <li>Tercero</li>
            <li>Cuarto</li>`
        )

        agregarClase();
    }
    
    //Funcion para agregar elemento al final
    let agregarElementoAlFinal = function () {
        let lista = $('.lista');
        lista.append('<li>Nuevo elemento</li>');

        //Invocando todos los elementos de la lista no ordenado
        agregarClase();
        
    }

    //Funcion para agregar elemento al principio
    let agregarElementoAlPrincipio = function () {
        
        let lista = $('.lista');
        lista.prepend('<li>Nuevo elemento</li>');

        //Invocando todos los elementos de la lista no ordenado
        agregarClase();
    }

    //Funcion para agregar una clase a los elementos de la lista
    let agregarClase = function (){
        
        let items = $('.lista li');
        
        //Recorrer los elementos li de la lista ul
        items.each(function (){
            $(this).addClass('list-group-item');
        })
    }

    //Funcion para eliminar el ultmo elemento de la lista
    let eliminarUltimoElemento = function () {
        
        let items = $('.lista li');
        let longitud = items.length -1;
        items = items.eq(longitud);
        items.remove();
    }

    //Funcion para eliminar el primer elemento de la lista
    let eliminarPrimerElemento = function () {
        
        let items = $('.lista li');
        items = items.eq(0);
        items.remove();
    }

    //Funcion para eliminar los primeros 2 elementos de la lista
    let eliminarPrimerosDos = function (){

        let items = $('.lista li');
        items = items.slice(0,2);
        items.remove();
    }

    let eliminarPrimeryUltimoElemento = function () {
        eliminarPrimerElemento();
        eliminarUltimoElemento();
    }

    //Referencias de los botones
    let lista = $('#boton-1');
    lista.click(eliminarLista);

    lista = $('#boton-2');
    lista.click(restaurarLista);

    lista = $('#boton-3');
    lista.click(agregarElementoAlFinal);

    lista = $('#boton-4');
    lista.click(agregarElementoAlPrincipio);

    lista = $('#boton-5');
    lista.click(eliminarUltimoElemento);

    lista = $('#boton-6');
    lista.click(eliminarPrimerElemento);

    lista = $('#boton-7');
    lista.click(eliminarPrimeryUltimoElemento);

    lista = $('#boton-8');
    lista.click(eliminarPrimerosDos);
});
