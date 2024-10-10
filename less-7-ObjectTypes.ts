function isComplete (course:{name: string, lessons: string[]}): boolean{
    return course.lessons.length >= 4;
}
export default isComplete;
// Определите тип исходя из структуры объекта
const course = {
    name: 'Java',
    lessons: ['variables', 'functions', 'conditions'],
};
console.log(isComplete(course)); // false