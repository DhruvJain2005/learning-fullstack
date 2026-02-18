const http=require('http')
const server=http.createServer((req,res)=>{
    // if(req.url === "/"){
    //     res.write('<h1>homepage/default page</h1>')
    // }
    // else if(req.url.toLowerCase() === "/products"){
    //     res.write('<h1>products page</h1>')
    // }
    // else if(req.url.toLowerCase() === "/about-us" ){
    //     res.write('<h1>about us page</h1>')
    //     res.end()
    // }
    // res.write('<h1>implementations is not done yet</h1>')
    if(req.url==="/form"){
        res.write(`<h1>User Login Page :</h1>`)
        res.write(`
                <form action="/submitted-data" method="POST">

                    <label>UserName:</label>
                    <input type="text" id="name" name="name" placeholder="Pls enter your username" />
                    <br/><br/>

                    <label>Gender:</label>

                    <input type="radio" id="male" name="gender" value="male" />
                    <label for="male">Male</label>

                    <input type="radio" id="female" name="gender" value="female" />
                    <label for="female">Female</label>

                    <br/><br/>

                    <button type="submit">Submit</button>

                </form>

            `)
            return res.end()
    }else if(req.method==='POST' && req.url.toLowerCase()==='/submitted-data'){
        res.statusCode=302;
        res.setHeader('Location','/');
        return res.end()
    }
    res.write('<h1>no user input</h1>')
})
const PORT=4000;
server.listen(PORT,()=>{
    console.log(`nodejs is server is running ${PORT}`)
})

//  HTTP RESPONSE STATUS CODES :
// Informational responses (100 – 199)
// Successful responses (200 – 299)
// Redirection messages (300 – 399)
// Client error responses (400 – 499)
// Server error responses (500 – 599)