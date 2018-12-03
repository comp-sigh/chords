function popMajor() {
    google.charts.load('current', {'packages':['bar']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Chord Progression', 'Frequency'],
      ['I V iii I', 66],
      ['V iii I V', 60],
      ['iii I V iii', 57],
      ['IV I V vi', 38],
      ['I V vi IV', 37]
    ]);

    var options = {
      chart: {
        title: 'Frequencies of Chord Progressions',
        subtitle: '(Pop songs)',
      }
    };

    var chart = new google.charts.Bar(document.getElementById('theChart'));

    chart.draw(data, google.charts.Bar.convertOptions(options));
    }
}