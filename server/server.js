const express = require('express');
const dotenv = require("dotenv");
const morgan = require('morgan');

const app = express();
dotenv.config();

app.use(morgan());

app.get('/', (req, res) => {
    res.json({
        success: true
    })
})

const port = process.env.PORT || 3000;
app.listen(port, console.log(`Server started on port ${port}`));