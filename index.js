const express = require('express');
const toysRouter = require('./routes/toys.routes');
const customerRouter = require('./routes/customers.routes');
const orderRouter = require('./routes/orders.routes');
const shipperRouter = require('./routes/shippers.routes');
const productsInBasketsRouter = require('./routes/products_in_baskets.routes');
const paymentRouter = require('./routes/payment.routes');
const authRoutes = require('./routes/auth.routes');


const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use('/', toysRouter);
app.use('/', customerRouter);
app.use('/', orderRouter);
app.use('/', shipperRouter);
app.use('/', productsInBasketsRouter);
app.use('/', paymentRouter);
//authentication
app.use('/', authRoutes);



app.listen(PORT, () => console.log(`server started on port ${PORT}`));


