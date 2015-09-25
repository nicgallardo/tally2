var express = require('express');
var router = express.Router();
var sortedData = require('../pollData')

router.get('/polls', function(req, res, next) {
  res.render('polls/index', { title: 'Tally' });
});

router.get('/polls/new', function(req, res, next) {
  res.render('polls/new', { title: 'Tally'});
});


module.exports = router;
