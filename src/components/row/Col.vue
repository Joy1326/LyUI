<template>
  <div
    :style="{flex:flex}"
    class="ly-col-wrap"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "LyCol",
  props: {
    flex: {
      type: [String, Number],
      default: "auto"
    }
  }
};
</script>
<style scoped>
.ly-col-wrap{
    display: flex;
}
</style>