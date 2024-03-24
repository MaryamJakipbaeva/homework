const express = require ('express')
const cors = require('cors')
const {query} = require('./helpers/db.js')

const port =3001

const app = express()
app.use(cors())

app.use(./)



app.listen(port,() =>{
    console.log(`Server is listening on port ${port}`)
})






