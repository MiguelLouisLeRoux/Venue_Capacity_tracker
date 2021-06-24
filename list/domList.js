const ctr = document.getElementById("theChart").getContext('2d');

Chart.defaults.font.size = 20;
Chart.defaults.font.color = 'black';

let graph = new Chart (ctr, {
    type: 'doughnut',
    data: {
        labels: ['Occupied', 'Vacant'],
        datasets: [{
            label: '# of Votes',
            fontWeight: 'bold',
            data: [0, 100],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                // 'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                // 'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 3,
            
        }]
    },
    options: {
        scale: {
            pointLabels :{
            fontStyle: "bolder",
            }
        }
    }
});