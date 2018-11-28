function tt() {
    var ctx = document.getElementById("myChart").getContext('2d');
    var scatterChart = new Chart(ctx, {
        type: 'scatter',
       data: {
          labels: ['"Bbibbi" by IU', '"Sorry" by Young Da Il', '"Hello Tutorial" by Zion. T', '"Fall in Fall" by VIBE', '"There Has Never Been A Day I Haven\'t Loved You" by Im Chang Jung', '"Good Day" by Loopy x Kid Milli x pH - 1', '"It Takes Time" by LOCO', '"Save" by Loopy', '"Every Day, Every Moment" by Paul Kim', '"Way Back Home" by SHAUN'],
          datasets: [{
             label: 'Major K-Pop Chords',
             backgroundColor: '#4688f1',
             data: [{
                    x: 0.15,
                    y: 1
                }, {
                    x: 0.19791666666666666,
                    y: 2
                }, {
                    x: 0.3333333333333333,
                    y: 3
                }, {
                    x: 0.16551724137931034,
                    y: 4
                }, {
                    x: 0.21153846153846154,
                    y: 5
                }, {
                    x: 0.08176100628930817,
                    y: 6
                }, {
                    x: 0.15079365079365079,
                    y: 7
                }, {
                    x: 0.06565656565656566,
                    y: 8
                }, {
                    x: 0.08247422680412371,
                    y: 9
                }, {
                    x: 0.030864197530864196,
                    y: 10
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
          }
       }
    });
}