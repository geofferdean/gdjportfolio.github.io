$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y < 195) {
        $('.logo_2').fadeIn(1000);
    } else {
        $('.logo_2').fadeOut(100);
    }

});
