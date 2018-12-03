var ctx = document.getElementById("myChart").getContext('2d');
var scatterChart = new Chart(ctx, {
   type: 'scatter',
   data: {
      labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25'],
      datasets: [
      {
         label: 'Pop Chords',
         backgroundColor: '#ff9999',
         pointRadius: 5,
         pointHoverRadius: 8,
         data: [{x: 1, y: 0.05}, 
                {x: 2, y: 0.08}, 
                {x: 3, y: 0.04}, 
                {x: 4, y: 0.04},
                {x: 5, y: 0.09}, 
                {x: 6, y: 0.05}, 
                {x: 7, y: 0.08}, 
                {x: 8, y: 0.06}, 
                {x: 9, y: 0.06}, 
                {x: 10, y: 0.06},
                {x: 11, y: 0.03},
                {x: 12, y: 0.06},
                {x: 13, y: 0.14},
                {x: 14, y: 0.13},
                {x: 15, y: 0.06},
                {x: 16, y: 0.06},
                {x: 17, y: 0.12},
                {x: 18, y: 0.12},
                {x: 19, y: 0.05},
                {x: 20, y: 0.05},
                {x: 21, y: 0.04},
                {x: 22, y: 0.05},
                {x: 23, y: 0.07},
                {x: 24, y: 0.09},
                {x: 25, y: 0.08
         }]
      },
      {
         label: 'K-Pop Chords',
         backgroundColor: '#4688f1',
         pointRadius: 5,
         pointHoverRadius: 8,
         data: [{x: 1, y: 0.15}, 
                {x: 2, y: 0.20}, 
                {x: 3, y: 0.33}, 
                {x: 4, y: 0.17},
                {x: 5, y: 0.21}, 
                {x: 6, y: 0.08}, 
                {x: 7, y: 0.15}, 
                {x: 8, y: 0.07}, 
                {x: 9, y: 0.08}, 
                {x: 10, y: 0.03},
                {x: 11, y: 0.08},
                {x: 12, y: 0.15},
                {x: 13, y: 0.26},
                {x: 14, y: 0.09},
                {x: 15, y: 0.32},
                {x: 16, y: 0.15},
                {x: 17, y: 0.14},
                {x: 18, y: 0.11},
                {x: 19, y: 0.35},
                {x: 20, y: 0.05},
                {x: 21, y: 0.20},
                {x: 22, y: 0.10},
                {x: 23, y: 0.12},
                {x: 24, y: 0.03},
                {x: 25, y: 0.07}
      ]}]
   },
   options: {
      tooltips: {
         title: {
          display: true,
          text: 'Type Tokens of Pop and K-Pop Songs'
         },
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
            labelString: 'Type Token'
          }
        }]
      }
   }
});
