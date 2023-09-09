const Router = require('express');
const router = new Router();
const ToysController = require('../controllers/toys.controller');

// For each function in ToysController create a route

router.get('/', ToysController.getAllToys);
router.get('/:id', ToysController.getOneToyById);
// router.get('/:category', ToysController.getToysByCategory);




module.exports = router;