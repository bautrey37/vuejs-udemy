<template>
  <div class="col-xs-12 col-sm-6">
    <div v-if="!server">
      <p>Please select a server</p>
    </div>

    <div v-else>
      <p>Server #{{ server.id }} selected, Status: {{ server.status }}</p>
      <hr />
      <button @click="resetStatus">Update Status</button>
    </div>
  </div>
</template>

<script>
import { serverBus } from '../../main';

export default {
  data: function () {
    return {
      server: null,
    };
  },
  created() {
    serverBus.$on('serverSelected', (server) => {
      this.server = server;
    });
  },
  methods: {
    resetStatus() {
      this.server.status = 'Normal';
    },
  },
};
</script>

<style></style>
