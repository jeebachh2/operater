// statement that can help us to execute a piece of logic based in a particular condition
let marks = 100;
if (marks > 85) {
    console.log("this student is topper");
}
else {
    console.log("this is an average student");
}
// Q: given size of 3 line segments, check that whether using these segments we can form a triangle or not ?
// ex: l1 = 7, l2 = 10, l3 = 5
//ans yes we can make a triangle

// ex: l1 = 1, l2 = 10, l3 = 12
//ans -> "no we cannot make a triangle"

// -> sum of two sides greater than the third side, and this should be true for all sides

// (l1 +l2) > l3 and (l1 + l3) > l2 and (l2 + l3) > l1

let l1 = 1, l2 = 10, l3 = 12;
if(((l1 +l2) > l3) && ((l1 + l3) > l2) && ((l2 + l3) > l1)) {
    console.log("yes we can make a triangle");
}
else{
    console.log("no we cannot make atriangle");
}

// Q: given a number x, if x is a parfect square or not ?
//ex: x = 25
// ans -> yes
// ex: x = 39
// ans -> no


// a parfect squre is a number that can be represented as a  square of another number integer.
//25 => 5*5
// 36 => 6*6

 // x --> floor(root(x)) * flore(root(x))

 // math.sqrt(x) -> y.zz -> 4.13
 // math.floor(math.sqrt(x)) -> y -> 4

 let x = 60;
 let y = Math.floor(Math.sqrt(x));
 if(y **2 == x) {
    console.log("yes");
 }
 else{
    console.log("no")
 }

 // Q: given a number x, check if it is even or odd using bitwise operaters only.
 // ex: x = 7
 // ans => odd

 // ex: x = 8
 // ans => even

 /**
  * 0 - 0000
  * 1 - 0001
  * 2 - 0010
  * 3 - 0011
  * 4 - 0100
  * 5 - 0101
  * 6 - 0110
  * 7 - 0111
  * 8 - 1000 
  */
// if we can check that the last bit of the given number is 0 or 1 then we can decide
//if the last bit is 0 -> even, and last bit is 1 -> odd

/**
 * if you do bitwie and with 1, then in the ans except the last bit everything is 0
 *  5 -> 101
 *  5 & 1 -> 1
 * 
 *   1 0 1  -> odd
 * & 0 0 1
 * ________
 *   0 0 1
 * 
 * 6 & 1 -> 0
 *   1 1 0  -> even
 * & 0 0 1
 * ________
 *   0 0 0
 */
let m = 6;
if((m & 1) == 1) {
    console.log("odd");
}
else {
    console.log("even");
}
// function with parameters
function calculateSquare(x = 4) { /** here x is a parameter */
    return x*x;
}
// console.log(calculateSquare(10));


function multiply(x, y = 6) {
    return x*y;
}
// console.log(multiply(5));


function addElement([num1, num2, num3, num4]) {
    return num1 + num2 + num3 + num4;
}
let arr = [1,2,3,5,6]
// console.log(addElement( arr));


//function with unlimited parameters
function sumofAllParameters(x, y) {
    let sum = 0;
    console.log(x, y)
    for(let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
console.log(sumofAllParameters(1,2,3,4,5,6));

//principal of mathematical induction
// recursion

function f(n) {
    //base case
    if(n == 1) {
        return 1;
    }
    return n * f(n-1);
}
console.log(f(6));

// loop similarly work using loops
function factorialwithloops(n) {
    let ans = 1;
    for(let i = 1; i <= n; i++) {
        ans = ans * 1;
    }
    return ans;
}
console.log(f(6));


