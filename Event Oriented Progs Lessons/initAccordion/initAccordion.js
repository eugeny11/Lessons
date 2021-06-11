const initAccordion = element => {
    const panel = element.querySelector('.panel');
    const header = element.querySelector('.header');
    header.addEventListener('click', () => {
        panel.classList.toggle('panel--opened');
    });
}

const accordions = document.querySelectorAll('.accordion');
accordions.forEach(initAccordion);
