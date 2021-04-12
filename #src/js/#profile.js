{
	let profileInfo = document.querySelector('.profile-info');
	if(profileInfo) {
		profileInfo.querySelectorAll('.profile-info__triggers').forEach((item) => {
			item.addEventListener('click', function(e) {
				e.preventDefault();
				const id = e.target.getAttribute('href').replace('#','');

				profileInfo.querySelectorAll('.profile-info__triggers').forEach((child) => {
					child.classList.remove('active');
				});

				profileInfo.querySelectorAll('.profile-info__tabs-content').forEach((child) => {
					child.classList.remove('active');
				});

				item.classList.add('active');
				document.getElementById(id).classList.add('active');
			});
		});
	}
}