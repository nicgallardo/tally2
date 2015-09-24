$(function () {

    $(document).ready(function () {

        // Build the chart
        $('#container').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Browser market shares January, 2015 to May, 2015'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                name: "Brands",
                colorByPoint: true,
                data: [ { name: 'Kasich', y: 27 },
  { name: 'Trump', y: 21 },
  { name: 'Cruz', y: 7 },
  { name: 'Rubio', y: 7 },
  { name: 'Carson', y: 6 },
  { name: 'Bush', y: 5 },
  { name: 'Fiorina', y: 5 },
  { name: 'Huckabee', y: 3 },
  { name: 'Paul', y: 2 },
  { name: 'Santorum', y: 2 },
  { name: 'Walker', y: 2 },
  { name: 'Christie', y: 1 },
  { name: 'Undecided', y: 11 } ]
            }]
        });
    });
});
