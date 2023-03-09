
//jQuery
$(function () {

    /**
     * 
     * Ejercicio 1:
     */

    let obtenerCoordenadas = function (e) {
        
        console.log(e);
        
        let coordenada_x = $('#coordenada-x');
        coordenada_x.text(` - Coordenada X= ${e.clientX}`);
        coordenada_x.css({
            fontWeight: 'bold'
        });

        let coordenada_y = $('#coordenada-y');
        coordenada_y.text(`- Coordenada Y= ${e.clientY}`);
        coordenada_y.css({
            fontWeight: 'bold'
        });
    }

    let documento = $(document);
    documento.mousemove(obtenerCoordenadas);


    /**
     * 
     * Ejercicio 2:
     */

    let moverPuntero = function (e) {
        let coord_x = $('#div-cx');
        let coord_y = $('#div-cy');

        coord_x.text(`= x: ${e.clientX}`);
        coord_y.text(`= y: ${e.clientY}`);
    }

    let mouseFuera = function () {
        let mensaje = $('#mensaje');
        mensaje.text('Mouse fuera del contenedor');
    }

    let mouseEntra = function () {
        let mensaje = $('#mensaje');
        mensaje.text('');
    }

    let contenedor= $('#ejercicio');
    contenedor.mousemove(moverPuntero);
    contenedor.mouseleave(mouseFuera);
    contenedor.mouseenter(mouseEntra);
});