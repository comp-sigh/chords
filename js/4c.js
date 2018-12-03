function fourChords() {
    var div = document.getElementById("second");
    div.style.display = "none";
    
    var div2 = document.getElementById("first");
    div2.style.width = "100%";
    
    var ctx = document.getElementById("myChart").getContext('2d');
    var barChart = new Chart(ctx, {
        type: 'bar',
        label: '4 Chord Progression Frequencies',
        data: { 
            labels: [
                'I V iii I',
                'V iii I V',
                'iii I V iii',
                'IV I V vi',
                'I V vi IV'
            ],
            datasets: [
                66,
                60,
                57,
                38,
                37
            ]}
    });
}