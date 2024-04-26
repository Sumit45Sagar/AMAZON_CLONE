const express = require('express');
const productsRouter = require('./routes/productsRoutes.js');
const usersRouter = require('./routes/usersRoutes.js');
const reviewsRouter = require('./routes/reviewsRoutes.js');
const app = express();
const mongoose = require('mongoose');


app.use(express.json());
app.use('/api/products', productsRouter);
app.use('/api/users', usersRouter);
app.use('/api/reviews', reviewsRouter);


const url = 'mongodb+srv://$_USERNAME_$:$_PASSWORD_$@cluster0.astgdqa.mongodb.net/$_DB_NAME$?retryWrites=true&w=majority&appName=Cluster0';

const databaseUser = 'sagarsumit472';
const databasePassword = 'abcd123';
const databaseName = 'Amazon-Backend';

let dbLink = url.replace('$_USERNAME_$', databaseUser);
dbLink = dbLink.replace('$_PASSWORD_$', databasePassword);
dbLink = dbLink.replace('$_DB_NAME$', databaseName);

mongoose.connect(dbLink)
  .then(() => console.log('----------------Connected!----------------'));

app.listen(1400, () => {
  console.log('---------------App Started!---------------');
});