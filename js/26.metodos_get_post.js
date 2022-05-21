

//jQuery metodo corto
$(function () {

    // Método Get

    // Declaración de la función enviarNumero
    let enviarDatosGet = function () {

        // Referencia del valor capturado en el textbox
        let num = $('#numero').val();
        let nom = $('#nombre').val();
        let correo = $('#email').val();

        // El método get indicando la url del servidor, la información a procesar, el objeto literal con todos los claves y valores  y la funcion anonima o declarada fuera del bloque que procesará la información devuelta al servidor
        $.get("../php/pagina2.php", 
                { 
                    numero  :   num,
                    nombre  :   nom,
                    email   :   correo
                },

                function (data, textStatus, jqXHR) {
                    console.log('Data: ' + data + '\nStatus: ' + textStatus);
                    alert(data);
                }
        );
        
        // Para evitar que el sitio valla buscando la url del servidor
        return false;
    }

    // Referencia del boton el cual espera el evento click para llamar a la funcion enviarNumero
    let boton = $('#boton');
    boton.click(enviarDatosGet);


    // Método post

    let enviarDatosPost = function () {
        
        let id = $('#id');
        let user = $('#username');
        let pass = $('#password');

        $.post("../php/pagina3.php", {
            id :    id,
            username : user,
            password : pass
        },
         function (data, textStatus, jqXHR ) {
             console.log('Data: ' + data + '\nStatus: ' + textStatus);
             alert(data);
         });

        return false;
    }

    // Referencia del boton para enviar datos por el emtodo post
    let botonPost = $('#boton-post');
    botonPost.click(enviarDatosPost);
});