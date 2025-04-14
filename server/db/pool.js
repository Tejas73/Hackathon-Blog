const mysql2 = require('mysql2')

const pool = mysql2.createPool({
    host: 'localhost',
    user: 'D2_89481_Tejas',
    password: 'manager',
    database: 'blog_app_db'
})

module.exports = pool