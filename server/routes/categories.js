const Category = require("../models/categories").categoryModel

const express = require('express')
const router = express.Router()

// get all
router.get('/', (req, res) => {
    res.send()
})
// get one
router.get('/:id', (req, res) => {
    const id = req.params.id
    res.send(null)
})
//create one
router.post('/', (req, res) => {
    const category = req.body.category
    res.send({category})
})
//update one
router.patch('/:id', (req, res) => {
    const id = req.params.id
    res.send(null)
})
//delete one
router.delete('/:id', (req, res) => {
    const id = req.params.id
    res.send(null)
})

module.exports = router