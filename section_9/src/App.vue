<template>
  <app-quote>
    <h2 slot="title">{{ quoteTitle }}</h2>
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
/* Also works with the parent to style inside of the child component using slot */
/* h2 {
  color: red;
} */
</style>
