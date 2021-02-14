'use strict'

const express = require('express')

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())

app.use((req, res) => {
  res.status(404).send({
    url: `Status 404 - ${req.originalUrl} not found.`
  })
})

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`)
})
