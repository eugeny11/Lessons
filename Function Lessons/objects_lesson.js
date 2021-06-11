function Car(model,year,color,price){
this.model = model;
this.year = year;
this.color = color;
this.price = price;
this.signal = function(){
console.log("beep!");
};
this.presentCar = function(){
console.log('Модель - ${this.model}, год выпуска ${this.year}, цвет - ${this.color}, цена - ${this.price} руб.');
}
this.makeDiscount = function(discount){
this.price = this.price - discount;
}
}

let car2 = new Car("Audi", 2019, "white", 12000000);
car2.presentCar();