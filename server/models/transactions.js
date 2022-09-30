const Account = require("./accounts").accountSchema
const Category=require("./categories").categorySchema

const mongoose = require("mongoose")

const transactionSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
    },
    account: {
        type: Account,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    transactionWith: {
        type: String,
        required: true
    },
    category: {
        type: Category,
        required: false
    }
})
const transactionModel = mongoose.model('Transaction', transactionSchema)
module.exports = {transactionSchema, transactionModel}