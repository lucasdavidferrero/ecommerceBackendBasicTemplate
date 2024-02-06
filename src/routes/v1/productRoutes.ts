import { Router } from "express"
import { getAllProducts, getPricingHistoryByProductId } from '../../controllers/productController.js'

const router = Router()

router
    .get('/', getAllProducts)
    .get('/pricing-history/:productId', getPricingHistoryByProductId)

export default router