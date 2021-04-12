// ==  slider ==========================================================================
{
	let promoSlider = document.querySelector('.promo-slider');
	if(promoSlider) {
		let sliderBg = document.querySelector('.promo-slider__bg');
				let promoSlideBg = new Swiper(sliderBg, {
				slidesPerView:1,
				effect: 'fade',
				loop: true,
				speed: 600,
				// autoplay: {
				//   delay: document.querySelector('.res-single .res-single__hero.slider') ? 8000 : 4000,
				//    disableOnInteraction: false,
				// },
				//spaceBetween: 15,
				preloadImages: false,
				lazy: {
					loadOnTranstitionStart: false,
					loadPrevNext:true,
				}
				})

		let sliderContent = document.querySelector('.promo-slider__content .swiper-container');
				let promoSliderContent = new Swiper(sliderContent, {
				slidesPerView: 1,
				loop: true,
				speed: 600,
				// autoplay: {
				//   delay: document.querySelector('.res-single .res-single__hero.slider') ? 8000 : 4000,
				//    disableOnInteraction: false,
				// },
				//spaceBetween: 35,
				pagination: {
				    el: document.querySelector('.promo-slider__pagination'),
				     clickable: true,
				     renderBullet: function(index, className) {
				     	let num;
				     	if((index + 1) >= 10) {
				     	    num = index + '.';
				     	} else {
				     		num = '0' + (index + 1) + '.'; 
				     	}
				     	return '<span class="'+ className +'"> ' + num + '</span>';
				     }
				  },
				 navigation: {
				 	nextEl: '.promo-slider__btn-next',
				 	prevEl: '.promo-slider__btn-prev',
				 }, 
				})

		promoSliderContent.controller.control = promoSlideBg;
	}
}
// == and  slider ==========================================================================