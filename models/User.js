import mongoose from 'mongoose'
import validator from 'validator'

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      validate: validator.isEmail
    },
    password: { type: String, required: true, minlength: 8 }
  },
  { timestamps: true }
)

userSchema.statics.authenticate = async (email, password) => {
  const user = await User.findOne({ email })
  // TODO need to check the password the user is using against the database
  return user
}

export const User = mongoose.model('user', userSchema)
