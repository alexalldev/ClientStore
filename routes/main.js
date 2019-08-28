const express = require('express')
const router = express.Router()

/*Here you can write all app.get and app.post as router.get and router.post */

router.get('/', function(req, res, next) {
    res.render('index');
});

module.exports = router;