// function fun() {
//     let x = 10;
//     console.log("inside fun");
// }

// function gun(y) {
//     console.log("inside gun");
//     fun();
//     console.log("completed fun");
// }
// function run() {
//     var z = 9;
//     gun();
//     console.log("exit");
// }
// run();

function fun() {
    let x = 10;
    console.log("inside fun");
}

function gun(y) {
    console.log("inside gun");
    fun();
    return 9;
    console.log("completed fun");
}
function run() {
    var z = 9;
    let m = gun();
    console.log("exit");
}
run();