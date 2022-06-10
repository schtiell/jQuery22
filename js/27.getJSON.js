

//Declaración jQuery metodo corto
$(function () {
    
    console.log("Método $.getJSON");

    let solicitarDatos = function () {
        
        let id = $('#numero-id').val();

        //$.getJSON("url", data, function)
        $.getJSON("../php/pagina4.php",
                    {id : id}, 
                    mostrarDatos
        );

        return false;
    }

    let mostrarDatos = function (data) {
        $('#resultados').html('Nombre: ' + data.nombre + "<br>" +
                            'Apellido: ' +  data.apellido + "<br>" +
                            'Direccion: ' + data.direccion);

    }

    let boton = $('#boton-enviar');
    boton.click(solicitarDatos);
});

