
//jQuery método corto
$(function () {
    
    console.log('Utilizando Ajax y su método load con jQuery');

    //Funcion cargaHoroscopo
    let cargarHoroscopo = function () {
        
        //Se almacena el atributo href del enlace que dispara el evento
        let info = $(this).attr('href');

        //Referencia del contenedor donde se mostrará la informacion
        let contenedor = $('#info');

        // Se llama al método load y se le pasa como parametro el nombre la pagina a recuperar. 
        // El método load se encarga de hacer la comunicación asincrónica con el servidor, esperar y recibir los datos y finalmente añadir la información al elemento HTML
        contenedor.load(info);

        //Se retorna false para anular la propagación de eventos y desactivar tambien el evento que ocurre por defecto cuando se presiona un enlace
        return false;
    }

    //Referencias de los enlaces contenidos en el div con id menu
    let enlace = $('#menu a');

    //Cuando se hace click sobre el enlace se invoca a la función cargaHoroscopo
    enlace.click(cargarHoroscopo);


    // Ejercicio 2

    // Funcion cargar datos
    let cargarDatos = function () {
        
        let mensaje = $('#mensaje');

        // El metodo load() carga datos de un servidor y los datos devueltos en el elemento seleccionado.
        // load utiliza los parametros URL y Callback, sus parametros representan:
            //responseTxt: La respuesta del servidor
            //statusTxt: Contiene el estado de la llamada
            //xhr: es el objeto XMLHttpRequest de Ajax
        mensaje.load('../texto/demo.txt', function (responseTxt, statusTxt, xhr) {
            
            if (statusTxt == "success")
                console.log('Información cargada');
                console.log(responseTxt);

            if(statusTxt == "error")
                console.log(`Error: ${xhr.status}: ${xhr.statusText}`);

        });
        
        return false;
    }

    //Referencia del boton esperando al evento click para iniciar la comunicación asincrona con el server
    let boton = $('#boton');
    boton.click(cargarDatos);

});