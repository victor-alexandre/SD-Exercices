var express = require('express');
var router = express.Router();
var loginWithToken = require('./jsonwebtoken');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET users listing. */
router.post('/login', loginWithToken);

module.exports = router;
