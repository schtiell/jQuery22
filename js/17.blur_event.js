
//jQuery short method
$(function () {
    console.info('Manejo de evento blur con jquery');

    //Funciones
    let tomarFoco = function () {
        let texto = $(this);
        texto.css('color', '#f00');
    }

    let perderFoco = function (){
        let texto = $(this);
        texto.css('color', '#00f');
    }


    //Referencias html
    let text1 = $('#text-1');

    //Focus evento cuando el elemento control html toma el foco
    text1.focus(tomarFoco);
    text1.blur(perderFoco);

    let text2 = $('#text-2');
    text2.focus(tomarFoco);

    //Blur evento cuando el elemento control html pierde el foco
    text2.blur(perderFoco);


    // ================ Ejercicio 2

    let obtenerValor = function () {
        
        let texto = $(this);
        let cadena = texto.val();

        if (cadena.length == 0){
            alert('No se insertó ningun valor');
        }
    }

    let cadena = $('#id-cadena');
    cadena.blur(obtenerValor);
});