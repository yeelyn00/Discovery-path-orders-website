<template>
    <div>
        <button v-on:click="decrease">-</button>
        <span id="counter">{{counter}}</span>
        <button v-on:click="increase">+</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        increase: function() {
            if (this.counter == 10) {
                alert("You cannot buy more than 10 items.");
            } else {
                this.counter += 1;
            }
            this.$emit('counter', this.item, this.counter);
        },
        decrease: function() {
            if (this.counter > 0) {
                this.counter -= 1;
            }
            this.$emit('counter', this.item, this.counter);
        }
    },
    props: {
        item: {
            type: Object
        }
    }
}
</script>

<style scoped>
button {
    font-family: Arial;
    font-size: 30px;
    text-align: center;
    background-color: #F7B4E1;
    border-radius: 8px;
    width: 50px;
    height: 50px
}
#counter {
    font-family: 'Times New Roman';
    font-size: 30px;
    padding: 10px
}
</style>