<template>
    <div>
        <h1>Line Chart</h1>
        <line-chart></line-chart>
    </div> 
</template>

<script>
import apilinechart from "./CallAPI.js";
export default {
  components: {
    'line-chart' : apilinechart
  }
};
</script>

<style scoped>
h1 {
    text-align: center;
    font-size: 70px;
    font-family: Helvetica;
    background-color: #FABD99;
    padding: 20px;
    margin-top: 60px
}
</style>