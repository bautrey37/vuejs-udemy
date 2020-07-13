<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <br />
        <button
          class="btn btn-primary"
          @click="changeComponent('appBlue', 'blue content')"
        >
          Load Blue Template
        </button>
        <button
          class="btn btn-success"
          @click="changeComponent('appGreen', 'green content')"
        >
          Load Green Template
        </button>
        <button
          class="btn btn-danger"
          @click="changeComponent('appRed', 'red content')"
        >
          Load Red Template
        </button>
        <hr />
        <component :is="selectedComponent">
          <p slot="content">{{ content }}</p>
        </component>
        <!-- <app-blue></app-blue>
        <app-green></app-green>
        <app-red></app-red> -->
      </div>
    </div>
  </div>
</template>

<script>
import Blue from './components/Blue.vue';
import Green from './components/Green.vue';
import Red from './components/Red.vue';

export default {
  data: function () {
    return {
      selectedComponent: null,
      content: null,
    };
  },
  components: {
    appBlue: Blue,
    appGreen: Green,
    appRed: Red,
  },
  methods: {
    changeComponent(name, content) {
      this.selectedComponent = name;
      this.content = content;
      console.log(name);
    },
  },
};
</script>

<style></style>
