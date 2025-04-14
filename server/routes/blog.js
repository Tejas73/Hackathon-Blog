//built-in modules
const express = require('express')

//user-defined modules
const pool = require('../db/pool')
const result = require('../utils/result')

const router = express.Router()

//create a new blog
router.post('/newblog', (req, res) => {
    const { title, content, author, category_id, user_id } = req.body

    const sql = `INSERT INTO blogs(title, contents, author, category_id, user_id) VALUES (?,?,?,?,?)`
    console.log("SQL: ", sql)

    pool.query(sql, [title, content, author, category_id,user_id], (error, data) => {
        res.send(result.createResult(error, data))
    })
})

//get all blogs
router.get('/allblogs', (req, res) => {

    const sql = `SELECT id, title, categories.title, created_time, author FROM blogs, categories
    WHERE categories.cid = blogs.category_id`
    console.log("SQL: ", sql)

    pool.query(sql, (error, data) => {
        if (data) {
            if (data.length != 0) {
                res.send(result.createResult(data))
            } else {
                res.send(result.createErrorResult("Data not found"))
            }
        }
        res.send(result.createErrorResult(error))
    })
})

//get my blogs
router.get('/myblogs', (req, res) => {

    const sql = `SELECT id, title, categories.title, created_time, author FROM blogs, categories
    WHERE categories.cid = blogs.category_id AND blogs.user_id = ?`
    console.log("SQL: ", sql)

    pool.query(sql, [req.headers.userId], (error, data) => {
        if (data) {
            if (data.length != 0) {
                res.send(result.createResult(data))
            } else {
                res.send(result.createErrorResult("Data not found"))
            }
        }
        res.send(result.createErrorResult(error))
    })
})

//edit this blog
router.put('/editblog', (req, res) => {
    const { title, contents, bid } = req.body

    const sql = `UPDATE blogs SET title = ?, contents = ? WHERE bid = ? `

    pool.query(sql, [title, contents, bid], (req, res) => {
        if (data) {
            if (data.length != 0) {
                res.send(result.createResult(data))
            } else {
                res.send(result.createErrorResult("Data not found"))
            }
        }
        res.send(result.createErrorResult(error))
    })
})

//find a word which is present in all the blogs
router.get('/findblog', (req, res) => {
    const { word } = req.body

    const sql = `UPDATE blogs SET title = ?, contents = ? WHERE bid = ? `

    pool.query(sql, [title, contents, bid], (req, res) => {
        if (data) {
            if (data.length != 0) {
                res.send(result.createResult(data))
            } else {
                res.send(result.createErrorResult("Data not found"))
            }
        }
        res.send(result.createErrorResult(error))
    })
})





module.exports = router



