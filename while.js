 // while loop example
let i = 1;
while (i <= 10) {
    console.log(i);
    i = i + 1;
}
console.log("end")


// for loops

for (let i = 1; i <= 10; i++) {
    console.log(i);
}
console.log("program stop");

// function

function myfirstfunction() {
    // all the logic goes inside the pair of curly brackets
    console.log("this is");
    console.log("my first function");
}

myfirstfunction();
myfirstfunction();
myfirstfunction();
myfirstfunction();

// odd or even

function addFourNumber(a, b, c, d) {
    // 4 parameters passed a, b, c, d
    let result = a + b + c + d;
    // console.log(result);
    return  10;    /**1. terminate the function , 2. give an output from the function call */
}

function multiply(x, y) {
    //multiply twonumbers
    console.log(x*y);
}

function isEvenOrOdd(x) {
    //it takes a value x and tells whether it is even or odd ?
    // x -> parameter
    if(x % 2 == 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}
isEvenOrOdd(12);
isEvenOrOdd(5);
isEvenOrOdd(18);
isEvenOrOdd(15);
let x1 = addFourNumber(10, 11, 12, 15);
let y1 = addFourNumber(5, 5, 98, 502);

console.log(x1, y1);
multiply(x1, y1);