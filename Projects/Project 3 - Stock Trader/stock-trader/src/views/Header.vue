<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link to="/" class="navbar-brand">Stock Trader</router-link>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <router-link
            to="/portfolio"
            class="nav-item"
            active-class="active"
            tag="li"
          >
            <a class="nav-link">Portfolio</a>
          </router-link>
          <router-link
            to="/stocks"
            class="nav-item"
            active-class="active"
            tag="li"
          >
            <a class="nav-link">Stocks</a>
          </router-link>
        </ul>

        <ul class="nav navbar-nav navbar-right">
          <li class="nav-item">
            <a class="nav-link" href="#" @click="endDay">End Day</a>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              >Save & Load</a
            >
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Save Data</a>
              <a class="dropdown-item" href="#">Load Data</a>
            </div>
          </li>
        </ul>
        <strong class="navbar-text navbar-right">
          Funds: {{ funds | currency }}
        </strong>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions(['randomizeStocks']),
    endDay() {
      this.randomizeStocks();
    }
  }
};
</script>

<style></style>
