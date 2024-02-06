import "dotenv/config"
import express from "express"
import cors from "cors"
import v1ProductRouter from './src/routes/v1/productRoutes.js'

const PORT = process.env.PORT || 3001
const app = express()

// Install Global Middlewares
app.use(cors())
app.use(express.json())

// Register Routes
app.use('/api/v1/products', v1ProductRouter)

app.listen(PORT, () => console.log(`Servidor corriendo en ${PORT}`))