'use strict'

const { Schema, model } = require('mongoose')

const catchSchema = Schema({
  username: { type: String, required: true, maxlength: 20 },
  longitude: { type: Number, required: true },
  latitude: { type: Number, required: true },
  locationWater: { type: String, required: true },
  locationCity: { type: String, required: true },
  species: { type: String, required: true },
  weight: { type: Number },
  length: { type: Number },
  imageUrl: { type: String },
  timestamp: { type: Date, reqired: true, default: Date.now }
})

const Catch = model('catch', catchSchema)

module.exports = Catch
