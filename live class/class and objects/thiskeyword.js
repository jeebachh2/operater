// let obj = {
//     x: 20, y: 40,
//     display() {
        
//         console.log(this.x);
//     }
// }

// obj.display();

// this is not work arrow function........
// let obj = {
//     x: 20, y: 40,
//     display: () => {
//         console.log(this.x);      
//     }
// }
// obj.display();



let obj = {
    x: 10, y: 20,
    display: function() {
        console.log(this.x);
    }
}
obj.display(); 