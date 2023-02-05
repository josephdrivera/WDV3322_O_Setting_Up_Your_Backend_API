const express = require('express');
const router = express.Router();
const userCtlr = require('../controllers/users');

// Path: api/routes/users.js
// Compare this snippet from index.js:
router.post('/signup', userCtlr.signup);


module.exports = router;
