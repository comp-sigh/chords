function fourChords() {
    var div = document.getElementById("second");
    div.style.display = "none";
    
    var div2 = document.getElementById("first");
    div2.style.width = "100%";
    
    var ctx = document.getElementById("myChart").getContext('2d');
    var barChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],
        datasets: [{
            label: 'Density of Planets (kg/m3)',
            data: [5427, 5243, 5514, 3933, 1326, 687, 1271, 1638]
        }]
  }
});
}