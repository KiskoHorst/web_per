'use strict';
const pics = [
  {
    thumb: 'http://www.fillmurray.com/100/100',
    big: 'http://www.fillmurray.com/640/480',
  },
  {
    thumb: 'http://lorempixel.com/100/100/sports/1/',
    big: 'http://lorempixel.com//640/480/sports/1/',
  },
  {
    thumb: 'https://placeimg.com/100/100/tech',
    big: 'https://placeimg.com/640/480/tech',
  },
];
const getThumbList = () => {
	let out = "";//"<ul>"
	for (let i = 0; i<pics.length; i++) {
		out += "<li><img src=\""+pics[i].thumb+"\" class=\"thumb\" data-img-id=\""+i+"\"/></li>"
	}
	return out;//+"</ul>";
}

const showImage = (e) => {
	const id = parseInt(e.target.getAttribute("data-img-id"));
	kuva.setAttribute("src", pics[id].big);
	kuva.style.display = 'block';
}

const hideImage = (e) => (kuva.style.display = 'none');

const thumbList = document.createElement("ul");
thumbList.innerHTML = getThumbList();
document.body.insertBefore(thumbList, document.body.firstChild);
const kuva = document.getElementsByTagName("img")[pics.length];
const thumbs = document.getElementsByClassName("thumb");
for (let i = 0; i<thumbs.length; i++) {
	thumbs[i].addEventListener('click', showImage);
}
kuva.addEventListener('click', hideImage);