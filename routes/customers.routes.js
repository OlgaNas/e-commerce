const Router = require('express');
const router = new Router();
const CustomerController = require('../controllers/customers.controller');


router.post('/customer', CustomerController.createCustomer); // http://localhost:8080/api/user
router.get('/customer/:id', CustomerController.getOneCustomer);
router.put('/customer/:id', CustomerController.updateCustomer);
router.delete('/customer/:id', CustomerController.deleteUser);






module.exports = router;