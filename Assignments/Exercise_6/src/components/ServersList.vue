<template>
  <div>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
          <li class="list-group-item" v-for="index in 5" :key="index">
            <app-server-index></app-server-index>
          </li>
        </ul>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-server-status></app-server-status>
      </div>
    </div>
  </div>
</template>

<script>
import ServerIndex from './ServerIndex.vue';
import ServerStatus from './ServerStatus.vue';
export default {
  components: {
    'app-server-index': ServerIndex,
    'app-server-status': ServerStatus
  }
};
</script>

<style scoped>
div {
  border: 1px solid blue;
}
</style>
