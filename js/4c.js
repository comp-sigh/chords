function kpopMajor() {
    google.charts.load('current', {'packages':['bar']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Chord Progression', 'Frequency'],
      ['V I iii V', 79],
      ['I iii V I', 79],
      ['iii V I iii', 77],
      ['I vi IV I', 46],
      ['vi IV I V', 45],
      ['IV I vi IV', 44],
      ['vi IV I vi', 43],
      ['V vi IV I', 42],
      ['I V vi IV', 42],
      ['ii I ii I', 40],
      ['IV I V vi', 40],
      ['I ii I ii', 30],
      ['iii I iii I', 27],
      ['I ii I IV', 26],
      ['ii I IV I', 25],
      ['I iii I iii', 25],
      ['I IV I IV', 22],
      ['vi V IV I', 18],
      ['I V ii vi', 17],
      ['ii vi I V', 17],
      ['V ii vi I', 17],
      ['ii I IV vi', 16],
      ['IV I ii I', 16],
      ['I IV I ii', 16],
      ['IV I IV I', 16],
      ['I IV vi ii', 16],
      ['IV vi ii I', 15],
      ['I I I I', 14],
      ['vi ii I IV', 14],
      ['I vi V IV', 14],
      ['V I iii I', 14],
      ['V IV I vi', 13],
      ['vi I V ii', 13],
      ['IV I vi V', 13],
      ['vi I V IV', 13],
      ['I IV ii I', 12],
      ['I V I iii', 11],
      ['IV vi I V', 11],
      ['I V IV vi', 11],
      ['V IV vi I', 11],
      ['I iii I vi', 10],
      ['IV ii I ii', 10],
      ['IV vi IV I', 8],
      ['vi IV I IV', 8],
      ['IV I IV vi', 8],
      ['IV I IV ii', 8],
      ['iii I V I', 7],
      ['I IV vi IV', 7],
      ['IV I vi iii', 6],
      ['I iii I V', 6],
      ['iii I vi V', 6],
      ['I vi V I', 6]
    ]);

    var options = {
      chart: {
        title: 'Frequencies of Chord Progressions',
        subtitle: '(Pop songs, Major chords)',
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
        subtitle: '(K-Pop songs, Major chords)',
      },
      bars: 'vertical',
      vAxis: {format: 'decimal'},
      height:450,
      legend: {position:'top'},
      colors: ['4688f1']
    };

    var chart = new google.charts.Bar(document.getElementById('theChart'));

    chart.draw(data, google.charts.Bar.convertOptions(options));
    }
}