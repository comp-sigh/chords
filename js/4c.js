function fourChords() {
    var div = document.getElementById("second");
    div.style.display = "none";
    
    var ctx = document.getElementById("myChart").getContext('2d');
    var barChart = new Chart(ctx, {
        type: 'bar',
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
			datasets: [{
				label: 'Dataset 1',
				backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
				borderColor: window.chartColors.red,
				borderWidth: 1,
				data: [
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor()
				]
			}, {
				label: 'Dataset 2',
				backgroundColor: color(window.chartColors.blue).alpha(0.5).rgbString(),
				borderColor: window.chartColors.blue,
				borderWidth: 1,
				data: [
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor()
				]
			}]

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