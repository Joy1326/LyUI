<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "LyCheckBoxGroup",
  props: {
    value: [Array, Boolean, String, Number]
  },
  provide() {
    return {
      lyCheckBoxGroup: this
    };
  },
  created() {
    this.$on("handleChange", value => {
      //监听自身的handleChange事件
      this.$emit("change", value); //触发自身的change事件
    });
  }
};
</script>