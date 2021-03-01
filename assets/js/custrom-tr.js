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

  $('.element_news').slick({
    dots: false,
    slidesToShow: 3,
    autoplay: false,
    autoplaySpeed: 1000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1
        }
      },
    ]
  });

  $('.element_list_cate').slick({
    speed: 8000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false
  });

  $('.icon_backtotop').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 800);
    return false;
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.icon_backtotop').fadeIn();
      $('.section_header').addClass('section_header_fixed');
    } else {
      $('.icon_backtotop').fadeOut();
      $('.section_header').removeClass('section_header_fixed');
    }
  });

  $('.icon_menu_mobi').click(function(){
    $('.main_header').toggleClass('active');
  });

  $('.main_menu li.hightline').click(function(event) {
    if ($('.main_menu').hasClass('menu_tab')) {
      $('.main_menu li.hightline').not($(this)).removeClass('active');/**/
    }
    $(this).toggleClass('active');
  });

  $('.section_footer .row .footer_item').click(function(event) {
    if ($('.section_footer .row').hasClass('footer_tab')) {
      $('.section_footer .row .footer_item').not($(this)).removeClass('active');/**/
    }
    $(this).toggleClass('active');
  });

  

});