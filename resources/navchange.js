
var offset = $('#navchange').offset().top;
var navbar = $('.navbar');

$(document).scroll(function() {
	position = $(this).scrollTop();
  if (position > offset)
  	navbar.css('width', '100%');

  else
    navbar.css('width', '570px');
});
