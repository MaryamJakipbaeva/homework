const express = require ('express')
const cors = require('cors')
const {Pool} = require('pg')

const port =3001

const app = express()
app.use(cors())

app.get("/",(req,res) =>{
    try {
        const pool = openDb()
            const result = await pool.query(
                'select * from post'
        )
        const rows = result.rows ? result.rows : []
        res.status(200).json(rows)
    } catch(error){
        res.statusMessage = error
        res.status(500).json({error: error})
    }
})



app.listen(port,() =>{
    console.log(`Server is listening on port ${port}`)
})






