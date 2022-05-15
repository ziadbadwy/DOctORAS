/*wndow*/
$(window).scroll(function(){
    x=$(window).scrollTop();
    console.log(x);
});
$(window).scroll(function(){
    if($(window).scrollTop() >0) {
        $('.start').css(            
            'display',"none"

        );
        $('.nav2').css(
            'top',"0px"
        );
    }else{
        $('.start').css(
            'display',"block"


        );
        $('.nav2').css(
            'top',"25px"
        );

    }
    
});
//arrow
$(window).scroll(function(){
    if($(window).scrollTop() > 100) {
       
        $('.arrow').fadeIn();
    }else{
        $('.arrow').fadeOut();
    }
    
});

//smoth scroll
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 500,
	speedAsDuration: true
});
//wow
new WOW().init();
//nice scroll
// 1. Simple mode, it styles document scrollbar:
$(function() {  
    $("body").niceScroll();
});
$("body").niceScroll({
    zindex: "auto" | [99999999999]
});
