//built-in modules
const express = require('express')
const jwt = require('jsonwebtoken')

//user-defined modules
const pool = require('../db/pool')
const result = require('../utils/result')
const config = require('../utils/config')

const router = express.Router()

//signup route
router.post('/signup', (req, res) => {
    const { name, email, password, phone_no } = req.body

    const sql = `INSERT INTO users(name, email, password, phone_no) VALUES(?,?,?,?)`

    pool.query(sql, [name, email, password, phone_no], (error, data) => {
        res.send(result.createResult(error, data))
    })
})

//login route
router.post('/login', (req, res) => {
    const { email, password } = req.body

    const sql = `SELECT id, name, email, password FROM users
                 WHERE email = ? AND password = ?
                `

    pool.query(sql, [email, password], (error, data) => {
        if (data) {
            if (data.length != 0) {
                const payload = {
                    userId: data[0].id
                }

                const token = jwt.sign(payload, config.secret)

                //send token and name to the front-end
                const body = {
                    name: `${data[0].name}`,
                    token: token,
                }

                res.send(result.createSuccessResult(body))
            } else {
                res.send(result.createErrorResult("Invalid email or password"))
            }
        } else res.send(result.createErrorResult(error))
    })
})



module.exports = router