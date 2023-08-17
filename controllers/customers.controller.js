const db = require('../db/db');

class CustomerController {
    async register(req, res) {
        const { name, surname, address, city, post_code, email, phone, password, username } = req.body;
        const newCustomer = await db.query('INSERT INTO customers (name, surname, address, city, post_code, email, phone, password, username) values ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *', [name, surname, address, city, post_code, email, phone, password, username])
        res.json(newCustomer.rows[0]);
    }

    async getOneCustomer(req, res) {
        const id = req.query.id;
        const customer = await db.query('SELECT * FROM customers WHERE id = $1', [id]);
        res.json(customer.rows[0]);
    }
    async updateCustomer(req, res) {
        const id = req.params.id;
        const { name, surname, address, city, post_code, email, phone, password, username } = req.body;
        const customer = await db.query('UPDATE customers SET name = $1, surname = $2, address = $3, city = $4, post_code = $5, email = $6, phone = $7, password = $8, username = $9 WHERE id = $10 RETURNING *', [name, surname, address, city, post_code, email, phone, password, username, id]);
        res.json(customer.rows[0]);
    }
    async deleteUser(req, res) {
        const id = req.params.id;
        const customer = await db.query('DELETE FROM customers WHERE id = $1', [id]);
        res.json(customer.rows[0]);
    }

};

module.exports = new CustomerController();
