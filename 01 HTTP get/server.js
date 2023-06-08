
//import http module
let http = require('http')
//import url module
let url = require('url')
let server = http.createServer((req, res) => {
    let obj = url.parse(req.url, true).query
    let uname = obj.uname
    let upwd = obj.upwd
    //set MIME type
    res.writeHead(200, { 'content-type': 'text/html' })
    if(uname === 'admin' && upwd === 'admin')
        res.write('<h1>Login Success</h1>')
    else
        res.write('<h1>Login Failed</h1>')
    res.end()
})
//assign port no
server.listen(8085)
console.log('Server listening port no 8085')

//url :- http://localhost:8085/?uname=admin&upwd=admin

