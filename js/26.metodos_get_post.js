
$(function () {

    // Método Get

    let enviarDatosGet = function () {

        // Asignación de valores del textbox a variables
        let num = $('#numero').val();
        let nom = $('#nombre').val();
        let correo = $('#email').val();

        // El método get
        $.get(
                "../php/pagina2.php", //URL
                
                {                         
                    numero  :   num,
                    nombre  :   nom,    // Data
                    email   :   correo
                },

                function (data, textStatus, jqXHR) {
                    console.log('Data: ' + data + '\nStatus: ' + textStatus);   //Callback
                    alert(data);
                    console.log(jqXHR);
                }
        );
        
        // Para evitar que el sitio valla buscando la url del servidor
        return false;
    }

    //Referencia del boton
    let boton = $('#boton-get');
    boton.click(enviarDatosGet);


    // Método post

    let enviarDatosPost = function () {
        
        // Asignación de valores del textbox a variables
        let id = $('#id').val();
        let user = $('#username').val();
        let pass = $('#password').val();

        $.post(
                "../php/pagina3.php",   //URL
                {
                    id :    id,
                    username : user,    // Data
                    password : pass
                },
                function (data, textStatus, jqXHR ) {
                    console.log('Data: ' + data + '\nStatus: ' + textStatus);   // callback
                alert(data);
            }
        );

        return false;
    }

    // Referencia del boton
    let botonPost = $('#boton-post');
    botonPost.click(enviarDatosPost);
});