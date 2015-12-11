
$(document).ready(function(){
  var data;
  $.get( "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=2016+election&sort=newest&api-key=fd0d43f08f5e8a92c8d37ca7227bb48c:13:73728841", function( data ) {
    data = data.response.docs;
  
  })
});
