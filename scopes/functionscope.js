 if(false){
    var x = 10;
 }
 console.log(x);

function fun() {
    console.log(y);/**y is accessible here */
    var y = 10;   /**not accessible outside */
}
function gun() {
    console.log(z); /**not accessible here */
    var z = 10;
}
gun();