import { Bar } from 'vue-chartjs'
import database from '../../firebase.js';

export default {
    extends: Bar,
    
    data: function() {
        return {
            datacollection: {
                labels: [],
                datasets: [{
                    label: "Total Quantity",
                    backgroundColor: ['blue', 'purple', 'green', 'pink', 'red', 'yellow'],
                    data: []
                }]
            },
            options: {
                legend: { 
                    display: false 
                },
                title: {
                  display: true,
                  text: 'Total Number of Each Dish'
                },
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        ticks: {
                            min: 0
                        }
                    }]
                }
            }
        }
    },

    methods :{
        fetchItems: function() {
            let totalData = {};
            database.collection('menu').get().then(querySnapShot => {
                querySnapShot.forEach(doc => {
                    this.datacollection.labels.push(doc.data()["name"]);
                    totalData[doc.data()["name"]] = 0;
                })
            })
            database.collection('orders').get().then(querySnapShot => {
                querySnapShot.forEach(doc => {
                    for (var dishName in totalData) {
                        totalData[dishName] += doc.data()[dishName];
                    }
                })
                for (var qty in totalData) {
                    this.datacollection.datasets[0].data.push(totalData[qty])
                }
                this.renderChart(this.datacollection, this.options)
            })
        }
    },

    created() {
        this.fetchItems();
    }
}