import express from 'express'
import createError from 'http-errors'
import { HomeController } from '../controllers/homeController.js'
import { router as accountRouter } from '../routes/accountRouter.js'
import { JWTAuthenticate } from '../utils/auth.js'

export const router = express.Router()

const controller = new HomeController()

router.get('/', JWTAuthenticate, controller.index)
router.use('/', accountRouter)

router.use('*', (req, res, next) => next(createError(404)))
