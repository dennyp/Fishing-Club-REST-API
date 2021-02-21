import mongoose from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcrypt'

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
  // Why is bcrypt.compare always returning false? Do I need to salt and hash when creating a user?
  // if (!user || !(await bcrypt.compare(password, user.password)))
  //   throw new Error('Wrong username or password.')

  return user
}

export const User = mongoose.model('user', userSchema)
