

//jQuery metodo corto
$(function () {
    console.log('Métodos ajaxStart() y ajaxStop() con jQuery');

    // Funciones

    let solicitarDatos = function () {
        
        // Hace referencia al div con id horoscopo
        let contenedor = $('#horoscopo');

        // Escribe en el contenedor una imagen de carga mientras se muestra la info solicitada
        contenedor.html('<img src="../assets/loading.gif" />');
    }

    let cargarHoroscopo = function () {
        
        let enlace = $(this).attr('href');
        
        // Se almacena el document en una variable
        let dom = $(document);

        // Se llama al metodo ajaxStar con el objeto document
        dom.ajaxStart(solicitarDatos);

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