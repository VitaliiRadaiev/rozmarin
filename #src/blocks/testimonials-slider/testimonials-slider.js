// ==  slider ==========================================================================
{
	let slider = document.querySelector('.testimonials-slider__body .swiper-container');
	if(slider) {
		let promoSliderContent = new Swiper(slider, {
			slidesPerView: 1,
			loop: true,
			speed: 600,
			autoHeight: true,
			pagination: {
			    el: document.querySelector('.testimonials-slider__pagination'),
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
			 	nextEl: '.testimonials-slider__btn-next',
			 	prevEl: '.testimonials-slider__btn-prev',
			 }, 
		})

	}
}
// == and  slider ==========================================================================