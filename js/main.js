container = document.getElementsByTagName('body')[0];
elem = document.getElementsByClassName('sub-nav')[0];
arrowBtn = document.getElementsByClassName('arrow-btn')[0];

container.addEventListener('click', function(e){
	if (!elem.classList.contains("toggleClassForArrowBtn"))
		elem.classList.remove("toggleClassForArrowBtn");	
});

arrowBtn.addEventListener('click', function(e){
	elem.classList.toggle("toggleClassForArrowBtn");
});
