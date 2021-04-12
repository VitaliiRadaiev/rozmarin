{
	let popularProductsBlock = document.querySelector('.popular-products');
	if(popularProductsBlock) {
		popularProductsBlock.querySelectorAll('.popular-products__triggers').forEach((item) => {
			item.addEventListener('click', function(e) {
				e.preventDefault();
				const id = e.target.getAttribute('href').replace('#','');

				popularProductsBlock.querySelectorAll('.popular-products__triggers').forEach((child) => {
					child.classList.remove('active');
				});

				popularProductsBlock.querySelectorAll('.popular-products__tabs-content').forEach((child) => {
					child.classList.remove('active');
				});

				item.classList.add('active');
				document.getElementById(id).classList.add('active');
			});
		});
	}
}