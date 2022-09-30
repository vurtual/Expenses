const Account = require('../models/accounts').accountModel

const express = require('express')
const router = express.Router()

// get all
router.get('/', (req, res) => {
    res.send(null)
})
// get one
router.get('/:id', (req, res) => {
    const id = req.params.id
    res.send(null)
})
//create one
router.post('/', (req, res) => {
    res.send(null)
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