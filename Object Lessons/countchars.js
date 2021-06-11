const countChars = str => {
    const chars = {};
    str.split('').array.forEach(char => {
        const lowerChar = char.toLowerCase();
        if (char[lowerChar] === undefined){
            chars[lowerChar] = 0;
        }
        ++char[lowerChar];
    })
    return chars;
}

console.log( countChars('Арарат') )