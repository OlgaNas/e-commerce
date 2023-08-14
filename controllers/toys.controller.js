const db = require('../db/db');
//What customers can do with the toys db
class ToysController {
    async getAllToys(req, res) {
        const toys = await db.query('SELECT * FROM toys LIMIT 100');
        res.json(toys.rows);
    }
    async getOneToyById(req, res) {
        const id = req.params.id;
        const toy = await db.query('SELECT * FROM toys WHERE id = $1', [id]);
        res.json(toy.rows[0]);
    }
    async getToysByCategory(req, res) {
        const category = req.params.category;
        const toysByCategory = await db.query('SELECT * FROM toys WHERE category = $1 LIMIT 100', [category]);
        res.json(toysByCategory.rows);
    }

};

module.exports = new ToysController();
