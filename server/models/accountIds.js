const mongoose=require("mongoose")

const accountIdSchema = new mongoose.Schema({
    number: {
        type: Number,
        required: true
    },
    sortCode: {
        type: Number,
        required: true
    }
})

const accountIdModel = mongoose.model('AccountId', accountIdSchema)

module.exports = {accountIdModel, accountIdSchema}