
var offset = $('#design').offset().top;
var navbar = $('.navbar');

$(document).scroll(function() {
	position = $(this).scrollTop();
  if (position > offset)
  	navbar.css('background-color', '#3290A3');

  else
    navbar.css('background-color', 'rgba(5,32,44,1)');
});
