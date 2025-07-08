const express = require('express')
const mysql = require('mysql2');
const con = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root", // Default username and password. root:root, highly advisable to change this if using.
    database: "CostaLingua"
}).promise()
const app = express()
const cors = require('cors')
const corsOptions = {
    origin: 'http://localhost:5173', // Change URL here to your own domain, if deploying this server
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
const authService = require('./services/auth')
const port = 3000

app.listen(port, () => {
    console.log(`Example app listening in port ${port}`)
})