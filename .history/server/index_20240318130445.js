const express = require ('express')
const cors = require('cors')

const app = express()
app.use(cors())
const port = 3001

app.get("/",(req, res) =>{
    res.result
})