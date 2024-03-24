const {Pool} = require('pg')

const query =(sql,values=[]) =>{
    return 
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

