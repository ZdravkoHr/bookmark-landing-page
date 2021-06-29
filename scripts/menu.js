const menu = document.querySelector('.mobile-menu-wrapper');
const openIcon = document.querySelector('.main-nav .burger-icon');
const closeIcon = document.querySelector('.main-nav .close-icon');

function open() {
	menu.classList.add('opened');
}

function close() {
	menu.classList.remove('opened');
}

openIcon.addEventListener('click', open);
closeIcon.addEventListener('click', close);
