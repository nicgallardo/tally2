// var express = require('express');
// var router = express.Router();

var pollArray;
var creatSubArrays = [];
var currentPollTitle = "";
var candidateAndValue = [];
var allTitles = [];
var titleSearch = //"2016 Ohio Republican Presidential Primary" whatever the input of the selection made on polls page;
$.ajax({
  method: "GET",
  url: "http://elections.huffingtonpost.com/pollster/api/charts",
  dataType: "script",
  error: function(err, errorThrown){
    console.log("error test", errorThrown)
  },
  success: function (data){
    // console.log(data);
    pollArray = JSON.parse(data);
    console.log(data);
  }
  //this function will create the array of objects for the graph
  //titleSearch is the input from the selector created on the polls page
  function createGraphData(data){
    for(var i = 0; i <data.length; i++){
      if(data[i].title.indexOf(titleSearch) > -1){
        currentPolls.push(data[i].estimates);
        currentPollTitle = data[i].title
      }
    }
    for(var i = 0; i < currentPolls[0].length; i++){
      var finalOutput = {};
      finalOutput["name"] = currentPolls[0][i].choice;
      finalOutput["y"] = currentPolls[0][i].value;
      output.push(finalOutput);
    }
    //ouput is the array of objects needed for the graph!
  }
  createGraphData(pollData);
  //this pulls out all the titles for the jade loop iteration
  function allTitle (data){
    for(var i = 0; i < data.length; i++){
      allTitles.push(data[i].title);
    }
  }
  allTitle(pollData);

//this will create an array of titles to select from for the polls page selector


});
$(window).load(function () {
});

// module.exports = output;
// module.exports = allTitles;
