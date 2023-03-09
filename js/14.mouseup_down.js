
//jQuery

$(function (){
    
    /**
     *  Ejercicio 1
     */

    let hacerClick = function () {
        $(this).css('background', '#F1EE1B')
    }

    let soltarClick = function () {
        $(this).css('background', '#F8F9F9')
    }

    let celdas = $('#table td');
    celdas.mousedown(hacerClick);
    celdas.mouseup(soltarClick);


    /**
     *  Ejercicio 2
     */

    let indicarExito = function () {
        $(this).removeClass('btn-primary');
        $(this).addClass('btn-success');
        $(this).text('Operación exitosa!!');
    }

    let indicarError = function (){
        $(this).removeClass('btn-primary');
        $(this).addClass('btn-danger');
        $(this).text('Operación erronea!!');
    }

    let regresarClase = function () {
        $(this).removeClass('btn-success');
        $(this).addClass('btn-primary');
        $(this).text('Boton 1');
    }

    let regresarClase2 = function () {
        $(this).removeClass('btn-danger');
        $(this).addClass('btn-primary');
        $(this).text('Boton 2');
    }

    let bnt1 = $('#btn-1');
    bnt1.mousedown(indicarExito);
    bnt1.mouseup(regresarClase);

    let btn2 = $('#btn-2');
    btn2.mousedown(indicarError);
    btn2.mouseup(regresarClase2);
});