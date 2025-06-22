const product = function(n, p) {
    this.name = n;
    this.price = p;

}
const p = new product("iphone", 15000);
console.log(p);