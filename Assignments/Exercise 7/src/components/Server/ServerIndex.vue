<template>
  <p>Server #{{ index }} - Status: {{ status }}</p>
</template>

<script>
import { eventBus } from '../../main';

export default {
  props: {
    index: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  created() {
    eventBus.$on('resetStatus', (status) => {
      this.status = status;
    });
  },
};
</script>

<style></style>
