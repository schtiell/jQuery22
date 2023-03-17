
//jQuery método corto
$(function () {

    /**
     * Ejercicio 1
     */

    let titulo1 = $('#titulo1');
    titulo1.click(function (e) {    //Función anónima ejecutada al disparar el evento clic
        
        let titulo = $(this);       //El objeto this hace referencia al elemento que ejecuta el evento
        titulo.css({
                    border: '2px solid #1B4F72',
                    borderRadius: '15px',
                    padding: '10px',
                    color: '#3498DB',
                    background: '#EAF2F8',
                    fontFamily: 'Courier'
        });
        
        let subtitulo = $('#titulo1 small');
        subtitulo.text('Estilos css con jQuery');
    });

    $('#titulo2').click(function (e) { 
        let titulo = $(this);
        titulo.css({
                    border: '2px solid #566573',
                    borderRadius: '10px',
                    padding: '10px 5px',
                    color: '#ABB2B9',
                    background: '#EAF2F8',
                    fontFamily: 'Arial'
        });

        let subtitulo = $('#titulo2 small');
        subtitulo.text('Estilos css con jQuery');
    });

    /**
     * Ejercicio 2:
     */

    $('#users tr').click(function (e) { 
        let fila = $(this);
        fila.css({
                    background: '#FAE5D3',
                    color: '#34495E'
        });
    });
});