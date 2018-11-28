function tt() {
    var ctx = document.getElementById("myChart").getContext('2d');
    var scatterChart = new Chart(ctx, {
        type: 'scatter',
       data: {
          labels: ['"Bbibbi" by IU', 
                   '"Sorry" by Young Da Il', 
                   '"Hello Tutorial" by Zion. T', 
                   '"Fall in Fall" by VIBE', 
                   '"There Has Never Been A Day I Haven\'t Loved You" by Im Chang Jung', 
                   '"Good Day" by Loopy x Kid Milli x pH - 1', 
                   '"It Takes Time" by LOCO', '"Save" by Loopy', 
                   '"Save" by Loopy',
                   '"Every Day, Every Moment" by Paul Kim', 
                   '"Way Back Home" by SHAUN'],
          datasets: [{
             label: 'Major K-Pop Chords',
             backgroundColor: '#4688f1',
             pointRadius: 5,
             pointHoverRadius: 8,
             data: [{x: 1, y: 0.15}, 
                    {x: 2, y: 0.19791666666666666}, 
                    {x: 3, y: 0.3333333333333333}, 
                    {x: 4, y: 0.16551724137931034},
                    {x: 5, y: 0.21153846153846154}, 
                    {x: 6, y: 0.08176100628930817}, 
                    {x: 7, y: 0.15079365079365079}, 
                    {x: 8, y: 0.06565656565656566}, 
                    {x: 9, y: 0.08247422680412371}, 
                    {x: 10, y: 0.030864197530864196
             }]
          }]
       },
       options: {
          tooltips: {
             callbacks: {
                label: function(tooltipItem, data) {
                   var label = data.labels[tooltipItem.index];
                   return label + '\n(' + tooltipItem.xLabel + ', ' + tooltipItem.yLabel + ')';
                }
             }
          },
          scales: {
            xAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Chart Ranking'
              }
            }],
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Type Token'
              }
            }]
          }
       }
    });
}