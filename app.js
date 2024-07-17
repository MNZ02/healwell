import express from 'express'
import categoryRoutes from './routes/categoryRoutes.js'
const app = express()

app.use('/api', categoryRoutes)
export default app
