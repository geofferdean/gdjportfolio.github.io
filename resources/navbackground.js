
var offset = $('#navchange').offset().top;
var navbar = $('.navbar');
var logo = $('.logo_2');
$(document).scroll(function() {
	position = $(this).scrollTop();
  if (position > offset)
  	navbar.css('background-color', 'rgba(5,32,44,1)');

  else
    navbar.css('background-color', 'rgba(5,32,44,0)');
});
