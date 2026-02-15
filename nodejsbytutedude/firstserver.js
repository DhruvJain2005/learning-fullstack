// crreating a first node server
// import http from "http" // basically this use modern nodejs system : ES module 


// import http protocol
// req : request to a server
// res :  respond to a server

// const { log } = require('console');
const http = require('http'); // this is use old node js system : common js module 

// function asimplesevrer(req,res){
//     console.log(req);
// }
// http.createServer(asimplesevrer)

const app=http.createServer((req,res) =>{
    console.log(req);
})

// port num
const PORT = 4000;

// Application listening on port number 4000
app.listen(PORT,() => {
    console.log(`the server is running on port number : ${PORT}`); // here we use backtick not comma :
});