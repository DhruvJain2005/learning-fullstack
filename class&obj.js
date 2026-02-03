// TODAY WE LEARN ABOUT CLASS AND OBJECTS IN JAVASCRIPT 

// here firstlt , we learn about prototypes in js 

// const student ={
//     fullname : "dhruv jain",
//     marks: 95.8,
//     printmarks: function(){
//         console.log("marks : ",this.marks); // this means student.marks basically uss object ki baat krrhe h
//     }
// }


// PROTOTYPES IN JS :  this is those thing we cant define in our code but it exists in the form of prototype 
//  JS objects have a special property called prototype



// const employee={
//     calcTax(){
//         console.log("tax rate is 10%");
//     }
// }
// const KaranArjun={
//    salary:50000,
// };

// KaranArjun.__proto__ = employee;

// if object & prototype have same method , object's method will be used 






// now we learn about classes in js


// class is a program code template for creating objects
// those objects will have some state(variables) & some behaviour (functions ) inside it 


class ToyotaCar{
    start(){
        console.log("start");
    }
    stopr(){
        console.log("stop");
    }
}

let fortuner=new ToyotaCar();