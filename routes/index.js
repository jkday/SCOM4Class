var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'CET4811 Display Page' });
    //res.render('index2.ejs', { title: 'CET4811 Accepting DataPoints from User Input' });
});

module.exports = router;