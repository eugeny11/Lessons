//Напишите функцию countEverySecond(n), которая каждую секунду печатает в консоль цифру начиная с 1 и заканчивая {n}

const countEverySecond = n => {
    let count = 0;
    setTimeout(function go() {
        console.log(++count)
        if (count < n){
            setTimeout(go, 1000);
        }
    },1000);
};

countEverySecond(5);