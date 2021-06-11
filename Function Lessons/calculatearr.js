function calculate(arr){
return arr
.map(v => v%2 === 0 ? v + 4 : v - 2)
.filter(v => v % 13 != 0)
.reduce((a,b) => a+b,0)
}

console.log(calculate([15, 2, 3, 5, 6]))