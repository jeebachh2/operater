class product {  // class is kind of like a template

    constructor() {
        console.log("plain constructor");
    }

    constructor(n, p) {
         console.log("calling the constructor");
           this.name = n; // this keyword actually refers to the same empty object we created
           this.price = p;
         
    }

    
    display() {   // class methods are nothing but function,they represent behaviour
        console.log("displaying a product", this.name, this.price);
      

    }
}
const p = new product("iphone 14 promax", 50000); // new =>creates an empty plain object
console.log(p);
p.display();
const p1 = new product();