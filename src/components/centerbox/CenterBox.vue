<template>
  <div
    class="ly-center-wrap"
    :style="wrapStyle"
  >
    <div class="ly-center-container">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    fitHeight: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    wrapStyle() {
      return {
        height: this.fitHeight ? "100%" : "auto"
      };
    }
  }
};
</script>


<style scoped>
.ly-center-wrap {
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  font-size: 0;
  white-space: nowrap;
  /* overflow: auto; */
}
.ly-center-wrap:after {
  content: "";
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}
.ly-center-container {
  display: inline-block;
  vertical-align: middle;
  text-align: left;
  font-size: 14px;
  white-space: normal;
}
</style>

