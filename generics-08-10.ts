const foo = <T>(param1: T): T => param1;

foo<string>("string");
foo('string');
foo(42);

// const [state, setState] = useState<boolean>();

function getFirstElement<T>(array: T[]): T {
    return array[0];
}
getFirstElement<number | string>([10, 42, 43, "string"]);


function creatPayer<T>(num1: T, num2: T): T[] {
    return [num1, num2];
}
creatPayer('str1', 'str2');