$(document).ready(function () {
    $('.hamburger').off('click').on('click', function () {
        $(".hamburger").toggleClass('ta-open');
        $(".header-nav-wrapper ul").toggleClass('ta-open');
    });
    

    $('#testimonial-slider').owlCarousel({
      loop:true,
      margin:30,
      nav:false,
      autoplay:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:2
          }
      }
    });
});
var sections = $('section')
  , nav = $('nav')
  , nav_height = nav.outerHeight();

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
  
  sections.each(function() {
    var top = $(this).offset().top - 100,
        bottom = top + $(this).outerHeight();
    
    if (cur_pos >= top) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');
      
      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});

nav.find('a').on('click', function () {

  $(".hamburger").removeClass('ta-open');
      $(".header-nav-wrapper ul").removeClass('ta-open');
  var $el = $(this)
    , id = $el.attr('href');
  
  $('html, body').animate({
    scrollTop: $(id).offset().top
  }, 500);
  
  return false;
});
