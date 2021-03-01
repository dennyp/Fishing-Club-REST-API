import { Webhook } from '../models/Webhook.js'
import createError from 'http-errors'

export class WebhookController {
  async find(req, res, next) {
    try {
      const user = req.user
      const hook = Webhook.getByUserId(user._id)

      res.json(hook)
    } catch (error) {
      next(createError(404))
    }
  }

  async create(req, res, next) {
    try {
      const webhook = new Webhook({
        user: req.user,
        url: req.body.url
      })

      await webhook.save()

      const newWebhookURL = `${req.protocol}://${req.get('host')}${
        req.originalUrl
      }/${webhook._id}`

      res.location(newWebhookURL).status(201).json(webhook)
    } catch (error) {
      next()
    }
  }
}
