const Router = require('express');
const router = new Router();
const OrdersController = require('../controllers/orders.controller');



router.post('/order', OrdersController.createOrder); // http://localhost:8080/api/user
router.get('/order', OrdersController.getOrderByCustomer);
router.put('/order/:id', OrdersController.updateOrder);
router.delete('/order/:id', OrdersController.deleteOrder);






module.exports = router;