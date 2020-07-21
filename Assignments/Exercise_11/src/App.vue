<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <!-- Exercise 1) -->
        <!-- Build a local Filter which reverses the Text it is applied on -->
        <input type="text" name="ex1" id v-model="ex1" />
        <p>{{ ex1 | reverse }}</p>

        <!-- Exercise 2 -->
        <!-- Build a global Filter which counts the length of a word and it appends it -->
        <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
        <input type="text" name="ex2" id v-model="ex2" />
        <p>{{ ex2 | count }}</p>

        <!-- Exercise 3 -->
        <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
        <p>{{ reserveString }}</p>
        <p>{{ appendCount }}</p>

        <!-- Exercise 4 -->
        <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ex1: 'test',
      ex2: 'example'
    };
  },
  filters: {
    reverse(value) {
      return value
        .split('')
        .reverse()
        .join('');
    },
    count(value) {
      return `${value} (${value.length})`;
    }
  },
  computed: {
    reserveString() {
      return this.ex1
        .split('')
        .reverse()
        .join('');
    },
    appendCount() {
      return `${this.ex2} (${this.ex2.length})`;
    }
  }
};
</script>

<style></style>
