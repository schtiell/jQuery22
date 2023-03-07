
//jQuery
$(function () {
    
    //Ejercicio 1...........
    let addAttr = function () {
        let tabla = $('#table');
        tabla.attr('border', '1');
    }

    let getInfoAttr = function () {
        let tabla = $('#table');
        if (tabla.attr('border') != undefined) {
            console.log(`El ancho definido del borde es: ${tabla.attr('border')}`);
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

    let agregarAtributo = $('#btn1');
    agregarAtributo.click(addAttr);

    let obtenerAtributo = $('#btn2');
    obtenerAtributo.click(getInfoAttr);

    let eliminarAtributo = $('#btn3')
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


    let google = $('#btn4');
    google.click(linkToGoogle);

    let facebook = $('#btn5');
    facebook.click(linkToFb)

    let youtube = $('#btn6');
    youtube.click(linkToYoutube);

});