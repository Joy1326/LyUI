<template>
  <svg
    v-if="type"
    class="ly-icon"
    aria-hidden="true"
    @click="clickHandler"
  >
    <use
      v-bind="$attrs"
      :xlink:href="'#'+type"
    ></use>
  </svg>
</template>
<script>
export default {
  name: "LyIcon",
  props: {
    type: {
      type: String,
      default: ""
    }
  },
  methods: {
    clickHandler(e) {
      this.$emit("click", e);
    }
  }
};
</script>
<style scoped>
.ly-icon {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  fill: currentColor;
  overflow: hidden;
}
</style>

