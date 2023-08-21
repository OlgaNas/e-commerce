const Router = require('express');
const router = new Router();
const CustomerController = require('../controllers/customers.controller');

router.get('/login', CustomerController.logout)
router.get('/login', CustomerController.login)
router.post('/login', CustomerController.loginUser)
router.get('/register', CustomerController.registerPage);
router.post('/register', CustomerController.register);
router.get('/dashboard', CustomerController.dashboard)
router.get('/customer', CustomerController.getOneCustomer);
router.put('/customer/:id', CustomerController.updateCustomer);
router.delete('/customer/:id', CustomerController.deleteUser);






module.exports = router;