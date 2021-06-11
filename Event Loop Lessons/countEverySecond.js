//Напишите функцию countEverySecond(n), которая каждую секунду печатает в консоль цифру начиная с 1 и заканчивая {n}

const countEverySecond = n =>{
    let count = 0;
    const interval = setInterval(() => {
    
    console.log(++count);
    if (count === n){
    
    clearInterval(interval);

    }

    },1000);
};

countEverySecond(5);