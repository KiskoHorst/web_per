const kissa = document.querySelector('img');
const teksti = document.querySelector('p');

function showText(e) {
	teksti.style.visibility = "visible";
}
function hideText(e) {
	teksti.style.visibility = "hidden";
}

kissa.addEventListener('mouseenter', showText);
kissa.addEventListener('mouseleave', hideText);