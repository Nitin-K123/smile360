(function ($) {
    "use strict";
	
	var $window = $(window); 
	var $body = $('body'); 

	/* Preloader Effect */
	$window.on('load', function(){
		$(".preloader").fadeOut(600);
	});

	/* Sticky Header */	
	if($('.main-header').length){
		$(window).scroll(function() {
			if ($(this).scrollTop() > 300){  
				$('header').addClass("header-sticky");
			  }
			  else{
				$('header').removeClass("header-stickyy");
			  }
			});
			
	}	
	
	/* Slick Menu JS */
	$('#menu').slicknav({
		label : '',
		prependTo : '.responsive-menu'
	});

	if($("a[href='#top']").length){
		$("a[href='#top']").click(function() {
			$("html, body").animate({ scrollTop: 0 }, "slow");
			return false;
		});
	}



	
	/* Service Single Image Carousel JS */
	if ($('.service-single-slider').length) {
		const service_single_slider = new Swiper('.service-single-slider .swiper', {
			slidesPerView : 1,
			speed: 1000,
			spaceBetween: 10,
			loop: true,
			autoplay: {
				delay: 5000,
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			navigation: {
				nextEl: '.service-single-button-next',
				prevEl: '.service-single-button-prev',
			},
		});
	}


	
	/* Image Reveal Animation */
	if ($('.reveal').length) {
        gsap.registerPlugin(ScrollTrigger);
        let revealContainers = document.querySelectorAll(".reveal");
        revealContainers.forEach((container) => {
            let image = container.querySelector("img");
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    toggleActions: "play none none none"
                }
            });
            tl.set(container, {
                autoAlpha: 1
            });
            tl.from(container, 1, {
                xPercent: -100,
                ease: Power2.out
            });
            tl.from(image, 1, {
                xPercent: 100,
                scale: 1,
                delay: -1,
                ease: Power2.out
            });
        });
    }

	/* Text Effect Animation */
	if ($('.text-anime-style-1').length) {
		let staggerAmount 	= 0.05,
			translateXValue = 0,
			delayValue 		= 0.5,
		   animatedTextElements = document.querySelectorAll('.text-anime-style-1');
		
		animatedTextElements.forEach((element) => {
			let animationSplitText = new SplitText(element, { type: "chars, words" });
				gsap.from(animationSplitText.words, {
				duration: 1,
				delay: delayValue,
				x: 20,
				autoAlpha: 0,
				stagger: staggerAmount,
				scrollTrigger: { trigger: element, start: "top 85%" },
				});
		});		
	}
	
	if ($('.text-anime-style-2').length) {				
		let	 staggerAmount 		= 0.03,
			 translateXValue	= 20,
			 delayValue 		= 0.1,
			 easeType 			= "power2.out",
			 animatedTextElements = document.querySelectorAll('.text-anime-style-2');
		
		animatedTextElements.forEach((element) => {
			let animationSplitText = new SplitText(element, { type: "chars, words" });
				gsap.from(animationSplitText.chars, {
					duration: 1,
					delay: delayValue,
					x: translateXValue,
					autoAlpha: 0,
					stagger: staggerAmount,
					ease: easeType,
					scrollTrigger: { trigger: element, start: "top 85%"},
				});
		});		
	}
	
	if ($('.text-anime-style-3').length) {		
		let	animatedTextElements = document.querySelectorAll('.text-anime-style-3');
		
		 animatedTextElements.forEach((element) => {
			//Reset if needed
			if (element.animation) {
				element.animation.progress(1).kill();
				element.split.revert();
			}

			element.split = new SplitText(element, {
				type: "lines,words,chars",
				linesClass: "split-line",
			});
			gsap.set(element, { perspective: 400 });

			gsap.set(element.split.chars, {
				opacity: 0,
				x: "50",
			});

			element.animation = gsap.to(element.split.chars, {
				scrollTrigger: { trigger: element,	start: "top 90%" },
				x: "0",
				y: "0",
				rotateX: "0",
				opacity: 1,
				duration: 1,
				ease: Back.easeOut,
				stagger: 0.02,
			});
		});		
	}

	/* Interactive Process Layout Start */
	var element = $('.interactive');
    if (element.hasClass('interactive-process-layout')) {                
		var items = element.find('.interactive-inner-process');
		if (items.length) {
			items.on({
				mouseenter: function() {
					var index = $(this).data('index'),
						targetImg = element.find(`.interactive-process-image.img-${index}`);
		
					if($(this).hasClass('activate')) return;

					items.removeClass('activate');
					$(this).addClass('activate');

					element.find('.interactive-process-image').removeClass('show');
					targetImg.addClass('show');
				},
				mouseleave: function() {
					//stuff to do on mouse leave
				}
			});
		}                 
	}
	/* Interactive Process Layout End */

	/* Animated Wow Js */	
	new WOW().init();
/* Zoom Gallery screenshot */
$('.gallery-items').magnificPopup({
	delegate: 'a',
	type: 'image',
	closeOnContentClick: false,
	closeBtnInside: false,
	mainClass: 'mfp-with-zoom',
	image: {
		verticalFit: true,
	},
	gallery: {
		enabled: true
	},
	zoom: {
		enabled: true,
		duration: 300, // don't foget to change the duration also in CSS
		opener: function(element) {
		  return element.find('img');
		}
	}
});
	
	
})(jQuery);