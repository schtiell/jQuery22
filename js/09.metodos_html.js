
//jQuery abreviado
$(function () {
    
    //Funciones
    let generarFormulario = function () {
        let form = $('#formulario');
        form.html(
            `
            <form method="get" action="">
                <div class="form-group row">
                    <label for="nombre" class="col-sm-4 col-form-label">Nombre:</label>
                    <div class="col-sm-8">
                        <input type="text" id="nombre" class="form-control" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="password" class="col-sm-4 col-form-label">Password:</label>
                    <div class="col-sm-8">
                        <input type="password" id="password" class="form-control" />
                    </div>
                </div>
            </form>`
        );
    }

    let obtenerFormulario = function (){
        let form = $("#formulario");
        alert(form.html());
        console.log(form.html());
    }

    //Botones
    let btn1 = $('#btn1');
    btn1.click(generarFormulario);

    let btn2 = $('#btn2');
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

    let boton1 = $('#boton1');
    boton1.click(mostrarCabecera);

    let boton2 = $('#boton2');
    boton2.click(mostrarCuerpo);
});