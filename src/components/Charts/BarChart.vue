<template>
    <div>
        <h1>Bar Chart</h1>
        <bar-chart></bar-chart>
    </div> 
</template>

<script>
import barchartjs from "./BarChart.js";
export default {
    components: {
        'bar-chart': barchartjs
    }
}
</script>

<style scoped>
h1 {
    text-align: center;
    font-size: 70px;
    font-family: Helvetica;
    background-color: #FABD99;
    padding: 20px;
}
</style>
