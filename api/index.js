const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const route = require('./routes/users');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(route);

app.listen(3000);