const pool = require('../db/db');

class BasketController {
    async getProductsInBasket(req, res) {
        const id = req.query.id;
        const products = await pool.query('SELECT basket.customer_id, products_in_baskets.toy_id, products_in_baskets.quantity, toys.name, toys.price, toys.image FROM basket INNER JOIN products_in_baskets ON basket.id = products_in_baskets.basket_id INNER JOIN toys ON products_in_baskets.toy_id = toys.id WHERE basket.id =$1', [id]);
        console.log(products);
        res.render("basket.ejs", { products: products.rows });
    }

};

module.exports = new BasketController();