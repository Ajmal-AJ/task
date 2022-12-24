$(document).ready(function(){
    $(".hme").addClass("nav-active");
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 200) {
            $(".navbar-scroll").addClass("fixed-top");
            $(".back-to-top").addClass("d-flex");
            $(".back-to-top").removeClass("d-none");
            $(".hme").removeClass("nav-active");
    
        } else {
            $(".navbar-scroll").removeClass("fixed-top");
            $(".back-to-top").addClass("d-none");
            $(".back-to-top").removeClass("d-flex");
            $(".hme").addClass("nav-active");
    
        }
    });
})

//counter
var count = $('.counter');
count.counterUp({
  delay: 40,
  time: 3000
});

$('.testimonial-box .owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    responsiveClass: true,
    nav: false,
   
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 1,
            nav: false
        },
        1000: {
            items: 2,
            nav: false,
            loop: false
        }
    }
})


$(document).ready(function () {
    $('.grid').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
    });
    $('.portfolio-btn-bx li').click(function () {
        $('.portfolio-btn-bx li').removeClass('prtflo-btn-active');
        $(this).addClass('prtflo-btn-active');

        var selector = $(this).attr('data-filter');
        $('.grid').isotope({
            filter: selector
        });
        return false;
    })
})

