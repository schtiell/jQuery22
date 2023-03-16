
$(function () {
    
    let solicitarDatos = function () {
        
        let valor = $('#numero-id').val();

        if (valor < 1 || valor >= 4){
            $('#resultados').html("Error con el id ingresado");

        }else{
            $.getJSON(
                "../php/pagina4.php",   //URL
                {id : valor},           //Data
                mostrarDatos            // Callback
            );
        }

        return false; //Para evitar el funcionamiento del boton y el evento click
    }

    let mostrarDatos = function (data, textStatus, jqXHR) {
        
        if (textStatus == 'success') {

            $('#resultados').html(  
                                `
                                <h3> Los datos son:</h3>
                                <table class="table">
                                    <thead class="thead-dark">
                                        <th>Id</th>
                                        <th>Nombre</th>
                                        <th>Apellido</th>
                                        <th>Direccion</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>${data.id}</td>
                                            <td>${data.nombre}</td>
                                            <td>${data.apellido}</td>
                                            <td>${data.direccion}</td>
                                        </tr>
                                    </tbody>
                                </table>`);
        } else {

            console.log(jqXHR);
        }

    }

    let boton = $('#enviar');
    boton.click(solicitarDatos);
});

