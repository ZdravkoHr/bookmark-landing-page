import features from './features.js';
const filters = document.querySelectorAll('.filters li');
let activeFilter = filters[0].dataset.filter;

function changeActive() {
	filters.forEach(filter => {
		filter.classList.remove('active');
	});

	this.classList.add('active');
	activeFilter = this.dataset.filter;
	updateTab();
}

function updateTab() {
	document
		.querySelector('.bookmarking img')
		.setAttribute('src', features[activeFilter].image);

	document.querySelector('.bookmark-text h2').textContent =
		features[activeFilter].title;

	document.querySelector('.bookmark-text p').textContent =
		features[activeFilter].info;
}

filters.forEach(filter => {
	filter.addEventListener('click', changeActive);
});
