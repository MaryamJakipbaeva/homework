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

const openDb = (): Pool => {
    const pool = new Pool ({
        user: 'postgres',
        host: 'localhost',
        database: 'todo',
        password: 'root',
        port: 5432
    })
    return pool
}

app.listen(port,() =>{
    console.log(`Server is listening on port ${port}`)
})





app.post("/new",(req, res) =>{
    const pool = openDb()

    pool.query('insert into task (description) values ($1) returning *',
    [req.body.description],
    (error, result) => {
        if (error) {
            res.status(500).json({error: error.message})
        } else {
            res.status(200).json({id: result.rows[0].id})
        }
    })
})

const renderTask = (task) => {
    const li = document.createElement('li')
    li.setAttribute('class', 'list-group-item')
    li.innerHTML = task
    list.append(li)
}

const getTasks = async () => {
    try {
        const response = await fetch(BACKEND_ROOT_URL)
        const json  = await response.json()
        json.forEach(task => {
            renderTask(task.description)
        })
        input.disabled = false
    } catch (error) {
        alert("Error retrieving tasks" + error.message)
    }
}

