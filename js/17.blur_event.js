
//jQuery short method
$(function () {

    /**
     * Ejercicio 1:
     */

    let tomarFoco = function () {
        let texto = $(this);
        texto.css('color', '#E74C3C');
    }

    let perderFoco = function (){
        let texto = $(this);
        texto.css('color', '#2874A6');
    }

    let name = $('#name');
    let lastname = $('#lastname');

    name.focus(tomarFoco);
    name.blur(perderFoco);

    lastname.focus(tomarFoco);
    lastname.blur(perderFoco);
    
    /**
     * Ejercicio 2:
     */

    let obtenerValor = function () {
        //Referencia del elemento que dispara el evento
        let texto = $(this);

        //Valor del elemento
        let cadena = texto.val();

        if (cadena.length == 0){
            alert('No se insertó ningun valor');
        }else{
            alert(`El valor insertado es ${texto.val()}`);
        }
    }

    let cadena = $('#id-cadena');
    cadena.blur(obtenerValor);
});