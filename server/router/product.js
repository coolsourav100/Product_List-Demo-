const express = require('express')
const router = express.Router()
const productController = require('../controller/product')

router.get('/',productController.getProduct)
router.post('/',productController.postProduct)
router.delete('/:id',productController.deleteProduct)

module.exports = router