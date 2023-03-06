
//Javascript
let iniciarEventos = function () {
    let boton1 = document.querySelector('#javascript');
    
    boton1.addEventListener('click', e =>{

        alert('Evento "click" capturado con javascript clásico');
    }, false);
}

//jQuery
$(document).ready( function() {

    //Evento click sobre el boton
    let boton = $('#jquery');

    boton.click( () => {
        alert('Evento "click" capturado con jQuery');
    });

    //Evento click sobre el parrafo
    let parrafo = $('#parrafo');

    parrafo.click( () => {
        console.info("Click sobre el parrafo");
    });

});

//Evento DOMContentLoaded, el DOM está listo, por lo que el controlador puede buscar nodos DOM e inicializar la interfaz.
addEventListener('DOMContentLoaded', iniciarEventos, false);

