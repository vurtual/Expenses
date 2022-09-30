const Provider = require("./providers").providerSchema
const AccountId = require('./accountIds').accountIdSchema
const mongoose=require("mongoose")

const accountSchema = new mongoose.Schema({
    nickname: {
        type: String,
        required: true
    },
    nameOnAccount: {
        type: String,
        required: true
    },
    provider: {
        type: Provider,
        required: true
    },
    id: {
        type: AccountId,
        required: true
    },
    startingBalance: {
        type: Number,
        required: true
    },
    currentBalance: {
        type: Number,
        required: true
    },
    added: {
        type: Date,
        required: true,
        default: Date.now
    },
    lastUpdate: {
        type: Date,
        required: true,
        default: Date.now
    }
})
const accountModel = mongoose.model('Account', accountSchema)
module.exports = {accountModel, accountSchema}