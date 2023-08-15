const Router = require('express');
const router = new Router();
const ProductsInBusketsController = require('../controllers/products_in_baskets.controllers');



router.post('/basket', ProductsInBusketsController.addProduct);
router.get('/basket', ProductsInBusketsController.getProductsInBuskets);
router.put('/basket/:id', ProductsInBusketsController.updateBasketProduct);
router.delete('/basket/:id', ProductsInBusketsController.deleteProductFromBusket);






module.exports = router;