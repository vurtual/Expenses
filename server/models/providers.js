const mongoose = require("mongoose")

const providerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
})

const providerModel = mongoose.model('Provider', providerSchema)
module.exports = { providerSchema, providerModel}