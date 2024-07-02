const numbersArr = [2, 3, 4, 7, 11, 13, 17, 19]; // original array
console.log('This is original array', numbersArr)

numbersArr[2] = 5;

console.log('Changed array (old method)', numbersArr)

/* Using .with() method */

const newNumbersArray = numbersArr.with(2, 5);

console.log('This is copied array with modified element', newNumbersArray)