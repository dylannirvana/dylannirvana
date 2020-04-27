const express = require('express');
const router = express.Router();

// GET users
router.get('/users', (req, res, next) => {
    res.send('respond with a resourse');
});

module.exports = router;