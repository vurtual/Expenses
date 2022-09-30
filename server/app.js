require('dotenv').config()
const express = require('express')
const app = express()
const mongoose= require('mongoose')
const PORT = process.env.PORT

mongoose.connect(process.env.DATABASE_URI)
const db = mongoose.connection

app.use(express.json())

const accountsRouter = require('./routes/accounts')
app.use('/account', accountsRouter)

const accountIdsRouter = require('./routes/accountIds')
app.use('/accountId', accountIdsRouter)

const providersRouter = require('./routes/providers')
app.use('/provider', providersRouter)

const transactionsRouter = require('./routes/transactions')
app.use('/transaction', transactionsRouter)

const categoriesRouter = require('./routes/categories')
app.use('/category', categoriesRouter)

db.on('error', error => console.log(error))
db.once('open', () => console.log('Connected to MongoDB'))

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))