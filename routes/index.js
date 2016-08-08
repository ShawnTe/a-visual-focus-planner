var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'A Visual Guide' });
});

/* GET Hello World page*/
router.get('/helloworld', function(req, res, next) {
  res.render('hello', { title: 'Hello Sharon and Simone!'});
});

module.exports = router;
