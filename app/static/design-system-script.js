'use strict';

function changeTheme(target) {
	target.classList.toggle('onoffswitch_checked');
	const themeElements = document.getElementsByClassName('theme');
	for (let themeElement of themeElements) {
		if (themeElement.classList.contains('theme_color_project-inverse') ||
			themeElement.classList.contains('theme_color_project-default')) {
				themeElement.classList.toggle('theme_color_project-inverse');
				themeElement.classList.toggle('theme_color_project-default');
		}
	}
}

function toggleAccordion(accordion) {
	let children = accordion.childNodes;
	for (let child of children) {
		if (child.classList.contains('e-accordion__more')) {
			child.style.display = child.style.display ? '' : 'block';
		}
	}
}

const bodyElement = document.body;
console.log('bodyELement:');
console.log(bodyElement);
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
