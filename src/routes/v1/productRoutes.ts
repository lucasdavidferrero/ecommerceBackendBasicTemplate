import { Router } from "express"
import { getAllProducts, getPricingHistoryByProductId } from '../../controllers/productController.js'

const router = Router()

router
    /**
    * @openapi
    * /products:
    *   get:
    *       summary: Retornar listado de productos
    *       responses:
    *           200:
    *               description: JSON Array of products
    *               content: 
    *                   application/json:
    *                       schema:
    *                           $ref: '#/src/component/schemas/Product.yaml'
    * 
    *          
    *
    */
    .get('/', getAllProducts)
    .get('/pricing-history/:productId', getPricingHistoryByProductId)

export default router



// https://dev.to/kabartolo/how-to-document-an-express-api-with-swagger-ui-and-jsdoc-50do