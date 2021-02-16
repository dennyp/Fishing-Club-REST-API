import express from 'express'
import { connectDatabase } from './config/mongoose.js'
import { router } from './routes/homeRouter.js'

const PORT = process.env.PORT || 5000

const main = async () => {
  await connectDatabase()

  const app = express()

  app.use(express.json())

  app.use('/', router)

  app.use((req, res) => {
    res.status(404).send({
      url: `Status 404 - ${req.originalUrl} not found.`
    })
  })

  app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`)
  })
}

main().catch(console.error)
