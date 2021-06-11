function reverseAndNegate(arr){
return arr.reverse().map(value => -value);
}

console.log(reverseAndNegate([1, -2, 5, 4]) );