import { Schema, model } from 'mongoose'
import validator from 'validator'

const userSchema = new Schema(
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

export const User = model('user', userSchema)
