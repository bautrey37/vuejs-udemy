<template>
  <div class="col-sm-6 col-md-4">
    <div class="card bg-success">
      <div class="card-header">
        <h3 class="card-title">
          {{ stock.name }}
          <small>(Price: {{ stock.price | currency }})</small>
        </h3>
      </div>
      <div class="card-body bg-light">
        <div class="float-left">
          <input
            type="number"
            class="form-control"
            placeholder="Quantity"
            v-model="quantity"
            :class="{ danger: insufficientFunds }"
          />
        </div>
        <div class="float-right">
          <!-- Does not disable on non-integers; !Number.isInteger(quantity)  because type is not number-->
          <button
            class="btn btn-success"
            @click="buyStock"
            :disabled="insufficientFunds || quantity <= 0"
          >
            {{ insufficientFunds ? 'Insufficient Funds' : 'Buy' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds;
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.$store.dispatch('buyStock', order);
      this.quantity = 0;
    },
    disableButton() {}
  }
};
</script>

<style scoped>
.danger {
  border: 1px solid red;
}
</style>
