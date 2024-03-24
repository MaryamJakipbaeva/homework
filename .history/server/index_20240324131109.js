const express = require ('express')
const cors = require('cors')
const { Pool } = require('pg')

const app = express()
app.use(cors())
app.use(express.json())

const port = 3001

app.get("/",(req: Request, res: Response) =>{
    const pool = openDb()
    pool.query('select * from task', (error, result) => {
        if (error){
             res.status(500).json({error: error.message})
        }
        res.status(200).json(result.rows)
    })
})

const openDb = (): Pool => {
    const pool: Pool = new Pool ({
        user:'postgres',
        host: 'localhost',
        database: 'todo',
        password: 'root',
        port: 5432
    })
    return pool
}

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

const saveTask = async (task) => {
    saveTask(task).then((json)=> )
}

input.addEventListener('keypress', (event) => {
    if(event.key === 'Enter'){
        event.preventDefault()
        const task = input.value.trim()
        if(task !== ''){
          renderTask(task)
          input.value = ''
        }
    }
})

const BACKEND_ROOT_URL = 'http://localhost:3001'

const list = document.querySelector('ul')
const input = document.querySelector('input')

input.disabled = true
