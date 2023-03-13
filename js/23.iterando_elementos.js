
//jQuery metodo corto
$(function () {
    
    /**
     *  Ejercicio 1:
     */

    let resaltarParrafos = function () {
        
        let parrafos = $(this);

        if(parrafos.text().length <= 100){
            console.log(parrafos.text());
            parrafos.css({
                'background-color': '#D5F5E3',
                'border-width': '2px',
                'border-style': 'solid',
                'border-color': '#82E0AA',
                'border-radius': '10px'
            });
        }
    }

    let parrafos = $('.parrafo p');
    parrafos.each(resaltarParrafos);


    /**
     * Ejercicio 2:
     */

    //Funcion realizarBusqueda()
    let realizarBusqueda = function () {

        let links = $(this);
        let atributo = links.attr('href');

        //Método indexOf busca una cadena, si retorna -1 el string no fue encontrado.
        if(atributo.indexOf('.ar') != -1){
            links.css({
                'background': '#D2B4DE',
                'font-weight': 'bold',
            });
        }
    }

    let lista_enlaces = $('#lista-links a');
    lista_enlaces.each(realizarBusqueda);
});