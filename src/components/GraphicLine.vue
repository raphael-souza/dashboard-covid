<script>
  import { Line } from 'vue-chartjs';

  export default {

    extends: Line,
    props: [
      "date",
      "casesConfirmed"
    ],
    data () {
      return {
        datacollection: {
          //Data to be represented on x-axis
          labels: this.date,
          datasets: [
            {
              label: 'Casos Confirmados',
              backgroundColor: "#05CBE1",
              borderColor: "#248EA6",
              pointBackgroundColor: 'white',
              borderWidth: 2,
              pointBorderColor: "rgba(171, 71, 188, 1)",
              //Data to be represented on y-axis
              data: this.casesConfirmed
            }
          ]
        },
        //Chart.js options that controls the appearance of the chart
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
                label: false
              },
              gridLines: {
                display: false
              }
            }],
            xAxes: [ {
              gridLines: {
                display: true
              },
              display: false
            }]
          },
          legend: {
            display: false
          },
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    mounted () {
      //renderChart function renders the chart with the datacollection and options object.
      console.log(`start plot graphic whit data `);
      this.renderChart(this.datacollection, this.options)
    }
  }
</script>