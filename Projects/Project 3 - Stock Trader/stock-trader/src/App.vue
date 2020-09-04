<template>
  <div id="container">
    <app-header></app-header>
    <div class="row">
      <div class="col-md-12">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Header from './views/Header.vue';

export default {
  components: {
    appHeader: Header
  }
};
</script>

<style>
#container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  padding: 30px;
}
</style>
