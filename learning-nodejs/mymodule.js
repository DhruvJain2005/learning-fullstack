//const { createServer } = require('node:http'); // require is basically a commonjs 
//import http from "http"  // improt is basically a ES6 module
// const hostname = '127.0.0.1';
// const port = 3000;
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);  
// });

// import {a, b, c, d} from "./main.js"
// console.log(a, b,c,d);

// import dhruv from "./main.js"
// console.log(dhruv)

const a = require("./mymodule2.js")
console.log(a, __dirname)