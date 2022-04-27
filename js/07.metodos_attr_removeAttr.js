
//jQuery
$(document).ready(function(){
    
    //Ejercicio 1...........
    let addAttr = function () {
        let tabla = $('#table');
        tabla.attr('border', '1');
    }

    let getInfoAttr = function () {
        let tabla = $('#table');
        if (tabla.attr('border') != undefined) {
            console.log(tabla.attr('border'));
        } else {
            console.log('No se puede mostrar el atributo ya que no está definido');
        }
    }

    let deleteAttr = function (){
        let tabla = $('#table');

        if (tabla.attr('border') != undefined) {
            tabla.removeAttr('border');
        } else {
            console.log('No se puede eliminar el atributo ya que no está definido');
        }
        
    }

    let agregarAtributo = $('#btn-1');
    agregarAtributo.click(addAttr);

    let obtenerAtributo = $('#btn-2');
    obtenerAtributo.click(getInfoAttr);

    let eliminarAtributo = $('#btn-3')
    eliminarAtributo.click(deleteAttr);


    //Ejercicio 2................

    let linkToGoogle = function () {
        let link = $('#link');
        link.attr('href', 'https://google.com');
        link.text('Ir a google');
    }

    let linkToFb = function(){
        let link = $('#link');
        link.attr('href', 'https://facebook.com');
        link.text('Ir a facebook');
    }

    let linkToYoutube = function(){
        let link = $('#link');
        link.attr('href', 'https://youtube.com');
        link.text('Ir a youtube');
    }


    let google = $('#btn-4');
    google.click(linkToGoogle);

    let facebook = $('#btn-5');
    facebook.click(linkToFb)

    let youtube = $('#btn-6');
    youtube.click(linkToYoutube);

});