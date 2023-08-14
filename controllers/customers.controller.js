const db = require('../db/db');

class CustomerController {
    async createCustomer(req, res) {
        const { name, surname, address, city, post_code, email, phone, password } = req.body;
        const newCustomer = await db.query('INSERT INTO customers (name, surname, address, city, post_code, email, phone, password) values ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *', [name, surname, address, city, post_code, email, phone, password])
        res.json(newCustomer.rows[0]);
    }

    async getOneCustomer(req, res) {
        const id = req.params.id;
        const customer = await db.query('SELECT * FROM customers WHERE id = $1', [id]);
        res.json(customer.rows[0]);
    }
    async updateCustomer(req, res) {
        const { id, name, surname, address, city, post_code, email, phone, password } = req.body;
        const customer = await db.query('UPDATE customers SET name = $1, surname = $2, address = $3, city = $4, post_code = $5, email = $6, phone = $7, password = $8 WHERE id = $9 RETURNING *', [name, surname, address, city, post_code, email, phone, password, id]);
        res.json(customer.rows[0]);
    }
    async deleteUser(req, res) {
        const id = req.params.id;
        const customer = await db.query('DELETE FROM customers WHERE id = $1', [id]);
        res.json(customer.rows[0]);
    }

};

module.exports = new CustomerController();
