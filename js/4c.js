function fourChords() {
    var div = document.getElementById("second");
    div.style.display = "none";
    
    var div2 = document.getElementById("first");
    div2.style.width = "100%";
    
    var ctx = document.getElementById("myChart").getContext('2d');
    var barChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [
            'I V iii I',
            'V iii I V',
            'iii I V iii',
            'IV I V vi',
            'I V vi IV'
        ],
        datasets: [{
            label: '4 Chord Progression Frequencies',
            data: [
                66,
                60,
                57,
                38,
                37
            ]
        }],
        borderWidth: 1,
        backgroundColor: '#b3b3ff',
        borderColor: '#6666ff'
      },
      options: {
          title: {
              display: true,
              text: 'Frequency of 4 Chord Progressions'
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