function kpopMajor() {
    google.charts.load('current', {'packages':['bar']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Chord Progression', 'Frequency'],
      ['I V iii I', 66],
      ['V iii I V', 60],
      ['iii I V iii', 57],
      ['IV I V vi', 38],
      ['I V vi IV', 37],
      ['V vi IV I', 37],
      ['vi IV I V', 35],
      ['I V I V', 30],
      ['IV I ii I', 26],
      ['I IV I ii', 26],
      ['V I V I', 23],
      ['I IV I IV', 22]
    ]);

    var options = {
      chart: {
        title: 'Frequencies of Chord Progressions',
        subtitle: '(Pop songs)',
      },
      bars: 'vertical',
      vAxis: {format: 'decimal'},
      height:450,
      colors: ['ffb3b3']
    };

    var chart = new google.charts.Bar(document.getElementById('theChart'));

    chart.draw(data, google.charts.Bar.convertOptions(options));
    }
}

function kpopMajor() {
    google.charts.load('current', {'packages':['bar']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Chord Progression', 'Frequency'],
      ['I V iii I', 66],
      ['V iii I V', 60],
      ['iii I V iii', 57],
      ['IV I V vi', 38],
      ['I V vi IV', 37],
      ['V vi IV I', 37],
      ['vi IV I V', 35],
      ['I V I V', 30],
      ['IV I ii I', 26],
      ['I IV I ii', 26],
      ['V I V I', 23],
      ['I IV I IV', 22],
      ['ii I vi ii', 21],
      ['I vi ii I', 21],
      ['IV I IV I', 21],
      ['ii I IV I', 19],
      ['I IV ii I', 19],
      ['I ii I IV', 19],
      ['IV V I vi', 18],
      ['V I vi IV', 17],
      ['I vi I IV', 15],
      ['I vi IV V', 14],
      ['I I IV I', 14],
      ['ii I IV ii', 14],
      ['vi ii I vi', 13],
      ['V I V iii', 12],
      ['I vi IV I', 12],
      ['vi IV V I', 12],
      ['I ii IV I', 12],
      ['I iii IV I', 11],
      ['I ii I I', 11],
      ['IV I vi IV', 10],
      ['IV ii I IV', 10],
      ['ii I ii I', 10],
      ['IV I ii IV', 10],
      ['ii I I IV', 9],
      ['I ii I vi', 9],
      ['ii IV I vi', 9],
      ['iii I V I', 9],
      ['vi I IV I', 9]
    ]);

    var options = {
      chart: {
        title: 'Frequencies of Chord Progressions',
        subtitle: '(Pop songs)',
      },
      bars: 'vertical',
      vAxis: {format: 'decimal'},
      height:450,
      legend: {position:'top'},
      colors: ['ffb3b3']
    };

    var chart = new google.charts.Bar(document.getElementById('theChart'));

    chart.draw(data, google.charts.Bar.convertOptions(options));
    }
}