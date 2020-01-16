'use strict';

function changeTheme(target) {
	target.classList.toggle('onoffswitch_checked');
	const themeElements = document.getElementsByClassName('theme');
	for (let i = 0; i < themeElements.length; i++) {
		if (themeElements[i].classList.contains('theme_color_project-inverse') ||
			themeElements[i].classList.contains('theme_color_project-default')) {
				themeElements[i].classList.toggle('theme_color_project-inverse');
				themeElements[i].classList.toggle('theme_color_project-default');
		}
	}
}

function toggleAccordion(accordion) {
	let children = accordion.childNodes;
	for (let i = 0; i < children.length; i++) {
		if (children[i].classList.contains('e-accordion__more')) {
			children[i].style.display = children[i].style.display ? '' : 'block';
		}
	}
}

const bodyElement = document.body;
if (bodyElement)  {
	bodyElement.addEventListener('click', function(event) {
		console.log('event:');
		console.log(event);
		console.log('event.target:');
		console.log(event.target);
		const onoffButton = event.target.closest('.onoffswitch');
		const accordionShort = event.target.closest('.e-accordion__short');
		console.log('onoffButton:');
		console.log(onoffButton);
		console.log('accordionShort:');
		console.log(accordionShort);
		if (onoffButton) {
			console.log('go in onoffButton');
			changeTheme(onoffButton);
		} else if (accordionShort) {
			console.log('go in accordionShort');
			toggleAccordion(accordionShort.parentNode);
		}
	}, true);
}
