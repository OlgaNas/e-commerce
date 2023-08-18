const { pool } = require('../db/db');
const bcrypt = require('bcrypt');
const passport = require('passport');



class CustomerController {
    //get
    async login(req, res) {
        res.render('login.ejs')
    }
    //post
    async loginUser(req, res, next) {
        passport.authenticate('local', {
            successRedirect: '/dashboard',
            failureRedirect: '/login',
            failureFlash: true
        })(req, res, next);
    };
    //get
    async registerPage(req, res) {
        res.render('register.ejs')
    }
    //post
    async register(req, res) {
        const { name, surname, address, city, postcode, email, password, phone, username } = req.body;

        let errors = [];
        if (!name || !surname || !address || !city || !postcode || !email || !password || !username) {
            errors.push({ message: 'Please enter all fields' });
        }

        if (password.length < 3) {
            errors.push({ message: 'Password should be at least 3 characters long' });
        }

        if (errors.length > 0) {
            res.render('register.ejs', { errors });
        } else {
            // Validation has passed
            const hashedPassword = await bcrypt.hash(password, 10);

            try {
                const queryResult = await pool.query('SELECT * FROM customers WHERE username = $1', [username]);
                const existingUser = queryResult.rows[0];

                if (existingUser) {
                    errors.push({ message: 'Username already registered' });
                    res.render('register.ejs', { errors });
                } else {
                    // Insert new user into the database
                    pool.query(`INSERT INTO customers (name, surname, address, city, postcode, email, phone, password, username) 
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
                    RETURNING id, password`, [name, surname, address, city, postcode, email, phone, hashedPassword, username],
                        (err, results) => {
                            if (err) {
                                throw err;
                            }
                            console.log(results.rows);
                            req.flash('success_msg', 'You are now registered. Please log in');
                            res.redirect('/login');
                        });


                }
            } catch (error) {
                console.error(error);
                // Handle error scenarios here
                res.render('register.ejs', { errors: [{ message: 'An error occurred' }] });
            }
        }
    }


    async dashboard(req, res) {
        res.render('dashboard.ejs', { user: req.user.name })
    }

    async getOneCustomer(req, res) {
        const id = req.query.id;
        const customer = await db.query('SELECT * FROM customers WHERE id = $1', [id]);
        res.json(customer.rows[0]);
    }
    async updateCustomer(req, res) {
        const id = req.params.id;
        const { name, surname, address, city, postcode, email, phone, password, username } = req.body;
        const customer = await db.query('UPDATE customers SET name = $1, surname = $2, address = $3, city = $4, postcode = $5, email = $6, phone = $7, password = $8, username = $9 WHERE id = $10 RETURNING *', [name, surname, address, city, postcode, email, phone, password, username, id]);
        res.json(customer.rows[0]);
    }
    async deleteUser(req, res) {
        const id = req.params.id;
        const customer = await db.query('DELETE FROM customers WHERE id = $1', [id]);
        res.json(customer.rows[0]);
    }
};


module.exports = new CustomerController();
