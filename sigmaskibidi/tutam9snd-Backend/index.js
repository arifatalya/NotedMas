const express = require('express');
const dotenv = require('dotenv');
const app = express();
const { connectDB, Pool }  = require('./connect_db.js');
const PORT = process.env.PORT
const routes = require("./routes/routes.js");

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}).catch(err => {
    console.error('Failed to connect to the database:', err);
});