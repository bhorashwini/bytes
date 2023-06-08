//import express module
let express = require('express')
//create rest object
let app = express()
//create port
let port = 8086
//create restapi
app.get("/login", (req, res) => {
    //query is the predefined key in req object
    //query is used to read get parameters 
    let uname = req.query.uname
    let upwd = req.query.upwd
    if (uname == 'admin' && upwd == 'admin')
        res.json({ 'login': 'Success' })
    else
        res.json({ 'login': 'Failed' })
})
//assign port no
app.listen(port,()=>{
    console.log("Server listening port no :-8086 ",port)
})
