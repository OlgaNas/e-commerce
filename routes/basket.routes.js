const Router = require('express');
const router = new Router();
const ProductsInBusketsController = require('../controllers/products_in_baskets.controllers');



router.post('/', ProductsInBusketsController.addProduct);
router.get('/', ProductsInBusketsController.getProductsInBuskets);
router.put('/:id', ProductsInBusketsController.updateBasketProduct);
router.delete('/:id', ProductsInBusketsController.deleteProductFromBusket);






module.exports = router;