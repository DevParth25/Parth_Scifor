// Pause on hover
let slider = document.getElementById('sliderCarousel');

slider.addEventListener('mouseenter', function () {
    bootstrap.Carousel.getInstance(slider).pause();
});

slider.addEventListener('mouseleave', function () {
    bootstrap.Carousel.getInstance(slider).cycle();
});
