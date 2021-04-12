{
    let faqList = document.querySelector('.faq__list');
    if(faqList) {

        
        faqList.querySelectorAll('.faq__collapse').forEach(btn => {
            btn.addEventListener('click', function(e){
                e.preventDefault();
                _slideUp(this.closest('.faq__collapse-content'));
                this.closest('.faq__collapse-content').previousElementSibling.classList.remove('_active')
            })
        })
    }
}

//Spollers
{
    let spollers = document.querySelectorAll("._accordione");
	if (spollers.length > 0) {
		for (let index = 0; index < spollers.length; index++) {
			const spoller = spollers[index];

			spoller.addEventListener("click", function (e) {
				//e.preventDefault();
				spoller.classList.toggle('_active');
				_slideToggle(spoller.nextElementSibling);
			});
		}
	}
}

