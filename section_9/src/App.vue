<template>
  <app-quote>
    <h2>{{ quoteTitle }}</h2>
    <p>A wonderful quote</p>
  </app-quote>
</template>

<script>
import Quote from './components/Quote.vue';
export default {
  data: function() {
    return {
      quoteTitle: 'The Quote'
    };
  },
  components: {
    appQuote: Quote
  }
};
</script>

<style>
</style>
