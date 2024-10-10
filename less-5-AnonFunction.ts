const numbers = [1, 3, 8, 9, 100, 23, 55, 34];

function getEvenNumbers (arr: number[]){

return arr.filter(arr => arr % 2 === 0);
}

export default getEvenNumbers;

console.log(getEvenNumbers(numbers));