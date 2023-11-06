var carouselItems = document.querySelectorAll('.carousel-item');
var currentCarouselItem = 0;

function showCarouselItem(n) {
  carouselItems[currentCarouselItem].classList.remove('active');
  currentCarouselItem = (n + carouselItems.length) % carouselItems.length;
  carouselItems[currentCarouselItem].classList.add('active');
}

setInterval(function() {
  showCarouselItem(currentCarouselItem + 1);
}, 5000);
