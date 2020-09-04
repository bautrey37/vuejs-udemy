<template>
  <div>
    <app-stock
      v-for="stock in stocks"
      :key="stock.id"
      :stock="stock"
    ></app-stock>
  </div>
</template>

<script>
import Stock from '../components/stocks/Stock.vue';

export default {
  components: {
    appStock: Stock
  },
  computed: {
    stocks() {
      console.log(this.$store.getters.stocks);
      return this.$store.getters.stocks;
    }
  }
};
</script>

<style></style>
