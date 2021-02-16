import express from 'express'
import { HomeController } from '../controllers/homeController.js'

export const router = express.Router()

const controller = new HomeController()

router.get('/', controller.index)
