
//Metodo largo
//$(document).ready(fun());

//jQuery abreviado
$(function () {
    
    //Funciones
    let generarFormulario = function () {
        let form = $('#formulario');
        form.html(
            '<form method="get" action=""> ' + 
                '<label for="nombre"> Nombre: </label>' +
                '<input type="text" id="nombre" class="form-control">' +

                '<label for="password"> Password: </label>' +
                '<input type="password" id="password" class="form-control">' +
            '</form>'
        );
    }

    let obtenerFormulario = function (){
        let form = $("#formulario");
        alert(form.html());
        
    }


    //Botones
    let btn1 = $('#btn-1');
    btn1.click(generarFormulario);

    let btn2 = $('#btn-2');
    btn2.click(obtenerFormulario);


    //=================== Ejercicio 2:

    let mostrarCabecera = function () {
        let cabecera = $('head');
        alert(cabecera.html());
    }

    let mostrarCuerpo = function () {
        let cuerpo = $('body');
        alert(cuerpo.html());
    }


    let boton1 = $('#boton-1');
    boton1.click(mostrarCabecera);

    let boton2 = $('#boton-2');
    boton2.click(mostrarCuerpo);

});