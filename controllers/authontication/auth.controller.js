const db = require('../../db/db');

class AuthController {
    async login(req, res) {
        res.render('index.ejs');
    }
};

module.exports = new AuthController();
