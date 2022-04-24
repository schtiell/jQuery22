
let iniciarEventos = function () {
    let boton1 = document.querySelector('#boton1');
    boton1.addEventListener('click', e =>{

        alert('Se presionó el boton utilizando Javascript tradicional');
    }, false);
}

//Evento DOMContentLoaded – DOM está listo, por lo que el controlador puede buscar nodos DOM, inicializar la interfaz.
addEventListener('DOMContentLoaded', iniciarEventos, false);