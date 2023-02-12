const express = require('express');
const router = express.Router();
const userCtlr = require('../controllers/users');
const { email, phone, birthday, password } = require('@josephdrivera/utils');

// Path: api/routes/users.js
// Compare this snippet from index.js:


router.post('/signup', email, phone, birthday, password, userCtlr.signup);


module.exports = router;
