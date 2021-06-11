const express = require('express')
const mongoose = require('mongoose')
require('./config/db')
// const url = 'mongodb://localhost/myDataBase'

const app = express()

// mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const bookRouter = require('./routes/book')
app.use('/books',bookRouter)

app.listen(9000, () => {
    console.log('Server started')
})