const Router = require('express');
const router = new Router();
const AuthController = require('../controllers/authontication/auth.controller');



router.get('/login', AuthController.login);







module.exports = router;