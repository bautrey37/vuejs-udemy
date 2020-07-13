<template>
  <li class="list-group-item" style="cursor: pointer;" @click="serverSelected">
    <p>Server #{{ server.id }} - Status: {{ server.status }}</p>
  </li>
</template>

<script>
import { serverBus } from '../../main';

export default {
  props: {
    server: Object,
  },
  methods: {
    serverSelected() {
      serverBus.$emit('serverSelected', this.server);
    },
  },
};
</script>

<style></style>
