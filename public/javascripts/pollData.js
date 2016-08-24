
var pollArray;
var creatSubArrays = [];
var currentPollTitle = "";
var candidateAndValue = [];
var allTitles = [];
var output = [];
var latest_data = [];
var currentPolls = [];
var searchString = "";
var finalOutput;
var objData;

var callback = '?callback=pollsterPoll';

window.pollsterPoll = function(incoming_data){
    console.log(incoming_data);
    latest_data = incoming_data;
    allTitle(latest_data);
};

$(document).ready(function(){
    $.ajax({
        url: "https://elections.huffingtonpost.com/pollster/api/charts" + callback,
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

function allTitle (data){
  for(var i = 0; i < data.length; i++){
    allTitles.push(data[i].title);
  }
};

$(window).load(function () {
  var string;
  for(var i = 0; i <allTitles.length; i++){
    $("#titles").append("<option>"+ allTitles[i] + "</option>");
  }
  $( "#titles" ).change(function() {
    string = $("#titles").val();
    window.location.href = "/headline/"+ string;
  });

  if(window.location.pathname.length > 30){
    console.log('RAN ')
    var pathSearchString = window.location.pathname.split('/').pop().split("%20").join(' ')
    createGraphData(latest_data, pathSearchString);
  }




});




function createGraphData(data, searchString){
  objData = {};
  for(var i = 0; i <data.length; i++){
    if(data[i].title.indexOf(searchString) > -1){
      currentPolls.push(data[i].estimates);
      currentPollTitle = data[i].title
    }
  }

  for(var i = 0; i < currentPolls[0].length; i++){
    finalOutput = {};
    finalOutput["name"] = currentPolls[0][i].choice;
    finalOutput["y"] = Number(currentPolls[0][i].value);
    output.push(finalOutput);
    // console.log("output", output);
  }
  fireChart(output)
  currentPolls = [];
  output = [];
};

function fireChart(graphData){
  console.log("graphData",graphData);
  $(function () {
      $('#container').highcharts({
          chart: {
              plotBackgroundColor: null,
              plotBorderWidth: null,
              plotShadow: false,
              type: 'pie'
          },
          title: {
              text: searchString
          },
          tooltip: {
              pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
          },
          plotOptions: {
              pie: {
                  allowPointSelect: true,
                  cursor: 'pointer',
                  dataLabels: {
                      enabled: true,
                      format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                      style: {
                          color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                      }
                  }
              }
          },
          series: [{
              name: "Brands",
              colorByPoint: true,
              data: graphData,
          }]
      });
  });
};
