import { Catch } from '../models/Catch.js'
import createError from 'http-errors'
import { Webhook } from '../models/Webhook.js'
import axios from 'axios'

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

  async findAll(req, res, next) {
    try {
      const { pageSize, pageStartIndex, ...filter } = req.query

      const catches = await Catch.getAll(pageSize, pageStartIndex, filter)

      const catchesWithLinks = catches.map((catchObj) => {
        return {
          ...catchObj._doc,
          _links: { self: { href: `${req.originalUrl}/${catchObj._id}` } }
        }
      })

      res.json(catchesWithLinks)
    } catch (error) {
      next()
    }
  }

  async delete(req, res, next) {
    try {
      const id = req.params.id
      const response = await Catch.findByIdAndDelete(id)

      if (!response) {
        next(createError(404))
        return
      }

      res.status(204).end()
    } catch (error) {
      next()
    }
  }

  async update(req, res, next) {
    try {
      const id = req.params.id
      const catchObj = await Catch.getById(id)

      await catchObj.updateOne({
        user: req.body.user,
        longitude: req.body.longitude,
        latitude: req.body.latitude,
        locationWater: req.body.locationWater,
        locationCity: req.body.locationCity,
        species: req.body.species,
        weight: req.body.weight,
        length: req.body.length,
        imageUrl: req.body.imageUrl,
        timeOfCatch: req.body.timeOfCatch
      })

      res.status(204).end()
    } catch (error) {
      next()
    }
  }

  async create(req, res, next) {
    try {
      const catchObj = new Catch({
        user: req.user,
        longitude: req.body.longitude,
        latitude: req.body.latitude,
        locationWater: req.body.locationWater,
        locationCity: req.body.locationCity,
        species: req.body.species,
        weight: req.body.weight,
        length: req.body.length,
        imageUrl: req.body.imageUrl,
        timeOfCatch: req.body.timeOfCatch
      })

      await catchObj.save()

      // Send webhooks to notify subscribers
      const webhooks = await Webhook.getAll()

      webhooks.map((hook) => {
        axios.post(hook.url, catchObj)
      })

      const newCatchURL = `${req.protocol}://${req.get('host')}${
        req.originalUrl
      }/${catchObj._id}`
      res.location(newCatchURL).status(201).json(catchObj)
    } catch (error) {
      next()
    }
  }
}
