import prisma from '../prisma'
const getAllProductsService = async () => {
    return prisma.product.findMany()
}

export {
    getAllProductsService
}