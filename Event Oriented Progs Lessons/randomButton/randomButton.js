//Напишите игру: в центре экрана появляется кнопка "Нажми меня". Когда юзер наводит на нее курсор, она сразу перемещается на случайные координаты.

const random = (min,max) => {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
};

const button = document.querySelector('button');
button.addEventListener('mouseenter', () => {
    button.style.left = `${random(10,90)}%`;
    button.style.top = `${random(5,95)}%`;
})