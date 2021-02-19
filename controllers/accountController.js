import { User } from '../models/User.js'
import createError from 'http-errors'

export class AccountController {
  async login(req, res, next) {
    try {
      const user = await User.authenticate(req.body.email, req.body.password)

      res.json(user)
    } catch (error) {
      const err = createError(401)

      next(err)
    }
  }
}
