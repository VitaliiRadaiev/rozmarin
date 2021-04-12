{
	const slider = document.querySelector('.latest-articles__list');
	if(slider) {
		let mySwiper;

		function mobileSlider() {
			if(document.documentElement.clientWidth <= 767 && slider.dataset.mobile == 'false') {
				mySwiper = new Swiper(slider, {
					slidesPerView: 1,
					spaceBetween: 15,
					speed: 600,
					pagination: {
					    el: slider.querySelector('.slider-pagination'),
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
				});

				slider.dataset.mobile = 'true';
			}

			if(document.documentElement.clientWidth > 767) {
				slider.dataset.mobile = 'false';

				if(slider.classList.contains('swiper-container-initialized')) {
					mySwiper.destroy();
				}
			}
		}

		mobileSlider();

		window.addEventListener('resize', () => {
			mobileSlider();
		})
	}

}