let arr = [1,2,3,4,5,6,7];   // this is a homogenious array because all values are same type
let x = ["jeebachh", 1,2,3, "place", true, 2.5];

console.log(arr);
console.log(x);

let a = new Array(10);
console.log(a);


let z = ["jeebachh", 1, 2, 3, "delhi", false, 2.3];   // this is a hitrogenious array because all values are the different type
console.log(z); 


let colors = Array("black", "blue", "red", "white");
console.log(colors);


// element -> [22, 19, 30, 1, 6];
// index/pos-> 0, 1, 2, 3, 4
// using position we can extract out the original elements
let y = [22, 19, 30, 1, 6];
console.log(y[2]);  //<name of array>[<index to access>]
console.log(y[1]);
console.log(y[100]);
// update
y[1] = 100;
console.log(y);
y[0] = "jeebachh";
console.log(y);