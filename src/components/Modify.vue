<template>
    <div>
        <p v-for="(val, key, index) in datapacket" :key="index">
            {{key}}: {{val}} 
            <br><br>
            <input v-bind:id="index" placeholder="0" type="number" min="0">
        </p> 
        <button v-on:click="updateOrder">Update Order</button>
    </div>
</template>

<script>
import database from '../firebase.js'
export default {
    data() {
        return {
            datapacket: {},
        }
    },
    methods: {
        fetchItems: function() { 
            var id = this.$route.params.docId;
            database.collection('orders').doc(id).get().then(doc => {
                this.datapacket = doc.data();
            });
        },
        updateOrder: function() {
            var newOrder = Object.assign({}, this.datapacket);
            var id = 0;
            for (var key in newOrder) {
                var newQty = document.getElementById(id).value;
                newOrder[key] = Number(newQty);
                id += 1;
            }
            database.collection('orders').doc(this.$route.params.docId).set(newOrder).then(() => {this.$router.push({ path: 'orders' })});
        }
    },
    created() {
        this.fetchItems();
    }
}
</script>

<style scoped>
button {
  width: 150px;
  height: 40px;
  background-color: #f7cac9;
  border-radius: 10px;
  border-width: 1px;
  font-size: 20px
}
</style> 