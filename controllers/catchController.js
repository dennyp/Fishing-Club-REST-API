import { Catch } from '../models/Catch.js'
import createError from 'http-errors'

export class catchController {
  async find(req, res, next) {
    try {
      const id = req.params.id
      const catchObj = await Catch.getById(id)
      
      if (!catchObj || typeof catchObj === undefined) {
        next(createError(404))
        return
      }

      res.json(catchObj)
    } catch (error) {
      next(createError(400))
    }
  }
}
