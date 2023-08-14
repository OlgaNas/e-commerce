const express = require('express');
const toysRouter = require('./routes/toys.routes');
const customerRouter = require('./routes/customers.routes');
const orderRouter = require('./routes/orders.routes');
const shipperRouter = require('./routes/shippers.routes')


const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use('/', toysRouter);
app.use('/', customerRouter);
app.use('/', orderRouter);
app.use('/', shipperRouter);

app.listen(PORT, () => console.log(`server started on port ${PORT}`));