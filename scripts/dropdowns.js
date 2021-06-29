const questions = document.querySelectorAll('.faq .question-header');
function toggleOpen() {
	const isOpened = this.parentElement.dataset.opened || 'false';
	this.parentElement.dataset.opened = isOpened === 'true' ? 'false' : 'true';
}

questions.forEach(question => {
	question.addEventListener('click', toggleOpen);
});
