const Provider = require("../models/providers").providerModel

const express = require('express')
const router = express.Router()

const getProvider = async (req, res, next) => {
    const id = req.params.id
    let provider
    try {
        provider = await Provider.findById(id)
        if(provider == null) {
            return res.status(404).json({message: `Cannot find provider with id ${id}`})
        }
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    res.provider = provider
    next()
}

// get all
router.get('/', async (req, res) => {
    try {
        const providers = await Provider.find()
        res.json(providers)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})
// get one
router.get('/:id', getProvider, (req, res) => {
    res.json(res.provider)
})
//create one
router.post('/', async (req, res) => {
    const provider = new Provider({
        name: req.body.name,
        phone: req.body.phone
    })
    try {
        const newProvider = await provider.save()
        res.status(201).json(newProvider)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})
//update one
router.patch('/:id', getProvider, async(req, res) => {
    if(req.body.name != null) res.provider.name = req.body.name
    if(req.body.phone != null) res.provider.phone = req.body.name
    try {
        const updatedProvider = await res.provider.save()
        res.status(202).json(updatedProvider)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})
//delete one
router.delete('/:id', getProvider, async(req, res) => {
    try {
        await res.provider.remove()
        res.status(203).json(({message: `Successsfully deleted provider with id ${req.params.id}`}))
    } catch (error) {
        res.status(500).json({message:  error.message})
    }
})


module.exports = router