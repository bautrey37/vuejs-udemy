<template>
  <div>
    <input v-model="filterText" />
    <ul>
      <li v-for="fruit in filteredFruits" :key="fruit">{{ fruit }}</li>
    </ul>
  </div>
</template>

<script>
import { fruitMixin } from './FruitMixin';

export default {
  mixins: [fruitMixin],
  created() {
    console.log('inside List created hook');
  },
};
</script>

<style></style>
