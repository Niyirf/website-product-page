$(document).ready(function () {

    $(".link").click(function (e) { 
        e.preventDefault();
        var numSec = $(this).data("sec");
        var seccion = $("main, section");
        var offset = $(seccion[numSec]).offset();
        var top = offset.top;
        var move = top - ($("header").height() + 110);
        $("html").scrollTop(move);
    });
    
});