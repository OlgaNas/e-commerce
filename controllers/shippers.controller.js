const db = require('../db/db');
//What customers can do with the toys db
class ShippersController {
    async getAllShippers(req, res) {
        const shippers = await db.query('SELECT * FROM shippers');
        res.json(shippers.rows);
    }
    async getOneShipperById(req, res) {
        const id = req.params.id;
        const shipper = await db.query('SELECT * FROM shippers WHERE id = $1', [id]);
        res.json(shipper.rows[0]);
    }
};

module.exports = new ShippersController();