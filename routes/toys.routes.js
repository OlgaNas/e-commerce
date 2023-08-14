const Router = require('express');
const router = new Router();
const ToysController = require('../controllers/toys.controller');

// For each function in ToysController create a route

router.get('/toys', ToysController.getAllToys);
router.get('/toys/:id', ToysController.getOneToyById);
router.get('/toycategory/:category', ToysController.getToysByCategory);




module.exports = router;