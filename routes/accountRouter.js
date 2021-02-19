import express from 'express'
import { AccountController } from '../controllers/accountController.js'

export const router = express.Router()

const controller = new AccountController()

router.post('/login', (req, res, next) => controller.login(req, res, next))
