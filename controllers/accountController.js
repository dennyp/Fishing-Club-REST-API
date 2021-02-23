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
      next(createError(401))
    }
  }

  async register(req, res, next) {
    try {
      const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
      })

      await user.save()

      res.status(201).json(user)
    } catch (error) {
      next(createError(400))
    }
  }
}
