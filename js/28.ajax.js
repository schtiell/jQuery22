// jQuery método corto
$(function () {

  let solicitarDatos = function () {
    
    let num = $("#numero").val();

    console.log(`Ejercicio de ajax el valor del numero: ${num}`);

    $.ajax({
      async: true,
      type: "POST",
      dataType: "html",
      contentType: "application/x-www-form-urlencoded",
      url: "../php/pagina5.php",
      data: "numero=" + num,
      beforeSend: inicioEnvio,
      success: llegadaDatos,
      timeout: 4000,
      error: problemas
    });

    return false; //Evitar la propagación del evento click sobre el boton
  }

  let inicioEnvio = function () {
    let container = $("#resultados");
    container.html('<img src="../assets/loader.gif">');
  }
  
  let llegadaDatos = function (datos) {
    $("#resultados").html(`<span>El cuadrado es: ${datos}</span>`);
  }
  
  let problemas = function () {
    $("#resultados").html('<span>Problemas en el servidor.</span>');
  }

  let boton = $('#btn-enviar');
  boton.click(solicitarDatos);
});