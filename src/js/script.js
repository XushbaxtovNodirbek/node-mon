const http = require('http'),
fs = require('fs'),
path = require('path')

console.log(path.basename('./templates'))

const server = http.createServer((req,res)=>{
    // console.log(req.url);

    // // res.write('<h1>Hello World ,hey</h1>');
    // res.end();

    if(req.method === 'GET'){
        res.writeHead(200,{
            "Content-Type":"text/html"
        })
        if(req.url === '/'){
            fs.readFile(path.join(path.basename('./templates'),'main.html'),'utf-8',(err,content) => {
                if(err) throw new Error(err)

                res.end(content)
            })
        }else if(req.url === '/about'){
            fs.readFile(path.join(path.basename('./templates'),'about.html'),'utf-8',(err,content) => {
                if(err) throw new Error(err)

                res.end(content)
            })
        }
        else if(req.url === '/contact'){
            fs.readFile(path.join(path.basename('./templates'),'contact.html'),'utf-8',(err,content) => {
                if(err) throw new Error(err)

                res.end(content)
            })
        }
        // res.end(`
        //     <h2>Send Email</h2>   
        //     <form method = "post" action="/">
        //         <input name="email" type="email" placeholder = "Enter your email"/>
        //         <button type="submit" >send</button>
        //     </form>     
        // `)
        
    }else if(req.method === 'POST'){
        
        let body =[]

        req.on('data',(data)=>{
            body.push(Buffer.from(data,'utf8'))
        })

        req.on('end',()=>{
            const msg = body.toString('utf8').split('=')[1]

            res.end(`<p>Email has been blocked: ${msg}</p>`)

        })

    }
})

server.listen(2000,()=>{
    console.log('Server running on port 2000');
})