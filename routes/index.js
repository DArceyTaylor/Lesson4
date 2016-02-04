var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express on Azure' });
});
//Get About page
router.get('/About', function(req, res, next) {
  res.render('index', { title: 'About Me' });
});
//Get Contact page
router.get('/Contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});

module.exports = router;
