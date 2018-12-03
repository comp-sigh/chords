function cc() {
    var div = document.getElementById("second");
    div.style.display = "inline-block";
    
    var div2 = document.getElementById("first");
    div2.style.width = "50%";
    
    var ctx = document.getElementById("myChart").getContext('2d');
    var scatterChart = new Chart(ctx, {
        type: 'scatter',
       data: {
          labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25'],
          datasets: [
          {
             label: 'Pop Songs',
             backgroundColor: '#ff9999',
             pointRadius: 5,
             pointHoverRadius: 8,
             data: [{x: 1, y: 0.22}, 
                    {x: 2, y: 0.00}, 
                    {x: 3, y: 0.13}, 
                    {x: 4, y: 0.23},
                    {x: 5, y: 0.45}, 
                    {x: 6, y: 0.28}, 
                    {x: 7, y: 0.12}, 
                    {x: 8, y: 0.85}, 
                    {x: 9, y: 0.25}, 
                    {x: 10, y: 0.71},
                    {x: 11, y: 0.32},
                    {x: 12, y: 0.26},
                    {x: 13, y: 0.00},
                    {x: 14, y: 0.14},
                    {x: 15, y: 0.29},
                    {x: 16, y: 0.17},
                    {x: 17, y: 0.00},
                    {x: 18, y: 0.16},
                    {x: 19, y: 0.26},
                    {x: 20, y: 0.00},
                    {x: 21, y: 0.39},
                    {x: 22, y: 0.48},
                    {x: 23, y: 0.12},
                    {x: 24, y: 0.35},
                    {x: 25, y: 0.23
             }]
          },
          {
             label: 'K-Pop Songs',
             backgroundColor: '#4688f1',
             pointRadius: 5,
             pointHoverRadius: 8,
             data: [{x: 1, y: 0.00}, 
                    {x: 2, y: 0.00}, 
                    {x: 3, y: 0.00}, 
                    {x: 4, y: 0.04},
                    {x: 5, y: 0.03}, 
                    {x: 6, y: 0.39}, 
                    {x: 7, y: 0.07}, 
                    {x: 8, y: 0.35}, 
                    {x: 9, y: 0.26}, 
                    {x: 10, y: 0.30},
                    {x: 11, y: 0.00},
                    {x: 12, y: 0.16},
                    {x: 13, y: 0.04},
                    {x: 14, y: 0.22},
                    {x: 15, y: 0.00},
                    {x: 16, y: 0.01},
                    {x: 17, y: 0.24},
                    {x: 18, y: 0.01},
                    {x: 19, y: 0.00},
                    {x: 20, y: 0.31},
                    {x: 21, y: 0.32},
                    {x: 22, y: 0.71},
                    {x: 23, y: 0.17},
                    {x: 24, y: 0.23},
                    {x: 25, y: 0.21}
          ]}]
       },
       options: {
          title: {
              display: true,
              text: 'Common Chord Frequencies of Pop and K-Pop Songs'
          },
          tooltips: {
             custom: function(tooltip) {
                if (!tooltip) return;
                // disable displaying the color box;
                tooltip.displayColors = false;
             },
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
                labelString: 'Frequency of Common Cords'
              }
            }]
          }
       }
    });
}