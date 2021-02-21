import { User } from '../models/User.js'
import createError from 'http-errors'
import jwt from 'jsonwebtoken'

export class AccountController {
  async login(req, res, next) {
    try {
      const user = await User.authenticate(req.body.email, req.body.password)

      const payload = {
        firstname: user.firstName,
        lastname: user.lastName,
        email: user.email
      }

      const token = jwt.sign(payload, process.env.TOKEN_SECRET)

      res.status(201).json({ token })
    } catch (error) {
      const err = createError(401)

      next(err)
    }
  }
}
