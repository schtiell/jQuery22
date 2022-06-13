

//Declaración jQuery metodo corto
$(function () {
    
    console.log("Método $.getJSON");

    let solicitarDatos = function () {
        
        let valor = $('#numero-id').val();
        console.log(valor);

        if (valor < 1 || valor >= 4){
            $('#resultados').html("Error con el id ingresado");

        }else{
             //$.getJSON("url", data, function)
            $.getJSON("../php/pagina4.php", {id : valor}, mostrarDatos);
        }

        return false;
    }

    let mostrarDatos = function (data, textStatus, jqXHR) {
        
        if (textStatus == 'success') {

            $('#resultados').html(  'id: ' + data.id + "<br>" +
                                    'Nombre: ' + data.nombre + "<br>" +
                                    'Apellido: ' +  data.apellido + "<br>" +
                                    'Direccion: ' + data.direccion );
        } else {
            console.log(jqXHR);
        }

    }

    let boton = $('#enviar');
    boton.click(solicitarDatos);
});

