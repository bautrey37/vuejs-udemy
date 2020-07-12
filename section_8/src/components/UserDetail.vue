<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{ switchName() }}</p>
    <button @click="resetName">Reset Name</button>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: false,
      default: 'autrey',
    },
  },
  methods: {
    switchName() {
      return this.name.split('').reverse().join('');
    },
    resetName() {
      this.name = 'brandon';
      this.$emit('nameWasReset', this.name);
    },
  },
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
