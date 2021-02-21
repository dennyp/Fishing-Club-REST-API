import mongoose from 'mongoose'

const catchSchema = mongoose.Schema(
  {
    username: { type: String, required: true, maxlength: 20 },
    longitude: { type: Number },
    latitude: { type: Number },
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

catchSchema.statics.getAll = async function () {
  return this.find({})
}

catchSchema.statics.getById = async function (id) {
  const isValidObjectId = mongoose.isValidObjectId(id)

  if (isValidObjectId) return this.findOne({ _id: id })
}

export const Catch = mongoose.model('catch', catchSchema)
