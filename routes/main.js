const express = require('express')
const router = express.Router()

/*Here you can write all app.get and app.post as router.get and router.post */

router.get('/', function(req, res) {
    res.render('index', {Id: req.session.Id ? req.session.Id : null});
});

router.get('/login', function(req, res) {
    req.session.Id = Math.round(Math.random() * 100);
    res.redirect('/');
});

router.get('/logout', function(req, res) {
    delete req.session.Id
    res.redirect('/');
});

module.exports = router;