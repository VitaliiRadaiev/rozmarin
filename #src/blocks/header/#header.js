{
	let header = document.querySelector('.header');
	let wrapper = document.querySelector('.wrapper');
	if(wrapper) {
		let menu = header.querySelector('.header__menu');

		window.addEventListener('scroll', () => {
			if(window.pageYOffset > 10) {
				header.classList.add('background');
			} else if(window.pageYOffset <= 10) {
				if(!menu.classList.contains('open')) {
					header.classList.remove('background');
				}
			}
		})
	}


	let navMenu = document.querySelector('.header__menu-list');
	if(navMenu) {
		function addClasses() {
			if(document.documentElement.clientWidth < 992) {
				navMenu.classList.add('_spollers', '_one');
				navMenu.querySelectorAll('.header__menu-link').forEach(link => {
					if(link.nextElementSibling) {
						link.classList.add('_spoller');
					}
				})
			}
		}

		function removeClasses() {
				navMenu.classList.remove('_spollers', '_one');
				navMenu.querySelectorAll('.header__menu-link').forEach(link => {
					link.classList.remove('_spoller');
				})
		}
		addClasses() ;
		spollerInit();
		
		window.addEventListener('resize', function() {
			if(document.documentElement.clientWidth < 992) {
				addClasses();
				spollerInit();
			} else {
				removeClasses();
			}
		})
	}


}


