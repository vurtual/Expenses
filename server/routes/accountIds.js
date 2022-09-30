const AccountId = require("../models/accountIds").accountIdModel

const { json } = require("express")
const express = require('express')
const router = express.Router()

const getAccountId = async (req, res, next) => {
    const id = req.params.id
    let accountId
    try {
        accountId = await AccountId.findById(id)
        if(accountId == null) {
            json.stats(404).json({message: `Cannot  find account id with id ${id}`})
        }
    } catch (error) {
        return res.status(500).json({message: error.meessage})
    }
    res.accountId = accountId
    next()
}

// get all
router.get('/', async (req, res) => {
    try {        
        const accountIds = await AccountId.find()
        res.json(res.accountId)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})
// get one
router.get('/:id', (req, res) => {
    res.json(res.account)
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