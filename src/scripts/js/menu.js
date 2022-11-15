const burgerIcon = document.getElementById('burgerIcon');
const nav = document.querySelector('nav');

burgerIcon.addEventListener('click',function() {
    nav.classList.toggle('menuActive');
})

window.addEventListener('resize', function() {
	if (window.innerWidth < 1200) {
		nav.classList.add('menuActive');
	} else {
        nav.classList.remove('menuActive');
    }
})