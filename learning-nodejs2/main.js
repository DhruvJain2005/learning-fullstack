const { error } = require("console");
const fs=require("fs") // here our type is common.js
//console.log(fs)


console.log("starting")
// fs.writeFileSync("dhruv.txt","dhruv is a goodboy")

fs.writeFile("dhruv2.txt","hello in my world",()=>{ // this is good method to write a file , so in later , we use it 
    console.log("done");
    fs.readFile("dhruv2.txt",(error,data)=>{
        console.log(error,data.toString()) // here it is a conditon occuring called call back hell
    })
})
fs.appendFile("dhruv2.txt","dhurv learning new things",(e,d) =>{
    console.log(d);
})
console.log("ending");
