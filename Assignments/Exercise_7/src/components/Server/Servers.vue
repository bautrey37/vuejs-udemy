<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <server-index
        v-for="server in servers"
        :key="server"
        :server="server"
      ></server-index>
    </ul>
  </div>
</template>

<script>
import ServerIndex from './ServerIndex.vue';

export default {
  data: function () {
    return {
      servers: [
        { id: 1, status: 'Normal' },
        { id: 2, status: 'Critcal' },
        { id: 3, status: 'Unknown' },
        { id: 4, status: 'Abyssmal' },
        { id: 5, status: 'Normal' },
      ],
    };
  },
  components: {
    ServerIndex,
  },
  methods: {},
};
</script>

<style></style>
