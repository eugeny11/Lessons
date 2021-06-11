class Thing {
    constructor(name) {
        this.name = name;
    }

    born(){
        console.log(`${this.name} родился`)
    }
}

class Animal extends Thing {
    constructor(name, maxAge){
        super(name);
        this.maxAge = maxAge;
    }
}

class Bird extends Animal{
    fly(distance){
        console.log(`Птица по имени ${this.name} пролетает ${distance} метров!`)
    }
}

class Fish extends Animal{
    swim(distance){
        console.log(`Рыба по имени ${this.name} проплывает ${distance} метров!`)
    }
}

class Human extends Animal{
    constructor(name, maxAge, height){
        super(name,maxAge);
        this.height = height;
        this.inventions = [];
    }

    invent(item){
        this.inventions.push(item);
        console.log(`Я, ${this.name}, изобрел ${item.name}`);
    }
}

class Chinese extends Human{
    buildWall(){
        console.log(`Я, ${this.name}, помогаю строить Великую Китайскую Стену!`)
    }
}

const ying = new Chinese('Ying', 72, 167);
ying.born();
ying.invent({name : 'кирка'});
ying.buildWall();

console.log(ying instanceof Thing) // Должно быть true
console.log(ying instanceof Animal) // Должно быть true
console.log(ying instanceof Human) // Должно быть true
console.log(ying instanceof Chinese) // Должно быть true
console.log(ying instanceof Fish) // Должно быть false
console.log(ying instanceof Bird) // Должно быть false