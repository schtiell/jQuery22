
//jQuery

$(function () {
    
    console.log('Eventos mouseup & mousedown');

    let hacerClick = function () {
        $(this).css('background', '#D2B4DE')
    }

    let soltarClick = function () {
        $(this).css('background', '#F8F9F9')
    }

    let celdas = $('#table td');
    celdas.mouseup(soltarClick);
    celdas.mousedown(hacerClick);


    //====================== Ejercicio 2:


    let indicarExito = function () {
        $(this).addClass('btn-success');
        $(this).text('Operación exitosa!!');
    }

    let indicarError = function (){
        $(this).addClass('btn-danger');
        $(this).text('Operación erronea!!');
    }

    let regresarClase = function () {
        $(this).removeClass('btn-success');
        $(this).text('Boton 1');
    }

    let regresarClase2 = function () {
        $(this).removeClass('btn-danger');
        $(this).text('Boton 2');
    }

    let bnt1 = $('#btn-1');
    bnt1.mousedown(indicarExito);
    bnt1.mouseup(regresarClase);


    let btn2 = $('#btn-2');
    btn2.mousedown(indicarError);
    btn2.mouseup(regresarClase2);
});