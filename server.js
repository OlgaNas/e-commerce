const express = require('express');
const toysRouter = require('./routes/toys.routes');
const customerRouter = require('./routes/customers.routes');
const orderRouter = require('./routes/orders.routes');
const shipperRouter = require('./routes/shippers.routes');
const productsInBasketsRouter = require('./routes/products_in_baskets.routes');
const paymentRouter = require('./routes/payment.routes');
const session = require('express-session');
const flash = require('express-flash');
const passport = require('passport');

const initializePassport = require("./controllers/authontication/passport-config");
initializePassport(passport);




const app = express();
const PORT = process.env.PORT || 8080;

app.set('view-engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(express.json());
app.use('/', toysRouter);
app.use('/', customerRouter);
app.use('/', orderRouter);
app.use('/', shipperRouter);
app.use('/', productsInBasketsRouter);
app.use('/', paymentRouter);






app.listen(PORT, () => console.log(`server started on port ${PORT}`));


