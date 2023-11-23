const http = require('http')

const server = http.createServer((req,res)=>{
    console.log(req.url);

    res.write('<h1>Hello World ,hey</h1>');
    res.end();
})

server.listen(2000,()=>{
    console.log('Server running on port 2000');
})