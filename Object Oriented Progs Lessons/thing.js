//Создайте иерархию классов животных, используйте ES5 (прототипы и функции-конструкторы). Создайте класс Существо, с методом born() 
// - родиться, от него наследуется Животное, от которого наследуется Человек, Птица, Рыба. От человека наследуется Китаец. Придумайте для каждого класса методы и поля.

function Thing(name) {
	this.name = name;
}
Thing.prototype.born = function() {
	console.log(`${this.name} родился`);
}


function Animal(name, maxAge) {
	Thing.call(this, name);

	this.maxAge = maxAge;
}
Animal.prototype = Object.create(Thing.prototype);
Animal.prototype.constructor = Animal;


function Bird(name, maxAge) {
	Animal.call(this, name, maxAge);
}
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
Bird.prototype.fly = function(distance) {
	console.log(`Птица по имени ${this.name} пролетает ${distance} метров!`)
}


function Fish(name, maxAge, isSeaFish) {
	Animal.call(this, name, maxAge);
  
  this.isSeaFish = isSeaFish;
}
Fish.prototype = Object.create(Animal.prototype);
Fish.prototype.constructor = Fish;
Fish.prototype.swim = function(distance) {
	console.log(`Рыба по имени ${this.name} проплывает ${distance} метров!`)
}


function Human(name, maxAge, height) {
	Animal.call(this, name, maxAge);
  
  this.height = height;
  this.inventions = [];
}
Human.prototype = Object.create(Animal.prototype);
Human.prototype.constructor = Human;
Human.prototype.invent = function(item) {
	this.inventions.push(item);
	console.log(`Я, ${this.name}, изобрел ${item.name}`);
}


function Chinese(name, maxAge, height) {
  Human.call(this, name, maxAge, height);
}
Chinese.prototype = Object.create(Human.prototype);
Chinese.prototype.constructor = Chinese;
Chinese.prototype.buildWall = function() {
	console.log(`Я, ${this.name}, помогаю строить Великую Китайскую Стену!`)
}

const ying = new Chinese('Ying', 72, 167);
ying.born();
ying.invent({ name: 'Кирка' } );
ying.buildWall();

console.log(ying instanceof Thing) // Должно быть true
console.log(ying instanceof Animal) // Должно быть true
console.log(ying instanceof Human) // Должно быть true
console.log(ying instanceof Chinese) // Должно быть true
console.log(ying instanceof Fish) // Должно быть false
console.log(ying instanceof Bird) // Должно быть false