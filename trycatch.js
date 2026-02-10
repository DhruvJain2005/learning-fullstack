let a = prompt("enter first number ");
let b = prompt("enter second number ");
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("sorry this is wrong input ")
}

let x=1;
let sum=parseInt(a) + parseInt(b);
try {
    console.log(("the sum is "),sum*x);
} catch (error) {
    console.log("error aagya bhai");
}
finally{
    console.log("ram ram ji");
}
    






// WE CAN handle error by using try catch method
