const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { logger } = require('./src/middleware/logger');

dotenv.config()

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use(logger)

app.use('/api/search', require('./src/routes/search.routes'))
app.use('/api/detail', require('./src/routes/detail.routes'))

app.get('/', (req, res, next) => {
    res.send('hello world');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
});

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send({
        status: 500,
        message: err.message,
        body: {}
    });
})