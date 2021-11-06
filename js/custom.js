$(function(){

    var subElementArray = $.map($('.sub-element'), function(el) { return $(el).text(); });    
    $(".element").typed({
        strings: subElementArray,
        typeSpeed: 30,
        contentType: 'html',
        showCursor: false,
        loop: true,
        loopCount: true,
    });

 
    $('.navegador').singlePageNav({
        offset: $(".navegador").height(),
        filter: ':not(.external)',
        updateHash: false
    });

    $(window).scroll(function(){
        if($(this).scrollTop()>58){
            $(".navegador").addClass("sticky");
        }
        else{
            $(".navegador").removeClass("sticky");
        }
    });

    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    $('body').bind('touchstart', function() {});

    new WOW().init();
});

$(window).load(function(){
	$('.preloader').fadeOut(1000); 
});
