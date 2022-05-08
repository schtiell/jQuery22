
//jQuery
$(function () {
    console.log('mousemove event');

    let moverMouse = function (e) {
        let x = $('#cor-x');
        x.text(` - Coordenada X= ${e.clientX}`);

        let y = $('#cor-y');
        y.text(`- Coordenada Y= ${e.clientY}`);
    }

    let documento = $(document);
    documento.mousemove(moverMouse);

    //================== Ejercicio 2

    let moverPuntero = function (e) {
        let x = $('#x');
        let y = $('#y');

        x.text(`= x: ${e.clientX}`);
        y.text(`= x: ${e.clientY}`);
    }

    let mouseFuera = function () {
        let msj = $('#msj');
        msj.text('Mouse fuera del contenedor');
    }

    let mouseEntra = function () {
        let msj = $('#msj');
        msj.text('');
    }

    let contenedor= $('#ejercicio');
    contenedor.mousemove(moverPuntero);
    contenedor.mouseleave(mouseFuera);
    contenedor.mouseenter(mouseEntra);
});