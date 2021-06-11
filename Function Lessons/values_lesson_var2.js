function getDoubleFunction(value){
    let result;
    if (typeof value === 'number' && !isNaN(value) ){
    result = () => value*2
    
    } else if (typeof value === 'string'){
        result = () => value +value
    } else if (typeof value === 'object' && value.length){
    result = () =>{
    value = value.map(arrayValue => arrayValue*2);
    return value}
    }
     else {
    result = () => {
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