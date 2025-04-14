//built-in modules
const express = require('express')

//user-defined modules
const pool = require('../db/pool')
const result = require('../utils/result')

const router = express.Router()

router.post('/newblog', (req,res)=>{
    const {title, content, author, category} = req.body

    const sql = `INSERT INTO categories(title) VALUES(?)
                INSERT INTO blog(title, content, author) VALUES (?,?,?)`
})

module.exports = router