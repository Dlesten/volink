var swiper = new Swiper('.mySwiper', {
	pagination: {
		el: '.swiper-pagination',
		dynamicBullets: true
	}
});
document.addEventListener('DOMContentLoaded', function () {
	const burgerIcon = document.querySelector('.small-visually');
	const menu = document.querySelector('.header__menu');
	const menuLinks = document.querySelectorAll('.header__menu a');
	const menuClose = document.querySelector('.menu__close');

	burgerIcon.addEventListener('click', function () {
		this.classList.toggle('active');
		menu.classList.toggle('active');
	});

	menuLinks.forEach(link => {
		link.addEventListener('click', function () {
			burgerIcon.classList.remove('active');
			menu.classList.remove('active');
		});
	});
	burgerIcon.addEventListener('click', function () {
		menu.classList.add('active');
	});

	menuClose.addEventListener('click', function () {
		menu.classList.remove('active');
	});
});
