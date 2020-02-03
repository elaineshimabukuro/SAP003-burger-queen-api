import { Router } from 'express'
import productController from '../contollers/productController'

const router = Router()
router.get('/', productController.getAll)
router.post('/', productController.addProduct)
router.get('/:id', productController.getProduct)
router.put('/:id', productController.updatedProduct)
router.delete('/:id', productController.deleteProduct)
export default router