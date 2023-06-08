//download express module
//>yarn add express --save

//import express module
let express = require('express')
//create rest object
let app = express()
//create port
let port = 8085
//url:http://localhost:8080/login/admin/admin
app.get("/login/:uname/:upwd", (req, res) => {
    //params is the predefined key used to read parameters from url 
    let uname = req.params.uname
    let upwd = req.params.upwd
    if (uname === 'admin' && upwd === 'admin')
        res.json({ 'login': 'success' })
    else
        res.json({ 'login': 'failed' })
})
//assign port no
app.listen(port, () => {
    console.log(`Server listening port no ${port}`)
})
