import { Line } from 'vue-chartjs'
import axios from 'axios'

export default {
  extends: Line,
  data: function () {
    return {
        datacollection: {
            labels: [],
            datasets: [{ 
                data: [],
                label: "west",
                fill: false,
                borderColor: "red"
            }, {
                data: [],
                label: "national",
                fill: false,
                borderColor: "blue"
            }, {
                data: [],
                label: "east",
                fill: false,
                borderColor: "darkblue"
            }, {
                data: [],
                label: "central",
                fill: false,
                borderColor: "lightblue"
            }, {
                data: [],
                label: "south",
                fill: false,
                borderColor: "purple"
            }, {
                data: [],
                label: "north",
                fill: false,
                borderColor: "lightgreen"
            }]
        },
        options: {
            title: {
              display: true,
              text: 'PSI Twenty Four Hourly (By Region)'
            },
            responsive: true,
            maintainAspectRatio: false
        }
    }
  },
  methods: {
    fetchItems: function () {
        axios.get('https://api.data.gov.sg/v1/environment/psi?date=2021-02-23').then(response => {
        var result = response.data.items;
            for (var data of result) {
                var timestp = data["timestamp"];
                this.datacollection.labels.push(timestp);
                var psi = data["readings"]["psi_twenty_four_hourly"];
                this.datacollection.datasets[0].data.push(psi["west"]);
                this.datacollection.datasets[1].data.push(psi["national"]);
                this.datacollection.datasets[2].data.push(psi["east"]);
                this.datacollection.datasets[3].data.push(psi["central"]);
                this.datacollection.datasets[4].data.push(psi["south"]);
                this.datacollection.datasets[5].data.push(psi["north"]);
            }
            this.renderChart(this.datacollection, this.options)
        })
    }
  },
  created () {
    this.fetchItems()
  }
}