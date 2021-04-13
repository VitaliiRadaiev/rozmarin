var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };



// === lazy load ==================================================================
document.addEventListener("DOMContentLoaded", function () {
	var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

	if ("IntersectionObserver" in window) {
		let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					let lazyImage = entry.target;
					lazyImage.src = lazyImage.dataset.src;
					//lazyImage.srcset = lazyImage.dataset.srcset;
					lazyImage.classList.remove("lazy");
					lazyImageObserver.unobserve(lazyImage);
				}
			});
		});

		lazyImages.forEach(function (lazyImage) {
			lazyImageObserver.observe(lazyImage);
		});
	} else {
		// Possibly fall back to event handlers here
	}
});
// === // lazy load ==================================================================

$(document).ready(function () {
	document.body.classList.add('is-load');

	@@include('_function.js');
	@@include('da.js');
	@@include('forms.js');

	// === Проверка, поддержка браузером формата webp ==================================================================

	function testWebP(callback) {

		var webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}

	testWebP(function (support) {

		if (support == true) {
			document.querySelector('body').classList.add('webp');
		} else {
			document.querySelector('body').classList.add('no-webp');
		}
	});

	// === // Проверка, поддержка браузером формата webp ==================================================================




	// ==== parallax =====================================================
	$('._parallax').parallax();
	// ==== parallax =====================================================


	// ==== PAGES =====================================================

	// ==== ADD PADDING-TOP ================================
	{
		let wrapper = document.querySelector('.wrapper');
		if (wrapper) {
			let headerHeight = document.querySelector('.header').clientHeight;
			if (wrapper.classList.contains('_padding-top')) {
				wrapper.style.paddingTop = headerHeight + 'px';
			}
		}
	}
	// ==== AND ADD PADDING-TOP ================================

	@@include('#shop.js');
	@@include('#product-page.js');
	@@include('#FAQ.js');
	@@include('#checkout.js');
	@@include('#profile.js');
	@@include('#contact.js');

	// ==== AND PAGES =====================================================




	// ==== BLOCKS =====================================================	

	@@include('../blocks/burger/burger.js');

	@@include('../blocks/header/#header.js');

	@@include('../blocks/forms/form-search/form-search.js');

	@@include('../blocks/promo-slider/promo-slider.js');

	@@include('../blocks/products-category/products-category.js');

	@@include('../blocks/video/video.js');

	@@include('../blocks/latest-articles/latest-articles.js');

	@@include('../blocks/testimonials-slider/testimonials-slider.js');

	@@include('../blocks/time-block/time-block.js');

	@@include('../blocks/populsr-products/populsr-products.js');

	@@include('../blocks/rating/rating.js');

	// ==== AND BLOCKS =====================================================

});

{
	function initMap() {
		let maps = document.querySelectorAll('.contact-info__map');
		if(maps.length) {
			maps.forEach(map => {
				let lat = +map.dataset.lat;
				let lng = +map.dataset.lng;
				
				const datamap = new google.maps.Map(map, {
					center: {lat: lat, lng: lng},
					zoom: 16,
				});

				const marker = new google.maps.Marker({
					position: {lat: lat, lng: lng},
					map: datamap,
				});

			})
		}
	}

}