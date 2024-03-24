const express = require ('express')
const cors = require('cors')
const { Pool } = require('pg')

const app = express()
app.use(cors())
const port = 3001

app.get("/",(req: Request, res: Response) =>{
    const pool = open
    res.status(200).json({result: 'success'})
})

app.listen(port)