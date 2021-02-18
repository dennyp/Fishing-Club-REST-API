import { Schema, model } from 'mongoose'

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
  timestamp: { type: Date, required: true, default: Date.now }
})

export const Catch = model('catch', catchSchema)
