var express = require('express');
var router = express.Router();
var sortedData = require('../q2Contributions')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tally' });
});

router.get('/presi', function(req, res, next) {
  res.render('presi', {title: 'Tally'})
});

router.get('/polls', function(req, res, next){
  res.render('polls', {title: '2016 Presidential Polls'})
});


router.get('/q2Contributions', function(req, res, next) {
  console.log(sortedData)
  res.send(sortedData)
});

router.get('/polldata', function(req, res, next){
  console.log(output)
  res.send(output)
})

module.exports = router;
