const {Pool} = require('pg')

const query =(sql,values=[]) =>{
    return new promise(async(resolve, reject) =>{
        try {
          const pool = openDb()
          const result = await pool.query(sql, values)
        } catch (error) {
            reject(error.message)
        }
    })
}

const openDb = () => {
    const pool = new Pool ({
        user: 'postgres',
        host: 'localhost',
        database: 'todo',
        password: 'root',
        port: 5432
    })
    return pool
}

