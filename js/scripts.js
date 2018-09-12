$(window).scroll(function() {
  if ($(document).scrollTop() > 500) {
    $('nav').removeClass('bg-transparent');
  } else {
    $('nav').addClass('bg-transparent');
  }
});
