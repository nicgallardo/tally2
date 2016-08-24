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
  unirest.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + searchString + '&api-key=' + process.env.NYTIMES_API_NEWS)
  .end(function (response){
    var obj;
    var headlines = response.body.response.docs;
    if(headlines.length > 0){
      res.render('polls', {headlines: headlines, searchString: req.params.string })
    }else{
      res.render('polls', {failure: true, searchString: req.params.string})
    }
  })
})

router.get("/index/:string", function(req, res){
  // var toArray = req.params.string.split("&");
  // var long = toArray[0];
  // var lat = toArray[1];
  //
  // var getNews = new Promise(function(resolve, reject) {
  //   unirest.get("http://api.nytimes.com/svc/topstories/v1/national.json?api-key=")
  //     .end(function(response){
  //       newsJSON = JSON.parse(response.body)
  //       resolve(newsJSON);
  //   });
  // });
  // getNews.then(function(value){
  //   unirest.get("http://api.openweathermap.org/data/2.5/forecast?lat="+ lat+"&lon="+long+"&appid=2de143494c0b295cca9337e1e96b00e0")
  //   .end(function (response){
  //     var city = response.body.city.name;
  //     var tempNow = ((response.body.list[0].main.temp *  9/5) - 459.67).toString().split('.');
  //     var currentTemp = tempNow[0].toString()
  //     var condition = response.body.list[0].weather[0];
  //     console.log(value.results[1]);
  //     res.render('index', {long: long, lat: lat, city: city, currentTemp: currentTemp, condition: condition, news: value.results})
  //   })
  // })
})
module.exports = router;
