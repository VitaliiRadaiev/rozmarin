{
	let fromSearch = document.querySelectorAll('.form-search');
	if(fromSearch) {
		fromSearch.forEach(form => {
			let input = form.querySelector('.form-search__input'); 
			input.addEventListener('focus', () => {
				if(!form.classList.contains('form-search_open')) { 
					form.classList.add('_focus');
				}
			})
			input.addEventListener('blur', () => {
				form.classList.remove('_focus');
			})
		})
	}
}