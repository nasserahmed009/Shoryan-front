<script>
import { Bar, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
  extends: Bar,
  mixins: [reactiveProp],
  props: {
    options: {
      type: Object
    }
  },
  data() {
    return {
      // options: {
      //   scales: {
      //     yAxes: [
      //       {
      //         ticks: {
      //           min: 0,
      //           max: 100
      //         }
      //       }
      //     ]
      //   }
      // }
    };
  },
  mounted() {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    console.log(this.options);
    this.renderChart(this.chartData, this.options);
  },
  watch: {
    options() {
      console.log(this.options);
      this.renderChart(this.chartData, this.options);
    }
  }
};
</script>
