const Router = require('express');
const router = new Router();
const ShippersController = require('../controllers/shippers.controller');


router.get('/shippers', ShippersController.getAllShippers);
router.get('/shippers/:id', ShippersController.getOneShipperById);




module.exports = router;