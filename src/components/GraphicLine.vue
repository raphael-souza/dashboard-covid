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
        gradient: null,
        datacollection: {
          //Data to be represented on x-axis
          labels: this.date,
          datasets: [
            {
              label: 'Casos Confirmados',
              backgroundColor:" #05CBE1",
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
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }],
            xAxes: [ {
              gridLines: {
                display: true
              }
            }]
          },
          legend: {
            display: true
          },
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    mounted () {
      this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)

      this.gradient.addColorStop(0, "rgba(255, 0,0, 0.5)");
      this.gradient.addColorStop(0.5, "rgba(255, 0, 0, 0.25)");
      this.gradient.addColorStop(1, "rgba(255, 0, 0, 0)");

      //renderChart function renders the chart with the datacollection and options object.
      console.log(`start plot graphic whit data `);
      this.renderChart(this.datacollection, this.options)
    }
  }
</script>