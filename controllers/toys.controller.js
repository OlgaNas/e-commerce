const pool = require('../db/db');
//What customers can do with the toys db
class ToysController {
    async getAllToys(req, res) {
        try {
            const toys = await pool.query('SELECT * FROM toys');
            res.render("toys.ejs", { toys: toys.rows }); // Render the 'toys' view and pass the 'toys' data
        } catch (error) {
            console.error('Error fetching toys:', error);
            res.status(500).send('Internal Server Error');
        }
    }
    async getOneToyById(req, res) {
        const id = req.params.id;
        const toys = await pool.query('SELECT * FROM toys WHERE id = $1', [id]);
        res.render("toys.ejs", { toys: toys.rows });
    }
    // async getToysByCategory(req, res) {
    //     const category = req.params.category;
    //     const toysByCategory = await pool.query('SELECT * FROM toys WHERE category = $1 LIMIT 100', [category]);
    //     res.json(toysByCategory.rows);
    // }

};

module.exports = new ToysController();
