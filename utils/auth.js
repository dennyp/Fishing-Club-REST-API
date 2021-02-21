import createError from 'http-errors'
import jwt from 'jsonwebtoken'

export const JWTAuthenticate = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization.split(' ')

    if (authHeader[0] !== 'Bearer') {
      next(createError(401))
    }

    req.token = jwt.verify(authHeader[1], process.env.TOKEN_SECRET)
    req.user = {
      firstName: req.token.firstname,
      lastname: req.token.lastname,
      email: req.token.email
    }

    next()
  } catch (error) {
    next(createError(403))
  }
}