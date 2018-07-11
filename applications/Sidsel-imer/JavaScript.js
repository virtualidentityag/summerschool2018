$('#Why_button').click(function () {
    $('.info-texst2').show();
    $('.info-texst').hide();
    $('.info-texst3').hide();
    $('.info-texst4').hide();
    $('.blue_ball').css({
        'height': '600px',
        'width': '600px',
        'box-shadow': '0 0 10px  rgba(0,0,0,0.6)',
        'margin-bottom': '50px',
        'animation': 'fadeIn 1s',
    });
    $('.close_btn').css({
        'display': 'inherit',
    });
    

})

$('.close_btn').click(function () {
    $('.info-texst2').hide();
    $('.info-texst3').hide();
    $('.info-texst4').hide();
    $('.info-texst').show();
    $('.blue_ball').removeAttr("style");
    $('.close_btn').css({
        'display': 'none',
    });
    $('.blue_ball').css({
        'animation': 'fadeOut 1.5s',
    });
})



$('#Challenge_button').click(function () {
    $('.info-texst3').show();
    $('.info-texst2').hide();
    $('.info-texst4').hide();
    $('.info-texst').hide();
    $('.blue_ball').css({
        'height': '600px',
        'width': '600px',
        'box-shadow': '0 0 10px  rgba(0,0,0,0.6)',
        'margin-bottom': '50px',
        'animation': 'fadeIn 1s',
    });
    $('.close_btn2').css({
        'display': 'inherit',
    });
})

$('.close_btn2').click(function () {
    $('.info-texst3').hide();
    $('.info-texst2').hide();
    $('.info-texst4').hide();
    $('.info-texst').show();
    $('.blue_ball').removeAttr("style");
    $('.blue_ball').css({
        'animation': 'fadeOut 1.5s',
    });

})

$('#CV_button').click(function () {
    $('.info-texst4').show();
    $('.info-texst3').hide();
    $('.info-texst2').hide();
    $('.info-texst').hide();
    $('.blue_ball').css({
        'height': '600px',
        'width': '600px',
        'box-shadow': '0 0 10px  rgba(0,0,0,0.6)',
        'margin-bottom': '50px',
        'animation': 'fadeIn 1s',
    });
    $('.close_btn3').css({
        'display': 'inherit',
    });
})

$('.close_btn3').click(function () {
    $('.info-texst4').hide();
    $('.info-texst3').hide();
    $('.info-texst2').hide();
    $('.info-texst').show();
    $('.blue_ball').removeAttr("style");
    $('.blue_ball').css({
        'animation': 'fadeOut 1.5s',
    });

})



$(document).ready(function () {
    setTimeout(function () {
        $('.wrapper').addClass('loaded');

    }, 3000);
});



jQuery(function () {

    $(window).load(function () {

        $('.wrapper').removeClass('preload');

    });

});
