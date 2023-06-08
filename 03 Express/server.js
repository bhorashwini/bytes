//import express module
let express = require('express')
//create rest object
let app = express()     //where app is rest object
//create a get request
app.get("/", (req, res) => {
    console.log('Default get message sent')
    res.send({ 'message': 'default get request' })
})
//create one more get request
app.get('/fetch', (req, res) => {
    res.json({ 'message': 'fetch get request' })
})
//create post request
app.post("/", (req, res) => {
    res.send({ 'message': 'default post request' })
})
//create one more post request
app.post("/login", (req, res) => {
    res.send({ 'message': 'login post request' })
})
//create a port
let port = 8086
//assign port no
app.listen(port,()=>{
    console.log('Server listening port no :- 8086',port)
})
