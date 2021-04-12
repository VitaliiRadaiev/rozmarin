let priceSlider = document.querySelector('.price-filter__slider');

if(priceSlider) {
	let inputNumFrom = document.getElementById('priceStart');
	let inputNumTo = document.getElementById('priceEnd');
	let value = document.querySelector('.values-price-filter');

	let min = value.dataset.min;
	let max = value.dataset.max;
	let numStart = value.dataset.start;
	let numEnd = value.dataset.end;
	noUiSlider.create(priceSlider, {
		start: [+numStart, +numEnd],  
		connect: true,
		tooltips:[wNumb({decimals: 0, thousand: ','}) , wNumb({decimals: 0, thousand: ','})], 
		range: {
			'min': [+min],
			'1%': [100,100],
			'max': [+max],
		}
	});

	priceSlider.noUiSlider.on('update', function (values, handle) {

	    var value = values[handle];

	    if (handle) {
	        inputNumTo.value = Math.round(value);
	    } else {
	        inputNumFrom.value = Math.round(value);
	    }
	});

	inputNumTo.onchange = function() {
		setPriceValues()
	}

	inputNumFrom.onchange = function() {
		setPriceValues()
	}

	function setPriceValues() {
		let priceStartValue;
		let priceEndValue;
		if(inputNumFrom.value != '') {
			priceStartValue = inputNumFrom.value;
		}

		if(inputNumTo.value != '') {
			priceEndValue = inputNumTo.value;
		}

		  priceSlider.noUiSlider.set([priceStartValue, priceEndValue])
	}
}


//OPTION
$.each($('.option.active'), function(index, val) {
	$(this).find('input').prop('checked', true);
});
$('.option').click(function(event) {
	if(!$(this).hasClass('disable')){
			var target = $(event.target);
		if (!target.is("a")){
			if($(this).hasClass('active') && $(this).hasClass('order') ){
				$(this).toggleClass('orderactive');
			}
				$(this).parents('.options').find('.option').removeClass('active');
				$(this).toggleClass('active');
				$(this).children('input').prop('checked', true);
		}
	}
});

// == shop aside =====================================
{
	let aside = document.querySelector('.shop-aside');
	if(aside) {
		let btnOpen = document.querySelector('.head-shop__mobile-btn');
		let btnClose = document.querySelector('.shop-aside__mobile-btn-close');

		btnOpen.addEventListener('click', () => {
			if(aside.classList.contains('open')) {
				aside.classList.remove('open');
			} else {
				aside.classList.add('open');
			}
		})

		btnClose.addEventListener('click', () => {
			aside.classList.remove('open');
		})

		document.body.addEventListener('click', (e) => {
			if(!e.target.closest('.shop-aside')) {
				if(e.target.closest('.head-shop__mobile-btn')) {
					return;
				} else {
					aside.classList.remove('open');

				}
			}
		})
	}
}
// == // shop aside =====================================