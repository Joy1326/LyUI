<template>
  <div class="ly-row-wrap">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "LyRow"
};
</script>
<style scoped>
.ly-row-wrap {
  display: flex;
  flex-direction: row;
}
</style>