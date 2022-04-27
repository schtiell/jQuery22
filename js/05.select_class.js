
$(function () {
    
    console.log('Selectores de clase');

    let resaltarLenguajes = function () {
        let resaltar = $('.poo');
        resaltar.css('background', '#FA8072');
        resaltar.css('color', '#FDFEFE');
    }

    let boton = $('#boton');
    boton.click(resaltarLenguajes);

    let btn1= $('#boton-1');
    btn1.click(function (){
        $(".noticia-1").css("font-size","30px");
    });

    let btn2= $('#boton-2');
    btn2.click(function (){
        $(".noticia-2").css({
            fontSize: "8px",
            color:"red",
            backgroundColor: "blue"
        });
    });

    let btn3= $('#boton-3');
    btn3.click(function (){
        $(".noticia-3").css("font-size","20px");
    });

});