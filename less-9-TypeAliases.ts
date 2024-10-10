// BEGIN (write your solution here)
type User = {
    name: string;
    age: number;
}
function getOlderUser (user1: User, user2: User): User | null{
    if(user1.age > user2.age){
        return user1;
    } if (user2.age > user1.age){
        return user2;
    } else return null;
}
// END

export type { User };
export default getOlderUser;
const user1 = { name: 'Petr', age: 8 };
const user2 = { name: 'Valera', age: 10 };
console.log(getOlderUser(user1, user2));