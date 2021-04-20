
//Повторная анимация для галереи
const animItems = document.querySelectorAll('.anim');
if ( animItems.length >0 ) {
	window.addEventListener('scroll', animOnScroll);

	function animOnScroll(params){
		for(let index = 0; index < animItems.length;  index++){
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;
			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if(animItemPoint >window.innerHeight){
				animItemPoint = window.innerHeight - window.innerHeight / animStart; 
			}
			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('wow');
				animItem.classList.add('zoomIn');
				animItem.classList.add('animated');
				animItem.classList.remove('wow2');
			}else{
				animItem.classList.remove('wow');
				animItem.classList.remove('zoomIn');
				animItem.classList.remove('animated');
				animItem.classList.add('wow2');
			}
		}

	}
};
//Подсчет положения относительно верха страницы
function offset(el){
	const rect = el.getBoundingClientRect(),
	scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	return {top: rect.top + scrollTop}
};

//Плавная прокрутка сайта
$('a[href^="#"').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
         scrollTop: $(href).offset().top - 85
    }, {
        duration: 600,
        easing: "linear" 
    });
    return false;
});
	