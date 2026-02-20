const http=require('http')
const PORT=8081;

const todoList=["dhruv jain","gla university","student"]

http.createServer((req,res)=>{
    // console.log(req.url,req.method,req.headers);
    // instead of we create like this 
    const {method,url}=req;
    //console.log(method,url)
    if(url.toLowerCase()==='/todos'){
        if(method === "GET"){
            res.writeHead(200,{"Content-Type":"text/html"})
            res.write(todoList.toString())
        }else{
            res.writeHead(501)
        }
    }else {
        res.writeHead(404)
    }
    res.end();
    



}).listen(PORT,()=>{
    console.log(`todo list application got started on http://localhost:${PORT}`)
}) 
