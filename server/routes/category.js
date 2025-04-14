//built-in modules
const express = require('express')

//user-defined modules
const pool = require('../db/pool')
const result = require('../utils/result')

const router = express.Router()

//create a new category
router.post('/addcategory', (req, res) => {
    const { title } = req.body

    const sql = `INSERT INTO categories(title) VALUES(?)`

    pool.query(sql, [title], (error, data) => {
        res.send(result.createResult(error, data))
    })
})

router.get('/showcategory', (req, res) => {
    const sql = `SELECT cid, title FROM categories`

    pool.query(sql, (error, data) => {
        res.send(result.createResult(error, data))
    })

})

module.exports = router