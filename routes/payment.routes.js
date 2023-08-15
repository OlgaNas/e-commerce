const Router = require('express');
const router = new Router();
const PaymentController = require('../controllers/payment.controller');



router.post('/payment', PaymentController.createPayment);
router.get('/payment', PaymentController.getOnePaymentByCustomer);
router.put('/payment/:id', PaymentController.updatePayment);
router.delete('/payment/:id', PaymentController.deletePayment);






module.exports = router;