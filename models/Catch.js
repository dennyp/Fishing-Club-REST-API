import mongoose from 'mongoose'

const catchSchema = mongoose.Schema(
  {
    username: { type: String, required: true, maxlength: 20 },
    longitude: { type: Number, required: true },
    latitude: { type: Number, required: true },
    locationWater: { type: String, required: true },
    locationCity: { type: String, required: true },
    species: { type: String, required: true },
    weight: { type: Number },
    length: { type: Number },
    imageUrl: { type: String },
    timeOfCatch: { type: Date, required: true, default: Date.now() }
  },
  { timestamps: true }
)

export const Catch = mongoose.model('catch', catchSchema)
