(function ($) {
    "use strict";

    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
      center: true,
      autoplay: true,
      smartSpeed: 2000,
      dots: true,
      loop: true,
      responsive: {
          0:{
              items:1
          },
          576:{
              items:1
          },
          768:{
              items:2
          },
          992:{
              items:3
          }
      }
  });
  
  
  // Related post carousel
  $(".related-slider").owlCarousel({
      autoplay: true,
      dots: false,
      loop: true,
      nav : true,
      navText : [
          '<i class="fa fa-angle-left" aria-hidden="true"></i>',
          '<i class="fa fa-angle-right" aria-hidden="true"></i>'
      ],
      responsive: {
          0:{
              items:1
          },
          576:{
              items:1
          },
          768:{
              items:2
          }
      }
  });
  
    // Porfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });
  
    $('#portfolio-flters li').on( 'click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');
  
      portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });


    setTimeout(function () {
        $('#rejas').click();
    }, 1000);
  
    
  })(jQuery);
  
  
  // variable 
var whatsapp = document.querySelector('.whatsapp');

// creamos un evento que escuche el scroll y al detectarlo se ejecute una funcion,
document.addEventListener('scroll',function(){   
    var posicion = window.scrollY;
    if(posicion>1000){
        whatsapp.classList.add('mostrarWhatsapp');
    } else{
        whatsapp.classList.remove('mostrarWhatsapp');
    }

});