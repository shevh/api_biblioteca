const express = require('express')
const router = express.Router()
const BookInstance = require('../models/bookinstance')


router.get('/', async(req,res) => {
    try{
           const booksInstance = await BookInstance.find()
           res.json(booksInstance)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const bookInstance = await BookInstance.findById(req.params.id)
           res.json(bookInstance)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    const bookInstance = new BookInstance({
        book: req.body.book,
        imprint: req.body.imprint,
        status: req.body.status,
        due_back: req.body.due_back,
        url: req.body.url
    })

    try{
        const a1 =  await bookInstance.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const bookInstance = await BookInstance.findById(req.params.id) 
        bookInstance.sub = req.body.sub
        const a1 = await bookInstance.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})

module.exports = router