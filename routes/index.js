const express = require('express');
const router = express.Router();

// GET home
router.get('/', (req, res) => {
    app.render('index', { title: 'Versatile Tone Group' })
});

module.exports = router;