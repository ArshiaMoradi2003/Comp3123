//1
const numbers = [1,2,3,4];
for (const  num of numbers){
    console.log(`Number is ${num}`);
}

//2
const capitalize = ([first, ...rest]) =>
    first.toUpperCase() + rest.join('');

console.log(capitalize("nodejs"));

//3
const colors = ["red", "green", "blue"];

const capitalizedColors = colors.map(color => capitalize(color));

console.log(capitalizedColors);


//4
const number = [5, 12, 25, 40, 18, 30];

const filtered = number.filter(num => num >= 20);

console.log(filtered);

//5
const nums = [1, 2, 3, 4];

const sum = nums.reduce((acc, val) => acc + val, 0);
const product = nums.reduce((acc, val) => acc * val, 1);

console.log(`Sum: ${sum}, Product: ${product}`);

//6
class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
}

class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year);   // calls parent constructor
        this.balance = balance;
    }
}

const mySedan = new Sedan("Toyota Camry", 2020, 15000);
console.log(mySedan);



