
//jQuery método corto
$(function () {
    
    console.log('Manejo de funciones anónimas con jQuery');

    //Titulo 1
    let titulo1 = $('#titulo-1');

    //Uso de función anónima al presentarse el evento clic sobre el elemento h1
    titulo1.click(function (e) { 
        
        //El objeto this hace referencia al elemento sobre el cual está ejecutandose el evento
        let titulo = $(this);
        titulo.css('color', '#ff0000');
        titulo.css('background-color', '#ffff00');
        titulo.css('font-family', 'Courier');
    });


    //Uso de funciones anonimas
    $('#titulo-2').click(function (e) { 

        let titulo = $(this);
        titulo.css('color', '#ffff00');
        titulo.css('background-color', '#ff0000');
        titulo.css('font-family', 'Arial');
    });
});