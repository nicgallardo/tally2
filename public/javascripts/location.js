var latitude, longitude;
$(document).ready(function(){
  $( ".location" ).click(function() {

    function success(position) {
      latitude  = position.coords.latitude;
      longitude = position.coords.longitude;
      getStats(longitude, latitude);
    };

    function error() {
      output.innerHTML = "Unable to retrieve your location";
    };

    navigator.geolocation.getCurrentPosition(success, error);

    function getStats(long, lat){
      console.log("long", long);
      console.log("lat", lat);
      window.location.href = "/index/"+ long + "&" + lat;
    }
  })
})
