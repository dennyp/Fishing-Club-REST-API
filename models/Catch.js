import mongoose from 'mongoose'

const catchSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    longitude: { type: Number },
    latitude: { type: Number },
    locationWater: { type: String, required: true },
    locationCity: { type: String, required: true },
    species: { type: String, required: true },
    weight: { type: Number },
    length: { type: Number },
    imageUrl: { type: String },
    timeOfCatch: { type: Date, default: Date.now() }
  },
  { timestamps: true }
)

catchSchema.statics.getAll = async function () {
  return this.find({}).populate('user', 'firstName lastName email')
}

catchSchema.statics.getById = async function (id) {
  const isValidObjectId = mongoose.isValidObjectId(id)

  if (isValidObjectId) return this.findOne({ _id: id }).populate('user')
}

export const Catch = mongoose.model('catch', catchSchema)
