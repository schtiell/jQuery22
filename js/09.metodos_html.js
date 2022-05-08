
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

});