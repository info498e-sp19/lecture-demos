// a variable that is a Number
let age = 23

// a variable that is a String
let firstName: string = "Ada"

// a variable that is a Boolean
let isTired : boolean = true;

age = "old"
//illegal operation
firstName = "Beetlejuice"*3;

//no such property
console.log( isTired.length );

console.log(age)

//an array of strings (a `string[]`)
let letters = ['a', 'b', 'c'];

//an array of numbers (a `number[]`)
let luggageCombo: number[] = [1, 2, 3, 4, 5];

//arrays can only have a single type
letters.push(12); //Error!

let tuple: [number, string] = [1, "a", 1, "a'"]

//console.log("Hello world!");

function sayHello(name: string) : void {
    console.log("Hello", name);
}

sayHello("world");

interface Person {
    name: string,
    age: number,
}

let ada: Person = {name: 'Ada', age: 33}; //has required props



let message:string = "Hello world!";
console.log(message);

interface Square {
    x: number,
    y: number,
    size: number,
    color?: string
}

let square: Square = { x:30, y:50, size:100, color:'purple' };
    //make the color property optional

let area: number = square.size * square.size;
console.log(area);