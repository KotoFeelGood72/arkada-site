let $body,
	windowHeight,
	windowWidth,
	degree = 0.0174532925,
	mediaPoint1 = 1024,
	mediaPoint2 = 768,
	mediaPoint3 = 480,
	mediaPoint4 = 320,
	devStatus = window.productionStatus === 'development';


$(document).ready(function ($) {
	$body = $('body');

	if (devStatus) {
		pageWidget(['index']);
		pageWidget(['portfolio']);
		pageWidget(['service']);
		pageWidget(['single-work']);
		pageWidget(['single-service']);
		pageWidget(['company']);
		pageWidget(['contacts']);
		getAllClasses('html', '.elements_list');
	}
});

$(window).on('load', function () {
	updateSizes();
	loadFunc();
	if(windowWidth < mediaPoint2) {
		mobileCase();
	}
});

$(window).on('resize', function () {
	resizeFunc();
});

$(window).on('scroll', function () {
	scrollFunc();
});

function loadFunc() {
	calcViewportHeight();
}

function resizeFunc() {
	updateSizes();

	calcViewportHeight();
}

function scrollFunc() {}

function calcViewportHeight() {
	if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {
		var vh = window.innerHeight * 0.01;
		// var vh2 = document.documentElement.clientHeight * 0.01;

		document.documentElement.style.setProperty('--vh', vh + 'px');
	}
}

function updateSizes() {
	windowWidth = window.innerWidth;
	windowHeight = window.innerHeight;
}

if ('objectFit' in document.documentElement.style === false) {
	document.addEventListener('DOMContentLoaded', function () {
		Array.prototype.forEach.call(
			document.querySelectorAll('img[data-object-fit]'),
			function (image) {
				(image.runtimeStyle || image.style).background =
					'url("' +
					image.src +
					'") no-repeat 50%/' +
					(image.currentStyle
						? image.currentStyle['object-fit']
						: image.getAttribute('data-object-fit'));

				image.src =
					"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" +
					image.width +
					"' height='" +
					image.height +
					"'%3E%3C/svg%3E";
			}
		);
	});
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandom(min, max) {
	return Math.random() * (max - min) + min;
}

var styles = ['color: #fff', 'background: #cf8e1f'].join(';');
var message = 'Developed by Glivera-team https://glivera-team.com/';

console.info('%c%s', styles, message);



const serviceSlider = new Swiper('.service_slider', {
	spaceBetween: 20,
	slidesPerView: 3,
	centeredSlides: true,
	roundLengths: true,
	loop: true,
	loopAdditionalSlides: 20,
	speed: 500,
	grabCursor: true,
	navigation: {
    nextEl: '.service_slider--prev',
    prevEl: '.service_slider--next',
  },
	pagination: {
    el: '.service_slider--pugination',
    type: 'bullets',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
})



const upsellSlider = new Swiper('.upsell_slider', {
	spaceBetween: 20,
	slidesPerView: 3,
	// centeredSlides: true,
	roundLengths: true,
	loop: true,
	loopAdditionalSlides: 20,
	speed: 500,
	grabCursor: true,
	navigation: {
    nextEl: '.btn_nav_right',
    prevEl: '.btn_nav_left',
  },
	pagination: {
		el: '.upsell_slider_pag',
		dynamicBullets: true,
	},
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    620: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  }
})


var header = $('.header'),
		scrollPrev = 0;

$(window).scroll(function() {
	var scrolled = $(window).scrollTop();
 
	if ( scrolled > 100 && scrolled > scrollPrev ) {
		header.addClass('out');
	} else {
		header.removeClass('out');
	}
	scrollPrev = scrolled;
});

$(window).scroll(function(e){
	if($(window).scrollTop() > 0){
		$(".header").addClass("fixed-header");
	} else{
		$(".header").removeClass("fixed-header");
	}
});






function tabs(link, block) {
	let linkSelector = $(link),
		blockSelector = $(block);

	$(linkSelector).on('click', function (e) {
		e.preventDefault();

		let $this = $(this),
			currentData = $(this).data('item');

		$(blockSelector).removeClass('active');
		$(linkSelector).removeClass('active');

		$(block + '[data-item="' + currentData + '"]').addClass('active');
		$this.addClass('active');

	});
}

tabs('.work_tab--list li', '.work_item');





// function paralax(bottom = false, start = '-=80% top', end = 'bottom') {
// 	const paralaxWrapper = Array.from(document.querySelectorAll('.paralaxSection')).map(function(el) {
// 		const arr = Array.from(el.querySelectorAll('.paralaxEl')).map(function (item) {
// 			const tl = gsap.timeline();
// 			ScrollTrigger.create({
// 				animation: tl,
// 				trigger: el,
// 				start: start,
// 				end: end,
// 				scrub: 2,
// 				ease: 'none',
// 				// markers: true,
// 			})
// 			tl.to(item, {
// 				y: (target) => ((bottom ? el.offsetHeight : false) || -el.offsetHeight) * (item.dataset.ratio || 0.2),
// 			});
// 		})
// 	});
// }
// paralax();




document.addEventListener('DOMContentLoaded', () => {
	const burgerTrigger = document.querySelector('.header_toggle');
	const burgerWindow = document.querySelector('.burger')
	const burgerRemove = document.querySelectorAll('.burger_remove')
	const burgerLine = document.querySelector('.burger_line')
	
	burgerTrigger.addEventListener('click', () => {
		burgerWindow.classList.add('active');
		burgerLine.classList.add('active');
		$body.addClass('hidden')
	})
	
	Array.from(burgerRemove).map((el)  => {
		el.addEventListener('click', () => {
			burgerWindow.classList.remove('active');
			burgerLine.classList.remove('active');
			$body.removeClass('hidden')
		})
	})






	const callbackPopup = document.querySelector('.callback')
	const callbackRemove = document.querySelectorAll('.callback_remove')
	const callbackTrigger = document.querySelectorAll('.trigger_callback')
	const btnSubmit = document.querySelector('.callback_btn')

	Array.from(callbackTrigger).map((el) => {
		el.addEventListener('click', () => {
			callbackPopup.classList.add('active')
			$body.addClass('hidden')
		})
	})

	Array.from(callbackRemove).map((el) => {
		el.addEventListener('click', () => {
			callbackPopup.classList.remove('active')
			$body.removeClass('hidden')
		})
	})
	btnSubmit.addEventListener('click', () => {
		callbackPopup.classList.remove('active')
		$body.removeClass('hidden')
		succes('.succes')
	})
})


function succes(success) {
	$(success).toggleClass('active');
		setTimeout(function() {
			$(success).removeClass('active')
		}, 3000)
}

function close(closes) {
	$(closes).toggleClass('active');
		setTimeout(function() {
			$(closes).removeClass('active')
		}, 3000)
}














$(document).ready(function()  {

	var inputsTel = document.querySelectorAll('input[type="tel"]');
	Inputmask({
		"mask": "+7 (999) 999-99-99",
		showMaskOnHover: false
	}).mask(inputsTel);
})


function mobileCase() {
	Fancybox.bind(".single_works--img>a", {
		fitToView: true, // add this
		autoScale: true,
		padding: 0,
		scrolling: 'yes',
		
	});

}



