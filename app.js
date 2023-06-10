const slides = document.querySelectorAll('.slide')

for(const slide of slides) {
    slide.addEventListener('click', () => {
        clearCtiveClasses()
        slide.classList.add('active')
    })
}

function clearCtiveClasses(){
    slides.forEach((slide) => {
            slide.classList.remove('active')
    })
}