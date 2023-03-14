
$(function () {

    let solicitarDatos = function () {
        
        let contenedor = $('#horoscopo');   // Hace referencia al div con id horoscopo
        contenedor.html('<img src="../assets/loader.gif" />'); //Carga de gif animado.
    }

    let impMensaje = function (){
        console.log("All AJAX requests completed");
    }

    let cargarHoroscopo = function () {
        
        let enlace = $(this).attr('href'); //Obteniendo el atributo href del enlace clickeado

        let dom = $(document);  // Se almacena el document en una variable

        dom.ajaxStart(solicitarDatos); // el documento llama al metodo ajaxStart que inicia una funcion

        // la varibale dom ahora almacena la referencia del elemento donde cargará la informacion 
        dom = $('#horoscopo');

        // Por ultimo la variable dom muestra la respuesta del servidor en el contenedor
        dom.load(enlace); 

        // Retorna false para evitar el comportamiento por default del link al darle clic
        return false;
    }

    // Enlaces del menu de horoscopos
    let enlaces = $('#menu a');
    enlaces.click(cargarHoroscopo);
});