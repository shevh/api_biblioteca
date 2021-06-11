const express = require('express')
const router = express.Router()
const Author = require('../models/author')


router.get('/', async(req,res) => {
    try{
           const authors = await Author.find()
           res.json(authors)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const author = await Author.findById(req.params.id)
           res.json(author)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    const author = new Author({
        first_name: req.body.first_name,
        family_name: req.body.family_name,
        date_of_birth: req.body.date_of_birth,
        date_of_death: req.body.date_of_death,
        name: req.body.name,
        lifespan: req.body.lifespan,
        url: req.body.url
    })

    try{
        const a1 =  await author.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const author = await Author.findById(req.params.id) 
        author.sub = req.body.sub
        const a1 = await author.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})

module.exports = router