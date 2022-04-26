$(function(){

    var jElement = $('.menubar');

    $(window).scroll(function(){
        if ( $(this).scrollTop() > 105 ){
            jElement.css({
                'position':'fixed',
                'top':'0px',
                'left':'135px'
            });
        }else{
            jElement.css({
                'position':'relative',
                'top':'auto',
                'left':'0px'
            });
        }
    });
});