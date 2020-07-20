<template>
  <div>
    <button @click="selectedComponent = 'appQuote'">Quote</button>
    <button @click="selectedComponent = 'appAuthor'">Author</button>
    <button @click="selectedComponent = 'appNew'">New</button>
    <hr />
    <p>{{selectedComponent}}</p>

    <keep-alive>
      <component :is="selectedComponent">
        <p>Default Content</p>
      </component>
    </keep-alive>

    <app-quote>
      <h2 slot="title">{{ quoteTitle }}</h2>
      <p>A wonderful quote</p>
    </app-quote>
  </div>
</template>

<script>
import Quote from './components/Quote.vue';
import New from './components/New.vue';
import Author from './components/Author.vue';
export default {
  data: function() {
    return {
      quoteTitle: 'The Quote',
      selectedComponent: 'appQuote'
    };
  },
  components: {
    appQuote: Quote,
    appAuthor: Author,
    appNew: New
  }
};
</script>

<style>
/* Also works with the parent to style inside of the child component using slot */
/* h2 {
  color: red;
} */
</style>
