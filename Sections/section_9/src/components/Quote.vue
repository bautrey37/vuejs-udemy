<template>
  <div>
    <div class="title">
      <slot name="title"></slot>
      <span style="color: #ccc">
        <slot name="subTitle">The Subtitle</slot>
      </span>
    </div>
    <hr />
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['quote']
};
</script>

<style scoped>
div {
  border: 1px solid #ccc;
  box-shadow: 1px 1px 2px;
  padding: 30px;
  margin: 30px auto;
  text-align: center;
}

.title {
  font-style: italic;
}

h2 {
  color: red;
}
</style>
