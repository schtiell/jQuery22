
// jQuery short method definition

$(function(){

    console.log('Mostrando un tooltip con jQuery');

    $('body').append('<div id="divmensaje"> </div>');
    
    $('#divmensaje').hide();
    
    $('.cuadradito').hover(function (e) {
        // over
        let tooltip = $('#divmensaje');
        tooltip.show();            
        tooltip.css("left", e.clientX + document.body.scrollLeft + 5);
        tooltip.css("top", e.clientY + document.body.scrollTop + 5);
        tooltip.load("../php/pagina7.php?codigo=" + $(this).attr('id'));
        }, function () {
            // out
            let tooltip = $('#divmensaje');
            tooltip.hide();
        }
    );
    $('.cuadradito').mousemove(function (e) { 
        // values: e.clientX, e.clientY, e.pageX, e.pageY
        $('#divmensaje').css("left", e.clientX + document.body.scrollLeft + 5);
        $('#divmensaje').css("top", e.clientY + document.body.scrollLeft + 5);  
    });
});