 const student = {
    fullName: "jeebachh kumar",
    marks: 95.5,
    printmarks:function() {
        console.log("marks =", this.marks);  // here this keyword use because without this keyord not access marks
    },
 };
 console.log(student);
 console.log(student.fullName);
 console.log(student.marks);
 console.log(student.printmarks());     //  why dont use on crome browser in console   this concept is not clear\

//  const employe = {
//     calctax() {
//         console.log("tax rate is 10%");
//     }
//  }
// //  console.log(employe.calctax());   // why dont use on crome browser in console   this concept is not clear\

//  const karanarjun1 = {
//     salary:50000,
//  };
//  const karanarjun2 = {
//     salary:50000,
//  };
//  const karanarjun3 = {
//     salary:50000,
//  };
//  const karanarjun4 = {
//     salary:50000,
//  };
//  const karanarjun5 = {
//     salary:50000,
//  };
//  console.log(karanarjun.salary);
//  karanarjun1.__proto__ = employe;
// karanarjun2.__proto__ = employe;
//  karanarjun3.__proto__ = employe;
// karanarjun4.__proto__ = employe;
//  karanarjun5.__proto__ = employe;


// let name = prompt("what is your name");
// console.log(name);