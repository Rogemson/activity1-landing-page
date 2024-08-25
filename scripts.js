function scrollToAbout() {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.info');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-bounce');
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.2 
    });
    elements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const homeSection = document.querySelector('#home');
    const elementsToAnimate = homeSection.querySelectorAll('.image-content, .container');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1 
    });
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});
