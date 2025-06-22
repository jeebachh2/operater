// let x = new String("jeebachh kumar");
// console.log(x);
// let y = new Number();
// console.log(y);

function product(n, p) {
    this.name = n;
    this.price = p;
}
const p = new product("iphone 14", 25000);
console.log(p);