var express = require('express');
var router = express.Router();
var unirest = require('unirest');
require('dotenv').load();

router.get('/', function(req, res, next){
  res.render('index', {title: "express"})
});

router.get('/polls', function(req, res, next){
  res.render('polls')
});

router.get("/headline/:string", function(req, res){

  var searchString = req.params.string.split(" ").join("+")
  console.log(searchString);
  unirest.get('http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + searchString + '&api-key=' + process.env.NYTIMES_API)
  .end(function (response){
    var headlines = response.body.response.docs
    console.log(headlines);
    res.render('polls', {headlines: headlines, searchString: req.params.string, })
  })
})

module.exports = router;
