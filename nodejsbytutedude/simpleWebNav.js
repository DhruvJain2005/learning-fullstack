const http =require('http')
const app=http.createServer((req,res)=>{

    if(req.url==='/home'){
        res.write('<h1>HOME PAGE</h1>')
        return res.end()
    }
     if(req.url==='/about'){
        res.write('<h1>ABOUT PAGE</h1>')
        return res.end()
    }
     if(req.url==='/contact'){
        res.write('<h1>CONTACTS</h1>')
        return res.end()
    }
     if(req.url==='/admin'){
        res.write('<h1>ADMIN INFO</h1>')
        return res.end()
    }
     if(req.url==='/user'){
        res.write('<h1>USER INFO</h1>')
        return res.end()
    }



    res.write(
        `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <head>
        <nav>
            <ul>
                <li><a href="/home">HOME</a></li>
                <li><a href="/about">ABOUT</a></li>
                <li><a href="/contact">CONTACT</a></li>
                <li><a href="/admin">ADMIN</a></li>
                <li><a href="/user">USER</a></li>
            </ul>
        </nav>
    </head>
</body>
</html>
        `
        
    )
    return res.end();
})

const PORT=4000;
app.listen(PORT,()=>{
    console.log(`node server is running on port ${PORT}`)
})