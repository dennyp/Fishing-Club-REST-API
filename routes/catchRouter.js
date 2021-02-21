import express from 'express'
import { catchController } from '../controllers/catchController.js'

export const router = express.Router()

const controller = new catchController()

router.get('/', (req, res, next) => controller.findAll(req, res, next))
router.get('/:id', (req, res, next) => controller.find(req, res, next))
