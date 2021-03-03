import express from 'express'
import { catchController } from '../controllers/catchController.js'
import { verifyToken } from '../utils/auth.js'
import createError from 'http-errors'

export const router = express.Router()

const controller = new catchController()

router.get('/', (req, res, next) => controller.findAll(req, res, next))
router.get('/:id', (req, res, next) => controller.find(req, res, next))

router.delete('/:id', verifyToken, (req, res, next) =>
  controller.delete(req, res, next)
)

router.put('/:id', verifyToken, (req, res, next) =>
  controller.update(req, res, next)
)

router.post('/', verifyToken, (req, res, next) =>
  controller.create(req, res, next)
)

router.patch('*', (req, res, next) => next(createError(405)))
