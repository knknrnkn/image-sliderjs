const images = document.querySelector('.images');
const prevSlide = document.querySelector('.prevBtn');
const nextSlide = document.querySelector('.nextBtn');

let counter = 0;


nextSlide.addEventListener('click', () => {
    images.animate([{
        opacity: '0.1'
    }, {
        opacity: '1.0'
    }], {
        duration: 1000,
        fill: 'forwards'
    });
    if (counter === 4) {
        counter = -1;
    }
    counter++;
    images.style.backgroundImage = `url(image-${counter}.jpg)`
});


prevSlide.addEventListener('click', () => {
    images.animate([{
        opacity: '0.4'
    }, {
        opacity: '1.0'
    }], {
        duration: 1000,
        fill: 'forwards'
    });
    if (counter === 0) {
        counter = 4;
    }
    counter--;
    images.style.backgroundImage = `url(image-${counter}.jpg) `;
});