<template>
  <div class="col-sm-6 col-md-4">
    <div class="card bg-info">
      <div class="card-header">
        <h3 class="card-title">
          {{ stock.name }}
          <small>
            (Price: {{ stock.price }} | Quantity: {{ stock.quantity }})
          </small>
        </h3>
      </div>
      <div class="card-body bg-light">
        <div class="float-left">
          <input
            type="number"
            class="form-control"
            placeholder="Quantity"
            v-model="quantity"
          />
        </div>
        <div class="float-right">
          <button
            class="btn btn-success"
            @click="sellStock"
            :disabled="quantity <= 0"
          >
            Sell
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0
    };
  },
  methods: {
    ...mapActions({
      placeSellOrder: 'sellStock'
    }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.placeSellOrder(order);
      this.quantity = 0;
    }
  }
};
</script>

<style></style>
