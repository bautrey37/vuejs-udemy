<template>
  <div class="col-xs-12 col-sm-6">
    <p>Server Details are currently not updated</p>
    <button @click="resetStatus">Update Status</button>
  </div>
</template>

<script>
export default {
  methods: {
    resetStatus() {
      this.$emit('resetStatus', 'Normal');
    },
  },
};
</script>

<style></style>
