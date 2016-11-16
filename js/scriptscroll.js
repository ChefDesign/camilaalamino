//Inicia o jQuery
$(function(){
    //chama a função de scroll
    navegation($('ul.menu a'), 75);
    navegation($('header div div a'), 75);
});

//função para o scroll do menu
function navegation(elemento, desconto){
    elemento.bind('click',function(event){
        var $anchor = $(this);
        var calculo = $($anchor.attr('href')).offset().top;
        if(desconto){
            var goto = calculo-desconto;
        }else{
            var goto = calculo;
        }

        $('html, body').stop().animate({
            scrollTop: goto
        }, 900,'easeInOutExpo');

        event.preventDefault();
    });
}

var offset = $('#menu').offset().top;
var $menu = $('#menu');
$(document).on('scroll', function () {
    if (offset <= $(window).scrollTop()) {
        $menu.addClass('fixar');
    } else {
        $menu.removeClass('fixar');
    }
});
