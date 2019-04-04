"use strict";
// a variable that is a Number
var age = 23;
// a variable that is a String
var firstName = "Ada";
// a variable that is a Boolean
var isTired = true;
age = "old";
//illegal operation
firstName = "Beetlejuice" * 3;
//no such property
console.log(isTired.length);
console.log(age);
//an array of strings (a `string[]`)
var letters = ['a', 'b', 'c'];
//an array of numbers (a `number[]`)
var luggageCombo = [1, 2, 3, 4, 5];
//arrays can only have a single type
letters.push(12); //Error!
var tuple = [1, "a", 1, "a'"];
//console.log("Hello world!");
function sayHello(name) {
    console.log("Hello", name);
}
sayHello("world");
var ada = { name: 'Ada', age: 33 }; //has required props
var message = "Hello world!";
console.log(message);
var square = { x: 30, y: 50, size: 100, color: 'purple' };
//make the color property optional
var area = square.size * square.size;
console.log(area);
