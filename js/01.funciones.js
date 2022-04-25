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
    let boton = $('#jquery');
    boton.click(presionarBoton);
});

function presionarBoton() {
    alert("Mensaje mostrado utilizando jQuery");
}

//Evento DOMContentLoaded – DOM está listo, por lo que el controlador puede buscar nodos DOM, inicializar la interfaz.
addEventListener('DOMContentLoaded', iniciarEventos, false);

