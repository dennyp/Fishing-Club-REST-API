'use strict'

const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const PORT = process.env.PORT || 5000

const app = express()

// Connection string to MongoDb
const CONNECTION_STRING = `${process.env.DB_URL}`

// Connect to database
mongoose.connect(
  CONNECTION_STRING,
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
)

// Mongoose connection
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log(`Connected to database ${process.env.DB_NAME}!`)
})

app.use(express.json())

app.use((req, res) => {
  res.status(404).send({
    url: `Status 404 - ${req.originalUrl} not found.`
  })
})

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`)
})
