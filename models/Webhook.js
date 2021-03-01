import mongoose from 'mongoose'

const schema = new mongoose.Schema(
  {
    url: { type: String, required: true, trim: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' }
  },
  { timestamps: true }
)

schema.statics.getByUserId = async function (id) {
  const isValidObjectId = mongoose.isValidObjectId(id)

  if (isValidObjectId) return this.findOne({ _id: id }).populate('user')
}

schema.statics.getAll = async function () {
  return this.find({}).populate('user', 'firstName lastName')
}

export const Webhook = mongoose.model('webhook', schema)
