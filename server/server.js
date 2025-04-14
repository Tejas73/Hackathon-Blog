//built-in modules
const express = require('express')
const cors = require('cors')

//user-defined modules
const userRouter = require('./routes/user')
const categoryRouter = require('./routes/category')
const blogRouter = require('./routes/blog')
// const authorization = require('./routes/authorization')

const app = express()

app.use(cors())
// app.use(authorization)
app.use(express.json())

// router middlewares
app.use('/user', userRouter)
app.use('/category', categoryRouter)
app.use('/blog', blogRouter)

app.listen(3000, 'localhost', () => {
    console.log('Server running at port 3000')
})