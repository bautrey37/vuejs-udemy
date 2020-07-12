<template>
  <p>Server #{{ index }} - Status: {{ status }}</p>
</template>

<script>
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
};
</script>

<style></style>
