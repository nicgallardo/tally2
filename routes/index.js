var express = require('express');
var router = express.Router();
var sortedData = require('../q2Contributions')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/q2Contributions', function(req, res, next) {
  console.log(sortedData)
  res.send(sortedData)
});
module.exports = router;
