let express = require('express')
let bodyparser = require('body-parser')
//create rest object
let app = express()
//create port
let port = 8085
//set JSON as MIME type
app.use(bodyparser.json())
//frontend encoding form data
app.use(bodyparser.urlencoded({ extended: false }))
//create rest api
app.post("/login",(req, res)=>{
    //client parameters are stored in body part of req        
    let uname = req.body.uname
    let upwd = req.body.upwd
    if (uname == 'admin' && upwd == 'admin')
        res.send({ 'login': 'success' })
    else
        res.send({ 'login': 'failed' }) 
})
//assign port no
app.listen(port,()=>{
    console.log('Server listening port no :-8085 ',port)
})
