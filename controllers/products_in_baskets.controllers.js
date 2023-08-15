const db = require('../db/db');

class ProductsInBusketsController {
    async addProduct(req, res) {
        const { basket_id, toy_id, quantity } = req.body;
        const addedProduct = await db.query('INSERT INTO products_in_baskets (basket_id, toy_id, quantity) values ($1, $2, $3) RETURNING *', [basket_id, toy_id, quantity])
        res.json(addedProduct.rows[0]);
    }

    async getProductsInBuskets(req, res) {
        const id = req.query.id;
        const productsInBusket = await db.query('SELECT * FROM products_in_baskets WHERE basket_id = $1', [id]);
        res.json(productsInBusket.rows[0]);
    } //http://localhost:8080/productsInBusket?id=1



    async updateBasketProduct(req, res) {
        const { id, basket_id, toy_id, quantity } = req.body;
        const updatedProduct = await db.query('UPDATE products_in_baskets SET basket_id = $1, toy_id = $2, quantity = $3 WHERE id = $4 RETURNING *', [basket_id, toy_id, quantity, id]);
        res.json(updatedProduct.rows[0]);
    }

    async deleteProductFromBusket(req, res) {
        const product_id = req.params.id;
        const deleteProduct = await db.query('DELETE FROM products_in_baskets WHERE toy_id = $1', [product_id]);
        res.json(deleteProduct.rows[0]);
    }

};

module.exports = new ProductsInBusketsController();