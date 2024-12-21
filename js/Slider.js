const slides = document.querySelectorAll('.slide')
const slidesContainer = document.querySelector('.slides')
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')

let currentIndex = 2 // Спочатку активний слайд (третій за порядком)

function updateSlider() {
	// Встановлюємо активний клас
	slides.forEach((slide, index) => {
		slide.classList.remove('active')
		if (index === currentIndex) {
			slide.classList.add('active')
		}
	})

	// Зміщуємо контейнер, щоб активний слайд був по центру
	const offset = -currentIndex * (slides[0].offsetWidth + 20) // Зміщення з урахуванням ширини слайда та gap
	slidesContainer.style.transform = `translateX(calc(50% + ${offset}px))`
}

// Події для кнопок
prevBtn.addEventListener('click', () => {
	if (currentIndex > 0) {
		currentIndex--
		updateSlider()
	}
})

nextBtn.addEventListener('click', () => {
	if (currentIndex < slides.length - 1) {
		currentIndex++
		updateSlider()
	}
})

// Ініціалізація
updateSlider()
