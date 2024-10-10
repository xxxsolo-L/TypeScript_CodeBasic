
function getHiddenCard(cartNumber: string, count?: number): string {
if (count == undefined){
    count = 4;/////// == count = 4 on function up
}
const mask: string = '*'.repeat(count);
return mask + cartNumber.slice(12);
}

export default getHiddenCard;

console.log(getHiddenCard('1234567812345678', 2)) // "**5678"
console.log(getHiddenCard('1234567812345678', 3)) // "***5678"
console.log(getHiddenCard('1234567812345678')   ) // "****5678"
console.log(getHiddenCard('2034399002121100', 1)) // "*1100"