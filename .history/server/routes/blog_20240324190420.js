const express = require('express')
const {query} = require('../helpers/db.js')

const blogRouter = express.Router()

blogRouter.get("/",async (req,res) =>{
    try {
       const result = await query('select * from post')
        const rows = result.rows ? result.rows : []
        res.status(200).json(rows)
    } catch(error){
        res.statusMessage = error
        res.status(500).json({error: error})
    }
})

blogRouter.post("/new",async(req,res) => {
    try {
      const sql = 'insert into post (message) values ($1) returning *'
      const result = await query(sql,[req.body.message])
      res.status(200).json({id: result.rows[0].id})
} catch(error){
    res.statusMessage = error
    res.status(500).json({error: error})
}
})
blogRouter.delete("/delete/:id",async(req,res))

module.exports = {
    blogRouter
}
