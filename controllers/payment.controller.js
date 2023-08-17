const db = require('../db/db');

class PaymentController {
    async createPayment(req, res) {
        const { customer_id, card_number, card_exp_m, card_exp_y, name_on_card } = req.body;
        const newPayment = await db.query('INSERT INTO payment (customer_id, card_number, card_exp_m, card_exp_y,	name_on_card) values ($1, $2, $3, $4, $5) RETURNING *', [customer_id, card_number, card_exp_m, card_exp_y, name_on_card])
        res.json(newPayment.rows[0]);
    }

    async getOnePaymentByCustomer(req, res) {
        const customer_id = req.query.id;
        const payment = await db.query('SELECT * FROM payment WHERE customer_id = $1', [customer_id]);
        res.json(payment.rows[0]);
    }
    async updatePayment(req, res) {
        const id = req.params.id;
        const { customer_id, card_number, card_exp_m, card_exp_y, name_on_card } = req.body;
        const payment = await db.query('UPDATE payment SET customer_id = $1, card_number = $2, card_exp_m = $3, card_exp_y = $4, name_on_card = $5 WHERE id = $6 RETURNING *', [customer_id, card_number, card_exp_m, card_exp_y, name_on_card, id]);
        res.json(payment.rows[0]);
    }
    async deletePayment(req, res) {
        const id = req.params.id;
        const payment = await db.query('DELETE FROM payment WHERE id = $1', [id]);
        res.json(payment.rows[0]);
    }

};

module.exports = new PaymentController();