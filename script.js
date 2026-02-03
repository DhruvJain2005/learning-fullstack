// today we revise our function concepts 

// function declaration 
// 1  function functionName(){
// do some work 
//}

// 2 function functionName(param1,param2){
// do some work
//}


// function call / invoke same thing

// functionNmae();

// function myfunction(){
//     console.log("welcome ")
//     console.log("learning js")
// }

// myfunction();



// function hello(name,message){//parameter
//     console.log(name,message);
// }
// hello("dhruv","you are great learner"); // argument


// function sumofTwonumbers(num1,num2){// parameters acts as local variable , it has only block scope 
//     console.log(num1+num2);
// }
// sumofTwonumbers(8,5);


// ARROW FUNCTION



// function sum(a,b){      THIS IS NORMAL FUNCTION
//     return a+b;
// }

// const arrowsum=(a,b) => {
//     console.log(a+b);
// }

// arrowsum(5,2);

// // function mul(a,b){
// //     return a*b;                   THIS IS NORMAL FUNCTION
// // }

// const arrowmul=(a,b) => {
//     console.log(a*b);
// }

// arrowmul(5,2);

// function countVowels(string){
//     let count=0;
//     for(const char of string){
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u" ){
//             count ++;
//         }
//     }
//     console.log(count);
// }

// countVowels("apnacollege");

// const countvowels=(string) => {
//     let count=0;
//     for(const char of string){
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u" ){
//             count ++;
//         }
//     }
//     console.log(count);
// }

// countvowels("apnacollege");

// FOR EACH METHOD                    THIS IS ALSO CALLED HIGH ORDER FUNCTION 


// let arr=["delhi","mumbai","pune"];

// arr.forEach((val,idx,arr) => {
//     console.log(val.toUpperCase(),idx,arr);
// });


// HOF: THIS IS THAT FUNCTONS , THAT USE OTHER FUNCTIONS AS PARAMETERS OR RETURN OTHER FUNCTIONS AS THEIR OUTPUT

// Practice ques 

// let arr1=[1,2,3,4,5];
// arr1.forEach((arr1) => {
//     console.log(arr1*arr1);
// })


// let nums=[2,6,8,6,9,3,4];
// nums.forEach((nums) => {
//     console.log(nums*nums);
// })


///  NEW METHOD ARR.FILTER()

// let arr=[2,,4,9,6,8,7];

// let newarr= arr.filter((val) => {
//     return val%2 !== 0;
// })
// console.log(newarr);



// PRACTICE QUES 

// let arr=[22,56,85,90,95,65,98,94,92,93];
// let newarr=arr.filter((val) => {
//     return val>=90;
// })
// console.log(newarr);


// let n=prompt("enter the number of elements");
// let arr=[];
// for(let i=1;i<=n;i++){
//     arr[i-1]=i;
// }
// console.log(arr);