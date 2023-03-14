//jQuery
$(function () {

    //Método ajaxStop() solo puede asignarse al objeto document
    $(document).ajaxStop( function (){
        alert("Titulo cambiado");
    });

    //Metodo load()
    let cambiarTitulo = function () {
        let titulo = $("#titleToChange");
        titulo.load("../texto/demo.txt");
    }

    let boton = $('#boton');
    boton.click(cambiarTitulo);
})