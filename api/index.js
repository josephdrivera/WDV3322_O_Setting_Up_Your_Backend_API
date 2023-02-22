const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const app = express();
const route = require('./routes/users');
const swaggerDocument = require('./swagger.json');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerDocument));

app.use(route);

app.listen(3000);