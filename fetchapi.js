// Fetch API 
// API :- application programming interface :  means , those returns some data

// the fetch API provides an interface for fetching ( sending / recieving) resources
// it uses request and response objects
// the fetch() method is used to fetch a resource (data)


// let promise=fetch(url,[options])

// synchronous method : code runs line by line. each operation must finish before the next one starts
// Asynchronous method : it does NOT block execution.js starts a task and continues running other code while it waits for the result

const URL="https://dog.ceo/api/breeds/image/random";
const getpara=document.querySelector("#dogImg");
let promise= fetch(URL);
console.log(promise);

const getdogs= async ()=>{
    console.log("getting data ....");
    let response= await fetch(URL);
    console.log(response);
    let data=await response.json();
    
    getpara.src = data.message; // JSON FORMAT
};


// UNDERSTANDING TERMS
// 1. AJAX :- is a asynchronous JS & XML
// 2. JSON :- is a javascript object notation
// 3. json() method :- returns a second prommise that resolves with the result of parsing the response body text as JSON ( input is JSON , output is JS object)
