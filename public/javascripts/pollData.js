
var pollArray;
var creatSubArrays = [];
var currentPollTitle = "";
var candidateAndValue = [];
var allTitles = [];
var output = [];
var latest_data = [];
var currentPolls = [];
var searchString = "";


// var titleSearch = //"2016 Ohio Republican Presidential Primary" whatever the input of the selection made on polls page;


var callback = '?callback=pollsterPoll';

window.pollsterPoll = function(incoming_data){
    latest_data = incoming_data;
    allTitle(latest_data);
};

$(document).ready(function(){
    $.ajax({
        url: "http://elections.huffingtonpost.com/pollster/api/charts" + callback,
        dataType: 'script',
        type: 'GET',
        cache: true,
    });
});
function pollsterCallback() {
  debugger
}
function pollsterChart() {
  debugger
}
function pollsterPoll() {
  debugger
}
//this pulls out all the titles for the jade loop iteration
function allTitle (data){
  for(var i = 0; i < data.length; i++){
    allTitles.push(data[i].title);
  }
};

$(window).load(function () {
  for(var i = 0; i <allTitles.length; i++){
    $("#titles").append("<option>"+ allTitles[i] + "</option>");
  }
  $( "#submitString" ).click(function() {
    var string = $("#titles").val();
    searchString = string;
    createGraphData(latest_data, searchString);
  });
});

function createGraphData(data, searchString){
  for(var i = 0; i <data.length; i++){
    if(data[i].title.indexOf(searchString) > -1){
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
};
