import express from 'express'
import { WebhookController } from '../controllers/webhookController.js'
import { verifyToken } from '../utils/auth.js'

export const router = express.Router()

const controller = new WebhookController()

router.get('/catch', verifyToken, (req, res, next) => controller.find(req, res, next))

router.post('/catch', verifyToken, (req, res, next) =>
  controller.create(req, res, next)
)
