//Arrow functions

//Addition
const sum = ((num1, num2) => {
    return num1+num2;
})

//Subtraction
const diff = ((num1, num2) => {
    return num1-num2;
})

//Multiplication
const mul = ((num1, num2) => {
    return num1*num2;
})

//Division
const div = ((num1, num2) => {
    return num1/num2;
})

//for dynamic input
let num1 = parseInt(process.argv[2]);
let num2 =parseInt(process.argv[3]);

console.log(sum(num1,num2));
console.log(diff(num1,num2));
console.log(mul(num1,num2));
console.log(div(num1,num2));
