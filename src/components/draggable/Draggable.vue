<template>
  <div
    class="ly-draggable-wrap"
    v-draggable="draggable"
    :style="wrapStyle"
  >
    <slot></slot>
  </div>
</template>
<script>
import draggableMixin from "../mixins/draggable";
export default {
  mixins: [draggableMixin],
  props: {
    disabled: {
      type: Boolean,
      default: true
    },
    handle: {
      type: Function
    },
    cursor: {
      type: String
    }
  },
  data(){
    return {
      draggable:{
        handle:this.handle
      }
    }
  },
  computed: {
    wrapStyle() {
      return {
        cursor: this.cursor
          ? this.cursor
          : this.disabled
          ? this.handle
            ? "auto"
            : "move"
          : "auto"
      };
    }
  }
};
</script>
<style scoped>
.ly-draggable-wrap {
  position: absolute;
  border: 1px solid #90adb9;
  width: 100%;
  border-radius: 4px;
  z-index: 999;
}
</style>


