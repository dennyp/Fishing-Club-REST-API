import express from 'express'
import createError from 'http-errors'
import { HomeController } from '../controllers/homeController.js'
import { router as accountRouter } from '../routes/accountRouter.js'
import { router as catchRouter } from '../routes/catchRouter.js'
import { router as webhookRouter } from '../routes/webhookRouter.js'

export const router = express.Router()

const controller = new HomeController()

router.get('/', controller.index)
router.use('/', accountRouter)
router.use('/catches', catchRouter)
router.use('/webhook', webhookRouter)

router.use('*', (req, res, next) => next(createError(404)))
