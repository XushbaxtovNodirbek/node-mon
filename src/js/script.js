const http = require('http')

const server = http.createServer((req,res)=>{
    console.log(req.url);

    res.write('Hello World');
    res.end();
})

server.listen(2000,()=>{
    console.log('Server running on port 2000');
})