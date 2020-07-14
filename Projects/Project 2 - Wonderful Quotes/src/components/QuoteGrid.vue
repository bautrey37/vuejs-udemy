<template>
  <div class="row">
    <quote
      v-for="(quote, index) in quotes"
      :key="quote"
      @click.native="deleteQuote(index)"
    >
      {{ quote }}
    </quote>
  </div>
</template>

<script>
import Quote from './Quote.vue';

export default {
  props: ['quotes'],
  methods: {
    deleteQuote(index) {
      this.$emit('quoteDeleted', index);
    },
  },
  components: {
    Quote,
  },
};
</script>

<style></style>
