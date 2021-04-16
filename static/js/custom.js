
$(document).ready(function() {
	
	"use strict";
	
  $(".scroll").click(function(event) {
        event.preventDefault();
        var full_url = this.href;
        var parts = full_url.split("#");
        var trgt = parts[1];
        var target_offset = $("#" + trgt).offset();
        var target_top = target_offset.top;
        $('html, body').animate({
            scrollTop: target_top
        }, 500);
    });
			
$(window).scroll(function(){
	var scrollend = $("#reviews").offset().top;
    if ($(window).scrollTop() >= 480 &&  $(window).scrollTop() <= scrollend +180  ) {
       $('.scroll-to-fix-section').addClass('fixed-header');
    }
    else {
       $('.scroll-to-fix-section').removeClass('fixed-header');
    }
});
	


	
	
	
	
	if ($('.accordion-section2 > li.active').hasClass('active')) {
            $('.accordion-section2 > li.active').find('ul').slideDown();
        }
        $('.accordion-section2 > li > a').click(function() {
            if (!$(this).parent('li').hasClass('active')) {
                $('.accordion-section2 > li').removeClass('active');
                $('.accordion-section2 > li > ul').slideUp();
                $(this).parent('li').addClass('active');
                $(this).next('ul').slideDown();
            }
        });
	
	
	if ($('.accordion-section1 > li.active').hasClass('active')) {
            $('.accordion-section1 > li.active').find('ul').slideDown();
        }
        $('.accordion-section1 > li > a').click(function() {
            if (!$(this).parent('li').hasClass('active')) {
                $('.accordion-section1 > li').removeClass('active');
                $('.accordion-section1 > li > ul').slideUp();
                $(this).parent('li').addClass('active');
                $(this).next('ul').slideDown();
            }
        });
	
	
		
		$(document).on('click', '.course-list-navigations > li > a', function() {
                $('.course-list-navigations > li > a').removeClass('active');
                $(this).addClass('active');
		});
	
	$(document).on('click', '.more-review-btn', function() {
            if ($('.comment-section').hasClass('more-less')) {
                $('.comment-section').removeClass('more-less');
                $(this).html('More Reviews');
                $('.scroll-to-fix-section').css('position', 'static');
            } else {
                $('.comment-section').addClass('more-less');
                $(this).html('Less Reviews');
            }
        });
		
$('.SeeMore1').click(function () {
	var $this = $(this);
	$this.toggleClass('SeeMore1');
	if ($this.hasClass('SeeMore1')) {
		$this.text('Read More >');
	} else {
		$this.text('< Read Less');
	}
});
	$('.SeeMore2').click(function () {
	var $this = $(this);
	$this.toggleClass('SeeMore2');
	if ($this.hasClass('SeeMore2')) {
		$this.text('Read More >');
	} else {
		$this.text('< Read Less');
	}
});
	
	

 $("#testimonial").owlCarousel({
        items: 1,
        itemsCustom: false,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [980, 1],
        itemsTablet: [768, 1],
        itemsTabletSmall: false,
        itemsMobile: [479, 1],
        singleItem: false,
        itemsScaleUp: false,
        autoPlay: true,
        stopOnHover: true
    });
	$(".fancybox").fancybox();
    
  });