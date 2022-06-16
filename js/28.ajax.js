// jQuery método corto
$(function () {

  let solicitarDatos = function () {
    
    let num = $("#numero").val();

    console.log(`Ejercicio de ajax el valor del numero ${v}`);

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

    return false;
  }

  let inicioEnvio = function () {
    let container = $("#resultados");
    container.html('<img src="../assets/loader.gif">');
  }
  
  let llegadaDatos = function (datos) {
    $("#resultados").text(datos);
  }
  
  let problemas = function () {
    $("#resultados").text('Problemas en el servidor.');
  }


  let boton = $('#btn-enviar');
  boton.click(solicitarDatos);
});