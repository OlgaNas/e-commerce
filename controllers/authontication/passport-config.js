const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const { pool } = require('../../db/db');



function initialize(passport) {
    const authenticateUser = (username, password, done) => {
        pool.query(
            `SELECT * FROM customers WHERE username = $1`,
            [username],
            (err, results) => {
                if (err) {
                    throw err;
                }

                console.log(results.rows);

                if (results.rows.length > 0) { //user in the dataase
                    const user = results.rows[0];

                    bcrypt.compare(password, user.password, (err, isMatch) => {
                        if (err) {
                            throw err
                        }
                        if (isMatch) {
                            return done(null, user);
                        } else {
                            return done(null, false, { message: 'Password is not correct' });
                        }
                    })
                } else {//no user in the database
                    return done(null, false, { message: 'Username is not registered' })
                }
            }
        )

    };
    passport.use(
        new LocalStrategy(authenticateUser)
    );

    passport.serializeUser((user, done) => done(null, user.id));
    passport.deserializeUser((id, done) => {
        pool.query(
            `SELECT * FROM customers WHERE id = $1`, [id], (err, results) => {
                if (err) {
                    throw err;
                }
                return done(null, results.rows[0]);
            });
    });



}



module.exports = initialize;