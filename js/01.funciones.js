//javascrip tradicional

//Funcion asiginada a una variable que escucha el evento click del elemento con id js-tradicional
let iniciarEventos = function () {
    let boton1 = document.querySelector('#js-tradicional');
    boton1.addEventListener('click', e =>{

        alert('Se presionó el boton utilizando Javascript tradicional');
    }, false);
}

//jQuery
$(document).ready( function() {

    //Evento click sobre el boton
    let boton = $('#jquery');
    boton.click( () =>  {
        alert("Mensaje mostrado utilizando jQuery");
    });

    //Evento click sobre el parrafo
    let parrafo = $('#parrafo-1');
    parrafo.click( ()=>{
        console.info("Click sobre el parrafo");
    });

});


//Evento DOMContentLoaded – DOM está listo, por lo que el controlador puede buscar nodos DOM, inicializar la interfaz.
addEventListener('DOMContentLoaded', iniciarEventos, false);

