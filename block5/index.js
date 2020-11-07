var swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 16,
      height: 50,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });


var showAllButton = document.querySelector('.show-all-button');
var swiperSlide = document.querySelectorAll('.swiper-slide')
var showAllButton__text = document.querySelector('.show-all-button__text');
var showAllButton__arow = document.querySelector('.show-all-button__arow');
var destroySize = window.matchMedia('(min-width: 768px)').matches;

var textSwaping = function () {
  if (showAllButton__text.innerHTML === 'Показать всё') {
    showAllButton__text.innerHTML = "Скрыть";
    showAllButton__arow.classList.add('show-all-button__arow_rotate');
    for (var i = 0; i < swiperSlide.length; i++) {
      swiperSlide[i].classList.add('swiper-slide_show')
    }
  }
  else {
    showAllButton__text.innerHTML = "Показать всё";
    showAllButton__arow.classList.remove('show-all-button__arow_rotate');
    for (var i = 0; i < swiperSlide.length; i++) {
      swiperSlide[i].classList.remove('swiper-slide_show')
    }
  }
}

showAllButton.addEventListener('click', function(evt) {
  evt.preventDefault()
  textSwaping()

})


window.addEventListener('load', function () {
  if (destroySize) {
    swiper.destroy();    
  }
})

window.addEventListener('resize', function () {
  var destroySizeResize = window.matchMedia('(min-width: 768px)').matches;
  console.log(destroySizeResize);
  if (destroySizeResize == false) {
     swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 16,
      height: 50,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
  if (destroySizeResize) {
    swiper.destroy(); 
  } 
})

