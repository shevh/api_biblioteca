const express = require('express')
const mongoose = require('mongoose')
require('./config/db')
// const url = 'mongodb://localhost/myDataBase'

const app = express()

// mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('Conectado')
})

app.use(express.json())

const authorRouter = require('./routes/author')
const bookRouter = require('./routes/book')
const bookinstanceRouter = require('./routes/bookinstance')
const genreRouter = require('./routes/genre')

app.use('/authors',authorRouter)
app.use('/books',bookRouter)
app.use('/bookinstances',bookinstanceRouter)
app.use('/genres',genreRouter)

app.listen(9000, () => {
    console.log('Server started')
})