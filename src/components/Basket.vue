<template>
<div style="font-size: 24px">
    Menu:
    <ul>
        <li v-for="item in itemsSelected"  :key="item[0]">
            <p>{{item[0]}} x {{item[1]}}</p>
        </li>
    </ul>
    <button id="calTotalBtn" v-on:click="findTotal(); sendOrder()">Add Order</button>
    <p v-show="calTotal">Subtotal: ${{subTotal}}</p>
    <p v-show="calTotal">Grand Total: ${{findGrandTotal}}</p>
</div>
</template>

<script>
import database from '../firebase.js'
export default {
    data() {
        return {
            calTotal: false,
            subTotal: 0
        }
    },
    props: {
        itemsSelected: {
            type: Array
        }
    },
    methods: {
        findTotal: function() {
            this.calTotal = true;
            var newSubTotal = 0;   
            var currItem;  
            for (let i = 0; i < this.itemsSelected.length; i++) {
                currItem = this.itemsSelected[i];
                newSubTotal += currItem[2] * currItem[1];
            }
            this.subTotal = newSubTotal;
        },
        sendOrder: function() {
            var order = {
                "Prawn omelette": 0,
                "Dry Beef Hor Fun": 0,
                "Sambal KangKung": 0,
                "Pork Fried Rice": 0,
                "Mapo Tofu": 0,
                "Cereal Prawn": 0
            }
            for (let i = 0; i < this.itemsSelected.length; i++) {
                var currItem = this.itemsSelected[i];
                var name = currItem[0];
                var qty = currItem[1];
                order[name]= qty;
            }
            database.collection('orders').add(order).then(() => {location.reload()});
        }
    }, 
    computed: {
        findGrandTotal: function() {
            var grandTotal = this.subTotal * 1.07;
            return grandTotal.toFixed(2);
        }
    }
}
</script>

<style scoped>
#calTotalBtn {
    font-family: garamond;
    font-size: 24px;
    background-color: #6EC0F0;
    text-align: center;
    border-radius: 8px;
    height: 40px;
    font-weight: bold;
}
</style>