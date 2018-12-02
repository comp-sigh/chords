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
                   '"Way Back Home" by SHAUN',
                   '"Goodbye Road" by iKON',
                   '"The Hardest Part" by Roy Kim',
                   '"Beautiful Moment" by K.Will',
                   '"Siren" by Sunmi',
                   '"Love, ing" by Ben',
                   '"Good Bye" by Punch',
                   '"IDOL" by BTS',
                   '"Saim Saim" by Coogie, SUPERBEE, D.Ark',
                   '"Falling in Love" by Davichi',
                   '"flex" by GIRIBOY, Kid Milli, NO:EL, Swings',
                   '"DDU-DU DDU-DU" by BLACKPINK',
                   '"IndiGO" by JUSTHIS, Kid Milli, NO:EL, Young B',
                   '"Shoot Out" by MONSTA X',
                   '"Friend" by BTOB',
                   '"Travel" by BOL4'
                  ],
          datasets: [{
             label: 'Major K-Pop Chords',
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
                    {x: 35, y: 0.07
             }]
          },
          {
             label: 'Major Pop Chords',
             backgroundColor: '#ff9999',
             pointRadius: 5,
             pointHoverRadius: 8,
             data: [{x: 1, y: 0.22}, 
                    {x: 2, y: 0.20}, 
                    {x: 3, y: 0.33}, 
                    {x: 4, y: 0.13},
                    {x: 5, y: 0.21}, 
                    {x: 6, y: 0.38}, 
                    {x: 7, y: 0.15}, 
                    {x: 8, y: 0.37}, 
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
                    {x: 35, y: 0.07
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