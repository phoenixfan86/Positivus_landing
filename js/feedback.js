const sumbitBtn = document.getElementById('sumbit-btn')

sumbitBtn.addEventListener('click', function () {
	const inputName = document.getElementById('name').value.trim()
	const inputEmail = document.getElementById('email').value.trim()
	const inputText = document.getElementById('textarea').value.trim()

	if (!inputName || !inputEmail || !inputText) {
		alert('Fill in all fields.')
		return
	}

	const mailtoLink = `mailto:example@example.com?subject=Message from ${encodeURIComponent(
		inputName
	)}&body=Name: ${encodeURIComponent(inputName)}%0AEmail: ${encodeURIComponent(
		inputEmail
	)}%0A%0A${encodeURIComponent(inputText)}`

	window.location.href = mailtoLink
})
