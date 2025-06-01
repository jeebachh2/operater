// arithmetic operator

console.log(10 + 2);
console.log(10 - 2);
console.log(10 * 2);
console.log(10 / 2); //quotient
console.log(10 % 2); // remainder
console.log(10 ** 2);

// assignment operator

let x = 10;  // operator assigns value from RHS TO LHS
x += 9;  // x = x + 9 // x = 19
console.log(x);
x -= 9;  // x = x - 9
console.log(x);
x *= 2; // x = x * 2
console.log(x);
x /= 5; // x = x / 5
console.log(x);
x **= 2; // x = x ** 2
console.log(x);
x %= 5; // x = x % 5
console.log(x);

// comperision operator    -> result of a comperosion operator is always a boolean
 let m = 9;
 let n = 5;
 console.log(m > n);
 console.log(m >= n);
 console.log(m < n);
 console.log(m <= n);

 // == , ===
 console.log(m === n);
 

 // logical operater ->    and ->&&, or -> ||, not -> !


console.log(false && true);
console.log(false || true);
console.log(10 && 9); // true && true -> true
console.log(0 && 5);

const r = 5 && 9;
console.log(r);
  // and gate symbole (&&)
 // 1 and 1 -> 1
 // 1 and 0 -> 0
 // 0 and 1 -> 0
 // 0 and 0 -> 0

 // or gate symbol  (||)
 // 0 or 0 -> 0
 // 0 or 1 -> 1
 // 1 or 0 -> 1
 // 1 or 1 -> 1

 // bitwise operater

 // a bitwiseoperater b

 //bitwise and -> &
 // bitwise or -> |
 // bitwise not -> ~
 // bitwise xor -> ^

 // 5 & 7 -> 101 & 111 -> now perform & operation bit by bit

 /**
  *   1 0 1
  * & 1 1 1
  * ---------
  *   1 0 1  -> 5
  */
 console.log(5 &7);

 /**
  *   1 0 0 0
  * & 0 1 0 1
  * ---------
  *   1 1 0  1-> 13
  */
console.log(8 | 5);
