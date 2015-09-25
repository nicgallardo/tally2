
var pollArray;
var creatSubArrays = [];
var currentPollTitle = "";
var candidateAndValue = [];
var allTitles = [];
// var titleSearch = //"2016 Ohio Republican Presidential Primary" whatever the input of the selection made on polls page;


var callback = '?callback=pollsterPoll',
    latest_data;

window.pollsterPoll = function(incoming_data){
    latest_data = incoming_data;
    // createGraphData(latest_data);
    allTitle(latest_data);
};

$(document).ready(function(){
    $.ajax({
        url: "http://elections.huffingtonpost.com/pollster/api/charts" + callback,
        dataType: 'script',
        type: 'GET',
        cache: true,
        success: function(data) {

        }
    });
});
//the three functions below do something...maybe?
function pollsterCallback() {
  debugger
}
function pollsterChart() {
  debugger
}
function pollsterPoll() {
  debugger
}
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
};
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

});
