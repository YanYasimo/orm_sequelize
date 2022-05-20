import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res
        .status(200)
        .send({
            message: 'Welcome to the API'
        });
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

module.exports = app;