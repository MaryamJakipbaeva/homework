const express = require ('express')
const cors = require('cors')
const { Pool } = require('pg')

const app = express()
app.use(cors())
const port = 3001

app.get("/",(req: Request, res: Response) =>{
    const pool = openDb()
    pool.query('select * from task', (error, result) )
})

app.listen(port)