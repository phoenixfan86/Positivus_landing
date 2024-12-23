document.querySelector('.burger-menu').addEventListener('click', function () {
	this.classList.toggle('active')
	document.querySelector('.menu').classList.toggle('open')
})

document.addEventListener('click', function (e) {
	const burgerMenu = document.querySelector('.burger-menu')
	const mainMenu = document.querySelector('.menu')

	// Перевіряємо, чи клік був поза меню і кнопкою бургер-меню
	if (!burgerMenu.contains(e.target) && !mainMenu.contains(e.target)) {
		burgerMenu.classList.remove('active')
		mainMenu.classList.remove('open')
	}
})
