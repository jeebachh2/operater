
// for example of class and objects

// class product {
//     constructor(n, p,d) {
//         // console.log("called constructor");
//         // console.log(this);
//         this.name = n;
//         this.price = p;
//         this.discount = d;
//         // console.log(this);
//     }
//     display() {
//         // console.log("this is a product");
//         console.log("name of the product", this.name, "and price is", this.price);
        
//     }
//     discountprice() {
//         let newPrice = this.price*(Math.floor(100-this.discount) / 100);
//         return newPrice;
//     }

// }
// // const p = new product("iphone", 25000);
// // p.display();
// // console.log(p);
// const i1 = new product("iphone", 50000, 20);
// console.log(i1.discountprice());
// const i2 = new product("samsung", 25000, 0);
// console.log(i2.discountprice());
// console.log(i1, i2);


function product(n, p) {
    this.name = n;
    this.price = p;
    return {x:10, y:20}
}
const p = new product("iphone 14 promax", 20000);
console.log(p);




/**
 * 1.  this is js is different than other language
 * 2. this keyword refers to the context from where we call the function
 */

/**
 * if you dont return anything,js returns the newly created object.
 * if you return primitive, then also we get newly created object.
 * if you return custom object, then js will return this custom object not the newly creted object.
 */