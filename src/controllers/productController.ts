import { Request, Response } from "express"
import { getAllProductsService } from '../services/productService'

const getAllProducts = async (req: Request, res: Response) => {
    const allProducts = await getAllProductsService()
    res.send({
        status: 'OK',
        data: allProducts
    })
}

export {
    getAllProducts
}