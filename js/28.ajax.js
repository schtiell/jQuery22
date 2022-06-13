 

//Ajax Metodo corto
$(function () {
    
    console.log('$.ajax');

    let realizarCalculo = function () {
        
        let numero = $('#numero').val();

        $.ajax({
            async: true,
            type: "POST",
            url: "../php/pagina5.php",
            contentType: "application/x-www-form-urlencoded",
            data: "numero=" + numero,
            dataType: "HTML",

            beforeSend: function() {
                let contenedor = $('#resultado');
                contenedor.html('<img src="../assets/loader.gif" >');
            },

            success: function (response) {
                let contenedor = $('#resultado');
                contenedor.text(response)
            },

            timeout: 4000,

            error: function (){
                let contenedor = $('#resultado');
                contenedor.text('Problemas con el servidor');
            }
        });

        return false;
    }

    let boton = $('#btn-enviar');
    boton.click(realizarCalculo);
});