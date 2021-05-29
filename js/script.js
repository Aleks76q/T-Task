//меню гамбургер
document.querySelector('.c-hamburder').addEventListener('click',function (e) {
	e.preventDefault();
	//this.classList.toggle('is-active');
	if (this.classList.contains('is-active')) {
	    this.classList.remove('is-active');
	    document.querySelector('#menu').classList.remove('nav-active');
	    document.body.classList.remove('body-active');
	}
	else{
		this.classList.add('is-active');
		document.querySelector('#menu').classList.add('nav-active');
		document.body.classList.add('body-active');
	}
})
//авто скролл
let scrolled;
let timer;
document.getElementById('top').onclick = function() {
	scrolled = window.pageYOffset;
	//window.scrollTo(0,0);
	scrollToTop();
}
function scrollToTop () {
  if (scrolled > 0) {
		window.scrollTo(0, scrolled);
		scrolled = scrolled - 25;    //100-скорость прокрутки
		timer = setTimeout(scrollToTop, 100);
	}
	else {
		clearTimeout (timer);
		window.scrollTo(0,0);
	}
}

const items = document.querySelector('#nav');
["30000 руб","40000 руб","20000 руб","25000 руб","30000 руб","10000 руб"];
function sortByPrice(arr) {
	const temp = JSON.parse(JSON.stringify(arr));
	temp.forEach(item => {
		if (typeof(item.sort__check-price) ==='string') {
			item.price = + item.price.replace(/\D/g, '');
		} else {
			item.price = item.price.newUan.replace(/\D/g, '');
		}
	});
	temp.sort((a,b) => a.price > b.price ? 1 : -1);
	document.querySelector('.cat-gallery').innerHTML = '';

	temp.forEach(item => {
		 		document.querySelector('.cat-gallery').innerHTML += `
		 		<h3>${item.name}</h3>
		 		<div>руб: ${item.ratingRevievs}</div>
		 		`;
		 	})
		 }

document.querySelector('.sort__check-price').addEventListener('click', () => {
sortByFeedbacks(temp);
});