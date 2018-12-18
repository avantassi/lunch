
/*

Template: Sofbox - Responsive Software Landing Page
Author: iqonicthemes.in
Version: 1.0
Design and Developed by: iqonicthemes.in

*/
/*================================================
[  Table of contents  ]
================================================

::page loader
::Back to top
::Accordion
::Amazing Tab
::Header
::Img Skrollr
::Magnific Popup
::countdown
::owl-carousel
::Progress Bar
::widget
::counter
::Screenshots silder
::Wow Animation

======================================
[ End table content ]
======================================*/

"use strict";

/*************************
 page loader
 *************************/
function preloader() {
    $("#load").fadeOut();
    $('#loading').delay().fadeOut();

}

/*************************
 Back to top
 *************************/
function backtotop() {
    $('#back-to-top').fadeOut();
    $(window).scroll(function() {
        if ($(this).scrollTop() > 250) {
            $('#back-to-top').fadeIn(1500);
        } else {
            $('#back-to-top').fadeOut(500);
        }
    });
    // scroll body to 0px on click
    $('#top').on('click', function() {
        $('top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
}

/*************************
 Amazing Tab
 *************************/
function Tabbar() {
    $('#iq-amazing-tab').on('click', 'li', function() {
        $('#iq-amazing-tab  li.active1').removeClass('active1');
        $(this).addClass('active1');
    });
}

/*************************
 Accordion
 *************************/
function accordion() {
    var $acpanel = $(".iq-accordion .ad-block > .ad-details"),
        $acsnav = $(".iq-accordion .ad-block > .ad-title");

    $acpanel.hide().first().slideDown("easeOutExpo");
    $acsnav.first().addClass("ad-active");
    $acsnav.on('click', function() {
        var $this = $(this).next(".ad-details");
        $acsnav.parent().removeClass("ad-active");
        $(this).parent().addClass("ad-active");
        $acpanel.not($this).slideUp("easeInExpo");
        $(this).next().slideDown("easeOutExpo");
        return false;
    });

}

/*************************
 Header
 *************************/
function header() {
    $('a.page-scroll').on('click', function(e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 1500);
        e.preventDefault();
    });
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 100) {
            $('.menu-top').addClass('menu-sticky');
        } else {
            $('.menu-top').removeClass('menu-sticky');
        }
    });
}



/*************************
 Img Skrollr
 *************************/
function imgskrollr() {
    var mySkrollr = skrollr.init({
        forceHeight: false,
        easings: {
            easeOutBack: function(p, s) {
                s = 1.70158;
                p = p - 1;
                return (p * p * ((s + 1) * p + s) + 1);
            }
        },
        mobileCheck: function() {
            //hack - forces mobile version to be off
            return false;
        }
    });
}

/*************************
 Magnific Popup
 *************************/

function popupgallery() {
    $('.popup-gallery').magnificPopup({
        delegate: 'a.popup-img',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            }
        }
    });

    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

}


/*************************
 countdown
 *************************/
function countdown1() {
    $('#countdown').countdown({
        date: '10/01/2018 23:59:59',
        offset: -8,
        day: 'Day',
        days: 'Days'
    }, function() {
        alert('Done!');
    });
}


/*************************
 Progress Bar
 *************************/

function progress() {
    $('.iq-progress-bar > span').each(function() {
        var $this = $(this);
        var width = $(this).data('percent');
        $this.css({
            'transition': 'width 2s'
        });
        setTimeout(function() {
            $this.appear(function() {
                $this.css('width', width + '%');
            });
        }, 500);
    });
}


/*************************
 widget
 *************************/


function widget() {
    $('.iq-widget-menu > ul > li > a').on('click', function(){
        var checkElement = $(this).next();
        $('.iq-widget-menu li').removeClass('active');
        $(this).closest('li').addClass('active');
        if ((checkElement.is('ul')) && (checkElement.is(':visible'))) {
            $(this).closest('li').removeClass('active');
            checkElement.slideUp('normal');
        }
        if ((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
            $('.iq-widget-menu ul ul:visible').slideUp('normal');
            checkElement.slideDown('normal');
        }
        if ($(this).closest('li').find('ul').children().length === 0) {
            return true;
        } else {
            return false;
        }
    });
}


/*************************
 counter
 *************************/

function counter() {
    $('.timer').countTo();
}


/*************************
 Screenshots silder
 *************************/
function screensilder() {
    var slide = $('.slider-single');
    var slideTotal = slide.length - 1;
    var slideCurrent = -1;

    function slideInitial() {
        slide.addClass('proactivede');
        setTimeout(function() {
            slideRight();
        }, 500);
    }

    function slideRight() {
        if (slideCurrent < slideTotal) {
            slideCurrent++;
        } else {
            slideCurrent = 0;
        }

        if (slideCurrent > 0) {
            var preactiveSlide = slide.eq(slideCurrent - 1);
        } else {
            var preactiveSlide = slide.eq(slideTotal);
        }
        var activeSlide = slide.eq(slideCurrent);
        if (slideCurrent < slideTotal) {
            var proactiveSlide = slide.eq(slideCurrent + 1);
        } else {
            var proactiveSlide = slide.eq(0);

        }

        slide.each(function() {
            var thisSlide = $(this);
            if (thisSlide.hasClass('preactivede')) {
                thisSlide.removeClass('preactivede preactive active proactive').addClass('proactivede');
            }
            if (thisSlide.hasClass('preactive')) {
                thisSlide.removeClass('preactive active proactive proactivede').addClass('preactivede');
            }
        });
        preactiveSlide.removeClass('preactivede active proactive proactivede').addClass('preactive');
        activeSlide.removeClass('preactivede preactive proactive proactivede').addClass('active');
        proactiveSlide.removeClass('preactivede preactive active proactivede').addClass('proactive');
    }

    function slideLeft() {
        if (slideCurrent > 0) {
            slideCurrent--;
        } else {
            slideCurrent = slideTotal;
        }

        if (slideCurrent < slideTotal) {
            var proactiveSlide = slide.eq(slideCurrent + 1);
        } else {
            var proactiveSlide = slide.eq(0);
        }
        var activeSlide = slide.eq(slideCurrent);
        if (slideCurrent > 0) {
            var preactiveSlide = slide.eq(slideCurrent - 1);
        } else {
            var preactiveSlide = slide.eq(slideTotal);
        }
        slide.each(function() {
            var thisSlide = $(this);
            if (thisSlide.hasClass('proactivede')) {
                thisSlide.removeClass('preactive active proactive proactivede').addClass('preactivede');
            }
            if (thisSlide.hasClass('proactive')) {
                thisSlide.removeClass('preactivede preactive active proactive').addClass('proactivede');
            }
        });
        preactiveSlide.removeClass('preactivede active proactive proactivede').addClass('preactive');
        activeSlide.removeClass('preactivede preactive proactive proactivede').addClass('active');
        proactiveSlide.removeClass('preactivede preactive active proactivede').addClass('proactive');
    }

    var left = $('.slider-left');
    var right = $('.slider-right');
    left.on('click', function() {
        slideLeft();
    });
    right.on('click', function() {
        slideRight();
    });
    slideInitial();
}

/*************************
 Wow Animation
 *************************/
function wowanimation() {
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: false,
        live: true
    });
    wow.init();
}

//прокрутка
$(document).ready(function() {
    $('.dostavka').bind('click', function(e){
        var doc_w = $(document).width();
        if( doc_w > 1024){

            $('html,body').stop().animate({scrollTop: ($('#contact').offset().top - 10)}, 1000);
        } else {

            $('html,body').stop().animate({scrollTop: ($('#contact').offset().top - 30)}, 1000);
        }

        e.preventDefault();
    });


    $('.menu').bind('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('.tabs_cont').offset().top -70}, 1000);
        e.preventDefault();
    });
});


//swiper отзывы
var appendNumber = 3;
var prependNumber = 1;
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    centeredSlides: true,
    spaceBetween: 130,
    breakpoints: {
        // when window width is <= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window width is <= 480px
        480: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is <= 640px
        640: {
            slidesPerView: 1,
            spaceBetween: 30
        }
    },


    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});



//swiper производство
var imageSwiper = new Swiper('.image-slider', {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 130,
    breakpoints: {
        // when window width is <= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window width is <= 480px
        480: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is <= 640px
        640: {
            slidesPerView: 1,
            spaceBetween: 30
        }
    },


    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-wrapper-right',
        prevEl: '.swiper-wrapper-left',
    },
});

//modal
function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

function formatDate(date) {

    var currentDay  = date.getDate();
    var currentMonth  = (date.getMonth() + 1);

    if (currentDay < 10) { currentDay = '0' + currentDay; }
    if (currentMonth < 10) { currentMonth = '0' + currentMonth; }

    return   currentDay+ "-" + currentMonth + "-" + date.getFullYear();
}

$(document).ready(function() {
    var date = new Date();
    $("#data").text(formatDate(addDays(date, 3)));

    var delay_popup = 10000;
    setTimeout("document.getElementById('overlay').style.display='block'", delay_popup);
});

//fancybox
$(document).ready(function() {	
	$("a.single_image").fancybox();
});

//form
$(document).ready(function() {
 
    //E-mail Ajax Send
    $("form").submit(function() { //Change
      var th = $(this);
      $.ajax({
        type: "POST",
        url: "../mail.php", //Change
        data: th.serialize()
      }).done(function() {
        alert("Thank you!");
        setTimeout(function() {
          // Done Functions
          th.trigger("reset");
        }, 1000);
      });
      return false;
    });
   
  });