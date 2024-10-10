function getParams(query: string){
    const parts = query.split('&');
    const init: any = {};

    const result = parts.reduce((acc, part) => {
        const [key, value] = part.split('=');
        acc[key]=value;
        return acc;
    }, init);
    return result;
}

export default getParams;

console.log(getParams('per=10&page=5'));
// { per: '10', page: '5' }
console.log(getParams('name=hexlet&count=3&order=asc'));
// { name: 'hexlet', count: '3', order: 'asc' }