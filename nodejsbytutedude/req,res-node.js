// import http
const http=require('http');

// creating s server

const server=http.createServer((req,res)=>{
    // REQ DETAILS 
    //console.log(req.url,req.method,req.headers); 
    

    //res
    //res.setHeader('constent-type', 'json')
    res.setHeader('constent-type', 'test/html');
    //res.write('<h1> hello world - dhruv jain </h1>')
    
    
    // exiting out of event loop (stop event loop)
    //process.exit()  
})

// port number

const PORT = 4000;

// server listen on port 4000
server.listen(PORT,()=>{
    console.log(`our server is running on http://localhost:${PORT}`)
});


// 5 http mthods 
// GET , PUSH , POST , PATCH AND DELETE