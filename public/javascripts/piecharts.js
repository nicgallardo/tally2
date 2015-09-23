var final;
$.ajax({
  method: "GET",
  url: "/q2Contributions",
  dataType: "script",
  error: function(err, errorThrown){
    console.log("error test", errorThrown)
  },
  success: function (data){
    // console.log(data);
    final = JSON.parse(data);
    console.log(final);
    debugger;
    $('#container').highcharts({
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45
            }
        },
        title: {
            text: '2nd Quarter Contributions'
        },
        subtitle: {
            text: ''
        },
        plotOptions: {
            pie: {
                innerSize: 200,
                depth: 40
            }
        },
        series: [{
            name: 'Delivered amount',
            data: final
        }]
      })

  }
});
$(window).load(function () {
});
