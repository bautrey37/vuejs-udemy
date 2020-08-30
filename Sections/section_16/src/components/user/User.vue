<template>
  <div>
    <h1>The User Page</h1>
    <p>Loaded ID: {{ id }}</p>
    <button @click="navigateToHome" class="btn btn-primary">Go to home</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  // in version 2.2, you can also bind your route params to props of the target components. This eliminates the need to watching the route
  watch: {
    $route(to, from) {
      this.id = to.params.id;
    },
  },
  methods: {
    navigateToHome() {
      this.$router.push('/');
    },
  },
};
</script>
