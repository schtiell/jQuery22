
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
    btn1.click(() => $(".noticia-1").css({ fontSize: "30px"}));

    let btn2= $('#boton-2');
    btn2.click(function (){
        $(".noticia-2").css({
            fontSize: "22px",
            color:"#5D6D7E ",
            backgroundColor: "#D5F5E3",
            borderRadius: "10px",
            marginTop: "20px"
        });
    });

    let btn3= $('#boton-3');
    btn3.click( () => {
        $(".noticia-3").css({
            marginTop: "20px",
            fontSize:"20px",
            borderStyle: "solid",
            borderWidth: "2px",
            borderColor: "#000"
        });
    });

});