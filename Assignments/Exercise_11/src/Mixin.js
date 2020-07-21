export const mixin = {
  data() {
    return {
      ex1: 'test',
      ex2: 'example',
    };
  },
  computed: {
    reserveString() {
      return this.ex1.split('').reverse().join('');
    },
    appendCount() {
      return `${this.ex2} (${this.ex2.length})`;
    },
  },
  created() {
    console.log('local mixin');
  },
};
