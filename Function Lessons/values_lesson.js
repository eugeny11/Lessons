function getDoubleFunction(value){
let result;
if (typeof value === 'number' && !isNaN(value) ){
result = function(){
return value * 2;
}
} else if (typeof value === 'string'){
	result = function(){
  return value + value;
  }
} else if (typeof value === 'object' && value.length){
result = function(){
value = value.map(function(arrayValue){
	return arrayValue*2;
})
return value
}
} else {
result = function(){
console.log("Ошибка ввода");
}
}
return result;
}

let someArray = [13,8,22];
let someString = "abcd";
let someNumber = 18;

let double = getDoubleFunction(someArray);
console.log(double());