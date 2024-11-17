//PARTE DA NAVEGAÇÃO//
document.querySelectorAll('.circle').forEach(circle => {
    circle.addEventListener('click', function() {
        const target = this.getAttribute('data-target');
        document.getElementById(target).scrollIntoView({ behavior: 'smooth' });
    });
});

//PARTE DO CARROSSEL//
let currentIndex = 0;
function moveCarousel(direction) {
    const items = document.querySelectorAll('.carousel-item');
    currentIndex += direction;
    
    if (currentIndex < 0) {
        currentIndex = items.length - 1;
    } else if (currentIndex >= items.length) {
        currentIndex = 0;
    }

    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}