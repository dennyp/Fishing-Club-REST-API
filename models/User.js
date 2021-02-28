import mongoose from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcrypt'

const SALT_ROUNDS = 10

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

userSchema.pre('save', async function () {
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS)
})

userSchema.statics.authenticate = async function (email, password) {
  const user = await this.findOne({ email })

  if (!user || !(await bcrypt.compare(password, user.password)))
    throw new Error('Wrong username or password.')

  return user
}

userSchema.statics.create = async function (userInfo) {
  const user = new User(userInfo)
  return user.save()
}

export const User = mongoose.model('user', userSchema)
