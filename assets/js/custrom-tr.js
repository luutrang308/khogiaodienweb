$(document).ready(function() {
	new WOW().init();

  $('.main_header .row .list_icon > li > img').click(function(){
    $('.search_form').toggleClass('active');
  });

  $('.main_header .row .list_icon > li .search_form span .btn_close').click(function(){
    $('.search_form').toggleClass('active');
  });

  $('.slider_banner').slick({
    dots: false,
    slidesToShow: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    arrows: false,
  });

  

});